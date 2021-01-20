<template>
  <v-row>
    <v-col cols="5">
      <supplier-list :suppliers="suppliers" @getCust="custID($event)" />
    </v-col>
    <v-col cols="7">
      <v-card>
        <v-card-text class="pb-0">
          <h3 class="text-center" v-if="!supplier.name">
            Please select a Supplier from Supplier list
          </h3>
          <v-row v-else>
            <v-col cols="6">
              <table>
                <tbody>
                  <tr>
                    <td width="150px">Company</td>
                    <td>{{ supplier.company_name }}</td>
                  </tr>
                  <tr>
                    <td>Name</td>
                    <td>{{ supplier.name }}</td>
                  </tr>
                  <tr>
                    <td>Email</td>
                    <td>{{ supplier.email }}</td>
                  </tr>
                  <tr>
                    <td>Address</td>
                    <td>{{ supplier.address }}</td>
                  </tr>
                </tbody>
              </table>
            </v-col>
            <v-col cols="6">
              <table class="float-right">
                <tbody>
                  <tr>
                    <td width="150px">Phone</td>
                    <td>{{ supplier.work_number }}</td>
                  </tr>
                  <tr>
                    <td>Type</td>
                    <td>{{ supplier.type }}</td>
                  </tr>
                  <tr>
                    <td>Credit Limit</td>
                    <td>{{ supplier.credit_limit }}</td>
                  </tr>
                  <tr>
                    <td>Balance</td>
                    <td>
                      <strong>{{ supplier.payables }}</strong>
                    </td>
                  </tr>
                </tbody>
              </table>
            </v-col>
          </v-row>
        </v-card-text>
        <v-divider class="mb-0"></v-divider>
        <v-card-text class="mt-0 pt-0">
          <v-row v-if="this.supplier_id">
            <v-tabs>
              <v-tab>
                <v-icon left> mdi-cash-register </v-icon>
                Purchases
              </v-tab>
              <v-tab>
                <v-icon left> mdi-cash-multiple </v-icon>
                Payments
              </v-tab>
              <v-tab>
                <v-icon left> mdi-cash-minus </v-icon>
                Pay Bills
              </v-tab>

              <v-tab-item>
                <purchase-orders :supplier_id="supplier_id" />
              </v-tab-item>
              <v-tab-item>
                <payments :supplier_id="supplier_id" />
              </v-tab-item>
              <v-tab-item>
                <v-card
                flat
                >

                  <v-form
                    v-model="valid"
                    method="post"
                    v-on:submit.stop.prevent="save"
                  >
                    <v-card-text>
                        <v-row>
                          <v-col cols="12" class="py-0">
                            <v-radio-group dense v-model="editedItem.pmt_method" row>
                              <v-radio
                                label="Cash"
                                value="Cash"
                              ></v-radio>
                              <v-radio
                                label="Bank"
                                value="Bank"
                              ></v-radio>
                            </v-radio-group>
                            <v-text-field
                              dense
                              type="number"
                              v-model="editedItem.amount"
                              label="Amount"
                              :rules="[rules.required]"
                            ></v-text-field>
                            <div v-if="editedItem.pmt_method == 'Bank' ">
                                <v-text-field
                                dense
                              v-model="editedItem.payee_account"
                              label="Payee Account#"
                            ></v-text-field>
                            <v-text-field
                              dense
                              v-model="editedItem.details"
                              label="Details"
                            ></v-text-field>
                            <v-text-field
                              dense
                              v-model="editedItem.notes"
                              label="Notes"
                            ></v-text-field>
                            </div>
                          </v-col>
                        </v-row>
                    </v-card-text>

                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn
                        color="primary"
                        type="submit"
                        :disabled="!valid"
                        @click.prevent="savePayment"
                        >Save</v-btn
                      >
                    </v-card-actions>
                  </v-form>
                </v-card>
              </v-tab-item>
            </v-tabs>
          </v-row>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import SupplierList from "../../components/SupplierList.vue";
import Payments from './Payments.vue';
import PurchaseOrders from './PurchaseOrders.vue';
export default {
  components: {
    SupplierList,
    PurchaseOrders,
    Payments,
  },
  data: () => {
    return {
      snackbar: false,
      text: "",
      valid: true,
      suppliers: [],
      supplier: [],
      supplier_id: null,
      newData: null,

      rules: {
          required: v => !!v || 'This Field is Required',
          min: v => v.length >=5 || 'Minimum 5 Chracters Required',
          validEmail: v => /.+@.+\..+/.test(v) || 'Email must be valid',
      },

      editedItem: {
        pmt_method: "",
        amount: "",
        payee_account: "",
        details: "",
        notes: ""
      },
    };
  },

  created() {
    this.getSupplier();
  },

  methods: {
    custID(item) {
      this.supplier = item;
      this.supplier_id = item.id;
    },

    getSupplier() {
        axios.get("/api/suppliers/all").then((res) => {
        this.suppliers = res.data.data;

        if (this.supplier_id) {
            let supp = res.data.data.find(item => {
               return item.id === this.supplier_id;
            });

           this.supplier = supp;
        }

      });
    },

    savePayment() {
      let paymentData = {
        supplier_id: this.supplier_id,
        amount: this.editedItem.amount,
        pmt_method: this.editedItem.pmt_method,
        payee_account: this.editedItem.payee_account,
        details: this.editedItem.details,
        notes: this.editedItem.notes
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

        axios.post("/api/payments", paymentData).then((res) => {
          this.editedItem.amount = null,
          this.editedItem.pmt_method = null,
          this.editedItem.payee_account = null,
          this.editedItem.details = null,
          this.editedItem.notes = null
          this.getSupplier();
          this.newData = res.data.payments.id
        });

    },
  },

  watch: {
     newData() {

     }
  },
};
</script>

<style>
</style>
