webpackJsonp([34,50],{269:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.CustomTextInputTd=t.CustomNumberInputTd=t.CustomDel=void 0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,r,o){var u=t&&t.defaultProps,a=arguments.length-3;if(n||0===a||(n={}),n&&u)for(var l in u)void 0===n[l]&&(n[l]=u[l]);else n||(n=u||{});if(1===a)n.children=o;else if(a>1){for(var i=Array(a),d=0;d<a;d++)i[d]=arguments[d+3];n.children=i}return{$$typeof:e,type:t,key:void 0===r?null:""+r,ref:null,props:n,_owner:null}}}(),a=n(0),l=r(a),i=function(e){return u("td",{className:"td-delete-item"},void 0,u("i",{className:"fa fa-close icon-item delete-item delete-item-rigth","data-id":e.rowData.id,onClick:e.delItem}))},d=function(e){return u("input",{className:"form-control",type:e.type,value:e.tdData,"data-id":e.rowData.id,name:e.field,onChange:e.setInput})},f=function(e){return u("td",{},void 0,l.default.createElement(d,o({type:"text"},e)))},c=function(e){return u("td",{},void 0,l.default.createElement(d,o({type:"number"},e)))};t.CustomDel=i,t.CustomNumberInputTd=c,t.CustomTextInputTd=f}});