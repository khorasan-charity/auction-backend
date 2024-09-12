(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[158],{94860:function(e,t,r){Promise.resolve().then(r.bind(r,82968))},85151:function(e,t,r){"use strict";var s=r(3827),a=r(91341),n=r(44651),o=r(13504);t.Z=e=>{let{totalPayment:t,targetAmount:r,progress:i,count:l,targetCount:c}=e;return(0,s.jsx)(a.Z,{className:"overflow-hidden text-center py-3 px-2",children:(0,s.jsxs)("div",{className:"w-full flex flex-wrap gap-0 gap-y-2 items-top justify-around inset-0 py-2",children:[(0,s.jsxs)(o.z,{className:"bg-transparent border-0",size:"lg",children:[(0,s.jsx)("span",{className:"text-neutral-600 dark:text-white text-xl",children:"تعداد حمایت: \xa0"}),(0,s.jsxs)("span",{className:"font-extrabold text-4xl text-indigo-600 dark:text-indigo-300",children:[Math.round(10*(l||0))/10,"\xa0",(0,s.jsx)("span",{className:"text-neutral-600 font-normal dark:text-white text-xl",children:"از"}),"\xa0",Math.round(10*(c||0))/10,"\xa0",(0,s.jsx)("span",{className:"font-normal text-sm",children:"کودک"})]})]}),(0,s.jsxs)(o.z,{className:"bg-transparent border-0",size:"lg",children:[(0,s.jsx)("span",{className:"text-neutral-600 dark:text-white text-xl",children:"مبلغ جمع آوری شده: \xa0"}),(0,s.jsx)(n.Z,{amount:t,className:"font-extrabold text-4xl text-indigo-600 dark:text-indigo-300"})]})]})})}},82968:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return d}});var s=r(3827),a=r(64339),n=r(94642),o=r(64090),i=r(82726),l=r(85151);function c(e){let[t,r]=(0,o.useState)(12),[a,n]=(0,o.useState)(13.68),[i,l]=(0,o.useState)(24*.6),[c,d]=(0,o.useState)(32.4),[u,h]=(0,o.useState)(30.96),[m,f]=(0,o.useState)(28.8),p=(0,o.useRef)(null);return(0,o.useEffect)(()=>{r(24-24*e.fillPercent),n(24-24*(e.fillPercent-.02)),l(24-24*(e.fillPercent-.04))},[e.fillPercent]),(0,o.useEffect)(()=>{function t(){var t;null==e||null===(t=e.onAnimationEnd)||void 0===t||t.call(e)}if(e.startAnimation)return p.current.addEventListener("endEvent",t),function(){p.current.removeEventListener("endEvent",t,!1)}}),(0,o.useEffect)(()=>{e.startAnimation&&p.current&&p.current.beginElement()},[e.startAnimation]),(0,s.jsx)("div",{className:"heartContainer",children:(0,s.jsx)("div",{className:"heart",children:(0,s.jsxs)("svg",{width:"100%",height:"100%",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 800 600",children:[(0,s.jsxs)("svg",{x:"0",y:"0",width:"150",height:"600",viewBox:"0 0 150 600",children:[(0,s.jsx)("path",{d:"M 10,20 h 70 v 10 h 20 v -10",stroke:"silver","stroke-width":"5",fill:"none","stroke-linejoin":"round"}),(0,s.jsx)("path",{d:"M 10,10 v 600",stroke:"silver","stroke-width":"15",fill:"none","stroke-linejoin":"round"}),(0,s.jsx)("path",{d:"M 90,30 v 15",stroke:"silver","stroke-width":"2",fill:"none","stroke-linejoin":"round"}),(0,s.jsx)("path",{d:"M 35,45 h 110 v 210 h -45 v 15 h -20 v -15 h -45 v -212",stroke:"#a0d9ef","stroke-width":"6",fill:"none","stroke-linejoin":"round"}),(0,s.jsx)("image",{href:"/qolak.png",x:"40",y:"50",height:"200"})]}),(0,s.jsxs)("svg",{x:"0",y:"0",width:"800",height:"600",viewBox:"0 0 800 600",children:[(0,s.jsx)("defs",{children:(0,s.jsxs)("filter",{id:"glow",children:[(0,s.jsx)("feGaussianBlur",{stdDeviation:"10",result:"coloredBlur"}),(0,s.jsxs)("feMerge",{children:[(0,s.jsx)("feMergeNode",{in:"coloredBlur"}),(0,s.jsx)("feMergeNode",{in:"coloredBlur"}),(0,s.jsx)("feMergeNode",{in:"coloredBlur"}),(0,s.jsx)("feMergeNode",{in:"SourceGraphic"})]})]})}),(0,s.jsx)("path",{id:"staticPipeline",d:"M 90,270 V 500 H 250 V 50 H 575 v 50",stroke:"#a0d9ef","stroke-width":"10",fill:"none","stroke-linejoin":"round"}),(0,s.jsx)("path",{id:"animatedFlow",d:"M 90,270 V 500 H 250 V 50 H 575 v 50",stroke:"red","stroke-width":"10",fill:"none",filter:"url(#glow)","stroke-dasharray":"70,1430",strokeDashoffset:"70","stroke-linejoin":"round",children:(0,s.jsx)("animate",{id:"bloodFlow",attributeName:"stroke-dashoffset",from:"1500",to:"70",dur:"1.8s",begin:"coinOpacity.end - 0.5s",repeatCount:"1",fill:"freeze"})})]}),(0,s.jsxs)("svg",{className:"heart-svg",x:"350",y:"120",width:"450",height:"450",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",style:{transformOrigin:"center"},children:[(0,s.jsx)("defs",{children:(0,s.jsx)("clipPath",{id:"heartClipPath",children:(0,s.jsx)("path",{d:"M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"})})}),(0,s.jsxs)("g",{style:{transformOrigin:"center"},children:[(0,s.jsxs)("g",{clipPath:"url(#heartClipPath)",children:[(0,s.jsx)("rect",{x:"-24",y:t,width:"72",height:"72",rx:c,ry:c,stroke:"#fff",strokeWidth:.04,fill:"#f68682cc",children:(0,s.jsx)("animateTransform",{attributeName:"transform",type:"rotate",from:"0 12 ".concat(36+t),to:"360 12 ".concat(36+t),dur:"14s",repeatCount:"indefinite"})}),(0,s.jsx)("rect",{x:"-24",y:a,width:"72",height:"72",rx:u,ry:u,stroke:"#fff",strokeWidth:.04,fill:"#f54e47cc",children:(0,s.jsx)("animateTransform",{attributeName:"transform",type:"rotate",from:"0 12 ".concat(36+a),to:"360 12 ".concat(36+a),dur:"13s",repeatCount:"indefinite"})}),(0,s.jsx)("rect",{x:"-24",y:i,width:"72",height:"72",rx:m,ry:m,stroke:"#fff",strokeWidth:.04,fill:"#f42e1ccc",children:(0,s.jsx)("animateTransform",{attributeName:"transform",type:"rotate",from:"0 12 ".concat(36+i),to:"360 12 ".concat(36+i),dur:"11s",repeatCount:"indefinite"})})]}),(0,s.jsx)("g",{children:(0,s.jsx)("path",{d:"M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z",fill:"none",stroke:"#f00",strokeWidth:"1"})}),(0,s.jsx)("animateTransform",{attributeName:"transform",type:"scale",values:"1; 1; 1.05; 1.025; 1.05; 1; 1",keyTimes:"0; 0.25; 0.30; 0.35; 0.40; 0.55; 1",dur:"2s",repeatCount:"indefinite",additive:"sum"})]})]}),(0,s.jsx)("svg",{x:"540",y:"50",width:"70",height:"150",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,s.jsxs)("path",{d:"M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z",fill:"red",opacity:"0",children:[(0,s.jsx)("animateTransform",{attributeName:"transform",type:"translate",values:"0 0; 0 100",keyTimes:"0; 1",begin:"bloodFlow.end -0.30s",dur:"2s",repeatCount:"1",fill:"freeze"}),(0,s.jsx)("animate",{attributeName:"opacity",values:"0; 1; 0",keyTimes:"0; 0.2; 1",begin:"bloodFlow.end -0.30s",dur:"2s",repeatCount:"1",fill:"freeze"})]})}),(0,s.jsx)("svg",{x:"0",y:"0",width:"800",height:"600",viewBox:"0 0 256 256",children:(0,s.jsxs)("g",{style:{stroke:"none",strokeWidth:0,strokeDasharray:"none",strokeLinecap:"butt",strokeLinejoin:"miter",strokeMiterlimit:10,fill:"none",fillRule:"nonzero",opacity:0,transformOrigin:"center"},transform:"translate(64 64) scale(1 1)",children:[(0,s.jsx)("circle",{cx:"45.001",cy:"47.211",r:"42.791",style:{stroke:"none",strokeWidth:1,strokeDasharray:"none",strokeLinecap:"butt",strokeLinejoin:"miter",strokeMiterlimit:10,fill:"rgb(232,129,2)",fillRule:"nonzero",opacity:1},transform:"  matrix(1 0 0 1 0 0) "}),(0,s.jsx)("circle",{cx:45,cy:"42.79",r:35,style:{stroke:"none",strokeWidth:1,strokeDasharray:"none",strokeLinecap:"butt",strokeLinejoin:"miter",strokeMiterlimit:10,fill:"rgb(243,158,9)",fillRule:"nonzero",opacity:1},transform:"  matrix(1 0 0 1 0 0) "}),(0,s.jsx)("path",{d:"M 45 13.791 c 17.977 0 32.78 13.555 34.766 31 c 0.15 -1.313 0.234 -2.647 0.234 -4 c 0 -19.33 -15.67 -35 -35 -35 s -35 15.67 -35 35 c 0 1.353 0.085 2.687 0.234 4 C 12.22 27.346 27.023 13.791 45 13.791 z",style:{stroke:"none",strokeWidth:1,strokeDasharray:"none",strokeLinecap:"butt",strokeLinejoin:"miter",strokeMiterlimit:10,fill:"rgb(232,129,2)",fillRule:"nonzero",opacity:1},transform:" matrix(1 0 0 1 0 0) ",strokeLinecap:"round"}),(0,s.jsx)("path",{d:"M 45 0 C 21.367 0 2.209 19.158 2.209 42.791 c 0 23.633 19.158 42.791 42.791 42.791 s 42.791 -19.158 42.791 -42.791 C 87.791 19.158 68.633 0 45 0 z M 45 75.928 c -18.301 0 -33.137 -14.836 -33.137 -33.137 C 11.863 24.49 26.699 9.653 45 9.653 S 78.137 24.49 78.137 42.791 C 78.137 61.092 63.301 75.928 45 75.928 z",style:{stroke:"none",strokeWidth:1,strokeDasharray:"none",strokeLinecap:"butt",strokeLinejoin:"miter",strokeMiterlimit:10,fill:"rgb(254,236,154)",fillRule:"nonzero",opacity:1},transform:" matrix(1 0 0 1 0 0) ",strokeLinecap:"round"}),(0,s.jsx)("path",{d:"M 45 0 C 21.367 0 2.209 19.158 2.209 42.791 c 0 23.633 19.158 42.791 42.791 42.791 s 42.791 -19.158 42.791 -42.791 C 87.791 19.158 68.633 0 45 0 z M 45 75.928 c -18.301 0 -33.137 -14.836 -33.137 -33.137 C 11.863 24.49 26.699 9.653 45 9.653 S 78.137 24.49 78.137 42.791 C 78.137 61.092 63.301 75.928 45 75.928 z",style:{stroke:"none",strokeWidth:1,strokeDasharray:"none",strokeLinecap:"butt",strokeLinejoin:"miter",strokeMiterlimit:10,fill:"rgb(253,216,53)",fillRule:"nonzero",opacity:1},transform:" matrix(1 0 0 1 0 0) ",strokeLinecap:"round"}),(0,s.jsx)("path",{d:"M 83.422 23.947 l -7.339 7.339 c 1.241 3.352 1.947 6.961 2.035 10.723 l 8.623 -8.623 C 85.999 30.079 84.88 26.916 83.422 23.947 z",style:{stroke:"none",strokeWidth:1,strokeDasharray:"none",strokeLinecap:"butt",strokeLinejoin:"miter",strokeMiterlimit:10,fill:"rgb(254,236,154)",fillRule:"nonzero",opacity:1},transform:" matrix(1 0 0 1 0 0) ",strokeLinecap:"round"}),(0,s.jsx)("path",{d:"M 44.218 75.909 c -3.762 -0.087 -7.371 -0.794 -10.723 -2.035 l -7.339 7.339 c 2.969 1.459 6.132 2.578 9.439 3.32 L 44.218 75.909 z",style:{stroke:"none",strokeWidth:1,strokeDasharray:"none",strokeLinecap:"butt",strokeLinejoin:"miter",strokeMiterlimit:10,fill:"rgb(254,236,154)",fillRule:"nonzero",opacity:1},transform:" matrix(1 0 0 1 0 0) ",strokeLinecap:"round"}),(0,s.jsx)("path",{d:"M 15.236 57.365 l -7.118 7.118 c 3.188 5.408 7.526 10.054 12.685 13.598 l 6.975 -6.975 C 22.396 67.826 18.027 63.053 15.236 57.365 z",style:{stroke:"none",strokeWidth:1,strokeDasharray:"none",strokeLinecap:"butt",strokeLinejoin:"miter",strokeMiterlimit:10,fill:"rgb(254,236,154)",fillRule:"nonzero",opacity:1},transform:" matrix(1 0 0 1 0 0) ",strokeLinecap:"round"}),(0,s.jsx)("path",{d:"M 66.692 5.909 l -7.118 7.118 c 5.688 2.791 10.461 7.16 13.741 12.541 l 6.975 -6.975 C 76.745 13.435 72.1 9.097 66.692 5.909 z",style:{stroke:"none",strokeWidth:1,strokeDasharray:"none",strokeLinecap:"butt",strokeLinejoin:"miter",strokeMiterlimit:10,fill:"rgb(254,236,154)",fillRule:"nonzero",opacity:1},transform:" matrix(1 0 0 1 0 0) ",strokeLinecap:"round"}),(0,s.jsx)("path",{d:"M 49.861 10.012 c 1.441 0.212 2.849 0.522 4.223 0.913 l 7.565 -7.565 c -1.224 -0.517 -2.478 -0.976 -3.756 -1.379 L 49.861 10.012 z",style:{stroke:"none",strokeWidth:1,strokeDasharray:"none",strokeLinecap:"butt",strokeLinejoin:"miter",strokeMiterlimit:10,fill:"rgb(254,236,154)",fillRule:"nonzero",opacity:1},transform:" matrix(1 0 0 1 0 0) ",strokeLinecap:"round"}),(0,s.jsx)("path",{d:"M 5.569 59.44 l 7.565 -7.565 c -0.391 -1.374 -0.701 -2.782 -0.913 -4.223 L 4.19 55.683 C 4.593 56.962 5.052 58.216 5.569 59.44 z",style:{stroke:"none",strokeWidth:1,strokeDasharray:"none",strokeLinecap:"butt",strokeLinejoin:"miter",strokeMiterlimit:10,fill:"rgb(254,236,154)",fillRule:"nonzero",opacity:1},transform:" matrix(1 0 0 1 0 0) ",strokeLinecap:"round"}),(0,s.jsx)("path",{d:"M 44.737 67.688 c -4.711 0 -9.153 -2.883 -10.902 -7.546 c -0.582 -1.552 0.204 -3.281 1.756 -3.862 c 1.549 -0.586 3.28 0.203 3.862 1.755 c 1.089 2.906 4.34 4.389 7.248 3.294 c 2.905 -1.09 4.384 -4.341 3.294 -7.248 c -0.624 -1.664 -1.967 -2.908 -3.685 -3.412 l -0.188 -0.062 l -4.224 -1.547 c -3.497 -1.06 -6.231 -3.618 -7.512 -7.033 c -1.091 -2.909 -0.983 -6.068 0.302 -8.896 c 1.285 -2.828 3.595 -4.986 6.504 -6.077 c 6.002 -2.25 12.72 0.801 14.972 6.806 c 0.582 1.551 -0.204 3.281 -1.755 3.863 c -1.547 0.579 -3.281 -0.203 -3.862 -1.755 c -1.09 -2.907 -4.341 -4.385 -7.249 -3.295 c -1.408 0.528 -2.526 1.573 -3.148 2.941 c -0.622 1.369 -0.674 2.898 -0.146 4.307 c 0.624 1.665 1.967 2.908 3.685 3.413 l 0.187 0.062 l 4.225 1.547 c 3.496 1.06 6.23 3.618 7.512 7.033 c 2.251 6.005 -0.803 12.722 -6.806 14.973 C 47.467 67.449 46.091 67.688 44.737 67.688 z",style:{stroke:"none",strokeWidth:1,strokeDasharray:"none",strokeLinecap:"butt",strokeLinejoin:"miter",strokeMiterlimit:10,fill:"rgb(232,129,2)",fillRule:"nonzero",opacity:1},transform:" matrix(1 0 0 1 0 0) ",strokeLinecap:"round"}),(0,s.jsx)("path",{d:"M 45 32.323 c -1.657 0 -3 -1.343 -3 -3 V 24.5 c 0 -1.657 1.343 -3 3 -3 c 1.657 0 3 1.343 3 3 v 4.823 C 48 30.979 46.657 32.323 45 32.323 z",style:{stroke:"none",strokeWidth:1,strokeDasharray:"none",strokeLinecap:"butt",strokeLinejoin:"miter",strokeMiterlimit:10,fill:"rgb(232,129,2)",fillRule:"nonzero",opacity:1},transform:" matrix(1 0 0 1 0 0) ",strokeLinecap:"round"}),(0,s.jsx)("path",{d:"M 45 72.5 c -1.657 0 -3 -1.343 -3 -3 v -4.823 c 0 -1.657 1.343 -3 3 -3 c 1.657 0 3 1.343 3 3 V 69.5 C 48 71.157 46.657 72.5 45 72.5 z",style:{stroke:"none",strokeWidth:1,strokeDasharray:"none",strokeLinecap:"butt",strokeLinejoin:"miter",strokeMiterlimit:10,fill:"rgb(232,129,2)",fillRule:"nonzero",opacity:1},transform:" matrix(1 0 0 1 0 0) ",strokeLinecap:"round"}),(0,s.jsx)("path",{d:"M 44.737 63.688 c -4.711 0 -9.153 -2.883 -10.902 -7.546 c -0.582 -1.552 0.204 -3.281 1.756 -3.862 c 1.549 -0.586 3.28 0.203 3.862 1.755 c 1.089 2.906 4.34 4.389 7.248 3.294 c 2.905 -1.09 4.384 -4.341 3.294 -7.248 c -0.624 -1.664 -1.967 -2.908 -3.685 -3.412 l -0.188 -0.062 l -4.224 -1.547 c -3.497 -1.06 -6.231 -3.618 -7.512 -7.033 c -1.091 -2.909 -0.983 -6.068 0.302 -8.896 c 1.285 -2.828 3.595 -4.986 6.504 -6.077 c 6.002 -2.25 12.72 0.801 14.972 6.806 c 0.582 1.551 -0.204 3.281 -1.755 3.863 c -1.547 0.579 -3.281 -0.203 -3.862 -1.755 c -1.09 -2.907 -4.341 -4.385 -7.249 -3.295 c -1.408 0.528 -2.526 1.573 -3.148 2.941 c -0.622 1.369 -0.674 2.898 -0.146 4.307 c 0.624 1.665 1.967 2.908 3.685 3.413 l 0.187 0.062 l 4.225 1.547 c 3.496 1.06 6.23 3.618 7.512 7.033 c 2.251 6.005 -0.803 12.722 -6.806 14.973 C 47.467 63.449 46.091 63.688 44.737 63.688 z",style:{stroke:"none",strokeWidth:1,strokeDasharray:"none",strokeLinecap:"butt",strokeLinejoin:"miter",strokeMiterlimit:10,fill:"rgb(253,216,53)",fillRule:"nonzero",opacity:1},transform:" matrix(1 0 0 1 0 0) ",strokeLinecap:"round"}),(0,s.jsx)("path",{d:"M 45 28.323 c -1.657 0 -3 -1.343 -3 -3 V 20.5 c 0 -1.657 1.343 -3 3 -3 c 1.657 0 3 1.343 3 3 v 4.823 C 48 26.979 46.657 28.323 45 28.323 z",style:{stroke:"none",strokeWidth:1,strokeDasharray:"none",strokeLinecap:"butt",strokeLinejoin:"miter",strokeMiterlimit:10,fill:"rgb(253,216,53)",fillRule:"nonzero",opacity:1},transform:" matrix(1 0 0 1 0 0) ",strokeLinecap:"round"}),(0,s.jsx)("path",{d:"M 45 68.5 c -1.657 0 -3 -1.343 -3 -3 v -4.823 c 0 -1.657 1.343 -3 3 -3 c 1.657 0 3 1.343 3 3 V 65.5 C 48 67.157 46.657 68.5 45 68.5 z",style:{stroke:"none",strokeWidth:1,strokeDasharray:"none",strokeLinecap:"butt",strokeLinejoin:"miter",strokeMiterlimit:10,fill:"rgb(253,216,53)",fillRule:"nonzero",opacity:1},transform:" matrix(1 0 0 1 0 0) ",strokeLinecap:"round"}),(0,s.jsx)("animate",{ref:p,id:"coinOpacity",attributeName:"opacity",values:"0; 1; 1; 0",keyTimes:"0; 0.1; 0.8; 1",begin:"indefinite",dur:"1.5s",repeatCount:"1",fill:"freeze"}),(0,s.jsx)("animateTransform",{attributeName:"transform",type:"translate",values:"0 0; 40 50; -170 -100",keyTimes:"0; 0.2; 1",dur:"1.5s",begin:"coinOpacity.begin",repeatCount:"1",additive:"sum",calcMode:"spline",keySplines:"0.5 0 0.5 1; 0.5 0 0.5 1"}),(0,s.jsx)("animateTransform",{attributeName:"transform",type:"scale",values:"1 1; 1.5 1.5; 0.3 0.3",keyTimes:"0; 0.2; 1",dur:"1.5s",begin:"coinOpacity.begin",repeatCount:"1",additive:"sum",calcMode:"spline",keySplines:"0.5 0 0.5 1; 0.5 0 0.5 1"})]})})]})})})}var d=()=>{let[e,t]=(0,o.useState)(0),[r,d]=(0,o.useState)(0),[u,h]=(0,o.useState)(1),[m,f]=(0,o.useState)(1),[p,x]=(0,o.useState)(!1),[g,b]=(0,o.useState)(0),{data:k=0}=(0,n.a)({queryKey:["get-totalPayment"],queryFn:a.uq,refetchInterval:1e3}),{data:y}=(0,n.a)({queryKey:["get-payment"],queryFn:a._P,refetchInterval:1e3});return(0,o.useEffect)(()=>{(0,i.G)().then(e=>{h(e.children.totalNeededSupportCount),f(e.children.costPerYear)})},[]),(0,o.useEffect)(()=>{b(e=>e<k?(x(!0),k):e),t(Math.round(k/(m*u)*100)/100)},[k]),(0,s.jsxs)("div",{className:"flex flex-col h-screen items-center justify-start px-2 relative",style:{height:"100%",backgroundColor:"#21783a"},children:[(0,s.jsxs)("div",{className:"pt-2 px-4",style:{maxHeight:"30%",minHeight:"15%"},children:[(0,s.jsx)(l.Z,{count:k/m,targetCount:u,progress:e,totalPayment:k,targetAmount:m*u}),(0,s.jsx)("div",{className:"p-4 flex justify-center items-center text-2xl font-semibold text-yellow-400",children:(0,s.jsxs)("span",{children:[(0,s.jsx)("span",{children:"تعداد مشارکت تا این لحظه:"}),"\xa0",(0,s.jsx)("span",{children:null==y?void 0:y.totalCount})]})})]}),(0,s.jsx)("div",{className:"flex-1 flex-grow",style:{maxHeight:"80%",minHeight:"50%"},children:(0,s.jsx)(c,{fillPercent:e,startAnimation:p,onAnimationEnd:()=>{x(!1)}})}),(0,s.jsx)("div",{className:"flex-shrink",style:{maxHeight:"15%",minHeight:"10%"},children:(0,s.jsx)("img",{className:"mx-auto pt-2",src:"zendegi.png",style:{objectFit:"contain",height:"100%"}})}),(0,s.jsx)("img",{className:"absolute",src:"mahak-child1.png",width:"25%",style:{right:0,bottom:0,maxWidth:"250px"}})]})}},72344:function(e,t,r){"use strict";let s=r(73107).Z.create({baseURL:"/api/app",headers:{"Content-Type":"application/json"}}),a={get:s.get,post:s.post,delete:s.delete,put:s.put,patch:s.patch};t.Z=a},64339:function(e,t,r){"use strict";r.d(t,{Jg:function(){return l},KX:function(){return n},_P:function(){return a},bi:function(){return o},uq:function(){return i}});var s=r(72344);let a=()=>s.Z.get("/payment?Sorting=CreationTime%20DESC").then(e=>e.data),n=e=>s.Z.post("/payment",e).then(e=>e.data),o=e=>s.Z.delete("/payment/".concat(e)).then(e=>e.data),i=()=>s.Z.get("/payment/total").then(e=>e.data),l=()=>s.Z.get("/payment/contribution-count").then(e=>e.data)},82726:function(e,t,r){"use strict";r.d(t,{G:function(){return a},L:function(){return n}});var s=r(72344);async function a(){return(await s.Z.get("/settings/settings")).data}async function n(e,t){return(await s.Z.post("/settings/set?key=".concat(e,"&value=").concat(t))).data}},91341:function(e,t,r){"use strict";var s=r(3827),a=r(51367);let n=e=>{let{children:t,className:r,...n}=e;return(0,s.jsx)("div",{className:(0,a.m6)("px-5 py-4 w-full bg-white dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 transition-all duration-400 rounded-xl",r),...n,children:t})};n.Body=e=>{let{children:t,className:r="",...n}=e;return(0,s.jsx)("div",{className:(0,a.m6)("w-full mt-4 lg:mt-7",r),...n,children:t})},n.Title=e=>{let{children:t,className:r="",...n}=e;return(0,s.jsxs)("div",{className:(0,a.m6)("flex justify-center w-fit items-center gap-2",r),...n,children:[(0,s.jsx)("span",{className:"rounded-full w-1.5 h-1.5 md:w-2 md:h-2 transition-all bg-secondary-600 dark:bg-secondary-500"}),(0,s.jsx)("strong",{className:"text-base md:text-lg xl:text-xl text-secondary-600 dark:text-secondary-500 transition-colors font-bold",children:t})]})},n.Header=e=>{let{children:t,className:r="",...n}=e;return(0,s.jsx)("div",{className:(0,a.m6)("flex justify-between items-center gap-2",r),...n,children:t})},t.Z=n},44651:function(e,t,r){"use strict";var s=r(3827),a=r(82726),n=r(54259),o=r(94642);t.Z=e=>{var t,r,i,l;let{data:c}=(0,o.a)({queryKey:["get-settings"],queryFn:a.G,refetchInterval:1e3});return(0,s.jsxs)("strong",{className:null!==(t=e.className)&&void 0!==t?t:"font-bold text-xl",children:[(0,n.f)(null!==(r=e.amount)&&void 0!==r?r:0,void 0,(null==c?void 0:c.showMoneyShorter)=="true"),"\xa0",(0,s.jsx)("span",{className:null!==(i=e.currencyClassName)&&void 0!==i?i:"font-normal text-sm",children:null!==(l=e.currency)&&void 0!==l?l:"تومان"})]})}},54259:function(e,t,r){"use strict";r.d(t,{f:function(){return s}});let s=(e,t,r)=>{if(t||(t=""),isNaN(e))return"0 ".concat(t.trim()).trimEnd();let s=new Intl.NumberFormat().format(e);return r&&(s.length<16&&s.endsWith(",000,000,000")?s=s.substring(0,s.length-12)+" میلیارد":s.length<12&&s.endsWith(",000,000")?s=s.substring(0,s.length-8)+" میلیون":s.length<8&&s.endsWith(",000")&&(s=s.substring(0,s.length-4)+" هزار")),"".concat(s,"  ").concat(t.trim()).trimEnd()}},13504:function(e,t,r){"use strict";r.d(t,{z:function(){return b}});var s=r(84449),a=r(14297),n=r(46626),o=r(15848),i=r(59076),l=r(19847),c=r(41244),d=(0,l.tv)({slots:{base:["relative","max-w-fit","min-w-min","inline-flex","items-center","justify-between","box-border","whitespace-nowrap"],content:"flex-1 text-inherit font-normal",dot:["w-2","h-2","ml-1","rounded-full"],avatar:"flex-shrink-0",closeButton:["z-10","appearance-none","outline-none","select-none","transition-opacity","opacity-70","hover:opacity-100","cursor-pointer","active:opacity-disabled","tap-highlight-transparent"]},variants:{variant:{solid:{},bordered:{base:"border-medium bg-transparent"},light:{base:"bg-transparent"},flat:{},faded:{base:"border-medium"},shadow:{},dot:{base:"border-medium border-default text-foreground bg-transparent"}},color:{default:{dot:"bg-default-400"},primary:{dot:"bg-primary"},secondary:{dot:"bg-secondary"},success:{dot:"bg-success"},warning:{dot:"bg-warning"},danger:{dot:"bg-danger"}},size:{sm:{base:"px-1 h-6 text-tiny",content:"px-1",closeButton:"text-medium",avatar:"w-4 h-4"},md:{base:"px-1 h-7 text-small",content:"px-2",closeButton:"text-large",avatar:"w-5 h-5"},lg:{base:"px-2 h-8 text-medium",content:"px-2",closeButton:"text-xl",avatar:"w-6 h-6"}},radius:{none:{base:"rounded-none"},sm:{base:"rounded-small"},md:{base:"rounded-medium"},lg:{base:"rounded-large"},full:{base:"rounded-full"}},isOneChar:{true:{},false:{}},isCloseable:{true:{},false:{}},hasStartContent:{true:{}},hasEndContent:{true:{}},isDisabled:{true:{base:"opacity-disabled pointer-events-none"}},isCloseButtonFocusVisible:{true:{closeButton:[...c.jR,"ring-1","rounded-full"]}}},defaultVariants:{variant:"solid",color:"default",size:"md",radius:"full",isDisabled:!1},compoundVariants:[{variant:"solid",color:"default",class:{base:i.J.solid.default}},{variant:"solid",color:"primary",class:{base:i.J.solid.primary}},{variant:"solid",color:"secondary",class:{base:i.J.solid.secondary}},{variant:"solid",color:"success",class:{base:i.J.solid.success}},{variant:"solid",color:"warning",class:{base:i.J.solid.warning}},{variant:"solid",color:"danger",class:{base:i.J.solid.danger}},{variant:"shadow",color:"default",class:{base:i.J.shadow.default}},{variant:"shadow",color:"primary",class:{base:i.J.shadow.primary}},{variant:"shadow",color:"secondary",class:{base:i.J.shadow.secondary}},{variant:"shadow",color:"success",class:{base:i.J.shadow.success}},{variant:"shadow",color:"warning",class:{base:i.J.shadow.warning}},{variant:"shadow",color:"danger",class:{base:i.J.shadow.danger}},{variant:"bordered",color:"default",class:{base:i.J.bordered.default}},{variant:"bordered",color:"primary",class:{base:i.J.bordered.primary}},{variant:"bordered",color:"secondary",class:{base:i.J.bordered.secondary}},{variant:"bordered",color:"success",class:{base:i.J.bordered.success}},{variant:"bordered",color:"warning",class:{base:i.J.bordered.warning}},{variant:"bordered",color:"danger",class:{base:i.J.bordered.danger}},{variant:"flat",color:"default",class:{base:i.J.flat.default}},{variant:"flat",color:"primary",class:{base:i.J.flat.primary}},{variant:"flat",color:"secondary",class:{base:i.J.flat.secondary}},{variant:"flat",color:"success",class:{base:i.J.flat.success}},{variant:"flat",color:"warning",class:{base:i.J.flat.warning}},{variant:"flat",color:"danger",class:{base:i.J.flat.danger}},{variant:"faded",color:"default",class:{base:i.J.faded.default}},{variant:"faded",color:"primary",class:{base:i.J.faded.primary}},{variant:"faded",color:"secondary",class:{base:i.J.faded.secondary}},{variant:"faded",color:"success",class:{base:i.J.faded.success}},{variant:"faded",color:"warning",class:{base:i.J.faded.warning}},{variant:"faded",color:"danger",class:{base:i.J.faded.danger}},{variant:"light",color:"default",class:{base:i.J.light.default}},{variant:"light",color:"primary",class:{base:i.J.light.primary}},{variant:"light",color:"secondary",class:{base:i.J.light.secondary}},{variant:"light",color:"success",class:{base:i.J.light.success}},{variant:"light",color:"warning",class:{base:i.J.light.warning}},{variant:"light",color:"danger",class:{base:i.J.light.danger}},{isOneChar:!0,hasStartContent:!1,hasEndContent:!1,size:"sm",class:{base:"w-5 h-5 min-w-5 min-h-5"}},{isOneChar:!0,hasStartContent:!1,hasEndContent:!1,size:"md",class:{base:"w-6 h-6 min-w-6 min-h-6"}},{isOneChar:!0,hasStartContent:!1,hasEndContent:!1,size:"lg",class:{base:"w-7 h-7 min-w-7 min-h-7"}},{isOneChar:!0,isCloseable:!1,hasStartContent:!1,hasEndContent:!1,class:{base:"px-0 justify-center",content:"px-0 flex-none"}},{isOneChar:!0,isCloseable:!0,hasStartContent:!1,hasEndContent:!1,class:{base:"w-auto"}},{isOneChar:!0,variant:"dot",class:{base:"w-auto h-7 px-1 items-center",content:"px-2"}},{hasStartContent:!0,size:"sm",class:{content:"pl-0.5"}},{hasStartContent:!0,size:["md","lg"],class:{content:"pl-1"}},{hasEndContent:!0,size:"sm",class:{content:"pr-0.5"}},{hasEndContent:!0,size:["md","lg"],class:{content:"pr-1"}}]}),u=r(72874),h=r(5142),m=r(15032),f=r(64090),p=r(32838),x=r(3827),g=(0,s.Gp)((e,t)=>{let{Component:r,children:i,slots:l,classNames:c,isDot:g,isCloseable:b,startContent:k,endContent:y,getCloseButtonProps:v,getChipProps:j}=function(e){let[t,r]=(0,s.oe)(e,d.variantKeys),{ref:i,as:l,children:c,avatar:p,startContent:x,endContent:g,onClose:b,classNames:k,className:y,...v}=t,j=(0,u.gy)(i),w=(0,h.W)(null==k?void 0:k.base,y),C=!!b,M="dot"===e.variant,{focusProps:L,isFocusVisible:z}=(0,o.F)(),N=(0,f.useMemo)(()=>"string"==typeof c&&(null==c?void 0:c.length)===1,[c]),J=(0,f.useMemo)(()=>!!p||!!x,[p,x]),E=(0,f.useMemo)(()=>!!g||C,[g,C]),S=(0,f.useMemo)(()=>d({...r,hasStartContent:J,hasEndContent:E,isOneChar:N,isCloseable:C,isCloseButtonFocusVisible:z}),[(0,m.Xx)(r),z,J,E,N,C]),{pressProps:W}=(0,n.r)({isDisabled:!!(null==e?void 0:e.isDisabled),onPress:b}),D=e=>(0,f.isValidElement)(e)?(0,f.cloneElement)(e,{className:(0,h.W)("max-h-[80%]",e.props.className)}):null;return{Component:l||"div",children:c,slots:S,classNames:k,isDot:M,isCloseable:C,startContent:((0,f.isValidElement)(p)?(0,f.cloneElement)(p,{className:S.avatar({class:null==k?void 0:k.avatar})}):null)||D(x),endContent:D(g),getCloseButtonProps:()=>({role:"button",tabIndex:0,className:S.closeButton({class:null==k?void 0:k.closeButton}),"aria-label":"close chip",...(0,a.d)(W,L)}),getChipProps:()=>({ref:j,className:S.base({class:w}),...v})}}({...e,ref:t}),w=(0,f.useMemo)(()=>g&&!k?(0,x.jsx)("span",{className:l.dot({class:null==c?void 0:c.dot})}):k,[l,k,g]),C=(0,f.useMemo)(()=>b?(0,x.jsx)("span",{...v(),children:y||(0,x.jsx)(p.f,{})}):y,[y,b,v]);return(0,x.jsxs)(r,{...j(),children:[w,(0,x.jsx)("span",{className:l.content({class:null==c?void 0:c.content}),children:i}),C]})});g.displayName="NextUI.Chip";var b=g},32838:function(e,t,r){"use strict";r.d(t,{f:function(){return a}});var s=r(3827),a=e=>(0,s.jsx)("svg",{"aria-hidden":"true",focusable:"false",height:"1em",role:"presentation",viewBox:"0 0 24 24",width:"1em",...e,children:(0,s.jsx)("path",{d:"M12 2a10 10 0 1010 10A10.016 10.016 0 0012 2zm3.36 12.3a.754.754 0 010 1.06.748.748 0 01-1.06 0l-2.3-2.3-2.3 2.3a.748.748 0 01-1.06 0 .754.754 0 010-1.06l2.3-2.3-2.3-2.3A.75.75 0 019.7 8.64l2.3 2.3 2.3-2.3a.75.75 0 011.06 1.06l-2.3 2.3z",fill:"currentColor"})})}},function(e){e.O(0,[224,377,642,800,343,971,69,744],function(){return e(e.s=94860)}),_N_E=e.O()}]);