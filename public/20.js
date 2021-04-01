(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20],{

<<<<<<< HEAD
/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/account/Index.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/account/Index.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************/
=======
/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/Bank.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/Bank.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
=======
>>>>>>> 3037ab0c41de01835fe07f3d4bdc1e752e6e73c7
/* harmony default export */ __webpack_exports__["default"] = ({
  layout: 'khod',
  middleware: ['auth'],
  metaInfo: {
    // title will be injected into parent titleTemplate
    title: 'Profile',
    titleTemplate: '%s | Khodgi'
  },
  data: function data() {
    return {
      valid: true,
      dialog: false,
      dialogPhoto: false,
      selectedFile: null,
      users: {
        id: "",
        name: "",
        email: "",
        type: "",
        contact_no: "",
        password: "",
        password_confirmation: "",
        current_password: "",
        created_at: ""
      },
      item: [],
      editedIndex: -1,
      editedItem: {
        id: "",
        name: "",
        email: "",
        type: "",
        contact_no: "",
        created_at: ""
      },
      rules: {
        required: function required(v) {
          return !!v || "This Field is Required";
        },
        min: function min(v) {
          return v.length >= 4 || "Minimum 5 Chracters Required";
        },
        validEmail: function validEmail(v) {
          return /.+@.+\..+/.test(v) || "Email must be valid";
        }
<<<<<<< HEAD
      }
    };
  },
  methods: {
    // uploadPhoto(item) {
    //   if (this.editedItem.photo != null) {
    //     const index = this.users.id;
    //     let formData = new FormData();
    //     formData.append(
    //       "photo",
    //       this.editedItem.photo,
    //       this.editedItem.photo.name
    //     );
    //     formData.append("user", this.users.id);
    //     axios
    //       .post("/api/change-photo", formData)
    //       .then(res => {
    //         this.users = res.data.user;
    //         // this.editedItem.photo = null
    //       })
    //       .catch(err => console.log(err.response));
    //   }
    // },
    save: function save() {
      var _this = this;

      axios.put("/api/settings/password", this.users).then(function (res) {
        _this.users = res.data.data;
        _this.text = "Record Updated Successfully!";
        _this.snackbar = true;
        _this.dialog = false;

        _this.$router.push('/signin');
      })["catch"](function (err) {
        console.log(err.response);
        _this.text = "Error Updating Record";
        _this.snackbar = true;
      });
=======
      },
      headers: [{
        text: '#',
        value: 'id'
      }, {
        text: 'Doc Type',
        value: 'doc_type'
      }, {
        text: 'Doc ID',
        value: 'doc_id'
      }, {
        text: 'Date',
        value: 'created_at'
      }, {
        text: 'Customer',
        value: 'customer_id'
      }, {
        text: 'Supplier',
        value: 'supplier_id'
      }, {
        text: 'Employee',
        value: 'employee_id'
      }, {
        text: 'Debit',
        value: 'debit'
      }, {
        text: 'Credit',
        value: 'credit'
      }, {
        text: 'User',
        value: 'user_id'
      }],
      banks: [],
      balance: '',
      editedIndex: -1,
      editedItem: {
        id: '',
        name: '',
        short_code: ''
      },
      defaultItem: {
        id: '',
        name: '',
        short_code: ''
      }
    };
  },
  computed: {
    formTitle: function formTitle() {
      return this.editedIndex === -1 ? this.$t('new item') : this.$t('edit item');
    } //   headers(){
    //   return [
    //     {
    //       text: '#',
    //       value: 'id',
    //     },
    //     { text: this.$t('name'), value: 'name' },
    //     { text: this.$t('short code'), value: 'short_code' },
    //     { text: this.$t('action'), value: 'action', sortable: false },
    //   ]
    // }

  },
  watch: {
    dialog: function dialog(val) {
      val || this.close();
>>>>>>> 3037ab0c41de01835fe07f3d4bdc1e752e6e73c7
    }
  },
  created: function created() {
    var _this2 = this;

<<<<<<< HEAD
    axios.get('/api/me').then(function (res) {
      _this2.users = res.data.data;
    })["catch"](function (err) {
      console.log(err.response);
    });
  },
  computed: {
    passwordMatch: function passwordMatch() {
      return this.users.password != this.users.password_confirmation ? "Password does Not Match" : true;
=======
    this.initialize();
    axios.get("/api/banks/balance").then(function (res) {
      _this.balance = res.data.balance;
    });
  },
  methods: {
    updateStatus: function updateStatus(item) {
      var _this2 = this;

      var index = this.banks.data.indexOf(item);
      axios.post('/api/change-status', {
        'status': item.is_active,
        'bank': item.id
      }).then(function (res) {
        _this2.text = res.data.bank.name + "'s Status Updated to " + res.data.bank.is_active;
        _this2.snackbar = true;
      })["catch"](function (error) {
        // this.text = error.response.bank.name + "'s Status Cannot be Updated" + error.response.bank.status
        _this2.banks.data[index].is_active = error.response.data.bank.is_active;
        _this2.snackbar = true;
        console.dir(error.response);
      });
    },
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
    //           axios.post('/api/banks/delete', {'banks': this.selected})
    //           .then(res => {
    //               this.text = "Rcords Deleted Successfully!";
    //               this.selected.map(val =>{
    //                   const index = this.banks.data.indexOf(val)
    //                   this.banks.data.splice(index, 1)
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

      if (e.length > 0) {
        axios.get("/api/banks/".concat(e)).then(function (res) {
          return _this3.banks = res.data.banks;
        })["catch"](function (err) {
          return console.dir(err.response);
        });
      }

      if (e.length <= 0) {
        // axios.get(`/api/banks?page=${e.page}`,{params:{'per_page': e.itemsPerPage}})
        //   axios.get(`/api/banks`)
        //     .then(res => this.banks = res.data.data.banks)
        //     .catch(err => console.dir(err.response))
        var sortBy = this.options.sortBy.length == 0 ? 'id' : this.options.sortBy[0];
        var orderBy = this.options.sortDesc.length > 0 || this.options.sortDesc[0] ? 'asc' : 'desc';
        axios.get("/api/banks?page=".concat(e.page), {
          params: {
            'per_page': e.itemsPerPage,
            'sort_by': sortBy,
            'order_by': orderBy
          }
        }).then(function (res) {
          _this3.banks = res.data.banks;
        })["catch"](function (err) {
          return console.dir(err.response);
        });
      }
    },
    paginate: function paginate(e) {
      var _this4 = this;

      var sortBy = this.options.sortBy.length == 0 ? 'id' : this.options.sortBy[0];
      var orderBy = this.options.sortDesc.length > 0 || this.options.sortDesc[0] ? 'asc' : 'desc';
      axios.get("/api/banks?page=".concat(e.page), {
        params: {
          'per_page': e.itemsPerPage,
          'sort_by': sortBy,
          'order_by': orderBy
        }
      }).then(function (res) {
        _this4.banks = res.data.banks;
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
      this.editedIndex = this.banks.data.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },
    deleteItem: function deleteItem(item) {
      var _this6 = this;

      var index = this.banks.data.indexOf(item);
      var decide = confirm('Are you sure you want to delete this item?');

      if (decide) {
        axios["delete"]('/api/banks/' + item.id).then(function (res) {
          _this6.snackbar = true;

          _this6.banks.data.splice(index, 1);
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
        axios.put('/api/banks/' + this.editedItem.id, this.editedItem) //  .then(res => Object.assign(this.banks[this.editedIndex], this.editedItem))
        .then(function (res) {
          console.log(res);
          _this8.text = "Record Updated Successfully!";
          _this8.snackbar = true;
          Object.assign(_this8.banks.data[index], res.data.bank);
        })["catch"](function (err) {
          console.log(err.response);
          _this8.text = "Error Updating Record";
          _this8.snackbar = true;
        }); //  Object.assign(this.banks.data[this.editedIndex], this.editedItem)
      } else {
        axios.post('/api/banks', this.editedItem).then(function (res) {
          _this8.text = "Record Added Successfully!";
          _this8.snackbar = true;

          _this8.banks.data.push(res.data.bank);
        })["catch"](function (err) {
          console.dir(err);
          _this8.text = "Error Inserting Record";
          _this8.snackbar = true;
        });
      }

      this.close();
>>>>>>> 3037ab0c41de01835fe07f3d4bdc1e752e6e73c7
    },
    userdata: function userdata() {// return this.users =  this.$auth.user
    }
  }
});

/***/ }),

<<<<<<< HEAD
/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/account/Index.vue?vue&type=template&id=440e703e&":
/*!******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/account/Index.vue?vue&type=template&id=440e703e& ***!
  \******************************************************************************************************************************************************************************************************************************************************************/
=======
/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/Bank.vue?vue&type=template&id=3f95855b&":
/*!***************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/Bank.vue?vue&type=template&id=3f95855b& ***!
  \***************************************************************************************************************************************************************************************************************************************************************/
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
    "v-container",
    [
<<<<<<< HEAD
      _c(
        "v-card",
        { staticClass: "mx-auto" },
        [
          _c(
            "v-list",
            [
              _c(
                "v-list-item",
                [
                  _c("v-list-item-content"),
                  _vm._v(" "),
                  _c("v-list-item-action")
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-list-item",
                [
                  _c(
                    "v-list-item-content",
                    [
                      _c("v-list-item-title", { staticClass: "title" }, [
                        _vm._v(_vm._s(_vm.users.name))
                      ]),
                      _vm._v(" "),
                      _c("v-list-item-subtitle", [
                        _vm._v(_vm._s(_vm.users.email))
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-list-item-action",
                    [
                      _c(
                        "v-icon",
                        {
                          on: {
                            click: function($event) {
                              _vm.dialog = !_vm.dialog
=======
      _c("v-data-table", {
        staticClass: "elevation-1",
        attrs: {
          dense: "",
          headers: _vm.headers,
          items: _vm.banks.data,
          "items-per-page": 15,
          "item-key": "id",
          loading: _vm.loading,
          options: _vm.options,
          "server-items-length": _vm.banks.total,
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
                      _vm._v(" " + _vm._s(_vm.$t("bank Account")))
                    ]),
                    _vm._v(" "),
                    _c("v-divider", {
                      staticClass: "mx-4",
                      attrs: { inset: "", vertical: "" }
                    }),
                    _vm._v(" "),
                    _c("v-spacer"),
                    _vm._v(" "),
                    _c("v-toolbar-title", { staticClass: "bg-success" }, [
                      _vm._v(" Balance: " + _vm._s(_vm.balance))
                    ]),
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
                              return undefined
>>>>>>> 3037ab0c41de01835fe07f3d4bdc1e752e6e73c7
                            }
                          }
                        },
                        [_vm._v("mdi-pencil")]
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
          _c("v-divider"),
          _vm._v(" "),
          _c(
            "v-list",
            [
              _c(
                "v-list-item",
                [
                  _c(
                    "v-list-item-icon",
                    [
                      _c("v-icon", { attrs: { color: "indigo" } }, [
                        _vm._v("mdi-account-box")
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-list-item-content",
                    [
                      _c("v-list-item-title", [_vm._v(_vm._s(_vm.users.name))]),
                      _vm._v(" "),
                      _c("v-list-item-subtitle", [_vm._v("User Name")])
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("v-divider", { attrs: { inset: "" } }),
              _vm._v(" "),
              _c(
                "v-list-item",
                [
                  _c(
                    "v-list-item-icon",
                    [
                      _c("v-icon", { attrs: { color: "indigo" } }, [
                        _vm._v("mdi-email")
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-list-item-content",
                    [
                      _c("v-list-item-title", [
                        _vm._v(_vm._s(_vm.users.email))
                      ]),
                      _vm._v(" "),
                      _c("v-list-item-subtitle", [_vm._v("Email")])
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("v-divider", { attrs: { inset: "" } }),
              _vm._v(" "),
              _c(
                "v-list-item",
                [
                  _c(
                    "v-list-item-icon",
                    [
                      _c("v-icon", { attrs: { color: "indigo" } }, [
                        _vm._v("mdi-phone")
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-list-item-content",
                    [
                      _c("v-list-item-title", [
                        _vm._v(_vm._s(_vm.users.contact_no))
                      ]),
                      _vm._v(" "),
                      _c("v-list-item-subtitle", [_vm._v("Contact No")])
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
        "v-dialog",
        {
          attrs: { width: "500px" },
          model: {
            value: _vm.dialog,
            callback: function($$v) {
              _vm.dialog = $$v
            },
            expression: "dialog"
          }
        },
        [
          _c(
            "v-card",
            [
              _c("v-card-title", {}, [_vm._v("Update Profile")]),
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
                            "v-col",
                            { attrs: { cols: "12" } },
                            [
                              _c("v-text-field", {
                                attrs: {
                                  "prepend-icon": "mdi-mail",
                                  placeholder: "User Name",
                                  rules: [_vm.rules.required, _vm.rules.min]
                                },
                                model: {
                                  value: _vm.users.name,
                                  callback: function($$v) {
                                    _vm.$set(_vm.users, "name", $$v)
                                  },
                                  expression: "users.name"
                                }
<<<<<<< HEAD
                              }),
                              _vm._v(" "),
                              _c("v-text-field", {
                                attrs: {
                                  type: "password",
                                  "prepend-icon": "mdi-lock",
                                  placeholder: "Current Password",
                                  rules: [_vm.rules.required]
                                },
                                model: {
                                  value: _vm.users.current_password,
                                  callback: function($$v) {
                                    _vm.$set(_vm.users, "current_password", $$v)
                                  },
                                  expression: "users.current_password"
                                }
                              }),
                              _vm._v(" "),
                              _c("v-text-field", {
                                attrs: {
                                  type: "password",
                                  "prepend-icon": "mdi-lock",
                                  placeholder: "New Password",
                                  rules: [_vm.rules.required]
                                },
                                model: {
                                  value: _vm.users.password,
                                  callback: function($$v) {
                                    _vm.$set(_vm.users, "password", $$v)
                                  },
                                  expression: "users.password"
                                }
                              }),
                              _vm._v(" "),
                              _c("v-text-field", {
                                attrs: {
                                  type: "password",
                                  "prepend-icon": "mdi-lock",
                                  placeholder: "Confirm Password",
                                  rules: [_vm.rules.required, _vm.passwordMatch]
                                },
                                model: {
                                  value: _vm.users.password_confirmation,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.users,
                                      "password_confirmation",
                                      $$v
=======
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
                                                    label: _vm.$t("name"),
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
                                                _c("v-text-field", {
                                                  attrs: {
                                                    label: _vm.$t("short code")
                                                  },
                                                  model: {
                                                    value:
                                                      _vm.editedItem.short_code,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        _vm.editedItem,
                                                        "short_code",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "editedItem.short_code"
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
                                      [_vm._v(_vm._s(_vm.$t("cancel")))]
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
                                      [_vm._v(_vm._s(_vm.$t("save")))]
>>>>>>> 3037ab0c41de01835fe07f3d4bdc1e752e6e73c7
                                    )
                                  },
                                  expression: "users.password_confirmation"
                                }
                              }),
                              _vm._v(" "),
                              _c("v-text-field", {
                                attrs: {
                                  "prepend-icon": "mdi-phone",
                                  placeholder: "Contact No",
                                  rules: [_vm.rules.required]
                                },
                                model: {
                                  value: _vm.users.contact_no,
                                  callback: function($$v) {
                                    _vm.$set(_vm.users, "contact_no", $$v)
                                  },
                                  expression: "users.contact_no"
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
                          on: {
                            click: function($event) {
                              _vm.dialog = false
                            }
                          }
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
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

<<<<<<< HEAD
/***/ "./resources/js/views/account/Index.vue":
/*!**********************************************!*\
  !*** ./resources/js/views/account/Index.vue ***!
  \**********************************************/
=======
/***/ "./resources/js/views/admin/Bank.vue":
/*!*******************************************!*\
  !*** ./resources/js/views/admin/Bank.vue ***!
  \*******************************************/
>>>>>>> 3037ab0c41de01835fe07f3d4bdc1e752e6e73c7
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _Index_vue_vue_type_template_id_440e703e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=440e703e& */ "./resources/js/views/account/Index.vue?vue&type=template&id=440e703e&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/views/account/Index.vue?vue&type=script&lang=js&");
=======
/* harmony import */ var _Bank_vue_vue_type_template_id_3f95855b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Bank.vue?vue&type=template&id=3f95855b& */ "./resources/js/views/admin/Bank.vue?vue&type=template&id=3f95855b&");
/* harmony import */ var _Bank_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Bank.vue?vue&type=script&lang=js& */ "./resources/js/views/admin/Bank.vue?vue&type=script&lang=js&");
>>>>>>> 3037ab0c41de01835fe07f3d4bdc1e752e6e73c7
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VDialog */ "./node_modules/vuetify/lib/components/VDialog/index.js");
/* harmony import */ var vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VDivider */ "./node_modules/vuetify/lib/components/VDivider/index.js");
/* harmony import */ var vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VForm */ "./node_modules/vuetify/lib/components/VForm/index.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/index.js");
/* harmony import */ var vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuetify/lib/components/VList */ "./node_modules/vuetify/lib/components/VList/index.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
<<<<<<< HEAD
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_440e703e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_440e703e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
=======
  _Bank_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Bank_vue_vue_type_template_id_3f95855b___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Bank_vue_vue_type_template_id_3f95855b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
>>>>>>> 3037ab0c41de01835fe07f3d4bdc1e752e6e73c7
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */





















_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__["VBtn"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCard"],VCardActions: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardActions"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardText"],VCardTitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardTitle"],VCol: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VCol"],VContainer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VContainer"],VDialog: vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_7__["VDialog"],VDivider: vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_8__["VDivider"],VForm: vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_9__["VForm"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_10__["VIcon"],VList: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_11__["VList"],VListItem: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_11__["VListItem"],VListItemAction: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_11__["VListItemAction"],VListItemContent: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_11__["VListItemContent"],VListItemIcon: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_11__["VListItemIcon"],VListItemSubtitle: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_11__["VListItemSubtitle"],VListItemTitle: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_11__["VListItemTitle"],VSpacer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VSpacer"],VTextField: vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_12__["VTextField"]})


/* hot reload */
if (false) { var api; }
<<<<<<< HEAD
component.options.__file = "resources/js/views/account/Index.vue"
=======
component.options.__file = "resources/js/views/admin/Bank.vue"
>>>>>>> 3037ab0c41de01835fe07f3d4bdc1e752e6e73c7
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

<<<<<<< HEAD
/***/ "./resources/js/views/account/Index.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/views/account/Index.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
=======
/***/ "./resources/js/views/admin/Bank.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/views/admin/Bank.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
>>>>>>> 3037ab0c41de01835fe07f3d4bdc1e752e6e73c7
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/account/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/account/Index.vue?vue&type=template&id=440e703e&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/account/Index.vue?vue&type=template&id=440e703e& ***!
  \*****************************************************************************/
=======
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Bank_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Bank.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/Bank.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Bank_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/admin/Bank.vue?vue&type=template&id=3f95855b&":
/*!**************************************************************************!*\
  !*** ./resources/js/views/admin/Bank.vue?vue&type=template&id=3f95855b& ***!
  \**************************************************************************/
>>>>>>> 3037ab0c41de01835fe07f3d4bdc1e752e6e73c7
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_440e703e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=440e703e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/account/Index.vue?vue&type=template&id=440e703e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_440e703e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_440e703e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });
=======
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Bank_vue_vue_type_template_id_3f95855b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Bank.vue?vue&type=template&id=3f95855b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/Bank.vue?vue&type=template&id=3f95855b&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Bank_vue_vue_type_template_id_3f95855b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Bank_vue_vue_type_template_id_3f95855b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });
>>>>>>> 3037ab0c41de01835fe07f3d4bdc1e752e6e73c7



/***/ })

}]);