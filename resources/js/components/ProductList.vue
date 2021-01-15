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
    <v-data-table
      :headers="headers"
      :items="products"
      :search="search"
    >

    <template v-slot:item.sku="{ item }"
    >
    <span @click="addToCart(item)" class="pointer">
       {{item.sku}}
    </span>

    </template>

    </v-data-table>
  </v-card>

  <!-- <div>
      <table>
          <thead>
              <th>id</th>
              <th>name</th>
              <th>price</th>
          </thead>
          <tbody>
              <tr v-for="product in products" :key="product.id" @click="addToCart()">
                  <td>{{product.id}}</td>
                  <td>{{product.name}}</td>
                  <td>{{product.price}}</td>
              </tr>
          </tbody>
      </table>
  </div> -->
</template>

<script>
import { mapGetters, mapActions } from "vuex"
  export default {
    data () {
      return {
        search: '',
        headers: [
          {
            text: 'SKU',
            align: 'start',
            sortable: false,
            value: 'sku',
          },
          { text: 'Price', value: 'selling_price' },
        ],
        products: [],
      }
    },

    created () {
      this.initialize()
    },

    methods: {

      initialize () {
          // Add a request interceptor
            axios.interceptors.request.use((config) => {
                this.loading = true
                return config;
            },  (error) => {
                this.loading = false
                return Promise.reject(error);
            });

            // Add a response interceptor
            axios.interceptors.response.use((response) => {
                this.loading = false
                return response;
            }, (error) => {
                this.loading = false
                return Promise.reject(error);
            });

            axios.get("/api/products/all").then(res => {
               this.products = res.data.data;
               });

      },

        editItem (item) {
        console.log(item)
    },

    addToCart(item) {
        //const index = event.currentTarget.id;
        const index = this.products.indexOf(item)
       // console.log(index);
        this.$store.dispatch("cart/addProductToCart", {
            product: this.products[index],
            quantity: 1
        });
     //   console.log(this.products[index])
    },
  }

  }
</script>

<style lang="scss" scoped>
.pointer {
    cursor: pointer;
}
</style>


