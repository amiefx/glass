(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{103:function(t,e,a){var n=a(198);"string"==typeof n&&(n=[[t.i,n,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};a(8)(n,s);n.locals&&(t.exports=n.locals)},197:function(t,e,a){"use strict";a(103)},198:function(t,e,a){(t.exports=a(7)(!1)).push([t.i,".tb{justify-content:left}",""])},353:function(t,e,a){"use strict";a.r(e);var n={layout:"admin",middleware:["auth","admin"],data:function(){return{cash:null,bank:null,valid:!0,snackbar:!1,text:"",rules:{required:function(t){return!!t||"This Field is Required"},min:function(t){return t.length>=5||"Minimum 5 Chracters Required"},validEmail:function(t){return/.+@.+\..+/.test(t)||"Email must be valid"}},openbl:{doc_type:"opening balance",pmt_method:"",amount:"",details:"",notes:""},transfer:{doc_type:"transfer",pmt_method:"",amount:"",details:"",notes:""},invest:{doc_type:"investment",pmt_method:"",amount:"",details:"",notes:""},withdraw:{doc_type:"withdrawal",pmt_method:"",amount:"",details:"",notes:""}}},created:function(){this.getData()},methods:{getData:function(){var t=this;axios.get("/api/cashes/balance").then((function(e){t.cash=e.data.balance})),axios.get("/api/banks/balance").then((function(e){t.bank=e.data.balance}))},saveOpenbl:function(){var t=this;axios.post("/api/cashes/openbl",this.openbl).then((function(e){t.text="Balance added successfully.",t.snackbar=!0,t.openbl="",t.getData()}))},saveInvest:function(){var t=this;axios.post("/api/cashes/openbl",this.invest).then((function(e){t.text="Balance added successfully.",t.snackbar=!0,t.invest="",t.getData()}))},saveWithdraw:function(){var t=this;axios.post("/api/cashes/withdraw",this.withdraw).then((function(e){t.text="Balance withdrawn successfully.",t.snackbar=!0,t.withdraw="",t.getData()}))},saveTransfer:function(){var t=this;axios.post("/api/cashes/transfer",this.transfer).then((function(e){t.text="Balance transfered successfully.",t.snackbar=!0,t.transfer="",t.getData()}))}}},s=(a(197),a(4)),l=a(5),o=a.n(l),r=a(333),i=a(72),v=a(86),c=a(1),d=a(322),u=a(324),m=a(67),p=a(329),b=a(330),f=a(323),h=a(325),_=a(383),x=a(381),w=a(332),k=a(331),y=a(45),C=Object(s.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-row",[a("v-col",{attrs:{cols:"6"}},[a("v-alert",{attrs:{text:"",prominent:"",color:"success",icon:"mdi-cash-multiple"}},[a("h3",[t._v(t._s(t.cash))]),t._v("\n        Cash on hand Balance\n      ")])],1),t._v(" "),a("v-col",{attrs:{cols:"6"}},[a("v-alert",{attrs:{text:"",prominent:"",color:"success",icon:"mdi-bank"}},[a("h3",[t._v(t._s(t.bank))]),t._v("\n        Bank Account Balance\n      ")])],1)],1),t._v(" "),a("v-row",[a("v-tabs",{staticClass:"text-left",attrs:{vertical:""}},[a("v-tab",{staticClass:"tb"},[a("v-icon",{attrs:{left:""}},[t._v(" mdi-file-document-outline ")]),t._v("\n        Opening Balance\n      ")],1),t._v(" "),a("v-tab",{staticClass:"tb"},[a("v-icon",{attrs:{left:""}},[t._v(" mdi-note-text-outline ")]),t._v("\n        Investment\n      ")],1),t._v(" "),a("v-tab",{staticClass:"tb"},[a("v-icon",{attrs:{left:""}},[t._v(" mdi-cash-multiple ")]),t._v("\n        Withdrawal\n      ")],1),t._v(" "),a("v-tab",{staticClass:"tb"},[a("v-icon",{attrs:{left:""}},[t._v(" mdi-cash-plus ")]),t._v("\n        Transfer\n      ")],1),t._v(" "),a("v-tab-item",[a("v-card",{attrs:{flat:""}},[a("h3",{staticClass:"text-center"},[t._v("Opening Balance")]),t._v(" "),a("v-form",{attrs:{method:"post"},on:{submit:function(e){return e.stopPropagation(),e.preventDefault(),t.save(e)}},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[a("v-card-text",[a("v-alert",{attrs:{text:"",prominent:"",color:"warning"}},[t._v("\n                Use this form once for recording opening balance. for\n                investing new balance use investment tab.\n              ")]),t._v(" "),a("v-row",[a("v-col",{staticClass:"py-0",attrs:{cols:"12"}},[a("v-radio-group",{attrs:{mandatory:"",dense:"",row:""},model:{value:t.openbl.pmt_method,callback:function(e){t.$set(t.openbl,"pmt_method",e)},expression:"openbl.pmt_method"}},[a("v-radio",{attrs:{label:"Cash",value:"Cash"}}),t._v(" "),a("v-radio",{attrs:{label:"Bank",value:"Bank"}})],1),t._v(" "),a("v-text-field",{attrs:{dense:"",type:"number",label:"Amount",rules:[t.rules.required]},model:{value:t.openbl.amount,callback:function(e){t.$set(t.openbl,"amount",e)},expression:"openbl.amount"}}),t._v(" "),"Bank"==t.openbl.pmt_method?a("div",[a("v-text-field",{attrs:{dense:"",label:"Details"},model:{value:t.openbl.details,callback:function(e){t.$set(t.openbl,"details",e)},expression:"openbl.details"}}),t._v(" "),a("v-text-field",{attrs:{dense:"",label:"Notes"},model:{value:t.openbl.notes,callback:function(e){t.$set(t.openbl,"notes",e)},expression:"openbl.notes"}})],1):t._e()],1)],1)],1),t._v(" "),a("v-card-actions",[a("v-spacer"),t._v(" "),a("v-btn",{attrs:{color:"primary",type:"submit",disabled:!t.valid},on:{click:function(e){return e.preventDefault(),t.saveOpenbl(e)}}},[t._v("Save")])],1)],1)],1)],1),t._v(" "),a("v-tab-item",[a("v-card",{attrs:{flat:""}},[a("v-form",{attrs:{method:"post"},on:{submit:function(e){return e.stopPropagation(),e.preventDefault(),t.save(e)}},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[a("v-card-text",[a("h3",{staticClass:"text-center"},[t._v("Investment")]),t._v(" "),a("v-row",[a("v-col",{staticClass:"py-0",attrs:{cols:"12"}},[a("v-radio-group",{attrs:{mandatory:"",dense:"",row:""},model:{value:t.invest.pmt_method,callback:function(e){t.$set(t.invest,"pmt_method",e)},expression:"invest.pmt_method"}},[a("v-radio",{attrs:{label:"Cash",value:"Cash"}}),t._v(" "),a("v-radio",{attrs:{label:"Bank",value:"Bank"}})],1),t._v(" "),a("v-text-field",{attrs:{dense:"",type:"number",label:"Amount",rules:[t.rules.required]},model:{value:t.invest.amount,callback:function(e){t.$set(t.invest,"amount",e)},expression:"invest.amount"}}),t._v(" "),"Bank"==t.invest.pmt_method?a("div",[a("v-text-field",{attrs:{dense:"",label:"Details"},model:{value:t.invest.details,callback:function(e){t.$set(t.invest,"details",e)},expression:"invest.details"}}),t._v(" "),a("v-text-field",{attrs:{dense:"",label:"Notes"},model:{value:t.invest.notes,callback:function(e){t.$set(t.invest,"notes",e)},expression:"invest.notes"}})],1):t._e()],1)],1)],1),t._v(" "),a("v-card-actions",[a("v-spacer"),t._v(" "),a("v-btn",{attrs:{color:"primary",type:"submit",disabled:!t.valid},on:{click:function(e){return e.preventDefault(),t.saveInvest(e)}}},[t._v("Save")])],1)],1)],1)],1),t._v(" "),a("v-tab-item",[a("v-card",{attrs:{flat:""}},[a("v-form",{attrs:{method:"post"},on:{submit:function(e){return e.stopPropagation(),e.preventDefault(),t.save(e)}},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[a("v-card-text",[a("h3",{staticClass:"text-center"},[t._v("Withdrawal")]),t._v(" "),a("v-row",[a("v-col",{staticClass:"py-0",attrs:{cols:"12"}},[a("v-radio-group",{attrs:{mandatory:"",dense:"",row:""},model:{value:t.withdraw.pmt_method,callback:function(e){t.$set(t.withdraw,"pmt_method",e)},expression:"withdraw.pmt_method"}},[a("v-radio",{attrs:{label:"Cash",value:"Cash"}}),t._v(" "),a("v-radio",{attrs:{label:"Bank",value:"Bank"}})],1),t._v(" "),a("v-text-field",{attrs:{dense:"",type:"number",label:"Amount",rules:[t.rules.required]},model:{value:t.withdraw.amount,callback:function(e){t.$set(t.withdraw,"amount",e)},expression:"withdraw.amount"}}),t._v(" "),"Bank"==t.withdraw.pmt_method?a("div",[a("v-text-field",{attrs:{dense:"",label:"Details"},model:{value:t.withdraw.details,callback:function(e){t.$set(t.withdraw,"details",e)},expression:"withdraw.details"}}),t._v(" "),a("v-text-field",{attrs:{dense:"",label:"Notes"},model:{value:t.withdraw.notes,callback:function(e){t.$set(t.withdraw,"notes",e)},expression:"withdraw.notes"}})],1):t._e()],1)],1)],1),t._v(" "),a("v-card-actions",[a("v-spacer"),t._v(" "),a("v-btn",{attrs:{color:"primary",type:"submit",disabled:!t.valid},on:{click:function(e){return e.preventDefault(),t.saveWithdraw(e)}}},[t._v("Save")])],1)],1)],1)],1),t._v(" "),a("v-tab-item",[a("v-card",{attrs:{flat:""}},[a("h3",{staticClass:"text-center"},[t._v("Transfer Balance")]),t._v(" "),a("v-form",{attrs:{method:"post"},on:{submit:function(e){return e.stopPropagation(),e.preventDefault(),t.save(e)}},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[a("v-card-text",[a("v-row",[a("v-col",{staticClass:"py-0",attrs:{cols:"12"}},[a("v-radio-group",{attrs:{dense:"",mandatory:"",row:""},model:{value:t.transfer.pmt_method,callback:function(e){t.$set(t.transfer,"pmt_method",e)},expression:"transfer.pmt_method"}},[a("v-radio",{attrs:{label:"Cash to Bank",value:"Cash"}}),t._v(" "),a("v-radio",{attrs:{label:"Bank to Cash",value:"Bank"}})],1),t._v(" "),a("v-text-field",{attrs:{dense:"",type:"number",label:"Amount",rules:[t.rules.required]},model:{value:t.transfer.amount,callback:function(e){t.$set(t.transfer,"amount",e)},expression:"transfer.amount"}}),t._v(" "),"Bank"==t.transfer.pmt_method?a("div",[a("v-text-field",{attrs:{dense:"",label:"Details"},model:{value:t.transfer.details,callback:function(e){t.$set(t.transfer,"details",e)},expression:"transfer.details"}}),t._v(" "),a("v-text-field",{attrs:{dense:"",label:"Notes"},model:{value:t.transfer.notes,callback:function(e){t.$set(t.transfer,"notes",e)},expression:"transfer.notes"}})],1):t._e()],1)],1)],1),t._v(" "),a("v-card-actions",[a("v-spacer"),t._v(" "),a("v-btn",{attrs:{color:"primary",type:"submit",disabled:!t.valid},on:{click:function(e){return e.preventDefault(),t.saveTransfer(e)}}},[t._v("Save")])],1)],1)],1)],1)],1)],1),t._v(" "),a("v-snackbar",{model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("\n    "+t._s(t.text)+"\n    "),a("v-btn",{attrs:{color:"white",text:""},on:{click:function(e){t.snackbar=!1}}},[t._v(" Close ")])],1)],1)}),[],!1,null,null,null);e.default=C.exports;o()(C,{VAlert:r.a,VBtn:i.a,VCard:v.a,VCardActions:c.a,VCardText:c.b,VCol:d.a,VForm:u.a,VIcon:m.a,VRadio:p.a,VRadioGroup:b.a,VRow:f.a,VSnackbar:h.a,VSpacer:_.a,VTab:x.a,VTabItem:w.a,VTabs:k.a,VTextField:y.a})}}]);