<template>
  <!-- <div>

  <v-data-table
    :headers="headers"
    :items="purchase_orders.data"
    :items-per-page=5
    class="elevation-1"
    item-key="id"
    :loading="loading"
    @pagination="paginate"
    :options.sync="options"
    :server-items-length="purchase_orders.total"
    loading-text="Loading.. Please Wait!"
    :footer-props="{
        itemsPerPageOptions: [5,10,15],
        'show-current-page': true,
        'show-first-last-page': true
    }"
  >
    <template v-slot:top>
      <v-toolbar flat color="">
        <v-toolbar-title>Transactions</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>

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
    <template v-slot:no-data>
      <v-btn color="primary" @click="initialize">Reset</v-btn>
    </template>

  </v-data-table>

  <v-snackbar
      v-model="snackbar"
      >
      {{ text }}
      <v-btn
          color="white"
          text
          @click="snackbar = false"
      >
          Close
      </v-btn>
  </v-snackbar>
</div> -->

<div>
    trns
</div>

</template>

<script>
  export default {
    layout: 'admin',
    middleware: ['auth', 'admin'],
    data: () => ({
      valid: true,
      dialog: false,
      loading: false,
      snackbar: false,
      text: '',
      success: '',
      error: '',
      options: {
          sortBy:['name'],
          sortDesc:[true]
      },
      rules: {
          required: v => !!v || 'This Field is Required',
          min: v => v.length >=5 || 'Minimum 5 Chracters Required',
          validEmail: v => /.+@.+\..+/.test(v) || 'Email must be valid',
      },
      headers: [
        {
          text: '#',
          value: 'id',
        },
        { text: 'Total', value: 'total' },
        { text: 'Discount', value: 'discount' },
        { text: 'Sub Total', value: 'sub_total' },
        { text: 'Amount Paid', value: 'amount_paid' },
        { text: 'User', value: 'user_id' },
      ],
      status: [
          {text: 'Active', value: true},
          {text: 'In Active', value: false}
      ],
      types: ['product', 'service provider'],
      purchase_orders: [],
      categories: [],
      brands: [],
      units: [],
      slabs: [],
      editedIndex: -1,
      editedItem: {
        id: '',
        sku: '',
        name: '',
        category_id: '',
        brand_id: '',
        brand: {},
        enable_stock: false,
        alert_quantity: '',
        selling_price: '',
        height: '',
        width: '',
        thickness: '',
        length: '',
        weight: '',
        size: '',
        color: '',
        is_active: '',
        qty_on_hand: '',
        purchase_price: ''
      },
      defaultItem: {
        id: '',
        sku: '',
        name: '',
        category_id: '',
        brand_id: '',
        brand: '',
        enable_stock: false,
        alert_quantity: '',
        selling_price: '',
        height: '',
        width: '',
        thickness: '',
        length: '',
        weight: '',
        size: '',
        color: '',
        is_active: '',
        qty_on_hand: '',
        purchase_price: ''
      },
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
      },

    },

    watch: {
      dialog (val) {
        val || this.close()
      },

      'editedItem': {
        handler: 'getSku',
        deep: true
      }

    },

    methods: {

      searchIt(e){
          if(e.length > 3){
              axios.get(`/api/purchaseorder/${e}`)
                .then(res => this.purchase_orders = res.data.purchase_orders)
                .catch(err => console.dir(err.response))
          }
          if(e.length <= 0){
            const sortBy = this.options.sortBy.length == 0 ? 'name' : this.options.sortBy[0];
            const orderBy = this.options.sortDesc.length > 0 || this.options.sortDesc[0] ? 'asc' : 'desc';
                axios.get(`/api/purchaseorder?page=${e.page}`,{params:{'per_page': e.itemsPerPage, 'sort_by': sortBy, 'order_by': orderBy}})
                .then(res => {
                    this.purchase_orders = res.data.purchase_orders
                })
                .catch(err => console.dir(err.response))
          }

      },
      paginate(e){
          const sortBy = this.options.sortBy.length == 0 ? 'name' : this.options.sortBy[0];
          const orderBy = this.options.sortDesc.length > 0 || this.options.sortDesc[0] ? 'asc' : 'desc';
            axios.get(`/api/purchaseorder?page=${e.page}`,{params:{'per_page': e.itemsPerPage, 'sort_by': sortBy, 'order_by': orderBy}})
            .then(res => {
                this.purchase_orders = res.data.purchase_orders
            })
            .catch(err => {
                //----

            })
        },
      initialize () {
          // Add a request interceptor
            axios.interceptors.request.use((config) => {
                this.loading = true
                return config;
            },  (error) => {
                this.loading = false
                return Promise.reject(error);
            });

            // Add a response interceptor
            axios.interceptors.response.use((response) => {
                this.loading = false
                return response;
            }, (error) => {
                this.loading = false
                return Promise.reject(error);
            });


      },

      getColor (status) {
        if (status == 0) return 'red'
        else return 'green'
      },

    },
  }
</script>
