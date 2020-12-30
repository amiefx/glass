<template>
  <div>
      <v-row>
          <v-col cols="7" >
              items
          </v-col>
          <v-col cols="5" >
              <product-list />
          </v-col>
      </v-row>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"
import ProductList from '../../components/ProductList.vue'
export default {
   components: {
      ProductList
  },

  data: () => {
    return {
      snackbar: false,
      text:'',
      valid: true,
      dialog: false,
      dialog2: false,
    }
  },

  methods: {

  }
}
</script>

<style>

</style>
