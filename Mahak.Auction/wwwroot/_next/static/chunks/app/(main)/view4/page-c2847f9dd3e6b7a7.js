(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[871],{39904:function(e,t,r){Promise.resolve().then(r.bind(r,83293))},83293:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return h}});var s=r(3827),i=r(64090);function n(e){let[t,r]=(0,i.useState)(12),[n,a]=(0,i.useState)(13.68),[o,l]=(0,i.useState)(24*.6),[c,d]=(0,i.useState)(32.4),[u,m]=(0,i.useState)(30.96),[h,x]=(0,i.useState)(28.8),f=(0,i.useRef)(null);return(0,i.useEffect)(()=>{r(24-24*e.fillPercent),a(24-24*(e.fillPercent-.02)),l(24-24*(e.fillPercent-.04))},[e.fillPercent]),(0,i.useEffect)(()=>{function t(){var t;null==e||null===(t=e.onAnimationEnd)||void 0===t||t.call(e)}if(e.startAnimation)return f.current.addEventListener("endEvent",t),function(){f.current.removeEventListener("endEvent",t,!1)}}),(0,i.useEffect)(()=>{e.startAnimation&&f.current&&f.current.beginElement()},[e.startAnimation]),(0,s.jsx)("div",{className:"heartContainer",children:(0,s.jsx)("div",{className:"heart",children:(0,s.jsxs)("svg",{width:"100%",height:"100%",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 800 600",children:[(0,s.jsxs)("svg",{x:"0",y:"0",width:"150",height:"600",viewBox:"0 0 150 600",children:[(0,s.jsx)("path",{d:"M 10,20 h 70 v 10 h 20 v -10",stroke:"silver","stroke-width":"5",fill:"none","stroke-linejoin":"round"}),(0,s.jsx)("path",{d:"M 10,10 v 600",stroke:"silver","stroke-width":"15",fill:"none","stroke-linejoin":"round"}),(0,s.jsx)("path",{d:"M 90,30 v 15",stroke:"silver","stroke-width":"2",fill:"none","stroke-linejoin":"round"}),(0,s.jsx)("path",{d:"M 35,45 h 110 v 210 h -45 v 15 h -20 v -15 h -45 v -212",stroke:"white","stroke-width":"6",fill:"none","stroke-linejoin":"round"}),(0,s.jsx)("image",{href:"/qolak.png",x:"40",y:"50",height:"200"})]}),(0,s.jsxs)("svg",{x:"0",y:"0",width:"800",height:"600",viewBox:"0 0 800 600",children:[(0,s.jsx)("defs",{children:(0,s.jsxs)("filter",{id:"glow",children:[(0,s.jsx)("feGaussianBlur",{stdDeviation:"10",result:"coloredBlur"}),(0,s.jsxs)("feMerge",{children:[(0,s.jsx)("feMergeNode",{in:"coloredBlur"}),(0,s.jsx)("feMergeNode",{in:"coloredBlur"}),(0,s.jsx)("feMergeNode",{in:"coloredBlur"}),(0,s.jsx)("feMergeNode",{in:"SourceGraphic"})]})]})}),(0,s.jsx)("path",{id:"staticPipeline",d:"M 90,270 V 500 H 250 V 50 H 575 v 50",stroke:"white","stroke-width":"10",fill:"none","stroke-linejoin":"round"}),(0,s.jsx)("path",{id:"animatedFlow",d:"M 90,270 V 500 H 250 V 50 H 575 v 50",stroke:"red","stroke-width":"10",fill:"none",filter:"url(#glow)","stroke-dasharray":"70,1430",strokeDashoffset:"70","stroke-linejoin":"round",children:(0,s.jsx)("animate",{id:"bloodFlow",attributeName:"stroke-dashoffset",from:"1500",to:"70",dur:"1.8s",begin:"coinOpacity.end - 0.5s",repeatCount:"1",fill:"freeze"})})]}),(0,s.jsxs)("svg",{className:"heart-svg",x:"350",y:"120",width:"450",height:"450",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",style:{transformOrigin:"center"},children:[(0,s.jsx)("defs",{children:(0,s.jsx)("clipPath",{id:"heartClipPath",children:(0,s.jsx)("path",{d:"M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"})})}),(0,s.jsxs)("g",{style:{transformOrigin:"center"},children:[(0,s.jsxs)("g",{clipPath:"url(#heartClipPath)",children:[(0,s.jsx)("rect",{x:"-24",y:t,width:"72",height:"72",rx:c,ry:c,stroke:"#fff",strokeWidth:.04,fill:"#f68682cc",children:(0,s.jsx)("animateTransform",{attributeName:"transform",type:"rotate",from:"0 12 ".concat(36+t),to:"360 12 ".concat(36+t),dur:"14s",repeatCount:"indefinite"})}),(0,s.jsx)("rect",{x:"-24",y:n,width:"72",height:"72",rx:u,ry:u,stroke:"#fff",strokeWidth:.04,fill:"#f54e47cc",children:(0,s.jsx)("animateTransform",{attributeName:"transform",type:"rotate",from:"0 12 ".concat(36+n),to:"360 12 ".concat(36+n),dur:"13s",repeatCount:"indefinite"})}),(0,s.jsx)("rect",{x:"-24",y:o,width:"72",height:"72",rx:h,ry:h,stroke:"#fff",strokeWidth:.04,fill:"#f42e1ccc",children:(0,s.jsx)("animateTransform",{attributeName:"transform",type:"rotate",from:"0 12 ".concat(36+o),to:"360 12 ".concat(36+o),dur:"11s",repeatCount:"indefinite"})})]}),(0,s.jsx)("g",{children:(0,s.jsx)("path",{d:"M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z",fill:"none",stroke:"#f00",strokeWidth:"1"})}),(0,s.jsx)("animateTransform",{attributeName:"transform",type:"scale",values:"1; 1; 1.05; 1.025; 1.05; 1; 1",keyTimes:"0; 0.25; 0.30; 0.35; 0.40; 0.55; 1",dur:"2s",repeatCount:"indefinite",additive:"sum"})]})]}),(0,s.jsx)("svg",{x:"540",y:"50",width:"70",height:"150",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,s.jsxs)("path",{d:"M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z",fill:"red",opacity:"0",children:[(0,s.jsx)("animateTransform",{attributeName:"transform",type:"translate",values:"0 0; 0 100",keyTimes:"0; 1",begin:"bloodFlow.end -0.30s",dur:"2s",repeatCount:"1",fill:"freeze"}),(0,s.jsx)("animate",{attributeName:"opacity",values:"0; 1; 0",keyTimes:"0; 0.2; 1",begin:"bloodFlow.end -0.30s",dur:"2s",repeatCount:"1",fill:"freeze"})]})}),(0,s.jsx)("svg",{x:"0",y:"0",width:"800",height:"600",viewBox:"0 0 256 256",children:(0,s.jsxs)("g",{style:{stroke:"none",strokeWidth:0,strokeDasharray:"none",strokeLinecap:"butt",strokeLinejoin:"miter",strokeMiterlimit:10,fill:"none",fillRule:"nonzero",opacity:0,transformOrigin:"center"},transform:"translate(64 64) scale(1 1)",children:[(0,s.jsx)("circle",{cx:"45.001",cy:"47.211",r:"42.791",style:{stroke:"none",strokeWidth:1,strokeDasharray:"none",strokeLinecap:"butt",strokeLinejoin:"miter",strokeMiterlimit:10,fill:"#929292",fillRule:"nonzero",opacity:1},transform:"  matrix(1 0 0 1 0 0) "}),(0,s.jsx)("circle",{cx:45,cy:"42.79",r:35,style:{stroke:"none",strokeWidth:1,strokeDasharray:"none",strokeLinecap:"butt",strokeLinejoin:"miter",strokeMiterlimit:10,fill:"#d2d2d2",fillRule:"nonzero",opacity:1},transform:"  matrix(1 0 0 1 0 0) "}),(0,s.jsx)("path",{d:"M 45 13.791 c 17.977 0 32.78 13.555 34.766 31 c 0.15 -1.313 0.234 -2.647 0.234 -4 c 0 -19.33 -15.67 -35 -35 -35 s -35 15.67 -35 35 c 0 1.353 0.085 2.687 0.234 4 C 12.22 27.346 27.023 13.791 45 13.791 z",style:{stroke:"none",strokeWidth:1,strokeDasharray:"none",strokeLinecap:"butt",strokeLinejoin:"miter",strokeMiterlimit:10,fill:"#a2a2a2",fillRule:"nonzero",opacity:1},transform:" matrix(1 0 0 1 0 0) ",strokeLinecap:"round"}),(0,s.jsx)("path",{d:"M 45 0 C 21.367 0 2.209 19.158 2.209 42.791 c 0 23.633 19.158 42.791 42.791 42.791 s 42.791 -19.158 42.791 -42.791 C 87.791 19.158 68.633 0 45 0 z M 45 75.928 c -18.301 0 -33.137 -14.836 -33.137 -33.137 C 11.863 24.49 26.699 9.653 45 9.653 S 78.137 24.49 78.137 42.791 C 78.137 61.092 63.301 75.928 45 75.928 z",style:{stroke:"none",strokeWidth:1,strokeDasharray:"none",strokeLinecap:"butt",strokeLinejoin:"miter",strokeMiterlimit:10,fill:"white",fillRule:"nonzero",opacity:1},transform:" matrix(1 0 0 1 0 0) ",strokeLinecap:"round"}),(0,s.jsx)("path",{d:"M 45 0 C 21.367 0 2.209 19.158 2.209 42.791 c 0 23.633 19.158 42.791 42.791 42.791 s 42.791 -19.158 42.791 -42.791 C 87.791 19.158 68.633 0 45 0 z M 45 75.928 c -18.301 0 -33.137 -14.836 -33.137 -33.137 C 11.863 24.49 26.699 9.653 45 9.653 S 78.137 24.49 78.137 42.791 C 78.137 61.092 63.301 75.928 45 75.928 z",style:{stroke:"none",strokeWidth:1,strokeDasharray:"none",strokeLinecap:"butt",strokeLinejoin:"miter",strokeMiterlimit:10,fill:"#e2e2e2",fillRule:"nonzero",opacity:1},transform:" matrix(1 0 0 1 0 0) ",strokeLinecap:"round"}),(0,s.jsx)("path",{d:"M 83.422 23.947 l -7.339 7.339 c 1.241 3.352 1.947 6.961 2.035 10.723 l 8.623 -8.623 C 85.999 30.079 84.88 26.916 83.422 23.947 z",style:{stroke:"none",strokeWidth:1,strokeDasharray:"none",strokeLinecap:"butt",strokeLinejoin:"miter",strokeMiterlimit:10,fill:"white",fillRule:"nonzero",opacity:1},transform:" matrix(1 0 0 1 0 0) ",strokeLinecap:"round"}),(0,s.jsx)("path",{d:"M 44.218 75.909 c -3.762 -0.087 -7.371 -0.794 -10.723 -2.035 l -7.339 7.339 c 2.969 1.459 6.132 2.578 9.439 3.32 L 44.218 75.909 z",style:{stroke:"none",strokeWidth:1,strokeDasharray:"none",strokeLinecap:"butt",strokeLinejoin:"miter",strokeMiterlimit:10,fill:"white",fillRule:"nonzero",opacity:1},transform:" matrix(1 0 0 1 0 0) ",strokeLinecap:"round"}),(0,s.jsx)("path",{d:"M 15.236 57.365 l -7.118 7.118 c 3.188 5.408 7.526 10.054 12.685 13.598 l 6.975 -6.975 C 22.396 67.826 18.027 63.053 15.236 57.365 z",style:{stroke:"none",strokeWidth:1,strokeDasharray:"none",strokeLinecap:"butt",strokeLinejoin:"miter",strokeMiterlimit:10,fill:"white",fillRule:"nonzero",opacity:1},transform:" matrix(1 0 0 1 0 0) ",strokeLinecap:"round"}),(0,s.jsx)("path",{d:"M 66.692 5.909 l -7.118 7.118 c 5.688 2.791 10.461 7.16 13.741 12.541 l 6.975 -6.975 C 76.745 13.435 72.1 9.097 66.692 5.909 z",style:{stroke:"none",strokeWidth:1,strokeDasharray:"none",strokeLinecap:"butt",strokeLinejoin:"miter",strokeMiterlimit:10,fill:"white",fillRule:"nonzero",opacity:1},transform:" matrix(1 0 0 1 0 0) ",strokeLinecap:"round"}),(0,s.jsx)("path",{d:"M 49.861 10.012 c 1.441 0.212 2.849 0.522 4.223 0.913 l 7.565 -7.565 c -1.224 -0.517 -2.478 -0.976 -3.756 -1.379 L 49.861 10.012 z",style:{stroke:"none",strokeWidth:1,strokeDasharray:"none",strokeLinecap:"butt",strokeLinejoin:"miter",strokeMiterlimit:10,fill:"white",fillRule:"nonzero",opacity:1},transform:" matrix(1 0 0 1 0 0) ",strokeLinecap:"round"}),(0,s.jsx)("path",{d:"M 5.569 59.44 l 7.565 -7.565 c -0.391 -1.374 -0.701 -2.782 -0.913 -4.223 L 4.19 55.683 C 4.593 56.962 5.052 58.216 5.569 59.44 z",style:{stroke:"none",strokeWidth:1,strokeDasharray:"none",strokeLinecap:"butt",strokeLinejoin:"miter",strokeMiterlimit:10,fill:"white",fillRule:"nonzero",opacity:1},transform:" matrix(1 0 0 1 0 0) ",strokeLinecap:"round"}),(0,s.jsx)("path",{d:"M 44.737 67.688 c -4.711 0 -9.153 -2.883 -10.902 -7.546 c -0.582 -1.552 0.204 -3.281 1.756 -3.862 c 1.549 -0.586 3.28 0.203 3.862 1.755 c 1.089 2.906 4.34 4.389 7.248 3.294 c 2.905 -1.09 4.384 -4.341 3.294 -7.248 c -0.624 -1.664 -1.967 -2.908 -3.685 -3.412 l -0.188 -0.062 l -4.224 -1.547 c -3.497 -1.06 -6.231 -3.618 -7.512 -7.033 c -1.091 -2.909 -0.983 -6.068 0.302 -8.896 c 1.285 -2.828 3.595 -4.986 6.504 -6.077 c 6.002 -2.25 12.72 0.801 14.972 6.806 c 0.582 1.551 -0.204 3.281 -1.755 3.863 c -1.547 0.579 -3.281 -0.203 -3.862 -1.755 c -1.09 -2.907 -4.341 -4.385 -7.249 -3.295 c -1.408 0.528 -2.526 1.573 -3.148 2.941 c -0.622 1.369 -0.674 2.898 -0.146 4.307 c 0.624 1.665 1.967 2.908 3.685 3.413 l 0.187 0.062 l 4.225 1.547 c 3.496 1.06 6.23 3.618 7.512 7.033 c 2.251 6.005 -0.803 12.722 -6.806 14.973 C 47.467 67.449 46.091 67.688 44.737 67.688 z",style:{stroke:"none",strokeWidth:1,strokeDasharray:"none",strokeLinecap:"butt",strokeLinejoin:"miter",strokeMiterlimit:10,fill:"rgb(232,129,2)",fillRule:"nonzero",opacity:1},transform:" matrix(1 0 0 1 0 0) ",strokeLinecap:"round"}),(0,s.jsx)("path",{d:"M 45 32.323 c -1.657 0 -3 -1.343 -3 -3 V 24.5 c 0 -1.657 1.343 -3 3 -3 c 1.657 0 3 1.343 3 3 v 4.823 C 48 30.979 46.657 32.323 45 32.323 z",style:{stroke:"none",strokeWidth:1,strokeDasharray:"none",strokeLinecap:"butt",strokeLinejoin:"miter",strokeMiterlimit:10,fill:"rgb(232,129,2)",fillRule:"nonzero",opacity:1},transform:" matrix(1 0 0 1 0 0) ",strokeLinecap:"round"}),(0,s.jsx)("path",{d:"M 45 72.5 c -1.657 0 -3 -1.343 -3 -3 v -4.823 c 0 -1.657 1.343 -3 3 -3 c 1.657 0 3 1.343 3 3 V 69.5 C 48 71.157 46.657 72.5 45 72.5 z",style:{stroke:"none",strokeWidth:1,strokeDasharray:"none",strokeLinecap:"butt",strokeLinejoin:"miter",strokeMiterlimit:10,fill:"rgb(232,129,2)",fillRule:"nonzero",opacity:1},transform:" matrix(1 0 0 1 0 0) ",strokeLinecap:"round"}),(0,s.jsx)("path",{d:"M 44.737 63.688 c -4.711 0 -9.153 -2.883 -10.902 -7.546 c -0.582 -1.552 0.204 -3.281 1.756 -3.862 c 1.549 -0.586 3.28 0.203 3.862 1.755 c 1.089 2.906 4.34 4.389 7.248 3.294 c 2.905 -1.09 4.384 -4.341 3.294 -7.248 c -0.624 -1.664 -1.967 -2.908 -3.685 -3.412 l -0.188 -0.062 l -4.224 -1.547 c -3.497 -1.06 -6.231 -3.618 -7.512 -7.033 c -1.091 -2.909 -0.983 -6.068 0.302 -8.896 c 1.285 -2.828 3.595 -4.986 6.504 -6.077 c 6.002 -2.25 12.72 0.801 14.972 6.806 c 0.582 1.551 -0.204 3.281 -1.755 3.863 c -1.547 0.579 -3.281 -0.203 -3.862 -1.755 c -1.09 -2.907 -4.341 -4.385 -7.249 -3.295 c -1.408 0.528 -2.526 1.573 -3.148 2.941 c -0.622 1.369 -0.674 2.898 -0.146 4.307 c 0.624 1.665 1.967 2.908 3.685 3.413 l 0.187 0.062 l 4.225 1.547 c 3.496 1.06 6.23 3.618 7.512 7.033 c 2.251 6.005 -0.803 12.722 -6.806 14.973 C 47.467 63.449 46.091 63.688 44.737 63.688 z",style:{stroke:"none",strokeWidth:1,strokeDasharray:"none",strokeLinecap:"butt",strokeLinejoin:"miter",strokeMiterlimit:10,fill:"rgb(253,216,53)",fillRule:"nonzero",opacity:1},transform:" matrix(1 0 0 1 0 0) ",strokeLinecap:"round"}),(0,s.jsx)("path",{d:"M 45 28.323 c -1.657 0 -3 -1.343 -3 -3 V 20.5 c 0 -1.657 1.343 -3 3 -3 c 1.657 0 3 1.343 3 3 v 4.823 C 48 26.979 46.657 28.323 45 28.323 z",style:{stroke:"none",strokeWidth:1,strokeDasharray:"none",strokeLinecap:"butt",strokeLinejoin:"miter",strokeMiterlimit:10,fill:"rgb(253,216,53)",fillRule:"nonzero",opacity:1},transform:" matrix(1 0 0 1 0 0) ",strokeLinecap:"round"}),(0,s.jsx)("path",{d:"M 45 68.5 c -1.657 0 -3 -1.343 -3 -3 v -4.823 c 0 -1.657 1.343 -3 3 -3 c 1.657 0 3 1.343 3 3 V 65.5 C 48 67.157 46.657 68.5 45 68.5 z",style:{stroke:"none",strokeWidth:1,strokeDasharray:"none",strokeLinecap:"butt",strokeLinejoin:"miter",strokeMiterlimit:10,fill:"rgb(253,216,53)",fillRule:"nonzero",opacity:1},transform:" matrix(1 0 0 1 0 0) ",strokeLinecap:"round"}),(0,s.jsx)("animate",{ref:f,id:"coinOpacity",attributeName:"opacity",values:"0; 1; 1; 0",keyTimes:"0; 0.1; 0.8; 1",begin:"indefinite",dur:"1.5s",repeatCount:"1",fill:"freeze"}),(0,s.jsx)("animateTransform",{attributeName:"transform",type:"translate",values:"0 0; 40 50; -170 -100",keyTimes:"0; 0.2; 1",dur:"1.5s",begin:"coinOpacity.begin",repeatCount:"1",additive:"sum",calcMode:"spline",keySplines:"0.5 0 0.5 1; 0.5 0 0.5 1"}),(0,s.jsx)("animateTransform",{attributeName:"transform",type:"scale",values:"1 1; 1.5 1.5; 0.3 0.3",keyTimes:"0; 0.2; 1",dur:"1.5s",begin:"coinOpacity.begin",repeatCount:"1",additive:"sum",calcMode:"spline",keySplines:"0.5 0 0.5 1; 0.5 0 0.5 1"})]})})]})})})}var a=r(91341),o=r(44651),l=r(91774),c=r(31951),d=r(34622),u=r(54259),m=r(32997),h=()=>{let[e,t]=(0,i.useState)(0),[r,h]=(0,i.useState)(5e6),[x,f]=(0,i.useState)(9e7),[p,k]=(0,i.useState)(1),[v,y]=(0,i.useState)(5),[j,w]=(0,i.useState)(1),[g,b]=(0,i.useState)(!1),[N,L]=(0,i.useState)(0),[C,M]=(0,i.useState)(!1),[z,W]=(0,i.useState)("سهم مهربانی شما در تامین هزینه جراحی حسنای عزیز"),[S,E]=(0,i.useState)(!1),[R,D]=(0,i.useState)("#fed504"),{theme:T,setTheme:Z}=(0,l.F)(),_=(0,i.useCallback)(e=>{("r"===e.key.toLowerCase()||"ق"==e.key)&&B(),("p"===e.key.toLowerCase()||"ح"==e.key)&&b(!0)},[]),B=(0,i.useCallback)(async()=>{let e=await navigator.mediaDevices.getDisplayMedia({video:!0}),t=MediaRecorder.isTypeSupported("video/webm;codecs=vp9")?"video/webm;codecs=vp9":"video/webm",r=new MediaRecorder(e,{mimeType:t}),s=[];r.addEventListener("start",e=>{console.log("recording started..."),b(!0)}),r.addEventListener("dataavailable",function(e){s.push(e.data)}),r.addEventListener("stop",function(){let e=new Blob(s,{type:s[0].type}),t=document.createElement("a");t.href=URL.createObjectURL(e),t.download="video.webm",t.click()}),r.start()},[]);return(0,i.useEffect)(()=>(window.addEventListener("keydown",_),()=>{window.removeEventListener("keydown",_)}),[_]),(0,i.useEffect)(()=>{t(r/x||0)},[r,x]),(0,s.jsxs)("div",{className:"flex flex-col h-screen items-center justify-start p-[2vw] relative dark:bg-neutral-900",style:{height:"100%",backgroundColor:R},children:[(0,s.jsxs)(a.Z,{className:"flex flex-row items-center justify-center p-2 border-none",children:[(0,s.jsx)("img",{src:"logo.png",alt:"",style:{width:"10vw",height:"10vw"},onClick:()=>M(!C)}),(0,s.jsx)("span",{className:"font-bold text-center px-4 text-[3.5vw]",onClick:B,children:"موسسه حمایت از کودکان مبتلا به سرطان خراسان"})]}),C&&(0,s.jsxs)("div",{className:"flex flex-col gap-4 p-4 bg-white min-w-[80vw]",children:[(0,s.jsx)(c.Z,{dir:"ltr",placeholder:"عنوان",name:"title",value:z,onChange:e=>W(e.target.value),className:"text-[3.2vw]"}),(0,s.jsx)(c.Z,{dir:"ltr",placeholder:"تعداد مشارکت",name:"contributionCount",value:j,onChange:e=>w(Number(e.target.value)),className:"text-[3.2vw]"}),(0,s.jsx)(c.Z,{dir:"ltr",placeholder:"مبلغ جمع‌آوری شده",name:"totalPayments",value:r,onChange:e=>h(Number(e.target.value)),className:"text-[3.2vw]"}),(0,s.jsx)(c.Z,{dir:"ltr",placeholder:"مبلغ کل",name:"targetAmount",value:x,onChange:e=>f(Number(e.target.value)),className:"text-[3.2vw]"}),(0,s.jsx)("div",{className:"text-center",children:(0,s.jsx)("strong",{className:"font-extrabold text-[3.2vw] text-left",children:(0,u.f)(r,"تومان")})}),(0,s.jsx)("div",{className:"min-h-[4vw]",style:{backgroundColor:R},onClick:()=>E(!0),children:S&&(0,s.jsxs)("div",{className:"p-2 bg-white flex flex-col items-center justify-center gap-y-2",children:[(0,s.jsx)(m.xS,{color:R,disableAlpha:!0,onChangeComplete:e=>D(e.hex)}),(0,s.jsx)(d.A,{radius:"sm",color:"success",type:"submit",className:"text-[3vw] py-[3vw]",onClick:()=>E(!1),children:"ثبت رنگ"})]})}),(0,s.jsx)(d.A,{fullWidth:!0,radius:"sm",color:"warning",className:"text-[3vw] py-[3vw]",onClick:()=>Z("dark"==T?"light":"dark"),children:"تغییر تم"}),(0,s.jsx)(d.A,{fullWidth:!0,radius:"sm",color:"warning",className:"text-[3vw] py-[3vw]",onClick:()=>document.documentElement.requestFullscreen(),children:"تمام صفحه"}),(0,s.jsx)(d.A,{fullWidth:!0,radius:"sm",color:"danger",type:"submit",className:"text-[3vw] py-[3vw]",onClick:()=>M(!1),children:"بستن"})]}),(0,s.jsx)("div",{className:"flex flex-col gap-[2vh] p-4 mt-[1vh] justify-center items-center font-bold text-white [text-shadow:0px_0px_15px_var(--tw-shadow-color)] shadow-gray-500",children:(0,s.jsx)("div",{className:"text-[5vw] text-center",style:{lineHeight:"8vw"},children:z})}),(0,s.jsx)("div",{className:"flex-1 flex-grow p-[2vh]",style:{maxHeight:"500",minHeight:"500"},onClick:()=>b(!0),children:(0,s.jsx)(n,{fillPercent:e,startAnimation:g,onAnimationEnd:()=>{b(!1)}})}),(0,s.jsx)("div",{className:"flex flex-col w-full p-[5vw] justify-center items-center font-bold text-white [text-shadow:0px_0px_15px_var(--tw-shadow-color)] shadow-gray-500",children:(0,s.jsxs)("div",{className:"flex flex-row items-center justify-center",children:[(0,s.jsxs)("div",{className:"flex flex-col gap-y-[2vh] h-full items-end",children:[(0,s.jsx)("div",{className:"flex-1 text-[4.5vw] pl-4 flex items-center",children:"مشارکت"}),(0,s.jsx)("div",{className:"flex-1 text-[4.5vw] pl-4 flex items-center",children:"تامین‌شده"}),(0,s.jsx)("div",{className:"flex-1 text-[4.5vw] pl-4 flex items-center",children:"از"})]}),(0,s.jsxs)("div",{className:"flex flex-col gap-y-[2vh]",children:[(0,s.jsxs)("div",{className:"text-[5vw] bg-green-500 p-[4vw] rounded-xl",children:[j," نفر"]}),(0,s.jsx)("div",{className:"bg-green-500 p-[4vw] rounded-xl flex flex-row items-center",children:(0,s.jsx)(o.Z,{amount:r,className:"font-extrabold text-[7vw] text-white",currencyClassName:"text-[5vw]"})}),(0,s.jsx)("div",{className:"bg-indigo-600 p-[4vw] rounded-xl flex flex-row items-center",children:(0,s.jsx)(o.Z,{amount:x,className:"font-extrabold text-[7vw] text-white",currencyClassName:"text-[5vw]"})})]})]})}),(0,s.jsx)("div",{className:"flex flex-row justify-between w-full mb-4 px-[2vw]",children:(0,s.jsxs)("div",{className:"flex flex-col items-center py-[3vh] gap-y-[7vw] text-white bg-teal-600 py-0 mx-0 rounded-xl text-center text-[6vw] w-full font-bold",children:[(0,s.jsx)("div",{children:"6037-7070-0022-1907"}),(0,s.jsx)("div",{children:"بانک کشاورزی"})]})})]})}},72344:function(e,t,r){"use strict";let s=r(73107).Z.create({baseURL:"/api/app",headers:{"Content-Type":"application/json"}}),i={get:s.get,post:s.post,delete:s.delete,put:s.put,patch:s.patch};t.Z=i},82726:function(e,t,r){"use strict";r.d(t,{G:function(){return i},L:function(){return n}});var s=r(72344);async function i(){return(await s.Z.get("/settings/settings")).data}async function n(e,t){return(await s.Z.post("/settings/set?key=".concat(e,"&value=").concat(t))).data}},91341:function(e,t,r){"use strict";var s=r(3827),i=r(51367);let n=e=>{let{children:t,className:r,...n}=e;return(0,s.jsx)("div",{className:(0,i.m6)("px-5 py-4 w-full bg-white dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 transition-all duration-400 rounded-xl",r),...n,children:t})};n.Body=e=>{let{children:t,className:r="",...n}=e;return(0,s.jsx)("div",{className:(0,i.m6)("w-full mt-4 lg:mt-7",r),...n,children:t})},n.Title=e=>{let{children:t,className:r="",...n}=e;return(0,s.jsxs)("div",{className:(0,i.m6)("flex justify-center w-fit items-center gap-2",r),...n,children:[(0,s.jsx)("span",{className:"rounded-full w-1.5 h-1.5 md:w-2 md:h-2 transition-all bg-secondary-600 dark:bg-secondary-500"}),(0,s.jsx)("strong",{className:"text-base md:text-lg xl:text-xl text-secondary-600 dark:text-secondary-500 transition-colors font-bold",children:t})]})},n.Header=e=>{let{children:t,className:r="",...n}=e;return(0,s.jsx)("div",{className:(0,i.m6)("flex justify-between items-center gap-2",r),...n,children:t})},t.Z=n},44651:function(e,t,r){"use strict";var s=r(3827),i=r(82726),n=r(54259),a=r(94642);t.Z=e=>{var t,r,o,l;let{data:c}=(0,a.a)({queryKey:["get-settings"],queryFn:i.G,refetchInterval:1e3});return(0,s.jsxs)("strong",{className:null!==(t=e.className)&&void 0!==t?t:"font-bold text-xl",children:[(0,n.f)(null!==(r=e.amount)&&void 0!==r?r:0,void 0,(null==c?void 0:c.showMoneyShorter)=="true"),"\xa0",(0,s.jsx)("span",{className:null!==(o=e.currencyClassName)&&void 0!==o?o:"font-normal text-sm",children:null!==(l=e.currency)&&void 0!==l?l:"تومان"})]})}},31951:function(e,t,r){"use strict";var s=r(3827),i=r(64090),n=r(51367),a=r(56733);let o=e=>{var t;let{name:r,type:o="text",required:l,register:c,errors:d,className:u,validationSchema:m,endContent:h,...x}=e,[f,p]=(0,i.useState)(!1);return(0,s.jsxs)("div",{children:[(0,s.jsxs)("div",{className:"relative",children:[(0,s.jsx)("input",{id:r,autoComplete:"off",spellCheck:!1,type:"password"===o?f?"text":"password":o,className:(0,n.m6)("textField__input",u),...c&&c(r,m||{})||{},...x}),!!h&&(0,s.jsx)("div",{className:"absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-neutral-200",children:h}),"password"===o&&(0,s.jsx)("button",{type:"button",onClick:()=>p(e=>!e),className:"absolute left-3 top-1/2 -translate-y-1/2 text-neutral-600 dark:text-neutral-200",children:f?(0,s.jsx)(a.Vvo,{className:"w-6 h-6"}):(0,s.jsx)(a.N$t,{className:"w-6 h-6"})})]}),d&&d[r]&&(0,s.jsx)("p",{className:"text-red-500 text-right inline-block px-3 pt-2 text-sm w-full",children:null===(t=d[r])||void 0===t?void 0:t.message})]})};o.displayName="Input",t.Z=o},54259:function(e,t,r){"use strict";r.d(t,{f:function(){return s}});let s=(e,t,r)=>{if(t||(t=""),isNaN(e))return"0 ".concat(t.trim()).trimEnd();let s=new Intl.NumberFormat().format(e);return r&&(s.length<16&&s.endsWith(",000,000,000")?s=s.substring(0,s.length-12)+" میلیارد":s.length<12&&s.endsWith(",000,000")?s=s.substring(0,s.length-8)+" میلیون":s.length<8&&s.endsWith(",000")&&(s=s.substring(0,s.length-4)+" هزار")),"".concat(s,"  ").concat(t.trim()).trimEnd()}}},function(e){e.O(0,[516,224,377,642,800,415,343,622,156,971,69,744],function(){return e(e.s=39904)}),_N_E=e.O()}]);