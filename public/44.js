(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{352:function(t,e,a){"use strict";a.r(e);var n={layout:"admin",middleware:["auth","admin"],data:function(){return{valid:!0,dialog:!1,loading:!1,snackbar:!1,text:"",success:"",error:"",options:{sortBy:["id"],sortDesc:[!0]},rules:{required:function(t){return!!t||"This Field is Required"},min:function(t){return t.length>=5||"Minimum 5 Chracters Required"},validEmail:function(t){return/.+@.+\..+/.test(t)||"Email must be valid"}},headers:[{text:"#",value:"id"},{text:"Doc Type",value:"doc_type"},{text:"Doc ID",value:"doc_id"},{text:"Date",value:"created_at"},{text:"Customer",value:"customer_id"},{text:"Supplier",value:"supplier_id"},{text:"Employee",value:"employee_id"},{text:"Debit",value:"debit"},{text:"Credit",value:"credit"},{text:"User",value:"user_id"}],banks:[],balance:"",editedIndex:-1,editedItem:{id:"",name:"",short_code:""},defaultItem:{id:"",name:"",short_code:""}}},computed:{formTitle:function(){return-1===this.editedIndex?this.$t("new item"):this.$t("edit item")}},watch:{dialog:function(t){t||this.close()}},created:function(){var t=this;this.initialize(),axios.get("/api/banks/balance").then((function(e){t.balance=e.data.balance}))},methods:{updateStatus:function(t){var e=this,a=this.banks.data.indexOf(t);axios.post("/api/change-status",{status:t.is_active,bank:t.id}).then((function(t){e.text=t.data.bank.name+"'s Status Updated to "+t.data.bank.is_active,e.snackbar=!0})).catch((function(t){e.banks.data[a].is_active=t.response.data.bank.is_active,e.snackbar=!0,console.dir(t.response)}))},searchIt:function(t){var e=this;if(t.length>0&&axios.get("/api/banks/".concat(t)).then((function(t){return e.banks=t.data.banks})).catch((function(t){return console.dir(t.response)})),t.length<=0){var a=0==this.options.sortBy.length?"id":this.options.sortBy[0],n=this.options.sortDesc.length>0||this.options.sortDesc[0]?"asc":"desc";axios.get("/api/banks?page=".concat(t.page),{params:{per_page:t.itemsPerPage,sort_by:a,order_by:n}}).then((function(t){e.banks=t.data.banks})).catch((function(t){return console.dir(t.response)}))}},paginate:function(t){var e=this,a=0==this.options.sortBy.length?"id":this.options.sortBy[0],n=this.options.sortDesc.length>0||this.options.sortDesc[0]?"asc":"desc";axios.get("/api/banks?page=".concat(t.page),{params:{per_page:t.itemsPerPage,sort_by:a,order_by:n}}).then((function(t){e.banks=t.data.banks})).catch((function(t){}))},initialize:function(){var t=this;axios.interceptors.request.use((function(e){return t.loading=!0,e}),(function(e){return t.loading=!1,Promise.reject(e)})),axios.interceptors.response.use((function(e){return t.loading=!1,e}),(function(e){return t.loading=!1,Promise.reject(e)}))},editItem:function(t){this.editedIndex=this.banks.data.indexOf(t),this.editedItem=Object.assign({},t),this.dialog=!0},deleteItem:function(t){var e=this,a=this.banks.data.indexOf(t);confirm("Are you sure you want to delete this item?")&&axios.delete("/api/banks/"+t.id).then((function(t){e.snackbar=!0,e.banks.data.splice(a,1)})).catch((function(t){console.log(t.response),e.text="Error Deleting Record",e.snackbar=!0}))},close:function(){var t=this;this.dialog=!1,setTimeout((function(){t.editedItem=Object.assign({},t.defaultItem),t.editedIndex=-1}),300)},save:function(){var t=this;if(this.editedIndex>-1){var e=this.editedIndex;axios.put("/api/banks/"+this.editedItem.id,this.editedItem).then((function(a){console.log(a),t.text="Record Updated Successfully!",t.snackbar=!0,Object.assign(t.banks.data[e],a.data.bank)})).catch((function(e){console.log(e.response),t.text="Error Updating Record",t.snackbar=!0}))}else axios.post("/api/banks",this.editedItem).then((function(e){t.text="Record Added Successfully!",t.snackbar=!0,t.banks.data.push(e.data.bank)})).catch((function(e){console.dir(e),t.text="Error Inserting Record",t.snackbar=!0}));this.close()},getColor:function(t){return 0==t?"red":"green"}}},i=a(4),s=a(5),o=a.n(s),r=a(72),c=a(86),d=a(1),l=a(91),u=a(322),v=a(384),p=a(341),m=a(327),b=a(88),h=a(326),f=a(324),k=a(67),_=a(323),g=a(26),x=a(325),y=a(383),I=a(45),V=a(36),C=a(15),D=Object(i.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-data-table",{staticClass:"elevation-1",attrs:{dense:"",headers:t.headers,items:t.banks.data,"items-per-page":15,"item-key":"id",loading:t.loading,options:t.options,"server-items-length":t.banks.total,"loading-text":"Loading.. Please Wait!","footer-props":{itemsPerPageOptions:[5,10,15],"show-current-page":!0,"show-first-last-page":!0}},on:{pagination:t.paginate,"update:options":function(e){t.options=e}},scopedSlots:t._u([{key:"top",fn:function(){return[a("v-toolbar",{attrs:{flat:"",color:""}},[a("v-toolbar-title",{staticClass:"text-primary"},[t._v(" "+t._s(t.$t("bank Account")))]),t._v(" "),a("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),t._v(" "),a("v-spacer"),t._v(" "),a("v-toolbar-title",{staticClass:"bg-success"},[t._v(" Balance: "+t._s(t.balance))]),t._v(" "),a("v-dialog",{attrs:{"max-width":"500px"},scopedSlots:t._u([{key:"activator",fn:function(t){t.on}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t._v(" "),a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[t._v(t._s(t.formTitle))])]),t._v(" "),a("v-form",{attrs:{method:"post"},on:{submit:function(e){return e.stopPropagation(),e.preventDefault(),t.save(e)}},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[a("v-card-text",[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{attrs:{label:t.$t("name"),rules:[t.rules.required]},model:{value:t.editedItem.name,callback:function(e){t.$set(t.editedItem,"name",e)},expression:"editedItem.name"}}),t._v(" "),a("v-text-field",{attrs:{label:t.$t("short code")},model:{value:t.editedItem.short_code,callback:function(e){t.$set(t.editedItem,"short_code",e)},expression:"editedItem.short_code"}})],1)],1)],1)],1),t._v(" "),a("v-card-actions",[a("v-spacer"),t._v(" "),a("v-btn",{attrs:{color:"primary",text:""},on:{click:t.close}},[t._v(t._s(t.$t("cancel")))]),t._v(" "),a("v-btn",{attrs:{color:"primary",type:"submit",disabled:!t.valid},on:{click:function(e){return e.preventDefault(),t.save(e)}}},[t._v(t._s(t.$t("save")))])],1)],1)],1)],1)],1),t._v(" "),a("v-text-field",{staticClass:"mx-4",attrs:{"append-icon":"mdi-search",label:"Search","single-line":"","hide-details":""},on:{input:t.searchIt}})]},proxy:!0},{key:"item.action",fn:function(e){var n=e.item;return[a("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(e){return t.editItem(n)}}},[t._v("\n        mdi-pencil\n      ")]),t._v(" "),a("v-icon",{attrs:{small:""},on:{click:function(e){return t.deleteItem(n)}}},[t._v("\n        mdi-delete\n      ")])]}},{key:"no-data",fn:function(){return[a("v-btn",{attrs:{color:"primary"},on:{click:t.initialize}},[t._v("Reset")])]},proxy:!0},{key:"item.is_active",fn:function(e){var n=e.item;return[a("v-edit-dialog",{attrs:{large:"",block:"",persistent:"","return-value":n.is_active},on:{"update:returnValue":function(e){return t.$set(n,"is_active",e)},"update:return-value":function(e){return t.$set(n,"is_active",e)},save:function(e){return t.updateStatus(n)}},scopedSlots:t._u([{key:"input",fn:function(){return[a("v-select",{attrs:{items:t.status,"item-text":t.status.text,"item-value":t.status.value,label:"Select Status"},model:{value:n.is_active,callback:function(e){t.$set(n,"is_active",e)},expression:"item.is_active"}})]},proxy:!0}],null,!0)},[a("v-chip",{attrs:{color:t.getColor(n.is_active),dark:""}},[1==n.is_active?a("span",[t._v("Active")]):a("span",[t._v("In Active")])])],1)]}}])}),t._v(" "),a("v-snackbar",{model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("\n      "+t._s(t.text)+"\n      "),a("v-btn",{attrs:{color:"white",text:""},on:{click:function(e){t.snackbar=!1}}},[t._v("\n          Close\n      ")])],1)],1)}),[],!1,null,null,null);e.default=D.exports;o()(D,{VBtn:r.a,VCard:c.a,VCardActions:d.a,VCardText:d.b,VCardTitle:d.c,VChip:l.a,VCol:u.a,VContainer:v.a,VDataTable:p.a,VDialog:m.a,VDivider:b.a,VEditDialog:h.a,VForm:f.a,VIcon:k.a,VRow:_.a,VSelect:g.a,VSnackbar:x.a,VSpacer:y.a,VTextField:I.a,VToolbar:V.a,VToolbarTitle:C.a})}}]);