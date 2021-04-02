(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[39],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/report/Bank.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/report/Bank.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
var moment = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      values: [],
      debit: 0,
      credit: 0,
      balance: 0,
      orders: [],
      search: "",
      headers: [{
        text: "Id",
        align: "start",
        sortable: true,
        value: "id"
      }, {
        text: "Doc Type",
        value: "doc_type"
      }, {
        text: "Doc #",
        value: "doc_id"
      }, {
        text: "Customer",
        value: "customer_id"
      }, {
        text: "Supplier",
        value: "supplier_id"
      }, {
        text: "Employee",
        value: "employee_id"
      }, {
        text: "Debit",
        value: "debit"
      }, {
        text: "Credit",
        value: "credit"
      }, {
        text: "User",
        value: "user_id"
      }],
      presets: [{
        label: "Today",
        range: [moment().subtract(0, "day"), moment()]
      }, {
        label: "Yesterday",
        range: [moment().subtract(1, "day"), moment().subtract(1, "day")]
      }, {
        label: "Last 7 Days",
        range: [moment().subtract(6, "days"), moment()]
      }, {
        label: "This Week",
        range: [moment().startOf("week"), moment().endOf("week")]
      }, {
        label: "Last Week",
        range: [moment().subtract(1, "week").startOf("week"), moment().subtract(1, "week").endOf("week")]
      }, {
        label: "This Month",
        range: [moment().startOf("month"), moment().endOf("month")]
      }, {
        label: "Last Month",
        range: [moment().subtract(1, "month").startOf("month"), moment().subtract(1, "month").endOf("month")]
      }, {
        label: "This Year",
        range: [moment().startOf("year"), moment().endOf("year")]
      }]
    };
  },
  created: function created() {
    this.getData();
  },
  methods: {
    handleChange: function handleChange(values) {
      this.values = values;
      this.getData();
    },
    getData: function getData() {
      var _this = this;

      axios.post("/api/report/bankreport", this.values).then(function (res) {
        _this.orders = res.data.orders;
        _this.debit = res.data.debit;
        _this.credit = res.data.credit;
        _this.balance = res.data.balance;
      })["catch"](function (err) {
        return console.dir(err.response);
      });
    },
    viewInvoice: function viewInvoice(item) {
      this.$router.push("/admin/invoice/view/".concat(item.id));
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/report/Bank.vue?vue&type=template&id=11b2a5b0&":
/*!**********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/report/Bank.vue?vue&type=template&id=11b2a5b0& ***!
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
        "v-card",
        [
          _c(
            "v-row",
            { staticClass: "px-3" },
            [
              _c(
                "v-col",
                { staticClass: "pb-0", attrs: { cols: "6" } },
                [
                  _c("v-md-date-range-picker", {
                    staticClass: "ma-2 pt-5",
                    attrs: { presets: _vm.presets },
                    on: { change: _vm.handleChange }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-col",
                { staticClass: "pb-0", attrs: { cols: "6" } },
                [
                  _c(
                    "v-row",
                    { staticClass: "p-0 text-center" },
                    [
                      _c(
                        "v-col",
                        { attrs: { cols: "4" } },
                        [
                          _c("v-alert", { attrs: { dense: "", text: "" } }, [
                            _c("p", { staticClass: "mb-1" }, [
                              _vm._v("Cash inflow")
                            ]),
                            _vm._v(" "),
                            _c("strong", [_vm._v("Rs. " + _vm._s(_vm.debit))])
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { cols: "4" } },
                        [
                          _c("v-alert", { attrs: { dense: "", text: "" } }, [
                            _c("p", { staticClass: "mb-1" }, [
                              _vm._v("Cash outflow")
                            ]),
                            _vm._v(" "),
                            _c("strong", [_vm._v("Rs. " + _vm._s(_vm.credit))])
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { cols: "4" } },
                        [
                          _c("v-alert", { attrs: { dense: "", text: "" } }, [
                            _c("p", { staticClass: "mb-1" }, [
                              _vm._v("Net Cashflow")
                            ]),
                            _vm._v(" "),
                            _c("strong", [
                              _vm._v(
                                "\n                  Rs. " + _vm._s(_vm.balance)
                              )
                            ])
                          ])
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
            "v-card-title",
            { staticClass: "pt-0" },
            [
              _c("v-text-field", {
                staticClass: "pt-0",
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
              dense: "",
              headers: _vm.headers,
              items: _vm.orders,
              search: _vm.search,
              "sort-by": "id",
              "sort-desc": ""
            },
            scopedSlots: _vm._u([
              {
                key: "item.id",
                fn: function(ref) {
                  var item = ref.item
                  return [
                    _c(
                      "v-tooltip",
                      {
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
                                              return _vm.viewInvoice(item)
                                            }
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
                      },
                      [_vm._v(" "), _c("span", [_vm._v("Click to View")])]
                    )
                  ]
                }
              }
            ])
          })
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

/***/ "./resources/js/views/admin/report/Bank.vue":
/*!**************************************************!*\
  !*** ./resources/js/views/admin/report/Bank.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Bank_vue_vue_type_template_id_11b2a5b0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Bank.vue?vue&type=template&id=11b2a5b0& */ "./resources/js/views/admin/report/Bank.vue?vue&type=template&id=11b2a5b0&");
/* harmony import */ var _Bank_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Bank.vue?vue&type=script&lang=js& */ "./resources/js/views/admin/report/Bank.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VAlert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VAlert */ "./node_modules/vuetify/lib/components/VAlert/index.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VDataTable */ "./node_modules/vuetify/lib/components/VDataTable/index.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/index.js");
/* harmony import */ var vuetify_lib_components_VTooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VTooltip */ "./node_modules/vuetify/lib/components/VTooltip/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Bank_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Bank_vue_vue_type_template_id_11b2a5b0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Bank_vue_vue_type_template_id_11b2a5b0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */









_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VAlert: vuetify_lib_components_VAlert__WEBPACK_IMPORTED_MODULE_4__["VAlert"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCard"],VCardTitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardTitle"],VCol: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VCol"],VDataTable: vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_7__["VDataTable"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VRow"],VTextField: vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_8__["VTextField"],VTooltip: vuetify_lib_components_VTooltip__WEBPACK_IMPORTED_MODULE_9__["VTooltip"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/admin/report/Bank.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/admin/report/Bank.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/views/admin/report/Bank.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Bank_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Bank.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/report/Bank.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Bank_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/admin/report/Bank.vue?vue&type=template&id=11b2a5b0&":
/*!*********************************************************************************!*\
  !*** ./resources/js/views/admin/report/Bank.vue?vue&type=template&id=11b2a5b0& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Bank_vue_vue_type_template_id_11b2a5b0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Bank.vue?vue&type=template&id=11b2a5b0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/report/Bank.vue?vue&type=template&id=11b2a5b0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Bank_vue_vue_type_template_id_11b2a5b0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Bank_vue_vue_type_template_id_11b2a5b0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);