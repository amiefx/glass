<template>
  <div>

  <v-data-table
    :headers="headers"
    :items="panels.data"
    :items-per-page=5
    class="elevation-1"
    item-key="id"
    :loading="loading"
    @pagination="paginate"
    :options.sync="options"
    :server-items-length="panels.total"
    loading-text="Loading.. Please Wait!"
    :footer-props="{
        itemsPerPageOptions: [5,10,15],
        'show-current-page': true,
        'show-first-last-page': true
    }"
  >
    <template v-slot:top>
      <v-toolbar flat color="">
        <v-toolbar-title class="text-primary">Panel Management</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on }">
            <v-btn color="primary" dark class="mb-2" v-on="on">New Pnel</v-btn>
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
                  <v-col cols="12" >
                    <v-text-field v-model="editedItem.size" label="Size" :rules="[rules.required]"></v-text-field>
                    <v-text-field v-model="editedItem.standard_size" label="Standard Size" :rules="[rules.required]"></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" text @click="close">Cancel</v-btn>
              <!-- <v-btn color="blue darken-1" type="submit" :disabled="!valid" @click.prevent="save" text @click="save">Save</v-btn> -->
              <v-btn color="primary" type="submit" :disabled="!valid" @click.prevent="save" >Save</v-btn>
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
          sortBy:['id'],
          sortDesc:[true]
      },
      rules: {
          required: v => !!v || 'This Field is Required',
          size: v => v.length >=5 || 'Size 5 Chracters Required',
          validEmail: v => /.+@.+\..+/.test(v) || 'Email must be valid',
      },
      headers: [
        {
          text: '#',
          value: 'id',
        },
        { text: 'Size', value: 'size' },
        { text: 'Standard Size', value: 'standard_size' },
        { text: 'Actions', value: 'action', sortable: false },
      ],
      panels: [],
      editedIndex: -1,
      editedItem: {
        id: '',
        size: '',
        standard_size: '',
      },
      defaultItem: {
        id: '',
        size: '',
        standard_size: '',
      },
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
      },
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

      searchIt(e){
          if(e.length > 3){
              axios.get(`/api/panels/${e}`)
                .then(res => this.panels = res.data.panels)
                .catch(err => console.dir(err.response))
          }
          if(e.length <= 0){
             // axios.get(`/api/panels?page=${e.page}`,{params:{'per_page': e.itemsPerPage}})
            //   axios.get(`/api/panels`)
            //     .then(res => this.panels = res.data.data.panels)
            //     .catch(err => console.dir(err.response))

            const sortBy = this.options.sortBy.length == 0 ? 'id' : this.options.sortBy[0];
            const orderBy = this.options.sortDesc.length > 0 || this.options.sortDesc[0] ? 'asc' : 'desc';
                axios.get(`/api/panels?page=${e.page}`,{params:{'per_page': e.itemsPerPage, 'sort_by': sortBy, 'order_by': orderBy}})
                .then(res => {
                    this.panels = res.data.panels
                })
                .catch(err => console.dir(err.response))
          }

      },
      paginate(e){
          const sortBy = this.options.sortBy.length == 0 ? 'id' : this.options.sortBy[0];
          const orderBy = this.options.sortDesc.length > 0 || this.options.sortDesc[0] ? 'asc' : 'desc';
            axios.get(`/api/panels?page=${e.page}`,{params:{'per_page': e.itemsPerPage, 'sort_by': sortBy, 'order_by': orderBy}})
            .then(res => {
                this.panels = res.data.panels
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
        this.editedIndex = this.panels.data.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        const index = this.panels.data.indexOf(item)
        let decide = confirm('Are you sure you want to delete this item?')
        if(decide){
            axios.delete('/api/panels/'+item.id)
            .then(res => {
                this.snackbar = true
                this.panels.data.splice(index, 1)
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
          axios.put('/api/panels/'+this.editedItem.id, this.editedItem)
        //  .then(res => Object.assign(this.panels[this.editedIndex], this.editedItem))
         .then(res => {
           console.log(res)
             this.text = "Record Updated Successfully!";
             this.snackbar = true;
             Object.assign(this.panels.data[index], res.data.panel)
         })
         .catch(err => {
             console.log(err.response)
             this.text = "Error Updating Record"
             this.snackbar=true
         })
        //  Object.assign(this.panels.data[this.editedIndex], this.editedItem)
        } else {
            axios.post('/api/panels', this.editedItem)
            .then(res => {
                this.text = "Record Added Successfully!";
                this.snackbar = true;
                this.panels.data.push(res.data.panel)
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
