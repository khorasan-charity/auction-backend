"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[928],{23754:function(t,e,r){r.d(e,{t:function(){return a}});var n=r(64090);function a(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{rerender:e=!1,delay:r=0}=t,a=(0,n.useRef)(!1),[o,i]=(0,n.useState)(!1);return(0,n.useEffect)(()=>{a.current=!0;let t=null;return e&&(r>0?t=setTimeout(()=>{i(!0)},r):i(!0)),()=>{a.current=!1,e&&i(!1),t&&clearTimeout(t)}},[e]),[(0,n.useCallback)(()=>a.current,[]),o]}},83378:function(t,e,r){r.d(e,{D:function(){return b}});let n=new Set(["id"]),a=new Set(["aria-label","aria-labelledby","aria-describedby","aria-details"]),o=new Set(["href","hrefLang","target","rel","download","ping","referrerPolicy"]),i=/^(data-.*)$/;var l=r(64090);window.document&&window.document.createElement;let s=new Map;var u=r(75504),f=r(3729),c=r(186);let m=new Map,p=!1;try{p="exceptZero"===new Intl.NumberFormat("de-DE",{signDisplay:"exceptZero"}).resolvedOptions().signDisplay}catch(t){}let h=!1;try{h="unit"===new Intl.NumberFormat("de-DE",{style:"unit",unit:"degree"}).resolvedOptions().style}catch(t){}let d={degree:{narrow:{default:"\xb0","ja-JP":" 度","zh-TW":"度","sl-SI":" \xb0"}}};class y{format(t){let e="";if(e=p||null==this.options.signDisplay?this.numberFormatter.format(t):function(t,e,r){if("auto"===e)return t.format(r);{if("never"===e)return t.format(Math.abs(r));let n=!1;if("always"===e?n=r>0||Object.is(r,0):"exceptZero"===e&&(Object.is(r,-0)||Object.is(r,0)?r=Math.abs(r):n=r>0),!n)return t.format(r);{let e=t.format(-r),n=t.format(r),a=e.replace(n,"").replace(/\u200e|\u061C/,"");return 1!=[...a].length&&console.warn("@react-aria/i18n polyfill for NumberFormat signDisplay: Unsupported case"),e.replace(n,"!!!").replace(a,"+").replace("!!!",n)}}}(this.numberFormatter,this.options.signDisplay,t),"unit"===this.options.style&&!h){var r;let{unit:t,unitDisplay:n="short",locale:a}=this.resolvedOptions();if(!t)return e;let o=null===(r=d[t])||void 0===r?void 0:r[n];e+=o[a]||o.default}return e}formatToParts(t){return this.numberFormatter.formatToParts(t)}formatRange(t,e){if("function"==typeof this.numberFormatter.formatRange)return this.numberFormatter.formatRange(t,e);if(e<t)throw RangeError("End date must be >= start date");return"".concat(this.format(t)," – ").concat(this.format(e))}formatRangeToParts(t,e){if("function"==typeof this.numberFormatter.formatRangeToParts)return this.numberFormatter.formatRangeToParts(t,e);if(e<t)throw RangeError("End date must be >= start date");let r=this.numberFormatter.formatToParts(t),n=this.numberFormatter.formatToParts(e);return[...r.map(t=>({...t,source:"startRange"})),{type:"literal",value:" – ",source:"shared"},...n.map(t=>({...t,source:"endRange"}))]}resolvedOptions(){let t=this.numberFormatter.resolvedOptions();return p||null==this.options.signDisplay||(t={...t,signDisplay:this.options.signDisplay}),h||"unit"!==this.options.style||(t={...t,style:"unit",unit:this.options.unit,unitDisplay:this.options.unitDisplay}),t}constructor(t,e={}){this.numberFormatter=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{numberingSystem:r}=e;if(r&&t.includes("-nu-")&&(t.includes("-u-")||(t+="-u-"),t+="-nu-".concat(r)),"unit"===e.style&&!h){var n;let{unit:t,unitDisplay:r="short"}=e;if(!t)throw Error('unit option must be provided with style: "unit"');if(!(null===(n=d[t])||void 0===n?void 0:n[r]))throw Error("Unsupported unit ".concat(t," with unitDisplay = ").concat(r));e={...e,style:"decimal"}}let a=t+(e?Object.entries(e).sort((t,e)=>t[0]<e[0]?-1:1).join():"");if(m.has(a))return m.get(a);let o=new Intl.NumberFormat(t,e);return m.set(a,o),o}(t,e),this.options=e}}function b(t){let{value:e=0,minValue:r=0,maxValue:m=100,valueLabel:p,isIndeterminate:h,formatOptions:d={style:"percent"}}=t,b=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{labelable:r,isLink:l,propNames:s}=e,u={};for(let e in t)Object.prototype.hasOwnProperty.call(t,e)&&(n.has(e)||r&&a.has(e)||l&&o.has(e)||(null==s?void 0:s.has(e))||i.test(e))&&(u[e]=t[e]);return u}(t,{labelable:!0}),{labelProps:g,fieldProps:v}=(0,f.N)({...t,labelElementType:"span"}),w=((e=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1/0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1/0;return Math.min(Math.max(t,e),r)}(e,r,m))-r)/(m-r),D=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{locale:e}=(0,c.j)();return(0,l.useMemo)(()=>new y(e,t),[e,t])}(d);if(!h&&!p){let t="percent"===d.style?w:e;p=D.format(t)}return{progressBarProps:function(){for(var t=arguments.length,e=Array(t),r=0;r<t;r++)e[r]=arguments[r];let n={...e[0]};for(let t=1;t<e.length;t++){let r=e[t];for(let t in r){let e=n[t],a=r[t];"function"==typeof e&&"function"==typeof a&&"o"===t[0]&&"n"===t[1]&&t.charCodeAt(2)>=65&&90>=t.charCodeAt(2)?n[t]=function(){for(var t=arguments.length,e=Array(t),r=0;r<t;r++)e[r]=arguments[r];return function(){for(var t=arguments.length,r=Array(t),n=0;n<t;n++)r[n]=arguments[n];for(let t of e)"function"==typeof t&&t(...r)}}(e,a):("className"===t||"UNSAFE_className"===t)&&"string"==typeof e&&"string"==typeof a?n[t]=(0,u.Z)(e,a):"id"===t&&e&&a?n.id=function(t,e){if(t===e)return t;let r=s.get(t);if(r)return r(e),e;let n=s.get(e);return n?(n(t),t):e}(e,a):n[t]=void 0!==a?a:e}}return n}(b,{...v,"aria-valuenow":h?void 0:e,"aria-valuemin":r,"aria-valuemax":m,"aria-valuetext":h?void 0:p,role:"progressbar"}),labelProps:g}}}}]);