(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[702],{91774:function(e,t,n){"use strict";n.d(t,{F:function(){return l},f:function(){return u}});var i=n(64090);let a=["light","dark"],r="(prefers-color-scheme: dark)",o=(0,i.createContext)(void 0),s={setTheme:e=>{},themes:[]},l=()=>{var e;return null!==(e=(0,i.useContext)(o))&&void 0!==e?e:s},u=e=>(0,i.useContext)(o)?i.createElement(i.Fragment,null,e.children):i.createElement(d,e),c=["light","dark"],d=e=>{let{forcedTheme:t,disableTransitionOnChange:n=!1,enableSystem:s=!0,enableColorScheme:l=!0,storageKey:u="theme",themes:d=c,defaultTheme:g=s?"system":"light",attribute:y="data-theme",value:_,children:w,nonce:b}=e,[E,S]=(0,i.useState)(()=>f(u,g)),[x,M]=(0,i.useState)(()=>f(u)),P=_?Object.values(_):d,k=(0,i.useCallback)(e=>{let t=e;if(!t)return;"system"===e&&s&&(t=p());let i=_?_[t]:t,r=n?m():null,o=document.documentElement;if("class"===y?(o.classList.remove(...P),i&&o.classList.add(i)):i?o.setAttribute(y,i):o.removeAttribute(y),l){let e=a.includes(g)?g:null,n=a.includes(t)?t:e;o.style.colorScheme=n}null==r||r()},[]),C=(0,i.useCallback)(e=>{S(e);try{localStorage.setItem(u,e)}catch(e){}},[t]),A=(0,i.useCallback)(e=>{M(p(e)),"system"===E&&s&&!t&&k("system")},[E,t]);(0,i.useEffect)(()=>{let e=window.matchMedia(r);return e.addListener(A),A(e),()=>e.removeListener(A)},[A]),(0,i.useEffect)(()=>{let e=e=>{e.key===u&&C(e.newValue||g)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[C]),(0,i.useEffect)(()=>{k(null!=t?t:E)},[t,E]);let T=(0,i.useMemo)(()=>({theme:E,setTheme:C,forcedTheme:t,resolvedTheme:"system"===E?x:E,themes:s?[...d,"system"]:d,systemTheme:s?x:void 0}),[E,C,t,x,s,d]);return i.createElement(o.Provider,{value:T},i.createElement(h,{forcedTheme:t,disableTransitionOnChange:n,enableSystem:s,enableColorScheme:l,storageKey:u,themes:d,defaultTheme:g,attribute:y,value:_,children:w,attrs:P,nonce:b}),w)},h=(0,i.memo)(e=>{let{forcedTheme:t,storageKey:n,attribute:o,enableSystem:s,enableColorScheme:l,defaultTheme:u,value:c,attrs:d,nonce:h}=e,f="system"===u,m="class"===o?"var d=document.documentElement,c=d.classList;c.remove(".concat(d.map(e=>"'".concat(e,"'")).join(","),");"):"var d=document.documentElement,n='".concat(o,"',s='setAttribute';"),p=l?a.includes(u)&&u?"if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'".concat(u,"'"):"if(e==='light'||e==='dark')d.style.colorScheme=e":"",g=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=!(arguments.length>2)||void 0===arguments[2]||arguments[2],i=c?c[e]:e,r=t?e+"|| ''":"'".concat(i,"'"),s="";return l&&n&&!t&&a.includes(e)&&(s+="d.style.colorScheme = '".concat(e,"';")),"class"===o?s+=t||i?"c.add(".concat(r,")"):"null":i&&(s+="d[s](n,".concat(r,")")),s},y=t?"!function(){".concat(m).concat(g(t),"}()"):s?"!function(){try{".concat(m,"var e=localStorage.getItem('").concat(n,"');if('system'===e||(!e&&").concat(f,")){var t='").concat(r,"',m=window.matchMedia(t);if(m.media!==t||m.matches){").concat(g("dark"),"}else{").concat(g("light"),"}}else if(e){").concat(c?"var x=".concat(JSON.stringify(c),";"):"").concat(g(c?"x[e]":"e",!0),"}").concat(f?"":"else{"+g(u,!1,!1)+"}").concat(p,"}catch(e){}}()"):"!function(){try{".concat(m,"var e=localStorage.getItem('").concat(n,"');if(e){").concat(c?"var x=".concat(JSON.stringify(c),";"):"").concat(g(c?"x[e]":"e",!0),"}else{").concat(g(u,!1,!1),";}").concat(p,"}catch(t){}}();");return i.createElement("script",{nonce:h,dangerouslySetInnerHTML:{__html:y}})},()=>!0),f=(e,t)=>{let n;try{n=localStorage.getItem(e)||void 0}catch(e){}return n||t},m=()=>{let e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},p=e=>(e||(e=window.matchMedia(r)),e.matches?"dark":"light")},62883:function(e){e.exports={style:{fontFamily:"'__fonts_955937', '__fonts_Fallback_955937'"},className:"__className_955937",variable:"__variable_955937"}},82901:function(e,t,n){"use strict";n.d(t,{k:function(){return a}});var i=n(64090);function a(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{strict:t=!0,errorMessage:n="useContext: `context` is undefined. Seems you forgot to wrap component within the Provider",name:a}=e,r=i.createContext(void 0);return r.displayName=a,[r.Provider,function e(){var a;let o=i.useContext(r);if(!o&&t){let t=Error(n);throw t.name="ContextError",null==(a=Error.captureStackTrace)||a.call(Error,t,e),t}return o},r]}},73194:function(e,t,n){"use strict";n.d(t,{w:function(){return O}});var i=n(42255);let a=new Set(["Arab","Syrc","Samr","Mand","Thaa","Mend","Nkoo","Adlm","Rohg","Hebr"]),r=new Set(["ae","ar","arc","bcc","bqi","ckb","dv","fa","glk","he","ku","mzn","nqo","pnb","ps","sd","ug","ur","yi"]);function o(e){if(Intl.Locale){let t=new Intl.Locale(e).maximize(),n="function"==typeof t.getTextInfo?t.getTextInfo():t.textInfo;if(n)return"rtl"===n.direction;if(t.script)return a.has(t.script)}let t=e.split("-")[0];return r.has(t)}var s=n(64090),l=n(5031);let u=Symbol.for("react-aria.i18n.locale");function c(){let e=window[u]||"undefined"!=typeof navigator&&(navigator.language||navigator.userLanguage)||"en-US";try{Intl.DateTimeFormat.supportedLocalesOf([e])}catch(t){e="en-US"}return{locale:e,direction:o(e)?"rtl":"ltr"}}let d=c(),h=new Set;function f(){for(let e of(d=c(),h))e(d)}let m=s.createContext(null);function p(e){let{locale:t,children:n}=e,i=function(){let e=(0,l.Av)(),[t,n]=(0,s.useState)(d);return((0,s.useEffect)(()=>(0===h.size&&window.addEventListener("languagechange",f),h.add(n),()=>{h.delete(n),0===h.size&&window.removeEventListener("languagechange",f)}),[]),e)?{locale:"en-US",direction:"ltr"}:t}(),a=s.useMemo(()=>t?{locale:t,direction:o(t)?"rtl":"ltr"}:i,[i,t]);return s.createElement(m.Provider,{value:a},n)}let g=null;function y(e){var t;return null!=window.navigator&&((null===(t=window.navigator.userAgentData)||void 0===t?void 0:t.brands.some(t=>e.test(t.brand)))||e.test(window.navigator.userAgent))}function _(e){var t;return null!=window.navigator&&e.test((null===(t=window.navigator.userAgentData)||void 0===t?void 0:t.platform)||window.navigator.platform)}function w(){return _(/^Mac/i)}let b=(0,s.createContext)({isNative:!0,open:function(e,t){x(e,e=>S(e,t))},useHref:e=>e});function E(e){let{children:t,navigate:n,useHref:i}=e,a=(0,s.useMemo)(()=>({isNative:!1,open:(e,t,i,a)=>{x(e,e=>{let r;(r=e.getAttribute("target"))&&"_self"!==r||e.origin!==location.origin||e.hasAttribute("download")||t.metaKey||t.ctrlKey||t.altKey||t.shiftKey?S(e,t):n(i,a)})},useHref:i||(e=>e)}),[n,i]);return s.createElement(b.Provider,{value:a},t)}function S(e,t){var n,i;let a=!(arguments.length>2)||void 0===arguments[2]||arguments[2],{metaKey:r,ctrlKey:o,altKey:s,shiftKey:l}=t;y(/Firefox/i)&&(null===(i=window.event)||void 0===i?void 0:null===(n=i.type)||void 0===n?void 0:n.startsWith("key"))&&"_blank"===e.target&&(w()?r=!0:o=!0);let u=y(/AppleWebKit/i)&&!y(/Chrome/i)&&w()&&!(_(/^iPad/i)||w()&&navigator.maxTouchPoints>1)?new KeyboardEvent("keydown",{keyIdentifier:"Enter",metaKey:r,ctrlKey:o,altKey:s,shiftKey:l}):new MouseEvent("click",{metaKey:r,ctrlKey:o,altKey:s,shiftKey:l,bubbles:!0,cancelable:!0});S.isOpening=a,function(e){if(function(){if(null==g){g=!1;try{document.createElement("div").focus({get preventScroll(){return g=!0,!0}})}catch(e){}}return g}())e.focus({preventScroll:!0});else{let t=function(e){let t=e.parentNode,n=[],i=document.scrollingElement||document.documentElement;for(;t instanceof HTMLElement&&t!==i;)(t.offsetHeight<t.scrollHeight||t.offsetWidth<t.scrollWidth)&&n.push({element:t,scrollTop:t.scrollTop,scrollLeft:t.scrollLeft}),t=t.parentNode;return i instanceof HTMLElement&&n.push({element:i,scrollTop:i.scrollTop,scrollLeft:i.scrollLeft}),n}(e);e.focus(),function(e){for(let{element:t,scrollTop:n,scrollLeft:i}of e)t.scrollTop=n,t.scrollLeft=i}(t)}}(e),e.dispatchEvent(u),S.isOpening=!1}function x(e,t){if(e instanceof HTMLAnchorElement)t(e);else if(e.hasAttribute("data-href")){let n=document.createElement("a");n.href=e.getAttribute("data-href"),e.hasAttribute("data-target")&&(n.target=e.getAttribute("data-target")),e.hasAttribute("data-rel")&&(n.rel=e.getAttribute("data-rel")),e.hasAttribute("data-download")&&(n.download=e.getAttribute("data-download")),e.hasAttribute("data-ping")&&(n.ping=e.getAttribute("data-ping")),e.hasAttribute("data-referrer-policy")&&(n.referrerPolicy=e.getAttribute("data-referrer-policy")),e.appendChild(n),t(n),e.removeChild(n)}}S.isOpening=!1,n(89542);let M=s.createContext(null);function P(e){let{children:t}=e,n=(0,s.useContext)(M),[i,a]=(0,s.useState)(0),r=(0,s.useMemo)(()=>({parent:n,modalCount:i,addModal(){a(e=>e+1),n&&n.addModal()},removeModal(){a(e=>e-1),n&&n.removeModal()}}),[n,i]);return s.createElement(M.Provider,{value:r},t)}function k(e){let t;let{modalProviderProps:n}={modalProviderProps:{"aria-hidden":!!(t=(0,s.useContext)(M))&&t.modalCount>0||null}};return s.createElement("div",{"data-overlay-container":!0,...e,...n})}function C(e){return s.createElement(P,null,s.createElement(k,e))}var A=n(36832),T=n(3827),O=e=>{let{children:t,navigate:n,disableAnimation:a=!1,disableRipple:r=!1,skipFramerMotionAnimations:o=a,validationBehavior:l="aria",locale:u="en-US",defaultDates:c,createCalendar:d,...h}=e,f=t;n&&(f=(0,T.jsx)(E,{navigate:n,children:f}));let m=(0,s.useMemo)(()=>(a&&o&&(A.c.skipAnimations=!0),{createCalendar:d,defaultDates:c,disableAnimation:a,disableRipple:r,validationBehavior:l}),[d,null==c?void 0:c.maxDate,null==c?void 0:c.minDate,a,r,l]);return(0,T.jsx)(i.a,{value:m,children:(0,T.jsx)(p,{locale:u,children:(0,T.jsx)(C,{...h,children:f})})})}},42255:function(e,t,n){"use strict";n.d(t,{a:function(){return i},w:function(){return a}});var[i,a]=(0,n(82901).k)({name:"ProviderContext",strict:!1})},5031:function(e,t,n){"use strict";n.d(t,{Av:function(){return f},gP:function(){return u}});var i=n(64090);let a={prefix:String(Math.round(1e10*Math.random())),current:0},r=i.createContext(a),o=i.createContext(!1),s=!!(window.document&&window.document.createElement),l=new WeakMap,u="function"==typeof i.useId?function(e){let t=i.useId(),[n]=(0,i.useState)(f()),r=n?"react-aria":"react-aria".concat(a.prefix);return e||"".concat(r,"-").concat(t)}:function(e){let t=(0,i.useContext)(r);t!==a||s||console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.");let n=function(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=(0,i.useContext)(r),n=(0,i.useRef)(null);if(null===n.current&&!e){var a,o;let e=null===(o=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED)||void 0===o?void 0:null===(a=o.ReactCurrentOwner)||void 0===a?void 0:a.current;if(e){let n=l.get(e);null==n?l.set(e,{id:t.current,state:e.memoizedState}):e.memoizedState!==n.state&&(t.current=n.id,l.delete(e))}n.current=++t.current}return n.current}(!!e),o="react-aria".concat(t.prefix);return e||"".concat(o,"-").concat(n)};function c(){return!1}function d(){return!0}function h(e){return()=>{}}function f(){return"function"==typeof i.useSyncExternalStore?i.useSyncExternalStore(h,c,d):(0,i.useContext)(o)}},1793:function(e,t,n){"use strict";n.d(t,{R:function(){return g},m:function(){return p}});var i,a,r,o,s=n(78239),l=n(34781),u=n(84498),c=n(13229),d=n(87271),h=n(45139),f=n(2041),m=n(90326),p=(i=new WeakMap,a=new WeakMap,r=new WeakMap,o=new WeakSet,class extends f.F{setOptions(e){this.options=e,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(e){(0,s._)(this,i).includes(e)||((0,s._)(this,i).push(e),this.clearGcTimeout(),(0,s._)(this,a).notify({type:"observerAdded",mutation:this,observer:e}))}removeObserver(e){(0,u._)(this,i,(0,s._)(this,i).filter(t=>t!==e)),this.scheduleGc(),(0,s._)(this,a).notify({type:"observerRemoved",mutation:this,observer:e})}optionalRemove(){(0,s._)(this,i).length||("pending"===this.state.status?this.scheduleGc():(0,s._)(this,a).remove(this))}continue(){var e,t;return null!==(t=null===(e=(0,s._)(this,r))||void 0===e?void 0:e.continue())&&void 0!==t?t:this.execute(this.state.variables)}async execute(e){var t,n,i,l,d,h,f,p,g,_,w,b,E,S,x,M,P,k,C,A,T;(0,u._)(this,r,(0,m.Mz)({fn:()=>this.options.mutationFn?this.options.mutationFn(e):Promise.reject(Error("No mutationFn found")),onFail:(e,t)=>{(0,c._)(this,o,y).call(this,{type:"failed",failureCount:e,error:t})},onPause:()=>{(0,c._)(this,o,y).call(this,{type:"pause"})},onContinue:()=>{(0,c._)(this,o,y).call(this,{type:"continue"})},retry:null!==(t=this.options.retry)&&void 0!==t?t:0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>(0,s._)(this,a).canRun(this)}));let O="pending"===this.state.status,Q=!(0,s._)(this,r).canStart();try{if(!O){(0,c._)(this,o,y).call(this,{type:"pending",variables:e,isPaused:Q}),await (null===(_=(w=(0,s._)(this,a).config).onMutate)||void 0===_?void 0:_.call(w,e,this));let t=await (null===(b=(E=this.options).onMutate)||void 0===b?void 0:b.call(E,e));t!==this.state.context&&(0,c._)(this,o,y).call(this,{type:"pending",context:t,variables:e,isPaused:Q})}let t=await (0,s._)(this,r).start();return await (null===(n=(i=(0,s._)(this,a).config).onSuccess)||void 0===n?void 0:n.call(i,t,e,this.state.context,this)),await (null===(l=(d=this.options).onSuccess)||void 0===l?void 0:l.call(d,t,e,this.state.context)),await (null===(h=(f=(0,s._)(this,a).config).onSettled)||void 0===h?void 0:h.call(f,t,null,this.state.variables,this.state.context,this)),await (null===(p=(g=this.options).onSettled)||void 0===p?void 0:p.call(g,t,null,e,this.state.context)),(0,c._)(this,o,y).call(this,{type:"success",data:t}),t}catch(t){try{throw await (null===(S=(x=(0,s._)(this,a).config).onError)||void 0===S?void 0:S.call(x,t,e,this.state.context,this)),await (null===(M=(P=this.options).onError)||void 0===M?void 0:M.call(P,t,e,this.state.context)),await (null===(k=(C=(0,s._)(this,a).config).onSettled)||void 0===k?void 0:k.call(C,void 0,t,this.state.variables,this.state.context,this)),await (null===(A=(T=this.options).onSettled)||void 0===A?void 0:A.call(T,void 0,t,e,this.state.context)),t}finally{(0,c._)(this,o,y).call(this,{type:"error",error:t})}}finally{(0,s._)(this,a).runNext(this)}}constructor(e){super(),(0,d._)(this,o),(0,l._)(this,i,{writable:!0,value:void 0}),(0,l._)(this,a,{writable:!0,value:void 0}),(0,l._)(this,r,{writable:!0,value:void 0}),this.mutationId=e.mutationId,(0,u._)(this,a,e.mutationCache),(0,u._)(this,i,[]),this.state=e.state||g(),this.setOptions(e.options),this.scheduleGc()}});function g(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}function y(e){this.state=(t=>{switch(e.type){case"failed":return{...t,failureCount:e.failureCount,failureReason:e.error};case"pause":return{...t,isPaused:!0};case"continue":return{...t,isPaused:!1};case"pending":return{...t,context:e.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:e.isPaused,status:"pending",variables:e.variables,submittedAt:Date.now()};case"success":return{...t,data:e.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...t,data:void 0,error:e.error,failureCount:t.failureCount+1,failureReason:e.error,isPaused:!1,status:"error"}}})(this.state),h.V.batch(()=>{(0,s._)(this,i).forEach(t=>{t.onMutationUpdate(e)}),(0,s._)(this,a).notify({mutation:this,type:"updated",action:e})})}},66391:function(e,t,n){"use strict";n.d(t,{S:function(){return O}});var i,a,r,o,s,l,u,c,d,h,f,m=n(78239),p=n(34781),g=n(84498),y=n(274);function _(e,t){var n=(0,y.J)(e,t,"update");return function(e,t){if(t.set){if(!t.get)throw TypeError("attempted to read set only private field");return"__destrWrapper"in t||(t.__destrWrapper={set value(v){t.set.call(e,v)},get value(){return t.get.call(e)}}),t.__destrWrapper}if(!t.writable)throw TypeError("attempted to set read only private field");return t}(e,n)}var w=n(46063),b=n(4668),E=n(45139),S=n(44614),x=(i=new WeakMap,class extends S.l{build(e,t,n){var i;let a=t.queryKey,r=null!==(i=t.queryHash)&&void 0!==i?i:(0,w.Rm)(a,t),o=this.get(r);return o||(o=new b.A({cache:this,queryKey:a,queryHash:r,options:e.defaultQueryOptions(t),state:n,defaultOptions:e.getQueryDefaults(a)}),this.add(o)),o}add(e){(0,m._)(this,i).has(e.queryHash)||((0,m._)(this,i).set(e.queryHash,e),this.notify({type:"added",query:e}))}remove(e){let t=(0,m._)(this,i).get(e.queryHash);t&&(e.destroy(),t===e&&(0,m._)(this,i).delete(e.queryHash),this.notify({type:"removed",query:e}))}clear(){E.V.batch(()=>{this.getAll().forEach(e=>{this.remove(e)})})}get(e){return(0,m._)(this,i).get(e)}getAll(){return[...(0,m._)(this,i).values()]}find(e){let t={exact:!0,...e};return this.getAll().find(e=>(0,w._x)(t,e))}findAll(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=this.getAll();return Object.keys(e).length>0?t.filter(t=>(0,w._x)(e,t)):t}notify(e){E.V.batch(()=>{this.listeners.forEach(t=>{t(e)})})}onFocus(){E.V.batch(()=>{this.getAll().forEach(e=>{e.onFocus()})})}onOnline(){E.V.batch(()=>{this.getAll().forEach(e=>{e.onOnline()})})}constructor(e={}){super(),(0,p._)(this,i,{writable:!0,value:void 0}),this.config=e,(0,g._)(this,i,new Map)}}),M=n(1793),P=(a=new WeakMap,r=new WeakMap,class extends S.l{build(e,t,n){let i=new M.m({mutationCache:this,mutationId:++_(this,r).value,options:e.defaultMutationOptions(t),state:n});return this.add(i),i}add(e){var t;let n=k(e),i=null!==(t=(0,m._)(this,a).get(n))&&void 0!==t?t:[];i.push(e),(0,m._)(this,a).set(n,i),this.notify({type:"added",mutation:e})}remove(e){let t=k(e);if((0,m._)(this,a).has(t)){var n;let i=null===(n=(0,m._)(this,a).get(t))||void 0===n?void 0:n.filter(t=>t!==e);i&&(0===i.length?(0,m._)(this,a).delete(t):(0,m._)(this,a).set(t,i))}this.notify({type:"removed",mutation:e})}canRun(e){var t;let n=null===(t=(0,m._)(this,a).get(k(e)))||void 0===t?void 0:t.find(e=>"pending"===e.state.status);return!n||n===e}runNext(e){var t,n;let i=null===(t=(0,m._)(this,a).get(k(e)))||void 0===t?void 0:t.find(t=>t!==e&&t.state.isPaused);return null!==(n=null==i?void 0:i.continue())&&void 0!==n?n:Promise.resolve()}clear(){E.V.batch(()=>{this.getAll().forEach(e=>{this.remove(e)})})}getAll(){return[...(0,m._)(this,a).values()].flat()}find(e){let t={exact:!0,...e};return this.getAll().find(e=>(0,w.X7)(t,e))}findAll(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.getAll().filter(t=>(0,w.X7)(e,t))}notify(e){E.V.batch(()=>{this.listeners.forEach(t=>{t(e)})})}resumePausedMutations(){let e=this.getAll().filter(e=>e.state.isPaused);return E.V.batch(()=>Promise.all(e.map(e=>e.continue().catch(w.ZT))))}constructor(e={}){super(),(0,p._)(this,a,{writable:!0,value:void 0}),(0,p._)(this,r,{writable:!0,value:void 0}),this.config=e,(0,g._)(this,a,new Map),(0,g._)(this,r,Date.now())}});function k(e){var t,n;return null!==(n=null===(t=e.options.scope)||void 0===t?void 0:t.id)&&void 0!==n?n:String(e.mutationId)}var C=n(79555),A=n(17211);function T(e,t){let{pages:n,pageParams:i}=t,a=n.length-1;return n.length>0?e.getNextPageParam(n[a],n,i[a],i):void 0}var O=(o=new WeakMap,s=new WeakMap,l=new WeakMap,u=new WeakMap,c=new WeakMap,d=new WeakMap,h=new WeakMap,f=new WeakMap,class{mount(){_(this,d).value++,1===(0,m._)(this,d)&&((0,g._)(this,h,C.j.subscribe(async e=>{e&&(await this.resumePausedMutations(),(0,m._)(this,o).onFocus())})),(0,g._)(this,f,A.N.subscribe(async e=>{e&&(await this.resumePausedMutations(),(0,m._)(this,o).onOnline())})))}unmount(){var e,t;_(this,d).value--,0===(0,m._)(this,d)&&(null===(e=(0,m._)(this,h))||void 0===e||e.call(this),(0,g._)(this,h,void 0),null===(t=(0,m._)(this,f))||void 0===t||t.call(this),(0,g._)(this,f,void 0))}isFetching(e){return(0,m._)(this,o).findAll({...e,fetchStatus:"fetching"}).length}isMutating(e){return(0,m._)(this,s).findAll({...e,status:"pending"}).length}getQueryData(e){var t;let n=this.defaultQueryOptions({queryKey:e});return null===(t=(0,m._)(this,o).get(n.queryHash))||void 0===t?void 0:t.state.data}ensureQueryData(e){let t=this.getQueryData(e.queryKey);if(void 0===t)return this.fetchQuery(e);{let n=this.defaultQueryOptions(e),i=(0,m._)(this,o).build(this,n);return e.revalidateIfStale&&i.isStaleByTime((0,w.KC)(n.staleTime,i))&&this.prefetchQuery(n),Promise.resolve(t)}}getQueriesData(e){return(0,m._)(this,o).findAll(e).map(e=>{let{queryKey:t,state:n}=e;return[t,n.data]})}setQueryData(e,t,n){let i=this.defaultQueryOptions({queryKey:e}),a=(0,m._)(this,o).get(i.queryHash),r=null==a?void 0:a.state.data,s=(0,w.SE)(t,r);if(void 0!==s)return(0,m._)(this,o).build(this,i).setData(s,{...n,manual:!0})}setQueriesData(e,t,n){return E.V.batch(()=>(0,m._)(this,o).findAll(e).map(e=>{let{queryKey:i}=e;return[i,this.setQueryData(i,t,n)]}))}getQueryState(e){var t;let n=this.defaultQueryOptions({queryKey:e});return null===(t=(0,m._)(this,o).get(n.queryHash))||void 0===t?void 0:t.state}removeQueries(e){let t=(0,m._)(this,o);E.V.batch(()=>{t.findAll(e).forEach(e=>{t.remove(e)})})}resetQueries(e,t){let n=(0,m._)(this,o),i={type:"active",...e};return E.V.batch(()=>(n.findAll(e).forEach(e=>{e.reset()}),this.refetchQueries(i,t)))}cancelQueries(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n={revert:!0,...t};return Promise.all(E.V.batch(()=>(0,m._)(this,o).findAll(e).map(e=>e.cancel(n)))).then(w.ZT).catch(w.ZT)}invalidateQueries(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return E.V.batch(()=>{var n,i;if((0,m._)(this,o).findAll(e).forEach(e=>{e.invalidate()}),"none"===e.refetchType)return Promise.resolve();let a={...e,type:null!==(i=null!==(n=e.refetchType)&&void 0!==n?n:e.type)&&void 0!==i?i:"active"};return this.refetchQueries(a,t)})}refetchQueries(){var e;let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0,i={...n,cancelRefetch:null===(e=null==n?void 0:n.cancelRefetch)||void 0===e||e};return Promise.all(E.V.batch(()=>(0,m._)(this,o).findAll(t).filter(e=>!e.isDisabled()).map(e=>{let t=e.fetch(void 0,i);return i.throwOnError||(t=t.catch(w.ZT)),"paused"===e.state.fetchStatus?Promise.resolve():t}))).then(w.ZT)}fetchQuery(e){let t=this.defaultQueryOptions(e);void 0===t.retry&&(t.retry=!1);let n=(0,m._)(this,o).build(this,t);return n.isStaleByTime((0,w.KC)(t.staleTime,n))?n.fetch(t):Promise.resolve(n.state.data)}prefetchQuery(e){return this.fetchQuery(e).then(w.ZT).catch(w.ZT)}fetchInfiniteQuery(e){var t;return e.behavior=(t=e.pages,{onFetch:(e,n)=>{let i=async()=>{var n,i,a,r,o,s;let l;let u=e.options,c=null===(a=e.fetchOptions)||void 0===a?void 0:null===(i=a.meta)||void 0===i?void 0:null===(n=i.fetchMore)||void 0===n?void 0:n.direction,d=(null===(r=e.state.data)||void 0===r?void 0:r.pages)||[],h=(null===(o=e.state.data)||void 0===o?void 0:o.pageParams)||[],f=!1,m=t=>{Object.defineProperty(t,"signal",{enumerable:!0,get:()=>(e.signal.aborted?f=!0:e.signal.addEventListener("abort",()=>{f=!0}),e.signal)})},p=(0,w.cG)(e.options,e.fetchOptions),g=async(t,n,i)=>{if(f)return Promise.reject();if(null==n&&t.pages.length)return Promise.resolve(t);let a={queryKey:e.queryKey,pageParam:n,direction:i?"backward":"forward",meta:e.options.meta};m(a);let r=await p(a),{maxPages:o}=e.options,s=i?w.Ht:w.VX;return{pages:s(t.pages,r,o),pageParams:s(t.pageParams,n,o)}};if(c&&d.length){let e="backward"===c,t={pages:d,pageParams:h},n=(e?function(e,t){var n;let{pages:i,pageParams:a}=t;return i.length>0?null===(n=e.getPreviousPageParam)||void 0===n?void 0:n.call(e,i[0],i,a[0],a):void 0}:T)(u,t);l=await g(t,n,e)}else{l=await g({pages:[],pageParams:[]},null!==(s=h[0])&&void 0!==s?s:u.initialPageParam);let e=null!=t?t:d.length;for(let t=1;t<e;t++){let e=T(u,l);if(null==e)break;l=await g(l,e)}}return l};e.options.persister?e.fetchFn=()=>{var t,a;return null===(t=(a=e.options).persister)||void 0===t?void 0:t.call(a,i,{queryKey:e.queryKey,meta:e.options.meta,signal:e.signal},n)}:e.fetchFn=i}}),this.fetchQuery(e)}prefetchInfiniteQuery(e){return this.fetchInfiniteQuery(e).then(w.ZT).catch(w.ZT)}resumePausedMutations(){return A.N.isOnline()?(0,m._)(this,s).resumePausedMutations():Promise.resolve()}getQueryCache(){return(0,m._)(this,o)}getMutationCache(){return(0,m._)(this,s)}getDefaultOptions(){return(0,m._)(this,l)}setDefaultOptions(e){(0,g._)(this,l,e)}setQueryDefaults(e,t){(0,m._)(this,u).set((0,w.Ym)(e),{queryKey:e,defaultOptions:t})}getQueryDefaults(e){let t=[...(0,m._)(this,u).values()],n={};return t.forEach(t=>{(0,w.to)(e,t.queryKey)&&(n={...n,...t.defaultOptions})}),n}setMutationDefaults(e,t){(0,m._)(this,c).set((0,w.Ym)(e),{mutationKey:e,defaultOptions:t})}getMutationDefaults(e){let t=[...(0,m._)(this,c).values()],n={};return t.forEach(t=>{(0,w.to)(e,t.mutationKey)&&(n={...n,...t.defaultOptions})}),n}defaultQueryOptions(e){if(e._defaulted)return e;let t={...(0,m._)(this,l).queries,...this.getQueryDefaults(e.queryKey),...e,_defaulted:!0};return t.queryHash||(t.queryHash=(0,w.Rm)(t.queryKey,t)),void 0===t.refetchOnReconnect&&(t.refetchOnReconnect="always"!==t.networkMode),void 0===t.throwOnError&&(t.throwOnError=!!t.suspense),!t.networkMode&&t.persister&&(t.networkMode="offlineFirst"),!0!==t.enabled&&t.queryFn===w.CN&&(t.enabled=!1),t}defaultMutationOptions(e){return(null==e?void 0:e._defaulted)?e:{...(0,m._)(this,l).mutations,...(null==e?void 0:e.mutationKey)&&this.getMutationDefaults(e.mutationKey),...e,_defaulted:!0}}clear(){(0,m._)(this,o).clear(),(0,m._)(this,s).clear()}constructor(e={}){(0,p._)(this,o,{writable:!0,value:void 0}),(0,p._)(this,s,{writable:!0,value:void 0}),(0,p._)(this,l,{writable:!0,value:void 0}),(0,p._)(this,u,{writable:!0,value:void 0}),(0,p._)(this,c,{writable:!0,value:void 0}),(0,p._)(this,d,{writable:!0,value:void 0}),(0,p._)(this,h,{writable:!0,value:void 0}),(0,p._)(this,f,{writable:!0,value:void 0}),(0,g._)(this,o,e.queryCache||new x),(0,g._)(this,s,e.mutationCache||new P),(0,g._)(this,l,e.defaultOptions||{}),(0,g._)(this,u,new Map),(0,g._)(this,c,new Map),(0,g._)(this,d,0)}})},36832:function(e,t,n){"use strict";n.d(t,{c:function(){return i}});let i={skipAnimations:!1,useManualTiming:!1}}}]);