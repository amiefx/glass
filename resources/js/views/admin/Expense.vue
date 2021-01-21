<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="expenses.data"
      :items-per-page="5"
      class="elevation-1"
      item-key="id"
      :loading="loading"
      @pagination="paginate"
      :options.sync="options"
      :server-items-length="expenses.total"
      loading-text="Loading.. Please Wait!"
      :footer-props="{
        itemsPerPageOptions: [5, 10, 15],
        'show-current-page': true,
        'show-first-last-page': true,
      }"
    >
      <template v-slot:top>
        <v-toolbar flat color="">
          <v-toolbar-title>Expenses</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <v-dialog v-model="dialog" max-width="500px">
            <template v-slot:activator="{ on }">
              <v-btn color="primary" dark class="mb-2" v-on="on"
                >New Expense</v-btn
              >
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
                      <v-col cols="12">
                        <v-menu
                          v-model="menu2"
                          :close-on-content-click="false"
                          :nudge-right="40"
                          transition="scale-transition"
                          offset-y
                          min-width="auto"
                        >
                          <template v-slot:activator="{ on, attrs }">
                            <v-text-field
                              v-model="editedItem.date"
                              label="For the Date/Month of:"
                              prepend-icon="mdi-calendar"
                              readonly
                              v-bind="attrs"
                              v-on="on"
                            ></v-text-field>
                          </template>
                          <v-date-picker
                            v-model="editedItem.date"
                            @input="menu2 = false"
                          ></v-date-picker>
                        </v-menu>
                        <v-select
                          :items="expenseitems"
                          item-text="name"
                          item-value="id"
                          label="Expenses"
                          v-model="editedItem.expense_item_id"
                          :rules="[rules.required]"
                        ></v-select>
                        <v-text-field
                          v-model="editedItem.total"
                          label="Amount"
                          :rules="[rules.required]"
                          type="number"
                        ></v-text-field>
                        <v-radio-group
                          v-model="editedItem.pmt_method"
                          mandatory
                          row
                          class="radio mt-1"
                        >
                          <v-radio label="Cash" value="Cash"></v-radio>
                          <v-radio label="Bank" value="Bank"></v-radio>
                        </v-radio-group>
                        <v-text-field
                          v-if="editedItem.pmt_method == 'Bank'"
                          v-model="editedItem.details"
                          label="Detials"
                        ></v-text-field>
                        <v-text-field
                          v-model="editedItem.note"
                          label="Notes"
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

      <!-- <template v-slot:item.is_active = "{ item }">
        <v-edit-dialog large block persistent :return-value.sync="item.is_active" @save="updateStatus(item)">

            <v-chip :color="getColor(item.is_active)" dark>
                <span v-if="item.is_active == 1">Active</span>
                <span v-else>In Active</span>
            </v-chip>
            <template v-slot:input>
                <v-select v-model="item.is_active" :items="status" :item-text="status.text" :item-value="status.value" label="Select Status"></v-select>
            </template>
        </v-edit-dialog>
    </template> -->
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
    expenseitems: [],
    options: {
      sortBy: ["id"],
      sortDesc: [true],
    },

    menu: false,
    modal: false,
    menu2: false,

    rules: {
      required: (v) => !!v || "This Field is Required",
      min: (v) => v.length >= 5 || "Minimum 5 Chracters Required",
      validEmail: (v) => /.+@.+\..+/.test(v) || "Email must be valid",
    },
    headers: [
      {
        text: "#",
        value: "id",
      },
      { text: "Expense", value: "expense_item_id" },
      { text: "Date", value: "date" },
      { text: "Note", value: "note" },
      { text: "Payment Method", value: "pmt_method" },
      { text: "Actions", value: "action", sortable: false },
    ],
    status: [
      { text: "Active", value: true },
      { text: "In Active", value: false },
    ],
    types: ["expense", "service provider"],
    expenses: [],
    editedIndex: -1,
    editedItem: {
      id: "",
      expense_item_id: "",
      description: "",
      date: new Date().toISOString().substr(0, 10),
      pmt_method: "",
      details: "",
      is_active: "",
      doc_type: 'expense payment'
    },
    defaultItem: {
      id: "",
      expense_item_id: "",
      description: "",
      date: new Date().toISOString().substr(0, 10),
      pmt_method: "",
      details: "",
      is_active: "",
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
  },

  created() {
    this.initialize();

    axios.get("/api/expenseitems/allitems").then((res) => {
      this.expenseitems = res.data.data;
    });
  },

  methods: {
    updateStatus(item) {
      const index = this.expenses.data.indexOf(item);
      axios
        .post("/api/change-status", {
          status: item.is_active,
          expense: item.id,
        })
        .then((res) => {
          this.text =
            res.data.expense.id +
            "'s Status Updated to " +
            res.data.expense.is_active;
          this.snackbar = true;
        })
        .catch((error) => {
          // this.text = error.response.expense.name + "'s Status Cannot be Updated" + error.response.expense.status
          this.expenses.data[index].is_active =
            error.response.data.expense.is_active;
          this.snackbar = true;
          console.dir(error.response);
        });
    },

    searchIt(e) {
      if (e.length > 3) {
        axios
          .get(`/api/expenses/${e}`)
          .then((res) => (this.expenses = res.data.expenses))
          .catch((err) => console.dir(err.response));
      }
      if (e.length <= 0) {
        const sortBy =
          this.options.sortBy.length == 0 ? "id" : this.options.sortBy[0];
        const orderBy =
          this.options.sortDesc.length > 0 || this.options.sortDesc[0]
            ? "asc"
            : "desc";
        axios
          .get(`/api/expenses?page=${e.page}`, {
            params: {
              per_page: e.itemsPerPage,
              sort_by: sortBy,
              order_by: orderBy,
            },
          })
          .then((res) => {
            this.expenses = res.data.expenses;
          })
          .catch((err) => console.dir(err.response));
      }
    },
    paginate(e) {
      const sortBy =
        this.options.sortBy.length == 0 ? "id" : this.options.sortBy[0];
      const orderBy =
        this.options.sortDesc.length > 0 || this.options.sortDesc[0]
          ? "asc"
          : "desc";
      axios
        .get(`/api/expenses?page=${e.page}`, {
          params: {
            per_page: e.itemsPerPage,
            sort_by: sortBy,
            order_by: orderBy,
          },
        })
        .then((res) => {
          this.expenses = res.data.expenses;
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
      this.editedIndex = this.expenses.data.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      const index = this.expenses.data.indexOf(item);
      let decide = confirm("Are you sure you want to delete this item?");
      if (decide) {
        axios
          .delete("/api/expenses/" + item.id)
          .then((res) => {
            this.snackbar = true;
            this.expenses.data.splice(index, 1);
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
          .put("/api/expenses/" + this.editedItem.id, this.editedItem)
          //  .then(res => Object.assign(this.expenses[this.editedIndex], this.editedItem))
          .then((res) => {
            console.log(res);
            this.text = "Record Updated Successfully!";
            this.snackbar = true;
            Object.assign(this.expenses.data[index], res.data.expense);
          })
          .catch((err) => {
            console.log(err.response);
            this.text = "Error Updating Record";
            this.snackbar = true;
          });
        //  Object.assign(this.expenses.data[this.editedIndex], this.editedItem)
      } else {
        axios
          .post("/api/expenses", this.editedItem)
          .then((res) => {
            this.text = "Record Added Successfully!";
            this.snackbar = true;
            this.expenses.data.push(res.data.expense);
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
