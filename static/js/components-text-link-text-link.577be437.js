(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"./src/components/TextLink/TextLink.mdx":function(e,n,t){"use strict";t.r(n);var r=t("../../node_modules/react/index.js"),o=t.n(r),a=t("../../node_modules/@mdx-js/tag/dist/index.js"),i=t("../../node_modules/docz/dist/index.m.js"),l=t("./src/components/Link/Link.tsx"),s=t("./src/utils/cn.ts");function c(e){return(c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function u(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,n){return!n||"object"!==c(n)&&"function"!==typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function d(e,n){return(d=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var f=Object(s.a)("mfui-text-link"),y=function(e){function n(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),m(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}var t,o,a;return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&d(e,n)}(n,r["Component"]),t=n,(o=[{key:"render",value:function(){var e=this.props,n=e.underlineVisibility,t=e.underlineStyle,o=e.color,a=e.className,i=p(e,["underlineVisibility","underlineStyle","color","className"]);return r.createElement(l.a,Object.assign({},i,{className:f("",{"underline-visibility":n,"underline-style":t,color:o},a)}))}}])&&u(t.prototype,o),a&&u(t,a),n}();Object.defineProperty(y,"defaultProps",{configurable:!0,enumerable:!0,writable:!0,value:{underlineVisibility:"hover",underlineStyle:"solid",color:"blue"}});var b=y;try{y.displayName="TextLink",y.__docgenInfo={description:"",displayName:"TextLink",props:{color:{defaultValue:{value:"blue"},description:"Color",name:"color",required:!1,type:{name:'"white" | "black" | "gray" | "blue" | "green" | "inherit"'}},underlineVisibility:{defaultValue:{value:"hover"},description:"Underline visibility",name:"underlineVisibility",required:!1,type:{name:'"hover" | "always"'}},underlineStyle:{defaultValue:{value:"solid"},description:"Underline style",name:"underlineStyle",required:!1,type:{name:'"solid" | "dashed" | "border" | "none"'}},target:{defaultValue:null,description:"Target - property tag <a>",name:"target",required:!1,type:{name:'"_self" | "_blank" | "_parent" | "_top"'}},href:{defaultValue:null,description:"Link",name:"href",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"Custom class name",name:"className",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"Click handler",name:"onClick",required:!1,type:{name:"(e: SyntheticEvent<EventTarget>) => void"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/TextLink/TextLink.tsx#TextLink"]={docgenInfo:y.__docgenInfo,name:"TextLink",path:"src/components/TextLink/TextLink.tsx#TextLink"})}catch(e){}function h(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}n.default=function(e){var n=e.components;h(e,["components"]);return o.a.createElement(a.MDXTag,{name:"wrapper",components:n},o.a.createElement(a.MDXTag,{name:"h1",components:n,props:{id:"textlink"}},o.a.createElement(a.MDXTag,{name:"a",components:n,parentName:"h1",props:{"aria-hidden":!0,href:"#textlink"}},o.a.createElement(a.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"TextLink"),o.a.createElement(a.MDXTag,{name:"h2",components:n,props:{id:"properties"}},o.a.createElement(a.MDXTag,{name:"a",components:n,parentName:"h2",props:{"aria-hidden":!0,href:"#properties"}},o.a.createElement(a.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"Properties"),o.a.createElement(i.e,{of:b}),o.a.createElement(a.MDXTag,{name:"h2",components:n,props:{id:"basic-usage"}},o.a.createElement(a.MDXTag,{name:"a",components:n,parentName:"h2",props:{"aria-hidden":!0,href:"#basic-usage"}},o.a.createElement(a.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"Basic usage"),o.a.createElement(i.d,{__position:1,__code:'<TextLink href="https://google.com">Click me</TextLink>'},o.a.createElement(b,{href:"https://google.com"},"Click me")))}}}]);