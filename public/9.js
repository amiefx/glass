(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/Transfer.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/Transfer.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  layout: "admin",
  middleware: ["auth", "admin"],
  data: function data() {
    return {
      cash: null,
      bank: null,
      valid: true,
      snackbar: false,
      text: "",
      rules: {
        required: function required(v) {
          return !!v || "This Field is Required";
        },
        min: function min(v) {
          return v.length >= 5 || "Minimum 5 Chracters Required";
        },
        validEmail: function validEmail(v) {
          return /.+@.+\..+/.test(v) || "Email must be valid";
        }
      },
      openbl: {
        doc_type: 'opening balance',
        pmt_method: "",
        amount: "",
        details: "",
        notes: ""
      },
      transfer: {
        doc_type: 'transfer',
        pmt_method: "",
        amount: "",
        details: "",
        notes: ""
      },
      invest: {
        doc_type: 'investment',
        pmt_method: "",
        amount: "",
        details: "",
        notes: ""
      },
      withdraw: {
        doc_type: 'withdrawal',
        pmt_method: "",
        amount: "",
        details: "",
        notes: ""
      }
    };
  },
  created: function created() {
    this.getData();
  },
  methods: {
    getData: function getData() {
      var _this = this;

      axios.get("/api/cashes/balance").then(function (res) {
        _this.cash = res.data.balance;
      });
      axios.get("/api/banks/balance").then(function (res) {
        _this.bank = res.data.balance;
      });
    },
    saveOpenbl: function saveOpenbl() {
      var _this2 = this;

      axios.post("/api/cashes/openbl", this.openbl).then(function (res) {
        _this2.text = "Balance added successfully.";
        _this2.snackbar = true;
        _this2.openbl = "";

        _this2.getData();
      });
    },
    saveInvest: function saveInvest() {
      var _this3 = this;

      axios.post("/api/cashes/openbl", this.invest).then(function (res) {
        _this3.text = "Balance added successfully.";
        _this3.snackbar = true;
        _this3.invest = "";

        _this3.getData();
      });
    },
    saveWithdraw: function saveWithdraw() {
      var _this4 = this;

      axios.post("/api/cashes/withdraw", this.withdraw).then(function (res) {
        _this4.text = "Balance withdrawn successfully.";
        _this4.snackbar = true;
        _this4.withdraw = "";

        _this4.getData();
      });
    },
    saveTransfer: function saveTransfer() {
      var _this5 = this;

      axios.post("/api/cashes/transfer", this.transfer).then(function (res) {
        _this5.text = "Balance transfered successfully.";
        _this5.snackbar = true;
        _this5.transfer = "";

        _this5.getData();
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/Transfer.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/Transfer.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
<<<<<<< HEAD
exports.push([module.i, "\n.tb {\n  justify-content: left;\n}\n", ""]);
=======
exports.push([module.i, "\n.tb {\r\n  justify-content: left;\n}\r\n", ""]);
>>>>>>> eb9423dc5c625531d6e02f6e9b7d40b7013f7a1a

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/Transfer.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/Transfer.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Transfer.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/Transfer.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/Transfer.vue?vue&type=template&id=1ddb2c0a&":
/*!*******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/Transfer.vue?vue&type=template&id=1ddb2c0a& ***!
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
      _c(
        "v-row",
        [
          _c(
            "v-col",
            { attrs: { cols: "6" } },
            [
              _c(
                "v-alert",
                {
                  attrs: {
                    text: "",
                    prominent: "",
                    color: "success",
                    icon: "mdi-cash-multiple"
                  }
                },
                [
                  _c("h3", [_vm._v(_vm._s(_vm.cash))]),
                  _vm._v("\n        Cash on hand Balance\n      ")
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-col",
            { attrs: { cols: "6" } },
            [
              _c(
                "v-alert",
                {
                  attrs: {
                    text: "",
                    prominent: "",
                    color: "success",
                    icon: "mdi-bank"
                  }
                },
                [
                  _c("h3", [_vm._v(_vm._s(_vm.bank))]),
                  _vm._v("\n        Bank Account Balance\n      ")
                ]
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
        [
          _c(
            "v-tabs",
            { staticClass: "text-left", attrs: { vertical: "" } },
            [
              _c(
                "v-tab",
                { staticClass: "tb" },
                [
                  _c("v-icon", { attrs: { left: "" } }, [
                    _vm._v(" mdi-file-document-outline ")
                  ]),
                  _vm._v("\n        Opening Balance\n      ")
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-tab",
                { staticClass: "tb" },
                [
                  _c("v-icon", { attrs: { left: "" } }, [
                    _vm._v(" mdi-note-text-outline ")
                  ]),
                  _vm._v("\n        Investment\n      ")
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-tab",
                { staticClass: "tb" },
                [
                  _c("v-icon", { attrs: { left: "" } }, [
                    _vm._v(" mdi-cash-multiple ")
                  ]),
                  _vm._v("\n        Withdrawal\n      ")
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-tab",
                { staticClass: "tb" },
                [
                  _c("v-icon", { attrs: { left: "" } }, [
                    _vm._v(" mdi-cash-plus ")
                  ]),
                  _vm._v("\n        Transfer\n      ")
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-tab-item",
                [
                  _c(
                    "v-card",
                    { attrs: { flat: "" } },
                    [
                      _c("h3", { staticClass: "text-center" }, [
                        _vm._v("Opening Balance")
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
                                "v-alert",
                                {
                                  attrs: {
                                    text: "",
                                    prominent: "",
                                    color: "warning"
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                Use this form once for recording opening balance. for\n                investing new balance use investment tab.\n              "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "v-row",
                                [
                                  _c(
                                    "v-col",
                                    {
                                      staticClass: "py-0",
                                      attrs: { cols: "12" }
                                    },
                                    [
                                      _c(
                                        "v-radio-group",
                                        {
                                          attrs: {
                                            mandatory: "",
                                            dense: "",
                                            row: ""
                                          },
                                          model: {
                                            value: _vm.openbl.pmt_method,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.openbl,
                                                "pmt_method",
                                                $$v
                                              )
                                            },
                                            expression: "openbl.pmt_method"
                                          }
                                        },
                                        [
                                          _c("v-radio", {
                                            attrs: {
                                              label: "Cash",
                                              value: "Cash"
                                            }
                                          }),
                                          _vm._v(" "),
                                          _c("v-radio", {
                                            attrs: {
                                              label: "Bank",
                                              value: "Bank"
                                            }
                                          })
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c("v-text-field", {
                                        attrs: {
                                          dense: "",
                                          type: "number",
                                          label: "Amount",
                                          rules: [_vm.rules.required]
                                        },
                                        model: {
                                          value: _vm.openbl.amount,
                                          callback: function($$v) {
                                            _vm.$set(_vm.openbl, "amount", $$v)
                                          },
                                          expression: "openbl.amount"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _vm.openbl.pmt_method == "Bank"
                                        ? _c(
                                            "div",
                                            [
                                              _c("v-text-field", {
                                                attrs: {
                                                  dense: "",
                                                  label: "Details"
                                                },
                                                model: {
                                                  value: _vm.openbl.details,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.openbl,
                                                      "details",
                                                      $$v
                                                    )
                                                  },
                                                  expression: "openbl.details"
                                                }
                                              }),
                                              _vm._v(" "),
                                              _c("v-text-field", {
                                                attrs: {
                                                  dense: "",
                                                  label: "Notes"
                                                },
                                                model: {
                                                  value: _vm.openbl.notes,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.openbl,
                                                      "notes",
                                                      $$v
                                                    )
                                                  },
                                                  expression: "openbl.notes"
                                                }
                                              })
                                            ],
                                            1
                                          )
                                        : _vm._e()
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
                                  attrs: {
                                    color: "primary",
                                    type: "submit",
                                    disabled: !_vm.valid
                                  },
                                  on: {
                                    click: function($event) {
                                      $event.preventDefault()
                                      return _vm.saveOpenbl($event)
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
              ),
              _vm._v(" "),
              _c(
                "v-tab-item",
                [
                  _c(
                    "v-card",
                    { attrs: { flat: "" } },
                    [
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
                              _c("h3", { staticClass: "text-center" }, [
                                _vm._v("Investment")
                              ]),
                              _vm._v(" "),
                              _c(
                                "v-row",
                                [
                                  _c(
                                    "v-col",
                                    {
                                      staticClass: "py-0",
                                      attrs: { cols: "12" }
                                    },
                                    [
                                      _c(
                                        "v-radio-group",
                                        {
                                          attrs: {
                                            mandatory: "",
                                            dense: "",
                                            row: ""
                                          },
                                          model: {
                                            value: _vm.invest.pmt_method,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.invest,
                                                "pmt_method",
                                                $$v
                                              )
                                            },
                                            expression: "invest.pmt_method"
                                          }
                                        },
                                        [
                                          _c("v-radio", {
                                            attrs: {
                                              label: "Cash",
                                              value: "Cash"
                                            }
                                          }),
                                          _vm._v(" "),
                                          _c("v-radio", {
                                            attrs: {
                                              label: "Bank",
                                              value: "Bank"
                                            }
                                          })
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c("v-text-field", {
                                        attrs: {
                                          dense: "",
                                          type: "number",
                                          label: "Amount",
                                          rules: [_vm.rules.required]
                                        },
                                        model: {
                                          value: _vm.invest.amount,
                                          callback: function($$v) {
                                            _vm.$set(_vm.invest, "amount", $$v)
                                          },
                                          expression: "invest.amount"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _vm.invest.pmt_method == "Bank"
                                        ? _c(
                                            "div",
                                            [
                                              _c("v-text-field", {
                                                attrs: {
                                                  dense: "",
                                                  label: "Details"
                                                },
                                                model: {
                                                  value: _vm.invest.details,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.invest,
                                                      "details",
                                                      $$v
                                                    )
                                                  },
                                                  expression: "invest.details"
                                                }
                                              }),
                                              _vm._v(" "),
                                              _c("v-text-field", {
                                                attrs: {
                                                  dense: "",
                                                  label: "Notes"
                                                },
                                                model: {
                                                  value: _vm.invest.notes,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.invest,
                                                      "notes",
                                                      $$v
                                                    )
                                                  },
                                                  expression: "invest.notes"
                                                }
                                              })
                                            ],
                                            1
                                          )
                                        : _vm._e()
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
                                  attrs: {
                                    color: "primary",
                                    type: "submit",
                                    disabled: !_vm.valid
                                  },
                                  on: {
                                    click: function($event) {
                                      $event.preventDefault()
                                      return _vm.saveInvest($event)
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
              ),
              _vm._v(" "),
              _c(
                "v-tab-item",
                [
                  _c(
                    "v-card",
                    { attrs: { flat: "" } },
                    [
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
                              _c("h3", { staticClass: "text-center" }, [
                                _vm._v("Withdrawal")
                              ]),
                              _vm._v(" "),
                              _c(
                                "v-row",
                                [
                                  _c(
                                    "v-col",
                                    {
                                      staticClass: "py-0",
                                      attrs: { cols: "12" }
                                    },
                                    [
                                      _c(
                                        "v-radio-group",
                                        {
                                          attrs: {
                                            mandatory: "",
                                            dense: "",
                                            row: ""
                                          },
                                          model: {
                                            value: _vm.withdraw.pmt_method,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.withdraw,
                                                "pmt_method",
                                                $$v
                                              )
                                            },
                                            expression: "withdraw.pmt_method"
                                          }
                                        },
                                        [
                                          _c("v-radio", {
                                            attrs: {
                                              label: "Cash",
                                              value: "Cash"
                                            }
                                          }),
                                          _vm._v(" "),
                                          _c("v-radio", {
                                            attrs: {
                                              label: "Bank",
                                              value: "Bank"
                                            }
                                          })
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c("v-text-field", {
                                        attrs: {
                                          dense: "",
                                          type: "number",
                                          label: "Amount",
                                          rules: [_vm.rules.required]
                                        },
                                        model: {
                                          value: _vm.withdraw.amount,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.withdraw,
                                              "amount",
                                              $$v
                                            )
                                          },
                                          expression: "withdraw.amount"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _vm.withdraw.pmt_method == "Bank"
                                        ? _c(
                                            "div",
                                            [
                                              _c("v-text-field", {
                                                attrs: {
                                                  dense: "",
                                                  label: "Details"
                                                },
                                                model: {
                                                  value: _vm.withdraw.details,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.withdraw,
                                                      "details",
                                                      $$v
                                                    )
                                                  },
                                                  expression: "withdraw.details"
                                                }
                                              }),
                                              _vm._v(" "),
                                              _c("v-text-field", {
                                                attrs: {
                                                  dense: "",
                                                  label: "Notes"
                                                },
                                                model: {
                                                  value: _vm.withdraw.notes,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.withdraw,
                                                      "notes",
                                                      $$v
                                                    )
                                                  },
                                                  expression: "withdraw.notes"
                                                }
                                              })
                                            ],
                                            1
                                          )
                                        : _vm._e()
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
                                  attrs: {
                                    color: "primary",
                                    type: "submit",
                                    disabled: !_vm.valid
                                  },
                                  on: {
                                    click: function($event) {
                                      $event.preventDefault()
                                      return _vm.saveWithdraw($event)
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
              ),
              _vm._v(" "),
              _c(
                "v-tab-item",
                [
                  _c(
                    "v-card",
                    { attrs: { flat: "" } },
                    [
                      _c("h3", { staticClass: "text-center" }, [
                        _vm._v("Transfer Balance")
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
                                "v-row",
                                [
                                  _c(
                                    "v-col",
                                    {
                                      staticClass: "py-0",
                                      attrs: { cols: "12" }
                                    },
                                    [
                                      _c(
                                        "v-radio-group",
                                        {
                                          attrs: {
                                            dense: "",
                                            mandatory: "",
                                            row: ""
                                          },
                                          model: {
                                            value: _vm.transfer.pmt_method,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.transfer,
                                                "pmt_method",
                                                $$v
                                              )
                                            },
                                            expression: "transfer.pmt_method"
                                          }
                                        },
                                        [
                                          _c("v-radio", {
                                            attrs: {
                                              label: "Cash to Bank",
                                              value: "Cash"
                                            }
                                          }),
                                          _vm._v(" "),
                                          _c("v-radio", {
                                            attrs: {
                                              label: "Bank to Cash",
                                              value: "Bank"
                                            }
                                          })
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c("v-text-field", {
                                        attrs: {
                                          dense: "",
                                          type: "number",
                                          label: "Amount",
                                          rules: [_vm.rules.required]
                                        },
                                        model: {
                                          value: _vm.transfer.amount,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.transfer,
                                              "amount",
                                              $$v
                                            )
                                          },
                                          expression: "transfer.amount"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _vm.transfer.pmt_method == "Bank"
                                        ? _c(
                                            "div",
                                            [
                                              _c("v-text-field", {
                                                attrs: {
                                                  dense: "",
                                                  label: "Details"
                                                },
                                                model: {
                                                  value: _vm.transfer.details,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.transfer,
                                                      "details",
                                                      $$v
                                                    )
                                                  },
                                                  expression: "transfer.details"
                                                }
                                              }),
                                              _vm._v(" "),
                                              _c("v-text-field", {
                                                attrs: {
                                                  dense: "",
                                                  label: "Notes"
                                                },
                                                model: {
                                                  value: _vm.transfer.notes,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.transfer,
                                                      "notes",
                                                      $$v
                                                    )
                                                  },
                                                  expression: "transfer.notes"
                                                }
                                              })
                                            ],
                                            1
                                          )
                                        : _vm._e()
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
                                  attrs: {
                                    color: "primary",
                                    type: "submit",
                                    disabled: !_vm.valid
                                  },
                                  on: {
                                    click: function($event) {
                                      $event.preventDefault()
                                      return _vm.saveTransfer($event)
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
          )
        ],
        1
      ),
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

/***/ "./resources/js/views/admin/Transfer.vue":
/*!***********************************************!*\
  !*** ./resources/js/views/admin/Transfer.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Transfer_vue_vue_type_template_id_1ddb2c0a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Transfer.vue?vue&type=template&id=1ddb2c0a& */ "./resources/js/views/admin/Transfer.vue?vue&type=template&id=1ddb2c0a&");
/* harmony import */ var _Transfer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Transfer.vue?vue&type=script&lang=js& */ "./resources/js/views/admin/Transfer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Transfer_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Transfer.vue?vue&type=style&index=0&lang=css& */ "./resources/js/views/admin/Transfer.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var vuetify_lib_components_VAlert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VAlert */ "./node_modules/vuetify/lib/components/VAlert/index.js");
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VForm */ "./node_modules/vuetify/lib/components/VForm/index.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/index.js");
/* harmony import */ var vuetify_lib_components_VRadioGroup__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuetify/lib/components/VRadioGroup */ "./node_modules/vuetify/lib/components/VRadioGroup/index.js");
/* harmony import */ var vuetify_lib_components_VSnackbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vuetify/lib/components/VSnackbar */ "./node_modules/vuetify/lib/components/VSnackbar/index.js");
/* harmony import */ var vuetify_lib_components_VTabs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! vuetify/lib/components/VTabs */ "./node_modules/vuetify/lib/components/VTabs/index.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/index.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Transfer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Transfer_vue_vue_type_template_id_1ddb2c0a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Transfer_vue_vue_type_template_id_1ddb2c0a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */


















_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4___default()(component, {VAlert: vuetify_lib_components_VAlert__WEBPACK_IMPORTED_MODULE_5__["VAlert"],VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_6__["VBtn"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_7__["VCard"],VCardActions: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_7__["VCardActions"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_7__["VCardText"],VCol: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_8__["VCol"],VForm: vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_9__["VForm"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_10__["VIcon"],VRadio: vuetify_lib_components_VRadioGroup__WEBPACK_IMPORTED_MODULE_11__["VRadio"],VRadioGroup: vuetify_lib_components_VRadioGroup__WEBPACK_IMPORTED_MODULE_11__["VRadioGroup"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_8__["VRow"],VSnackbar: vuetify_lib_components_VSnackbar__WEBPACK_IMPORTED_MODULE_12__["VSnackbar"],VSpacer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_8__["VSpacer"],VTab: vuetify_lib_components_VTabs__WEBPACK_IMPORTED_MODULE_13__["VTab"],VTabItem: vuetify_lib_components_VTabs__WEBPACK_IMPORTED_MODULE_13__["VTabItem"],VTabs: vuetify_lib_components_VTabs__WEBPACK_IMPORTED_MODULE_13__["VTabs"],VTextField: vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_14__["VTextField"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/admin/Transfer.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/admin/Transfer.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/views/admin/Transfer.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Transfer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Transfer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/Transfer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Transfer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/admin/Transfer.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************!*\
  !*** ./resources/js/views/admin/Transfer.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Transfer_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Transfer.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/Transfer.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Transfer_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Transfer_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Transfer_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Transfer_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/views/admin/Transfer.vue?vue&type=template&id=1ddb2c0a&":
/*!******************************************************************************!*\
  !*** ./resources/js/views/admin/Transfer.vue?vue&type=template&id=1ddb2c0a& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Transfer_vue_vue_type_template_id_1ddb2c0a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Transfer.vue?vue&type=template&id=1ddb2c0a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/Transfer.vue?vue&type=template&id=1ddb2c0a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Transfer_vue_vue_type_template_id_1ddb2c0a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Transfer_vue_vue_type_template_id_1ddb2c0a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);