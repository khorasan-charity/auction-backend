(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[702],{91774:function(t,e,i){"use strict";i.d(e,{F:function(){return l},f:function(){return u}});var n=i(64090);let a=["light","dark"],r="(prefers-color-scheme: dark)",s=(0,n.createContext)(void 0),o={setTheme:t=>{},themes:[]},l=()=>{var t;return null!==(t=(0,n.useContext)(s))&&void 0!==t?t:o},u=t=>(0,n.useContext)(s)?n.createElement(n.Fragment,null,t.children):n.createElement(h,t),c=["light","dark"],h=t=>{let{forcedTheme:e,disableTransitionOnChange:i=!1,enableSystem:o=!0,enableColorScheme:l=!0,storageKey:u="theme",themes:h=c,defaultTheme:y=o?"system":"light",attribute:g="data-theme",value:_,children:w,nonce:b}=t,[S,M]=(0,n.useState)(()=>f(u,y)),[C,E]=(0,n.useState)(()=>f(u)),A=_?Object.values(_):h,O=(0,n.useCallback)(t=>{let e=t;if(!e)return;"system"===t&&o&&(e=m());let n=_?_[e]:e,r=i?p():null,s=document.documentElement;if("class"===g?(s.classList.remove(...A),n&&s.classList.add(n)):n?s.setAttribute(g,n):s.removeAttribute(g),l){let t=a.includes(y)?y:null,i=a.includes(e)?e:t;s.style.colorScheme=i}null==r||r()},[]),k=(0,n.useCallback)(t=>{M(t);try{localStorage.setItem(u,t)}catch(t){}},[e]),x=(0,n.useCallback)(t=>{E(m(t)),"system"===S&&o&&!e&&O("system")},[S,e]);(0,n.useEffect)(()=>{let t=window.matchMedia(r);return t.addListener(x),x(t),()=>t.removeListener(x)},[x]),(0,n.useEffect)(()=>{let t=t=>{t.key===u&&k(t.newValue||y)};return window.addEventListener("storage",t),()=>window.removeEventListener("storage",t)},[k]),(0,n.useEffect)(()=>{O(null!=e?e:S)},[e,S]);let P=(0,n.useMemo)(()=>({theme:S,setTheme:k,forcedTheme:e,resolvedTheme:"system"===S?C:S,themes:o?[...h,"system"]:h,systemTheme:o?C:void 0}),[S,k,e,C,o,h]);return n.createElement(s.Provider,{value:P},n.createElement(d,{forcedTheme:e,disableTransitionOnChange:i,enableSystem:o,enableColorScheme:l,storageKey:u,themes:h,defaultTheme:y,attribute:g,value:_,children:w,attrs:A,nonce:b}),w)},d=(0,n.memo)(t=>{let{forcedTheme:e,storageKey:i,attribute:s,enableSystem:o,enableColorScheme:l,defaultTheme:u,value:c,attrs:h,nonce:d}=t,f="system"===u,p="class"===s?"var d=document.documentElement,c=d.classList;c.remove(".concat(h.map(t=>"'".concat(t,"'")).join(","),");"):"var d=document.documentElement,n='".concat(s,"',s='setAttribute';"),m=l?a.includes(u)&&u?"if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'".concat(u,"'"):"if(e==='light'||e==='dark')d.style.colorScheme=e":"",y=function(t){let e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=!(arguments.length>2)||void 0===arguments[2]||arguments[2],n=c?c[t]:t,r=e?t+"|| ''":"'".concat(n,"'"),o="";return l&&i&&!e&&a.includes(t)&&(o+="d.style.colorScheme = '".concat(t,"';")),"class"===s?o+=e||n?"c.add(".concat(r,")"):"null":n&&(o+="d[s](n,".concat(r,")")),o},g=e?"!function(){".concat(p).concat(y(e),"}()"):o?"!function(){try{".concat(p,"var e=localStorage.getItem('").concat(i,"');if('system'===e||(!e&&").concat(f,")){var t='").concat(r,"',m=window.matchMedia(t);if(m.media!==t||m.matches){").concat(y("dark"),"}else{").concat(y("light"),"}}else if(e){").concat(c?"var x=".concat(JSON.stringify(c),";"):"").concat(y(c?"x[e]":"e",!0),"}").concat(f?"":"else{"+y(u,!1,!1)+"}").concat(m,"}catch(e){}}()"):"!function(){try{".concat(p,"var e=localStorage.getItem('").concat(i,"');if(e){").concat(c?"var x=".concat(JSON.stringify(c),";"):"").concat(y(c?"x[e]":"e",!0),"}else{").concat(y(u,!1,!1),";}").concat(m,"}catch(t){}}();");return n.createElement("script",{nonce:d,dangerouslySetInnerHTML:{__html:g}})},()=>!0),f=(t,e)=>{let i;try{i=localStorage.getItem(t)||void 0}catch(t){}return i||e},p=()=>{let t=document.createElement("style");return t.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(t),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(t)},1)}},m=t=>(t||(t=window.matchMedia(r)),t.matches?"dark":"light")},62883:function(t){t.exports={style:{fontFamily:"'__fonts_955937', '__fonts_Fallback_955937'"},className:"__className_955937",variable:"__variable_955937"}},82901:function(t,e,i){"use strict";i.d(e,{k:function(){return a}});var n=i(64090);function a(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{strict:e=!0,errorMessage:i="useContext: `context` is undefined. Seems you forgot to wrap component within the Provider",name:a}=t,r=n.createContext(void 0);return r.displayName=a,[r.Provider,function t(){var a;let s=n.useContext(r);if(!s&&e){let e=Error(i);throw e.name="ContextError",null==(a=Error.captureStackTrace)||a.call(Error,e,t),e}return s},r]}},73194:function(t,e,i){"use strict";i.d(e,{w:function(){return T}});var n=i(42255);let a=new Set(["Arab","Syrc","Samr","Mand","Thaa","Mend","Nkoo","Adlm","Rohg","Hebr"]),r=new Set(["ae","ar","arc","bcc","bqi","ckb","dv","fa","glk","he","ku","mzn","nqo","pnb","ps","sd","ug","ur","yi"]);function s(t){if(Intl.Locale){let e=new Intl.Locale(t).maximize(),i="function"==typeof e.getTextInfo?e.getTextInfo():e.textInfo;if(i)return"rtl"===i.direction;if(e.script)return a.has(e.script)}let e=t.split("-")[0];return r.has(e)}var o=i(64090),l=i(5031);let u=Symbol.for("react-aria.i18n.locale");function c(){let t=window[u]||"undefined"!=typeof navigator&&(navigator.language||navigator.userLanguage)||"en-US";try{Intl.DateTimeFormat.supportedLocalesOf([t])}catch(e){t="en-US"}return{locale:t,direction:s(t)?"rtl":"ltr"}}let h=c(),d=new Set;function f(){for(let t of(h=c(),d))t(h)}let p=o.createContext(null);function m(t){let{locale:e,children:i}=t,n=function(){let t=(0,l.Av)(),[e,i]=(0,o.useState)(h);return((0,o.useEffect)(()=>(0===d.size&&window.addEventListener("languagechange",f),d.add(i),()=>{d.delete(i),0===d.size&&window.removeEventListener("languagechange",f)}),[]),t)?{locale:"en-US",direction:"ltr"}:e}(),a=o.useMemo(()=>e?{locale:e,direction:s(e)?"rtl":"ltr"}:n,[n,e]);return o.createElement(p.Provider,{value:a},i)}let y=null;function g(t){var e;return null!=window.navigator&&((null===(e=window.navigator.userAgentData)||void 0===e?void 0:e.brands.some(e=>t.test(e.brand)))||t.test(window.navigator.userAgent))}function _(t){var e;return null!=window.navigator&&t.test((null===(e=window.navigator.userAgentData)||void 0===e?void 0:e.platform)||window.navigator.platform)}function w(){return _(/^Mac/i)}let b=(0,o.createContext)({isNative:!0,open:function(t,e){C(t,t=>M(t,e))},useHref:t=>t});function S(t){let{children:e,navigate:i,useHref:n}=t,a=(0,o.useMemo)(()=>({isNative:!1,open:(t,e,n,a)=>{C(t,t=>{let r;(r=t.getAttribute("target"))&&"_self"!==r||t.origin!==location.origin||t.hasAttribute("download")||e.metaKey||e.ctrlKey||e.altKey||e.shiftKey?M(t,e):i(n,a)})},useHref:n||(t=>t)}),[i,n]);return o.createElement(b.Provider,{value:a},e)}function M(t,e){var i,n;let a=!(arguments.length>2)||void 0===arguments[2]||arguments[2],{metaKey:r,ctrlKey:s,altKey:o,shiftKey:l}=e;g(/Firefox/i)&&(null===(n=window.event)||void 0===n?void 0:null===(i=n.type)||void 0===i?void 0:i.startsWith("key"))&&"_blank"===t.target&&(w()?r=!0:s=!0);let u=g(/AppleWebKit/i)&&!g(/Chrome/i)&&w()&&!(_(/^iPad/i)||w()&&navigator.maxTouchPoints>1)?new KeyboardEvent("keydown",{keyIdentifier:"Enter",metaKey:r,ctrlKey:s,altKey:o,shiftKey:l}):new MouseEvent("click",{metaKey:r,ctrlKey:s,altKey:o,shiftKey:l,bubbles:!0,cancelable:!0});M.isOpening=a,function(t){if(function(){if(null==y){y=!1;try{document.createElement("div").focus({get preventScroll(){return y=!0,!0}})}catch(t){}}return y}())t.focus({preventScroll:!0});else{let e=function(t){let e=t.parentNode,i=[],n=document.scrollingElement||document.documentElement;for(;e instanceof HTMLElement&&e!==n;)(e.offsetHeight<e.scrollHeight||e.offsetWidth<e.scrollWidth)&&i.push({element:e,scrollTop:e.scrollTop,scrollLeft:e.scrollLeft}),e=e.parentNode;return n instanceof HTMLElement&&i.push({element:n,scrollTop:n.scrollTop,scrollLeft:n.scrollLeft}),i}(t);t.focus(),function(t){for(let{element:e,scrollTop:i,scrollLeft:n}of t)e.scrollTop=i,e.scrollLeft=n}(e)}}(t),t.dispatchEvent(u),M.isOpening=!1}function C(t,e){if(t instanceof HTMLAnchorElement)e(t);else if(t.hasAttribute("data-href")){let i=document.createElement("a");i.href=t.getAttribute("data-href"),t.hasAttribute("data-target")&&(i.target=t.getAttribute("data-target")),t.hasAttribute("data-rel")&&(i.rel=t.getAttribute("data-rel")),t.hasAttribute("data-download")&&(i.download=t.getAttribute("data-download")),t.hasAttribute("data-ping")&&(i.ping=t.getAttribute("data-ping")),t.hasAttribute("data-referrer-policy")&&(i.referrerPolicy=t.getAttribute("data-referrer-policy")),t.appendChild(i),e(i),t.removeChild(i)}}M.isOpening=!1,i(89542);let E=o.createContext(null);function A(t){let{children:e}=t,i=(0,o.useContext)(E),[n,a]=(0,o.useState)(0),r=(0,o.useMemo)(()=>({parent:i,modalCount:n,addModal(){a(t=>t+1),i&&i.addModal()},removeModal(){a(t=>t-1),i&&i.removeModal()}}),[i,n]);return o.createElement(E.Provider,{value:r},e)}function O(t){let e;let{modalProviderProps:i}={modalProviderProps:{"aria-hidden":!!(e=(0,o.useContext)(E))&&e.modalCount>0||null}};return o.createElement("div",{"data-overlay-container":!0,...t,...i})}function k(t){return o.createElement(A,null,o.createElement(O,t))}var x=i(36832),P=i(3827),T=t=>{let{children:e,navigate:i,disableAnimation:a=!1,disableRipple:r=!1,skipFramerMotionAnimations:s=a,validationBehavior:l="aria",locale:u="en-US",defaultDates:c,createCalendar:h,...d}=t,f=e;i&&(f=(0,P.jsx)(S,{navigate:i,children:f}));let p=(0,o.useMemo)(()=>(a&&s&&(x.c.skipAnimations=!0),{createCalendar:h,defaultDates:c,disableAnimation:a,disableRipple:r,validationBehavior:l}),[h,null==c?void 0:c.maxDate,null==c?void 0:c.minDate,a,r,l]);return(0,P.jsx)(n.a,{value:p,children:(0,P.jsx)(m,{locale:u,children:(0,P.jsx)(k,{...d,children:f})})})}},42255:function(t,e,i){"use strict";i.d(e,{a:function(){return n},w:function(){return a}});var[n,a]=(0,i(82901).k)({name:"ProviderContext",strict:!1})},5031:function(t,e,i){"use strict";i.d(e,{Av:function(){return f},gP:function(){return u}});var n=i(64090);let a={prefix:String(Math.round(1e10*Math.random())),current:0},r=n.createContext(a),s=n.createContext(!1),o=!!(window.document&&window.document.createElement),l=new WeakMap,u="function"==typeof n.useId?function(t){let e=n.useId(),[i]=(0,n.useState)(f()),r=i?"react-aria":"react-aria".concat(a.prefix);return t||"".concat(r,"-").concat(e)}:function(t){let e=(0,n.useContext)(r);e!==a||o||console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.");let i=function(){let t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=(0,n.useContext)(r),i=(0,n.useRef)(null);if(null===i.current&&!t){var a,s;let t=null===(s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED)||void 0===s?void 0:null===(a=s.ReactCurrentOwner)||void 0===a?void 0:a.current;if(t){let i=l.get(t);null==i?l.set(t,{id:e.current,state:t.memoizedState}):t.memoizedState!==i.state&&(e.current=i.id,l.delete(t))}i.current=++e.current}return i.current}(!!t),s="react-aria".concat(e.prefix);return t||"".concat(s,"-").concat(i)};function c(){return!1}function h(){return!0}function d(t){return()=>{}}function f(){return"function"==typeof n.useSyncExternalStore?n.useSyncExternalStore(d,c,h):(0,n.useContext)(s)}},1793:function(t,e,i){"use strict";i.d(e,{R:function(){return y},m:function(){return m}});var n,a,r,s,o=i(78239),l=i(34781),u=i(84498),c=i(13229),h=i(87271),d=i(45139),f=i(2041),p=i(90326),m=(n=new WeakMap,a=new WeakMap,r=new WeakMap,s=new WeakSet,class extends f.F{setOptions(t){this.options=t,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(t){(0,o._)(this,n).includes(t)||((0,o._)(this,n).push(t),this.clearGcTimeout(),(0,o._)(this,a).notify({type:"observerAdded",mutation:this,observer:t}))}removeObserver(t){(0,u._)(this,n,(0,o._)(this,n).filter(e=>e!==t)),this.scheduleGc(),(0,o._)(this,a).notify({type:"observerRemoved",mutation:this,observer:t})}optionalRemove(){(0,o._)(this,n).length||("pending"===this.state.status?this.scheduleGc():(0,o._)(this,a).remove(this))}continue(){var t,e;return null!==(e=null===(t=(0,o._)(this,r))||void 0===t?void 0:t.continue())&&void 0!==e?e:this.execute(this.state.variables)}async execute(t){var e,i,n,l,h,d,f,m,y,_,w,b,S,M,C,E,A,O,k,x,P;(0,u._)(this,r,(0,p.Mz)({fn:()=>this.options.mutationFn?this.options.mutationFn(t):Promise.reject(Error("No mutationFn found")),onFail:(t,e)=>{(0,c._)(this,s,g).call(this,{type:"failed",failureCount:t,error:e})},onPause:()=>{(0,c._)(this,s,g).call(this,{type:"pause"})},onContinue:()=>{(0,c._)(this,s,g).call(this,{type:"continue"})},retry:null!==(e=this.options.retry)&&void 0!==e?e:0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>(0,o._)(this,a).canRun(this)}));let T="pending"===this.state.status,F=!(0,o._)(this,r).canStart();try{if(!T){(0,c._)(this,s,g).call(this,{type:"pending",variables:t,isPaused:F}),await (null===(_=(w=(0,o._)(this,a).config).onMutate)||void 0===_?void 0:_.call(w,t,this));let e=await (null===(b=(S=this.options).onMutate)||void 0===b?void 0:b.call(S,t));e!==this.state.context&&(0,c._)(this,s,g).call(this,{type:"pending",context:e,variables:t,isPaused:F})}let e=await (0,o._)(this,r).start();return await (null===(i=(n=(0,o._)(this,a).config).onSuccess)||void 0===i?void 0:i.call(n,e,t,this.state.context,this)),await (null===(l=(h=this.options).onSuccess)||void 0===l?void 0:l.call(h,e,t,this.state.context)),await (null===(d=(f=(0,o._)(this,a).config).onSettled)||void 0===d?void 0:d.call(f,e,null,this.state.variables,this.state.context,this)),await (null===(m=(y=this.options).onSettled)||void 0===m?void 0:m.call(y,e,null,t,this.state.context)),(0,c._)(this,s,g).call(this,{type:"success",data:e}),e}catch(e){try{throw await (null===(M=(C=(0,o._)(this,a).config).onError)||void 0===M?void 0:M.call(C,e,t,this.state.context,this)),await (null===(E=(A=this.options).onError)||void 0===E?void 0:E.call(A,e,t,this.state.context)),await (null===(O=(k=(0,o._)(this,a).config).onSettled)||void 0===O?void 0:O.call(k,void 0,e,this.state.variables,this.state.context,this)),await (null===(x=(P=this.options).onSettled)||void 0===x?void 0:x.call(P,void 0,e,t,this.state.context)),e}finally{(0,c._)(this,s,g).call(this,{type:"error",error:e})}}finally{(0,o._)(this,a).runNext(this)}}constructor(t){super(),(0,h._)(this,s),(0,l._)(this,n,{writable:!0,value:void 0}),(0,l._)(this,a,{writable:!0,value:void 0}),(0,l._)(this,r,{writable:!0,value:void 0}),this.mutationId=t.mutationId,(0,u._)(this,a,t.mutationCache),(0,u._)(this,n,[]),this.state=t.state||y(),this.setOptions(t.options),this.scheduleGc()}});function y(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}function g(t){this.state=(e=>{switch(t.type){case"failed":return{...e,failureCount:t.failureCount,failureReason:t.error};case"pause":return{...e,isPaused:!0};case"continue":return{...e,isPaused:!1};case"pending":return{...e,context:t.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:t.isPaused,status:"pending",variables:t.variables,submittedAt:Date.now()};case"success":return{...e,data:t.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...e,data:void 0,error:t.error,failureCount:e.failureCount+1,failureReason:t.error,isPaused:!1,status:"error"}}})(this.state),d.V.batch(()=>{(0,o._)(this,n).forEach(e=>{e.onMutationUpdate(t)}),(0,o._)(this,a).notify({mutation:this,type:"updated",action:t})})}},4668:function(t,e,i){"use strict";i.d(e,{A:function(){return w},z:function(){return b}});var n,a,r,s,o,l,u,c=i(78239),h=i(34781),d=i(84498),f=i(13229),p=i(87271),m=i(46063),y=i(45139),g=i(90326),_=i(2041),w=(n=new WeakMap,a=new WeakMap,r=new WeakMap,s=new WeakMap,o=new WeakMap,l=new WeakMap,u=new WeakSet,class extends _.F{get meta(){return this.options.meta}get promise(){var t;return null===(t=(0,c._)(this,s))||void 0===t?void 0:t.promise}setOptions(t){this.options={...(0,c._)(this,o),...t},this.updateGcTime(this.options.gcTime)}optionalRemove(){this.observers.length||"idle"!==this.state.fetchStatus||(0,c._)(this,r).remove(this)}setData(t,e){let i=(0,m.oE)(this.state.data,t,this.options);return(0,f._)(this,u,S).call(this,{data:i,type:"success",dataUpdatedAt:null==e?void 0:e.updatedAt,manual:null==e?void 0:e.manual}),i}setState(t,e){(0,f._)(this,u,S).call(this,{type:"setState",state:t,setStateOptions:e})}cancel(t){var e,i;let n=null===(e=(0,c._)(this,s))||void 0===e?void 0:e.promise;return null===(i=(0,c._)(this,s))||void 0===i||i.cancel(t),n?n.then(m.ZT).catch(m.ZT):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState((0,c._)(this,n))}isActive(){return this.observers.some(t=>!1!==(0,m.Nc)(t.options.enabled,this))}isDisabled(){return this.getObserversCount()>0&&!this.isActive()}isStale(){return!!this.state.isInvalidated||(this.getObserversCount()>0?this.observers.some(t=>t.getCurrentResult().isStale):void 0===this.state.data)}isStaleByTime(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return this.state.isInvalidated||void 0===this.state.data||!(0,m.Kp)(this.state.dataUpdatedAt,t)}onFocus(){var t;let e=this.observers.find(t=>t.shouldFetchOnWindowFocus());null==e||e.refetch({cancelRefetch:!1}),null===(t=(0,c._)(this,s))||void 0===t||t.continue()}onOnline(){var t;let e=this.observers.find(t=>t.shouldFetchOnReconnect());null==e||e.refetch({cancelRefetch:!1}),null===(t=(0,c._)(this,s))||void 0===t||t.continue()}addObserver(t){this.observers.includes(t)||(this.observers.push(t),this.clearGcTimeout(),(0,c._)(this,r).notify({type:"observerAdded",query:this,observer:t}))}removeObserver(t){this.observers.includes(t)&&(this.observers=this.observers.filter(e=>e!==t),this.observers.length||((0,c._)(this,s)&&((0,c._)(this,l)?(0,c._)(this,s).cancel({revert:!0}):(0,c._)(this,s).cancelRetry()),this.scheduleGc()),(0,c._)(this,r).notify({type:"observerRemoved",query:this,observer:t}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||(0,f._)(this,u,S).call(this,{type:"invalidate"})}fetch(t,e){var i,n,o;if("idle"!==this.state.fetchStatus){if(void 0!==this.state.data&&(null==e?void 0:e.cancelRefetch))this.cancel({silent:!0});else if((0,c._)(this,s))return(0,c._)(this,s).continueRetry(),(0,c._)(this,s).promise}if(t&&this.setOptions(t),!this.options.queryFn){let t=this.observers.find(t=>t.options.queryFn);t&&this.setOptions(t.options)}let h=new AbortController,p=t=>{Object.defineProperty(t,"signal",{enumerable:!0,get:()=>((0,d._)(this,l,!0),h.signal)})},y={fetchOptions:e,options:this.options,queryKey:this.queryKey,state:this.state,fetchFn:()=>{let t=(0,m.cG)(this.options,e),i={queryKey:this.queryKey,meta:this.meta};return(p(i),(0,d._)(this,l,!1),this.options.persister)?this.options.persister(t,i,this):t(i)}};p(y),null===(i=this.options.behavior)||void 0===i||i.onFetch(y,this),(0,d._)(this,a,this.state),("idle"===this.state.fetchStatus||this.state.fetchMeta!==(null===(n=y.fetchOptions)||void 0===n?void 0:n.meta))&&(0,f._)(this,u,S).call(this,{type:"fetch",meta:null===(o=y.fetchOptions)||void 0===o?void 0:o.meta});let _=t=>{if((0,g.DV)(t)&&t.silent||(0,f._)(this,u,S).call(this,{type:"error",error:t}),!(0,g.DV)(t)){var e,i,n,a;null===(e=(i=(0,c._)(this,r).config).onError)||void 0===e||e.call(i,t,this),null===(n=(a=(0,c._)(this,r).config).onSettled)||void 0===n||n.call(a,this.state.data,t,this)}this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1};return(0,d._)(this,s,(0,g.Mz)({initialPromise:null==e?void 0:e.initialPromise,fn:y.fetchFn,abort:h.abort.bind(h),onSuccess:t=>{var e,i,n,a;if(void 0===t){_(Error("".concat(this.queryHash," data is undefined")));return}try{this.setData(t)}catch(t){_(t);return}null===(e=(i=(0,c._)(this,r).config).onSuccess)||void 0===e||e.call(i,t,this),null===(n=(a=(0,c._)(this,r).config).onSettled)||void 0===n||n.call(a,t,this.state.error,this),this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1},onError:_,onFail:(t,e)=>{(0,f._)(this,u,S).call(this,{type:"failed",failureCount:t,error:e})},onPause:()=>{(0,f._)(this,u,S).call(this,{type:"pause"})},onContinue:()=>{(0,f._)(this,u,S).call(this,{type:"continue"})},retry:y.options.retry,retryDelay:y.options.retryDelay,networkMode:y.options.networkMode,canRun:()=>!0})),(0,c._)(this,s).start()}constructor(t){var e;super(),(0,p._)(this,u),(0,h._)(this,n,{writable:!0,value:void 0}),(0,h._)(this,a,{writable:!0,value:void 0}),(0,h._)(this,r,{writable:!0,value:void 0}),(0,h._)(this,s,{writable:!0,value:void 0}),(0,h._)(this,o,{writable:!0,value:void 0}),(0,h._)(this,l,{writable:!0,value:void 0}),(0,d._)(this,l,!1),(0,d._)(this,o,t.defaultOptions),this.setOptions(t.options),this.observers=[],(0,d._)(this,r,t.cache),this.queryKey=t.queryKey,this.queryHash=t.queryHash,(0,d._)(this,n,function(t){let e="function"==typeof t.initialData?t.initialData():t.initialData,i=void 0!==e,n=i?"function"==typeof t.initialDataUpdatedAt?t.initialDataUpdatedAt():t.initialDataUpdatedAt:0;return{data:e,dataUpdateCount:0,dataUpdatedAt:i?null!=n?n:Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:i?"success":"pending",fetchStatus:"idle"}}(this.options)),this.state=null!==(e=t.state)&&void 0!==e?e:(0,c._)(this,n),this.scheduleGc()}});function b(t,e){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:(0,g.Kw)(e.networkMode)?"fetching":"paused",...void 0===t&&{error:null,status:"pending"}}}function S(t){this.state=(e=>{var i,n;switch(t.type){case"failed":return{...e,fetchFailureCount:t.failureCount,fetchFailureReason:t.error};case"pause":return{...e,fetchStatus:"paused"};case"continue":return{...e,fetchStatus:"fetching"};case"fetch":return{...e,...b(e.data,this.options),fetchMeta:null!==(i=t.meta)&&void 0!==i?i:null};case"success":return{...e,data:t.data,dataUpdateCount:e.dataUpdateCount+1,dataUpdatedAt:null!==(n=t.dataUpdatedAt)&&void 0!==n?n:Date.now(),error:null,isInvalidated:!1,status:"success",...!t.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":let r=t.error;if((0,g.DV)(r)&&r.revert&&(0,c._)(this,a))return{...(0,c._)(this,a),fetchStatus:"idle"};return{...e,error:r,errorUpdateCount:e.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:e.fetchFailureCount+1,fetchFailureReason:r,fetchStatus:"idle",status:"error"};case"invalidate":return{...e,isInvalidated:!0};case"setState":return{...e,...t.state}}})(this.state),y.V.batch(()=>{this.observers.forEach(t=>{t.onQueryUpdate()}),(0,c._)(this,r).notify({query:this,type:"updated",action:t})})}},66391:function(t,e,i){"use strict";i.d(e,{S:function(){return T}});var n,a,r,s,o,l,u,c,h,d,f,p=i(78239),m=i(34781),y=i(84498),g=i(274);function _(t,e){var i=(0,g.J)(t,e,"update");return function(t,e){if(e.set){if(!e.get)throw TypeError("attempted to read set only private field");return"__destrWrapper"in e||(e.__destrWrapper={set value(v){e.set.call(t,v)},get value(){return e.get.call(t)}}),e.__destrWrapper}if(!e.writable)throw TypeError("attempted to set read only private field");return e}(t,i)}var w=i(46063),b=i(4668),S=i(45139),M=i(44614),C=(n=new WeakMap,class extends M.l{build(t,e,i){var n;let a=e.queryKey,r=null!==(n=e.queryHash)&&void 0!==n?n:(0,w.Rm)(a,e),s=this.get(r);return s||(s=new b.A({cache:this,queryKey:a,queryHash:r,options:t.defaultQueryOptions(e),state:i,defaultOptions:t.getQueryDefaults(a)}),this.add(s)),s}add(t){(0,p._)(this,n).has(t.queryHash)||((0,p._)(this,n).set(t.queryHash,t),this.notify({type:"added",query:t}))}remove(t){let e=(0,p._)(this,n).get(t.queryHash);e&&(t.destroy(),e===t&&(0,p._)(this,n).delete(t.queryHash),this.notify({type:"removed",query:t}))}clear(){S.V.batch(()=>{this.getAll().forEach(t=>{this.remove(t)})})}get(t){return(0,p._)(this,n).get(t)}getAll(){return[...(0,p._)(this,n).values()]}find(t){let e={exact:!0,...t};return this.getAll().find(t=>(0,w._x)(e,t))}findAll(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=this.getAll();return Object.keys(t).length>0?e.filter(e=>(0,w._x)(t,e)):e}notify(t){S.V.batch(()=>{this.listeners.forEach(e=>{e(t)})})}onFocus(){S.V.batch(()=>{this.getAll().forEach(t=>{t.onFocus()})})}onOnline(){S.V.batch(()=>{this.getAll().forEach(t=>{t.onOnline()})})}constructor(t={}){super(),(0,m._)(this,n,{writable:!0,value:void 0}),this.config=t,(0,y._)(this,n,new Map)}}),E=i(1793),A=(a=new WeakMap,r=new WeakMap,class extends M.l{build(t,e,i){let n=new E.m({mutationCache:this,mutationId:++_(this,r).value,options:t.defaultMutationOptions(e),state:i});return this.add(n),n}add(t){var e;let i=O(t),n=null!==(e=(0,p._)(this,a).get(i))&&void 0!==e?e:[];n.push(t),(0,p._)(this,a).set(i,n),this.notify({type:"added",mutation:t})}remove(t){let e=O(t);if((0,p._)(this,a).has(e)){var i;let n=null===(i=(0,p._)(this,a).get(e))||void 0===i?void 0:i.filter(e=>e!==t);n&&(0===n.length?(0,p._)(this,a).delete(e):(0,p._)(this,a).set(e,n))}this.notify({type:"removed",mutation:t})}canRun(t){var e;let i=null===(e=(0,p._)(this,a).get(O(t)))||void 0===e?void 0:e.find(t=>"pending"===t.state.status);return!i||i===t}runNext(t){var e,i;let n=null===(e=(0,p._)(this,a).get(O(t)))||void 0===e?void 0:e.find(e=>e!==t&&e.state.isPaused);return null!==(i=null==n?void 0:n.continue())&&void 0!==i?i:Promise.resolve()}clear(){S.V.batch(()=>{this.getAll().forEach(t=>{this.remove(t)})})}getAll(){return[...(0,p._)(this,a).values()].flat()}find(t){let e={exact:!0,...t};return this.getAll().find(t=>(0,w.X7)(e,t))}findAll(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.getAll().filter(e=>(0,w.X7)(t,e))}notify(t){S.V.batch(()=>{this.listeners.forEach(e=>{e(t)})})}resumePausedMutations(){let t=this.getAll().filter(t=>t.state.isPaused);return S.V.batch(()=>Promise.all(t.map(t=>t.continue().catch(w.ZT))))}constructor(t={}){super(),(0,m._)(this,a,{writable:!0,value:void 0}),(0,m._)(this,r,{writable:!0,value:void 0}),this.config=t,(0,y._)(this,a,new Map),(0,y._)(this,r,Date.now())}});function O(t){var e,i;return null!==(i=null===(e=t.options.scope)||void 0===e?void 0:e.id)&&void 0!==i?i:String(t.mutationId)}var k=i(79555),x=i(17211);function P(t,e){let{pages:i,pageParams:n}=e,a=i.length-1;return i.length>0?t.getNextPageParam(i[a],i,n[a],n):void 0}var T=(s=new WeakMap,o=new WeakMap,l=new WeakMap,u=new WeakMap,c=new WeakMap,h=new WeakMap,d=new WeakMap,f=new WeakMap,class{mount(){_(this,h).value++,1===(0,p._)(this,h)&&((0,y._)(this,d,k.j.subscribe(async t=>{t&&(await this.resumePausedMutations(),(0,p._)(this,s).onFocus())})),(0,y._)(this,f,x.N.subscribe(async t=>{t&&(await this.resumePausedMutations(),(0,p._)(this,s).onOnline())})))}unmount(){var t,e;_(this,h).value--,0===(0,p._)(this,h)&&(null===(t=(0,p._)(this,d))||void 0===t||t.call(this),(0,y._)(this,d,void 0),null===(e=(0,p._)(this,f))||void 0===e||e.call(this),(0,y._)(this,f,void 0))}isFetching(t){return(0,p._)(this,s).findAll({...t,fetchStatus:"fetching"}).length}isMutating(t){return(0,p._)(this,o).findAll({...t,status:"pending"}).length}getQueryData(t){var e;let i=this.defaultQueryOptions({queryKey:t});return null===(e=(0,p._)(this,s).get(i.queryHash))||void 0===e?void 0:e.state.data}ensureQueryData(t){let e=this.getQueryData(t.queryKey);if(void 0===e)return this.fetchQuery(t);{let i=this.defaultQueryOptions(t),n=(0,p._)(this,s).build(this,i);return t.revalidateIfStale&&n.isStaleByTime((0,w.KC)(i.staleTime,n))&&this.prefetchQuery(i),Promise.resolve(e)}}getQueriesData(t){return(0,p._)(this,s).findAll(t).map(t=>{let{queryKey:e,state:i}=t;return[e,i.data]})}setQueryData(t,e,i){let n=this.defaultQueryOptions({queryKey:t}),a=(0,p._)(this,s).get(n.queryHash),r=null==a?void 0:a.state.data,o=(0,w.SE)(e,r);if(void 0!==o)return(0,p._)(this,s).build(this,n).setData(o,{...i,manual:!0})}setQueriesData(t,e,i){return S.V.batch(()=>(0,p._)(this,s).findAll(t).map(t=>{let{queryKey:n}=t;return[n,this.setQueryData(n,e,i)]}))}getQueryState(t){var e;let i=this.defaultQueryOptions({queryKey:t});return null===(e=(0,p._)(this,s).get(i.queryHash))||void 0===e?void 0:e.state}removeQueries(t){let e=(0,p._)(this,s);S.V.batch(()=>{e.findAll(t).forEach(t=>{e.remove(t)})})}resetQueries(t,e){let i=(0,p._)(this,s),n={type:"active",...t};return S.V.batch(()=>(i.findAll(t).forEach(t=>{t.reset()}),this.refetchQueries(n,e)))}cancelQueries(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i={revert:!0,...e};return Promise.all(S.V.batch(()=>(0,p._)(this,s).findAll(t).map(t=>t.cancel(i)))).then(w.ZT).catch(w.ZT)}invalidateQueries(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return S.V.batch(()=>{var i,n;if((0,p._)(this,s).findAll(t).forEach(t=>{t.invalidate()}),"none"===t.refetchType)return Promise.resolve();let a={...t,type:null!==(n=null!==(i=t.refetchType)&&void 0!==i?i:t.type)&&void 0!==n?n:"active"};return this.refetchQueries(a,e)})}refetchQueries(){var t;let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=arguments.length>1?arguments[1]:void 0,n={...i,cancelRefetch:null===(t=null==i?void 0:i.cancelRefetch)||void 0===t||t};return Promise.all(S.V.batch(()=>(0,p._)(this,s).findAll(e).filter(t=>!t.isDisabled()).map(t=>{let e=t.fetch(void 0,n);return n.throwOnError||(e=e.catch(w.ZT)),"paused"===t.state.fetchStatus?Promise.resolve():e}))).then(w.ZT)}fetchQuery(t){let e=this.defaultQueryOptions(t);void 0===e.retry&&(e.retry=!1);let i=(0,p._)(this,s).build(this,e);return i.isStaleByTime((0,w.KC)(e.staleTime,i))?i.fetch(e):Promise.resolve(i.state.data)}prefetchQuery(t){return this.fetchQuery(t).then(w.ZT).catch(w.ZT)}fetchInfiniteQuery(t){var e;return t.behavior=(e=t.pages,{onFetch:(t,i)=>{let n=async()=>{var i,n,a,r,s,o;let l;let u=t.options,c=null===(a=t.fetchOptions)||void 0===a?void 0:null===(n=a.meta)||void 0===n?void 0:null===(i=n.fetchMore)||void 0===i?void 0:i.direction,h=(null===(r=t.state.data)||void 0===r?void 0:r.pages)||[],d=(null===(s=t.state.data)||void 0===s?void 0:s.pageParams)||[],f=!1,p=e=>{Object.defineProperty(e,"signal",{enumerable:!0,get:()=>(t.signal.aborted?f=!0:t.signal.addEventListener("abort",()=>{f=!0}),t.signal)})},m=(0,w.cG)(t.options,t.fetchOptions),y=async(e,i,n)=>{if(f)return Promise.reject();if(null==i&&e.pages.length)return Promise.resolve(e);let a={queryKey:t.queryKey,pageParam:i,direction:n?"backward":"forward",meta:t.options.meta};p(a);let r=await m(a),{maxPages:s}=t.options,o=n?w.Ht:w.VX;return{pages:o(e.pages,r,s),pageParams:o(e.pageParams,i,s)}};if(c&&h.length){let t="backward"===c,e={pages:h,pageParams:d},i=(t?function(t,e){var i;let{pages:n,pageParams:a}=e;return n.length>0?null===(i=t.getPreviousPageParam)||void 0===i?void 0:i.call(t,n[0],n,a[0],a):void 0}:P)(u,e);l=await y(e,i,t)}else{l=await y({pages:[],pageParams:[]},null!==(o=d[0])&&void 0!==o?o:u.initialPageParam);let t=null!=e?e:h.length;for(let e=1;e<t;e++){let t=P(u,l);if(null==t)break;l=await y(l,t)}}return l};t.options.persister?t.fetchFn=()=>{var e,a;return null===(e=(a=t.options).persister)||void 0===e?void 0:e.call(a,n,{queryKey:t.queryKey,meta:t.options.meta,signal:t.signal},i)}:t.fetchFn=n}}),this.fetchQuery(t)}prefetchInfiniteQuery(t){return this.fetchInfiniteQuery(t).then(w.ZT).catch(w.ZT)}resumePausedMutations(){return x.N.isOnline()?(0,p._)(this,o).resumePausedMutations():Promise.resolve()}getQueryCache(){return(0,p._)(this,s)}getMutationCache(){return(0,p._)(this,o)}getDefaultOptions(){return(0,p._)(this,l)}setDefaultOptions(t){(0,y._)(this,l,t)}setQueryDefaults(t,e){(0,p._)(this,u).set((0,w.Ym)(t),{queryKey:t,defaultOptions:e})}getQueryDefaults(t){let e=[...(0,p._)(this,u).values()],i={};return e.forEach(e=>{(0,w.to)(t,e.queryKey)&&(i={...i,...e.defaultOptions})}),i}setMutationDefaults(t,e){(0,p._)(this,c).set((0,w.Ym)(t),{mutationKey:t,defaultOptions:e})}getMutationDefaults(t){let e=[...(0,p._)(this,c).values()],i={};return e.forEach(e=>{(0,w.to)(t,e.mutationKey)&&(i={...i,...e.defaultOptions})}),i}defaultQueryOptions(t){if(t._defaulted)return t;let e={...(0,p._)(this,l).queries,...this.getQueryDefaults(t.queryKey),...t,_defaulted:!0};return e.queryHash||(e.queryHash=(0,w.Rm)(e.queryKey,e)),void 0===e.refetchOnReconnect&&(e.refetchOnReconnect="always"!==e.networkMode),void 0===e.throwOnError&&(e.throwOnError=!!e.suspense),!e.networkMode&&e.persister&&(e.networkMode="offlineFirst"),!0!==e.enabled&&e.queryFn===w.CN&&(e.enabled=!1),e}defaultMutationOptions(t){return(null==t?void 0:t._defaulted)?t:{...(0,p._)(this,l).mutations,...(null==t?void 0:t.mutationKey)&&this.getMutationDefaults(t.mutationKey),...t,_defaulted:!0}}clear(){(0,p._)(this,s).clear(),(0,p._)(this,o).clear()}constructor(t={}){(0,m._)(this,s,{writable:!0,value:void 0}),(0,m._)(this,o,{writable:!0,value:void 0}),(0,m._)(this,l,{writable:!0,value:void 0}),(0,m._)(this,u,{writable:!0,value:void 0}),(0,m._)(this,c,{writable:!0,value:void 0}),(0,m._)(this,h,{writable:!0,value:void 0}),(0,m._)(this,d,{writable:!0,value:void 0}),(0,m._)(this,f,{writable:!0,value:void 0}),(0,y._)(this,s,t.queryCache||new C),(0,y._)(this,o,t.mutationCache||new A),(0,y._)(this,l,t.defaultOptions||{}),(0,y._)(this,u,new Map),(0,y._)(this,c,new Map),(0,y._)(this,h,0)}})},36832:function(t,e,i){"use strict";i.d(e,{c:function(){return n}});let n={skipAnimations:!1,useManualTiming:!1}}}]);