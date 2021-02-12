<template>
  <v-tab to="/admin/invoice/approvals">
    <v-badge color="green" :content="invoiceCount"> Invoice Approvals </v-badge>
  </v-tab>
</template>

<script>
export default {
  data: () => ({
    invoiceCount: null,
  }),

  created() {
      axios.get("/api/penddingorderscount").then((res) => {
        this.invoiceCount = res.data.order;
      });
  },

  mounted() {
    window.setInterval(() => {
      axios.get("/api/penddingorderscount").then((res) => {
        this.invoiceCount = res.data.order;
      });
    }, 30000);
  },
};
</script>

<style>
</style>
