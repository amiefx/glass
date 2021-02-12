<template>
  <v-row>
      <v-col cols="5" >
         <customer-list :customers="customers" @getCust="custID($event)" />
      </v-col>
      <v-col cols="7" >
          <v-card>
              <v-card-text>
                  <h3 class="text-center" v-if="!customer.name">
                      Please select a Customer from Customer list
                  </h3>
              <v-row v-else>
              <v-col cols="6">
                  <table>
                  <tbody>
                      <tr>
                          <td width="100px" class="text-dark bolder">Company:</td>
                          <td>{{customer.company_name}}</td>
                      </tr>
                      <tr>
                          <td class="text-dark bolder">Name:</td>
                          <td>{{customer.name}}</td>
                      </tr>
                      <tr>
                          <td class="text-dark bolder">Email:</td>
                          <td>{{customer.email}}</td>
                      </tr>
                      <tr>
                          <td class="text-dark bolder">Address:</td>
                          <td>{{customer.address}}</td>
                      </tr>
                  </tbody>
              </table>
              </v-col>
              <v-col cols="6" >
                  <table class="float-right">
                  <tbody>
                      <tr>
                          <td width="100px" class="text-dark bolder">Phone:</td>
                          <td>{{customer.work_number}}</td>
                      </tr>
                      <tr>
                          <td class="text-dark bolder">Type:</td>
                          <td>{{customer.type}}</td>
                      </tr>
                      <tr>
                          <td class="text-dark bolder">Credit Limit:</td>
                          <td>{{customer.credit_limit}}</td>
                      </tr>
                      <tr>
                          <td class="text-dark bolder">Balance:</td>
                          <td><strong class="text-success bolder">{{customer.receivable}}</strong></td>
                      </tr>
                  </tbody>
              </table>
              </v-col>
          </v-row>

          </v-card-text>
          <v-divider class="mb-0"></v-divider>
         <v-card-text class="mt-0 pt-0">
              <v-row v-if="this.customer_id">
            <v-tabs>
              <v-tab>
                <v-icon left> mdi-file-document-outline </v-icon>
                Invoices
              </v-tab>
              <v-tab>
                <v-icon left> mdi-note-text-outline </v-icon>
                Quotations
              </v-tab>
              <v-tab>
                <v-icon left> mdi-cash-multiple </v-icon>
                Receipts
              </v-tab>
              <v-tab>
                <v-icon left> mdi-cash-plus </v-icon>
                Receive Payment
              </v-tab>

              <v-tab-item>
                <sales-invoice :customer_id="customer_id" />
              </v-tab-item>
              <v-tab-item>
                <quotation :customer_id="customer_id" />
              </v-tab-item>
              <v-tab-item>
                <receipt :customer_id="customer_id" />
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
                              v-model="editedItem.payer_account"
                              label="Payer Account#"
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
import CustomerList from '../../components/CustomerList.vue'
import Quotation from '../../components/Quotation.vue'
import SalesInvoice from '../../components/SalesInvoice.vue'
import Receipt from './Receipt.vue'
export default {
    components: {
      CustomerList,
      SalesInvoice,
        Quotation,
        Receipt
   },
   data: () => {
    return {
      snackbar: false,
      text:'',
      valid: true,
      customers: [],
      customer: [],
      customer_id: null,
      invoices: [],

      rules: {
          required: v => !!v || 'This Field is Required',
          min: v => v.length >=5 || 'Minimum 5 Chracters Required',
          validEmail: v => /.+@.+\..+/.test(v) || 'Email must be valid',
      },

      editedItem: {
        pmt_method: "",
        amount: "",
        payer_account: "",
        details: "",
        notes: ""
      },

    }
  },

  created() {
     this.getCustomer()
  },

  methods: {
      custID(item) {
         this.customer = item;
         this.customer_id = item.id;
      },

      getCustomer() {
        axios.get("/api/customers/all").then(res => {
        this.customers = res.data.data;

        if (this.customer_id) {
            let cust = res.data.data.find(item => {
               return item.id === this.customer_id;
            });

           this.customer = cust;
        }

      });
    },

    savePayment() {
      let paymentData = {
        customer_id: this.customer_id,
        amount: this.editedItem.amount,
        pmt_method: this.editedItem.pmt_method,
        payer_account: this.editedItem.payer_account,
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

        axios.post("/api/receipts", paymentData).then((res) => {
          this.editedItem.amount = null,
          this.editedItem.pmt_method = null,
          this.editedItem.payer_account = null,
          this.editedItem.details = null,
          this.editedItem.notes = null
          this.getCustomer();
        //  this.newData = res.data.payments.id
        });
    },

  },

  watch: {

  }

}
</script>

<style>

</style>
