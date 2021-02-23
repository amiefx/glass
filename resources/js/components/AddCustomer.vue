<template>
  <v-dialog v-model="dialog" max-width="600px">
    <template v-slot:activator="{ on }">
      <v-btn color="primary" dark v-on="on">New Customer</v-btn>
      <!-- <v-btn color="error" dark class="mb-2 mr-2"  @click="deleteAll">Delete</v-btn> -->
    </template>
    <v-card>
      <!-- <v-card-title>
              <span class="headline">Add customer</span>
            </v-card-title> -->

      <v-form v-model="valid" method="post" v-on:submit.stop.prevent="save">
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" md="6" lg="6">
                <v-text-field
                  v-model="editedItem.name"
                  label="Name"
                  :rules="[rules.required, rules.min]"
                ></v-text-field>
                <v-text-field
                  v-model="editedItem.company_name"
                  label="Company"
                  :rules="[rules.required, rules.min]"
                ></v-text-field>
                <v-text-field
                  v-model="editedItem.address"
                  label="Address"
                ></v-text-field>
                <v-text-field
                  v-model="editedItem.email"
                  label="Email"
                ></v-text-field>
                <v-text-field
                  v-model="editedItem.work_number"
                  label="Phone"
                ></v-text-field>
                <v-text-field
                  v-model="editedItem.whatsapp_number"
                  label="Whatsapp"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6" lg="6">
                <v-text-field
                  v-model="editedItem.opening_balance"
                  label="Opening Balance"
                ></v-text-field>
                <v-text-field
                  v-model="editedItem.credit_limit"
                  label="Credit limit"
                ></v-text-field>
                <v-select
                  :items="types"
                  label="Role"
                  v-model="editedItem.type"
                  :rules="[rules.required]"
                ></v-select>
                <v-checkbox
                  v-model="editedItem.is_active"
                  label="Active"
                ></v-checkbox>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="close">Cancel</v-btn>
          <!-- <v-btn color="blue darken-1" type="submit" :disabled="!valid" @click.prevent="save" text @click="save">Save</v-btn> -->
          <v-btn
            color="primary"
            type="submit"
            :disabled="!valid"
            @click.prevent="save"
            >Save</v-btn
          >
        </v-card-actions>
      </v-form>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    dialog: false,
    editedItem: {
      id: "",
      name: "",
      company_name: "",
      address: "",
      work_number: "",
      whatsapp_number: "",
      email: "",
      type: "",
      credit_limit: "",
      is_active: true,
      opening_balance: "",
    },
    rules: {
      required: (v) => !!v || "This Field is Required",
      min: (v) => v.length >= 5 || "Minimum 5 Chracters Required",
      validEmail: (v) => /.+@.+\..+/.test(v) || "Email must be valid",
    },
    status: [
      { text: "Active", value: true },
      { text: "In Active", value: false },
    ],
    types: ["Walkin", "Regular", "Wholesale", "Retail"],
    customers: [],
    text: ''
  }),

  methods: {
    close() {
      this.dialog = false;
    },

    save() {
      axios
        .post("/api/customers", this.editedItem)
        .then((res) => {
          this.text = "Record Added Successfully!";
          this.editedItem.name = "",
          this.editedItem.company_name = "",
          this.editedItem.address = "",
          this.editedItem.work_number = "",
          this.editedItem.whatsapp_number = "",
          this.editedItem.email = "",
          this.editedItem.type ="",
          this.editedItem.credit_limit = "",
          this.editedItem.is_active = true,
          this.editedItem.opening_balance = "",
          this.close()
        })
        .catch((err) => {
          console.dir(err);
          this.text = "Error Inserting Record";
        });
    },
  },
};
</script>

<style>
</style>
