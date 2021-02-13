<template>
  <v-row>
      <v-col cols="5" >
         <employee-list :employees="employees" @getCust="custID($event)" />
      </v-col>
      <v-col cols="7" >
          <v-card>
              <v-card-text>
                  <h3 class="text-center" v-if="!employee.name">
                      Please select a employee from employee list
                  </h3>
              <v-row v-else>
              <v-col cols="6">
                  <table>
                  <tbody>
                      <tr>
                          <td width="150px"><strong>Name</strong></td>
                          <td>{{employee.name}}</td>
                      </tr>
                      <tr>
                          <td><strong>Email</strong></td>
                          <td>{{employee.email}}</td>
                      </tr>
                      <tr>
                          <td><strong>Address</strong></td>
                          <td>{{employee.address}}</td>
                      </tr>
                  </tbody>
              </table>
              </v-col>
              <v-col cols="6" >
                  <table class="float-right">
                  <tbody>
                      <tr>
                          <td width="150px"><strong>Phone</strong></td>
                          <td>{{employee.work_number}}</td>
                      </tr>
                      <tr>
                          <td><strong>Type</strong></td>
                          <td>{{employee.type}}</td>
                      </tr>
                      <tr>
                          <td><strong>Salary</strong></td>
                          <td><strong class="red--text">{{employee.salary}}</strong></td>
                      </tr>
                  </tbody>
              </table>
              </v-col>
          </v-row>

          </v-card-text>
          <v-divider class="mb-0"></v-divider>
         <v-card-text class="mt-0 pt-0">
              <v-row v-if="this.employee_id">
            <v-tabs>
              <v-tab>
                <v-icon left> mdi-cash-multiple </v-icon>
                Salaries
              </v-tab>
              <v-tab>
                <v-icon left> mdi-cash-plus </v-icon>
                Payments
              </v-tab>
              <v-tab-item>
                <salaries-11 :employee_id="employee_id" />
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
                            <!-- <div v-if="editedItem.pmt_method == 'Bank' ">
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
                            </div> -->
                            <v-text-field
                              dense
                              v-model="editedItem.notes"
                              label="Notes"
                            ></v-text-field>
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
import EmployeeList from '../../components/EmployeeList.vue'
import Receipt from './Receipt.vue'
import Salaries11 from './Salaries11.vue'
export default {
    components: {
      EmployeeList,
        Receipt,
        Salaries11
   },
   data: () => {
    return {
      snackbar: false,
      text:'',
      valid: true,
      employees: [],
      employee: [],
      employee_id: null,
      customer_id: 1,
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
     this.getEmployee()
  },

  methods: {
      custID(item) {
         this.employee = item;
         this.employee_id = item.id;
      },

      getEmployee() {
        axios.get("/api/employees/all").then(res => {
        this.employees = res.data.data;

        if (this.employee_id) {
            let cust = res.data.data.find(item => {
               return item.id === this.employee_id;
            });

           this.employee = cust;
        }

      });
    },

    savePayment() {
      let paymentData = {
        employee_id: this.employee_id,
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

        axios.post("/api/paysalary", paymentData).then((res) => {
          this.editedItem.amount = null,
          this.editedItem.pmt_method = null,
          this.editedItem.payer_account = null,
          this.editedItem.details = null,
          this.editedItem.notes = null
          this.getEmployee();
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
