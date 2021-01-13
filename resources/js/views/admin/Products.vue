<template>
  <div>

  <v-data-table
    :headers="headers"
    :items="products.data"
    :items-per-page=5
    class="elevation-1"
    item-key="id"
    :loading="loading"
    @pagination="paginate"
    :options.sync="options"
    :server-items-length="products.total"
    loading-text="Loading.. Please Wait!"
    :footer-props="{
        itemsPerPageOptions: [5,10,15],
        'show-current-page': true,
        'show-first-last-page': true
    }"
  >
    <template v-slot:top>
      <v-toolbar flat color="">
        <v-toolbar-title>product Management</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="900px">
          <template v-slot:activator="{ on }">
            <v-btn color="primary" dark class="mb-2" v-on="on">New product</v-btn>
            <!-- <v-btn color="error" dark class="mb-2 mr-2"  @click="deleteAll">Delete</v-btn> -->
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>

            <v-form v-model="valid" method="post" v-on:submit.stop.prevent="save">
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" md="4" lg="4" >
                    <v-text-field v-model="editedItem.sku" label="SKU" :rules="[rules.required]" ></v-text-field>
                    <v-select
                       :items="categories"
                       item-text="name"
                       item-value="id"
                       label="Category"
                       v-model="editedItem.category_id"
                       :rules="[rules.required]"
                     ></v-select>
                     <v-select
                       :items="brands"
                       item-text="name"
                       item-value="id"
                       label="Brand"
                       v-model="editedItem.brand"
                       :rules="[rules.required]"

                       return-object
                     >
                     </v-select>
                     <v-text-field v-model="editedItem.name" label="Name" :rules="[rules.required]"></v-text-field>
                     <v-select
                       :items="units"
                       item-text="short_name"
                       item-value="id"
                       label="Unit"
                       v-model="editedItem.unit_id"
                       :rules="[rules.required]"
                     ></v-select>
                     <v-text-field type="number" v-model="editedItem.selling_price" label="Selling Price" ></v-text-field>

                     </v-col>

                  <v-col cols="12" md="4" lg="4" >

                     <v-text-field type="number" v-model.number="editedItem.height" label="Height" ></v-text-field>
                     <v-text-field type="number" v-model.number="editedItem.width" label="Width" ></v-text-field>
                     <v-text-field type="number" v-model.number="editedItem.thickness" label="Thinkness" ></v-text-field>
                     <v-text-field type="number" v-model.number="editedItem.length" label="Length" ></v-text-field>
                     <v-text-field type="number" v-model="editedItem.weight" label="Weight" ></v-text-field>
                     <v-text-field v-model="editedItem.size" label="Size" ></v-text-field>
                     <v-text-field v-model="editedItem.color" label="Color" ></v-text-field>

                  </v-col>

                  <v-col cols="12" md="4" lg="4" >
                    <v-checkbox
                        v-model="editedItem.enable_stock"
                        label="Enable Stock"
                     ></v-checkbox>

                    <div v-if="editedItem.enable_stock">
                     <v-text-field type="number" v-model="editedItem.alert_quantity" label="Alert Quantity" ></v-text-field>
                     <v-text-field type="number" v-if="editedIndex === -1" v-model="editedItem.qty_on_hand" label="Quantity on Hand" ></v-text-field>
                     <v-text-field type="number" v-if="editedIndex === -1" v-model="editedItem.purchase_price" label="Purchase Price" ></v-text-field>
                     <v-text-field type="number" v-if="editedIndex === -1" v-model="editedItem.total" label="Total" ></v-text-field>
                    </div>

                     <v-checkbox
                        v-model="editedItem.is_active"
                        label="Active"
                     ></v-checkbox>

                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" text @click="close">Cancel</v-btn>
              <!-- <v-btn color="blue darken-1" type="submit" :disabled="!valid" @click.prevent="save" text @click="save">Save</v-btn> -->
              <v-btn color="primary" type="submit" :disabled="!valid" @click.prevent="save" >Save</v-btn>
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

    <template v-slot:item.is_active = "{ item }">
        <v-edit-dialog large block persistent :return-value.sync="item.is_active" @save="updateStatus(item)">

            <v-chip :color="getColor(item.is_active)" dark>
                <span v-if="item.is_active == 1">Active</span>
                <span v-else>In Active</span>
            </v-chip>
            <template v-slot:input>
                <v-select v-model="item.is_active" :items="status" :item-text="status.text" :item-value="status.value" label="Select Status"></v-select>
            </template>
        </v-edit-dialog>
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
        { text: 'SKU', value: 'sku' },
        { text: 'Name', value: 'name' },
        { text: 'Category', value: 'category' },
        { text: 'Brand', value: 'brand_name' },
        { text: 'Enable Stock', value: 'stock' },
        { text: 'Alert Qty', value: 'alert_quantity' },
        { text: 'Price', value: 'selling_price' },
        { text: 'Height', value: 'height' },
        { text: 'Width', value: 'width' },
        { text: 'Thickness', value: 'thickness' },
        { text: 'Length', value: 'length' },
        { text: 'Weight', value: 'weight' },
        { text: 'Size', value: 'size' },
        { text: 'Color', value: 'color' },
        { text: 'Active', value: 'active' },
        { text: 'Actions', value: 'action', sortable: false },
      ],
      status: [
          {text: 'Active', value: true},
          {text: 'In Active', value: false}
      ],
      types: ['product', 'service provider'],
      products: [],
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

    created () {
      this.initialize()

      axios.get("/api/categories/all").then(res => {
        this.categories = res.data.data;
        });

      axios.get("/api/units/all").then(res => {
        this.units = res.data.data;
        });

      axios.get("/api/brands/all").then(res => {
        this.brands = res.data.data;
        });

      axios.get("/api/slabs/all").then(res => {
        this.slabs = res.data.data;
        });
    },

    methods: {
      updateStatus(item) {
          const index = this.products.data.indexOf(item);
          axios.post('/api/change-status', {'status': item.is_active, 'product': item.id})
            .then(res => {
               this.text = res.data.product.name + "'s Status Updated to " + res.data.product.is_active
               this.snackbar = true
                })
            .catch(error => {
                // this.text = error.response.product.name + "'s Status Cannot be Updated" + error.response.product.status
                this.products.data[index].is_active = error.response.data.product.is_active
                this.snackbar = true
                console.dir(error.response)
                })
      },

      getItemText(items) {
          console.log(items)
      },

      getSku (item) {
        let a = this.editedItem.brand.name.slice(0, 2) + " " + this.editedItem.name;
        var color = ( this.editedItem.color !== '' ) ? " " + this.editedItem.color.slice(0, 3) : "";
        var vol = ( this.editedItem.height !== '' ) ? " " + this.editedItem.height + "X" + this.editedItem.width + "X" + this.editedItem.thickness : "";
        this.editedItem.brand_id = this.editedItem.brand.id
        this.editedItem.sku = (a + color + vol).toUpperCase();
      },

    //   itemChanged(item) {
    //     this.editedItem.sku = item.name.slice(0, 2) + " " + this.editedItem.name;
    //     this.editedItem.brand_id = item.id
    //   },
      // selectAll(e){
      //     this.selected = [];
      //     if(e.length > 0){
      //         this.selected = e.map(val => val.id)
      //     }
      //     console.dir(this.selected)
      // },
      // deleteAll(){
      //     let decide = confirm('Are you sure you want to delete these items?')
      //       if(decide){
      //           axios.post('/api/products/delete', {'products': this.selected})
      //           .then(res => {
      //               this.text = "Rcords Deleted Successfully!";
      //               this.selected.map(val =>{
      //                   const index = this.products.data.indexOf(val)
      //                   this.products.data.splice(index, 1)
      //               })
      //               this.snackbar = true
      //           })
      //           .catch(err => {
      //               console.log(err.response)
      //               this.text = "Error Deleting Record"
      //               this.snackbar = true
      //           })
      //       }
      // },
      searchIt(e){
          if(e.length > 3){
              axios.get(`/api/products/${e}`)
                .then(res => this.products = res.data.products)
                .catch(err => console.dir(err.response))
          }
          if(e.length <= 0){
             // axios.get(`/api/products?page=${e.page}`,{params:{'per_page': e.itemsPerPage}})
            //   axios.get(`/api/products`)
            //     .then(res => this.products = res.data.data.products)
            //     .catch(err => console.dir(err.response))

            const sortBy = this.options.sortBy.length == 0 ? 'name' : this.options.sortBy[0];
            const orderBy = this.options.sortDesc.length > 0 || this.options.sortDesc[0] ? 'asc' : 'desc';
                axios.get(`/api/products?page=${e.page}`,{params:{'per_page': e.itemsPerPage, 'sort_by': sortBy, 'order_by': orderBy}})
                .then(res => {
                    this.products = res.data.products
                })
                .catch(err => console.dir(err.response))
          }

      },
      paginate(e){
          const sortBy = this.options.sortBy.length == 0 ? 'name' : this.options.sortBy[0];
          const orderBy = this.options.sortDesc.length > 0 || this.options.sortDesc[0] ? 'asc' : 'desc';
            axios.get(`/api/products?page=${e.page}`,{params:{'per_page': e.itemsPerPage, 'sort_by': sortBy, 'order_by': orderBy}})
            .then(res => {
                this.products = res.data.products
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

      editItem (item) {
        this.editedIndex = this.products.data.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        const index = this.products.data.indexOf(item)
        let decide = confirm('Are you sure you want to delete this item?')
        if(decide){
            axios.delete('/api/products/'+item.id)
            .then(res => {
                this.snackbar = true
                this.products.data.splice(index, 1)
            })
            .catch(err => {
                console.log(err.response)
                this.text = "Error Deleting Record";
                this.snackbar = true
            })
        }

      },

      close () {
        this.dialog = false
        setTimeout(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        }, 300)
      },

      save () {
        if (this.editedIndex > -1) {
          const index = this.editedIndex
          axios.put('/api/products/'+this.editedItem.id, this.editedItem)
        //  .then(res => Object.assign(this.products[this.editedIndex], this.editedItem))
         .then(res => {
           console.log(res)
             this.text = "Record Updated Successfully!";
             this.snackbar = true;
             Object.assign(this.products.data[index], res.data.product)
         })
         .catch(err => {
             console.log(err.response)
             this.text = "Error Updating Record"
             this.snackbar=true
         })
        //  Object.assign(this.products.data[this.editedIndex], this.editedItem)
        } else {
            axios.post('/api/products', this.editedItem)
            .then(res => {
                this.text = "Record Added Successfully!";
                this.snackbar = true;
                this.products.data.push(res.data.product)
            })
            .catch(err => {
                console.dir(err)
                this.text = "Error Inserting Record";
                this.snackbar = true;
            })
        }
        this.close()
      },

      getColor (status) {
        if (status == 0) return 'red'
        else return 'green'
      },

    },
  }
</script>
