<template>
  <div>
      <v-row>
          <v-col cols="7" >

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
      label="Search for a supplier..."
      solo
    >
      <template v-slot:no-data>
        <v-list-item>
          <v-list-item-title>
            Search for a
            <strong>Supplier</strong>
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
          <v-icon left>
            mdi-account
          </v-icon>
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
          <v-list-item-subtitle > {{ item.company_name }} | {{ item.work_number}} </v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-action>
            <span v-if="item.credit_limit > 0">
              Credit limit:
          <strong>
            {{ item.credit_limit }}
          </strong>
          </span>
          <span>
              Payable:
          <strong>
            {{ item.payables }}
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
                <th class="text-left"> Sku </th>
                <th class="text-left"> Price </th>
                <th class="text-left"> Qty </th>
                <th class="text-left"> Total </th>
                <th class="text-left"></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in purchase" :key="item.id">
                  <td>
                      <v-btn class="red--text" icon @click="removeProductFromPurchase(item.product)">
                      <v-icon>mdi-delete</v-icon>
                    </v-btn>
                  </td>
                <td>
                  {{ item.product.sku}}
                </td>
                <td>
                  <input class="numinput qty" type="number" v-model="item.product.purchase_price">
                </td>
                <td>
                    <input class="numinput qty" type="number" v-model="item.quantity">
                </td>
                <td allign="right">
                    <span v-if="item.product.purchase_price">
                        {{ (item.product.purchase_price * item.quantity).toFixed(0) }}
                    </span>
                    <span v-else>
                        {{ ( 0 * item.quantity).toFixed(0) }}
                    </span>
                </td>
                <td>
                    <v-btn class="green--text" icon  @click="increaseProductQty(item.product)">
                      <v-icon>mdi-plus</v-icon>
                    </v-btn>
                    <v-btn class="red--text" icon v-if="item.quantity > 1" @click="decreaseProductQty(item.product)">
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
                  <td width="50%">

                  </td>
                  <td width="25%">Subtotal</td>
                  <td width="25%">

                      <input class="numinput" v-model="purchaseTotalPrice">
                  </td>
               </tr>
                <tr>
                    <td>

                    </td>
                    <td>Discount</td>
                    <td class="">
                        <input class="numinput" type="number" v-model="purchaseData.discount">
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>Total</td>
                    <td>
                    <input disabled class="numinput" type="number" v-model="total">
                    </td>
                </tr>
                <tr>
                    <td>
                        <select name="" id="" class="minimal numinput" v-model="purchaseData.pmt_method">
                            <option value="Cash">Cash</option>
                            <option value="Bank">Bank</option>
                        </select>
                    </td>
                    <td>Amount Paid</td>
                    <td>
                        <input class="numinput" type="number" v-model="purchaseData.paid_amt">
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>Amount Due</td>
                    <td>
                        <input disabled class="numinput" type="number" v-model="amtDue">
                    </td>
                </tr>
            </tbody>
        </v-simple-table>
         <v-row class="mx-5">
             <v-col>
                 <v-btn class="float-left" color="error" @click="clearPurchaseItems">Clear all</v-btn>
                 <v-btn class="float-right" color="primary" :loading="loading" @click="saveOrder">Save</v-btn>
             </v-col>
         </v-row>
          </v-col>
          <v-col cols="5" >
              <purchase-list :products="products" />
          </v-col>
      </v-row>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex"
import PurchaseList from '../../components/PurchaseList.vue'
export default {
   components: {
      PurchaseList
  },

  data: () => {
    return {
      snackbar: false,
      text:'',
      loading: false,
      valid: true,
      dialog: false,
      dialog2: false,

      discount: null,
      products: [],
      isLoading: false,

      items: [],
      model: null,
      search: null,
      tab: null,
      balance: null,

      pmt_methods: ['Cash', 'Bank'],
      supplier_id: '',
      purchaseData: {
          supplier_id: '',
          subtotal: '',
          discount: '',
          total: '',
          paid_amt: '',
          payable_amt: '',
          pmt_method: '',
      }
    }
  },

  created () {
      this.initialize()
    },

  methods: {
    removeProductFromPurchase(product) {
      this.$store.dispatch("purchase/removeProductFromPurchase", product);
    },

    clearPurchaseItems() {
      this.$store.dispatch("purchase/clearPurchaseItems");
    },

    decreaseProductQty(product) {
      this.$store.dispatch("purchase/decreaseProductQty", product);
    },

    increaseProductQty(product) {
      this.$store.dispatch("purchase/increaseProductQty", product);
    },

    saveOrder() {
        let orderData = {
            orderDetails: {
                supplier_id: this.model,
                subtotal: this.purchaseTotalPrice,
                discount: this.purchaseData.discount,
                total: this.total,
                paid_amt: this.purchaseData.paid_amt,
                payable_amt: this.amtDue,
                pmt_method: this.purchaseData.pmt_method,
                note: ''
            },
            orderedItems: this.purchase,
        }

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

        axios.post('/api/purchaseorder', orderData)
            .then(res => {
            //    this.$router.push(`/checkout/${res.data.id}`)
                this.clearPurchaseItems()
                console.log(orderData);
                this.model = null
                this.purchaseData.discount = null
                this.purchaseData.paid_amt = null
                this.purchaseData.pmt_method = null
                this.initialize();
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

            axios.get("/api/products/all").then(res => {
               this.products = res.data.data;
               });

      },

  },

  computed: {
      ...mapState({
        purchase: state => state.purchase.purchase,
    }),

    purchaseItemCount() {
      return this.$store.getters['purchase/purchaseItemCount'];
    },

    purchaseTotalPrice() {
      return this.$store.getters['purchase/purchaseTotalPrice'];
    },

    total() {
        return this.purchaseTotalPrice - this.purchaseData.discount;
    },

    amtDue() {
        return this.total - this.purchaseData.paid_amt;
    }

  },

  watch: {
      model (val) {

        this.items.forEach(item => {

                if (val == item.id ) {
                    this.balance = item.payables;
                }

            })

      },

      search (val) {
        // Items have already been loaded
        if (this.items.length > 0) return

        this.isLoading = true

        // axios method
        axios
          .get('/api/suppliers/all')
          .then(res => {
            this.items = res.data.data
            this.isLoading = false
          })
          .catch(err => {
            console.log( err )
            this.isLoading = false
          })
      },


    },
}
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
.qty {
    width: 60px;
}
.sel {
    width: 100px;
}

select.minimal {
  background-image:
    linear-gradient(45deg, transparent 50%, gray 50%),
    linear-gradient(135deg, gray 50%, transparent 50%),
    linear-gradient(to right, #ccc, #ccc);
  background-position:
    calc(100% - 20px) calc(1em + 2px),
    calc(100% - 15px) calc(1em + 2px),
    calc(100% - 2.5em) 0.5em;
  background-size:
    5px 5px,
    5px 5px,
    1px 1.5em;
  background-repeat: no-repeat;

 width: 100px;
}

select.minimal:focus {
  background-image:
    linear-gradient(45deg, green 50%, transparent 50%),
    linear-gradient(135deg, transparent 50%, green 50%),
    linear-gradient(to right, #ccc, #ccc);
  background-position:
    calc(100% - 15px) 1em,
    calc(100% - 20px) 1em,
    calc(100% - 2.5em) 0.5em;
  background-size:
    5px 5px,
    5px 5px,
    1px 1.5em;
  background-repeat: no-repeat;
  border-color: green;
  outline: 0;

}

</style>
