(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[29],{

<<<<<<< HEAD
/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/Employee.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/Employee.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************/
=======
/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/Expense.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/Expense.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
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
>>>>>>> 3037ab0c41de01835fe07f3d4bdc1e752e6e73c7
/* harmony default export */ __webpack_exports__["default"] = ({
  layout: "admin",
  middleware: ["auth", "admin"],
  data: function data() {
    return {
      valid: true,
      dialog: false,
      loading: false,
      snackbar: false,
      text: "",
      success: "",
      error: "",
<<<<<<< HEAD
      options: {
        sortBy: ["name"],
=======
      expenseitems: [],
      options: {
        sortBy: ["id"],
>>>>>>> 3037ab0c41de01835fe07f3d4bdc1e752e6e73c7
        sortDesc: [true]
      },
      menu: false,
      modal: false,
      menu2: false,
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
      headers: [{
        text: "#",
        value: "id"
<<<<<<< HEAD
      }, {
        text: "Name",
        value: "name"
      }, {
        text: "Email",
        value: "email"
      }, {
        text: "Address",
        value: "address"
      }, {
        text: "Duty",
        value: "type"
      }, {
        text: "Phone",
        value: "work_number"
      }, {
        text: "WhatsApp",
        value: "whatsapp_number"
      }, {
        text: "Salary",
        value: "salary"
      }, {
        text: "Active",
        value: "is_active"
=======
      }, {
        text: "Expense",
        value: "expense_item_id"
      }, {
        text: "Date",
        value: "date"
      }, {
        text: "Note",
        value: "note"
      }, {
        text: "Payment Method",
        value: "pmt_method"
>>>>>>> 3037ab0c41de01835fe07f3d4bdc1e752e6e73c7
      }, {
        text: "Actions",
        value: "action",
        sortable: false
      }],
      status: [{
        text: "Active",
        value: true
      }, {
        text: "In Active",
        value: false
      }],
<<<<<<< HEAD
      types: ["Accountan", "Cashior", "Driver", "Fitter", "Worker"],
      employees: [],
      editedIndex: -1,
      editedItem: {
        id: "",
        name: "",
        description: ""
      },
      defaultItem: {
        id: "",
        name: "",
        description: ""
=======
      types: ["expense", "service provider"],
      expenses: [],
      editedIndex: -1,
      editedItem: {
        id: "",
        expense_item_id: "",
        description: "",
        date: new Date().toISOString().substr(0, 10),
        pmt_method: "",
        details: "",
        is_active: "",
        doc_type: 'expense payment'
      },
      defaultItem: {
        id: "",
        expense_item_id: "",
        description: "",
        date: new Date().toISOString().substr(0, 10),
        pmt_method: "",
        details: "",
        is_active: ""
>>>>>>> 3037ab0c41de01835fe07f3d4bdc1e752e6e73c7
      }
    };
  },
  computed: {
    formTitle: function formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
    }
  },
  watch: {
    dialog: function dialog(val) {
      val || this.close();
    }
  },
  created: function created() {
    var _this = this;

    this.initialize();
    axios.get("/api/expenseitems/allitems").then(function (res) {
      _this.expenseitems = res.data.data;
    });
  },
  methods: {
    updateStatus: function updateStatus(item) {
      var _this2 = this;

<<<<<<< HEAD
      var index = this.employees.data.indexOf(item);
      axios.post("/api/change-status", {
        status: item.is_active,
        employee: item.id
      }).then(function (res) {
        _this.text = res.data.employee.name + "'s Status Updated to " + res.data.employee.is_active;
        _this.snackbar = true;
      })["catch"](function (error) {
        // this.text = error.response.employee.name + "'s Status Cannot be Updated" + error.response.employee.status
        _this.employees.data[index].is_active = error.response.data.employee.is_active;
        _this.snackbar = true;
=======
      var index = this.expenses.data.indexOf(item);
      axios.post("/api/change-status", {
        status: item.is_active,
        expense: item.id
      }).then(function (res) {
        _this2.text = res.data.expense.id + "'s Status Updated to " + res.data.expense.is_active;
        _this2.snackbar = true;
      })["catch"](function (error) {
        // this.text = error.response.expense.name + "'s Status Cannot be Updated" + error.response.expense.status
        _this2.expenses.data[index].is_active = error.response.data.expense.is_active;
        _this2.snackbar = true;
>>>>>>> 3037ab0c41de01835fe07f3d4bdc1e752e6e73c7
        console.dir(error.response);
      });
    },
    searchIt: function searchIt(e) {
      var _this3 = this;

      if (e.length > 3) {
<<<<<<< HEAD
        axios.get("/api/employees/".concat(e)).then(function (res) {
          return _this2.employees = res.data.employees;
=======
        axios.get("/api/expenses/".concat(e)).then(function (res) {
          return _this3.expenses = res.data.expenses;
>>>>>>> 3037ab0c41de01835fe07f3d4bdc1e752e6e73c7
        })["catch"](function (err) {
          return console.dir(err.response);
        });
      }

      if (e.length <= 0) {
<<<<<<< HEAD
        var sortBy = this.options.sortBy.length == 0 ? "name" : this.options.sortBy[0];
        var orderBy = this.options.sortDesc.length > 0 || this.options.sortDesc[0] ? "asc" : "desc";
        axios.get("/api/employees?page=".concat(e.page), {
=======
        var sortBy = this.options.sortBy.length == 0 ? "id" : this.options.sortBy[0];
        var orderBy = this.options.sortDesc.length > 0 || this.options.sortDesc[0] ? "asc" : "desc";
        axios.get("/api/expenses?page=".concat(e.page), {
>>>>>>> 3037ab0c41de01835fe07f3d4bdc1e752e6e73c7
          params: {
            per_page: e.itemsPerPage,
            sort_by: sortBy,
            order_by: orderBy
          }
        }).then(function (res) {
<<<<<<< HEAD
          _this2.employees = res.data.employees;
=======
          _this3.expenses = res.data.expenses;
>>>>>>> 3037ab0c41de01835fe07f3d4bdc1e752e6e73c7
        })["catch"](function (err) {
          return console.dir(err.response);
        });
      }
    },
    paginate: function paginate(e) {
      var _this4 = this;

<<<<<<< HEAD
      var sortBy = this.options.sortBy.length == 0 ? "name" : this.options.sortBy[0];
      var orderBy = this.options.sortDesc.length > 0 || this.options.sortDesc[0] ? "asc" : "desc";
      axios.get("/api/employees?page=".concat(e.page), {
=======
      var sortBy = this.options.sortBy.length == 0 ? "id" : this.options.sortBy[0];
      var orderBy = this.options.sortDesc.length > 0 || this.options.sortDesc[0] ? "asc" : "desc";
      axios.get("/api/expenses?page=".concat(e.page), {
>>>>>>> 3037ab0c41de01835fe07f3d4bdc1e752e6e73c7
        params: {
          per_page: e.itemsPerPage,
          sort_by: sortBy,
          order_by: orderBy
        }
      }).then(function (res) {
<<<<<<< HEAD
        _this3.employees = res.data.employees;
=======
        _this4.expenses = res.data.expenses;
>>>>>>> 3037ab0c41de01835fe07f3d4bdc1e752e6e73c7
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
<<<<<<< HEAD
      this.editedIndex = this.employees.data.indexOf(item);
=======
      this.editedIndex = this.expenses.data.indexOf(item);
>>>>>>> 3037ab0c41de01835fe07f3d4bdc1e752e6e73c7
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },
    deleteItem: function deleteItem(item) {
      var _this6 = this;

<<<<<<< HEAD
      var index = this.employees.data.indexOf(item);
      var decide = confirm("Are you sure you want to delete this item?");

      if (decide) {
        axios["delete"]("/api/employees/" + item.id).then(function (res) {
          _this5.snackbar = true;

          _this5.employees.data.splice(index, 1);
=======
      var index = this.expenses.data.indexOf(item);
      var decide = confirm("Are you sure you want to delete this item?");

      if (decide) {
        axios["delete"]("/api/expenses/" + item.id).then(function (res) {
          _this6.snackbar = true;

          _this6.expenses.data.splice(index, 1);
>>>>>>> 3037ab0c41de01835fe07f3d4bdc1e752e6e73c7
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
<<<<<<< HEAD
        axios.put("/api/employees/" + this.editedItem.id, this.editedItem) //  .then(res => Object.assign(this.employees[this.editedIndex], this.editedItem))
        .then(function (res) {
          console.log(res);
          _this7.text = "Record Updated Successfully!";
          _this7.snackbar = true;
          Object.assign(_this7.employees.data[index], res.data.employee);
        })["catch"](function (err) {
          console.log(err.response);
          _this7.text = "Error Updating Record";
          _this7.snackbar = true;
        }); //  Object.assign(this.employees.data[this.editedIndex], this.editedItem)
      } else {
        axios.post("/api/employees", this.editedItem).then(function (res) {
          _this7.text = "Record Added Successfully!";
          _this7.snackbar = true;

          _this7.employees.data.push(res.data.employee);
=======
        axios.put("/api/expenses/" + this.editedItem.id, this.editedItem) //  .then(res => Object.assign(this.expenses[this.editedIndex], this.editedItem))
        .then(function (res) {
          console.log(res);
          _this8.text = "Record Updated Successfully!";
          _this8.snackbar = true;
          Object.assign(_this8.expenses.data[index], res.data.expense);
        })["catch"](function (err) {
          console.log(err.response);
          _this8.text = "Error Updating Record";
          _this8.snackbar = true;
        }); //  Object.assign(this.expenses.data[this.editedIndex], this.editedItem)
      } else {
        axios.post("/api/expenses", this.editedItem).then(function (res) {
          _this8.text = "Record Added Successfully!";
          _this8.snackbar = true;

          _this8.expenses.data.push(res.data.expense);
>>>>>>> 3037ab0c41de01835fe07f3d4bdc1e752e6e73c7
        })["catch"](function (err) {
          console.dir(err);
          _this8.text = "Error Inserting Record";
          _this8.snackbar = true;
        });
      }

      this.close();
    },
    getColor: function getColor(status) {
      if (status == 0) return "red";else return "green";
    }
  }
});

/***/ }),

<<<<<<< HEAD
/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/Employee.vue?vue&type=template&id=369a414d&":
/*!*******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/Employee.vue?vue&type=template&id=369a414d& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************/
=======
/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/Expense.vue?vue&type=template&id=122b39ee&":
/*!******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/Expense.vue?vue&type=template&id=122b39ee& ***!
  \******************************************************************************************************************************************************************************************************************************************************************/
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
      _c("v-data-table", {
        staticClass: "elevation-1",
        attrs: {
          headers: _vm.headers,
<<<<<<< HEAD
          items: _vm.employees.data,
=======
          items: _vm.expenses.data,
>>>>>>> 3037ab0c41de01835fe07f3d4bdc1e752e6e73c7
          "items-per-page": 5,
          "item-key": "id",
          loading: _vm.loading,
          options: _vm.options,
<<<<<<< HEAD
          "server-items-length": _vm.employees.total,
=======
          "server-items-length": _vm.expenses.total,
>>>>>>> 3037ab0c41de01835fe07f3d4bdc1e752e6e73c7
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
<<<<<<< HEAD
                    _c("v-toolbar-title", [_vm._v("employee Management")]),
=======
                    _c("v-toolbar-title", [_vm._v("Expenses")]),
>>>>>>> 3037ab0c41de01835fe07f3d4bdc1e752e6e73c7
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
<<<<<<< HEAD
                                  [_vm._v("New employee")]
=======
                                  [_vm._v("New Expense")]
>>>>>>> 3037ab0c41de01835fe07f3d4bdc1e752e6e73c7
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
                                                _c(
                                                  "v-menu",
                                                  {
                                                    attrs: {
                                                      "close-on-content-click": false,
                                                      "nudge-right": 40,
                                                      transition:
                                                        "scale-transition",
                                                      "offset-y": "",
                                                      "min-width": "auto"
                                                    },
                                                    scopedSlots: _vm._u([
                                                      {
                                                        key: "activator",
                                                        fn: function(ref) {
                                                          var on = ref.on
                                                          var attrs = ref.attrs
                                                          return [
                                                            _c(
                                                              "v-text-field",
                                                              _vm._g(
                                                                _vm._b(
                                                                  {
                                                                    attrs: {
                                                                      label:
                                                                        "For the Date/Month of:",
                                                                      "prepend-icon":
                                                                        "mdi-calendar",
                                                                      readonly:
                                                                        ""
                                                                    },
                                                                    model: {
                                                                      value:
                                                                        _vm
                                                                          .editedItem
                                                                          .date,
                                                                      callback: function(
                                                                        $$v
                                                                      ) {
                                                                        _vm.$set(
                                                                          _vm.editedItem,
                                                                          "date",
                                                                          $$v
                                                                        )
                                                                      },
                                                                      expression:
                                                                        "editedItem.date"
                                                                    }
                                                                  },
                                                                  "v-text-field",
                                                                  attrs,
                                                                  false
                                                                ),
                                                                on
                                                              )
                                                            )
                                                          ]
                                                        }
                                                      }
                                                    ]),
                                                    model: {
                                                      value: _vm.menu2,
                                                      callback: function($$v) {
                                                        _vm.menu2 = $$v
                                                      },
                                                      expression: "menu2"
                                                    }
                                                  },
                                                  [
                                                    _vm._v(" "),
                                                    _c("v-date-picker", {
                                                      on: {
                                                        input: function(
                                                          $event
                                                        ) {
                                                          _vm.menu2 = false
                                                        }
                                                      },
                                                      model: {
                                                        value:
                                                          _vm.editedItem.date,
                                                        callback: function(
                                                          $$v
                                                        ) {
                                                          _vm.$set(
                                                            _vm.editedItem,
                                                            "date",
                                                            $$v
                                                          )
                                                        },
                                                        expression:
                                                          "editedItem.date"
                                                      }
                                                    })
                                                  ],
                                                  1
                                                ),
                                                _vm._v(" "),
                                                _c("v-select", {
                                                  attrs: {
                                                    items: _vm.expenseitems,
                                                    "item-text": "name",
                                                    "item-value": "id",
                                                    label: "Expenses",
                                                    rules: [_vm.rules.required]
                                                  },
                                                  model: {
                                                    value:
                                                      _vm.editedItem
                                                        .expense_item_id,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        _vm.editedItem,
                                                        "expense_item_id",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "editedItem.expense_item_id"
                                                  }
                                                }),
                                                _vm._v(" "),
                                                _c("v-text-field", {
                                                  attrs: { label: "Email" },
                                                  model: {
                                                    value: _vm.editedItem.email,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        _vm.editedItem,
                                                        "email",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "editedItem.email"
                                                  }
                                                }),
                                                _vm._v(" "),
                                                _c("v-text-field", {
                                                  attrs: { label: "Address" },
                                                  model: {
                                                    value:
                                                      _vm.editedItem.address,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        _vm.editedItem,
                                                        "address",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "editedItem.address"
                                                  }
                                                }),
                                                _vm._v(" "),
                                                _c("v-text-field", {
                                                  attrs: { label: "Phone" },
                                                  model: {
                                                    value:
                                                      _vm.editedItem
                                                        .work_number,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        _vm.editedItem,
                                                        "work_number",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "editedItem.work_number"
                                                  }
                                                }),
                                                _vm._v(" "),
                                                _c("v-text-field", {
                                                  attrs: { label: "WhatsApp" },
                                                  model: {
                                                    value:
                                                      _vm.editedItem
                                                        .whatsapp_number,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        _vm.editedItem,
                                                        "whatsapp_number",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "editedItem.whatsapp_number"
                                                  }
                                                }),
                                                _vm._v(" "),
                                                _c("v-select", {
                                                  attrs: {
                                                    items: _vm.types,
                                                    label: "Duty"
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
                                                }),
                                                _vm._v(" "),
                                                _c("v-text-field", {
                                                  attrs: {
<<<<<<< HEAD
                                                    label: "Salary",
                                                    type: "number"
                                                  },
                                                  model: {
                                                    value:
                                                      _vm.editedItem.salary,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        _vm.editedItem,
                                                        "salary",
=======
                                                    label: "Amount",
                                                    rules: [_vm.rules.required],
                                                    type: "number"
                                                  },
                                                  model: {
                                                    value: _vm.editedItem.total,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        _vm.editedItem,
                                                        "total",
>>>>>>> 3037ab0c41de01835fe07f3d4bdc1e752e6e73c7
                                                        $$v
                                                      )
                                                    },
                                                    expression:
<<<<<<< HEAD
                                                      "editedItem.salary"
=======
                                                      "editedItem.total"
>>>>>>> 3037ab0c41de01835fe07f3d4bdc1e752e6e73c7
                                                  }
                                                }),
                                                _vm._v(" "),
                                                _c(
                                                  "v-radio-group",
                                                  {
                                                    staticClass: "radio mt-1",
                                                    attrs: {
                                                      mandatory: "",
                                                      row: ""
                                                    },
                                                    model: {
                                                      value:
                                                        _vm.editedItem
                                                          .pmt_method,
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          _vm.editedItem,
                                                          "pmt_method",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "editedItem.pmt_method"
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
                                                _vm.editedItem.pmt_method ==
                                                "Bank"
                                                  ? _c("v-text-field", {
                                                      attrs: {
                                                        label: "Detials"
                                                      },
                                                      model: {
                                                        value:
                                                          _vm.editedItem
                                                            .details,
                                                        callback: function(
                                                          $$v
                                                        ) {
                                                          _vm.$set(
                                                            _vm.editedItem,
                                                            "details",
                                                            $$v
                                                          )
                                                        },
                                                        expression:
                                                          "editedItem.details"
                                                      }
                                                    })
                                                  : _vm._e(),
                                                _vm._v(" "),
                                                _c("v-text-field", {
                                                  attrs: { label: "Notes" },
                                                  model: {
                                                    value: _vm.editedItem.note,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        _vm.editedItem,
                                                        "note",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "editedItem.note"
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
                  [_vm._v(" mdi-pencil ")]
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
                  [_vm._v(" mdi-delete ")]
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
/***/ "./resources/js/views/admin/Employee.vue":
/*!***********************************************!*\
  !*** ./resources/js/views/admin/Employee.vue ***!
  \***********************************************/
=======
/***/ "./resources/js/views/admin/Expense.vue":
/*!**********************************************!*\
  !*** ./resources/js/views/admin/Expense.vue ***!
  \**********************************************/
>>>>>>> 3037ab0c41de01835fe07f3d4bdc1e752e6e73c7
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _Employee_vue_vue_type_template_id_369a414d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Employee.vue?vue&type=template&id=369a414d& */ "./resources/js/views/admin/Employee.vue?vue&type=template&id=369a414d&");
/* harmony import */ var _Employee_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Employee.vue?vue&type=script&lang=js& */ "./resources/js/views/admin/Employee.vue?vue&type=script&lang=js&");
=======
/* harmony import */ var _Expense_vue_vue_type_template_id_122b39ee___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Expense.vue?vue&type=template&id=122b39ee& */ "./resources/js/views/admin/Expense.vue?vue&type=template&id=122b39ee&");
/* harmony import */ var _Expense_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Expense.vue?vue&type=script&lang=js& */ "./resources/js/views/admin/Expense.vue?vue&type=script&lang=js&");
>>>>>>> 3037ab0c41de01835fe07f3d4bdc1e752e6e73c7
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VDataTable */ "./node_modules/vuetify/lib/components/VDataTable/index.js");
/* harmony import */ var vuetify_lib_components_VDatePicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VDatePicker */ "./node_modules/vuetify/lib/components/VDatePicker/index.js");
/* harmony import */ var vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VDialog */ "./node_modules/vuetify/lib/components/VDialog/index.js");
/* harmony import */ var vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VDivider */ "./node_modules/vuetify/lib/components/VDivider/index.js");
/* harmony import */ var vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuetify/lib/components/VForm */ "./node_modules/vuetify/lib/components/VForm/index.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/index.js");
<<<<<<< HEAD
/* harmony import */ var vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! vuetify/lib/components/VSelect */ "./node_modules/vuetify/lib/components/VSelect/index.js");
/* harmony import */ var vuetify_lib_components_VSnackbar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! vuetify/lib/components/VSnackbar */ "./node_modules/vuetify/lib/components/VSnackbar/index.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/index.js");
/* harmony import */ var vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! vuetify/lib/components/VToolbar */ "./node_modules/vuetify/lib/components/VToolbar/index.js");
=======
/* harmony import */ var vuetify_lib_components_VMenu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! vuetify/lib/components/VMenu */ "./node_modules/vuetify/lib/components/VMenu/index.js");
/* harmony import */ var vuetify_lib_components_VRadioGroup__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! vuetify/lib/components/VRadioGroup */ "./node_modules/vuetify/lib/components/VRadioGroup/index.js");
/* harmony import */ var vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! vuetify/lib/components/VSelect */ "./node_modules/vuetify/lib/components/VSelect/index.js");
/* harmony import */ var vuetify_lib_components_VSnackbar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! vuetify/lib/components/VSnackbar */ "./node_modules/vuetify/lib/components/VSnackbar/index.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/index.js");
/* harmony import */ var vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! vuetify/lib/components/VToolbar */ "./node_modules/vuetify/lib/components/VToolbar/index.js");
>>>>>>> 3037ab0c41de01835fe07f3d4bdc1e752e6e73c7





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
<<<<<<< HEAD
  _Employee_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Employee_vue_vue_type_template_id_369a414d___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Employee_vue_vue_type_template_id_369a414d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
=======
  _Expense_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Expense_vue_vue_type_template_id_122b39ee___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Expense_vue_vue_type_template_id_122b39ee___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
>>>>>>> 3037ab0c41de01835fe07f3d4bdc1e752e6e73c7
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */





















<<<<<<< HEAD
_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__["VBtn"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCard"],VCardActions: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardActions"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardText"],VCardTitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardTitle"],VCheckbox: vuetify_lib_components_VCheckbox__WEBPACK_IMPORTED_MODULE_6__["VCheckbox"],VCol: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["VCol"],VContainer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["VContainer"],VDataTable: vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_8__["VDataTable"],VDialog: vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_9__["VDialog"],VDivider: vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_10__["VDivider"],VForm: vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_11__["VForm"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_12__["VIcon"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["VRow"],VSelect: vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_13__["VSelect"],VSnackbar: vuetify_lib_components_VSnackbar__WEBPACK_IMPORTED_MODULE_14__["VSnackbar"],VSpacer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["VSpacer"],VTextField: vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_15__["VTextField"],VToolbar: vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_16__["VToolbar"],VToolbarTitle: vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_16__["VToolbarTitle"]})
=======



_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__["VBtn"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCard"],VCardActions: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardActions"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardText"],VCardTitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardTitle"],VCol: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VCol"],VContainer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VContainer"],VDataTable: vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_7__["VDataTable"],VDatePicker: vuetify_lib_components_VDatePicker__WEBPACK_IMPORTED_MODULE_8__["VDatePicker"],VDialog: vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_9__["VDialog"],VDivider: vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_10__["VDivider"],VForm: vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_11__["VForm"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_12__["VIcon"],VMenu: vuetify_lib_components_VMenu__WEBPACK_IMPORTED_MODULE_13__["VMenu"],VRadio: vuetify_lib_components_VRadioGroup__WEBPACK_IMPORTED_MODULE_14__["VRadio"],VRadioGroup: vuetify_lib_components_VRadioGroup__WEBPACK_IMPORTED_MODULE_14__["VRadioGroup"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VRow"],VSelect: vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_15__["VSelect"],VSnackbar: vuetify_lib_components_VSnackbar__WEBPACK_IMPORTED_MODULE_16__["VSnackbar"],VSpacer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VSpacer"],VTextField: vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_17__["VTextField"],VToolbar: vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_18__["VToolbar"],VToolbarTitle: vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_18__["VToolbarTitle"]})
>>>>>>> 3037ab0c41de01835fe07f3d4bdc1e752e6e73c7


/* hot reload */
if (false) { var api; }
<<<<<<< HEAD
component.options.__file = "resources/js/views/admin/Employee.vue"
=======
component.options.__file = "resources/js/views/admin/Expense.vue"
>>>>>>> 3037ab0c41de01835fe07f3d4bdc1e752e6e73c7
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

<<<<<<< HEAD
/***/ "./resources/js/views/admin/Employee.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/views/admin/Employee.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
=======
/***/ "./resources/js/views/admin/Expense.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/views/admin/Expense.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
>>>>>>> 3037ab0c41de01835fe07f3d4bdc1e752e6e73c7
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Employee_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Employee.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/Employee.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Employee_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/admin/Employee.vue?vue&type=template&id=369a414d&":
/*!******************************************************************************!*\
  !*** ./resources/js/views/admin/Employee.vue?vue&type=template&id=369a414d& ***!
  \******************************************************************************/
=======
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Expense_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Expense.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/Expense.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Expense_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/admin/Expense.vue?vue&type=template&id=122b39ee&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/admin/Expense.vue?vue&type=template&id=122b39ee& ***!
  \*****************************************************************************/
>>>>>>> 3037ab0c41de01835fe07f3d4bdc1e752e6e73c7
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Employee_vue_vue_type_template_id_369a414d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Employee.vue?vue&type=template&id=369a414d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/Employee.vue?vue&type=template&id=369a414d&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Employee_vue_vue_type_template_id_369a414d___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Employee_vue_vue_type_template_id_369a414d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });
=======
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Expense_vue_vue_type_template_id_122b39ee___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Expense.vue?vue&type=template&id=122b39ee& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/Expense.vue?vue&type=template&id=122b39ee&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Expense_vue_vue_type_template_id_122b39ee___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Expense_vue_vue_type_template_id_122b39ee___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });
>>>>>>> 3037ab0c41de01835fe07f3d4bdc1e752e6e73c7



/***/ })

}]);