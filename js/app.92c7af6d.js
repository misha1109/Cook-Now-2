(function(e){function t(t){for(var r,n,s=t[0],c=t[1],l=t[2],p=0,d=[];p<s.length;p++)n=s[p],i[n]&&d.push(i[n][0]),i[n]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);u&&u(t);while(d.length)d.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],r=!0,s=1;s<a.length;s++){var c=a[s];0!==i[c]&&(r=!1)}r&&(o.splice(t--,1),e=n(n.s=a[0]))}return e}var r={},i={app:0},o=[];function n(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=r,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/Cook-Now-2/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=c;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var r=a("1356"),i=a.n(r);i.a},1356:function(e,t,a){},"1bf5":function(e,t,a){"use strict";var r=a("2fc6"),i=a.n(r);i.a},"1ded":function(e,t,a){},"1e64":function(e,t,a){"use strict";var r=a("1ded"),i=a.n(r);i.a},"277c":function(e,t,a){"use strict";var r=a("9b8d"),i=a.n(r);i.a},2924:function(e,t,a){},"2fc6":function(e,t,a){},"37f1":function(e,t,a){"use strict";var r=a("af00"),i=a.n(r);i.a},"41c5":function(e,t,a){"use strict";var r=a("76fc"),i=a.n(r);i.a},"41c58":function(e,t,a){"use strict";var r=a("b9d5"),i=a.n(r);i.a},"4b8a":function(e,t,a){"use strict";var r=a("8703"),i=a.n(r);i.a},"56d7":function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("f751"),a("097d");var r=a("2b0e"),i=a("bb71");a("da64");r["a"].use(i["a"],{iconfont:"md"});var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("v-content",{staticClass:"backGround"},["Main"==e.tab?a("nav-bar",{attrs:{title:e.title},on:{changeToHome:e.changePage,back:e.back}}):e._e(),a("br"),a("trans-menu",{attrs:{show:e.tab,title:"Main"}},["Home"==e.title?a("div",[a("v-container",{attrs:{"ma-0":"","pa-0":"","pt-3":"",fluid:"","text-xs-center":""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("main-button",{attrs:{page:"Recipe List",text:"search All recipes"},on:{changePage:e.changePage}}),a("main-button",{attrs:{page:"Choose ingredients",text:"Choose by ingredients"},on:{changePage:e.changePage}}),a("main-button",{attrs:{page:"Add",text:"Add recipe"},on:{changePage:e.changePage}})],1)],1)],1):e._e(),a("v-scale-transition",{attrs:{"leave-absolute":""}},["Add"==e.title?a("div",[e.signedIn?e._e():a("div",{on:{click:function(t){return e.changeTab("User")}}},[a("v-slide-y-transition",{attrs:{"hide-on-leave":""}},[a("no-recipe",[a("p",[e._v("Sign in to add recipes")])])],1)],1)]):e._e()]),a("v-scale-transition",{attrs:{"leave-absolute":""}},["Recipe List"==e.title?a("v-container",{attrs:{"ma-0":"","py-0":"",fluid:""}},[a("v-layout",{attrs:{row:"",wrap:""}},[e.recipeFreeSeach?a("recipe-search",{on:{"search-recipe":e.findRecipes}}):e._e(),e.loading?a("div",{staticClass:"text-xs-center"},[a("loading")],1):e._e(),a("v-scale-transition",{attrs:{"leave-absolute":""}},[e.recipes?a("v-container",{attrs:{"ma-0":"","pa-0":"","py-5":"",fluid:"","grid-list-lg":""}},[a("v-layout",{attrs:{column:"",wrap:""}},e._l(e.recipes.recipes,function(e){return a("div",{key:e.recipe_id},[a("recipe-card",{attrs:{publisher_url:e.publisher_url,publisher:e.publisher,rating:e.social_rank,url:e.source_url,pic:e.image_url,title:e.title}})],1)}),0)],1):e._e()],1),e.noRecipes?a("div",{on:{click:e.back}},[a("no-recipe",[e._v("\n                                No recipes found\n                                "),a("br"),e._v("\n                                Choose different ingredients\n                            ")])],1):e._e(),e.apiLimit?a("div",{on:{click:function(t){return e.changePage("Home")}}},[a("no-recipe",[e._v("\n                                Api limit reached\n                                "),a("br"),e._v("\n                                Try again later\n                            ")])],1):e._e()],1)],1):e._e()],1),a("v-scale-transition",{staticClass:"d-flex  transparent darken-2  white--text",attrs:{"leave-absolute":""}},["Choose ingredients"==e.title?a("v-container",{attrs:{"ma-0":"","py-5":""}},[a("ingredients-main",{on:{"final-ingred-added":e.findRecipes,changePage:e.changePage}})],1):e._e()],1)],1),a("trans-menu",{attrs:{"leave-absolute":"",title:"User",show:e.tab}},[e.signedIn?e._e():a("div",[a("v-slide-y-transition",{attrs:{"hide-on-leave":""}},["User Main"==this.title?a("user-main",{on:{"new-user":function(t){return e.changePage("New User")}}}):e._e()],1),a("v-slide-y-transition",{attrs:{"hide-on-leave":""}},["New User"==this.title?a("user-new",{on:{"back-sign-in":function(t){return e.changePage("User Main")}}}):e._e()],1)],1)]),a("trans-menu",{attrs:{title:"About",show:e.tab}},[a("about")],1),a("bottom-nav",{on:{"change-tab":e.changeTab}})],1)],1)},n=[],s=(a("96cf"),a("3b8d")),c=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-flex",{attrs:{"pa-4":""}},[a("v-btn",{staticClass:"mainBtn",attrs:{fab:"",color:"#FDD835",large:"",round:""},on:{click:e.func}},[e._v(e._s(e.text)+"\n    ")])],1)},l=[],u={name:"mainButton",props:{text:String,page:String},methods:{func:function(){this.$emit("changePage",this.page)}}},p=u,d=(a("96ca"),a("2877")),h=a("6544"),f=a.n(h),m=a("8336"),v=a("0e8f"),g=Object(d["a"])(p,c,l,!1,null,"179bf7ed",null),b=g.exports;f()(g,{VBtn:m["a"],VFlex:v["a"]});var _=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-card",{attrs:{color:"grey lighten-4"}},[a("v-toolbar",{attrs:{dense:"",fixed:""}},[a("v-flex",{attrs:{xs4:""}},[a("v-btn",{staticClass:"iconbgc",attrs:{icon:"",round:""},on:{click:e.back}},[a("v-icon",{attrs:{color:"white"}},[e._v("\r\n                        fas fa-angle-double-left\r\n                    ")])],1)],1),a("v-flex",{attrs:{xs4:"","text-xs-center":""}},[a("h3",[e._v(e._s(e.title))])]),a("v-flex",{attrs:{xs2:""}}),a("v-flex",{attrs:{xs2:""}},[a("v-btn",{staticClass:"iconbgc",attrs:{icon:"",round:""},on:{click:e.home}},[a("v-icon",{attrs:{color:"white"}},[e._v("fas fa-home\r\n                    ")])],1)],1)],1)],1)],1)},k=[],w={name:"navBar",props:{title:String},methods:{home:function(){this.$emit("changeToHome","Home")},back:function(){this.$emit("back")}}},x=w,C=(a("8757"),a("b0af")),y=a("132d"),S=a("71d9"),B=Object(d["a"])(x,_,k,!1,null,"7e770383",null),P=B.exports;f()(B,{VBtn:m["a"],VCard:C["a"],VFlex:v["a"],VIcon:y["a"],VToolbar:S["a"]});var V=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-card",[a("v-bottom-nav",{staticClass:"bottom",attrs:{mandatory:"",dark:"",color:"#FFAB40"}},[a("bottom-btn",{attrs:{id:"main-button",title:"Main"},on:{"change-tab":e.changeTab}},[a("v-icon",[e._v("fas fa-utensils")])],1),a("bottom-btn",{attrs:{id:"user-button",title:"User"},on:{"change-tab":e.changeTab}},[a("v-icon",[e._v("fas fa-user-circle")])],1),a("bottom-btn",{attrs:{title:"About"},on:{"change-tab":e.changeTab}},[a("v-icon",[e._v("fas fa-info-circle")])],1),a("v-expand-transition",[2===e.bottomBtn?a("v-card",{staticClass:"d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal white--text"},[e._v("\n                1234\n            ")]):e._e()],1)],1)],1)},T=[],j=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-btn",{attrs:{dark:""},on:{click:e.changeTab}},[a("span",[e._v(e._s(e.title))]),e._t("default")],2)},F=[],R={name:"bottom-nav-btn.vue",props:{title:String},methods:{changeTab:function(){this.$emit("change-tab",this.title)}}},A=R,$=Object(d["a"])(A,j,F,!1,null,"23f421f5",null),M=$.exports;f()($,{VBtn:m["a"]});var O={name:"botton-nav.vue",data:function(){return{bottomBtn:null}},components:{"bottom-btn":M},methods:{changeTab:function(e){this.$emit("change-tab",e)}}},E=O,D=(a("41c5"),a("887a")),L=a("0789"),H=Object(d["a"])(E,V,T,!1,null,"5decdad6",null),I=H.exports;f()(H,{VBottomNav:D["a"],VCard:C["a"],VExpandTransition:L["a"],VIcon:y["a"]});var G=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-text-field",{staticClass:"search",staticStyle:{top:"5vh"},attrs:{"full-width":"",large:"",placeholder:"Search for recipes by name",box:"",outline:"","background-color":"#F44336",clearable:"","append-outer-icon":e.query?"fa-search":""},on:{"click:append-outer":e.click},model:{value:e.query,callback:function(t){e.query=t},expression:"query"}})},W=[],U=(a("28a5"),{name:"recipe-list.vue",data:function(){return{query:""}},methods:{click:function(){var e=this.query.split(" ");this.$emit("search-recipe",e)}}}),z=U,N=(a("1bf5"),a("2677")),q=Object(d["a"])(z,G,W,!1,null,"a67d23f4",null),J=q.exports;f()(q,{VTextField:N["a"]});var Y=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-flex",{attrs:{xs12:""}},[a("v-card",{staticClass:"border",staticStyle:{"text-align":"center",left:"10vw",right:"10vw"},attrs:{tile:"",color:"#FFF59D",width:"70vw"}},[a("v-img",{attrs:{contain:"",src:e.pic}}),a("v-card-title",{staticStyle:{"text-align":"center"},attrs:{"primary-title":""}},[a("div",[a("h3",{staticClass:"mb-0"},[e._v(e._s(e.title))])])]),a("v-divider",{attrs:{light:""}}),a("v-card-text",{staticStyle:{"text-align":"center"}},[a("a",{staticStyle:{"text-decoration":"none"},attrs:{href:e.publisher_url}},[a("h4",[e._v("Publisher : "+e._s(e.publisher))])])]),a("v-divider",{attrs:{light:""}}),a("v-card-actions",[a("v-btn",{staticClass:"button",attrs:{href:e.url,flat:"",color:"orange"}},[e._v("Go to recipe")]),a("v-rating",{attrs:{"half-increments":"",dense:"",value:(e.rating+1)/20}})],1)],1)],1)},Z=[],K=(a("c5f6"),{name:"recipeCard.vue",props:{pic:String,title:String,url:String,rating:Number,publisher:String,publisher_url:String}}),Q=K,X=(a("4b8a"),a("99d9")),ee=a("12b2"),te=a("ce7e"),ae=a("adda"),re=a("1d4d"),ie=Object(d["a"])(Q,Y,Z,!1,null,"3ef44678",null),oe=ie.exports;f()(ie,{VBtn:m["a"],VCard:C["a"],VCardActions:X["a"],VCardText:X["b"],VCardTitle:ee["a"],VDivider:te["a"],VFlex:v["a"],VImg:ae["a"],VRating:re["a"]});a("bc3a");var ne=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{attrs:{"grid-list-xl":""}},[a("v-layout",{attrs:{column:"",xs12:""}},[a("ingred-snackbar",{attrs:{text:e.snackMsg,showMsg:e.msgToSnack}}),a("v-flex",[a("ingredients-topic",{attrs:{title:"Meat & Fish",list:e.ingredients.meat,display:"display-2"}},[a("v-icon",{attrs:{xs4:""}},[e._v("fas fa-drumstick-bite\n                ")]),a("span",{staticStyle:{"font-size":"large"}},[e._v("&")]),a("v-icon",{attrs:{xs4:""}},[e._v("fas fa-fish\n                ")])],1)],1),a("v-flex",[a("ingredients-topic",{attrs:{title:"Vegetables",list:e.ingredients.vegetable,display:"display-2"}},[a("v-icon",{attrs:{xs12:""}},[e._v("fas fa-carrot\n                ")])],1)],1),a("v-flex",[a("ingredients-topic",{attrs:{title:"Fruit",list:e.ingredients.fruits,display:"display-2"}},[a("v-icon",{attrs:{xs4:""}},[e._v("fas fa-apple-alt\n                ")])],1)],1),a("v-flex",[a("ingredients-topic",{attrs:{title:"Dairy & Baking",list:e.ingredients.dairyBaking,display:"display-2"}},[a("v-icon",{attrs:{xs4:""}},[e._v("fas fa-cheese\n                ")]),a("span",{staticStyle:{"font-size":"large"}},[e._v("&")]),a("v-icon",{attrs:{xs4:""}},[e._v("fas fa-bread-slice\n                ")])],1)],1),a("v-flex",[a("ingredients-topic",{attrs:{title:"Spices & Sauces",list:e.ingredients.spiceSauce,display:"display-2"}},[a("v-icon",{attrs:{xs4:""}},[e._v("fas fa-mortar-pestle\n                ")]),a("span",{staticStyle:{"font-size":"large"}},[e._v("&")]),a("v-icon",{attrs:{xs4:""}},[e._v("fas fa-tint\n                ")])],1)],1),a("search-chosen-ingred",{on:{"search-chosen":e.searchChosen}})],1)],1)},se=[],ce=(a("20d6"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-card",{staticStyle:{"border-radius":"18px"},attrs:{color:e.active}},[a("v-card-text",{staticClass:"text-xs-center",attrs:{row:""}},[a("v-container",{attrs:{"grid-list-xs":""},on:{click:e.animate}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:""}},[e._t("default")],2)],1)],1),a("h3",[e._v(e._s(e.title))])],1),a("v-expand-transition",[e.show?a("v-card",{staticClass:"d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal white--text",class:e.display,staticStyle:{height:"37vh"}},[a("ingredient-topic-grid",{attrs:{ingredList:e.list}})],1):e._e()],1)],1)}),le=[],ue=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{attrs:{"pa-0":"","ma-0":"","grid-list-xs":"","text-xs-center":""}},[a("v-layout",{attrs:{row:"",wrap:""}},e._l(e.ingredList,function(e){return a("v-flex",{key:e,attrs:{xs4:"","pa-0":"","ma-0":""}},[a("ingred-button",{attrs:{ingred:e}})],1)}),1)],1)},pe=[],de=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-btn",{attrs:{flat:"",color:e.activeStatus},on:{click:e.changeActive}},[e._v(e._s(e.ingred))])},he=[],fe={name:"ingred-button.vue",data:function(){return{activeStatus:"white"}},props:{ingred:String},methods:{changeActive:function(){this.activeStatus="white"==this.activeStatus?"black":"white",Gt.$emit("ingredAdded",this.ingred)}}},me=fe,ve=Object(d["a"])(me,de,he,!1,null,"633ed05c",null),ge=ve.exports;f()(ve,{VBtn:m["a"]});var be={name:"ingredient-topic-grid.vue",data:function(){return{def:"#FDD835"}},props:{ingredList:Array},methods:{setActive:function(){this.active="#FDD835"==this.active?"#FFB300":"#FDD835"}},components:{"ingred-button":ge}},_e=be,ke=(a("1e64"),a("a523")),we=a("a722"),xe=Object(d["a"])(_e,ue,pe,!1,null,"a54bf95a",null),Ce=xe.exports;f()(xe,{VContainer:ke["a"],VFlex:v["a"],VLayout:we["a"]});var ye={name:"ingredients-topic.vue",data:function(){return{show:!1,active:"#FDD835"}},props:{title:String,list:Array,display:String},methods:{animate:function(){this.show=!this.show,this.active=1==this.show?"#FFB300":"#FDD835"}},components:{"ingredient-topic-grid":Ce}},Se=ye,Be=Object(d["a"])(Se,ce,le,!1,null,"24afe362",null),Pe=Be.exports;f()(Be,{VCard:C["a"],VCardText:X["b"],VContainer:ke["a"],VExpandTransition:L["a"],VFlex:v["a"],VLayout:we["a"]});var Ve={meat:["Chicken","Turkey","Lamb","Beef","Pork","Salmon","Tuna","Herring","Sea Bass","Trout","Shrimp","Oysters"],vegetable:["Carrot","Tomato","Onion","Cucumber","Potato","Garlic","Mushroom","Pepper","Avocado","Broccoli","Cabbage","Corn","Artichoke","Asparagus","Celery","Parsley","Oregano","Rosemary"],fruits:["Apple","Orange","Grapefruit","Lemon","Watermelon","Melon","kiwi","Banana","Peach","Pear","Mango","Strawberry","Grape","Papaya","Mandarin","Fig","Prunes","Coconut"],dairyBaking:["Butter","Egg","Milk","Cheese","Cottage","Sour Cream","Rice","Pasta","Flour","Bread","Soda","Noodle","Cereal","Ravioli","Yeast","Quinoa","Wheat","Powder"],spiceSauce:["Oil","Mayonnaise","Ketchup","Mustard","Soy Sauce","Vinegar","Barbecue","Hot Sauce","Salt","Pepper","Paprika","Chili","Curry","Chipotle","Lavender","Clove","Coriander","Sage"]},Te=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-flex",{attrs:{"px-4":"","pt-0":""}},[a("v-container",{staticClass:"text-xs-center"},[a("v-card",{staticStyle:{"border-radius":"18px"},attrs:{color:"#FFB300"},on:{click:e.click}},[a("v-card-text",[a("h3",[e._v("Find Recipes")])])],1)],1)],1)},je=[],Fe={name:"search-chosen-btn.vue",methods:{click:function(){this.$emit("search-chosen")}}},Re=Fe,Ae=Object(d["a"])(Re,Te,je,!1,null,"3e30a698",null),$e=Ae.exports;f()(Ae,{VCard:C["a"],VCardText:X["b"],VContainer:ke["a"],VFlex:v["a"]});var Me=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-card",[a("v-snackbar",{attrs:{color:"pink",flat:"",timeout:2e3,top:"","auto-height":""},model:{value:e.show,callback:function(t){e.show=t},expression:"show"}},[e._v("\n        "+e._s(e.text)+"\n    ")])],1)},Oe=[],Ee={name:"ingred-snackbar.vue",data:function(){return{show:!1}},props:{showMsg:Boolean,text:String},updated:function(){this.show=this.showMsg}},De=Ee,Le=a("2db4"),He=Object(d["a"])(De,Me,Oe,!1,null,"7a5a41f4",null),Ie=He.exports;f()(He,{VCard:C["a"],VSnackbar:Le["a"]});var Ge={name:"ingredients-main.vue",data:function(){return{ingredients:Ve,ingredChosen:[],snackMsg:null,msgToSnack:!1}},methods:{searchChosen:function(){this.$emit("changePage","Recipe List",!0),this.$emit("final-ingred-added",this.ingredChosen)},addIngred:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(t){var a,r=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:a=this.ingredChosen.findIndex(function(e){return e===t}),-1!=a?(this.ingredChosen.splice(a,1),this.snackMsg="".concat(t," Removed")):(this.ingredChosen.push(t),this.snackMsg="".concat(t," Added")),this.msgToSnack=!0,setTimeout(function(){r.msgToSnack=!1},0);case 4:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}()},components:{"ingredients-topic":Pe,"search-chosen-ingred":$e,"ingred-snackbar":Ie},created:function(){var e=this;Gt.$on("ingredAdded",function(t){e.addIngred(t)}),Gt.$on("resetChosen",function(){e.ingredChosen=[]})}},We=Ge,Ue=Object(d["a"])(We,ne,se,!1,null,"4ec3c972",null),ze=Ue.exports;f()(Ue,{VContainer:ke["a"],VFlex:v["a"],VIcon:y["a"],VLayout:we["a"]});var Ne=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-progress-circular",{staticStyle:{left:"34vw",top:"20vh"},attrs:{width:10,indeterminate:"",color:"purple",size:100}})},qe=[],Je={name:"loading.vue"},Ye=Je,Ze=a("490a"),Ke=Object(d["a"])(Ye,Ne,qe,!1,null,"37c66eb4",null),Qe=Ke.exports;f()(Ke,{VProgressCircular:Ze["a"]});var Xe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-layout",[a("v-flex",{attrs:{xs1:""}}),a("v-flex",{attrs:{xs10:""}},[a("v-card",{staticClass:"text-xs-center text",staticStyle:{"border-radius":"18px",top:"15vh"},attrs:{color:"#FDD835"},on:{click:e.back}},[a("v-card-text",{attrs:{"text-xs-center":""}},[e._t("default")],2)],1)],1)],1)},et=[],tt={name:"no-recipes.vue",methods:{back:function(){this.$emit("back")}}},at=tt,rt=(a("37f1"),Object(d["a"])(at,Xe,et,!1,null,"3d3bef0e",null)),it=rt.exports;f()(rt,{VCard:C["a"],VCardText:X["b"],VFlex:v["a"],VLayout:we["a"]});var ot=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-scale-transition",{attrs:{"leave-absolute":""}},[e.show==e.title?a("div",{staticClass:"d-flex  transparent darken-2  white--text",staticStyle:{"transition-duration":"700ms"}},[e._t("default")],2):e._e()])},nt=[],st={name:"transitions-menu.vue",props:{show:String,title:String}},ct=st,lt=Object(d["a"])(ct,ot,nt,!1,null,"5b4eeacf",null),ut=lt.exports;f()(lt,{VScaleTransition:L["c"]});var pt=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{attrs:{"ma-0":"","pa-0":""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs1:""}}),a("v-flex",{attrs:{xs10:""}},[a("v-card",{staticClass:"text-xs-center text",staticStyle:{"border-radius":"40px"},attrs:{color:"#FDD835"}},[a("v-img",{attrs:{"max-height":"40vh",src:"https://cupofjo.com/wp-content/uploads/2019/04/mealsgrid.jpeg"}}),a("v-card-title",{staticStyle:{"font-family":"Arial"},attrs:{"primary-title":""}},[e._v("\n                    Cook-Now 2 allows you to find cooking recipes from different websites and publication by choosing which ingredient the recipe must contain.\n                    "),a("br"),e._v("\n                    Create your user account to rate and save recipes to your favorites.\n                    "),a("br"),e._v("\n                    All recipes are obtained using food2fork api.\n                ")])],1)],1),a("v-flex",{attrs:{xs1:""}})],1)],1)},dt=[],ht={name:"about.vue"},ft=ht,mt=(a("277c"),Object(d["a"])(ft,pt,dt,!1,null,"ffe23004",null)),vt=mt.exports;f()(mt,{VCard:C["a"],VCardTitle:ee["a"],VContainer:ke["a"],VFlex:v["a"],VImg:ae["a"],VLayout:we["a"]});var gt=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("user-background",[a("v-flex",{attrs:{xs12:"","px-3":""}},[e._t("default"),a("v-text-field",{attrs:{hint:"Enter your email","background-color":"white",label:"Email"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),a("v-text-field",{attrs:{hint:"Enter your password","background-color":"white",label:"Password"},model:{value:e.pass,callback:function(t){e.pass=t},expression:"pass"}})],2),a("v-flex",{attrs:{xs12:""}},[a("v-btn",{attrs:{color:"white",round:""}},[e._v("Sign in")])],1),a("v-flex",[a("v-btn",{attrs:{flat:""},on:{click:e.newAcc}},[e._v("Don't have an account? Sign up")])],1)],1)},bt=[],_t=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{attrs:{"ma-0":"","pa-0":""}},[a("v-layout",[a("v-flex",{attrs:{xs1:""}}),a("v-flex",{attrs:{xs10:""}},[a("v-card",{staticStyle:{"background-color":"#FDD835","border-radius":"6%"}},[a("v-container",{attrs:{"pa-0":"","ma-0":"",grid:"",fluid:"","text-xs-center":""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-icon",{attrs:{large:""}},[e._v("fas fa-users")])],1),e._t("default")],2)],1)],1)],1),a("v-flex",{attrs:{xs1:""}})],1)],1)},kt=[],wt={name:"user-background.vue"},xt=wt,Ct=Object(d["a"])(xt,_t,kt,!1,null,"24f2847a",null),yt=Ct.exports;f()(Ct,{VCard:C["a"],VContainer:ke["a"],VFlex:v["a"],VIcon:y["a"],VLayout:we["a"]});var St={name:"user-main.vue",data:function(){return{email:null,pass:null}},components:{"user-background":yt},methods:{newAcc:function(){this.$emit("new-user")}}},Bt=St,Pt=(a("41c58"),Object(d["a"])(Bt,gt,bt,!1,null,"1f5e13db",null)),Vt=Pt.exports;f()(Pt,{VBtn:m["a"],VFlex:v["a"],VTextField:N["a"]});var Tt=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("user-background",[a("v-flex",{attrs:{xs3:""}},[a("v-btn",{attrs:{round:"",small:"",color:"white"},on:{click:e.signIn}},[e._v("Sign in")])],1),a("v-flex",{attrs:{xs9:""}}),a("v-card-title",[e._v("Fill required fields and create your account")]),a("v-flex",{attrs:{xs12:"","px-3":""}},[a("v-text-field",{attrs:{hint:"Enter your email","background-color":"white",label:"Email"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),a("v-text-field",{attrs:{hint:"Enter your password","background-color":"white",label:"Password"},model:{value:e.pass,callback:function(t){e.pass=t},expression:"pass"}}),a("v-text-field",{attrs:{hint:"Enter password again","background-color":"white",label:"Confirm Password"},model:{value:e.confPass,callback:function(t){e.confPass=t},expression:"confPass"}})],1),a("v-flex",{attrs:{xs12:""}},[a("v-btn",{attrs:{color:"white",round:""}},[e._v("Sign Up")])],1)],1)},jt=[],Ft={name:"user-new.vue",data:function(){return{email:null,pass:null,confPass:null}},components:{"user-background":yt},methods:{signIn:function(){this.$emit("back-sign-in")}}},Rt=Ft,At=Object(d["a"])(Rt,Tt,jt,!1,null,"45f76a8b",null),$t=At.exports;f()(At,{VBtn:m["a"],VCardTitle:ee["a"],VFlex:v["a"],VTextField:N["a"]});var Mt={count:30,recipes:[{publisher:"Closet Cooking",f2f_url:"http://food2fork.com/view/35382",title:"Jalapeno Popper Grilled Cheese Sandwich",source_url:"http://www.closetcooking.com/2011/04/jalapeno-popper-grilled-cheese-sandwich.html",recipe_id:"35382",image_url:"http://static.food2fork.com/Jalapeno2BPopper2BGrilled2BCheese2BSandwich2B12B500fd186186.jpg",social_rank:100,publisher_url:"http://closetcooking.com"},{publisher:"The Pioneer Woman",f2f_url:"http://food2fork.com/view/47024",title:"Perfect Iced Coffee",source_url:"http://thepioneerwoman.com/cooking/2011/06/perfect-iced-coffee/",recipe_id:"47024",image_url:"http://static.food2fork.com/icedcoffee5766.jpg",social_rank:100,publisher_url:"http://thepioneerwoman.com"},{publisher:"The Pioneer Woman",f2f_url:"http://food2fork.com/view/47319",title:"Crash Hot Potatoes",source_url:"http://thepioneerwoman.com/cooking/2008/06/crash-hot-potatoes/",recipe_id:"47319",image_url:"http://static.food2fork.com/CrashHotPotatoes5736.jpg",social_rank:100,publisher_url:"http://thepioneerwoman.com"},{publisher:"Two Peas and Their Pod",f2f_url:"http://food2fork.com/view/54384",title:"Stovetop Avocado Mac and Cheese",source_url:"http://www.twopeasandtheirpod.com/stovetop-avocado-mac-and-cheese/",recipe_id:"54384",image_url:"http://static.food2fork.com/avocadomacandcheesedc99.jpg",social_rank:100,publisher_url:"http://www.twopeasandtheirpod.com"},{publisher:"Closet Cooking",f2f_url:"http://food2fork.com/view/35171",title:"Buffalo Chicken Grilled Cheese Sandwich",source_url:"http://www.closetcooking.com/2011/08/buffalo-chicken-grilled-cheese-sandwich.html",recipe_id:"35171",image_url:"http://static.food2fork.com/Buffalo2BChicken2BGrilled2BCheese2BSandwich2B5002B4983f2702fe4.jpg",social_rank:100,publisher_url:"http://closetcooking.com"},{publisher:"The Pioneer Woman",f2f_url:"http://food2fork.com/view/d9a5e8",title:"Cinnamon Rolls",source_url:"http://thepioneerwoman.com/cooking/2007/06/cinammon_rolls_/",recipe_id:"d9a5e8",image_url:"http://static.food2fork.com/333323997_04bd8d6c53da11.jpg",social_rank:100,publisher_url:"http://thepioneerwoman.com"},{publisher:"101 Cookbooks",f2f_url:"http://food2fork.com/view/47746",title:"Best Pizza Dough Ever",source_url:"http://www.101cookbooks.com/archives/001199.html",recipe_id:"47746",image_url:"http://static.food2fork.com/best_pizza_dough_recipe1b20.jpg",social_rank:100,publisher_url:"http://www.101cookbooks.com"},{publisher:"101 Cookbooks",f2f_url:"http://food2fork.com/view/47899",title:"Magic Sauce",source_url:"http://www.101cookbooks.com/archives/magic-sauce-recipe.html",recipe_id:"47899",image_url:"http://static.food2fork.com/magic_sauce_recipeece9.jpg",social_rank:100,publisher_url:"http://www.101cookbooks.com"},{publisher:"The Pioneer Woman",f2f_url:"http://food2fork.com/view/47042",title:"Spicy Dr. Pepper Shredded Pork",source_url:"http://thepioneerwoman.com/cooking/2011/03/spicy-dr-pepper-shredded-pork/",recipe_id:"47042",image_url:"http://static.food2fork.com/5551711173_dc42f7fc4b_zbd8a.jpg",social_rank:100,publisher_url:"http://thepioneerwoman.com"},{publisher:"Whats Gaby Cooking",f2f_url:"http://food2fork.com/view/713134",title:"Parmesan Roasted Potatoes",source_url:"http://whatsgabycooking.com/parmesan-roasted-potatoes/",recipe_id:"713134",image_url:"http://static.food2fork.com/ParmesanRoastedPotatoes11985a.jpg",social_rank:100,publisher_url:"http://whatsgabycooking.com"},{publisher:"Closet Cooking",f2f_url:"http://food2fork.com/view/35120",title:"Bacon Wrapped Jalapeno Popper Stuffed Chicken",source_url:"http://www.closetcooking.com/2012/11/bacon-wrapped-jalapeno-popper-stuffed.html",recipe_id:"35120",image_url:"http://static.food2fork.com/Bacon2BWrapped2BJalapeno2BPopper2BStuffed2BChicken2B5002B5909939b0e65.jpg",social_rank:100,publisher_url:"http://closetcooking.com"},{publisher:"My Baking Addiction",f2f_url:"http://food2fork.com/view/035865",title:"The Best Chocolate Cake",source_url:"http://www.mybakingaddiction.com/the-best-chocolate-cake-recipe/",recipe_id:"035865",image_url:"http://static.food2fork.com/BlackMagicCakeSlice1of18c68.jpg",social_rank:100,publisher_url:"http://www.mybakingaddiction.com"},{publisher:"Closet Cooking",f2f_url:"http://food2fork.com/view/35368",title:"Hot Spinach and Artichoke Dip",source_url:"http://www.closetcooking.com/2008/11/hot-spinach-and-artichoke-dip.html",recipe_id:"35368",image_url:"http://static.food2fork.com/HotSpinachandArtichokeDip5007579cdf5.jpg",social_rank:100,publisher_url:"http://closetcooking.com"},{publisher:"Two Peas and Their Pod",f2f_url:"http://food2fork.com/view/54400",title:"Smashed Chickpea & Avocado Salad Sandwich",source_url:"http://www.twopeasandtheirpod.com/smashed-chickpea-avocado-salad-sandwich/",recipe_id:"54400",image_url:"http://static.food2fork.com/smashedchickpeaavocadosaladsandwich29c5b.jpg",social_rank:100,publisher_url:"http://www.twopeasandtheirpod.com"},{publisher:"The Pioneer Woman",f2f_url:"http://food2fork.com/view/47166",title:"Restaurant Style Salsa",source_url:"http://thepioneerwoman.com/cooking/2010/01/restaurant-style-salsa/",recipe_id:"47166",image_url:"http://static.food2fork.com/4307514771_c089bbd71017f42.jpg",social_rank:100,publisher_url:"http://thepioneerwoman.com"},{publisher:"The Pioneer Woman",f2f_url:"http://food2fork.com/view/8f3e73",title:"The Best Lasagna Ever",source_url:"http://thepioneerwoman.com/cooking/2007/06/the_best_lasagn/",recipe_id:"8f3e73",image_url:"http://static.food2fork.com/387114468_aafd1be3404a2f.jpg",social_rank:100,publisher_url:"http://thepioneerwoman.com"},{publisher:"My Baking Addiction",f2f_url:"http://food2fork.com/view/e7fdb2",title:"Mac and Cheese with Roasted Chicken, Goat Cheese, and Rosemary",source_url:"http://www.mybakingaddiction.com/mac-and-cheese-roasted-chicken-and-goat-cheese/",recipe_id:"e7fdb2",image_url:"http://static.food2fork.com/MacandCheese1122b.jpg",social_rank:100,publisher_url:"http://www.mybakingaddiction.com"},{publisher:"Closet Cooking",f2f_url:"http://food2fork.com/view/35354",title:"Guinness Chocolate Cheesecake",source_url:"http://www.closetcooking.com/2011/03/guinness-chocolate-cheesecake.html",recipe_id:"35354",image_url:"http://static.food2fork.com/Guinness2BChocolate2BCheesecake2B12B5002af4b6b4.jpg",social_rank:100,publisher_url:"http://closetcooking.com"},{publisher:"Simply Recipes",f2f_url:"http://food2fork.com/view/35760",title:"Banana Bread",source_url:"http://www.simplyrecipes.com/recipes/banana_bread/",recipe_id:"35760",image_url:"http://static.food2fork.com/banana_bread300x2000a14c8c5.jpeg",social_rank:100,publisher_url:"http://simplyrecipes.com"},{publisher:"All Recipes",f2f_url:"http://food2fork.com/view/32478",title:"The Best Rolled Sugar Cookies",source_url:"http://allrecipes.com/Recipe/The-Best-Rolled-Sugar-Cookies/Detail.aspx",recipe_id:"32478",image_url:"http://static.food2fork.com/9956913c10.jpg",social_rank:100,publisher_url:"http://allrecipes.com"},{publisher:"Two Peas and Their Pod",f2f_url:"http://food2fork.com/view/54427",title:"Guacamole Grilled Cheese Sandwich",source_url:"http://www.twopeasandtheirpod.com/guacamole-grilled-cheese-sandwich/",recipe_id:"54427",image_url:"http://static.food2fork.com/GuacamoleGrilledCheese6019.jpg",social_rank:100,publisher_url:"http://www.twopeasandtheirpod.com"},{publisher:"Two Peas and Their Pod",f2f_url:"http://food2fork.com/view/54489",title:"Two-Ingredient Banana Peanut Butter Ice Cream",source_url:"http://www.twopeasandtheirpod.com/two-ingredient-banana-peanut-butter-ice-cream/",recipe_id:"54489",image_url:"http://static.food2fork.com/bananapeanutbuttericecream5c16d.jpg",social_rank:100,publisher_url:"http://www.twopeasandtheirpod.com"},{publisher:"Simply Recipes",f2f_url:"http://food2fork.com/view/36259",title:"Easy Shepherd’s Pie",source_url:"http://www.simplyrecipes.com/recipes/easy_shepherds_pie/",recipe_id:"36259",image_url:"http://static.food2fork.com/shepherdspie300x2003d240a98.jpg",social_rank:100,publisher_url:"http://simplyrecipes.com"},{publisher:"Closet Cooking",f2f_url:"http://food2fork.com/view/35169",title:"Buffalo Chicken Chowder",source_url:"http://www.closetcooking.com/2011/11/buffalo-chicken-chowder.html",recipe_id:"35169",image_url:"http://static.food2fork.com/Buffalo2BChicken2BChowder2B5002B0075c131caa8.jpg",social_rank:100,publisher_url:"http://closetcooking.com"},{publisher:"All Recipes",f2f_url:"http://food2fork.com/view/3620",title:"Best Brownies",source_url:"http://allrecipes.com/Recipe/Best-Brownies/Detail.aspx",recipe_id:"3620",image_url:"http://static.food2fork.com/720553ee26.jpg",social_rank:100,publisher_url:"http://allrecipes.com"},{publisher:"All Recipes",f2f_url:"http://food2fork.com/view/29159",title:"Slow Cooker Chicken Tortilla Soup",source_url:"http://allrecipes.com/Recipe/Slow-Cooker-Chicken-Tortilla-Soup/Detail.aspx",recipe_id:"29159",image_url:"http://static.food2fork.com/19321150c4.jpg",social_rank:100,publisher_url:"http://allrecipes.com"},{publisher:"All Recipes",f2f_url:"http://food2fork.com/view/2803",title:"Banana Crumb Muffins",source_url:"http://allrecipes.com/Recipe/Banana-Crumb-Muffins/Detail.aspx",recipe_id:"2803",image_url:"http://static.food2fork.com/124030cedd.jpg",social_rank:100,publisher_url:"http://allrecipes.com"},{publisher:"All Recipes",f2f_url:"http://food2fork.com/view/2734",title:"Banana Banana Bread",source_url:"http://allrecipes.com/Recipe/Banana-Banana-Bread/Detail.aspx",recipe_id:"2734",image_url:"http://static.food2fork.com/254186ea50.jpg",social_rank:100,publisher_url:"http://allrecipes.com"},{publisher:"101 Cookbooks",f2f_url:"http://food2fork.com/view/47692",title:"Nikki",source_url:"http://www.101cookbooks.com/archives/nikkis-healthy-cookies-recipe.html",recipe_id:"47692",image_url:"http://static.food2fork.com/healthy_cookies4ee3.jpg",social_rank:100,publisher_url:"http://www.101cookbooks.com"},{publisher:"All Recipes",f2f_url:"http://food2fork.com/view/34889",title:"Zesty Slow Cooker Chicken Barbeque",source_url:"http://allrecipes.com/Recipe/Zesty-Slow-Cooker-Chicken-Barbecue/Detail.aspx",recipe_id:"34889",image_url:"http://static.food2fork.com/4515542dbb.jpg",social_rank:100,publisher_url:"http://allrecipes.com"}]},Ot={name:"app",data:function(){return{title:"Home",prevTitle:"Home",recipes:null,recipeFreeSeach:!0,loading:!1,noRecipes:!1,tab:"Main",apiLimit:!1,signedIn:null}},components:{"main-button":b,"nav-bar":P,"bottom-nav":I,"recipe-search":J,"recipe-card":oe,"ingredients-main":ze,loading:Qe,"no-recipe":it,"trans-menu":ut,about:vt,"user-main":Vt,"user-new":$t},methods:{changePage:function(e,t){switch(e){case"Home":this.recipes=null,this.prevTitle="Home",this.recipeFreeSeach=!0,Gt.$emit("resetChosen");break;case"Recipe List":this.prevTitle=t?"Choose ingredients":"Home",this.recipes=[],this.noRecipes=!1;break;case"Choose ingredients":this.prevTitle="Home";break}this.recipeFreeSeach=!t,this.title=e,this.noRecipes=!1,this.apiLimit=!1,window.scrollTo(0,0)},back:function(){"Choose ingredients"==this.prevTitle?this.changePage(this.prevTitle,1):this.changePage(this.prevTitle)},findRecipes:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:this.recipes=Mt;case 1:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),changeTab:function(e){switch(window.scrollTo(0,0),this.tab=e,e){case"Main":this.changePage("Home");break;case"User":document.getElementById("user-button").click(),this.changePage("User Main")}}}},Et=Ot,Dt=(a("034f"),a("7496")),Lt=a("549c"),Ht=Object(d["a"])(Et,o,n,!1,null,null,null),It=Ht.exports;f()(Ht,{VApp:Dt["a"],VContainer:ke["a"],VContent:Lt["a"],VLayout:we["a"],VScaleTransition:L["c"],VSlideYTransition:L["e"]}),a.d(t,"eventBus",function(){return Gt}),r["a"].config.productionTip=!1;var Gt=new r["a"];new r["a"]({render:function(e){return e(It)}}).$mount("#app")},"76fc":function(e,t,a){},8703:function(e,t,a){},8757:function(e,t,a){"use strict";var r=a("2924"),i=a.n(r);i.a},"96ca":function(e,t,a){"use strict";var r=a("b8f1"),i=a.n(r);i.a},"9b8d":function(e,t,a){},af00:function(e,t,a){},b8f1:function(e,t,a){},b9d5:function(e,t,a){}});
//# sourceMappingURL=app.92c7af6d.js.map