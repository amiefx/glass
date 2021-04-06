<template>
  <div>
    <v-card>
      <v-row class="px-3">
        <v-col cols="6" class="pb-0">
          <v-md-date-range-picker
            class="ma-2 pt-5"
            @change="handleChange"
            :presets="presets"
          ></v-md-date-range-picker>
        </v-col>

        <v-col cols="6" class="pb-0">
            <v-row class="p-0">
                <v-col cols="6">
                      <v-alert dense text >
            <strong>Sales: Rs. {{ salesamt }}</strong>
          </v-alert>
                </v-col>
                <v-col cols="6">
                      <v-alert dense text >
            <strong>Discount: Rs. {{ discount }}</strong>
          </v-alert>
                </v-col>
            </v-row>

        </v-col>
      </v-row>

      <v-card-title class="pt-0">
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
          class="pt-0"
        ></v-text-field>
      </v-card-title>
      <v-data-table dense :headers="headers" :items="orders" :search="search" sort-by="id" sort-desc>
        <template v-slot:item.id="{ item }">
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <span @click="viewInvoice(item)" v-bind="attrs" v-on="on">{{
              item.id
            }}</span>
          </template>
          <span>Click to View</span>
        </v-tooltip>
      </template>
      </v-data-table>
    </v-card>
  </div>
</template>

<script>
var moment = require("moment");
export default {
  data: () => ({
    values: [],
    salesamt: 0,
    discount: 0,
    orders: [],
    search: "",
    headers: [
      {
        text: "Id",
        align: "start",
        sortable: true,
        value: "id",
      },
      { text: "Supplier", value: "supplier_name" },
      { text: "PO #", value: "POnumber" },
      { text: "Sub Total", value: "sub_total" },
      { text: "Discount", value: "discount" },
      { text: "Total", value: "total" },
      { text: "Date", value: "created_at" },
      { text: "User", value: "user_name" },
    ],
    presets: [
      {
        label: "Today",
        range: [moment().subtract(0, "day"), moment()],
      },
      {
        label: "Yesterday",
        range: [moment().subtract(1, "day"), moment().subtract(1, "day")],
      },
      {
        label: "Last 7 Days",
        range: [moment().subtract(6, "days"), moment()],
      },
      {
        label: "This Week",
        range: [moment().startOf("week"), moment().endOf("week")],
      },
      {
        label: "Last Week",
        range: [
          moment().subtract(1, "week").startOf("week"),
          moment().subtract(1, "week").endOf("week"),
        ],
      },
      {
        label: "This Month",
        range: [moment().startOf("month"), moment().endOf("month")],
      },
      {
        label: "Last Month",
        range: [
          moment().subtract(1, "month").startOf("month"),
          moment().subtract(1, "month").endOf("month"),
        ],
      },
      {
        label: "This Year",
        range: [moment().startOf("year"), moment().endOf("year")],
      },
    ],
  }),

  created() {
    this.getData();
  },

  methods: {
    handleChange(values) {
      this.values = values;
      this.getData();
    },

    getData() {
      axios
        .post("/api/report/purchasesreport", this.values)
        .then((res) => {
          this.salesamt = res.data.purchases;
          this.discount = res.data.discount;
          this.orders = res.data.orders;
        })
        .catch((err) => console.dir(err.response));
    },

    viewInvoice(item) {
        this.$router.push(`/admin/purchase-order/view/${item.id}`);
    }
  },
};
</script>

<style>
</style>
