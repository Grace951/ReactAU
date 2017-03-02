webpackJsonp([1,18],{1006:function(e,t){},1009:function(e,t){},909:function(e,t,o){"use strict";t.__esModule=!0,t.default=function(e,t){return{path:"aboutus",onEnter:t,authorize:["reAuth"],getComponent:function(e,t){o.e(10).then(function(e){t(null,o(965).default)}.bind(null,o)).catch(o.oe)}}}},910:function(e,t,o){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var n=o(966),r=a(n);t.default=function(e,t){return{path:"admin",component:r.default,authorize:["normal","admin"],getChildRoutes:function(a,n){o.e(8).then(function(a){n(null,[o(1e3).default(e,t),o(1001).default(e,t),o(999).default(e,t)])}.bind(null,o)).catch(o.oe)}}}},911:function(e,t,o){"use strict";t.__esModule=!0,t.default=function(e,t){return{path:"contact",onEnter:t,authorize:["reAuth"],getComponent:function(e,t){o.e(9).then(function(e){t(null,o(977).default)}.bind(null,o)).catch(o.oe)}}}},912:function(e,t,o){"use strict";t.__esModule=!0,t.default=function(e,t){return{path:"home",onEnter:t,authorize:["reAuth"],getComponent:function(e,t){o.e(0).then(function(e){t(null,o(908).default)}.bind(null,o)).catch(o.oe)}}}},913:function(e,t,o){"use strict";t.__esModule=!0,t.default=function(e,t){return{path:"*",getComponent:function(e,t){o.e(16).then(function(e){t(null,o(978).default)}.bind(null,o)).catch(o.oe)}}}},914:function(e,t,o){"use strict";t.__esModule=!0;var a=o(979);t.default=function(e,t){return{path:"products",component:a.ProductsPage,authorize:["reAuth"],getChildRoutes:function(a,n){o.e(12).then(function(a){n(null,[o(1003).default(e,t)])}.bind(null,o)).catch(o.oe)}}}},915:function(e,t,o){"use strict";t.__esModule=!0,t.default=function(e,t){return{path:"signin",onEnter:t,getComponent:function(e,t){o.e(15).then(function(e){t(null,o(991).default)}.bind(null,o)).catch(o.oe)}}}},916:function(e,t,o){"use strict";t.__esModule=!0,t.default=function(e,t){return{path:"signup",onEnter:t,getComponent:function(e,t){o.e(14).then(function(e){t(null,o(992).default)}.bind(null,o)).catch(o.oe)}}}},917:function(e,t,o){"use strict";t.__esModule=!0,t.default=function(e,t){return{path:"unauthorized",getComponent:function(e,t){o.e(13).then(function(e){t(null,o(993).default)}.bind(null,o)).catch(o.oe)}}}},918:function(e,t,o){"use strict";t.__esModule=!0,t.default=function(e,t){return{path:"user",onEnter:t,getComponent:function(e,t){o.e(7).then(function(e){t(null,o(994).default)}.bind(null,o)).catch(o.oe)}}}},941:function(e,t,o){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function n(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t.default=e,t}function r(e){return function(t){return t((0,d.beginAjaxCall)()),c.default.getAllProducts(e.params.product,e.params.ProductsTbl).then(function(e){t(m(e))}).catch(function(e){throw t((0,d.ajaxCallError)()),e})}}function l(e){return function(t){return t((0,d.beginAjaxCall)()),c.default.getAllProducts(e.params.cat,"All").then(function(e){t(m(e))}).catch(function(e){throw t((0,d.ajaxCallError)()),e})}}t.__esModule=!0,t.loadProducts=r,t.loadProductList=l;var i=o(11),u=n(i),s=o(378),c=a(s),d=o(202),m=function(e){return{type:u.LOAD_PRODUCTS_SUCCESS,products:e}}},957:function(e,t,o){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.Metadata=void 0;var n=(o(29),o(0)),r=(a(n),[{columnName:"imageUrl",order:1,locked:!0,visible:!0,customComponent:"",displayName:"Image",sortable:!1,cssClassName:"tblImage"},{columnName:"brand",order:2,locked:!1,visible:!0,sortable:!0,displayName:"Brand"},{columnName:"name",order:3,locked:!1,visible:!0,sortable:!0,displayName:"Model"},{columnName:"channel",order:4,locked:!1,visible:!0,sortable:!0,displayName:"Channel"},{columnName:"remote",order:5,locked:!1,visible:!0,sortable:!0,displayName:"Remote View"},{columnName:"compression",order:6,locked:!1,visible:!0,sortable:!0,displayName:"Compression"},{columnName:"videoout",order:7,locked:!1,visible:!0,sortable:!0,displayName:"Video Output"},{columnName:"_id",order:8,locked:!0,visible:!1,displayName:""}]),l=[{columnName:"imageUrl",order:1,locked:!0,visible:!0,customComponent:"",displayName:"Image",sortable:!1,cssClassName:"tblImage"},{columnName:"brand",order:2,locked:!1,visible:!0,sortable:!0,displayName:"Brand"},{columnName:"type",order:3,locked:!1,visible:!0,sortable:!0,displayName:"System"},{columnName:"name",order:4,locked:!1,visible:!0,sortable:!0,displayName:"Model"},{columnName:"channel",order:5,locked:!1,visible:!0,sortable:!0,displayName:"Channel"},{columnName:"remote",order:6,locked:!1,visible:!0,sortable:!0,displayName:"Remote View"},{columnName:"backup",order:7,locked:!1,visible:!0,sortable:!0,displayName:"Backup"},{columnName:"PoEport",order:8,locked:!1,visible:!0,sortable:!0,displayName:"PoE Port"},{columnName:"videoout",order:9,locked:!1,visible:!0,sortable:!0,displayName:"Video Output"},{columnName:"_id",order:10,locked:!0,visible:!1,displayName:""}],i=[{columnName:"imageUrl",order:1,locked:!0,visible:!0,customComponent:"",displayName:"Image",sortable:!1,cssClassName:"tblImage"},{columnName:"brand",order:2,locked:!1,visible:!0,sortable:!0,displayName:"Brand"},{columnName:"type",order:3,locked:!1,visible:!0,sortable:!0,displayName:"System"},{columnName:"name",order:4,locked:!1,visible:!0,sortable:!0,displayName:"Model"},{columnName:"channel",order:5,locked:!1,visible:!0,sortable:!0,displayName:"Channel"},{columnName:"remote",order:6,locked:!1,visible:!0,sortable:!0,displayName:"Remote View"},{columnName:"backup",order:7,locked:!1,visible:!0,sortable:!0,displayName:"Backup"},{columnName:"videoout",order:8,locked:!1,visible:!0,sortable:!0,displayName:"Video Output"},{columnName:"_id",order:9,locked:!0,visible:!1,displayName:""}],u=[{columnName:"imageUrl",order:1,locked:!0,visible:!0,customComponent:"",displayName:"Image",sortable:!1,cssClassName:"tblImage"},{columnName:"brand",order:2,locked:!1,visible:!0,sortable:!0,displayName:"Brand"},{columnName:"type",order:3,locked:!1,visible:!0,sortable:!0,displayName:"System"},{columnName:"name",order:4,locked:!1,visible:!0,sortable:!0,displayName:"Model"},{columnName:"sensor",order:5,locked:!1,visible:!0,sortable:!0,displayName:"Sensor"},{columnName:"resolution",order:6,locked:!1,visible:!0,sortable:!0,displayName:"Resolution"},{columnName:"lens",order:7,locked:!1,visible:!0,sortable:!0,displayName:"Lens"},{columnName:"ir",order:8,locked:!1,visible:!0,sortable:!0,displayName:"IR"},{columnName:"feature",order:9,locked:!1,visible:!0,sortable:!0,displayName:"Feature"},{columnName:"io",order:10,locked:!1,visible:!0,sortable:!0,displayName:"Indoor Outdoor"},{columnName:"_id",order:11,locked:!0,visible:!1,displayName:""}],s=[{columnName:"imageUrl",order:1,locked:!0,visible:!0,customComponent:"",displayName:"Image",sortable:!1,cssClassName:"tblImage"},{columnName:"brand",order:2,locked:!1,visible:!0,sortable:!0,displayName:"Brand"},{columnName:"name",order:3,locked:!1,visible:!0,sortable:!0,displayName:"Model"},{columnName:"desc",order:4,locked:!1,visible:!0,sortable:!0,displayName:"Description"},{columnName:"_id",order:5,locked:!0,visible:!1,displayName:""}],c={DVR:i,NVR:i,KIT:l,CCTV:u,ALARM:r,INTERCOM:s};t.Metadata=c},962:function(e,t,o){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.ProductIndexSidebar=t.ProductCategorySidebar=void 0;var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a])}return e},u=o(29),s=o(0),c=a(s),d=o(108),m=(a(d),o(206)),p=function(){return c.default.createElement("div",null,c.default.createElement("div",{className:"col-sm-12 cat"},c.default.createElement("ul",null,c.default.createElement("li",null,"Products:",c.default.createElement("ul",null,m.navData.filter(function(e){return"products"===e.name}).reduce(function(e,t){return t},{}).sub.map(function(e,t){return c.default.createElement("li",{key:t},c.default.createElement(u.Link,{to:e.link},e.desc))}))))))},f=function(e){return c.default.createElement("li",null,e.title,c.default.createElement("ul",null,c.default.createElement("li",{className:e.isActive("All")},c.default.createElement(u.Link,{to:"/products/"+e.productType+"/All"},"All")),e.data.map(function(t,o){return c.default.createElement("li",{key:o,className:e.isActive(t)},c.default.createElement(u.Link,{to:"/products/"+e.productType+"/"+t}," ",t," "))})))},b=c.default.createElement("div",null),h=function(e){function t(o){n(this,t);var a=r(this,e.call(this,o));return a.state={selected:""},a.isActive=a.isActive.bind(a),a}return l(t,e),t.prototype.componentWillReceiveProps=function(e){if((0,m.isvalidRoute)(this.props.productType,this.props.ProductsTbl)){var t=(this.props.productType,e.product,this.props.ProductsTbl),o=e.ProductsTbl;t&&o!==t&&this.setState({selected:e.ProductsTbl})}},t.prototype.isActive=function(e){return e===this.state.selected?"active":""},t.prototype.uniqArray=function(e){return e.filter(function(e,t,o){return o.indexOf(e)==t})},t.prototype.render=function(){if((0,m.isvalidRoute)(this.props.productType,this.props.ProductsTbl)){var e=this.uniqArray(this.props.products.map(function(e,t){return e.brand})),t=this.uniqArray(this.props.products.map(function(e,t){return e.type}));return c.default.createElement("div",null,c.default.createElement("div",{className:"col-sm-12 cat"},c.default.createElement("ul",null,c.default.createElement(f,i({title:"Brand:",data:e,isActive:this.isActive},this.props)),c.default.createElement(f,i({title:"System:",data:t,isActive:this.isActive},this.props)))))}return b},t}(c.default.Component);t.ProductCategorySidebar=h,t.ProductIndexSidebar=p},966:function(e,t,o){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function n(e,t){return{auth:e.auth}}t.__esModule=!0;var r=o(0),l=a(r),i=o(18);o(1006);var u=l.default.createElement("h1",{className:"center-page"}," Unauthorized "),s=function(e){return l.default.createElement("div",{className:"container"},l.default.createElement("div",{className:"loading-wrap"},l.default.createElement("div",{className:"ajax-loading-big "+(e.auth.success&&e.auth.user&&e.auth.user.accessRight&&8===e.auth.user.accessRight?"fade-hide":"fade-show")},u),l.default.createElement("div",null,e.children)))};s=(0,i.connect)(n)(s),t.default=s},979:function(e,t,o){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e,t){return{products:e.products,ajaxState:e.ajaxCallsInProgress}}t.__esModule=!0,t.ProductsPage=void 0;var u=o(18),s=(o(29),o(0)),c=a(s),d=o(368),m=a(d),p=o(962),f=o(987),b=o(367),h=(o(206),o(957),o(941));o(1009);var v=c.default.createElement(f.ProductIndex,null),N=c.default.createElement(p.ProductIndexSidebar,null),y=function(e){function t(o){n(this,t);var a=r(this,e.call(this,o));return a.getProductContent=a.getProductContent.bind(a),a.getProductSidebar=a.getProductSidebar.bind(a),a}return l(t,e),t.prototype.getProductContent=function(){if(!this.props.content)return v;var e=this.props.params.ProductsTbl,t=this.props.products;e&&"All"!==e&&(t=this.props.products.filter(function(t){return t.type==e||t.brand==e}));var o=c.default.cloneElement(this.props.content,{products:t,productType:this.props.params.product,ajaxState:this.props.ajaxState});return o},t.prototype.getProductSidebar=function(){if(!this.props.sidebar)return N;var e=c.default.cloneElement(this.props.sidebar,{products:this.props.products,productType:this.props.params.product,ProductsTbl:this.props.params.ProductsTbl});return e},t.prototype.render=function(){var e=[{link:"Home",desc:"Home"},{link:"/products",desc:"Products"}];return this.props.params.product&&e.push({link:"/products/"+this.props.params.product+"/All",desc:this.props.params.product}),this.props.params.ProductsTbl&&e.push({link:"",desc:this.props.params.ProductsTbl}),c.default.createElement("div",{className:"container"},c.default.createElement("div",{className:"row"},c.default.createElement("div",{className:"col-lg-12"},c.default.createElement(b.Breadcrumb,{linkPair:e})),c.default.createElement("div",{className:"col-md-3 col-lg-2 hidden-sm hidden-xs sidebar"},this.getProductSidebar()),c.default.createElement("div",{className:"col-md-9 col-lg-10 roghtcontent"},this.getProductContent())))},t}(c.default.Component),g=(0,u.connect)(i)((0,m.default)(y,[h.loadProducts]));t.ProductsPage=g},987:function(e,t,o){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.ProductIndex=void 0;var n=o(0),r=a(n),l=o(367),i=r.default.createElement("div",null,r.default.createElement(l.Paragraph,{smallTitle:"Lorem ipsum dolor sit amet",title:"DVR"},'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'),r.default.createElement(l.Paragraph,{smallTitle:"Lorem ipsum dolor sit amet",title:"Kit"},'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'),r.default.createElement(l.Paragraph,{smallTitle:"Lorem ipsum dolor sit amet",title:"CCTV Camera"},'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'),r.default.createElement(l.Paragraph,{smallTitle:"Lorem ipsum dolor sit amet",title:"Instrusion Alarm"},'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'),r.default.createElement(l.Paragraph,{smallTitle:"Lorem ipsum dolor sit amet",title:"Video Intercom"},'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."')),u=function(){return i};t.ProductIndex=u}});