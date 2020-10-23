/*! For license information please see 2358c029.07938e2d.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{113:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return y}));var r=n(0),o=n.n(r);function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},u=Object.keys(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),f=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=f(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,u=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=f(n),d=r,y=p["".concat(c,".").concat(d)]||p[d]||s[d]||u;return n?o.a.createElement(y,a(a({ref:t},l),{},{components:n})):o.a.createElement(y,a({ref:t},l))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var u=n.length,c=new Array(u);c[0]=d;var a={};for(var i in t)hasOwnProperty.call(t,i)&&(a[i]=t[i]);a.originalType=e,a.mdxType="string"==typeof e?e:r,c[1]=a;for(var l=2;l<u;l++)c[l]=n[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},114:function(e,t,n){"use strict";e.exports=n(115)},115:function(e,t,n){"use strict";var r=n(116),o="function"==typeof Symbol&&Symbol.for,u=o?Symbol.for("react.element"):60103,c=o?Symbol.for("react.portal"):60106,a=o?Symbol.for("react.fragment"):60107,i=o?Symbol.for("react.strict_mode"):60108,l=o?Symbol.for("react.profiler"):60114,f=o?Symbol.for("react.provider"):60109,p=o?Symbol.for("react.context"):60110,s=o?Symbol.for("react.forward_ref"):60112,d=o?Symbol.for("react.suspense"):60113,y=o?Symbol.for("react.memo"):60115,m=o?Symbol.for("react.lazy"):60116,b="function"==typeof Symbol&&Symbol.iterator;function v(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function O(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||h}function j(){}function w(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||h}O.prototype.isReactComponent={},O.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(v(85));this.updater.enqueueSetState(this,e,t,"setState")},O.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},j.prototype=O.prototype;var S=w.prototype=new j;S.constructor=w,r(S,O.prototype),S.isPureReactComponent=!0;var k={current:null},C=Object.prototype.hasOwnProperty,P={key:!0,ref:!0,__self:!0,__source:!0};function E(e,t,n){var r,o={},c=null,a=null;if(null!=t)for(r in void 0!==t.ref&&(a=t.ref),void 0!==t.key&&(c=""+t.key),t)C.call(t,r)&&!P.hasOwnProperty(r)&&(o[r]=t[r]);var i=arguments.length-2;if(1===i)o.children=n;else if(1<i){for(var l=Array(i),f=0;f<i;f++)l[f]=arguments[f+2];o.children=l}if(e&&e.defaultProps)for(r in i=e.defaultProps)void 0===o[r]&&(o[r]=i[r]);return{$$typeof:u,type:e,key:c,ref:a,props:o,_owner:k.current}}function x(e){return"object"==typeof e&&null!==e&&e.$$typeof===u}var _=/\/+/g,R=[];function $(e,t,n,r){if(R.length){var o=R.pop();return o.result=e,o.keyPrefix=t,o.func=n,o.context=r,o.count=0,o}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function T(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>R.length&&R.push(e)}function D(e,t,n,r){var o=typeof e;"undefined"!==o&&"boolean"!==o||(e=null);var a=!1;if(null===e)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case u:case c:a=!0}}if(a)return n(r,e,""===t?"."+N(e,0):t),1;if(a=0,t=""===t?".":t+":",Array.isArray(e))for(var i=0;i<e.length;i++){var l=t+N(o=e[i],i);a+=D(o,l,n,r)}else if(null===e||"object"!=typeof e?l=null:l="function"==typeof(l=b&&e[b]||e["@@iterator"])?l:null,"function"==typeof l)for(e=l.call(e),i=0;!(o=e.next()).done;)a+=D(o=o.value,l=t+N(o,i++),n,r);else if("object"===o)throw n=""+e,Error(v(31,"[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n,""));return a}function I(e,t,n){return null==e?0:D(e,"",t,n)}function N(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function A(e,t){e.func.call(e.context,t,e.count++)}function M(e,t,n){var r=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?U(e,r,n,(function(e){return e})):null!=e&&(x(e)&&(e=function(e,t){return{$$typeof:u,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(_,"$&/")+"/")+n)),r.push(e))}function U(e,t,n,r,o){var u="";null!=n&&(u=(""+n).replace(_,"$&/")+"/"),I(e,M,t=$(t,u,r,o)),T(t)}var q={current:null};function F(){var e=q.current;if(null===e)throw Error(v(321));return e}var L={ReactCurrentDispatcher:q,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:k,IsSomeRendererActing:{current:!1},assign:r};t.Children={map:function(e,t,n){if(null==e)return e;var r=[];return U(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;I(e,A,t=$(null,null,t,n)),T(t)},count:function(e){return I(e,(function(){return null}),null)},toArray:function(e){var t=[];return U(e,t,null,(function(e){return e})),t},only:function(e){if(!x(e))throw Error(v(143));return e}},t.Component=O,t.Fragment=a,t.Profiler=l,t.PureComponent=w,t.StrictMode=i,t.Suspense=d,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=L,t.cloneElement=function(e,t,n){if(null==e)throw Error(v(267,e));var o=r({},e.props),c=e.key,a=e.ref,i=e._owner;if(null!=t){if(void 0!==t.ref&&(a=t.ref,i=k.current),void 0!==t.key&&(c=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(f in t)C.call(t,f)&&!P.hasOwnProperty(f)&&(o[f]=void 0===t[f]&&void 0!==l?l[f]:t[f])}var f=arguments.length-2;if(1===f)o.children=n;else if(1<f){l=Array(f);for(var p=0;p<f;p++)l[p]=arguments[p+2];o.children=l}return{$$typeof:u,type:e.type,key:c,ref:a,props:o,_owner:i}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:p,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:f,_context:e},e.Consumer=e},t.createElement=E,t.createFactory=function(e){var t=E.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:s,render:e}},t.isValidElement=x,t.lazy=function(e){return{$$typeof:m,_ctor:e,_status:-1,_result:null}},t.memo=function(e,t){return{$$typeof:y,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return F().useCallback(e,t)},t.useContext=function(e,t){return F().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return F().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return F().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return F().useLayoutEffect(e,t)},t.useMemo=function(e,t){return F().useMemo(e,t)},t.useReducer=function(e,t,n){return F().useReducer(e,t,n)},t.useRef=function(e){return F().useRef(e)},t.useState=function(e){return F().useState(e)},t.version="16.13.1"},116:function(e,t,n){"use strict";var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;function c(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,t){for(var n,a,i=c(e),l=1;l<arguments.length;l++){for(var f in n=Object(arguments[l]))o.call(n,f)&&(i[f]=n[f]);if(r){a=r(n);for(var p=0;p<a.length;p++)u.call(n,a[p])&&(i[a[p]]=n[a[p]])}}return i}},64:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return a})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return f}));var r=n(2),o=n(6),u=(n(114),n(113)),c={id:"installing-a-dependency",title:"Installing a Dependency"},a={unversionedId:"installing-a-dependency",id:"installing-a-dependency",isDocsHomePage:!1,title:"Installing a Dependency",description:"The generated project includes React and ReactDOM as dependencies. It also includes a set of scripts used by Create React App as a development dependency. You may install other dependencies (for example, React Router) with npm:",source:"@site/../docs/installing-a-dependency.md",slug:"/installing-a-dependency",permalink:"/docs/installing-a-dependency",editUrl:"https://github.com/facebook/create-react-app/edit/master/docusaurus/website/../docs/installing-a-dependency.md",version:"current",lastUpdatedBy:"Ian Sutherland",lastUpdatedAt:1571940855,sidebar:"docs",previous:{title:"Code Splitting",permalink:"/docs/code-splitting"},next:{title:"Importing a Component",permalink:"/docs/importing-a-component"}},i=[],l={rightToc:i};function f(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(u.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(u.b)("p",null,"The generated project includes React and ReactDOM as dependencies. It also includes a set of scripts used by Create React App as a development dependency. You may install other dependencies (for example, React Router) with ",Object(u.b)("inlineCode",{parentName:"p"},"npm"),":"),Object(u.b)("pre",null,Object(u.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"npm install --save react-router-dom\n")),Object(u.b)("p",null,"Alternatively you may use ",Object(u.b)("inlineCode",{parentName:"p"},"yarn"),":"),Object(u.b)("pre",null,Object(u.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"yarn add react-router-dom\n")),Object(u.b)("p",null,"This works for any library, not only ",Object(u.b)("inlineCode",{parentName:"p"},"react-router-dom"),"."))}f.isMDXComponent=!0}}]);