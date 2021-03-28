(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{357:function(t,e,a){"use strict";a.r(e);var i={layout:"admin",middleware:["auth","admin"],data:function(){return{valid:!0,dialog:!1,loading:!1,snackbar:!1,text:"",success:"",error:"",options:{sortBy:["actual_name"],sortDesc:[!0]},rules:{required:function(t){return!!t||"This Field is Required"},min:function(t){return t.length>=5||"Minimum 5 Chracters Required"},validEmail:function(t){return/.+@.+\..+/.test(t)||"Email must be valid"}},headers:[{text:"#",value:"id"},{text:"Name",value:"actual_name"},{text:"Short Name",value:"short_name"},{text:"Actions",value:"action",sortable:!1}],status:[{text:"Active",value:!0},{text:"In Active",value:!1}],types:["unit","service provider"],units:[],editedIndex:-1,editedItem:{id:"",actual_name:"",short_name:""},defaultItem:{id:"",name:"",actual_name:"",short_name:""}}},computed:{formTitle:function(){return-1===this.editedIndex?"New Item":"Edit Item"}},watch:{dialog:function(t){t||this.close()}},created:function(){this.initialize()},methods:{searchIt:function(t){var e=this;if(t.length>3&&axios.get("/api/units/".concat(t)).then((function(t){return e.units=t.data.units})).catch((function(t){return console.dir(t.response)})),t.length<=0){var a=0==this.options.sortBy.length?"actual_name":this.options.sortBy[0],i=this.options.sortDesc.length>0||this.options.sortDesc[0]?"asc":"desc";axios.get("/api/units?page=".concat(t.page),{params:{per_page:t.itemsPerPage,sort_by:a,order_by:i}}).then((function(t){e.units=t.data.units})).catch((function(t){return console.dir(t.response)}))}},paginate:function(t){var e=this,a=0==this.options.sortBy.length?"actual_name":this.options.sortBy[0],i=this.options.sortDesc.length>0||this.options.sortDesc[0]?"asc":"desc";axios.get("/api/units?page=".concat(t.page),{params:{per_page:t.itemsPerPage,sort_by:a,order_by:i}}).then((function(t){e.units=t.data.units})).catch((function(t){}))},initialize:function(){var t=this;axios.interceptors.request.use((function(e){return t.loading=!0,e}),(function(e){return t.loading=!1,Promise.reject(e)})),axios.interceptors.response.use((function(e){return t.loading=!1,e}),(function(e){return t.loading=!1,Promise.reject(e)}))},editItem:function(t){this.editedIndex=this.units.data.indexOf(t),this.editedItem=Object.assign({},t),this.dialog=!0},deleteItem:function(t){var e=this,a=this.units.data.indexOf(t);confirm("Are you sure you want to delete this item?")&&axios.delete("/api/units/"+t.id).then((function(t){e.snackbar=!0,e.units.data.splice(a,1)})).catch((function(t){console.log(t.response),e.text="Error Deleting Record",e.snackbar=!0}))},close:function(){var t=this;this.dialog=!1,setTimeout((function(){t.editedItem=Object.assign({},t.defaultItem),t.editedIndex=-1}),300)},save:function(){var t=this;if(this.editedIndex>-1){var e=this.editedIndex;axios.put("/api/units/"+this.editedItem.id,this.editedItem).then((function(a){console.log(a),t.text="Record Updated Successfully!",t.snackbar=!0,Object.assign(t.units.data[e],a.data.unit)})).catch((function(e){console.log(e.response),t.text="Error Updating Record",t.snackbar=!0}))}else axios.post("/api/units",this.editedItem).then((function(e){t.text="Record Added Successfully!",t.snackbar=!0,t.units.data.push(e.data.unit)})).catch((function(e){console.dir(e),t.text="Error Inserting Record",t.snackbar=!0}));this.close()},getColor:function(t){return 0==t?"red":"green"}}},n=a(4),s=a(5),o=a.n(s),r=a(72),c=a(86),l=a(1),u=a(91),d=a(322),v=a(384),p=a(341),m=a(327),f=a(88),h=a(326),g=a(324),_=a(67),x=a(323),b=a(26),k=a(325),I=a(383),y=a(45),V=a(36),C=a(15),w=Object(n.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.units.data,"items-per-page":5,"item-key":"id",loading:t.loading,options:t.options,"server-items-length":t.units.total,"loading-text":"Loading.. Please Wait!","footer-props":{itemsPerPageOptions:[5,10,15],"show-current-page":!0,"show-first-last-page":!0}},on:{pagination:t.paginate,"update:options":function(e){t.options=e}},scopedSlots:t._u([{key:"top",fn:function(){return[a("v-toolbar",{attrs:{flat:"",color:""}},[a("v-toolbar-title",{staticClass:"text-primary"},[t._v("Unit Management")]),t._v(" "),a("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),t._v(" "),a("v-spacer"),t._v(" "),a("v-dialog",{attrs:{"max-width":"500px"},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on;return[a("v-btn",t._g({staticClass:"mb-2",attrs:{color:"primary",dark:""}},i),[t._v("New Unit")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t._v(" "),a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[t._v(t._s(t.formTitle))])]),t._v(" "),a("v-form",{attrs:{method:"post"},on:{submit:function(e){return e.stopPropagation(),e.preventDefault(),t.save(e)}},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[a("v-card-text",[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{attrs:{label:"Name",rules:[t.rules.required]},model:{value:t.editedItem.actual_name,callback:function(e){t.$set(t.editedItem,"actual_name",e)},expression:"editedItem.actual_name"}}),t._v(" "),a("v-text-field",{attrs:{label:"Short name",rules:[t.rules.required]},model:{value:t.editedItem.short_name,callback:function(e){t.$set(t.editedItem,"short_name",e)},expression:"editedItem.short_name"}})],1)],1)],1)],1),t._v(" "),a("v-card-actions",[a("v-spacer"),t._v(" "),a("v-btn",{attrs:{color:"primary",text:""},on:{click:t.close}},[t._v("Cancel")]),t._v(" "),a("v-btn",{attrs:{color:"primary",type:"submit",disabled:!t.valid},on:{click:function(e){return e.preventDefault(),t.save(e)}}},[t._v("Save")])],1)],1)],1)],1)],1),t._v(" "),a("v-text-field",{staticClass:"mx-4",attrs:{"append-icon":"mdi-search",label:"Search","single-line":"","hide-details":""},on:{input:t.searchIt}})]},proxy:!0},{key:"item.action",fn:function(e){var i=e.item;return[a("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(e){return t.editItem(i)}}},[t._v("\n        mdi-pencil\n      ")]),t._v(" "),a("v-icon",{attrs:{small:""},on:{click:function(e){return t.deleteItem(i)}}},[t._v("\n        mdi-delete\n      ")])]}},{key:"no-data",fn:function(){return[a("v-btn",{attrs:{color:"primary"},on:{click:t.initialize}},[t._v("Reset")])]},proxy:!0},{key:"item.is_active",fn:function(e){var i=e.item;return[a("v-edit-dialog",{attrs:{large:"",block:"",persistent:"","return-value":i.is_active},on:{"update:returnValue":function(e){return t.$set(i,"is_active",e)},"update:return-value":function(e){return t.$set(i,"is_active",e)},save:function(e){return t.updateStatus(i)}},scopedSlots:t._u([{key:"input",fn:function(){return[a("v-select",{attrs:{items:t.status,"item-text":t.status.text,"item-value":t.status.value,label:"Select Status"},model:{value:i.is_active,callback:function(e){t.$set(i,"is_active",e)},expression:"item.is_active"}})]},proxy:!0}],null,!0)},[a("v-chip",{attrs:{color:t.getColor(i.is_active),dark:""}},[1==i.is_active?a("span",[t._v("Active")]):a("span",[t._v("In Active")])])],1)]}}])}),t._v(" "),a("v-snackbar",{model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("\n      "+t._s(t.text)+"\n      "),a("v-btn",{attrs:{color:"white",text:""},on:{click:function(e){t.snackbar=!1}}},[t._v("\n          Close\n      ")])],1)],1)}),[],!1,null,null,null);e.default=w.exports;o()(w,{VBtn:r.a,VCard:c.a,VCardActions:l.a,VCardText:l.b,VCardTitle:l.c,VChip:u.a,VCol:d.a,VContainer:v.a,VDataTable:p.a,VDialog:m.a,VDivider:f.a,VEditDialog:h.a,VForm:g.a,VIcon:_.a,VRow:x.a,VSelect:b.a,VSnackbar:k.a,VSpacer:I.a,VTextField:y.a,VToolbar:V.a,VToolbarTitle:C.a})}}]);