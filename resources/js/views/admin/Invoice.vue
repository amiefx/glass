<template>
  <div>
    <v-row>
      <v-col cols="7">
        <v-row class="prod mr-1">
          <v-autocomplete
            v-model="product_item"
            :items="products"
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
                  <span v-if="item.g_height"
                    >({{ item.g_height }} X {{ item.g_width }} X
                    {{ item.g_number }} )</span
                  >
                </td>
                <td>
                  <input
                    class="numinput small1"
                    type="number"
                    v-model="item.quantity"
                  />
                </td>

                <v-tooltip bottom>
                  <template v-slot:activator="{ on, attrs }">
                    <td @dblclick="activePrice">
                      <div v-bind="attrs" v-on="on">
                        <input
                          class="numinput small1"
                          type="number"
                          v-model="item.product.selling_price"
                          :disabled="priceStatus"
                        />
                      </div>
                    </td>
                  </template>
                  <span>double click to change the price</span>
                </v-tooltip>

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
        <v-row>
          <v-col cols="6" class="py-0">
            <!-- add customer  -->
            <add-customer />
          </v-col>
          <v-col cols="6" class="py-0">
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
                              <v-col cols="3">
                                <v-text-field
                                  v-model="ceiling_width"
                                  label="Width"
                                  type="number"
                                  dense
                                  outlined
                                  @change="getCeiling"
                                ></v-text-field>
                              </v-col>
                              <v-col cols="3">
                                <v-text-field
                                  v-model="ceiling_length"
                                  label="Length"
                                  type="number"
                                  dense
                                  outlined
                                  @change="getCeiling"
                                ></v-text-field>
                              </v-col>
                              <v-col cols="3">
                                <v-text-field
                                  v-model="ceiling_number"
                                  label="Number"
                                  type="number"
                                  dense
                                  outlined
                                  @change="getCeiling"
                                ></v-text-field>
                              </v-col>
                              <!-- <v-col cols="3">
                            <v-btn
                              dark
                              color="primary"
                              class="float-right"
                              @click="getCeiling"
                            >
                              Calculate
                            </v-btn>
                          </v-col> -->
                            </v-row>

                            <v-simple-table height dense>
                              <template v-slot:default>
                                <thead>
                                  <tr>
                                    <th class="text-left">Item</th>
                                    <th class="text-left">Quantity</th>
                                    <!-- <th class="text-left">Unit Price</th>
                                <th class="text-left"></th> -->
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr
                                    v-for="(item, index) in ceiling"
                                    :key="item.index"
                                  >
                                    <td>
                                      <!-- <v-autocomplete
                                        v-if="index == 0"
                                        v-model="ceiling[0].id"
                                        :items="angle"
                                        item-text="name"
                                        item-value="id"
                                        label="Select Angle"
                                      ></v-autocomplete> -->

                                      <v-autocomplete
                                       v-if="index == 0"
                                        v-model="ceiling[0].id"
                                        :items="angle"
                                        hide-details
                                        hide-selected
                                        item-text="sku"
                                        item-value="id"
                                        label="Select Angle"
                                      >
                                        <template
                                          v-slot:selection="{
                                            attr,
                                            on,
                                            item,
                                            selected,
                                          }"
                                        >
                                          <span v-text="item.sku"></span>
                                        </template>
                                        <template v-slot:item="{ item }">
                                          <v-list-item-content>
                                            <v-list-item-title
                                              v-text="item.sku"
                                            ></v-list-item-title>
                                          </v-list-item-content>
                                          <v-list-item-action>
                                            <span>
                                              <strong>
                                                {{ item.onhand }}
                                              </strong>
                                            </span>
                                          </v-list-item-action>
                                        </template>
                                      </v-autocomplete>

                                      <v-autocomplete
                                       v-if="index == 1"
                                        v-model="ceiling[1].id"
                                        :items="mainT"
                                        hide-details
                                        hide-selected
                                        item-text="sku"
                                        item-value="id"
                                        label="Select Main T"
                                      >
                                        <template
                                          v-slot:selection="{
                                            attr,
                                            on,
                                            item,
                                            selected,
                                          }"
                                        >
                                          <span v-text="item.sku"></span>
                                        </template>
                                        <template v-slot:item="{ item }">
                                          <v-list-item-content>
                                            <v-list-item-title
                                              v-text="item.sku"
                                            ></v-list-item-title>
                                          </v-list-item-content>
                                          <v-list-item-action>
                                            <span>
                                              <strong>
                                                {{ item.onhand }}
                                              </strong>
                                            </span>
                                          </v-list-item-action>
                                        </template>
                                      </v-autocomplete>

                                      <v-autocomplete
                                       v-if="index == 2"
                                        v-model="ceiling[2].id"
                                        :items="crossT"
                                        hide-details
                                        hide-selected
                                        item-text="sku"
                                        item-value="id"
                                        label="Select Cross T"
                                      >
                                        <template
                                          v-slot:selection="{
                                            attr,
                                            on,
                                            item,
                                            selected,
                                          }"
                                        >
                                          <span v-text="item.sku"></span>
                                        </template>
                                        <template v-slot:item="{ item }">
                                          <v-list-item-content>
                                            <v-list-item-title
                                              v-text="item.sku"
                                            ></v-list-item-title>
                                          </v-list-item-content>
                                          <v-list-item-action>
                                            <span>
                                              <strong>
                                                {{ item.onhand }}
                                              </strong>
                                            </span>
                                          </v-list-item-action>
                                        </template>
                                      </v-autocomplete>

                                      <v-autocomplete
                                       v-if="index == 3"
                                        v-model="ceiling[3].id"
                                        :items="sheets"
                                        hide-details
                                        hide-selected
                                        item-text="sku"
                                        item-value="id"
                                        label="Select Sheet"
                                      >
                                        <template
                                          v-slot:selection="{
                                            attr,
                                            on,
                                            item,
                                            selected,
                                          }"
                                        >
                                          <span v-text="item.sku"></span>
                                        </template>
                                        <template v-slot:item="{ item }">
                                          <v-list-item-content>
                                            <v-list-item-title
                                              v-text="item.sku"
                                            ></v-list-item-title>
                                          </v-list-item-content>
                                          <v-list-item-action>
                                            <span>
                                              <strong>
                                                {{ item.onhand }}
                                              </strong>
                                            </span>
                                          </v-list-item-action>
                                        </template>
                                      </v-autocomplete>

                                    </td>
                                    <td>
                                      <v-text-field
                                        v-model="item.qty"
                                        label="Quantity"
                                        type="number"
                                      ></v-text-field>
                                    </td>
                                    <!-- <td>
                                  <span v-if="item.id">
                                    {{ getPrice(item.id) }}
                                  </span>
                                </td> -->

                                    <!-- <td>
                                  <v-btn
                                    class="green--text"
                                    icon
                                    @click="addProductToInvoice(item)"
                                  >
                                    <v-icon>mdi-plus</v-icon>
                                  </v-btn>
                                </td> -->
                                  </tr>
                                </tbody>
                              </template>
                            </v-simple-table>

                            <v-btn
                              dark
                              color="primary"
                              class="float-right"
                              @click="addCeilingProductToInvoice"
                              >Add to Invoice</v-btn
                            >

                            <v-btn
                              dark
                              color="red"
                              class="float-right mx-2"
                              @click="clearCeilingItems"
                              >Clear
                            </v-btn>
                          </v-tab-item>
                          <!-- pannels -->
                          <v-tab-item>
                            <v-row>
                              <v-col cols="3" class="pb-0">
                                <v-text-field
                                  v-model="panel.length"
                                  label="Length"
                                  type="number"
                                  dense
                                  outlined
                                  @change="getPanel"
                                ></v-text-field>
                              </v-col>
                              <v-col cols="3" class="pb-0">
                                <v-text-field
                                  v-model="panel.number"
                                  label="Number"
                                  type="number"
                                  dense
                                  outlined
                                  @change="getPanel"
                                ></v-text-field>
                              </v-col>
                              <v-col cols="3" class="pb-0">
                                <v-text-field
                                  v-model="panel.removals"
                                  label="Removal"
                                  type="number"
                                  dense
                                  outlined
                                  @change="getPanel"
                                ></v-text-field>
                              </v-col>
                              <v-col cols="3" class="pb-0">
                                <v-select
                                  :items="panelSheetHight"
                                  v-model="panel.sheet_height"
                                  dense
                                  outlined
                                  @change="getPanel"
                                ></v-select>
                              </v-col>
                              <v-col cols="3" class="py-0">
                                <v-select
                                  :items="panelSheetWidth"
                                  v-model="panel.sheet_width"
                                  item-text="size"
                                  item-value="standard_size"
                                  dense
                                  outlined
                                  @change="getPanel"
                                ></v-select>
                              </v-col>
                              <!-- <v-col cols="4" class="py-0">
                            <v-btn
                              dark
                              color="primary"
                              class="float-right"
                              @click="getPanel"
                            >
                              Calculate
                            </v-btn>
                          </v-col> -->
                            </v-row>

                            <v-simple-table height dense>
                              <template v-slot:default>
                                <thead>
                                  <tr>
                                    <th class="text-left">Item</th>
                                    <th class="text-left">Quantity</th>
                                    <!-- <th class="text-left">Unit Price</th>
                                <th class="text-left"></th> -->
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr
                                    v-for="(item, index) in peneling"
                                    :key="item.index"
                                  >
                                    <td>
                                      <v-autocomplete
                                       v-if="index == 0"
                                        v-model="peneling[0].id"
                                        :items="panelSheets"
                                        hide-details
                                        hide-selected
                                        item-text="sku"
                                        item-value="id"
                                        label="Select Sheet"
                                      >
                                        <template
                                          v-slot:selection="{
                                            attr,
                                            on,
                                            item,
                                            selected,
                                          }"
                                        >
                                          <span v-text="item.sku"></span>
                                        </template>
                                        <template v-slot:item="{ item }">
                                          <v-list-item-content>
                                            <v-list-item-title
                                              v-text="item.sku"
                                            ></v-list-item-title>
                                          </v-list-item-content>
                                          <v-list-item-action>
                                            <span>
                                              <strong>
                                                {{ item.onhand }}
                                              </strong>
                                            </span>
                                          </v-list-item-action>
                                        </template>
                                      </v-autocomplete>

                                      <v-autocomplete
                                       v-if="index == 1"
                                        v-model="peneling[1].id"
                                        :items="golas"
                                        hide-details
                                        hide-selected
                                        item-text="sku"
                                        item-value="id"
                                        label="Select Gola"
                                      >
                                        <template
                                          v-slot:selection="{
                                            attr,
                                            on,
                                            item,
                                            selected,
                                          }"
                                        >
                                          <span v-text="item.sku"></span>
                                        </template>
                                        <template v-slot:item="{ item }">
                                          <v-list-item-content>
                                            <v-list-item-title
                                              v-text="item.sku"
                                            ></v-list-item-title>
                                          </v-list-item-content>
                                          <v-list-item-action>
                                            <span>
                                              <strong>
                                                {{ item.onhand }}
                                              </strong>
                                            </span>
                                          </v-list-item-action>
                                        </template>
                                      </v-autocomplete>

                                    </td>
                                    <td>
                                      <v-text-field
                                        v-model="item.qty"
                                        label="Quantity"
                                        type="number"
                                      ></v-text-field>
                                    </td>
                                    <!-- <td>
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
                                </td> -->
                                  </tr>
                                </tbody>
                              </template>
                            </v-simple-table>

                            <v-btn
                              dark
                              color="primary"
                              class="float-right"
                              @click="addPanelProductToInvoice"
                              >Add to invoice</v-btn
                            >

                            <v-btn
                              dark
                              color="red"
                              class="float-right mx-2"
                              @click="clearPanelItems"
                              >Clear</v-btn
                            >
                          </v-tab-item>
                          <!-- glass -->
                          <v-tab-item>
                            <v-row>
                              <v-col cols="3" class="pb-0">
                                <v-text-field
                                  v-model="glass.width"
                                  label="Width"
                                  type="number"
                                  dense
                                  outlined
                                  @change="getStdWidth"
                                  @input="calculateSlab"
                                ></v-text-field>
                              </v-col>
                              <v-col cols="3" class="pb-0">
                                <v-text-field
                                  v-model="glass.height"
                                  label="Height"
                                  type="number"
                                  dense
                                  outlined
                                  @change="getStdHeight"
                                  @input="calculateSlab"
                                ></v-text-field>
                              </v-col>
                              <v-col cols="3" class="pb-0">
                                <v-text-field
                                  v-model="glass.number"
                                  label="Number"
                                  type="number"
                                  dense
                                  outlined
                                  @change="calculateSlab"
                                ></v-text-field>
                              </v-col>
                              <v-col cols="3" class="pb-0">
                                <v-text-field
                                  v-model="glass.back_end_sqrFt"
                                  label="Actual sqft"
                                  type="number"
                                  dense
                                  outlined
                                  disabled
                                  @change="calculateSlab"
                                ></v-text-field>
                              </v-col>
                              <v-col cols="3" class="py-0">
                                <v-text-field
                                  v-model="glass.standard_width"
                                  label="Standard Width"
                                  type="number"
                                  dense
                                  outlined
                                  @change="calculateSlab"
                                ></v-text-field>
                              </v-col>
                              <v-col cols="3" class="py-0">
                                <v-text-field
                                  v-model="glass.standard_height"
                                  label="Standard Hegith"
                                  type="number"
                                  dense
                                  outlined
                                  @change="calculateSlab"
                                ></v-text-field>
                              </v-col>
                              <v-col cols="3" class="py-0">
                                <v-text-field
                                  v-model="glass.invoice_sqrFt"
                                  label="Standard sqft"
                                  type="number"
                                  dense
                                  outlined
                                  @change="calculateSlab"
                                ></v-text-field>
                              </v-col>
                              <!-- <v-col cols="3" class="py-0">
                            <v-btn
                              dark
                              color="primary"
                              class="float-right"
                              @click="calculateSlab"
                            >
                              Calculate
                            </v-btn>
                          </v-col> -->
                            </v-row>

                            <v-simple-table height dense>
                              <template v-slot:default>
                                <thead>
                                  <tr>
                                    <th class="text-left">Item</th>
                                    <th class="text-left">SqrFeet</th>
                                    <!-- <th class="text-left">Unit Price</th> -->
                                    <th class="text-left"></th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr
                                    v-for="(item, index) in glassItem"
                                    :key="item.index"
                                  >
                                    <td>
                                      <v-autocomplete
                                       v-if="index == 0"
                                        v-model="glassItem[0].id"
                                        :items="glassProducts"
                                        hide-details
                                        hide-selected
                                        item-text="sku"
                                        item-value="id"
                                        label="Select Glass"
                                      >
                                        <template
                                          v-slot:selection="{
                                            attr,
                                            on,
                                            item,
                                            selected,
                                          }"
                                        >
                                          <span v-text="item.sku"></span>
                                        </template>
                                        <template v-slot:item="{ item }">
                                          <v-list-item-content>
                                            <v-list-item-title
                                              v-text="item.sku"
                                            ></v-list-item-title>
                                          </v-list-item-content>
                                          <v-list-item-action>
                                            <span>
                                              <strong>
                                                {{ item.onhand }}
                                              </strong>
                                            </span>
                                          </v-list-item-action>
                                        </template>
                                      </v-autocomplete>
                                    </td>
                                    <td>
                                      <v-text-field
                                        v-model="item.qty"
                                        label="SqrFeet"
                                        type="number"
                                      ></v-text-field>
                                    </td>
                                    <!-- <td>
                                  <span v-if="item.id">
                                    {{ getPrice(item.id) }}
                                  </span>
                                </td> -->
                                    <td>
                                      <v-btn
                                        dark
                                        color="primary"
                                        @click="addProductToInvoiceSingle(item)"
                                      >
                                        Add to Invoice
                                      </v-btn>
                                    </td>
                                  </tr>
                                </tbody>
                              </template>
                            </v-simple-table>

                            <v-btn
                              dark
                              color="red"
                              class="float-right mr-4"
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
          </v-col>
        </v-row>

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
          <v-col cols="3" v-if="cust2" class="bg-warning">
            Rs: {{ cust2.receivable }}
          </v-col>
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
              @click="getRA"
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
              <td width="20%">Suzuki Rent</td>
              <td width="30%">
                <input
                  class="numinput"
                  type="number"
                  v-model="invoiceData.suzuki_rent"
                />
              </td>
              <td width="20%">Subtotal</td>
              <td width="30%">
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
              <td>Polish</td>
              <td>
                <input
                  class="numinput"
                  type="number"
                  v-model="invoiceData.polish"
                />
              </td>
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
              dense
            >
              <v-radio label="Invoice" value="Invoice"></v-radio>
              <v-radio label="Quotation" value="Quotation"></v-radio>
            </v-radio-group>

            <v-radio-group
              v-model="printPage"
              mandatory
              row
              class="radio mt-1"
              dense
            >
              <v-radio label="thermal" value="thermal"></v-radio>
              <v-radio label="A4" value="a4"></v-radio>
            </v-radio-group>

            <v-row class="ma-0 pa-0 mt-n2">
              <v-checkbox label="Invoice" v-model="printInvoice"></v-checkbox>
              <v-checkbox
                label="Gate Pass"
                v-model="printGatePass"
                dense
              ></v-checkbox>
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
import AddCustomer from "../../components/AddCustomer.vue";
import ProductList from "../../components/ProductList.vue";
export default {
  components: {
    ProductList,
    AddCustomer,
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
      ceiling_width: 0,
      ceiling_length: 0,
      ceiling_number: 0,
      ceiling_input: [],
      employees: [],

      panel: {
        number: 0,
        length: 0,
        removals: 0,
        sheet_height: "full",
        sheet_width: 10,
      },

      peneling: [
        { id: null, qty: 0, price: 0 },
        { id: null, qty: 0, price: 0 },
      ],

      paneling_input: [],

      panelSheetHight: ["full", "half", "third"],
      panelSheetWidth: [],
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
        standar_var: 0,
      },

      glass_input: [],

      glassItem: [
        { id: null, qty: 0, price: 0, g_height: 0, g_width: 0, g_number: 0 },
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
        polish: 0,
        note: {},
      },

      printInvoice: false,
      printGatePass: false,
      printPage: "thermal",

      priceStatus: true,
      priceChange: false,
      isLoading: false,
      items: [],
      cust_id: "",
      search: null,
      tab: null,
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
          polish: this.invoiceData.polish,
          priceflag: this.priceChange,
          note: {
            panel_input: this.paneling_input,
            ceiling_input: this.ceiling_input,
            glass_input: this.glass_input,
          },
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

      console.log(orderData);

      axios.post("/api/order", orderData).then((res) => {
        console.log(orderData);
        this.clearCartItems();
        this.clearData();

        this.invoiceData.discount = 0;
        this.invoiceData.received_amt = 0;
        this.invoiceData.suzuki_rent = 0;
        this.invoiceData.fitting_charges = 0;
        this.invoiceData.driver = null;
        this.invoiceData.fitter = null;
        this.invoiceData.walkin_name = "";
        this.invoiceData.walkin_phone = "";
        this.invoiceData.note = {};
        (this.paneling_input = []),
          (this.ceiling_input = []),
          (this.glass_input = []);

        this.initialize();

        if (this.printPage == "thermal") {
          if (this.printInvoice && this.printGatePass) {
            // let routeData = this.$router.resolve({name: 'order-edit', query: {data: res.data.id}});
            let routeData = this.$router.resolve(
              `/admin/invoice/print/${res.data.order.id}`
            );
            window.open(routeData.href, "_blank");
            //  this.$router.push(`/admin/invoice/print/${res.data.id}`);

            let routeData2 = this.$router.resolve(
              `/admin/invoice/print/tmgatepass/${res.data.order.id}`
            );
            window.open(routeData2.href, "_blank");
          } else if (this.printInvoice) {
            let routeData = this.$router.resolve(
              `/admin/invoice/print/${res.data.order.id}`
            );
            window.open(routeData.href, "_blank");
          } else if (this.printGatePass) {
            let routeData2 = this.$router.resolve(
              `/admin/invoice/print/tmgatepass/${res.data.order.id}`
            );
            window.open(routeData2.href, "_blank");
          } else {
            return;
          }
        } else if (this.printPage == "a4") {
          if (this.printInvoice && this.printGatePass) {
            // let routeData = this.$router.resolve({name: 'order-edit', query: {data: res.data.id}});
            let routeData = this.$router.resolve(
              `/admin/invoice/print/a4/${res.data.order.id}`
            );
            window.open(routeData.href, "_blank");
            //  this.$router.push(`/admin/invoice/print/${res.data.id}`);

            let routeData2 = this.$router.resolve(
              `/admin/invoice/print/a4gatepass/${res.data.order.id}`
            );
            window.open(routeData2.href, "_blank");
          } else if (this.printInvoice) {
            let routeData = this.$router.resolve(
              `/admin/invoice/print/${res.data.order.id}`
            );
            window.open(routeData.href, "_blank");
          } else if (this.printGatePass) {
            let routeData2 = this.$router.resolve(
              `/admin/invoice/print/a4gatepass/${res.data.order.id}`
            );
            window.open(routeData2.href, "_blank");
          } else {
            return;
          }
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
          return (this.glass.standard_height = slab.actual);
        }
      });
    },

    getStdWidth() {
      let size = this.glass.width;
      this.slabs.forEach((slab) => {
        //  console.log(slab.min)
        if (size >= slab.min && size <= slab.max) {
          return (this.glass.standard_width = slab.actual);
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

      this.glass.invoice_sqrFt = (
        (width_s_size * height_s_size * number) /
        144
      ).toFixed(2);

      this.glassItem[0].qty = this.glass.invoice_sqrFt;
      this.glassItem[0].g_height = this.glass.height;
      this.glassItem[0].g_width = this.glass.width;
      this.glassItem[0].g_number = this.glass.number;
    },

    getCeiling() {
      let width = parseInt(this.ceiling_width);
      let length = parseInt(this.ceiling_length);
      let number = parseInt(this.ceiling_number);
      let angle_max_length = 10;
      let main_t_max_length = 12;

      //number of angles
      let total_length = width * 2 + length * 2;
      let num_of_angles = Math.ceil(total_length / angle_max_length) * number;

      // //main-t
      let maint_lines = Math.ceil(width / 2) - 1;
      let maint_length = length * maint_lines;
      let num_of_main_t = Math.ceil(maint_length / main_t_max_length) * number;

      // //cross-t
      let num_of_cross_t =
        Math.ceil(Math.ceil(width / 2) * (length / 2 - 1)) * number;

      // //sheets
      let num_of_sheets = Math.ceil((width * length) / 4) * number;

      this.ceiling[0].qty = num_of_angles;
      this.ceiling[2].qty = num_of_cross_t;
      this.ceiling[1].qty = num_of_main_t;
      this.ceiling[3].qty = num_of_sheets;
    },

    getPanel() {
      var number = parseInt(this.panel.number);
      var length = parseInt(this.panel.length);
      var sheet_width = parseInt(this.panel.sheet_width);
      var sheet_height = this.panel.sheet_height;
      var removals = parseInt(this.panel.removals);
      var gola_max_height = 9.5;

      if (sheet_height == "full") {
        console.log("full");
        sheet_height = 9.5;
      } else if (sheet_height == "half") {
        sheet_height = 4.75;
      } else {
        sheet_height = 3.16;
      }

    //   if (sheet_width == 8) {
    //     sheet_width = 6.35;
    //   } else if (sheet_width == 10) {
    //     sheet_width = 7.92;
    //   } else if (sheet_width == 16) {
    //     sheet_width = 12.66;
    //   } else {
    //     sheet_width = 19.0;
    //   }

      //number of sheets
      var num_of_sheets = Math.ceil(
        (length * number * sheet_height - removals) / sheet_width
      );

      //gola
      var num_of_gola = Math.ceil(
        (length * number * 2 + sheet_height * number * 2 + removals) /
          gola_max_height
      );

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

    addCeilingProductToInvoice() {
      // add product
      this.ceiling.forEach((prod) => {
        let item = this.products.filter((p) => p.id == prod.id);
        this.$store.dispatch("cart/addProductToCart", {
          product: item[0],
          quantity: prod.qty,
        });
      });

      // add inputs
      this.ceiling_input.push({
        width: this.ceiling_width,
        length: this.ceiling_length,
        number: this.ceiling_number,
      });

      // remove inputs ceiling
      this.clearCeilingItems();

      // close modal
      this.dialog = false;
    },

    addPanelProductToInvoice() {
      // add product
      this.peneling.forEach((prod) => {
        let item = this.products.filter((p) => p.id == prod.id);
        this.$store.dispatch("cart/addProductToCart", {
          product: item[0],
          quantity: prod.qty,
        });
      });

      // add inputs
      this.paneling_input.push({
        number: this.panel.number,
        length: this.panel.length,
        removals: this.panel.removals,
        sheet_height: this.panel.sheet_height,
        sheet_width: this.panel.sheet_width,
      });

      // remove inputs ceiling
      this.clearPanelItems();

      // close modal
      this.dialog = false;
    },

    addProductToInvoiceSingle(item) {
      //  console.log(item)
      let prod = this.products.filter((p) => p.id == item.id);

      this.$store.dispatch("cart/addProductToCartSingle", {
        product: prod[0],
        quantity: item.qty,
        g_height: item.g_height,
        g_width: item.g_width,
        g_number: item.g_number,
      });

      // add input
      this.glass_input.push({
        width: this.glass.width,
        height: this.glass.height,
        number: this.glass.number,
        sqft: this.glass.back_end_sqrFt,
        std_width: this.glass.standard_width,
        std_height: this.glass.standard_height,
        std_sqft: this.glass.invoice_sqrFt,
      });

      this.clearGlassItems();
    },

    clearCeilingItems() {
      (this.ceiling_width = 0),
        (this.ceiling_length = 0),
        (this.ceiling_number = 0),
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
      (this.panel.number = null),
        (this.panel.length = null),
        (this.panel.removals = null),
        (this.panel.sheet_height = "full"),
        (this.panel.sheet_width = 10),
        (this.peneling[0].id = null);
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

      this.dialog = false;
    },

    activePrice() {
      this.priceStatus = false;
      if (!admin) {
        this.priceChange = true;
      }
    },

    getRA() {
      axios
        .get(`/api/orderbywalkinphone/${this.invoiceData.walkin_phone}`)
        .then((res) => {
          this.ra_balance = res.data.orders[0].balance;
          this.cust2.receivable = this.ra_balance;
          console.log(res.data.orders[0].balance);
        });
    },
  },

  created() {
    this.initialize();

    axios.get("/api/slabs/all").then((res) => {
      this.slabs = res.data.data;
    });

    axios.get("/api/panels/all").then((res) => {
      this.panelSheetWidth = res.data.data;
    });

    axios.get("/api/employees/all").then((res) => {
      this.employees = res.data.data;
    });
  },

  computed: {
    ...mapState({
      cart: (state) => state.cart.cart,
    }),

    admin() {
      return this.$store.getters["auth/admin"];
    },

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
      let polish = parseInt(this.invoiceData.polish);

      return parseInt(
        subtotal - discount + fitting_charges + suzuki_rent + polish
      );
    },

    amtDue() {
      return this.total - this.invoiceData.received_amt;
    },

    sheets() {
      return this.products.filter(
        (item) => item.category == "Sheet" && item.type == "Ceiling"
      );
    },

    mainT() {
      return this.products.filter(
        (item) => item.category == "Main T" && item.type == "Ceiling"
      );
    },

    crossT() {
      return this.products.filter(
        (item) => item.category == "Cross T" && item.type == "Ceiling"
      );
    },

    angle() {
      return this.products.filter(
        (item) => item.category == "Angle" && item.type == "Ceiling"
      );
    },

    golas() {
      return this.products.filter(
        (item) => item.category == "Panel Gola" && item.type == "Panel"
      );
    },

    glassProducts() {
      return this.products.filter(
        (item) => item.category == "Glass" && item.type == "Glass"
      );
    },

    panelSheets() {
      return this.products.filter(
        (item) => item.category == "Panel Sheet" && item.type == "Panel"
      );
    },

    drivers() {
      return this.employees.filter((item) => item.type == "Driver");
    },

    fitters() {
      return this.employees.filter((item) => item.type == "Fitter");
    },
  },

  watch: {
    model(val) {
      if (val != null) this.tab = 0;
      else this.tab = null;
    },
    search(val) {
      // Items have already been loaded
      // if (this.items.length > 0) return;

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
      let product_id = this.product_item ? this.product_item : 0;
      let prod = this.products.filter((item) => item.id == product_id);
      //    console.log(prod[0])
      this.$store.dispatch("cart/addProductToCart", {
        product: prod[0],
        quantity: 1,
      });

      //  this.product_item = null;
    },
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
