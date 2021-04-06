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
          <v-row class="p-0 text-center">
            <v-col cols="4">
              <v-alert dense text>
                  <p class="mb-1">Cash inflow</p>
                <strong>Rs. {{ debit }}</strong>
              </v-alert>
            </v-col>
            <v-col cols="4">
              <v-alert dense text>
                  <p class="mb-1">Cash outflow</p>
                <strong>Rs. {{ credit }}</strong>
              </v-alert>
            </v-col>

            <v-col cols="4">
              <v-alert dense text>
                  <p class="mb-1">Net Cashflow</p>
                <strong>
                    Rs. {{ balance }}</strong>
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

        <template v-slot:item.attachment="{ item }">
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-icon v-if="item.attachment" @click="viewImage(item)" v-bind="attrs" v-on="on">mdi-attachment</v-icon>
            </template>
            <span>Click to View Image</span>
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
    debit: 0,
    credit: 0,
    balance: 0,
    orders: [],
    search: "",
    headers: [
      {
        text: "Id",
        align: "start",
        sortable: true,
        value: "id",
      },
      { text: "Doc Type", value: "doc_type" },
      { text: "Doc #", value: "doc_id" },
      { text: "Customer", value: "customer_id" },
      { text: "Supplier", value: "supplier_id" },
      { text: "Employee", value: "employee_id" },
      { text: "Debit", value: "debit" },
      { text: "Credit", value: "credit" },
      { text: "Image", value: "attachment" },
      { text: "Date", value: "created_at" },
      { text: "User", value: "user_id" },
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
        .post("/api/report/bankreport", this.values)
        .then((res) => {
          this.orders = res.data.orders;
          this.debit = res.data.debit;
          this.credit = res.data.credit;
          this.balance = res.data.balance;
        })
        .catch((err) => console.dir(err.response));
    },

    viewInvoice(item) {
      if (item.doc_type == "invoice") {
            this.$router.push(`/admin/invoice/view/${item.doc_id}`);
        } else if (item.doc_type == "purchase order") {
            this.$router.push(`/admin/purchase-order/view/${item.doc_id}`);
        } else if (item.doc_type == "receipt") {
            this.$router.push(`/admin/receipt/print/${item.doc_id}`);
        }
    },

    viewImage(item) {
        window.open(item.attachment, "_blank");
    }
  },
};
</script>

<style>
</style>
