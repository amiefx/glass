<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="business.data"
      :items-per-page="5"
      class="elevation-1"
      item-key="id"
      :loading="loading"
      @pagination="paginate"
      :options.sync="options"
      :server-items-length="business.total"
      loading-text="Loading.. Please Wait!"
    >
      <template v-slot:top>
        <v-toolbar flat color="">
          <v-toolbar-title>Company Information</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <v-dialog v-model="dialog" max-width="900px">
            <template v-slot:activator="{ on }">
              <v-btn color="primary" dark class="mb-2" v-on="on"
                >New Company {{ companyCount }}
              </v-btn>
              <!-- <v-btn color="error" dark class="mb-2 mr-2"  @click="deleteAll">Delete</v-btn> -->
            </template>
            <v-card>
              <v-card-title>
                <span class="headline">{{ formTitle }}</span>
              </v-card-title>

              <v-form
                v-model="valid"
                method="post"
                v-on:submit.stop.prevent="save"
              >
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col cols="12" md="6" lg="6">
                        <v-text-field
                          v-model="editedItem.name"
                          label="Name"
                          :rules="[rules.required, rules.min]"
                        ></v-text-field>
                        <v-text-field
                          v-model="editedItem.email"
                          label="Email"
                        ></v-text-field>
                        <v-text-field
                          v-model="editedItem.phone"
                          label="Phone"
                        ></v-text-field>
                        <v-text-field
                          v-model="editedItem.whatsapp"
                          label="Whatsapp"
                        ></v-text-field>
                        <v-text-field
                          v-model="editedItem.logo"
                          label="Logo"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" md="6" lg="6">
                        <v-text-field
                          v-model="editedItem.address"
                          label="Address"
                          :rules="[rules.required]"
                        ></v-text-field>
                        <v-text-field
                          v-model="editedItem.city"
                          label="City"
                          :rules="[rules.required]"
                        ></v-text-field>
                        <v-text-field
                          v-model="editedItem.country"
                          label="Country"
                          :rules="[rules.required]"
                        ></v-text-field>
                        <v-text-field
                          v-model="editedItem.zipcode"
                          label="Zip Code"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="primary" text @click="close">Cancel</v-btn>
                  <!-- <v-btn color="blue darken-1" type="submit" :disabled="!valid" @click.prevent="save" text @click="save">Save</v-btn> -->
                  <v-btn
                    color="primary"
                    type="submit"
                    :disabled="!valid"
                    @click.prevent="save"
                    >Save</v-btn
                  >
                </v-card-actions>
              </v-form>
            </v-card>
          </v-dialog>
        </v-toolbar>

        <v-text-field
          @input="searchIt"
          append-icon="mdi-search"
          label="Search"
          single-line
          hide-details
          class="mx-4"
        ></v-text-field>
      </template>
      <template v-slot:item.action="{ item }">
        <v-icon small class="mr-2" @click="editItem(item)"> mdi-pencil </v-icon>
        <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
      </template>
      <template v-slot:no-data>
        <v-btn color="primary" @click="initialize">Reset</v-btn>
      </template>

      <template v-slot:item.is_active="{ item }">
        <v-edit-dialog
          large
          block
          persistent
          :return-value.sync="item.is_active"
          @save="updateStatus(item)"
        >
          <v-chip :color="getColor(item.is_active)" dark>
            <span v-if="item.is_active == 1">Active</span>
            <span v-else>In Active</span>
          </v-chip>
          <template v-slot:input>
            <v-select
              v-model="item.is_active"
              :items="status"
              :item-text="status.text"
              :item-value="status.value"
              label="Select Status"
            ></v-select>
          </template>
        </v-edit-dialog>
      </template>
    </v-data-table>

    <v-snackbar v-model="snackbar">
      {{ text }}
      <v-btn color="white" text @click="snackbar = false"> Close </v-btn>
    </v-snackbar>
  </div>
</template>

<script>
export default {
  layout: "admin",
  middleware: ["auth", "admin"],
  data: () => ({
    valid: true,
    dialog: false,
    loading: false,
    snackbar: false,
    text: "",
    success: "",
    error: "",
    options: {
      sortBy: ["name"],
      sortDesc: [true],
    },
    rules: {
      required: (v) => !!v || "This Field is Required",
      min: (v) => v.length >= 5 || "Minimum 5 Chracters Required",
      validEmail: (v) => /.+@.+\..+/.test(v) || "Email must be valid",
    },
    headers: [
      // { text: '#', value: 'id' },
      { text: "Logo", value: "logo" },
      { text: "Name", value: "name" },
      { text: "Email", value: "email" },
      { text: "Phone", value: "phone" },
      { text: "WhatsApp", value: "whatsapp" },
      { text: "Address", value: "address" },
      { text: "City", value: "city" },
      { text: "Country", value: "country" },
      { text: "Postal Code", value: "zipcode" },
      { text: "Actions", value: "action", sortable: false },
    ],
    status: [
      { text: "Active", value: true },
      { text: "In Active", value: false },
    ],
    types: ["business", "service provider"],
    business: [],
    editedIndex: -1,
    editedItem: {
      id: "",
      name: "",
      address: "",
      phone: "",
      whatsapp: "",
      email: "",
      country: "",
      city: "",
      zipcode: "",
      logo: "",
    },
    defaultItem: {
      id: "",
      name: "",
      address: "",
      phone: "",
      whatsapp: "",
      email: "",
      country: "",
      city: "",
      zipcode: "",
      logo: "",
    },
    companyCount: false
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
    },

    newCompany() {
      setTimeout(function () {
        if (this.business.data.length == 0) {
          return true;
        }
      }, 9000);
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
  },

  created() {
    this.initialize();
  },

  methods: {

    searchIt(e) {
      if (e.length > 3) {
        axios
          .get(`/api/business/${e}`)
          .then((res) => (this.business = res.data.business))
          .catch((err) => console.dir(err.response));
      }
      if (e.length <= 0) {
        const sortBy =
          this.options.sortBy.length == 0 ? "name" : this.options.sortBy[0];
        const orderBy =
          this.options.sortDesc.length > 0 || this.options.sortDesc[0]
            ? "asc"
            : "desc";
        axios
          .get(`/api/business?page=${e.page}`, {
            params: {
              per_page: e.itemsPerPage,
              sort_by: sortBy,
              order_by: orderBy,
            },
          })
          .then((res) => {
            this.business = res.data.business;
          })
          .catch((err) => console.dir(err.response));
      }
    },
    paginate(e) {
      const sortBy =
        this.options.sortBy.length == 0 ? "name" : this.options.sortBy[0];
      const orderBy =
        this.options.sortDesc.length > 0 || this.options.sortDesc[0]
          ? "asc"
          : "desc";
      axios
        .get(`/api/business?page=${e.page}`, {
          params: {
            per_page: e.itemsPerPage,
            sort_by: sortBy,
            order_by: orderBy,
          },
        })
        .then((res) => {
          this.business = res.data.business;
        //  this.companyCount = res.data.business.count;
          if (res.data.business.count == 1) {
             return this.companyCount = true;
          }
        })
        .catch((err) => {
          //----
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
    },

    editItem(item) {
      this.editedIndex = this.business.data.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      const index = this.business.data.indexOf(item);
      let decide = confirm("Are you sure you want to delete this item?");
      if (decide) {
        axios
          .delete("/api/business/" + item.id)
          .then((res) => {
            this.snackbar = true;
            this.business.data.splice(index, 1);
          })
          .catch((err) => {
            console.log(err.response);
            this.text = "Error Deleting Record";
            this.snackbar = true;
          });
      }
    },

    close() {
      this.dialog = false;
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      }, 300);
    },

    save() {
      if (this.editedIndex > -1) {
        const index = this.editedIndex;
        axios
          .put("/api/business/" + this.editedItem.id, this.editedItem)
          //  .then(res => Object.assign(this.business[this.editedIndex], this.editedItem))
          .then((res) => {
            console.log(res);
            this.text = "Record Updated Successfully!";
            this.snackbar = true;
            Object.assign(this.business.data[index], res.data.business);
          })
          .catch((err) => {
            console.log(err.response);
            this.text = "Error Updating Record";
            this.snackbar = true;
          });
        //  Object.assign(this.business.data[this.editedIndex], this.editedItem)
      } else {
        axios
          .post("/api/business", this.editedItem)
          .then((res) => {
            this.text = "Record Added Successfully!";
            this.snackbar = true;
            this.business.data.push(res.data.business);
          })
          .catch((err) => {
            console.dir(err);
            this.text = "Error Inserting Record";
            this.snackbar = true;
          });
      }
      this.close();
    },

    getColor(status) {
      if (status == 0) return "red";
      else return "green";
    },
  },
};
</script>
