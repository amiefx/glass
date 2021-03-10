<template>
  <v-app class="">
    <v-container>
      <div class="text-center">
        <h3>{{ business.name }}</h3>
        <h6>Glass and Aluminum</h6>
        <p>
          {{ business.address }} , {{ business.city }} <br />
          {{ business.phone }} <br>
          <strong>Gate Pass</strong>
        </p>
      </div>
      <v-divider class="my-1"></v-divider>
      <div class="customer">
        <p class="caption">
          Gate pass for Invoice No# {{ order.order.id }} <br />
          Customer: {{ order.order.customer_name }} <br />
        </p>
      </div>
      <v-divider class="my-1"></v-divider>
      <v-row class="btm">
          <v-col cols="8" class="py-1 caption"><strong>Items</strong> </v-col>
          <v-col cols="4" class="py-1 caption"> <strong>Qty</strong> </v-col>
        </v-row>

      <div v-for="item in order.orderdetails" :key="item.id">
        <v-row class="btm">
          <v-col cols="8" class="py-0 caption">
              <i>{{ item.product_name }}</i>
              <i v-if="item.g_width"> ({{ item.g_width }}X{{ item.g_height }}X{{ item.g_number }})</i>
          </v-col>
          <v-col cols="4" class="py-0 caption"> <i>{{item.quantity}}</i> </v-col>
        </v-row>
      </div>

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
        title: 'Gate Pass' ,
        titleTemplate: '%s | Invoice'
        },
  layout: "print",

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
