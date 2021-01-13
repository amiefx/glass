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
      item-value="symbol"
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
        <!-- <v-list-item-action>
          <v-icon>mdi-bitcoin</v-icon>
        </v-list-item-action> -->
      </template>
    </v-autocomplete>

              <v-divider></v-divider>
              <v-simple-table height>
          <template v-slot:default>
            <thead>
              <tr>
                <th></th>
                <th class="text-left"> Sku </th>
                <!-- <th class="text-left"> Height </th>
                <th class="text-left"> Width </th> -->
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
                <!-- <td></td>
                <td></td> -->
                <td>
                  {{ item.product.selling_price}}
                </td>
                <td>
                    <input class="numinput qty" type="number" v-model="item.quantity">
                </td>
                <td allign="right">{{ (item.product.selling_price * item.quantity).toFixed(0) }}</td>
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
                      <v-btn class="float-left" color="error" text @click="clearPurchaseItems">Clear all</v-btn>
                  </td>
                  <td width="25%">Subtotal</td>
                  <td width="25%">{{(purchaseTotalPrice).toFixed(0)}}</td>
               </tr>
                <tr>
                    <td></td>
                    <td>Discount</td>
                    <td class="">
                        <!-- <v-text-field height="1" outlined dense v-model="discount" type="number"></v-text-field> -->
                        <input class="numinput" type="number" v-model="discount">
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>Total</td>
                    <td>{{ total }}</td>
                </tr>
            </tbody>
        </v-simple-table>
          </v-col>
          <v-col cols="5" >
              <purchase-list />
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
      valid: true,
      dialog: false,
      dialog2: false,

      discount: null,

      isLoading: false,
      items: [],
      model: null,
      search: null,
      tab: null,

      purchaseData: {
          customer_id: '',
          subtotal: '',
          discount: '',
          total: '',
          amount_received: '',
          purchaseItems: []
      }
    }
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
        return this.purchaseTotalPrice - this.discount;
    }

  },

  watch: {
      model (val) {
        if (val != null) this.tab = 0
        else this.tab = null
      },
      search (val) {
        // Items have already been loaded
        if (this.items.length > 0) return

        this.isLoading = true

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
</style>
