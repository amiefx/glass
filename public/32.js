(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[32],{

<<<<<<< HEAD
/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/InvoiceApprovals.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/InvoiceApprovals.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************/
=======
/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/Panels.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/Panels.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************/
>>>>>>> 3037ab0c41de01835fe07f3d4bdc1e752e6e73c7
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
<<<<<<< HEAD
=======
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
>>>>>>> 3037ab0c41de01835fe07f3d4bdc1e752e6e73c7
/* harmony default export */ __webpack_exports__["default"] = ({
  layout: "admin",
  middleware: ["auth", "admin"],
  props: ["customer_id"],
  data: function data() {
    return {
      valid: true,
      dialog: false,
      loading: false,
      snackbar: false,
      search: '',
      text: "",
      success: "",
      error: "",
      options: {
<<<<<<< HEAD
        sortBy: ["id"],
        sortDesc: [true]
      },
      headers: [{
        text: "#",
        value: "id"
      }, {
        text: "Total",
        value: "total"
      }, {
        text: "Discount",
        value: "discount"
      }, {
        text: "Sub Total",
        value: "sub_total"
      }, {
        text: "Amount Received",
        value: "amount_recieved"
      }, {
        text: "User",
        value: "user_id"
=======
        sortBy: ['id'],
        sortDesc: [true]
      },
      rules: {
        required: function required(v) {
          return !!v || 'This Field is Required';
        },
        size: function size(v) {
          return v.length >= 5 || 'Size 5 Chracters Required';
        },
        validEmail: function validEmail(v) {
          return /.+@.+\..+/.test(v) || 'Email must be valid';
        }
      },
      headers: [{
        text: '#',
        value: 'id'
      }, {
        text: 'Size',
        value: 'size'
      }, {
        text: 'Standard Size',
        value: 'standard_size'
>>>>>>> 3037ab0c41de01835fe07f3d4bdc1e752e6e73c7
      }, {
        text: 'Actions',
        value: 'action',
        sortable: false
      }],
<<<<<<< HEAD
      orders: [],
      invoices: [],
      quotations: []
    };
  },
=======
      panels: [],
      editedIndex: -1,
      editedItem: {
        id: '',
        size: '',
        standard_size: ''
      },
      defaultItem: {
        id: '',
        size: '',
        standard_size: ''
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
    }
  },
  created: function created() {
    this.initialize();
  },
>>>>>>> 3037ab0c41de01835fe07f3d4bdc1e752e6e73c7
  methods: {
    searchIt: function searchIt(e) {
      var _this = this;

<<<<<<< HEAD
      if (e.length > 0) {
        axios.get("/api/order/".concat(e)).then(function (res) {
          _this.orders = res.data.orders;
          _this.invoices = res.data.orders.data.filter(function (item) {
            return item.status == 'Invoice';
          });
          _this.quotations = res.data.orders.data.filter(function (item) {
            return item.status == 'Quotation';
          });
=======
      if (e.length > 3) {
        axios.get("/api/panels/".concat(e)).then(function (res) {
          return _this.panels = res.data.panels;
>>>>>>> 3037ab0c41de01835fe07f3d4bdc1e752e6e73c7
        })["catch"](function (err) {
          return console.dir(err.response);
        });
      }

      if (e.length <= 0) {
<<<<<<< HEAD
        var sortBy = this.options.sortBy.length == 0 ? "id" : this.options.sortBy[0];
        var orderBy = this.options.sortDesc.length > 0 || this.options.sortDesc[0] ? "asc" : "desc";
        axios.get("/api/order?page=".concat(e.page), {
=======
        // axios.get(`/api/panels?page=${e.page}`,{params:{'per_page': e.itemsPerPage}})
        //   axios.get(`/api/panels`)
        //     .then(res => this.panels = res.data.data.panels)
        //     .catch(err => console.dir(err.response))
        var sortBy = this.options.sortBy.length == 0 ? 'id' : this.options.sortBy[0];
        var orderBy = this.options.sortDesc.length > 0 || this.options.sortDesc[0] ? 'asc' : 'desc';
        axios.get("/api/panels?page=".concat(e.page), {
>>>>>>> 3037ab0c41de01835fe07f3d4bdc1e752e6e73c7
          params: {
            per_page: e.itemsPerPage,
            sort_by: sortBy,
            order_by: orderBy,
            customer_id: this.customer_id
          }
        }).then(function (res) {
<<<<<<< HEAD
          _this.orders = res.data.orders;
          _this.invoices = res.data.orders.data.filter(function (item) {
            return item;
          });
=======
          _this.panels = res.data.panels;
>>>>>>> 3037ab0c41de01835fe07f3d4bdc1e752e6e73c7
        })["catch"](function (err) {
          return console.dir(err.response);
        });
      }
    },
    paginate: function paginate(e) {
      var _this2 = this;

<<<<<<< HEAD
      var sortBy = this.options.sortBy.length == 0 ? "id" : this.options.sortBy[0];
      var orderBy = this.options.sortDesc.length > 0 || this.options.sortDesc[0] ? "asc" : "desc";
      axios.get("/api/order?page=".concat(e.page), {
=======
      var sortBy = this.options.sortBy.length == 0 ? 'id' : this.options.sortBy[0];
      var orderBy = this.options.sortDesc.length > 0 || this.options.sortDesc[0] ? 'asc' : 'desc';
      axios.get("/api/panels?page=".concat(e.page), {
>>>>>>> 3037ab0c41de01835fe07f3d4bdc1e752e6e73c7
        params: {
          per_page: e.itemsPerPage,
          sort_by: sortBy,
          order_by: orderBy,
          customer_id: this.customer_id
        }
      }).then(function (res) {
<<<<<<< HEAD
        _this2.orders = res.data.orders;
        _this2.invoices = res.data.orders.data.filter(function (item) {
          return item.status == 'Invoice';
        });
        _this2.quotations = res.data.orders.data.filter(function (item) {
          return item.status == 'Quotation';
        });
=======
        _this2.panels = res.data.panels;
>>>>>>> 3037ab0c41de01835fe07f3d4bdc1e752e6e73c7
      })["catch"](function (err) {//----
      });
    },
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
      axios.get('/api/penddingorders').then(function (res) {
        _this3.orders = res.data.order;
      });
    },
<<<<<<< HEAD
    testM: function testM() {
      var e = {
        itemsLength: 0,
        itemsPerPage: 5,
        page: 1,
        pageCount: 0,
        pageStart: 0,
        pageStop: 0
      };
      this.paginate(e);
=======
    editItem: function editItem(item) {
      this.editedIndex = this.panels.data.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },
    deleteItem: function deleteItem(item) {
      var _this4 = this;

      var index = this.panels.data.indexOf(item);
      var decide = confirm('Are you sure you want to delete this item?');

      if (decide) {
        axios["delete"]('/api/panels/' + item.id).then(function (res) {
          _this4.snackbar = true;

          _this4.panels.data.splice(index, 1);
        })["catch"](function (err) {
          console.log(err.response);
          _this4.text = "Error Deleting Record";
          _this4.snackbar = true;
        });
      }
    },
    close: function close() {
      var _this5 = this;

      this.dialog = false;
      setTimeout(function () {
        _this5.editedItem = Object.assign({}, _this5.defaultItem);
        _this5.editedIndex = -1;
      }, 300);
    },
    save: function save() {
      var _this6 = this;

      if (this.editedIndex > -1) {
        var index = this.editedIndex;
        axios.put('/api/panels/' + this.editedItem.id, this.editedItem) //  .then(res => Object.assign(this.panels[this.editedIndex], this.editedItem))
        .then(function (res) {
          console.log(res);
          _this6.text = "Record Updated Successfully!";
          _this6.snackbar = true;
          Object.assign(_this6.panels.data[index], res.data.panel);
        })["catch"](function (err) {
          console.log(err.response);
          _this6.text = "Error Updating Record";
          _this6.snackbar = true;
        }); //  Object.assign(this.panels.data[this.editedIndex], this.editedItem)
      } else {
        axios.post('/api/panels', this.editedItem).then(function (res) {
          _this6.text = "Record Added Successfully!";
          _this6.snackbar = true;

          _this6.panels.data.push(res.data.panel);
        })["catch"](function (err) {
          console.dir(err);
          _this6.text = "Error Inserting Record";
          _this6.snackbar = true;
        });
      }

      this.close();
>>>>>>> 3037ab0c41de01835fe07f3d4bdc1e752e6e73c7
    },
    editInvoice: function editInvoice(item) {
      this.$router.push("/admin/invoice-pending/view/".concat(item.id));
    }
  },
  created: function created() {
    this.initialize();
  },
  watch: {
    customer_id: function customer_id() {
      var e = {
        itemsLength: 0,
        itemsPerPage: 5,
        page: 1,
        pageCount: 0,
        pageStart: 0,
        pageStop: 0
      };
      this.paginate(e);
    }
  }
});

/***/ }),

<<<<<<< HEAD
/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/InvoiceApprovals.vue?vue&type=template&id=7a444302&":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/InvoiceApprovals.vue?vue&type=template&id=7a444302& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
=======
/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/Panels.vue?vue&type=template&id=386a9ece&":
/*!*****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/Panels.vue?vue&type=template&id=386a9ece& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************/
>>>>>>> 3037ab0c41de01835fe07f3d4bdc1e752e6e73c7
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
<<<<<<< HEAD
      _c(
        "v-card",
        [
          _c(
            "v-card-title",
            [
              _vm._v("\n    Pending Invoices\n    "),
              _c("v-spacer"),
              _vm._v(" "),
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
              items: _vm.orders,
              search: _vm.search
            },
            scopedSlots: _vm._u([
              {
                key: "item.id",
                fn: function(ref) {
                  var item = ref.item
                  return [
=======
      _c("v-data-table", {
        staticClass: "elevation-1",
        attrs: {
          headers: _vm.headers,
          items: _vm.panels.data,
          "items-per-page": 5,
          "item-key": "id",
          loading: _vm.loading,
          options: _vm.options,
          "server-items-length": _vm.panels.total,
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
                    _c("v-toolbar-title", { staticClass: "text-primary" }, [
                      _vm._v("Panel Management")
                    ]),
                    _vm._v(" "),
                    _c("v-divider", {
                      staticClass: "mx-4",
                      attrs: { inset: "", vertical: "" }
                    }),
                    _vm._v(" "),
                    _c("v-spacer"),
                    _vm._v(" "),
>>>>>>> 3037ab0c41de01835fe07f3d4bdc1e752e6e73c7
                    _c(
                      "v-tooltip",
                      {
<<<<<<< HEAD
                        attrs: { bottom: "" },
                        scopedSlots: _vm._u(
                          [
                            {
                              key: "activator",
                              fn: function(ref) {
                                var on = ref.on
                                var attrs = ref.attrs
                                return [
                                  _c(
                                    "span",
                                    _vm._g(
                                      _vm._b(
                                        {
                                          on: {
                                            click: function($event) {
                                              return _vm.editInvoice(item)
                                            }
=======
                        attrs: { "max-width": "500px" },
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
                                  [_vm._v("New Pnel")]
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
                                              { attrs: { cols: "12" } },
                                              [
                                                _c("v-text-field", {
                                                  attrs: {
                                                    label: "Size",
                                                    rules: [_vm.rules.required]
                                                  },
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
                                                  attrs: {
                                                    label: "Standard Size",
                                                    rules: [_vm.rules.required]
                                                  },
                                                  model: {
                                                    value:
                                                      _vm.editedItem
                                                        .standard_size,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        _vm.editedItem,
                                                        "standard_size",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "editedItem.standard_size"
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
>>>>>>> 3037ab0c41de01835fe07f3d4bdc1e752e6e73c7
                                          }
                                        },
                                        "span",
                                        attrs,
                                        false
                                      ),
                                      on
                                    ),
                                    [_vm._v(_vm._s(item.id))]
                                  )
                                ]
                              }
                            }
                          ],
                          null,
                          true
                        )
<<<<<<< HEAD
                      },
                      [_vm._v(" "), _c("span", [_vm._v("Click to Edit")])]
                    )
                  ]
                }
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
                      [_vm._v("\n      mdi-pencil\n    ")]
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
                      [_vm._v("\n      mdi-delete\n    ")]
                    )
                  ]
                }
              }
            ])
          })
        ],
        1
      ),
=======
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
          }
        ])
      }),
>>>>>>> 3037ab0c41de01835fe07f3d4bdc1e752e6e73c7
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
          _vm._v("\n    " + _vm._s(_vm.text) + "\n    "),
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
            [_vm._v(" Close ")]
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

<<<<<<< HEAD
/***/ "./resources/js/views/admin/InvoiceApprovals.vue":
/*!*******************************************************!*\
  !*** ./resources/js/views/admin/InvoiceApprovals.vue ***!
  \*******************************************************/
=======
/***/ "./resources/js/views/admin/Panels.vue":
/*!*********************************************!*\
  !*** ./resources/js/views/admin/Panels.vue ***!
  \*********************************************/
>>>>>>> 3037ab0c41de01835fe07f3d4bdc1e752e6e73c7
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _InvoiceApprovals_vue_vue_type_template_id_7a444302___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InvoiceApprovals.vue?vue&type=template&id=7a444302& */ "./resources/js/views/admin/InvoiceApprovals.vue?vue&type=template&id=7a444302&");
/* harmony import */ var _InvoiceApprovals_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InvoiceApprovals.vue?vue&type=script&lang=js& */ "./resources/js/views/admin/InvoiceApprovals.vue?vue&type=script&lang=js&");
=======
/* harmony import */ var _Panels_vue_vue_type_template_id_386a9ece___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Panels.vue?vue&type=template&id=386a9ece& */ "./resources/js/views/admin/Panels.vue?vue&type=template&id=386a9ece&");
/* harmony import */ var _Panels_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Panels.vue?vue&type=script&lang=js& */ "./resources/js/views/admin/Panels.vue?vue&type=script&lang=js&");
>>>>>>> 3037ab0c41de01835fe07f3d4bdc1e752e6e73c7
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
<<<<<<< HEAD
/* harmony import */ var vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VDataTable */ "./node_modules/vuetify/lib/components/VDataTable/index.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/index.js");
/* harmony import */ var vuetify_lib_components_VSnackbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VSnackbar */ "./node_modules/vuetify/lib/components/VSnackbar/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/index.js");
/* harmony import */ var vuetify_lib_components_VTooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuetify/lib/components/VTooltip */ "./node_modules/vuetify/lib/components/VTooltip/index.js");
=======
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VDataTable */ "./node_modules/vuetify/lib/components/VDataTable/index.js");
/* harmony import */ var vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VDialog */ "./node_modules/vuetify/lib/components/VDialog/index.js");
/* harmony import */ var vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VDivider */ "./node_modules/vuetify/lib/components/VDivider/index.js");
/* harmony import */ var vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VForm */ "./node_modules/vuetify/lib/components/VForm/index.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/index.js");
/* harmony import */ var vuetify_lib_components_VSnackbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vuetify/lib/components/VSnackbar */ "./node_modules/vuetify/lib/components/VSnackbar/index.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/index.js");
/* harmony import */ var vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! vuetify/lib/components/VToolbar */ "./node_modules/vuetify/lib/components/VToolbar/index.js");
>>>>>>> 3037ab0c41de01835fe07f3d4bdc1e752e6e73c7





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
<<<<<<< HEAD
  _InvoiceApprovals_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _InvoiceApprovals_vue_vue_type_template_id_7a444302___WEBPACK_IMPORTED_MODULE_0__["render"],
  _InvoiceApprovals_vue_vue_type_template_id_7a444302___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
=======
  _Panels_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Panels_vue_vue_type_template_id_386a9ece___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Panels_vue_vue_type_template_id_386a9ece___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
>>>>>>> 3037ab0c41de01835fe07f3d4bdc1e752e6e73c7
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */










<<<<<<< HEAD
_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__["VBtn"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCard"],VCardTitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardTitle"],VDataTable: vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_6__["VDataTable"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_7__["VIcon"],VSnackbar: vuetify_lib_components_VSnackbar__WEBPACK_IMPORTED_MODULE_8__["VSnackbar"],VSpacer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_9__["VSpacer"],VTextField: vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_10__["VTextField"],VTooltip: vuetify_lib_components_VTooltip__WEBPACK_IMPORTED_MODULE_11__["VTooltip"]})
=======









_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__["VBtn"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCard"],VCardActions: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardActions"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardText"],VCardTitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardTitle"],VCol: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VCol"],VContainer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VContainer"],VDataTable: vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_7__["VDataTable"],VDialog: vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_8__["VDialog"],VDivider: vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_9__["VDivider"],VForm: vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_10__["VForm"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_11__["VIcon"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VRow"],VSnackbar: vuetify_lib_components_VSnackbar__WEBPACK_IMPORTED_MODULE_12__["VSnackbar"],VSpacer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VSpacer"],VTextField: vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_13__["VTextField"],VToolbar: vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_14__["VToolbar"],VToolbarTitle: vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_14__["VToolbarTitle"]})
>>>>>>> 3037ab0c41de01835fe07f3d4bdc1e752e6e73c7


/* hot reload */
if (false) { var api; }
<<<<<<< HEAD
component.options.__file = "resources/js/views/admin/InvoiceApprovals.vue"
=======
component.options.__file = "resources/js/views/admin/Panels.vue"
>>>>>>> 3037ab0c41de01835fe07f3d4bdc1e752e6e73c7
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

<<<<<<< HEAD
/***/ "./resources/js/views/admin/InvoiceApprovals.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/views/admin/InvoiceApprovals.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
=======
/***/ "./resources/js/views/admin/Panels.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/views/admin/Panels.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
>>>>>>> 3037ab0c41de01835fe07f3d4bdc1e752e6e73c7
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InvoiceApprovals_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./InvoiceApprovals.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/InvoiceApprovals.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InvoiceApprovals_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/admin/InvoiceApprovals.vue?vue&type=template&id=7a444302&":
/*!**************************************************************************************!*\
  !*** ./resources/js/views/admin/InvoiceApprovals.vue?vue&type=template&id=7a444302& ***!
  \**************************************************************************************/
=======
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Panels_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Panels.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/Panels.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Panels_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/admin/Panels.vue?vue&type=template&id=386a9ece&":
/*!****************************************************************************!*\
  !*** ./resources/js/views/admin/Panels.vue?vue&type=template&id=386a9ece& ***!
  \****************************************************************************/
>>>>>>> 3037ab0c41de01835fe07f3d4bdc1e752e6e73c7
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InvoiceApprovals_vue_vue_type_template_id_7a444302___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./InvoiceApprovals.vue?vue&type=template&id=7a444302& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/InvoiceApprovals.vue?vue&type=template&id=7a444302&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InvoiceApprovals_vue_vue_type_template_id_7a444302___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InvoiceApprovals_vue_vue_type_template_id_7a444302___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });
=======
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Panels_vue_vue_type_template_id_386a9ece___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Panels.vue?vue&type=template&id=386a9ece& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/Panels.vue?vue&type=template&id=386a9ece&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Panels_vue_vue_type_template_id_386a9ece___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Panels_vue_vue_type_template_id_386a9ece___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });
>>>>>>> 3037ab0c41de01835fe07f3d4bdc1e752e6e73c7



/***/ })

}]);