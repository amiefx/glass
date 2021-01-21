<template>
  <v-container fluid fill-height>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="5">
        <h3 class="text-center">Adjust Quantity</h3>
        <v-form v-model="valid" method="post" @submit.prevent="submit">
          <v-card>
            <v-card-text>
              <v-autocomplete
                v-model="form.product_id"
                :items="products"
                :loading="isLoading"
                :search-input.sync="search"
                chips
                clearable
                hide-details
                hide-selected
                item-text="name"
                item-value="id"
                label="Search for a customer..."
                solo
              >
                <template v-slot:no-data>
                  <v-list-item>
                    <v-list-item-title>
                      Search for a
                      <strong>Customer</strong>
                    </v-list-item-title>
                  </v-list-item>
                </template>
                <template v-slot:selection="{ attr, on, item, selected }">
                  <v-chip
                    v-bind="attr"
                    :input-value="selected"
                    color="blue-grey"
                    class="white--text"
                    v-on="on"
                  >
                    <v-icon left> mdi-bag </v-icon>
                    <span v-text="item.sku"></span>
                  </v-chip>
                </template>
                <template v-slot:item="{ item }">
                  <v-list-item-avatar
                    color="indigo"
                    class="headline font-weight-light white--text"
                  >
                    <v-icon class="white--text">mdi-account</v-icon>
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title v-text="item.sku"></v-list-item-title>
                    <v-list-item-subtitle>
                      {{ item.name }} | {{ item.selling_price }}
                    </v-list-item-subtitle>
                  </v-list-item-content>
                  <v-list-item-action>
                    <span v-if="item.credit_limit > 0">
                      Credit limit:
                      <strong>
                        {{ item.credit_limit }}
                      </strong>
                    </span>
                    <span>
                      Receivable:
                      <strong>
                        {{ item.receivable }}
                      </strong>
                    </span>
                  </v-list-item-action>
                </template>
              </v-autocomplete>

              <v-text-field
                v-model="form.quantity"
                type="number"
                label="Quantity"
                name="quantity"
                required
              />
              <v-text-field v-model="form.price" type="number" label="Price" name="price" required />
            </v-card-text>
            <v-card-actions>
              <v-spacer />
              <v-btn
                v-if="!loading"
                color="primary"
                block
                :disabled="!valid"
                type="submit"
                >Save</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-form>
      </v-col>
    </v-row>

    <v-snackbar v-model="snackbar">
      {{ text }}
      <v-btn color="white" text @click="snackbar = false"> Close </v-btn>
    </v-snackbar>
  </v-container>
</template>

<script>
export default {
  layout: "admin",
  middleware: ["auth", "admin"],
  data: () => ({
    valid: true,
    form: {
      product_id: null,
      price: null,
      quantity: null,
    },
    text: "",
    loading: false,
    snackbar: false,
    valid: true,
    products: [],

    isLoading: false,
    search: null,
  }),

  create() {
    this.getProducts();
  },

  methods: {
    getProducts() {
      axios.get("/api/products/all").then((res) => {
        this.products = res.data.data;
      });
    },

    submit() {
      // Add a request interceptor
      axios.interceptors.request.use(
        (config) => {
          this.loading = true;
          return config;
        },
        (error) => {
          this.loading = false;
          return Promise.reject(error);
        }
      );

      // Add a response interceptor
      axios.interceptors.response.use(
        (response) => {
          this.loading = false;
          return response;
        },
        (error) => {
          this.loading = false;
          return Promise.reject(error);
        }
      );

      axios.post("/api/qtyadjustments", this.form).then((res) => {
        this.text = "Quantity adjusted successfully.";
        this.snackbar = true;
        this.form.product_id = null
        this.form.quantity = null
        this.form.price = null
      });
    },
  },

  watch: {
    search(val) {
      // Items have already been loaded
      if (this.products.length > 0) return;

      this.isLoading = true;

      // axios method
      axios
        .get("/api/products/all")
        .then((res) => {
          this.products = res.data.data;
          this.isLoading = false;
        })
        .catch((err) => {
          console.log(err);
          this.isLoading = false;
        });
    },
  },
};
</script>

<style>
.center {
  justify-content: center;
  align-items: center;
}
</style>
