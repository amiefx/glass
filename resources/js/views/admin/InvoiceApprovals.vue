<template>
  <div>
      <v-card>
      <v-card-title>
      Pending Invoices
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table :headers="headers" :items="orders" :search="search">
        <template v-slot:item.id="{ item }">
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <span @click="editInvoice(item)" v-bind="attrs" v-on="on">{{
              item.id
            }}</span>
          </template>
          <span>Click to Edit</span>
        </v-tooltip>
      </template>
      <template v-slot:item.action="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="editItem(item)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        small
        @click="deleteItem(item)"
      >
        mdi-delete
      </v-icon>
    </template>
    </v-data-table>
      </v-card>
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
  props: ["customer_id"],
  data: () => ({
    valid: true,
    dialog: false,
    loading: false,
    snackbar: false,
    search: '',
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
      { text: "Total", value: "total" },
      { text: "Discount", value: "discount" },
      { text: "Sub Total", value: "sub_total" },
      { text: "Amount Received", value: "amount_recieved" },
      { text: "User", value: "user_id" },
       { text: 'Actions', value: 'action', sortable: false },
    ],
    orders: [],
    invoices: [],
    quotations: [],
  }),

  methods: {
    searchIt(e) {
      if (e.length > 0) {
        axios
          .get(`/api/order/${e}`)
          .then((res) => {
            this.orders = res.data.orders;

            this.invoices = res.data.orders.data.filter(item => {
                return item.status == 'Invoice';
            })

          this.quotations = res.data.orders.data.filter(item => {
                return item.status == 'Quotation';
            })

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
          .get(`/api/order?page=${e.page}`, {
            params: {
              per_page: e.itemsPerPage,
              sort_by: sortBy,
              order_by: orderBy,
              customer_id: this.customer_id,
            },
          })
          .then((res) => {
            this.orders = res.data.orders;

            this.invoices = res.data.orders.data.filter(item => {
                return item;
            })

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
        .get(`/api/order?page=${e.page}`, {
          params: {
            per_page: e.itemsPerPage,
            sort_by: sortBy,
            order_by: orderBy,
            customer_id: this.customer_id,
          },
        })
        .then((res) => {
          this.orders = res.data.orders;

          this.invoices = res.data.orders.data.filter(item => {
                return item.status == 'Invoice';
            })

          this.quotations = res.data.orders.data.filter(item => {
                return item.status == 'Quotation';
            })
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

      axios.get('/api/penddingorders')
        .then( (res) => {
           this.orders = res.data.order
        })
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
      this.$router.push(`/admin/invoice-pending/view/${item.id}`);
    },

  },

  created() {
     this.initialize()
  },

  watch: {
    customer_id() {
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
