(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{360:function(e,t,s){"use strict";s.r(t);var a={layout:"admin",middleware:["auth","admin"],data:function(){return{valid:!0,dialog:!1,loading:!1,snackbar:!1,text:"",roles:["Admin","Accountant"],success:"",error:"",options:{sortBy:["name"],sortDesc:[!0]},rules:{required:function(e){return!!e||"This Field is Required"},min:function(e){return e.length>=5||"Minimum 5 Chracters Required"},validEmail:function(e){return/.+@.+\..+/.test(e)||"Email must be valid"}},headers:[{text:"#",value:"id"},{text:"Name",value:"name"},{text:"Email",value:"email"},{text:"Contact",value:"contact_no"},{text:"Role",value:"type"},{text:"Status",value:"is_active"},{text:"Actions",value:"action",sortable:!1}],status:[{text:"Active",value:!0},{text:"In Active",value:!1}],users:[],editedIndex:-1,editedItem:{id:"",name:"",email:"",contact_no:"",type:"",is_active:"",created_at:""},defaultItem:{id:"",name:"",email:"",contact_no:"",type:"",is_active:"",password:"",rpassword:"",created_at:""}}},computed:{formTitle:function(){return-1===this.editedIndex?"New Item":"Edit Item"},passwordMatch:function(){return this.editedItem.password==this.editedItem.rpassword||"Password does Not Match"}},watch:{dialog:function(e){e||this.close()}},created:function(){this.initialize()},methods:{updateRole:function(e){var t=this,s=this.users.data.indexOf(e);axios.post("/api/change-role",{role:e.type,user:e.id}).then((function(e){t.text=e.data.user.name+"'s Role Updated to "+e.data.user.type,t.snackbar=!0})).catch((function(e){t.users[s].type=e.response.user.type,t.snackbar=!0,console.dir(e.response)}))},updateStatus:function(e){var t=this,s=this.users.data.indexOf(e);axios.post("/api/change-status",{status:e.is_active,user:e.id}).then((function(e){t.text=e.data.user.name+"'s Status Updated to "+e.data.user.is_active,t.snackbar=!0})).catch((function(e){t.users.data[s].type=e.response.data.user.type,t.snackbar=!0,console.dir(e.response)}))},checkEmail:function(){var e=this;/.+@.+\..+/.test(this.editedItem.email)&&axios.post("/api/email/verify",{email:this.editedItem.email}).then((function(t){e.success=t.data.message,e.error=""})).catch((function(t){e.success="",e.error="Email Already Exists"}))},selectAll:function(e){this.selected=[],e.length>0&&(this.selected=e.map((function(e){return e.id}))),console.dir(this.selected)},deleteAll:function(){var e=this;confirm("Are you sure you want to delete these items?")&&axios.post("/api/users/delete",{users:this.selected}).then((function(t){e.text="Rcords Deleted Successfully!",e.selected.map((function(t){var s=e.users.data.indexOf(t);e.users.data.splice(s,1)})),e.snackbar=!0})).catch((function(t){console.log(t.response),e.text="Error Deleting Record",e.snackbar=!0}))},searchIt:function(e){var t=this;if(e.length>3&&axios.get("/api/users/".concat(e)).then((function(e){return t.users=e.data.users})).catch((function(e){return console.dir(e.response)})),e.length<=0){var s=0==this.options.sortBy.length?"name":this.options.sortBy[0],a=this.options.sortDesc.length>0||this.options.sortDesc[0]?"asc":"desc";axios.get("/api/users?page=".concat(e.page),{params:{per_page:e.itemsPerPage,sort_by:s,order_by:a}}).then((function(e){t.users=e.data.users})).catch((function(e){return console.dir(e.response)}))}},paginate:function(e){var t=this,s=0==this.options.sortBy.length?"name":this.options.sortBy[0],a=this.options.sortDesc.length>0||this.options.sortDesc[0]?"asc":"desc";axios.get("/api/users?page=".concat(e.page),{params:{per_page:e.itemsPerPage,sort_by:s,order_by:a}}).then((function(e){t.users=e.data.users})).catch((function(e){}))},initialize:function(){var e=this;axios.interceptors.request.use((function(t){return e.loading=!0,t}),(function(t){return e.loading=!1,Promise.reject(t)})),axios.interceptors.response.use((function(t){return e.loading=!1,t}),(function(t){return e.loading=!1,Promise.reject(t)}))},editItem:function(e){this.editedIndex=this.users.data.indexOf(e),this.editedItem=Object.assign({},e),this.dialog=!0},deleteItem:function(e){var t=this,s=this.users.data.indexOf(e);confirm("Are you sure you want to delete this item?")&&axios.delete("/api/users/"+e.id).then((function(e){t.snackbar=!0,t.users.data.splice(s,1)})).catch((function(e){console.log(e.response),t.text="Error Deleting Record",t.snackbar=!0}))},close:function(){var e=this;this.dialog=!1,setTimeout((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1}),300)},save:function(){var e=this;if(this.editedIndex>-1){var t=this.editedIndex;axios.put("/api/users/"+this.editedItem.id,this.editedItem).then((function(s){e.text="Record Updated Successfully!",e.snackbar=!0,Object.assign(e.users.data[t],s.data.user)})).catch((function(t){console.log(t.response),e.text="Error Updating Record",e.snackbar=!0}))}else axios.post("/api/users",this.editedItem).then((function(t){e.text="Record Added Successfully!",e.snackbar=!0,e.users.data.push(t.data.user)})).catch((function(t){console.dir(t),e.text="Error Inserting Record",e.snackbar=!0}));this.close()},getColor:function(e){return 0==e?"red":"green"}}},i=s(4),n=s(5),r=s.n(n),o=s(72),c=s(86),l=s(1),d=s(91),u=s(322),p=s(384),v=s(341),m=s(327),f=s(88),h=s(326),x=s(324),g=s(67),b=s(323),_=s(26),y=s(325),k=s(383),I=s(45),w=s(36),V=s(15),C=Object(i.a)(a,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.users.data,"items-per-page":5,"item-key":"id",loading:e.loading,options:e.options,"server-items-length":e.users.total,"loading-text":"Loading.. Please Wait!","footer-props":{itemsPerPageOptions:[5,10,15],"show-current-page":!0,"show-first-last-page":!0}},on:{pagination:e.paginate,"update:options":function(t){e.options=t},input:e.selectAll},scopedSlots:e._u([{key:"top",fn:function(){return[s("v-toolbar",{attrs:{flat:"",color:""}},[s("v-toolbar-title",[e._v("user Management")]),e._v(" "),s("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),e._v(" "),s("v-spacer"),e._v(" "),s("v-dialog",{attrs:{"max-width":"500px"},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on;return[s("v-btn",e._g({staticClass:"mb-2",attrs:{color:"primary",dark:""}},a),[e._v("New User")])]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[e._v(" "),s("v-card",[s("v-card-title",[s("span",{staticClass:"headline"},[e._v(e._s(e.formTitle))])]),e._v(" "),s("v-form",{attrs:{method:"post"},on:{submit:function(t){return t.stopPropagation(),t.preventDefault(),e.save(t)}},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[s("v-card-text",[s("v-container",[s("v-row",[s("v-col",{attrs:{cols:"12"}},[s("v-text-field",{attrs:{label:"User Name",rules:[e.rules.required,e.rules.min]},model:{value:e.editedItem.name,callback:function(t){e.$set(e.editedItem,"name",t)},expression:"editedItem.name"}}),e._v(" "),-1==e.editedIndex?s("v-text-field",{attrs:{label:"Email",rules:[e.rules.required,e.rules.validEmail],"success-message":e.success,"error-messages":e.error},on:{blur:e.checkEmail},model:{value:e.editedItem.email,callback:function(t){e.$set(e.editedItem,"email",t)},expression:"editedItem.email"}}):e._e(),e._v(" "),-1==e.editedIndex?s("v-text-field",{attrs:{type:"password",label:"Password",rules:[e.rules.required]},model:{value:e.editedItem.password,callback:function(t){e.$set(e.editedItem,"password",t)},expression:"editedItem.password"}}):e._e(),e._v(" "),-1==e.editedIndex?s("v-text-field",{attrs:{type:"password",label:"ReType Password",rules:[e.rules.required,e.passwordMatch]},model:{value:e.editedItem.rpassword,callback:function(t){e.$set(e.editedItem,"rpassword",t)},expression:"editedItem.rpassword"}}):e._e(),e._v(" "),s("v-text-field",{attrs:{label:"Contact No",rules:[e.rules.required]},model:{value:e.editedItem.contact_no,callback:function(t){e.$set(e.editedItem,"contact_no",t)},expression:"editedItem.contact_no"}}),e._v(" "),s("v-select",{attrs:{items:e.roles,label:"Select Role",rules:[e.rules.required]},model:{value:e.editedItem.type,callback:function(t){e.$set(e.editedItem,"type",t)},expression:"editedItem.type"}})],1)],1)],1)],1),e._v(" "),s("v-card-actions",[s("v-spacer"),e._v(" "),s("v-btn",{attrs:{color:"primary",text:""},on:{click:e.close}},[e._v("Cancel")]),e._v(" "),s("v-btn",{attrs:{color:"primary",type:"submit",disabled:!e.valid},on:{click:function(t){return t.preventDefault(),e.save(t)}}},[e._v("Save")])],1)],1)],1)],1)],1),e._v(" "),s("v-text-field",{staticClass:"mx-4",attrs:{"append-icon":"mdi-search",label:"Search","single-line":"","hide-details":""},on:{input:e.searchIt}})]},proxy:!0},{key:"item.action",fn:function(t){var a=t.item;return[s("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(t){return e.editItem(a)}}},[e._v("\n        mdi-pencil\n      ")]),e._v(" "),s("v-icon",{attrs:{small:""},on:{click:function(t){return e.deleteItem(a)}}},[e._v("\n        mdi-delete\n      ")])]}},{key:"no-data",fn:function(){return[s("v-btn",{attrs:{color:"primary"},on:{click:e.initialize}},[e._v("Reset")])]},proxy:!0},{key:"item.type",fn:function(t){var a=t.item;return[s("v-edit-dialog",{attrs:{large:"",block:"",persistent:"","return-value":a.type},on:{"update:returnValue":function(t){return e.$set(a,"type",t)},"update:return-value":function(t){return e.$set(a,"type",t)},save:function(t){return e.updateRole(a)}},scopedSlots:e._u([{key:"input",fn:function(){return[s("v-select",{attrs:{items:e.roles,label:"Select Role",rules:[e.rules.required]},model:{value:a.type,callback:function(t){e.$set(a,"type",t)},expression:"item.type"}})]},proxy:!0}],null,!0)},[e._v("\n            "+e._s(a.type)+"\n            ")])]}},{key:"item.is_active",fn:function(t){var a=t.item;return[s("v-edit-dialog",{attrs:{large:"",block:"",persistent:"","return-value":a.is_active},on:{"update:returnValue":function(t){return e.$set(a,"is_active",t)},"update:return-value":function(t){return e.$set(a,"is_active",t)},save:function(t){return e.updateStatus(a)}},scopedSlots:e._u([{key:"input",fn:function(){return[s("v-select",{attrs:{items:e.status,"item-text":e.status.text,"item-value":e.status.value,label:"Select Status"},model:{value:a.is_active,callback:function(t){e.$set(a,"is_active",t)},expression:"item.is_active"}})]},proxy:!0}],null,!0)},[s("v-chip",{attrs:{color:e.getColor(a.is_active),dark:""}},[1==a.is_active?s("span",[e._v("Active")]):s("span",[e._v("In Active")])])],1)]}}])}),e._v(" "),s("v-snackbar",{model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[e._v("\n      "+e._s(e.text)+"\n      "),s("v-btn",{attrs:{color:"white",text:""},on:{click:function(t){e.snackbar=!1}}},[e._v("\n          Close\n      ")])],1)],1)}),[],!1,null,null,null);t.default=C.exports;r()(C,{VBtn:o.a,VCard:c.a,VCardActions:l.a,VCardText:l.b,VCardTitle:l.c,VChip:d.a,VCol:u.a,VContainer:p.a,VDataTable:v.a,VDialog:m.a,VDivider:f.a,VEditDialog:h.a,VForm:x.a,VIcon:g.a,VRow:b.a,VSelect:_.a,VSnackbar:y.a,VSpacer:k.a,VTextField:I.a,VToolbar:w.a,VToolbarTitle:V.a})}}]);