<template>
  <div>
    <v-row>
      <v-col cols="7">
        <v-autocomplete
          v-model="model"
          :items="items"
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
              <v-icon left> mdi-account </v-icon>
              <span v-text="item.name"></span>
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
              <v-list-item-title v-text="item.name"></v-list-item-title>
              <v-list-item-subtitle>
                {{ item.company_name }} | {{ item.work_number }}
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

        <v-divider></v-divider>

        <v-simple-table height>
          <template v-slot:default>
            <thead>
              <tr>
                <th></th>
                <th class="text-left">Sku</th>
                <th class="text-left">Height</th>
                <th class="text-left">Width</th>
                <th class="text-left">Price</th>
                <th class="text-left">Qty</th>
                <th class="text-left">Total</th>
                <th class="text-left"></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in cart" :key="item.id">
                <td>
                  <v-btn
                    class="red--text"
                    icon
                    @click="removeProductFromCart(item.product)"
                  >
                    <v-icon>mdi-delete</v-icon>
                  </v-btn>
                </td>
                <td>
                  {{ item.product.sku }}
                </td>
                <td>
                  <v-tooltip top>
                    <template v-slot:activator="{ on, attrs }">
                      <input
                        v-if="item.product.enable_stock === 0"
                        class="numinput small1"
                        type="number"
                        v-model="item.product.height"
                        v-bind="attrs"
                        v-on="on"
                        @change="changeHeight(item)"
                      />
                    </template>
                    <span>input data in inches</span>
                  </v-tooltip>
                </td>
                <td>
                  <v-tooltip top>
                    <template v-slot:activator="{ on, attrs }">
                      <input
                        v-if="item.product.enable_stock === 0"
                        class="numinput small1"
                        type="number"
                        v-model="item.product.width"
                        v-bind="attrs"
                        v-on="on"
                        @change="changeWidth(item)"
                      />
                    </template>
                    <span>input data in inches</span>
                  </v-tooltip>
                </td>
                <td>
                  <v-tooltip top v-if="item.product.enable_stock === 0">
                    <template v-slot:activator="{ on, attrs }">
                      <input
                        class="numinput small1"
                        type="number"
                        v-model="item.product.selling_price"
                        v-bind="attrs"
                        v-on="on"
                      />
                    </template>
                    <span>price / foot</span>
                  </v-tooltip>
                  <span v-else>
                    {{ item.product.selling_price }}
                  </span>
                </td>
                <td>
                  {{ item.quantity }}
                </td>
                <td allign="right">
                  <span v-if="item.product.enable_stock === 0">
                    {{
                      (
                        ((item.product.height * item.product.width) / 12) *
                        item.product.selling_price *
                        item.quantity
                      ).toFixed(0)
                    }}
                  </span>
                  <span v-else>
                    {{
                      (item.product.selling_price * item.quantity).toFixed(0)
                    }}
                  </span>
                </td>
                <td>
                  <v-btn
                    class="green--text"
                    icon
                    @click="increaseProductQty(item.product)"
                  >
                    <v-icon>mdi-plus</v-icon>
                  </v-btn>
                  <v-btn
                    class="red--text"
                    icon
                    v-if="item.quantity > 1"
                    @click="decreaseProductQty(item.product)"
                  >
                    <v-icon>mdi-minus</v-icon>
                  </v-btn>
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
        <v-divider></v-divider>
        <v-simple-table dense>
          <tbody>
            <tr>
              <td width="50%"></td>
              <td width="25%">Subtotal</td>
              <td width="25%">
                <input disabled class="numinput" v-model="cartTotalPrice" />
              </td>
            </tr>
            <tr>
              <td></td>
              <td>Discount</td>
              <td class="">
                <!-- <v-text-field height="1" outlined dense v-model="discount" type="number"></v-text-field> -->
                <input
                  class="numinput"
                  type="number"
                  v-model="invoiceData.discount"
                />
              </td>
            </tr>
            <tr>
              <td></td>
              <td>Total</td>
              <td>
                <input
                  disabled
                  class="numinput"
                  type="number"
                  v-model="total"
                />
              </td>
            </tr>
            <tr>
              <td>
                <!-- <select name="" id="" class="minimal numinput" v-model="invoiceData.doc_type">
                            <option value="Invoice">Invoice</option>
                            <option value="Quotation">Quotation</option>
                        </select> -->
              </td>
              <td>Amount Received</td>
              <td>
                <input
                  class="numinput"
                  type="number"
                  v-model="invoiceData.received_amt"
                />
              </td>
            </tr>
            <tr>
              <td></td>
              <td>Amount Due</td>
              <td>
                <input
                  disabled
                  class="numinput"
                  type="number"
                  v-model="amtDue"
                />
              </td>
            </tr>
          </tbody>
        </v-simple-table>
        <v-row class="mx-5">
          <v-col cols="8">
            <v-radio-group
              v-model="invoiceData.doc_type"
              mandatory
              row
              class="radio mt-1"
            >
              <v-radio label="Invoice" value="Invoice"></v-radio>
              <v-radio label="Quotation" value="Quotation"></v-radio>
            </v-radio-group>

            <v-switch
              v-model="use_slab"
              :label="`Slab: ${use_slab.toString()}`"
            ></v-switch>
          </v-col>
          <v-col cols="4">
            <v-btn
              class="mb-1"
              block
              color="primary"
              :loading="loading"
              @click="saveOrder"
              >Save</v-btn
            >
            <v-btn block color="error" @click="clearCartItems">Clear all</v-btn>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="5">
        <product-list :products="products" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
import ProductList from "../../components/ProductList.vue";
export default {
  components: {
    ProductList,
  },

  data: () => {
    return {
      snackbar: false,
      text: "",
      valid: true,
      dialog: false,
      dialog2: false,
      loading: false,
      slabs: [],
      use_slab: false,
      products: [],

      doc_types: ["Invoice", "Quotation"],
      invoiceData: {
        customer_id: "",
        sub_total: "",
        discount: "",
        received_amt: "",
        receivable_amt: "",
        doc_type: "",
      },

      isLoading: false,
      items: [],
      model: null,
      search: null,
      tab: null,
    };
  },

  methods: {
    removeProductFromCart(product) {
      this.$store.dispatch("cart/removeProductFromCart", product);
    },

    clearCartItems() {
      this.$store.dispatch("cart/clearCartItems");
    },

    decreaseProductQty(product) {
      this.$store.dispatch("cart/decreaseProductQty", product);
    },

    increaseProductQty(product) {
      this.$store.dispatch("cart/increaseProductQty", product);
    },

    saveOrder() {
      let orderData = {
        orderDetails: {
          customer_id: this.model,
          sub_total: this.cartTotalPrice,
          discount: this.invoiceData.discount,
          total: this.total,
          received_amt: this.invoiceData.received_amt,
          receivable_amt: this.amtDue,
          doc_type: this.invoiceData.doc_type,
        },
        orderedItems: this.cart,
      };

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

      axios.post("/api/order", orderData).then((res) => {
        //  this.$router.push(`/checkout/${res.data.id}`)
        this.clearCartItems();
        this.model = null;
        this.invoiceData.discount = null;
        this.invoiceData.received_amt = null;
        this.initialize();
      });
    },

    initialize() {
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

      axios.get("/api/products/all").then((res) => {
        this.products = res.data.data;
      });
    },

    changeHeight(item) {
      if (this.use_slab) {
        let height = item.product.height;
        this.slabs.forEach((slab) => {
          if (height >= slab.min && height <= slab.max) {
            this.$store.dispatch("cart/changeProductHeight", {
              product: item.product,
              height: slab.actual,
            });
          }
        });
      }
    },

    changeWidth(item) {
      if (this.use_slab) {
        let width = item.product.width;
        this.slabs.forEach((slab) => {
          if (width >= slab.min && width <= slab.max) {
            this.$store.dispatch("cart/changeProductWidth", {
              product: item.product,
              width: slab.actual,
            });
          }
        });
      }
    },
  },

  created() {
    this.initialize();

    axios.get("/api/slabs/all").then((res) => {
      this.slabs = res.data.data;
    });
  },

  computed: {
    ...mapState({
      cart: (state) => state.cart.cart,
    }),

    cartItemCount() {
      return this.$store.getters["cart/cartItemCount"];
    },

    cartTotalPrice() {
      return this.$store.getters["cart/cartTotalPrice"];
    },

    total() {
      return this.cartTotalPrice - this.invoiceData.discount;
    },

    amtDue() {
      return this.total - this.invoiceData.received_amt;
    },
  },

  watch: {
    model(val) {
      if (val != null) this.tab = 0;
      else this.tab = null;
    },
    search(val) {
      // Items have already been loaded
      if (this.items.length > 0) return;

      this.isLoading = true;

      // Lazily load input items
      // fetch('https://api.coingecko.com/api/v3/coins/list')
      //   .then(res => res.clone().json())
      //   .then(res => {
      //     this.items = res
      //   })
      //   .catch(err => {
      //     console.log(err)
      //   })
      //   .finally(() => (this.isLoading = false))

      // axios method
      axios
        .get("/api/customers/all")
        .then((res) => {
          this.items = res.data.data;
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

<style lang="scss">
.numinput {
  border: 1px solid lightgray;
  border-radius: 5px;
  padding: 3px;
  padding-left: 10px;
  margin-top: 5px;
  margin-bottom: 5px;
}
.numinput:focus {
  border: 1px solid lightgray;
}

.radio {
  height: 30px;
}

.small1 {
  width: 55px;
}
</style>
