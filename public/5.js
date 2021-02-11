(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ProductList.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ProductList.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    products: {
      required: true,
      type: Array
    }
  },
  data: function data() {
    return {
      search: "",
      headers: [{
        text: "SKU",
        align: "start",
        sortable: true,
        value: "sku"
      }, {
        text: "Price",
        value: "selling_price"
      }, {
        text: "Quantity",
        value: "onhand"
      }]
    };
  },
  methods: {
    editItem: function editItem(item) {
      console.log(item);
    },
    addToCart: function addToCart(item) {
      //const index = event.currentTarget.id;
      var index = this.products.indexOf(item); // console.log(index);

      this.$store.dispatch("cart/addProductToCart", {
        product: this.products[index],
        quantity: 1
      }); //   console.log(this.products[index])
    },
    getColor: function getColor(alert) {
      if (alert) return "red";else return "green";
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/InvoiceEdit.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/InvoiceEdit.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _components_ProductList_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/ProductList.vue */ "./resources/js/components/ProductList.vue");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    ProductList: _components_ProductList_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
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
      ceiling: [{
        id: null,
        qty: 0,
        price: 0
      }, {
        id: null,
        qty: 0,
        price: 0
      }, {
        id: null,
        qty: 0,
        price: 0
      }, {
        id: null,
        qty: 0,
        price: 0
      }],
      ceiling_width: null,
      ceiling_length: null,
      employees: [],
      panel: {
        number: null,
        length: null,
        removals: null,
        sheet_height: "",
        sheet_width: null
      },
      peneling: [{
        id: null,
        qty: 0,
        price: 0
      }, {
        id: null,
        qty: 0,
        price: 0
      }],
      panelSheetHight: ["full", "half", "third"],
      panelSheetWidth: [8, 10, 16, 19],
      panelWallLength: null,
      panelWallNumber: null,
      perFeet: {
        enable: false,
        totalFeet: null,
        rate: null
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
      glassItem: [{
        id: null,
        qty: 0,
        price: 0,
        g_height: 0,
        g_width: 0
      }],
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
        walkin_phone: ""
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
    removeProductFromCart: function removeProductFromCart(product) {
      this.$store.dispatch("cart/removeProductFromCart", product);
    },
    clearCartItems: function clearCartItems() {
      this.$store.dispatch("cart/clearCartItems");
    },
    decreaseProductQty: function decreaseProductQty(product) {
      this.$store.dispatch("cart/decreaseProductQty", product);
    },
    increaseProductQty: function increaseProductQty(product) {
      this.$store.dispatch("cart/increaseProductQty", product);
    },
    saveOrder: function saveOrder() {
      var _this = this;

      var orderData = {
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
          walkin_phone: this.invoiceData.walkin_phone
        },
        orderedItems: this.cart
      }; // Add a request interceptor

      axios.interceptors.request.use(function (config) {
        _this.loading = true;
        return config;
      }, function (error) {
        _this.loading = false;
        return Promise.reject(error);
      }); // Add a response interceptor

      axios.interceptors.response.use(function (response) {
        _this.loading = false;
        return response;
      }, function (error) {
        _this.loading = false;
        return Promise.reject(error);
      });
      axios.post("/api/order", orderData).then(function (res) {
        _this.clearCartItems();

        _this.clearData();

        console.log(orderData);
        _this.invoiceData.discount = null;
        _this.invoiceData.received_amt = null;
        _this.invoiceData.suzuki_rent = null;
        _this.invoiceData.driver = null;
        _this.invoiceData.fitter = null;
        _this.invoiceData.walkin_name = "";
        _this.invoiceData.walkin_phone = "";

        _this.initialize();

        if (_this.printInvoice) {
          _this.$router.push("/admin/invoice/print/".concat(res.data.id));
        }
      });
    },
    // clear data
    clearData: function clearData() {
      this.perFeet.enable = false;
      this.perFeet.rate = null;
      this.perFeet.totalFeet = null;
    },
    // scanner
    scan: function scan() {
      var _this2 = this;

      //   console.log(this.scannedBarcode);
      var item = this.products.filter(function (item) {
        return item.id == _this2.scannedBarcode;
      }); // console.log(item)

      this.$store.dispatch("cart/addProductToCart", {
        product: item[0],
        quantity: 1
      });
      this.scannedBarcode = null;
    },
    // filtered item
    initialize: function initialize() {
      var _this3 = this;

      // Add a request interceptor
      axios.interceptors.request.use(function (config) {
        _this3.loading = true;
        return config;
      }, function (error) {
        _this3.loading = false;
        return Promise.reject(error);
      }); // Add a response interceptor

      axios.interceptors.response.use(function (response) {
        _this3.loading = false;
        return response;
      }, function (error) {
        _this3.loading = false;
        return Promise.reject(error);
      });
      axios.get("/api/products/all").then(function (res) {
        _this3.products = res.data.data;
      });
    },
    changeHeight: function changeHeight(item) {
      var _this4 = this;

      if (this.use_slab) {
        var height = item.product.height;
        this.slabs.forEach(function (slab) {
          if (height >= slab.min && height <= slab.max) {
            _this4.$store.dispatch("cart/changeProductHeight", {
              product: item.product,
              height: slab.actual
            });
          }
        });
      }
    },
    changeWidth: function changeWidth(item) {
      var _this5 = this;

      if (this.use_slab) {
        var width = item.product.width;
        this.slabs.forEach(function (slab) {
          if (width >= slab.min && width <= slab.max) {
            _this5.$store.dispatch("cart/changeProductWidth", {
              product: item.product,
              width: slab.actual
            });
          }
        });
      }
    },
    standardSize: function standardSize(size) {
      this.slabs.forEach(function (slab) {
        //  console.log(slab.min)
        if (size >= slab.min && size <= slab.max) {
          return slab.actual;
        }
      });
    },
    getStdHeight: function getStdHeight() {
      var _this6 = this;

      var size = this.glass.height;
      this.slabs.forEach(function (slab) {
        //  console.log(slab.min)
        if (size >= slab.min && size <= slab.max) {
          return _this6.glass.standard_height = slab.actual;
        }
      });
    },
    getStdWidth: function getStdWidth() {
      var _this7 = this;

      var size = this.glass.width;
      this.slabs.forEach(function (slab) {
        //  console.log(slab.min)
        if (size >= slab.min && size <= slab.max) {
          return _this7.glass.standard_width = slab.actual;
        }
      });
    },
    calculateSlab: function calculateSlab() {
      var number = this.glass.number;
      var width = this.glass.width;
      var height = this.glass.height;
      var width_s_size = this.glass.standard_width;
      var height_s_size = this.glass.standard_height;
      this.glass.back_end_sqrFt = (width * height * number / 144).toFixed(2);
      this.glass.invoice_sqrFt = (width_s_size * height_s_size * number / 144).toFixed(2);
      this.glassItem[0].qty = this.glass.invoice_sqrFt;
      this.glassItem[0].g_height = this.glass.height;
      this.glassItem[0].g_width = this.glass.width;
    },
    getCeiling: function getCeiling() {
      var width = parseInt(this.ceiling_width);
      var length = parseInt(this.ceiling_length);
      var angle_max_length = 10;
      var main_t_max_length = 12; //number of angles

      var total_length = width * 2 + length * 2;
      var num_of_angles = Math.ceil(total_length / angle_max_length); // //main-t

      var maint_lines = Math.ceil(width / 2) - 1;
      var maint_length = length * maint_lines;
      var num_of_main_t = Math.ceil(maint_length / main_t_max_length);
      console.log(num_of_main_t); // //cross-t

      var num_of_cross_t = Math.ceil(Math.ceil(width / 2) * (length / 2 - 1)); // //sheets

      var num_of_sheets = Math.ceil(width * length / 4);
      this.ceiling[0].qty = num_of_angles;
      this.ceiling[2].qty = num_of_cross_t;
      this.ceiling[1].qty = num_of_main_t;
      this.ceiling[3].qty = num_of_sheets;
    },
    getPanel: function getPanel() {
      var number = parseInt(this.panel.number);
      var length = parseInt(this.panel.length);
      var sheet_width = parseInt(this.panel.sheet_width);
      var sheet_height = this.panel.sheet_height;
      var removals = parseInt(this.panel.removals);
      var gola_max_height = 9.5;

      if (sheet_height == "full") {
        console.log('full');
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
      } //number of sheets


      var num_of_sheets = Math.ceil((length * number * sheet_height - removals) / sheet_width); //gola

      var num_of_gola = Math.ceil((length * number * 2 + sheet_height * number * 2 + removals) / gola_max_height);
      this.peneling[0].qty = num_of_sheets;
      this.peneling[1].qty = num_of_gola;
    },
    getPrice: function getPrice(id) {
      var item = this.products.filter(function (p) {
        return p.id == id;
      });
      return item[0].selling_price;
    },
    addProductToInvoice: function addProductToInvoice(item) {
      //  console.log(item)
      var prod = this.products.filter(function (p) {
        return p.id == item.id;
      });
      this.$store.dispatch("cart/addProductToCart", {
        product: prod[0],
        quantity: item.qty
      });
    },
    addProductToInvoiceSingle: function addProductToInvoiceSingle(item) {
      //  console.log(item)
      var prod = this.products.filter(function (p) {
        return p.id == item.id;
      });
      this.$store.dispatch("cart/addProductToCartSingle", {
        product: prod[0],
        quantity: item.qty,
        g_height: item.g_height,
        g_width: item.g_width
      });
    },
    clearCeilingItems: function clearCeilingItems() {
      this.ceiling_width = null, this.ceiling_length = null, this.ceiling[0].id = null;
      this.ceiling[2].id = null;
      this.ceiling[1].id = null;
      this.ceiling[3].id = null;
      this.ceiling[0].qty = null;
      this.ceiling[2].qty = null;
      this.ceiling[1].qty = null;
      this.ceiling[3].qty = null;
    },
    clearPanelItems: function clearPanelItems() {
      this.panel.number = null, this.panel.length = null, this.panel.removals = null, this.panel.sheet_height = "", this.panel.sheet_width = null, this.peneling[0].id = null;
      this.peneling[1].id = null;
      this.peneling[0].qty = null;
      this.peneling[1].qty = null;
    },
    clearGlassItems: function clearGlassItems() {
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
    productsEditted: function productsEditted() {
      var xyz = this.order.orderdetails.map(function (item) {
        return {
          quantity: item.quantity,
          product: {
            id: item.product_id,
            sku: item.product_name,
            selling_price: item.price
          }
        };
      });
      this.obj = xyz;
    }
  },
  created: function created() {
    var _this8 = this;

    this.initialize();
    axios.get("/api/slabs/all").then(function (res) {
      _this8.slabs = res.data.data;
    });
    axios.get("/api/employees/all").then(function (res) {
      _this8.employees = res.data.data;
    });
    axios.get("/api/customers/all").then(function (res) {
      _this8.items = res.data.data;
    })["catch"](function (err) {
      console.log(err);
    });
    axios.get("/api/invoicedetail/".concat(this.$route.params.id)).then(function (res) {
      _this8.order = res.data;
      _this8.cust_id = res.data.order.customer_id;
      _this8.invoiceData.discount = res.data.order.discount;
      _this8.invoiceData.received_amt = res.data.order.amount_recieved;
      _this8.invoiceData.suzuki_rent = res.data.order.discount; // this.invoiceData.driver = res.data.order.discount;
      // this.invoiceData.fitter = res.data.order.discount;

      _this8.invoiceData.walkin_name = res.data.order.discount;
      _this8.invoiceData.walkin_phone = res.data.order.discount;
    })["catch"](function (err) {});
  },
  updated: function updated() {},
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])({
    cart: function cart(state) {
      return state.cart.cart;
    }
  })), {}, {
    cartItemCount: function cartItemCount() {
      return this.$store.getters["cart/cartItemCount"];
    },
    cartTotalPrice: function cartTotalPrice() {
      return this.$store.getters["cart/cartTotalPrice"];
    },
    invoiceTotal: function invoiceTotal() {
      if (this.perFeet.enable) {
        return this.perFeet.totalFeet * this.perFeet.rate;
      } else {
        return this.cartTotalPrice;
      }
    },
    total: function total() {
      var subtotal = this.invoiceTotal;
      var discount = this.invoiceData.discount;
      var fitting_charges = parseInt(this.invoiceData.fitting_charges);
      var suzuki_rent = parseInt(this.invoiceData.suzuki_rent);
      return parseInt(subtotal - discount + fitting_charges + suzuki_rent);
    },
    amtDue: function amtDue() {
      return this.total - this.invoiceData.received_amt;
    },
    sheets: function sheets() {
      return this.products.filter(function (item) {
        return item.category == "Sheet";
      });
    },
    mainT: function mainT() {
      return this.products.filter(function (item) {
        return item.category == "Main T";
      });
    },
    crossT: function crossT() {
      return this.products.filter(function (item) {
        return item.category == "Cross T";
      });
    },
    angle: function angle() {
      return this.products.filter(function (item) {
        return item.category == "Angle";
      });
    },
    golas: function golas() {
      return this.products.filter(function (item) {
        return item.category == "Panel Gola";
      });
    },
    glassProducts: function glassProducts() {
      return this.products.filter(function (item) {
        return item.category == "Glass";
      });
    },
    panelSheets: function panelSheets() {
      return this.products.filter(function (item) {
        return item.category == "Panel Sheet";
      });
    },
    drivers: function drivers() {
      return this.employees.filter(function (item) {
        return item.type == "Driver";
      });
    },
    fitters: function fitters() {
      return this.employees.filter(function (item) {
        return item.type == "Fitter";
      });
    }
  }),
  watch: {
    model: function model(val) {
      if (val != null) this.tab = 0;else this.tab = null;
    },
    search: function search(val) {
      var _this9 = this;

      // Items have already been loaded
      if (this.items.length > 0) return;
      this.isLoading = true; // axios method

      axios.get("/api/customers/all").then(function (res) {
        _this9.items = res.data.data;
        _this9.isLoading = false;
      })["catch"](function (err) {
        console.log(err);
        _this9.isLoading = false;
      });
    },
    cust_id: function cust_id() {
      var _this10 = this;

      var customer = this.items.filter(function (item) {
        return item.id == _this10.cust_id;
      });
      this.cust2 = customer[0];
    },
    product_item: function product_item() {
      var _this11 = this;

      var prod = this.products.filter(function (item) {
        return item.id == _this11.product_item;
      }); //    console.log(prod[0])

      this.$store.dispatch("cart/addProductToCart", {
        product: prod[0],
        quantity: 1
      }); //  this.product_item = null;
    },
    order: function order() {
      this.productsEditted();
      console.log(this.obj);
      this.$store.dispatch("cart/addProductsToCart", {
        product: this.obj
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ProductList.vue?vue&type=style&index=0&id=438ffe92&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ProductList.vue?vue&type=style&index=0&id=438ffe92&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".pointer[data-v-438ffe92] {\n  cursor: pointer;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/InvoiceEdit.vue?vue&type=style&index=0&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/InvoiceEdit.vue?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".numinput {\n  border: 1px solid lightgray;\n  border-radius: 5px;\n  padding: 3px;\n  padding-left: 10px;\n  margin-top: 5px;\n  margin-bottom: 5px;\n  width: 90%;\n}\n.numinput:focus {\n  border: 1px solid lightgray;\n}\n.radio {\n  height: 30px;\n}\n.small1 {\n  width: 70px;\n}\n.autcmp {\n  width: 200px !important;\n  padding: 0;\n  background: transparent;\n}\n.prod {\n  background-color: lightgreen;\n}\n.calculate {\n  border-left: darkgrey solid 1px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ProductList.vue?vue&type=style&index=0&id=438ffe92&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ProductList.vue?vue&type=style&index=0&id=438ffe92&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ProductList.vue?vue&type=style&index=0&id=438ffe92&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ProductList.vue?vue&type=style&index=0&id=438ffe92&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/InvoiceEdit.vue?vue&type=style&index=0&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/InvoiceEdit.vue?vue&type=style&index=0&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./InvoiceEdit.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/InvoiceEdit.vue?vue&type=style&index=0&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ProductList.vue?vue&type=template&id=438ffe92&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ProductList.vue?vue&type=template&id=438ffe92&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-card",
    [
      _c(
        "v-card-title",
        [
          _c("v-text-field", {
            attrs: {
              "append-icon": "mdi-magnify",
              label: "Search",
              "single-line": "",
              "hide-details": ""
            },
            model: {
              value: _vm.search,
              callback: function($$v) {
                _vm.search = $$v
              },
              expression: "search"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("v-data-table", {
        attrs: {
          headers: _vm.headers,
          items: _vm.products,
          search: _vm.search
        },
        scopedSlots: _vm._u([
          {
            key: "item.sku",
            fn: function(ref) {
              var item = ref.item
              return [
                _c(
                  "span",
                  {
                    staticClass: "pointer",
                    on: {
                      click: function($event) {
                        return _vm.addToCart(item)
                      }
                    }
                  },
                  [_vm._v("\n        " + _vm._s(item.sku) + "\n      ")]
                )
              ]
            }
          },
          {
            key: "item.onhand",
            fn: function(ref) {
              var item = ref.item
              return [
                _c(
                  "v-edit-dialog",
                  {
                    attrs: {
                      block: "",
                      persistent: "",
                      "return-value": item.onhand
                    },
                    on: {
                      "update:returnValue": function($event) {
                        return _vm.$set(item, "onhand", $event)
                      },
                      "update:return-value": function($event) {
                        return _vm.$set(item, "onhand", $event)
                      }
                    }
                  },
                  [
                    _c(
                      "v-chip",
                      { attrs: { color: _vm.getColor(item.alert), dark: "" } },
                      [
                        _vm._v(
                          "\n          " + _vm._s(item.onhand) + "\n        "
                        )
                      ]
                    )
                  ],
                  1
                )
              ]
            }
          }
        ])
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/InvoiceEdit.vue?vue&type=template&id=8a9b54f0&":
/*!**********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/InvoiceEdit.vue?vue&type=template&id=8a9b54f0& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "v-row",
        [
          _c(
            "v-col",
            { attrs: { cols: "7" } },
            [
              _c(
                "v-row",
                { staticClass: "prod mr-1" },
                [
                  _c("v-autocomplete", {
                    attrs: {
                      items: _vm.products,
                      clearable: "",
                      "hide-details": "",
                      "hide-selected": "",
                      "item-text": "sku",
                      "item-value": "id",
                      label: "Search for a product...",
                      solo: "",
                      dense: ""
                    },
                    scopedSlots: _vm._u([
                      {
                        key: "no-data",
                        fn: function() {
                          return [
                            _c(
                              "v-list-item",
                              [
                                _c("v-list-item-title", [
                                  _vm._v(
                                    "\n                Search for a\n                "
                                  ),
                                  _c("strong", [_vm._v("Product")])
                                ])
                              ],
                              1
                            )
                          ]
                        },
                        proxy: true
                      },
                      {
                        key: "selection",
                        fn: function(ref) {
                          var attr = ref.attr
                          var on = ref.on
                          var item = ref.item
                          var selected = ref.selected
                          return [
                            _c("span", {
                              domProps: { textContent: _vm._s(item.sku) }
                            })
                          ]
                        }
                      },
                      {
                        key: "item",
                        fn: function(ref) {
                          var item = ref.item
                          return [
                            _c(
                              "v-list-item-content",
                              [
                                _c("v-list-item-title", {
                                  domProps: { textContent: _vm._s(item.sku) }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c("v-list-item-action", [
                              _c("span", [
                                _vm._v(
                                  "\n                Stock:\n                "
                                ),
                                _c("strong", [
                                  _vm._v(
                                    "\n                  " +
                                      _vm._s(item.onhand) +
                                      "\n                "
                                  )
                                ])
                              ])
                            ])
                          ]
                        }
                      }
                    ]),
                    model: {
                      value: _vm.product_item,
                      callback: function($$v) {
                        _vm.product_item = $$v
                      },
                      expression: "product_item"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c("v-divider"),
              _vm._v(" "),
              _c("v-simple-table", {
                attrs: { height: "", dense: "" },
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function() {
                      return [
                        _c("thead", [
                          _c("tr", [
                            _c("th"),
                            _vm._v(" "),
                            _c("th", { staticClass: "text-left" }, [
                              _vm._v("Sku")
                            ]),
                            _vm._v(" "),
                            _c("th", { staticClass: "text-left" }, [
                              _vm._v("Qty")
                            ]),
                            _vm._v(" "),
                            _c("th", { staticClass: "text-left" }, [
                              _vm._v("Price")
                            ]),
                            _vm._v(" "),
                            _c("th", { staticClass: "text-left" }, [
                              _vm._v("Total")
                            ])
                          ])
                        ]),
                        _vm._v(" "),
                        _c(
                          "tbody",
                          _vm._l(_vm.cart, function(item) {
                            return _c("tr", { key: item.id }, [
                              _c(
                                "td",
                                [
                                  _c(
                                    "v-btn",
                                    {
                                      staticClass: "red--text",
                                      attrs: { icon: "" },
                                      on: {
                                        click: function($event) {
                                          return _vm.removeProductFromCart(
                                            item.product
                                          )
                                        }
                                      }
                                    },
                                    [_c("v-icon", [_vm._v("mdi-delete")])],
                                    1
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c("td", [
                                _vm._v(
                                  "\n                " +
                                    _vm._s(item.product.sku) +
                                    "\n                "
                                ),
                                item.g_height
                                  ? _c("span", [
                                      _vm._v(
                                        "(" +
                                          _vm._s(item.g_height) +
                                          " X " +
                                          _vm._s(item.g_width) +
                                          " )"
                                      )
                                    ])
                                  : _vm._e()
                              ]),
                              _vm._v(" "),
                              _c("td", [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: item.quantity,
                                      expression: "item.quantity"
                                    }
                                  ],
                                  staticClass: "numinput small1",
                                  attrs: { type: "number" },
                                  domProps: { value: item.quantity },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        item,
                                        "quantity",
                                        $event.target.value
                                      )
                                    }
                                  }
                                })
                              ]),
                              _vm._v(" "),
                              _c("td", [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: item.product.selling_price,
                                      expression: "item.product.selling_price"
                                    }
                                  ],
                                  staticClass: "numinput small1",
                                  attrs: { type: "number" },
                                  domProps: {
                                    value: item.product.selling_price
                                  },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        item.product,
                                        "selling_price",
                                        $event.target.value
                                      )
                                    }
                                  }
                                })
                              ]),
                              _vm._v(" "),
                              _c("td", { attrs: { allign: "right" } }, [
                                _vm._v(
                                  "\n                " +
                                    _vm._s(
                                      (
                                        item.product.selling_price *
                                        item.quantity
                                      ).toFixed(0)
                                    ) +
                                    "\n              "
                                )
                              ])
                            ])
                          }),
                          0
                        )
                      ]
                    },
                    proxy: true
                  }
                ])
              }),
              _vm._v(" "),
              _c("v-divider")
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-col",
            { staticClass: "calculate", attrs: { cols: "5" } },
            [
              _c(
                "v-dialog",
                {
                  attrs: { "max-width": "600px" },
                  scopedSlots: _vm._u([
                    {
                      key: "activator",
                      fn: function(ref) {
                        var on = ref.on
                        return [
                          _c(
                            "v-btn",
                            _vm._g(
                              {
                                staticClass: "mb-2",
                                attrs: { color: "primary", dark: "", block: "" }
                              },
                              on
                            ),
                            [_vm._v("Calculations")]
                          )
                        ]
                      }
                    }
                  ]),
                  model: {
                    value: _vm.dialog,
                    callback: function($$v) {
                      _vm.dialog = $$v
                    },
                    expression: "dialog"
                  }
                },
                [
                  _vm._v(" "),
                  _c(
                    "v-card",
                    [
                      _c(
                        "v-card-text",
                        [
                          _c(
                            "v-container",
                            [
                              _c(
                                "v-row",
                                [
                                  _c(
                                    "v-col",
                                    { attrs: { cols: "12" } },
                                    [
                                      _c(
                                        "v-tabs",
                                        [
                                          _c(
                                            "v-tab",
                                            [
                                              _c(
                                                "v-icon",
                                                { attrs: { left: "" } },
                                                [
                                                  _vm._v(
                                                    " mdi-file-document-outline "
                                                  )
                                                ]
                                              ),
                                              _vm._v(
                                                "\n                      Ceiling\n                    "
                                              )
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-tab",
                                            [
                                              _c(
                                                "v-icon",
                                                { attrs: { left: "" } },
                                                [
                                                  _vm._v(
                                                    " mdi-note-text-outline "
                                                  )
                                                ]
                                              ),
                                              _vm._v(
                                                "\n                      Pannels\n                    "
                                              )
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-tab",
                                            [
                                              _c(
                                                "v-icon",
                                                { attrs: { left: "" } },
                                                [_vm._v(" mdi-cash-multiple ")]
                                              ),
                                              _vm._v(
                                                "\n                      Glass\n                    "
                                              )
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-tab-item",
                                            [
                                              _c(
                                                "v-row",
                                                [
                                                  _c(
                                                    "v-col",
                                                    { attrs: { cols: "4" } },
                                                    [
                                                      _c("v-text-field", {
                                                        attrs: {
                                                          label: "Width",
                                                          type: "number",
                                                          dense: "",
                                                          outlined: ""
                                                        },
                                                        model: {
                                                          value:
                                                            _vm.ceiling_width,
                                                          callback: function(
                                                            $$v
                                                          ) {
                                                            _vm.ceiling_width = $$v
                                                          },
                                                          expression:
                                                            "ceiling_width"
                                                        }
                                                      })
                                                    ],
                                                    1
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "v-col",
                                                    { attrs: { cols: "4" } },
                                                    [
                                                      _c("v-text-field", {
                                                        attrs: {
                                                          label: "Length",
                                                          type: "number",
                                                          dense: "",
                                                          outlined: ""
                                                        },
                                                        model: {
                                                          value:
                                                            _vm.ceiling_length,
                                                          callback: function(
                                                            $$v
                                                          ) {
                                                            _vm.ceiling_length = $$v
                                                          },
                                                          expression:
                                                            "ceiling_length"
                                                        }
                                                      })
                                                    ],
                                                    1
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "v-col",
                                                    { attrs: { cols: "4" } },
                                                    [
                                                      _c(
                                                        "v-btn",
                                                        {
                                                          staticClass:
                                                            "float-right",
                                                          attrs: {
                                                            dark: "",
                                                            color: "primary"
                                                          },
                                                          on: {
                                                            click:
                                                              _vm.getCeiling
                                                          }
                                                        },
                                                        [
                                                          _vm._v(
                                                            "\n                            Calculate\n                          "
                                                          )
                                                        ]
                                                      )
                                                    ],
                                                    1
                                                  )
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c("v-simple-table", {
                                                attrs: {
                                                  height: "",
                                                  dense: ""
                                                },
                                                scopedSlots: _vm._u([
                                                  {
                                                    key: "default",
                                                    fn: function() {
                                                      return [
                                                        _c("thead", [
                                                          _c("tr", [
                                                            _c(
                                                              "th",
                                                              {
                                                                staticClass:
                                                                  "text-left"
                                                              },
                                                              [_vm._v("Item")]
                                                            ),
                                                            _vm._v(" "),
                                                            _c(
                                                              "th",
                                                              {
                                                                staticClass:
                                                                  "text-left"
                                                              },
                                                              [
                                                                _vm._v(
                                                                  "Quantity"
                                                                )
                                                              ]
                                                            ),
                                                            _vm._v(" "),
                                                            _c(
                                                              "th",
                                                              {
                                                                staticClass:
                                                                  "text-left"
                                                              },
                                                              [
                                                                _vm._v(
                                                                  "Unit Price"
                                                                )
                                                              ]
                                                            ),
                                                            _vm._v(" "),
                                                            _c("th", {
                                                              staticClass:
                                                                "text-left"
                                                            })
                                                          ])
                                                        ]),
                                                        _vm._v(" "),
                                                        _c(
                                                          "tbody",
                                                          _vm._l(
                                                            _vm.ceiling,
                                                            function(
                                                              item,
                                                              index
                                                            ) {
                                                              return _c(
                                                                "tr",
                                                                {
                                                                  key:
                                                                    item.index
                                                                },
                                                                [
                                                                  _c(
                                                                    "td",
                                                                    [
                                                                      index == 0
                                                                        ? _c(
                                                                            "v-select",
                                                                            {
                                                                              attrs: {
                                                                                items:
                                                                                  _vm.angle,
                                                                                "item-text":
                                                                                  "name",
                                                                                "item-value":
                                                                                  "id",
                                                                                label:
                                                                                  "Select Angle"
                                                                              },
                                                                              model: {
                                                                                value:
                                                                                  _vm
                                                                                    .ceiling[0]
                                                                                    .id,
                                                                                callback: function(
                                                                                  $$v
                                                                                ) {
                                                                                  _vm.$set(
                                                                                    _vm
                                                                                      .ceiling[0],
                                                                                    "id",
                                                                                    $$v
                                                                                  )
                                                                                },
                                                                                expression:
                                                                                  "ceiling[0].id"
                                                                              }
                                                                            }
                                                                          )
                                                                        : _vm._e(),
                                                                      _vm._v(
                                                                        " "
                                                                      ),
                                                                      index == 1
                                                                        ? _c(
                                                                            "v-select",
                                                                            {
                                                                              attrs: {
                                                                                items:
                                                                                  _vm.mainT,
                                                                                "item-text":
                                                                                  "name",
                                                                                "item-value":
                                                                                  "id",
                                                                                label:
                                                                                  "Select Main T"
                                                                              },
                                                                              model: {
                                                                                value:
                                                                                  _vm
                                                                                    .ceiling[1]
                                                                                    .id,
                                                                                callback: function(
                                                                                  $$v
                                                                                ) {
                                                                                  _vm.$set(
                                                                                    _vm
                                                                                      .ceiling[1],
                                                                                    "id",
                                                                                    $$v
                                                                                  )
                                                                                },
                                                                                expression:
                                                                                  "ceiling[1].id"
                                                                              }
                                                                            }
                                                                          )
                                                                        : _vm._e(),
                                                                      _vm._v(
                                                                        " "
                                                                      ),
                                                                      index == 2
                                                                        ? _c(
                                                                            "v-select",
                                                                            {
                                                                              attrs: {
                                                                                items:
                                                                                  _vm.crossT,
                                                                                "item-text":
                                                                                  "name",
                                                                                "item-value":
                                                                                  "id",
                                                                                label:
                                                                                  "Select Cross T"
                                                                              },
                                                                              model: {
                                                                                value:
                                                                                  _vm
                                                                                    .ceiling[2]
                                                                                    .id,
                                                                                callback: function(
                                                                                  $$v
                                                                                ) {
                                                                                  _vm.$set(
                                                                                    _vm
                                                                                      .ceiling[2],
                                                                                    "id",
                                                                                    $$v
                                                                                  )
                                                                                },
                                                                                expression:
                                                                                  "ceiling[2].id"
                                                                              }
                                                                            }
                                                                          )
                                                                        : _vm._e(),
                                                                      _vm._v(
                                                                        " "
                                                                      ),
                                                                      index == 3
                                                                        ? _c(
                                                                            "v-select",
                                                                            {
                                                                              attrs: {
                                                                                items:
                                                                                  _vm.sheets,
                                                                                "item-text":
                                                                                  "name",
                                                                                "item-value":
                                                                                  "id",
                                                                                label:
                                                                                  "Select Sheet"
                                                                              },
                                                                              model: {
                                                                                value:
                                                                                  _vm
                                                                                    .ceiling[3]
                                                                                    .id,
                                                                                callback: function(
                                                                                  $$v
                                                                                ) {
                                                                                  _vm.$set(
                                                                                    _vm
                                                                                      .ceiling[3],
                                                                                    "id",
                                                                                    $$v
                                                                                  )
                                                                                },
                                                                                expression:
                                                                                  "ceiling[3].id"
                                                                              }
                                                                            }
                                                                          )
                                                                        : _vm._e()
                                                                    ],
                                                                    1
                                                                  ),
                                                                  _vm._v(" "),
                                                                  _c(
                                                                    "td",
                                                                    [
                                                                      _c(
                                                                        "v-text-field",
                                                                        {
                                                                          attrs: {
                                                                            label:
                                                                              "Quantity",
                                                                            type:
                                                                              "number"
                                                                          },
                                                                          model: {
                                                                            value:
                                                                              item.qty,
                                                                            callback: function(
                                                                              $$v
                                                                            ) {
                                                                              _vm.$set(
                                                                                item,
                                                                                "qty",
                                                                                $$v
                                                                              )
                                                                            },
                                                                            expression:
                                                                              "item.qty"
                                                                          }
                                                                        }
                                                                      )
                                                                    ],
                                                                    1
                                                                  ),
                                                                  _vm._v(" "),
                                                                  _c("td", [
                                                                    item.id
                                                                      ? _c(
                                                                          "span",
                                                                          [
                                                                            _vm._v(
                                                                              "\n                                  " +
                                                                                _vm._s(
                                                                                  _vm.getPrice(
                                                                                    item.id
                                                                                  )
                                                                                ) +
                                                                                "\n                                "
                                                                            )
                                                                          ]
                                                                        )
                                                                      : _vm._e()
                                                                  ]),
                                                                  _vm._v(" "),
                                                                  _c(
                                                                    "td",
                                                                    [
                                                                      _c(
                                                                        "v-btn",
                                                                        {
                                                                          staticClass:
                                                                            "green--text",
                                                                          attrs: {
                                                                            icon:
                                                                              ""
                                                                          },
                                                                          on: {
                                                                            click: function(
                                                                              $event
                                                                            ) {
                                                                              return _vm.addProductToInvoice(
                                                                                item
                                                                              )
                                                                            }
                                                                          }
                                                                        },
                                                                        [
                                                                          _c(
                                                                            "v-icon",
                                                                            [
                                                                              _vm._v(
                                                                                "mdi-plus"
                                                                              )
                                                                            ]
                                                                          )
                                                                        ],
                                                                        1
                                                                      )
                                                                    ],
                                                                    1
                                                                  )
                                                                ]
                                                              )
                                                            }
                                                          ),
                                                          0
                                                        )
                                                      ]
                                                    },
                                                    proxy: true
                                                  }
                                                ])
                                              }),
                                              _vm._v(" "),
                                              _c(
                                                "v-btn",
                                                {
                                                  staticClass: "float-right",
                                                  attrs: {
                                                    dark: "",
                                                    color: "primary"
                                                  },
                                                  on: {
                                                    click: _vm.clearCeilingItems
                                                  }
                                                },
                                                [_vm._v("Clear")]
                                              )
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-tab-item",
                                            [
                                              _c(
                                                "v-row",
                                                [
                                                  _c(
                                                    "v-col",
                                                    {
                                                      staticClass: "pb-0",
                                                      attrs: { cols: "4" }
                                                    },
                                                    [
                                                      _c("v-text-field", {
                                                        attrs: {
                                                          label: "Length",
                                                          type: "number",
                                                          dense: "",
                                                          outlined: ""
                                                        },
                                                        model: {
                                                          value:
                                                            _vm.panel.length,
                                                          callback: function(
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              _vm.panel,
                                                              "length",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "panel.length"
                                                        }
                                                      })
                                                    ],
                                                    1
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "v-col",
                                                    {
                                                      staticClass: "pb-0",
                                                      attrs: { cols: "4" }
                                                    },
                                                    [
                                                      _c("v-text-field", {
                                                        attrs: {
                                                          label: "Number",
                                                          type: "number",
                                                          dense: "",
                                                          outlined: ""
                                                        },
                                                        model: {
                                                          value:
                                                            _vm.panel.number,
                                                          callback: function(
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              _vm.panel,
                                                              "number",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "panel.number"
                                                        }
                                                      })
                                                    ],
                                                    1
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "v-col",
                                                    {
                                                      staticClass: "pb-0",
                                                      attrs: { cols: "4" }
                                                    },
                                                    [
                                                      _c("v-text-field", {
                                                        attrs: {
                                                          label: "Removal",
                                                          type: "number",
                                                          dense: "",
                                                          outlined: ""
                                                        },
                                                        model: {
                                                          value:
                                                            _vm.panel.removals,
                                                          callback: function(
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              _vm.panel,
                                                              "removals",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "panel.removals"
                                                        }
                                                      })
                                                    ],
                                                    1
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "v-col",
                                                    {
                                                      staticClass: "py-0",
                                                      attrs: { cols: "4" }
                                                    },
                                                    [
                                                      _c("v-select", {
                                                        attrs: {
                                                          items:
                                                            _vm.panelSheetHight,
                                                          dense: "",
                                                          outlined: ""
                                                        },
                                                        model: {
                                                          value:
                                                            _vm.panel
                                                              .sheet_height,
                                                          callback: function(
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              _vm.panel,
                                                              "sheet_height",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "panel.sheet_height"
                                                        }
                                                      })
                                                    ],
                                                    1
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "v-col",
                                                    {
                                                      staticClass: "py-0",
                                                      attrs: { cols: "4" }
                                                    },
                                                    [
                                                      _c("v-select", {
                                                        attrs: {
                                                          items:
                                                            _vm.panelSheetWidth,
                                                          dense: "",
                                                          outlined: ""
                                                        },
                                                        model: {
                                                          value:
                                                            _vm.panel
                                                              .sheet_width,
                                                          callback: function(
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              _vm.panel,
                                                              "sheet_width",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "panel.sheet_width"
                                                        }
                                                      })
                                                    ],
                                                    1
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "v-col",
                                                    {
                                                      staticClass: "py-0",
                                                      attrs: { cols: "4" }
                                                    },
                                                    [
                                                      _c(
                                                        "v-btn",
                                                        {
                                                          staticClass:
                                                            "float-right",
                                                          attrs: {
                                                            dark: "",
                                                            color: "primary"
                                                          },
                                                          on: {
                                                            click: _vm.getPanel
                                                          }
                                                        },
                                                        [
                                                          _vm._v(
                                                            "\n                            Calculate\n                          "
                                                          )
                                                        ]
                                                      )
                                                    ],
                                                    1
                                                  )
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c("v-simple-table", {
                                                attrs: {
                                                  height: "",
                                                  dense: ""
                                                },
                                                scopedSlots: _vm._u([
                                                  {
                                                    key: "default",
                                                    fn: function() {
                                                      return [
                                                        _c("thead", [
                                                          _c("tr", [
                                                            _c(
                                                              "th",
                                                              {
                                                                staticClass:
                                                                  "text-left"
                                                              },
                                                              [_vm._v("Item")]
                                                            ),
                                                            _vm._v(" "),
                                                            _c(
                                                              "th",
                                                              {
                                                                staticClass:
                                                                  "text-left"
                                                              },
                                                              [
                                                                _vm._v(
                                                                  "Quantity"
                                                                )
                                                              ]
                                                            ),
                                                            _vm._v(" "),
                                                            _c(
                                                              "th",
                                                              {
                                                                staticClass:
                                                                  "text-left"
                                                              },
                                                              [
                                                                _vm._v(
                                                                  "Unit Price"
                                                                )
                                                              ]
                                                            ),
                                                            _vm._v(" "),
                                                            _c("th", {
                                                              staticClass:
                                                                "text-left"
                                                            })
                                                          ])
                                                        ]),
                                                        _vm._v(" "),
                                                        _c(
                                                          "tbody",
                                                          _vm._l(
                                                            _vm.peneling,
                                                            function(
                                                              item,
                                                              index
                                                            ) {
                                                              return _c(
                                                                "tr",
                                                                {
                                                                  key:
                                                                    item.index
                                                                },
                                                                [
                                                                  _c(
                                                                    "td",
                                                                    [
                                                                      index == 0
                                                                        ? _c(
                                                                            "v-select",
                                                                            {
                                                                              attrs: {
                                                                                items:
                                                                                  _vm.panelSheets,
                                                                                "item-text":
                                                                                  "name",
                                                                                "item-value":
                                                                                  "id",
                                                                                label:
                                                                                  "Select Sheet"
                                                                              },
                                                                              model: {
                                                                                value:
                                                                                  _vm
                                                                                    .peneling[0]
                                                                                    .id,
                                                                                callback: function(
                                                                                  $$v
                                                                                ) {
                                                                                  _vm.$set(
                                                                                    _vm
                                                                                      .peneling[0],
                                                                                    "id",
                                                                                    $$v
                                                                                  )
                                                                                },
                                                                                expression:
                                                                                  "peneling[0].id"
                                                                              }
                                                                            }
                                                                          )
                                                                        : _vm._e(),
                                                                      _vm._v(
                                                                        " "
                                                                      ),
                                                                      index == 1
                                                                        ? _c(
                                                                            "v-select",
                                                                            {
                                                                              attrs: {
                                                                                items:
                                                                                  _vm.golas,
                                                                                "item-text":
                                                                                  "name",
                                                                                "item-value":
                                                                                  "id",
                                                                                label:
                                                                                  "Select Gola"
                                                                              },
                                                                              model: {
                                                                                value:
                                                                                  _vm
                                                                                    .peneling[1]
                                                                                    .id,
                                                                                callback: function(
                                                                                  $$v
                                                                                ) {
                                                                                  _vm.$set(
                                                                                    _vm
                                                                                      .peneling[1],
                                                                                    "id",
                                                                                    $$v
                                                                                  )
                                                                                },
                                                                                expression:
                                                                                  "peneling[1].id"
                                                                              }
                                                                            }
                                                                          )
                                                                        : _vm._e()
                                                                    ],
                                                                    1
                                                                  ),
                                                                  _vm._v(" "),
                                                                  _c(
                                                                    "td",
                                                                    [
                                                                      _c(
                                                                        "v-text-field",
                                                                        {
                                                                          attrs: {
                                                                            label:
                                                                              "Quantity",
                                                                            type:
                                                                              "number"
                                                                          },
                                                                          model: {
                                                                            value:
                                                                              item.qty,
                                                                            callback: function(
                                                                              $$v
                                                                            ) {
                                                                              _vm.$set(
                                                                                item,
                                                                                "qty",
                                                                                $$v
                                                                              )
                                                                            },
                                                                            expression:
                                                                              "item.qty"
                                                                          }
                                                                        }
                                                                      )
                                                                    ],
                                                                    1
                                                                  ),
                                                                  _vm._v(" "),
                                                                  _c("td", [
                                                                    item.id
                                                                      ? _c(
                                                                          "span",
                                                                          [
                                                                            _vm._v(
                                                                              "\n                                  " +
                                                                                _vm._s(
                                                                                  _vm.getPrice(
                                                                                    item.id
                                                                                  )
                                                                                ) +
                                                                                "\n                                "
                                                                            )
                                                                          ]
                                                                        )
                                                                      : _vm._e()
                                                                  ]),
                                                                  _vm._v(" "),
                                                                  _c(
                                                                    "td",
                                                                    [
                                                                      _c(
                                                                        "v-btn",
                                                                        {
                                                                          staticClass:
                                                                            "green--text",
                                                                          attrs: {
                                                                            icon:
                                                                              ""
                                                                          },
                                                                          on: {
                                                                            click: function(
                                                                              $event
                                                                            ) {
                                                                              return _vm.addProductToInvoice(
                                                                                item
                                                                              )
                                                                            }
                                                                          }
                                                                        },
                                                                        [
                                                                          _c(
                                                                            "v-icon",
                                                                            [
                                                                              _vm._v(
                                                                                "mdi-plus"
                                                                              )
                                                                            ]
                                                                          )
                                                                        ],
                                                                        1
                                                                      )
                                                                    ],
                                                                    1
                                                                  )
                                                                ]
                                                              )
                                                            }
                                                          ),
                                                          0
                                                        )
                                                      ]
                                                    },
                                                    proxy: true
                                                  }
                                                ])
                                              }),
                                              _vm._v(" "),
                                              _c(
                                                "v-btn",
                                                {
                                                  staticClass: "float-right",
                                                  attrs: {
                                                    dark: "",
                                                    color: "primary"
                                                  },
                                                  on: {
                                                    click: _vm.clearPanelItems
                                                  }
                                                },
                                                [_vm._v("Clear")]
                                              )
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-tab-item",
                                            [
                                              _c(
                                                "v-row",
                                                [
                                                  _c(
                                                    "v-col",
                                                    {
                                                      staticClass: "pb-0",
                                                      attrs: { cols: "4" }
                                                    },
                                                    [
                                                      _c("v-text-field", {
                                                        attrs: {
                                                          label: "Height",
                                                          type: "number",
                                                          dense: "",
                                                          outlined: ""
                                                        },
                                                        on: {
                                                          change:
                                                            _vm.getStdHeight
                                                        },
                                                        model: {
                                                          value:
                                                            _vm.glass.height,
                                                          callback: function(
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              _vm.glass,
                                                              "height",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "glass.height"
                                                        }
                                                      })
                                                    ],
                                                    1
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "v-col",
                                                    {
                                                      staticClass: "pb-0",
                                                      attrs: { cols: "4" }
                                                    },
                                                    [
                                                      _c("v-text-field", {
                                                        attrs: {
                                                          label: "Width",
                                                          type: "number",
                                                          dense: "",
                                                          outlined: ""
                                                        },
                                                        on: {
                                                          change:
                                                            _vm.getStdWidth
                                                        },
                                                        model: {
                                                          value:
                                                            _vm.glass.width,
                                                          callback: function(
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              _vm.glass,
                                                              "width",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "glass.width"
                                                        }
                                                      })
                                                    ],
                                                    1
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "v-col",
                                                    {
                                                      staticClass: "pb-0",
                                                      attrs: { cols: "4" }
                                                    },
                                                    [
                                                      _c("v-text-field", {
                                                        attrs: {
                                                          label: "Number",
                                                          type: "number",
                                                          dense: "",
                                                          outlined: ""
                                                        },
                                                        model: {
                                                          value:
                                                            _vm.glass.number,
                                                          callback: function(
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              _vm.glass,
                                                              "number",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "glass.number"
                                                        }
                                                      })
                                                    ],
                                                    1
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "v-col",
                                                    {
                                                      staticClass: "py-0",
                                                      attrs: { cols: "4" }
                                                    },
                                                    [
                                                      _c("v-text-field", {
                                                        attrs: {
                                                          label:
                                                            "Standard Hegith",
                                                          type: "number",
                                                          dense: "",
                                                          outlined: ""
                                                        },
                                                        model: {
                                                          value:
                                                            _vm.glass
                                                              .standard_height,
                                                          callback: function(
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              _vm.glass,
                                                              "standard_height",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "glass.standard_height"
                                                        }
                                                      })
                                                    ],
                                                    1
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "v-col",
                                                    {
                                                      staticClass: "py-0",
                                                      attrs: { cols: "4" }
                                                    },
                                                    [
                                                      _c("v-text-field", {
                                                        attrs: {
                                                          label:
                                                            "Standard Width",
                                                          type: "number",
                                                          dense: "",
                                                          outlined: ""
                                                        },
                                                        model: {
                                                          value:
                                                            _vm.glass
                                                              .standard_width,
                                                          callback: function(
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              _vm.glass,
                                                              "standard_width",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "glass.standard_width"
                                                        }
                                                      })
                                                    ],
                                                    1
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "v-col",
                                                    {
                                                      staticClass: "py-0",
                                                      attrs: { cols: "4" }
                                                    },
                                                    [
                                                      _c(
                                                        "v-btn",
                                                        {
                                                          staticClass:
                                                            "float-right",
                                                          attrs: {
                                                            dark: "",
                                                            color: "primary"
                                                          },
                                                          on: {
                                                            click:
                                                              _vm.calculateSlab
                                                          }
                                                        },
                                                        [
                                                          _vm._v(
                                                            "\n                            Calculate\n                          "
                                                          )
                                                        ]
                                                      )
                                                    ],
                                                    1
                                                  ),
                                                  _vm._v(
                                                    "\n                        " +
                                                      _vm._s(
                                                        _vm.glass.back_end_sqrFt
                                                      ) +
                                                      " | " +
                                                      _vm._s(
                                                        _vm.glass.invoice_sqrFt
                                                      ) +
                                                      "\n                        "
                                                  )
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c("v-simple-table", {
                                                attrs: {
                                                  height: "",
                                                  dense: ""
                                                },
                                                scopedSlots: _vm._u([
                                                  {
                                                    key: "default",
                                                    fn: function() {
                                                      return [
                                                        _c("thead", [
                                                          _c("tr", [
                                                            _c(
                                                              "th",
                                                              {
                                                                staticClass:
                                                                  "text-left"
                                                              },
                                                              [_vm._v("Item")]
                                                            ),
                                                            _vm._v(" "),
                                                            _c(
                                                              "th",
                                                              {
                                                                staticClass:
                                                                  "text-left"
                                                              },
                                                              [
                                                                _vm._v(
                                                                  "SqrFeet"
                                                                )
                                                              ]
                                                            ),
                                                            _vm._v(" "),
                                                            _c(
                                                              "th",
                                                              {
                                                                staticClass:
                                                                  "text-left"
                                                              },
                                                              [
                                                                _vm._v(
                                                                  "Unit Price"
                                                                )
                                                              ]
                                                            ),
                                                            _vm._v(" "),
                                                            _c("th", {
                                                              staticClass:
                                                                "text-left"
                                                            })
                                                          ])
                                                        ]),
                                                        _vm._v(" "),
                                                        _c(
                                                          "tbody",
                                                          _vm._l(
                                                            _vm.glassItem,
                                                            function(
                                                              item,
                                                              index
                                                            ) {
                                                              return _c(
                                                                "tr",
                                                                {
                                                                  key:
                                                                    item.index
                                                                },
                                                                [
                                                                  _c(
                                                                    "td",
                                                                    [
                                                                      index == 0
                                                                        ? _c(
                                                                            "v-select",
                                                                            {
                                                                              attrs: {
                                                                                items:
                                                                                  _vm.glassProducts,
                                                                                "item-text":
                                                                                  "name",
                                                                                "item-value":
                                                                                  "id",
                                                                                label:
                                                                                  "Select Glass"
                                                                              },
                                                                              model: {
                                                                                value:
                                                                                  _vm
                                                                                    .glassItem[0]
                                                                                    .id,
                                                                                callback: function(
                                                                                  $$v
                                                                                ) {
                                                                                  _vm.$set(
                                                                                    _vm
                                                                                      .glassItem[0],
                                                                                    "id",
                                                                                    $$v
                                                                                  )
                                                                                },
                                                                                expression:
                                                                                  "glassItem[0].id"
                                                                              }
                                                                            }
                                                                          )
                                                                        : _vm._e()
                                                                    ],
                                                                    1
                                                                  ),
                                                                  _vm._v(" "),
                                                                  _c(
                                                                    "td",
                                                                    [
                                                                      _c(
                                                                        "v-text-field",
                                                                        {
                                                                          attrs: {
                                                                            label:
                                                                              "SqrFeet",
                                                                            type:
                                                                              "number"
                                                                          },
                                                                          model: {
                                                                            value:
                                                                              item.qty,
                                                                            callback: function(
                                                                              $$v
                                                                            ) {
                                                                              _vm.$set(
                                                                                item,
                                                                                "qty",
                                                                                $$v
                                                                              )
                                                                            },
                                                                            expression:
                                                                              "item.qty"
                                                                          }
                                                                        }
                                                                      )
                                                                    ],
                                                                    1
                                                                  ),
                                                                  _vm._v(" "),
                                                                  _c("td", [
                                                                    item.id
                                                                      ? _c(
                                                                          "span",
                                                                          [
                                                                            _vm._v(
                                                                              "\n                                  " +
                                                                                _vm._s(
                                                                                  _vm.getPrice(
                                                                                    item.id
                                                                                  )
                                                                                ) +
                                                                                "\n                                "
                                                                            )
                                                                          ]
                                                                        )
                                                                      : _vm._e()
                                                                  ]),
                                                                  _vm._v(" "),
                                                                  _c(
                                                                    "td",
                                                                    [
                                                                      _c(
                                                                        "v-btn",
                                                                        {
                                                                          staticClass:
                                                                            "green--text",
                                                                          attrs: {
                                                                            icon:
                                                                              ""
                                                                          },
                                                                          on: {
                                                                            click: function(
                                                                              $event
                                                                            ) {
                                                                              return _vm.addProductToInvoiceSingle(
                                                                                item
                                                                              )
                                                                            }
                                                                          }
                                                                        },
                                                                        [
                                                                          _c(
                                                                            "v-icon",
                                                                            [
                                                                              _vm._v(
                                                                                "mdi-plus"
                                                                              )
                                                                            ]
                                                                          )
                                                                        ],
                                                                        1
                                                                      )
                                                                    ],
                                                                    1
                                                                  )
                                                                ]
                                                              )
                                                            }
                                                          ),
                                                          0
                                                        )
                                                      ]
                                                    },
                                                    proxy: true
                                                  }
                                                ])
                                              }),
                                              _vm._v(" "),
                                              _c(
                                                "v-btn",
                                                {
                                                  staticClass: "float-right",
                                                  attrs: {
                                                    dark: "",
                                                    color: "primary"
                                                  },
                                                  on: {
                                                    click: _vm.clearGlassItems
                                                  }
                                                },
                                                [_vm._v("Clear")]
                                              )
                                            ],
                                            1
                                          )
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-row",
                { staticClass: "cust mr-1" },
                [
                  _c(
                    "v-col",
                    { staticClass: "pt-1 pb-0", attrs: { cols: "6" } },
                    [
                      _c("v-autocomplete", {
                        staticClass: "autcmp",
                        attrs: {
                          items: _vm.items,
                          loading: _vm.isLoading,
                          "search-input": _vm.search,
                          "hide-details": "",
                          "hide-selected": "",
                          "item-text": "name",
                          "item-value": "id",
                          label: "Search...",
                          solo: "",
                          dense: "",
                          height: "1px"
                        },
                        on: {
                          "update:searchInput": function($event) {
                            _vm.search = $event
                          },
                          "update:search-input": function($event) {
                            _vm.search = $event
                          }
                        },
                        scopedSlots: _vm._u([
                          {
                            key: "no-data",
                            fn: function() {
                              return [
                                _c(
                                  "v-list-item",
                                  [
                                    _c("v-list-item-title", [
                                      _vm._v(" Search ... ")
                                    ])
                                  ],
                                  1
                                )
                              ]
                            },
                            proxy: true
                          },
                          {
                            key: "selection",
                            fn: function(ref) {
                              var attr = ref.attr
                              var on = ref.on
                              var item = ref.item
                              var selected = ref.selected
                              return [
                                _c("span", {
                                  domProps: { textContent: _vm._s(item.name) }
                                })
                              ]
                            }
                          },
                          {
                            key: "item",
                            fn: function(ref) {
                              var item = ref.item
                              return [
                                _c(
                                  "v-list-item-content",
                                  [
                                    _c("v-list-item-title", {
                                      domProps: {
                                        textContent: _vm._s(item.name)
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c("v-list-item-subtitle", [
                                      _vm._v(
                                        "\n                  " +
                                          _vm._s(item.company_name) +
                                          "\n                "
                                      )
                                    ])
                                  ],
                                  1
                                )
                              ]
                            }
                          }
                        ]),
                        model: {
                          value: _vm.cust_id,
                          callback: function($$v) {
                            _vm.cust_id = $$v
                          },
                          expression: "cust_id"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _vm.cust2
                    ? _c("v-col", { attrs: { cols: "3" } }, [
                        _vm._v(" " + _vm._s(_vm.cust2.work_number) + " ")
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.cust2
                    ? _c("v-col", { attrs: { cols: "3" } }, [
                        _vm._v(" Rs: " + _vm._s(_vm.cust2.receivable) + " ")
                      ])
                    : _vm._e()
                ],
                1
              ),
              _vm._v(" "),
              _vm.cust2.id
                ? _c(
                    "v-row",
                    [
                      _vm.cust2.id == 1
                        ? _c(
                            "v-col",
                            { staticClass: "pb-0", attrs: { cols: "6" } },
                            [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.invoiceData.walkin_name,
                                    expression: "invoiceData.walkin_name"
                                  }
                                ],
                                staticClass: "numinput",
                                attrs: {
                                  type: "text",
                                  placeholder: "Customer Name"
                                },
                                domProps: {
                                  value: _vm.invoiceData.walkin_name
                                },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.invoiceData,
                                      "walkin_name",
                                      $event.target.value
                                    )
                                  }
                                }
                              })
                            ]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.cust2.id == 1
                        ? _c(
                            "v-col",
                            { staticClass: "pb-0", attrs: { cols: "6" } },
                            [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.invoiceData.walkin_phone,
                                    expression: "invoiceData.walkin_phone"
                                  }
                                ],
                                staticClass: "numinput",
                                attrs: { type: "text", placeholder: "Phone" },
                                domProps: {
                                  value: _vm.invoiceData.walkin_phone
                                },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.invoiceData,
                                      "walkin_phone",
                                      $event.target.value
                                    )
                                  }
                                }
                              })
                            ]
                          )
                        : _vm._e()
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              _c("v-divider", { staticClass: "my-1" }),
              _vm._v(" "),
              _c(
                "v-row",
                {
                  staticClass: "px-1",
                  staticStyle: { "background-color": "#eeeeee" }
                },
                [
                  _c("v-col", { staticClass: "pb-0", attrs: { cols: "4" } }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.perFeet.enable,
                          expression: "perFeet.enable"
                        }
                      ],
                      attrs: { type: "checkbox", id: "checkbox" },
                      domProps: {
                        checked: Array.isArray(_vm.perFeet.enable)
                          ? _vm._i(_vm.perFeet.enable, null) > -1
                          : _vm.perFeet.enable
                      },
                      on: {
                        change: function($event) {
                          var $$a = _vm.perFeet.enable,
                            $$el = $event.target,
                            $$c = $$el.checked ? true : false
                          if (Array.isArray($$a)) {
                            var $$v = null,
                              $$i = _vm._i($$a, $$v)
                            if ($$el.checked) {
                              $$i < 0 &&
                                _vm.$set(
                                  _vm.perFeet,
                                  "enable",
                                  $$a.concat([$$v])
                                )
                            } else {
                              $$i > -1 &&
                                _vm.$set(
                                  _vm.perFeet,
                                  "enable",
                                  $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                                )
                            }
                          } else {
                            _vm.$set(_vm.perFeet, "enable", $$c)
                          }
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("label", { attrs: { for: "checkbox" } }, [
                      _vm._v("Per Feet")
                    ])
                  ]),
                  _vm._v(" "),
                  _vm.perFeet.enable
                    ? _c(
                        "v-col",
                        { staticClass: "py-0", attrs: { cols: "4" } },
                        [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.perFeet.totalFeet,
                                expression: "perFeet.totalFeet"
                              }
                            ],
                            staticClass: "numinput",
                            attrs: {
                              type: "number",
                              placeholder: "Total Feet"
                            },
                            domProps: { value: _vm.perFeet.totalFeet },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.perFeet,
                                  "totalFeet",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.perFeet.enable
                    ? _c(
                        "v-col",
                        { staticClass: "py-0", attrs: { cols: "4" } },
                        [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.perFeet.rate,
                                expression: "perFeet.rate"
                              }
                            ],
                            staticClass: "numinput",
                            attrs: { type: "number", placeholder: "Per Feet" },
                            domProps: { value: _vm.perFeet.rate },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.perFeet,
                                  "rate",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ]
                      )
                    : _vm._e()
                ],
                1
              ),
              _vm._v(" "),
              _c("v-divider", { staticClass: "my-1" }),
              _vm._v(" "),
              _c("v-simple-table", { attrs: { dense: "" } }, [
                _c("tbody", [
                  _c("tr", [
                    _c("td", { attrs: { width: "25%" } }, [
                      _vm._v("Suzuki Rent")
                    ]),
                    _vm._v(" "),
                    _c("td", { attrs: { width: "25%" } }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.invoiceData.suzuki_rent,
                            expression: "invoiceData.suzuki_rent"
                          }
                        ],
                        staticClass: "numinput",
                        attrs: { type: "number" },
                        domProps: { value: _vm.invoiceData.suzuki_rent },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.invoiceData,
                              "suzuki_rent",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("td", { attrs: { width: "25%" } }, [_vm._v("Subtotal")]),
                    _vm._v(" "),
                    _c("td", { attrs: { width: "25%" } }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.invoiceTotal,
                            expression: "invoiceTotal"
                          }
                        ],
                        staticClass: "numinput",
                        attrs: { disabled: "" },
                        domProps: { value: _vm.invoiceTotal },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.invoiceTotal = $event.target.value
                          }
                        }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("tr", [
                    _c("td", [_vm._v("Driver")]),
                    _vm._v(" "),
                    _c("td", [
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.invoiceData.driver,
                              expression: "invoiceData.driver"
                            }
                          ],
                          staticClass: "minimal numinput",
                          attrs: { name: "", id: "" },
                          on: {
                            change: function($event) {
                              var $$selectedVal = Array.prototype.filter
                                .call($event.target.options, function(o) {
                                  return o.selected
                                })
                                .map(function(o) {
                                  var val = "_value" in o ? o._value : o.value
                                  return val
                                })
                              _vm.$set(
                                _vm.invoiceData,
                                "driver",
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
                            }
                          }
                        },
                        _vm._l(_vm.drivers, function(driver) {
                          return _c(
                            "option",
                            { key: driver.id, domProps: { value: driver.id } },
                            [
                              _vm._v(
                                "\n                  " +
                                  _vm._s(driver.name) +
                                  "\n                "
                              )
                            ]
                          )
                        }),
                        0
                      )
                    ]),
                    _vm._v(" "),
                    _c("td", [_vm._v("Discount")]),
                    _vm._v(" "),
                    _c("td", {}, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.invoiceData.discount,
                            expression: "invoiceData.discount"
                          }
                        ],
                        staticClass: "numinput",
                        attrs: { type: "number" },
                        domProps: { value: _vm.invoiceData.discount },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.invoiceData,
                              "discount",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("tr", [
                    _c("td", [_vm._v("Fitting Charges")]),
                    _vm._v(" "),
                    _c("td", [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.invoiceData.fitting_charges,
                            expression: "invoiceData.fitting_charges"
                          }
                        ],
                        staticClass: "numinput",
                        attrs: { type: "number" },
                        domProps: { value: _vm.invoiceData.fitting_charges },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.invoiceData,
                              "fitting_charges",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("td", [_vm._v("Total")]),
                    _vm._v(" "),
                    _c("td", [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.total,
                            expression: "total"
                          }
                        ],
                        staticClass: "numinput",
                        attrs: { disabled: "", type: "number" },
                        domProps: { value: _vm.total },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.total = $event.target.value
                          }
                        }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("tr", [
                    _c("td", [_vm._v("Fitter")]),
                    _vm._v(" "),
                    _c("td", [
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.invoiceData.fitter,
                              expression: "invoiceData.fitter"
                            }
                          ],
                          staticClass: "minimal numinput",
                          attrs: { name: "", id: "" },
                          on: {
                            change: function($event) {
                              var $$selectedVal = Array.prototype.filter
                                .call($event.target.options, function(o) {
                                  return o.selected
                                })
                                .map(function(o) {
                                  var val = "_value" in o ? o._value : o.value
                                  return val
                                })
                              _vm.$set(
                                _vm.invoiceData,
                                "fitter",
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
                            }
                          }
                        },
                        _vm._l(_vm.fitters, function(fitter) {
                          return _c(
                            "option",
                            { key: fitter.id, domProps: { value: fitter.id } },
                            [
                              _vm._v(
                                "\n                  " +
                                  _vm._s(fitter.name) +
                                  "\n                "
                              )
                            ]
                          )
                        }),
                        0
                      )
                    ]),
                    _vm._v(" "),
                    _c("td", [_vm._v("Amount Received")]),
                    _vm._v(" "),
                    _c("td", [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.invoiceData.received_amt,
                            expression: "invoiceData.received_amt"
                          }
                        ],
                        staticClass: "numinput",
                        attrs: { type: "number" },
                        domProps: { value: _vm.invoiceData.received_amt },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.invoiceData,
                              "received_amt",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("tr", [
                    _c("td"),
                    _vm._v(" "),
                    _c("td"),
                    _vm._v(" "),
                    _c("td", [_vm._v("Amount Due")]),
                    _vm._v(" "),
                    _c("td", [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.amtDue,
                            expression: "amtDue"
                          }
                        ],
                        staticClass: "numinput",
                        attrs: { disabled: "", type: "number" },
                        domProps: { value: _vm.amtDue },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.amtDue = $event.target.value
                          }
                        }
                      })
                    ])
                  ])
                ])
              ]),
              _vm._v(" "),
              _c(
                "v-row",
                { staticClass: "mx-5" },
                [
                  _c(
                    "v-col",
                    { attrs: { cols: "8" } },
                    [
                      _c(
                        "v-radio-group",
                        {
                          staticClass: "radio mt-1",
                          attrs: { mandatory: "", row: "" },
                          model: {
                            value: _vm.invoiceData.doc_type,
                            callback: function($$v) {
                              _vm.$set(_vm.invoiceData, "doc_type", $$v)
                            },
                            expression: "invoiceData.doc_type"
                          }
                        },
                        [
                          _c("v-radio", {
                            attrs: { label: "Invoice", value: "Invoice" }
                          }),
                          _vm._v(" "),
                          _c("v-radio", {
                            attrs: { label: "Quotation", value: "Quotation" }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-row",
                        [
                          _c("v-checkbox", {
                            attrs: { label: "Print Invoice" },
                            model: {
                              value: _vm.printInvoice,
                              callback: function($$v) {
                                _vm.printInvoice = $$v
                              },
                              expression: "printInvoice"
                            }
                          }),
                          _vm._v(" "),
                          _c("v-checkbox", {
                            attrs: { label: "Print Gate Pass" },
                            model: {
                              value: _vm.printGatePass,
                              callback: function($$v) {
                                _vm.printGatePass = $$v
                              },
                              expression: "printGatePass"
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { attrs: { cols: "4" } },
                    [
                      _c(
                        "v-btn",
                        {
                          staticClass: "mb-1",
                          attrs: {
                            block: "",
                            color: "primary",
                            loading: _vm.loading
                          },
                          on: { click: _vm.saveOrder }
                        },
                        [_vm._v("Save")]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          attrs: { block: "", color: "error" },
                          on: { click: _vm.clearCartItems }
                        },
                        [_vm._v("Clear all")]
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/ProductList.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/ProductList.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProductList_vue_vue_type_template_id_438ffe92_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductList.vue?vue&type=template&id=438ffe92&scoped=true& */ "./resources/js/components/ProductList.vue?vue&type=template&id=438ffe92&scoped=true&");
/* harmony import */ var _ProductList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductList.vue?vue&type=script&lang=js& */ "./resources/js/components/ProductList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ProductList_vue_vue_type_style_index_0_id_438ffe92_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProductList.vue?vue&type=style&index=0&id=438ffe92&lang=scss&scoped=true& */ "./resources/js/components/ProductList.vue?vue&type=style&index=0&id=438ffe92&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VChip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VChip */ "./node_modules/vuetify/lib/components/VChip/index.js");
/* harmony import */ var vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VDataTable */ "./node_modules/vuetify/lib/components/VDataTable/index.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/index.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ProductList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProductList_vue_vue_type_template_id_438ffe92_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ProductList_vue_vue_type_template_id_438ffe92_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "438ffe92",
  null
  
)

/* vuetify-loader */







_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4___default()(component, {VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCard"],VCardTitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardTitle"],VChip: vuetify_lib_components_VChip__WEBPACK_IMPORTED_MODULE_6__["VChip"],VDataTable: vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_7__["VDataTable"],VEditDialog: vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_7__["VEditDialog"],VTextField: vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_8__["VTextField"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ProductList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ProductList.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/ProductList.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ProductList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ProductList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ProductList.vue?vue&type=style&index=0&id=438ffe92&lang=scss&scoped=true&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/components/ProductList.vue?vue&type=style&index=0&id=438ffe92&lang=scss&scoped=true& ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductList_vue_vue_type_style_index_0_id_438ffe92_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ProductList.vue?vue&type=style&index=0&id=438ffe92&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ProductList.vue?vue&type=style&index=0&id=438ffe92&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductList_vue_vue_type_style_index_0_id_438ffe92_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductList_vue_vue_type_style_index_0_id_438ffe92_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductList_vue_vue_type_style_index_0_id_438ffe92_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductList_vue_vue_type_style_index_0_id_438ffe92_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/ProductList.vue?vue&type=template&id=438ffe92&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/ProductList.vue?vue&type=template&id=438ffe92&scoped=true& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductList_vue_vue_type_template_id_438ffe92_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ProductList.vue?vue&type=template&id=438ffe92&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ProductList.vue?vue&type=template&id=438ffe92&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductList_vue_vue_type_template_id_438ffe92_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductList_vue_vue_type_template_id_438ffe92_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/admin/InvoiceEdit.vue":
/*!**************************************************!*\
  !*** ./resources/js/views/admin/InvoiceEdit.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _InvoiceEdit_vue_vue_type_template_id_8a9b54f0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InvoiceEdit.vue?vue&type=template&id=8a9b54f0& */ "./resources/js/views/admin/InvoiceEdit.vue?vue&type=template&id=8a9b54f0&");
/* harmony import */ var _InvoiceEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InvoiceEdit.vue?vue&type=script&lang=js& */ "./resources/js/views/admin/InvoiceEdit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _InvoiceEdit_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./InvoiceEdit.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/views/admin/InvoiceEdit.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var vuetify_lib_components_VAutocomplete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VAutocomplete */ "./node_modules/vuetify/lib/components/VAutocomplete/index.js");
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VCheckbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VCheckbox */ "./node_modules/vuetify/lib/components/VCheckbox/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VDialog */ "./node_modules/vuetify/lib/components/VDialog/index.js");
/* harmony import */ var vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuetify/lib/components/VDivider */ "./node_modules/vuetify/lib/components/VDivider/index.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/index.js");
/* harmony import */ var vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! vuetify/lib/components/VList */ "./node_modules/vuetify/lib/components/VList/index.js");
/* harmony import */ var vuetify_lib_components_VRadioGroup__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! vuetify/lib/components/VRadioGroup */ "./node_modules/vuetify/lib/components/VRadioGroup/index.js");
/* harmony import */ var vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! vuetify/lib/components/VSelect */ "./node_modules/vuetify/lib/components/VSelect/index.js");
/* harmony import */ var vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! vuetify/lib/components/VDataTable */ "./node_modules/vuetify/lib/components/VDataTable/index.js");
/* harmony import */ var vuetify_lib_components_VTabs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! vuetify/lib/components/VTabs */ "./node_modules/vuetify/lib/components/VTabs/index.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/index.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _InvoiceEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _InvoiceEdit_vue_vue_type_template_id_8a9b54f0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _InvoiceEdit_vue_vue_type_template_id_8a9b54f0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */

























_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4___default()(component, {VAutocomplete: vuetify_lib_components_VAutocomplete__WEBPACK_IMPORTED_MODULE_5__["VAutocomplete"],VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_6__["VBtn"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_7__["VCard"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_7__["VCardText"],VCheckbox: vuetify_lib_components_VCheckbox__WEBPACK_IMPORTED_MODULE_8__["VCheckbox"],VCol: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_9__["VCol"],VContainer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_9__["VContainer"],VDialog: vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_10__["VDialog"],VDivider: vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_11__["VDivider"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_12__["VIcon"],VListItem: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_13__["VListItem"],VListItemAction: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_13__["VListItemAction"],VListItemContent: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_13__["VListItemContent"],VListItemSubtitle: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_13__["VListItemSubtitle"],VListItemTitle: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_13__["VListItemTitle"],VRadio: vuetify_lib_components_VRadioGroup__WEBPACK_IMPORTED_MODULE_14__["VRadio"],VRadioGroup: vuetify_lib_components_VRadioGroup__WEBPACK_IMPORTED_MODULE_14__["VRadioGroup"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_9__["VRow"],VSelect: vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_15__["VSelect"],VSimpleTable: vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_16__["VSimpleTable"],VTab: vuetify_lib_components_VTabs__WEBPACK_IMPORTED_MODULE_17__["VTab"],VTabItem: vuetify_lib_components_VTabs__WEBPACK_IMPORTED_MODULE_17__["VTabItem"],VTabs: vuetify_lib_components_VTabs__WEBPACK_IMPORTED_MODULE_17__["VTabs"],VTextField: vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_18__["VTextField"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/admin/InvoiceEdit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/admin/InvoiceEdit.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/views/admin/InvoiceEdit.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InvoiceEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./InvoiceEdit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/InvoiceEdit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InvoiceEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/admin/InvoiceEdit.vue?vue&type=style&index=0&lang=scss&":
/*!************************************************************************************!*\
  !*** ./resources/js/views/admin/InvoiceEdit.vue?vue&type=style&index=0&lang=scss& ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InvoiceEdit_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./InvoiceEdit.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/InvoiceEdit.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InvoiceEdit_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InvoiceEdit_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InvoiceEdit_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InvoiceEdit_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/views/admin/InvoiceEdit.vue?vue&type=template&id=8a9b54f0&":
/*!*********************************************************************************!*\
  !*** ./resources/js/views/admin/InvoiceEdit.vue?vue&type=template&id=8a9b54f0& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InvoiceEdit_vue_vue_type_template_id_8a9b54f0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./InvoiceEdit.vue?vue&type=template&id=8a9b54f0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/InvoiceEdit.vue?vue&type=template&id=8a9b54f0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InvoiceEdit_vue_vue_type_template_id_8a9b54f0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InvoiceEdit_vue_vue_type_template_id_8a9b54f0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);