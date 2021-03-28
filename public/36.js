(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[36],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/Panels.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/Panels.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
        sortBy: ['min'],
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
        text: 'Size',
        value: 'size'
      }, {
        text: 'Standard Size',
        value: 'standard_size'
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
      types: ['slab', 'service provider'],
      panels: [],
      editedIndex: -1,
      editedItem: {
        id: '',
        min: '',
        max: '',
        actual: ''
      },
      defaultItem: {
        id: '',
        min: '',
        max: '',
        actual: ''
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
  methods: {
    //   updateStatus(item) {
    //       const index = this.panels.data.indexOf(item);
    //       axios.post('/api/change-status', {'status': item.is_active, 'slab': item.id})
    //         .then(res => {
    //            this.text = res.data.slab.name + "'s Status Updated to " + res.data.slab.is_active
    //            this.snackbar = true
    //             })
    //         .catch(error => {
    //             // this.text = error.response.slab.name + "'s Status Cannot be Updated" + error.response.slab.status
    //             this.panels.data[index].is_active = error.response.data.slab.is_active
    //             this.snackbar = true
    //             console.dir(error.response)
    //             })
    //   },
    searchIt: function searchIt(e) {
      var _this = this;

      if (e.length > 3) {
        axios.get("/api/panels/".concat(e)).then(function (res) {
          return _this.panels = res.data.panels;
        })["catch"](function (err) {
          return console.dir(err.response);
        });
      }

      if (e.length <= 0) {
        // axios.get(`/api/panels?page=${e.page}`,{params:{'per_page': e.itemsPerPage}})
        //   axios.get(`/api/panels`)
        //     .then(res => this.panels = res.data.data.panels)
        //     .catch(err => console.dir(err.response))
        var sortBy = this.options.sortBy.length == 0 ? 'min' : this.options.sortBy[0];
        var orderBy = this.options.sortDesc.length > 0 || this.options.sortDesc[0] ? 'asc' : 'desc';
        axios.get("/api/panels?page=".concat(e.page), {
          params: {
            'per_page': e.itemsPerPage,
            'sort_by': sortBy,
            'order_by': orderBy
          }
        }).then(function (res) {
          _this.panels = res.data.panels;
        })["catch"](function (err) {
          return console.dir(err.response);
        });
      }
    },
    paginate: function paginate(e) {
      var _this2 = this;

      var sortBy = this.options.sortBy.length == 0 ? 'min' : this.options.sortBy[0];
      var orderBy = this.options.sortDesc.length > 0 || this.options.sortDesc[0] ? 'asc' : 'desc';
      axios.get("/api/panels?page=".concat(e.page), {
        params: {
          'per_page': e.itemsPerPage,
          'sort_by': sortBy,
          'order_by': orderBy
        }
      }).then(function (res) {
        _this2.panels = res.data.panels;
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
    },
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
          Object.assign(_this6.panels.data[index], res.data.slab);
        })["catch"](function (err) {
          console.log(err.response);
          _this6.text = "Error Updating Record";
          _this6.snackbar = true;
        }); //  Object.assign(this.panels.data[this.editedIndex], this.editedItem)
      } else {
        axios.post('/api/panels', this.editedItem).then(function (res) {
          _this6.text = "Record Added Successfully!";
          _this6.snackbar = true;

          _this6.panels.data.push(res.data.slab);
        })["catch"](function (err) {
          console.dir(err);
          _this6.text = "Error Inserting Record";
          _this6.snackbar = true;
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/Panels.vue?vue&type=template&id=386a9ece&":
/*!*****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/Panels.vue?vue&type=template&id=386a9ece& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************/
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
                    _c(
                      "v-dialog",
                      {
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
                                  [_vm._v("New Panel")]
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

/***/ "./resources/js/views/admin/Panels.vue":
/*!*********************************************!*\
  !*** ./resources/js/views/admin/Panels.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Panels_vue_vue_type_template_id_386a9ece___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Panels.vue?vue&type=template&id=386a9ece& */ "./resources/js/views/admin/Panels.vue?vue&type=template&id=386a9ece&");
/* harmony import */ var _Panels_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Panels.vue?vue&type=script&lang=js& */ "./resources/js/views/admin/Panels.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VDataTable */ "./node_modules/vuetify/lib/components/VDataTable/index.js");
/* harmony import */ var vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VDialog */ "./node_modules/vuetify/lib/components/VDialog/index.js");
/* harmony import */ var vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VDivider */ "./node_modules/vuetify/lib/components/VDivider/index.js");
/* harmony import */ var vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VForm */ "./node_modules/vuetify/lib/components/VForm/index.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/index.js");
/* harmony import */ var vuetify_lib_components_VSnackbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vuetify/lib/components/VSnackbar */ "./node_modules/vuetify/lib/components/VSnackbar/index.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/index.js");
/* harmony import */ var vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! vuetify/lib/components/VToolbar */ "./node_modules/vuetify/lib/components/VToolbar/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Panels_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Panels_vue_vue_type_template_id_386a9ece___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Panels_vue_vue_type_template_id_386a9ece___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */



















_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__["VBtn"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCard"],VCardActions: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardActions"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardText"],VCardTitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardTitle"],VCol: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VCol"],VContainer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VContainer"],VDataTable: vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_7__["VDataTable"],VDialog: vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_8__["VDialog"],VDivider: vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_9__["VDivider"],VForm: vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_10__["VForm"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_11__["VIcon"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VRow"],VSnackbar: vuetify_lib_components_VSnackbar__WEBPACK_IMPORTED_MODULE_12__["VSnackbar"],VSpacer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VSpacer"],VTextField: vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_13__["VTextField"],VToolbar: vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_14__["VToolbar"],VToolbarTitle: vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_14__["VToolbarTitle"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/admin/Panels.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/admin/Panels.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/views/admin/Panels.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Panels_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Panels.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/Panels.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Panels_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/admin/Panels.vue?vue&type=template&id=386a9ece&":
/*!****************************************************************************!*\
  !*** ./resources/js/views/admin/Panels.vue?vue&type=template&id=386a9ece& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Panels_vue_vue_type_template_id_386a9ece___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Panels.vue?vue&type=template&id=386a9ece& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/Panels.vue?vue&type=template&id=386a9ece&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Panels_vue_vue_type_template_id_386a9ece___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Panels_vue_vue_type_template_id_386a9ece___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);