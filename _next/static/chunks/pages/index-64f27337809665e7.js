(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(2442)}])},468:function(e,n,t){"use strict";t.d(n,{Z:function(){return a}});var c=t(5893),s=t(1599),r=t.n(s);function a(){return(0,c.jsx)("div",{className:r().container})}},7649:function(e,n,t){"use strict";t.d(n,{_g:function(){return r},e1:function(){return s},oo:function(){return a}});var c=t(9353);let s=()=>{let e="https://raw.githubusercontent.com/justadudewhohacks/face-api.js/master/weights/";return Promise.all([c.nets.tinyFaceDetector.loadFromUri(e+"tiny_face_detector_model-weights_manifest.json"),c.nets.faceLandmark68Net.loadFromUri(e+"face_landmark_68_model-weights_manifest.json"),c.nets.faceRecognitionNet.loadFromUri(e+"face_recognition_model-weights_manifest.json"),c.nets.faceExpressionNet.loadFromUri(e+"face_expression_model-weights_manifest.json")])},r=async e=>{if(!e)return;let n=null==e?void 0:e.getBoundingClientRect(),t={width:null==n?void 0:n.width,height:null==n?void 0:n.height};if(0===t.height)return;let s=await c.detectAllFaces(e,new c.TinyFaceDetectorOptions({inputSize:320})).withFaceLandmarks().withFaceExpressions();return c.resizeResults(s,t)},a=async(e,n,t,s)=>{if(e&&n&&t){var r,a,o,i,l;let d=e.getBoundingClientRect(),_={width:null==d?void 0:d.width,height:null==d?void 0:d.height};c.matchDimensions(n,_),null===(r=null==n?void 0:n.getContext("2d"))||void 0===r||r.clearRect(0,0,null==n?void 0:n.width,null==n?void 0:n.height);let f=null==c?void 0:c.resizeResults(t,_);switch(s){case"landmarks":c.draw.drawFaceLandmarks(n,f);break;case"expressions":c.draw.drawFaceExpressions(n,f);break;case"box":null==c||null===(a=c.draw)||void 0===a||a.drawDetections(n,f);break;case"boxLandmarks":null==c||null===(o=c.draw)||void 0===o||o.drawDetections(n,f),null==c||null===(i=c.draw)||void 0===i||i.drawFaceExpressions(n,f),null==c||null===(l=c.draw)||void 0===l||l.drawFaceLandmarks(n,f);break;case"error":console.log("error");default:throw Error("Invalid type")}}}},2442:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return V}});var c=t(5893),s=t(9008),r=t.n(s),a=t(7294),o=t(1502),i=t.n(o),l=t(8),d=t.n(l),_=t(8394),f=t.n(_),u=t(1163);function m(){let e=(0,u.useRouter)();return(0,c.jsxs)("nav",{className:"".concat(f().Nav," ").concat(d().className),children:[(0,c.jsxs)("div",{className:f().items,children:[(0,c.jsx)("img",{src:"https://img.icons8.com/color/48/null/spyro.png",alt:"logo"}),(0,c.jsx)("a",{href:"#intro",children:"About"}),(0,c.jsx)("a",{onClick:()=>{e.push("/scan")},children:"Scan"}),(0,c.jsx)("a",{href:"https://www.themoviedb.org/",target:"_blank",rel:"noreferrer",children:"API"})]}),(0,c.jsxs)("p",{className:f().credits,children:["Made with ❤️ by"," ",(0,c.jsx)("a",{href:"https://meertarbani.dev",target:"_blank",rel:"noreferrer",children:"Meer Tarbani"})]})]})}var h=t(2249),p=Object.defineProperty,x=Object.getOwnPropertySymbols,v=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable,w=(e,n,t)=>n in e?p(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,b=(e,n)=>{for(var t in n||(n={}))v.call(n,t)&&w(e,t,n[t]);if(x)for(var t of x(n))j.call(n,t)&&w(e,t,n[t]);return e},g=(e,n)=>{var t={};for(var c in e)v.call(e,c)&&0>n.indexOf(c)&&(t[c]=e[c]);if(null!=e&&x)for(var c of x(e))0>n.indexOf(c)&&j.call(e,c)&&(t[c]=e[c]);return t},y={exports:{}},N={},C=Symbol.for("react.element"),k=Symbol.for("react.fragment"),M=Object.prototype.hasOwnProperty,z=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,O={key:!0,ref:!0,__self:!0,__source:!0};function S(e,n,t){var c,s={},r=null,a=null;for(c in void 0!==t&&(r=""+t),void 0!==n.key&&(r=""+n.key),void 0!==n.ref&&(a=n.ref),n)M.call(n,c)&&!O.hasOwnProperty(c)&&(s[c]=n[c]);if(e&&e.defaultProps)for(c in n=e.defaultProps)void 0===s[c]&&(s[c]=n[c]);return{$$typeof:C,type:e,key:r,ref:a,props:s,_owner:z.current}}N.Fragment=k,N.jsx=S,N.jsxs=S,y.exports=N;let E=y.exports.jsx,F=(0,a.forwardRef)((e,n)=>{var t,{scene:c,style:s,onMouseDown:r,onMouseUp:o,onMouseHover:i,onKeyDown:l,onKeyUp:d,onStart:_,onLookAt:f,onFollow:u,onWheel:m,onLoad:p,renderOnDemand:x=!0}=e,v=g(e,["scene","style","onMouseDown","onMouseUp","onMouseHover","onKeyDown","onKeyUp","onStart","onLookAt","onFollow","onWheel","onLoad","renderOnDemand"]);let j=(0,a.useRef)(null),[w,y]=(0,a.useState)(!0);return(0,a.useEffect)(()=>{let e;y(!0);let n=[{name:"mouseDown",cb:r},{name:"mouseUp",cb:o},{name:"mouseHover",cb:i},{name:"keyDown",cb:l},{name:"keyUp",cb:d},{name:"start",cb:_},{name:"lookAt",cb:f},{name:"follow",cb:u},{name:"scroll",cb:m}];return j.current&&(e=new h.M(j.current,{renderOnDemand:x}),async function(){for(let t of(await e.load(c),n))t.cb&&e.addEventListener(t.name,t.cb);y(!1),null==p||p(e)}()),()=>{for(let t of n)t.cb&&e.removeEventListener(t.name,t.cb);e.dispose()}},[c]),E("canvas",b({ref:(t=[n,j],function(e){t.forEach(function(n){"function"==typeof n?n(e):null!=n&&(n.current=e)})}),style:b({display:w?"none":"block"},s)},v))});var H=t(5146),L=t.n(H),B=t(8678),D=t.n(B),I=t(6164),R=t.n(I),P=t(4650),A=t.n(P);function T(){let e=(0,u.useRouter)();return(0,c.jsxs)("div",{className:A().container,onClick:()=>{e.push("/scan")},children:[(0,c.jsx)("div",{className:A().empty}),(0,c.jsx)("div",{className:A().button,children:(0,c.jsx)("a",{className:"".concat(A().text," ").concat(R().className),children:"Scan My Face!"})})]})}function U(){return(0,c.jsxs)("div",{className:D().container,id:"intro",children:[(0,c.jsx)("h1",{className:"".concat(D().title," ").concat(L().className),children:"BINGE"}),(0,c.jsx)("p",{className:"".concat(D().desc," ").concat(L().className),children:"An AI Based Genure & Movies Selector!"}),(0,c.jsxs)("div",{className:D().row,children:[(0,c.jsxs)("div",{className:D().card,children:[(0,c.jsx)("h2",{className:"".concat(D().title," ").concat(L().className),children:"Just scan your face and done!"}),(0,c.jsx)("br",{}),(0,c.jsx)(T,{})]}),(0,c.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",width:"350px",height:"350px",children:[(0,c.jsx)("path",{fill:"#fbc02d",d:"M41,22c0,0,2-1,7-1c-3-8-10.53-8.323-10.53-8.323l-0.979-0.117L39,5C29,5,26,9,26,9 c0.235-1.959,1.268-5.516,3-6c-10,0-11,7-11,7s-3-2-3-7c-3,2-5,4-5,9c0,3,1,5,1,5l22,29h7c0-3-2-5-2-5c3,0,6,2,6,2c0-7-3-11-3-11 c4,0,7,2,7,2C48,26,41,22,41,22z"}),(0,c.jsx)("path",{fill:"#673ab7",d:"M40,28c0,6.25-5,12-5,12v5.88L19,46c0,0,0-2,0-4c0,0-9.97,0-14.34-2c-0.01,0-0.01-0.01-0.02-0.01 L4,38H3c-0.29,0-2-3-2-6v-1c0-1,0.72-1,1-1h6v-8c0,0-1.87-0.9-2-2c0,0,0.93-1.82,2.25-3C12.88,12.88,18,12,24,12C34,12,40,20,40,28 z"}),(0,c.jsx)("path",{fill:"#673ab7",d:"M1,32c0,0,1-1.448,1-2s-0.448-1-1-1s-1,0.5-1,1.125C0,31.375,1,32,1,32z"}),(0,c.jsx)("path",{fill:"#512da8",d:"M14,29V19l-4,1l-2,3c0,0,2,0.173,2,2c0,1,0,4,0,4H14z"}),(0,c.jsx)("path",{fill:"#fff",d:"M17.543,32H12c0,0,0-1.835,0-2.217c0-0.883,0-2.565,0-4.783c0-6,7-6,7,2C19,31,17.543,32,17.543,32z"}),(0,c.jsx)("path",{fill:"#ab47bc",d:"M13.88,29c1.17,0,2.12-1.344,2.12-3s-0.95-3-2.12-3c-1.63,0-1.82,1.62-1.83,1.776 C12.02,25.148,12,25.556,12,26s0.02,0.84,0.04,1.2C12.04,27.2,12.125,29,13.88,29z"}),(0,c.jsx)("path",{d:"M14,26c0,1.107-0.5,2-1.12,2C12.54,28,12,27.667,12,26s0.55-2,0.88-2C13.5,24,14,24.893,14,26z"}),(0,c.jsx)("path",{fill:"#fff",d:"M15 23A1 1 0 1 0 15 25A1 1 0 1 0 15 23Z"}),(0,c.jsx)("path",{fill:"#512da8",d:"M33.5 24A1.5 2 0 1 0 33.5 28 1.5 2 0 1 0 33.5 24zM37 27c-1 0-1 .875-1 1.25 0 .5.75 1.75 1 1.75s1-1.125 1-1.75C38 27.875 38 27 37 27zM34 30c-1 0-1 .875-1 1.25 0 .5.75 1.75 1 1.75s1-1.125 1-1.75C35 30.875 35 30 34 30z"}),(0,c.jsx)("path",{fill:"#764ebe",d:"M23,28c-4,0-5,3-8,3c-2.5,0-3-1.625-3-2c-0.844,0-2,0-2,0s0,0-2-1c0,0-3,2-6,2c0,0,4,4,12,4 c4,0,6-2,6-2c0.732,0.581,1.725,1,3,1c2.209,0,4-1.119,4-2.5S25.209,28,23,28z"}),(0,c.jsx)("path",{fill:"#4a148c",d:"M22 36v2c-1.23 0-2.35-.24-3.25-.67C14.46 39.67 9.41 40 5 40H4.66c-.01 0-.01-.01-.02-.01L4 38h1c4.53 0 9.27-.32 13.24-2.68L18.78 35l.52.35C19.93 35.76 20.91 36 22 36zM31 38c0 0-1 4-8 4v2C24 44 31 44 31 38z"}),(0,c.jsxs)("g",{children:[(0,c.jsx)("path",{fill:"#fbc02d",d:"M19 42H23V46H19z"}),(0,c.jsx)("path",{fill:"#ff8f00",d:"M19 42H23V44H19z"})]}),(0,c.jsxs)("g",{children:[(0,c.jsx)("path",{fill:"#311b92",d:"M15.127,21C12,21,12.056,23,8,23c0,0,2.817-5,6.873-5C19.944,18,24,17,24,17s-1,4-4,4 C18.746,21,16.975,21,15.127,21z"}),(0,c.jsx)("path",{fill:"#7e57c2",d:"M24,17c0,0-2,2-8,2c-2,0-2.864,0.577-3.855,1.22C10.944,21,9.521,23,8,23c-0.887,0-2-1.75-2-2.98 c1,0,2.057-0.805,2.75-1.395C10.217,17.375,12,16,15,16C20,16,24,17,24,17z"})]}),(0,c.jsxs)("g",{children:[(0,c.jsx)("path",{fill:"#ff8f00",d:"M48,0.04c-0.39,0.04-1.69,0.64-3.01,1.83c-0.08,0.07-0.16,0.14-0.23,0.22 c-0.42,0.4-0.84,0.87-1.23,1.41c-0.03,0.04-0.06,0.08-0.08,0.12c-0.37,0.51-0.69,1.09-0.96,1.73c-0.14,0.33-0.26,0.68-0.36,1.04 c-0.08,0.29-0.15,0.6-0.19,0.91c-0.04,0.14-0.06,0.28-0.07,0.44c-0.03,0.28-0.05,0.48-0.08,0.64c-0.08,0.73-0.05,0.5-0.25,2.17 l-0.06,0.53c-0.02,0.21-0.06,0.45-0.12,0.74c-0.04,0.21-0.09,0.45-0.16,0.7c-0.11,0.38-0.24,0.79-0.43,1.24 c-0.27,0.66-0.64,1.38-1.16,2.13c-0.22,0.33-0.46,0.66-0.75,1c-0.27,0.33-0.58,0.66-0.92,0.99c-0.26,0.26-0.54,0.52-0.84,0.77 c-0.88,0.75-1.94,1.49-3.21,2.18c-0.3,0.17-1.56,0.41-3.48-0.39c-2.88-1.21-4.34-3.44-4.4-5.12c-0.03-0.39,0.02-0.7,0.14-0.97 c0.25-0.71,1.12-1.41,1.35-1.59c0.31-0.24,0.58-0.43,0.87-0.62c0.07-0.06,0.14-0.11,0.22-0.16c0.02-0.02,0.05-0.04,0.08-0.06 c0.16-0.11,0.72-0.46,1.45-0.9h0.01c0.91-0.56,2.08-1.24,2.95-1.78c0.01-0.01,0.03-0.02,0.04-0.02c0.63-0.37,1.1-0.67,1.22-0.76 c0.08-0.07,0.15-0.12,0.23-0.18c0.07-0.06,0.14-0.12,0.2-0.18c0.49-0.45,0.86-0.89,1.16-1.31V6.76c0.31-0.45,0.54-0.88,0.74-1.31 c0.07-0.15,0.14-0.3,0.21-0.45c0.23-0.46,0.45-0.91,0.77-1.36c0.11-0.16,0.24-0.33,0.39-0.49c0.22-0.27,0.48-0.53,0.8-0.79 c0.13-0.1,0.27-0.2,0.42-0.31c0.44-0.32,0.89-0.58,1.37-0.81c0.03-0.01,0.06-0.02,0.08-0.04c0.17-0.08,0.34-0.15,0.52-0.21 c0.35-0.15,0.71-0.27,1.07-0.38c0.29-0.09,0.58-0.16,0.88-0.23c0.83-0.18,1.68-0.29,2.52-0.34C46.49-0.02,47.25-0.01,48,0.04z"}),(0,c.jsx)("path",{fill:"#ff6f00",d:"M38.86 16.89c-.27.33-.58.66-.92.99-.26.26-.54.52-.84.77-5.16-.96-7.82-3.83-8.73-6.51.07-.06.14-.11.22-.16.02-.02.05-.04.08-.06.16-.11.72-.46 1.45-.9C30.68 13.43 33.23 16.31 38.86 16.89zM41.36 11.82c-.04.21-.09.45-.16.7-.11.38-.24.79-.43 1.24-3.97-.61-6.39-2.38-7.65-4.54.63-.37 1.1-.67 1.22-.76.08-.07.15-.12.23-.18.07-.06.14-.12.2-.18C35.88 10.08 38.16 11.38 41.36 11.82zM42.13 6.39c-.08.29-.15.6-.19.91-.04.14-.06.28-.07.44-.03.28-.05.48-.08.64C39.55 7.67 37.96 6.4 36.88 5c.23-.46.45-.91.77-1.36.11-.16.24-.33.39-.49C38.81 4.39 40.08 5.66 42.13 6.39zM44.76 2.09c-.42.4-.84.87-1.23 1.41-.03.04-.06.08-.08.12-.97-.71-1.69-1.63-2.22-2.63.35-.15.71-.27 1.07-.38.29-.09.58-.16.88-.23C43.56 1.02 44.08 1.62 44.76 2.09z"})]})]})]})]})}var G=t(7649),K=t(468);function V(){let[e,n]=(0,a.useState)(!0);return(0,a.useEffect)(()=>{navigator.mediaDevices.getUserMedia({video:!0}).then(function(e){}),(0,G.e1)(),setTimeout(()=>{n(!1)},3e3)},[]),(0,c.jsxs)("div",{className:i().container,children:[(0,c.jsxs)(r(),{children:[(0,c.jsx)("title",{children:"BINGE"}),(0,c.jsx)("meta",{name:"description",content:"BINGE"}),(0,c.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,c.jsx)("link",{rel:"icon",href:"https://img.icons8.com/color/48/null/spyro.png"})]}),(0,c.jsx)(c.Fragment,{children:e?(0,c.jsx)("div",{className:i().spinner,children:(0,c.jsx)(K.Z,{})}):(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(m,{}),(0,c.jsx)(F,{scene:"https://prod.spline.design/kn0zvs7BJK7kzbqM/scene.splinecode"}),(0,c.jsx)("main",{className:i().main,children:(0,c.jsx)(U,{})})]})})]})}},6164:function(e){e.exports={style:{fontFamily:"'__Open_Sans_d8c39e', '__Open_Sans_Fallback_d8c39e'",fontStyle:"normal"},className:"__className_d8c39e"}},5146:function(e){e.exports={style:{fontFamily:"'__Open_Sans_d8c39e', '__Open_Sans_Fallback_d8c39e'",fontStyle:"normal"},className:"__className_d8c39e"}},8:function(e){e.exports={style:{fontFamily:"'__Open_Sans_e45719', '__Open_Sans_Fallback_e45719'",fontWeight:400,fontStyle:"normal"},className:"__className_e45719"}},4650:function(e){e.exports={container:"Button_container__llJQ7",button:"Button_button__HxzDS",text:"Button_text__zLCn6",empty:"Button_empty__8_Ozb",slide:"Button_slide__tKN_C"}},1502:function(e){e.exports={main:"Home_main__nLjiQ",container:"Home_container__bCOhY",spinner:"Home_spinner__DDWoZ",description:"Home_description__41Owk",code:"Home_code__suPER",grid:"Home_grid__GxQ85",card:"Home_card___LpL1",center:"Home_center__4BFgC",logo:"Home_logo__27_tb",thirteen:"Home_thirteen__cMI_k",rotate:"Home_rotate____XsI",content:"Home_content__Zy02X",vercelLogo:"Home_vercelLogo__dtSk9"}},8678:function(e){e.exports={container:"Intro_container__AnxTD",title:"Intro_title__0waom",card:"Intro_card__vqyI2",row:"Intro_row__olT_P"}},8394:function(e){e.exports={Nav:"Navbar_Nav__2OWKb",items:"Navbar_items__TxnBT",credits:"Navbar_credits__BejBg"}},1599:function(e){e.exports={container:"Spinner_container__hrwqx",spin:"Spinner_spin__tiwVl"}},4902:function(){},522:function(){},753:function(){}},function(e){e.O(0,[269,918,975,774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);