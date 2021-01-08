<template>
  <div>

  <v-data-table
    :headers="headers"
    :items="categories.data"
    :items-per-page=5
    class="elevation-1"
    item-key="id"
    :loading="loading"
    @pagination="paginate"
    :options.sync="options"
    :server-items-length="categories.total"
    loading-text="Loading.. Please Wait!"
    :footer-props="{
        itemsPerPageOptions: [5,10,15],
        'show-current-page': true,
        'show-first-last-page': true
    }"
  >
    <template v-slot:top>
      <v-toolbar flat color="">
        <v-toolbar-title> {{ $t('category management') }}</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on }">
            <v-btn color="primary" dark class="mb-2" v-on="on">{{ $t('new category') }}</v-btn>
            <!-- <v-btn color="error" dark class="mb-2 mr-2"  @click="deleteAll">Delete</v-btn> -->
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>

            <v-form v-model="valid" method="post" v-on:submit.stop.prevent="save">
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" md="6" lg="6" >
                    <v-text-field v-model="editedItem.name" :label= "$t('name')"  :rules="[rules.required]"></v-text-field>
                    <v-text-field v-model="editedItem.short_code" :label= "$t('short code')"></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" text @click="close">{{ $t('cancel')}}</v-btn>
              <!-- <v-btn color="blue darken-1" type="submit" :disabled="!valid" @click.prevent="save" text @click="save">Save</v-btn> -->
              <v-btn color="primary" type="submit" :disabled="!valid" @click.prevent="save" >{{ $t('save')}}</v-btn>
            </v-card-actions>
            </v-form>
          </v-card>
        </v-dialog>
      </v-toolbar>

          <v-text-field
            @input="searchIt"
            append-icon="mdi-search"
            label="Search"
            single-line
            hide-details
            class="mx-4"
          ></v-text-field>

    </template>
    <template v-slot:item.action="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="editItem(item)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        small
        @click="deleteItem(item)"
      >
        mdi-delete
      </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn color="primary" @click="initialize">Reset</v-btn>
    </template>

    <template v-slot:item.is_active = "{ item }">
        <v-edit-dialog large block persistent :return-value.sync="item.is_active" @save="updateStatus(item)">

            <v-chip :color="getColor(item.is_active)" dark>
                <span v-if="item.is_active == 1">Active</span>
                <span v-else>In Active</span>
            </v-chip>
            <template v-slot:input>
                <v-select v-model="item.is_active" :items="status" :item-text="status.text" :item-value="status.value" label="Select Status"></v-select>
            </template>
        </v-edit-dialog>
    </template>

  </v-data-table>

  <v-snackbar
      v-model="snackbar"
      >
      {{ text }}
      <v-btn
          color="white"
          text
          @click="snackbar = false"
      >
          Close
      </v-btn>
  </v-snackbar>
</div>

</template>

<script>
  export default {
    layout: 'admin',
    middleware: ['auth', 'admin'],
    data: () => ({
      valid: true,
      dialog: false,
      loading: false,
      snackbar: false,
      text: '',
      success: '',
      error: '',
      options: {
          sortBy:['name'],
          sortDesc:[true]
      },
      rules: {
          required: v => !!v || 'This Field is Required',
          min: v => v.length >=5 || 'Minimum 5 Chracters Required',
          validEmail: v => /.+@.+\..+/.test(v) || 'Email must be valid',
      },
    //   headers: [
    //     {
    //       text: '#',
    //       value: 'id',
    //     },
    //     { text: 'Name', value: 'name' },
    //     { text: 'Short Code', value: 'short_code' },
    //     { text: 'Actions', value: 'action', sortable: false },
    //   ],
      status: [
          {text: 'Active', value: true},
          {text: 'In Active', value: false}
      ],
      categories: [],
      editedIndex: -1,
      editedItem: {
        id: '',
        name: '',
        short_code: ''
      },
      defaultItem: {
        id: '',
        name: '',
        short_code: ''
      },
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? this.$t('new item') : this.$t('edit item')
      },

      headers(){
      return [
        {
          text: '#',
          value: 'id',
        },
        { text: this.$t('name'), value: 'name' },
        { text: this.$t('short code'), value: 'short_code' },
        { text: this.$t('action'), value: 'action', sortable: false },
      ]
    }
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
    },

    created () {
      this.initialize()
    },

    methods: {
      updateStatus(item) {
          const index = this.categories.data.indexOf(item);
          axios.post('/api/change-status', {'status': item.is_active, 'category': item.id})
            .then(res => {
               this.text = res.data.category.name + "'s Status Updated to " + res.data.category.is_active
               this.snackbar = true
                })
            .catch(error => {
                // this.text = error.response.category.name + "'s Status Cannot be Updated" + error.response.category.status
                this.categories.data[index].is_active = error.response.data.category.is_active
                this.snackbar = true
                console.dir(error.response)
                })
      },

      // selectAll(e){
      //     this.selected = [];
      //     if(e.length > 0){
      //         this.selected = e.map(val => val.id)
      //     }
      //     console.dir(this.selected)
      // },
      // deleteAll(){
      //     let decide = confirm('Are you sure you want to delete these items?')
      //       if(decide){
      //           axios.post('/api/categories/delete', {'categories': this.selected})
      //           .then(res => {
      //               this.text = "Rcords Deleted Successfully!";
      //               this.selected.map(val =>{
      //                   const index = this.categories.data.indexOf(val)
      //                   this.categories.data.splice(index, 1)
      //               })
      //               this.snackbar = true
      //           })
      //           .catch(err => {
      //               console.log(err.response)
      //               this.text = "Error Deleting Record"
      //               this.snackbar = true
      //           })
      //       }
      // },
      searchIt(e){
          if(e.length > 3){
              axios.get(`/api/categories/${e}`)
                .then(res => this.categories = res.data.categories)
                .catch(err => console.dir(err.response))
          }
          if(e.length <= 0){
             // axios.get(`/api/categories?page=${e.page}`,{params:{'per_page': e.itemsPerPage}})
            //   axios.get(`/api/categories`)
            //     .then(res => this.categories = res.data.data.categories)
            //     .catch(err => console.dir(err.response))

            const sortBy = this.options.sortBy.length == 0 ? 'name' : this.options.sortBy[0];
            const orderBy = this.options.sortDesc.length > 0 || this.options.sortDesc[0] ? 'asc' : 'desc';
                axios.get(`/api/categories?page=${e.page}`,{params:{'per_page': e.itemsPerPage, 'sort_by': sortBy, 'order_by': orderBy}})
                .then(res => {
                    this.categories = res.data.categories
                })
                .catch(err => console.dir(err.response))
          }

      },
      paginate(e){
          const sortBy = this.options.sortBy.length == 0 ? 'name' : this.options.sortBy[0];
          const orderBy = this.options.sortDesc.length > 0 || this.options.sortDesc[0] ? 'asc' : 'desc';
            axios.get(`/api/categories?page=${e.page}`,{params:{'per_page': e.itemsPerPage, 'sort_by': sortBy, 'order_by': orderBy}})
            .then(res => {
                this.categories = res.data.categories
            })
            .catch(err => {
                //----

            })
        },
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


      },

      editItem (item) {
        this.editedIndex = this.categories.data.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        const index = this.categories.data.indexOf(item)
        let decide = confirm('Are you sure you want to delete this item?')
        if(decide){
            axios.delete('/api/categories/'+item.id)
            .then(res => {
                this.snackbar = true
                this.categories.data.splice(index, 1)
            })
            .catch(err => {
                console.log(err.response)
                this.text = "Error Deleting Record";
                this.snackbar = true
            })
        }

      },

      close () {
        this.dialog = false
        setTimeout(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        }, 300)
      },

      save () {
        if (this.editedIndex > -1) {
          const index = this.editedIndex
          axios.put('/api/categories/'+this.editedItem.id, this.editedItem)
        //  .then(res => Object.assign(this.categories[this.editedIndex], this.editedItem))
         .then(res => {
           console.log(res)
             this.text = "Record Updated Successfully!";
             this.snackbar = true;
             Object.assign(this.categories.data[index], res.data.category)
         })
         .catch(err => {
             console.log(err.response)
             this.text = "Error Updating Record"
             this.snackbar=true
         })
        //  Object.assign(this.categories.data[this.editedIndex], this.editedItem)
        } else {
            axios.post('/api/categories', this.editedItem)
            .then(res => {
                this.text = "Record Added Successfully!";
                this.snackbar = true;
                this.categories.data.push(res.data.category)
            })
            .catch(err => {
                console.dir(err)
                this.text = "Error Inserting Record";
                this.snackbar = true;
            })
        }
        this.close()
      },

      getColor (status) {
        if (status == 0) return 'red'
        else return 'green'
      },

    },
  }
</script>
