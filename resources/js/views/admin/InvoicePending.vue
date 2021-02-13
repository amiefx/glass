<template>
  <div>
    <v-row>
      <div class="customer px-5">
        <strong class="">
          Invoice No# {{ order.order.id }} <br />
          Customer: {{ order.order.customer_name }} <br />
          Date: {{ order.order.created_at }}
        </strong>
      </div>
    </v-row>
    <v-divider class="my-1"></v-divider>
    <v-row>
      <v-col cols="6">
        <v-simple-table>
          <thead>
            <tr>
              <td>Item</td>
              <td>Quantity</td>
              <td>Price</td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in order.orderdetails" :key="item.id">
              <td>{{ item.product_name }}</td>
              <td>{{ item.quantity }}</td>
              <td>{{ item.price }}</td>
            </tr>
          </tbody>
        </v-simple-table>
      </v-col>
      <v-divider vertical class="pa-5"></v-divider>
      <v-col cols="5">
        <div>
          <v-simple-table>
            <tbody>
              <tr>
                <td width="15%"></td>
                <td width="44%" class="">Subtotal</td>
                <td width="33%" class="px-0">
                  Rs. {{ order.order.sub_total }}
                </td>
              </tr>
              <tr>
                <td></td>
                <td class="">Discount</td>
                <td class="px-0">Rs. {{ order.order.discount }}</td>
              </tr>
              <tr v-if="driver[0]">
                <td></td>
                <td class="">Suzuki Rent</td>
                <td class="px-0">Rs. {{ driver[0].amount_paid }}</td>
              </tr>
              <tr>
                <td></td>
                <td class="">Fitting Charges</td>
                <td class="px-0">Rs. {{ fitter[0].amount_paid }}</td>
              </tr>
              <tr>
                <td></td>
                <td class="">Total</td>
                <td class="px-0">Rs. {{ order.order.total }}</td>
              </tr>
              <tr>
                <td></td>
                <td class="">Received</td>
                <td class="px-0">Rs. {{ order.order.amount_recieved }}</td>
              </tr>
              <tr>
                <td></td>
                <td class="">Balance</td>
                <td class="px-0">
                  Rs. {{ order.order.total - order.order.amount_recieved }}
                </td>
              </tr>
            </tbody>
          </v-simple-table>
        </div>
        <v-btn color="primary" class="float-right" @click="printme"
          >Print</v-btn
        >
        <v-btn dark color="red" class="float-right mx-2" @click="deleteItem"
          >Delete</v-btn
        >
        <v-btn dark color="green" class="float-right" @click="approveItem"
          >Approve</v-btn
        >
      </v-col>
    </v-row>
  </div>
</template>

<script>
//var moment = require('moment');
export default {
  layout: "print",
  metaInfo: {
    // title will be injected into parent titleTemplate
    title: "Orders",
    titleTemplate: "%s | Khodgi",
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
      // window.print();
      // document.body.innerHTML = restorepage;
      let routeData = this.$router.resolve(
        `/admin/invoice/print/${this.order.order.id}`
      );
      window.open(routeData.href, "_blank");
    },

    deleteItem() {
      let decide = confirm("Are you sure you want to delete this item?");
      if (decide) {
        axios
          .delete("/api/order/" + this.order.order.id)
          .then((res) => {
            this.$router.replace("/admin/invoice/approvals");
          })
          .catch((err) => {
            console.log(err.response);
          });
      }
    },

    approveItem() {
      axios
        .post("/api/order/approve/" + this.order.order.id)
        .then((res) => {
          this.$router.replace("/admin/invoice/approvals");
        })
        .catch((err) => {
          console.log(err.response);
        });
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
