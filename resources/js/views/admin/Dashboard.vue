<template>
  <div>
    <!-- <v-md-date-range-picker
      class="ma-2 pt-5"
      @change="handleChange"
      :presets="presets"
    ></v-md-date-range-picker> -->

    <v-row>
      <v-col cols="12" sm="6" md="4" lg="3" class="pb-0">
        <v-alert text prominent color="success" icon="mdi-cash-multiple">
          <h3>Rs. {{ cash }}</h3>
          Total Cash in hand
        </v-alert>
      </v-col>
      <v-col cols="12" sm="6" md="4" lg="3" class="pb-0">
        <v-alert text prominent color="success" icon="mdi-bank">
          <h3>Rs. {{ bank }}</h3>
          Bank Balance
        </v-alert>
      </v-col>
      <v-col cols="12" sm="6" md="4" lg="3" class="pb-0">
        <v-alert text prominent color="success" icon="mdi-barcode">
          <h3>5568</h3>
          Total Inventory
        </v-alert>
      </v-col>
      <v-col cols="12" sm="6" md="4" lg="3" class="pb-0">
        <v-alert text prominent color="success" icon="mdi-cash-multiple">
          <h3>Rs. {{ receivables }}</h3>
          Total Receivables
        </v-alert>
      </v-col>
      <v-col cols="12" sm="6" md="4" lg="3" class="pb-0">
        <v-alert text prominent color="warning" icon="mdi-cash-multiple">
          <h3>Rs. {{ payables }}</h3>
          Total Payables
        </v-alert>
      </v-col>
    </v-row>
    <v-row class="chart-container">
      <column-chart :data="data1"></column-chart>
    </v-row>
  </div>
</template>

<script>
var moment = require("moment");
export default {
  data: () => ({
    cash: 0,
    bank: 0,
    receivables: 0,
    payables: 0,
    values: [],
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

    data1: [
      {
        name: "Sales",
        data: {
          "2021-1-1": 322772,
          "2021-1-2": 259627,
          "2021-1-3": 198111,
          "2021-1-4": 229461,
          "2021-1-5": 376385,
          "2021-1-6": 3577,
          "2021-1-7": 387450,
          "2021-1-8": 119008,
          "2021-1-9": 350491,
          "2021-1-10": 151827,
          "2021-1-11": 338192,
          "2021-1-12": 212258,
          "2021-1-13": 286837,
          "2021-1-14": 287087,
          "2021-1-15": 392082,
          "2021-1-16": 110496,
          "2021-1-17": 327280,
          "2021-1-18": 139213,
          "2021-1-19": 23106,
          "2021-1-20": 192584,
          "2021-1-21": 122540,
          "2021-1-22": 141592,
          "2021-1-23": 24536,
          "2021-1-24": 110913,
          "2021-1-25": 450335,
          "2021-1-26": 264270,
          "2021-1-27": 118158,
          "2021-1-28": 372680,
          "2021-1-29": 337048,
          "2021-1-30": 292238,
          "2021-1-31": 42193,
        },
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
        .get("/api/report/dashboardkpis")
        .then((res) => {
          this.cash = res.data.cash;
          this.bank = res.data.bank;
          this.receivables = res.data.receivables;
          this.payables = res.data.payables;
        })
        .catch((err) => console.dir(err.response));
    },
  },
};
</script>

<style lang="scss" scoped>
.chart-container {
  border: lightgray solid 1px;
  margin-right: 0px;
  margin-left: 0px;
}
</style>>
