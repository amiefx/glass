<template>
  <v-row>
      <v-col cols="5" >
         <customer-list :customers="customers" @getCust="custID($event)" />
      </v-col>
      <v-col cols="7" >
          <v-card>
              <v-row>
              <v-col cols="6">
                  <table>
                  <tbody>
                      <tr>
                          <td width="150px">Company</td>
                          <td>{{customer.company_name}}</td>
                      </tr>
                      <tr>
                          <td>Name</td>
                          <td>{{customer.name}}</td>
                      </tr>
                      <tr>
                          <td>Email</td>
                          <td>{{customer.email}}</td>
                      </tr>
                      <tr>
                          <td>Address</td>
                          <td>{{customer.address}}</td>
                      </tr>
                  </tbody>
              </table>
              </v-col>
              <v-col cols="6" >
                  <table class="float-right">
                  <tbody>
                      <tr>
                          <td width="150px">Phone</td>
                          <td>{{customer.work_number}}</td>
                      </tr>
                      <tr>
                          <td>Type</td>
                          <td>{{customer.type}}</td>
                      </tr>
                      <tr>
                          <td>Credit Limit</td>
                          <td>{{customer.credit_limit}}</td>
                      </tr>
                      <tr>
                          <td>Balance</td>
                          <td><strong>{{customer.receivable}}</strong></td>
                      </tr>
                  </tbody>
              </table>
              </v-col>
          </v-row>
          <v-row>
              transactions
          </v-row>
          </v-card>
      </v-col>
  </v-row>
</template>

<script>
import CustomerList from '../../components/CustomerList.vue'
export default {
    components: {
      CustomerList
   },
   data: () => {
        CustomerList
    return {
      snackbar: false,
      text:'',
      valid: true,
      customers: [],
      customer: []

    }
  },

  created() {
     axios.get("/api/customers/all").then(res => {
        this.customers = res.data.data;
        });
  },

  methods: {
      custID(item) {
         this.customer = item;
      }
  },

  watch: {

  }

}
</script>

<style>

</style>
