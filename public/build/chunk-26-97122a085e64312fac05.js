webpackJsonp([26,50],{267:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var c=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,o,r){var i=t&&t.defaultProps,l=arguments.length-3;if(n||0===l||(n={}),n&&i)for(var c in i)void 0===n[c]&&(n[c]=i[c]);else n||(n=i||{});if(1===l)n.children=r;else if(l>1){for(var s=Array(l),a=0;a<l;a++)s[a]=arguments[a+3];n.children=s}return{$$typeof:e,type:t,key:void 0===o?null:""+o,ref:null,props:n,_owner:null}}}(),s=n(0),a=o(s),f=function(e){function t(n){r(this,t);var o=i(this,e.call(this,n));return o.state={select:n.init},o.handleClick=o.handleClick.bind(o),o}return l(t,e),t.prototype.handleClick=function(e){var t=!this.state.select;this.setState(function(e,n){return{select:t}}),this.props.selectIt&&this.props.selectIt(t)},t.prototype.render=function(){var e="fa fa-heart";return this.state.select||(e+="-o"),c("i",{onClick:this.handleClick,className:e,style:{color:"#CC3300"}})},t}(a.default.Component);f.defaultProps={init:!1},t.default=f}});