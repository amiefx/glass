(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[36],{

<<<<<<< HEAD
/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/Suppliers.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/Suppliers.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************/
=======
/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/Units.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/Units.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************/
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
=======
>>>>>>> 3037ab0c41de01835fe07f3d4bdc1e752e6e73c7
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
<<<<<<< HEAD
        sortBy: ['name'],
=======
        sortBy: ['actual_name'],
>>>>>>> 3037ab0c41de01835fe07f3d4bdc1e752e6e73c7
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
<<<<<<< HEAD
        value: 'name'
      }, {
        text: 'Company',
        value: 'company_name'
      }, {
        text: 'Address',
        value: 'address'
      }, {
        text: 'Phone',
        value: 'work_number'
      }, {
        text: 'WhatsApp',
        value: 'whatsapp_number'
      }, {
        text: 'Email',
        value: 'email'
      }, {
        text: 'Type',
        value: 'type'
      }, {
        text: 'Credit Limit',
        value: 'credit_limit'
      }, {
        text: 'Status',
        value: 'is_active'
=======
        value: 'actual_name'
      }, {
        text: 'Short Name',
        value: 'short_name'
>>>>>>> 3037ab0c41de01835fe07f3d4bdc1e752e6e73c7
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
<<<<<<< HEAD
      types: ['supplier', 'service provider'],
      suppliers: [],
      editedIndex: -1,
      editedItem: {
        id: '',
        name: '',
        company_name: '',
        address: '',
        work_number: '',
        whatsapp_number: '',
        email: '',
        type: '',
        credit_limit: '',
        is_active: '',
        opening_balance: ''
=======
      types: ['unit', 'service provider'],
      units: [],
      editedIndex: -1,
      editedItem: {
        id: '',
        actual_name: '',
        short_name: ''
>>>>>>> 3037ab0c41de01835fe07f3d4bdc1e752e6e73c7
      },
      defaultItem: {
        id: '',
        name: '',
<<<<<<< HEAD
        company_name: '',
        address: '',
        work_number: '',
        whatsapp_number: '',
        email: '',
        type: '',
        credit_limit: '',
        is_active: '',
        opening_balance: ''
=======
        actual_name: '',
        short_name: ''
>>>>>>> 3037ab0c41de01835fe07f3d4bdc1e752e6e73c7
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
<<<<<<< HEAD
    updateStatus: function updateStatus(item) {
      var _this = this;

      var index = this.suppliers.data.indexOf(item);
      axios.post('/api/change-status', {
        'status': item.is_active,
        'supplier': item.id
      }).then(function (res) {
        _this.text = res.data.supplier.name + "'s Status Updated to " + res.data.supplier.is_active;
        _this.snackbar = true;
      })["catch"](function (error) {
        // this.text = error.response.supplier.name + "'s Status Cannot be Updated" + error.response.supplier.status
        _this.suppliers.data[index].is_active = error.response.data.supplier.is_active;
        _this.snackbar = true;
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
    //           axios.post('/api/suppliers/delete', {'suppliers': this.selected})
    //           .then(res => {
    //               this.text = "Rcords Deleted Successfully!";
    //               this.selected.map(val =>{
    //                   const index = this.suppliers.data.indexOf(val)
    //                   this.suppliers.data.splice(index, 1)
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
      var _this2 = this;

      if (e.length > 3) {
        axios.get("/api/suppliers/".concat(e)).then(function (res) {
          return _this2.suppliers = res.data.suppliers;
=======
    //   updateStatus(item) {
    //       const index = this.units.data.indexOf(item);
    //       axios.post('/api/change-status', {'status': item.is_active, 'unit': item.id})
    //         .then(res => {
    //            this.text = res.data.unit.name + "'s Status Updated to " + res.data.unit.is_active
    //            this.snackbar = true
    //             })
    //         .catch(error => {
    //             // this.text = error.response.unit.name + "'s Status Cannot be Updated" + error.response.unit.status
    //             this.units.data[index].is_active = error.response.data.unit.is_active
    //             this.snackbar = true
    //             console.dir(error.response)
    //             })
    //   },
    searchIt: function searchIt(e) {
      var _this = this;

      if (e.length > 3) {
        axios.get("/api/units/".concat(e)).then(function (res) {
          return _this.units = res.data.units;
>>>>>>> 3037ab0c41de01835fe07f3d4bdc1e752e6e73c7
        })["catch"](function (err) {
          return console.dir(err.response);
        });
      }

      if (e.length <= 0) {
<<<<<<< HEAD
        // axios.get(`/api/suppliers?page=${e.page}`,{params:{'per_page': e.itemsPerPage}})
        //   axios.get(`/api/suppliers`)
        //     .then(res => this.suppliers = res.data.data.suppliers)
        //     .catch(err => console.dir(err.response))
        var sortBy = this.options.sortBy.length == 0 ? 'name' : this.options.sortBy[0];
        var orderBy = this.options.sortDesc.length > 0 || this.options.sortDesc[0] ? 'asc' : 'desc';
        axios.get("/api/suppliers?page=".concat(e.page), {
=======
        // axios.get(`/api/units?page=${e.page}`,{params:{'per_page': e.itemsPerPage}})
        //   axios.get(`/api/units`)
        //     .then(res => this.units = res.data.data.units)
        //     .catch(err => console.dir(err.response))
        var sortBy = this.options.sortBy.length == 0 ? 'actual_name' : this.options.sortBy[0];
        var orderBy = this.options.sortDesc.length > 0 || this.options.sortDesc[0] ? 'asc' : 'desc';
        axios.get("/api/units?page=".concat(e.page), {
>>>>>>> 3037ab0c41de01835fe07f3d4bdc1e752e6e73c7
          params: {
            'per_page': e.itemsPerPage,
            'sort_by': sortBy,
            'order_by': orderBy
          }
        }).then(function (res) {
<<<<<<< HEAD
          _this2.suppliers = res.data.suppliers;
=======
          _this.units = res.data.units;
>>>>>>> 3037ab0c41de01835fe07f3d4bdc1e752e6e73c7
        })["catch"](function (err) {
          return console.dir(err.response);
        });
      }
    },
    paginate: function paginate(e) {
<<<<<<< HEAD
      var _this3 = this;

      var sortBy = this.options.sortBy.length == 0 ? 'name' : this.options.sortBy[0];
      var orderBy = this.options.sortDesc.length > 0 || this.options.sortDesc[0] ? 'asc' : 'desc';
      axios.get("/api/suppliers?page=".concat(e.page), {
=======
      var _this2 = this;

      var sortBy = this.options.sortBy.length == 0 ? 'actual_name' : this.options.sortBy[0];
      var orderBy = this.options.sortDesc.length > 0 || this.options.sortDesc[0] ? 'asc' : 'desc';
      axios.get("/api/units?page=".concat(e.page), {
>>>>>>> 3037ab0c41de01835fe07f3d4bdc1e752e6e73c7
        params: {
          'per_page': e.itemsPerPage,
          'sort_by': sortBy,
          'order_by': orderBy
        }
      }).then(function (res) {
<<<<<<< HEAD
        _this3.suppliers = res.data.suppliers;
=======
        _this2.units = res.data.units;
>>>>>>> 3037ab0c41de01835fe07f3d4bdc1e752e6e73c7
      })["catch"](function (err) {//----
      });
    },
    initialize: function initialize() {
<<<<<<< HEAD
      var _this4 = this;

      // Add a request interceptor
      axios.interceptors.request.use(function (config) {
        _this4.loading = true;
        return config;
      }, function (error) {
        _this4.loading = false;
=======
      var _this3 = this;

      // Add a request interceptor
      axios.interceptors.request.use(function (config) {
        _this3.loading = true;
        return config;
      }, function (error) {
        _this3.loading = false;
>>>>>>> 3037ab0c41de01835fe07f3d4bdc1e752e6e73c7
        return Promise.reject(error);
      }); // Add a response interceptor

      axios.interceptors.response.use(function (response) {
<<<<<<< HEAD
        _this4.loading = false;
        return response;
      }, function (error) {
        _this4.loading = false;
=======
        _this3.loading = false;
        return response;
      }, function (error) {
        _this3.loading = false;
>>>>>>> 3037ab0c41de01835fe07f3d4bdc1e752e6e73c7
        return Promise.reject(error);
      });
    },
    editItem: function editItem(item) {
<<<<<<< HEAD
      this.editedIndex = this.suppliers.data.indexOf(item);
=======
      this.editedIndex = this.units.data.indexOf(item);
>>>>>>> 3037ab0c41de01835fe07f3d4bdc1e752e6e73c7
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },
    deleteItem: function deleteItem(item) {
<<<<<<< HEAD
      var _this5 = this;

      var index = this.suppliers.data.indexOf(item);
      var decide = confirm('Are you sure you want to delete this item?');

      if (decide) {
        axios["delete"]('/api/suppliers/' + item.id).then(function (res) {
          _this5.snackbar = true;

          _this5.suppliers.data.splice(index, 1);
        })["catch"](function (err) {
          console.log(err.response);
          _this5.text = "Error Deleting Record";
          _this5.snackbar = true;
=======
      var _this4 = this;

      var index = this.units.data.indexOf(item);
      var decide = confirm('Are you sure you want to delete this item?');

      if (decide) {
        axios["delete"]('/api/units/' + item.id).then(function (res) {
          _this4.snackbar = true;

          _this4.units.data.splice(index, 1);
        })["catch"](function (err) {
          console.log(err.response);
          _this4.text = "Error Deleting Record";
          _this4.snackbar = true;
>>>>>>> 3037ab0c41de01835fe07f3d4bdc1e752e6e73c7
        });
      }
    },
    close: function close() {
<<<<<<< HEAD
      var _this6 = this;

      this.dialog = false;
      setTimeout(function () {
        _this6.editedItem = Object.assign({}, _this6.defaultItem);
        _this6.editedIndex = -1;
      }, 300);
    },
    save: function save() {
      var _this7 = this;

      if (this.editedIndex > -1) {
        var index = this.editedIndex;
        axios.put('/api/suppliers/' + this.editedItem.id, this.editedItem) //  .then(res => Object.assign(this.suppliers[this.editedIndex], this.editedItem))
        .then(function (res) {
          console.log(res);
          _this7.text = "Record Updated Successfully!";
          _this7.snackbar = true;
          Object.assign(_this7.suppliers.data[index], res.data.supplier);
        })["catch"](function (err) {
          console.log(err.response);
          _this7.text = "Error Updating Record";
          _this7.snackbar = true;
        }); //  Object.assign(this.suppliers.data[this.editedIndex], this.editedItem)
      } else {
        axios.post('/api/suppliers', this.editedItem).then(function (res) {
          _this7.text = "Record Added Successfully!";
          _this7.snackbar = true;

          _this7.suppliers.data.push(res.data.supplier);
        })["catch"](function (err) {
          console.dir(err);
          _this7.text = "Error Inserting Record";
          _this7.snackbar = true;
=======
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
        axios.put('/api/units/' + this.editedItem.id, this.editedItem) //  .then(res => Object.assign(this.units[this.editedIndex], this.editedItem))
        .then(function (res) {
          console.log(res);
          _this6.text = "Record Updated Successfully!";
          _this6.snackbar = true;
          Object.assign(_this6.units.data[index], res.data.unit);
        })["catch"](function (err) {
          console.log(err.response);
          _this6.text = "Error Updating Record";
          _this6.snackbar = true;
        }); //  Object.assign(this.units.data[this.editedIndex], this.editedItem)
      } else {
        axios.post('/api/units', this.editedItem).then(function (res) {
          _this6.text = "Record Added Successfully!";
          _this6.snackbar = true;

          _this6.units.data.push(res.data.unit);
        })["catch"](function (err) {
          console.dir(err);
          _this6.text = "Error Inserting Record";
          _this6.snackbar = true;
>>>>>>> 3037ab0c41de01835fe07f3d4bdc1e752e6e73c7
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

<<<<<<< HEAD
/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/Suppliers.vue?vue&type=template&id=d4f48dd0&":
/*!********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/Suppliers.vue?vue&type=template&id=d4f48dd0& ***!
  \********************************************************************************************************************************************************************************************************************************************************************/
=======
/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/Units.vue?vue&type=template&id=0526c0e0&":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/Units.vue?vue&type=template&id=0526c0e0& ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
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
          items: _vm.suppliers.data,
=======
          items: _vm.units.data,
>>>>>>> 3037ab0c41de01835fe07f3d4bdc1e752e6e73c7
          "items-per-page": 5,
          "item-key": "id",
          loading: _vm.loading,
          options: _vm.options,
<<<<<<< HEAD
          "server-items-length": _vm.suppliers.total,
=======
          "server-items-length": _vm.units.total,
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
                    _c("v-toolbar-title", [_vm._v("Supplier Management")]),
=======
                    _c("v-toolbar-title", { staticClass: "text-primary" }, [
                      _vm._v("Unit Management")
                    ]),
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
<<<<<<< HEAD
                                  [_vm._v("New Supplier")]
=======
                                  [_vm._v("New Unit")]
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
                                              {
                                                attrs: {
                                                  cols: "12",
                                                  md: "6",
                                                  lg: "6"
                                                }
                                              },
                                              [
                                                _c("v-text-field", {
                                                  attrs: {
                                                    label: "Name",
<<<<<<< HEAD
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
                                                _c("v-text-field", {
                                                  attrs: {
                                                    label: "Company",
                                                    rules: [
                                                      _vm.rules.required,
                                                      _vm.rules.min
                                                    ]
                                                  },
                                                  model: {
                                                    value:
                                                      _vm.editedItem
                                                        .company_name,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        _vm.editedItem,
                                                        "company_name",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "editedItem.company_name"
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
                                                  attrs: { label: "Whatsapp" },
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
                                                  md: "6",
                                                  lg: "6"
                                                }
                                              },
                                              [
                                                _vm.editedIndex === -1
                                                  ? _c("v-text-field", {
                                                      attrs: {
                                                        label: "Opening Balance"
                                                      },
                                                      model: {
                                                        value:
                                                          _vm.editedItem
                                                            .opening_balance,
                                                        callback: function(
                                                          $$v
                                                        ) {
                                                          _vm.$set(
                                                            _vm.editedItem,
                                                            "opening_balance",
                                                            $$v
                                                          )
                                                        },
                                                        expression:
                                                          "editedItem.opening_balance"
                                                      }
                                                    })
                                                  : _vm._e(),
                                                _vm._v(" "),
                                                _c("v-text-field", {
                                                  attrs: {
                                                    label: "Credit limit"
=======
                                                    rules: [_vm.rules.required]
>>>>>>> 3037ab0c41de01835fe07f3d4bdc1e752e6e73c7
                                                  },
                                                  model: {
                                                    value:
                                                      _vm.editedItem
<<<<<<< HEAD
                                                        .credit_limit,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        _vm.editedItem,
                                                        "credit_limit",
=======
                                                        .actual_name,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        _vm.editedItem,
                                                        "actual_name",
>>>>>>> 3037ab0c41de01835fe07f3d4bdc1e752e6e73c7
                                                        $$v
                                                      )
                                                    },
                                                    expression:
<<<<<<< HEAD
                                                      "editedItem.credit_limit"
=======
                                                      "editedItem.actual_name"
>>>>>>> 3037ab0c41de01835fe07f3d4bdc1e752e6e73c7
                                                  }
                                                }),
                                                _vm._v(" "),
                                                _c("v-text-field", {
                                                  attrs: {
<<<<<<< HEAD
                                                    items: _vm.types,
                                                    label: "Role",
=======
                                                    label: "Short name",
>>>>>>> 3037ab0c41de01835fe07f3d4bdc1e752e6e73c7
                                                    rules: [_vm.rules.required]
                                                  },
                                                  model: {
                                                    value:
                                                      _vm.editedItem.short_name,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        _vm.editedItem,
                                                        "short_name",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "editedItem.short_name"
                                                  }
                                                }),
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

<<<<<<< HEAD
/***/ "./resources/js/views/admin/Suppliers.vue":
/*!************************************************!*\
  !*** ./resources/js/views/admin/Suppliers.vue ***!
  \************************************************/
=======
/***/ "./resources/js/views/admin/Units.vue":
/*!********************************************!*\
  !*** ./resources/js/views/admin/Units.vue ***!
  \********************************************/
>>>>>>> 3037ab0c41de01835fe07f3d4bdc1e752e6e73c7
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _Suppliers_vue_vue_type_template_id_d4f48dd0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Suppliers.vue?vue&type=template&id=d4f48dd0& */ "./resources/js/views/admin/Suppliers.vue?vue&type=template&id=d4f48dd0&");
/* harmony import */ var _Suppliers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Suppliers.vue?vue&type=script&lang=js& */ "./resources/js/views/admin/Suppliers.vue?vue&type=script&lang=js&");
=======
/* harmony import */ var _Units_vue_vue_type_template_id_0526c0e0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Units.vue?vue&type=template&id=0526c0e0& */ "./resources/js/views/admin/Units.vue?vue&type=template&id=0526c0e0&");
/* harmony import */ var _Units_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Units.vue?vue&type=script&lang=js& */ "./resources/js/views/admin/Units.vue?vue&type=script&lang=js&");
>>>>>>> 3037ab0c41de01835fe07f3d4bdc1e752e6e73c7
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
<<<<<<< HEAD
  _Suppliers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Suppliers_vue_vue_type_template_id_d4f48dd0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Suppliers_vue_vue_type_template_id_d4f48dd0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
=======
  _Units_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Units_vue_vue_type_template_id_0526c0e0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Units_vue_vue_type_template_id_0526c0e0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
>>>>>>> 3037ab0c41de01835fe07f3d4bdc1e752e6e73c7
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */























_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__["VBtn"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCard"],VCardActions: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardActions"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardText"],VCardTitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardTitle"],VCheckbox: vuetify_lib_components_VCheckbox__WEBPACK_IMPORTED_MODULE_6__["VCheckbox"],VChip: vuetify_lib_components_VChip__WEBPACK_IMPORTED_MODULE_7__["VChip"],VCol: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_8__["VCol"],VContainer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_8__["VContainer"],VDataTable: vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_9__["VDataTable"],VDialog: vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_10__["VDialog"],VDivider: vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_11__["VDivider"],VEditDialog: vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_9__["VEditDialog"],VForm: vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_12__["VForm"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_13__["VIcon"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_8__["VRow"],VSelect: vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_14__["VSelect"],VSnackbar: vuetify_lib_components_VSnackbar__WEBPACK_IMPORTED_MODULE_15__["VSnackbar"],VSpacer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_8__["VSpacer"],VTextField: vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_16__["VTextField"],VToolbar: vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_17__["VToolbar"],VToolbarTitle: vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_17__["VToolbarTitle"]})


/* hot reload */
if (false) { var api; }
<<<<<<< HEAD
component.options.__file = "resources/js/views/admin/Suppliers.vue"
=======
component.options.__file = "resources/js/views/admin/Units.vue"
>>>>>>> 3037ab0c41de01835fe07f3d4bdc1e752e6e73c7
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

<<<<<<< HEAD
/***/ "./resources/js/views/admin/Suppliers.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/views/admin/Suppliers.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
=======
/***/ "./resources/js/views/admin/Units.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/views/admin/Units.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
>>>>>>> 3037ab0c41de01835fe07f3d4bdc1e752e6e73c7
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Suppliers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Suppliers.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/Suppliers.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Suppliers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/admin/Suppliers.vue?vue&type=template&id=d4f48dd0&":
/*!*******************************************************************************!*\
  !*** ./resources/js/views/admin/Suppliers.vue?vue&type=template&id=d4f48dd0& ***!
  \*******************************************************************************/
=======
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Units_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Units.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/Units.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Units_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/admin/Units.vue?vue&type=template&id=0526c0e0&":
/*!***************************************************************************!*\
  !*** ./resources/js/views/admin/Units.vue?vue&type=template&id=0526c0e0& ***!
  \***************************************************************************/
>>>>>>> 3037ab0c41de01835fe07f3d4bdc1e752e6e73c7
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Suppliers_vue_vue_type_template_id_d4f48dd0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Suppliers.vue?vue&type=template&id=d4f48dd0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/Suppliers.vue?vue&type=template&id=d4f48dd0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Suppliers_vue_vue_type_template_id_d4f48dd0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Suppliers_vue_vue_type_template_id_d4f48dd0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });
=======
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Units_vue_vue_type_template_id_0526c0e0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vuetify-loader/lib/loader.js??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Units.vue?vue&type=template&id=0526c0e0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/Units.vue?vue&type=template&id=0526c0e0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Units_vue_vue_type_template_id_0526c0e0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Units_vue_vue_type_template_id_0526c0e0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });
>>>>>>> 3037ab0c41de01835fe07f3d4bdc1e752e6e73c7



/***/ })

}]);