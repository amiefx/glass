<template>
  <div>
    <v-row>
      <v-col cols="7">
        <v-row class="prod mr-1">
          <v-autocomplete
            v-model="product_item"
            :items="products"
            clearable
            hide-details
            hide-selected
            item-text="sku"
            item-value="id"
            label="Search for a product..."
            solo
            dense
          >
            <template v-slot:no-data>
              <v-list-item>
                <v-list-item-title>
                  Search for a
                  <strong>Product</strong>
                </v-list-item-title>
              </v-list-item>
            </template>
            <template v-slot:selection="{ attr, on, item, selected }">
              <span v-text="item.sku"></span>
            </template>
            <template v-slot:item="{ item }">
              <v-list-item-content>
                <v-list-item-title v-text="item.sku"></v-list-item-title>
              </v-list-item-content>
              <v-list-item-action>
                <span>
                  Stock:
                  <strong>
                    {{ item.onhand }}
                  </strong>
                </span>
              </v-list-item-action>
            </template>
          </v-autocomplete>
        </v-row>

        <v-divider></v-divider>

        <v-simple-table height dense>
          <template v-slot:default>
            <thead>
              <tr>
                <th></th>
                <th class="text-left">Sku</th>
                <!-- <th class="text-left">Height</th>
                <th class="text-left">Width</th> -->
                <th class="text-left">Qty</th>
                <th class="text-left">Price</th>
                <th class="text-left">Total</th>
                <!-- <th class="text-left"></th> -->
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in cart" :key="item.id">
                <td>
                  <v-btn
                    class="red--text"
                    icon
                    @click="removeProductFromCart(item.product)"
                  >
                    <v-icon>mdi-delete</v-icon>
                  </v-btn>
                </td>
                <td>
                  {{ item.product.sku }}
                  <span v-if="item.g_height">({{item.g_height}} X {{item.g_width}} )</span>
                </td>
                <td>
                  <input
                    class="numinput small1"
                    type="number"
                    v-model="item.quantity"
                  />
                </td>
                <td>
                  <input
                    class="numinput small1"
                    type="number"
                    v-model="item.product.selling_price"
                  />
                </td>

                <td allign="right">
                  {{ (item.product.selling_price * item.quantity).toFixed(0) }}
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
        <v-divider></v-divider>
      </v-col>
      <v-col cols="5" class="calculate">
        <!-- calculation part -->
        <v-dialog v-model="dialog" max-width="600px">
          <template v-slot:activator="{ on }">
            <v-btn color="primary" dark class="mb-2" v-on="on" block
              >Calculations</v-btn
            >
          </template>
          <v-card>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12">
                    <v-tabs>
                      <v-tab>
                        <v-icon left> mdi-file-document-outline </v-icon>
                        Ceiling
                      </v-tab>
                      <v-tab>
                        <v-icon left> mdi-note-text-outline </v-icon>
                        Pannels
                      </v-tab>
                      <v-tab>
                        <v-icon left> mdi-cash-multiple </v-icon>
                        Glass
                      </v-tab>
                      <!-- ceiling -->
                      <v-tab-item>
                        <v-row>
                          <v-col cols="4">
                            <v-text-field
                              v-model="ceiling_width"
                              label="Width"
                              type="number"
                              dense
                              outlined
                            ></v-text-field>
                          </v-col>
                          <v-col cols="4">
                            <v-text-field
                              v-model="ceiling_length"
                              label="Length"
                              type="number"
                              dense
                              outlined
                            ></v-text-field>
                          </v-col>
                          <v-col cols="4">
                            <v-btn
                              dark
                              color="primary"
                              class="float-right"
                              @click="getCeiling"
                            >
                              Calculate
                            </v-btn>
                          </v-col>
                        </v-row>

                        <v-simple-table height dense>
                          <template v-slot:default>
                            <thead>
                              <tr>
                                <th class="text-left">Item</th>
                                <th class="text-left">Quantity</th>
                                <th class="text-left">Unit Price</th>
                                <th class="text-left"></th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr
                                v-for="(item, index) in ceiling"
                                :key="item.index"
                              >
                                <td>
                                  <v-select
                                    v-if="index == 0"
                                    v-model="ceiling[0].id"
                                    :items="angle"
                                    item-text="name"
                                    item-value="id"
                                    label="Select Angle"
                                  ></v-select>

                                  <v-select
                                    v-if="index == 1"
                                    v-model="ceiling[1].id"
                                    :items="mainT"
                                    item-text="name"
                                    item-value="id"
                                    label="Select Main T"
                                  ></v-select>

                                  <v-select
                                    v-if="index == 2"
                                    v-model="ceiling[2].id"
                                    :items="crossT"
                                    item-text="name"
                                    item-value="id"
                                    label="Select Cross T"
                                  ></v-select>

                                  <v-select
                                    v-if="index == 3"
                                    v-model="ceiling[3].id"
                                    :items="sheets"
                                    item-text="name"
                                    item-value="id"
                                    label="Select Sheet"
                                  ></v-select>
                                </td>
                                <td>
                                  <v-text-field
                                    v-model="item.qty"
                                    label="Quantity"
                                    type="number"
                                  ></v-text-field>
                                </td>
                                <td>
                                  <span v-if="item.id">
                                    {{ getPrice(item.id) }}
                                  </span>
                                </td>

                                <td>
                                  <v-btn
                                    class="green--text"
                                    icon
                                    @click="addProductToInvoice(item)"
                                  >
                                    <v-icon>mdi-plus</v-icon>
                                  </v-btn>
                                </td>
                              </tr>
                            </tbody>
                          </template>
                        </v-simple-table>

                        <v-btn
                          dark
                          color="primary"
                          class="float-right"
                          @click="clearCeilingItems"
                          >Clear</v-btn
                        >
                      </v-tab-item>
                       <!-- pannels -->
                      <v-tab-item>
                        <v-row>
                          <v-col cols="4" class="pb-0">
                            <v-text-field
                              v-model="panel.length"
                              label="Length"
                              type="number"
                              dense
                              outlined
                            ></v-text-field>
                          </v-col>
                          <v-col cols="4" class="pb-0">
                            <v-text-field
                              v-model="panel.number"
                              label="Number"
                              type="number"
                              dense
                              outlined
                            ></v-text-field>
                          </v-col>
                          <v-col cols="4" class="pb-0">
                              <v-text-field
                              v-model="panel.removals"
                              label="Removal"
                              type="number"
                              dense
                              outlined
                            ></v-text-field>
                          </v-col>
                          <v-col cols="4" class="py-0">
                            <v-select
                               :items="panelSheetHight"
                               v-model="panel.sheet_height"
                               dense
                               outlined
                            ></v-select>
                          </v-col>
                          <v-col cols="4" class="py-0">
                            <v-select
                               :items="panelSheetWidth"
                               v-model="panel.sheet_width"
                               dense
                               outlined
                            ></v-select>
                          </v-col>
                          <v-col cols="4" class="py-0">
                            <v-btn
                              dark
                              color="primary"
                              class="float-right"
                              @click="getPanel"
                            >
                              Calculate
                            </v-btn>
                          </v-col>
                        </v-row>

                        <v-simple-table height dense>
                          <template v-slot:default>
                            <thead>
                              <tr>
                                <th class="text-left">Item</th>
                                <th class="text-left">Quantity</th>
                                <th class="text-left">Unit Price</th>
                                <th class="text-left"></th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr
                                v-for="(item, index) in peneling"
                                :key="item.index"
                              >
                                <td>
                                  <v-select
                                    v-if="index == 0"
                                    v-model="peneling[0].id"
                                    :items="panelSheets"
                                    item-text="name"
                                    item-value="id"
                                    label="Select Sheet"
                                  ></v-select>

                                  <v-select
                                    v-if="index == 1"
                                    v-model="peneling[1].id"
                                    :items="golas"
                                    item-text="name"
                                    item-value="id"
                                    label="Select Gola"
                                  ></v-select>
                                </td>
                                <td>
                                  <v-text-field
                                    v-model="item.qty"
                                    label="Quantity"
                                    type="number"
                                  ></v-text-field>
                                </td>
                                <td>
                                  <span v-if="item.id">
                                    {{ getPrice(item.id) }}
                                  </span>
                                </td>

                                <td>
                                  <v-btn
                                    class="green--text"
                                    icon
                                    @click="addProductToInvoice(item)"
                                  >
                                    <v-icon>mdi-plus</v-icon>
                                  </v-btn>
                                </td>
                              </tr>
                            </tbody>
                          </template>
                        </v-simple-table>

                        <v-btn
                          dark
                          color="primary"
                          class="float-right"
                          @click="clearPanelItems"
                          >Clear</v-btn
                        >

                      </v-tab-item>
                      <!-- glass -->
                      <v-tab-item>
                          <v-row>
                          <v-col cols="4" class="pb-0">
                            <v-text-field
                              v-model="glass.height"
                              label="Height"
                              type="number"
                              dense
                              outlined
                              @change="getStdHeight"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="4" class="pb-0">
                            <v-text-field
                              v-model="glass.width"
                              label="Width"
                              type="number"
                              dense
                              outlined
                              @change="getStdWidth"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="4" class="pb-0">
                              <v-text-field
                              v-model="glass.number"
                              label="Number"
                              type="number"
                              dense
                              outlined
                            ></v-text-field>
                          </v-col>
                          <v-col cols="4" class="py-0">
                            <v-text-field
                              v-model="glass.standard_height"
                              label="Standard Hegith"
                              type="number"
                              dense
                              outlined
                            ></v-text-field>
                          </v-col>
                          <v-col cols="4" class="py-0">
                              <v-text-field
                              v-model="glass.standard_width"
                              label="Standard Width"
                              type="number"
                              dense
                              outlined
                            ></v-text-field>
                          </v-col>
                          <v-col cols="4" class="py-0">
                            <v-btn
                              dark
                              color="primary"
                              class="float-right"
                              @click="calculateSlab"
                            >
                              Calculate
                            </v-btn>
                          </v-col>
                          {{ glass.back_end_sqrFt }} | {{ glass.invoice_sqrFt }}
                          </v-row>

                          <v-simple-table height dense>
                          <template v-slot:default>
                            <thead>
                              <tr>
                                <th class="text-left">Item</th>
                                <th class="text-left">SqrFeet</th>
                                <th class="text-left">Unit Price</th>
                                <th class="text-left"></th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr
                                v-for="(item, index) in glassItem"
                                :key="item.index"
                              >
                                <td>

                                  <v-select
                                    v-if="index == 0"
                                    v-model="glassItem[0].id"
                                    :items="glassProducts"
                                    item-text="name"
                                    item-value="id"
                                    label="Select Glass"
                                  ></v-select>
                                </td>
                                <td>
                                  <v-text-field
                                    v-model="item.qty"
                                    label="SqrFeet"
                                    type="number"
                                  ></v-text-field>
                                </td>
                                <td>
                                  <span v-if="item.id">
                                    {{ getPrice(item.id) }}
                                  </span>
                                </td>

                                <td>
                                  <v-btn
                                    class="green--text"
                                    icon
                                    @click="addProductToInvoiceSingle(item)"
                                  >
                                    <v-icon>mdi-plus</v-icon>
                                  </v-btn>
                                </td>
                              </tr>
                            </tbody>
                          </template>
                        </v-simple-table>

                        <v-btn
                          dark
                          color="primary"
                          class="float-right"
                          @click="clearGlassItems"
                          >Clear</v-btn
                        >
                      </v-tab-item>
                    </v-tabs>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
          </v-card>
        </v-dialog>

        <!-- customers -->
        <v-row class="cust mr-1">
          <v-col cols="6" class="pt-1 pb-0">
            <v-autocomplete
              v-model="cust_id"
              :items="items"
              :loading="isLoading"
              :search-input.sync="search"
              hide-details
              hide-selected
              item-text="name"
              item-value="id"
              label="Search..."
              solo
              class="autcmp"
              dense
              height="1px"
            >
              <template v-slot:no-data>
                <v-list-item>
                  <v-list-item-title> Search ... </v-list-item-title>
                </v-list-item>
              </template>
              <template v-slot:selection="{ attr, on, item, selected }">
                <span v-text="item.name"></span>
              </template>
              <template v-slot:item="{ item }">
                <v-list-item-content>
                  <v-list-item-title v-text="item.name"></v-list-item-title>
                  <v-list-item-subtitle>
                    {{ item.company_name }}
                  </v-list-item-subtitle>
                </v-list-item-content>
              </template>
            </v-autocomplete>
          </v-col>
          <v-col cols="3" v-if="cust2"> {{ cust2.work_number }} </v-col>
          <v-col cols="3" v-if="cust2"> Rs: {{ cust2.receivable }} </v-col>
        </v-row>

        <v-row v-if="cust2.id">
          <v-col cols="6" class="pb-0" v-if="cust2.id == 1">
            <input
              class="numinput"
              type="text"
              v-model="invoiceData.walkin_name"
              placeholder="Customer Name"
            />
          </v-col>
          <v-col cols="6" class="pb-0" v-if="cust2.id == 1">
            <input
              class="numinput"
              type="text"
              v-model="invoiceData.walkin_phone"
              placeholder="Phone"
            />
          </v-col>
        </v-row>

        <v-divider class="my-1"></v-divider>

        <!-- per feet total -->
        <v-row style="background-color: #eeeeee" class="px-1">
          <v-col cols="4" class="pb-0">
            <input type="checkbox" id="checkbox" v-model="perFeet.enable" />
            <label for="checkbox">Per Feet</label>
          </v-col>
          <v-col cols="4" class="py-0" v-if="perFeet.enable">
            <input
              class="numinput"
              type="number"
              v-model="perFeet.totalFeet"
              placeholder="Total Feet"
            />
          </v-col>
          <v-col cols="4" class="py-0" v-if="perFeet.enable">
            <input
              class="numinput"
              type="number"
              v-model="perFeet.rate"
              placeholder="Per Feet"
            />
          </v-col>
        </v-row>

        <v-divider class="my-1"></v-divider>

        <!-- totals -->
        <v-simple-table dense>
          <tbody>
            <tr>
              <td width="25%">Suzuki Rent</td>
              <td width="25%">
                <input
                  class="numinput"
                  type="number"
                  v-model="invoiceData.suzuki_rent"
                />
              </td>
              <td width="25%">Subtotal</td>
              <td width="25%">
                <input disabled class="numinput" v-model="invoiceTotal" />
              </td>
            </tr>
            <tr>
              <td>Driver</td>
              <td>
                <select
                  name=""
                  id=""
                  class="minimal numinput"
                  v-model="invoiceData.driver"
                >
                  <option
                    v-for="driver in drivers"
                    :key="driver.id"
                    :value="driver.id"
                  >
                    {{ driver.name }}
                  </option>
                </select>
              </td>
              <td>Discount</td>
              <td class="">
                <!-- <v-text-field height="1" outlined dense v-model="discount" type="number"></v-text-field> -->
                <input
                  class="numinput"
                  type="number"
                  v-model="invoiceData.discount"
                />
              </td>
            </tr>
            <tr>
              <td>Fitting Charges</td>
              <td>
                <input
                  class="numinput"
                  type="number"
                  v-model="invoiceData.fitting_charges"
                />
              </td>
              <td>Total</td>
              <td>
                <input
                  disabled
                  class="numinput"
                  type="number"
                  v-model="total"
                />
              </td>
            </tr>
            <tr>
              <td>Fitter</td>
              <td>
                <select
                  name=""
                  id=""
                  class="minimal numinput"
                  v-model="invoiceData.fitter"
                >
                  <option
                    v-for="fitter in fitters"
                    :key="fitter.id"
                    :value="fitter.id"
                  >
                    {{ fitter.name }}
                  </option>
                </select>
              </td>
              <td>Amount Received</td>
              <td>
                <input
                  class="numinput"
                  type="number"
                  v-model="invoiceData.received_amt"
                />
              </td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td>Amount Due</td>
              <td>
                <input
                  disabled
                  class="numinput"
                  type="number"
                  v-model="amtDue"
                />
              </td>
            </tr>
          </tbody>
        </v-simple-table>
        <v-row class="mx-5">
          <v-col cols="8">
            <v-radio-group
              v-model="invoiceData.doc_type"
              mandatory
              row
              class="radio mt-1"
            >
              <v-radio label="Invoice" value="Invoice"></v-radio>
              <v-radio label="Quotation" value="Quotation"></v-radio>
            </v-radio-group>

            <v-row>
              <v-checkbox label="Print Invoice" v-model="printInvoice"></v-checkbox>
              <v-checkbox label="Print Gate Pass" v-model="printGatePass"></v-checkbox>
            </v-row>
          </v-col>
          <v-col cols="4">
            <v-btn
              class="mb-1"
              block
              color="primary"
              :loading="loading"
              @click="saveOrder"
              >Save</v-btn
            >
            <v-btn block color="error" @click="clearCartItems">Clear all</v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
import ProductList from "../../components/ProductList.vue";
export default {
  components: {
    ProductList,
  },

  data: () => {
    return {
      snackbar: false,
      text: "",
      valid: true,
      dialog: false,
      dialog2: false,
      loading: false,
      slabs: [],
      use_slab: false,
      products: [],
      scannedBarcode: null,
      cust2: {},
      product_item: null,
      ceiling: [
        { id: null, qty: 0, price: 0 },
        { id: null, qty: 0, price: 0 },
        { id: null, qty: 0, price: 0 },
        { id: null, qty: 0, price: 0 },
      ],
      ceiling_width: null,
      ceiling_length: null,
      employees: [],

      panel: {
        number: null,
        length: null,
        removals: null,
        sheet_height: "",
        sheet_width: null,
      },

      peneling: [
        { id: null, qty: 0, price: 0 },
        { id: null, qty: 0, price: 0 }
      ],

      panelSheetHight: ["full", "half", "third"],
      panelSheetWidth: [8, 10, 16, 19],
      panelWallLength: null,
      panelWallNumber: null,

      perFeet: {
        enable: false,
        totalFeet: null,
        rate: null,
      },

      glass: {
        number: 0,
        height: 0,
        width: 0,
        standard_height: 0,
        standard_width: 0,
        back_end_sqrFt: 0,
        invoice_sqrFt: 0,
        standar_var: 0
      },

      glassItem: [
        { id: null, qty: 0, price: 0, g_height: 0, g_width: 0 }
      ],

      doc_types: ["Invoice", "Quotation"],
      invoiceData: {
        customer_id: "",
        sub_total: 0,
        discount: 0,
        received_amt: 0,
        receivable_amt: 0,
        doc_type: "",
        suzuki_rent: 0,
        fitting_charges: 0,
        driver: null,
        fitter: null,
        walkin_name: "",
        walkin_phone: "",
      },

      printInvoice: false,
      printGatePass: false,

      order: [],

      isLoading: false,
      items: [],
      cust_id: "",
      search: null,
      tab: null,
      obj: []
    };
  },

  methods: {
    removeProductFromCart(product) {
      this.$store.dispatch("cart/removeProductFromCart", product);
    },

    clearCartItems() {
      this.$store.dispatch("cart/clearCartItems");
    },

    decreaseProductQty(product) {
      this.$store.dispatch("cart/decreaseProductQty", product);
    },

    increaseProductQty(product) {
      this.$store.dispatch("cart/increaseProductQty", product);
    },

    saveOrder() {
      let orderData = {
        orderDetails: {
          customer_id: this.cust_id,
          sub_total: this.cartTotalPrice,
          discount: this.invoiceData.discount,
          total: this.total,
          received_amt: this.invoiceData.received_amt,
          receivable_amt: this.amtDue,
          doc_type: this.invoiceData.doc_type,
          suzuki_rent: this.invoiceData.suzuki_rent,
          fitting_charges: this.invoiceData.fitting_charges,
          driver: this.invoiceData.driver,
          fitter: this.invoiceData.fitter,
          walkin_name: this.invoiceData.walkin_name,
          walkin_phone: this.invoiceData.walkin_phone,
        },
        orderedItems: this.cart,
      };

      // Add a request interceptor
      axios.interceptors.request.use(
        (config) => {
          this.loading = true;
          return config;
        },
        (error) => {
          this.loading = false;
          return Promise.reject(error);
        }
      );

      // Add a response interceptor
      axios.interceptors.response.use(
        (response) => {
          this.loading = false;
          return response;
        },
        (error) => {
          this.loading = false;
          return Promise.reject(error);
        }
      );

      axios.post("/api/order", orderData).then((res) => {

        this.clearCartItems();
        this.clearData();
        console.log(orderData)
        this.invoiceData.discount = null;
        this.invoiceData.received_amt = null;
        this.invoiceData.suzuki_rent = null;
        this.invoiceData.driver = null;
        this.invoiceData.fitter = null;
        this.invoiceData.walkin_name = "";
        this.invoiceData.walkin_phone = "";

        this.initialize();

        if (this.printInvoice) {
            this.$router.push(`/admin/invoice/print/${res.data.id}`)
        }

      });
    },

    // clear data
    clearData() {
      this.perFeet.enable = false;
      this.perFeet.rate = null;
      this.perFeet.totalFeet = null;
    },

    // scanner
    scan() {
      //   console.log(this.scannedBarcode);

      let item = this.products.filter((item) => item.id == this.scannedBarcode);

      // console.log(item)

      this.$store.dispatch("cart/addProductToCart", {
        product: item[0],
        quantity: 1,
      });

      this.scannedBarcode = null;
    },

    // filtered item

    initialize() {
      // Add a request interceptor
      axios.interceptors.request.use(
        (config) => {
          this.loading = true;
          return config;
        },
        (error) => {
          this.loading = false;
          return Promise.reject(error);
        }
      );

      // Add a response interceptor
      axios.interceptors.response.use(
        (response) => {
          this.loading = false;
          return response;
        },
        (error) => {
          this.loading = false;
          return Promise.reject(error);
        }
      );

      axios.get("/api/products/all").then((res) => {
        this.products = res.data.data;
      });
    },

    changeHeight(item) {
      if (this.use_slab) {
        let height = item.product.height;
        this.slabs.forEach((slab) => {
          if (height >= slab.min && height <= slab.max) {
            this.$store.dispatch("cart/changeProductHeight", {
              product: item.product,
              height: slab.actual,
            });
          }
        });
      }
    },

    changeWidth(item) {
      if (this.use_slab) {
        let width = item.product.width;
        this.slabs.forEach((slab) => {
          if (width >= slab.min && width <= slab.max) {
            this.$store.dispatch("cart/changeProductWidth", {
              product: item.product,
              width: slab.actual,
            });
          }
        });
      }
    },

    standardSize(size) {
        this.slabs.forEach((slab) => {
          //  console.log(slab.min)
          if (size >= slab.min && size <= slab.max) {
              return slab.actual;
          }
        });
    },

    getStdHeight() {
       let size = this.glass.height;
       this.slabs.forEach((slab) => {
          //  console.log(slab.min)
          if (size >= slab.min && size <= slab.max) {
              return this.glass.standard_height = slab.actual;
          }
        });
    },

    getStdWidth() {
       let size = this.glass.width;
       this.slabs.forEach((slab) => {
          //  console.log(slab.min)
          if (size >= slab.min && size <= slab.max) {
              return this.glass.standard_width = slab.actual;
          }
        });
    },

    calculateSlab() {
        let number = this.glass.number;
        let width = this.glass.width;
        let height = this.glass.height;
        let width_s_size = this.glass.standard_width;
        let height_s_size = this.glass.standard_height;

        this.glass.back_end_sqrFt = ((width * height * number) / 144).toFixed(2);

        this.glass.invoice_sqrFt = ((width_s_size * height_s_size * number) / 144).toFixed(2);

        this.glassItem[0].qty = this.glass.invoice_sqrFt;
        this.glassItem[0].g_height = this.glass.height;
        this.glassItem[0].g_width = this.glass.width;
    },

    getCeiling() {
      let width = parseInt( this.ceiling_width );
      let length = parseInt( this.ceiling_length );
      let angle_max_length = 10;
      let main_t_max_length = 12;

      //number of angles
      let total_length = width * 2 + length * 2;
      let num_of_angles = Math.ceil(total_length / angle_max_length);

      // //main-t
      let maint_lines = Math.ceil(width / 2) - 1;
      let maint_length = length * maint_lines;
      let num_of_main_t = Math.ceil(maint_length / main_t_max_length);

      console.log(num_of_main_t);

      // //cross-t
      let num_of_cross_t = Math.ceil(Math.ceil(width / 2) * (length / 2 - 1));

      // //sheets
      let num_of_sheets = Math.ceil((width * length) / 4);

      this.ceiling[0].qty = num_of_angles;
      this.ceiling[2].qty = num_of_cross_t;
      this.ceiling[1].qty = num_of_main_t;
      this.ceiling[3].qty = num_of_sheets;
    },

    getPanel() {
      var number = parseInt( this.panel.number );
      var length = parseInt( this.panel.length );
      var sheet_width = parseInt( this.panel.sheet_width );
      var sheet_height = this.panel.sheet_height;
      var removals = parseInt(  this.panel.removals );
      var gola_max_height = 9.5;

      if (sheet_height == "full") {
          console.log('full')
        sheet_height = 9.5;
      } else if (sheet_height == "half") {
        sheet_height = 4.75;
      } else {
        sheet_height = 3.16;
      }

      if (sheet_width == 8) {
        sheet_width = 6.35;
      } else if (sheet_width == 10) {
        sheet_width = 7.92;
      } else if (sheet_width == 16) {
        sheet_width = 12.66;
      } else {
        sheet_width = 19.0;
      }

      //number of sheets
        var num_of_sheets = Math.ceil(((length * number * sheet_height) - (removals)) / sheet_width);


        //gola
        var num_of_gola = Math.ceil((((length * number * 2) + (sheet_height * number * 2)) + removals) / gola_max_height);



      this.peneling[0].qty = num_of_sheets;
      this.peneling[1].qty = num_of_gola;
    },

    getPrice(id) {
      let item = this.products.filter((p) => p.id == id);
      return item[0].selling_price;
    },

    addProductToInvoice(item) {
      //  console.log(item)
      let prod = this.products.filter((p) => p.id == item.id);

      this.$store.dispatch("cart/addProductToCart", {
        product: prod[0],
        quantity: item.qty,
      });
    },

    addProductToInvoiceSingle(item) {
      //  console.log(item)
      let prod = this.products.filter((p) => p.id == item.id);

      this.$store.dispatch("cart/addProductToCartSingle", {
        product: prod[0],
        quantity: item.qty,
        g_height: item.g_height,
        g_width: item.g_width
      });
    },

    clearCeilingItems() {
      (this.ceiling_width = null),
        (this.ceiling_length = null),
        (this.ceiling[0].id = null);
      this.ceiling[2].id = null;
      this.ceiling[1].id = null;
      this.ceiling[3].id = null;

      this.ceiling[0].qty = null;
      this.ceiling[2].qty = null;
      this.ceiling[1].qty = null;
      this.ceiling[3].qty = null;
    },

    clearPanelItems() {
      this.panel.number = null,
      this.panel.length = null,
      this.panel.removals = null,
      this.panel.sheet_height = "",
      this.panel.sheet_width = null,

      this.peneling[0].id = null;
      this.peneling[1].id = null;
      this.peneling[0].qty = null;
      this.peneling[1].qty = null;
    },

    clearGlassItems() {
        this.glass.number = 0;
        this.glass.height = 0;
        this.glass.width = 0;
        this.glass.standard_height = 0;
        this.glass.standard_width = 0;
        this.glass.back_end_sqrFt = 0;
        this.glass.invoice_sqrFt = 0;

        this.glassItem[0].id = null;
        this.glassItem[0].qty = null;
    },

    productsEditted() {

        const  xyz =  this.order.orderdetails.map(item => ({ quantity: item.quantity, product:{ id: item.product_id, sku: item.product_name, selling_price: item.price}}));
        this.obj = xyz;

    }

  },

  created() {
    this.initialize();

    axios.get("/api/slabs/all").then((res) => {
      this.slabs = res.data.data;
    });

    axios.get("/api/employees/all").then((res) => {
      this.employees = res.data.data;
    });

    axios
        .get("/api/customers/all")
        .then((res) => {
          this.items = res.data.data;
        })
        .catch((err) => {
          console.log(err);
        });

    axios
      .get(`/api/invoicedetail/${this.$route.params.id}`)
      .then(res => {
        this.order = res.data;
        this.cust_id = res.data.order.customer_id;
        this.invoiceData.discount = res.data.order.discount;
        this.invoiceData.received_amt = res.data.order.amount_recieved;
        this.invoiceData.suzuki_rent = res.data.order.discount;
        // this.invoiceData.driver = res.data.order.discount;
        // this.invoiceData.fitter = res.data.order.discount;
        this.invoiceData.walkin_name = res.data.order.discount;
        this.invoiceData.walkin_phone = res.data.order.discount;
      })
      .catch(err => {
      });

  },

  updated() {


  },

  computed: {
    ...mapState({
      cart: (state) => state.cart.cart,
    }),

    cartItemCount() {
      return this.$store.getters["cart/cartItemCount"];
    },

    cartTotalPrice() {
      return this.$store.getters["cart/cartTotalPrice"];
    },

    invoiceTotal() {
      if (this.perFeet.enable) {
        return this.perFeet.totalFeet * this.perFeet.rate;
      } else {
        return this.cartTotalPrice;
      }
    },

    total() {
      let subtotal = this.invoiceTotal;
      let discount = this.invoiceData.discount;
      let fitting_charges = parseInt(this.invoiceData.fitting_charges);
      let suzuki_rent = parseInt(this.invoiceData.suzuki_rent);

      return parseInt(subtotal - discount + fitting_charges + suzuki_rent);
    },

    amtDue() {
      return this.total - this.invoiceData.received_amt;
    },

    sheets() {
      return this.products.filter((item) => item.category == "Sheet");
    },

    mainT() {
      return this.products.filter((item) => item.category == "Main T");
    },

    crossT() {
      return this.products.filter((item) => item.category == "Cross T");
    },

    angle() {
      return this.products.filter((item) => item.category == "Angle");
    },

    golas() {
      return this.products.filter((item) => item.category == "Panel Gola");
    },

    glassProducts() {
      return this.products.filter((item) => item.category == "Glass");
    },

    panelSheets() {
      return this.products.filter((item) => item.category == "Panel Sheet");
    },

    drivers() {
      return this.employees.filter((item) => item.type == "Driver");
    },

    fitters() {
      return this.employees.filter((item) => item.type == "Fitter");
    }

  },

  watch: {
    model(val) {
      if (val != null) this.tab = 0;
      else this.tab = null;
    },
    search(val) {
      // Items have already been loaded
      if (this.items.length > 0) return;

      this.isLoading = true;

      // axios method
      axios
        .get("/api/customers/all")
        .then((res) => {
          this.items = res.data.data;
          this.isLoading = false;
        })
        .catch((err) => {
          console.log(err);
          this.isLoading = false;
        });
    },

    cust_id() {
      let customer = this.items.filter((item) => item.id == this.cust_id);
      this.cust2 = customer[0];
    },

    product_item() {
      let prod = this.products.filter((item) => item.id == this.product_item);
      //    console.log(prod[0])
      this.$store.dispatch("cart/addProductToCart", {
        product: prod[0],
        quantity: 1,
      });

      //  this.product_item = null;
    },

    order() {

        this.productsEditted()
        console.log(this.obj)
        this.$store.dispatch("cart/addProductsToCart", {
        product: this.obj
      });
    }
  },
};
</script>

<style lang="scss">
.numinput {
  border: 1px solid lightgray;
  border-radius: 5px;
  padding: 3px;
  padding-left: 10px;
  margin-top: 5px;
  margin-bottom: 5px;
  width: 90%;
}
.numinput:focus {
  border: 1px solid lightgray;
}

.radio {
  height: 30px;
}

.small1 {
  width: 70px;
}

.autcmp {
  width: 200px !important;
  padding: 0;
  background: transparent;
}

.prod {
  background-color: lightgreen;
}

.calculate {
  border-left: darkgrey solid 1px;
}

</style>
