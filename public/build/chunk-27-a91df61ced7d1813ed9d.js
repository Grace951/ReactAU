webpackJsonp([27,50],{295:function(t,e,r){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function u(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}e.__esModule=!0,e.Footer=void 0;var l=function(){var t="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(e,r,o,n){var i=e&&e.defaultProps,u=arguments.length-3;if(r||0===u||(r={}),r&&i)for(var l in i)void 0===r[l]&&(r[l]=i[l]);else r||(r=i||{});if(1===u)r.children=n;else if(u>1){for(var a=Array(u),c=0;c<u;c++)a[c]=arguments[c+3];r.children=a}return{$$typeof:t,type:e,key:void 0===o?null:""+o,ref:null,props:r,_owner:null}}}(),a=r(0),c=o(a),s=function(t){function e(r){n(this,e);var o=i(this,t.call(this,r));return o.getActiveStyle=o.getActiveStyle.bind(o),o.getFooterStyle=o.getFooterStyle.bind(o),o.changeCurrent=o.changeCurrent.bind(o),o}return u(e,t),e.prototype.getActiveStyle=function(t){return{opacity:t===this.props.currentId?1:.5}},e.prototype.getFooterStyle=function(){var t={};return this.props.thumb||(t.height="30px"),t},e.prototype.changeCurrent=function(t){var e=parseInt(t.target.getAttribute("data-id"));this.props.setCurrent(e)},e.prototype.render=function(){var t=this;return l("div",{className:"carousel-footer",style:this.getFooterStyle()},void 0,l("div",{className:"box"},void 0,Array.apply(null,{length:this.props.dots}).map(function(e,r){return l("div",{className:"carousel-dot","data-id":r,style:t.getActiveStyle(r),onClick:t.changeCurrent},r)})))},e}(c.default.Component);e.Footer=s}});