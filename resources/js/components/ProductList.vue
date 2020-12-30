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

    <template v-slot:item.name="{ item }"
    >
    <p @click="addToCart(item)">
       {{item.name}}
    </p>

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
            text: 'Dessert (100g serving)',
            align: 'start',
            sortable: false,
            value: 'name',
          },
          { text: 'Calories', value: 'calories' },
          { text: 'price (g)', value: 'price' },
          { text: 'Carbs (g)', value: 'carbs' },
          { text: 'Protein (g)', value: 'protein' },
          { text: 'Iron (%)', value: 'iron' },
        ],
        products: [
          {
            id: 1,
            name: 'Frozen Yogurt',
            calories: 159,
            price: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: '1%',
          },
          {
            id: 2,
            name: 'Ice cream sandwich',
            calories: 237,
            price: 9.0,
            carbs: 37,
            protein: 4.3,
            iron: '1%',
          },
          {
            id: 3,
            name: 'Eclair',
            calories: 262,
            price: 16.0,
            carbs: 23,
            protein: 6.0,
            iron: '7%',
          },
          {
            id: 4,
            name: 'Cupcake',
            calories: 305,
            price: 3.7,
            carbs: 67,
            protein: 4.3,
            iron: '8%',
          },
          {
            id: 5,
            name: 'Gingerbread',
            calories: 356,
            price: 16.0,
            carbs: 49,
            protein: 3.9,
            iron: '16%',
          },
          {
            id: 6,
            name: 'Jelly bean',
            calories: 375,
            price: 0.0,
            carbs: 94,
            protein: 0.0,
            iron: '0%',
          },
          {
            id: 7,
            name: 'Lollipop',
            calories: 392,
            price: 0.2,
            carbs: 98,
            protein: 0,
            iron: '2%',
          },
          {
            id: 8,
            name: 'Honeycomb',
            calories: 408,
            price: 3.2,
            carbs: 87,
            protein: 6.5,
            iron: '45%',
          },
          {
            id: 9,
            name: 'Donut',
            calories: 452,
            price: 25.0,
            carbs: 51,
            protein: 4.9,
            iron: '22%',
          },
          {
            id: 10,
            name: 'KitKat',
            calories: 518,
            price: 26.0,
            carbs: 65,
            protein: 7,
            iron: '6%',
          },
        ],
      }
    },

    methods: {
        editItem (item) {
        console.log(item)
    },

    addToCart(item) {
        //const index = event.currentTarget.id;
        const index = this.products.indexOf(item)
        console.log(index);
        this.$store.dispatch("cart/addProductToCart", {
            product: this.products[index],
            quantity: 1
        });
        console.log(this.products[index])
    },
  }

  }
</script>

