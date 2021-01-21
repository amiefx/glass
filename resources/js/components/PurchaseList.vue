<template>
  <v-card>
    <v-card-title>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table :headers="headers" :items="products" :search="search">
      <template v-slot:item.sku="{ item }">
        <span @click="addToPurchase(item)" class="pointer">
          {{ item.sku }}
        </span>
      </template>

      <template v-slot:item.onhand="{ item }">
        <v-edit-dialog block persistent :return-value.sync="item.onhand">
          <v-chip :color="getColor(item.alert)" dark>
            {{ item.onhand }}
          </v-chip>
        </v-edit-dialog>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  props: {
    products: {
      required: true,
      type: Array,
    },
  },
  data() {
    return {
      search: "",
      headers: [
        {
          text: "SKU",
          align: "start",
          sortable: true,
          value: "sku",
        },
        { text: "Price", value: "selling_price" },
        { text: "Quantity", value: "onhand" },
      ],
    };
  },

  methods: {
    editItem(item) {
      //    console.log(item)
    },

    addToPurchase(item) {
      //const index = event.currentTarget.id;
      const index = this.products.indexOf(item);
      //   console.log(index);
      this.$store.dispatch("purchase/addProductToPurchase", {
        product: this.products[index],
        quantity: 1,
      });
      //   console.log(this.products[index])
    },

    getColor(alert) {
      if (alert) return "red";
      else return "green";
    },
  },
};
</script>

<style lang="scss" scoped>
.pointer {
  cursor: pointer;
}
</style>

