(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[284],{1244:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/scan",function(){return t(4673)}])},5129:function(e,n,t){"use strict";t.d(n,{Z:function(){return l}});var a=t(5893),r=t(7294),s=t(7649);t(4184);var c=t(4970),i=t.n(c),o=t(1346),_=t.n(o);function l(){let[e,n]=(0,r.useState)(!1),t=(0,r.useRef)(),c=(0,r.useRef)(),[o,l]=(0,r.useState)([]);(0,r.useEffect)(()=>{n(!0)},[]);let u=async()=>{if(null!==t.current){var e,n;let a=await (0,s._g)(null===(e=t.current)||void 0===e?void 0:e.video);await (0,s.oo)(null===(n=t.current)||void 0===n?void 0:n.video,c.current,a,"boxLandmarks"),l(a)}},d=e=>{var n;null===(n=e.current)||void 0===n||n.getContext("2d").clearRect(0,0,e.width,e.height)};return(0,r.useEffect)(()=>{if(null===t||!0!=e)return d(c);{let n=setInterval(async()=>{await u()},80);return()=>{d(c),clearInterval(n)}}},[e]),(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{className:_().camera,children:[(0,a.jsx)("p",{className:_().scroll_down,children:"Scroll down for results ↓"}),(0,a.jsxs)("div",{className:_().camera__wrapper,children:[(0,a.jsx)(i(),{audio:!1,ref:t,width:"100%",height:"auto"}),(0,a.jsx)("canvas",{className:"".concat(_().webcamoverlay),ref:c,style:{zIndex:99}})]}),(null==o?void 0:o.length)>0?o.map((e,n)=>{var t;console.log(Object.keys(t=e.expressions).reduce(function(e,n){return t[e]>t[n]?e:n}))}):"please wait"]})})}},7649:function(e,n,t){"use strict";t.d(n,{_g:function(){return s},e1:function(){return r},oo:function(){return c}});var a=t(6965);let r=()=>{let e="https://raw.githubusercontent.com/justadudewhohacks/face-api.js/master/weights/";return Promise.all([a.qB.tinyFaceDetector.loadFromUri(e+"tiny_face_detector_model-weights_manifest.json"),a.qB.faceLandmark68Net.loadFromUri(e+"face_landmark_68_model-weights_manifest.json"),a.qB.faceRecognitionNet.loadFromUri(e+"face_recognition_model-weights_manifest.json"),a.qB.faceExpressionNet.loadFromUri(e+"face_expression_model-weights_manifest.json")])},s=async e=>{if(!e)return;let n=e.getBoundingClientRect(),t={width:n.width,height:n.height};if(0===t.height)return;let r=await a.Qr(e,new a.aK({inputSize:320})).withFaceLandmarks().withFaceExpressions();return a._C(r,t)},c=async(e,n,t,r)=>{if(e&&n&&t){let s=e.getBoundingClientRect(),c={width:s.width,height:s.height};a.JF(n,c),n.getContext("2d").clearRect(0,0,n.width,n.height);let i=a._C(t,c);switch(r){case"landmarks":a.ii.drawFaceLandmarks(n,i);break;case"expressions":a.ii.drawFaceExpressions(n,i);break;case"box":a.ii.drawDetections(n,i);break;case"boxLandmarks":a.ii.drawDetections(n,i),a.ii.drawFaceExpressions(n,i),a.ii.drawFaceLandmarks(n,i)}}}},4673:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return w}});var a=t(5893),r=t(4443),s=t.n(r),c=t(9008),i=t.n(c),o=t(580),_=t.n(o),l=t(1599),u=t.n(l);function d(){return(0,a.jsx)("div",{className:u().container})}var m=t(5129),f=t(7294),h=t(7649);function w(){let[e,n]=(0,f.useState)(!0);return(0,f.useEffect)(()=>{(0,h.e1)(),navigator.permissions.query({name:"camera"}).then(e=>{"granted"==e.state&&setTimeout(()=>{n(!1)},5e3)})},[]),(0,a.jsxs)("div",{className:_().container,children:[(0,a.jsxs)(i(),{children:[(0,a.jsx)("title",{children:"BINGE"}),(0,a.jsx)("meta",{name:"description",content:"BINGE"}),(0,a.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,a.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,a.jsxs)("main",{className:_().main,children:[e?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(d,{}),(0,a.jsx)("p",{className:"".concat(_().title," ").concat(s().className),children:"Make sure you allow camera access!"}),(0,a.jsx)("p",{className:"".concat(_().desc," ").concat(s().className),children:"After allowing camera access, Please wait for 5-10 seconds!"})]}):"good to gooo",(0,a.jsx)(m.Z,{})]})]})}},4443:function(e){e.exports={style:{fontFamily:"'__Open_Sans_99e769', '__Open_Sans_Fallback_99e769'",fontStyle:"normal"},className:"__className_99e769"}},1346:function(e){e.exports={camera:"FaceTest_camera__0F1Q_",scroll_down:"FaceTest_scroll_down__MqKYe",camera__wrapper:"FaceTest_camera__wrapper__Jwd7u","camera__button-container":"FaceTest_camera__button-container__nTbWJ","camera__button--snap":"FaceTest_camera__button--snap__LL1ts",webcamoverlay:"FaceTest_webcamoverlay___HtQL",webcamoverlayhidden:"FaceTest_webcamoverlayhidden__Cr61h",results__container:"FaceTest_results__container__3IevW",results__wrapper:"FaceTest_results__wrapper__gyMK0"}},580:function(e){e.exports={container:"Scan_container__eCkJ5",main:"Scan_main__HF1V1",title:"Scan_title__Kbh5L",desc:"Scan_desc__xb0vM"}},1599:function(e){e.exports={container:"Spinner_container__hrwqx",spin:"Spinner_spin__tiwVl"}},4902:function(){},522:function(){},753:function(){}},function(e){e.O(0,[269,582,774,888,179],function(){return e(e.s=1244)}),_N_E=e.O()}]);