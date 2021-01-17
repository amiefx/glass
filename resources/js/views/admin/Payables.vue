<template>
  <v-row>
      <v-col cols="5" >
         <supplier-list :suppliers="suppliers" @getCust="custID($event)" />
      </v-col>
      <v-col cols="7" >
          <v-card>
              <v-card-text>
                  <h3 class="text-center" v-if="!supplier.name">
                      Please select a Supplier from Supplier list
                  </h3>
              <v-row v-else>
              <v-col cols="6">
                  <table>
                  <tbody>
                      <tr>
                          <td width="150px">Company</td>
                          <td>{{supplier.company_name}}</td>
                      </tr>
                      <tr>
                          <td>Name</td>
                          <td>{{supplier.name}}</td>
                      </tr>
                      <tr>
                          <td>Email</td>
                          <td>{{supplier.email}}</td>
                      </tr>
                      <tr>
                          <td>Address</td>
                          <td>{{supplier.address}}</td>
                      </tr>
                  </tbody>
              </table>
              </v-col>
              <v-col cols="6" >
                  <table class="float-right">
                  <tbody>
                      <tr>
                          <td width="150px">Phone</td>
                          <td>{{supplier.work_number}}</td>
                      </tr>
                      <tr>
                          <td>Type</td>
                          <td>{{supplier.type}}</td>
                      </tr>
                      <tr>
                          <td>Credit Limit</td>
                          <td>{{supplier.credit_limit}}</td>
                      </tr>
                      <tr>
                          <td>Balance</td>
                          <td><strong>{{supplier.payables}}</strong></td>
                      </tr>
                  </tbody>
              </table>
              </v-col>
          </v-row>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-text>
              <v-row>
                 transactions
              </v-row>
          </v-card-text>
          </v-card>
      </v-col>
  </v-row>
</template>

<script>
import SupplierList from '../../components/SupplierList.vue'
export default {
    components: {
      SupplierList
   },
   data: () => {
        SupplierList
    return {
      snackbar: false,
      text:'',
      valid: true,
      suppliers: [],
      supplier: []

    }
  },

  created() {
     axios.get("/api/suppliers/all").then(res => {
        this.suppliers = res.data.data;
        });
  },

  methods: {
      custID(item) {
         this.supplier = item;
      }
  },

  watch: {

  }

}
</script>

<style>

</style>
