<template>
  <div>
    <v-row>
      <v-col cols="6">
        <v-alert text prominent color="success" icon="mdi-cash-multiple">
          <h3>{{ cash }}</h3>
          Cash on hand Balance
        </v-alert>
      </v-col>
      <v-col cols="6">
        <v-alert text prominent color="success" icon="mdi-bank">
          <h3>{{ bank }}</h3>
          Bank Account Balance
        </v-alert>
      </v-col>
    </v-row>
    <v-row>
      <v-tabs vertical class="text-left">
        <v-tab class="tb">
          <v-icon left> mdi-file-document-outline </v-icon>
          Opening Balance
        </v-tab>
        <v-tab class="tb">
          <v-icon left> mdi-note-text-outline </v-icon>
          Investment
        </v-tab>
        <v-tab class="tb">
          <v-icon left> mdi-cash-multiple </v-icon>
          Withdrawal
        </v-tab>
        <v-tab class="tb">
          <v-icon left> mdi-cash-plus </v-icon>
          Transfer
        </v-tab>

        <v-tab-item>
          <v-card flat>
            <h3 class="text-center">Opening Balance</h3>

            <v-form
              v-model="valid"
              method="post"
              v-on:submit.stop.prevent="save"
            >
              <v-card-text>
                <v-alert text prominent color="warning">
                  Use this form once for recording opening balance. for
                  investing new balance use investment tab.
                </v-alert>
                <v-row>
                  <v-col cols="12" class="py-0">
                    <v-radio-group
                      mandatory
                      dense
                      v-model="openbl.pmt_method"
                      row
                    >
                      <v-radio label="Cash" value="Cash"></v-radio>
                      <v-radio label="Bank" value="Bank"></v-radio>
                    </v-radio-group>
                    <v-text-field
                      dense
                      type="number"
                      v-model="openbl.amount"
                      label="Amount"
                      :rules="[rules.required]"
                    ></v-text-field>
                    <div v-if="openbl.pmt_method == 'Bank'">
                      <v-text-field
                        dense
                        v-model="openbl.details"
                        label="Details"
                      ></v-text-field>
                      <v-text-field
                        dense
                        v-model="openbl.notes"
                        label="Notes"
                      ></v-text-field>
                    </div>
                  </v-col>
                </v-row>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="primary"
                  type="submit"
                  :disabled="!valid"
                  @click.prevent="saveOpenbl"
                  >Save</v-btn
                >
              </v-card-actions>
            </v-form>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card flat>
            <v-form
              v-model="valid"
              method="post"
              v-on:submit.stop.prevent="save"
            >
              <v-card-text>
                <h3 class="text-center">Investment</h3>
                <v-row>
                  <v-col cols="12" class="py-0">
                    <v-radio-group
                      mandatory
                      dense
                      v-model="invest.pmt_method"
                      row
                    >
                      <v-radio label="Cash" value="Cash"></v-radio>
                      <v-radio label="Bank" value="Bank"></v-radio>
                    </v-radio-group>
                    <v-text-field
                      dense
                      type="number"
                      v-model="invest.amount"
                      label="Amount"
                      :rules="[rules.required]"
                    ></v-text-field>
                    <div v-if="invest.pmt_method == 'Bank'">
                      <v-text-field
                        dense
                        v-model="invest.details"
                        label="Details"
                      ></v-text-field>
                      <v-text-field
                        dense
                        v-model="invest.notes"
                        label="Notes"
                      ></v-text-field>
                    </div>
                  </v-col>
                </v-row>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="primary"
                  type="submit"
                  :disabled="!valid"
                  @click.prevent="saveInvest"
                  >Save</v-btn
                >
              </v-card-actions>
            </v-form>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card flat>
            <v-form
              v-model="valid"
              method="post"
              v-on:submit.stop.prevent="save"
            >
              <v-card-text>
                  <h3 class="text-center">Withdrawal</h3>
                <v-row>
                  <v-col cols="12" class="py-0">
                    <v-radio-group
                      mandatory
                      dense
                      v-model="withdraw.pmt_method"
                      row
                    >
                      <v-radio label="Cash" value="Cash"></v-radio>
                      <v-radio label="Bank" value="Bank"></v-radio>
                    </v-radio-group>
                    <v-text-field
                      dense
                      type="number"
                      v-model="withdraw.amount"
                      label="Amount"
                      :rules="[rules.required]"
                    ></v-text-field>
                    <div v-if="withdraw.pmt_method == 'Bank'">
                      <v-text-field
                        dense
                        v-model="withdraw.details"
                        label="Details"
                      ></v-text-field>
                      <v-text-field
                        dense
                        v-model="withdraw.notes"
                        label="Notes"
                      ></v-text-field>
                    </div>
                  </v-col>
                </v-row>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="primary"
                  type="submit"
                  :disabled="!valid"
                  @click.prevent="saveWithdraw"
                  >Save</v-btn
                >
              </v-card-actions>
            </v-form>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card flat>
            <h3 class="text-center">Transfer Balance</h3>
            <v-form
              v-model="valid"
              method="post"
              v-on:submit.stop.prevent="save"
            >
              <v-card-text>
                <v-row>
                  <v-col cols="12" class="py-0">
                    <v-radio-group
                      dense
                      mandatory
                      v-model="transfer.pmt_method"
                      row
                    >
                      <v-radio label="Cash to Bank" value="Cash"></v-radio>
                      <v-radio label="Bank to Cash" value="Bank"></v-radio>
                    </v-radio-group>
                    <v-text-field
                      dense
                      type="number"
                      v-model="transfer.amount"
                      label="Amount"
                      :rules="[rules.required]"
                    ></v-text-field>
                    <div v-if="transfer.pmt_method == 'Bank'">
                      <v-text-field
                        dense
                        v-model="transfer.details"
                        label="Details"
                      ></v-text-field>
                      <v-text-field
                        dense
                        v-model="transfer.notes"
                        label="Notes"
                      ></v-text-field>
                    </div>
                  </v-col>
                </v-row>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="primary"
                  type="submit"
                  :disabled="!valid"
                  @click.prevent="saveTransfer"
                  >Save</v-btn
                >
              </v-card-actions>
            </v-form>
          </v-card>
        </v-tab-item>
      </v-tabs>
    </v-row>

    <v-snackbar v-model="snackbar">
      {{ text }}
      <v-btn color="white" text @click="snackbar = false"> Close </v-btn>
    </v-snackbar>
  </div>
</template>

<script>
export default {
  layout: "admin",
  middleware: ["auth", "admin"],
  data: () => ({
    cash: null,
    bank: null,
    valid: true,
    snackbar: false,
    text: "",

    rules: {
      required: (v) => !!v || "This Field is Required",
      min: (v) => v.length >= 5 || "Minimum 5 Chracters Required",
      validEmail: (v) => /.+@.+\..+/.test(v) || "Email must be valid",
    },

    openbl: {
      doc_type: 'opening balance',
      pmt_method: "",
      amount: "",
      details: "",
      notes: "",
    },

    transfer: {
      doc_type: 'transfer',
      pmt_method: "",
      amount: "",
      details: "",
      notes: "",
    },

    invest: {
      doc_type: 'investment',
      pmt_method: "",
      amount: "",
      details: "",
      notes: "",
    },

    withdraw: {
      doc_type: 'withdrawal',
      pmt_method: "",
      amount: "",
      details: "",
      notes: "",
    },
  }),

  created() {
    this.getData();
  },

  methods: {
    getData() {
      axios.get("/api/cashes/balance").then((res) => {
        this.cash = res.data.balance;
      });

      axios.get("/api/banks/balance").then((res) => {
        this.bank = res.data.balance;
      });
    },

    saveOpenbl() {
      axios.post("/api/cashes/openbl", this.openbl).then((res) => {
        this.text = "Balance added successfully.";
        this.snackbar = true;
        this.openbl = "";
        this.getData();
      });
    },

    saveInvest() {
      axios.post("/api/cashes/openbl", this.invest).then((res) => {
        this.text = "Balance added successfully.";
        this.snackbar = true;
        this.invest = "";
        this.getData();
      });
    },

    saveWithdraw() {
      axios.post("/api/cashes/withdraw", this.withdraw).then((res) => {
        this.text = "Balance withdrawn successfully.";
        this.snackbar = true;
        this.withdraw = "";
        this.getData();
      });
    },

    saveTransfer() {
      axios.post("/api/cashes/transfer", this.transfer).then((res) => {
        this.text = "Balance transfered successfully.";
        this.snackbar = true;
        this.transfer = "";
        this.getData();
      });
    },

  },
};
</script>

<style>
.tb {
  justify-content: left;
}
</style>
