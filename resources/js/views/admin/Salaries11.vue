<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="salaries"
      :items-per-page="5"
      class="elevation-0"
      item-key="id"
      :loading="loading"
      @pagination="paginate"
      :options.sync="options"
      :server-items-length="salaries.length"
      loading-text="Loading.. Please Wait!"
      :footer-props="{
        itemsPerPageOptions: [5, 10, 15],
        'show-current-page': true,
        'show-first-last-page': true,
      }"
    >
      <template v-slot:top>
        <!-- <v-toolbar flat color="">
        <v-toolbar-title>Transactions</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>

      </v-toolbar> -->

        <v-text-field
          @input="searchIt"
          append-icon="mdi-search"
          label="Search"
          single-line
          hide-details
          class="mx-4"
        ></v-text-field>
      </template>
      <template v-slot:item.id="{ item }">
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <span @click="editInvoice(item)" v-bind="attrs" v-on="on">{{
              item.id
            }}</span>
          </template>
          <span>Click to View</span>
        </v-tooltip>
      </template>
      <template v-slot:no-data>
        <v-btn color="primary" @click="initialize">Reset</v-btn>
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
  props: ["employee_id"],
  data: () => ({
    valid: true,
    dialog: false,
    loading: false,
    snackbar: false,
    text: "",
    success: "",
    error: "",
    options: {
      sortBy: ["id"],
      sortDesc: [true],
    },
    headers: [
      {
        text: "#",
        value: "id",
      },
      { text: "Order", value: "order_id" },
      { text: "Employee", value: "employee_name" },
      { text: "Type", value: "employee_type" },
      { text: "Amount", value: "amount_paid" },
      { text: "User", value: "user_id" },
    ],
    salaries: [],
  }),

  methods: {
    searchIt(e) {
      if (e.length > 0) {
        axios
          .get(`/api/salaries/${e}`)
          .then((res) => {
            this.salaries = res.data.salaries.data;
             console.log(res.data)
          })
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
          .get(`/api/salaries?page=${e.page}`, {
            params: {
              per_page: e.itemsPerPage,
              sort_by: sortBy,
              order_by: orderBy,
              employee_id: this.employee_id,
            },
          })
          .then((res) => {
            this.salaries = res.data.salaries.data;

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
        .get(`/api/salaries?page=${e.page}`, {
          params: {
            per_page: e.itemsPerPage,
            sort_by: sortBy,
            order_by: orderBy,
            employee_id: this.employee_id,
          },
        })
        .then((res) => {
          this.salaries = res.data.salaries.data;

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

    testM() {
      let e = {
        itemsLength: 0,
        itemsPerPage: 5,
        page: 1,
        pageCount: 0,
        pageStart: 0,
        pageStop: 0,
      };

      this.paginate(e);
    },

    editInvoice(item) {
        this.$router.push(`/admin/invoice/view/${item.id}`);
    }
  },

  watch: {
    employee_id() {
      let e = {
        itemsLength: 0,
        itemsPerPage: 5,
        page: 1,
        pageCount: 0,
        pageStart: 0,
        pageStop: 0,
      };

      this.paginate(e);
    },
  },
};
</script>
