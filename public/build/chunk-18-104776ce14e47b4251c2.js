webpackJsonp([18,46,50],{313:function(e,t,i){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var n=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,i,r,n){var o=t&&t.defaultProps,a=arguments.length-3;if(i||0===a||(i={}),i&&o)for(var s in o)void 0===i[s]&&(i[s]=o[s]);else i||(i=o||{});if(1===a)i.children=n;else if(a>1){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+3];i.children=u}return{$$typeof:e,type:t,key:void 0===r?null:""+r,ref:null,props:i,_owner:null}}}(),o=i(0),a=(r(o),i(85)),s=i(723),u=r(s),c=i(16),l=i(748),d=i(84);i(715);var p=n(d.BigHeader,{smallTitle:"Provide friendly services and reliable support"},void 0,"About Us"),m=n("div",{className:"col-sm-9"},void 0,n(d.OrangeBoard,{},void 0,n("p",{},void 0,"At ",n("span",{className:"text_logo"},void 0,n("strong",{},void 0,"Hi-Tech Digital CCTV")),", our aim is to provide you with ",n("b",{},void 0,"professional")," advice through our ",n("b",{},void 0,"experience")," to satisfy all your security surveillance needs through our ",n("b",{},void 0,"friendly services"),". We will only provide you with products of the highest ",n("b",{},void 0,"quality")," for your surveillance soultion and will continue to provide an ongoing ",n("b",{},void 0,"reliable")," support."),n("p",{},void 0,"Our products are predominantly Made in Taiwan and Made in Korea to ensure the best of its ",n("b",{},void 0,"quality")," while still maintaining an ",n("b",{},void 0,"affordable")," price."),n("p",{},void 0,"To meet all your needs, we endeavour to ",n("b",{},void 0,"explain")," all the functions and features of our products until you ",n("b",{},void 0,"understand")," them ",n("b",{},void 0,"clearly")," before you make any decisions. We will continue to provide ",n("b",{},void 0,"friendly")," services and ",n("b",{},void 0,"reliable")," support to our customers to ensure the best results can be obtained from our products."))),f=n("div",{className:"col-sm-3"},void 0,n("img",{className:"img-responsive asia center",alt:"Ausrtralian Security Industry Association Limited",title:"Ausrtralian Security Industry Association Limited",src:"img/ASIALmemberjpeg_hires.jpg"})),h=n("div",{className:"col-sm-12"},void 0,n(d.BigHeader,{smallTitle:""},void 0,"Brands We Carry")),v=n("p",{className:"note"},void 0,"These logos are all copyright of their respective owners."),b=function(e){return n("div",{className:"container"},void 0,n("div",{className:"row"},void 0,n("div",{className:"col-lg-12"},void 0,n(d.Breadcrumb,{linkPair:[{link:"/home",desc:"Home"},{link:"",desc:"About Us"}]}),p),m,f,h,n("div",{className:"col-sm-12 brand"},void 0,v,n("table",{className:"table borderless"},void 0,n("tbody",{},void 0,l.BrandsData.reduce(function(e,t,i){return i%4==0?e.push([t]):e[e.length-1].push(t),e},[]).map(function(e,t){return n("tr",{},t,e.map(function(e,t){return n("td",{},t,n(a.ImageLoader,{src:e.img,alt:e.brand,title:e.brand,minHeight:"60px"}))}))}))))))};t.default=(0,c.connect)(null)((0,u.default)(b,[]))},715:function(e,t){},723:function(e,t,i){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function s(e,t){return function(i){function r(){return n(this,r),o(this,i.apply(this,arguments))}return a(r,i),r.fetchData=function(e){var i=e.dispatch,r=e.params,n=void 0===r?{}:r,o=e.authorize,a=void 0===o?[]:o,s=e.device,u=e.specificActionCreators,c=m.concat(u||t),l=c.map(function(e){return e?i(e({params:n,device:s})):null});return a&&a.length&&l.concat(a.map(function(e){switch(e){case"admin":return i(authActions.userCheckAdmin());case"normal":return i(authActions.userCheckAuth());case"reAuth":return i(authActions.userReAuth());default:return null}})),Promise.all(l)},r.prototype.componentDidUpdate=function(e){var t=this.props,i=t.location,r=(t.dispatch,e.location);(i.pathname!==r.pathname||i.search!==r.search)&&this._fetchDataOnClient()},r.prototype.componentDidMount=function(){var e=this.props,t=e.authorize,i=e.dispatch;if(p){if(t&&t.length){var r=t.map(function(e){switch(e){case"admin":return i(authActions.userCheckAdmin());case"normal":return i(authActions.userCheckAuth());case"reAuth":return i(authActions.userReAuth());default:return null}});Promise.all(r)}}else this._fetchDataOnClient();p=!1},r.prototype._fetchDataOnClient=function(){r.fetchData({dispatch:this.props.dispatch,params:this.props.match.params,authorize:this.props.authorize})},r.prototype.render=function(){return c.default.createElement(e,this.props)},r}(c.default.Component)}t.__esModule=!0,t.default=s;var u=i(0),c=r(u),l=i(271),d=i(268),p=!0,m=[l.getDevice,d.loadCategories]},748:function(e,t,i){"use strict";t.__esModule=!0;var r=[{brand:"BOSCH",img:"/img/brands/bosch.jpg"},{brand:"DigiGuard",img:"/img/brands/DigiGuard.jpg"},{brand:"EverFocus",img:"/img/brands/everfocus.png"},{brand:"FUTURO",img:"/img/brands/futuro.png"},{brand:"Honeywell",img:"/img/brands/honeywell.gif"},{brand:"HIKVISION",img:"/img/brands/hikvision.png"},{brand:"Haakili",img:"/img/brands/Haakili.jpg"},{brand:"iCATCH",img:"/img/brands/icatch.png"},{brand:"KCE",img:"/img/brands/kce.gif"},{brand:"Secuzone",img:"/img/brands/secuzone.png"},{brand:"Samsung",img:"/img/brands/asmsung_l.jpg"},{brand:"UNIMO",img:"/img/brands/unimo.jpg"}];t.BrandsData=r}});