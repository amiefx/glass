(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{104:function(t,e,n){var a=n(200);"string"==typeof a&&(a=[[t.i,a,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n(8)(a,i);a.locals&&(t.exports=a.locals)},199:function(t,e,n){"use strict";n(104)},200:function(t,e,n){(t.exports=n(7)(!1)).push([t.i,".center{justify-content:center;align-items:center}",""])},354:function(t,e,n){"use strict";n.r(e);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var i={layout:"admin",middleware:["auth","admin"],data:function(){var t;return a(t={valid:!0,form:{product_id:null,price:null,quantity:null},text:"",loading:!1,snackbar:!1},"valid",!0),a(t,"products",[]),a(t,"isLoading",!1),a(t,"search",null),t},create:function(){this.getProducts()},methods:{getProducts:function(){var t=this;axios.get("/api/products/all").then((function(e){t.products=e.data.data}))},submit:function(){var t=this;axios.interceptors.request.use((function(e){return t.loading=!0,e}),(function(e){return t.loading=!1,Promise.reject(e)})),axios.interceptors.response.use((function(e){return t.loading=!1,e}),(function(e){return t.loading=!1,Promise.reject(e)})),axios.post("/api/qtyadjustments",this.form).then((function(e){t.text="Quantity adjusted successfully.",t.snackbar=!0,t.form.product_id=null,t.form.quantity=null,t.form.price=null}))}},watch:{search:function(t){var e=this;this.products.length>0||(this.isLoading=!0,axios.get("/api/products/all").then((function(t){e.products=t.data.data,e.isLoading=!1})).catch((function(t){console.log(t),e.isLoading=!1})))}}},r=(n(199),n(4)),o=n(5),s=n.n(o),c=n(328),u=n(72),l=n(86),d=n(1),m=n(322),p=n(384),f=n(324),v=n(74),b=n(95),h=n(13),_=n(323),g=n(325),x=n(383),y=n(45),k=Object(r.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{fluid:"","fill-height":""}},[n("v-row",{attrs:{align:"center",justify:"center"}},[n("v-col",{attrs:{cols:"12",sm:"8",md:"5"}},[n("h3",{staticClass:"text-center"},[t._v("Adjust Quantity")]),t._v(" "),n("v-form",{attrs:{method:"post"},on:{submit:function(e){return e.preventDefault(),t.submit(e)}},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[n("v-card",[n("v-card-text",[n("v-autocomplete",{attrs:{items:t.products,loading:t.isLoading,"search-input":t.search,chips:"",clearable:"","hide-details":"","hide-selected":"","item-text":"name","item-value":"id",label:"Search for a product...",solo:""},on:{"update:searchInput":function(e){t.search=e},"update:search-input":function(e){t.search=e}},scopedSlots:t._u([{key:"no-data",fn:function(){return[n("v-list-item",[n("v-list-item-title",[t._v("\n                    Search for a\n                    "),n("strong",[t._v("Product")])])],1)]},proxy:!0},{key:"selection",fn:function(e){var a=e.attr,i=e.on,r=e.item,o=e.selected;return[n("span",t._g(t._b({attrs:{"input-value":o}},"span",a,!1),i),[t._v("\n                  "+t._s(r.sku)+"\n                ")])]}},{key:"item",fn:function(e){var a=e.item;return[n("v-list-item-content",[n("v-list-item-title",{domProps:{textContent:t._s(a.sku)}}),t._v(" "),n("v-list-item-subtitle",[t._v("\n                    "+t._s(a.name)+" | Rs. "+t._s(a.selling_price)+"\n                  ")])],1),t._v(" "),n("v-list-item-action",[n("span",[n("strong",[t._v("\n                      "+t._s(a.onhand)+"\n                    ")])])])]}}]),model:{value:t.form.product_id,callback:function(e){t.$set(t.form,"product_id",e)},expression:"form.product_id"}}),t._v(" "),n("v-text-field",{attrs:{type:"number",label:"Quantity",name:"quantity",required:""},model:{value:t.form.quantity,callback:function(e){t.$set(t.form,"quantity",e)},expression:"form.quantity"}}),t._v(" "),n("v-text-field",{attrs:{type:"number",label:"Price",name:"price",required:""},model:{value:t.form.price,callback:function(e){t.$set(t.form,"price",e)},expression:"form.price"}})],1),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),t.loading?t._e():n("v-btn",{attrs:{color:"primary",block:"",disabled:!t.valid,type:"submit"}},[t._v("Save")])],1)],1)],1)],1)],1),t._v(" "),n("v-snackbar",{model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("\n    "+t._s(t.text)+"\n    "),n("v-btn",{attrs:{color:"white",text:""},on:{click:function(e){t.snackbar=!1}}},[t._v(" Close ")])],1)],1)}),[],!1,null,null,null);e.default=k.exports;s()(k,{VAutocomplete:c.a,VBtn:u.a,VCard:l.a,VCardActions:d.a,VCardText:d.b,VCol:m.a,VContainer:p.a,VForm:f.a,VListItem:v.a,VListItemAction:b.a,VListItemContent:h.a,VListItemSubtitle:h.b,VListItemTitle:h.c,VRow:_.a,VSnackbar:g.a,VSpacer:x.a,VTextField:y.a})}}]);