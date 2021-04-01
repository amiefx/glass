<template>
  <v-app class="printInvoice">
    <v-container>
      <div class="text-center">
        <h3>{{ business.name }}</h3>
        <h6>Glass and Aluminum</h6>
        <p>
          {{ business.address }} , {{ business.city }} <br />
          {{ business.phone }}
        </p>
        <p><strong>Cash Receipt</strong></p>
      </div>
      <v-divider class="my-1"></v-divider>

      <br />

      <div>
        <v-simple-table dense>
          <tbody>
            <tr>
              <td class="caption">Receipt No#</td>
              <td class="px-0 caption">356</td>
            </tr>
            <tr>
              <td class="caption">Receipt Date</td>
              <td class="px-0 caption">Jan 25, 2021 04:30 PM</td>
            </tr>
            <tr>
              <td class="caption">Amount</td>
              <td class="px-0 caption"><strong>Rs. 3500</strong></td>
            </tr>
            <tr>
              <td class="caption">Received by</td>
              <td class="px-0 caption">Afnan</td>
            </tr>
          </tbody>
        </v-simple-table>
      </div>

      <br />
      <p>Signature:</p>
      <br><br>

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
  layout: "print",
  metaInfo: {
    // title will be injected into parent titleTemplate
    title: "Orders",
    titleTemplate: "%s | Karim Glass",
  },

  data: () => {
    return {
      order: [],
      business: "",
      logoImg: window.location.origin + "/storage/images/khodgilogo.png",
    };
  },

  updated() {
    // setTimeout(() => {
    //      window.addEventListener("load", window.print());
    // }, 1000);
  },

  //     filters: {
  //       formatDate: function (value) {
  //           return moment(value).format('MMMM D, YYYY');
  //       }
  //   },

  created() {

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

  computed: {},
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
