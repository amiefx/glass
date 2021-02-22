<template>
  <v-app class="">
    <v-container>
      <div class="text-center">
        <h3>{{ business.name }}</h3>
        <h6>Glass and Aluminum</h6>
        <p>
          {{ business.address }} , {{ business.city }} <br />
          {{ business.phone }}
        </p>
      </div>
      <v-divider class="my-1"></v-divider>
      <div class="customer">
        <p class="caption">
          Invoice No# {{ order.order.id }} <br />
          Customer: {{ order.order.customer_name }} <br />
        </p>
      </div>
      <v-divider class="my-1"></v-divider>
      <v-row class="btm">
          <v-col cols="7" class="py-1 caption"><strong>Items</strong> </v-col>
          <v-col cols="2" class="py-1 caption"> <strong>Qty</strong> </v-col>
          <v-col cols="3" class="py-1 caption"> <strong>Price</strong> </v-col>
        </v-row>

      <div v-for="item in order.orderdetails" :key="item.id">
        <v-row class="btm">
          <v-col cols="7" class="py-0 caption"><i>{{ item.product_name }}</i></v-col>
          <v-col cols="2" class="py-0 caption"> <i>{{item.quantity}}</i> </v-col>
          <v-col cols="3" class="py-0 caption"> <i>{{ item.price }}</i> </v-col>
        </v-row>
      </div>

      <br />

      <v-row>
          <v-col cols="6">
             <div class="caption" v-if="order.order.note.ceiling_input.length > 0">
          <strong>Ceiling:</strong>
          <ul class="mb-0">
              <li v-for="(item, index) in order.order.note.ceiling_input" :key="item.index">
                  {{item.width}} X {{ item.length }} X {{ item.number}}
              </li>
          </ul>
      </div>
      <div class="caption" v-if="order.order.note.panel_input.length > 0">
          <strong>Panels:</strong>
          <ul class="mb-0">
              <li v-for="(item, index) in order.order.note.panel_input" :key="item.index">
                  {{ item.length }} X {{ item.number}} - {{item.removals}} ({{item.sheet_height}} {{item.sheet_width}})
              </li>
          </ul>
      </div>
      <div class="caption" v-if="order.order.note.glass_input.length > 0">
          <strong>Glass:</strong>
          <ul class="mb-0">
              <li v-for="(item, index) in order.order.note.glass_input" :key="item.index">
                  {{ item.width }} X {{item.height}} X {{ item.number}} ({{item.sqft}}) | {{ item.std_width }} X {{item.std_height}} ({{item.std_sqft}})
              </li>
          </ul>
      </div>
          </v-col>
        <v-col cols="1"></v-col>
        <v-col cols="5">
           <v-simple-table dense>
          <tbody>
            <tr>
              <td width="15%"></td>
              <td width="44%" class="caption">Subtotal</td>
              <td width="33%" class="px-0 caption">
                Rs. {{ order.order.sub_total }}
              </td>
            </tr>
            <tr>
              <td></td>
              <td class="caption">Discount</td>
              <td class="px-0 caption">Rs. {{ order.order.discount }}</td>
            </tr>
            <tr v-if="driver[0]">
              <td></td>
              <td class="caption">Suzuki Rent</td>
              <td class="px-0 caption">Rs. {{ driver[0].amount_paid }}</td>
            </tr>
            <tr v-if="fitter[0]">
              <td></td>
              <td class="caption">Fitting Charges</td>
              <td class="px-0 caption">Rs. {{ fitter[0].amount_paid }} </td>
            </tr>
            <tr>
              <td></td>
              <td class="caption">Total</td>
              <td class="px-0 caption">Rs. {{ order.order.total }}</td>
            </tr>
            <tr>
              <td></td>
              <td class="caption">Received</td>
              <td class="px-0 caption">
                Rs. {{ order.order.amount_recieved }}
              </td>
            </tr>
            <tr>
              <td></td>
              <td class="caption">Balance</td>
              <td class="px-0 caption">
                Rs. {{ order.order.amount_recieved }}
              </td>
            </tr>
          </tbody>
        </v-simple-table>
        </v-col>
      </v-row>

      <br />




      <v-divider class="my-1"></v-divider>

      <div class="text-center caption">
        Software developed by: www.wogale.com | 030012345678
      </div>
    </v-container>
  </v-app>
</template>

<script>
//var moment = require('moment');
export default {
  layout: 'print',
    metaInfo: {
        // title will be injected into parent titleTemplate
        title: 'Invoice' ,
        titleTemplate: '%s | Invoice'
        },

  data: () => {
    return {
      order: [],
      business: "",
      logoImg: window.location.origin + "/storage/images/khodgilogo.png",
    };
  },

  created() {
    axios
      .get(`/api/invoicedetail/${this.$route.params.id}`)
      .then((res) => {
        this.order = res.data;
      })
      .catch((err) => {});

    axios
      .get("/api/business/all")
      .then((res) => {
        this.business = res.data.business;
      })
      .catch((err) => {});
  },

  methods: {
    printme(el) {
      // let restorepage = document.body.innerHTML;
      // let printcontent = document.getElementById(el).innerHTML;
      // document.body.innerHTML = restorepage;
      window.print();
      // document.body.innerHTML = restorepage;
    },
  },

  filters: {
    formatDate: function (value) {
      return moment(value).format("MMMM D, YYYY");
    },
  },

  computed: {
    driver() {
      return this.order.salary.filter((item) => item.employee_type == "Driver");
    },
    fitter() {
      return this.order.salary.filter((item) => item.employee_type == "Fitter");
    },
  },
};
</script>

<style lang="scss" scoped>
.printInvoice {
  height: auto;
  max-width: 80mm;
  overflow-wrap: break-word;
  margin: auto;
}

.btm {
  border-bottom: #eeeeee solid 1px;
}

.qty {
  width: 35mm;
}
</style>
