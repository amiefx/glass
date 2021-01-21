(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[19],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/Products.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/Products.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  layout: 'admin',
  middleware: ['auth', 'admin'],
  data: function data() {
    return {
      valid: true,
      dialog: false,
      loading: false,
      snackbar: false,
      text: '',
      success: '',
      error: '',
      options: {
        sortBy: ['name'],
        sortDesc: [true]
      },
      rules: {
        required: function required(v) {
          return !!v || 'This Field is Required';
        },
        min: function min(v) {
          return v.length >= 5 || 'Minimum 5 Chracters Required';
        },
        validEmail: function validEmail(v) {
          return /.+@.+\..+/.test(v) || 'Email must be valid';
        }
      },
      headers: [{
        text: '#',
        value: 'id'
      }, {
        text: 'SKU',
        value: 'sku'
      }, {
        text: 'Name',
        value: 'name'
      }, {
        text: 'Category',
        value: 'category'
      }, {
        text: 'Brand',
        value: 'brand_name'
      }, {
        text: 'Enable Stock',
        value: 'stock'
      }, {
        text: 'Alert Qty',
        value: 'alert_quantity'
      }, {
        text: 'Price',
        value: 'selling_price'
      }, {
        text: 'Height',
        value: 'height'
      }, {
        text: 'Width',
        value: 'width'
      }, {
        text: 'Thickness',
        value: 'thickness'
      }, {
        text: 'Length',
        value: 'length'
      }, {
        text: 'Weight',
        value: 'weight'
      }, {
        text: 'Size',
        value: 'size'
      }, {
        text: 'Color',
        value: 'color'
      }, {
        text: 'Active',
        value: 'active'
      }, {
        text: 'Actions',
        value: 'action',
        sortable: false
      }],
      status: [{
        text: 'Active',
        value: true
      }, {
        text: 'In Active',
        value: false
      }],
      types: ['product', 'service provider'],
      products: [],
      categories: [],
      brands: [],
      units: [],
      slabs: [],
      editedIndex: -1,
      editedItem: {
        id: '',
        sku: '',
        name: '',
        category_id: '',
        brand_id: '',
        brand: {},
        enable_stock: false,
        alert_quantity: '',
        selling_price: '',
        height: '',
        width: '',
        thickness: '',
        length: '',
        weight: '',
        size: '',
        color: '',
        is_active: '',
        qty_on_hand: '',
        purchase_price: ''
      },
      defaultItem: {
        id: '',
        sku: '',
        name: '',
        category_id: '',
        brand_id: '',
        brand: '',
        enable_stock: false,
        alert_quantity: '',
        selling_price: '',
        height: '',
        width: '',
        thickness: '',
        length: '',
        weight: '',
        size: '',
        color: '',
        is_active: '',
        qty_on_hand: '',
        purchase_price: ''
      }
    };
  },
  computed: {
    formTitle: function formTitle() {
      return this.editedIndex === -1 ? 'New Item' : 'Edit Item';
    }
  },
  watch: {
    dialog: function dialog(val) {
      val || this.close();
    },
    'editedItem': {
      handler: 'getSku',
      deep: true
    }
  },
  created: function created() {
    var _this = this;

    this.initialize();
    axios.get("/api/categories/all").then(function (res) {
      _this.categories = res.data.data;
    });
    axios.get("/api/units/all").then(function (res) {
      _this.units = res.data.data;
    });
    axios.get("/api/brands/all").then(function (res) {
      _this.brands = res.data.data;
    });
    axios.get("/api/slabs/all").then(function (res) {
      _this.slabs = res.data.data;
    });
  },
  methods: {
    updateStatus: function updateStatus(item) {
      var _this2 = this;

      var index = this.products.data.indexOf(item);
      axios.post('/api/change-status', {
        'status': item.is_active,
        'product': item.id
      }).then(function (res) {
        _this2.text = res.data.product.name + "'s Status Updated to " + res.data.product.is_active;
        _this2.snackbar = true;
      })["catch"](function (error) {
        // this.text = error.response.product.name + "'s Status Cannot be Updated" + error.response.product.status
        _this2.products.data[index].is_active = error.response.data.product.is_active;
        _this2.snackbar = true;
        console.dir(error.response);
      });
    },
    getItemText: function getItemText(items) {
      console.log(items);
    },
    getSku: function getSku(item) {
      var a = this.editedItem.brand.name.slice(0, 2) + " " + this.editedItem.name;
      var color = this.editedItem.color !== '' ? " " + this.editedItem.color.slice(0, 3) : "";
      var vol = this.editedItem.height !== '' ? " " + this.editedItem.height + "X" + this.editedItem.width + "X" + this.editedItem.thickness : "";
      this.editedItem.brand_id = this.editedItem.brand.id;
      this.editedItem.sku = (a + color + vol).toUpperCase();
    },
    //   itemChanged(item) {
    //     this.editedItem.sku = item.name.slice(0, 2) + " " + this.editedItem.name;
    //     this.editedItem.brand_id = item.id
    //   },
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
    //           axios.post('/api/products/delete', {'products': this.selected})
    //           .then(res => {
    //               this.text = "Rcords Deleted Successfully!";
    //               this.selected.map(val =>{
    //                   const index = this.products.data.indexOf(val)
    //                   this.products.data.splice(index, 1)
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
    searchIt: function searchIt(e) {
      var _this3 = this;

      if (e.length > 3) {
        axios.get("/api/products/".concat(e)).then(function (res) {
          return _this3.products = res.data.products;
        })["catch"](function (err) {
          return console.dir(err.response);
        });
      }

      if (e.length <= 0) {
        // axios.get(`/api/products?page=${e.page}`,{params:{'per_page': e.itemsPerPage}})
        //   axios.get(`/api/products`)
        //     .then(res => this.products = res.data.data.products)
        //     .catch(err => console.dir(err.response))
        var sortBy = this.options.sortBy.length == 0 ? 'name' : this.options.sortBy[0];
        var orderBy = this.options.sortDesc.length > 0 || this.options.sortDesc[0] ? 'asc' : 'desc';
        axios.get("/api/products?page=".concat(e.page), {
          params: {
            'per_page': e.itemsPerPage,
            'sort_by': sortBy,
            'order_by': orderBy
          }
        }).then(function (res) {
          _this3.products = res.data.products;
        })["catch"](function (err) {
          return console.dir(err.response);
        });
      }
    },
    paginate: function paginate(e) {
      var _this4 = this;

      var sortBy = this.options.sortBy.length == 0 ? 'name' : this.options.sortBy[0];
      var orderBy = this.options.sortDesc.length > 0 || this.options.sortDesc[0] ? 'asc' : 'desc';
      axios.get("/api/products?page=".concat(e.page), {
        params: {
          'per_page': e.itemsPerPage,
          'sort_by': sortBy,
          'order_by': orderBy
        }
      }).then(function (res) {
        _this4.products = res.data.products;
      })["catch"](function (err) {//----
      });
    },
    initialize: function initialize() {
      var _this5 = this;

      // Add a request interceptor
      axios.interceptors.request.use(function (config) {
        _this5.loading = true;
        return config;
      }, function (error) {
        _this5.loading = false;
        return Promise.reject(error);
      }); // Add a response interceptor

      axios.interceptors.response.use(function (response) {
        _this5.loading = false;
        return response;
      }, function (error) {
        _this5.loading = false;
        return Promise.reject(error);
      });
    },
    editItem: function editItem(item) {
      this.editedIndex = this.products.data.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },
    deleteItem: function deleteItem(item) {
      var _this6 = this;

      var index = this.products.data.indexOf(item);
      var decide = confirm('Are you sure you want to delete this item?');

      if (decide) {
        axios["delete"]('/api/products/' + item.id).then(function (res) {
          _this6.snackbar = true;

          _this6.products.data.splice(index, 1);
        })["catch"](function (err) {
          console.log(err.response);
          _this6.text = "Error Deleting Record";
          _this6.snackbar = true;
        });
      }
    },
    close: function close() {
      var _this7 = this;

      this.dialog = false;
      setTimeout(function () {
        _this7.editedItem = Object.assign({}, _this7.defaultItem);
        _this7.editedIndex = -1;
      }, 300);
    },
    save: function save() {
      var _this8 = this;

      if (this.editedIndex > -1) {
        var index = this.editedIndex;
        axios.put('/api/products/' + this.editedItem.id, this.editedItem) //  .then(res => Object.assign(this.products[this.editedIndex], this.editedItem))
        .then(function (res) {
          console.log(res);
          _this8.text = "Record Updated Successfully!";
          _this8.snackbar = true;
          Object.assign(_this8.products.data[index], res.data.product);
        })["catch"](function (err) {
          console.log(err.response);
          _this8.text = "Error Updating Record";
          _this8.snackbar = true;
        }); //  Object.assign(this.products.data[this.editedIndex], this.editedItem)
      } else {
        axios.post('/api/products', this.editedItem).then(function (res) {
          _this8.text = "Record Added Successfully!";
          _this8.snackbar = true;

          _this8.products.data.push(res.data.product);
        })["catch"](function (err) {
          console.dir(err);
          _this8.text = "Error Inserting Record";
          _this8.snackbar = true;
        });
      }

      this.close();
    },
    getColor: function getColor(status) {
      if (status == 0) return 'red';else return 'green';
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/Products.vue?vue&type=template&id=49ba3dfa&":
/*!*******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/Products.vue?vue&type=template&id=49ba3dfa& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************/
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
      _c("v-data-table", {
        staticClass: "elevation-1",
        attrs: {
          headers: _vm.headers,
          items: _vm.products.data,
          "items-per-page": 5,
          "item-key": "id",
          loading: _vm.loading,
          options: _vm.options,
          "server-items-length": _vm.products.total,
          "loading-text": "Loading.. Please Wait!",
          "footer-props": {
            itemsPerPageOptions: [5, 10, 15],
            "show-current-page": true,
            "show-first-last-page": true
          }
        },
        on: {
          pagination: _vm.paginate,
          "update:options": function($event) {
            _vm.options = $event
          }
        },
        scopedSlots: _vm._u([
          {
            key: "top",
            fn: function() {
              return [
                _c(
                  "v-toolbar",
                  { attrs: { flat: "", color: "" } },
                  [
                    _c("v-toolbar-title", [_vm._v("product Management")]),
                    _vm._v(" "),
                    _c("v-divider", {
                      staticClass: "mx-4",
                      attrs: { inset: "", vertical: "" }
                    }),
                    _vm._v(" "),
                    _c("v-spacer"),
                    _vm._v(" "),
                    _c(
                      "v-dialog",
                      {
                        attrs: { "max-width": "900px" },
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
                                      attrs: { color: "primary", dark: "" }
                                    },
                                    on
                                  ),
                                  [_vm._v("New product")]
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
                            _c("v-card-title", [
                              _c("span", { staticClass: "headline" }, [
                                _vm._v(_vm._s(_vm.formTitle))
                              ])
                            ]),
                            _vm._v(" "),
                            _c(
                              "v-form",
                              {
                                attrs: { method: "post" },
                                on: {
                                  submit: function($event) {
                                    $event.stopPropagation()
                                    $event.preventDefault()
                                    return _vm.save($event)
                                  }
                                },
                                model: {
                                  value: _vm.valid,
                                  callback: function($$v) {
                                    _vm.valid = $$v
                                  },
                                  expression: "valid"
                                }
                              },
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
                                              {
                                                attrs: {
                                                  cols: "12",
                                                  md: "4",
                                                  lg: "4"
                                                }
                                              },
                                              [
                                                _c("v-text-field", {
                                                  attrs: {
                                                    label: "SKU",
                                                    rules: [_vm.rules.required]
                                                  },
                                                  model: {
                                                    value: _vm.editedItem.sku,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        _vm.editedItem,
                                                        "sku",
                                                        $$v
                                                      )
                                                    },
                                                    expression: "editedItem.sku"
                                                  }
                                                }),
                                                _vm._v(" "),
                                                _c("v-select", {
                                                  attrs: {
                                                    items: _vm.categories,
                                                    "item-text": "name",
                                                    "item-value": "id",
                                                    label: "Category",
                                                    rules: [_vm.rules.required]
                                                  },
                                                  model: {
                                                    value:
                                                      _vm.editedItem
                                                        .category_id,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        _vm.editedItem,
                                                        "category_id",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "editedItem.category_id"
                                                  }
                                                }),
                                                _vm._v(" "),
                                                _c("v-select", {
                                                  attrs: {
                                                    items: _vm.brands,
                                                    "item-text": "name",
                                                    "item-value": "id",
                                                    label: "Brand",
                                                    rules: [_vm.rules.required],
                                                    "return-object": ""
                                                  },
                                                  model: {
                                                    value: _vm.editedItem.brand,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        _vm.editedItem,
                                                        "brand",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "editedItem.brand"
                                                  }
                                                }),
                                                _vm._v(" "),
                                                _c("v-text-field", {
                                                  attrs: {
                                                    label: "Name",
                                                    rules: [_vm.rules.required]
                                                  },
                                                  model: {
                                                    value: _vm.editedItem.name,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        _vm.editedItem,
                                                        "name",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "editedItem.name"
                                                  }
                                                }),
                                                _vm._v(" "),
                                                _c("v-select", {
                                                  attrs: {
                                                    items: _vm.units,
                                                    "item-text": "short_name",
                                                    "item-value": "id",
                                                    label: "Unit",
                                                    rules: [_vm.rules.required]
                                                  },
                                                  model: {
                                                    value:
                                                      _vm.editedItem.unit_id,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        _vm.editedItem,
                                                        "unit_id",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "editedItem.unit_id"
                                                  }
                                                }),
                                                _vm._v(" "),
                                                _c("v-text-field", {
                                                  attrs: {
                                                    type: "number",
                                                    label: "Selling Price"
                                                  },
                                                  model: {
                                                    value:
                                                      _vm.editedItem
                                                        .selling_price,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        _vm.editedItem,
                                                        "selling_price",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "editedItem.selling_price"
                                                  }
                                                })
                                              ],
                                              1
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "v-col",
                                              {
                                                attrs: {
                                                  cols: "12",
                                                  md: "4",
                                                  lg: "4"
                                                }
                                              },
                                              [
                                                _c("v-text-field", {
                                                  attrs: {
                                                    type: "number",
                                                    label: "Height"
                                                  },
                                                  model: {
                                                    value:
                                                      _vm.editedItem.height,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        _vm.editedItem,
                                                        "height",
                                                        _vm._n($$v)
                                                      )
                                                    },
                                                    expression:
                                                      "editedItem.height"
                                                  }
                                                }),
                                                _vm._v(" "),
                                                _c("v-text-field", {
                                                  attrs: {
                                                    type: "number",
                                                    label: "Width"
                                                  },
                                                  model: {
                                                    value: _vm.editedItem.width,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        _vm.editedItem,
                                                        "width",
                                                        _vm._n($$v)
                                                      )
                                                    },
                                                    expression:
                                                      "editedItem.width"
                                                  }
                                                }),
                                                _vm._v(" "),
                                                _c("v-text-field", {
                                                  attrs: {
                                                    type: "number",
                                                    label: "Thinkness"
                                                  },
                                                  model: {
                                                    value:
                                                      _vm.editedItem.thickness,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        _vm.editedItem,
                                                        "thickness",
                                                        _vm._n($$v)
                                                      )
                                                    },
                                                    expression:
                                                      "editedItem.thickness"
                                                  }
                                                }),
                                                _vm._v(" "),
                                                _c("v-text-field", {
                                                  attrs: {
                                                    type: "number",
                                                    label: "Length"
                                                  },
                                                  model: {
                                                    value:
                                                      _vm.editedItem.length,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        _vm.editedItem,
                                                        "length",
                                                        _vm._n($$v)
                                                      )
                                                    },
                                                    expression:
                                                      "editedItem.length"
                                                  }
                                                }),
                                                _vm._v(" "),
                                                _c("v-text-field", {
                                                  attrs: {
                                                    type: "number",
                                                    label: "Weight"
                                                  },
                                                  model: {
                                                    value:
                                                      _vm.editedItem.weight,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        _vm.editedItem,
                                                        "weight",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "editedItem.weight"
                                                  }
                                                }),
                                                _vm._v(" "),
                                                _c("v-text-field", {
                                                  attrs: { label: "Size" },
                                                  model: {
                                                    value: _vm.editedItem.size,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        _vm.editedItem,
                                                        "size",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "editedItem.size"
                                                  }
                                                }),
                                                _vm._v(" "),
                                                _c("v-text-field", {
                                                  attrs: { label: "Color" },
                                                  model: {
                                                    value: _vm.editedItem.color,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        _vm.editedItem,
                                                        "color",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "editedItem.color"
                                                  }
                                                })
                                              ],
                                              1
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "v-col",
                                              {
                                                attrs: {
                                                  cols: "12",
                                                  md: "4",
                                                  lg: "4"
                                                }
                                              },
                                              [
                                                _c("v-checkbox", {
                                                  attrs: {
                                                    label: "Enable Stock"
                                                  },
                                                  model: {
                                                    value:
                                                      _vm.editedItem
                                                        .enable_stock,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        _vm.editedItem,
                                                        "enable_stock",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "editedItem.enable_stock"
                                                  }
                                                }),
                                                _vm._v(" "),
                                                _vm.editedItem.enable_stock
                                                  ? _c(
                                                      "div",
                                                      [
                                                        _c("v-text-field", {
                                                          attrs: {
                                                            type: "number",
                                                            label:
                                                              "Alert Quantity"
                                                          },
                                                          model: {
                                                            value:
                                                              _vm.editedItem
                                                                .alert_quantity,
                                                            callback: function(
                                                              $$v
                                                            ) {
                                                              _vm.$set(
                                                                _vm.editedItem,
                                                                "alert_quantity",
                                                                $$v
                                                              )
                                                            },
                                                            expression:
                                                              "editedItem.alert_quantity"
                                                          }
                                                        }),
                                                        _vm._v(" "),
                                                        _vm.editedIndex === -1
                                                          ? _c("v-text-field", {
                                                              attrs: {
                                                                type: "number",
                                                                label:
                                                                  "Quantity on Hand"
                                                              },
                                                              model: {
                                                                value:
                                                                  _vm.editedItem
                                                                    .qty_on_hand,
                                                                callback: function(
                                                                  $$v
                                                                ) {
                                                                  _vm.$set(
                                                                    _vm.editedItem,
                                                                    "qty_on_hand",
                                                                    $$v
                                                                  )
                                                                },
                                                                expression:
                                                                  "editedItem.qty_on_hand"
                                                              }
                                                            })
                                                          : _vm._e(),
                                                        _vm._v(" "),
                                                        _vm.editedIndex === -1
                                                          ? _c("v-text-field", {
                                                              attrs: {
                                                                type: "number",
                                                                label:
                                                                  "Purchase Price"
                                                              },
                                                              model: {
                                                                value:
                                                                  _vm.editedItem
                                                                    .purchase_price,
                                                                callback: function(
                                                                  $$v
                                                                ) {
                                                                  _vm.$set(
                                                                    _vm.editedItem,
                                                                    "purchase_price",
                                                                    $$v
                                                                  )
                                                                },
                                                                expression:
                                                                  "editedItem.purchase_price"
                                                              }
                                                            })
                                                          : _vm._e(),
                                                        _vm._v(" "),
                                                        _vm.editedIndex === -1
                                                          ? _c("v-text-field", {
                                                              attrs: {
                                                                type: "number",
                                                                label: "Total"
                                                              },
                                                              model: {
                                                                value:
                                                                  _vm.editedItem
                                                                    .total,
                                                                callback: function(
                                                                  $$v
                                                                ) {
                                                                  _vm.$set(
                                                                    _vm.editedItem,
                                                                    "total",
                                                                    $$v
                                                                  )
                                                                },
                                                                expression:
                                                                  "editedItem.total"
                                                              }
                                                            })
                                                          : _vm._e()
                                                      ],
                                                      1
                                                    )
                                                  : _vm._e(),
                                                _vm._v(" "),
                                                _c("v-checkbox", {
                                                  attrs: { label: "Active" },
                                                  model: {
                                                    value:
                                                      _vm.editedItem.is_active,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        _vm.editedItem,
                                                        "is_active",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "editedItem.is_active"
                                                  }
                                                })
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
                                  "v-card-actions",
                                  [
                                    _c("v-spacer"),
                                    _vm._v(" "),
                                    _c(
                                      "v-btn",
                                      {
                                        attrs: { color: "primary", text: "" },
                                        on: { click: _vm.close }
                                      },
                                      [_vm._v("Cancel")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "v-btn",
                                      {
                                        attrs: {
                                          color: "primary",
                                          type: "submit",
                                          disabled: !_vm.valid
                                        },
                                        on: {
                                          click: function($event) {
                                            $event.preventDefault()
                                            return _vm.save($event)
                                          }
                                        }
                                      },
                                      [_vm._v("Save")]
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
                _c("v-text-field", {
                  staticClass: "mx-4",
                  attrs: {
                    "append-icon": "mdi-search",
                    label: "Search",
                    "single-line": "",
                    "hide-details": ""
                  },
                  on: { input: _vm.searchIt }
                })
              ]
            },
            proxy: true
          },
          {
            key: "item.action",
            fn: function(ref) {
              var item = ref.item
              return [
                _c(
                  "v-icon",
                  {
                    staticClass: "mr-2",
                    attrs: { small: "" },
                    on: {
                      click: function($event) {
                        return _vm.editItem(item)
                      }
                    }
                  },
                  [_vm._v("\n        mdi-pencil\n      ")]
                ),
                _vm._v(" "),
                _c(
                  "v-icon",
                  {
                    attrs: { small: "" },
                    on: {
                      click: function($event) {
                        return _vm.deleteItem(item)
                      }
                    }
                  },
                  [_vm._v("\n        mdi-delete\n      ")]
                )
              ]
            }
          },
          {
            key: "no-data",
            fn: function() {
              return [
                _c(
                  "v-btn",
                  {
                    attrs: { color: "primary" },
                    on: { click: _vm.initialize }
                  },
                  [_vm._v("Reset")]
                )
              ]
            },
            proxy: true
          },
          {
            key: "item.is_active",
            fn: function(ref) {
              var item = ref.item
              return [
                _c(
                  "v-edit-dialog",
                  {
                    attrs: {
                      large: "",
                      block: "",
                      persistent: "",
                      "return-value": item.is_active
                    },
                    on: {
                      "update:returnValue": function($event) {
                        return _vm.$set(item, "is_active", $event)
                      },
                      "update:return-value": function($event) {
                        return _vm.$set(item, "is_active", $event)
                      },
                      save: function($event) {
                        return _vm.updateStatus(item)
                      }
                    },
                    scopedSlots: _vm._u(
                      [
                        {
                          key: "input",
                          fn: function() {
                            return [
                              _c("v-select", {
                                attrs: {
                                  items: _vm.status,
                                  "item-text": _vm.status.text,
                                  "item-value": _vm.status.value,
                                  label: "Select Status"
                                },
                                model: {
                                  value: item.is_active,
                                  callback: function($$v) {
                                    _vm.$set(item, "is_active", $$v)
                                  },
                                  expression: "item.is_active"
                                }
                              })
                            ]
                          },
                          proxy: true
                        }
                      ],
                      null,
                      true
                    )
                  },
                  [
                    _c(
                      "v-chip",
                      {
                        attrs: { color: _vm.getColor(item.is_active), dark: "" }
                      },
                      [
                        item.is_active == 1
                          ? _c("span", [_vm._v("Active")])
                          : _c("span", [_vm._v("In Active")])
                      ]
                    )
                  ],
                  1
                )
              ]
            }
          }
        ])
      }),
      _vm._v(" "),
      _c(
        "v-snackbar",
        {
          model: {
            value: _vm.snackbar,
            callback: function($$v) {
              _vm.snackbar = $$v
            },
            expression: "snackbar"
          }
        },
        [
          _vm._v("\n      " + _vm._s(_vm.text) + "\n      "),
          _c(
            "v-btn",
            {
              attrs: { color: "white", text: "" },
              on: {
                click: function($event) {
                  _vm.snackbar = false
                }
              }
            },
            [_vm._v("\n          Close\n      ")]
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

/***/ "./resources/js/views/admin/Products.vue":
/*!***********************************************!*\
  !*** ./resources/js/views/admin/Products.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Products_vue_vue_type_template_id_49ba3dfa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Products.vue?vue&type=template&id=49ba3dfa& */ "./resources/js/views/admin/Products.vue?vue&type=template&id=49ba3dfa&");
/* harmony import */ var _Products_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Products.vue?vue&type=script&lang=js& */ "./resources/js/views/admin/Products.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VCheckbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VCheckbox */ "./node_modules/vuetify/lib/components/VCheckbox/index.js");
/* harmony import */ var vuetify_lib_components_VChip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VChip */ "./node_modules/vuetify/lib/components/VChip/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VDataTable */ "./node_modules/vuetify/lib/components/VDataTable/index.js");
/* harmony import */ var vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VDialog */ "./node_modules/vuetify/lib/components/VDialog/index.js");
/* harmony import */ var vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuetify/lib/components/VDivider */ "./node_modules/vuetify/lib/components/VDivider/index.js");
/* harmony import */ var vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vuetify/lib/components/VForm */ "./node_modules/vuetify/lib/components/VForm/index.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/index.js");
/* harmony import */ var vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! vuetify/lib/components/VSelect */ "./node_modules/vuetify/lib/components/VSelect/index.js");
/* harmony import */ var vuetify_lib_components_VSnackbar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! vuetify/lib/components/VSnackbar */ "./node_modules/vuetify/lib/components/VSnackbar/index.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/index.js");
/* harmony import */ var vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! vuetify/lib/components/VToolbar */ "./node_modules/vuetify/lib/components/VToolbar/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Products_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Products_vue_vue_type_template_id_49ba3dfa___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Products_vue_vue_type_template_id_49ba3dfa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */























_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__["VBtn"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCard"],VCardActions: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardActions"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardText"],VCardTitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardTitle"],VCheckbox: vuetify_lib_components_VCheckbox__WEBPACK_IMPORTED_MODULE_6__["VCheckbox"],VChip: vuetify_lib_components_VChip__WEBPACK_IMPORTED_MODULE_7__["VChip"],VCol: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_8__["VCol"],VContainer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_8__["VContainer"],VDataTable: vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_9__["VDataTable"],VDialog: vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_10__["VDialog"],VDivider: vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_11__["VDivider"],VEditDialog: vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_9__["VEditDialog"],VForm: vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_12__["VForm"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_13__["VIcon"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_8__["VRow"],VSelect: vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_14__["VSelect"],VSnackbar: vuetify_lib_components_VSnackbar__WEBPACK_IMPORTED_MODULE_15__["VSnackbar"],VSpacer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_8__["VSpacer"],VTextField: vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_16__["VTextField"],VToolbar: vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_17__["VToolbar"],VToolbarTitle: vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_17__["VToolbarTitle"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/admin/Products.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/admin/Products.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/views/admin/Products.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Products.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/Products.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/admin/Products.vue?vue&type=template&id=49ba3dfa&":
/*!******************************************************************************!*\
  !*** ./resources/js/views/admin/Products.vue?vue&type=template&id=49ba3dfa& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_template_id_49ba3dfa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Products.vue?vue&type=template&id=49ba3dfa& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/Products.vue?vue&type=template&id=49ba3dfa&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_template_id_49ba3dfa___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_template_id_49ba3dfa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);