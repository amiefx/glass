<template>
  <v-row>
    <v-col cols="5">
      <customer-list :customers="customers" @getCust="custID($event)" />
    </v-col>
    <v-col cols="7">
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
                    <td width="150px"><strong>Company</strong></td>
                    <td>{{ customer.company_name }}</td>
                  </tr>
                  <tr>
                    <td><strong>Name</strong></td>
                    <td>{{ customer.name }}</td>
                  </tr>
                  <tr>
                    <td><strong>Email</strong></td>
                    <td>{{ customer.email }}</td>
                  </tr>
                  <tr>
                    <td><strong>Address</strong></td>
                    <td>{{ customer.address }}</td>
                  </tr>
                </tbody>
              </table>
            </v-col>
            <v-col cols="6">
              <table class="float-right">
                <tbody>
                  <tr>
                    <td width="150px"><strong>Phone</strong></td>
                    <td>{{ customer.work_number }}</td>
                  </tr>
                  <tr>
                    <td><strong>Type</strong></td>
                    <td>{{ customer.type }}</td>
                  </tr>
                  <tr>
                    <td><strong>Credit Limit</strong></td>
                    <td>{{ customer.credit_limit }}</td>
                  </tr>
                  <tr>
                    <td><strong>Balance</strong></td>
                    <td>
                      <strong class="red--text">{{
                        customer.receivable
                      }}</strong>
                    </td>
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
                <v-card flat>
                  <v-form
                    v-model="valid"
                    method="post"
                    v-on:submit.stop.prevent="save"
                  >
                    <v-card-text>
                      <v-row>
                        <v-col cols="12" class="py-0">
                          <v-radio-group
                            dense
                            v-model="editedItem.pmt_method"
                            row
                          >
                            <v-radio label="Cash" value="Cash"></v-radio>
                            <v-radio label="Bank" value="Bank"></v-radio>
                          </v-radio-group>
                          <v-text-field
                            dense
                            type="number"
                            v-model="editedItem.amount"
                            label="Amount"
                            :rules="[rules.required]"
                          ></v-text-field>
                          <div v-if="editedItem.pmt_method == 'Bank'">
                            <v-autocomplete
                              v-model="editedItem.bank_id"
                              :items="banks"
                              hide-details
                              hide-selected
                              item-text="bank_name"
                              item-value="id"
                              label="Select Bank Acc"
                              class="pb-3 pt-0"
                            >
                              <template
                                v-slot:selection="{ attr, on, item, selected }"
                              >
                                <span v-text="item.bank_name"></span>
                              </template>
                              <template v-slot:item="{ item }">
                                <v-list-item-content>
                                  <v-list-item-title
                                    v-text="item.bank_name"
                                  ></v-list-item-title>
                                  <v-list-item-subtitle>
                                    {{ item.account_title }} |
                                    {{ item.account_number }}
                                  </v-list-item-subtitle>
                                </v-list-item-content>
                                <v-list-item-action>
                                  <span>
                                    <strong>
                                      {{ item.id }}
                                    </strong>
                                  </span>
                                </v-list-item-action>
                              </template>
                            </v-autocomplete>
                            <v-file-input
                              dense
                              v-model="fileInput"
                              label="File input"
                              @change="uploadPhoto"
                            ></v-file-input>
                            <!-- <input type="file" label="File input" @change="uploadPhoto" /> -->
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
import CustomerList from "../../components/CustomerList.vue";
import Quotation from "../../components/Quotation.vue";
import SalesInvoice from "../../components/SalesInvoice.vue";
import Receipt from "./Receipt.vue";
export default {
  components: {
    CustomerList,
    SalesInvoice,
    Quotation,
    Receipt,
  },
  data: () => {
    return {
      snackbar: false,
      text: "",
      valid: true,
      customers: [],
      customer: [],
      customer_id: null,
      invoices: [],
      banks: [],
      fileInput: [],

      rules: {
        required: (v) => !!v || "This Field is Required",
        min: (v) => v.length >= 5 || "Minimum 5 Chracters Required",
        validEmail: (v) => /.+@.+\..+/.test(v) || "Email must be valid",
      },

      editedItem: {
        pmt_method: "",
        amount: "",
        payer_account: "",
        details: "",
        notes: "",
        bank_id: "",
        file: "",
      },
    };
  },

  created() {
    this.getCustomer();

    axios.get("/api/bank_detail/all").then((res) => {
      this.banks = res.data.data;
    });
  },

  methods: {
    custID(item) {
      this.customer = item;
      this.customer_id = item.id;
    },

    uploadPhoto() {
      if (this.fileInput != null) {
        let file = this.fileInput;

        let reader = new FileReader();
        reader.onloadend = (file) => {
          this.editedItem.file = reader.result;
        };
        reader.readAsDataURL(file);
      }
    },

    getCustomer() {
      axios.get("/api/customers/all").then((res) => {
        this.customers = res.data.data;

        if (this.customer_id) {
          let cust = res.data.data.find((item) => {
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
        notes: this.editedItem.notes,
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
          console.log(res)
          (this.editedItem.amount = null),
          (this.editedItem.pmt_method = null),
          (this.editedItem.bank_id = null),
          (this.editedItem.file = null),
          (this.editedItem.notes = null);
        this.getCustomer();
        //  this.newData = res.data.payments.id
      });
    },
  },

  watch: {},
};
</script>

<style>
</style>
