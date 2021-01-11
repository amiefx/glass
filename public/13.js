(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/Users.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/Users.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************/
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
      roles: ['Admin', 'Accountant', 'Cashier', 'User'],
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
        text: 'Name',
        value: 'name'
      }, {
        text: 'Email',
        value: 'email'
      }, {
        text: 'Contact',
        value: 'contact_no'
      }, {
        text: 'Role',
        value: 'type'
      }, {
        text: 'Status',
        value: 'is_active'
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
      users: [],
      editedIndex: -1,
      editedItem: {
        id: '',
        name: '',
        email: '',
        contact_no: '',
        type: '',
        is_active: '',
        created_at: ''
      },
      defaultItem: {
        id: '',
        name: '',
        email: '',
        contact_no: '',
        type: '',
        is_active: '',
        password: '',
        rpassword: '',
        created_at: ''
      }
    };
  },
  computed: {
    formTitle: function formTitle() {
      return this.editedIndex === -1 ? 'New Item' : 'Edit Item';
    },
    passwordMatch: function passwordMatch() {
      return this.editedItem.password != this.editedItem.rpassword ? 'Password does Not Match' : true;
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
    updateRole: function updateRole(item) {
      var _this = this;

      var index = this.users.data.indexOf(item);
      axios.post('/api/change-role', {
        'role': item.type,
        'user': item.id
      }).then(function (res) {
        // this.users.data[index].role = res.data.data.user.role
        _this.text = res.data.user.name + "'s Role Updated to " + res.data.user.type;
        _this.snackbar = true;
      })["catch"](function (error) {
        // this.text = error.response.data.user.name + "'s Role Cannot be Updated" + error.response.data.user.role
        _this.users[index].type = error.response.user.type;
        _this.snackbar = true;
        console.dir(error.response);
      });
    },
    updateStatus: function updateStatus(item) {
      var _this2 = this;

      var index = this.users.data.indexOf(item);
      axios.post('/api/change-status', {
        'status': item.is_active,
        'user': item.id
      }).then(function (res) {
        // this.users.data[index].role = res.data.data.user.role
        _this2.text = res.data.user.name + "'s Status Updated to " + res.data.user.is_active;
        _this2.snackbar = true;
      })["catch"](function (error) {
        // this.text = error.response.user.name + "'s Status Cannot be Updated" + error.response.user.status
        _this2.users.data[index].type = error.response.data.user.type;
        _this2.snackbar = true;
        console.dir(error.response);
      });
    },
    checkEmail: function checkEmail() {
      var _this3 = this;

      if (/.+@.+\..+/.test(this.editedItem.email)) {
        axios.post('/api/email/verify', {
          email: this.editedItem.email
        }).then(function (res) {
          _this3.success = res.data.message;
          _this3.error = '';
        })["catch"](function (err) {
          ;
          _this3.success = '', _this3.error = 'Email Already Exists';
        });
      }
    },
    selectAll: function selectAll(e) {
      this.selected = [];

      if (e.length > 0) {
        this.selected = e.map(function (val) {
          return val.id;
        });
      }

      console.dir(this.selected);
    },
    deleteAll: function deleteAll() {
      var _this4 = this;

      var decide = confirm('Are you sure you want to delete these items?');

      if (decide) {
        axios.post('/api/users/delete', {
          'users': this.selected
        }).then(function (res) {
          _this4.text = "Rcords Deleted Successfully!";

          _this4.selected.map(function (val) {
            var index = _this4.users.data.indexOf(val);

            _this4.users.data.splice(index, 1);
          });

          _this4.snackbar = true;
        })["catch"](function (err) {
          console.log(err.response);
          _this4.text = "Error Deleting Record";
          _this4.snackbar = true;
        });
      }
    },
    searchIt: function searchIt(e) {
      var _this5 = this;

      if (e.length > 3) {
        axios.get("/api/users/".concat(e)).then(function (res) {
          return _this5.users = res.data.users;
        })["catch"](function (err) {
          return console.dir(err.response);
        });
      }

      if (e.length <= 0) {
        // axios.get(`/api/users?page=${e.page}`,{params:{'per_page': e.itemsPerPage}})
        //   axios.get(`/api/users`)
        //     .then(res => this.users = res.data.data.users)
        //     .catch(err => console.dir(err.response))
        var sortBy = this.options.sortBy.length == 0 ? 'name' : this.options.sortBy[0];
        var orderBy = this.options.sortDesc.length > 0 || this.options.sortDesc[0] ? 'asc' : 'desc';
        axios.get("/api/users?page=".concat(e.page), {
          params: {
            'per_page': e.itemsPerPage,
            'sort_by': sortBy,
            'order_by': orderBy
          }
        }).then(function (res) {
          _this5.users = res.data.users;
        })["catch"](function (err) {
          return console.dir(err.response);
        });
      }
    },
    paginate: function paginate(e) {
      var _this6 = this;

      var sortBy = this.options.sortBy.length == 0 ? 'name' : this.options.sortBy[0];
      var orderBy = this.options.sortDesc.length > 0 || this.options.sortDesc[0] ? 'asc' : 'desc';
      axios.get("/api/users?page=".concat(e.page), {
        params: {
          'per_page': e.itemsPerPage,
          'sort_by': sortBy,
          'order_by': orderBy
        }
      }).then(function (res) {
        _this6.users = res.data.users;
      })["catch"](function (err) {//----
      });
    },
    initialize: function initialize() {
      var _this7 = this;

      // Add a request interceptor
      axios.interceptors.request.use(function (config) {
        _this7.loading = true;
        return config;
      }, function (error) {
        _this7.loading = false;
        return Promise.reject(error);
      }); // Add a response interceptor

      axios.interceptors.response.use(function (response) {
        _this7.loading = false;
        return response;
      }, function (error) {
        _this7.loading = false;
        return Promise.reject(error);
      });
    },
    editItem: function editItem(item) {
      this.editedIndex = this.users.data.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },
    deleteItem: function deleteItem(item) {
      var _this8 = this;

      var index = this.users.data.indexOf(item);
      var decide = confirm('Are you sure you want to delete this item?');

      if (decide) {
        axios["delete"]('/api/users/' + item.id).then(function (res) {
          _this8.snackbar = true;

          _this8.users.data.splice(index, 1);
        })["catch"](function (err) {
          console.log(err.response);
          _this8.text = "Error Deleting Record";
          _this8.snackbar = true;
        });
      }
    },
    close: function close() {
      var _this9 = this;

      this.dialog = false;
      setTimeout(function () {
        _this9.editedItem = Object.assign({}, _this9.defaultItem);
        _this9.editedIndex = -1;
      }, 300);
    },
    save: function save() {
      var _this10 = this;

      if (this.editedIndex > -1) {
        var index = this.editedIndex;
        axios.put('/api/users/' + this.editedItem.id, this.editedItem) //  .then(res => Object.assign(this.users[this.editedIndex], this.editedItem))
        .then(function (res) {
          _this10.text = "Record Updated Successfully!";
          _this10.snackbar = true;
          Object.assign(_this10.users.data[index], res.data.user);
        })["catch"](function (err) {
          console.log(err.response);
          _this10.text = "Error Updating Record";
          _this10.snackbar = true;
        }); //  Object.assign(this.users.data[this.editedIndex], this.editedItem)
      } else {
        axios.post('/api/users', this.editedItem).then(function (res) {
          _this10.text = "Record Added Successfully!";
          _this10.snackbar = true;

          _this10.users.data.push(res.data.user);
        })["catch"](function (err) {
          console.dir(err);
          _this10.text = "Error Inserting Record";
          _this10.snackbar = true;
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/Users.vue?vue&type=template&id=358a02f9&":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/Users.vue?vue&type=template&id=358a02f9& ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
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
          items: _vm.users.data,
          "items-per-page": 5,
          "item-key": "id",
          loading: _vm.loading,
          options: _vm.options,
          "server-items-length": _vm.users.total,
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
          },
          input: _vm.selectAll
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
                    _c("v-toolbar-title", [_vm._v("user Management")]),
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
                                  [_vm._v("New User")]
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
                                                    label: "User Name",
                                                    rules: [
                                                      _vm.rules.required,
                                                      _vm.rules.min
                                                    ]
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
                                                _vm.editedIndex == -1
                                                  ? _c("v-text-field", {
                                                      attrs: {
                                                        label: "Email",
                                                        rules: [
                                                          _vm.rules.required,
                                                          _vm.rules.validEmail
                                                        ],
                                                        "success-message":
                                                          _vm.success,
                                                        "error-messages":
                                                          _vm.error
                                                      },
                                                      on: {
                                                        blur: _vm.checkEmail
                                                      },
                                                      model: {
                                                        value:
                                                          _vm.editedItem.email,
                                                        callback: function(
                                                          $$v
                                                        ) {
                                                          _vm.$set(
                                                            _vm.editedItem,
                                                            "email",
                                                            $$v
                                                          )
                                                        },
                                                        expression:
                                                          "editedItem.email"
                                                      }
                                                    })
                                                  : _vm._e(),
                                                _vm._v(" "),
                                                _vm.editedIndex == -1
                                                  ? _c("v-text-field", {
                                                      attrs: {
                                                        type: "password",
                                                        label: "Password",
                                                        rules: [
                                                          _vm.rules.required
                                                        ]
                                                      },
                                                      model: {
                                                        value:
                                                          _vm.editedItem
                                                            .password,
                                                        callback: function(
                                                          $$v
                                                        ) {
                                                          _vm.$set(
                                                            _vm.editedItem,
                                                            "password",
                                                            $$v
                                                          )
                                                        },
                                                        expression:
                                                          "editedItem.password"
                                                      }
                                                    })
                                                  : _vm._e(),
                                                _vm._v(" "),
                                                _vm.editedIndex == -1
                                                  ? _c("v-text-field", {
                                                      attrs: {
                                                        type: "password",
                                                        label:
                                                          "ReType Password",
                                                        rules: [
                                                          _vm.rules.required,
                                                          _vm.passwordMatch
                                                        ]
                                                      },
                                                      model: {
                                                        value:
                                                          _vm.editedItem
                                                            .rpassword,
                                                        callback: function(
                                                          $$v
                                                        ) {
                                                          _vm.$set(
                                                            _vm.editedItem,
                                                            "rpassword",
                                                            $$v
                                                          )
                                                        },
                                                        expression:
                                                          "editedItem.rpassword"
                                                      }
                                                    })
                                                  : _vm._e(),
                                                _vm._v(" "),
                                                _c("v-text-field", {
                                                  attrs: {
                                                    label: "Contact No",
                                                    rules: [_vm.rules.required]
                                                  },
                                                  model: {
                                                    value:
                                                      _vm.editedItem.contact_no,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        _vm.editedItem,
                                                        "contact_no",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "editedItem.contact_no"
                                                  }
                                                }),
                                                _vm._v(" "),
                                                _c("v-select", {
                                                  attrs: {
                                                    items: _vm.roles,
                                                    label: "Select Role",
                                                    rules: [_vm.rules.required]
                                                  },
                                                  model: {
                                                    value: _vm.editedItem.type,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        _vm.editedItem,
                                                        "type",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "editedItem.type"
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
            key: "item.type",
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
                      "return-value": item.type
                    },
                    on: {
                      "update:returnValue": function($event) {
                        return _vm.$set(item, "type", $event)
                      },
                      "update:return-value": function($event) {
                        return _vm.$set(item, "type", $event)
                      },
                      save: function($event) {
                        return _vm.updateRole(item)
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
                                  items: _vm.roles,
                                  label: "Select Role",
                                  rules: [_vm.rules.required]
                                },
                                model: {
                                  value: item.type,
                                  callback: function($$v) {
                                    _vm.$set(item, "type", $$v)
                                  },
                                  expression: "item.type"
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
                    _vm._v(
                      "\n            " + _vm._s(item.type) + "\n            "
                    )
                  ]
                )
              ]
            }
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

/***/ "./resources/js/views/admin/Users.vue":
/*!********************************************!*\
  !*** ./resources/js/views/admin/Users.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_vue_vue_type_template_id_358a02f9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Users.vue?vue&type=template&id=358a02f9& */ "./resources/js/views/admin/Users.vue?vue&type=template&id=358a02f9&");
/* harmony import */ var _Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Users.vue?vue&type=script&lang=js& */ "./resources/js/views/admin/Users.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VChip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VChip */ "./node_modules/vuetify/lib/components/VChip/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VDataTable */ "./node_modules/vuetify/lib/components/VDataTable/index.js");
/* harmony import */ var vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VDialog */ "./node_modules/vuetify/lib/components/VDialog/index.js");
/* harmony import */ var vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VDivider */ "./node_modules/vuetify/lib/components/VDivider/index.js");
/* harmony import */ var vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuetify/lib/components/VForm */ "./node_modules/vuetify/lib/components/VForm/index.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/index.js");
/* harmony import */ var vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! vuetify/lib/components/VSelect */ "./node_modules/vuetify/lib/components/VSelect/index.js");
/* harmony import */ var vuetify_lib_components_VSnackbar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! vuetify/lib/components/VSnackbar */ "./node_modules/vuetify/lib/components/VSnackbar/index.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/index.js");
/* harmony import */ var vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! vuetify/lib/components/VToolbar */ "./node_modules/vuetify/lib/components/VToolbar/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Users_vue_vue_type_template_id_358a02f9___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Users_vue_vue_type_template_id_358a02f9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */






















_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__["VBtn"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCard"],VCardActions: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardActions"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardText"],VCardTitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardTitle"],VChip: vuetify_lib_components_VChip__WEBPACK_IMPORTED_MODULE_6__["VChip"],VCol: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["VCol"],VContainer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["VContainer"],VDataTable: vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_8__["VDataTable"],VDialog: vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_9__["VDialog"],VDivider: vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_10__["VDivider"],VEditDialog: vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_8__["VEditDialog"],VForm: vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_11__["VForm"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_12__["VIcon"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["VRow"],VSelect: vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_13__["VSelect"],VSnackbar: vuetify_lib_components_VSnackbar__WEBPACK_IMPORTED_MODULE_14__["VSnackbar"],VSpacer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["VSpacer"],VTextField: vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_15__["VTextField"],VToolbar: vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_16__["VToolbar"],VToolbarTitle: vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_16__["VToolbarTitle"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/admin/Users.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/admin/Users.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/views/admin/Users.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Users.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/Users.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/admin/Users.vue?vue&type=template&id=358a02f9&":
/*!***************************************************************************!*\
  !*** ./resources/js/views/admin/Users.vue?vue&type=template&id=358a02f9& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_template_id_358a02f9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Users.vue?vue&type=template&id=358a02f9& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/Users.vue?vue&type=template&id=358a02f9&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_template_id_358a02f9___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_template_id_358a02f9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);