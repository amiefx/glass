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
      :items="employees"
      :search="search"
    >

    <template v-slot:item.name="{ item }"
    >
    <span @click="getID(item)" class="pointer">
       {{item.name}}
    </span>

    </template>

    </v-data-table>
  </v-card>
</template>

<script>
import { mapGetters, mapActions } from "vuex"
  export default {
      props: {
          employees: {
          required: true,
          type: Array
          }
      },

    data () {
      return {
        search: '',
        headers: [
          {
            text: 'Type',
            align: 'start',
            value: 'type',
          },
          { text: 'Name', value: 'name' },
          { text: 'Phone', value: 'work_number' },
          { text: 'Salary', value: 'salary' }
        ],
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

            // axios.get("/api/employees/all").then(res => {
            //    this.employees = res.data.data;
            //    });

      },

        editItem (item) {
        console.log(item)
    },

    getID(item) {
       this.$emit('getCust', item )
       console.log(item)
    },
  }

  }
</script>

<style lang="scss" scoped>
.pointer {
    cursor: pointer;
}
</style>


