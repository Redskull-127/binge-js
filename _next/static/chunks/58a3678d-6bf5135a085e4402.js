"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[918],{2249:function(A,e,t){let i,r,s,a,o,l,h,c,d,u,p,f,m,g,v,y,x,b,w,S,M,E,T,C,D,P,_,L,O,B,I,R,N,z,F,U,k,G,V,j,H,W,Y,X,Q,q,Z,K,J,$,AA,Ae,At,Ai,Ar,As,An,Aa,Ao,Al,Ah,Ac,Ad,Au,Ap,Af,Am,Ag,Av,Ay,Ax,Ab,Aw,AS,AM,AE,AT,AC,AD,AP,A_,AL,AO,AB,AI,AR,AN,Az,AF,AU,Ak,AG,AV,Aj,AH,AW,AY,AX,AQ,Aq,AZ,AK,AJ,A$,A0,A1,A2,A3,A4,A5,A6,A8;t.d(e,{M:function(){return Dj}});var A9,A7,eA=t(3454),ee=t(1876).Buffer,et=Object.create,ei=Object.defineProperty,er=Object.getOwnPropertyDescriptor,es=Object.getOwnPropertyNames,en=Object.getPrototypeOf,ea=Object.prototype.hasOwnProperty,eo=(A,e)=>()=>(e||A((e={exports:{}}).exports,e),e.exports),el=(A,e,t,i)=>{if(e&&"object"==typeof e||"function"==typeof e)for(let r of es(e))ea.call(A,r)||r===t||ei(A,r,{get:()=>e[r],enumerable:!(i=er(e,r))||i.enumerable});return A},eh=(A,e,t)=>(t=null!=A?et(en(A)):{},el(!e&&A&&A.__esModule?t:ei(t,"default",{value:A,enumerable:!0}),A)),ec=eo((A,e)=>{var t,i;t=A,i=function(){return A.importState=function(e){var t=new A;return t.importState(e),t},A;function A(){return function(A){var e,t,i=0,r=0,s=0,a=1;0==A.length&&(A=[+new Date]);var o=(e=4022871197,(t=function(A){A=A.toString();for(var t=0;t<A.length;t++){var i=.02519603282416938*(e+=A.charCodeAt(t));e=i>>>0,i-=e,i*=e,e=i>>>0,i-=e,e+=4294967296*i}return(e>>>0)*23283064365386963e-26}).version="Mash 0.9",t);i=o(" "),r=o(" "),s=o(" ");for(var l=0;l<A.length;l++)(i-=o(A[l]))<0&&(i+=1),(r-=o(A[l]))<0&&(r+=1),(s-=o(A[l]))<0&&(s+=1);o=null;var h=function(){var A=2091639*i+23283064365386963e-26*a;return i=r,r=s,s=A-(a=0|A)};return h.next=h,h.uint32=function(){return 4294967296*h()},h.fract53=function(){return h()+(2097152*h()|0)*11102230246251565e-32},h.version="Alea 0.9",h.args=A,h.exportState=function(){return[i,r,s,a]},h.importState=function(A){i=+A[0]||0,r=+A[1]||0,s=+A[2]||0,a=+A[3]||0},h}(Array.prototype.slice.call(arguments))}},"object"==typeof A?e.exports=i():"function"==typeof define&&define.amd?define(i):t.Alea=i()}),ed=eo((A,e)=>{var t,i;t=A,i=function(A){A.SVD=function(A,e,t,i,r){if(e=void 0===e||e,t=void 0===t||t,r=1e-64/(i=i||2220446049250313e-31),!A)throw TypeError("Matrix a is not defined");var s,a,o,l,h,c,d,u,p,f,m,g,v=A[0].length,y=A.length;if(y<v)throw TypeError("Invalid matrix: m < n");for(var x=[],b=[],w=[],S="f"===e?y:v,M=f=d=0;M<y;M++)b[M]=Array(S).fill(0);for(M=0;M<v;M++)w[M]=Array(v).fill(0);var E,T=Array(v).fill(0);for(M=0;M<y;M++)for(s=0;s<v;s++)b[M][s]=A[M][s];for(M=0;M<v;M++){for(x[M]=d,p=0,o=M+1,s=M;s<y;s++)p+=Math.pow(b[s][M],2);if(p<r)d=0;else for(u=(c=b[M][M])*(d=c<0?Math.sqrt(p):-Math.sqrt(p))-p,b[M][M]=c-d,s=o;s<v;s++){for(p=0,a=M;a<y;a++)p+=b[a][M]*b[a][s];for(c=p/u,a=M;a<y;a++)b[a][s]=b[a][s]+c*b[a][M]}for(T[M]=d,p=0,s=o;s<v;s++)p+=Math.pow(b[M][s],2);if(p<r)d=0;else{for(u=(c=b[M][M+1])*(d=c<0?Math.sqrt(p):-Math.sqrt(p))-p,b[M][M+1]=c-d,s=o;s<v;s++)x[s]=b[M][s]/u;for(s=o;s<y;s++){for(p=0,a=o;a<v;a++)p+=b[s][a]*b[M][a];for(a=o;a<v;a++)b[s][a]=b[s][a]+p*x[a]}}f<(m=Math.abs(T[M])+Math.abs(x[M]))&&(f=m)}if(t)for(M=v-1;0<=M;M--){if(0!==d){for(u=b[M][M+1]*d,s=o;s<v;s++)w[s][M]=b[M][s]/u;for(s=o;s<v;s++){for(p=0,a=o;a<v;a++)p+=b[M][a]*w[a][s];for(a=o;a<v;a++)w[a][s]=w[a][s]+p*w[a][M]}}for(s=o;s<v;s++)w[M][s]=0,w[s][M]=0;w[M][M]=1,d=x[M],o=M}if(e){if("f"===e)for(M=v;M<y;M++){for(s=v;s<y;s++)b[M][s]=0;b[M][M]=1}for(M=v-1;0<=M;M--){for(o=M+1,d=T[M],s=o;s<S;s++)b[M][s]=0;if(0!==d){for(u=b[M][M]*d,s=o;s<S;s++){for(p=0,a=o;a<y;a++)p+=b[a][M]*b[a][s];for(c=p/u,a=M;a<y;a++)b[a][s]=b[a][s]+c*b[a][M]}for(s=M;s<y;s++)b[s][M]=b[s][M]/d}else for(s=M;s<y;s++)b[s][M]=0;b[M][M]=b[M][M]+1}}for(i*=f,a=v-1;0<=a;a--)for(var C=0;C<50;C++){for(E=!1,o=a;0<=o;o--){if(Math.abs(x[o])<=i){E=!0;break}if(Math.abs(T[o-1])<=i)break}if(!E){for(h=0,l=o-(p=1),M=o;M<a+1&&(c=p*x[M],x[M]=h*x[M],!(Math.abs(c)<=i));M++)if(d=T[M],T[M]=Math.sqrt(c*c+d*d),h=d/(u=T[M]),p=-c/u,e)for(s=0;s<y;s++)m=b[s][l],g=b[s][M],b[s][l]=m*h+g*p,b[s][M]=-m*p+g*h}if(g=T[a],o===a){if(g<0&&(T[a]=-g,t))for(s=0;s<v;s++)w[s][a]=-w[s][a];break}for(f=T[o],d=Math.sqrt((c=(((m=T[a-1])-g)*(m+g)+((d=x[a-1])-(u=x[a]))*(d+u))/(2*u*m))*c+1),c=((f-g)*(f+g)+u*(m/(c<0?c-d:c+d)-u))/f,M=o+(p=h=1);M<a+1;M++){if(d=x[M],m=T[M],u=p*d,d*=h,g=Math.sqrt(c*c+u*u),c=f*(h=c/(x[M-1]=g))+d*(p=u/g),d=-f*p+d*h,u=m*p,m*=h,t)for(s=0;s<v;s++)f=w[s][M-1],g=w[s][M],w[s][M-1]=f*h+g*p,w[s][M]=-f*p+g*h;if(g=Math.sqrt(c*c+u*u),c=(h=c/(T[M-1]=g))*d+(p=u/g)*m,f=-p*d+h*m,e)for(s=0;s<y;s++)m=b[s][M-1],g=b[s][M],b[s][M-1]=m*h+g*p,b[s][M]=-m*p+g*h}x[o]=0,x[a]=c,T[a]=f}for(M=0;M<v;M++)T[M]<i&&(T[M]=0);return{u:b,q:T,v:w}},A.VERSION="1.1.1",Object.defineProperty(A,"__esModule",{value:!0})},"object"==typeof A&&"u">typeof e?i(A):"function"==typeof define&&define.amd?define(["exports"],i):i((t="u">typeof globalThis?globalThis:t||self).SVDJS={})}),eu=eo(A=>{var e,t,i,r,s,a,o,l,h,c,d,u,p,f;(e=function(){this.init()}).prototype={init:function(){var A=this||t;return A._counter=1e3,A._html5AudioPool=[],A.html5PoolSize=10,A._codecs={},A._howls=[],A._muted=!1,A._volume=1,A._canPlayEvent="canplaythrough",A._navigator="u">typeof window&&window.navigator?window.navigator:null,A.masterGain=null,A.noAudio=!1,A.usingWebAudio=!0,A.autoSuspend=!0,A.ctx=null,A.autoUnlock=!0,A._setup(),A},volume:function(A){var e=this||t;if(A=parseFloat(A),e.ctx||c(),"u">typeof A&&A>=0&&A<=1){if(e._volume=A,e._muted)return e;e.usingWebAudio&&e.masterGain.gain.setValueAtTime(A,t.ctx.currentTime);for(var i=0;i<e._howls.length;i++)if(!e._howls[i]._webAudio)for(var r=e._howls[i]._getSoundIds(),s=0;s<r.length;s++){var a=e._howls[i]._soundById(r[s]);a&&a._node&&(a._node.volume=a._volume*A)}return e}return e._volume},mute:function(A){var e=this||t;e.ctx||c(),e._muted=A,e.usingWebAudio&&e.masterGain.gain.setValueAtTime(A?0:e._volume,t.ctx.currentTime);for(var i=0;i<e._howls.length;i++)if(!e._howls[i]._webAudio)for(var r=e._howls[i]._getSoundIds(),s=0;s<r.length;s++){var a=e._howls[i]._soundById(r[s]);a&&a._node&&(a._node.muted=!!A||a._muted)}return e},stop:function(){for(var A=this||t,e=0;e<A._howls.length;e++)A._howls[e].stop();return A},unload:function(){for(var A=this||t,e=A._howls.length-1;e>=0;e--)A._howls[e].unload();return A.usingWebAudio&&A.ctx&&"u">typeof A.ctx.close&&(A.ctx.close(),A.ctx=null,c()),A},codecs:function(A){return(this||t)._codecs[A.replace(/^x-/,"")]},_setup:function(){var A=this||t;if(A.state=A.ctx&&A.ctx.state||"suspended",A._autoSuspend(),!A.usingWebAudio){if("u">typeof Audio)try{var e=new Audio;typeof e.oncanplaythrough>"u"&&(A._canPlayEvent="canplay")}catch{A.noAudio=!0}else A.noAudio=!0}try{var e=new Audio;e.muted&&(A.noAudio=!0)}catch{}return A.noAudio||A._setupCodecs(),A},_setupCodecs:function(){var A=this||t,e=null;try{e="u">typeof Audio?new Audio:null}catch{return A}if(!e||"function"!=typeof e.canPlayType)return A;var i=e.canPlayType("audio/mpeg;").replace(/^no$/,""),r=A._navigator?A._navigator.userAgent:"",s=r.match(/OPR\/([0-6].)/g),a=s&&33>parseInt(s[0].split("/")[1],10),o=-1!==r.indexOf("Safari")&&-1===r.indexOf("Chrome"),l=r.match(/Version\/(.*?) /),h=o&&l&&15>parseInt(l[1],10);return A._codecs={mp3:!!(!a&&(i||e.canPlayType("audio/mp3;").replace(/^no$/,""))),mpeg:!!i,opus:!!e.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/,""),ogg:!!e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),oga:!!e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),wav:!!(e.canPlayType('audio/wav; codecs="1"')||e.canPlayType("audio/wav")).replace(/^no$/,""),aac:!!e.canPlayType("audio/aac;").replace(/^no$/,""),caf:!!e.canPlayType("audio/x-caf;").replace(/^no$/,""),m4a:!!(e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/m4a;")||e.canPlayType("audio/aac;")).replace(/^no$/,""),m4b:!!(e.canPlayType("audio/x-m4b;")||e.canPlayType("audio/m4b;")||e.canPlayType("audio/aac;")).replace(/^no$/,""),mp4:!!(e.canPlayType("audio/x-mp4;")||e.canPlayType("audio/mp4;")||e.canPlayType("audio/aac;")).replace(/^no$/,""),weba:!!(!h&&e.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,"")),webm:!!(!h&&e.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,"")),dolby:!!e.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/,""),flac:!!(e.canPlayType("audio/x-flac;")||e.canPlayType("audio/flac;")).replace(/^no$/,"")},A},_unlockAudio:function(){var A=this||t;if(!(A._audioUnlocked||!A.ctx)){A._audioUnlocked=!1,A.autoUnlock=!1,A._mobileUnloaded||44100===A.ctx.sampleRate||(A._mobileUnloaded=!0,A.unload()),A._scratchBuffer=A.ctx.createBuffer(1,1,22050);var e=function(t){for(;A._html5AudioPool.length<A.html5PoolSize;)try{var i=new Audio;i._unlocked=!0,A._releaseHtml5Audio(i)}catch{A.noAudio=!0;break}for(var r=0;r<A._howls.length;r++)if(!A._howls[r]._webAudio)for(var s=A._howls[r]._getSoundIds(),a=0;a<s.length;a++){var o=A._howls[r]._soundById(s[a]);o&&o._node&&!o._node._unlocked&&(o._node._unlocked=!0,o._node.load())}A._autoResume();var l=A.ctx.createBufferSource();l.buffer=A._scratchBuffer,l.connect(A.ctx.destination),typeof l.start>"u"?l.noteOn(0):l.start(0),"function"==typeof A.ctx.resume&&A.ctx.resume(),l.onended=function(){l.disconnect(0),A._audioUnlocked=!0,document.removeEventListener("touchstart",e,!0),document.removeEventListener("touchend",e,!0),document.removeEventListener("click",e,!0),document.removeEventListener("keydown",e,!0);for(var t=0;t<A._howls.length;t++)A._howls[t]._emit("unlock")}};return document.addEventListener("touchstart",e,!0),document.addEventListener("touchend",e,!0),document.addEventListener("click",e,!0),document.addEventListener("keydown",e,!0),A}},_obtainHtml5Audio:function(){var A=this||t;if(A._html5AudioPool.length)return A._html5AudioPool.pop();var e=new Audio().play();return e&&"u">typeof Promise&&(e instanceof Promise||"function"==typeof e.then)&&e.catch(function(){console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.")}),new Audio},_releaseHtml5Audio:function(A){var e=this||t;return A._unlocked&&e._html5AudioPool.push(A),e},_autoSuspend:function(){var A=this;if(!(!A.autoSuspend||!A.ctx||typeof A.ctx.suspend>"u"||!t.usingWebAudio)){for(var e=0;e<A._howls.length;e++)if(A._howls[e]._webAudio){for(var i=0;i<A._howls[e]._sounds.length;i++)if(!A._howls[e]._sounds[i]._paused)return A}return A._suspendTimer&&clearTimeout(A._suspendTimer),A._suspendTimer=setTimeout(function(){if(A.autoSuspend){A._suspendTimer=null,A.state="suspending";var e=function(){A.state="suspended",A._resumeAfterSuspend&&(delete A._resumeAfterSuspend,A._autoResume())};A.ctx.suspend().then(e,e)}},3e4),A}},_autoResume:function(){var A=this;if(!(!A.ctx||typeof A.ctx.resume>"u"||!t.usingWebAudio))return"running"===A.state&&"interrupted"!==A.ctx.state&&A._suspendTimer?(clearTimeout(A._suspendTimer),A._suspendTimer=null):"suspended"===A.state||"running"===A.state&&"interrupted"===A.ctx.state?(A.ctx.resume().then(function(){A.state="running";for(var e=0;e<A._howls.length;e++)A._howls[e]._emit("resume")}),A._suspendTimer&&(clearTimeout(A._suspendTimer),A._suspendTimer=null)):"suspending"===A.state&&(A._resumeAfterSuspend=!0),A}},t=new e,(i=function(A){if(!A.src||0===A.src.length){console.error("An array of source files must be passed with any new Howl.");return}this.init(A)}).prototype={init:function(A){var e=this;return t.ctx||c(),e._autoplay=A.autoplay||!1,e._format="string"!=typeof A.format?A.format:[A.format],e._html5=A.html5||!1,e._muted=A.mute||!1,e._loop=A.loop||!1,e._pool=A.pool||5,e._preload="boolean"!=typeof A.preload&&"metadata"!==A.preload||A.preload,e._rate=A.rate||1,e._sprite=A.sprite||{},e._src="string"!=typeof A.src?A.src:[A.src],e._volume=void 0!==A.volume?A.volume:1,e._xhr={method:A.xhr&&A.xhr.method?A.xhr.method:"GET",headers:A.xhr&&A.xhr.headers?A.xhr.headers:null,withCredentials:!!A.xhr&&!!A.xhr.withCredentials&&A.xhr.withCredentials},e._duration=0,e._state="unloaded",e._sounds=[],e._endTimers={},e._queue=[],e._playLock=!1,e._onend=A.onend?[{fn:A.onend}]:[],e._onfade=A.onfade?[{fn:A.onfade}]:[],e._onload=A.onload?[{fn:A.onload}]:[],e._onloaderror=A.onloaderror?[{fn:A.onloaderror}]:[],e._onplayerror=A.onplayerror?[{fn:A.onplayerror}]:[],e._onpause=A.onpause?[{fn:A.onpause}]:[],e._onplay=A.onplay?[{fn:A.onplay}]:[],e._onstop=A.onstop?[{fn:A.onstop}]:[],e._onmute=A.onmute?[{fn:A.onmute}]:[],e._onvolume=A.onvolume?[{fn:A.onvolume}]:[],e._onrate=A.onrate?[{fn:A.onrate}]:[],e._onseek=A.onseek?[{fn:A.onseek}]:[],e._onunlock=A.onunlock?[{fn:A.onunlock}]:[],e._onresume=[],e._webAudio=t.usingWebAudio&&!e._html5,"u">typeof t.ctx&&t.ctx&&t.autoUnlock&&t._unlockAudio(),t._howls.push(e),e._autoplay&&e._queue.push({event:"play",action:function(){e.play()}}),e._preload&&"none"!==e._preload&&e.load(),e},load:function(){var A,e,i=this,s=null;if(t.noAudio){i._emit("loaderror",null,"No audio support.");return}"string"==typeof i._src&&(i._src=[i._src]);for(var o=0;o<i._src.length;o++){if(i._format&&i._format[o])A=i._format[o];else{if("string"!=typeof(e=i._src[o])){i._emit("loaderror",null,"Non-string found in selected audio sources - ignoring.");continue}(A=/^data:audio\/([^;,]+);/i.exec(e))||(A=/\.([^.]+)$/.exec(e.split("?",1)[0])),A&&(A=A[1].toLowerCase())}if(A||console.warn('No file extension was found. Consider using the "format" property or specify an extension.'),A&&t.codecs(A)){s=i._src[o];break}}if(!s){i._emit("loaderror",null,"No codec support for selected audio sources.");return}return i._src=s,i._state="loading","https:"===window.location.protocol&&"http:"===s.slice(0,5)&&(i._html5=!0,i._webAudio=!1),new r(i),i._webAudio&&a(i),i},play:function(A,e){var i=this,r=null;if("number"==typeof A)r=A,A=null;else{if("string"==typeof A&&"loaded"===i._state&&!i._sprite[A])return null;if(typeof A>"u"&&(A="__default",!i._playLock)){for(var s=0,a=0;a<i._sounds.length;a++)i._sounds[a]._paused&&!i._sounds[a]._ended&&(s++,r=i._sounds[a]._id);1===s?A=null:r=null}}var o=r?i._soundById(r):i._inactiveSound();if(!o)return null;if(r&&!A&&(A=o._sprite||"__default"),"loaded"!==i._state){o._sprite=A,o._ended=!1;var l=o._id;return i._queue.push({event:"play",action:function(){i.play(l)}}),l}if(r&&!o._paused)return e||i._loadQueue("play"),o._id;i._webAudio&&t._autoResume();var h=Math.max(0,o._seek>0?o._seek:i._sprite[A][0]/1e3),c=Math.max(0,(i._sprite[A][0]+i._sprite[A][1])/1e3-h),d=1e3*c/Math.abs(o._rate),u=i._sprite[A][0]/1e3,p=(i._sprite[A][0]+i._sprite[A][1])/1e3;o._sprite=A,o._ended=!1;var f=function(){o._paused=!1,o._seek=h,o._start=u,o._stop=p,o._loop=!!(o._loop||i._sprite[A][2])};if(h>=p){i._ended(o);return}var m=o._node;if(i._webAudio){var g=function(){i._playLock=!1,f(),i._refreshBuffer(o);var A=o._muted||i._muted?0:o._volume;m.gain.setValueAtTime(A,t.ctx.currentTime),o._playStart=t.ctx.currentTime,typeof m.bufferSource.start>"u"?o._loop?m.bufferSource.noteGrainOn(0,h,86400):m.bufferSource.noteGrainOn(0,h,c):o._loop?m.bufferSource.start(0,h,86400):m.bufferSource.start(0,h,c),d!==1/0&&(i._endTimers[o._id]=setTimeout(i._ended.bind(i,o),d)),e||setTimeout(function(){i._emit("play",o._id),i._loadQueue()},0)};"running"===t.state&&"interrupted"!==t.ctx.state?g():(i._playLock=!0,i.once("resume",g),i._clearTimer(o._id))}else{var v=function(){m.currentTime=h,m.muted=o._muted||i._muted||t._muted||m.muted,m.volume=o._volume*t.volume(),m.playbackRate=o._rate;try{var r=m.play();if(r&&"u">typeof Promise&&(r instanceof Promise||"function"==typeof r.then)?(i._playLock=!0,f(),r.then(function(){i._playLock=!1,m._unlocked=!0,e?i._loadQueue():i._emit("play",o._id)}).catch(function(){i._playLock=!1,i._emit("playerror",o._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."),o._ended=!0,o._paused=!0})):e||(i._playLock=!1,f(),i._emit("play",o._id)),m.playbackRate=o._rate,m.paused){i._emit("playerror",o._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");return}"__default"!==A||o._loop?i._endTimers[o._id]=setTimeout(i._ended.bind(i,o),d):(i._endTimers[o._id]=function(){i._ended(o),m.removeEventListener("ended",i._endTimers[o._id],!1)},m.addEventListener("ended",i._endTimers[o._id],!1))}catch(s){i._emit("playerror",o._id,s)}};"data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA"===m.src&&(m.src=i._src,m.load());var y=window&&window.ejecta||!m.readyState&&t._navigator.isCocoonJS;if(m.readyState>=3||y)v();else{i._playLock=!0,i._state="loading";var x=function(){i._state="loaded",v(),m.removeEventListener(t._canPlayEvent,x,!1)};m.addEventListener(t._canPlayEvent,x,!1),i._clearTimer(o._id)}}return o._id},pause:function(A){var e=this;if("loaded"!==e._state||e._playLock)return e._queue.push({event:"pause",action:function(){e.pause(A)}}),e;for(var t=e._getSoundIds(A),i=0;i<t.length;i++){e._clearTimer(t[i]);var r=e._soundById(t[i]);if(r&&!r._paused&&(r._seek=e.seek(t[i]),r._rateSeek=0,r._paused=!0,e._stopFade(t[i]),r._node)){if(e._webAudio){if(!r._node.bufferSource)continue;typeof r._node.bufferSource.stop>"u"?r._node.bufferSource.noteOff(0):r._node.bufferSource.stop(0),e._cleanBuffer(r._node)}else isNaN(r._node.duration)&&r._node.duration!==1/0||r._node.pause()}arguments[1]||e._emit("pause",r?r._id:null)}return e},stop:function(A,e){var t=this;if("loaded"!==t._state||t._playLock)return t._queue.push({event:"stop",action:function(){t.stop(A)}}),t;for(var i=t._getSoundIds(A),r=0;r<i.length;r++){t._clearTimer(i[r]);var s=t._soundById(i[r]);s&&(s._seek=s._start||0,s._rateSeek=0,s._paused=!0,s._ended=!0,t._stopFade(i[r]),s._node&&(t._webAudio?s._node.bufferSource&&(typeof s._node.bufferSource.stop>"u"?s._node.bufferSource.noteOff(0):s._node.bufferSource.stop(0),t._cleanBuffer(s._node)):isNaN(s._node.duration)&&s._node.duration!==1/0||(s._node.currentTime=s._start||0,s._node.pause(),s._node.duration===1/0&&t._clearSound(s._node))),e||t._emit("stop",s._id))}return t},mute:function(A,e){var i=this;if("loaded"!==i._state||i._playLock)return i._queue.push({event:"mute",action:function(){i.mute(A,e)}}),i;if(typeof e>"u"){if("boolean"!=typeof A)return i._muted;i._muted=A}for(var r=i._getSoundIds(e),s=0;s<r.length;s++){var a=i._soundById(r[s]);a&&(a._muted=A,a._interval&&i._stopFade(a._id),i._webAudio&&a._node?a._node.gain.setValueAtTime(A?0:a._volume,t.ctx.currentTime):a._node&&(a._node.muted=!!t._muted||A),i._emit("mute",a._id))}return i},volume:function(){var A,e,i,r=this,s=arguments;if(0===s.length)return r._volume;if(1===s.length||2===s.length&&typeof s[1]>"u"?r._getSoundIds().indexOf(s[0])>=0?i=parseInt(s[0],10):e=parseFloat(s[0]):s.length>=2&&(e=parseFloat(s[0]),i=parseInt(s[1],10)),!("u">typeof e)||!(e>=0)||!(e<=1))return(A=i?r._soundById(i):r._sounds[0])?A._volume:0;if("loaded"!==r._state||r._playLock)return r._queue.push({event:"volume",action:function(){r.volume.apply(r,s)}}),r;typeof i>"u"&&(r._volume=e),i=r._getSoundIds(i);for(var a=0;a<i.length;a++)(A=r._soundById(i[a]))&&(A._volume=e,s[2]||r._stopFade(i[a]),r._webAudio&&A._node&&!A._muted?A._node.gain.setValueAtTime(e,t.ctx.currentTime):A._node&&!A._muted&&(A._node.volume=e*t.volume()),r._emit("volume",A._id));return r},fade:function(A,e,i,r){var s=this;if("loaded"!==s._state||s._playLock)return s._queue.push({event:"fade",action:function(){s.fade(A,e,i,r)}}),s;A=Math.min(Math.max(0,parseFloat(A)),1),e=Math.min(Math.max(0,parseFloat(e)),1),i=parseFloat(i),s.volume(A,r);for(var a=s._getSoundIds(r),o=0;o<a.length;o++){var l=s._soundById(a[o]);if(l){if(r||s._stopFade(a[o]),s._webAudio&&!l._muted){var h=t.ctx.currentTime,c=h+i/1e3;l._volume=A,l._node.gain.setValueAtTime(A,h),l._node.gain.linearRampToValueAtTime(e,c)}s._startFadeInterval(l,A,e,i,a[o],typeof r>"u")}}return s},_startFadeInterval:function(A,e,t,i,r,s){var a=this,o=e,l=t-e,h=Math.abs(l/.01),c=Date.now();A._fadeTo=t,A._interval=setInterval(function(){var r=(Date.now()-c)/i;c=Date.now(),o+=l*r,o=Math.round(100*o)/100,o=l<0?Math.max(t,o):Math.min(t,o),a._webAudio?A._volume=o:a.volume(o,A._id,!0),s&&(a._volume=o),(t<e&&o<=t||t>e&&o>=t)&&(clearInterval(A._interval),A._interval=null,A._fadeTo=null,a.volume(t,A._id),a._emit("fade",A._id))},Math.max(4,h>0?i/h:i))},_stopFade:function(A){var e=this._soundById(A);return e&&e._interval&&(this._webAudio&&e._node.gain.cancelScheduledValues(t.ctx.currentTime),clearInterval(e._interval),e._interval=null,this.volume(e._fadeTo,A),e._fadeTo=null,this._emit("fade",A)),this},loop:function(){var A,e,t,i=this,r=arguments;if(0===r.length)return i._loop;if(1===r.length){if("boolean"!=typeof r[0])return!!(t=i._soundById(parseInt(r[0],10)))&&t._loop;A=r[0],i._loop=A}else 2===r.length&&(A=r[0],e=parseInt(r[1],10));for(var s=i._getSoundIds(e),a=0;a<s.length;a++)(t=i._soundById(s[a]))&&(t._loop=A,i._webAudio&&t._node&&t._node.bufferSource&&(t._node.bufferSource.loop=A,A&&(t._node.bufferSource.loopStart=t._start||0,t._node.bufferSource.loopEnd=t._stop,i.playing(s[a])&&(i.pause(s[a],!0),i.play(s[a],!0)))));return i},rate:function(){var A,e,i,r=this,s=arguments;if(0===s.length?i=r._sounds[0]._id:1===s.length?r._getSoundIds().indexOf(s[0])>=0?i=parseInt(s[0],10):e=parseFloat(s[0]):2===s.length&&(e=parseFloat(s[0]),i=parseInt(s[1],10)),"number"!=typeof e)return(A=r._soundById(i))?A._rate:r._rate;if("loaded"!==r._state||r._playLock)return r._queue.push({event:"rate",action:function(){r.rate.apply(r,s)}}),r;typeof i>"u"&&(r._rate=e),i=r._getSoundIds(i);for(var a=0;a<i.length;a++)if(A=r._soundById(i[a])){r.playing(i[a])&&(A._rateSeek=r.seek(i[a]),A._playStart=r._webAudio?t.ctx.currentTime:A._playStart),A._rate=e,r._webAudio&&A._node&&A._node.bufferSource?A._node.bufferSource.playbackRate.setValueAtTime(e,t.ctx.currentTime):A._node&&(A._node.playbackRate=e);var o=r.seek(i[a]),l=1e3*((r._sprite[A._sprite][0]+r._sprite[A._sprite][1])/1e3-o)/Math.abs(A._rate);(r._endTimers[i[a]]||!A._paused)&&(r._clearTimer(i[a]),r._endTimers[i[a]]=setTimeout(r._ended.bind(r,A),l)),r._emit("rate",A._id)}return r},seek:function(){var A,e,i=this,r=arguments;if(0===r.length?i._sounds.length&&(e=i._sounds[0]._id):1===r.length?i._getSoundIds().indexOf(r[0])>=0?e=parseInt(r[0],10):i._sounds.length&&(e=i._sounds[0]._id,A=parseFloat(r[0])):2===r.length&&(A=parseFloat(r[0]),e=parseInt(r[1],10)),typeof e>"u")return 0;if("number"==typeof A&&("loaded"!==i._state||i._playLock))return i._queue.push({event:"seek",action:function(){i.seek.apply(i,r)}}),i;var s=i._soundById(e);if(s){if("number"==typeof A&&A>=0){var a=i.playing(e);a&&i.pause(e,!0),s._seek=A,s._ended=!1,i._clearTimer(e),i._webAudio||!s._node||isNaN(s._node.duration)||(s._node.currentTime=A);var o=function(){a&&i.play(e,!0),i._emit("seek",e)};if(a&&!i._webAudio){var l=function(){i._playLock?setTimeout(l,0):o()};setTimeout(l,0)}else o()}else{if(!i._webAudio)return s._node.currentTime;var h=i.playing(e)?t.ctx.currentTime-s._playStart:0,c=s._rateSeek?s._rateSeek-s._seek:0;return s._seek+(c+h*Math.abs(s._rate))}}return i},playing:function(A){if("number"==typeof A){var e=this._soundById(A);return!!e&&!e._paused}for(var t=0;t<this._sounds.length;t++)if(!this._sounds[t]._paused)return!0;return!1},duration:function(A){var e=this._duration,t=this._soundById(A);return t&&(e=this._sprite[t._sprite][1]/1e3),e},state:function(){return this._state},unload:function(){for(var A=this,e=A._sounds,i=0;i<e.length;i++)e[i]._paused||A.stop(e[i]._id),A._webAudio||(A._clearSound(e[i]._node),e[i]._node.removeEventListener("error",e[i]._errorFn,!1),e[i]._node.removeEventListener(t._canPlayEvent,e[i]._loadFn,!1),e[i]._node.removeEventListener("ended",e[i]._endFn,!1),t._releaseHtml5Audio(e[i]._node)),delete e[i]._node,A._clearTimer(e[i]._id);var r=t._howls.indexOf(A);r>=0&&t._howls.splice(r,1);var a=!0;for(i=0;i<t._howls.length;i++)if(t._howls[i]._src===A._src||A._src.indexOf(t._howls[i]._src)>=0){a=!1;break}return s&&a&&delete s[A._src],t.noAudio=!1,A._state="unloaded",A._sounds=[],A=null,null},on:function(A,e,t,i){var r=this["_on"+A];return"function"==typeof e&&r.push(i?{id:t,fn:e,once:i}:{id:t,fn:e}),this},off:function(A,e,t){var i=this,r=i["_on"+A],s=0;if("number"==typeof e&&(t=e,e=null),e||t)for(s=0;s<r.length;s++){var a=t===r[s].id;if(e===r[s].fn&&a||!e&&a){r.splice(s,1);break}}else if(A)i["_on"+A]=[];else{var o=Object.keys(i);for(s=0;s<o.length;s++)0===o[s].indexOf("_on")&&Array.isArray(i[o[s]])&&(i[o[s]]=[])}return i},once:function(A,e,t){return this.on(A,e,t,1),this},_emit:function(A,e,t){for(var i=this["_on"+A],r=i.length-1;r>=0;r--)(!i[r].id||i[r].id===e||"load"===A)&&(setTimeout((function(A){A.call(this,e,t)}).bind(this,i[r].fn),0),i[r].once&&this.off(A,i[r].fn,i[r].id));return this._loadQueue(A),this},_loadQueue:function(A){if(this._queue.length>0){var e=this._queue[0];e.event===A&&(this._queue.shift(),this._loadQueue()),A||e.action()}return this},_ended:function(A){var e=this,i=A._sprite;if(!e._webAudio&&A._node&&!A._node.paused&&!A._node.ended&&A._node.currentTime<A._stop)return setTimeout(e._ended.bind(e,A),100),e;var r=!!(A._loop||e._sprite[i][2]);if(e._emit("end",A._id),!e._webAudio&&r&&e.stop(A._id,!0).play(A._id),e._webAudio&&r){e._emit("play",A._id),A._seek=A._start||0,A._rateSeek=0,A._playStart=t.ctx.currentTime;var s=(A._stop-A._start)*1e3/Math.abs(A._rate);e._endTimers[A._id]=setTimeout(e._ended.bind(e,A),s)}return e._webAudio&&!r&&(A._paused=!0,A._ended=!0,A._seek=A._start||0,A._rateSeek=0,e._clearTimer(A._id),e._cleanBuffer(A._node),t._autoSuspend()),e._webAudio||r||e.stop(A._id,!0),e},_clearTimer:function(A){if(this._endTimers[A]){if("function"!=typeof this._endTimers[A])clearTimeout(this._endTimers[A]);else{var e=this._soundById(A);e&&e._node&&e._node.removeEventListener("ended",this._endTimers[A],!1)}delete this._endTimers[A]}return this},_soundById:function(A){for(var e=0;e<this._sounds.length;e++)if(A===this._sounds[e]._id)return this._sounds[e];return null},_inactiveSound:function(){this._drain();for(var A=0;A<this._sounds.length;A++)if(this._sounds[A]._ended)return this._sounds[A].reset();return new r(this)},_drain:function(){var A=this._pool,e=0,t=0;if(!(this._sounds.length<A)){for(t=0;t<this._sounds.length;t++)this._sounds[t]._ended&&e++;for(t=this._sounds.length-1;t>=0;t--){if(e<=A)return;this._sounds[t]._ended&&(this._webAudio&&this._sounds[t]._node&&this._sounds[t]._node.disconnect(0),this._sounds.splice(t,1),e--)}}},_getSoundIds:function(A){if(!(typeof A>"u"))return[A];for(var e=[],t=0;t<this._sounds.length;t++)e.push(this._sounds[t]._id);return e},_refreshBuffer:function(A){return A._node.bufferSource=t.ctx.createBufferSource(),A._node.bufferSource.buffer=s[this._src],A._panner?A._node.bufferSource.connect(A._panner):A._node.bufferSource.connect(A._node),A._node.bufferSource.loop=A._loop,A._loop&&(A._node.bufferSource.loopStart=A._start||0,A._node.bufferSource.loopEnd=A._stop||0),A._node.bufferSource.playbackRate.setValueAtTime(A._rate,t.ctx.currentTime),this},_cleanBuffer:function(A){var e=t._navigator&&t._navigator.vendor.indexOf("Apple")>=0;if(t._scratchBuffer&&A.bufferSource&&(A.bufferSource.onended=null,A.bufferSource.disconnect(0),e))try{A.bufferSource.buffer=t._scratchBuffer}catch{}return A.bufferSource=null,this},_clearSound:function(A){/MSIE |Trident\//.test(t._navigator&&t._navigator.userAgent)||(A.src="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA")}},(r=function(A){this._parent=A,this.init()}).prototype={init:function(){var A=this,e=A._parent;return A._muted=e._muted,A._loop=e._loop,A._volume=e._volume,A._rate=e._rate,A._seek=0,A._paused=!0,A._ended=!0,A._sprite="__default",A._id=++t._counter,e._sounds.push(A),A.create(),A},create:function(){var A=this,e=A._parent,i=t._muted||A._muted||A._parent._muted?0:A._volume;return e._webAudio?(A._node=typeof t.ctx.createGain>"u"?t.ctx.createGainNode():t.ctx.createGain(),A._node.gain.setValueAtTime(i,t.ctx.currentTime),A._node.paused=!0,A._node.connect(t.masterGain)):t.noAudio||(A._node=t._obtainHtml5Audio(),A._errorFn=A._errorListener.bind(A),A._node.addEventListener("error",A._errorFn,!1),A._loadFn=A._loadListener.bind(A),A._node.addEventListener(t._canPlayEvent,A._loadFn,!1),A._endFn=A._endListener.bind(A),A._node.addEventListener("ended",A._endFn,!1),A._node.src=e._src,A._node.preload=!0===e._preload?"auto":e._preload,A._node.volume=i*t.volume(),A._node.load()),A},reset:function(){var A=this,e=A._parent;return A._muted=e._muted,A._loop=e._loop,A._volume=e._volume,A._rate=e._rate,A._seek=0,A._rateSeek=0,A._paused=!0,A._ended=!0,A._sprite="__default",A._id=++t._counter,A},_errorListener:function(){this._parent._emit("loaderror",this._id,this._node.error?this._node.error.code:0),this._node.removeEventListener("error",this._errorFn,!1)},_loadListener:function(){var A=this._parent;A._duration=Math.ceil(10*this._node.duration)/10,0===Object.keys(A._sprite).length&&(A._sprite={__default:[0,1e3*A._duration]}),"loaded"!==A._state&&(A._state="loaded",A._emit("load"),A._loadQueue()),this._node.removeEventListener(t._canPlayEvent,this._loadFn,!1)},_endListener:function(){var A=this._parent;A._duration===1/0&&(A._duration=Math.ceil(10*this._node.duration)/10,A._sprite.__default[1]===1/0&&(A._sprite.__default[1]=1e3*A._duration),A._ended(this)),this._node.removeEventListener("ended",this._endFn,!1)}},s={},a=function(A){var e=A._src;if(s[e]){A._duration=s[e].duration,h(A);return}if(/^data:[^;]+;base64,/.test(e)){for(var t=atob(e.split(",")[1]),i=new Uint8Array(t.length),r=0;r<t.length;++r)i[r]=t.charCodeAt(r);l(i.buffer,A)}else{var a=new XMLHttpRequest;a.open(A._xhr.method,e,!0),a.withCredentials=A._xhr.withCredentials,a.responseType="arraybuffer",A._xhr.headers&&Object.keys(A._xhr.headers).forEach(function(e){a.setRequestHeader(e,A._xhr.headers[e])}),a.onload=function(){var e=(a.status+"")[0];if("0"!==e&&"2"!==e&&"3"!==e){A._emit("loaderror",null,"Failed loading audio file with status: "+a.status+".");return}l(a.response,A)},a.onerror=function(){A._webAudio&&(A._html5=!0,A._webAudio=!1,A._sounds=[],delete s[e],A.load())},o(a)}},o=function(A){try{A.send()}catch{A.onerror()}},l=function(A,e){var i=function(){e._emit("loaderror",null,"Decoding audio data failed.")},r=function(A){A&&e._sounds.length>0?(s[e._src]=A,h(e,A)):i()};"u">typeof Promise&&1===t.ctx.decodeAudioData.length?t.ctx.decodeAudioData(A).then(r).catch(i):t.ctx.decodeAudioData(A,r,i)},h=function(A,e){e&&!A._duration&&(A._duration=e.duration),0===Object.keys(A._sprite).length&&(A._sprite={__default:[0,1e3*A._duration]}),"loaded"!==A._state&&(A._state="loaded",A._emit("load"),A._loadQueue())},c=function(){if(t.usingWebAudio){try{"u">typeof AudioContext?t.ctx=new AudioContext:"u">typeof webkitAudioContext?t.ctx=new webkitAudioContext:t.usingWebAudio=!1}catch{t.usingWebAudio=!1}t.ctx||(t.usingWebAudio=!1);var A=/iP(hone|od|ad)/.test(t._navigator&&t._navigator.platform),e=t._navigator&&t._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),i=e?parseInt(e[1],10):null;if(A&&i&&i<9){var r=/safari/.test(t._navigator&&t._navigator.userAgent.toLowerCase());t._navigator&&!r&&(t.usingWebAudio=!1)}t.usingWebAudio&&(t.masterGain=typeof t.ctx.createGain>"u"?t.ctx.createGainNode():t.ctx.createGain(),t.masterGain.gain.setValueAtTime(t._muted?0:t._volume,t.ctx.currentTime),t.masterGain.connect(t.ctx.destination)),t._setup()}},"function"==typeof define&&define.amd&&define([],function(){return{Howler:t,Howl:i}}),"u">typeof A&&(A.Howler=t,A.Howl=i),"u">typeof global?(global.HowlerGlobal=e,global.Howler=t,global.Howl=i,global.Sound=r):"u">typeof window&&(window.HowlerGlobal=e,window.Howler=t,window.Howl=i,window.Sound=r),HowlerGlobal.prototype._pos=[0,0,0],HowlerGlobal.prototype._orientation=[0,0,-1,0,1,0],HowlerGlobal.prototype.stereo=function(A){if(!this.ctx||!this.ctx.listener)return this;for(var e=this._howls.length-1;e>=0;e--)this._howls[e].stereo(A);return this},HowlerGlobal.prototype.pos=function(A,e,t){var i=this;return i.ctx&&i.ctx.listener?(e="number"!=typeof e?i._pos[1]:e,t="number"!=typeof t?i._pos[2]:t,"number"!=typeof A)?i._pos:(i._pos=[A,e,t],"u">typeof i.ctx.listener.positionX?(i.ctx.listener.positionX.setTargetAtTime(i._pos[0],Howler.ctx.currentTime,.1),i.ctx.listener.positionY.setTargetAtTime(i._pos[1],Howler.ctx.currentTime,.1),i.ctx.listener.positionZ.setTargetAtTime(i._pos[2],Howler.ctx.currentTime,.1)):i.ctx.listener.setPosition(i._pos[0],i._pos[1],i._pos[2]),i):i},HowlerGlobal.prototype.orientation=function(A,e,t,i,r,s){var a=this;if(!a.ctx||!a.ctx.listener)return a;var o=a._orientation;return(e="number"!=typeof e?o[1]:e,t="number"!=typeof t?o[2]:t,i="number"!=typeof i?o[3]:i,r="number"!=typeof r?o[4]:r,s="number"!=typeof s?o[5]:s,"number"!=typeof A)?o:(a._orientation=[A,e,t,i,r,s],"u">typeof a.ctx.listener.forwardX?(a.ctx.listener.forwardX.setTargetAtTime(A,Howler.ctx.currentTime,.1),a.ctx.listener.forwardY.setTargetAtTime(e,Howler.ctx.currentTime,.1),a.ctx.listener.forwardZ.setTargetAtTime(t,Howler.ctx.currentTime,.1),a.ctx.listener.upX.setTargetAtTime(i,Howler.ctx.currentTime,.1),a.ctx.listener.upY.setTargetAtTime(r,Howler.ctx.currentTime,.1),a.ctx.listener.upZ.setTargetAtTime(s,Howler.ctx.currentTime,.1)):a.ctx.listener.setOrientation(A,e,t,i,r,s),a)},Howl.prototype.init=(d=Howl.prototype.init,function(A){var e=this;return e._orientation=A.orientation||[1,0,0],e._stereo=A.stereo||null,e._pos=A.pos||null,e._pannerAttr={coneInnerAngle:"u">typeof A.coneInnerAngle?A.coneInnerAngle:360,coneOuterAngle:"u">typeof A.coneOuterAngle?A.coneOuterAngle:360,coneOuterGain:"u">typeof A.coneOuterGain?A.coneOuterGain:0,distanceModel:"u">typeof A.distanceModel?A.distanceModel:"inverse",maxDistance:"u">typeof A.maxDistance?A.maxDistance:1e4,panningModel:"u">typeof A.panningModel?A.panningModel:"HRTF",refDistance:"u">typeof A.refDistance?A.refDistance:1,rolloffFactor:"u">typeof A.rolloffFactor?A.rolloffFactor:1},e._onstereo=A.onstereo?[{fn:A.onstereo}]:[],e._onpos=A.onpos?[{fn:A.onpos}]:[],e._onorientation=A.onorientation?[{fn:A.onorientation}]:[],d.call(this,A)}),Howl.prototype.stereo=function(A,e){var t=this;if(!t._webAudio)return t;if("loaded"!==t._state)return t._queue.push({event:"stereo",action:function(){t.stereo(A,e)}}),t;var i=typeof Howler.ctx.createStereoPanner>"u"?"spatial":"stereo";if(typeof e>"u"){if("number"!=typeof A)return t._stereo;t._stereo=A,t._pos=[A,0,0]}for(var r=t._getSoundIds(e),s=0;s<r.length;s++){var a=t._soundById(r[s]);if(a){if("number"!=typeof A)return a._stereo;a._stereo=A,a._pos=[A,0,0],a._node&&(a._pannerAttr.panningModel="equalpower",a._panner&&a._panner.pan||f(a,i),"spatial"===i?"u">typeof a._panner.positionX?(a._panner.positionX.setValueAtTime(A,Howler.ctx.currentTime),a._panner.positionY.setValueAtTime(0,Howler.ctx.currentTime),a._panner.positionZ.setValueAtTime(0,Howler.ctx.currentTime)):a._panner.setPosition(A,0,0):a._panner.pan.setValueAtTime(A,Howler.ctx.currentTime)),t._emit("stereo",a._id)}}return t},Howl.prototype.pos=function(A,e,t,i){var r=this;if(!r._webAudio)return r;if("loaded"!==r._state)return r._queue.push({event:"pos",action:function(){r.pos(A,e,t,i)}}),r;if(e="number"!=typeof e?0:e,t="number"!=typeof t?-.5:t,typeof i>"u"){if("number"!=typeof A)return r._pos;r._pos=[A,e,t]}for(var s=r._getSoundIds(i),a=0;a<s.length;a++){var o=r._soundById(s[a]);if(o){if("number"!=typeof A)return o._pos;o._pos=[A,e,t],o._node&&((!o._panner||o._panner.pan)&&f(o,"spatial"),"u">typeof o._panner.positionX?(o._panner.positionX.setValueAtTime(A,Howler.ctx.currentTime),o._panner.positionY.setValueAtTime(e,Howler.ctx.currentTime),o._panner.positionZ.setValueAtTime(t,Howler.ctx.currentTime)):o._panner.setPosition(A,e,t)),r._emit("pos",o._id)}}return r},Howl.prototype.orientation=function(A,e,t,i){var r=this;if(!r._webAudio)return r;if("loaded"!==r._state)return r._queue.push({event:"orientation",action:function(){r.orientation(A,e,t,i)}}),r;if(e="number"!=typeof e?r._orientation[1]:e,t="number"!=typeof t?r._orientation[2]:t,typeof i>"u"){if("number"!=typeof A)return r._orientation;r._orientation=[A,e,t]}for(var s=r._getSoundIds(i),a=0;a<s.length;a++){var o=r._soundById(s[a]);if(o){if("number"!=typeof A)return o._orientation;o._orientation=[A,e,t],o._node&&(o._panner||(o._pos||(o._pos=r._pos||[0,0,-.5]),f(o,"spatial")),"u">typeof o._panner.orientationX?(o._panner.orientationX.setValueAtTime(A,Howler.ctx.currentTime),o._panner.orientationY.setValueAtTime(e,Howler.ctx.currentTime),o._panner.orientationZ.setValueAtTime(t,Howler.ctx.currentTime)):o._panner.setOrientation(A,e,t)),r._emit("orientation",o._id)}}return r},Howl.prototype.pannerAttr=function(){var A,e,t,i=this,r=arguments;if(!i._webAudio)return i;if(0===r.length)return i._pannerAttr;if(1===r.length){if("object"!=typeof r[0])return(t=i._soundById(parseInt(r[0],10)))?t._pannerAttr:i._pannerAttr;A=r[0],typeof e>"u"&&(A.pannerAttr||(A.pannerAttr={coneInnerAngle:A.coneInnerAngle,coneOuterAngle:A.coneOuterAngle,coneOuterGain:A.coneOuterGain,distanceModel:A.distanceModel,maxDistance:A.maxDistance,refDistance:A.refDistance,rolloffFactor:A.rolloffFactor,panningModel:A.panningModel}),i._pannerAttr={coneInnerAngle:"u">typeof A.pannerAttr.coneInnerAngle?A.pannerAttr.coneInnerAngle:i._coneInnerAngle,coneOuterAngle:"u">typeof A.pannerAttr.coneOuterAngle?A.pannerAttr.coneOuterAngle:i._coneOuterAngle,coneOuterGain:"u">typeof A.pannerAttr.coneOuterGain?A.pannerAttr.coneOuterGain:i._coneOuterGain,distanceModel:"u">typeof A.pannerAttr.distanceModel?A.pannerAttr.distanceModel:i._distanceModel,maxDistance:"u">typeof A.pannerAttr.maxDistance?A.pannerAttr.maxDistance:i._maxDistance,refDistance:"u">typeof A.pannerAttr.refDistance?A.pannerAttr.refDistance:i._refDistance,rolloffFactor:"u">typeof A.pannerAttr.rolloffFactor?A.pannerAttr.rolloffFactor:i._rolloffFactor,panningModel:"u">typeof A.pannerAttr.panningModel?A.pannerAttr.panningModel:i._panningModel})}else 2===r.length&&(A=r[0],e=parseInt(r[1],10));for(var s=i._getSoundIds(e),a=0;a<s.length;a++)if(t=i._soundById(s[a])){var o=t._pannerAttr;o={coneInnerAngle:"u">typeof A.coneInnerAngle?A.coneInnerAngle:o.coneInnerAngle,coneOuterAngle:"u">typeof A.coneOuterAngle?A.coneOuterAngle:o.coneOuterAngle,coneOuterGain:"u">typeof A.coneOuterGain?A.coneOuterGain:o.coneOuterGain,distanceModel:"u">typeof A.distanceModel?A.distanceModel:o.distanceModel,maxDistance:"u">typeof A.maxDistance?A.maxDistance:o.maxDistance,refDistance:"u">typeof A.refDistance?A.refDistance:o.refDistance,rolloffFactor:"u">typeof A.rolloffFactor?A.rolloffFactor:o.rolloffFactor,panningModel:"u">typeof A.panningModel?A.panningModel:o.panningModel};var l=t._panner;l?(l.coneInnerAngle=o.coneInnerAngle,l.coneOuterAngle=o.coneOuterAngle,l.coneOuterGain=o.coneOuterGain,l.distanceModel=o.distanceModel,l.maxDistance=o.maxDistance,l.refDistance=o.refDistance,l.rolloffFactor=o.rolloffFactor,l.panningModel=o.panningModel):(t._pos||(t._pos=i._pos||[0,0,-.5]),f(t,"spatial"))}return i},Sound.prototype.init=(u=Sound.prototype.init,function(){var A=this,e=A._parent;A._orientation=e._orientation,A._stereo=e._stereo,A._pos=e._pos,A._pannerAttr=e._pannerAttr,u.call(this),A._stereo?e.stereo(A._stereo):A._pos&&e.pos(A._pos[0],A._pos[1],A._pos[2],A._id)}),Sound.prototype.reset=(p=Sound.prototype.reset,function(){var A=this,e=A._parent;return A._orientation=e._orientation,A._stereo=e._stereo,A._pos=e._pos,A._pannerAttr=e._pannerAttr,A._stereo?e.stereo(A._stereo):A._pos?e.pos(A._pos[0],A._pos[1],A._pos[2],A._id):A._panner&&(A._panner.disconnect(0),A._panner=void 0,e._refreshBuffer(A)),p.call(this)}),f=function(A,e){"spatial"===(e=e||"spatial")?(A._panner=Howler.ctx.createPanner(),A._panner.coneInnerAngle=A._pannerAttr.coneInnerAngle,A._panner.coneOuterAngle=A._pannerAttr.coneOuterAngle,A._panner.coneOuterGain=A._pannerAttr.coneOuterGain,A._panner.distanceModel=A._pannerAttr.distanceModel,A._panner.maxDistance=A._pannerAttr.maxDistance,A._panner.refDistance=A._pannerAttr.refDistance,A._panner.rolloffFactor=A._pannerAttr.rolloffFactor,A._panner.panningModel=A._pannerAttr.panningModel,"u">typeof A._panner.positionX?(A._panner.positionX.setValueAtTime(A._pos[0],Howler.ctx.currentTime),A._panner.positionY.setValueAtTime(A._pos[1],Howler.ctx.currentTime),A._panner.positionZ.setValueAtTime(A._pos[2],Howler.ctx.currentTime)):A._panner.setPosition(A._pos[0],A._pos[1],A._pos[2]),"u">typeof A._panner.orientationX?(A._panner.orientationX.setValueAtTime(A._orientation[0],Howler.ctx.currentTime),A._panner.orientationY.setValueAtTime(A._orientation[1],Howler.ctx.currentTime),A._panner.orientationZ.setValueAtTime(A._orientation[2],Howler.ctx.currentTime)):A._panner.setOrientation(A._orientation[0],A._orientation[1],A._orientation[2])):(A._panner=Howler.ctx.createStereoPanner(),A._panner.pan.setValueAtTime(A._stereo,Howler.ctx.currentTime)),A._panner.connect(A._node),A._paused||A._parent.pause(A._id,!0).play(A._id,!0)}}),ep={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ef="srgb",em="srgb-linear",eg="300 es",ev=class{addEventListener(A,e){void 0===this._listeners&&(this._listeners={});let t=this._listeners;void 0===t[A]&&(t[A]=[]),-1===t[A].indexOf(e)&&t[A].push(e)}hasEventListener(A,e){if(void 0===this._listeners)return!1;let t=this._listeners;return void 0!==t[A]&&-1!==t[A].indexOf(e)}removeEventListener(A,e){if(void 0===this._listeners)return;let t=this._listeners[A];if(void 0!==t){let i=t.indexOf(e);-1!==i&&t.splice(i,1)}}dispatchEvent(A){if(void 0===this._listeners)return;let e=this._listeners[A.type];if(void 0!==e){A.target=this;let t=e.slice(0);for(let i=0,r=t.length;i<r;i++)t[i].call(this,A);A.target=null}}},ey=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ex=1234567,eb=Math.PI/180,ew=180/Math.PI;function eS(){let A=4294967295*Math.random()|0,e=4294967295*Math.random()|0,t=4294967295*Math.random()|0,i=4294967295*Math.random()|0;return(ey[255&A]+ey[A>>8&255]+ey[A>>16&255]+ey[A>>24&255]+"-"+ey[255&e]+ey[e>>8&255]+"-"+ey[e>>16&15|64]+ey[e>>24&255]+"-"+ey[63&t|128]+ey[t>>8&255]+"-"+ey[t>>16&255]+ey[t>>24&255]+ey[255&i]+ey[i>>8&255]+ey[i>>16&255]+ey[i>>24&255]).toLowerCase()}function eM(A,e,t){return Math.max(e,Math.min(t,A))}function eE(A,e){return(A%e+e)%e}function eT(A,e,t){return(1-t)*A+t*e}function eC(A){return(A&A-1)==0&&0!==A}function eD(A){return Math.pow(2,Math.floor(Math.log(A)/Math.LN2))}var eP=Object.freeze({__proto__:null,DEG2RAD:eb,RAD2DEG:ew,generateUUID:eS,clamp:eM,euclideanModulo:eE,mapLinear:function(A,e,t,i,r){return i+(A-e)*(r-i)/(t-e)},inverseLerp:function(A,e,t){return A!==e?(t-A)/(e-A):0},lerp:eT,damp:function(A,e,t,i){return eT(A,e,1-Math.exp(-t*i))},pingpong:function(A,e=1){return e-Math.abs(eE(A,2*e)-e)},smoothstep:function(A,e,t){return A<=e?0:A>=t?1:(A=(A-e)/(t-e))*A*(3-2*A)},smootherstep:function(A,e,t){return A<=e?0:A>=t?1:(A=(A-e)/(t-e))*A*A*(A*(6*A-15)+10)},randInt:function(A,e){return A+Math.floor(Math.random()*(e-A+1))},randFloat:function(A,e){return A+Math.random()*(e-A)},randFloatSpread:function(A){return A*(.5-Math.random())},seededRandom:function(A){void 0!==A&&(ex=A);let e=ex+=1831565813;return e=Math.imul(e^e>>>15,1|e),(((e^=e+Math.imul(e^e>>>7,61|e))^e>>>14)>>>0)/4294967296},degToRad:function(A){return A*eb},radToDeg:function(A){return A*ew},isPowerOfTwo:eC,ceilPowerOfTwo:function(A){return Math.pow(2,Math.ceil(Math.log(A)/Math.LN2))},floorPowerOfTwo:eD,setQuaternionFromProperEuler:function(A,e,t,i,r){let s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),h=s((e+i)/2),c=a((e+i)/2),d=s((e-i)/2),u=a((e-i)/2),p=s((i-e)/2),f=a((i-e)/2);switch(r){case"XYX":A.set(o*c,l*d,l*u,o*h);break;case"YZY":A.set(l*u,o*c,l*d,o*h);break;case"ZXZ":A.set(l*d,l*u,o*c,o*h);break;case"XZX":A.set(o*c,l*f,l*p,o*h);break;case"YXY":A.set(l*p,o*c,l*f,o*h);break;case"ZYZ":A.set(l*f,l*p,o*c,o*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}},normalize:function(A,e){switch(e.constructor){case Float32Array:return A;case Uint16Array:return Math.round(65535*A);case Uint8Array:return Math.round(255*A);case Int16Array:return Math.round(32767*A);case Int8Array:return Math.round(127*A);default:throw Error("Invalid component type.")}},denormalize:function(A,e){switch(e.constructor){case Float32Array:return A;case Uint16Array:return A/65535;case Uint8Array:return A/255;case Int16Array:return Math.max(A/32767,-1);case Int8Array:return Math.max(A/127,-1);default:throw Error("Invalid component type.")}}}),e_=class{constructor(A=0,e=0){e_.prototype.isVector2=!0,this.x=A,this.y=e}get width(){return this.x}set width(A){this.x=A}get height(){return this.y}set height(A){this.y=A}set(A,e){return this.x=A,this.y=e,this}setScalar(A){return this.x=A,this.y=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setComponent(A,e){switch(A){case 0:this.x=e;break;case 1:this.y=e;break;default:throw Error("index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;default:throw Error("index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y)}copy(A){return this.x=A.x,this.y=A.y,this}add(A,e){return void 0!==e?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(A,e)):(this.x+=A.x,this.y+=A.y,this)}addScalar(A){return this.x+=A,this.y+=A,this}addVectors(A,e){return this.x=A.x+e.x,this.y=A.y+e.y,this}addScaledVector(A,e){return this.x+=A.x*e,this.y+=A.y*e,this}sub(A,e){return void 0!==e?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(A,e)):(this.x-=A.x,this.y-=A.y,this)}subScalar(A){return this.x-=A,this.y-=A,this}subVectors(A,e){return this.x=A.x-e.x,this.y=A.y-e.y,this}multiply(A){return this.x*=A.x,this.y*=A.y,this}multiplyScalar(A){return this.x*=A,this.y*=A,this}divide(A){return this.x/=A.x,this.y/=A.y,this}divideScalar(A){return this.multiplyScalar(1/A)}applyMatrix3(A){let e=this.x,t=this.y,i=A.elements;return this.x=i[0]*e+i[3]*t+i[6],this.y=i[1]*e+i[4]*t+i[7],this}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this}clamp(A,e){return this.x=Math.max(A.x,Math.min(e.x,this.x)),this.y=Math.max(A.y,Math.min(e.y,this.y)),this}clampScalar(A,e){return this.x=Math.max(A,Math.min(e,this.x)),this.y=Math.max(A,Math.min(e,this.y)),this}clampLength(A,e){let t=this.length();return this.divideScalar(t||1).multiplyScalar(Math.max(A,Math.min(e,t)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(A){return this.x*A.x+this.y*A.y}cross(A){return this.x*A.y-this.y*A.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(A){return Math.sqrt(this.distanceToSquared(A))}distanceToSquared(A){let e=this.x-A.x,t=this.y-A.y;return e*e+t*t}manhattanDistanceTo(A){return Math.abs(this.x-A.x)+Math.abs(this.y-A.y)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,e){return this.x+=(A.x-this.x)*e,this.y+=(A.y-this.y)*e,this}lerpVectors(A,e,t){return this.x=A.x+(e.x-A.x)*t,this.y=A.y+(e.y-A.y)*t,this}equals(A){return A.x===this.x&&A.y===this.y}fromArray(A,e=0){return this.x=A[e],this.y=A[e+1],this}toArray(A=[],e=0){return A[e]=this.x,A[e+1]=this.y,A}fromBufferAttribute(A,e,t){return void 0!==t&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=A.getX(e),this.y=A.getY(e),this}rotateAround(A,e){let t=Math.cos(e),i=Math.sin(e),r=this.x-A.x,s=this.y-A.y;return this.x=r*t-s*i+A.x,this.y=r*i+s*t+A.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},eL=class{constructor(){eL.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(A,e,t,i,r,s,a,o,l){let h=this.elements;return h[0]=A,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=o,h[6]=t,h[7]=s,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(A){let e=this.elements,t=A.elements;return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],this}extractBasis(A,e,t){return A.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),t.setFromMatrix3Column(this,2),this}setFromMatrix4(A){let e=A.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(A){return this.multiplyMatrices(this,A)}premultiply(A){return this.multiplyMatrices(A,this)}multiplyMatrices(A,e){let t=A.elements,i=e.elements,r=this.elements,s=t[0],a=t[3],o=t[6],l=t[1],h=t[4],c=t[7],d=t[2],u=t[5],p=t[8],f=i[0],m=i[3],g=i[6],v=i[1],y=i[4],x=i[7],b=i[2],w=i[5],S=i[8];return r[0]=s*f+a*v+o*b,r[3]=s*m+a*y+o*w,r[6]=s*g+a*x+o*S,r[1]=l*f+h*v+c*b,r[4]=l*m+h*y+c*w,r[7]=l*g+h*x+c*S,r[2]=d*f+u*v+p*b,r[5]=d*m+u*y+p*w,r[8]=d*g+u*x+p*S,this}multiplyScalar(A){let e=this.elements;return e[0]*=A,e[3]*=A,e[6]*=A,e[1]*=A,e[4]*=A,e[7]*=A,e[2]*=A,e[5]*=A,e[8]*=A,this}determinant(){let A=this.elements,e=A[0],t=A[1],i=A[2],r=A[3],s=A[4],a=A[5],o=A[6],l=A[7],h=A[8];return e*s*h-e*a*l-t*r*h+t*a*o+i*r*l-i*s*o}invert(){let A=this.elements,e=A[0],t=A[1],i=A[2],r=A[3],s=A[4],a=A[5],o=A[6],l=A[7],h=A[8],c=h*s-a*l,d=a*o-h*r,u=l*r-s*o,p=e*c+t*d+i*u;if(0===p)return this.set(0,0,0,0,0,0,0,0,0);let f=1/p;return A[0]=c*f,A[1]=(i*l-h*t)*f,A[2]=(a*t-i*s)*f,A[3]=d*f,A[4]=(h*e-i*o)*f,A[5]=(i*r-a*e)*f,A[6]=u*f,A[7]=(t*o-l*e)*f,A[8]=(s*e-t*r)*f,this}transpose(){let A,e=this.elements;return A=e[1],e[1]=e[3],e[3]=A,A=e[2],e[2]=e[6],e[6]=A,A=e[5],e[5]=e[7],e[7]=A,this}getNormalMatrix(A){return this.setFromMatrix4(A).invert().transpose()}transposeIntoArray(A){let e=this.elements;return A[0]=e[0],A[1]=e[3],A[2]=e[6],A[3]=e[1],A[4]=e[4],A[5]=e[7],A[6]=e[2],A[7]=e[5],A[8]=e[8],this}setUvTransform(A,e,t,i,r,s,a){let o=Math.cos(r),l=Math.sin(r);return this.set(t*o,t*l,-t*(o*s+l*a)+s+A,-i*l,i*o,-i*(-l*s+o*a)+a+e,0,0,1),this}scale(A,e){let t=this.elements;return t[0]*=A,t[3]*=A,t[6]*=A,t[1]*=e,t[4]*=e,t[7]*=e,this}rotate(A){let e=Math.cos(A),t=Math.sin(A),i=this.elements,r=i[0],s=i[3],a=i[6],o=i[1],l=i[4],h=i[7];return i[0]=e*r+t*o,i[3]=e*s+t*l,i[6]=e*a+t*h,i[1]=-t*r+e*o,i[4]=-t*s+e*l,i[7]=-t*a+e*h,this}translate(A,e){let t=this.elements;return t[0]+=A*t[2],t[3]+=A*t[5],t[6]+=A*t[8],t[1]+=e*t[2],t[4]+=e*t[5],t[7]+=e*t[8],this}equals(A){let e=this.elements,t=A.elements;for(let i=0;i<9;i++)if(e[i]!==t[i])return!1;return!0}fromArray(A,e=0){for(let t=0;t<9;t++)this.elements[t]=A[t+e];return this}toArray(A=[],e=0){let t=this.elements;return A[e]=t[0],A[e+1]=t[1],A[e+2]=t[2],A[e+3]=t[3],A[e+4]=t[4],A[e+5]=t[5],A[e+6]=t[6],A[e+7]=t[7],A[e+8]=t[8],A}clone(){return new this.constructor().fromArray(this.elements)}};function eO(A){for(let e=A.length-1;e>=0;--e)if(A[e]>65535)return!0;return!1}var eB={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function eI(A,e){return new eB[A](e)}function eR(A){return document.createElementNS("http://www.w3.org/1999/xhtml",A)}function eN(A){return A<.04045?.0773993808*A:Math.pow(.9478672986*A+.0521327014,2.4)}function ez(A){return A<.0031308?12.92*A:1.055*Math.pow(A,.41666)-.055}var eF={[ef]:{[em]:eN},[em]:{[ef]:ez}},eU={legacyMode:!0,get workingColorSpace(){return em},set workingColorSpace(n){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(A,e,t){if(this.legacyMode||e===t||!e||!t)return A;if(eF[e]&&void 0!==eF[e][t]){let i=eF[e][t];return A.r=i(A.r),A.g=i(A.g),A.b=i(A.b),A}throw Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(A,e){return this.convert(A,this.workingColorSpace,e)},toWorkingColorSpace:function(A,e){return this.convert(A,e,this.workingColorSpace)}},ek={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},eG={r:0,g:0,b:0},eV={h:0,s:0,l:0},ej={h:0,s:0,l:0};function eH(A,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?A+(e-A)*6*t:t<.5?e:t<2/3?A+(e-A)*6*(2/3-t):A}function eW(A,e){return e.r=A.r,e.g=A.g,e.b=A.b,e}var eY=class{constructor(A,e,t){return this.isColor=!0,this.r=1,this.g=1,this.b=1,void 0===e&&void 0===t?this.set(A):this.setRGB(A,e,t)}set(A){return A&&A.isColor?this.copy(A):"number"==typeof A?this.setHex(A):"string"==typeof A&&this.setStyle(A),this}setScalar(A){return this.r=A,this.g=A,this.b=A,this}setHex(A,e=ef){return A=Math.floor(A),this.r=(A>>16&255)/255,this.g=(A>>8&255)/255,this.b=(255&A)/255,eU.toWorkingColorSpace(this,e),this}setRGB(A,e,t,i=em){return this.r=A,this.g=e,this.b=t,eU.toWorkingColorSpace(this,i),this}setHSL(A,e,t,i=em){if(A=eE(A,1),e=eM(e,0,1),t=eM(t,0,1),0===e)this.r=this.g=this.b=t;else{let r=t<=.5?t*(1+e):t+e-t*e,s=2*t-r;this.r=eH(s,r,A+1/3),this.g=eH(s,r,A),this.b=eH(s,r,A-1/3)}return eU.toWorkingColorSpace(this,i),this}setStyle(A,e=ef){let t;function i(e){void 0!==e&&1>parseFloat(e)&&console.warn("THREE.Color: Alpha component of "+A+" will be ignored.")}if(t=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(A)){let r,s=t[1],a=t[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,eU.toWorkingColorSpace(this,e),i(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,eU.toWorkingColorSpace(this,e),i(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){let o=parseFloat(r[1])/360,l=parseInt(r[2],10)/100,h=parseInt(r[3],10)/100;return i(r[4]),this.setHSL(o,l,h,e)}}}else if(t=/^\#([A-Fa-f\d]+)$/.exec(A)){let c=t[1],d=c.length;if(3===d)return this.r=parseInt(c.charAt(0)+c.charAt(0),16)/255,this.g=parseInt(c.charAt(1)+c.charAt(1),16)/255,this.b=parseInt(c.charAt(2)+c.charAt(2),16)/255,eU.toWorkingColorSpace(this,e),this;if(6===d)return this.r=parseInt(c.charAt(0)+c.charAt(1),16)/255,this.g=parseInt(c.charAt(2)+c.charAt(3),16)/255,this.b=parseInt(c.charAt(4)+c.charAt(5),16)/255,eU.toWorkingColorSpace(this,e),this}return A&&A.length>0?this.setColorName(A,e):this}setColorName(A,e=ef){let t=ek[A.toLowerCase()];return void 0!==t?this.setHex(t,e):console.warn("THREE.Color: Unknown color "+A),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(A){return this.r=A.r,this.g=A.g,this.b=A.b,this}copySRGBToLinear(A){return this.r=eN(A.r),this.g=eN(A.g),this.b=eN(A.b),this}copyLinearToSRGB(A){return this.r=ez(A.r),this.g=ez(A.g),this.b=ez(A.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(A=ef){return eU.fromWorkingColorSpace(eW(this,eG),A),eM(255*eG.r,0,255)<<16^eM(255*eG.g,0,255)<<8^eM(255*eG.b,0,255)<<0}getHexString(A=ef){return("000000"+this.getHex(A).toString(16)).slice(-6)}getHSL(A,e=em){eU.fromWorkingColorSpace(eW(this,eG),e);let t=eG.r,i=eG.g,r=eG.b,s=Math.max(t,i,r),a=Math.min(t,i,r),o,l,h=(a+s)/2;if(a===s)o=0,l=0;else{let c=s-a;switch(l=h<=.5?c/(s+a):c/(2-s-a),s){case t:o=(i-r)/c+(i<r?6:0);break;case i:o=(r-t)/c+2;break;case r:o=(t-i)/c+4}o/=6}return A.h=o,A.s=l,A.l=h,A}getRGB(A,e=em){return eU.fromWorkingColorSpace(eW(this,eG),e),A.r=eG.r,A.g=eG.g,A.b=eG.b,A}getStyle(A=ef){return eU.fromWorkingColorSpace(eW(this,eG),A),A!==ef?`color(${A} ${eG.r} ${eG.g} ${eG.b})`:`rgb(${255*eG.r|0},${255*eG.g|0},${255*eG.b|0})`}offsetHSL(A,e,t){return this.getHSL(eV),eV.h+=A,eV.s+=e,eV.l+=t,this.setHSL(eV.h,eV.s,eV.l),this}add(A){return this.r+=A.r,this.g+=A.g,this.b+=A.b,this}addColors(A,e){return this.r=A.r+e.r,this.g=A.g+e.g,this.b=A.b+e.b,this}addScalar(A){return this.r+=A,this.g+=A,this.b+=A,this}sub(A){return this.r=Math.max(0,this.r-A.r),this.g=Math.max(0,this.g-A.g),this.b=Math.max(0,this.b-A.b),this}multiply(A){return this.r*=A.r,this.g*=A.g,this.b*=A.b,this}multiplyScalar(A){return this.r*=A,this.g*=A,this.b*=A,this}lerp(A,e){return this.r+=(A.r-this.r)*e,this.g+=(A.g-this.g)*e,this.b+=(A.b-this.b)*e,this}lerpColors(A,e,t){return this.r=A.r+(e.r-A.r)*t,this.g=A.g+(e.g-A.g)*t,this.b=A.b+(e.b-A.b)*t,this}lerpHSL(A,e){this.getHSL(eV),A.getHSL(ej);let t=eT(eV.h,ej.h,e),i=eT(eV.s,ej.s,e),r=eT(eV.l,ej.l,e);return this.setHSL(t,i,r),this}equals(A){return A.r===this.r&&A.g===this.g&&A.b===this.b}fromArray(A,e=0){return this.r=A[e],this.g=A[e+1],this.b=A[e+2],this}toArray(A=[],e=0){return A[e]=this.r,A[e+1]=this.g,A[e+2]=this.b,A}fromBufferAttribute(A,e){return this.r=A.getX(e),this.g=A.getY(e),this.b=A.getZ(e),!0===A.normalized&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};eY.NAMES=ek;var eX,eQ=class{static getDataURL(A){let e;if(/^data:/i.test(A.src)||typeof HTMLCanvasElement>"u")return A.src;if(A instanceof HTMLCanvasElement)e=A;else{void 0===eX&&(eX=eR("canvas")),eX.width=A.width,eX.height=A.height;let t=eX.getContext("2d");A instanceof ImageData?t.putImageData(A,0,0):t.drawImage(A,0,0,A.width,A.height),e=eX}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",A),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(A){if("u">typeof HTMLImageElement&&A instanceof HTMLImageElement||"u">typeof HTMLCanvasElement&&A instanceof HTMLCanvasElement||"u">typeof ImageBitmap&&A instanceof ImageBitmap){let e=eR("canvas");e.width=A.width,e.height=A.height;let t=e.getContext("2d");t.drawImage(A,0,0,A.width,A.height);let i=t.getImageData(0,0,A.width,A.height),r=i.data;for(let s=0;s<r.length;s++)r[s]=255*eN(r[s]/255);return t.putImageData(i,0,0),e}if(!A.data)return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),A;{let a=A.data.slice(0);for(let o=0;o<a.length;o++)a instanceof Uint8Array||a instanceof Uint8ClampedArray?a[o]=Math.floor(255*eN(a[o]/255)):a[o]=eN(a[o]);return{data:a,width:A.width,height:A.height}}}},eq=class{constructor(A=null){this.isSource=!0,this.uuid=eS(),this.data=A,this.version=0}set needsUpdate(A){!0===A&&this.version++}toJSON(A){let e=void 0===A||"string"==typeof A;if(!e&&void 0!==A.images[this.uuid])return A.images[this.uuid];let t={uuid:this.uuid,url:""},i=this.data;if(null!==i){let r;if(Array.isArray(i)){r=[];for(let s=0,a=i.length;s<a;s++)i[s].isDataTexture?r.push(eZ(i[s].image)):r.push(eZ(i[s]))}else r=eZ(i);t.url=r}return e||(A.images[this.uuid]=t),t}};function eZ(A){return"u">typeof HTMLImageElement&&A instanceof HTMLImageElement||"u">typeof HTMLCanvasElement&&A instanceof HTMLCanvasElement||"u">typeof ImageBitmap&&A instanceof ImageBitmap?eQ.getDataURL(A):A.data?{data:Array.from(A.data),width:A.width,height:A.height,type:A.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var eK=0,eJ=class extends ev{constructor(A=eJ.DEFAULT_IMAGE,e=eJ.DEFAULT_MAPPING,t=1001,i=1001,r=1006,s=1008,a=1023,o=1009,l=1,h=3e3){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:eK++}),this.uuid=eS(),this.name="",this.source=new eq(A),this.mipmaps=[],this.mapping=e,this.wrapS=t,this.wrapT=i,this.magFilter=r,this.minFilter=s,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=o,this.offset=new e_(0,0),this.repeat=new e_(1,1),this.center=new e_(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new eL,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(A){this.source.data=A}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(A){return this.name=A.name,this.source=A.source,this.mipmaps=A.mipmaps.slice(0),this.mapping=A.mapping,this.wrapS=A.wrapS,this.wrapT=A.wrapT,this.magFilter=A.magFilter,this.minFilter=A.minFilter,this.anisotropy=A.anisotropy,this.format=A.format,this.internalFormat=A.internalFormat,this.type=A.type,this.offset.copy(A.offset),this.repeat.copy(A.repeat),this.center.copy(A.center),this.rotation=A.rotation,this.matrixAutoUpdate=A.matrixAutoUpdate,this.matrix.copy(A.matrix),this.generateMipmaps=A.generateMipmaps,this.premultiplyAlpha=A.premultiplyAlpha,this.flipY=A.flipY,this.unpackAlignment=A.unpackAlignment,this.encoding=A.encoding,this.userData=JSON.parse(JSON.stringify(A.userData)),this.needsUpdate=!0,this}toJSON(A){let e=void 0===A||"string"==typeof A;if(!e&&void 0!==A.textures[this.uuid])return A.textures[this.uuid];let t={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(A).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return"{}"!==JSON.stringify(this.userData)&&(t.userData=this.userData),e||(A.textures[this.uuid]=t),t}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(A){if(300!==this.mapping)return A;if(A.applyMatrix3(this.matrix),A.x<0||A.x>1)switch(this.wrapS){case 1e3:A.x=A.x-Math.floor(A.x);break;case 1001:A.x=A.x<0?0:1;break;case 1002:1===Math.abs(Math.floor(A.x)%2)?A.x=Math.ceil(A.x)-A.x:A.x=A.x-Math.floor(A.x)}if(A.y<0||A.y>1)switch(this.wrapT){case 1e3:A.y=A.y-Math.floor(A.y);break;case 1001:A.y=A.y<0?0:1;break;case 1002:1===Math.abs(Math.floor(A.y)%2)?A.y=Math.ceil(A.y)-A.y:A.y=A.y-Math.floor(A.y)}return this.flipY&&(A.y=1-A.y),A}set needsUpdate(A){!0===A&&(this.version++,this.source.needsUpdate=!0)}};eJ.DEFAULT_IMAGE=null,eJ.DEFAULT_MAPPING=300;var e$=class{constructor(A=0,e=0,t=0,i=1){e$.prototype.isVector4=!0,this.x=A,this.y=e,this.z=t,this.w=i}get width(){return this.z}set width(A){this.z=A}get height(){return this.w}set height(A){this.w=A}set(A,e,t,i){return this.x=A,this.y=e,this.z=t,this.w=i,this}setScalar(A){return this.x=A,this.y=A,this.z=A,this.w=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setZ(A){return this.z=A,this}setW(A){return this.w=A,this}setComponent(A,e){switch(A){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw Error("index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(A){return this.x=A.x,this.y=A.y,this.z=A.z,this.w=void 0!==A.w?A.w:1,this}add(A,e){return void 0!==e?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(A,e)):(this.x+=A.x,this.y+=A.y,this.z+=A.z,this.w+=A.w,this)}addScalar(A){return this.x+=A,this.y+=A,this.z+=A,this.w+=A,this}addVectors(A,e){return this.x=A.x+e.x,this.y=A.y+e.y,this.z=A.z+e.z,this.w=A.w+e.w,this}addScaledVector(A,e){return this.x+=A.x*e,this.y+=A.y*e,this.z+=A.z*e,this.w+=A.w*e,this}sub(A,e){return void 0!==e?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(A,e)):(this.x-=A.x,this.y-=A.y,this.z-=A.z,this.w-=A.w,this)}subScalar(A){return this.x-=A,this.y-=A,this.z-=A,this.w-=A,this}subVectors(A,e){return this.x=A.x-e.x,this.y=A.y-e.y,this.z=A.z-e.z,this.w=A.w-e.w,this}multiply(A){return this.x*=A.x,this.y*=A.y,this.z*=A.z,this.w*=A.w,this}multiplyScalar(A){return this.x*=A,this.y*=A,this.z*=A,this.w*=A,this}applyMatrix4(A){let e=this.x,t=this.y,i=this.z,r=this.w,s=A.elements;return this.x=s[0]*e+s[4]*t+s[8]*i+s[12]*r,this.y=s[1]*e+s[5]*t+s[9]*i+s[13]*r,this.z=s[2]*e+s[6]*t+s[10]*i+s[14]*r,this.w=s[3]*e+s[7]*t+s[11]*i+s[15]*r,this}divideScalar(A){return this.multiplyScalar(1/A)}setAxisAngleFromQuaternion(A){this.w=2*Math.acos(A.w);let e=Math.sqrt(1-A.w*A.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=A.x/e,this.y=A.y/e,this.z=A.z/e),this}setAxisAngleFromRotationMatrix(A){let e,t,i,r=A.elements,s=r[0],a=r[4],o=r[8],l=r[1],h=r[5],c=r[9],d=r[2],u=r[6],p=r[10];if(.01>Math.abs(a-l)&&.01>Math.abs(o-d)&&.01>Math.abs(c-u)){if(.1>Math.abs(a+l)&&.1>Math.abs(o+d)&&.1>Math.abs(c+u)&&.1>Math.abs(s+h+p-3))return this.set(1,0,0,0),this;let f=(s+1)/2,m=(h+1)/2,g=(p+1)/2,v=(a+l)/4,y=(o+d)/4,x=(c+u)/4;return f>m&&f>g?f<.01?(e=0,t=.707106781,i=.707106781):(t=v/(e=Math.sqrt(f)),i=y/e):m>g?m<.01?(e=.707106781,t=0,i=.707106781):(e=v/(t=Math.sqrt(m)),i=x/t):g<.01?(e=.707106781,t=.707106781,i=0):(e=y/(i=Math.sqrt(g)),t=x/i),this.set(e,t,i,Math.PI),this}let b=Math.sqrt((u-c)*(u-c)+(o-d)*(o-d)+(l-a)*(l-a));return .001>Math.abs(b)&&(b=1),this.x=(u-c)/b,this.y=(o-d)/b,this.z=(l-a)/b,this.w=Math.acos((s+h+p-1)/2),this}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this.z=Math.min(this.z,A.z),this.w=Math.min(this.w,A.w),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this.z=Math.max(this.z,A.z),this.w=Math.max(this.w,A.w),this}clamp(A,e){return this.x=Math.max(A.x,Math.min(e.x,this.x)),this.y=Math.max(A.y,Math.min(e.y,this.y)),this.z=Math.max(A.z,Math.min(e.z,this.z)),this.w=Math.max(A.w,Math.min(e.w,this.w)),this}clampScalar(A,e){return this.x=Math.max(A,Math.min(e,this.x)),this.y=Math.max(A,Math.min(e,this.y)),this.z=Math.max(A,Math.min(e,this.z)),this.w=Math.max(A,Math.min(e,this.w)),this}clampLength(A,e){let t=this.length();return this.divideScalar(t||1).multiplyScalar(Math.max(A,Math.min(e,t)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(A){return this.x*A.x+this.y*A.y+this.z*A.z+this.w*A.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,e){return this.x+=(A.x-this.x)*e,this.y+=(A.y-this.y)*e,this.z+=(A.z-this.z)*e,this.w+=(A.w-this.w)*e,this}lerpVectors(A,e,t){return this.x=A.x+(e.x-A.x)*t,this.y=A.y+(e.y-A.y)*t,this.z=A.z+(e.z-A.z)*t,this.w=A.w+(e.w-A.w)*t,this}equals(A){return A.x===this.x&&A.y===this.y&&A.z===this.z&&A.w===this.w}fromArray(A,e=0){return this.x=A[e],this.y=A[e+1],this.z=A[e+2],this.w=A[e+3],this}toArray(A=[],e=0){return A[e]=this.x,A[e+1]=this.y,A[e+2]=this.z,A[e+3]=this.w,A}fromBufferAttribute(A,e,t){return void 0!==t&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=A.getX(e),this.y=A.getY(e),this.z=A.getZ(e),this.w=A.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},e0=class extends ev{constructor(A,e,t={}){super(),this.isWebGLRenderTarget=!0,this.width=A,this.height=e,this.depth=1,this.scissor=new e$(0,0,A,e),this.scissorTest=!1,this.viewport=new e$(0,0,A,e),this.texture=new eJ({width:A,height:e,depth:1},t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=void 0!==t.generateMipmaps&&t.generateMipmaps,this.texture.internalFormat=void 0!==t.internalFormat?t.internalFormat:null,this.texture.minFilter=void 0!==t.minFilter?t.minFilter:1006,this.depthBuffer=void 0===t.depthBuffer||t.depthBuffer,this.stencilBuffer=void 0!==t.stencilBuffer&&t.stencilBuffer,this.depthTexture=void 0!==t.depthTexture?t.depthTexture:null,this.samples=void 0!==t.samples?t.samples:0}setSize(A,e,t=1){(this.width!==A||this.height!==e||this.depth!==t)&&(this.width=A,this.height=e,this.depth=t,this.texture.image.width=A,this.texture.image.height=e,this.texture.image.depth=t,this.dispose()),this.viewport.set(0,0,A,e),this.scissor.set(0,0,A,e)}clone(){return new this.constructor().copy(this)}copy(A){this.width=A.width,this.height=A.height,this.depth=A.depth,this.viewport.copy(A.viewport),this.texture=A.texture.clone(),this.texture.isRenderTargetTexture=!0;let e=Object.assign({},A.texture.image);return this.texture.source=new eq(e),this.depthBuffer=A.depthBuffer,this.stencilBuffer=A.stencilBuffer,null!==A.depthTexture&&(this.depthTexture=A.depthTexture.clone()),this.samples=A.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},e1=class extends eJ{constructor(A=null,e=1,t=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:A,width:e,height:t,depth:i},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},e2=class extends eJ{constructor(A=null,e=1,t=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:A,width:e,height:t,depth:i},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},e3=class{constructor(A=0,e=0,t=0,i=1){this.isQuaternion=!0,this._x=A,this._y=e,this._z=t,this._w=i}static slerp(A,e,t,i){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),t.slerpQuaternions(A,e,i)}static slerpFlat(A,e,t,i,r,s,a){let o=t[i+0],l=t[i+1],h=t[i+2],c=t[i+3],d=r[s+0],u=r[s+1],p=r[s+2],f=r[s+3];if(0===a){A[e+0]=o,A[e+1]=l,A[e+2]=h,A[e+3]=c;return}if(1===a){A[e+0]=d,A[e+1]=u,A[e+2]=p,A[e+3]=f;return}if(c!==f||o!==d||l!==u||h!==p){let m=1-a,g=o*d+l*u+h*p+c*f,v=g>=0?1:-1,y=1-g*g;if(y>Number.EPSILON){let x=Math.sqrt(y),b=Math.atan2(x,g*v);m=Math.sin(m*b)/x,a=Math.sin(a*b)/x}let w=a*v;if(o=o*m+d*w,l=l*m+u*w,h=h*m+p*w,c=c*m+f*w,m===1-a){let S=1/Math.sqrt(o*o+l*l+h*h+c*c);o*=S,l*=S,h*=S,c*=S}}A[e]=o,A[e+1]=l,A[e+2]=h,A[e+3]=c}static multiplyQuaternionsFlat(A,e,t,i,r,s){let a=t[i],o=t[i+1],l=t[i+2],h=t[i+3],c=r[s],d=r[s+1],u=r[s+2],p=r[s+3];return A[e]=a*p+h*c+o*u-l*d,A[e+1]=o*p+h*d+l*c-a*u,A[e+2]=l*p+h*u+a*d-o*c,A[e+3]=h*p-a*c-o*d-l*u,A}get x(){return this._x}set x(A){this._x=A,this._onChangeCallback()}get y(){return this._y}set y(A){this._y=A,this._onChangeCallback()}get z(){return this._z}set z(A){this._z=A,this._onChangeCallback()}get w(){return this._w}set w(A){this._w=A,this._onChangeCallback()}set(A,e,t,i){return this._x=A,this._y=e,this._z=t,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(A){return this._x=A.x,this._y=A.y,this._z=A.z,this._w=A.w,this._onChangeCallback(),this}setFromEuler(A,e){if(!(A&&A.isEuler))throw Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");let t=A._x,i=A._y,r=A._z,s=A._order,a=Math.cos,o=Math.sin,l=a(t/2),h=a(i/2),c=a(r/2),d=o(t/2),u=o(i/2),p=o(r/2);switch(s){case"XYZ":this._x=d*h*c+l*u*p,this._y=l*u*c-d*h*p,this._z=l*h*p+d*u*c,this._w=l*h*c-d*u*p;break;case"YXZ":this._x=d*h*c+l*u*p,this._y=l*u*c-d*h*p,this._z=l*h*p-d*u*c,this._w=l*h*c+d*u*p;break;case"ZXY":this._x=d*h*c-l*u*p,this._y=l*u*c+d*h*p,this._z=l*h*p+d*u*c,this._w=l*h*c-d*u*p;break;case"ZYX":this._x=d*h*c-l*u*p,this._y=l*u*c+d*h*p,this._z=l*h*p-d*u*c,this._w=l*h*c+d*u*p;break;case"YZX":this._x=d*h*c+l*u*p,this._y=l*u*c+d*h*p,this._z=l*h*p-d*u*c,this._w=l*h*c-d*u*p;break;case"XZY":this._x=d*h*c-l*u*p,this._y=l*u*c-d*h*p,this._z=l*h*p+d*u*c,this._w=l*h*c+d*u*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return!1!==e&&this._onChangeCallback(),this}setFromAxisAngle(A,e){let t=e/2,i=Math.sin(t);return this._x=A.x*i,this._y=A.y*i,this._z=A.z*i,this._w=Math.cos(t),this._onChangeCallback(),this}setFromRotationMatrix(A){let e=A.elements,t=e[0],i=e[4],r=e[8],s=e[1],a=e[5],o=e[9],l=e[2],h=e[6],c=e[10],d=t+a+c;if(d>0){let u=.5/Math.sqrt(d+1);this._w=.25/u,this._x=(h-o)*u,this._y=(r-l)*u,this._z=(s-i)*u}else if(t>a&&t>c){let p=2*Math.sqrt(1+t-a-c);this._w=(h-o)/p,this._x=.25*p,this._y=(i+s)/p,this._z=(r+l)/p}else if(a>c){let f=2*Math.sqrt(1+a-t-c);this._w=(r-l)/f,this._x=(i+s)/f,this._y=.25*f,this._z=(o+h)/f}else{let m=2*Math.sqrt(1+c-t-a);this._w=(s-i)/m,this._x=(r+l)/m,this._y=(o+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(A,e){let t=A.dot(e)+1;return t<Number.EPSILON?(t=0,Math.abs(A.x)>Math.abs(A.z)?(this._x=-A.y,this._y=A.x,this._z=0,this._w=t):(this._x=0,this._y=-A.z,this._z=A.y,this._w=t)):(this._x=A.y*e.z-A.z*e.y,this._y=A.z*e.x-A.x*e.z,this._z=A.x*e.y-A.y*e.x,this._w=t),this.normalize()}angleTo(A){return 2*Math.acos(Math.abs(eM(this.dot(A),-1,1)))}rotateTowards(A,e){let t=this.angleTo(A);return 0===t||this.slerp(A,Math.min(1,e/t)),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(A){return this._x*A._x+this._y*A._y+this._z*A._z+this._w*A._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let A=this.length();return 0===A?(this._x=0,this._y=0,this._z=0,this._w=1):(A=1/A,this._x=this._x*A,this._y=this._y*A,this._z=this._z*A,this._w=this._w*A),this._onChangeCallback(),this}multiply(A,e){return void 0!==e?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(A,e)):this.multiplyQuaternions(this,A)}premultiply(A){return this.multiplyQuaternions(A,this)}multiplyQuaternions(A,e){let t=A._x,i=A._y,r=A._z,s=A._w,a=e._x,o=e._y,l=e._z,h=e._w;return this._x=t*h+s*a+i*l-r*o,this._y=i*h+s*o+r*a-t*l,this._z=r*h+s*l+t*o-i*a,this._w=s*h-t*a-i*o-r*l,this._onChangeCallback(),this}slerp(A,e){if(0===e)return this;if(1===e)return this.copy(A);let t=this._x,i=this._y,r=this._z,s=this._w,a=s*A._w+t*A._x+i*A._y+r*A._z;if(a<0?(this._w=-A._w,this._x=-A._x,this._y=-A._y,this._z=-A._z,a=-a):this.copy(A),a>=1)return this._w=s,this._x=t,this._y=i,this._z=r,this;let o=1-a*a;if(o<=Number.EPSILON){let l=1-e;return this._w=l*s+e*this._w,this._x=l*t+e*this._x,this._y=l*i+e*this._y,this._z=l*r+e*this._z,this.normalize(),this._onChangeCallback(),this}let h=Math.sqrt(o),c=Math.atan2(h,a),d=Math.sin((1-e)*c)/h,u=Math.sin(e*c)/h;return this._w=s*d+this._w*u,this._x=t*d+this._x*u,this._y=i*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(A,e,t){return this.copy(A).slerp(e,t)}random(){let A=Math.random(),e=Math.sqrt(1-A),t=Math.sqrt(A),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(i),t*Math.sin(r),t*Math.cos(r),e*Math.sin(i))}equals(A){return A._x===this._x&&A._y===this._y&&A._z===this._z&&A._w===this._w}fromArray(A,e=0){return this._x=A[e],this._y=A[e+1],this._z=A[e+2],this._w=A[e+3],this._onChangeCallback(),this}toArray(A=[],e=0){return A[e]=this._x,A[e+1]=this._y,A[e+2]=this._z,A[e+3]=this._w,A}fromBufferAttribute(A,e){return this._x=A.getX(e),this._y=A.getY(e),this._z=A.getZ(e),this._w=A.getW(e),this}_onChange(A){return this._onChangeCallback=A,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},e4=class{constructor(A=0,e=0,t=0){e4.prototype.isVector3=!0,this.x=A,this.y=e,this.z=t}set(A,e,t){return void 0===t&&(t=this.z),this.x=A,this.y=e,this.z=t,this}setScalar(A){return this.x=A,this.y=A,this.z=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setZ(A){return this.z=A,this}setComponent(A,e){switch(A){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw Error("index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(A){return this.x=A.x,this.y=A.y,this.z=A.z,this}add(A,e){return void 0!==e?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(A,e)):(this.x+=A.x,this.y+=A.y,this.z+=A.z,this)}addScalar(A){return this.x+=A,this.y+=A,this.z+=A,this}addVectors(A,e){return this.x=A.x+e.x,this.y=A.y+e.y,this.z=A.z+e.z,this}addScaledVector(A,e){return this.x+=A.x*e,this.y+=A.y*e,this.z+=A.z*e,this}sub(A,e){return void 0!==e?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(A,e)):(this.x-=A.x,this.y-=A.y,this.z-=A.z,this)}subScalar(A){return this.x-=A,this.y-=A,this.z-=A,this}subVectors(A,e){return this.x=A.x-e.x,this.y=A.y-e.y,this.z=A.z-e.z,this}multiply(A,e){return void 0!==e?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(A,e)):(this.x*=A.x,this.y*=A.y,this.z*=A.z,this)}multiplyScalar(A){return this.x*=A,this.y*=A,this.z*=A,this}multiplyVectors(A,e){return this.x=A.x*e.x,this.y=A.y*e.y,this.z=A.z*e.z,this}applyEuler(A){return A&&A.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(e6.setFromEuler(A))}applyAxisAngle(A,e){return this.applyQuaternion(e6.setFromAxisAngle(A,e))}applyMatrix3(A){let e=this.x,t=this.y,i=this.z,r=A.elements;return this.x=r[0]*e+r[3]*t+r[6]*i,this.y=r[1]*e+r[4]*t+r[7]*i,this.z=r[2]*e+r[5]*t+r[8]*i,this}applyNormalMatrix(A){return this.applyMatrix3(A).normalize()}applyMatrix4(A){let e=this.x,t=this.y,i=this.z,r=A.elements,s=1/(r[3]*e+r[7]*t+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*t+r[8]*i+r[12])*s,this.y=(r[1]*e+r[5]*t+r[9]*i+r[13])*s,this.z=(r[2]*e+r[6]*t+r[10]*i+r[14])*s,this}applyQuaternion(A){let e=this.x,t=this.y,i=this.z,r=A.x,s=A.y,a=A.z,o=A.w,l=o*e+s*i-a*t,h=o*t+a*e-r*i,c=o*i+r*t-s*e,d=-r*e-s*t-a*i;return this.x=l*o+-(d*r)+-(h*a)- -(c*s),this.y=h*o+-(d*s)+-(c*r)- -(l*a),this.z=c*o+-(d*a)+-(l*s)- -(h*r),this}project(A){return this.applyMatrix4(A.matrixWorldInverse).applyMatrix4(A.projectionMatrix)}unproject(A){return this.applyMatrix4(A.projectionMatrixInverse).applyMatrix4(A.matrixWorld)}transformDirection(A){let e=this.x,t=this.y,i=this.z,r=A.elements;return this.x=r[0]*e+r[4]*t+r[8]*i,this.y=r[1]*e+r[5]*t+r[9]*i,this.z=r[2]*e+r[6]*t+r[10]*i,this.normalize()}divide(A){return this.x/=A.x,this.y/=A.y,this.z/=A.z,this}divideScalar(A){return this.multiplyScalar(1/A)}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this.z=Math.min(this.z,A.z),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this.z=Math.max(this.z,A.z),this}clamp(A,e){return this.x=Math.max(A.x,Math.min(e.x,this.x)),this.y=Math.max(A.y,Math.min(e.y,this.y)),this.z=Math.max(A.z,Math.min(e.z,this.z)),this}clampScalar(A,e){return this.x=Math.max(A,Math.min(e,this.x)),this.y=Math.max(A,Math.min(e,this.y)),this.z=Math.max(A,Math.min(e,this.z)),this}clampLength(A,e){let t=this.length();return this.divideScalar(t||1).multiplyScalar(Math.max(A,Math.min(e,t)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(A){return this.x*A.x+this.y*A.y+this.z*A.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,e){return this.x+=(A.x-this.x)*e,this.y+=(A.y-this.y)*e,this.z+=(A.z-this.z)*e,this}lerpVectors(A,e,t){return this.x=A.x+(e.x-A.x)*t,this.y=A.y+(e.y-A.y)*t,this.z=A.z+(e.z-A.z)*t,this}cross(A,e){return void 0!==e?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(A,e)):this.crossVectors(this,A)}crossVectors(A,e){let t=A.x,i=A.y,r=A.z,s=e.x,a=e.y,o=e.z;return this.x=i*o-r*a,this.y=r*s-t*o,this.z=t*a-i*s,this}projectOnVector(A){let e=A.lengthSq();if(0===e)return this.set(0,0,0);let t=A.dot(this)/e;return this.copy(A).multiplyScalar(t)}projectOnPlane(A){return e5.copy(this).projectOnVector(A),this.sub(e5)}reflect(A){return this.sub(e5.copy(A).multiplyScalar(2*this.dot(A)))}angleTo(A){let e=Math.sqrt(this.lengthSq()*A.lengthSq());return 0===e?Math.PI/2:Math.acos(eM(this.dot(A)/e,-1,1))}distanceTo(A){return Math.sqrt(this.distanceToSquared(A))}distanceToSquared(A){let e=this.x-A.x,t=this.y-A.y,i=this.z-A.z;return e*e+t*t+i*i}manhattanDistanceTo(A){return Math.abs(this.x-A.x)+Math.abs(this.y-A.y)+Math.abs(this.z-A.z)}setFromSpherical(A){return this.setFromSphericalCoords(A.radius,A.phi,A.theta)}setFromSphericalCoords(A,e,t){let i=Math.sin(e)*A;return this.x=i*Math.sin(t),this.y=Math.cos(e)*A,this.z=i*Math.cos(t),this}setFromCylindrical(A){return this.setFromCylindricalCoords(A.radius,A.theta,A.y)}setFromCylindricalCoords(A,e,t){return this.x=A*Math.sin(e),this.y=t,this.z=A*Math.cos(e),this}setFromMatrixPosition(A){let e=A.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(A){let e=this.setFromMatrixColumn(A,0).length(),t=this.setFromMatrixColumn(A,1).length(),i=this.setFromMatrixColumn(A,2).length();return this.x=e,this.y=t,this.z=i,this}setFromMatrixColumn(A,e){return this.fromArray(A.elements,4*e)}setFromMatrix3Column(A,e){return this.fromArray(A.elements,3*e)}setFromEuler(A){return this.x=A._x,this.y=A._y,this.z=A._z,this}equals(A){return A.x===this.x&&A.y===this.y&&A.z===this.z}fromArray(A,e=0){return this.x=A[e],this.y=A[e+1],this.z=A[e+2],this}toArray(A=[],e=0){return A[e]=this.x,A[e+1]=this.y,A[e+2]=this.z,A}fromBufferAttribute(A,e,t){return void 0!==t&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=A.getX(e),this.y=A.getY(e),this.z=A.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let A=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,t=Math.sqrt(1-A**2);return this.x=t*Math.cos(e),this.y=t*Math.sin(e),this.z=A,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},e5=new e4,e6=new e3,e8=class{constructor(A=new e4(1/0,1/0,1/0),e=new e4(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=A,this.max=e}set(A,e){return this.min.copy(A),this.max.copy(e),this}setFromArray(A){let e=1/0,t=1/0,i=1/0,r=-1/0,s=-1/0,a=-1/0;for(let o=0,l=A.length;o<l;o+=3){let h=A[o],c=A[o+1],d=A[o+2];h<e&&(e=h),c<t&&(t=c),d<i&&(i=d),h>r&&(r=h),c>s&&(s=c),d>a&&(a=d)}return this.min.set(e,t,i),this.max.set(r,s,a),this}setFromBufferAttribute(A){let e=1/0,t=1/0,i=1/0,r=-1/0,s=-1/0,a=-1/0;for(let o=0,l=A.count;o<l;o++){let h=A.getX(o),c=A.getY(o),d=A.getZ(o);h<e&&(e=h),c<t&&(t=c),d<i&&(i=d),h>r&&(r=h),c>s&&(s=c),d>a&&(a=d)}return this.min.set(e,t,i),this.max.set(r,s,a),this}setFromPoints(A){this.makeEmpty();for(let e=0,t=A.length;e<t;e++)this.expandByPoint(A[e]);return this}setFromCenterAndSize(A,e){let t=e7.copy(e).multiplyScalar(.5);return this.min.copy(A).sub(t),this.max.copy(A).add(t),this}setFromObject(A,e=!1){return this.makeEmpty(),this.expandByObject(A,e)}clone(){return new this.constructor().copy(this)}copy(A){return this.min.copy(A.min),this.max.copy(A.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(A){return this.isEmpty()?A.set(0,0,0):A.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(A){return this.isEmpty()?A.set(0,0,0):A.subVectors(this.max,this.min)}expandByPoint(A){return this.min.min(A),this.max.max(A),this}expandByVector(A){return this.min.sub(A),this.max.add(A),this}expandByScalar(A){return this.min.addScalar(-A),this.max.addScalar(A),this}expandByObject(A,e=!1){A.updateWorldMatrix(!1,!1);let t=A.geometry;if(void 0!==t){if(e&&null!=t.attributes&&void 0!==t.attributes.position){let i=t.attributes.position;for(let r=0,s=i.count;r<s;r++)e7.fromBufferAttribute(i,r).applyMatrix4(A.matrixWorld),this.expandByPoint(e7)}else null===t.boundingBox&&t.computeBoundingBox(),tA.copy(t.boundingBox),tA.applyMatrix4(A.matrixWorld),this.union(tA)}let a=A.children;for(let o=0,l=a.length;o<l;o++)this.expandByObject(a[o],e);return this}containsPoint(A){return!(A.x<this.min.x||A.x>this.max.x||A.y<this.min.y||A.y>this.max.y||A.z<this.min.z||A.z>this.max.z)}containsBox(A){return this.min.x<=A.min.x&&A.max.x<=this.max.x&&this.min.y<=A.min.y&&A.max.y<=this.max.y&&this.min.z<=A.min.z&&A.max.z<=this.max.z}getParameter(A,e){return e.set((A.x-this.min.x)/(this.max.x-this.min.x),(A.y-this.min.y)/(this.max.y-this.min.y),(A.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(A){return!(A.max.x<this.min.x||A.min.x>this.max.x||A.max.y<this.min.y||A.min.y>this.max.y||A.max.z<this.min.z||A.min.z>this.max.z)}intersectsSphere(A){return this.clampPoint(A.center,e7),e7.distanceToSquared(A.center)<=A.radius*A.radius}intersectsPlane(A){let e,t;return A.normal.x>0?(e=A.normal.x*this.min.x,t=A.normal.x*this.max.x):(e=A.normal.x*this.max.x,t=A.normal.x*this.min.x),A.normal.y>0?(e+=A.normal.y*this.min.y,t+=A.normal.y*this.max.y):(e+=A.normal.y*this.max.y,t+=A.normal.y*this.min.y),A.normal.z>0?(e+=A.normal.z*this.min.z,t+=A.normal.z*this.max.z):(e+=A.normal.z*this.max.z,t+=A.normal.z*this.min.z),e<=-A.constant&&t>=-A.constant}intersectsTriangle(A){if(this.isEmpty())return!1;this.getCenter(ta),to.subVectors(this.max,ta),te.subVectors(A.a,ta),tt.subVectors(A.b,ta),ti.subVectors(A.c,ta),tr.subVectors(tt,te),ts.subVectors(ti,tt),tn.subVectors(te,ti);let e=[0,-tr.z,tr.y,0,-ts.z,ts.y,0,-tn.z,tn.y,tr.z,0,-tr.x,ts.z,0,-ts.x,tn.z,0,-tn.x,-tr.y,tr.x,0,-ts.y,ts.x,0,-tn.y,tn.x,0];return!!(tc(e,te,tt,ti,to)&&tc(e=[1,0,0,0,1,0,0,0,1],te,tt,ti,to))&&(tl.crossVectors(tr,ts),tc(e=[tl.x,tl.y,tl.z],te,tt,ti,to))}clampPoint(A,e){return e.copy(A).clamp(this.min,this.max)}distanceToPoint(A){return e7.copy(A).clamp(this.min,this.max).sub(A).length()}getBoundingSphere(A){return this.getCenter(A.center),A.radius=.5*this.getSize(e7).length(),A}intersect(A){return this.min.max(A.min),this.max.min(A.max),this.isEmpty()&&this.makeEmpty(),this}union(A){return this.min.min(A.min),this.max.max(A.max),this}applyMatrix4(A){return this.isEmpty()||(e9[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(A),e9[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(A),e9[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(A),e9[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(A),e9[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(A),e9[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(A),e9[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(A),e9[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(A),this.setFromPoints(e9)),this}translate(A){return this.min.add(A),this.max.add(A),this}equals(A){return A.min.equals(this.min)&&A.max.equals(this.max)}},e9=[new e4,new e4,new e4,new e4,new e4,new e4,new e4,new e4],e7=new e4,tA=new e8,te=new e4,tt=new e4,ti=new e4,tr=new e4,ts=new e4,tn=new e4,ta=new e4,to=new e4,tl=new e4,th=new e4;function tc(A,e,t,i,r){for(let s=0,a=A.length-3;s<=a;s+=3){th.fromArray(A,s);let o=r.x*Math.abs(th.x)+r.y*Math.abs(th.y)+r.z*Math.abs(th.z),l=e.dot(th),h=t.dot(th),c=i.dot(th);if(Math.max(-Math.max(l,h,c),Math.min(l,h,c))>o)return!1}return!0}var td=new e8,tu=new e4,tp=new e4,tf=new e4,tm=class{constructor(A=new e4,e=-1){this.center=A,this.radius=e}set(A,e){return this.center.copy(A),this.radius=e,this}setFromPoints(A,e){let t=this.center;void 0!==e?t.copy(e):td.setFromPoints(A).getCenter(t);let i=0;for(let r=0,s=A.length;r<s;r++)i=Math.max(i,t.distanceToSquared(A[r]));return this.radius=Math.sqrt(i),this}copy(A){return this.center.copy(A.center),this.radius=A.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(A){return A.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(A){return A.distanceTo(this.center)-this.radius}intersectsSphere(A){let e=this.radius+A.radius;return A.center.distanceToSquared(this.center)<=e*e}intersectsBox(A){return A.intersectsSphere(this)}intersectsPlane(A){return Math.abs(A.distanceToPoint(this.center))<=this.radius}clampPoint(A,e){let t=this.center.distanceToSquared(A);return e.copy(A),t>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(A){return this.isEmpty()?(A.makeEmpty(),A):(A.set(this.center,this.center),A.expandByScalar(this.radius),A)}applyMatrix4(A){return this.center.applyMatrix4(A),this.radius=this.radius*A.getMaxScaleOnAxis(),this}translate(A){return this.center.add(A),this}expandByPoint(A){tf.subVectors(A,this.center);let e=tf.lengthSq();if(e>this.radius*this.radius){let t=Math.sqrt(e),i=(t-this.radius)*.5;this.center.add(tf.multiplyScalar(i/t)),this.radius+=i}return this}union(A){return!0===this.center.equals(A.center)?tp.set(0,0,1).multiplyScalar(A.radius):tp.subVectors(A.center,this.center).normalize().multiplyScalar(A.radius),this.expandByPoint(tu.copy(A.center).add(tp)),this.expandByPoint(tu.copy(A.center).sub(tp)),this}equals(A){return A.center.equals(this.center)&&A.radius===this.radius}clone(){return new this.constructor().copy(this)}},tg=new e4,tv=new e4,ty=new e4,tx=new e4,tb=new e4,tw=new e4,tS=new e4,tM=class{constructor(A=new e4,e=new e4(0,0,-1)){this.origin=A,this.direction=e}set(A,e){return this.origin.copy(A),this.direction.copy(e),this}copy(A){return this.origin.copy(A.origin),this.direction.copy(A.direction),this}at(A,e){return e.copy(this.direction).multiplyScalar(A).add(this.origin)}lookAt(A){return this.direction.copy(A).sub(this.origin).normalize(),this}recast(A){return this.origin.copy(this.at(A,tg)),this}closestPointToPoint(A,e){e.subVectors(A,this.origin);let t=e.dot(this.direction);return t<0?e.copy(this.origin):e.copy(this.direction).multiplyScalar(t).add(this.origin)}distanceToPoint(A){return Math.sqrt(this.distanceSqToPoint(A))}distanceSqToPoint(A){let e=tg.subVectors(A,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(A):(tg.copy(this.direction).multiplyScalar(e).add(this.origin),tg.distanceToSquared(A))}distanceSqToSegment(A,e,t,i){tv.copy(A).add(e).multiplyScalar(.5),ty.copy(e).sub(A).normalize(),tx.copy(this.origin).sub(tv);let r=.5*A.distanceTo(e),s=-this.direction.dot(ty),a=tx.dot(this.direction),o=-tx.dot(ty),l=tx.lengthSq(),h=Math.abs(1-s*s),c,d,u,p;if(h>0){if(c=s*o-a,d=s*a-o,p=r*h,c>=0){if(d>=-p){if(d<=p){let f=1/h;c*=f,d*=f,u=c*(c+s*d+2*a)+d*(s*c+d+2*o)+l}else u=-(c=Math.max(0,-(s*(d=r)+a)))*c+d*(d+2*o)+l}else u=-(c=Math.max(0,-(s*(d=-r)+a)))*c+d*(d+2*o)+l}else d<=-p?(d=(c=Math.max(0,-(-s*r+a)))>0?-r:Math.min(Math.max(-r,-o),r),u=-c*c+d*(d+2*o)+l):d<=p?(c=0,u=(d=Math.min(Math.max(-r,-o),r))*(d+2*o)+l):(d=(c=Math.max(0,-(s*r+a)))>0?r:Math.min(Math.max(-r,-o),r),u=-c*c+d*(d+2*o)+l)}else d=s>0?-r:r,u=-(c=Math.max(0,-(s*d+a)))*c+d*(d+2*o)+l;return t&&t.copy(this.direction).multiplyScalar(c).add(this.origin),i&&i.copy(ty).multiplyScalar(d).add(tv),u}intersectSphere(A,e){tg.subVectors(A.center,this.origin);let t=tg.dot(this.direction),i=tg.dot(tg)-t*t,r=A.radius*A.radius;if(i>r)return null;let s=Math.sqrt(r-i),a=t-s,o=t+s;return a<0&&o<0?null:a<0?this.at(o,e):this.at(a,e)}intersectsSphere(A){return this.distanceSqToPoint(A.center)<=A.radius*A.radius}distanceToPlane(A){let e=A.normal.dot(this.direction);if(0===e)return 0===A.distanceToPoint(this.origin)?0:null;let t=-(this.origin.dot(A.normal)+A.constant)/e;return t>=0?t:null}intersectPlane(A,e){let t=this.distanceToPlane(A);return null===t?null:this.at(t,e)}intersectsPlane(A){let e=A.distanceToPoint(this.origin);return 0===e||A.normal.dot(this.direction)*e<0}intersectBox(A,e){let t,i,r,s,a,o,l=1/this.direction.x,h=1/this.direction.y,c=1/this.direction.z,d=this.origin;return l>=0?(t=(A.min.x-d.x)*l,i=(A.max.x-d.x)*l):(t=(A.max.x-d.x)*l,i=(A.min.x-d.x)*l),h>=0?(r=(A.min.y-d.y)*h,s=(A.max.y-d.y)*h):(r=(A.max.y-d.y)*h,s=(A.min.y-d.y)*h),t>s||r>i||((r>t||t!=t)&&(t=r),(s<i||i!=i)&&(i=s),c>=0?(a=(A.min.z-d.z)*c,o=(A.max.z-d.z)*c):(a=(A.max.z-d.z)*c,o=(A.min.z-d.z)*c),t>o||a>i)||((a>t||t!=t)&&(t=a),(o<i||i!=i)&&(i=o),i<0)?null:this.at(t>=0?t:i,e)}intersectsBox(A){return null!==this.intersectBox(A,tg)}intersectTriangle(A,e,t,i,r){tb.subVectors(e,A),tw.subVectors(t,A),tS.crossVectors(tb,tw);let s=this.direction.dot(tS),a;if(s>0){if(i)return null;a=1}else{if(!(s<0))return null;a=-1,s=-s}tx.subVectors(this.origin,A);let o=a*this.direction.dot(tw.crossVectors(tx,tw));if(o<0)return null;let l=a*this.direction.dot(tb.cross(tx));if(l<0||o+l>s)return null;let h=-a*tx.dot(tS);return h<0?null:this.at(h/s,r)}applyMatrix4(A){return this.origin.applyMatrix4(A),this.direction.transformDirection(A),this}equals(A){return A.origin.equals(this.origin)&&A.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},tE=class{constructor(){tE.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(A,e,t,i,r,s,a,o,l,h,c,d,u,p,f,m){let g=this.elements;return g[0]=A,g[4]=e,g[8]=t,g[12]=i,g[1]=r,g[5]=s,g[9]=a,g[13]=o,g[2]=l,g[6]=h,g[10]=c,g[14]=d,g[3]=u,g[7]=p,g[11]=f,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new tE().fromArray(this.elements)}copy(A){let e=this.elements,t=A.elements;return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],this}copyPosition(A){let e=this.elements,t=A.elements;return e[12]=t[12],e[13]=t[13],e[14]=t[14],this}setFromMatrix3(A){let e=A.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(A,e,t){return A.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),t.setFromMatrixColumn(this,2),this}makeBasis(A,e,t){return this.set(A.x,e.x,t.x,0,A.y,e.y,t.y,0,A.z,e.z,t.z,0,0,0,0,1),this}extractRotation(A){let e=this.elements,t=A.elements,i=1/tT.setFromMatrixColumn(A,0).length(),r=1/tT.setFromMatrixColumn(A,1).length(),s=1/tT.setFromMatrixColumn(A,2).length();return e[0]=t[0]*i,e[1]=t[1]*i,e[2]=t[2]*i,e[3]=0,e[4]=t[4]*r,e[5]=t[5]*r,e[6]=t[6]*r,e[7]=0,e[8]=t[8]*s,e[9]=t[9]*s,e[10]=t[10]*s,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(A){A&&A.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");let e=this.elements,t=A.x,i=A.y,r=A.z,s=Math.cos(t),a=Math.sin(t),o=Math.cos(i),l=Math.sin(i),h=Math.cos(r),c=Math.sin(r);if("XYZ"===A.order){let d=s*h,u=s*c,p=a*h,f=a*c;e[0]=o*h,e[4]=-o*c,e[8]=l,e[1]=u+p*l,e[5]=d-f*l,e[9]=-a*o,e[2]=f-d*l,e[6]=p+u*l,e[10]=s*o}else if("YXZ"===A.order){let m=o*h,g=o*c,v=l*h,y=l*c;e[0]=m+y*a,e[4]=v*a-g,e[8]=s*l,e[1]=s*c,e[5]=s*h,e[9]=-a,e[2]=g*a-v,e[6]=y+m*a,e[10]=s*o}else if("ZXY"===A.order){let x=o*h,b=o*c,w=l*h,S=l*c;e[0]=x-S*a,e[4]=-s*c,e[8]=w+b*a,e[1]=b+w*a,e[5]=s*h,e[9]=S-x*a,e[2]=-s*l,e[6]=a,e[10]=s*o}else if("ZYX"===A.order){let M=s*h,E=s*c,T=a*h,C=a*c;e[0]=o*h,e[4]=T*l-E,e[8]=M*l+C,e[1]=o*c,e[5]=C*l+M,e[9]=E*l-T,e[2]=-l,e[6]=a*o,e[10]=s*o}else if("YZX"===A.order){let D=s*o,P=s*l,_=a*o,L=a*l;e[0]=o*h,e[4]=L-D*c,e[8]=_*c+P,e[1]=c,e[5]=s*h,e[9]=-a*h,e[2]=-l*h,e[6]=P*c+_,e[10]=D-L*c}else if("XZY"===A.order){let O=s*o,B=s*l,I=a*o,R=a*l;e[0]=o*h,e[4]=-c,e[8]=l*h,e[1]=O*c+R,e[5]=s*h,e[9]=B*c-I,e[2]=I*c-B,e[6]=a*h,e[10]=R*c+O}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(A){return this.compose(tD,A,tP)}lookAt(A,e,t){let i=this.elements;return tO.subVectors(A,e),0===tO.lengthSq()&&(tO.z=1),tO.normalize(),t_.crossVectors(t,tO),0===t_.lengthSq()&&(1===Math.abs(t.z)?tO.x+=1e-4:tO.z+=1e-4,tO.normalize(),t_.crossVectors(t,tO)),t_.normalize(),tL.crossVectors(tO,t_),i[0]=t_.x,i[4]=tL.x,i[8]=tO.x,i[1]=t_.y,i[5]=tL.y,i[9]=tO.y,i[2]=t_.z,i[6]=tL.z,i[10]=tO.z,this}multiply(A,e){return void 0!==e?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(A,e)):this.multiplyMatrices(this,A)}premultiply(A){return this.multiplyMatrices(A,this)}multiplyMatrices(A,e){let t=A.elements,i=e.elements,r=this.elements,s=t[0],a=t[4],o=t[8],l=t[12],h=t[1],c=t[5],d=t[9],u=t[13],p=t[2],f=t[6],m=t[10],g=t[14],v=t[3],y=t[7],x=t[11],b=t[15],w=i[0],S=i[4],M=i[8],E=i[12],T=i[1],C=i[5],D=i[9],P=i[13],_=i[2],L=i[6],O=i[10],B=i[14],I=i[3],R=i[7],N=i[11],z=i[15];return r[0]=s*w+a*T+o*_+l*I,r[4]=s*S+a*C+o*L+l*R,r[8]=s*M+a*D+o*O+l*N,r[12]=s*E+a*P+o*B+l*z,r[1]=h*w+c*T+d*_+u*I,r[5]=h*S+c*C+d*L+u*R,r[9]=h*M+c*D+d*O+u*N,r[13]=h*E+c*P+d*B+u*z,r[2]=p*w+f*T+m*_+g*I,r[6]=p*S+f*C+m*L+g*R,r[10]=p*M+f*D+m*O+g*N,r[14]=p*E+f*P+m*B+g*z,r[3]=v*w+y*T+x*_+b*I,r[7]=v*S+y*C+x*L+b*R,r[11]=v*M+y*D+x*O+b*N,r[15]=v*E+y*P+x*B+b*z,this}multiplyScalar(A){let e=this.elements;return e[0]*=A,e[4]*=A,e[8]*=A,e[12]*=A,e[1]*=A,e[5]*=A,e[9]*=A,e[13]*=A,e[2]*=A,e[6]*=A,e[10]*=A,e[14]*=A,e[3]*=A,e[7]*=A,e[11]*=A,e[15]*=A,this}determinant(){let A=this.elements,e=A[0],t=A[4],i=A[8],r=A[12],s=A[1],a=A[5],o=A[9],l=A[13],h=A[2],c=A[6],d=A[10],u=A[14];return A[3]*(+r*o*c-i*l*c-r*a*d+t*l*d+i*a*u-t*o*u)+A[7]*(+e*o*u-e*l*d+r*s*d-i*s*u+i*l*h-r*o*h)+A[11]*(+e*l*c-e*a*u-r*s*c+t*s*u+r*a*h-t*l*h)+A[15]*(-i*a*h-e*o*c+e*a*d+i*s*c-t*s*d+t*o*h)}transpose(){let A=this.elements,e;return e=A[1],A[1]=A[4],A[4]=e,e=A[2],A[2]=A[8],A[8]=e,e=A[6],A[6]=A[9],A[9]=e,e=A[3],A[3]=A[12],A[12]=e,e=A[7],A[7]=A[13],A[13]=e,e=A[11],A[11]=A[14],A[14]=e,this}setPosition(A,e,t){let i=this.elements;return A.isVector3?(i[12]=A.x,i[13]=A.y,i[14]=A.z):(i[12]=A,i[13]=e,i[14]=t),this}invert(){let A=this.elements,e=A[0],t=A[1],i=A[2],r=A[3],s=A[4],a=A[5],o=A[6],l=A[7],h=A[8],c=A[9],d=A[10],u=A[11],p=A[12],f=A[13],m=A[14],g=A[15],v=c*m*l-f*d*l+f*o*u-a*m*u-c*o*g+a*d*g,y=p*d*l-h*m*l-p*o*u+s*m*u+h*o*g-s*d*g,x=h*f*l-p*c*l+p*a*u-s*f*u-h*a*g+s*c*g,b=p*c*o-h*f*o-p*a*d+s*f*d+h*a*m-s*c*m,w=e*v+t*y+i*x+r*b;if(0===w)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let S=1/w;return A[0]=v*S,A[1]=(f*d*r-c*m*r-f*i*u+t*m*u+c*i*g-t*d*g)*S,A[2]=(a*m*r-f*o*r+f*i*l-t*m*l-a*i*g+t*o*g)*S,A[3]=(c*o*r-a*d*r-c*i*l+t*d*l+a*i*u-t*o*u)*S,A[4]=y*S,A[5]=(h*m*r-p*d*r+p*i*u-e*m*u-h*i*g+e*d*g)*S,A[6]=(p*o*r-s*m*r-p*i*l+e*m*l+s*i*g-e*o*g)*S,A[7]=(s*d*r-h*o*r+h*i*l-e*d*l-s*i*u+e*o*u)*S,A[8]=x*S,A[9]=(p*c*r-h*f*r-p*t*u+e*f*u+h*t*g-e*c*g)*S,A[10]=(s*f*r-p*a*r+p*t*l-e*f*l-s*t*g+e*a*g)*S,A[11]=(h*a*r-s*c*r-h*t*l+e*c*l+s*t*u-e*a*u)*S,A[12]=b*S,A[13]=(h*f*i-p*c*i+p*t*d-e*f*d-h*t*m+e*c*m)*S,A[14]=(p*a*i-s*f*i-p*t*o+e*f*o+s*t*m-e*a*m)*S,A[15]=(s*c*i-h*a*i+h*t*o-e*c*o-s*t*d+e*a*d)*S,this}scale(A){let e=this.elements,t=A.x,i=A.y,r=A.z;return e[0]*=t,e[4]*=i,e[8]*=r,e[1]*=t,e[5]*=i,e[9]*=r,e[2]*=t,e[6]*=i,e[10]*=r,e[3]*=t,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let A=this.elements;return Math.sqrt(Math.max(A[0]*A[0]+A[1]*A[1]+A[2]*A[2],A[4]*A[4]+A[5]*A[5]+A[6]*A[6],A[8]*A[8]+A[9]*A[9]+A[10]*A[10]))}makeTranslation(A,e,t){return this.set(1,0,0,A,0,1,0,e,0,0,1,t,0,0,0,1),this}makeRotationX(A){let e=Math.cos(A),t=Math.sin(A);return this.set(1,0,0,0,0,e,-t,0,0,t,e,0,0,0,0,1),this}makeRotationY(A){let e=Math.cos(A),t=Math.sin(A);return this.set(e,0,t,0,0,1,0,0,-t,0,e,0,0,0,0,1),this}makeRotationZ(A){let e=Math.cos(A),t=Math.sin(A);return this.set(e,-t,0,0,t,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(A,e){let t=Math.cos(e),i=Math.sin(e),r=1-t,s=A.x,a=A.y,o=A.z,l=r*s,h=r*a;return this.set(l*s+t,l*a-i*o,l*o+i*a,0,l*a+i*o,h*a+t,h*o-i*s,0,l*o-i*a,h*o+i*s,r*o*o+t,0,0,0,0,1),this}makeScale(A,e,t){return this.set(A,0,0,0,0,e,0,0,0,0,t,0,0,0,0,1),this}makeShear(A,e,t,i,r,s){return this.set(1,t,r,0,A,1,s,0,e,i,1,0,0,0,0,1),this}compose(A,e,t){let i=this.elements,r=e._x,s=e._y,a=e._z,o=e._w,l=r+r,h=s+s,c=a+a,d=r*l,u=r*h,p=r*c,f=s*h,m=s*c,g=a*c,v=o*l,y=o*h,x=o*c,b=t.x,w=t.y,S=t.z;return i[0]=(1-(f+g))*b,i[1]=(u+x)*b,i[2]=(p-y)*b,i[3]=0,i[4]=(u-x)*w,i[5]=(1-(d+g))*w,i[6]=(m+v)*w,i[7]=0,i[8]=(p+y)*S,i[9]=(m-v)*S,i[10]=(1-(d+f))*S,i[11]=0,i[12]=A.x,i[13]=A.y,i[14]=A.z,i[15]=1,this}decompose(A,e,t){let i=this.elements,r=tT.set(i[0],i[1],i[2]).length(),s=tT.set(i[4],i[5],i[6]).length(),a=tT.set(i[8],i[9],i[10]).length();0>this.determinant()&&(r=-r),A.x=i[12],A.y=i[13],A.z=i[14],tC.copy(this);let o=1/r,l=1/s,h=1/a;return tC.elements[0]*=o,tC.elements[1]*=o,tC.elements[2]*=o,tC.elements[4]*=l,tC.elements[5]*=l,tC.elements[6]*=l,tC.elements[8]*=h,tC.elements[9]*=h,tC.elements[10]*=h,e.setFromRotationMatrix(tC),t.x=r,t.y=s,t.z=a,this}makePerspective(A,e,t,i,r,s){void 0===s&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");let a=this.elements;return a[0]=2*r/(e-A),a[4]=0,a[8]=(e+A)/(e-A),a[12]=0,a[1]=0,a[5]=2*r/(t-i),a[9]=(t+i)/(t-i),a[13]=0,a[2]=0,a[6]=0,a[10]=-(s+r)/(s-r),a[14]=-2*s*r/(s-r),a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(A,e,t,i,r,s){let a=this.elements,o=1/(e-A),l=1/(t-i),h=1/(s-r);return a[0]=2*o,a[4]=0,a[8]=0,a[12]=-((e+A)*o),a[1]=0,a[5]=2*l,a[9]=0,a[13]=-((t+i)*l),a[2]=0,a[6]=0,a[10]=-2*h,a[14]=-((s+r)*h),a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(A){let e=this.elements,t=A.elements;for(let i=0;i<16;i++)if(e[i]!==t[i])return!1;return!0}fromArray(A,e=0){for(let t=0;t<16;t++)this.elements[t]=A[t+e];return this}toArray(A=[],e=0){let t=this.elements;return A[e]=t[0],A[e+1]=t[1],A[e+2]=t[2],A[e+3]=t[3],A[e+4]=t[4],A[e+5]=t[5],A[e+6]=t[6],A[e+7]=t[7],A[e+8]=t[8],A[e+9]=t[9],A[e+10]=t[10],A[e+11]=t[11],A[e+12]=t[12],A[e+13]=t[13],A[e+14]=t[14],A[e+15]=t[15],A}},tT=new e4,tC=new tE,tD=new e4(0,0,0),tP=new e4(1,1,1),t_=new e4,tL=new e4,tO=new e4,tB=new tE,tI=new e3,tR=class{constructor(A=0,e=0,t=0,i=tR.DefaultOrder){this.isEuler=!0,this._x=A,this._y=e,this._z=t,this._order=i}get x(){return this._x}set x(A){this._x=A,this._onChangeCallback()}get y(){return this._y}set y(A){this._y=A,this._onChangeCallback()}get z(){return this._z}set z(A){this._z=A,this._onChangeCallback()}get order(){return this._order}set order(A){this._order=A,this._onChangeCallback()}set(A,e,t,i=this._order){return this._x=A,this._y=e,this._z=t,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(A){return this._x=A._x,this._y=A._y,this._z=A._z,this._order=A._order,this._onChangeCallback(),this}setFromRotationMatrix(A,e=this._order,t=!0){let i=A.elements,r=i[0],s=i[4],a=i[8],o=i[1],l=i[5],h=i[9],c=i[2],d=i[6],u=i[10];switch(e){case"XYZ":this._y=Math.asin(eM(a,-1,1)),.9999999>Math.abs(a)?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-s,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-eM(h,-1,1)),.9999999>Math.abs(h)?(this._y=Math.atan2(a,u),this._z=Math.atan2(o,l)):(this._y=Math.atan2(-c,r),this._z=0);break;case"ZXY":this._x=Math.asin(eM(d,-1,1)),.9999999>Math.abs(d)?(this._y=Math.atan2(-c,u),this._z=Math.atan2(-s,l)):(this._y=0,this._z=Math.atan2(o,r));break;case"ZYX":this._y=Math.asin(-eM(c,-1,1)),.9999999>Math.abs(c)?(this._x=Math.atan2(d,u),this._z=Math.atan2(o,r)):(this._x=0,this._z=Math.atan2(-s,l));break;case"YZX":this._z=Math.asin(eM(o,-1,1)),.9999999>Math.abs(o)?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-c,r)):(this._x=0,this._y=Math.atan2(a,u));break;case"XZY":this._z=Math.asin(-eM(s,-1,1)),.9999999>Math.abs(s)?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,u),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,!0===t&&this._onChangeCallback(),this}setFromQuaternion(A,e,t){return tB.makeRotationFromQuaternion(A),this.setFromRotationMatrix(tB,e,t)}setFromVector3(A,e=this._order){return this.set(A.x,A.y,A.z,e)}reorder(A){return tI.setFromEuler(this),this.setFromQuaternion(tI,A)}equals(A){return A._x===this._x&&A._y===this._y&&A._z===this._z&&A._order===this._order}fromArray(A){return this._x=A[0],this._y=A[1],this._z=A[2],void 0!==A[3]&&(this._order=A[3]),this._onChangeCallback(),this}toArray(A=[],e=0){return A[e]=this._x,A[e+1]=this._y,A[e+2]=this._z,A[e+3]=this._order,A}_onChange(A){return this._onChangeCallback=A,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}};tR.DefaultOrder="XYZ",tR.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];var tN=class{constructor(){this.mask=1}set(A){this.mask=(1<<A|0)>>>0}enable(A){this.mask|=1<<A|0}enableAll(){this.mask=-1}toggle(A){this.mask^=1<<A|0}disable(A){this.mask&=~(1<<A|0)}disableAll(){this.mask=0}test(A){return(this.mask&A.mask)!=0}isEnabled(A){return(this.mask&(1<<A|0))!=0}},tz=0,tF=new e4,tU=new e3,tk=new tE,tG=new e4,tV=new e4,tj=new e4,tH=new e3,tW=new e4(1,0,0),tY=new e4(0,1,0),tX=new e4(0,0,1),tQ={type:"added"},tq={type:"removed"},tZ=class extends ev{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:tz++}),this.uuid=eS(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=tZ.DefaultUp.clone();let A=new e4,e=new tR,t=new e3,i=new e4(1,1,1);e._onChange(function(){t.setFromEuler(e,!1)}),t._onChange(function(){e.setFromQuaternion(t,void 0,!1)}),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:A},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:t},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new tE},normalMatrix:{value:new eL}}),this.matrix=new tE,this.matrixWorld=new tE,this.matrixAutoUpdate=tZ.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new tN,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(A){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(A),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(A){return this.quaternion.premultiply(A),this}setRotationFromAxisAngle(A,e){this.quaternion.setFromAxisAngle(A,e)}setRotationFromEuler(A){this.quaternion.setFromEuler(A,!0)}setRotationFromMatrix(A){this.quaternion.setFromRotationMatrix(A)}setRotationFromQuaternion(A){this.quaternion.copy(A)}rotateOnAxis(A,e){return tU.setFromAxisAngle(A,e),this.quaternion.multiply(tU),this}rotateOnWorldAxis(A,e){return tU.setFromAxisAngle(A,e),this.quaternion.premultiply(tU),this}rotateX(A){return this.rotateOnAxis(tW,A)}rotateY(A){return this.rotateOnAxis(tY,A)}rotateZ(A){return this.rotateOnAxis(tX,A)}translateOnAxis(A,e){return tF.copy(A).applyQuaternion(this.quaternion),this.position.add(tF.multiplyScalar(e)),this}translateX(A){return this.translateOnAxis(tW,A)}translateY(A){return this.translateOnAxis(tY,A)}translateZ(A){return this.translateOnAxis(tX,A)}localToWorld(A){return A.applyMatrix4(this.matrixWorld)}worldToLocal(A){return A.applyMatrix4(tk.copy(this.matrixWorld).invert())}lookAt(A,e,t){A.isVector3?tG.copy(A):tG.set(A,e,t);let i=this.parent;this.updateWorldMatrix(!0,!1),tV.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?tk.lookAt(tV,tG,this.up):tk.lookAt(tG,tV,this.up),this.quaternion.setFromRotationMatrix(tk),i&&(tk.extractRotation(i.matrixWorld),tU.setFromRotationMatrix(tk),this.quaternion.premultiply(tU.invert()))}add(A){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return A===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",A),this):(A&&A.isObject3D?(null!==A.parent&&A.parent.remove(A),A.parent=this,this.children.push(A),A.dispatchEvent(tQ)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",A),this)}remove(A){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(A);return -1!==t&&(A.parent=null,this.children.splice(t,1),A.dispatchEvent(tq)),this}removeFromParent(){let A=this.parent;return null!==A&&A.remove(this),this}clear(){for(let A=0;A<this.children.length;A++){let e=this.children[A];e.parent=null,e.dispatchEvent(tq)}return this.children.length=0,this}attach(A){return this.updateWorldMatrix(!0,!1),tk.copy(this.matrixWorld).invert(),null!==A.parent&&(A.parent.updateWorldMatrix(!0,!1),tk.multiply(A.parent.matrixWorld)),A.applyMatrix4(tk),this.add(A),A.updateWorldMatrix(!1,!0),this}getObjectById(A){return this.getObjectByProperty("id",A)}getObjectByName(A){return this.getObjectByProperty("name",A)}getObjectByProperty(A,e){if(this[A]===e)return this;for(let t=0,i=this.children.length;t<i;t++){let r=this.children[t].getObjectByProperty(A,e);if(void 0!==r)return r}}getWorldPosition(A){return this.updateWorldMatrix(!0,!1),A.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(A){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(tV,A,tj),A}getWorldScale(A){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(tV,tH,A),A}getWorldDirection(A){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return A.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(A){A(this);let e=this.children;for(let t=0,i=e.length;t<i;t++)e[t].traverse(A)}traverseVisible(A){if(!1===this.visible)return;A(this);let e=this.children;for(let t=0,i=e.length;t<i;t++)e[t].traverseVisible(A)}traverseAncestors(A){let e=this.parent;null!==e&&(A(e),e.traverseAncestors(A))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(A){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||A)&&(null===this.parent?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,A=!0);let e=this.children;for(let t=0,i=e.length;t<i;t++)e[t].updateMatrixWorld(A)}updateWorldMatrix(A,e){let t=this.parent;if(!0===A&&null!==t&&t.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),null===this.parent?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),!0===e){let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(A){let e=void 0===A||"string"==typeof A,t={};e&&(A={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},t.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});let i={};function r(e,t){return void 0===e[t.uuid]&&(e[t.uuid]=t.toJSON(A)),t.uuid}if(i.uuid=this.uuid,i.type=this.type,""!==this.name&&(i.name=this.name),!0===this.castShadow&&(i.castShadow=!0),!0===this.receiveShadow&&(i.receiveShadow=!0),!1===this.visible&&(i.visible=!1),!1===this.frustumCulled&&(i.frustumCulled=!1),0!==this.renderOrder&&(i.renderOrder=this.renderOrder),"{}"!==JSON.stringify(this.userData)&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),!1===this.matrixAutoUpdate&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),null!==this.instanceColor&&(i.instanceColor=this.instanceColor.toJSON())),this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(A).uuid)),this.environment&&this.environment.isTexture&&(i.environment=this.environment.toJSON(A).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(A.geometries,this.geometry);let s=this.geometry.parameters;if(void 0!==s&&void 0!==s.shapes){let a=s.shapes;if(Array.isArray(a))for(let o=0,l=a.length;o<l;o++){let h=a[o];r(A.shapes,h)}else r(A.shapes,a)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),void 0!==this.skeleton&&(r(A.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),void 0!==this.material){if(Array.isArray(this.material)){let c=[];for(let d=0,u=this.material.length;d<u;d++)c.push(r(A.materials,this.material[d]));i.material=c}else i.material=r(A.materials,this.material)}if(this.children.length>0){i.children=[];for(let p=0;p<this.children.length;p++)i.children.push(this.children[p].toJSON(A).object)}if(this.animations.length>0){i.animations=[];for(let f=0;f<this.animations.length;f++){let m=this.animations[f];i.animations.push(r(A.animations,m))}}if(e){let g=E(A.geometries),v=E(A.materials),y=E(A.textures),x=E(A.images),b=E(A.shapes),w=E(A.skeletons),S=E(A.animations),M=E(A.nodes);g.length>0&&(t.geometries=g),v.length>0&&(t.materials=v),y.length>0&&(t.textures=y),x.length>0&&(t.images=x),b.length>0&&(t.shapes=b),w.length>0&&(t.skeletons=w),S.length>0&&(t.animations=S),M.length>0&&(t.nodes=M)}return t.object=i,t;function E(A){let e=[];for(let t in A){let i=A[t];delete i.metadata,e.push(i)}return e}}clone(A){return new this.constructor().copy(this,A)}copy(A,e=!0){if(this.name=A.name,this.up.copy(A.up),this.position.copy(A.position),this.rotation.order=A.rotation.order,this.quaternion.copy(A.quaternion),this.scale.copy(A.scale),this.matrix.copy(A.matrix),this.matrixWorld.copy(A.matrixWorld),this.matrixAutoUpdate=A.matrixAutoUpdate,this.matrixWorldNeedsUpdate=A.matrixWorldNeedsUpdate,this.layers.mask=A.layers.mask,this.visible=A.visible,this.castShadow=A.castShadow,this.receiveShadow=A.receiveShadow,this.frustumCulled=A.frustumCulled,this.renderOrder=A.renderOrder,this.userData=JSON.parse(JSON.stringify(A.userData)),!0===e)for(let t=0;t<A.children.length;t++){let i=A.children[t];this.add(i.clone())}return this}};tZ.DefaultUp=new e4(0,1,0),tZ.DefaultMatrixAutoUpdate=!0;var tK=new e4,tJ=new e4,t$=new e4,t0=new e4,t1=new e4,t2=new e4,t3=new e4,t4=new e4,t5=new e4,t6=new e4,t8=class{constructor(A=new e4,e=new e4,t=new e4){this.a=A,this.b=e,this.c=t}static getNormal(A,e,t,i){i.subVectors(t,e),tK.subVectors(A,e),i.cross(tK);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(A,e,t,i,r){tK.subVectors(i,e),tJ.subVectors(t,e),t$.subVectors(A,e);let s=tK.dot(tK),a=tK.dot(tJ),o=tK.dot(t$),l=tJ.dot(tJ),h=tJ.dot(t$),c=s*l-a*a;if(0===c)return r.set(-2,-1,-1);let d=1/c,u=(l*o-a*h)*d,p=(s*h-a*o)*d;return r.set(1-u-p,p,u)}static containsPoint(A,e,t,i){return this.getBarycoord(A,e,t,i,t0),t0.x>=0&&t0.y>=0&&t0.x+t0.y<=1}static getUV(A,e,t,i,r,s,a,o){return this.getBarycoord(A,e,t,i,t0),o.set(0,0),o.addScaledVector(r,t0.x),o.addScaledVector(s,t0.y),o.addScaledVector(a,t0.z),o}static isFrontFacing(A,e,t,i){return tK.subVectors(t,e),tJ.subVectors(A,e),0>tK.cross(tJ).dot(i)}set(A,e,t){return this.a.copy(A),this.b.copy(e),this.c.copy(t),this}setFromPointsAndIndices(A,e,t,i){return this.a.copy(A[e]),this.b.copy(A[t]),this.c.copy(A[i]),this}setFromAttributeAndIndices(A,e,t,i){return this.a.fromBufferAttribute(A,e),this.b.fromBufferAttribute(A,t),this.c.fromBufferAttribute(A,i),this}clone(){return new this.constructor().copy(this)}copy(A){return this.a.copy(A.a),this.b.copy(A.b),this.c.copy(A.c),this}getArea(){return tK.subVectors(this.c,this.b),tJ.subVectors(this.a,this.b),.5*tK.cross(tJ).length()}getMidpoint(A){return A.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(A){return t8.getNormal(this.a,this.b,this.c,A)}getPlane(A){return A.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(A,e){return t8.getBarycoord(A,this.a,this.b,this.c,e)}getUV(A,e,t,i,r){return t8.getUV(A,this.a,this.b,this.c,e,t,i,r)}containsPoint(A){return t8.containsPoint(A,this.a,this.b,this.c)}isFrontFacing(A){return t8.isFrontFacing(this.a,this.b,this.c,A)}intersectsBox(A){return A.intersectsTriangle(this)}closestPointToPoint(A,e){let t=this.a,i=this.b,r=this.c,s,a;t1.subVectors(i,t),t2.subVectors(r,t),t4.subVectors(A,t);let o=t1.dot(t4),l=t2.dot(t4);if(o<=0&&l<=0)return e.copy(t);t5.subVectors(A,i);let h=t1.dot(t5),c=t2.dot(t5);if(h>=0&&c<=h)return e.copy(i);let d=o*c-h*l;if(d<=0&&o>=0&&h<=0)return s=o/(o-h),e.copy(t).addScaledVector(t1,s);t6.subVectors(A,r);let u=t1.dot(t6),p=t2.dot(t6);if(p>=0&&u<=p)return e.copy(r);let f=u*l-o*p;if(f<=0&&l>=0&&p<=0)return a=l/(l-p),e.copy(t).addScaledVector(t2,a);let m=h*p-u*c;if(m<=0&&c-h>=0&&u-p>=0)return t3.subVectors(r,i),a=(c-h)/(c-h+(u-p)),e.copy(i).addScaledVector(t3,a);let g=1/(m+f+d);return s=f*g,a=d*g,e.copy(t).addScaledVector(t1,s).addScaledVector(t2,a)}equals(A){return A.a.equals(this.a)&&A.b.equals(this.b)&&A.c.equals(this.c)}},t9=0,t7=class extends ev{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:t9++}),this.uuid=eS(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(A){this._alphaTest>0!=A>0&&this.version++,this._alphaTest=A}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(A){if(void 0!==A)for(let e in A){let t=A[e];if(void 0===t){console.warn("THREE.Material: '"+e+"' parameter is undefined.");continue}if("shading"===e){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=1===t;continue}let i=this[e];if(void 0===i){console.warn("THREE."+this.type+": '"+e+"' is not a property of this material.");continue}i&&i.isColor?i.set(t):i&&i.isVector3&&t&&t.isVector3?i.copy(t):this[e]=t}}toJSON(A){let e=void 0===A||"string"==typeof A;e&&(A={textures:{},images:{}});let t={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};function i(A){let e=[];for(let t in A){let i=A[t];delete i.metadata,e.push(i)}return e}if(t.uuid=this.uuid,t.type=this.type,""!==this.name&&(t.name=this.name),this.color&&this.color.isColor&&(t.color=this.color.getHex()),void 0!==this.roughness&&(t.roughness=this.roughness),void 0!==this.metalness&&(t.metalness=this.metalness),void 0!==this.sheen&&(t.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(t.sheenColor=this.sheenColor.getHex()),void 0!==this.sheenRoughness&&(t.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(t.emissive=this.emissive.getHex()),this.emissiveIntensity&&1!==this.emissiveIntensity&&(t.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(t.specular=this.specular.getHex()),void 0!==this.specularIntensity&&(t.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(t.specularColor=this.specularColor.getHex()),void 0!==this.shininess&&(t.shininess=this.shininess),void 0!==this.clearcoat&&(t.clearcoat=this.clearcoat),void 0!==this.clearcoatRoughness&&(t.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(t.clearcoatMap=this.clearcoatMap.toJSON(A).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(t.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(A).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(t.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(A).uuid,t.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),void 0!==this.iridescence&&(t.iridescence=this.iridescence),void 0!==this.iridescenceIOR&&(t.iridescenceIOR=this.iridescenceIOR),void 0!==this.iridescenceThicknessRange&&(t.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(t.iridescenceMap=this.iridescenceMap.toJSON(A).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(t.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(A).uuid),this.map&&this.map.isTexture&&(t.map=this.map.toJSON(A).uuid),this.matcap&&this.matcap.isTexture&&(t.matcap=this.matcap.toJSON(A).uuid),this.alphaMap&&this.alphaMap.isTexture&&(t.alphaMap=this.alphaMap.toJSON(A).uuid),this.lightMap&&this.lightMap.isTexture&&(t.lightMap=this.lightMap.toJSON(A).uuid,t.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(t.aoMap=this.aoMap.toJSON(A).uuid,t.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(t.bumpMap=this.bumpMap.toJSON(A).uuid,t.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(t.normalMap=this.normalMap.toJSON(A).uuid,t.normalMapType=this.normalMapType,t.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(t.displacementMap=this.displacementMap.toJSON(A).uuid,t.displacementScale=this.displacementScale,t.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(t.roughnessMap=this.roughnessMap.toJSON(A).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(t.metalnessMap=this.metalnessMap.toJSON(A).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(t.emissiveMap=this.emissiveMap.toJSON(A).uuid),this.specularMap&&this.specularMap.isTexture&&(t.specularMap=this.specularMap.toJSON(A).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(t.specularIntensityMap=this.specularIntensityMap.toJSON(A).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(t.specularColorMap=this.specularColorMap.toJSON(A).uuid),this.envMap&&this.envMap.isTexture&&(t.envMap=this.envMap.toJSON(A).uuid,void 0!==this.combine&&(t.combine=this.combine)),void 0!==this.envMapIntensity&&(t.envMapIntensity=this.envMapIntensity),void 0!==this.reflectivity&&(t.reflectivity=this.reflectivity),void 0!==this.refractionRatio&&(t.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(t.gradientMap=this.gradientMap.toJSON(A).uuid),void 0!==this.transmission&&(t.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(t.transmissionMap=this.transmissionMap.toJSON(A).uuid),void 0!==this.thickness&&(t.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(t.thicknessMap=this.thicknessMap.toJSON(A).uuid),void 0!==this.attenuationDistance&&(t.attenuationDistance=this.attenuationDistance),void 0!==this.attenuationColor&&(t.attenuationColor=this.attenuationColor.getHex()),void 0!==this.size&&(t.size=this.size),null!==this.shadowSide&&(t.shadowSide=this.shadowSide),void 0!==this.sizeAttenuation&&(t.sizeAttenuation=this.sizeAttenuation),1!==this.blending&&(t.blending=this.blending),0!==this.side&&(t.side=this.side),this.vertexColors&&(t.vertexColors=!0),this.opacity<1&&(t.opacity=this.opacity),!0===this.transparent&&(t.transparent=this.transparent),t.depthFunc=this.depthFunc,t.depthTest=this.depthTest,t.depthWrite=this.depthWrite,t.colorWrite=this.colorWrite,t.stencilWrite=this.stencilWrite,t.stencilWriteMask=this.stencilWriteMask,t.stencilFunc=this.stencilFunc,t.stencilRef=this.stencilRef,t.stencilFuncMask=this.stencilFuncMask,t.stencilFail=this.stencilFail,t.stencilZFail=this.stencilZFail,t.stencilZPass=this.stencilZPass,void 0!==this.rotation&&0!==this.rotation&&(t.rotation=this.rotation),!0===this.polygonOffset&&(t.polygonOffset=!0),0!==this.polygonOffsetFactor&&(t.polygonOffsetFactor=this.polygonOffsetFactor),0!==this.polygonOffsetUnits&&(t.polygonOffsetUnits=this.polygonOffsetUnits),void 0!==this.linewidth&&1!==this.linewidth&&(t.linewidth=this.linewidth),void 0!==this.dashSize&&(t.dashSize=this.dashSize),void 0!==this.gapSize&&(t.gapSize=this.gapSize),void 0!==this.scale&&(t.scale=this.scale),!0===this.dithering&&(t.dithering=!0),this.alphaTest>0&&(t.alphaTest=this.alphaTest),!0===this.alphaToCoverage&&(t.alphaToCoverage=this.alphaToCoverage),!0===this.premultipliedAlpha&&(t.premultipliedAlpha=this.premultipliedAlpha),!0===this.wireframe&&(t.wireframe=this.wireframe),this.wireframeLinewidth>1&&(t.wireframeLinewidth=this.wireframeLinewidth),"round"!==this.wireframeLinecap&&(t.wireframeLinecap=this.wireframeLinecap),"round"!==this.wireframeLinejoin&&(t.wireframeLinejoin=this.wireframeLinejoin),!0===this.flatShading&&(t.flatShading=this.flatShading),!1===this.visible&&(t.visible=!1),!1===this.toneMapped&&(t.toneMapped=!1),!1===this.fog&&(t.fog=!1),"{}"!==JSON.stringify(this.userData)&&(t.userData=this.userData),e){let r=i(A.textures),s=i(A.images);r.length>0&&(t.textures=r),s.length>0&&(t.images=s)}return t}clone(){return new this.constructor().copy(this)}copy(A){this.name=A.name,this.blending=A.blending,this.side=A.side,this.vertexColors=A.vertexColors,this.opacity=A.opacity,this.transparent=A.transparent,this.blendSrc=A.blendSrc,this.blendDst=A.blendDst,this.blendEquation=A.blendEquation,this.blendSrcAlpha=A.blendSrcAlpha,this.blendDstAlpha=A.blendDstAlpha,this.blendEquationAlpha=A.blendEquationAlpha,this.depthFunc=A.depthFunc,this.depthTest=A.depthTest,this.depthWrite=A.depthWrite,this.stencilWriteMask=A.stencilWriteMask,this.stencilFunc=A.stencilFunc,this.stencilRef=A.stencilRef,this.stencilFuncMask=A.stencilFuncMask,this.stencilFail=A.stencilFail,this.stencilZFail=A.stencilZFail,this.stencilZPass=A.stencilZPass,this.stencilWrite=A.stencilWrite;let e=A.clippingPlanes,t=null;if(null!==e){let i=e.length;t=Array(i);for(let r=0;r!==i;++r)t[r]=e[r].clone()}return this.clippingPlanes=t,this.clipIntersection=A.clipIntersection,this.clipShadows=A.clipShadows,this.shadowSide=A.shadowSide,this.colorWrite=A.colorWrite,this.precision=A.precision,this.polygonOffset=A.polygonOffset,this.polygonOffsetFactor=A.polygonOffsetFactor,this.polygonOffsetUnits=A.polygonOffsetUnits,this.dithering=A.dithering,this.alphaTest=A.alphaTest,this.alphaToCoverage=A.alphaToCoverage,this.premultipliedAlpha=A.premultipliedAlpha,this.visible=A.visible,this.toneMapped=A.toneMapped,this.userData=JSON.parse(JSON.stringify(A.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(A){!0===A&&this.version++}},iA=class extends t7{constructor(A){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new eY(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(A)}copy(A){return super.copy(A),this.color.copy(A.color),this.map=A.map,this.lightMap=A.lightMap,this.lightMapIntensity=A.lightMapIntensity,this.aoMap=A.aoMap,this.aoMapIntensity=A.aoMapIntensity,this.specularMap=A.specularMap,this.alphaMap=A.alphaMap,this.envMap=A.envMap,this.combine=A.combine,this.reflectivity=A.reflectivity,this.refractionRatio=A.refractionRatio,this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this.wireframeLinecap=A.wireframeLinecap,this.wireframeLinejoin=A.wireframeLinejoin,this.fog=A.fog,this}},ie=new e4,it=new e_,ii=class{constructor(A,e,t){if(Array.isArray(A))throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=A,this.itemSize=e,this.count=void 0!==A?A.length/e:0,this.normalized=!0===t,this.usage=35044,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(A){!0===A&&this.version++}setUsage(A){return this.usage=A,this}copy(A){return this.name=A.name,this.array=new A.array.constructor(A.array),this.itemSize=A.itemSize,this.count=A.count,this.normalized=A.normalized,this.usage=A.usage,this}copyAt(A,e,t){A*=this.itemSize,t*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[A+i]=e.array[t+i];return this}copyArray(A){return this.array.set(A),this}copyColorsArray(A){let e=this.array,t=0;for(let i=0,r=A.length;i<r;i++){let s=A[i];void 0===s&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",i),s=new eY),e[t++]=s.r,e[t++]=s.g,e[t++]=s.b}return this}copyVector2sArray(A){let e=this.array,t=0;for(let i=0,r=A.length;i<r;i++){let s=A[i];void 0===s&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",i),s=new e_),e[t++]=s.x,e[t++]=s.y}return this}copyVector3sArray(A){let e=this.array,t=0;for(let i=0,r=A.length;i<r;i++){let s=A[i];void 0===s&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",i),s=new e4),e[t++]=s.x,e[t++]=s.y,e[t++]=s.z}return this}copyVector4sArray(A){let e=this.array,t=0;for(let i=0,r=A.length;i<r;i++){let s=A[i];void 0===s&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",i),s=new e$),e[t++]=s.x,e[t++]=s.y,e[t++]=s.z,e[t++]=s.w}return this}applyMatrix3(A){if(2===this.itemSize)for(let e=0,t=this.count;e<t;e++)it.fromBufferAttribute(this,e),it.applyMatrix3(A),this.setXY(e,it.x,it.y);else if(3===this.itemSize)for(let i=0,r=this.count;i<r;i++)ie.fromBufferAttribute(this,i),ie.applyMatrix3(A),this.setXYZ(i,ie.x,ie.y,ie.z);return this}applyMatrix4(A){for(let e=0,t=this.count;e<t;e++)ie.fromBufferAttribute(this,e),ie.applyMatrix4(A),this.setXYZ(e,ie.x,ie.y,ie.z);return this}applyNormalMatrix(A){for(let e=0,t=this.count;e<t;e++)ie.fromBufferAttribute(this,e),ie.applyNormalMatrix(A),this.setXYZ(e,ie.x,ie.y,ie.z);return this}transformDirection(A){for(let e=0,t=this.count;e<t;e++)ie.fromBufferAttribute(this,e),ie.transformDirection(A),this.setXYZ(e,ie.x,ie.y,ie.z);return this}set(A,e=0){return this.array.set(A,e),this}getX(A){return this.array[A*this.itemSize]}setX(A,e){return this.array[A*this.itemSize]=e,this}getY(A){return this.array[A*this.itemSize+1]}setY(A,e){return this.array[A*this.itemSize+1]=e,this}getZ(A){return this.array[A*this.itemSize+2]}setZ(A,e){return this.array[A*this.itemSize+2]=e,this}getW(A){return this.array[A*this.itemSize+3]}setW(A,e){return this.array[A*this.itemSize+3]=e,this}setXY(A,e,t){return A*=this.itemSize,this.array[A+0]=e,this.array[A+1]=t,this}setXYZ(A,e,t,i){return A*=this.itemSize,this.array[A+0]=e,this.array[A+1]=t,this.array[A+2]=i,this}setXYZW(A,e,t,i,r){return A*=this.itemSize,this.array[A+0]=e,this.array[A+1]=t,this.array[A+2]=i,this.array[A+3]=r,this}onUpload(A){return this.onUploadCallback=A,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let A={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return""!==this.name&&(A.name=this.name),35044!==this.usage&&(A.usage=this.usage),(0!==this.updateRange.offset||-1!==this.updateRange.count)&&(A.updateRange=this.updateRange),A}},ir=class extends ii{constructor(A,e,t){super(new Uint16Array(A),e,t)}},is=class extends ii{constructor(A,e,t){super(new Uint32Array(A),e,t)}},ia=class extends ii{constructor(A,e,t){super(new Uint16Array(A),e,t),this.isFloat16BufferAttribute=!0}},io=class extends ii{constructor(A,e,t){super(new Float32Array(A),e,t)}},il=0,ih=new tE,ic=new tZ,id=new e4,iu=new e8,ip=new e8,im=new e4,ig=class extends ev{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:il++}),this.uuid=eS(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(A){return Array.isArray(A)?this.index=new(eO(A)?is:ir)(A,1):this.index=A,this}getAttribute(A){return this.attributes[A]}setAttribute(A,e){return this.attributes[A]=e,this}deleteAttribute(A){return delete this.attributes[A],this}hasAttribute(A){return void 0!==this.attributes[A]}addGroup(A,e,t=0){this.groups.push({start:A,count:e,materialIndex:t})}clearGroups(){this.groups=[]}setDrawRange(A,e){this.drawRange.start=A,this.drawRange.count=e}applyMatrix4(A){let e=this.attributes.position;void 0!==e&&(e.applyMatrix4(A),e.needsUpdate=!0);let t=this.attributes.normal;if(void 0!==t){let i=new eL().getNormalMatrix(A);t.applyNormalMatrix(i),t.needsUpdate=!0}let r=this.attributes.tangent;return void 0!==r&&(r.transformDirection(A),r.needsUpdate=!0),null!==this.boundingBox&&this.computeBoundingBox(),null!==this.boundingSphere&&this.computeBoundingSphere(),this}applyQuaternion(A){return ih.makeRotationFromQuaternion(A),this.applyMatrix4(ih),this}rotateX(A){return ih.makeRotationX(A),this.applyMatrix4(ih),this}rotateY(A){return ih.makeRotationY(A),this.applyMatrix4(ih),this}rotateZ(A){return ih.makeRotationZ(A),this.applyMatrix4(ih),this}translate(A,e,t){return ih.makeTranslation(A,e,t),this.applyMatrix4(ih),this}scale(A,e,t){return ih.makeScale(A,e,t),this.applyMatrix4(ih),this}lookAt(A){return ic.lookAt(A),ic.updateMatrix(),this.applyMatrix4(ic.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(id).negate(),this.translate(id.x,id.y,id.z),this}setFromPoints(A){let e=[];for(let t=0,i=A.length;t<i;t++){let r=A[t];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new io(e,3)),this}computeBoundingBox(){null===this.boundingBox&&(this.boundingBox=new e8);let A=this.attributes.position,e=this.morphAttributes.position;if(A&&A.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new e4(-1/0,-1/0,-1/0),new e4(1/0,1/0,1/0));return}if(void 0!==A){if(this.boundingBox.setFromBufferAttribute(A),e)for(let t=0,i=e.length;t<i;t++){let r=e[t];iu.setFromBufferAttribute(r),this.morphTargetsRelative?(im.addVectors(this.boundingBox.min,iu.min),this.boundingBox.expandByPoint(im),im.addVectors(this.boundingBox.max,iu.max),this.boundingBox.expandByPoint(im)):(this.boundingBox.expandByPoint(iu.min),this.boundingBox.expandByPoint(iu.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){null===this.boundingSphere&&(this.boundingSphere=new tm);let A=this.attributes.position,e=this.morphAttributes.position;if(A&&A.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new e4,1/0);return}if(A){let t=this.boundingSphere.center;if(iu.setFromBufferAttribute(A),e)for(let i=0,r=e.length;i<r;i++){let s=e[i];ip.setFromBufferAttribute(s),this.morphTargetsRelative?(im.addVectors(iu.min,ip.min),iu.expandByPoint(im),im.addVectors(iu.max,ip.max),iu.expandByPoint(im)):(iu.expandByPoint(ip.min),iu.expandByPoint(ip.max))}iu.getCenter(t);let a=0;for(let o=0,l=A.count;o<l;o++)im.fromBufferAttribute(A,o),a=Math.max(a,t.distanceToSquared(im));if(e)for(let h=0,c=e.length;h<c;h++){let d=e[h],u=this.morphTargetsRelative;for(let p=0,f=d.count;p<f;p++)im.fromBufferAttribute(d,p),u&&(id.fromBufferAttribute(A,p),im.add(id)),a=Math.max(a,t.distanceToSquared(im))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let A=this.index,e=this.attributes;if(null===A||void 0===e.position||void 0===e.normal||void 0===e.uv){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let t=A.array,i=e.position.array,r=e.normal.array,s=e.uv.array,a=i.length/3;!1===this.hasAttribute("tangent")&&this.setAttribute("tangent",new ii(new Float32Array(4*a),4));let o=this.getAttribute("tangent").array,l=[],h=[];for(let c=0;c<a;c++)l[c]=new e4,h[c]=new e4;let d=new e4,u=new e4,p=new e4,f=new e_,m=new e_,g=new e_,v=new e4,y=new e4,x=this.groups;0===x.length&&(x=[{start:0,count:t.length}]);for(let b=0,w=x.length;b<w;++b){let S=x[b],M=S.start,E=S.count;for(let T=M,C=M+E;T<C;T+=3)!function(A,e,t){d.fromArray(i,3*A),u.fromArray(i,3*e),p.fromArray(i,3*t),f.fromArray(s,2*A),m.fromArray(s,2*e),g.fromArray(s,2*t),u.sub(d),p.sub(d),m.sub(f),g.sub(f);let r=1/(m.x*g.y-g.x*m.y);isFinite(r)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(p,-m.y).multiplyScalar(r),y.copy(p).multiplyScalar(m.x).addScaledVector(u,-g.x).multiplyScalar(r),l[A].add(v),l[e].add(v),l[t].add(v),h[A].add(y),h[e].add(y),h[t].add(y))}(t[T+0],t[T+1],t[T+2])}let D=new e4,P=new e4,_=new e4,L=new e4;function O(A){_.fromArray(r,3*A),L.copy(_);let e=l[A];D.copy(e),D.sub(_.multiplyScalar(_.dot(e))).normalize(),P.crossVectors(L,e);let t=0>P.dot(h[A])?-1:1;o[4*A]=D.x,o[4*A+1]=D.y,o[4*A+2]=D.z,o[4*A+3]=t}for(let B=0,I=x.length;B<I;++B){let R=x[B],N=R.start,z=R.count;for(let F=N,U=N+z;F<U;F+=3)O(t[F+0]),O(t[F+1]),O(t[F+2])}}computeVertexNormals(){let A=this.index,e=this.getAttribute("position");if(void 0!==e){let t=this.getAttribute("normal");if(void 0===t)t=new ii(new Float32Array(3*e.count),3),this.setAttribute("normal",t);else for(let i=0,r=t.count;i<r;i++)t.setXYZ(i,0,0,0);let s=new e4,a=new e4,o=new e4,l=new e4,h=new e4,c=new e4,d=new e4,u=new e4;if(A)for(let p=0,f=A.count;p<f;p+=3){let m=A.getX(p+0),g=A.getX(p+1),v=A.getX(p+2);s.fromBufferAttribute(e,m),a.fromBufferAttribute(e,g),o.fromBufferAttribute(e,v),d.subVectors(o,a),u.subVectors(s,a),d.cross(u),l.fromBufferAttribute(t,m),h.fromBufferAttribute(t,g),c.fromBufferAttribute(t,v),l.add(d),h.add(d),c.add(d),t.setXYZ(m,l.x,l.y,l.z),t.setXYZ(g,h.x,h.y,h.z),t.setXYZ(v,c.x,c.y,c.z)}else for(let y=0,x=e.count;y<x;y+=3)s.fromBufferAttribute(e,y+0),a.fromBufferAttribute(e,y+1),o.fromBufferAttribute(e,y+2),d.subVectors(o,a),u.subVectors(s,a),d.cross(u),t.setXYZ(y+0,d.x,d.y,d.z),t.setXYZ(y+1,d.x,d.y,d.z),t.setXYZ(y+2,d.x,d.y,d.z);this.normalizeNormals(),t.needsUpdate=!0}}merge(A,e){if(!(A&&A.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",A);return}void 0===e&&(e=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));let t=this.attributes;for(let i in t){if(void 0===A.attributes[i])continue;let r=t[i].array,s=A.attributes[i],a=s.array,o=s.itemSize*e,l=Math.min(a.length,r.length-o);for(let h=0,c=o;h<l;h++,c++)r[c]=a[h]}return this}normalizeNormals(){let A=this.attributes.normal;for(let e=0,t=A.count;e<t;e++)im.fromBufferAttribute(A,e),im.normalize(),A.setXYZ(e,im.x,im.y,im.z)}toNonIndexed(){function A(A,e){let t=A.array,i=A.itemSize,r=A.normalized,s=new t.constructor(e.length*i),a=0,o=0;for(let l=0,h=e.length;l<h;l++){a=A.isInterleavedBufferAttribute?e[l]*A.data.stride+A.offset:e[l]*i;for(let c=0;c<i;c++)s[o++]=t[a++]}return new ii(s,i,r)}if(null===this.index)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new ig,t=this.index.array,i=this.attributes;for(let r in i){let s=A(i[r],t);e.setAttribute(r,s)}let a=this.morphAttributes;for(let o in a){let l=[],h=a[o];for(let c=0,d=h.length;c<d;c++){let u=A(h[c],t);l.push(u)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let p=this.groups;for(let f=0,m=p.length;f<m;f++){let g=p[f];e.addGroup(g.start,g.count,g.materialIndex)}return e}toJSON(){let A={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(A.uuid=this.uuid,A.type=this.type,""!==this.name&&(A.name=this.name),Object.keys(this.userData).length>0&&(A.userData=this.userData),void 0!==this.parameters){let e=this.parameters;for(let t in e)void 0!==e[t]&&(A[t]=e[t]);return A}A.data={attributes:{}};let i=this.index;null!==i&&(A.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});let r=this.attributes;for(let s in r){let a=r[s];A.data.attributes[s]=a.toJSON(A.data)}let o={},l=!1;for(let h in this.morphAttributes){let c=this.morphAttributes[h],d=[];for(let u=0,p=c.length;u<p;u++){let f=c[u];d.push(f.toJSON(A.data))}d.length>0&&(o[h]=d,l=!0)}l&&(A.data.morphAttributes=o,A.data.morphTargetsRelative=this.morphTargetsRelative);let m=this.groups;m.length>0&&(A.data.groups=JSON.parse(JSON.stringify(m)));let g=this.boundingSphere;return null!==g&&(A.data.boundingSphere={center:g.center.toArray(),radius:g.radius}),A}clone(){return new this.constructor().copy(this)}copy(A){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=A.name;let t=A.index;null!==t&&this.setIndex(t.clone(e));let i=A.attributes;for(let r in i){let s=i[r];this.setAttribute(r,s.clone(e))}let a=A.morphAttributes;for(let o in a){let l=[],h=a[o];for(let c=0,d=h.length;c<d;c++)l.push(h[c].clone(e));this.morphAttributes[o]=l}this.morphTargetsRelative=A.morphTargetsRelative;let u=A.groups;for(let p=0,f=u.length;p<f;p++){let m=u[p];this.addGroup(m.start,m.count,m.materialIndex)}let g=A.boundingBox;null!==g&&(this.boundingBox=g.clone());let v=A.boundingSphere;return null!==v&&(this.boundingSphere=v.clone()),this.drawRange.start=A.drawRange.start,this.drawRange.count=A.drawRange.count,this.userData=A.userData,void 0!==A.parameters&&(this.parameters=Object.assign({},A.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}},iv=new tE,iy=new tM,ix=new tm,ib=new e4,iw=new e4,iS=new e4,iM=new e4,iE=new e4,iT=new e4,iC=new e4,iD=new e4,iP=new e4,i_=new e_,iL=new e_,iO=new e_,iB=new e4,iI=new e4,iR=class extends tZ{constructor(A=new ig,e=new iA){super(),this.isMesh=!0,this.type="Mesh",this.geometry=A,this.material=e,this.updateMorphTargets()}copy(A,e){return super.copy(A,e),void 0!==A.morphTargetInfluences&&(this.morphTargetInfluences=A.morphTargetInfluences.slice()),void 0!==A.morphTargetDictionary&&(this.morphTargetDictionary=Object.assign({},A.morphTargetDictionary)),this.material=A.material,this.geometry=A.geometry,this}updateMorphTargets(){let A=this.geometry.morphAttributes,e=Object.keys(A);if(e.length>0){let t=A[e[0]];if(void 0!==t){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,r=t.length;i<r;i++){let s=t[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=i}}}}raycast(A,e){let t=this.geometry,i=this.material,r=this.matrixWorld;if(void 0===i||(null===t.boundingSphere&&t.computeBoundingSphere(),ix.copy(t.boundingSphere),ix.applyMatrix4(r),!1===A.ray.intersectsSphere(ix))||(iv.copy(r).invert(),iy.copy(A.ray).applyMatrix4(iv),null!==t.boundingBox&&!1===iy.intersectsBox(t.boundingBox)))return;let s,a=t.index,o=t.attributes.position,l=t.morphAttributes.position,h=t.morphTargetsRelative,c=t.attributes.uv,d=t.attributes.uv2,u=t.groups,p=t.drawRange;if(null!==a){if(Array.isArray(i))for(let f=0,m=u.length;f<m;f++){let g=u[f],v=i[g.materialIndex],y=Math.max(g.start,p.start),x=Math.min(a.count,Math.min(g.start+g.count,p.start+p.count));for(let b=y;b<x;b+=3)(s=iN(this,v,A,iy,o,l,h,c,d,a.getX(b),a.getX(b+1),a.getX(b+2)))&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=g.materialIndex,e.push(s))}else{let w=Math.max(0,p.start),S=Math.min(a.count,p.start+p.count);for(let M=w;M<S;M+=3)(s=iN(this,i,A,iy,o,l,h,c,d,a.getX(M),a.getX(M+1),a.getX(M+2)))&&(s.faceIndex=Math.floor(M/3),e.push(s))}}else if(void 0!==o){if(Array.isArray(i))for(let E=0,T=u.length;E<T;E++){let C=u[E],D=i[C.materialIndex],P=Math.max(C.start,p.start),_=Math.min(o.count,Math.min(C.start+C.count,p.start+p.count));for(let L=P;L<_;L+=3)(s=iN(this,D,A,iy,o,l,h,c,d,L,L+1,L+2))&&(s.faceIndex=Math.floor(L/3),s.face.materialIndex=C.materialIndex,e.push(s))}else{let O=Math.max(0,p.start),B=Math.min(o.count,p.start+p.count);for(let I=O;I<B;I+=3)(s=iN(this,i,A,iy,o,l,h,c,d,I,I+1,I+2))&&(s.faceIndex=Math.floor(I/3),e.push(s))}}}};function iN(A,e,t,i,r,s,a,o,l,h,c,d){ib.fromBufferAttribute(r,h),iw.fromBufferAttribute(r,c),iS.fromBufferAttribute(r,d);let u=A.morphTargetInfluences;if(s&&u){iC.set(0,0,0),iD.set(0,0,0),iP.set(0,0,0);for(let p=0,f=s.length;p<f;p++){let m=u[p],g=s[p];0!==m&&(iM.fromBufferAttribute(g,h),iE.fromBufferAttribute(g,c),iT.fromBufferAttribute(g,d),a?(iC.addScaledVector(iM,m),iD.addScaledVector(iE,m),iP.addScaledVector(iT,m)):(iC.addScaledVector(iM.sub(ib),m),iD.addScaledVector(iE.sub(iw),m),iP.addScaledVector(iT.sub(iS),m)))}ib.add(iC),iw.add(iD),iS.add(iP)}A.isSkinnedMesh&&(A.boneTransform(h,ib),A.boneTransform(c,iw),A.boneTransform(d,iS));let v=function(A,e,t,i,r,s,a,o){if(null===(1===e.side?i.intersectTriangle(a,s,r,!0,o):i.intersectTriangle(r,s,a,2!==e.side,o)))return null;iI.copy(o),iI.applyMatrix4(A.matrixWorld);let l=t.ray.origin.distanceTo(iI);return l<t.near||l>t.far?null:{distance:l,point:iI.clone(),object:A}}(A,e,t,i,ib,iw,iS,iB);if(v){o&&(i_.fromBufferAttribute(o,h),iL.fromBufferAttribute(o,c),iO.fromBufferAttribute(o,d),v.uv=t8.getUV(iB,ib,iw,iS,i_,iL,iO,new e_)),l&&(i_.fromBufferAttribute(l,h),iL.fromBufferAttribute(l,c),iO.fromBufferAttribute(l,d),v.uv2=t8.getUV(iB,ib,iw,iS,i_,iL,iO,new e_));let y={a:h,b:c,c:d,normal:new e4,materialIndex:0};t8.getNormal(ib,iw,iS,y.normal),v.face=y}return v}var iz=class extends ig{constructor(A=1,e=1,t=1,i=1,r=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:A,height:e,depth:t,widthSegments:i,heightSegments:r,depthSegments:s};let a=this;i=Math.floor(i),r=Math.floor(r);let o=[],l=[],h=[],c=[],d=0,u=0;function p(A,e,t,i,r,s,p,f,m,g,v){let y=s/m,x=p/g,b=s/2,w=p/2,S=f/2,M=m+1,E=g+1,T=0,C=0,D=new e4;for(let P=0;P<E;P++){let _=P*x-w;for(let L=0;L<M;L++){let O=L*y-b;D[A]=O*i,D[e]=_*r,D[t]=S,l.push(D.x,D.y,D.z),D[A]=0,D[e]=0,D[t]=f>0?1:-1,h.push(D.x,D.y,D.z),c.push(L/m),c.push(1-P/g),T+=1}}for(let B=0;B<g;B++)for(let I=0;I<m;I++){let R=d+I+M*B,N=d+I+M*(B+1),z=d+(I+1)+M*(B+1),F=d+(I+1)+M*B;o.push(R,N,F),o.push(N,z,F),C+=6}a.addGroup(u,C,v),u+=C,d+=T}p("z","y","x",-1,-1,t,e,A,s=Math.floor(s),r,0),p("z","y","x",1,-1,t,e,-A,s,r,1),p("x","z","y",1,1,A,t,e,i,s,2),p("x","z","y",1,-1,A,t,-e,i,s,3),p("x","y","z",1,-1,A,e,t,i,r,4),p("x","y","z",-1,-1,A,e,-t,i,r,5),this.setIndex(o),this.setAttribute("position",new io(l,3)),this.setAttribute("normal",new io(h,3)),this.setAttribute("uv",new io(c,2))}static fromJSON(A){return new iz(A.width,A.height,A.depth,A.widthSegments,A.heightSegments,A.depthSegments)}};function iF(A){let e={};for(let t in A)for(let i in e[t]={},A[t]){let r=A[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}return e}function iU(A){let e={};for(let t=0;t<A.length;t++){let i=iF(A[t]);for(let r in i)e[r]=i[r]}return e}var ik={clone:iF,merge:iU},iG=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,iV=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ij=class extends t7{constructor(A){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=iG,this.fragmentShader=iV,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,void 0!==A&&(void 0!==A.attributes&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(A))}copy(A){return super.copy(A),this.fragmentShader=A.fragmentShader,this.vertexShader=A.vertexShader,this.uniforms=iF(A.uniforms),this.defines=Object.assign({},A.defines),this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this.fog=A.fog,this.lights=A.lights,this.clipping=A.clipping,this.extensions=Object.assign({},A.extensions),this.glslVersion=A.glslVersion,this}toJSON(A){let e=super.toJSON(A);for(let t in e.glslVersion=this.glslVersion,e.uniforms={},this.uniforms){let i=this.uniforms[t].value;i&&i.isTexture?e.uniforms[t]={type:"t",value:i.toJSON(A).uuid}:i&&i.isColor?e.uniforms[t]={type:"c",value:i.getHex()}:i&&i.isVector2?e.uniforms[t]={type:"v2",value:i.toArray()}:i&&i.isVector3?e.uniforms[t]={type:"v3",value:i.toArray()}:i&&i.isVector4?e.uniforms[t]={type:"v4",value:i.toArray()}:i&&i.isMatrix3?e.uniforms[t]={type:"m3",value:i.toArray()}:i&&i.isMatrix4?e.uniforms[t]={type:"m4",value:i.toArray()}:e.uniforms[t]={value:i}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader;let r={};for(let s in this.extensions)!0===this.extensions[s]&&(r[s]=!0);return Object.keys(r).length>0&&(e.extensions=r),e}},iH=class extends tZ{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tE,this.projectionMatrix=new tE,this.projectionMatrixInverse=new tE}copy(A,e){return super.copy(A,e),this.matrixWorldInverse.copy(A.matrixWorldInverse),this.projectionMatrix.copy(A.projectionMatrix),this.projectionMatrixInverse.copy(A.projectionMatrixInverse),this}getWorldDirection(A){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return A.set(-e[8],-e[9],-e[10]).normalize()}updateMatrixWorld(A){super.updateMatrixWorld(A),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(A,e){super.updateWorldMatrix(A,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},iW=class extends iH{constructor(A=50,e=1,t=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=A,this.zoom=1,this.near=t,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(A,e){return super.copy(A,e),this.fov=A.fov,this.zoom=A.zoom,this.near=A.near,this.far=A.far,this.focus=A.focus,this.aspect=A.aspect,this.view=null===A.view?null:Object.assign({},A.view),this.filmGauge=A.filmGauge,this.filmOffset=A.filmOffset,this}setFocalLength(A){let e=.5*this.getFilmHeight()/A;this.fov=2*ew*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let A=Math.tan(.5*eb*this.fov);return .5*this.getFilmHeight()/A}getEffectiveFOV(){return 2*ew*Math.atan(Math.tan(.5*eb*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(A,e,t,i,r,s){this.aspect=A/e,null===this.view&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=A,this.view.fullHeight=e,this.view.offsetX=t,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){null!==this.view&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let A=this.near,e=A*Math.tan(.5*eb*this.fov)/this.zoom,t=2*e,i=this.aspect*t,r=-.5*i,s=this.view;if(null!==this.view&&this.view.enabled){let a=s.fullWidth,o=s.fullHeight;r+=s.offsetX*i/a,e-=s.offsetY*t/o,i*=s.width/a,t*=s.height/o}let l=this.filmOffset;0!==l&&(r+=A*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-t,A,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(A){let e=super.toJSON(A);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,null!==this.view&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},iY=class extends tZ{constructor(A,e,t){if(super(),this.type="CubeCamera",!0!==t.isWebGLCubeRenderTarget){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=t;let i=new iW(90,1,A,e);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new e4(1,0,0)),this.add(i);let r=new iW(90,1,A,e);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new e4(-1,0,0)),this.add(r);let s=new iW(90,1,A,e);s.layers=this.layers,s.up.set(0,0,1),s.lookAt(new e4(0,1,0)),this.add(s);let a=new iW(90,1,A,e);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new e4(0,-1,0)),this.add(a);let o=new iW(90,1,A,e);o.layers=this.layers,o.up.set(0,-1,0),o.lookAt(new e4(0,0,1)),this.add(o);let l=new iW(90,1,A,e);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new e4(0,0,-1)),this.add(l)}update(A,e){null===this.parent&&this.updateMatrixWorld();let t=this.renderTarget,[i,r,s,a,o,l]=this.children,h=A.getRenderTarget(),c=A.toneMapping,d=A.xr.enabled;A.toneMapping=0,A.xr.enabled=!1;let u=t.texture.generateMipmaps;t.texture.generateMipmaps=!1,A.setRenderTarget(t,0),A.render(e,i),A.setRenderTarget(t,1),A.render(e,r),A.setRenderTarget(t,2),A.render(e,s),A.setRenderTarget(t,3),A.render(e,a),A.setRenderTarget(t,4),A.render(e,o),t.texture.generateMipmaps=u,A.setRenderTarget(t,5),A.render(e,l),A.setRenderTarget(h),A.toneMapping=c,A.xr.enabled=d,t.texture.needsPMREMUpdate=!0}},iX=class extends eJ{constructor(A,e,t,i,r,s,a,o,l,h){super(A=void 0!==A?A:[],e=void 0!==e?e:301,t,i,r,s,a,o,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(A){this.image=A}},iQ=class extends e0{constructor(A,e={}){super(A,A,e),this.isWebGLCubeRenderTarget=!0;let t={width:A,height:A,depth:1};this.texture=new iX([t,t,t,t,t,t],e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=void 0!==e.generateMipmaps&&e.generateMipmaps,this.texture.minFilter=void 0!==e.minFilter?e.minFilter:1006}fromEquirectangularTexture(A,e){this.texture.type=e.type,this.texture.encoding=e.encoding,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let t={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new iz(5,5,5),r=new ij({name:"CubemapFromEquirect",uniforms:iF(t.uniforms),vertexShader:t.vertexShader,fragmentShader:t.fragmentShader,side:1,blending:0});r.uniforms.tEquirect.value=e;let s=new iR(i,r),a=e.minFilter;return 1008===e.minFilter&&(e.minFilter=1006),new iY(1,10,this).update(A,s),e.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(A,e,t,i){let r=A.getRenderTarget();for(let s=0;s<6;s++)A.setRenderTarget(this,s),A.clear(e,t,i);A.setRenderTarget(r)}},iq=new e4,iZ=new e4,iK=new eL,iJ=class{constructor(A=new e4(1,0,0),e=0){this.isPlane=!0,this.normal=A,this.constant=e}set(A,e){return this.normal.copy(A),this.constant=e,this}setComponents(A,e,t,i){return this.normal.set(A,e,t),this.constant=i,this}setFromNormalAndCoplanarPoint(A,e){return this.normal.copy(A),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(A,e,t){let i=iq.subVectors(t,e).cross(iZ.subVectors(A,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,A),this}copy(A){return this.normal.copy(A.normal),this.constant=A.constant,this}normalize(){let A=1/this.normal.length();return this.normal.multiplyScalar(A),this.constant*=A,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(A){return this.normal.dot(A)+this.constant}distanceToSphere(A){return this.distanceToPoint(A.center)-A.radius}projectPoint(A,e){return e.copy(this.normal).multiplyScalar(-this.distanceToPoint(A)).add(A)}intersectLine(A,e){let t=A.delta(iq),i=this.normal.dot(t);if(0===i)return 0===this.distanceToPoint(A.start)?e.copy(A.start):null;let r=-(A.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t).multiplyScalar(r).add(A.start)}intersectsLine(A){let e=this.distanceToPoint(A.start),t=this.distanceToPoint(A.end);return e<0&&t>0||t<0&&e>0}intersectsBox(A){return A.intersectsPlane(this)}intersectsSphere(A){return A.intersectsPlane(this)}coplanarPoint(A){return A.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(A,e){let t=e||iK.getNormalMatrix(A),i=this.coplanarPoint(iq).applyMatrix4(A),r=this.normal.applyMatrix3(t).normalize();return this.constant=-i.dot(r),this}translate(A){return this.constant-=A.dot(this.normal),this}equals(A){return A.normal.equals(this.normal)&&A.constant===this.constant}clone(){return new this.constructor().copy(this)}},i$=new tm,i0=new e4,i1=class{constructor(A=new iJ,e=new iJ,t=new iJ,i=new iJ,r=new iJ,s=new iJ){this.planes=[A,e,t,i,r,s]}set(A,e,t,i,r,s){let a=this.planes;return a[0].copy(A),a[1].copy(e),a[2].copy(t),a[3].copy(i),a[4].copy(r),a[5].copy(s),this}copy(A){let e=this.planes;for(let t=0;t<6;t++)e[t].copy(A.planes[t]);return this}setFromProjectionMatrix(A){let e=this.planes,t=A.elements,i=t[0],r=t[1],s=t[2],a=t[3],o=t[4],l=t[5],h=t[6],c=t[7],d=t[8],u=t[9],p=t[10],f=t[11],m=t[12],g=t[13],v=t[14],y=t[15];return e[0].setComponents(a-i,c-o,f-d,y-m).normalize(),e[1].setComponents(a+i,c+o,f+d,y+m).normalize(),e[2].setComponents(a+r,c+l,f+u,y+g).normalize(),e[3].setComponents(a-r,c-l,f-u,y-g).normalize(),e[4].setComponents(a-s,c-h,f-p,y-v).normalize(),e[5].setComponents(a+s,c+h,f+p,y+v).normalize(),this}intersectsObject(A){let e=A.geometry;return null===e.boundingSphere&&e.computeBoundingSphere(),i$.copy(e.boundingSphere).applyMatrix4(A.matrixWorld),this.intersectsSphere(i$)}intersectsSprite(A){return i$.center.set(0,0,0),i$.radius=.7071067811865476,i$.applyMatrix4(A.matrixWorld),this.intersectsSphere(i$)}intersectsSphere(A){let e=this.planes,t=A.center,i=-A.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(t)<i)return!1;return!0}intersectsBox(A){let e=this.planes;for(let t=0;t<6;t++){let i=e[t];if(i0.x=i.normal.x>0?A.max.x:A.min.x,i0.y=i.normal.y>0?A.max.y:A.min.y,i0.z=i.normal.z>0?A.max.z:A.min.z,0>i.distanceToPoint(i0))return!1}return!0}containsPoint(A){let e=this.planes;for(let t=0;t<6;t++)if(0>e[t].distanceToPoint(A))return!1;return!0}clone(){return new this.constructor().copy(this)}};function i2(){let A=null,e=!1,t=null,i=null;function r(e,s){t(e,s),i=A.requestAnimationFrame(r)}return{start:function(){!0!==e&&null!==t&&(i=A.requestAnimationFrame(r),e=!0)},stop:function(){A.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(A){t=A},setContext:function(e){A=e}}}function i3(A,e){let t=e.isWebGL2,i=new WeakMap;return{get:function(A){return A.isInterleavedBufferAttribute&&(A=A.data),i.get(A)},remove:function(e){e.isInterleavedBufferAttribute&&(e=e.data);let t=i.get(e);t&&(A.deleteBuffer(t.buffer),i.delete(e))},update:function(e,r){var s,a;let o,l;if(e.isGLBufferAttribute){let h=i.get(e);(!h||h.version<e.version)&&i.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}e.isInterleavedBufferAttribute&&(e=e.data);let c=i.get(e);void 0===c?i.set(e,function(e,i){let r,s=e.array,a=e.usage,o=A.createBuffer();if(A.bindBuffer(i,o),A.bufferData(i,s,a),e.onUploadCallback(),s instanceof Float32Array)r=5126;else if(s instanceof Uint16Array){if(e.isFloat16BufferAttribute){if(t)r=5131;else throw Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.")}else r=5123}else if(s instanceof Int16Array)r=5122;else if(s instanceof Uint32Array)r=5125;else if(s instanceof Int32Array)r=5124;else if(s instanceof Int8Array)r=5120;else if(s instanceof Uint8Array)r=5121;else if(s instanceof Uint8ClampedArray)r=5121;else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: "+s);return{buffer:o,type:r,bytesPerElement:s.BYTES_PER_ELEMENT,version:e.version}}(e,r)):c.version<e.version&&(s=c.buffer,o=(a=e).array,l=a.updateRange,A.bindBuffer(r,s),-1===l.count?A.bufferSubData(r,0,o):(t?A.bufferSubData(r,l.offset*o.BYTES_PER_ELEMENT,o,l.offset,l.count):A.bufferSubData(r,l.offset*o.BYTES_PER_ELEMENT,o.subarray(l.offset,l.offset+l.count)),l.count=-1),c.version=e.version)}}}var i4=class extends ig{constructor(A=1,e=1,t=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:A,height:e,widthSegments:t,heightSegments:i};let r=A/2,s=e/2,a=Math.floor(t),o=Math.floor(i),l=a+1,h=o+1,c=A/a,d=e/o,u=[],p=[],f=[],m=[];for(let g=0;g<h;g++){let v=g*d-s;for(let y=0;y<l;y++){let x=y*c-r;p.push(x,-v,0),f.push(0,0,1),m.push(y/a),m.push(1-g/o)}}for(let b=0;b<o;b++)for(let w=0;w<a;w++){let S=w+l*b,M=w+l*(b+1),E=w+1+l*(b+1),T=w+1+l*b;u.push(S,M,T),u.push(M,E,T)}this.setIndex(u),this.setAttribute("position",new io(p,3)),this.setAttribute("normal",new io(f,3)),this.setAttribute("uv",new io(m,2))}static fromJSON(A){return new i4(A.width,A.height,A.widthSegments,A.heightSegments)}},i5={alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,begin_vertex:"vec3 transformed = vec3( position );",beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = mix(F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence);
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
const mat3 XYZ_TO_REC709 = mat3(
    3.2404542, -0.9692660,  0.0556434,
   -1.5371385,  1.8760108, -0.2040259,
   -0.4985314,  0.0415560,  1.0572252
);
vec3 Fresnel0ToIor( vec3 fresnel0 ) {
   vec3 sqrtF0 = sqrt( fresnel0 );
   return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
}
vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
   return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
}
float IorToFresnel0( float transmittedIor, float incidentIor ) {
   return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
}
vec3 evalSensitivity( float OPD, vec3 shift ) {
   float phase = 2.0 * PI * OPD * 1.0e-9;
   vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
   vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
   vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
   vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( -pow2( phase ) * var );
   xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[0] ) * exp( -4.5282e+09 * pow2( phase ) );
   xyz /= 1.0685e-7;
   vec3 srgb = XYZ_TO_REC709 * xyz;
   return srgb;
}
vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
   vec3 I;
   float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
   float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
   float cosTheta2Sq = 1.0 - sinTheta2Sq;
   if ( cosTheta2Sq < 0.0 ) {
       return vec3( 1.0 );
   }
   float cosTheta2 = sqrt( cosTheta2Sq );
   float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
   float R12 = F_Schlick( R0, 1.0, cosTheta1 );
   float R21 = R12;
   float T121 = 1.0 - R12;
   float phi12 = 0.0;
   if ( iridescenceIOR < outsideIOR ) phi12 = PI;
   float phi21 = PI - phi12;
   vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );   vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
   vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
   vec3 phi23 = vec3( 0.0 );
   if ( baseIOR[0] < iridescenceIOR ) phi23[0] = PI;
   if ( baseIOR[1] < iridescenceIOR ) phi23[1] = PI;
   if ( baseIOR[2] < iridescenceIOR ) phi23[2] = PI;
   float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
   vec3 phi = vec3( phi21 ) + phi23;
   vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
   vec3 r123 = sqrt( R123 );
   vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
   vec3 C0 = R12 + Rs;
   I = C0;
   vec3 Cm = Rs - T121;
   for ( int m = 1; m <= 2; ++m ) {
       Cm *= r123;
       vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
       I += Cm * Sm;
   }
   return max( I, vec3( 0.0 ) );
}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,encodings_fragment:"gl_FragColor = linearToOutputTexel( gl_FragColor );",encodings_pars_fragment:`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,lightmap_fragment:`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_vertex:`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointLightInfo( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotLightInfo( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );
		#endif
	}
	#pragma unroll_loop_end
#endif`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,lights_physical_pars_fragment:`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
float dotNVi = saturate( dot( normal, geometry.viewDir ) );
if ( material.iridescenceThickness == 0.0 ) {
	material.iridescence = 0.0;
} else {
	material.iridescence = saturate( material.iridescence );
}
if ( material.iridescence > 0.0 ) {
	material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
	material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,normal_fragment_maps:`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,output_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,shadowmap_pars_vertex:`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	float transmissionAlpha = 1.0;
	float transmissionFactor = transmission;
	float thicknessFactor = thickness;
	#ifdef USE_TRANSMISSIONMAP
		transmissionFactor *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		thicknessFactor *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationColor, attenuationDistance );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );
	transmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,uv_pars_fragment:`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,uv_pars_vertex:`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,uv_vertex:`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,uv2_pars_fragment:`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,uv2_pars_vertex:`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,uv2_vertex:`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,depth_vert:`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,distanceRGBA_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distanceRGBA_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`},i6={common:{diffuse:{value:new eY(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new eL},uv2Transform:{value:new eL},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new e_(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new eY(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new eY(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new eL}},sprite:{diffuse:{value:new eY(16777215)},opacity:{value:1},center:{value:new e_(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new eL}}},i8={basic:{uniforms:iU([i6.common,i6.specularmap,i6.envmap,i6.aomap,i6.lightmap,i6.fog]),vertexShader:i5.meshbasic_vert,fragmentShader:i5.meshbasic_frag},lambert:{uniforms:iU([i6.common,i6.specularmap,i6.envmap,i6.aomap,i6.lightmap,i6.emissivemap,i6.fog,i6.lights,{emissive:{value:new eY(0)}}]),vertexShader:i5.meshlambert_vert,fragmentShader:i5.meshlambert_frag},phong:{uniforms:iU([i6.common,i6.specularmap,i6.envmap,i6.aomap,i6.lightmap,i6.emissivemap,i6.bumpmap,i6.normalmap,i6.displacementmap,i6.fog,i6.lights,{emissive:{value:new eY(0)},specular:{value:new eY(1118481)},shininess:{value:30}}]),vertexShader:i5.meshphong_vert,fragmentShader:i5.meshphong_frag},standard:{uniforms:iU([i6.common,i6.envmap,i6.aomap,i6.lightmap,i6.emissivemap,i6.bumpmap,i6.normalmap,i6.displacementmap,i6.roughnessmap,i6.metalnessmap,i6.fog,i6.lights,{emissive:{value:new eY(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:i5.meshphysical_vert,fragmentShader:i5.meshphysical_frag},toon:{uniforms:iU([i6.common,i6.aomap,i6.lightmap,i6.emissivemap,i6.bumpmap,i6.normalmap,i6.displacementmap,i6.gradientmap,i6.fog,i6.lights,{emissive:{value:new eY(0)}}]),vertexShader:i5.meshtoon_vert,fragmentShader:i5.meshtoon_frag},matcap:{uniforms:iU([i6.common,i6.bumpmap,i6.normalmap,i6.displacementmap,i6.fog,{matcap:{value:null}}]),vertexShader:i5.meshmatcap_vert,fragmentShader:i5.meshmatcap_frag},points:{uniforms:iU([i6.points,i6.fog]),vertexShader:i5.points_vert,fragmentShader:i5.points_frag},dashed:{uniforms:iU([i6.common,i6.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:i5.linedashed_vert,fragmentShader:i5.linedashed_frag},depth:{uniforms:iU([i6.common,i6.displacementmap]),vertexShader:i5.depth_vert,fragmentShader:i5.depth_frag},normal:{uniforms:iU([i6.common,i6.bumpmap,i6.normalmap,i6.displacementmap,{opacity:{value:1}}]),vertexShader:i5.meshnormal_vert,fragmentShader:i5.meshnormal_frag},sprite:{uniforms:iU([i6.sprite,i6.fog]),vertexShader:i5.sprite_vert,fragmentShader:i5.sprite_frag},background:{uniforms:{uvTransform:{value:new eL},t2D:{value:null}},vertexShader:i5.background_vert,fragmentShader:i5.background_frag},cube:{uniforms:iU([i6.envmap,{opacity:{value:1}}]),vertexShader:i5.cube_vert,fragmentShader:i5.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:i5.equirect_vert,fragmentShader:i5.equirect_frag},distanceRGBA:{uniforms:iU([i6.common,i6.displacementmap,{referencePosition:{value:new e4},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:i5.distanceRGBA_vert,fragmentShader:i5.distanceRGBA_frag},shadow:{uniforms:iU([i6.lights,i6.fog,{color:{value:new eY(0)},opacity:{value:1}}]),vertexShader:i5.shadow_vert,fragmentShader:i5.shadow_frag}};function i9(A,e,t,i,r,s){let a=new eY(0),o=!0===r?0:1,l,h,c=null,d=0,u=null;function p(A,e){t.buffers.color.setClear(A.r,A.g,A.b,e,s)}return{getClearColor:function(){return a},setClearColor:function(A,e=1){a.set(A),p(a,o=e)},getClearAlpha:function(){return o},setClearAlpha:function(A){p(a,o=A)},render:function(t,r){let s=!1,f=!0===r.isScene?r.background:null;f&&f.isTexture&&(f=e.get(f));let m=A.xr,g=m.getSession&&m.getSession();g&&"additive"===g.environmentBlendMode&&(f=null),null===f?p(a,o):f&&f.isColor&&(p(f,1),s=!0),(A.autoClear||s)&&A.clear(A.autoClearColor,A.autoClearDepth,A.autoClearStencil),f&&(f.isCubeTexture||306===f.mapping)?(void 0===h&&((h=new iR(new iz(1,1,1),new ij({name:"BackgroundCubeMaterial",uniforms:iF(i8.cube.uniforms),vertexShader:i8.cube.vertexShader,fragmentShader:i8.cube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1}))).geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,e,t){this.matrixWorld.copyPosition(t.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=f,h.material.uniforms.flipEnvMap.value=f.isCubeTexture&&!1===f.isRenderTargetTexture?-1:1,(c!==f||d!==f.version||u!==A.toneMapping)&&(h.material.needsUpdate=!0,c=f,d=f.version,u=A.toneMapping),h.layers.enableAll(),t.unshift(h,h.geometry,h.material,0,0,null)):f&&f.isTexture&&(void 0===l&&((l=new iR(new i4(2,2),new ij({name:"BackgroundMaterial",uniforms:iF(i8.background.uniforms),vertexShader:i8.background.vertexShader,fragmentShader:i8.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1}))).geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=f,!0===f.matrixAutoUpdate&&f.updateMatrix(),l.material.uniforms.uvTransform.value.copy(f.matrix),(c!==f||d!==f.version||u!==A.toneMapping)&&(l.material.needsUpdate=!0,c=f,d=f.version,u=A.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null))}}}function i7(A,e,t,i){let r=A.getParameter(34921),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||null!==s,o={},l=p(null),h=l,c=!1;function d(e){return i.isWebGL2?A.bindVertexArray(e):s.bindVertexArrayOES(e)}function u(e){return i.isWebGL2?A.deleteVertexArray(e):s.deleteVertexArrayOES(e)}function p(A){let e=[],t=[],i=[];for(let s=0;s<r;s++)e[s]=0,t[s]=0,i[s]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:e,enabledAttributes:t,attributeDivisors:i,object:A,attributes:{},index:null}}function f(){let A=h.newAttributes;for(let e=0,t=A.length;e<t;e++)A[e]=0}function m(A){g(A,0)}function g(t,r){let s=h.newAttributes,a=h.enabledAttributes,o=h.attributeDivisors;s[t]=1,0===a[t]&&(A.enableVertexAttribArray(t),a[t]=1),o[t]!==r&&((i.isWebGL2?A:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](t,r),o[t]=r)}function v(){let e=h.newAttributes,t=h.enabledAttributes;for(let i=0,r=t.length;i<r;i++)t[i]!==e[i]&&(A.disableVertexAttribArray(i),t[i]=0)}function y(e,t,r,s,a,o){!0===i.isWebGL2&&(5124===r||5125===r)?A.vertexAttribIPointer(e,t,r,a,o):A.vertexAttribPointer(e,t,r,s,a,o)}function x(){b(),c=!0,h!==l&&d((h=l).object)}function b(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:function(r,l,u,x,b){let w=!1;if(a){var S,M;let E,T,C,D;let P=(S=x,M=u,E=!0===l.wireframe,void 0===(T=o[S.id])&&(T={},o[S.id]=T),void 0===(C=T[M.id])&&(C={},T[M.id]=C),void 0===(D=C[E])&&(D=p(i.isWebGL2?A.createVertexArray():s.createVertexArrayOES()),C[E]=D),D);h!==P&&d((h=P).object),(w=function(A,e,t,i){let r=h.attributes,s=e.attributes,a=0,o=t.getAttributes();for(let l in o)if(o[l].location>=0){let c=r[l],d=s[l];if(void 0===d&&("instanceMatrix"===l&&A.instanceMatrix&&(d=A.instanceMatrix),"instanceColor"===l&&A.instanceColor&&(d=A.instanceColor)),void 0===c||c.attribute!==d||d&&c.data!==d.data)return!0;a++}return h.attributesNum!==a||h.index!==i}(r,x,u,b))&&function(A,e,t,i){let r={},s=e.attributes,a=0,o=t.getAttributes();for(let l in o)if(o[l].location>=0){let c=s[l];void 0===c&&("instanceMatrix"===l&&A.instanceMatrix&&(c=A.instanceMatrix),"instanceColor"===l&&A.instanceColor&&(c=A.instanceColor));let d={};d.attribute=c,c&&c.data&&(d.data=c.data),r[l]=d,a++}h.attributes=r,h.attributesNum=a,h.index=i}(r,x,u,b)}else{let _=!0===l.wireframe;(h.geometry!==x.id||h.program!==u.id||h.wireframe!==_)&&(h.geometry=x.id,h.program=u.id,h.wireframe=_,w=!0)}null!==b&&t.update(b,34963),(w||c)&&(c=!1,function(r,s,a,o){if(!1===i.isWebGL2&&(r.isInstancedMesh||o.isInstancedBufferGeometry)&&null===e.get("ANGLE_instanced_arrays"))return;f();let l=o.attributes,h=a.getAttributes(),c=s.defaultAttributeValues;for(let d in h){let u=h[d];if(u.location>=0){let p=l[d];if(void 0===p&&("instanceMatrix"===d&&r.instanceMatrix&&(p=r.instanceMatrix),"instanceColor"===d&&r.instanceColor&&(p=r.instanceColor)),void 0!==p){let x=p.normalized,b=p.itemSize,w=t.get(p);if(void 0===w)continue;let S=w.buffer,M=w.type,E=w.bytesPerElement;if(p.isInterleavedBufferAttribute){let T=p.data,C=T.stride,D=p.offset;if(T.isInstancedInterleavedBuffer){for(let P=0;P<u.locationSize;P++)g(u.location+P,T.meshPerAttribute);!0!==r.isInstancedMesh&&void 0===o._maxInstanceCount&&(o._maxInstanceCount=T.meshPerAttribute*T.count)}else for(let _=0;_<u.locationSize;_++)m(u.location+_);A.bindBuffer(34962,S);for(let L=0;L<u.locationSize;L++)y(u.location+L,b/u.locationSize,M,x,C*E,(D+b/u.locationSize*L)*E)}else{if(p.isInstancedBufferAttribute){for(let O=0;O<u.locationSize;O++)g(u.location+O,p.meshPerAttribute);!0!==r.isInstancedMesh&&void 0===o._maxInstanceCount&&(o._maxInstanceCount=p.meshPerAttribute*p.count)}else for(let B=0;B<u.locationSize;B++)m(u.location+B);A.bindBuffer(34962,S);for(let I=0;I<u.locationSize;I++)y(u.location+I,b/u.locationSize,M,x,b*E,b/u.locationSize*I*E)}}else if(void 0!==c){let R=c[d];if(void 0!==R)switch(R.length){case 2:A.vertexAttrib2fv(u.location,R);break;case 3:A.vertexAttrib3fv(u.location,R);break;case 4:A.vertexAttrib4fv(u.location,R);break;default:A.vertexAttrib1fv(u.location,R)}}}}v()}(r,l,u,x),null!==b&&A.bindBuffer(34963,t.get(b).buffer))},reset:x,resetDefaultState:b,dispose:function(){for(let A in x(),o){let e=o[A];for(let t in e){let i=e[t];for(let r in i)u(i[r].object),delete i[r];delete e[t]}delete o[A]}},releaseStatesOfGeometry:function(A){if(void 0===o[A.id])return;let e=o[A.id];for(let t in e){let i=e[t];for(let r in i)u(i[r].object),delete i[r];delete e[t]}delete o[A.id]},releaseStatesOfProgram:function(A){for(let e in o){let t=o[e];if(void 0===t[A.id])continue;let i=t[A.id];for(let r in i)u(i[r].object),delete i[r];delete t[A.id]}},initAttributes:f,enableAttribute:m,disableUnusedAttributes:v}}function rA(A,e,t,i){let r=i.isWebGL2,s;this.setMode=function(A){s=A},this.render=function(e,i){A.drawArrays(s,e,i),t.update(i,s,1)},this.renderInstances=function(i,a,o){let l,h;if(0!==o){if(r)l=A,h="drawArraysInstanced";else if(l=e.get("ANGLE_instanced_arrays"),h="drawArraysInstancedANGLE",null===l){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}l[h](s,i,a,o),t.update(a,s,o)}}}function re(A,e,t){let i;function r(e){if("highp"===e){if(A.getShaderPrecisionFormat(35633,36338).precision>0&&A.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";e="mediump"}return"mediump"===e&&A.getShaderPrecisionFormat(35633,36337).precision>0&&A.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}let s="u">typeof WebGL2RenderingContext&&A instanceof WebGL2RenderingContext||"u">typeof WebGL2ComputeRenderingContext&&A instanceof WebGL2ComputeRenderingContext,a=void 0!==t.precision?t.precision:"highp",o=r(a);o!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",o,"instead."),a=o);let l=s||e.has("WEBGL_draw_buffers"),h=!0===t.logarithmicDepthBuffer,c=A.getParameter(34930),d=A.getParameter(35660),u=A.getParameter(3379),p=A.getParameter(34076),f=A.getParameter(34921),m=A.getParameter(36347),g=A.getParameter(36348),v=A.getParameter(36349),y=d>0,x=s||e.has("OES_texture_float"),b=s?A.getParameter(36183):0;return{isWebGL2:s,drawBuffers:l,getMaxAnisotropy:function(){if(void 0!==i)return i;if(!0===e.has("EXT_texture_filter_anisotropic")){let t=e.get("EXT_texture_filter_anisotropic");i=A.getParameter(t.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i},getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:c,maxVertexTextures:d,maxTextureSize:u,maxCubemapSize:p,maxAttributes:f,maxVertexUniforms:m,maxVaryings:g,maxFragmentUniforms:v,vertexTextures:y,floatFragmentTextures:x,floatVertexTextures:y&&x,maxSamples:b}}function rt(A){let e=this,t=null,i=0,r=!1,s=!1,a=new iJ,o=new eL,l={value:null,needsUpdate:!1};function h(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(A,t,i,r){let s=null!==A?A.length:0,h=null;if(0!==s){if(h=l.value,!0!==r||null===h){let c=i+4*s,d=t.matrixWorldInverse;o.getNormalMatrix(d),(null===h||h.length<c)&&(h=new Float32Array(c));for(let u=0,p=i;u!==s;++u,p+=4)a.copy(A[u]).applyMatrix4(d,o),a.normal.toArray(h,p),h[p+3]=a.constant}l.value=h,l.needsUpdate=!0}return e.numPlanes=s,e.numIntersection=0,h}this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(A,e,s){let a=0!==A.length||e||0!==i||r;return r=e,t=c(A,s,0),i=A.length,a},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1,h()},this.setState=function(e,a,o){let d=e.clippingPlanes,u=e.clipIntersection,p=e.clipShadows,f=A.get(e);if(r&&null!==d&&0!==d.length&&(!s||p)){let m=s?0:i,g=4*m,v=f.clippingState||null;l.value=v,v=c(d,a,g,o);for(let y=0;y!==g;++y)v[y]=t[y];f.clippingState=v,this.numIntersection=u?this.numPlanes:0,this.numPlanes+=m}else s?c(null):h()}}function ri(A){let e=new WeakMap;function t(A,e){return 303===e?A.mapping=301:304===e&&(A.mapping=302),A}function i(A){let t=A.target;t.removeEventListener("dispose",i);let r=e.get(t);void 0!==r&&(e.delete(t),r.dispose())}return{get:function(r){if(r&&r.isTexture&&!1===r.isRenderTargetTexture){let s=r.mapping;if(303===s||304===s){if(e.has(r))return t(e.get(r).texture,r.mapping);{let a=r.image;if(!a||!(a.height>0))return null;{let o=new iQ(a.height/2);return o.fromEquirectangularTexture(A,r),e.set(r,o),r.addEventListener("dispose",i),t(o.texture,r.mapping)}}}}return r},dispose:function(){e=new WeakMap}}}i8.physical={uniforms:iU([i8.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new e_(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new eY(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new e_},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new eY(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new eY(1,1,1)},specularColorMap:{value:null}}]),vertexShader:i5.meshphysical_vert,fragmentShader:i5.meshphysical_frag};var rr=class extends iH{constructor(A=-1,e=1,t=1,i=-1,r=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=A,this.right=e,this.top=t,this.bottom=i,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(A,e){return super.copy(A,e),this.left=A.left,this.right=A.right,this.top=A.top,this.bottom=A.bottom,this.near=A.near,this.far=A.far,this.zoom=A.zoom,this.view=null===A.view?null:Object.assign({},A.view),this}setViewOffset(A,e,t,i,r,s){null===this.view&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=A,this.view.fullHeight=e,this.view.offsetX=t,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){null!==this.view&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let A=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),t=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=t-A,s=t+A,a=i+e,o=i-e;if(null!==this.view&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,s=r+l*this.view.width,a-=h*this.view.offsetY,o=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,s,a,o,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(A){let e=super.toJSON(A);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,null!==this.view&&(e.object.view=Object.assign({},this.view)),e}},rs=[.125,.215,.35,.446,.526,.582],rn=new rr,ra=new eY,ro=null,rl=(1+Math.sqrt(5))/2,rh=1/rl,rc=[new e4(1,1,1),new e4(-1,1,1),new e4(1,1,-1),new e4(-1,1,-1),new e4(0,rl,rh),new e4(0,rl,-rh),new e4(rh,0,rl),new e4(-rh,0,rl),new e4(rl,rh,0),new e4(-rl,rh,0)],rd=class{constructor(A){this._renderer=A,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(A,e=0,t=.1,i=100){ro=this._renderer.getRenderTarget(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(A,t,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(A,e=null){return this._fromTexture(A,e)}fromCubemap(A,e=null){return this._fromTexture(A,e)}compileCubemapShader(){null===this._cubemapMaterial&&(this._cubemapMaterial=rm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){null===this._equirectMaterial&&(this._equirectMaterial=rf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),null!==this._cubemapMaterial&&this._cubemapMaterial.dispose(),null!==this._equirectMaterial&&this._equirectMaterial.dispose()}_setSize(A){this._lodMax=Math.floor(Math.log2(A)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){null!==this._blurMaterial&&this._blurMaterial.dispose(),null!==this._pingPongRenderTarget&&this._pingPongRenderTarget.dispose();for(let A=0;A<this._lodPlanes.length;A++)this._lodPlanes[A].dispose()}_cleanup(A){this._renderer.setRenderTarget(ro),A.scissorTest=!1,rp(A,0,0,A.width,A.height)}_fromTexture(A,e){301===A.mapping||302===A.mapping?this._setSize(0===A.image.length?16:A.image[0].width||A.image[0].image.width):this._setSize(A.image.width/4),ro=this._renderer.getRenderTarget();let t=e||this._allocateTargets();return this._textureToCubeUV(A,t),this._applyPMREM(t),this._cleanup(t),t}_allocateTargets(){let A=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,t={magFilter:1006,minFilter:1006,generateMipmaps:!1,type:1016,format:1023,encoding:3e3,depthBuffer:!1},i=ru(A,e,t);if(null===this._pingPongRenderTarget||this._pingPongRenderTarget.width!==A){let r,s;null!==this._pingPongRenderTarget&&this._dispose(),this._pingPongRenderTarget=ru(A,e,t);let{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=function(A){let e=[],t=[],i=[],r=A,s=A-4+1+rs.length;for(let a=0;a<s;a++){let o=Math.pow(2,r);t.push(o);let l=1/o;a>A-4?l=rs[a-A+4-1]:0===a&&(l=0),i.push(l);let h=1/(o-2),c=-h,d=1+h,u=[c,c,d,c,d,d,c,c,d,d,c,d],p=new Float32Array(108),f=new Float32Array(72),m=new Float32Array(36);for(let g=0;g<6;g++){let v=g%3*2/3-1,y=g>2?0:-1,x=[v,y,0,v+2/3,y,0,v+2/3,y+1,0,v,y,0,v+2/3,y+1,0,v,y+1,0];p.set(x,18*g),f.set(u,12*g);let b=[g,g,g,g,g,g];m.set(b,6*g)}let w=new ig;w.setAttribute("position",new ii(p,3)),w.setAttribute("uv",new ii(f,2)),w.setAttribute("faceIndex",new ii(m,1)),e.push(w),r>4&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}(a)),this._blurMaterial=(r=new Float32Array(20),s=new e4(0,1,0),new ij({name:"SphericalGaussianBlur",defines:{n:20,CUBEUV_TEXEL_WIDTH:1/A,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:rg(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:0,depthTest:!1,depthWrite:!1}))}return i}_compileMaterial(A){let e=new iR(this._lodPlanes[0],A);this._renderer.compile(e,rn)}_sceneToCubeUV(A,e,t,i){let r=new iW(90,1,e,t),s=[1,-1,1,1,1,1],a=[1,1,1,-1,-1,-1],o=this._renderer,l=o.autoClear,h=o.toneMapping;o.getClearColor(ra),o.toneMapping=0,o.autoClear=!1;let c=new iA({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1}),d=new iR(new iz,c),u=!1,p=A.background;p?p.isColor&&(c.color.copy(p),A.background=null,u=!0):(c.color.copy(ra),u=!0);for(let f=0;f<6;f++){let m=f%3;0===m?(r.up.set(0,s[f],0),r.lookAt(a[f],0,0)):1===m?(r.up.set(0,0,s[f]),r.lookAt(0,a[f],0)):(r.up.set(0,s[f],0),r.lookAt(0,0,a[f]));let g=this._cubeSize;rp(i,m*g,f>2?g:0,g,g),o.setRenderTarget(i),u&&o.render(d,r),o.render(A,r)}d.geometry.dispose(),d.material.dispose(),o.toneMapping=h,o.autoClear=l,A.background=p}_textureToCubeUV(A,e){let t=this._renderer,i=301===A.mapping||302===A.mapping;i?(null===this._cubemapMaterial&&(this._cubemapMaterial=rm()),this._cubemapMaterial.uniforms.flipEnvMap.value=!1===A.isRenderTargetTexture?-1:1):null===this._equirectMaterial&&(this._equirectMaterial=rf());let r=i?this._cubemapMaterial:this._equirectMaterial,s=new iR(this._lodPlanes[0],r);r.uniforms.envMap.value=A;let a=this._cubeSize;rp(e,0,0,3*a,2*a),t.setRenderTarget(e),t.render(s,rn)}_applyPMREM(A){let e=this._renderer,t=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){let r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),s=rc[(i-1)%rc.length];this._blur(A,i-1,i,r,s)}e.autoClear=t}_blur(A,e,t,i,r){let s=this._pingPongRenderTarget;this._halfBlur(A,s,e,t,i,"latitudinal",r),this._halfBlur(s,A,t,t,i,"longitudinal",r)}_halfBlur(A,e,t,i,r,s,a){let o=this._renderer,l=this._blurMaterial;"latitudinal"!==s&&"longitudinal"!==s&&console.error("blur direction must be either latitudinal or longitudinal!");let h=new iR(this._lodPlanes[i],l),c=l.uniforms,d=this._sizeLods[t]-1,u=isFinite(r)?Math.PI/(2*d):2*Math.PI/39,p=r/u,f=isFinite(r)?1+Math.floor(3*p):20;f>20&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${f} samples when the maximum is set to 20`);let m=[],g=0;for(let v=0;v<20;++v){let y=v/p,x=Math.exp(-y*y/2);m.push(x),0===v?g+=x:v<f&&(g+=2*x)}for(let b=0;b<m.length;b++)m[b]=m[b]/g;c.envMap.value=A.texture,c.samples.value=f,c.weights.value=m,c.latitudinal.value="latitudinal"===s,a&&(c.poleAxis.value=a);let{_lodMax:w}=this;c.dTheta.value=u,c.mipInt.value=w-t;let S=this._sizeLods[i],M=4*(this._cubeSize-S);rp(e,3*S*(i>w-4?i-w+4:0),M,3*S,2*S),o.setRenderTarget(e),o.render(h,rn)}};function ru(A,e,t){let i=new e0(A,e,t);return i.texture.mapping=306,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function rp(A,e,t,i,r){A.viewport.set(e,t,i,r),A.scissor.set(e,t,i,r)}function rf(){return new ij({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:rg(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function rm(){return new ij({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:rg(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function rg(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function rv(A){let e=new WeakMap,t=null;function i(A){let t=A.target;t.removeEventListener("dispose",i);let r=e.get(t);void 0!==r&&(e.delete(t),r.dispose())}return{get:function(r){if(r&&r.isTexture){let s=r.mapping,a=303===s||304===s,o=301===s||302===s;if(a||o){if(r.isRenderTargetTexture&&!0===r.needsPMREMUpdate){r.needsPMREMUpdate=!1;let l=e.get(r);return null===t&&(t=new rd(A)),l=a?t.fromEquirectangular(r,l):t.fromCubemap(r,l),e.set(r,l),l.texture}if(e.has(r))return e.get(r).texture;{let h=r.image;if(!(a&&h&&h.height>0||o&&h&&function(A){let e=0;for(let t=0;t<6;t++)void 0!==A[t]&&e++;return 6===e}(h)))return null;{null===t&&(t=new rd(A));let c=a?t.fromEquirectangular(r):t.fromCubemap(r);return e.set(r,c),r.addEventListener("dispose",i),c.texture}}}}return r},dispose:function(){e=new WeakMap,null!==t&&(t.dispose(),t=null)}}}function ry(A){let e={};function t(t){let i;if(void 0!==e[t])return e[t];switch(t){case"WEBGL_depth_texture":i=A.getExtension("WEBGL_depth_texture")||A.getExtension("MOZ_WEBGL_depth_texture")||A.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=A.getExtension("EXT_texture_filter_anisotropic")||A.getExtension("MOZ_EXT_texture_filter_anisotropic")||A.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=A.getExtension("WEBGL_compressed_texture_s3tc")||A.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||A.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=A.getExtension("WEBGL_compressed_texture_pvrtc")||A.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=A.getExtension(t)}return e[t]=i,i}return{has:function(A){return null!==t(A)},init:function(A){A.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(A){let e=t(A);return null===e&&console.warn("THREE.WebGLRenderer: "+A+" extension not supported."),e}}}function rx(A,e,t,i){let r={},s=new WeakMap;function a(A){let o=A.target;for(let l in null!==o.index&&e.remove(o.index),o.attributes)e.remove(o.attributes[l]);o.removeEventListener("dispose",a),delete r[o.id];let h=s.get(o);h&&(e.remove(h),s.delete(o)),i.releaseStatesOfGeometry(o),!0===o.isInstancedBufferGeometry&&delete o._maxInstanceCount,t.memory.geometries--}function o(A){let t=[],i=A.index,r=A.attributes.position,a=0;if(null!==i){let o=i.array;a=i.version;for(let l=0,h=o.length;l<h;l+=3){let c=o[l+0],d=o[l+1],u=o[l+2];t.push(c,d,d,u,u,c)}}else{let p=r.array;a=r.version;for(let f=0,m=p.length/3-1;f<m;f+=3){let g=f+0,v=f+1,y=f+2;t.push(g,v,v,y,y,g)}}let x=new(eO(t)?is:ir)(t,1);x.version=a;let b=s.get(A);b&&e.remove(b),s.set(A,x)}return{get:function(A,e){return!0===r[e.id]||(e.addEventListener("dispose",a),r[e.id]=!0,t.memory.geometries++),e},update:function(A){let t=A.attributes;for(let i in t)e.update(t[i],34962);let r=A.morphAttributes;for(let s in r){let a=r[s];for(let o=0,l=a.length;o<l;o++)e.update(a[o],34962)}},getWireframeAttribute:function(A){let e=s.get(A);if(e){let t=A.index;null!==t&&e.version<t.version&&o(A)}else o(A);return s.get(A)}}}function rb(A,e,t,i){let r,s,a=i.isWebGL2,o;this.setMode=function(A){o=A},this.setIndex=function(A){r=A.type,s=A.bytesPerElement},this.render=function(e,i){A.drawElements(o,i,r,e*s),t.update(i,o,1)},this.renderInstances=function(i,l,h){let c,d;if(0!==h){if(a)c=A,d="drawElementsInstanced";else if(c=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",null===c){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}c[d](o,l,r,i*s,h),t.update(l,o,h)}}}function rw(A){let e={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:e,programs:null,autoReset:!0,reset:function(){e.frame++,e.calls=0,e.triangles=0,e.points=0,e.lines=0},update:function(A,t,i){switch(e.calls++,t){case 4:e.triangles+=i*(A/3);break;case 1:e.lines+=i*(A/2);break;case 3:e.lines+=i*(A-1);break;case 2:e.lines+=i*A;break;case 0:e.points+=i*A;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",t)}}}}function rS(A,e){return A[0]-e[0]}function rM(A,e){return Math.abs(e[1])-Math.abs(A[1])}function rE(A,e){let t=1,i=e.isInterleavedBufferAttribute?e.data.array:e.array;i instanceof Int8Array?t=127:i instanceof Uint8Array?t=255:i instanceof Uint16Array?t=65535:i instanceof Int16Array?t=32767:i instanceof Int32Array?t=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",i),A.divideScalar(t)}function rT(A,e,t){let i={},r=new Float32Array(8),s=new WeakMap,a=new e$,o=[];for(let l=0;l<8;l++)o[l]=[l,0];return{update:function(l,h,c,d){let u=l.morphTargetInfluences;if(!0===e.isWebGL2){let p=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,f=void 0!==p?p.length:0,m=s.get(h);if(void 0===m||m.count!==f){let g=function(){D.dispose(),s.delete(h),h.removeEventListener("dispose",g)};void 0!==m&&m.texture.dispose();let v=void 0!==h.morphAttributes.position,y=void 0!==h.morphAttributes.normal,x=void 0!==h.morphAttributes.color,b=h.morphAttributes.position||[],w=h.morphAttributes.normal||[],S=h.morphAttributes.color||[],M=0;!0===v&&(M=1),!0===y&&(M=2),!0===x&&(M=3);let E=h.attributes.position.count*M,T=1;E>e.maxTextureSize&&(T=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);let C=new Float32Array(E*T*4*f),D=new e1(C,E,T,f);D.type=1015,D.needsUpdate=!0;let P=4*M;for(let _=0;_<f;_++){let L=b[_],O=w[_],B=S[_],I=E*T*4*_;for(let R=0;R<L.count;R++){let N=R*P;!0===v&&(a.fromBufferAttribute(L,R),!0===L.normalized&&rE(a,L),C[I+N+0]=a.x,C[I+N+1]=a.y,C[I+N+2]=a.z,C[I+N+3]=0),!0===y&&(a.fromBufferAttribute(O,R),!0===O.normalized&&rE(a,O),C[I+N+4]=a.x,C[I+N+5]=a.y,C[I+N+6]=a.z,C[I+N+7]=0),!0===x&&(a.fromBufferAttribute(B,R),!0===B.normalized&&rE(a,B),C[I+N+8]=a.x,C[I+N+9]=a.y,C[I+N+10]=a.z,C[I+N+11]=4===B.itemSize?a.w:1)}}m={count:f,texture:D,size:new e_(E,T)},s.set(h,m),h.addEventListener("dispose",g)}let z=0;for(let F=0;F<u.length;F++)z+=u[F];let U=h.morphTargetsRelative?1:1-z;d.getUniforms().setValue(A,"morphTargetBaseInfluence",U),d.getUniforms().setValue(A,"morphTargetInfluences",u),d.getUniforms().setValue(A,"morphTargetsTexture",m.texture,t),d.getUniforms().setValue(A,"morphTargetsTextureSize",m.size)}else{let k=void 0===u?0:u.length,G=i[h.id];if(void 0===G||G.length!==k){G=[];for(let V=0;V<k;V++)G[V]=[V,0];i[h.id]=G}for(let j=0;j<k;j++){let H=G[j];H[0]=j,H[1]=u[j]}G.sort(rM);for(let W=0;W<8;W++)W<k&&G[W][1]?(o[W][0]=G[W][0],o[W][1]=G[W][1]):(o[W][0]=Number.MAX_SAFE_INTEGER,o[W][1]=0);o.sort(rS);let Y=h.morphAttributes.position,X=h.morphAttributes.normal,Q=0;for(let q=0;q<8;q++){let Z=o[q],K=Z[0],J=Z[1];K!==Number.MAX_SAFE_INTEGER&&J?(Y&&h.getAttribute("morphTarget"+q)!==Y[K]&&h.setAttribute("morphTarget"+q,Y[K]),X&&h.getAttribute("morphNormal"+q)!==X[K]&&h.setAttribute("morphNormal"+q,X[K]),r[q]=J,Q+=J):(Y&&!0===h.hasAttribute("morphTarget"+q)&&h.deleteAttribute("morphTarget"+q),X&&!0===h.hasAttribute("morphNormal"+q)&&h.deleteAttribute("morphNormal"+q),r[q]=0)}let $=h.morphTargetsRelative?1:1-Q;d.getUniforms().setValue(A,"morphTargetBaseInfluence",$),d.getUniforms().setValue(A,"morphTargetInfluences",r)}}}}function rC(A,e,t,i){let r=new WeakMap;function s(A){let e=A.target;e.removeEventListener("dispose",s),t.remove(e.instanceMatrix),null!==e.instanceColor&&t.remove(e.instanceColor)}return{update:function(A){let a=i.render.frame,o=A.geometry,l=e.get(A,o);return r.get(l)!==a&&(e.update(l),r.set(l,a)),A.isInstancedMesh&&(!1===A.hasEventListener("dispose",s)&&A.addEventListener("dispose",s),t.update(A.instanceMatrix,34962),null!==A.instanceColor&&t.update(A.instanceColor,34962)),l},dispose:function(){r=new WeakMap}}}var rD=new eJ,rP=new e1,r_=new e2,rL=new iX,rO=[],rB=[],rI=new Float32Array(16),rR=new Float32Array(9),rN=new Float32Array(4);function rz(A,e,t){let i=A[0];if(i<=0||i>0)return A;let r=e*t,s=rO[r];if(void 0===s&&(s=new Float32Array(r),rO[r]=s),0!==e){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,A[a].toArray(s,o)}return s}function rF(A,e){if(A.length!==e.length)return!1;for(let t=0,i=A.length;t<i;t++)if(A[t]!==e[t])return!1;return!0}function rU(A,e){for(let t=0,i=e.length;t<i;t++)A[t]=e[t]}function rk(A,e){let t=rB[e];void 0===t&&(t=new Int32Array(e),rB[e]=t);for(let i=0;i!==e;++i)t[i]=A.allocateTextureUnit();return t}function rG(A,e){let t=this.cache;t[0]!==e&&(A.uniform1f(this.addr,e),t[0]=e)}function rV(A,e){let t=this.cache;if(void 0!==e.x)(t[0]!==e.x||t[1]!==e.y)&&(A.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rF(t,e))return;A.uniform2fv(this.addr,e),rU(t,e)}}function rj(A,e){let t=this.cache;if(void 0!==e.x)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(A.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(void 0!==e.r)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(A.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(rF(t,e))return;A.uniform3fv(this.addr,e),rU(t,e)}}function rH(A,e){let t=this.cache;if(void 0!==e.x)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(A.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rF(t,e))return;A.uniform4fv(this.addr,e),rU(t,e)}}function rW(A,e){let t=this.cache,i=e.elements;if(void 0===i){if(rF(t,e))return;A.uniformMatrix2fv(this.addr,!1,e),rU(t,e)}else{if(rF(t,i))return;rN.set(i),A.uniformMatrix2fv(this.addr,!1,rN),rU(t,i)}}function rY(A,e){let t=this.cache,i=e.elements;if(void 0===i){if(rF(t,e))return;A.uniformMatrix3fv(this.addr,!1,e),rU(t,e)}else{if(rF(t,i))return;rR.set(i),A.uniformMatrix3fv(this.addr,!1,rR),rU(t,i)}}function rX(A,e){let t=this.cache,i=e.elements;if(void 0===i){if(rF(t,e))return;A.uniformMatrix4fv(this.addr,!1,e),rU(t,e)}else{if(rF(t,i))return;rI.set(i),A.uniformMatrix4fv(this.addr,!1,rI),rU(t,i)}}function rQ(A,e){let t=this.cache;t[0]!==e&&(A.uniform1i(this.addr,e),t[0]=e)}function rq(A,e){let t=this.cache;rF(t,e)||(A.uniform2iv(this.addr,e),rU(t,e))}function rZ(A,e){let t=this.cache;rF(t,e)||(A.uniform3iv(this.addr,e),rU(t,e))}function rK(A,e){let t=this.cache;rF(t,e)||(A.uniform4iv(this.addr,e),rU(t,e))}function rJ(A,e){let t=this.cache;t[0]!==e&&(A.uniform1ui(this.addr,e),t[0]=e)}function r$(A,e){let t=this.cache;rF(t,e)||(A.uniform2uiv(this.addr,e),rU(t,e))}function r0(A,e){let t=this.cache;rF(t,e)||(A.uniform3uiv(this.addr,e),rU(t,e))}function r1(A,e){let t=this.cache;rF(t,e)||(A.uniform4uiv(this.addr,e),rU(t,e))}function r2(A,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(A.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||rD,r)}function r3(A,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(A.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||r_,r)}function r4(A,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(A.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||rL,r)}function r5(A,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(A.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||rP,r)}function r6(A,e){A.uniform1fv(this.addr,e)}function r8(A,e){let t=rz(e,this.size,2);A.uniform2fv(this.addr,t)}function r9(A,e){let t=rz(e,this.size,3);A.uniform3fv(this.addr,t)}function r7(A,e){let t=rz(e,this.size,4);A.uniform4fv(this.addr,t)}function sA(A,e){let t=rz(e,this.size,4);A.uniformMatrix2fv(this.addr,!1,t)}function se(A,e){let t=rz(e,this.size,9);A.uniformMatrix3fv(this.addr,!1,t)}function st(A,e){let t=rz(e,this.size,16);A.uniformMatrix4fv(this.addr,!1,t)}function si(A,e){A.uniform1iv(this.addr,e)}function sr(A,e){A.uniform2iv(this.addr,e)}function ss(A,e){A.uniform3iv(this.addr,e)}function sn(A,e){A.uniform4iv(this.addr,e)}function sa(A,e){A.uniform1uiv(this.addr,e)}function so(A,e){A.uniform2uiv(this.addr,e)}function sl(A,e){A.uniform3uiv(this.addr,e)}function sh(A,e){A.uniform4uiv(this.addr,e)}function sc(A,e,t){let i=e.length,r=rk(t,i);A.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)t.setTexture2D(e[s]||rD,r[s])}function sd(A,e,t){let i=e.length,r=rk(t,i);A.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)t.setTexture3D(e[s]||r_,r[s])}function su(A,e,t){let i=e.length,r=rk(t,i);A.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)t.setTextureCube(e[s]||rL,r[s])}function sp(A,e,t){let i=e.length,r=rk(t,i);A.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)t.setTexture2DArray(e[s]||rP,r[s])}var sf=class{constructor(A,e,t){this.id=A,this.addr=t,this.cache=[],this.setValue=function(A){switch(A){case 5126:return rG;case 35664:return rV;case 35665:return rj;case 35666:return rH;case 35674:return rW;case 35675:return rY;case 35676:return rX;case 5124:case 35670:return rQ;case 35667:case 35671:return rq;case 35668:case 35672:return rZ;case 35669:case 35673:return rK;case 5125:return rJ;case 36294:return r$;case 36295:return r0;case 36296:return r1;case 35678:case 36198:case 36298:case 36306:case 35682:return r2;case 35679:case 36299:case 36307:return r3;case 35680:case 36300:case 36308:case 36293:return r4;case 36289:case 36303:case 36311:case 36292:return r5}}(e.type)}},sm=class{constructor(A,e,t){this.id=A,this.addr=t,this.cache=[],this.size=e.size,this.setValue=function(A){switch(A){case 5126:return r6;case 35664:return r8;case 35665:return r9;case 35666:return r7;case 35674:return sA;case 35675:return se;case 35676:return st;case 5124:case 35670:return si;case 35667:case 35671:return sr;case 35668:case 35672:return ss;case 35669:case 35673:return sn;case 5125:return sa;case 36294:return so;case 36295:return sl;case 36296:return sh;case 35678:case 36198:case 36298:case 36306:case 35682:return sc;case 35679:case 36299:case 36307:return sd;case 35680:case 36300:case 36308:case 36293:return su;case 36289:case 36303:case 36311:case 36292:return sp}}(e.type)}},sg=class{constructor(A){this.id=A,this.seq=[],this.map={}}setValue(A,e,t){let i=this.seq;for(let r=0,s=i.length;r!==s;++r){let a=i[r];a.setValue(A,e[a.id],t)}}},sv=/(\w+)(\])?(\[|\.)?/g;function sy(A,e){A.seq.push(e),A.map[e.id]=e}var sx=class{constructor(A,e){this.seq=[],this.map={};let t=A.getProgramParameter(e,35718);for(let i=0;i<t;++i){let r=A.getActiveUniform(e,i),s=A.getUniformLocation(e,r.name);!function(A,e,t){let i=A.name,r=i.length;for(sv.lastIndex=0;;){let s=sv.exec(i),a=sv.lastIndex,o=s[1],l="]"===s[2],h=s[3];if(l&&(o|=0),void 0===h||"["===h&&a+2===r){sy(t,void 0===h?new sf(o,A,e):new sm(o,A,e));break}{let c=t.map[o];void 0===c&&sy(t,c=new sg(o)),t=c}}}(r,s,this)}}setValue(A,e,t,i){let r=this.map[e];void 0!==r&&r.setValue(A,t,i)}setOptional(A,e,t){let i=e[t];void 0!==i&&this.setValue(A,t,i)}static upload(A,e,t,i){for(let r=0,s=e.length;r!==s;++r){let a=e[r],o=t[a.id];!1!==o.needsUpdate&&a.setValue(A,o.value,i)}}static seqWithValue(A,e){let t=[];for(let i=0,r=A.length;i!==r;++i){let s=A[i];s.id in e&&t.push(s)}return t}};function sb(A,e,t){let i=A.createShader(e);return A.shaderSource(i,t),A.compileShader(i),i}var sw=0;function sS(A,e,t){let i=A.getShaderParameter(e,35713),r=A.getShaderInfoLog(e).trim();if(i&&""===r)return"";let s=/ERROR: 0:(\d+)/.exec(r);if(!s)return r;{let a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+function(A,e){let t=A.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}(A.getShaderSource(e),a)}}function sM(A){return""!==A}function sE(A,e){return A.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function sT(A,e){return A.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var sC=/^[ \t]*#include +<([\w\d./]+)>/gm;function sD(A){return A.replace(sC,sP)}function sP(A,e){let t=i5[e];if(void 0===t)throw Error("Can not resolve #include <"+e+">");return sD(t)}var s_=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,sL=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function sO(A){return A.replace(sL,sI).replace(s_,sB)}function sB(A,e,t,i){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),sI(A,e,t,i)}function sI(A,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function sR(A){let e="precision "+A.precision+` float;
precision `+A.precision+" int;";return"highp"===A.precision?e+=`
#define HIGH_PRECISION`:"mediump"===A.precision?e+=`
#define MEDIUM_PRECISION`:"lowp"===A.precision&&(e+=`
#define LOW_PRECISION`),e}function sN(A,e,t,i){let r,s,a;let o,l,h=A.getContext(),c=t.defines,d=t.vertexShader,u=t.fragmentShader,p=(r="SHADOWMAP_TYPE_BASIC",1===t.shadowMapType?r="SHADOWMAP_TYPE_PCF":2===t.shadowMapType?r="SHADOWMAP_TYPE_PCF_SOFT":3===t.shadowMapType&&(r="SHADOWMAP_TYPE_VSM"),r),f=function(A){let e="ENVMAP_TYPE_CUBE";if(A.envMap)switch(A.envMapMode){case 301:case 302:e="ENVMAP_TYPE_CUBE";break;case 306:e="ENVMAP_TYPE_CUBE_UV"}return e}(t),m=(s="ENVMAP_MODE_REFLECTION",t.envMap&&302===t.envMapMode&&(s="ENVMAP_MODE_REFRACTION"),s),g=function(A){let e="ENVMAP_BLENDING_NONE";if(A.envMap)switch(A.combine){case 0:e="ENVMAP_BLENDING_MULTIPLY";break;case 1:e="ENVMAP_BLENDING_MIX";break;case 2:e="ENVMAP_BLENDING_ADD"}return e}(t),v=function(A){let e=A.envMapCubeUVHeight;if(null===e)return null;let t=Math.log2(e)-2;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:1/e,maxMip:t}}(t),y=t.isWebGL2?"":[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.tangentSpaceNormalMap||t.clearcoatNormalMap||t.flatShading||"physical"===t.shaderID?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(sM).join(`
`),x=function(A){let e=[];for(let t in A){let i=A[t];!1!==i&&e.push("#define "+t+" "+i)}return e.join(`
`)}(c),b=h.createProgram(),w,S,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?((w=[x].filter(sM).join(`
`)).length>0&&(w+=`
`),(S=[y,x].filter(sM).join(`
`)).length>0&&(S+=`
`)):(w=[sR(t),"#define SHADER_NAME "+t.shaderName,x,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&!1===t.flatShading?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(sM).join(`
`),S=[y,sR(t),"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.envMap?"#define "+m:"",t.envMap?"#define "+g:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",0!==t.toneMapping?"#define TONE_MAPPING":"",0!==t.toneMapping?i5.tonemapping_pars_fragment:"",0!==t.toneMapping?function(A,e){let t;switch(e){case 1:t="Linear";break;case 2:t="Reinhard";break;case 3:t="OptimizedCineon";break;case 4:t="ACESFilmic";break;case 5:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+A+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",i5.encodings_pars_fragment,"vec4 linearToOutputTexel( vec4 value ) { return LinearTo"+(a=function(A){switch(A){case 3e3:return["Linear","( value )"];case 3001:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",A),["Linear","( value )"]}}(t.outputEncoding))[0]+a[1]+"; }",t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(sM).join(`
`)),d=sT(d=sE(d=sD(d),t),t),u=sT(u=sE(u=sD(u),t),t),d=sO(d),u=sO(u),t.isWebGL2&&!0!==t.isRawShaderMaterial&&(M=`#version 300 es
`,w=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+w,S=["#define varying in",t.glslVersion===eg?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===eg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);let E=M+w+d,T=M+S+u,C=sb(h,35633,E),D=sb(h,35632,T);if(h.attachShader(b,C),h.attachShader(b,D),void 0!==t.index0AttributeName?h.bindAttribLocation(b,0,t.index0AttributeName):!0===t.morphTargets&&h.bindAttribLocation(b,0,"position"),h.linkProgram(b),A.debug.checkShaderErrors){let P=h.getProgramInfoLog(b).trim(),_=h.getShaderInfoLog(C).trim(),L=h.getShaderInfoLog(D).trim(),O=!0,B=!0;if(!1===h.getProgramParameter(b,35714)){O=!1;let I=sS(h,C,"vertex"),R=sS(h,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+h.getError()+" - VALIDATE_STATUS "+h.getProgramParameter(b,35715)+`

Program Info Log: `+P+`
`+I+`
`+R)}else""!==P?console.warn("THREE.WebGLProgram: Program Info Log:",P):(""===_||""===L)&&(B=!1);B&&(this.diagnostics={runnable:O,programLog:P,vertexShader:{log:_,prefix:w},fragmentShader:{log:L,prefix:S}})}return h.deleteShader(C),h.deleteShader(D),this.getUniforms=function(){return void 0===o&&(o=new sx(h,b)),o},this.getAttributes=function(){return void 0===l&&(l=function(A,e){let t={},i=A.getProgramParameter(e,35721);for(let r=0;r<i;r++){let s=A.getActiveAttrib(e,r),a=s.name,o=1;35674===s.type&&(o=2),35675===s.type&&(o=3),35676===s.type&&(o=4),t[a]={type:s.type,location:A.getAttribLocation(e,a),locationSize:o}}return t}(h,b)),l},this.destroy=function(){i.releaseStatesOfProgram(this),h.deleteProgram(b),this.program=void 0},this.name=t.shaderName,this.id=sw++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=C,this.fragmentShader=D,this}var sz=0,sF=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(A){let e=A.vertexShader,t=A.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(t),s=this._getShaderCacheForMaterial(A);return!1===s.has(i)&&(s.add(i),i.usedTimes++),!1===s.has(r)&&(s.add(r),r.usedTimes++),this}remove(A){for(let e of this.materialCache.get(A))e.usedTimes--,0===e.usedTimes&&this.shaderCache.delete(e.code);return this.materialCache.delete(A),this}getVertexShaderID(A){return this._getShaderStage(A.vertexShader).id}getFragmentShaderID(A){return this._getShaderStage(A.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(A){let e=this.materialCache;return!1===e.has(A)&&e.set(A,new Set),e.get(A)}_getShaderStage(A){let e=this.shaderCache;if(!1===e.has(A)){let t=new sU(A);e.set(A,t)}return e.get(A)}},sU=class{constructor(A){this.id=sz++,this.code=A,this.usedTimes=0}};function sk(A,e,t,i,r,s,a){let o=new tN,l=new sF,h=[],c=r.isWebGL2,d=r.logarithmicDepthBuffer,u=r.vertexTextures,p=r.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};return{getParameters:function(s,o,h,m,g){let v,y,x,b,w=m.fog,S=g.geometry,M=s.isMeshStandardMaterial?m.environment:null,E=(s.isMeshStandardMaterial?t:e).get(s.envMap||M),T=E&&306===E.mapping?E.image.height:null,C=f[s.type];null!==s.precision&&(p=r.getMaxPrecision(s.precision))!==s.precision&&console.warn("THREE.WebGLProgram.getParameters:",s.precision,"not supported, using",p,"instead.");let D=S.morphAttributes.position||S.morphAttributes.normal||S.morphAttributes.color,P=void 0!==D?D.length:0,_=0;if(void 0!==S.morphAttributes.position&&(_=1),void 0!==S.morphAttributes.normal&&(_=2),void 0!==S.morphAttributes.color&&(_=3),C){let L=i8[C];v=L.vertexShader,y=L.fragmentShader}else v=s.vertexShader,y=s.fragmentShader,l.update(s),x=l.getVertexShaderID(s),b=l.getFragmentShaderID(s);let O=A.getRenderTarget(),B=s.alphaTest>0,I=s.clearcoat>0,R=s.iridescence>0;return{isWebGL2:c,shaderID:C,shaderName:s.type,vertexShader:v,fragmentShader:y,defines:s.defines,customVertexShaderID:x,customFragmentShaderID:b,isRawShaderMaterial:!0===s.isRawShaderMaterial,glslVersion:s.glslVersion,precision:p,instancing:!0===g.isInstancedMesh,instancingColor:!0===g.isInstancedMesh&&null!==g.instanceColor,supportsVertexTextures:u,outputEncoding:null===O?A.outputEncoding:!0===O.isXRRenderTarget?O.texture.encoding:3e3,map:!!s.map,matcap:!!s.matcap,envMap:!!E,envMapMode:E&&E.mapping,envMapCubeUVHeight:T,lightMap:!!s.lightMap,aoMap:!!s.aoMap,emissiveMap:!!s.emissiveMap,bumpMap:!!s.bumpMap,normalMap:!!s.normalMap,objectSpaceNormalMap:1===s.normalMapType,tangentSpaceNormalMap:0===s.normalMapType,decodeVideoTexture:!!s.map&&!0===s.map.isVideoTexture&&3001===s.map.encoding,clearcoat:I,clearcoatMap:I&&!!s.clearcoatMap,clearcoatRoughnessMap:I&&!!s.clearcoatRoughnessMap,clearcoatNormalMap:I&&!!s.clearcoatNormalMap,iridescence:R,iridescenceMap:R&&!!s.iridescenceMap,iridescenceThicknessMap:R&&!!s.iridescenceThicknessMap,displacementMap:!!s.displacementMap,roughnessMap:!!s.roughnessMap,metalnessMap:!!s.metalnessMap,specularMap:!!s.specularMap,specularIntensityMap:!!s.specularIntensityMap,specularColorMap:!!s.specularColorMap,opaque:!1===s.transparent&&1===s.blending,alphaMap:!!s.alphaMap,alphaTest:B,gradientMap:!!s.gradientMap,sheen:s.sheen>0,sheenColorMap:!!s.sheenColorMap,sheenRoughnessMap:!!s.sheenRoughnessMap,transmission:s.transmission>0,transmissionMap:!!s.transmissionMap,thicknessMap:!!s.thicknessMap,combine:s.combine,vertexTangents:!!s.normalMap&&!!S.attributes.tangent,vertexColors:s.vertexColors,vertexAlphas:!0===s.vertexColors&&!!S.attributes.color&&4===S.attributes.color.itemSize,vertexUvs:!!s.map||!!s.bumpMap||!!s.normalMap||!!s.specularMap||!!s.alphaMap||!!s.emissiveMap||!!s.roughnessMap||!!s.metalnessMap||!!s.clearcoatMap||!!s.clearcoatRoughnessMap||!!s.clearcoatNormalMap||!!s.iridescenceMap||!!s.iridescenceThicknessMap||!!s.displacementMap||!!s.transmissionMap||!!s.thicknessMap||!!s.specularIntensityMap||!!s.specularColorMap||!!s.sheenColorMap||!!s.sheenRoughnessMap,uvsVertexOnly:!(s.map||s.bumpMap||s.normalMap||s.specularMap||s.alphaMap||s.emissiveMap||s.roughnessMap||s.metalnessMap||s.clearcoatNormalMap||s.iridescenceMap||s.iridescenceThicknessMap||s.transmission>0||s.transmissionMap||s.thicknessMap||s.specularIntensityMap||s.specularColorMap||s.sheen>0||s.sheenColorMap||s.sheenRoughnessMap)&&!!s.displacementMap,fog:!!w,useFog:!0===s.fog,fogExp2:w&&w.isFogExp2,flatShading:!!s.flatShading,sizeAttenuation:s.sizeAttenuation,logarithmicDepthBuffer:d,skinning:!0===g.isSkinnedMesh,morphTargets:void 0!==S.morphAttributes.position,morphNormals:void 0!==S.morphAttributes.normal,morphColors:void 0!==S.morphAttributes.color,morphTargetsCount:P,morphTextureStride:_,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:s.dithering,shadowMapEnabled:A.shadowMap.enabled&&h.length>0,shadowMapType:A.shadowMap.type,toneMapping:s.toneMapped?A.toneMapping:0,physicallyCorrectLights:A.physicallyCorrectLights,premultipliedAlpha:s.premultipliedAlpha,doubleSided:2===s.side,flipSided:1===s.side,useDepthPacking:!!s.depthPacking,depthPacking:s.depthPacking||0,index0AttributeName:s.index0AttributeName,extensionDerivatives:s.extensions&&s.extensions.derivatives,extensionFragDepth:s.extensions&&s.extensions.fragDepth,extensionDrawBuffers:s.extensions&&s.extensions.drawBuffers,extensionShaderTextureLOD:s.extensions&&s.extensions.shaderTextureLOD,rendererExtensionFragDepth:c||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||i.has("EXT_shader_texture_lod"),customProgramCacheKey:s.customProgramCacheKey()}},getProgramCacheKey:function(e){let t=[];if(e.shaderID?t.push(e.shaderID):(t.push(e.customVertexShaderID),t.push(e.customFragmentShaderID)),void 0!==e.defines)for(let i in e.defines)t.push(i),t.push(e.defines[i]);return!1===e.isRawShaderMaterial&&(t.push(e.precision),t.push(e.outputEncoding),t.push(e.envMapMode),t.push(e.envMapCubeUVHeight),t.push(e.combine),t.push(e.vertexUvs),t.push(e.fogExp2),t.push(e.sizeAttenuation),t.push(e.morphTargetsCount),t.push(e.morphAttributeCount),t.push(e.numDirLights),t.push(e.numPointLights),t.push(e.numSpotLights),t.push(e.numHemiLights),t.push(e.numRectAreaLights),t.push(e.numDirLightShadows),t.push(e.numPointLightShadows),t.push(e.numSpotLightShadows),t.push(e.shadowMapType),t.push(e.toneMapping),t.push(e.numClippingPlanes),t.push(e.numClipIntersection),t.push(e.depthPacking),o.disableAll(),e.isWebGL2&&o.enable(0),e.supportsVertexTextures&&o.enable(1),e.instancing&&o.enable(2),e.instancingColor&&o.enable(3),e.map&&o.enable(4),e.matcap&&o.enable(5),e.envMap&&o.enable(6),e.lightMap&&o.enable(7),e.aoMap&&o.enable(8),e.emissiveMap&&o.enable(9),e.bumpMap&&o.enable(10),e.normalMap&&o.enable(11),e.objectSpaceNormalMap&&o.enable(12),e.tangentSpaceNormalMap&&o.enable(13),e.clearcoat&&o.enable(14),e.clearcoatMap&&o.enable(15),e.clearcoatRoughnessMap&&o.enable(16),e.clearcoatNormalMap&&o.enable(17),e.iridescence&&o.enable(18),e.iridescenceMap&&o.enable(19),e.iridescenceThicknessMap&&o.enable(20),e.displacementMap&&o.enable(21),e.specularMap&&o.enable(22),e.roughnessMap&&o.enable(23),e.metalnessMap&&o.enable(24),e.gradientMap&&o.enable(25),e.alphaMap&&o.enable(26),e.alphaTest&&o.enable(27),e.vertexColors&&o.enable(28),e.vertexAlphas&&o.enable(29),e.vertexUvs&&o.enable(30),e.vertexTangents&&o.enable(31),e.uvsVertexOnly&&o.enable(32),e.fog&&o.enable(33),t.push(o.mask),o.disableAll(),e.useFog&&o.enable(0),e.flatShading&&o.enable(1),e.logarithmicDepthBuffer&&o.enable(2),e.skinning&&o.enable(3),e.morphTargets&&o.enable(4),e.morphNormals&&o.enable(5),e.morphColors&&o.enable(6),e.premultipliedAlpha&&o.enable(7),e.shadowMapEnabled&&o.enable(8),e.physicallyCorrectLights&&o.enable(9),e.doubleSided&&o.enable(10),e.flipSided&&o.enable(11),e.useDepthPacking&&o.enable(12),e.dithering&&o.enable(13),e.specularIntensityMap&&o.enable(14),e.specularColorMap&&o.enable(15),e.transmission&&o.enable(16),e.transmissionMap&&o.enable(17),e.thicknessMap&&o.enable(18),e.sheen&&o.enable(19),e.sheenColorMap&&o.enable(20),e.sheenRoughnessMap&&o.enable(21),e.decodeVideoTexture&&o.enable(22),e.opaque&&o.enable(23),t.push(o.mask),t.push(A.outputEncoding)),t.push(e.customProgramCacheKey),t.join()},getUniforms:function(A){let e=f[A.type],t;if(e){let i=i8[e];t=ik.clone(i.uniforms)}else t=A.uniforms;return t},acquireProgram:function(e,t){let i;for(let r=0,a=h.length;r<a;r++){let o=h[r];if(o.cacheKey===t){i=o,++i.usedTimes;break}}return void 0===i&&(i=new sN(A,t,e,s),h.push(i)),i},releaseProgram:function(A){if(0==--A.usedTimes){let e=h.indexOf(A);h[e]=h[h.length-1],h.pop(),A.destroy()}},releaseShaderCache:function(A){l.remove(A)},programs:h,dispose:function(){l.dispose()}}}function sG(){let A=new WeakMap;return{get:function(e){let t=A.get(e);return void 0===t&&(t={},A.set(e,t)),t},remove:function(e){A.delete(e)},update:function(e,t,i){A.get(e)[t]=i},dispose:function(){A=new WeakMap}}}function sV(A,e){return A.groupOrder!==e.groupOrder?A.groupOrder-e.groupOrder:A.renderOrder!==e.renderOrder?A.renderOrder-e.renderOrder:A.material.id!==e.material.id?A.material.id-e.material.id:A.z!==e.z?A.z-e.z:A.id-e.id}function sj(A,e){return A.groupOrder!==e.groupOrder?A.groupOrder-e.groupOrder:A.renderOrder!==e.renderOrder?A.renderOrder-e.renderOrder:A.z!==e.z?e.z-A.z:A.id-e.id}function sH(){let A=[],e=0,t=[],i=[],r=[];function s(t,i,r,s,a,o){let l=A[e];return void 0===l?(l={id:t.id,object:t,geometry:i,material:r,groupOrder:s,renderOrder:t.renderOrder,z:a,group:o},A[e]=l):(l.id=t.id,l.object=t,l.geometry=i,l.material=r,l.groupOrder=s,l.renderOrder=t.renderOrder,l.z=a,l.group=o),e++,l}return{opaque:t,transmissive:i,transparent:r,init:function(){e=0,t.length=0,i.length=0,r.length=0},push:function(A,e,a,o,l,h){let c=s(A,e,a,o,l,h);a.transmission>0?i.push(c):!0===a.transparent?r.push(c):t.push(c)},unshift:function(A,e,a,o,l,h){let c=s(A,e,a,o,l,h);a.transmission>0?i.unshift(c):!0===a.transparent?r.unshift(c):t.unshift(c)},finish:function(){for(let t=e,i=A.length;t<i;t++){let r=A[t];if(null===r.id)break;r.id=null,r.object=null,r.geometry=null,r.material=null,r.group=null}},sort:function(A,e){t.length>1&&t.sort(A||sV),i.length>1&&i.sort(e||sj),r.length>1&&r.sort(e||sj)}}}function sW(){let A=new WeakMap;return{get:function(e,t){let i;return!1===A.has(e)?(i=new sH,A.set(e,[i])):t>=A.get(e).length?(i=new sH,A.get(e).push(i)):i=A.get(e)[t],i},dispose:function(){A=new WeakMap}}}function sY(){let A={};return{get:function(e){let t;if(void 0!==A[e.id])return A[e.id];switch(e.type){case"DirectionalLight":t={direction:new e4,color:new eY};break;case"SpotLight":t={position:new e4,direction:new e4,color:new eY,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new e4,color:new eY,distance:0,decay:0};break;case"HemisphereLight":t={direction:new e4,skyColor:new eY,groundColor:new eY};break;case"RectAreaLight":t={color:new eY,position:new e4,halfWidth:new e4,halfHeight:new e4}}return A[e.id]=t,t}}}var sX=0;function sQ(A,e){return(e.castShadow?1:0)-(A.castShadow?1:0)}function sq(A,e){let t;let i=new sY,r=(t={},{get:function(A){let e;if(void 0!==t[A.id])return t[A.id];switch(A.type){case"DirectionalLight":case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new e_};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new e_,shadowCameraNear:1,shadowCameraFar:1e3}}return t[A.id]=e,e}}),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let a=0;a<9;a++)s.probe.push(new e4);let o=new e4,l=new tE,h=new tE;return{setup:function(t,a){let o=0,l=0,h=0;for(let c=0;c<9;c++)s.probe[c].set(0,0,0);let d=0,u=0,p=0,f=0,m=0,g=0,v=0,y=0;t.sort(sQ);let x=!0!==a?Math.PI:1;for(let b=0,w=t.length;b<w;b++){let S=t[b],M=S.color,E=S.intensity,T=S.distance,C=S.shadow&&S.shadow.map?S.shadow.map.texture:null;if(S.isAmbientLight)o+=M.r*E*x,l+=M.g*E*x,h+=M.b*E*x;else if(S.isLightProbe)for(let D=0;D<9;D++)s.probe[D].addScaledVector(S.sh.coefficients[D],E);else if(S.isDirectionalLight){let P=i.get(S);if(P.color.copy(S.color).multiplyScalar(S.intensity*x),S.castShadow){let _=S.shadow,L=r.get(S);L.shadowBias=_.bias,L.shadowNormalBias=_.normalBias,L.shadowRadius=_.radius,L.shadowMapSize=_.mapSize,s.directionalShadow[d]=L,s.directionalShadowMap[d]=C,s.directionalShadowMatrix[d]=S.shadow.matrix,g++}s.directional[d]=P,d++}else if(S.isSpotLight){let O=i.get(S);if(O.position.setFromMatrixPosition(S.matrixWorld),O.color.copy(M).multiplyScalar(E*x),O.distance=T,O.coneCos=Math.cos(S.angle),O.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),O.decay=S.decay,S.castShadow){let B=S.shadow,I=r.get(S);I.shadowBias=B.bias,I.shadowNormalBias=B.normalBias,I.shadowRadius=B.radius,I.shadowMapSize=B.mapSize,s.spotShadow[p]=I,s.spotShadowMap[p]=C,s.spotShadowMatrix[p]=S.shadow.matrix,y++}s.spot[p]=O,p++}else if(S.isRectAreaLight){let R=i.get(S);R.color.copy(M).multiplyScalar(E),R.halfWidth.set(.5*S.width,0,0),R.halfHeight.set(0,.5*S.height,0),s.rectArea[f]=R,f++}else if(S.isPointLight){let N=i.get(S);if(N.color.copy(S.color).multiplyScalar(S.intensity*x),N.distance=S.distance,N.decay=S.decay,S.castShadow){let z=S.shadow,F=r.get(S);F.shadowBias=z.bias,F.shadowNormalBias=z.normalBias,F.shadowRadius=z.radius,F.shadowMapSize=z.mapSize,F.shadowCameraNear=z.camera.near,F.shadowCameraFar=z.camera.far,s.pointShadow[u]=F,s.pointShadowMap[u]=C,s.pointShadowMatrix[u]=S.shadow.matrix,v++}s.point[u]=N,u++}else if(S.isHemisphereLight){let U=i.get(S);U.skyColor.copy(S.color).multiplyScalar(E*x),U.groundColor.copy(S.groundColor).multiplyScalar(E*x),s.hemi[m]=U,m++}}f>0&&(e.isWebGL2||!0===A.has("OES_texture_float_linear")?(s.rectAreaLTC1=i6.LTC_FLOAT_1,s.rectAreaLTC2=i6.LTC_FLOAT_2):!0===A.has("OES_texture_half_float_linear")?(s.rectAreaLTC1=i6.LTC_HALF_1,s.rectAreaLTC2=i6.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=o,s.ambient[1]=l,s.ambient[2]=h;let k=s.hash;(k.directionalLength!==d||k.pointLength!==u||k.spotLength!==p||k.rectAreaLength!==f||k.hemiLength!==m||k.numDirectionalShadows!==g||k.numPointShadows!==v||k.numSpotShadows!==y)&&(s.directional.length=d,s.spot.length=p,s.rectArea.length=f,s.point.length=u,s.hemi.length=m,s.directionalShadow.length=g,s.directionalShadowMap.length=g,s.pointShadow.length=v,s.pointShadowMap.length=v,s.spotShadow.length=y,s.spotShadowMap.length=y,s.directionalShadowMatrix.length=g,s.pointShadowMatrix.length=v,s.spotShadowMatrix.length=y,k.directionalLength=d,k.pointLength=u,k.spotLength=p,k.rectAreaLength=f,k.hemiLength=m,k.numDirectionalShadows=g,k.numPointShadows=v,k.numSpotShadows=y,s.version=sX++)},setupView:function(A,e){let t=0,i=0,r=0,a=0,c=0,d=e.matrixWorldInverse;for(let u=0,p=A.length;u<p;u++){let f=A[u];if(f.isDirectionalLight){let m=s.directional[t];m.direction.setFromMatrixPosition(f.matrixWorld),o.setFromMatrixPosition(f.target.matrixWorld),m.direction.sub(o),m.direction.transformDirection(d),t++}else if(f.isSpotLight){let g=s.spot[r];g.position.setFromMatrixPosition(f.matrixWorld),g.position.applyMatrix4(d),g.direction.setFromMatrixPosition(f.matrixWorld),o.setFromMatrixPosition(f.target.matrixWorld),g.direction.sub(o),g.direction.transformDirection(d),r++}else if(f.isRectAreaLight){let v=s.rectArea[a];v.position.setFromMatrixPosition(f.matrixWorld),v.position.applyMatrix4(d),h.identity(),l.copy(f.matrixWorld),l.premultiply(d),h.extractRotation(l),v.halfWidth.set(.5*f.width,0,0),v.halfHeight.set(0,.5*f.height,0),v.halfWidth.applyMatrix4(h),v.halfHeight.applyMatrix4(h),a++}else if(f.isPointLight){let y=s.point[i];y.position.setFromMatrixPosition(f.matrixWorld),y.position.applyMatrix4(d),i++}else if(f.isHemisphereLight){let x=s.hemi[c];x.direction.setFromMatrixPosition(f.matrixWorld),x.direction.transformDirection(d),c++}}},state:s}}function sZ(A,e){let t=new sq(A,e),i=[],r=[];return{init:function(){i.length=0,r.length=0},state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:function(A){t.setup(i,A)},setupLightsView:function(A){t.setupView(i,A)},pushLight:function(A){i.push(A)},pushShadow:function(A){r.push(A)}}}function sK(A,e){let t=new WeakMap;return{get:function(i,r=0){let s;return!1===t.has(i)?(s=new sZ(A,e),t.set(i,[s])):r>=t.get(i).length?(s=new sZ(A,e),t.get(i).push(s)):s=t.get(i)[r],s},dispose:function(){t=new WeakMap}}}var sJ=class extends t7{constructor(A){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(A)}copy(A){return super.copy(A),this.depthPacking=A.depthPacking,this.map=A.map,this.alphaMap=A.alphaMap,this.displacementMap=A.displacementMap,this.displacementScale=A.displacementScale,this.displacementBias=A.displacementBias,this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this}},s$=class extends t7{constructor(A){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new e4,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(A)}copy(A){return super.copy(A),this.referencePosition.copy(A.referencePosition),this.nearDistance=A.nearDistance,this.farDistance=A.farDistance,this.map=A.map,this.alphaMap=A.alphaMap,this.displacementMap=A.displacementMap,this.displacementScale=A.displacementScale,this.displacementBias=A.displacementBias,this}},s0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,s1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
`?(i[i.length-1]+=r,r="",s===`
`&&i.push("")):e.getTextWidth(i[i.length-1]+r,A)>A.width&&(i[i.length-1].length&&i.push(""),e.getTextWidth(i[i.length-1]+r,A)>A.width&&(1===r.length?(i[i.length-1]+=r,r=""):(i[i.length-1]+=r.slice(0,-1),r=r[r.length-1],i.push(""))));return i[i.length-1]+=r,i}(A,t,2===h?l.toUpperCase():3===h?l.toLowerCase():l),{shapes:d,charWidths:u,charCoords:p}=t.generateShapes(c,A),f=d.map(A=>new g7().fromShape(A));this.vectorShapes=f;let m=f.map(A=>vS.create({shape:A,parameters:{depth:s,extrudeBevelSegments:o,extrudeBevelSize:a,windingRule:s<=0?v5.NONZERO:v5.ODD,subdivisions:this.isLowResolution&&s>0?1:12}})),g=m.length?f_(m):((e=new ig).setAttribute("position",new ii(new Float32Array([]),3)),e.setIndex(new ii(new Uint16Array([]),1)),e);g.translate(-(.5*i),.5*r,0),this.dispose(),this.wrappedText=c,this.charCoords=p,this.charWidths=u,this.deleteAttribute("extrudeNormal"),Object.entries(g.attributes).forEach(([A,e])=>{this.setAttribute(A,e)}),this.setIndex(g.index),this.computeBoundingSphere()}clone(){let A=ft(new ig,yl.prototype);return A.copy(this),console.log("CloneGeometry",this,A),A}copy(A){return Object.entries(A.attributes).forEach(([A,e])=>{this.setAttribute(A,e)}),this.setIndex(A.index),this.userData={parameters:{...A.userData.parameters},type:"TextGeometry"},this}async setText(A){this.font&&await this.font.loadingPromise,await this.update({...this.userData.parameters,text:A})}get text(){return this.userData.parameters.text??""}},yh=new Promise(A=>{v8=A}),yc=!1;async function yd(){if(yc)return;let[A,e]=await Promise.all([t.e(256).then(t.bind(t,6256)),fetch("https://unpkg.com/@splinetool/modelling-wasm@0.9.157/build/process.wasm").then(A=>A.arrayBuffer())]);v8(await A.default({wasmBinary:e})),yc=!0}function yu(A,e,t){let i,r={parameters:A,type:A.type};if("VectorGeometry"===A.type){let s=g7.createFromState(A.shape,A.width,A.height);r.shape=s}else if("NonParametricGeometry"===A.type)A.data.groups&&A.data.groups.forEach(A=>A.materialIndex=Math.max(A.materialIndex??0,0)),r.geometry=new aU().parse(A);else{if("SubdivGeometry"===A.type)return new yx(A,t);if("TextGeometry"===A.type)return new yl(A,e)}try{i=yG(r)}catch(a){console.error(a)}if(!i){let o=g7.createFromState(mu.defaultData(),100,100);r.shape=o,i=yG(r)}return i}var yp,yf=new e8,ym=new e4;yh.then(A=>{yp=A});var yg=new Float32Array([10,10,0,-10,10,0,-10,-10,0,10,-10,0]),yv=new Uint32Array([0,1,2,3]),yy=new Uint8Array([4]),yx=class extends ig{constructor(A,e){super();let{originalGeometry:t,subdividedGeometry:i,subdivPointer:r}=yx.build(A,void 0,!e,void 0);this.subdivPointer=r,this.originalGeometry=t,this.subdividedGeometry=i??void 0,Object.assign(this,this.subdividedGeometry??this.originalGeometry),this.calcBoundingBox()}dispose(){yx.freeSubdivPointer(this.subdivPointer)}calcBoundingBox(){let A=this.originalGeometry;null===A.boundingSphere&&(A.boundingSphere=new tm,this.subdividedGeometry&&(this.subdividedGeometry.boundingSphere=A.boundingSphere));let e=A.attributes.position,t=A.boundingSphere.center;yf.setFromBufferAttribute(e),yf.getCenter(t),A.boundingSphere.radius=t.distanceTo(yf.max),isNaN(A.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this),yf.getSize(ym);let i={width:ym.x,height:ym.y,depth:ym.z};return this.userData.parameters=i,i}static build(A,e,t,i){let r,s,a,o=A?.phongAngle??35;!1===t&&(o=-1),e&&(yp.free_bvh(e),yp.free_subdivision_surface(e));try{r=yx.allocate(A,i)}catch(l){console.error(l,A),r=yx.allocate({positionWASM:yg,indexWASM:yv,verticesPerFaceWASM:yy},i)}return yp.set_destination_refinement_level(r,0),s=yx.buildLevel(r,!0,o),A.subdivisions>0?(yp.set_destination_refinement_level(r,A.subdivisions),a=yx.buildLevel(r,!1,o)):a=null,{subdivPointer:r,originalGeometry:s,subdividedGeometry:a}}static primitiveToQuads(A,e,t){let i;A.widthSegments>16&&(A.widthSegments=16),A.heightSegments>16&&(A.heightSegments=16),A.depthSegments>16&&(A.depthSegments=16),A.radialSegments>16&&(A.radialSegments=16),"DodecahedronGeometry"===A.type&&(A.detail=0);let r=void 0!==A.shape?e.geometry:yu(A,t,!1),s,a,o,l;if({positions:s,triIndices:l}=yw(r.getAttribute("position"),r.getIndex()),"CylinderGeometry"===A.type&&0===A.cornerRadius&&0===A.hollow&&!1===A.openEnded){let h=A.radialSegments*A.heightSegments*6,c=h+3*A.radialSegments;i=[h,c]}return{indices:a,verticesPerFace:o}=yC(s,l,r,i),{positions:s,indices:a,verticesPerFace:o}}static allocate(A,e){let t,i,r,s,a=[],o=[];A.positionWASM&&A.positionWASM.length>0?(i=A.positionWASM,r=A.indexWASM,s=A.verticesPerFaceWASM):(i=yg,r=yv,s=yy);let l=i.length,h=r.length,c=s.length,d=i.length+a.length+o.length,u=r.length+s.length,p=d*Float32Array.BYTES_PER_ELEMENT+u*Uint32Array.BYTES_PER_ELEMENT,f=d*Float32Array.BYTES_PER_ELEMENT,m=(Uint32Array.BYTES_PER_ELEMENT,yp._malloc(p)),g=new Float32Array(yp.HEAPF32.buffer,m,d),v=new Uint32Array(yp.HEAPU32.buffer,m+f,u);g.set(i,0),g.set(a,i.length),g.set(o,i.length+a.length),v.set(r,0),v.set(s,r.length),A?.scaleBaked?.some(A=>1!==A)&&(t=new tE().makeScale(...A.scaleBaked)),e&&(t?t.premultiply(e):t=e);let y=t?yp.alloc_subdivision_surface2(m,l,m+f,h,m+f+r.length*Uint32Array.BYTES_PER_ELEMENT,c,t.elements):yp.alloc_subdivision_surface(m,l,m+f,h,m+f+r.length*Uint32Array.BYTES_PER_ELEMENT,c);return yp._free(m),y}static buildLevel(A,e,t,i,r){let s=r?yp.get_mesh_data2(A,e?yp.Level.CONTROL:yp.Level.REFINED,t,r.elements):yp.get_mesh_data(A,e?yp.Level.CONTROL:yp.Level.REFINED,t),a=yp.HEAPU32.subarray(s>>2,(s>>2)+8),o=a.subarray(4,8),l=0,h=yp.HEAPU32[a[l]>>2],c=yp.HEAPF32.subarray(h>>2,(h>>2)+o[l]);l++;let d=yp.HEAPU32[a[l]>>2],u=yp.HEAPF32.subarray(d>>2,(d>>2)+o[l]);l++;let p=yp.HEAPU32[a[l]>>2],f=yp.HEAPU32.subarray(p>>2,(p>>2)+o[l]);l++;let m=yp.HEAPU32[a[l]>>2],g=yp.HEAPU32.subarray(m>>2,(m>>2)+o[l]);if(l++,void 0===i){let v=new ig;if(v.setIndex(new is(g,1)),v.setAttribute("position",new io(c,3)),v.setAttribute("normal",new io(u,3)),e){v.setAttribute("faceMap",new is(f,1));let y=new Float32Array(u.length/3*4).fill(0);v.setAttribute("color",new ii(y,4))}return yp.free_mesh_data(s),v.userData.type="SubdivGeometry",v}i.getAttribute("position").copyArray(c),i.getAttribute("normal").copyArray(u),i.attributes.position.needsUpdate=!0,i.attributes.normal.needsUpdate=!0,yp.free_mesh_data(s)}static freeSubdivPointer(A){yp.free_bvh(A),yp.free_subdivision_surface(A)}static buildControlCageWireframe(A,e,t){let i=yp.get_wireframe_data_for_base_level(A),r=yp.HEAPU32.subarray(i>>2,(i>>2)+4),s=r.subarray(2,4),a=0,o=yp.HEAPU32[r[a]>>2],l=yp.HEAPF32.subarray(o>>2,(o>>2)+s[a]);a++;let h=yp.HEAPU32[r[a]>>2],c=yp.HEAPU32.subarray(h>>2,(h>>2)+s[a]);if(void 0===e){let d=new ig;d.setAttribute("position",new io(l,3));let u=new Float32Array(l.length);for(let p=0,f=l.length;p<f;)u[p++]=t.r,u[p++]=t.g,u[p++]=t.b;return d.setAttribute("color",new ii(u,3)),d.setIndex(new is(c,1)),yp.free_wireframe_data_for_base_level(i),d}e.getAttribute("position").copyArray(l),e.attributes.position.needsUpdate=!0,yp.free_wireframe_data_for_base_level(i)}static updateCollabMesh(A,e,t){let i=0===e;i||yp.set_destination_refinement_level(A,e);let r=t?yp.get_topological_data2(A,i?yp.Level.CONTROL:yp.Level.REFINED,t.elements):yp.get_topological_data(A,i?yp.Level.CONTROL:yp.Level.REFINED),s=yp.HEAPU32.subarray(r>>2,(r>>2)+6),a=s.subarray(3,6),o=0,l=yp.HEAPU32[s[o]>>2],h=new Float32Array(yp.HEAPF32.subarray(l>>2,(l>>2)+a[o]));o++;let c=yp.HEAPU32[s[o]>>2],d=new Uint32Array(yp.HEAPU32.subarray(c>>2,(c>>2)+a[o]));o++;let u=yp.HEAPU32[s[o]>>2],p=new Uint8Array(yp.HEAPU32.subarray(u>>2,(u>>2)+a[o]));return yp.free_topological_data(r),{positions:h,indices:d,verticesPerFace:p}}},yb=["getX","getY","getZ"];function yw(A,e){let t={},i=e?e.count:A.count,r=0,s=[],a=[];for(let o=0;o<i;o++){let l=e?e.getX(o):o,h="";for(let c=0;c<3;c++)h+=`${~~(1e4*A[yb[c]](l))},`;if(h in t)s.push(t[h]);else{for(let d=0;d<3;d++)a.push(A[yb[d]](l));t[h]=r,s.push(r),r++}}let u=[];for(let p=0;p<s.length;p+=3)s[p]===s[p+1]||s[p]===s[p+2]||s[p+1]===s[p+2]||u.push(s[p],s[p+1],s[p+2]);return{positions:a,triIndices:u}}var yS=new e4,yM=new e4,yE=new e4,yT=new e4;function yC(A,e,t,i){let r=[],s=[];if(void 0!==t.userData.shape&&0===t.userData.parameters.depth&&0===t.userData.shape.shapeHoles.length){let a=t.userData.shape.extractShapePointsToFlatArray([]),o=t.userData.parameters.spikes;if("EllipseGeometry"===t.userData.type&&o<=24&&o%4==0&&t.userData.parameters.angle>=360){let l=a.length/2/o;a=a.filter((A,e)=>Math.floor(e/2)%l==0)}let h=0;for(let c=0;c<a.length;c+=2)h+=(a[c]-a[(0===c?a.length:c)-2])*(a[c+1]+a[(0===c?a.length:c)-1]);A.length=0;let d=0;if(h<0)for(let u=0;u<a.length;u+=2)A.push(a[u],a[u+1],0),r.push(d++);else for(let p=a.length-2;p>=0;p-=2)A.push(a[p],a[p+1],0),r.push(d++);return s.push(d),{indices:r,verticesPerFace:s}}for(let f=0,m=t.capStartIndex??e.length;f<m;)e[f+1]===e[f+3]&&e[f+2]===e[f+5]||e[f+0]===e[f+3]&&e[f+2]===e[f+4]?(yS.set(A[3*e[f]],A[3*e[f]+1],A[3*e[f]+2]),yM.set(A[3*e[f+1]],A[3*e[f+1]+1],A[3*e[f+1]+2]),yE.set(A[3*e[f+4]],A[3*e[f+4]+1],A[3*e[f+4]+2]),yT.set(A[3*e[f+5]],A[3*e[f+5]+1],A[3*e[f+5]+2]),yM.sub(yS).normalize(),yE.sub(yS).normalize(),yT.sub(yS).normalize(),Math.abs(yM.cross(yE).dot(yT))>.005||i&&i.some((A,e)=>e%2!=1&&f>=i[e]&&f<i[e+1])?(r.push(e[f],e[f+1],e[f+2]),s.push(3),f+=3):(r.push(e[f],e[f+1],e[f+4],e[f+5]),s.push(4),f+=6)):(r.push(e[f],e[f+1],e[f+2]),s.push(3),f+=3);if(void 0!==t.capStartIndex){let g=[],v=[],y=0,x=new Float32Array([t.userData.parameters.depth])[0];for(let b=0,w=0;b<A.length;b+=3,w++)0===A[b+2]&&(g.push(w),y++),A[b+2]===x&&v.push(w);if(0===t.userData.parameters.extrudeBevelSize){let S=v[0];v[0]=v[1],v[1]=S}g.reverse(),r.push(...g,...v),s.push(y,y)}return{indices:r,verticesPerFace:s}}var yD={};((A,e)=>{for(var t in e)ei(A,t,{get:e[t],enumerable:!0})})(yD,{calcBoolean:()=>yN,calcBooleanTopological:()=>yR,freeMeshSet:()=>yU,getMeshSet:()=>yz,transformMeshSet:()=>yF});var yP,y_=new Promise(A=>{yP=A}),yL=!1;async function yO(){if(yL)return;let[A,e]=await Promise.all([t.e(669).then(t.bind(t,6669)),fetch("https://unpkg.com/@splinetool/boolean-wasm@0.9.157/build/boolean.wasm").then(A=>A.arrayBuffer())]);yP(await A.default({wasmBinary:e})),yL=!0}function yB(A){let e=A.length,t=e*Uint32Array.BYTES_PER_ELEMENT,i=e*Float32Array.BYTES_PER_ELEMENT,r=Number.isInteger(A[0])?t:i,s=bn._malloc(r);return(Number.isInteger(A[0])?new Uint32Array(bn.HEAPU32.buffer,s,e):new Float32Array(bn.HEAPF32.buffer,s,e)).set(A,0),s}function yI(A){switch(A){case 0:return bn.OP.UNION;case 1:return bn.OP.INTERSECTION;case 2:return bn.OP.A_MINUS_B;case 3:return bn.OP.B_MINUS_A;case 4:return bn.OP.SYMMETRIC_DIFFERENCE;case 5:return bn.OP.ALL;default:throw Error("Unknown boolean operation "+A)}}function yR(A,e){void 0===ba&&(ba=bn.init_csg());let t=yB(A),i=bn.csg_calc_topological(ba,t,A.length,yI(e));bn._free(t);let r=bn.HEAPU32.subarray(i>>2,(i>>2)+6),s=r.subarray(3,6),a=0,o=bn.HEAPU32[r[a]>>2],l=new Float32Array(bn.HEAPF32.subarray(o>>2,(o>>2)+s[a]));a++;let h=bn.HEAPU32[r[a]>>2],c=new Uint32Array(bn.HEAPU32.subarray(h>>2,(h>>2)+s[a]));a++;let d=bn.HEAPU32[r[a]>>2],u=new Uint8Array(bn.HEAPU32.subarray(d>>2,(d>>2)+s[a]));return bn.free_mesh_data(i),{positions:l,indices:c,verticesPerFace:u}}function yN(A,e,t,i){void 0===ba&&(ba=bn.init_csg());let r=yB(A),s=bn.csg_calc(ba,r,A.length,i,yI(e));bn._free(r);let a=bn.HEAPU32.subarray(s>>2,(s>>2)+5),o=a.subarray(2,5),l=0,h=bn.HEAPU32[a[l]>>2],c=bn.HEAPF32.subarray(h>>2,(h>>2)+o[l]);l++;let d=bn.HEAPU32[a[l]>>2],u=bn.HEAPF32.subarray(d>>2,(d>>2)+o[l]),p=o[++l];t.setAttribute("position",new io(c,3)),t.setAttribute("normal",new io(u,3));let f=bn.HEAPF32.subarray((s>>2)+5,(s>>2)+5+6);return null===t.boundingSphere&&(t.boundingSphere=new tm),t.boundingSphere.center.set(f[0],f[1],f[2]),t.boundingSphere.radius=(f[3]**2+f[4]**2+f[5]**2)**.5,t.userData.parameters={width:2*f[3],height:2*f[4],depth:2*f[5]},bn.free_mesh_data(s),p}function yz(A,e,t){let i,r,s;if(void 0===bn)return -1;if(e&&void 0!==A.userData.positions){let a=A.userData;s=a.verticesPerFace.length,i=a.positions,r=Array(a.verticesPerFace.reduce((A,e)=>A+e,0)+s);for(let o=0,l=0,h=0;o<a.verticesPerFace.length;o++){r[h++]=a.verticesPerFace[o];for(let c=0;c<a.verticesPerFace[o];c++)r[h++]=a.indices[l++]}}else({positions:i,faceIndices:r,nFaces:s}=function(A,e,t){let i,{positions:r,triIndices:s}=yw(A.getAttribute("position"),A.getIndex()),a;if(e&&t){let{indices:o,verticesPerFace:l}=yC(r,s,A);a=l.length,i=[];for(let h=0,c=0;h<a;h++){i.push(l[h]);for(let d=0;d<l[h];d++)i.push(o[c++])}}else{let u=s.length;i=Array(u+u/3),a=0;for(let p=0,f=0;f<i.length;)i[f++]=3,a++,i[f++]=s[p++],i[f++]=s[p++],i[f++]=s[p++]}return{positions:r,faceIndices:i,nFaces:a}}(A,e,t));let d=i.length,u=r.length,p=i.length,f=r.length,m=p*Float32Array.BYTES_PER_ELEMENT+f*Uint32Array.BYTES_PER_ELEMENT,g=p*Float32Array.BYTES_PER_ELEMENT,v=(Uint32Array.BYTES_PER_ELEMENT,bn._malloc(m)),y=new Float32Array(bn.HEAPF32.buffer,v,p),x=new Uint32Array(bn.HEAPU32.buffer,v+g,f);return y.set(i,0),x.set(r,0),bn.get_csg_mesh(v,d,v+g,u,s)}function yF(A,e){bn.transform_csg_mesh(A,e.elements)}function yU(A){bn.free_csg_mesh(A)}y_.then(A=>bn=A);var yk={ConeGeometry:g_,CubeGeometry:gL,CylinderGeometry:gT,DodecahedronGeometry:gR,EllipseGeometry:vE,HelixGeometry:vO,IcosahedronGeometry:vI,LatheGeometry:vN,NonParametricGeometry:vK,PolygonGeometry:vJ,PyramidGeometry:v$,RectangleGeometry:v7,SphereGeometry:yA,PlaneGeometry:ye,BackdropGeometry:yt,StarGeometry:yr,TextFrameGeometry:ys,TorusGeometry:yn,TorusKnotGeometry:ya,TriangleGeometry:yo,VectorGeometry:vS},yG=A=>yk[A.type].create(A);function yV(A){return null!==A&&"booleanOp"in A}var yj=class extends gE(iR){constructor(){super(...arguments),this.booleanMeshSetAddress=-1,this.booleanWasTransformed=!1,this.booleanMatrixInvOld=new tE}updateVisible(){super.updateVisible(),this.visible=!yV(this.parent)&&this.visible,yV(this.parent)&&this.parent.invalidateDownstreamBooleanData()}freeBooleanPointer(){-1!==this.booleanMeshSetAddress&&(yD.freeMeshSet(this.booleanMeshSetAddress),this.booleanMeshSetAddress=-1)}invalidateDownstreamBooleanData(A=!1){return A?this.booleanWasTransformed=!0:this.freeBooleanPointer(),yV(this.parent)?this.parent.invalidateDownstreamBooleanData():this}invalidateUpstreamBooleanData(){for(let A of(this.freeBooleanPointer(),this.children))A instanceof yj&&(A.freeBooleanPointer(),yV(A)&&A.invalidateUpstreamBooleanData())}updateTransformState(A){let e=super.updateTransformState(A);return e&&yV(this.parent)&&this.invalidateDownstreamBooleanData(!0),e}},yH=new e8;function yW(A,e=0,t=A.count,i,r){let s=1/0,a=1/0,o=1/0,l=-1/0,h=-1/0,c=-1/0;for(let d=e;d<t;d++){let u=A.getX(d),p=A.getY(d),f=A.getZ(d);u<s&&(s=u),p<a&&(a=p),f<o&&(o=f),u>l&&(l=u),p>h&&(h=p),f>c&&(c=f)}yH.min.set(s,a,o),yH.max.set(l,h,c),yH.getCenter(i),yH.getSize(r).multiplyScalar(.5)}var yY=new ig,yX=new iA,yQ=class extends yj{constructor(A,e){super(yY,yX),this.super_Entity(A,e)}updateState(A,e){this.updateState_Entity(A,e)}updateEntityBoxSize(A,e){let t=this.geometry.getAttribute("position");void 0!==t?yW(t,this.geometry.drawRange.start,this.geometry.drawRange.count<1/0?this.geometry.drawRange.count:t.count,A,e):super.updateEntityBoxSize(A,e)}},yq=eh(ed()),yZ=class{constructor(A){A=A??{},this.name=A.name,this.type=A.type,this.node=A.node,this.size=A.size,this.needsUpdate=A.needsUpdate}get value(){return this.node.value}set value(A){this.node.value=A}},yK=class{constructor(A){this.hashProperties=void 0,this.isNode=!0,this.shortcuts={},this.uuid=eP.generateUUID(),this.type=A,this.name=""}analyze(A,e){e=e??{},A.analyzing=!0,this.build(A.addFlow(e.slot,e.cache,e.context),"v4"),A.clearVertexNodeCode(),A.clearFragmentNodeCode(),A.removeFlow(),A.analyzing=!1}analyzeAndFlow(A,e,t){return t=t??{},this.analyze(A,t),this.flow(A,e,t)}flow(A,e,t){t=t??{},A.addFlow(t.slot,t.cache,t.context);let i={result:this.build(A,e),code:A.clearNodeCode(),extra:A.context.extra};return A.removeFlow(),i}build(A,e,t){e=e??this.getType(A,e);let i=A.getNodeData(t??this);return A.analyzing&&this.appendDepsNode(A,i,e),-1===A.nodes.indexOf(this)&&A.nodes.push(this),void 0!==this.updateFrame&&-1===A.updaters.indexOf(this)&&A.updaters.push(this),this.generate(A,e,t)}updateFrame(A){}generateReadonly(A,e,t,i,r,s){return""}generate(A,e,t,i,r){return""}parse(A,e,t,i){}appendDepsNode(A,e,t){e.deps=(e.deps||0)+1;let i=A.getTypeLength(t);(i>(e.outputMax||0)||this.getType(A,t))&&(e.outputMax=i,e.output=t)}setName(A){this.name=A}getName(){return this.name}getType(A,e){return"sampler2D"===e||"samplerCube"===e?e:this.type}getHash(){let A="{",e,t;for(e in this)(t=this[e])instanceof yK&&(A+='"'+e+'":'+t.getHash()+",");if(this.hashProperties)for(let i=0;i<this.hashProperties.length;i++)t=this[e=this.hashProperties[i]],A+='"'+e+'":"'+String(t)+'",';return A+'"id":"'+this.uuid+'"}'}},yJ=new class{constructor(){this.nodes={},this.keywords={}}add(A){this.nodes[A.name]=A}addKeyword(A,e,t){t=void 0===t||t,this.keywords[A]={callback:e,cache:t}}remove(A){delete this.nodes[A.name]}removeKeyword(A){delete this.keywords[A]}get(A){return this.nodes[A]}getKeyword(A,e){return this.keywords[A].callback(e)}getKeywordData(A){return this.keywords[A]}contains(A){return void 0!==this.nodes[A]}containsKeyword(A){return void 0!==this.keywords[A]}},y$=class extends yK{constructor(A,e){super(A),this.scope="",e=e??{},this.shared=void 0===e.shared||e.shared,this.unique=void 0!==e.unique&&e.unique}build(A,e,t,i){if(e=e??this.getType(A),this.getShared(A,e)){let r=this.getUnique(A,e);r&&void 0===this.uuid&&(this.uuid=eP.generateUUID()),t=A.getUUID(t??this.getUUID(),!r);let s=A.getNodeData(t),a=s.output||this.getType(A);if(A.analyzing)return(s.deps||0)>0||this.getLabel()?(this.appendDepsNode(A,s,e),this.generate(A,e,t)):super.build(A,e,t);if(r)return s.name=s.name||super.build(A,e,t),s.name;if(!this.getLabel()&&(!this.getShared(A,a)||A.context.ignoreCache||1===s.deps))return super.build(A,e,t);t=this.getUUID(!1);let o=this.getTemp(A,t);if(o)return A.format(o,a,e);{o=super.generate(A,e,t,s.output,i);let l=this.generate(A,a,t);return A.addNodeCode(o+" = "+l+";"),A.format(o,a,e)}}return super.build(A,e,t)}getShared(A,e){return"sampler2D"!==e&&"samplerCube"!==e&&this.shared}getUnique(A,e){return this.unique}setLabel(A){return this.label=A,this}getLabel(){return this.label}getUUID(A){let e=this.uuid;return"string"==typeof this.scope&&(e=this.scope+"-"+e),e}getTemp(A,e){e=e||this.uuid;let t=A.getVars()[e];return t?t.name:void 0}generate(A,e,t,i,r){return this.getShared(A,e)||console.error("TempNode is not shared"),t=t??this.uuid,A.getTempVar(t,i??this.getType(A),r,this.getLabel()).name}},y0=class extends y${constructor(A,e){(e=e??{}).shared=void 0!==e.shared&&e.shared,super(A,e),this.readonly=!1}setReadonly(A){return this.readonly=A,this.hashProperties=this.readonly?["value"]:void 0,this}getReadonly(){return this.readonly}generate(A,e,t,i,r,s){t=A.getUUID(t??this.getUUID()),i=i??this.getType(A);let a=A.getNodeData(t);return this.getReadonly()&&void 0!==this.generateReadonly?this.generateReadonly(A,e,t,i,r,s):A.isShader("vertex")?(a.vertex||(a.vertex=A.createVertexUniform(i,this,r,s,this.getLabel())),A.format(a.vertex.name,i,e)):(a.fragment||(a.fragment=A.createFragmentUniform(i,this,r,s,this.getLabel())),A.format(a.fragment.name,i,e))}},y1=class extends y0{constructor(A=0,e){super("v2"),this.nodeType="Vector2",this.value=A instanceof e_?A:new e_(A,e)}get x(){return this.value.x}set x(A){this.value.x=A}get y(){return this.value.y}set y(A){this.value.y=A}generateReadonly(A,e,t,i,r,s){return A.format("vec2("+this.value.x+", "+this.value.y+")",i,e)}},y2=class extends y0{constructor(A=0,e,t){super("v3"),this.nodeType="Vector3",this.value=A instanceof e4?A:new e4(A,e,t)}get x(){return this.value.x}set x(A){this.value.x=A}get y(){return this.value.y}set y(A){this.value.y=A}get z(){return this.value.z}set z(A){this.value.z=A}generateReadonly(A,e,t,i,r,s){return A.format("vec3("+this.value.x+", "+this.value.y+", "+this.value.z+")",i,e)}},y3=class extends eY{constructor(A,e,t,i){super(A,e,t),this.isColorA=!0,this.a=i}setRGBA(A,e,t,i){super.setRGB(A,e,t),this.a=i}copy(A){return super.copy(A),this.a="a"in A?A.a:1,this}clone(){return new this.constructor(this.r,this.g,this.b,this.a)}get x(){return this.r}get y(){return this.g}get z(){return this.b}get w(){return this.a}set x(A){this.r=A}set y(A){this.g=A}set z(A){this.b=A}set w(A){this.a=A}},y4=class extends y0{constructor(A){super("v4"),this.nodeType="Vector4",this.value=A instanceof y3?A:new y3(A.r,A.g,A.b,A.a)}generateReadonly(A,e,t,i,r,s){return A.format("vec4("+this.value.r+", "+this.value.g+", "+this.value.b+", "+this.value.a+")",i,e)}},y5=/^\s*([a-z_0-9]+)\s([a-z_0-9]+)\s*\((.*?)\)/i,y6=/[a-z_0-9]+/gi,y8=class extends y${constructor(A,e,t,i,r){super(r),this.src="",this.nodeType="Function",this.useKeywords=!0,this.includes=[],this.extensions={},this.keywords={},this.isMethod=void 0===r,this.isInterface=!1,this.parse(A,e,t,i)}getShared(A,e){return!this.isMethod}getType(A){return A.getTypeByFormat(this.type)}getInputByName(A){if(this.inputs){let e=this.inputs.length;for(;e--;)if(this.inputs[e].name===A)return this.inputs[e]}}getIncludeByName(A){if(this.includes){let e=this.includes.length;for(;e--;)if(this.includes[e].name===A)return this.includes[e]}}generate(A,e,t,i,r){let s,a=0,o=this.src;if(this.includes)for(let l=0;l<this.includes.length;l++)A.include(this.includes[l],this);for(let h in this.extensions)A.extensions[h]=!0;let c=[];for(;s=y6.exec(this.src);)c.push(s);for(let d=0;d<c.length;d++){let u=c[d],p=u[0],f=!this.isMethod||!this.getInputByName(p),m=p;if(this.keywords[p]||this.useKeywords&&f&&yJ.containsKeyword(p)){let g=this.keywords[p];if(!g){let v=yJ.getKeywordData(p);v.cache&&(g=A.keywords[p]),g=g||yJ.getKeyword(p,A),v.cache&&(A.keywords[p]=g)}m=g.build(A)}p!==m&&"."!==o[u.index+a-1]&&(o=o.substring(0,u.index+a)+m+o.substring(u.index+p.length+a),a+=m.length-p.length),void 0===this.getIncludeByName(m)&&yJ.contains(m)&&A.include(yJ.get(m))}return"source"===e?o:this.isMethod?(this.isInterface||A.include(this,void 0,o),this.name):A.format("( "+o+" )",this.getType(A),e)}parse(A,e,t,i){if(this.src=A||"",this.includes=e??[],this.extensions=t??{},this.keywords=i??{},this.isMethod){let r=y5.exec(this.src);if(this.inputs=[],r&&4==r.length){this.type=r[1],this.name=r[2];let s=r[3].match(y6);if(s){let a=0;for(;a<s.length;){let o=s[a++],l;"in"===o||"out"===o||"inout"===o?l=s[a++]:(l=o,o="");let h=s[a++];this.inputs.push({name:h,type:l,qualifier:o})}}this.isInterface=-1===this.src.indexOf("{")}else this.type="",this.name=""}}},y9=/^([a-z_0-9]+)\s([a-z_0-9]+)\s?\=?\s?(.*?)(\;|$)/i,y7=class extends y${constructor(A="",e){super(),this.src="",this.useDefine=!1,this.nodeType="Const",this.parse(A||y7.PI,void 0,void 0,void 0,e)}getType(A){return A.getTypeByFormat(this.type)}parse(A,e,t,i,r){this.src=A||"";let s,a,o="",l=y9.exec(A);this.useDefine=r??"#"===this.src.charAt(0),l&&l.length>1?(a=l[1],s=l[2],o=l[3]):(s=this.src,a="f"),this.name=s,this.type=a,this.value=o}build(A,e){if("source"===e){if(this.value)return this.useDefine?"#define "+this.name+" "+this.value:"const "+this.type+" "+this.name+" = "+this.value+";";if(this.useDefine)return this.src}return A.include(this),A.format(this.name,this.getType(A),e)}generate(A,e,t,i,r){return A.format(this.name,this.getType(A),e)}},xA=y7;xA.PI="PI",xA.PI2="PI2",xA.RECIPROCAL_PI="RECIPROCAL_PI",xA.RECIPROCAL_PI2="RECIPROCAL_PI2",xA.LOG2="LOG2",xA.EPSILON="EPSILON";var xe=RegExp(`^structs*([a-z_0-9]+)s*{s*((.|
)*?)}`,"gim"),xt=RegExp("s*(w*?)s*(w*?)(=|;)","gim"),xi=class extends y${constructor(A=""){super(),this.inputs=[],this.src="",this.nodeType="Struct",this.parse(A)}getType(A){return A.getTypeByFormat(this.name)}getInputByName(A){let e=this.inputs.length;for(;e--;)if(this.inputs[e].name===A)return this.inputs[e]}generate(A,e,t,i,r){return"source"===e?this.src+";":A.format("( "+this.src+" )",this.getType(A),e)}parse(A=""){this.src=A,this.inputs=[];let e=xe.exec(A);if(e){let t=e[2],i;for(;i=xt.exec(t);)this.inputs.push({type:i[1],name:i[2]});this.name=e[1]}else this.name="";this.type=this.name}},xr=class extends y${constructor(A){super("v2",{shared:!1}),this.nodeType="UV",this.index=A??0}generate(A,e){A.requires.uv[this.index]=!0;let t=this.index>0?this.index+1:"",i=A.isShader("vertex")?"uv"+t:"vUv"+t;return A.format(i,this.getType(A),e)}};yJ.addKeyword("uv",function(){return new xr}),yJ.addKeyword("uv2",function(){return new xr(1)});var xs=class extends y${constructor(A,e){super("v4"),this.nodeType="ColorSpace",this.input=A,this.method=e??xs.LINEAR_TO_LINEAR,this.hashProperties=["method"]}static getEncodingComponents(A){switch(A){case 3e3:return["Linear"];case 3001:return["sRGB"];default:return[]}}generate(A,e){let t=this.input.build(A,"v4"),i=this.getType(A),r=xs.Nodes[this.method],s=A.include(r);if(s===xs.LINEAR_TO_LINEAR)return A.format(t,i,e);if(r.inputs?.length!==2)return A.format(s+"( "+t+" )",i,e);{let a=this.factor.build(A,"f");return A.format(s+"( "+t+", "+a+" )",i,e)}}fromEncoding(A){let e=xs.getEncodingComponents(A);this.method="LinearTo"+e[0],this.factor=e[1]}fromDecoding(A){let e=xs.getEncodingComponents(A);this.method=e[0]+"ToLinear",this.factor=e[1]}},xn=xs;xn.Nodes={LinearToLinear:new y8(["vec4 LinearToLinear( in vec4 value ) {","	return value;","}"].join(`
`)),sRGBToLinear:new y8(["vec4 sRGBToLinear( in vec4 value ) {","	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.w );","}"].join(`
`)),LinearTosRGB:new y8(["vec4 LinearTosRGB( in vec4 value ) {","	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.w );","}"].join(`
`))},xn.LINEAR_TO_LINEAR="LinearToLinear",xn.SRGB_TO_LINEAR="sRGBToLinear",xn.LINEAR_TO_SRGB="LinearTosRGB";var xa=class extends y8{constructor(A="",e,t,i,r){super(A,r,i,t,e),this.nodeType="Expression"}},xo=class extends y0{constructor(A=new eJ,e,t,i){super("v4",{shared:!0}),this.nodeType="Texture",this.value=A,this.uv=e??new xr,this.bias=t,this.project=void 0!==i&&i}getTexture(A,e){return super.generate(A,e,this.value.uuid,"t")}generate(A,e){let t,i;if("sampler2D"===e)return this.getTexture(A,e);let r=this.getTexture(A,e),s=this.uv.build(A,this.project?"v4":"v2"),a=this.bias?this.bias.build(A,"f"):void 0;void 0===a&&A.context.bias&&(a=A.context.bias.setTexture(this).build(A,"f")),t=this.project?"texture2DProj":a?"tex2DBias":"tex2D",i=a?t+"( "+r+", "+s+", "+a+" )":t+"( "+r+", "+s+" )";let o={include:A.isShader("vertex"),ignoreCache:!0},l=this.getType(A);return A.addContext(o),this.colorSpace=this.colorSpace??new xn(new xa("",l)),this.colorSpace.fromDecoding(A.getTextureEncodingFromMap(this.value)),this.colorSpace.input.parse(i),i=this.colorSpace.build(A,l),A.removeContext(),A.format(i,l,e)}},xl=class extends y0{constructor(A){super("f"),this.nodeType="Float",this.value=A??0}generateReadonly(A,e,t,i,r,s){return A.format(this.value+(this.value%1?"":".0"),i,e)}},xh=class extends y${constructor(A,e){super(),this.inputs=[],this.nodeType="FunctionCall",this.value=A,this.inputs=e??[]}getFunction(){return this.value}getType(A){return this.value.getType(A)}generate(A,e,t,i,r){i=this.getType(A);let s=this.value,a=s.build(A,e)+"( ",o=[];if(s.inputs){for(let l=0;l<s.inputs.length;l++){let h=s.inputs[l],c=this.inputs[l]||this.inputs[h.name];o.push(c.build(A,A.getTypeByFormat(h.type)))}a+=o.join(", ")+" )"}return A.format(a,i,e)}},xc=class extends y${constructor(A,e,t=xc.ADD){super(),this.nodeType="Operator",this.type=A.type,this.a=A,this.b=e,this.op=t}getType(A){let e=this.a.getType(A),t=this.b.getType(A);return A.isTypeMatrix(e)?"v4":A.getTypeLength(t)>A.getTypeLength(e)?t:e}generate(A,e){let t=this.getType(A);this.type=t;let i=this.a.build(A,t),r=this.b.build(A,t);return A.format("( "+i+" "+this.op+" "+r+" )",t,e)}},xd=xc;xd.ADD="+",xd.SUB="-",xd.MUL="*",xd.DIV="/";var xu=class extends y${constructor(A,e=xu.ABS,t,i){super(),this.nodeType="Math",this.a=A,"string"!=typeof e?this.b=e:i=e,"string"!=typeof t?this.c=t:i=t,this.method=i,this.hashProperties=["method"]}getNumInputs(A){switch(this.method){case xu.MIX:case xu.CLAMP:case xu.REFRACT:case xu.SMOOTHSTEP:case xu.FACEFORWARD:return 3;case xu.MIN:case xu.MAX:case xu.MOD:case xu.STEP:case xu.REFLECT:case xu.DISTANCE:case xu.DOT:case xu.CROSS:case xu.POW:return 2;default:return 1}}getInputType(A){let e=A.getTypeLength(this.a.getType(A)),t=this.b?A.getTypeLength(this.b.getType(A)):0,i=this.c?A.getTypeLength(this.c.getType(A)):0;return e>t&&e>i?this.a.getType(A):t>i?this.b.getType(A):this.c.getType(A)}getType(A){switch(this.method){case xu.LENGTH:case xu.DISTANCE:case xu.DOT:return"f";case xu.CROSS:return"v3"}return this.getInputType(A)}generate(A,e){let t,i,r,s=this.a?A.getTypeLength(this.a.getType(A)):0,a=this.b?A.getTypeLength(this.b.getType(A)):0,o=this.c?A.getTypeLength(this.c.getType(A)):0,l=this.getInputType(A),h=this.getType(A);switch(this.type=h,this.method){case xu.NEGATE:return A.format("( -"+this.a.build(A,l)+" )",l,e);case xu.INVERT:return A.format("( 1.0 - "+this.a.build(A,l)+" )",l,e);case xu.CROSS:t=this.a.build(A,"v3"),i=this.b.build(A,"v3");break;case xu.STEP:t=this.a.build(A,1===s?"f":l),i=this.b.build(A,l);break;case xu.MIN:case xu.MAX:case xu.MOD:t=this.a.build(A,l),i=this.b.build(A,1===a?"f":l);break;case xu.REFRACT:t=this.a.build(A,l),i=this.b.build(A,l),r=this.c.build(A,"f");break;case xu.MIX:t=this.a.build(A,l),i=this.b.build(A,l),r=this.c.build(A,1===o?"f":l);break;default:t=this.a.build(A,l),this.b&&(i=this.b.build(A,l)),this.c&&(r=this.c.build(A,l))}let c=[];c.push(t),i&&c.push(i),r&&c.push(r);let d=this.getNumInputs(A);if(c.length!==d)throw Error(`Arguments not match used in "${this.method}". Require ${d}, currently ${c.length}.`);return A.format(this.method+"( "+c.join(", ")+" )",h,e)}},xp=xu;xp.RAD="radians",xp.DEG="degrees",xp.EXP="exp",xp.EXP2="exp2",xp.LOG="log",xp.LOG2="log2",xp.SQRT="sqrt",xp.INV_SQRT="inversesqrt",xp.FLOOR="floor",xp.CEIL="ceil",xp.NORMALIZE="normalize",xp.FRACT="fract",xp.SATURATE="saturate",xp.SIN="sin",xp.COS="cos",xp.TAN="tan",xp.ASIN="asin",xp.ACOS="acos",xp.ARCTAN="atan",xp.ABS="abs",xp.SIGN="sign",xp.LENGTH="length",xp.NEGATE="negate",xp.INVERT="invert",xp.MIN="min",xp.MAX="max",xp.MOD="mod",xp.STEP="step",xp.REFLECT="reflect",xp.DISTANCE="distance",xp.DOT="dot",xp.CROSS="cross",xp.POW="pow",xp.MIX="mix",xp.CLAMP="clamp",xp.REFRACT="refract",xp.SMOOTHSTEP="smoothstep",xp.FACEFORWARD="faceforward";var xf=class extends y${constructor(A,e,t){super("v4"),this.nodeType="TextureCubeUV",this.value=A,this.uv=e,this.bias=t}bilinearCubeUV(A,e,t,i){let r=new xh(xf.Nodes.bilinearCubeUV,[e,t,i]);this.colorSpaceTL=this.colorSpaceTL??new xn(new xa("","v4")),this.colorSpaceTL.fromDecoding(A.getTextureEncodingFromMap(this.value.value)),this.colorSpaceTL.input.parse(r.build(A)+".tl"),this.colorSpaceTR=this.colorSpaceTR??new xn(new xa("","v4")),this.colorSpaceTR.fromDecoding(A.getTextureEncodingFromMap(this.value.value)),this.colorSpaceTR.input.parse(r.build(A)+".tr"),this.colorSpaceBL=this.colorSpaceBL??new xn(new xa("","v4")),this.colorSpaceBL.fromDecoding(A.getTextureEncodingFromMap(this.value.value)),this.colorSpaceBL.input.parse(r.build(A)+".bl"),this.colorSpaceBR=this.colorSpaceBR??new xn(new xa("","v4")),this.colorSpaceBR.fromDecoding(A.getTextureEncodingFromMap(this.value.value)),this.colorSpaceBR.input.parse(r.build(A)+".br");let s={include:A.isShader("vertex"),ignoreCache:!0};A.addContext(s),this.colorSpaceTLExp=new xa(this.colorSpaceTL.build(A,"v4"),"v4"),this.colorSpaceTRExp=new xa(this.colorSpaceTR.build(A,"v4"),"v4"),this.colorSpaceBLExp=new xa(this.colorSpaceBL.build(A,"v4"),"v4"),this.colorSpaceBRExp=new xa(this.colorSpaceBR.build(A,"v4"),"v4"),A.removeContext();let a=new xa("mix( mix( cubeUV_TL, cubeUV_TR, cubeUV.f.x ), mix( cubeUV_BL, cubeUV_BR, cubeUV.f.x ), cubeUV.f.y )","v4");return a.keywords.cubeUV_TL=this.colorSpaceTLExp,a.keywords.cubeUV_TR=this.colorSpaceTRExp,a.keywords.cubeUV_BL=this.colorSpaceBLExp,a.keywords.cubeUV_BR=this.colorSpaceBRExp,a.keywords.cubeUV=r,a}generate(A,e){if(!A.isShader("fragment"))return console.warn("TextureCubeUVNode is not compatible with "+A.shader+" shader."),A.format("vec4( 0.0 )",this.getType(A),e);{let t=this.uv,i=this.bias||A.context.roughness,r=new xh(xf.Nodes.roughnessToMip,[i]),s=new xp(r,xf.Nodes.m0,xf.Nodes.cubeUV_maxMipLevel,xp.CLAMP),a=new xp(s,xp.FLOOR),o=new xp(s,xp.FRACT),l=this.bilinearCubeUV(A,this.value,t,a),h=this.bilinearCubeUV(A,this.value,t,new xd(a,new xl(1).setReadonly(!0),xd.ADD)),c=new xp(l,h,o,xp.MIX);return A.format(c.build(A),"v4",e)}}},xm=xf;xm.Nodes=(As=new xi(`struct TextureCubeUVData {
			vec4 tl;
			vec4 tr;
			vec4 br;
			vec4 bl;
			vec2 f;
		}`),An=new xA("float cubeUV_maxMipLevel 8.0",!0),Aa=new xA("float cubeUV_minMipLevel 4.0",!0),Ao=new xA("float cubeUV_maxTileSize 256.0",!0),Al=new xA("float cubeUV_minTileSize 16.0",!0),(Ah=new y8(`float getFace(vec3 direction) {
				vec3 absDirection = abs(direction);
				float face = -1.0;
				if (absDirection.x > absDirection.z) {
					if (absDirection.x > absDirection.y)
						face = direction.x > 0.0 ? 0.0 : 3.0;
					else
						face = direction.y > 0.0 ? 1.0 : 4.0;
				} else {
					if (absDirection.z > absDirection.y)
						face = direction.z > 0.0 ? 2.0 : 5.0;
					else
						face = direction.y > 0.0 ? 1.0 : 4.0;
				}
				return face;
		}`)).useKeywords=!1,(Ac=new y8(`vec2 getUV(vec3 direction, float face) {
				vec2 uv;
				if (face == 0.0) {
					uv = vec2(direction.z, direction.y) / abs(direction.x); // pos x
				} else if (face == 1.0) {
					uv = vec2(-direction.x, -direction.z) / abs(direction.y); // pos y
				} else if (face == 2.0) {
					uv = vec2(-direction.x, direction.y) / abs(direction.z); // pos z
				} else if (face == 3.0) {
					uv = vec2(-direction.z, direction.y) / abs(direction.x); // neg x
				} else if (face == 4.0) {
					uv = vec2(-direction.x, direction.z) / abs(direction.y); // neg y
				} else {
					uv = vec2(direction.x, direction.y) / abs(direction.z); // neg z
				}
				return 0.5 * (uv + 1.0);
		}`)).useKeywords=!1,(Ad=new y8(`TextureCubeUVData bilinearCubeUV(sampler2D envMap, vec3 direction, float mipInt) {
			float face = getFace(direction);
			float filterInt = max(cubeUV_minMipLevel - mipInt, 0.0);
			mipInt = max(mipInt, cubeUV_minMipLevel);
			float faceSize = exp2(mipInt);
			float texelSize = 1.0 / (3.0 * cubeUV_maxTileSize);
			vec2 uv = getUV(direction, face) * (faceSize - 1.0);
			vec2 f = fract(uv);
			uv += 0.5 - f;
			if (face > 2.0) {
				uv.y += faceSize;
				face -= 3.0;
			}
			uv.x += face * faceSize;
			if(mipInt < cubeUV_maxMipLevel){
				uv.y += 2.0 * cubeUV_maxTileSize;
			}
			uv.y += filterInt * 2.0 * cubeUV_minTileSize;
			uv.x += 3.0 * max(0.0, cubeUV_maxTileSize - 2.0 * faceSize);
			uv *= texelSize;
			vec4 tl = texture2D(envMap, uv);
			uv.x += texelSize;
			vec4 tr = texture2D(envMap, uv);
			uv.y += texelSize;
			vec4 br = texture2D(envMap, uv);
			uv.x -= texelSize;
			vec4 bl = texture2D(envMap, uv);
			return TextureCubeUVData( tl, tr, br, bl, f );
		}`,[As,Ah,Ac,An,Aa,Ao,Al])).useKeywords=!1,Au=new xA("float r0 1.0",!0),Ap=new xA("float v0 0.339",!0),Af=new xA("float m0 -2.0",!0),Am=new xA("float r1 0.8",!0),Ag=new xA("float v1 0.276",!0),Av=new xA("float m1 -1.0",!0),Ay=new xA("float r4 0.4",!0),Ax=new xA("float v4 0.046",!0),Ab=new xA("float m4 2.0",!0),Aw=new xA("float r5 0.305",!0),AS=new xA("float v5 0.016",!0),AM=new xA("float m5 3.0",!0),AE=new xA("float r6 0.21",!0),AT=new xA("float v6 0.0038",!0),AC=new xA("float m6 4.0",!0),{bilinearCubeUV:Ad,roughnessToMip:new y8(`float roughnessToMip(float roughness) {
			float mip = 0.0;
			if (roughness >= r1) {
				mip = (r0 - roughness) * (m1 - m0) / (r0 - r1) + m0;
			} else if (roughness >= r4) {
				mip = (r1 - roughness) * (m4 - m1) / (r1 - r4) + m1;
			} else if (roughness >= r5) {
				mip = (r4 - roughness) * (m5 - m4) / (r4 - r5) + m4;
			} else if (roughness >= r6) {
				mip = (r5 - roughness) * (m6 - m5) / (r5 - r6) + m5;
			} else {
				mip = -2.0 * log2(1.16 * roughness);// 1.16 = 1.79^0.25
			}
			return mip;
		}`,[Au,Ap,Af,Am,Ag,Av,Ay,Ax,Ab,Aw,AS,AM,AE,AT,AC]),m0:Af,cubeUV_maxMipLevel:An});var xg=class extends y${constructor(A){super("v3"),this.nodeType="Normal",this.scope=A??xg.VIEW}getShared(){return this.scope===xg.WORLD}build(A,e,t,i){let r=A.context[this.scope+"Normal"];return r?r.build(A,e,t,i):super.build(A,e,t)}generate(A,e,t,i,r){let s;switch(this.scope){case xg.VIEW:s=A.isShader("vertex")?"transformedNormal":"geometryNormal";break;case xg.LOCAL:A.isShader("vertex")?s="objectNormal":(A.requires.normal=!0,s="vObjectNormal");break;case xg.WORLD:A.isShader("vertex")?s="inverseTransformDirection( transformedNormal, viewMatrix ).xyz":(A.requires.worldNormal=!0,s="vWNormal")}return A.format(s,this.getType(A),e)}},xv=xg;xv.LOCAL="local",xv.WORLD="world",xv.VIEW="view",xv.NORMAL="normal",yJ.addKeyword("viewNormal",function(){return new xv(xv.VIEW)}),yJ.addKeyword("localNormal",function(){return new xv(xv.NORMAL)}),yJ.addKeyword("worldNormal",function(){return new xv(xv.WORLD)});var xy=class extends y${constructor(A){super("v3"),this.nodeType="Position",this.scope=A??xy.LOCAL}getType(){return this.scope===xy.PROJECTION?"v4":this.type}getShader(){switch(this.scope){case xy.LOCAL:case xy.WORLD:return!1}return!0}generate(A,e,t,i,r){let s;switch(this.scope){case xy.LOCAL:A.isShader("vertex")?s="transformed":(A.requires.position=!0,s="vPosition");break;case xy.WORLD:if(A.isShader("vertex"))return"( modelMatrix * vec4( transformed, 1.0 ) ).xyz";A.requires.worldPosition=!0,s="vWPosition";break;case xy.VIEW:s=A.isShader("vertex")?"-mvPosition.xyz":"vViewPosition";break;case xy.PROJECTION:s=A.isShader("vertex")?"( projectionMatrix * modelViewMatrix * vec4( position, 1.0 ) )":"vec4( 0.0 )"}return A.format(s,this.getType(),e)}},xx=xy;xx.LOCAL="local",xx.WORLD="world",xx.VIEW="view",xx.PROJECTION="projection",yJ.addKeyword("position",function(){return new xx}),yJ.addKeyword("worldPosition",function(){return new xx(xx.WORLD)}),yJ.addKeyword("viewPosition",function(){return new xx(xx.VIEW)});var xb=class extends y${constructor(A){super("v3"),this.nodeType="Reflect",this.scope=A??xb.CUBE}getUnique(A){return!A.context.viewNormal}getType(){return this.scope===xb.SPHERE?"v2":this.type}generate(A,e){let t=this.getUnique(A);if(!A.isShader("fragment"))return console.warn("ReflectNode is not compatible with "+A.shader+" shader."),A.format("vec3( 0.0 )",this.type,e);{let i;switch(this.scope){case xb.VECTOR:{let r=new xv(xv.VIEW),s=A.context.roughness,a=r.build(A,"v3"),o=new xx(xx.VIEW).build(A,"v3"),l=s?s.build(A,"f"):void 0,h=`reflect( -normalize( ${o} ), ${a} )`;l&&(h=`normalize( mix( ${h}, ${a}, ${l} * ${l} ) )`);let c=`inverseTransformDirection( ${h}, viewMatrix )`;t?(A.addNodeCode(`vec3 reflectVec = ${c};`),i="reflectVec"):i=c;break}case xb.CUBE:{let d=new xb(xb.VECTOR).build(A,"v3"),u="vec3( -"+d+".x, "+d+".yz )";t?(A.addNodeCode(`vec3 reflectCubeVec = ${u};`),i="reflectCubeVec"):i=u;break}case xb.SPHERE:{let p="normalize( ( viewMatrix * vec4( "+new xb(xb.VECTOR).build(A,"v3")+", 0.0 ) ).xyz + vec3( 0.0, 0.0, 1.0 ) ).xy * 0.5 + 0.5";t?(A.addNodeCode(`vec2 reflectSphereVec = ${p};`),i="reflectSphereVec"):i=p}}return A.format(i,this.getType(),e)}}},xw=xb;xw.CUBE="cube",xw.SPHERE="sphere",xw.VECTOR="vector";var xS=class extends y${constructor(A=new xo,e,t){super("v4"),this.nodeType="TextureCube",this.value=A,this.radianceNode=new xm(this.value,e??new xw(xw.VECTOR),t),this.irradianceNode=new xm(this.value,new xv(xv.WORLD),new xl(1).setReadonly(!0))}generate(A,e){return A.isShader("fragment")?(A.require("irradiance"),A.context.bias&&A.context.bias.setTexture(this.value),("irradiance"===A.slot?this.irradianceNode:this.radianceNode).build(A,e)):(console.warn("TextureCubeNode is not compatible with "+A.shader+" shader."),A.format("vec4( 0.0 )",this.getType(A),e))}},xM=class extends y0{constructor(A=new iX,e,t){super("v4",{shared:!0}),this.nodeType="CubeTexture",this.value=A,this.uv=e??new xw,this.bias=t}getTexture(A,e){return super.generate(A,e,this.value.uuid,"tc")}generate(A,e){let t;if("samplerCube"===e)return this.getTexture(A,e);let i=this.getTexture(A,e),r=this.uv?.build(A,"v3"),s=this.bias?this.bias.build(A,"f"):void 0;void 0===s&&A.context.bias&&(s=A.context.bias.setTexture(this).build(A,"f")),t=s?"texCubeBias( "+i+", "+r+", "+s+" )":"texCube( "+i+", "+r+" )";let a={include:A.isShader("vertex"),ignoreCache:!0},o=this.getType(A);return A.addContext(a),this.colorSpace=this.colorSpace??new xn(new xa("",o)),this.colorSpace.fromDecoding(A.getTextureEncodingFromMap(this.value)),this.colorSpace.input.parse(t),t=this.colorSpace.build(A,o),A.removeContext(),A.format(t,o,e)}},xE=["x","y","z","w"],xT=["float","vec2","vec3","vec4"],xC={float:"f",vec2:"v2",vec3:"v3",vec4:"v4",mat4:"v4",int:"i",bool:"b","float[]":"f[]","vec4[]":"v4[]"},xD={t:"sampler2D",tc:"samplerCube",b:"bool",i:"int",f:"float",c:"vec3",v2:"vec2",v3:"vec3",v4:"vec4",m3:"mat3",m4:"mat4","f[]":"float[]","v4[]":"vec4[]"},xP=class{constructor(){this.includes={consts:{},functions:{},structs:{}},this.cache="",this.slot="",this.shader="",this.context={},this.getIncludesCode=function(){function A(A,e){return A.deps.length-e.deps.length}return function(e,t){let i=this.getIncludes(e,t);if(!i)return"";let r="";i=i.sort(A);for(let s=0;s<i.length;s++)i[s].src&&(r+=i[s].src+`
`);return r}}(),this.slots=[],this.caches=[],this.contexts=[],this.keywords={},this.nodeData={},this.fragmentVariables={},this.fragmentParsVariables={},this.vertexParsVariables={},this.requires={uv:[],color:[],transparent:!1,irradiance:!1,position:!1,worldPosition:!1,normal:!1,worldNormal:!1,vWorldViewDir:!1,modelMatrix:!1,viewMatrix:!1,projectionMatrix:!1},this.includes={consts:[],functions:[],structs:[]},this.attributes={},this.prefixCode=["#ifdef TEXTURE_LOD_EXT","	#define texCube(a, b) textureCube(a, b)","	#define texCubeBias(a, b, c) textureCubeLodEXT(a, b, c)","	#define tex2D(a, b) texture2D(a, b)","	#define tex2DBias(a, b, c) texture2DLodEXT(a, b, c)","#else","	#define texCube(a, b) textureCube(a, b)","	#define texCubeBias(a, b, c) textureCube(a, b, c)","	#define tex2D(a, b) texture2D(a, b)","	#define tex2DBias(a, b, c) texture2D(a, b, c)","#endif",`
			// NOTE: Include Spline's blending modes. This could be part of BlendNode
			#define SPE_BLENDING_NORMAL 0
			#define SPE_BLENDING_MULTIPLY 1
			#define SPE_BLENDING_SCREEN 2
			#define SPE_BLENDING_OVERLAY 3

			vec3 spe_normalBlend( vec3 a, vec3 b, float alpha ) {
				return mix( a, b, alpha );
			}

			vec3 spe_multiplyBlend( vec3 a, vec3 b, float alpha ) {
				return mix( a, a * b, alpha );
			}

			vec3 spe_screenBlend( vec3 a, vec3 b, float alpha ) {
				vec3 tmp = 1.0 - ( 1.0 - a ) * ( 1.0 - b );
				return mix( a, tmp, alpha );
			}

			vec3 spe_overlayBlend( vec3 a, vec3 b, float alpha ) {
				vec3 tmp = mix( 1. - 2. * (1. - a) * (1. - b), 2. * a * b, step( a, vec3(.5) ) );
				return clamp( mix( a, tmp, alpha ), 0.0, 1.0 );
			}

			vec3 spe_blend( vec3 a, vec3 b, float alpha, int mode ) {
				if ( mode == SPE_BLENDING_NORMAL ) return spe_normalBlend( a, b, alpha );
				else if ( mode == SPE_BLENDING_MULTIPLY ) return spe_multiplyBlend( a, b, alpha );
				else if ( mode == SPE_BLENDING_SCREEN ) return spe_screenBlend( a, b, alpha );
				else if ( mode == SPE_BLENDING_OVERLAY ) return spe_overlayBlend( a, b, alpha );
				return vec3( 1.0 );
			}
			`,"#include <packing>","#include <common>"].join(`
`),this.parsCode={vertex:["float neighbor_offset = 0.0001;",""].join(`
`),fragment:["float accumAlpha = 0.0;",`void accumulateAlpha(float alpha) {
					accumAlpha += (1.0 - accumAlpha) * alpha;
				}`,""].join(`
`)},this.code={vertex:"",fragment:""},this.nodeCode={vertex:"",fragment:""},this.resultCode={vertex:"",fragment:""},this.finalCode={vertex:"",fragment:""},this.inputs={uniforms:{list:[],vertex:[],fragment:[]},arrayUniforms:{list:[],vertex:[],fragment:[]},vars:{varying:[],vertex:[],fragment:[]}},this.defines={},this.uniforms={},this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.updaters=[],this.nodes=[],this.analyzing=!1}build(A,e){this.buildShader("vertex",A),this.buildShader("fragment",e);for(let t=0;t<this.requires.uv.length;t++)if(this.requires.uv[t]){let i=t>0?t+1:"";this.addVaryCode("varying vec2 vUv"+i+";"),t>0&&this.addVertexParsCode("attribute vec2 uv"+i+";"),this.addVertexFinalCode("vUv"+i+" = uv"+i+";")}return this.requires.color[0]&&(this.addVaryCode("varying vec4 vColor;"),this.addVertexParsCode("attribute vec4 color;"),this.addVertexFinalCode("vColor = color;")),this.requires.color[1]&&(this.addVaryCode("varying vec4 vColor2;"),this.addVertexParsCode("attribute vec4 color2;"),this.addVertexFinalCode("vColor2 = color2;")),this.requires.position&&(this.addVaryCode("varying vec3 vPosition;"),this.addVertexFinalCode("vPosition = transformed;")),this.requires.worldPosition,this.requires.normal&&(this.addVaryCode("varying vec3 vObjectNormal;"),this.addVertexFinalCode("vObjectNormal = normal;")),this.requires.modelMatrix&&this.addFragmentParsCode("uniform mat4 modelMatrix;"),this.requires.viewMatrix&&this.addFragmentParsCode("uniform mat4 viewMatrix;"),this.requires.projectionMatrix&&this.addFragmentParsCode("uniform mat4 projectionMatrix;"),this.requires.worldNormal&&(this.addVaryCode("varying vec3 vWNormal;"),this.addVertexFinalCode("vWNormal = inverseTransformDirection( transformedNormal, viewMatrix ).xyz;")),this.requires.vWorldViewDir&&(this.addVaryCode("varying vec3 vWorldViewDir;"),this.addVertexFinalCode("vWorldViewDir = isPerspectiveMatrix( projectionMatrix ) ?  ( (modelMatrix * vec4(position, 1.0)).xyz - cameraPosition ) : vec3( -viewMatrix[0][2], -viewMatrix[1][2], -viewMatrix[2][2] );")),this}buildShader(A,e){this.resultCode[A]=e.build(this.setShader(A),"v4")}setMaterial(A,e){return this.defines={},this}addFlow(A,e,t){return this.addSlot(A).addCache(e).addContext(t)}removeFlow(){return this.removeSlot().removeCache().removeContext()}addCache(A){return this.cache=A??"",this.caches.push(this.cache),this}removeCache(){return this.caches.pop(),this.cache=this.caches[this.caches.length-1]||"",this}addContext(A){return this.context=Object.assign({},this.context,A),this.context.extra=this.context.extra||{},this.contexts.push(this.context),this}removeContext(){return this.contexts.pop(),this.context=this.contexts[this.contexts.length-1]||{},this}addSlot(A){return this.slot=A||"",this.slots.push(this.slot),this}removeSlot(){return this.slots.pop(),this.slot=this.slots[this.slots.length-1]||"",this}addFragmentVariable(A,e){void 0===this.fragmentVariables[A]&&(this.addFragmentCode(`${e} ${A};`),this.fragmentVariables[A]="")}addFragmentParsVariable(A,e){void 0===this.fragmentParsVariables[A]&&(this.addFragmentParsCode(`${e} ${A};`),this.fragmentParsVariables[A]="")}addVertexParsVariable(A,e){void 0===this.vertexParsVariables[A]&&(this.addVertexParsCode(`${e} ${A};`),this.vertexParsVariables[A]="")}addVertexCode(A){this.addCode(A,"vertex")}addFragmentCode(A){this.addCode(A,"fragment")}addCode(A,e){this.code[e??this.shader]+=A+`
`}addVertexNodeCode(A){this.addNodeCode(A,"vertex")}addFragmentNodeCode(A){this.addNodeCode(A,"fragment")}addNodeCode(A,e){this.nodeCode[e??this.shader]+=A+`
`}clearNodeCode(A){A=A??this.shader;let e=this.nodeCode[A];return this.nodeCode[A]="",e}clearVertexNodeCode(){return this.clearNodeCode("vertex")}clearFragmentNodeCode(){return this.clearNodeCode("fragment")}addVertexFinalCode(A){this.addFinalCode(A,"vertex")}addFragmentFinalCode(A){this.addFinalCode(A,"fragment")}addFinalCode(A,e){this.finalCode[e??this.shader]+=A+`
`}addVertexParsCode(A){this.addParsCode(A,"vertex")}addFragmentParsCode(A){this.addParsCode(A,"fragment")}addParsCode(A,e){this.parsCode[e??this.shader]+=A+`
`}addVaryCode(A){this.addVertexParsCode(A),this.addFragmentParsCode(A)}isCache(A){return -1!==this.caches.indexOf(A)}isSlot(A){return -1!==this.slots.indexOf(A)}define(A,e){this.defines[A]=void 0===e?1:e}require(A){this.requires[A]=!0}isDefined(A){return void 0!==this.defines[A]}getVar(A,e,t,i="varying",r="V",s=""){let a=this.getVars(i),o=a[A];if(!o){let l=a.length;o={name:t||"node"+r+l+(s?"_"+s:""),type:e},a.push(o),a[A]=o}return o}getTempVar(A,e,t,i){return this.getVar(A,e,t,this.shader,"T",i)}getAttribute(A,e){if(!this.attributes[A]){let t=this.getVar(A,e);this.addVertexParsCode("attribute "+e+" "+A+";"),this.addVertexFinalCode(t.name+" = "+A+";"),this.attributes[A]={varying:t,name:A,type:e}}return this.attributes[A]}getCode(A){return[this.prefixCode,this.parsCode[A],this.getVarListCode(this.getVars("varying"),"varying"),this.getVarListCode(this.inputs.uniforms[A],"uniform"),this.getVarListCode(this.inputs.arrayUniforms[A],"uniform"),this.getIncludesCode("consts",A),this.getIncludesCode("structs",A),this.getIncludesCode("functions",A),"void main() {",this.getVarListCode(this.getVars(A)),this.code[A],this.resultCode[A],this.finalCode[A],"}"].join(`
`)}getVarListCode(A,e){e=e??"";let t="";for(let i=0,r=A.length;i<r;++i){let s=A[i],a=s.type,o=s.name,l=s.size,h=this.getFormatByType(a);if(void 0===h)throw Error("Node pars "+h+" not found.");h.includes("[]")?t+=e+" "+h.substring(0,h.length-2)+" "+o+`[${l}];
`:t+=e+" "+h+" "+o+`;
`}return t}getVars(A){return this.inputs.vars[A??this.shader]}getNodeData(A){let e=A instanceof yK?A.uuid:A;return this.nodeData[e]=this.nodeData[e]||{}}createUniform(A,e,t,i,r,s){if(e.includes("[]")){let a=this.inputs.arrayUniforms,o=a.list.length,l=new yZ({type:e,size:t.size,name:i||"nodeUA"+o+(s?"_"+s:""),node:t,needsUpdate:r});return a.list.push(l),a[A].push(l),a[A][l.name]=l,this.uniforms[l.name]=l,l}{let h=this.inputs.uniforms,c=h.list.length,d=new yZ({type:e,name:i||"nodeU"+c+(s?"_"+s:""),node:t,needsUpdate:r});return h.list.push(d),h[A].push(d),h[A][d.name]=d,this.uniforms[d.name]=d,d}}createVertexUniform(A,e,t,i,r){return this.createUniform("vertex",A,e,t,i,r)}createFragmentUniform(A,e,t,i,r){return this.createUniform("fragment",A,e,t,i,r)}include(A,e,t){let i;if(A="string"==typeof A?yJ.get(A):A,!1===this.context.include)return A.name;A instanceof y8?i=this.includes.functions:A instanceof xA?i=this.includes.consts:A instanceof xi&&(i=this.includes.structs);let r=i[this.shader]=i[this.shader]||[];if(A){let s=r[A.name];if(s||(s=r[A.name]={node:A,deps:[]},r.push(s),s.src=A.build(this,"source")),A instanceof y8&&e&&r[e.name]&&-1===r[e.name].deps.indexOf(A)&&(r[e.name].deps.push(A),A.includes?.length)){let a=0;do this.include(A.includes[a++],e);while(a<A.includes.length)}return t&&(s.src=t),A.name}throw Error("Include not found.")}colorToVectorProperties(A){return A.replace("r","x").replace("g","y").replace("b","z").replace("a","w")}colorToVector(A){return A.replace(/c/g,"v3")}getIncludes(A,e){return this.includes[A][e||this.shader]}getConstructorFromLength(A){return xT[A-1]}isTypeMatrix(A){return/^m/.test(A)}getTypeLength(A){return"f"===A?1:parseInt(this.colorToVector(A).substr(1))}getTypeFromLength(A){return 1===A?"f":"v"+A}findNode(...A){for(let e=0;e<arguments.length;e++){let t=A[e];if(t?.isNode)return t}}resolve(...A){for(let e=0;e<arguments.length;e++){let t=A[e];if(void 0!==t){if(t.isNode)return t;if(t.isTexture)switch(t.mapping){case 301:case 302:return new xM(t);case 306:return new xS(new xo(t));default:return new xo(t)}else{if(t.isVector2)return new y1(t);if(t.isVector3)return new y2(t);if(t.isVector4)return new y4(t)}}}}format(A,e,t){switch(this.colorToVector(t+" <- "+e)){case"f <- v2":case"f <- v3":case"f <- v4":return A+".x";case"f <- i":case"f <- b":return"float( "+A+" )";case"v2 <- f":return"vec2( "+A+" )";case"v2 <- v3":case"v2 <- v4":return A+".xy";case"v2 <- i":case"v2 <- b":case"v3 <- i":case"v3 <- b":return"vec2( float( "+A+" ) )";case"v3 <- f":return"vec3( "+A+" )";case"v3 <- v2":return"vec3( "+A+", 0.0 )";case"v3 <- v4":return A+".xyz";case"v4 <- f":return"vec4( "+A+" )";case"v4 <- v2":return"vec4( "+A+", 0.0, 1.0 )";case"v4 <- v3":return"vec4( "+A+", 1.0 )";case"v4 <- i":case"v4 <- b":return"vec4( float( "+A+" ) )";case"i <- f":case"i <- b":return"int( "+A+" )";case"i <- v2":case"i <- v3":case"i <- v4":return"int( "+A+".x )";case"b <- f":return"( "+A+" != 0.0 )";case"b <- v2":return"( "+A+" != vec2( 0.0 ) )";case"b <- v3":return"( "+A+" != vec3( 0.0 ) )";case"b <- v4":return"( "+A+" != vec4( 0.0 ) )";case"b <- i":return"( "+A+" != 0 )"}return A}getTypeByFormat(A){return xC[A]||A}getFormatByType(A){return xD[A]||A}getUUID(A,e){return(e=void 0===e||e)&&this.cache&&(A=this.cache+"-"+A),A}getElementByIndex(A){return xE[A]}getIndexByElement(A){return xE.indexOf(A)}isShader(A){return this.shader===A}setShader(A){return this.shader=A,this}mergeDefines(A){for(let e in A)this.defines[e]=A[e];return this.defines}mergeUniform(A){for(let e in A)this.uniforms[e]=A[e];return this.uniforms}getTextureEncodingFromMap(A){let e;return A?A.isTexture&&(e=A.encoding):e=3e3,3e3===e&&this.context.gamma&&(e=3001),e}},x_=class extends y0{constructor(A=0,e,t,i){super("c"),this.nodeType="Color",this.value=A instanceof y3?A:new y3(A||0,e,t,i)}setRGBA(A){this.value.setRGBA(A.r,A.g,A.b,A.a)}generate(A,e,t,i,r,s){t=A.getUUID(t??this.getUUID()),i=i??this.getType(A);let a=A.getNodeData(t),o=this.getReadonly()&&void 0!==this.generateReadonly;if(this.alpha){let l=this.alpha.build(A,"f");A.addFragmentNodeCode(`accumAlpha += ( 1.0 - accumAlpha ) * ${l};`)}return o?this.generateReadonly(A,e,t,i,r,s):A.isShader("vertex")?(a.vertex||(a.vertex=A.createVertexUniform(i,this,r,s,this.getLabel())),A.format(a.vertex.name,i,e)):(a.fragment||(a.fragment=A.createFragmentUniform(i,this,r,s,this.getLabel())),A.format(a.fragment.name,i,e))}generateReadonly(A,e,t,i,r,s){return A.format("vec3("+this.value.r+", "+this.value.g+", "+this.value.b+")",i,e)}},xL=class extends y0{constructor(A){super("i"),this.nodeType="Int",this.value=Math.floor(A??0)}generateReadonly(A,e,t,i,r,s){return A.format(this.value.toString(),i,e)}},xO=class extends yK{constructor(){super("basic"),this.nodeType="Basic",this.color=new x_(5855577),this.shadingAlpha=new xl(1),this.shadingBlend=new xL(0)}get category(){return"phong"}generate(A){let e;if(A.isShader("vertex")){let t=this.position?this.position.analyzeAndFlow(A,"v3",{cache:"position"}):void 0;A.mergeUniform(ik.merge([i6.fog])),A.addParsCode(["varying vec3 vViewPosition;","varying vec3 vWPosition;","#include <fog_pars_vertex>","#include <normal_pars_vertex>"].join(`
`));let i=["#include <beginnormal_vertex>",`
				#if !defined( USE_LAYER_DISPLACE )
					#include <defaultnormal_vertex>
				#endif

				vec3 displaced_position = position;
				vec3 displaced_normal = normal;

				#if defined( USE_LAYER_DISPLACE )
					vec3 transformed;
					vec3 transformedNormal;
				#endif
				`,"#include <normal_vertex>",`
				#if !defined( USE_LAYER_DISPLACE )
					#include <begin_vertex>
				#endif /* !USE_LAYER_DISPLACE */
				`];t&&i.push(t.code,t.result?"displaced_position = "+t.result+";":""),i.push("transformed = displaced_position;","transformedNormal = normalMatrix * displaced_normal;","#ifndef FLAT_SHADED","	vNormal = transformedNormal;","#endif"),i.push("#include <project_vertex>","#include <fog_vertex>","#include <clipping_planes_vertex>","	vViewPosition = - mvPosition.xyz;","#include <worldpos_vertex>"),i.push("vWPosition = ( modelMatrix * vec4( transformed, 1.0 ) ).xyz;"),e=i.join(`
`)}else{void 0===this.color&&(this.color=new x_(5855577)),this.color.analyze(A,{slot:"color"}),this.alpha&&this.alpha.analyze(A),this.afterColor&&this.afterColor.analyze(A,{slot:"afterColor"});let r=this.color.flow(A,"c",{slot:"color"}),s=this.alpha?this.alpha.flow(A,"f"):void 0,a=this.afterColor?this.afterColor.flow(A,"c",{slot:"afterColor"}):void 0;A.requires.transparent=void 0!==s,A.addParsCode(["varying vec3 vWPosition;","#include <fog_pars_fragment>","#include <dithering_pars_fragment>","varying vec3 vViewPosition;","#include <normal_pars_fragment>"].join(`
`));let o=["#include <normal_fragment_begin>",r.code];s&&o.push(s.code,"#ifdef ALPHATEST"," if ( "+s.result+" <= ALPHATEST ) discard;","#endif"),a?o.push(a.code,`vec3 outgoingLight = ${r.result};`,`vec3 finalColor = spe_blend(outgoingLight, ${a.result}, 1.0, SPE_BLENDING_NORMAL);`):o.push(`vec3 finalColor = ${r.result};`),s?o.push(`gl_FragColor = vec4( finalColor, accumAlpha * ${s.result} );`):o.push("gl_FragColor = vec4("+r.result+", 1.0 );"),o.push("#include <fog_fragment>","#include <dithering_fragment>"),e=o.join(`
`)}return e}},xB=class extends y0{constructor(A=1,e){super("f[]"),this.nodeType="FloatArray",this.size=A,this.value=Array.isArray(e)?e:"number"==typeof e?Array(A).fill(e):Array(A).fill(0)}},xI={normalRenderTarget:new xo,normalRenderTargetDepth:new xo,transmissionRenderTarget:new xo,transmissionSize:new y1(2048,2048),transmissionRenderTargetDepth:new xo,pixelRatioNode:new xl(1),resolution:new y1,penumbraSize:new xB(5,.5)};for(let xR of Object.values(xI))xR.isRenderGlobal=!0;var xN=class extends yK{constructor(){super("lambert"),this.nodeType="Lambert",this.color=new x_(5855577),this.emissive=new x_(0),this.emissiveIntensity=new xl(1),this.shadingAlpha=new xl(1),this.shadingBlend=new xL(0)}get category(){return"lambert"}build(A){let e;if(A.define("LAMBERT"),A.requires.lights=!0,A.extensions.derivatives=!0,A.isShader("vertex")){let t=this.position?this.position.analyzeAndFlow(A,"v3",{cache:"position"}):void 0;A.mergeUniform(ik.merge([i6.fog,i6.lights])),A.addParsCode(["varying vec3 vViewPosition;","varying vec3 vWPosition;","varying vec3 vLightFront;","varying vec3 vIndirectFront;","#ifndef DOUBLE_SIDED","   #define DOUBLE_SIDED","#endif","#ifdef DOUBLE_SIDED","	varying vec3 vLightBack;","	varying vec3 vIndirectBack;","#endif","#include <bsdfs>","#include <lights_pars_begin>","#include <color_pars_vertex>","#include <fog_pars_vertex>","#include <normal_pars_vertex>","#include <shadowmap_pars_vertex>","#include <clipping_planes_pars_vertex>"].join(`
`));let i=["#include <beginnormal_vertex>",`
				#ifndef USE_LAYER_DISPLACE
					#include <defaultnormal_vertex>
				#endif

				vec3 displaced_position = position;
				vec3 displaced_normal = normal;

				#ifdef USE_LAYER_DISPLACE
					vec3 transformed;
					vec3 transformedNormal;
				#endif
				`,"#include <normal_vertex>",`
				#ifndef USE_LAYER_DISPLACE
					#include <begin_vertex>
				#endif
				`];t&&i.push(t.code,t.result?"displaced_position = "+t.result+";":""),i.push("transformed = displaced_position;","transformedNormal = normalMatrix * displaced_normal;","#ifndef FLAT_SHADED","    vNormal = transformedNormal;","#endif"),i.push("	#include <project_vertex>","	#include <clipping_planes_vertex>","	vViewPosition = - mvPosition.xyz;","	#include <worldpos_vertex>",`
					vec3 diffuse = vec3( 1.0 );
					GeometricContext geometry;
					geometry.position = mvPosition.xyz;
					geometry.normal = normalize( transformedNormal );
					geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
					GeometricContext backGeometry;
					backGeometry.position = geometry.position;
					backGeometry.normal = -geometry.normal;
					backGeometry.viewDir = geometry.viewDir;
					vLightFront = vec3( 0.0 );
					vIndirectFront = vec3( 0.0 );
					#ifdef DOUBLE_SIDED
						vLightBack = vec3( 0.0 );
						vIndirectBack = vec3( 0.0 );
					#endif
					IncidentLight directLight;
					float dotNL;
					vec3 directLightColor_Diffuse;
					vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
					vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );
					#ifdef DOUBLE_SIDED
						vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
						vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );
					#endif
					#if NUM_POINT_LIGHTS > 0
						#pragma unroll_loop_start
						for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
							getPointLightInfo( pointLights[ i ], geometry, directLight );
							dotNL = dot( geometry.normal, directLight.direction );
							directLightColor_Diffuse = directLight.color;
							vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
							#ifdef DOUBLE_SIDED
								vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
							#endif
						}
						#pragma unroll_loop_end
					#endif
					#if NUM_SPOT_LIGHTS > 0
						#pragma unroll_loop_start
						for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
							getSpotLightInfo( spotLights[ i ], geometry, directLight );
							dotNL = dot( geometry.normal, directLight.direction );
							directLightColor_Diffuse = directLight.color;
							vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
							#ifdef DOUBLE_SIDED
								vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
							#endif
						}
						#pragma unroll_loop_end
					#endif
					#if NUM_DIR_LIGHTS > 0
						#pragma unroll_loop_start
						for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
							getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );
							dotNL = dot( geometry.normal, directLight.direction );
							directLightColor_Diffuse = directLight.color;
							vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
							#ifdef DOUBLE_SIDED
								vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
							#endif
						}
						#pragma unroll_loop_end
					#endif
					#if NUM_HEMI_LIGHTS > 0
						#pragma unroll_loop_start
						for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
							vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
							#ifdef DOUBLE_SIDED
								vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );
							#endif
						}
						#pragma unroll_loop_end
					#endif
				`,"	#include <shadowmap_vertex>","	#include <fog_vertex>"),i.push("vWPosition = ( modelMatrix * vec4( transformed, 1.0 ) ).xyz;"),e=i.join(`
`)}else{A.mergeUniform({penumbraSize:xI.penumbraSize}),void 0===this.color&&(this.color=new x_(5855577)),this.color.analyze(A,{slot:"color"}),this.shadingAlpha.analyze(A),this.shadingBlend.analyze(A),this.afterColor&&this.afterColor.analyze(A,{slot:"afterColor"}),this.alpha&&this.alpha.analyze(A);let r=this.color.flow(A,"c",{slot:"color"}),s=this.emissive.flow(A,"c",{slot:"emissive"}),a=this.emissiveIntensity.flow(A,"f",{slot:"emissive"}),o=this.shadingAlpha.flow(A,"f"),l=this.shadingBlend.flow(A,"i"),h=this.afterColor?this.afterColor.flow(A,"c",{slot:"afterColor"}):void 0,c=this.alpha?this.alpha.flow(A,"f"):void 0;A.requires.transparent=void 0!==c,A.addParsCode(["uniform float penumbraSize[5];","varying vec3 vViewPosition;","varying vec3 vWPosition;","varying vec3 vLightFront;","varying vec3 vIndirectFront;","#ifndef DOUBLE_SIDED","   #define DOUBLE_SIDED","#endif","#include <normal_pars_fragment>","#ifdef DOUBLE_SIDED","	varying vec3 vLightBack;","	varying vec3 vIndirectBack;","#endif","#include <bsdfs>","#include <lights_pars_begin>","#include <fog_pars_fragment>","#include <shadowmap_pars_fragment>","#include <shadowmask_pars_fragment>","#include <clipping_planes_pars_fragment>","#include <dithering_pars_fragment>"].join(`
`));let d=["#include <normal_fragment_begin>",`
				// NOTE: gl_FrontFacing alternative using face normal estimation.
				vec3 viewdx = dFdx(vViewPosition);
				vec3 viewdy = dFdy(vViewPosition);
				vec3 faceNormal = normalize(cross(viewdx, viewdy));
				bool isFrontFacing = (dot(normal, faceNormal) >= 0.0);
				`,"#include <clipping_planes_fragment>"];d.push(r.code,"vec3 diffuseColor = "+r.result+";","ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );"),c&&d.push(c.code,"#ifdef ALPHATEST","if ( "+c.result+" <= ALPHATEST ) discard;","#endif"),d.push("#ifdef DOUBLE_SIDED","	reflectedLight.indirectDiffuse += ( isFrontFacing ) ? vIndirectFront : vIndirectBack;","#else","	reflectedLight.indirectDiffuse += vIndirectFront;","#endif","#include <lightmap_fragment>","reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );","#ifdef DOUBLE_SIDED","	reflectedLight.directDiffuse = ( isFrontFacing ) ? vLightFront : vLightBack;","#else","	reflectedLight.directDiffuse = vLightFront;","#endif","reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();"),s&&d.push(s.code,"reflectedLight.directDiffuse += "+s.result+" * "+a.result+";"),d.push("vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;"),d.push(`
				if (outgoingLight != diffuseColor) {
					float lightAccu = clamp( length( reflectedLight.directSpecular + reflectedLight.indirectSpecular ), 0.0, 1.0 );
					accumAlpha += ( 1.0 - accumAlpha ) * ${o.result} * lightAccu;
					outgoingLight = spe_blend( diffuseColor, outgoingLight, ${o.result}, ${l.result} );
				}
				`),h&&d.push(h.code,`outgoingLight = spe_blend(outgoingLight, ${h.result}, 1.0, SPE_BLENDING_NORMAL);`),c?d.push(`gl_FragColor = vec4( outgoingLight, accumAlpha * ${c.result} );`):d.push("gl_FragColor = vec4( outgoingLight, 1.0 );"),d.push("#include <encodings_fragment>","#include <fog_fragment>","#include <dithering_fragment>"),e=d.join(`
`)}return e}},xz=class extends yK{constructor(){super("phong"),this.nodeType="Phong",this.color=new x_(5855577),this.specular=new x_(1118481),this.shininess=new xl(30),this.shadingAlpha=new xl(1),this.shadingBlend=new xL(0)}get category(){return"phong"}build(A){let e;if(A.define("PHONG"),A.requires.lights=!0,A.extensions.derivatives=!0,A.isShader("vertex")){let t=this.position?this.position.analyzeAndFlow(A,"v3",{cache:"position"}):void 0;A.mergeUniform(ik.merge([i6.fog,i6.lights])),A.addParsCode(["varying vec3 vViewPosition;","varying vec3 vWPosition;","#include <fog_pars_vertex>","#include <normal_pars_vertex>","#include <shadowmap_pars_vertex>","#include <clipping_planes_pars_vertex>"].join(`
`));let i=["#include <beginnormal_vertex>",`
				#ifndef USE_LAYER_DISPLACE
					#include <defaultnormal_vertex>
				#endif


				vec3 displaced_position = position;
				vec3 displaced_normal = normal;

				#ifdef USE_LAYER_DISPLACE
					vec3 transformed;
					vec3 transformedNormal;
				#endif
				`,"#include <normal_vertex>",`
				#ifndef USE_LAYER_DISPLACE
					#include <begin_vertex>
				#endif
				`];t&&i.push(t.code,t.result?"displaced_position = "+t.result+";":""),i.push("transformed = displaced_position;","transformedNormal = normalMatrix * displaced_normal;","#ifndef FLAT_SHADED","    vNormal = transformedNormal;","#endif"),i.push("	#include <project_vertex>","	#include <clipping_planes_vertex>","	vViewPosition = - mvPosition.xyz;","	#include <worldpos_vertex>","	#include <shadowmap_vertex>","	#include <fog_vertex>"),i.push("vWPosition = ( modelMatrix * vec4( transformed, 1.0 ) ).xyz;"),e=i.join(`
`)}else{A.mergeUniform({penumbraSize:xI.penumbraSize}),void 0===this.color&&(this.color=new x_(5855577)),this.color.analyze(A,{slot:"color"}),this.specular.analyze(A),this.shininess.analyze(A),this.shadingAlpha.analyze(A),this.shadingBlend.analyze(A),this.afterColor&&this.afterColor.analyze(A,{slot:"afterColor"}),this.alpha&&this.alpha.analyze(A);let r=this.color.flow(A,"c",{slot:"color"}),s=this.specular.flow(A,"c"),a=this.shininess.flow(A,"f"),o=this.shadingAlpha.flow(A,"f"),l=this.shadingBlend.flow(A,"i"),h=this.afterColor?this.afterColor.flow(A,"c",{slot:"afterColor"}):void 0,c=this.alpha?this.alpha.flow(A,"f"):void 0;A.requires.transparent=void 0!==c,A.addParsCode(["varying vec3 vWPosition;","uniform vec3 emissive;","uniform float penumbraSize[5];","#include <normal_pars_fragment>","#include <fog_pars_fragment>","#include <bsdfs>","#include <lights_pars_begin>","#include <lights_phong_pars_fragment>","#include <shadowmap_pars_fragment>","#include <dithering_pars_fragment>"].join(`
`));let d=["#include <normal_fragment_begin>",`
				// NOTE: gl_FrontFacing alternative using face normal estimation.
				vec3 viewdx = dFdx(vViewPosition);
				vec3 viewdy = dFdy(vViewPosition);
				vec3 faceNormal = normalize(cross(viewdx,viewdy));
				if (dot(normal, faceNormal) < 0.0) {
					normal *= -1.0;
				}
				`,"	BlinnPhongMaterial material;"];d.push(r.code,"	vec3 diffuseColor = "+r.result+";","	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );","	vec3 totalEmissiveRadiance = emissive;",s.code,"	vec3 specular = "+s.result+";",a.code,"	float shininess = max( 0.0001, "+a.result+" );","	float specularStrength = 1.0;"),c&&d.push(c.code,"#ifdef ALPHATEST","if ( "+c.result+" <= ALPHATEST ) discard;","#endif"),d.push("material.diffuseColor = diffuseColor;"),d.push("material.specularColor = specular;","material.specularShininess = shininess;","material.specularStrength = specularStrength;","#include <lights_fragment_begin>","#include <lights_fragment_end>"),d.push("vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;"),d.push(`
				if (outgoingLight != diffuseColor) {
					float lightAccu = clamp( length( reflectedLight.directSpecular + reflectedLight.indirectSpecular ), 0.0, 1.0 );
					accumAlpha += ( 1.0 - accumAlpha ) * ${o.result} * lightAccu;
					outgoingLight = spe_blend( diffuseColor, outgoingLight, ${o.result}, ${l.result} );
				}
				`),h&&d.push(h.code,`outgoingLight = spe_blend(outgoingLight, ${h.result}, 1.0, SPE_BLENDING_NORMAL);`),c?d.push(`gl_FragColor = vec4( outgoingLight, accumAlpha * ${c.result} );`):d.push("gl_FragColor = vec4( outgoingLight, 1.0 );"),d.push("#include <encodings_fragment>","#include <fog_fragment>","#include <dithering_fragment>"),e=d.join(`
`)}return e}},xF=class extends yK{constructor(){super("standard"),this.nodeType="Standard",this.color=new x_(5855577),this.roughness=new xl(.3),this.metalness=new xl(0),this.reflectivity=new xl(.5),this.shadingAlpha=new xl(1),this.shadingBlend=new xL(0)}get category(){return"physical"}build(A){let e;if(A.define("STANDARD"),A.requires.lights=!0,A.extensions.derivatives=!0,A.extensions.shaderTextureLOD=!0,A.isShader("vertex")){let t=this.position?this.position.analyzeAndFlow(A,"v3",{cache:"position"}):void 0;A.mergeUniform(ik.merge([i6.fog,i6.lights])),i6.LTC_1&&(A.uniforms.ltc_1={value:void 0},A.uniforms.ltc_2={value:void 0}),A.addParsCode(["varying vec3 vViewPosition;","varying vec3 vWPosition;","#include <fog_pars_vertex>","#include <normal_pars_vertex>","#include <shadowmap_pars_vertex>","#include <clipping_planes_pars_vertex>"].join(`
`));let i=["#include <beginnormal_vertex>",`
				#if !defined( USE_LAYER_DISPLACE )
					#include <defaultnormal_vertex>
				#endif

				vec3 displaced_position = position;
				vec3 displaced_normal = normal;

				#if defined( USE_LAYER_DISPLACE )
					vec3 transformed;
					vec3 transformedNormal;
				#endif
				`,"#include <normal_vertex>",`
				#if !defined( USE_LAYER_DISPLACE )
					#include <begin_vertex>
				#endif /* !USE_LAYER_DISPLACE */
				`];t&&i.push(t.code,t.result?"displaced_position = "+t.result+";":""),i.push("transformed = displaced_position;","transformedNormal = normalMatrix * displaced_normal;","#ifndef FLAT_SHADED","    vNormal = transformedNormal;","#endif"),i.push("#include <project_vertex>","#include <fog_vertex>","#include <clipping_planes_vertex>","	vViewPosition = - mvPosition.xyz;","#include <worldpos_vertex>","#include <shadowmap_vertex>"),i.push("vWPosition = ( modelMatrix * vec4( transformed, 1.0 ) ).xyz;"),e=i.join(`
`)}else{A.mergeUniform({penumbraSize:xI.penumbraSize});let r={gamma:!0};void 0===this.color&&(this.color=new x_(5855577)),this.color.analyze(A,{slot:"color",context:r}),this.roughness.analyze(A),this.metalness.analyze(A),this.shadingAlpha.analyze(A),this.shadingBlend.analyze(A),this.afterColor&&this.afterColor.analyze(A,{slot:"afterColor"}),this.alpha&&this.alpha.analyze(A),this.reflectivity&&this.reflectivity.analyze(A);let s=this.color.flow(A,"c",{slot:"color",context:r}),a=this.roughness.flow(A,"f"),o=this.metalness.flow(A,"f"),l=this.shadingAlpha.flow(A,"f"),h=this.shadingBlend.flow(A,"i"),c=this.afterColor?this.afterColor.flow(A,"c",{slot:"afterColor"}):void 0,d=this.alpha?this.alpha.flow(A,"f"):void 0,u=this.reflectivity?this.reflectivity.flow(A,"f"):void 0;A.requires.transparent=void 0!==d,A.addParsCode(["varying vec3 vViewPosition;","varying vec3 vWPosition;","uniform float penumbraSize[5];","#include <normal_pars_fragment>","#include <dithering_pars_fragment>","#include <fog_pars_fragment>","#include <bsdfs>","#include <lights_pars_begin>","#include <lights_physical_pars_fragment>","#include <shadowmap_pars_fragment>"].join(`
`));let p=["#include <clipping_planes_fragment>","	#include <normal_fragment_begin>",`
				// NOTE: gl_FrontFacing alternative using face normal estimation.
				vec3 viewdx = dFdx(vViewPosition);
				vec3 viewdy = dFdy(vViewPosition);
				vec3 faceNormal = normalize(cross(viewdx,viewdy));
				if (dot(normal, faceNormal) < 0.0) {
					normal *= -1.0;
				}
				`,"	PhysicalMaterial material;","	material.diffuseColor = vec3( 1.0 );"];p.push(s.code,"	vec3 diffuseColor = "+s.result+";","	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );",a.code,"	float roughnessFactor = "+a.result+";",o.code,"	float metalnessFactor = "+o.result+";"),d&&p.push(d.code,"#ifdef ALPHATEST","	if ( "+d.result+" <= ALPHATEST ) discard;","#endif"),p.push("vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );","float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );"),p.push("material.diffuseColor = diffuseColor * ( 1.0 - metalnessFactor );","material.roughness = max( roughnessFactor, 0.0525 );","material.roughness += geometryRoughness;","material.roughness = min( material.roughness, 1.0 );","material.roughness = clamp( roughnessFactor, 0.04, 1.0 );"),u?p.push(u.code,"material.specularColor = mix( vec3( 0.16 * pow2( "+u.result+" ) ), diffuseColor, metalnessFactor );"):p.push("material.specularColor = mix( vec3( 0.04 ), diffuseColor, metalnessFactor );"),p.push("#include <lights_fragment_begin>"),p.push("#include <lights_fragment_end>"),p.push("vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular;"),p.push(`
				if (outgoingLight != diffuseColor) {
					float lightAccu = clamp( length( reflectedLight.directSpecular + reflectedLight.indirectSpecular ), 0.0, 1.0 );
					accumAlpha += ( 1.0 - accumAlpha ) * ${l.result} * lightAccu;
					outgoingLight = spe_blend( diffuseColor, outgoingLight, ${l.result}, ${h.result} );
				}
				`),c&&p.push(c.code,`outgoingLight = spe_blend(outgoingLight, ${c.result}, 1.0, SPE_BLENDING_NORMAL);`),d?p.push(`gl_FragColor = vec4( outgoingLight, accumAlpha * ${d.result} );`):p.push("gl_FragColor = vec4( outgoingLight, 1.0 );"),p.push("#include <encodings_fragment>","#include <fog_fragment>","#include <dithering_fragment>"),e=p.join(`
`)}return e}},xU=class extends yK{constructor(){super("toon"),this.nodeType="Toon",this.color=new x_(5855577),this.specular=new x_(1118481),this.shininess=new xl(30),this.shadingAlpha=new xl(1),this.shadingBlend=new xL(0)}get category(){return"toon"}build(A){let e;if(A.define("TOON"),A.requires.lights=!0,A.extensions.derivatives=!0,A.isShader("vertex")){let t=this.position?this.position.analyzeAndFlow(A,"v3",{cache:"position"}):void 0;A.mergeUniform(ik.merge([i6.fog,i6.lights])),A.addParsCode(["varying vec3 vViewPosition;","varying vec3 vWPosition;","#include <fog_pars_vertex>","#include <normal_pars_vertex>","#include <shadowmap_pars_vertex>","#include <clipping_planes_pars_vertex>"].join(`
`));let i=["#include <beginnormal_vertex>",`
				#ifndef USE_LAYER_DISPLACE
					#include <defaultnormal_vertex>
				#endif

				vec3 displaced_position = position;
				vec3 displaced_normal = normal;

				#ifdef USE_LAYER_DISPLACE
					vec3 transformed;
					vec3 transformedNormal;
				#endif
				`,"#include <normal_vertex>",`
				#ifndef USE_LAYER_DISPLACE
					#include <begin_vertex>
				#endif
				`];t&&i.push(t.code,t.result?"displaced_position = "+t.result+";":""),i.push("transformed = displaced_position;","transformedNormal = normalMatrix * displaced_normal;","#ifndef FLAT_SHADED","    vNormal = transformedNormal;","#endif"),i.push("	#include <project_vertex>","	#include <fog_vertex>","	#include <clipping_planes_vertex>","	vViewPosition = - mvPosition.xyz;","	#include <worldpos_vertex>","	#include <shadowmap_vertex>","	#include <fog_vertex>"),i.push("vWPosition = ( modelMatrix * vec4( transformed, 1.0 ) ).xyz;"),e=i.join(`
`)}else{A.mergeUniform({penumbraSize:xI.penumbraSize}),void 0===this.color&&(this.color=new x_(5855577)),this.color.analyze(A,{slot:"color"}),this.specular.analyze(A),this.shininess.analyze(A),this.shadingAlpha.analyze(A),this.shadingBlend.analyze(A),this.afterColor&&this.afterColor.analyze(A,{slot:"afterColor"}),this.alpha&&this.alpha.analyze(A);let r=this.color.flow(A,"c",{slot:"color"}),s=this.specular.flow(A,"c"),a=this.shininess.flow(A,"f"),o=this.shadingAlpha.flow(A,"f"),l=this.shadingBlend.flow(A,"i"),h=this.afterColor?this.afterColor.flow(A,"c",{slot:"afterColor"}):void 0,c=this.alpha?this.alpha.flow(A,"f"):void 0;A.requires.transparent=void 0!==c,A.addParsCode(["uniform float penumbraSize[5];","varying vec3 vWPosition;","#include <normal_pars_fragment>","#include <gradientmap_pars_fragment>","#include <fog_pars_fragment>","#include <bsdfs>","#include <lights_pars_begin>","#include <dithering_pars_fragment>",`
					varying vec3 vViewPosition;
					struct ToonMaterial {
						vec3	diffuseColor;
						vec3	specularColor;
						float	specularShininess;
						float	specularStrength;
					};
					void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
						vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
			
						reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
						reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
					}
					void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
						reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
					}
					#define RE_Direct				RE_Direct_Toon
					#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
					#define Material_LightProbeLOD( material )	(0)
					`,"#include <shadowmap_pars_fragment>","#include <bumpmap_pars_fragment>","#include <normalmap_pars_fragment>"].join(`
`));let d=["#include <normal_fragment_begin>",`
				// NOTE: gl_FrontFacing alternative using face normal estimation.
				vec3 viewdx = dFdx(vViewPosition);
				vec3 viewdy = dFdy(vViewPosition);
				vec3 faceNormal = normalize(cross(viewdx,viewdy));
				if (dot(normal, faceNormal) < 0.0) {
					normal *= -1.0;
				}
				`,"	ToonMaterial material;"];d.push(r.code,"	vec3 diffuseColor = "+r.result+";","	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );",s.code,"	vec3 specular = "+s.result+";",a.code,"	float shininess = max( 0.0001, "+a.result+" );","	float specularStrength = 1.0;"),c&&d.push(c.code,"#ifdef ALPHATEST","if ( "+c.result+" <= ALPHATEST ) discard;","#endif"),d.push("material.diffuseColor = diffuseColor;"),d.push("material.specularColor = specular;","material.specularShininess = shininess;","material.specularStrength = specularStrength;","#include <lights_fragment_begin>","#include <lights_fragment_end>"),d.push("vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular;"),d.push(`
				if (outgoingLight != diffuseColor) {
					float lightAccu = clamp( length( reflectedLight.directSpecular + reflectedLight.indirectSpecular ), 0.0, 1.0 );
					accumAlpha += ( 1.0 - accumAlpha ) * ${o.result} * lightAccu;
					outgoingLight = spe_blend( diffuseColor, outgoingLight, ${o.result}, ${l.result} );
				}
				`),h&&d.push(h.code,`outgoingLight = spe_blend(outgoingLight, ${h.result}, 1.0, SPE_BLENDING_NORMAL);`),c?d.push(`gl_FragColor = vec4( outgoingLight, accumAlpha * ${c.result} );`):d.push("gl_FragColor = vec4( outgoingLight, 1.0 );"),d.push("#include <encodings_fragment>","#include <fog_fragment>","#include <dithering_fragment>"),e=d.join(`
`)}return e}},xk=class extends y0{constructor(A){super("b"),this.nodeType="Bool",this.value=A??!1}generateReadonly(A,e,t,i){return A.format(this.value?"true":"false",i,e)}},xG=class extends y0{constructor(A){super("m3"),this.nodeType="Matrix3",this.value=A??new eL}generateReadonly(A,e,t,i,r,s){return A.format("mat3("+this.value.elements.join(", ")+")",i,e)}get elements(){return this.value.elements}set elements(A){this.value.fromArray(A)}},xV=class extends y0{constructor(A=1,e){super("v4[]"),this.nodeType="Vector4Array",this.size=A,this.value=Array.isArray(e)?e:e instanceof e$?Array(A).fill(e):Array(A).fill(new e$(0))}},xj=((br=xj||{}).SIMPLEX="simplex3d",br.SIMPLEX_FRACTAL="simplex3dFractal",br.ASHIMA="simplexAshima",br.FBM="fbm",br.PERLIN="perlin",br),xH=(AD=new y8(`vec3 random3(vec3 c) {
			float j = 4096.0*sin(dot(c,vec3(17.0, 59.4, 15.0)));
			vec3 r;
			r.z = fract(512.0*j);
			j *= .125;
			r.x = fract(512.0*j);
			j *= .125;
			r.y = fract(512.0*j);
			return r-0.5;
		}`),(AP=new y8(`float simplex3d(vec3 p) {
			 vec3 s = floor(p + dot(p, vec3(F3)));
			 vec3 x = p - s + dot(s, vec3(G3));
			 
			 vec3 e = step(vec3(0.0), x - x.yzx);
			 vec3 i1 = e*(1.0 - e.zxy);
			 vec3 i2 = 1.0 - e.zxy*(1.0 - e);
				
			 vec3 x1 = x - i1 + G3;
			 vec3 x2 = x - i2 + 2.0*G3;
			 vec3 x3 = x - 1.0 + 3.0*G3;
			 
			 vec4 w, d;
			 
			 w.x = dot(x, x);
			 w.y = dot(x1, x1);
			 w.z = dot(x2, x2);
			 w.w = dot(x3, x3);
			 
			 w = max(0.6 - w, 0.0);
			 
			 d.x = dot(random3(s), x);
			 d.y = dot(random3(s + i1), x1);
			 d.z = dot(random3(s + i2), x2);
			 d.w = dot(random3(s + 1.0), x3);
			 
			 w *= w;
			 w *= w;
			 d *= w;
			 
			 return dot(d, vec4(52.0));
		}`,[AD])).keywords.F3=new xA("float F3 0.3333333"),AP.keywords.G3=new xA("float G3 0.1666667"),A_=new y8(`float simplex3dFractal(vec3 m) {
			mat3 rot1 = mat3(-0.37, 0.36, 0.85,-0.14,-0.93, 0.34,0.92, 0.01,0.4);
			mat3 rot2 = mat3(-0.55,-0.39, 0.74, 0.33,-0.91,-0.24,0.77, 0.12,0.63);
			mat3 rot3 = mat3(-0.71, 0.52,-0.47,-0.08,-0.72,-0.68,-0.7,-0.45,0.56);
			return 0.5333333 * simplex3d(m * rot1)
				 + 0.2666667 * simplex3d(2.0 * m * rot2)
				 + 0.1333333 * simplex3d(4.0 * m * rot3)
				 + 0.0666667 * simplex3d(8.0 * m);
		}`,[AP]),AL=new y8("vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}"),AO=new y8("vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}"),AB=new y8(`float simplexAshima(vec3 v) {
		  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
		  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);
		  vec3 i  = floor(v + dot(v, C.yyy) );
		  vec3 x0 =   v - i + dot(i, C.xxx) ;
		  vec3 g = step(x0.yzx, x0.xyz);
		  vec3 l = 1.0 - g;
		  vec3 i1 = min( g.xyz, l.zxy );
		  vec3 i2 = max( g.xyz, l.zxy );
		  vec3 x1 = x0 - i1 + 1.0 * C.xxx;
		  vec3 x2 = x0 - i2 + 2.0 * C.xxx;
		  vec3 x3 = x0 - 1. + 3.0 * C.xxx;
		  i = mod(i, 289.0 ); 
		  vec4 p = permute( permute( permute( 
					 i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
				   + i.y + vec4(0.0, i1.y, i2.y, 1.0 )) 
				   + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));
		  float n_ = 1.0/7.0; // N=7
		  vec3  ns = n_ * D.wyz - D.xzx;
		  vec4 j = p - 49.0 * floor(p * ns.z *ns.z);  //  mod(p,N*N)
		  vec4 x_ = floor(j * ns.z);
		  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)
		  vec4 x = x_ *ns.x + ns.yyyy;
		  vec4 y = y_ *ns.x + ns.yyyy;
		  vec4 h = 1.0 - abs(x) - abs(y);
		  vec4 b0 = vec4( x.xy, y.xy );
		  vec4 b1 = vec4( x.zw, y.zw );
		  vec4 s0 = floor(b0)*2.0 + 1.0;
		  vec4 s1 = floor(b1)*2.0 + 1.0;
		  vec4 sh = -step(h, vec4(0.0));
		  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
		  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;
		  vec3 p0 = vec3(a0.xy,h.x);
		  vec3 p1 = vec3(a0.zw,h.y);
		  vec3 p2 = vec3(a1.xy,h.z);
		  vec3 p3 = vec3(a1.zw,h.w);
		  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
		  p0 *= norm.x;
		  p1 *= norm.y;
		  p2 *= norm.z;
		  p3 *= norm.w;
		  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
		  m = m * m;
		  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), 
										dot(p2,x2), dot(p3,x3) ) );
		}`,[AL,AO]),AI=new y8("vec4 mod289(vec4 x){return x - floor(x * (1.0 / 289.0)) * 289.0;}"),AR=new y8("vec4 perm(vec4 x){return mod289(((x * 34.0) + 1.0) * x);}",[AI]),AN=new y8(`float noise(vec3 p){
			vec3 a = floor(p);
			vec3 d = p - a;
			d = d * d * (3.0 - 2.0 * d);
			vec4 b = a.xxyy + vec4(0.0, 1.0, 0.0, 1.0);
			vec4 k1 = perm(b.xyxy);
			vec4 k2 = perm(k1.xyxy + b.zzww);
			vec4 c = k2 + a.zzzz;
			vec4 k3 = perm(c);
			vec4 k4 = perm(c + 1.0);
			vec4 o1 = fract(k3 * (1.0 / 41.0));
			vec4 o2 = fract(k4 * (1.0 / 41.0));
			vec4 o3 = o2 * d.z + o1 * (1.0 - d.z);
			vec2 o4 = o3.yw * d.x + o3.xz * (1.0 - d.x);
			return o4.y * d.y + o4.x * (1.0 - d.y);
		}`,[AR]),(Az=new y8(`float fbm(vec3 x) {
			float v = 0.0;
			float a = 0.5;
			vec3 shift = vec3(100);
			for (int i = 0; i < NUM_OCTAVES; ++i) {
				v += a * noise(x);
				x = x * 2.0 + shift;
				a *= 0.5;
			}
			return v;
		}`,[AN])).keywords.NUM_OCTAVES=new xA("int NUM_OCTAVES 5"),AF=new y8("vec3 fade(vec3 t) {return t*t*t*(t*(t*6.0-15.0)+10.0);}"),{simplex:AP,simplexFractal:A_,simplexAshima:AB,fbm:Az,perlin:new y8(`float perlin(vec3 P){
		  vec3 Pi0 = floor(P);
		  vec3 Pi1 = Pi0 + vec3(1.0);
		  Pi0 = mod(Pi0, 289.0);
		  Pi1 = mod(Pi1, 289.0);
		  vec3 Pf0 = fract(P);
		  vec3 Pf1 = Pf0 - vec3(1.0);
		  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
		  vec4 iy = vec4(Pi0.yy, Pi1.yy);
		  vec4 iz0 = Pi0.zzzz;
		  vec4 iz1 = Pi1.zzzz;
		  vec4 ixy = permute(permute(ix) + iy);
		  vec4 ixy0 = permute(ixy + iz0);
		  vec4 ixy1 = permute(ixy + iz1);
		  vec4 gx0 = ixy0 / 7.0;
		  vec4 gy0 = fract(floor(gx0) / 7.0) - 0.5;
		  gx0 = fract(gx0);
		  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
		  vec4 sz0 = step(gz0, vec4(0.0));
		  gx0 -= sz0 * (step(0.0, gx0) - 0.5);
		  gy0 -= sz0 * (step(0.0, gy0) - 0.5);
		  vec4 gx1 = ixy1 / 7.0;
		  vec4 gy1 = fract(floor(gx1) / 7.0) - 0.5;
		  gx1 = fract(gx1);
		  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
		  vec4 sz1 = step(gz1, vec4(0.0));
		  gx1 -= sz1 * (step(0.0, gx1) - 0.5);
		  gy1 -= sz1 * (step(0.0, gy1) - 0.5);
		  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
		  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
		  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
		  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
		  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
		  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
		  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
		  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);
		  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
		  g000 *= norm0.x;
		  g010 *= norm0.y;
		  g100 *= norm0.z;
		  g110 *= norm0.w;
		  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
		  g001 *= norm1.x;
		  g011 *= norm1.y;
		  g101 *= norm1.z;
		  g111 *= norm1.w;
		  float n000 = dot(g000, Pf0);
		  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
		  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
		  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
		  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
		  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
		  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
		  float n111 = dot(g111, Pf1);
		  vec3 fade_xyz = fade(Pf0);
		  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
		  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
		  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); 
		  return 2.2 * n_xyz;
		}`,[AL,AO,AF])}),xW=class extends y${constructor(A,e,t,i,r,s,a,o,l,h,c,d){super("v3"),this.nodeType="Noise",this.scale=A,this.size=e,this.move=t,this.fA=i,this.fB=r,this.distortion=s,this.colorA=a,this.colorB=o,this.colorC=l,this.colorD=h,this.alpha=c,this.noiseType=d,this.calpha=`g${this.uuid.toString().replace(/-/g,"")}_calpha`}generate(A,e,t,i,r){A.require("uv"),A.requires.uv=[!0],A.addFragmentVariable(this.calpha,"float");let s=Object.values(xj)[this.noiseType.value],a=new y8(`vec3 ${s}customNoise(float scale, vec3 size, float move, vec2 fA, vec2 fB, vec2 distortion, vec4 colorA, vec4 colorB, vec4 colorC, vec4 colorD, float alpha, out float calpha) {
                vec3 st = position / size;
				st /= scale;
				vec3 q = vec3(${s}(st),
							  ${s}(st + vec3(1.0)),
							  ${s}(st + vec3(1.0)));
				vec3 r = vec3(${s}(st + vec3(distortion, 1.0) * q + vec3(fA, 1.0) + move),
							  ${s}(st + vec3(distortion, 1.0) * q + vec3(fB, 1.0) + move), 
							  ${s}(st * q));
				float f = ${s}(st + r);
				vec4 color;
				color = mix(colorA, colorB, clamp((f * f) * 4.0, 0.0, 1.0));
				color = mix(color, colorC, clamp(length(q), 0.0, 1.0));
				color = mix(color, colorD, clamp(length(r.x), 0.0, 1.0));

                float lalpha = alpha * color.a;
                calpha =  lalpha / clamp( lalpha + accumAlpha, 0.00001, 1.0 );

			    accumAlpha += ( 1.0 - accumAlpha ) * lalpha;
				return clamp(color, 0.0, 1.0).rgb;
			}`,[xH.simplex,xH.simplexFractal,xH.simplexAshima,xH.fbm,xH.perlin]),o=A.include(a),l=[];return l.push(this.scale.build(A,"f")),l.push(this.size.build(A,"v3")),l.push(this.move.build(A,"f")),l.push(this.fA.build(A,"v2")),l.push(this.fB.build(A,"v2")),l.push(this.distortion.build(A,"v2")),l.push(this.colorA.build(A,"v4")),l.push(this.colorB.build(A,"v4")),l.push(this.colorC.build(A,"v4")),l.push(this.colorD.build(A,"v4")),l.push(this.alpha.build(A,"f")),l.push(this.calpha),A.format(o+"("+l.join(",")+")",this.getType(A),e)}};xW.numOctaves=5;var xY=class extends y${constructor(A,e,t,i,r,s,a){super("v3"),this.nodeType="Fresnel",this.color=A,this.bias=e,this.scale=t,this.intensity=i,this.factor=r,this.alpha=s,this.mode=a,this.calpha=`g${this.uuid.toString().replace(/-/g,"")}_calpha`}generate(A,e){if(A.require("vWorldViewDir"),A.require("worldNormal"),!A.isShader("fragment"))return console.warn("FresnelNode is not compatible with "+A.shader+" shader."),A.format("vec3( 0.0 )",this.getType(A),e);{A.addFragmentVariable(this.calpha,"float");let t=A.include(xY.Nodes.fresnel),i=[];return i.push(this.color.build(A,"c")),i.push(this.bias.build(A,"f")),i.push(this.scale.build(A,"f")),i.push(this.intensity.build(A,"f")),i.push(this.factor.build(A,"f")),i.push(this.alpha.build(A,"f")),i.push(this.mode.build(A,"i")),i.push(this.calpha),A.format(t+"("+i.join(",")+")",this.getType(A),e)}}},xX=xY;xX.Nodes={fresnel:new y8(`vec3 fresnel(vec3 color, float bias, float scale, float intensity, float factor, float alpha, int mode, out float calpha) {
				float fresnel = bias + scale * pow( abs( factor + dot( normalize( vWorldViewDir ), normalize( vWNormal ) ) ), intensity );

				float lalpha = clamp( fresnel, 0.0, 1.0 ) * alpha;
				calpha = lalpha / clamp(lalpha + accumAlpha, 0.001, 1.0);
				accumAlpha += (1.0 - accumAlpha) * lalpha;
				return color;
			}`)};var xQ=class extends y${constructor(A,e,t,i,r,s,a){super("v3"),this.nodeType="Rainbow",this.filmThickness=A,this.movement=e,this.wavelengths=t,this.noiseStrength=i,this.noiseScale=r,this.offset=s,this.alpha=a,this.calpha=`g${this.uuid.toString().replace(/-/g,"")}_calpha`}generate(A,e){if(A.require("vWorldViewDir"),A.require("worldNormal"),!A.isShader("fragment"))return console.warn("RainbowNode is not compatible with "+A.shader+" shader."),A.format("vec3( 0.0 )",this.getType(A),e);{A.require("uv"),A.requires.uv=[!0],A.addFragmentVariable(this.calpha,"float");let t=A.include(xQ.Nodes.rainbow),i=[];return i.push(this.filmThickness.build(A,"f")),i.push(this.movement.build(A,"f")),i.push(this.wavelengths.build(A,"v3")),i.push(this.noiseStrength.build(A,"f")),i.push(this.noiseScale.build(A,"f")),i.push(this.offset.build(A,"v3")),i.push(this.alpha.build(A,"f")),i.push(this.calpha),A.format(t+"("+i.join(",")+")",this.getType(A),e)}}},xq=xQ;xq.Nodes=(AU=new y8(`vec3 attenuation(vec3 wavelengths, float filmThickness, float movement, float noiseStrength, float noiseScale, vec3 offset) {
                 vec3 st = position / noiseScale;
				 vec3 q = vec3(simplex3d(st),
							  simplex3d(st + vec3(1.0)),
							  simplex3d(st + vec3(1.0)));

				 vec3 r = vec3(simplex3d(st + vec3(1.4, 1.3, 1.0) * q + vec3(1.7, 9.2, 1.0)),
							  simplex3d(st + vec3(2.0, 1.2, 1.0) * q + vec3(8.3, 2.8, 1.0)),
							  simplex3d(st * q));

                 float noise = simplex3d(st + r);

                 return .5 + .5 * cos((((filmThickness + (noise * noiseStrength)) / (vec3(wavelengths.r * 1.0, wavelengths.g * 0.8, wavelengths.b * 0.6) + 1.0)) * dot(normalize(vWorldViewDir + (offset * -0.001)), normalize(vWNormal))) + movement);
             }`,[xH.simplex]),{rainbow:new y8(`vec3 rainbow(float filmThickness, float movement, vec3 wavelengths, float noiseStrength, float noiseScale, vec3 offset, float alpha, out float calpha) {
                 vec3 res = clamp(attenuation(wavelengths, filmThickness, movement, noiseStrength, noiseScale, offset), 0.0, 2.0);

                 float rainbowContribution = clamp(res.r + res.g + res.b, 0.0, 1.0);
                 float lalpha = alpha * rainbowContribution;
                 calpha =  lalpha / clamp( lalpha + accumAlpha, 0.00001, 1.0 );
                 accumAlpha += ( 1.0 - accumAlpha ) * lalpha;

                 return res;
             }`,[AU])});var xZ=class extends y${constructor(A,e,t,i,r,s,a,o,l,h,c,d,u,p,f,m){super("v3"),this.nodeType="Outline",this.firstTime=!0,this.outlineColor=A,this.contourColor=e,this.outlineWidth=t,this.contourWidth=i,this.contourThreshold=r,this.outlineThreshold=s,this.contourFrequency=a,this.outlineSmoothing=o,this.contourDirection=l,this.positionalLines=h,this.compensation=c,this.resolution=d,this.normalMap=u,this.depthMap=p,this.pixelRatio=f,this.alpha=m,this.calpha=`g${this.uuid.toString().replace(/-/g,"")}_calpha`}generate(A,e){if(A.require("vWorldViewDir"),A.require("worldNormal"),A.extensions.derivatives=!0,this.firstTime){let t=this.outlineWidth.build(A,"f"),i=this.resolution.build(A,"v2"),r=this.compensation.build(A,"b"),s=this.pixelRatio.build(A,"f");A.addVertexParsVariable("randomColor","attribute vec3"),A.addVertexParsVariable("extrudeNormal","attribute vec3"),A.addVertexParsVariable(t,"uniform float"),A.addVertexParsVariable(i,"uniform vec2"),A.addVertexParsVariable(r,"uniform bool"),A.addVertexParsVariable(s,"uniform float"),A.addVertexParsVariable("vID","flat out float"),A.addFragmentParsVariable("vID","flat in float");let a=`g${this.uuid.toString().replace(/-/g,"")}`;A.addVertexFinalCode(`
                vID = randomColor.r;
                if (${r}) {
                    vec4 ${a}_clipPosition = projectionMatrix * (modelViewMatrix * vec4(position, 1.0));
                    // NOTE: For certain shapes, like spheres, we get incorrect extrusion when the
                    // normals face the camera directly. So we hackily fix this by offsetting the normal
                    // by a tiny amount.
                    vec3 ${a}_clipNormal = mat3(projectionMatrix) * (mat3(modelViewMatrix) * extrudeNormal) + 0.0000001;
                    vec2 ${a}_offset = normalize(${a}_clipNormal.xy) / ${i} * (${t} / 2.0) * ${a}_clipPosition.w * 2.0 * ${s};
                    ${a}_clipPosition.xy += ${a}_offset;
                    // TODO(MAX): To handle multiple outline layers, we only want to extrude
                    // if this offset is the biggest of all the potential offsets
                    gl_Position = ${a}_clipPosition;
                }
            `)}if(!A.isShader("fragment"))return console.warn("OutlineNode is not compatible with "+A.shader+" shader."),"";{A.require("uv"),A.requires.uv=[!0],A.addFragmentVariable(this.calpha,"float");let o=A.include(xZ.Nodes.outline),l=[];return l.push(this.outlineColor.build(A,"c")),l.push(this.contourColor.build(A,"c")),l.push(this.outlineWidth.build(A,"f")),l.push(this.contourWidth.build(A,"f")),l.push(this.contourThreshold.build(A,"f")),l.push(this.outlineThreshold.build(A,"f")),l.push(this.contourFrequency.build(A,"f")),l.push(this.outlineSmoothing.build(A,"f")),l.push(this.contourDirection.build(A,"v3")),l.push(this.positionalLines.build(A,"b")),l.push(this.resolution.build(A,"v2")),l.push(this.normalMap.getTexture(A,"t")),l.push(this.depthMap.getTexture(A,"t")),l.push(this.pixelRatio.build(A,"f")),l.push(this.compensation.build(A,"b")),l.push(this.alpha.build(A,"f")),l.push(this.calpha),this.firstTime=!this.firstTime,A.format(o+"("+l.join(",")+")",this.getType(A),e)}}},xK=xZ;xK.Nodes=(Ak=new y8(`
float sobelSample(sampler2D t, sampler2D d, vec2 uv, vec2 resolution, float outlineWidth, float pixelRatio)
{
    vec2 texelSize = (vec2(1.0) / resolution) * outlineWidth * pixelRatio;

    vec2 uvSamples[9];
    vec4 normalSamples[9];

	uvSamples[0] = uv + vec2( -texelSize.x, -texelSize.y);
	uvSamples[1] = uv + vec2(0.0, -texelSize.y);
	uvSamples[2] = uv + vec2(  texelSize.x, -texelSize.y);
	uvSamples[3] = uv + vec2( -texelSize.x, 0.0);
	uvSamples[4] = uv;
	uvSamples[5] = uv + vec2(  texelSize.x, 0.0);
	uvSamples[6] = uv + vec2( -texelSize.x, texelSize.y);
	uvSamples[7] = uv + vec2(0.0, texelSize.y);
	uvSamples[8] = uv + vec2(  texelSize.x, texelSize.y);


    normalSamples[0] = texture2D(t, uvSamples[0]);
    normalSamples[1] = texture2D(t, uvSamples[1]);
    normalSamples[2] = texture2D(t, uvSamples[2]);
    normalSamples[3] = texture2D(t, uvSamples[3]);
    normalSamples[4] = texture2D(t, uvSamples[4]);
    normalSamples[5] = texture2D(t, uvSamples[5]);
    normalSamples[6] = texture2D(t, uvSamples[6]);
    normalSamples[7] = texture2D(t, uvSamples[7]);
    normalSamples[8] = texture2D(t, uvSamples[8]);

    float depthBias = 0.0001;
    // TODO(MAX): Can we somehow reduce the number of conditionals here with MATH?!
    if (normalSamples[0].a != vID && normalSamples[0].a != 0.0) {
        float depthAtSample = texture2D(d, uvSamples[0]).r + depthBias;
        if (gl_FragCoord.z > depthAtSample) {
           return 0.0;
        }
    }

    if (normalSamples[1].a != vID && normalSamples[1].a != 0.0) {
        float depthAtSample = texture2D(d, uvSamples[1]).r + depthBias;
        if (gl_FragCoord.z > depthAtSample) {
           return 0.0;
        }
    }

    if (normalSamples[2].a != vID && normalSamples[2].a != 0.0) {
        float depthAtSample = texture2D(d, uvSamples[2]).r + depthBias;
        if (gl_FragCoord.z > depthAtSample) {
           return 0.0;
        }
    }

    if (normalSamples[3].a != vID && normalSamples[3].a != 0.0) {
        float depthAtSample = texture2D(d, uvSamples[3]).r + depthBias;
        if (gl_FragCoord.z > depthAtSample) {
           return 0.0;
        }
    }


    if (normalSamples[4].a != vID && normalSamples[4].a != 0.0) {
        float depthAtSample = texture2D(d, uvSamples[4]).r + depthBias;
        if (gl_FragCoord.z > depthAtSample) {
           return 0.0;
        }
    }

    if (normalSamples[5].a != vID && normalSamples[5].a != 0.0) {
        float depthAtSample = texture2D(d, uvSamples[5]).r + depthBias;
        if (gl_FragCoord.z > depthAtSample) {
           return 0.0;
        }
    }

    if (normalSamples[6].a != vID && normalSamples[6].a != 0.0) {
        float depthAtSample = texture2D(d, uvSamples[6]).r + depthBias;
        if (gl_FragCoord.z > depthAtSample) {
           return 0.0;
        }
    }

    if (normalSamples[7].a != vID && normalSamples[7].a != 0.0) {
        float depthAtSample = texture2D(d, uvSamples[7]).r + depthBias;
        if (gl_FragCoord.z > depthAtSample) {
           return 0.0;
        }
    }

    if (normalSamples[8].a != vID && normalSamples[8].a != 0.0) {
        float depthAtSample = texture2D(d, uvSamples[8]).r + depthBias;
        if (gl_FragCoord.z > depthAtSample) {
           return 0.0;
        }
    }

    vec4 sobel_edge_h = normalSamples[2] + (2.0*normalSamples[5]) + normalSamples[8] - (normalSamples[0] + (2.0*normalSamples[3]) + normalSamples[6]);
  	vec4 sobel_edge_v = normalSamples[0] + (2.0*normalSamples[1]) + normalSamples[2] - (normalSamples[6] + (2.0*normalSamples[7]) + normalSamples[8]);

    float edgeNormal = sqrt(dot(sobel_edge_h, sobel_edge_h) + dot(sobel_edge_v, sobel_edge_v));
    return edgeNormal;
}
`),{outline:new y8(`vec3 outline(vec3 outlineColor, vec3 contourColor, float outlineWidth, float contourWidth, float outlineThreshold, float contourThreshold, float outlineSmoothing, float contourFrequency, vec3 contourDirection, bool positionalLines, vec2 resolution, sampler2D normalMap, sampler2D depthMap, float pixelRatio, bool compensation, float alpha, out float calpha) {
                vec3 result = outlineColor;
                float resultAlpha = 0.0;

                vec3 N = normalize(vWNormal);
                vec2 nuv = (gl_FragCoord.xy / resolution);
                float sobelSample = compensation ? sobelSample(normalMap, depthMap, nuv, resolution, outlineWidth / 2., pixelRatio) : sobelSample(normalMap, depthMap, nuv, resolution, outlineWidth, pixelRatio);
                resultAlpha = smoothstep(outlineThreshold - outlineSmoothing, outlineThreshold + outlineSmoothing, sobelSample);

                float t = 1.0 - contourThreshold;
                if(positionalLines) {
                    vec3 NDir = position * contourDirection;
                    float NT = NDir.x + NDir.y + NDir.z;
                    float f  = fract(NT * contourFrequency * 0.01);
                    float df = fwidth(NT * contourFrequency);

                    float g = smoothstep(df * (contourWidth * 0.01), df * (contourWidth * 0.01 * 2.0), f);
                    if (g < 1.0 && resultAlpha == 0.0) {
                        result = contourColor;
                        resultAlpha = 1.0;
                    }
                 }
                 else {
                    vec3 NDir = N * contourDirection;
                    float NT = NDir.x + NDir.y + NDir.z;
                    float df = fwidth(NT * contourThreshold);
                    float f = sin(NT * 1.0 * contourFrequency);
                    float g = smoothstep(0.0, df * contourWidth, 1.0 - f);

                    if (df > (t * 0.5) && g < 1.0 && resultAlpha == 0.0) {
                        result = contourColor;
                        resultAlpha = 1.0 - g;
                    }
                 }

                 float lalpha = alpha * resultAlpha;
                 calpha =  lalpha / clamp( lalpha + accumAlpha, 0.00001, 1.0 );
                 accumAlpha += ( 1.0 - accumAlpha ) * lalpha;
                 return result;
             }`,[Ak])});var xJ=class extends y${constructor(A,e,t,i,r,s,a,o){super("v3"),this.nodeType="Transmission",this.thickness=A,this.ior=e,this.roughness=t,this.transmissionSamplerSize=i,this.transmissionSamplerMap=r,this.transmissionDepthMap=s,this.aspectRatio=a,this.alpha=o,this.calpha=`g${this.uuid.toString().replace(/-/g,"")}_calpha`}generate(A,e){if(A.extensions.shaderTextureLOD=!0,A.extensions.derivatives=!0,!A.isShader("fragment"))return console.warn("TransmissionNode is not compatible with "+A.shader+" shader."),A.format("vec3( 0.0 )",this.getType(A),e);{A.define("NUM_SAMPLES",30),A.require("worldPosition"),A.requires.worldNormal=!0,A.requires.modelMatrix=!0,A.requires.projectionMatrix=!0,A.addFragmentVariable(this.calpha,"float");let t=A.include(xJ.Nodes.transmission),i=[];return i.push(this.thickness.build(A,"f")),i.push(this.ior.build(A,"f")),i.push(this.roughness.build(A,"f")),i.push(this.transmissionSamplerSize.build(A,"v2")),i.push(this.transmissionSamplerMap.getTexture(A,"t")),i.push(this.transmissionDepthMap.getTexture(A,"t")),i.push(this.aspectRatio.build(A,"v2")),i.push("normal"),i.push(this.alpha.build(A,"f")),i.push(this.calpha),A.format(t+"("+i.join(",")+")",this.getType(A),e)}}},x$=xJ;x$.Nodes=(AG=new y8(`
            float gaussian(vec2 i) {
                const float sigma = float(NUM_SAMPLES) * .25;
                return exp( -.5* dot(i/=sigma,i) ) / ( 6.28 * sigma*sigma );
            }`),AV=new y8(`
            vec3 blur(sampler2D sp, vec2 U, vec2 scale, float lod, sampler2D dm, vec2 unrefractedU, vec2 aspectRatio) {
                // Slightly modified version of this:
                // https://www.shadertoy.com/view/ltScRG

                const int LOD = 2;
                const int sLOD = 4; // tile size = 2^LOD

                vec3 O = vec3(0);
                float a = 0.0;
                const int s = NUM_SAMPLES/sLOD;
                for ( int i = 0; i < s*s; i++ ) {
                    int modulo = (i)-((i)/(s))*(s);
                    vec2 d = vec2(float(modulo), float(i/s))*float(sLOD) - float(NUM_SAMPLES)/2.;
                    vec2 uv = U + (scale * aspectRatio) * d;
                    // What is the depth of the opaque object we're trying to sample
                    float opaqueDepth = unpackRGBAToDepth(texture2D(dm, uv));
                    if (opaqueDepth != 0.0 && opaqueDepth < gl_FragCoord.z) {
                        uv = unrefractedU + ((scale * min(lod / 2., 1.)) * aspectRatio) * d;
                        lod = lod > 4.0 ? lod : lod / 2.0;
                    }
                    float gaussian = gaussian(d);
		            #ifdef TEXTURE_LOD_EXT
                    O += gaussian * texture2DLodEXT( sp, uv, lod).rgb;
                    #else
                    O += gaussian * textureLod( sp, uv, lod).rgb;
                    #endif
                    a += gaussian;
                }
                return O / a;
            }`,[AG]),Aj=new y8(`
            vec3 getVolumeTransmissionRay( vec3 n, vec3 v, float thickness, float ior, mat4 modelMatrix ) {
		        // Direction of refracted light.
		        vec3 refractionVector = refract( -v,  n, 1.0 / ior );
		        // Compute rotation-independant scaling of the model matrix.
		        vec3 modelScale;
		        modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		        modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		        modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		        // The thickness is specified in local space.
		        return normalize( refractionVector ) * thickness * modelScale;
	        }`),AH=new y8(`
float applyIorToRoughness( float roughness, float ior ) {
		// Scale roughness with IOR so that an IOR of 1.0 results in no microfacet refraction and
		// an IOR of 1.5 results in the default amount of microfacet refraction.
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	} `),AW=new y8(`
vec3 getTransmissionSample( vec2 fragCoord, float roughness, float ior, vec2 transmissionSamplerSize, sampler2D transmissionSamplerMap, sampler2D transmissionDepthMap, vec2 unrefractedCoords, vec2 aspectRatio) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
        float lod = applyIorToRoughness(roughness, ior);

        return blur(transmissionSamplerMap, fragCoord, vec2(lod / (transmissionSamplerSize.x / 2.)), min(framebufferLod / 5.5, 8.5), transmissionDepthMap, unrefractedCoords, aspectRatio);
	}`,[AH,AV]),AY=new y8(`
vec3 getIBLVolumeRefraction( vec3 n, vec3 v, float roughness, vec3 position, mat4 modelMatrix, mat4 viewMatrix, mat4 projMatrix, float ior, float thickness, vec2 transmissionSamplerSize, sampler2D transmissionSamplerMap, sampler2D transmissionDepthMap, vec2 aspectRatio ) {
        vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
        vec3 refractedRayExit = position + transmissionRay;

        // Project refracted vector on the framebuffer, while mapping to normalized device coordinates.
        vec4 ndcPos = projMatrix * viewMatrix *  vec4( refractedRayExit, 1.0 );
        vec2 refractionCoords = ndcPos.xy / ndcPos.w;
        refractionCoords += 1.0;
        refractionCoords /= 2.0;

        vec4 ndcPosUnrefracted = projMatrix * viewMatrix * vec4(position, 1.0 );
        vec2 unrefractedCoords = ndcPosUnrefracted.xy / ndcPosUnrefracted.w;
        unrefractedCoords += 1.0;
        unrefractedCoords /= 2.0;

        // Sample framebuffer to get pixel the refracted ray hits.
        return getTransmissionSample( refractionCoords, roughness, ior, transmissionSamplerSize, transmissionSamplerMap, transmissionDepthMap, unrefractedCoords, aspectRatio );
    }`,[AW,Aj]),{transmission:new y8(`
            vec3 transmission(float thickness, float ior, float roughness, vec2 transmissionSamplerSize, sampler2D transmissionSamplerMap, sampler2D transmissionDepthMap, vec2 aspectRatio, vec3 normal, float alpha, out float calpha) {
                vec3 v = vec3(0.);
                if (isOrthographic) {
                    v = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
                } else {
                    v = normalize(vWPosition - cameraPosition);
                }
                vec3 transmission = getIBLVolumeRefraction(vWNormal, -v, roughness,  vWPosition, modelMatrix, viewMatrix, projectionMatrix, ior, thickness, transmissionSamplerSize, transmissionSamplerMap, transmissionDepthMap, aspectRatio );
                float lalpha = alpha;

                 calpha =  lalpha / clamp( lalpha + accumAlpha, 0.00001, 1.0 );
                 accumAlpha += ( 1.0 - accumAlpha ) * lalpha;
                 return transmission;
            }`,[AY])});var x0=class extends y${constructor(A,e,t,i,r,s,a,o,l,h,c){super("v3"),this.nodeType="Depth",this.gradientType=A,this.smooth=e,this.near=t,this.far=i,this.isVector=r,this.isWorldSpace=s,this.origin=a,this.direction=o,this.colors=l,this.steps=h,this.alpha=c,this.calpha=`g${this.uuid.toString().replace(/-/g,"")}_calpha`}generate(A,e){let t=`g${this.uuid.toString().replace(/-/g,"")}`,i=new y8(`vec3 ${t}_sdepth(float near, float far, vec3 origin, vec3 direction, vec4 colors[${t}_MAX_COLORS], float steps[${t}_MAX_COLORS], float alpha, out float calpha) {
               vec4 color = colors[0];
               #ifdef ${t}_IS_VECTOR
                   #ifdef ${t}_LINEAR
                       #ifdef ${t}_WORLDSPACE
                       float depth = vectorLinearWorldSpaceDepth(direction, origin, near, far);
                       #else
                       float depth = vectorLinearObjectSpaceDepth(direction, origin, near, far);
                       #endif
                   #else
                       #ifdef ${t}_WORLDSPACE
                           float depth = vectorSphericalWorldSpaceDepth(origin, near, far);
                       #else
                           float depth = vectorSphericalObjectSpaceDepth(origin, near, far);
                       #endif
                   #endif
               #else
                   float dist = length(vWPosition - cameraPosition);
			       float depth = ( dist - near ) / ( far - near );
               #endif


              float p;
              #ifdef ${t}_SMOOTH
				for ( int i = 1; i < ${t}_MAX_COLORS; i++ ) {
						p = clamp( ( depth - steps[i-1] ) / ( steps[i] - steps[i-1] ), 0.0, 1.0 );
						color = mix(color, colors[i], smoothstep(0.0, 1.0, p));
					}
              #else
                for ( int i = 1; i < ${t}_MAX_COLORS; i++ ) {
                   p = clamp(( depth - steps[i - 1] ) / ( steps[i] - steps[i - 1] ), 0.0, 1.0);
                   color = mix(color, colors[i], p);
                 }
              #endif

               float lalpha = alpha * color.a;
               calpha =  lalpha / clamp( lalpha + accumAlpha, 0.00001, 1.0 );

			   accumAlpha += ( 1.0 - accumAlpha ) * lalpha;
               return color.rgb;
			}`,[x0.Nodes.vectorLinearWorldSpaceDepth,x0.Nodes.vectorLinearObjectSpaceDepth,x0.Nodes.vectorSphericalObjectSpaceDepth,x0.Nodes.vectorSphericalWorldSpaceDepth]);if(!A.isShader("fragment"))return console.warn("DepthNode is not compatible with "+A.shader+" shader."),A.format("vec3( 0.0 )",this.getType(A),e);{A.define(`${t}_MAX_COLORS`,this.colors.value.length),this.smooth.value&&A.define(`${t}_SMOOTH`),this.isVector.value>.5&&A.define(`${t}_IS_VECTOR`),0===this.gradientType.value&&A.define(`${t}_LINEAR`),this.isWorldSpace.value>.5&&A.define(`${t}_WORLDSPACE`),A.require("worldPosition"),A.addFragmentVariable(this.calpha,"float");let r=A.include(i),s=[];return s.push(this.near.build(A,"f")),s.push(this.far.build(A,"f")),s.push(this.origin.build(A,"v3")),s.push(this.direction.build(A,"v3")),s.push(this.colors.build(A,"v4[]")),s.push(this.steps.build(A,"f[]")),s.push(this.alpha.build(A,"f")),s.push(this.calpha),A.format(r+"("+s.join(",")+")",this.getType(A),e)}}},x1=x0;x1.Nodes={vectorLinearWorldSpaceDepth:new y8(`float vectorLinearWorldSpaceDepth(vec3 direction, vec3 origin, float near, float far) {
               vec3 n = normalize(direction);
               float dist = (n.x*(vWPosition.x - origin.x) + n.y*(vWPosition.y - origin.y) + n.z*(vWPosition.z - origin.z));
               return ( dist - near ) / ( far - near );
            }`),vectorLinearObjectSpaceDepth:new y8(`float vectorLinearObjectSpaceDepth(vec3 direction, vec3 origin, float near, float far) {
               vec3 n = normalize(direction);
               float dist = (n.x*(position.x - origin.x) + n.y*(position.y - origin.y) + n.z*(position.z - origin.z));
               return ( dist - near ) / ( far - near );
            }`),vectorSphericalWorldSpaceDepth:new y8(`float vectorSphericalWorldSpaceDepth(vec3 origin, float near, float far) {
               float dist = length(vWPosition - origin);
               return ( dist - near ) / ( far - near );
            }`),vectorSphericalObjectSpaceDepth:new y8(`float vectorSphericalObjectSpaceDepth(vec3 origin, float near, float far) {
               float dist = length(position - origin);
               return ( dist - near ) / ( far - near );
            }`)};var x2=class extends y${constructor(A,e,t,i){super("v3"),this.nodeType="Blend",this.a=A,this.b=e,this.alpha=t,this.mode=i}generate(A,e){if(!A.isShader("fragment"))return console.warn("BlendNode is not compatible with "+A.shader+" shader."),A.format("vec3( 0.0 )",this.getType(A),e);{let t=[];return t.push(this.a.build(A,"c")),t.push(this.b.build(A,"c")),t.push(this.alpha.build(A,"f")),t.push(this.mode.build(A,"i")),A.format("spe_blend("+t.join(",")+")",this.getType(A),e)}}},x3=((bs=x3||{}).NOISE="noise",bs.MAP="map",bs),x4=class extends y${constructor(A,e,t,i,r){super("v3"),this.displacementTypeIndex=new xL(0),this.nodeType="VertexDisplacement",this.intensity=A,this.movementOrTexture=e,"map"===Object.values(x3)[this.displacementTypeIndex.value]&&(this.mat=new xG(this.movementOrTexture.value.matrix)),this.cropOrOffset=t,this.scale=i,this.noiseFunctionIndex=r}generate(A,e){if(!A.isShader("vertex"))return console.warn("VertexDisplacementNode is not compatible with "+A.shader+" shader."),A.format("vec3( 0.0 )",this.getType(A),e);{A.define("USE_LAYER_DISPLACE");let t,i=[];switch(i.push("displaced_position"),i.push("displaced_normal"),Object.values(x3)[this.displacementTypeIndex.value]){case"map":t=A.include(x4.Nodes.map),i.push(this.movementOrTexture.getTexture(A,"t")),i.push("uv"),i.push(this.cropOrOffset.build(A,"f")),this.mat&&i.push(this.mat.build(A,"mat3"));break;case"noise":{let r=Object.values(xj)[this.noiseFunctionIndex.value],s=new y8(`vec3 orthogonal(vec3 v) {
							return normalize(abs(v.x) > abs(v.z) ? vec3(-v.y, v.x, 0.0) : vec3(0.0, -v.z, v.y));
						}`),a=new y8(`vec3 distorted(vec3 p, vec3 n, float scale, float intensity, vec3 offset, float neighbour_offset, float movement) {
							return p + n * ${r}((p + offset) * scale * 0.001 + neighbour_offset + (movement * 0.1)) * intensity;
						}`,[xH.simplex,xH.simplexFractal,xH.simplexAshima,xH.fbm,xH.perlin]),o=new y8(`vec3 vertexDisplacementNoise(vec3 position, vec3 normal, float scale, vec3 offset, float movement, float intensity, out vec3 displaced_normal) {
							vec3 displaced_position = distorted(position, normal, scale, intensity, offset, neighbor_offset, movement);
							vec3 tangent1 = orthogonal(normal);
							vec3 tangent2 = normalize(cross(normal, tangent1));

                            // TODO(Max): The distance to the neighbors was originally scaled by 0.1.
                            // This caused some small oval/circular visual artifacts in the lighting.
                            // For now, simply using neighbors further away betters the problem,
                            // but we should figure out the underlying cause when we have some time.
                            // Maybe its related to how we calculate the tangent and bitangent?
							vec3 nearby1 = position + tangent1;
							vec3 nearby2 = position + tangent2;
							vec3 distorted1 = distorted(nearby1, normal, scale, intensity, offset, neighbor_offset, movement);
							vec3 distorted2 = distorted(nearby2, normal, scale, intensity, offset, neighbor_offset, movement);
							displaced_normal = normalize(cross(distorted1 - displaced_position, distorted2 - displaced_position));
							return displaced_position;
						}`,[a,s]);t=A.include(o),i.push(this.scale.build(A,"f")),i.push(this.cropOrOffset.build(A,"v3")),i.push(this.movementOrTexture.build(A,"f"))}}return i.push(this.intensity.build(A,"f")),i.push("displaced_normal"),A.format(t+"("+i.join(",")+")",this.getType(A),e)}}},x5=x4;x5.Nodes=(AX=new y8(`vec3 orthogonal(vec3 v) {
				return normalize(abs(v.x) > abs(v.z) ? vec3(-v.y, v.x, 0.0) : vec3(0.0, -v.z, v.y));
			}`),AQ=new y8(`float displacementMapTexture(sampler2D tex, float crop, vec2 uv, mat3 mat, vec2 offset) {
				vec2 uvs = (mat * vec3(uv * 2.0 - 1.0, 1.0) / 2.0 + 0.5).xy + offset;
				vec4 tmp = texture2D(tex, uvs);
				vec3 col = tmp.rgb;
				if (crop > 0.5) {
					if ( uvs.x < 0.0 || uvs.x > 1.0 || uvs.y < 0.0 || uvs.y > 1.0 )  {
						return 0.0;
					}
				}
				return col.r;
			}`),{map:new y8(`vec3 vertexDisplacementMap(vec3 position, vec3 normal, sampler2D tex, vec2 uv, float crop, mat3 mat, float intensity, out vec3 displaced_normal) {
				vec3 displaced_position = position + normal * displacementMapTexture(tex, crop, uv, mat, vec2(0.0)) * intensity;
				vec3 tangent1 = normalize(orthogonal(normal));
				vec3 tangent2 = normalize(cross(normal, tangent1));
				vec3 nearby1 = position + tangent1 * 0.1;
				vec3 nearby2 = position + tangent2 * 0.1;
				vec3 distorted1 = nearby1 + normal * displacementMapTexture(tex, crop, uv, mat, vec2(neighbor_offset)) * intensity;
				vec3 distorted2 = nearby2 + normal * displacementMapTexture(tex, crop, uv, mat, vec2(neighbor_offset)) * intensity;
				displaced_normal = normalize(cross(distorted1 - displaced_position, distorted2 - displaced_position));
				return displaced_position;
			}`,[AX,AQ])});var x6=class extends y${constructor(A,e,t,i,r,s,a,o){super("v3"),this.nodeType="Gradient",this.gradientType=A,this.smooth=e,this.colors=t,this.steps=i,this.offset=r,this.morph=s,this.angle=a,this.alpha=o,this.calpha=`g${this.uuid.toString().replace(/-/g,"")}_calpha`}generate(A,e){if(!A.isShader("fragment"))return console.warn("GradientNode is not compatible with "+A.shader+" shader."),A.format("vec3( 0.0 )",this.getType(A),e);{A.define("GRAD_MAX",10),A.require("uv"),A.requires.uv=[!0],A.addFragmentVariable(this.calpha,"float");let t=A.include(x6.Nodes.gradient),i=[];return i.push(this.gradientType.build(A,"i")),i.push(this.smooth.build(A,"b")),i.push(this.colors.build(A,"v4[]")),i.push(this.steps.build(A,"f[]")),i.push(this.offset.build(A,"v2")),i.push(this.morph.build(A,"v2")),i.push(this.angle.build(A,"f")),i.push(this.alpha.build(A,"f")),i.push(this.calpha),A.format(t+"("+i.join(",")+")",this.getType(A),e)}}},x8=x6;x8.Nodes={gradient:new y8(`vec3 gradient(int gradientType, bool smoothed, vec4 colors[GRAD_MAX], float steps[GRAD_MAX], vec2 offset, vec2 morph, float angle, float alpha, out float calpha) {
				vec4 color = colors[0];
				vec2 m = morph / vUv.xy;
				vec2 rot = vec2( 0.5 + m.x, m.y );
				vec2 dt = vec2(
					cos( angle ) * rot.x - sin( angle ) * rot.y,
					sin( angle ) * rot.x + cos( angle ) * rot.y
				);
				vec2 pt = ( vUv - 0.5 + offset ) / 2.0 + dt / 2.0;
				float t = dot( pt, dt ) / dot( dt, dt );
				if ( gradientType == 1 ) {
					t = distance (
						( vUv + morph ) * 3.0,
						( vUv + offset ) + 1.0
					) + angle;
				} else if ( gradientType == 2 ) {
					float polar = atan(
						vUv.x + morph.x - 0.5 + offset.x,
						vUv.y + morph.y - 0.5 + offset.y
					) * -1.0;
					t = fract( ( angle / PI / -2.0 ) + 0.5 * ( polar / PI ) );
				}

				float p;
				if (smoothed) {
					for ( int i = 1; i < GRAD_MAX; i++ ) {
						p = clamp( ( t - steps[i-1] ) / ( steps[i] - steps[i-1] ), 0.0, 1.0 );
						color = mix(color, colors[i], smoothstep(0.0, 1.0, p));
					}

				} else {
					for ( int i = 1; i < GRAD_MAX; i++ ) {
						p = clamp( ( t - steps[i-1] ) / ( steps[i] - steps[i-1] ), 0.0, 1.0 );
						color = mix(color, colors[i], p);
					}
				}

				float lalpha = alpha * color.a;
				calpha =  lalpha / clamp( lalpha + accumAlpha, 0.00001, 1.0 );
				accumAlpha += ( 1.0 - accumAlpha ) * lalpha;

				return color.xyz;
			}`)};var x9=class extends y${constructor(A,e,t,i,r,s,a,o,l,h){super("v3"),this.nodeType="CustomTexture",this.firstTime=!0,this.texture=A,this.textureSize=e,this.crop=t,this.projection=i,this.axis=r,this.side=s,this.size=a,this.mat=o,this.alpha=l,this.mode=h,this.calpha=`g${this.uuid.toString().replace(/-/g,"")}_calpha`}generate(A,e){A.require("position"),A.require("normal"),A.require("uv"),A.requires.uv=[!0],A.extensions.shaderTextureLOD=!0,A.extensions.derivatives=!0;let t=`g${this.uuid.toString().replace(/-/g,"")}`,i;switch(this.projection.value){case 3:i=A.include(x9.Nodes.cylindrical);break;case 2:i=A.include(x9.Nodes.spherical);break;case 1:let r=["vec3(1.0, 0.0, 0.0)","vec3(0.0, 1.0, 0.0)","vec3(0.0, 0.0, 1.0)"][this.axis.value],s=new y8(`
		vec3 ${t}_planarTexture(sampler2D tex, vec2 textureSize, float crop, mat3 mat, vec2 size, float alpha, int mode, out float calpha) {

				vec2 uvs = ( mat * vec3( (${t}_vCustomUv * 2. - 1.) / (size * .5), 1. ) / 2. + 0.5 ).xy;

				vec4 tmp = texture2D( tex, uvs );

				vec3 col = tmp.rgb;
				float lalpha = alpha * tmp.a;
				${2===this.side.value?"":`lalpha *= step(0.0, ${1===this.side.value?"-1.0 * ":""}dot(vObjectNormal, mat * ${r}));`}

				if ( crop > 0.5 ) {
					if ( uvs.x < 0.0 || uvs.x > 1.0 || uvs.y < 0.0 || uvs.y > 1.0 )  {
						lalpha = 0.0;
					}
				}
				calpha =  lalpha / clamp( lalpha + accumAlpha, 0.00001, 1.0 );
				accumAlpha += ( 1.0 - accumAlpha ) * lalpha;
				return col;
			}`);i=A.include(s);break;default:i=A.include(x9.Nodes.uv)}if(1===this.projection.value&&this.firstTime){A.addVertexParsCode(`varying vec2 ${t}_vCustomUv;`),A.addFragmentParsCode(`varying vec2 ${t}_vCustomUv;`);let a=["zy","xz","xy"][this.axis.value];A.addVertexFinalCode(`${t}_vCustomUv = (1. + (transformed.${a})) / 2.;`)}A.addFragmentVariable(this.calpha,"float");let o=[];return o.push(this.texture.generate(A,"t")),o.push(this.textureSize.build(A,"v2")),o.push(this.crop.build(A,"f")),o.push(this.mat.build(A,"mat3")),o.push(this.size.build(A,"v2")),o.push(this.alpha.build(A,"f")),o.push(this.mode.build(A,"i")),o.push(this.calpha),this.firstTime=!this.firstTime,A.format(i+"("+o.join(",")+")",this.getType(A),e)}},x7=x9;x7.Nodes={cylindrical:new y8(`
vec3 cylindricalTexture(sampler2D tex, vec2 textureSize, float crop, mat3 mat, vec2 size, float alpha, int mode, out float calpha) {
                vec3 posN = normalize(position);
                float u = 0.5 + atan(posN.z, posN.x) / (2.*3.1415);
                float scaledHeight = position.y / (size.y * 0.5);
                float v =  (scaledHeight / 2.) + .5;

                vec2 calculatedUv = vec2(u,v);
				vec2 uvs = ( mat * vec3( calculatedUv * 2. - 1., 1. ) / 2. + 0.5 ).xy;

                vec2 df = fwidth(uvs);
               	if(df.x > 0.5) df.x = 0.;

				#ifdef GL_EXT_shader_texture_lod
                vec4 tmp = texture2DLodEXT(tex, uvs, log2(max(df.x, df.y)*min(textureSize.x, textureSize.y)));
				#else
                vec4 tmp = textureLod(tex, uvs, log2(max(df.x, df.y)*min(textureSize.x, textureSize.y)));
				#endif

				vec3 col = tmp.rgb;
				float lalpha = alpha * tmp.a;
				if ( crop > 0.5 ) {
					if ( uvs.x < 0.0 || uvs.x > 1.0 || uvs.y < 0.0 || uvs.y > 1.0 )  {
						lalpha = 0.0;
					}
				}
				calpha =  lalpha / clamp( lalpha + accumAlpha, 0.00001, 1.0 );
				accumAlpha += ( 1.0 - accumAlpha ) * lalpha;
				return col;
			}
`),spherical:new y8(`
vec3 sphericalTexture(sampler2D tex, vec2 textureSize, float crop, mat3 mat, vec2 size, float alpha, int mode, out float calpha) {
                vec3 posN = normalize(vPosition);
                float u = 0.5 + atan(posN.z, posN.x) / (2.*3.1415);
                float v = 0.5 + asin(posN.y) / 3.1415;

                vec2 calculatedUv = vec2(u,v);
				vec2 uvs = ( mat * vec3( calculatedUv * 2. - 1., 1. ) / 2. + 0.5 ).xy;

                vec2 df = fwidth(uvs);
               	if(df.x > 0.5) df.x = 0.;
				#ifdef GL_EXT_shader_texture_lod
                vec4 tmp = texture2DLodEXT(tex, uvs, log2(max(df.x, df.y)*min(textureSize.x, textureSize.y)));
				#else
                vec4 tmp = textureLod(tex, uvs, log2(max(df.x, df.y)*min(textureSize.x, textureSize.y)));
				#endif

				vec3 col = tmp.rgb;
				float lalpha = alpha * tmp.a;
				if ( crop > 0.5 ) {
					if ( uvs.x < 0.0 || uvs.x > 1.0 || uvs.y < 0.0 || uvs.y > 1.0 )  {
						lalpha = 0.0;
					}
				}
				calpha =  lalpha / clamp( lalpha + accumAlpha, 0.00001, 1.0 );
				accumAlpha += ( 1.0 - accumAlpha ) * lalpha;
				return col;
			}
`),uv:new y8(`vec3 uvTexture(sampler2D tex, vec2 textureSize, float crop, mat3 mat, vec2 size, float alpha, int mode, out float calpha) {

				vec2 uvs = ( mat * vec3( vUv * 2. - 1., 1. ) / 2. + 0.5 ).xy;
				vec4 tmp = texture2D( tex, uvs );

				vec3 col = tmp.rgb;

				float lalpha = alpha * tmp.a;
				if ( crop > 0.5 ) {
					if ( uvs.x < 0.0 || uvs.x > 1.0 || uvs.y < 0.0 || uvs.y > 1.0 )  {
						lalpha = 0.0;
					}
				}
				calpha =  lalpha / clamp( lalpha + accumAlpha, 0.00001, 1.0 );
				accumAlpha += ( 1.0 - accumAlpha ) * lalpha;
				return col;
			}`)};var bA=class extends y${constructor(A,e){super("v3"),this.nodeType="CustomNormal",this.cnormal=A,this.alpha=e}generate(A,e){if(!A.isShader("fragment"))return console.warn("CustomNormalNode is not compatible with "+A.shader+" shader."),A.format("vec3( 0.0 )",this.getType(A),e);{let t=A.include(bA.Nodes.customNormal),i=[];return i.push(this.cnormal.build(A,"v3")),i.push("normal"),i.push(this.alpha.build(A,"f")),A.format(t+"("+i.join(",")+")",this.getType(A),e)}}},be=bA;function bt(A,e){return e.color(A)}function bi(A){let{alpha:e,mode:t}=A;return{type:A.type,alpha:e,mode:t}}be.Nodes={customNormal:new y8(`vec3 customNormal(vec3 cnormal, vec3 norm, float alpha) {
				vec3 normal = packNormalToRGB( norm ).rgb;
				normal *= step( vec3(0.5), cnormal );

				accumAlpha += ( 1.0 - accumAlpha ) * alpha;

				return normal;
			}`)};var br,bs,bn,ba,bo,bl=class extends y3{},bh=class{constructor(A=1e4){this.timeout=A,this.cache=new Map,this.head={data:null,time:0,src:null,next:null,prev:null},this.tail={data:null,time:1/0,src:null,next:null,prev:null},this.hasClean=!1,this.head.next=this.tail,this.tail.prev=this.head}log(...A){}scheduleCleanup(){this.hasClean||(this.log("scheduled cleanup"),this.hasClean=!0,setTimeout(()=>{this.hasClean=!1,this.log("cleaning");let A=Date.now(),e=this.head.next;for(;e.time<A-this.timeout;)this.dispose(e.src,e.data),this.cache.delete(e.src),(e=e.next).prev=this.head,this.head.next=e;this.head.next!==this.tail?this.scheduleCleanup():this.log("no more cleanup")},this.timeout+1e3))}load(A){let e=Date.now(),t=this.cache.get(A);return void 0===t?(t={data:this.create(A),src:A,time:e,next:null,prev:null},this.cache.set(A,t)):(t.time=e,t.prev.next=t.next,t.next.prev=t.prev),t.prev=this.tail.prev,t.next=this.tail,this.tail.prev.next=t,this.tail.prev=t,this.scheduleCleanup(),t.data}},bc=class extends bh{create(A){return URL.createObjectURL(new Blob([A]))}dispose(A,e){URL.revokeObjectURL(e)}},bd=class{constructor(A,e){this.data=A,this.onImageLoad=e,this.loaded=!1,this.isVideo=!1,this.isVideo="video"==A.type,this.updateSrc(A.data)}async updateSrc(A){if(typeof document>"u")return;this.dispose(),this.loaded=!1;let e=()=>{for(let A of(this.loaded=!0,[1e3,1001,1002])){let e=this[A];e&&(e.image=this.img,e.needsUpdate=!0)}this.onImageLoad&&this.onImageLoad()};if(this.isVideo){if(this.img=document.createElement("video"),this.img.preload="auto",this.img.playsInline=!0,this.img.currentTime=.01,this.img.muted=!0,"string"!=typeof A){let t;var i=new FileReader;i.readAsDataURL(new Blob([A],{type:"video/mp4"})),await new Promise(A=>{i.onloadend=e=>{t=e.target?.result,A(null)}}),this.img.src=t}else this.img.src=A;this.img.onloadeddata=()=>{e()}}else this.img=new Image,this.img.src="string"==typeof A?A:(bo||(bo=new bc),bo.load(A)),this.img.onload=e}getTexture(A){let e=this[A];if(e)return e;{let t;return t=this.isVideo?new nx(this.img,void 0,A,A):new eJ(this.img,void 0,A,A),this.loaded&&(t.needsUpdate=!0),this[A]=t,t}}dispose(){this[1e3]?.dispose(),this[1e3]=void 0,this[1001]?.dispose(),this[1001]=void 0,this[1002]?.dispose(),this[1002]=void 0}},bu=class extends bd{},bp=class extends y0{},bf={noise:["noiseType"],texture:["projection","axis","side"],video:["projection","axis","side"],displace:["noiseType"],depth:["smooth","isWorldSpace","gradientType","isVector"]},bm={depth:["colors"]};function bg(A,e,t){let i=t.uniforms[`f${t.id}_texture`];if(!i)return!1;if("image"in A){let r=A.image,s=e.image(r),a=i;a instanceof bu||a.image.dispose(),a.image=s}if("video"in A){let o=A.video,l=e.video(o),h=i;h instanceof bu||h.image.dispose(),h.image=l}if("wrapping"in A&&(i.wrap=A.wrapping),"repeat"in A||"offset"in A){let c=t.uniforms[`f${t.id}_mat`];"repeat"in A&&(c.repeat=A.repeat),"offset"in A&&(c.offset=A.offset),c.updateMatrix()}return!1}var bv=class extends y${constructor(A,e,t){super("v3"),this.nodeType="Matcap",this.texture=A,this.alpha=e,this.mode=t,this.calpha=`g${this.uuid.toString().replace(/-/g,"")}_calpha`}generate(A,e){if(!A.isShader("fragment"))return console.warn("MatcapNode is not compatible with "+A.shader+" shader."),A.format("vec3( 0.0 )",this.getType(A),e);{A.addFragmentVariable(this.calpha,"float");let t=A.include(bv.Nodes.matcap);A.require("normal"),A.requires.normal=!0;let i=[];return i.push(this.texture.generate(A,"t")),i.push("normal"),i.push(this.alpha.build(A,"f")),i.push(this.mode.build(A,"i")),i.push(this.calpha),A.format(t+"("+i.join(",")+")",this.getType(A),e)}}},by=bv;by.Nodes={matcap:new y8(`vec3 matcap(sampler2D matcapTex, vec3 normal, float alpha, int mode, out float calpha) {
                vec3 viewDir = normalize( vViewPosition );
                vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
                vec3 y = cross( viewDir, x );
                vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5; // 0.495 to remove artifacts caused by undersized matcap disks
                vec4 matcapColor = texture2D( matcapTex, uv );

                calpha =  alpha / clamp( alpha + accumAlpha, 0.00001, 1.0 );
				accumAlpha += ( 1.0 - accumAlpha ) * alpha;
                
                return matcapColor.rgb;
            }
            `)};var bx=class extends bp{constructor(A,e){super("t"),this.image=A,this.wrap=e}get value(){return this.image.getTexture(this.wrap)}},bb=class extends bp{constructor(A){super("v3"),this.image=A,this._value=new e4}get value(){return this._value.x=this.image.isVideo?this.image.img.videoWidth??0:this.image.img.width,this._value.y=this.image.isVideo?this.image.img.videoHeight??0:this.image.img.height,this._value}},bw=class extends y${constructor(A,e,t,i,r,s,a,o,l,h){super("v3"),this.nodeType="Toon",this.positioning=A,this.colors=e,this.steps=t,this.source=i,this.isWorldSpace=r,this.noiseStrength=s,this.noiseScale=a,this.shadowColor=o,this.offset=l,this.alpha=h,this.calpha=`g${this.uuid.toString().replace(/-/g,"")}_calpha`}generate(A,e){if(A.require("worldNormal"),A.require("worldPosition"),!A.isShader("fragment"))return console.warn("ToonNode is not compatible with "+A.shader+" shader."),A.format("vec3( 0.0 )",this.getType(A),e);{A.define("COLORS_MAX",10),A.addFragmentVariable(this.calpha,"float");let t=A.include(bw.Nodes.toon),i=[];return i.push(this.positioning.build(A,"i")),i.push(this.colors.build(A,"v4[]")),i.push(this.steps.build(A,"f[]")),i.push(this.source.build(A,"v3")),i.push(this.isWorldSpace.build(A,"b")),i.push(this.noiseStrength.build(A,"f")),i.push(this.noiseScale.build(A,"f")),i.push(this.shadowColor.build(A,"v4")),i.push(this.offset.build(A,"v3")),i.push(this.alpha.build(A,"f")),i.push(this.calpha),A.format(t+"("+i.join(",")+")",this.getType(A),e)}}},bS=bw;function bM(A,e,t){A.setUvTransform(t[0],t[1],e[0],e[1],0,0,0)}bS.Nodes=(Aq=new y8(`float rand(float n) {
				return fract(sin(n) * 43758.5453123);
			}`),AZ=new y8(`float hash1(float p) { 
				p = fract(p * 0.011); 
				p *= p + 7.5; 
				p *= p + p; 
				return fract(p); 
			}`),AK=new y8(`float valueNoise(vec3 x) {
				const vec3 step = vec3(110, 241, 171);
			
				vec3 i = floor(x);
				vec3 f = fract(x);
			 
				// For performance, compute the base input to a 1D hash from the integer part of the argument and the 
				// incremental change to the 1D based on the 3D -> 1D wrapping
				float n = dot(i, step);
			
				vec3 u = f * f * (3.0 - 2.0 * f);
				return mix(mix(mix( hash1(n + dot(step, vec3(0, 0, 0))), hash1(n + dot(step, vec3(1, 0, 0))), u.x),
							   mix( hash1(n + dot(step, vec3(0, 1, 0))), hash1(n + dot(step, vec3(1, 1, 0))), u.x), u.y),
						   mix(mix( hash1(n + dot(step, vec3(0, 0, 1))), hash1(n + dot(step, vec3(1, 0, 1))), u.x),
							   mix( hash1(n + dot(step, vec3(0, 1, 1))), hash1(n + dot(step, vec3(1, 1, 1))), u.x), u.y), u.z);
			}`,[AZ]),AJ=new y8(`vec3 hash3(vec3 x) {
				x = vec3(dot(x,vec3(127.1, 311.7, 74.7)),
						 dot(x,vec3(269.5, 183.3, 246.1)),
						 dot(x,vec3(113.5, 271.9, 124.6)));
			
				return fract(sin(x)*43758.5453123);
			}`),A$=new y8(`vec3 voronoiNoise(in vec3 x)
			{
				vec3 p = floor(x);
				vec3 f = fract(x);

				float id = 0.0;
				vec2 res = vec2(100.0);

				for(int k=-1; k<=1; k++)
				for(int j=-1; j<=1; j++)
				for(int i=-1; i<=1; i++)
				{
					vec3 b = vec3(float(i), float(j), float(k));

					// Comment out the "+ hash(p + b);" part below to get "square" cells
					vec3 r = vec3(b) - f + hash3(p + b);
					float d = dot(r, r);

					if (d < res.x)
					{
						id = dot(p + b, vec3(1.0, 57.0, 113.0));
						res = vec2(d, res.x);			
					}
					else if (d < res.y)
					{
						res.y = d;
					}
				}

				return vec3(sqrt(res), abs(id));
			}
			`,[AJ]),{toon:new y8(`vec3 toon(int positioning, vec4 colors[COLORS_MAX], float steps[COLORS_MAX], vec3 source, bool isWorldSpace, float noiseStrength, float noiseScale, vec4 shadowColor, vec3 offset, float alpha, out float calpha) {
				float t = 0.0;
				float shadow = 1.0;

				if (positioning == 0) {

					// Can't do this mode if lighting is "none"
					#if (defined(PHONG) || defined(LAMBERT) || defined(STANDARD))

						// Algorithm from Chapter 10 of Graphics Shaders
						const vec3 weights = vec3(0.2125, 0.7154, 0.0721);
						vec3 lpos;
						vec3 l;
						float dproduct;

						#if (NUM_POINT_LIGHTS > 0)

							#if defined(USE_SHADOWMAP) && (NUM_POINT_LIGHT_SHADOWS > 0)
								PointLightShadow pointLightShadow;
							#endif 

							#pragma unroll_loop_start
							for (int i = 0; i < NUM_POINT_LIGHTS; i++) {
								// Light positions are in view-space for some reason?
								lpos = (inverse(viewMatrix) * vec4(pointLights[UNROLLED_LOOP_INDEX].position, 1.0)).xyz;
								l = normalize(lpos - worldPosition);
								
								dproduct = dot(l, normalize(worldNormal)) * 0.5 + 0.5;
								
								// TODO: we want to use "intensity" but it isn't available in the shader code
								//dproduct += dot(pointLights[UNROLLED_LOOP_INDEX].color, weights);

								t = max(t, dproduct);

								// Accumulate shadow contribution
								#if defined(USE_SHADOWMAP) && (UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS)
									pointLightShadow = pointLightShadows[UNROLLED_LOOP_INDEX];
									shadow *= getPointShadow( 
											pointShadowMap[UNROLLED_LOOP_INDEX], 
											pointLightShadow.shadowMapSize, 
											pointLightShadow.shadowBias, 
											pointLightShadow.shadowRadius,
											vPointShadowCoord[UNROLLED_LOOP_INDEX], 
											pointLightShadow.shadowCameraNear, 
											pointLightShadow.shadowCameraFar);
								#endif
							}
							#pragma unroll_loop_end

						#endif

						#if NUM_DIR_LIGHTS > 0 
							
							#if defined(USE_SHADOWMAP) && (NUM_DIR_LIGHT_SHADOWS > 0)
								DirectionalLightShadow directionalLightShadow;
							#endif 

							#pragma unroll_loop_start
							for (int i = 0; i < NUM_DIR_LIGHTS; i++) {
								// Use the direction vector for directional lights instead
								l = (inverse(viewMatrix) * vec4(directionalLights[UNROLLED_LOOP_INDEX].direction, 0.0)).xyz;
		
								dproduct = dot(l, normalize(worldNormal)) * 0.5 + 0.5;
								t = max(t, dproduct);

								// Accumulate shadow contribution
								#if defined(USE_SHADOWMAP) && (UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS)
									directionalLightShadow = directionalLightShadows[UNROLLED_LOOP_INDEX];
									shadow *= getShadow( 
										UNROLLED_LOOP_INDEX,
										directionalShadowMap[UNROLLED_LOOP_INDEX], 
										directionalLightShadow.shadowMapSize, 
										directionalLightShadow.shadowBias, 
										directionalLightShadow.shadowRadius, 
										vDirectionalShadowCoord[UNROLLED_LOOP_INDEX]);
								#endif
							}
							#pragma unroll_loop_end

						#endif

						#if NUM_SPOT_LIGHTS > 0 
							
							#if defined(USE_SHADOWMAP) && (NUM_SPOT_LIGHT_SHADOWS > 0)
								SpotLightShadow spotLightShadow;
							#endif 

							#pragma unroll_loop_start
							for (int i = 0; i < NUM_SPOT_LIGHTS; i++) {
								lpos = (inverse(viewMatrix) * vec4(spotLights[UNROLLED_LOOP_INDEX].position, 1.0)).xyz;
								l = normalize(lpos - worldPosition);
								
								dproduct = dot(l, normalize(worldNormal)) * 0.5 + 0.5;
								t = max(t, dproduct);

								// Accumulate shadow contribution
								#if defined(USE_SHADOWMAP) && (UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS)
									spotLightShadow = spotLightShadows[UNROLLED_LOOP_INDEX];
									shadow *= getShadow(
										UNROLLED_LOOP_INDEX,
										spotShadowMap[UNROLLED_LOOP_INDEX], 
										spotLightShadow.shadowMapSize, 
										spotLightShadow.shadowBias, 
										spotLightShadow.shadowRadius, 
										vSpotShadowCoord[UNROLLED_LOOP_INDEX]);
								#endif
							}
							#pragma unroll_loop_end

						#endif

						t = clamp(t, 0.0, 1.0);
				
					#endif

				} else if (positioning == 1) {
					
					vec3 origin = mix(position, worldPosition, float(isWorldSpace));
					vec3 direction = normalize(source - origin);
					t = dot(direction, normalize(worldNormal)) * 0.5 + 0.5;	

				} else {

					vec3 origin = worldPosition;
					vec3 source = cameraPosition - offset;
					vec3 direction = normalize(source - origin);
					t = dot(direction, normalize(worldNormal)) * 0.5 + 0.5;	
					
				}

				if (noiseStrength > 0.0) {
					// Distort with noise
					vec3 st = position / noiseScale;
					
					// Voronoi "smooth" noise
					float noise = 1.0 - voronoiNoise(st).x;

					// Voronoi cellular noise
					//float noise = 1.0 - rand(voronoiNoise(st).z);

					// Position warp noise
					// vec3 offset = vec3(
					// 	simplex3d(st),
					// 	simplex3d(st + vec3(111.1, 143.89, 217.19)),
					// 	simplex3d(st + vec3(171.1, 247.89, 117.23))
					// );
					// st += offset;
					// float noise = valueNoise(st);

					t += noise * noiseStrength;
				}

				t = clamp(t, 0.0, 1.0);

				// Compute ramp color
				float p;
				vec4 color = colors[0];
				for (int i = 1; i < COLORS_MAX; i++) {
					p = clamp((t - steps[i-1]) / (steps[i] - steps[i-1]), 0.0, 1.0);
					color = mix(color, colors[i], smoothstep(0.0, 1.0, p));
				}

				// Incorporate custom shadow color
				if (positioning == 0) {

					vec3 blendedShadow = mix(color.rgb, shadowColor.rgb, shadowColor.a);
					color.rgb = mix(blendedShadow, color.rgb, shadow);
				
				}

				// Accumulate alpha as usual
				float lalpha = alpha * color.a;
				calpha =  lalpha / clamp(lalpha + accumAlpha, 0.00001, 1.0);
				accumAlpha += (1.0 - accumAlpha) * lalpha;

				return color.xyz;

            }`,[xH.simplex,Aq,AK,A$])});var bE=class extends xG{constructor(A,e){super(new eL),this.repeat=A,this.offset=e,bM(this.value,A,e)}updateMatrix(){bM(this.value,this.repeat,this.offset)}},bT=class{constructor(A,e,t,i){for(let r in this.id=A,this.uuid=e,this.data=t,this.uniforms={},i)this.uniforms[`f${this.id}_${r}`]=i[r];for(let s in t)b_(s,this,t)}get type(){return this.data.type}static create(A,e,t,i){if("light"===t.type)return bP.createLigherLayer(A,e,t,i);if("texture"===t.type||"video"===t.type){let r="texture"===t.type?i.image(t.texture.image):i.video(t.texture.video),s=new bx(r,t.texture.wrapping),a=new bb(r),o=new bE(t.texture.repeat,t.texture.offset),l=new xl(t.crop?1:0),h=new xL(t.projection??0),c=new xL(["x","y","z"].indexOf(t.axis)??0),d=new xL(t.side??0),u=new y1(t.size?new e_(t.size[0],t.size[1]):new e_(100,100)),p=new xl(t.alpha??1),f=new xL(t.mode??0),m=new x7(s,a,l,h,c,d,u,o,p,f),g=new xa(m.calpha,"f");return new bC(A,e,t,{texture:s,textureSize:a,crop:l,projection:h,axis:c,side:d,size:u,mat:o,alpha:p,mode:f},m,f,g)}if("matcap"===t.type){let v=i.image(t.texture.image),y=new bx(v,t.texture.wrapping),x=new xl(t.alpha??1),b=new xL(t.mode??0),w=new by(y,x,b),S=new xa(w.calpha,"f");return new bC(A,e,t,{texture:y,alpha:x,mode:b},w,b,S)}if("displace"!==t.type){let M;return M=function(A,e){switch(A.type){case"fresnel":return function(A,e){let{bias:t,scale:i,intensity:r,factor:s,color:a}=A;return{...bi(A),color:bt(a,e),bias:t,scale:i,intensity:r,factor:s}}(A,e);case"gradient":return function(A){let{gradientType:e,smooth:t,colors:i,steps:r,angle:s,offset:a,morph:o}=A;return{...bi(A),gradientType:e,smooth:t,colors:i.map(A=>new e$(A[0],A[1],A[2],A[3])),num:i.length,steps:r,offset:new e_(...a),morph:new e_(...o),angle:s}}(A);case"depth":return function(A){let{gradientType:e,near:t,far:i,isVector:r,isWorldSpace:s,origin:a,direction:o,colors:l,steps:h,smooth:c}=A;return{...bi(A),gradientType:e,near:t,far:i,isVector:r,isWorldSpace:s,origin:new e4(...a),direction:o?new e4(...o):new e4(1,0,0),colors:l.map(A=>void 0!==A?new e$(A[0],A[1],A[2],A[3]):new e$(0,0,0,0)),steps:h.slice(0,l.length),smooth:c}}(A);case"normal":return function(A){let{cnormal:e}=A;return{...bi(A),cnormal:new e4(e[0],e[1],e[2])}}(A);case"noise":return{...bi(A),scale:A.scale,move:A.move,fA:new e_(...A.fA),fB:new e_(...A.fB),size:new e4(...A.size),distortion:new e_(...A.distortion),colorA:bt(A.colorA,e),colorB:bt(A.colorB,e),colorC:bt(A.colorC,e),colorD:bt(A.colorD,e),noiseType:A.noiseType};case"rainbow":return{...bi(A),filmThickness:A.filmThickness,movement:A.movement,wavelengths:new e4(...A.wavelengths),noiseStrength:A.noiseStrength,noiseScale:A.noiseScale,offset:new e4(...A.offset)};case"toon":return{...bi(A),positioning:A.positioning,colors:A.colors.map(A=>new e$(A[0],A[1],A[2],A[3])),num:A.colors.length,steps:A.steps,source:new e4(...A.source),isWorldSpace:A.isWorldSpace,noiseStrength:A.noiseStrength,noiseScale:A.noiseScale,shadowColor:bt(A.shadowColor,e),offset:new e4(...A.offset)};case"outline":return{...bi(A),outlineColor:bt(A.outlineColor,e),contourColor:bt(A.contourColor,e),outlineWidth:A.outlineWidth,contourWidth:A.contourWidth,outlineThreshold:A.outlineThreshold,contourThreshold:A.contourThreshold,outlineSmoothing:A.outlineSmoothing,contourFrequency:A.contourFrequency,contourDirection:A.contourDirection,positionalLines:A.positionalLines,compensation:A.compensation};case"transmission":return{...bi(A),thickness:A.thickness,ior:A.ior,roughness:A.roughness};case"color":return{...bi(A),color:bt(A.color,e)}}}(t,i),function(A,e,t,i){switch(A.type){case"color":{let r=new x_(i.color??5855577),s=new xl(i.alpha??1),a=new xa("alpha / clamp(alpha + accumAlpha, 0.00001, 1.0 )","f");a.keywords.alpha=s;let o=new xL(i.mode??0);return r.alpha=s,new bC(e,t,A,{color:r,alpha:s,mode:o},r,o,a)}case"fresnel":{let l=new x_(i.color??16777215),h=new xl(i.bias??.1),c=new xl(i.scale??1),d=new xl(i.intensity??2),u=new xl(i.factor??1),p=new xl(i.alpha??1),f=new xL(i.mode??0),m=new xX(l,h,c,d,u,p,f),g=new xa(m.calpha,"f");return new bC(e,t,A,{color:l,bias:h,scale:c,intensity:d,factor:u,alpha:p,mode:f},m,f,g)}case"rainbow":{let v=new xl(i.filmThickness??30),y=new xl(i.movement??0),x=new y2(i.wavelengths??new e4(0,0,0)),b=new xl(i.noiseStrength??0),w=new xl(i.noiseScale??1),S=new y2(i.offset??new e4(0,0,0)),M=new xl(i.alpha??1),E=new xq(v,y,x,b,w,S,M),T=new xa(E.calpha,"f"),C=new xL(i.mode??0);return new bC(e,t,A,{filmThickness:v,movement:y,wavelengths:x,noiseStrength:b,noiseScale:w,offset:S,alpha:M,mode:C},E,C,T)}case"transmission":{let D=new xl(i.thickness??10),P=new xl(i.ior??1.5),_=new xl(i.roughness??.5),L=xI.transmissionSize,O=xI.transmissionRenderTarget,B=xI.transmissionRenderTargetDepth,I=window.innerWidth,R=window.innerHeight,N=I>=R?new y1(R/I,1):new y1(1,I/R),z=new xl(i.alpha??1),F=new x$(D,P,_,L,O,B,N,z),U=new xa(F.calpha,"f"),k=new xL(i.mode??0);return new bC(e,t,A,{thickness:D,ior:P,roughness:_,aspectRatio:N,alpha:z,mode:k},F,k,U)}case"toon":{let G,V=new xL(i.positioning??0),j;i.colors?j=new xV(i.colors.length,i.colors):(j=new xV(10,new e$(0,0,0,1))).value[1]=new e$(1,1,1,1),i.steps?G=new xB(i.steps.length,i.steps):(G=new xB(10,1)).value[0]=0;let H=new y2(i.source??new e4(0,0,0)),W=new xk(i.isWorldSpace??!0),Y=new xl(i.noiseStrength??0),X=new xl(i.noiseScale??1),Q=new y4(i.shadowColor),q=new y2(i.offset??new e4(0,0,0)),Z=new xl(i.alpha??1),K=new bS(V,j,G,H,W,Y,X,Q,q,Z),J=new xa(K.calpha,"f"),$=new xL(i.mode??0);return new bC(e,t,A,{positioning:V,colors:j,steps:G,source:H,isWorldSpace:W,noiseStrength:Y,noiseScale:X,shadowColor:Q,offset:q,alpha:Z,mode:$},K,$,J)}case"outline":{let AA=new x_(i.outlineColor??16777215),Ae=new x_(i.contourColor??16777215),At=new xl(i.outlineWidth??.1),Ai=new xl(i.contourWidth??.1),Ar=new xl(i.outlineThreshold??.1),As=new xl(i.contourThreshold??.1),An=new xl(i.outlineSmoothing??.1),Aa=new xl(i.contourFrequency??.1),Ao=new y2(i.contourDirections??new e4(0,1,0)),Al=new xk(i.positionalLines??!1),Ah=new xk(i.compensation??!0),Ac=xI.normalRenderTarget,Ad=xI.normalRenderTargetDepth,Au=xI.pixelRatioNode,Ap=xI.resolution,Af=new xl(i.alpha??1),Am=new xK(AA,Ae,At,Ai,Ar,As,An,Aa,Ao,Al,Ah,Ap,Ac,Ad,Au,Af),Ag=new xa(Am.calpha,"f"),Av=new xL(i.mode??0);return new bC(e,t,A,{outlineColor:AA,contourColor:Ae,outlineWidth:At,contourWidth:Ai,outlineThreshold:Ar,contourThreshold:As,outlineSmoothing:An,contourFrequency:Aa,contourDirection:Ao,positionalLines:Al,compensation:Ah,alpha:Af,mode:Av},Am,Av,Ag)}case"depth":{let Ay,Ax=new xL(i.gradientType??0),Ab=new xk(i.smooth??!1),Aw=new xl(i.near??50),AS=new xl(i.far??200),AM=new xl(i.isVector??1),AE=new xl(i.isWorldSpace??0),AT=new y2(i.origin??new e4),AC=new y2(i.direction??new e4),AD;i.colors?AD=new xV(i.colors.length,i.colors):(AD=new xV(2,new e$(0,0,0,1))).value[1]=new e$(1,1,1,1),i.steps?Ay=new xB(i.steps.length,i.steps):(Ay=new xB(2,1)).value[0]=0;let AP=new xl(i.alpha??1),A_=new xL(i.mode??0),AL=new x1(Ax,Ab,Aw,AS,AM,AE,AT,AC,AD,Ay,AP),AO=new xa(AL.calpha,"f");return new bC(e,t,A,{gradientType:Ax,smooth:Ab,near:Aw,far:AS,isVector:AM,isWorldSpace:AE,origin:AT,direction:AC,colors:AD,steps:Ay,alpha:AP,mode:A_},AL,A_,AO)}case"noise":{let AB=new xl(i.scale??1),AI=new y2(i.size??new e4(100,100,100)),AR=new xl(i.move??1),AN=new y1(i.fA??new e_(1.7,9.2)),Az=new y1(i.fB??new e_(8.3,2.8)),AF=new y1(i.distortion??new e_(1,1)),AU=new y4(i.colorA),Ak=new y4(i.colorB),AG=new y4(i.colorC),AV=new y4(i.colorD),Aj=new xl(i.alpha??1),AH=new xL(i.mode??0),AW=new xL(i.noiseType??0),AY=new xW(AB,AI,AR,AN,Az,AF,AU,Ak,AG,AV,Aj,AW),AX=new xa(AY.calpha,"f");return new bC(e,t,A,{scale:AB,size:AI,move:AR,fA:AN,fB:Az,distortion:AF,colorA:AU,colorB:Ak,colorC:AG,colorD:AV,alpha:Aj,mode:AH,noiseType:AW},AY,AH,AX)}case"normal":{let AQ=new y2(i.cnormal??new e4(1,1,1)),Aq=new xl(i.alpha??1),AZ=new xL(i.mode??0),AK=new be(AQ,Aq),AJ=new xa("alpha / clamp(alpha + accumAlpha, 0.00001, 1.0 )","f");return AJ.keywords.alpha=Aq,new bC(e,t,A,{cnormal:AQ,alpha:Aq,mode:AZ},AK,AZ,AJ)}case"gradient":{let A$,A0=new xL(i.gradientType??0),A1=new xk(i.smooth??!1),A2;i.colors?A2=new xV(i.colors.length,i.colors):(A2=new xV(10,new e$(0,0,0,1))).value[1]=new e$(1,1,1,1),i.steps?A$=new xB(i.steps.length,i.steps):(A$=new xB(10,1)).value[0]=0;let A3=new y1(i.offset??new e_(0,0)),A4=new y1(i.morph??new e_(0,0)),A5=new xl(i.angle??0),A6=new xl(i.alpha??1),A8=new xL(i.mode??0),A9=new x8(A0,A1,A2,A$,A3,A4,A5,A6),A7=new xa(A9.calpha,"f");return new bC(e,t,A,{gradientType:A0,smooth:A1,colors:A2,steps:A$,offset:A3,morph:A4,angle:A5,alpha:A6,mode:A8},A9,A8,A7)}default:{let eA=new x_(1,0,0,1),ee=new xl(1),et=new xa("alpha / clamp(alpha + accumAlpha, 0.00001, 1.0 )","f");et.keywords.alpha=ee;let ei=new xL(0);return eA.alpha=ee,new bC(e,t,A,{color:eA,alpha:ee,mode:ei},eA,ei,et)}}}(t,A,e,M)}if("noise"===t.displacementType){let E=new y2(new e4(...t.offset)),T=new xl(t.scale??10),C=new xl(t.intensity??8),D=new xl(t.movement??1),P=new xL(t.noiseType??0),_=new x5(C,D,E,T,P);return new bD(A,e,t,{offset:E,scale:T,intensity:C,movement:D,noiseType:P},_)}throw Error()}updateByOp(A,e,t){if(void 0===A.path[0]){if(0===A.type)return"type"in A.props||"category"in A.props?(t.scene?.markNeedsUpdateRendererDirty(),!0):function(A,e,t,i){let r=!1;for(let[s,a]of Object.entries(A)){if(!s||void 0===a)continue;if(b_(s,t,i)){"visible"===s&&"light"===t.type&&(r=!0);continue}t.visible=i.visible;let o=t.uniforms[`f${t.id}_${s}`];if(o&&!(o instanceof bp))switch(r=r||function(A,e,t){let i=bf[A.type],r=bm[A.type];if(void 0!==r){let s=A.color;if(r.includes(e)){let a=s[e]?.value?.length;if(void 0!==a&&a!==t.length)return!0}}return void 0!==i&&i.includes(e)}(t,s,a),o.constructor){case x_:if("string"==typeof a){let l=e.getColor(a);l&&(o.value=l);break}{let h=a;o.value instanceof bl?o.value=new y3(h.r,h.g,h.b,h.a):o.setRGBA(h);break}case y4:if("string"==typeof a){let c=e.getColor(a);c&&(o.value=c);break}{let d=a;o.value instanceof bl?o.value=new y3(d.r,d.g,d.b,d.a):o.value.setRGBA(d.r,d.g,d.b,d.a);break}case y1:{let u=a;o.value.setX(u[0]),o.value.setY(u[1]);break}case y2:{let p=a;o.value.setX(p[0]),o.value.setY(p[1]),o.value.setZ(p[2]);break}case xo:bg(a,e,t);break;case xV:o.value=a.map(A=>new e$(...A));break;default:o.value=a}}return r}(A.props,t.shared,this,e)}else if("texture"===A.path[0])return!("texture"in e)&&!("video"in e)||bg(A.props,t.shared,this);return!1}dispose(){let A;if("texture"===(A=this instanceof bT?this.type:this)||"video"===A||"displace_map"===A||"matcap"===A){let e=this.uniforms[`f${this.id}_texture`];if(!e)return!1;e instanceof bu||e.image.dispose()}}hasValueByKey(A){return void 0!==this.uniforms[A]}hasValue(A){return this.hasValueByKey(`f${this.id}_${A}`)}setValue(A,e){let t=`f${this.id}_${A}`;this.hasValueByKey(t)&&void 0!==e&&(this.uniforms[t].value=e)}getNode(A){let e=`f${this.id}_${A}`;if(this.hasValueByKey(e))return this.uniforms[e]}getValue(A){let e=`f${this.id}_${A}`;if(this.hasValueByKey(e))return this.uniforms[e].value}getName(A){let e=/f\d+_(.*)/.exec(A);if(e&&e.length>1)return e[1];console.log(`Layer.getName: error ${A}`)}getNames(){let A=[];for(let e in this.uniforms){let t=this.getName(e);t&&A.push(t)}return A}},bC=class extends bT{constructor(A,e,t,i,r,s,a){super(A,e,t,i),this.color=r,this.mode=s,this.alpha=a}},bD=class extends bT{constructor(A,e,t,i,r){super(A,e,t,i),this.position=r}},bP=class extends bT{constructor(A,e,t,i,r){super(A,e,t,r),this.node=i}static createLigherLayer(A,e,t,i){let r,s=new xl(t.alpha),a=new xL(t.mode),o;if(t.visible){if("lambert"===t.category){r=new xN;let l=new x_(i.color(t.emissive)??0);o={emissive:l},r.emissive=l}else if("toon"===t.category){r=new xU;let h=new xl(t.shininess??30),c=new x_(i.color(t.specular)??1118481);o={shininess:h,specular:c},r.shininess=h,r.specular=c}else if("physical"===t.category){r=new xF;let d=new xl(t.roughness??.3),u=new xl(t.metalness??0),p=new xl(t.reflectivity??.5);o={roughness:d,metalness:u,reflectivity:p},r.roughness=d,r.metalness=u,r.reflectivity=p}else{r=new xz;let f=new xl(t.shininess??30),m=new x_(i.color(t.specular)??1118481);o={shininess:f,specular:m},r.shininess=f,r.specular=m}}else r=new xO,o={};return r.alpha=new xl(1),r.shadingAlpha=s,r.shadingBlend=a,o.alpha=r.shadingAlpha,o.mode=r.shadingBlend,new bP(A,e,t,r,o)}get category(){return this.node.category}};function b_(A,e,t){if("displace"===t.type&&("intensity"===A||"visible"===A)){let i=e.uniforms[`f${e.id}_intensity`];return i?(i.value=t.intensity*(t.visible?1:0),i):void 0}if("displace"!==t.type&&("alpha"===A||"visible"===A)){let r=e.uniforms[`f${e.id}_alpha`];if(!r)return;if(r.value=t.alpha*(t.visible?1:0),"outline"===t.type&&"visible"===A){let s=e.uniforms[`f${e.id}_compensation`];s&&(s.value=t.compensation&&t.visible)}return r}}function bL(A,e){let t=0;for(let i of A.layers)if("displace"!==i.data.type&&"alpha"in i.data&&"light"!==i.data.type&&"fresnel"!==i.data.type&&"texture"!==i.data.type&&"matcap"!==i.data.type&&"rainbow"!==i.data.type&&"outline"!==i.data.type){let r=i.data.visible?i.data.alpha:0;if(1==r&&"depth"==i.data.type||"gradient"==i.data.type){for(let s of i.data.colors)if(s[3]<1){r=s[3];break}}else if(1==r&&"noise"==i.data.type){let a=Math.min(e.color(i.data.colorA).a,Math.min(e.color(i.data.colorB).a,Math.min(e.color(i.data.colorC).a,e.color(i.data.colorD).a)));a<1&&(r=a)}t+=(1-t)*r}return t<1}var bO=class extends ij{constructor(){super(void 0),this.flatShading=!1,this.cacheKey="",this.fog=!0,this.dithering=!0,this.vertexColors=!0,this.transparent=!0}customProgramCacheKey(){return this.cacheKey}},bB=class extends bO{constructor(A,e,t,i){super(),this.flatShading=A,this.side=e,this.wireframe=t,this.root=i}updateAfterBuild(){let A=this.root;this.lights=A.lights,this.vertexShader=A.vertexShader,this.fragmentShader=A.fragmentShader,this.defines=A.defines,this.uniforms=A.uniforms,this.extensions=A.extensions,this.transparent=A.transparent,this.cacheKey=A.customProgramCacheKey()+"flat"+this.flatShading+this.side}onBeforeCompile(A,e){this.root.onBeforeCompile(A)}get data(){return this.root.data}get category(){return this.root.category}getFlavor(A,e,t){return this.root.getFlavor(A,e,t)}get layers(){return this.root.layers}get fragment(){return this.root.fragment}getLayersOfType(A){return this.root.getLayersOfType(A)}getLayerByUuid(A){return this.root.getLayerByUuid(A)}updateByOp(A,e,t){this.root.updateByOp(A,e,t)}},bI=class extends bO{constructor(A,e){super(),this.data=A,this.layerIdGen=0,this.flavors=[],this.type="NodeMaterial",this.updaters=[],this.reset0(A,e)}get nodeMaterial(){return this}getFlavor(A,e,t){let i=t?6:(A?3:0)+e;if(0===i)return this;void 0===this.flavors&&(this.flavors=[]),i-=1;let r=this.flavors[i];return void 0===r&&(r=new bB(A,e,t,this),this.flavors[i]=r,r.flatShading=A,r.side=e,r.updateAfterBuild()),r}get fragment(){return this.lightLayer.node}get category(){return this.lightLayer.category}reset(A,e){this.data!==A&&this.reset0(A,e)}reset0(A,e){this.data=A;let t=A.layers??md.defaultTwoLayerData("phong").layers;this.layers=t.map(A=>bT.create(this.layerIdGen++,A.id,A.data,e.shared)),this.layers.reverse(),this.name=A.name??"Untitled Material",this.onUpdate(),this.transparent=bL(A,e.shared)}getLayersOfType(A){return this.layers.filter(e=>e.type===A)}getLayerByUuid(A){return this.layers.find(e=>e.uuid===A)}onUpdate(){this.cacheKey=this.computeCacheKey(),this.lightLayer=this.layers.find(A=>A instanceof bP),void 0===this.lightLayer&&(this.lightLayer=new bP(0,"",{...p7.defaultData("light","phong"),visible:!1},new xO,{})),this.dispose(),this.needsUpdate=!0,this.blendColors(),this.blendAfterColors(),this.blendPositions()}updateByOp(A,e,t){if(this.data=e,this.transparent=bL(e,t.shared),"layers"===A.path[0]){this.data=e;let i=t.shared,r=A.path[1];if(void 0===r){if(this.layers.reverse(),4===A.type){let s=bT.create(this.layerIdGen++,A.id,A.data,t.shared);this.layers.splice(A.localIndex,0,s),t.scene?.markNeedsUpdateRendererDirty()}else if(5===A.type)this.layers.splice(A.localIndex,1)[0].dispose(),t.scene?.markNeedsUpdateRendererDirty();else if(6===A.type){let a=this.layers.findIndex(e=>e.uuid===A.id),o=this.layers[a];this.layers.splice(a,1),this.layers.splice(A.localIndex,0,o),t.scene?.markNeedsUpdateRendererDirty()}this.layers.reverse(),this.onUpdate()}else{let l=this.layers.find(A=>A.uuid===r);if(l){let h=e.layers.data(r);if(l.updateByOp({...A,path:A.path.slice(2)},h,t)){let c=bT.create(this.layerIdGen++,r,h,i);this.layers.splice(this.layers.findIndex(A=>A.uuid===r),1,c),this.onUpdate()}}}}else this.reset(e,t)}blendColors(){let A=this.layers.findIndex(A=>A instanceof bC),e=this.layers.findIndex(A=>A instanceof bP);if(-1!==A&&A<e){let t=this.layers[A].color;for(let i=A+1;i<e;++i){let r=this.layers[i];r instanceof bC&&(t=new x2(t,r.color,r.alpha,r.mode))}this.fragment.color=t}else this.fragment.color=void 0}blendAfterColors(){let A=new xa("outgoingLight","f"),e=this.layers.findIndex(A=>A instanceof bP);if(this.layers.length>e+1){for(let t=e+1;t<this.layers.length;++t){let i=this.layers[t];i instanceof bC&&(A=new x2(A,i.color,i.alpha,i.mode))}this.fragment.afterColor=A}else this.fragment.afterColor=void 0}blendPositions(){let A=this.layers.filter(A=>A instanceof bD);if(A.length>0){let e=A[0].position;for(let t=1;t<A.length;++t)A[t]&&(e=new xd(e,A[t].position,xd.ADD),e=new xd(e,new xl(.5).setReadonly(!0),xd.MUL));this.fragment.position=e}else this.fragment.position=void 0}getDefines(){return this.defines}getUniforms(){return this.uniforms}getVertexShader(){return this.vertexShader}getFragmentShader(){return this.fragmentShader}onBeforeCompile(A){this.build(),A.defines=this.defines,A.uniforms=this.uniforms,A.vertexShader=this.vertexShader,A.fragmentShader=this.fragmentShader,A.extensionDerivatives=!0===this.extensions.derivatives,A.extensionFragDepth=!0===this.extensions.fragDepth,A.extensionDrawBuffers=!0===this.extensions.drawBuffers,A.extensionShaderTextureLOD=!0===this.extensions.shaderTextureLOD}clampUniformsForPreview(A,e){let t=(A,e,t)=>Math.min(Math.max(A,e),t);for(let i of this.layers)if("displace"===i.type){let r=t(i.uniforms[`f${i.id}_intensity`].value,A,e);i.uniforms[`f${i.id}_intensity`].value=r}}computeCacheKey(){let A="[";for(let{data:e}of this.data.layers)if("light"===e.type)A+=`"${e.visible?e.category.toUpperCase():"Basic"}"`;else{let t=[...(bf[e.type]??[]).map(A=>e[A]),...(bm[e.type]??[]).map(A=>e[A]?.length??0)];t.length?A+=`["${e.type}", "${t.join('","')}"],`:A+=`"${e.type}",`}return A.slice(0,-1)+"]"}updateFrame(A){for(let e=0;e<this.updaters.length;++e)A.updateNode(this.updaters[e])}build(){let A=new xP;for(let e of(this.lights=this.lightLayer.data.visible,A.build(this.fragment,this.fragment),this.vertexShader=A.getCode("vertex"),this.fragmentShader=A.getCode("fragment"),this.defines=A.defines,this.uniforms=A.uniforms,this.extensions=A.extensions,this.updaters=A.updaters,this.flavors))e&&e.updateAfterBuild();return this}dispose(){for(let A of(this.layers.forEach(A=>A.dispose()),super.dispose(),this.flavors))A&&A.dispose()}getHash(){return'{"fragment":'+this.fragment.getHash()+"}"}};Object.defineProperties(bO.prototype,{properties:{get:function(){return this.fragment.properties}}});var bR,bN=class extends bI{},bz=eh(eu()),bF=new Map,bU=class{constructor({src:A,volume:e,delay:t,loop:i}){let r;this._volume=1,this.delay=0,this._loop=1,this.loopsRemaining=0,this._status="stopped",this.onEnd=()=>{this.loopsRemaining===1/0?this.replay():this.loopsRemaining>1?(this.replay(),this.loopsRemaining--):(this._status="stopped",this.loopsRemaining=this._loop)},r="string"==typeof A?{src:A}:{src:function(A){if("string"==typeof A)return A;let e=bF.get(A);return e||(e={url:URL.createObjectURL(new Blob([A]))},bF.set(A,e)),e.url}(A),format:"wav"},this.sound=new bz.Howl(r),this.sound.on("end",this.onEnd),this.src=A,void 0!==e&&(this.volume=e),void 0!==t&&(this.delay=t),void 0!==i&&(this.loop=i)}get status(){return this._status}get volume(){return this._volume}set volume(A){this._volume=A,this.sound.volume(A)}get loop(){return this._loop}set loop(A){this._loop=A,this.loopsRemaining=A}replay(){this.clearDelay(),this.delayTimerId=window.setTimeout(()=>{this.sound.play(),this.clearDelay()},this.delay)}fade(A,e=1e3){A?(this.sound.volume(this._volume),this.clearFade(),this.fadeTimerId=window.setTimeout(()=>{this.sound.fade(this._volume,0,e),this.clearFade()},A)):this.sound.fade(this._volume,0,e)}on(A,e,t){this.sound.on(A,e,t)}off(A,e,t){this.sound.off(A,e,t)}play(){"playing"===this._status||this.sound.playing()||("paused"===this._status?(0===this.sound.seek()?this.replay():this.sound.play(),this._status="playing"):"stopped"===this._status&&(this.replay(),this._status="playing"))}pause(){"playing"===this._status&&(this.sound.pause(),this.clearFade(),this.clearDelay(),this._status="paused")}stop(){this.sound.stop(),this.loopsRemaining=this._loop,this.clearFade(),this.clearDelay(),this._status="stopped"}clearFade(){this.fadeTimerId&&(clearTimeout(this.fadeTimerId),delete this.fadeTimerId)}clearDelay(){this.delayTimerId&&(clearTimeout(this.delayTimerId),delete this.delayTimerId)}dispose(A=!1){this.off(),this.stop(),this.clearFade(),this.clearDelay()}},bk=class{constructor(){this.type="ShapePath",this.color=new eY,this.subPaths=[],this.currentPath=null}moveTo(A,e){return this.currentPath=new nG,this.subPaths.push(this.currentPath),this.currentPath.moveTo(A,e),this}lineTo(A,e){return this.currentPath?.lineTo(A,e),this}quadraticCurveTo(A,e,t,i){return this.currentPath?.quadraticCurveTo(A,e,t,i),this}bezierCurveTo(A,e,t,i,r,s){return this.currentPath?.bezierCurveTo(A,e,t,i,r,s),this}splineThru(A){return this.currentPath?.splineThru(A),this}toShapes(){let A={ORIGIN:0,DESTINATION:1,BETWEEN:2,LEFT:3,RIGHT:4,BEHIND:5,BEYOND:6},e={loc:A.ORIGIN,t:0};function t(t,i,r){let s=r.x-i.x,a=r.y-i.y,o=t.x-i.x,l=t.y-i.y,h=s*l-o*a;if(t.x===i.x&&t.y===i.y){e.loc=A.ORIGIN,e.t=0;return}if(t.x===r.x&&t.y===r.y){e.loc=A.DESTINATION,e.t=1;return}if(h<-Number.EPSILON){e.loc=A.LEFT;return}if(h>Number.EPSILON){e.loc=A.RIGHT;return}if(s*o<0||a*l<0){e.loc=A.BEHIND;return}if(Math.sqrt(s*s+a*a)<Math.sqrt(o*o+l*l)){e.loc=A.BEYOND;return}e.loc=A.BETWEEN,e.t=0!==s?o/s:l/a}let i=0,r=999999999,s=-999999999,a=[];this.subPaths.forEach(A=>{let e=A.getPoints(),t=-999999999,o=999999999,l=-999999999,h=999999999;for(let c=0;c<e.length;c++){let d=e[c];d.y>t&&(t=d.y),d.y<o&&(o=d.y),d.x>l&&(l=d.x),d.x<h&&(h=d.x)}s<=l&&(s=l+1),r>=h&&(r=h-1),e.length&&a.push({curves:A.curves,points:e,isCW:aA.isClockWise(e),identifier:i++,boundingBox:new a2(new e_(h,o),new e_(l,t))})});let o=a.map(i=>(function(i,r,s,a,o){(null==o||""===o)&&(o="nonzero");let l=new e_;i.boundingBox.getCenter(l);let h=function(i,r,s){let a=new e_;r.getCenter(a);let o=[];return s.forEach(r=>{r.boundingBox.containsPoint(a)&&(function(i,r){let s=[],a=[];for(let o=1;o<i.length;o++){let l=i[o-1],h=i[o];for(let c=1;c<r.length;c++){let d=function(i,r,s,a){let o=i.x,l=r.x,h=s.x,c=a.x,d=i.y,u=r.y,p=s.y,f=a.y,m=(c-h)*(d-p)-(f-p)*(o-h),g=(f-p)*(l-o)-(c-h)*(u-d),v=m/g,y=((l-o)*(d-p)-(u-d)*(o-h))/g;if(0===g&&0!==m||v<=0||v>=1||y<0||y>1)return null;if(0===m&&0===g){for(let x=0;x<2;x++)if(t(0===x?s:a,i,r),e.loc===A.ORIGIN){let b=0===x?s:a;return{x:b.x,y:b.y,t:e.t}}else if(e.loc===A.BETWEEN)return{x:+(o+e.t*(l-o)).toPrecision(10),y:+(d+e.t*(u-d)).toPrecision(10),t:e.t};return null}for(let w=0;w<2;w++)if(t(0===w?s:a,i,r),e.loc===A.ORIGIN){let S=0===w?s:a;return{x:S.x,y:S.y,t:e.t}}return{x:+(o+v*(l-o)).toPrecision(10),y:+(d+v*(u-d)).toPrecision(10),t:v}}(l,h,r[c-1],r[c]);null!==d&&void 0===s.find(A=>A.t<=d.t+Number.EPSILON&&A.t>=d.t-Number.EPSILON)&&(s.push(d),a.push(new e_(d.x,d.y)))}}return a})(i,r.points).forEach(A=>{o.push({identifier:r.identifier,isCW:r.isCW,point:A})})}),o.sort((A,e)=>A.point.x-e.point.x),o}([new e_(s,l.y),new e_(a,l.y)],i.boundingBox,r);h.sort((A,e)=>A.point.x-e.point.x);let c=[],d=[];h.forEach(A=>{A.identifier===i.identifier?c.push(A):d.push(A)});let u=c[0].point.x,p=[],f=0;for(;f<d.length&&d[f].point.x<u;)p.length>0&&p[p.length-1]===d[f].identifier?p.pop():p.push(d[f].identifier),f++;if(p.push(i.identifier),"evenodd"===o){let m=p.length%2==0,g=p[p.length-2];return{identifier:i.identifier,isHole:m,for:g}}if("nonzero"===o){let v=!0,y=null,x=null;for(let b=0;b<p.length;b++){let w=p[b];r[w]&&(v?(x=r[w].isCW,v=!1,y=w):x!==r[w].isCW&&(x=r[w].isCW,v=!0))}return{identifier:i.identifier,isHole:v,for:y}}console.warn('fill-rule: "'+o+'" is currently not implemented.')})(i,a,r,s,this.userData?.style.fillRule)),l=[];return a.forEach(A=>{let e=o[A.identifier];if(e&&!e.isHole){let t=new nX;t.curves=A.curves,o.filter(e=>e?.isHole&&e.for===A.identifier).forEach(A=>{if(A){let e=a[A.identifier],i=new nG;i.curves=e.curves,t.holes.push(i)}}),l.push(t)}}),l}},bG=new Promise(A=>{bR=A}),bV=!1;async function bj(){bV||(bR(await t.e(934).then(t.bind(t,856))),bV=!0)}async function bH(A){return await (await fetch(A)).arrayBuffer()}var bW=new class{async load(A,e,t=()=>{}){let{load:i}=await bG;i(A,(A,i)=>{A||!i?t(A??"Something went wrong"):e(i)})}async parse(A){let{parse:e,Bidi:t}=await bG;try{let i=e(A),r=new t,s=A=>i.charToGlyphIndex(A.char);return r.registerModifier("glyphIndex",null,s),r.applyFeatures(i,i.defaultRenderOptions.features),{font:i,bidi:r}}catch(a){console.error(a)}}};async function bY(A){let e,t,i=!1;if(A.url?(e=await bH(A.url),t=A.url,i=A.url.startsWith("/")):A.data&&(e=A.data.buffer),e){let r=await bW.parse(e);if(r)return{font:r.font,url:t,intercepted:i,arr:e,bidi:r.bidi}}}var bX=class{constructor(A,e){this._arrayBuffer=new ArrayBuffer(1),this._isLoaded=!1,this._intercepted=!1,this._isUserFont=A.isUserFont??!1,this._loadingPromise=bY(A).then(A=>{A&&(this._arrayBuffer=A.arr,this._url=A.url,this.font=A.font,this._intercepted=A.intercepted,this._isLoaded=!0,this._bidi=A.bidi,e())})}update(A,e){this._isLoaded=!1,this._isUserFont=A.isUserFont??!1,this._loadingPromise=bY(A).then(A=>{A&&(this._arrayBuffer=A.arr,this._url=A.url,this.font=A.font,this._intercepted=A.intercepted,this._isLoaded=!0,this._bidi=A.bidi,e())})}get url(){return this._url}get intercepted(){return this._intercepted}get isLoaded(){return this._isLoaded}get loadingPromise(){return this._loadingPromise}reverseLigaturesTable(A,e,t){if(!this._bidi)return[];let i=this._bidi;i.getTextGlyphs(e);let r=i.tokenizer.tokens,s=[],a=0,o=t.length===r.length;for(let l=0;l<t.length;l++){let h=t[l].index,c=String.fromCharCode(t[l].unicode),d=r[a];if(d.state.glyphIndex===h||d.state.fina===h||d.state.medi===h||d.state.init===h||o)s.push({char:c,index:h,replacements:[d.state.glyphIndex],replacementChars:[d.char]}),a++;else{let u=d.char,p="",f=[d.state.glyphIndex],m=[],g=!1;for(;!g;)a++,u+=p=e.charAt(a),f.push(A.charToGlyphIndex(p)),1===(m=A.stringToGlyphs(u)).length&&m[0].index===h&&(g=!0),a>e.length&&(g=!0);s.push({char:c,index:h,replacements:f,replacementChars:Array.from(u)}),a++}}return s}generateShapes(A,e){if(!this._isLoaded)return;let t=this.font,i=e.fontSize/this.unitsPerEm,r=e.fontSize*e.lineHeight,s=A.map(A=>this.getTextWidth(A,e)),a=e.width,o=this.getCharWidth(`
`,e),l=1===e.horizontalAlign?o:0,h=this.computeSpaceWidthForLine(A,0,e),c=this.getLineInitialOffsetX(s[0],a,e.horizontalAlign,A[0],o),d=this.getLineInitialOffsetY(r,A.length,e.height,i,e.verticalAlign),u=[],p=A.map(A=>[]),f=A.map(A=>[]),m;for(let g=0;g<A.length;g++){let v=A[g],y={features:{liga:!0}},x=[];try{x=t.stringToGlyphs(v,y)}catch(b){console.warn(b)}c=this.getLineInitialOffsetX(s[g],a,e.horizontalAlign,v,o);let w=[];try{w=this.reverseLigaturesTable(t,v,x)}catch(S){console.warn(S)}h=this.computeSpaceWidthForLine(A,g,e);for(let M=0;M<x.length;M++){let E=x[M],T=0===E.index?`
`:E.unicode?String.fromCharCode(E.unicode):void 0,C=w[M],D=0,P=0;0===M&&2===e.horizontalAlign&&void 0!==E.leftSideBearing&&(P=-E.leftSideBearing*i),m&&(D=t.getKerningValue(E,m)*i),c+=P+D;let _=0;if(T===`
`)_=l;else if(" "===T)_=h;else{let L=this.createPath(E,i,c,d,e);L&&(_=L.offsetX-(D+P),u.push(L.path))}if(1===C.replacements.length)f[g].push([c,d]),p[g].push(_);else{let O=C.replacements.map(A=>(t.glyphs.get(A).advanceWidth??0)*i),B=O.reduce((A,e)=>A+=e,0),I=O.map(A=>A/B),R=c;for(let N=0;N<I.length;N++){let z=_*I[N];f[g].push([R,d]),p[g].push(z),R+=z}}c+=_,m=E}d-=r}let F=[];for(let U=0,k=u.length;U<k;U++)F.push(...u[U].toShapes());return{shapes:F,charWidths:p,lineWidths:s,charCoords:f}}get isUserFont(){return this._isUserFont}get arrayBuffer(){return this._arrayBuffer}get ascender(){return this.font?.ascender??0}get descender(){return this.font?.descender??0}get familyName(){return this.font?.names.fontFamily??""}get subfamilyName(){return this.font?.names.fontSubfamily??""}get unitsPerEm(){return this.font?.unitsPerEm??1}getLineInitialOffsetX(A,e,t,i,r){return(3===t||2===t)&&i.indexOf(`
`)>=0&&(A-=r),3===t?.5*e-.5*A:2===t?e-A:0}getLineInitialOffsetY(A,e,t,i,r){let s=e*A,a=Math.abs(this.ascender-this.descender)*i,o=-this.ascender*i-(A-a)/2;return 3===r?-(t-s-o):2===r?-(.5*t-.5*s-o):o}createPath(A,e,t,i,r){let s=A.getPath(t,-i,r.fontSize,{kerning:!1,letterSpacing:r.letterSpacing});if(!s){console.error('THREE.Font: character "'+A+'" does not exists in font family '+this.familyName+".");return}let a=new bk,o=(A.advanceWidth??1)*e;if(A)for(let l of s.commands){let h=a.currentPath?.currentPoint;if(!(h&&"Z"!==l.type&&h.x===l.x&&-h.y===l.y))switch(l.type){case"M":a.moveTo(l.x,-l.y);break;case"L":a.lineTo(l.x,-l.y);break;case"Q":a.quadraticCurveTo(l.x1,-l.y1,l.x,-l.y);break;case"C":a.bezierCurveTo(l.x1,-l.y1,l.x2,-l.y2,l.x,-l.y)}}return a.subPaths.forEach(A=>{let e=function(A){if(A.length){let e=A[0];if(e instanceof nI)return e.v1;if(e instanceof nO||e instanceof nN)return e.v0}}(A.curves);void 0!==e&&A.currentPoint.distanceTo(e)>0&&A.lineTo(e.x,e.y)}),{offsetX:o+r.fontSize*r.letterSpacing,path:a}}getCharWidth(A,e){return this.font?.getAdvanceWidth(A,e.fontSize,{kerning:!0,letterSpacing:e.letterSpacing})??0}getTextWidth(A,e){return this.font?.getAdvanceWidth(A,e.fontSize,{kerning:!0,letterSpacing:e.letterSpacing})??0}computeSpaceWidthForLine(A,e,t){let i=this.getCharWidth(" ",t),r=A[e];if(r){let s=this.countSpaces(r.trimEnd());if(4===t.horizontalAlign&&e<A.length-1&&s)return(t.width-(this.getTextWidth(r,t)-s*i))/s}return i}countSpaces(A){return(A.match(/ /g)||[]).length}},bQ=class{constructor(){this.objects=new Map,this.unreachable=new Set}getCached(A){return this.objects.get(A)}get size(){return this.objects.size}get(A,e){let t=this.objects.get(A);return void 0===t&&(t=this.createObject(A,e),this.objects.set(A,t)),t}startGc(){this.unreachable=new Set(this.objects.keys())}markAsReachable(A,e){e===this.objects.get(A)&&this.unreachable.delete(A)}endGc(){this.unreachable.forEach(A=>{this.disposeObject(this.objects.get(A)),this.objects.delete(A)}),this.unreachable.clear()}dispose(){this.objects.forEach(A=>{this.disposeObject(A)}),this.objects.clear()}},bq=class extends bQ{constructor(A){super(),this.flatShading=A}disposeObject(A){A.dispose()}createObject(A,e){let t=yu(A,e,this.flatShading);return t.computeBoundingSphere(),t}},bZ={find(A){},markNeedsUpdateRendererDirty:function(){},markGeometryCacheDirty:function(){},addPendingExpandCloner:function(A){}},bK=class{constructor(A,e={}){if(this.geometryCache=new bq(!0),this.geometryCache2=new bq(!1),this.thisContext={scene:bZ,shared:this},this.deletedMaterial=new bN(md.defaultTwoLayerData("phong"),this.thisContext),this.deletedImage=new bu(mR.emptyImage),this.deletedVideo=new bu(p9.defaultVideo),this.materials={},this.images={},this.videos={},this.colors={},this.audios={},this.fonts={},this.penumbraSize=[],this.onImageLoad=()=>{this._onImageLoad&&this._onImageLoad()},this.onFontLoad=()=>{this._onFontLoad&&this._onFontLoad()},e.images)for(let[t,i]of Object.entries(e.images))this.addImage(t,i);if(e.videos)for(let[r,s]of Object.entries(e.videos))this.addVideo(r,s);if(e.audios)for(let[a,o]of Object.entries(e.audios))this.addAudio(a,o.data);this.reset(A)}setOnImageLoad(A){this._onImageLoad=A}setOnFontLoad(A){this._onFontLoad=A}reset(A){for(let[e,t]of Object.entries(A.images))this.addImage(e,t);for(let[i,r]of Object.entries(A.videos))this.addVideo(i,r);for(let[s,a]of Object.entries(A.colors))this.addColor(s,a);for(let[o,l]of Object.entries(A.materials))this.addMaterial(o,new bN(l,this.thisContext));for(let[h,c]of Object.entries(A.audios))this.addAudio(h,c.data);for(let[d,u]of Object.entries(A.fonts))this.addFont(d,u);this.penumbraSize=A.penumbraSize}addMaterial(A,e){e.uuid=A,this.materials[A]=e}deleteMaterial(A){this.materials[A]&&(this.materials[A].dispose(),delete this.materials[A])}getMaterial(A){return this.materials[A]}getMaterialOrDeletedPlaceholder(A){return this.materials[A]??this.deletedMaterial}material(A){return"string"==typeof A?this.getMaterialOrDeletedPlaceholder(A):new bI(A,this.thisContext)}getMaterials(){return this.materials}addImage(A,e){return this.images[A]?(this.images[A].updateSrc(e.data),!0):(this.images[A]=new bu(e,this.onImageLoad),!1)}deleteImage(A){this.images[A]&&delete this.images[A]}getDefaultImage(){return this.images.image_0}getImage(A){return this.images[A]??this.deletedImage}image(A){return"string"==typeof A?this.getImage(A):new bd(A,this.onImageLoad)}addVideo(A,e){return this.videos[A]?(this.videos[A].updateSrc(e.data),!0):(this.videos[A]=new bu(e,this.onImageLoad),!1)}deleteVideo(A){this.videos[A]&&delete this.videos[A]}getVideo(A){return this.videos[A]??this.deletedVideo}video(A){return"string"==typeof A?this.getVideo(A):new bd(A,this.onImageLoad)}addColor(A,e){return this.colors[A]?(this.onColorOrImageUpdate&&this.onColorOrImageUpdate(A),"a"in e?this.colors[A].setRGBA(e.r,e.g,e.b,e.a):this.colors[A].setRGBA(e.r,e.g,e.b,1),!0):("a"in e?this.colors[A]=new bl(e.r,e.g,e.b,e.a):this.colors[A]=new bl(e.r,e.g,e.b,1),!1)}updateColor(A,e){if(this.colors[A]){this.onColorOrImageUpdate&&this.onColorOrImageUpdate(A);let t=this.colors[A];return this.colors[A].r=e.r??t.r,this.colors[A].g=e.g??t.g,this.colors[A].b=e.b??t.b,this.colors[A].a=e.a??t.a,!0}return!1}deleteColor(A){this.colors[A]&&delete this.colors[A]}getColor(A){return this.colors[A]}color(A){let e;if("string"!=typeof A)return"a"in A?new y3(A.r,A.g,A.b,A.a):new y3(A.r,A.g,A.b,1);{let t=this.getColor(A);t?e=t:(console.warn("Tried to create color layer params with a color key that does not exist in the assets manager"),e=new y3(0,0,0,0))}return e}addAudio(A,e){this.audios[A]=e}getAudio(A){let e=this.audios[A];if(e instanceof bU)return e;{let t=new bU({src:e});return this.audios[A]=t,t}}deleteAudio(A){this.audios[A]&&delete this.audios[A]}addFont(A,e){this.fonts[A]=new bX(e,this.onFontLoad)}getFont(A){return this.fonts[A]}deleteFont(A){this.fonts[A]&&delete this.fonts[A]}dispose(){Object.keys(this.materials).forEach(A=>this.deleteMaterial(A)),this._onImageLoad=void 0,this._onFontLoad=void 0,Object.values(this.audios).forEach(A=>{A instanceof bU&&A.dispose()}),this.audios={},this.geometryCache.dispose(),this.geometryCache2.dispose()}};new bK(mI.emptyData());var bJ=class extends yQ{updateByPatchedOp(A,e,t){if(super.updateByPatchedOp(A,e,t),null!==function(A,e){let t=[];if(e.length!==A.length)return null;for(var i=0;i<A.length;){if("*"===e[i])t.push(A[i]);else if(A[i]!==e[i])return null;i+=1}return t}(A.path,["materials"])&&0===A.type&&Array.isArray(this.material))for(let[i,r]of Object.entries(A.props)){let s=t.shared.material(r);this.material[Number(i)]=s}else if(dW(A.path,["material"])&&this.material instanceof bO)"material"in e&&"string"!=typeof e.material&&this.material.updateByOp(dK.drop(A,1),e.material,t);else if(dW(A.path,["materials","*"])&&Array.isArray(this.material)){let a=A.path[1];if("materials"in e&&a<this.material.length){let o=e.materials[a];"string"!=typeof o&&this.material[a].updateByOp(dK.drop(A,2),o,t)}}}updateState(A,e){super.updateState(A,e),void 0!==A.castShadow&&(this.castShadow=A.castShadow),void 0!==A.receiveShadow&&(this.receiveShadow=A.receiveShadow);let t=this.dataPatched;if(A.geometry?.type!=="NonParametricGeometry"&&"material"in A&&void 0!==A.material&&(this.disposeMaterial(),this.material=e.shared.material(A.material).getFlavor(t.flatShading,t.side,t.wireframe),e.scene?.markNeedsUpdateRendererDirty()),A.geometry?.type==="NonParametricGeometry"&&("materials"in A&&void 0!==A.materials?(this.disposeMaterial(),this.material=A.materials.map(A=>e.shared.material(A).getFlavor(t.flatShading,t.side,t.wireframe)),e.scene?.markNeedsUpdateRendererDirty()):"material"in A&&void 0!==A.material&&(this.disposeMaterial(),this.material=[e.shared.material(A.material).getFlavor(t.flatShading,t.side,t.wireframe)],e.scene?.markNeedsUpdateRendererDirty())),void 0!==A.flatShading||void 0!==A.wireframe||void 0!==A.side){if(Array.isArray(this.material))for(let i=0;i<this.material.length;i++)this.material[i]=this.material[i].getFlavor(t.flatShading,t.side,t.wireframe);else this.material=this.material.getFlavor(t.flatShading,t.side,t.wireframe)}}disposeMaterial(){this.material&&fl(this.material).forEach(A=>{A instanceof bN||A.dispose()})}dispose(){this.disposeMaterial(),super.dispose()}},b$=class extends bJ{constructor(A,e,t){super(A,e),this.data=e,this.localGeometry=void 0}chooseGeoemtryCache(A){return A.geometryCache}markGeometryAsReachable(A){this.geometryCreateDeleyed instanceof ig&&this.chooseGeoemtryCache(A).markAsReachable(this.dataPatched.geometry,this.geometryCreateDeleyed)}get geometry(){if(void 0!==this.localGeometry)return this.localGeometry;if(this.geometryCreateDeleyed instanceof bK){let A=this.geometryCreateDeleyed,e=this.chooseGeoemtryCache(A);this.geometryCreateDeleyed=e.get(this.dataPatched.geometry,A)}return this.geometryCreateDeleyed}set geometry(A){this.localGeometry=A}get is2DAndNoDepth(){let A=this.dataPatched.geometry;return mp.is2DParametricMesh(A.type)&&0===A.depth}get is2DType(){return mp.is2DParametricMesh(this.geometry.userData.type)}updateByPatchedOp(A,e,t){super.updateByPatchedOp(A,e,t),dW(A.path,["geometry"])&&this.updateByPatchedOpGeometry(dK.drop(A,1),e.geometry,t)}removeInteractionGeometry(){this.localGeometry?.dispose(),this.localGeometry=void 0}updateGeometryInteractions(A,e){this.invalidateDownstreamBooleanData();let t={...this.data.geometry,...A};this.localGeometry?.dispose(),this.localGeometry=yu(t,e,this.data.flatShading)}createGeometryDelayed(A){for(let e of(this.geometryCreateDeleyed=A.shared,this.attachedSurfaceCloners))e.update()}updateByPatchedOpGeometry(A,e,t){t.scene?.markGeometryCacheDirty(),this.createGeometryDelayed(t),this.resetBBoxNeedsUpdate(),this.invalidateDownstreamBooleanData()}updateGeometryOnStateUpdate(A,e){this.createGeometryDelayed(e)}updateState(A,e){void 0!==A.geometry&&this.updateGeometryOnStateUpdate(A.geometry,e),super.updateState(A,e),Array.isArray(this.material)&&0===this.geometry.groups.length&&this.geometry.addGroup(0,Math.max(this.geometry.getIndex()?.count??0,this.geometry.getAttribute("position").count),0)}updateEntityBoxSize(A,e){let t=this.geometry.userData.parameters;this.is2DType?A.set(0,0,.5*t.depth):A.setScalar(0),e.set(t.width,t.height,t.depth??0).multiplyScalar(.5)}};function b0(A){if(Array.isArray(A.material)){for(let e of A.material)if(0===e.getLayersOfType("outline").length)return}else if(!(A.material instanceof bO)||0===A.material.getLayersOfType("outline").length)return;A instanceof b$&&A.is2DAndNoDepth?function(A){if(A.geometry.attributes.extrudeNormals||!A.geometry.attributes.position)return;let e=A.geometry.attributes.position.array,t=new Float32Array(e.length),i=new e4;for(let r=0;r<e.length;r+=3)i.set(e[r],e[r+1],e[r+2]).normalize(),t[r]=i.x,t[r+1]=i.y,t[r+2]=i.z;A.geometry.setAttribute("extrudeNormal",new io(t,3))}(A):function(A){if(A.geometry.attributes.extrudeNormal||!A.geometry.attributes.position||!A.geometry.attributes.normal)return;let e=new Map,t=A.geometry.attributes.position.array,i=A.geometry.attributes.normal.array,r=new Float32Array(t.length);for(let s=0;s<t.length;s+=3){let a=`${t[s]}_${t[s+1]}_${t[s+2]}`,o=new e4(i[s],i[s+1],i[s+2]);e.has(a)?e.get(a)?.normals.push(o):e.set(a,{normals:[o],result:new e4})}e.forEach((A,e)=>{for(let t of A.normals)A.result.add(t);A.result.divideScalar(A.normals.length)});for(let l=0;l<t.length;l+=3){let h=e.get(`${t[l]}_${t[l+1]}_${t[l+2]}`)?.result;h&&(r[l]=h.x,r[l+1]=h.y,r[l+2]=h.z)}A.geometry.setAttribute("extrudeNormal",new io(r,3))}(A)}function b1(A){if(!A.geometry.attributes.position)return;let e=A.geometry.attributes.position.array,t=new Float32Array(e.length),i=parseInt(A.uuid.replace(/\D/g,"")),r=[eP.seededRandom(i),eP.seededRandom(i+1e4),eP.seededRandom(i+2e4)];for(let s=0;s<e.length;s++)t[s]=r[s%3];A.geometry.setAttribute("randomColor",new ii(t,3))}yh.then(A=>{});var b2=new tE,b3=new tE,b4=new tE,b5=new e8,b6=new e4,b8=new tE,b9=new tE,b7=class extends b${constructor(A,e,t){super(A,e,t),this.data=e,this.hiddenMatrixOld=new tE,this.smoothShading=!0,this.matrixWorldRigid=new tE,this.skipReactionUpdate=!1}chooseGeoemtryCache(A){return this.dataPatched.flatShading?A.geometryCache:A.geometryCache2}get subdivPointerNew(){return void 0!==this.localGeometry?this.subdivPointer:this.geometry.subdivPointer}get originalGeometryNew(){return void 0!==this.localGeometry?this.originalGeometry:this.geometry.originalGeometry}get phongAngle(){return this.data.geometry.phongAngle??45}updateEntityBoxSize(A,e){let t=this.geometry.userData.parameters;A.copy(this.originalGeometryNew.boundingSphere.center),e.set(t.width,t.height,t.depth??0).multiplyScalar(.5)}createGeometryByControls(A){if(!0===this.skipReactionUpdate)return;let e=this.localGeometry?.uuid,{originalGeometry:t,subdividedGeometry:i,subdivPointer:r}=yx.build(A,this.subdivPointer,this.smoothShading,this.shearScale);this.subdivPointer=r,void 0!==t&&(this.originalGeometry?.dispose(),this.originalGeometry=t),void 0!==i&&(this.subdividedGeometry?.dispose(),this.subdividedGeometry=i??void 0),this.localGeometry=this.subdividedGeometry??this.originalGeometry,b0(this),b1(this),this.calcBoundingBox(),e&&(this.localGeometry.uuid=e)}updateState(A,e){if(super.updateState(A,e),void 0!==A.flatShading){let t=this.material;this.material=t.getFlavor(!1,t.side,t.wireframe),this.smoothShading=!A.flatShading,this.createGeometryDelayed(e)}}updateMesh(A=!1){yx.buildLevel(this.subdivPointer,!0,this.smoothShading?this.phongAngle:-1,this.originalGeometry,A?this.shearScaleInv:void 0),this.subdividedGeometry&&yx.buildLevel(this.subdivPointer,!1,this.smoothShading?this.phongAngle:-1,this.subdividedGeometry,A?this.shearScaleInv:void 0)}updateTopology(){this.originalGeometry.dispose(),this.originalGeometry=yx.buildLevel(this.subdivPointer,!0,this.smoothShading?this.phongAngle:-1),this.subdividedGeometry&&(this.subdividedGeometry.dispose(),this.subdividedGeometry=yx.buildLevel(this.subdivPointer,!1,this.smoothShading?this.phongAngle:-1)),this.localGeometry=this.subdividedGeometry??this.originalGeometry}raycast(A,e){let t=this.localGeometry;this.localGeometry=this.originalGeometryNew,yQ.prototype.raycast.call(this,A,e),this.localGeometry=t}updateMatrixWorldSVD(){let A=this.matrixWorld.elements,e=[[A[0],A[4],A[8]],[A[1],A[5],A[9]],[A[2],A[6],A[10]]],{u:t,v:i,q:r}=(0,yq.SVD)(e),s=b2.set(t[0][0],t[0][1],t[0][2],0,t[1][0],t[1][1],t[1][2],0,t[2][0],t[2][1],t[2][2],0,0,0,0,1),a=b3.set(i[0][0],i[0][1],i[0][2],0,i[1][0],i[1][1],i[1][2],0,i[2][0],i[2][1],i[2][2],0,0,0,0,1),o=b4.copy(a).transpose();this.shearScale=b8.makeScale(r[0],r[1],r[2]).multiply(o).premultiply(a),this.shearScaleInv=b9.copy(this.shearScale).invert(),this.matrixWorldRigid.multiplyMatrices(s,o),r.every(A=>.01>Math.abs(r[0]-A))&&(this.shearScale=void 0,this.shearScaleInv=void 0)}activateSVDCompensation(){void 0!==this.shearScale&&(this.matrixAutoUpdate=!1,this.matrix.copy(this.matrixWorldRigid).copyPosition(this.matrixWorld),this.hiddenMatrixOld.copy(this.hiddenMatrix),this.hiddenMatrix.copy(this.parent.matrixWorld).invert())}deactivateSVDCompensation(){void 0!==this.shearScale&&(this.shearScale=void 0,this.shearScaleInv=void 0,this.matrixAutoUpdate=!0,this.hiddenMatrix.copy(this.hiddenMatrixOld))}calcBoundingBox(){let A=this.originalGeometry;null===A.boundingSphere&&(A.boundingSphere=new tm,this.subdividedGeometry&&(this.subdividedGeometry.boundingSphere=A.boundingSphere));let e=A.attributes.position,t=A.boundingSphere.center;b5.setFromBufferAttribute(e),b5.getCenter(t),A.boundingSphere.radius=t.distanceTo(b5.max),isNaN(A.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this),b5.getSize(b6);let i={width:b6.x,height:b6.y,depth:b6.z};return this.geometry.userData.parameters=i,i}updateBoundingBox(A){let e=this.originalGeometry;b5.min.set(A[0],A[2],A[4]),b5.max.set(A[1],A[3],A[5]),this.shearScaleInv&&(b5.min.applyMatrix4(this.shearScaleInv),b5.max.applyMatrix4(this.shearScaleInv)),null===e.boundingSphere&&(e.boundingSphere=new tm);let t=e.boundingSphere.center;b5.getCenter(t),e.boundingSphere.radius=t.distanceTo(b5.max),isNaN(e.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this),b5.getSize(b6);let i={width:b6.x,height:b6.y,depth:b6.z};return this.geometry.userData.parameters=i,i}freeSubdivPointer(){this.subdivPointer&&(yx.freeSubdivPointer(this.subdivPointer),this.subdivPointer=0),this.localGeometry=void 0,this.originalGeometry?.dispose(),this.subdividedGeometry?.dispose()}dispose(){super.dispose(),this.freeSubdivPointer()}updateByPatchedOpGeometry(A,e,t){super.updateByPatchedOpGeometry(A,e,t),this.localGeometry&&this.createGeometryByControls(e)}},wA={x:[1,0,0],"-x":[-1,0,0],y:[0,1,0],"-y":[0,-1,0],z:[0,0,1],"-z":[0,0,-1]},we={polygon_center:0,edge:1,vertex:2},wt=(A,e)=>(t,i)=>e&&0!==t&&0!==A?A*i/100:0,wi=(A,e)=>{let t=Math.abs(e),i=-1*t;return(A- -1)*(t-i)/2+i},wr=new e4,ws=new e4,wn=new e4,wa=new e4;function wo(A,e){let t=wn.fromArray(A),i=wa.fromArray(e);ws.copy(i).sub(t);let r=ws.length();return ws.normalize().multiplyScalar(.5*r),wr.copy(t).add(ws).toArray()}var wl,wh,wc,wd=new t8,wu=new e4,wp=new e4,wf=new e4,wm=A=>.5*(1-Math.cos(A*Math.PI)),wg=class{constructor(){this.perlin=Array(4096)}noise(A,e=0,t=0){if(null==this.perlin){this.perlin=Array(4096);for(let i=0;i<4096;i++)this.perlin[i]=Math.random()}A<0&&(A=-A),e<0&&(e=-e),t<0&&(t=-t);let r=Math.floor(A),s=Math.floor(e),a=Math.floor(t),o=A-r,l=e-s,h=t-a,c,d,u=0,p=.5,f,m,g;for(let v=0;v<4;v++){let y=r+(s<<4)+(a<<8);c=wm(o),d=wm(l),f=this.perlin[4095&y],f+=c*(this.perlin[y+1&4095]-f),m=this.perlin[y+16&4095],m+=c*(this.perlin[y+16+1&4095]-m),f+=d*(m-f),y+=256,m=this.perlin[4095&y],m+=c*(this.perlin[y+1&4095]-m),g=this.perlin[y+16&4095],g+=c*(this.perlin[y+16+1&4095]-g),m+=d*(g-m),f+=wm(h)*(m-f),u+=f*p,p*=.5,r<<=1,s<<=1,l*=2,a<<=1,h*=2,(o*=2)>=1&&(r++,o--),l>=1&&(s++,l--),h>=1&&(a++,h--)}return u}noiseSeed(A){let e,t;let i={setSeed(A){t=e=(A??4294967296*Math.random())>>>0},getSeed:()=>e,rand:()=>(t=(1664525*t+1013904223)%4294967296)/4294967296};i.setSeed(A),this.perlin=Array(4096);for(let r=0;r<4096;r++)this.perlin[r]=i.rand()}},wv=new e4,wy=new e4;yh.then(A=>{wl=[A.get_face_center,A.get_edge_midpoint,A.get_vertex_position],wh=[A.get_face_normal,A.get_edge_normal,A.get_vertex_normal],wc=[A.face_count,A.edge_count,A.vertex_count]});var wx=new tE,wb=new tE,ww=new e4,wS=new e4,wM=new e4,wE=new e4,wT=new e4,wC=new e4,wD=new wg,wP=class extends gc(tZ){constructor(A,e){super(),this.parameters=e,this.objectForSample=void 0,this.object=A}resetOnMove(){this.removeFromParent(),this.parent=null}expandClones(A){if(null===this.parent)this.updateState(this.parameters,A);else for(let e of this.children)e instanceof gp&&e.expand()}invalidateTransform(A){this.matrixWorldNeedsUpdate=!0,this.traverse(e=>{e instanceof gp&&e.object===A&&(e.matrixWorldNeedsUpdate=!0)})}update(){switch(this._updateCount(),this.parameters.type){case"radial":this._updateRadial(this.parameters);break;case"linear":this._updateLinear(this.parameters);break;case"grid":this._updateGrid(this.parameters);break;case"toObject":this._updateToObject(this.parameters)}}_updateCount(A){let e;if(e=void 0!==A?A:"grid"===this.parameters.type?this.parameters.grid.count[0]*this.parameters.grid.count[1]*this.parameters.grid.count[2]:this.parameters.count,"toObject"!==this.parameters.type||this.parameters.toObject.object||(e=0),"toObject"===this.parameters.type&&this.objectForSample){for(let t=0,i=this.children.length;t<i;++t)this.remove(this.children[0]);let r=this.children;if(r.length===e)return;if(r.length<e)for(let s=0,a=e-r.length;s<a;++s){let o=new gp(this.object);o.expand(),this.add(o)}else for(let l=0,h=r.length-e;l<h;++l)this.remove(r[l])}else{if(this.children.length===e)return;if(this.children.length<e)for(let c=0,d=e-this.children.length;c<d;++c){let u=new gp(this.object);u.expand(),this.add(u)}else for(let p=0,f=this.children.length-e;p<f;++p)this.remove(this.children[0])}}_updateRadial(A){let e=A.radial,t=e.start*eP.DEG2RAD,i=t-e.end*eP.DEG2RAD,r=new tR(e.rotation[0],e.rotation[1],e.rotation[2]),s;switch(e.axis){case"z":s=new e4(0,0,1);break;case"y":s=new e4(0,1,0);break;default:s=new e4(1,0,0)}let a=A.randomnessObject,o="perlin"===a.noiseType;wD.noiseSeed(a.seed);let l=ga((0,m7.default)(a.seed)),h=wt(a.strength,this.parameters.randomness);for(let[c,d]of this.children.entries()){let u=c*(a.freqScale/10)+a.movement,p=o?wD.noise(u):l(u,u);d.scale.x=e.scale[0]+h(c,wi(p,a.scale[0]))||1e-4,d.scale.y=e.scale[1]+h(c,wi(p,a.scale[1]))||1e-4,d.scale.z=e.scale[2]+h(c,wi(p,a.scale[2]))||1e-4,d.position.setScalar(0);let f=i/A.count*c-t;switch(e.axis){case"x":d.rotation.set(0,f,0);break;case"y":d.rotation.set(0,0,f);break;case"z":d.rotation.set(f,0,0)}d.translateOnAxis(s,e.radius),d.position.x+=e.position[0]+h(c,wi(p,a.position[0])),d.position.y+=e.position[1]+h(c,wi(p,a.position[1])),d.position.z+=e.position[2]+h(c,wi(p,a.position[2]));let m=h(c,wi(p,a.rotation[0])),g=h(c,wi(p,a.rotation[1])),v=h(c,wi(p,a.rotation[2]));!0===e.alignment?(d.rotation.x+=r.x+m,d.rotation.y+=r.y+g,d.rotation.z+=r.z+v):d.rotation.set(r.x+m,r.y+g,r.z+v)}}_updateLinear(A){if("linear"!==A.type)throw Error();let e=A.linear,t=new tR(e.rotation[0],e.rotation[1],e.rotation[2]),i=A.randomnessObject,r="perlin"===i.noiseType;wD.noiseSeed(i.seed);let s=ga((0,m7.default)(i.seed)),a=wt(i.strength,this.parameters.randomness);for(let[o,l]of this.children.entries()){let h=o*(i.freqScale/10)+i.movement,c=r?wD.noise(h):s(h,h),d=a(o,wi(c,i.rotation[0])),u=a(o,wi(c,i.rotation[1])),p=a(o,wi(c,i.rotation[2]));l.scale.x=1+(e.scale[0]-1)*o+a(o,wi(c,i.scale[0]))||1e-4,l.scale.y=1+(e.scale[1]-1)*o+a(o,wi(c,i.scale[1]))||1e-4,l.scale.z=1+(e.scale[2]-1)*o+a(o,wi(c,i.scale[2]))||1e-4,l.rotation.x=t.x*o+d,l.rotation.y=t.y*o+u,l.rotation.z=t.z*o+p,l.position.x=e.position[0]*o+a(o,wi(c,i.position[0])),l.position.y=e.position[1]*o+a(o,wi(c,i.position[1])),l.position.z=e.position[2]*o+a(o,wi(c,i.position[2]))}}_updateGrid(A){let e=0,t=A.grid,i=A.randomnessObject,r=wt(i.strength,this.parameters.randomness),s="perlin"===i.noiseType;wD.noiseSeed(i.seed);let a=function(A=Math.random){let e=go(A),t=new Float64Array(e).map(A=>gn[A%12*3]),i=new Float64Array(e).map(A=>gn[A%12*3+1]),r=new Float64Array(e).map(A=>gn[A%12*3+2]);return function(A,s,a){let o,l,h,c,d=(A+s+a)*gt,u=gr(A+d),p=gr(s+d),f=gr(a+d),m=(u+p+f)*gi,g=A-(u-m),v=s-(p-m),y=a-(f-m),x,b,w,S,M,E;g>=v?v>=y?(x=1,b=0,w=0,S=1,M=1,E=0):g>=y?(x=1,b=0,w=0,S=1,M=0,E=1):(x=0,b=0,w=1,S=1,M=0,E=1):v<y?(x=0,b=0,w=1,S=0,M=1,E=1):g<y?(x=0,b=1,w=0,S=0,M=1,E=1):(x=0,b=1,w=0,S=1,M=1,E=0);let T=g-x+gi,C=v-b+gi,D=y-w+gi,P=g-S+2*gi,_=v-M+2*gi,L=y-E+2*gi,O=g-1+3*gi,B=v-1+3*gi,I=y-1+3*gi,R=255&u,N=255&p,z=255&f,F=.6-g*g-v*v-y*y;if(F<0)o=0;else{let U=R+e[N+e[z]];F*=F,o=F*F*(t[U]*g+i[U]*v+r[U]*y)}let k=.6-T*T-C*C-D*D;if(k<0)l=0;else{let G=R+x+e[N+b+e[z+w]];k*=k,l=k*k*(t[G]*T+i[G]*C+r[G]*D)}let V=.6-P*P-_*_-L*L;if(V<0)h=0;else{let j=R+S+e[N+M+e[z+E]];V*=V,h=V*V*(t[j]*P+i[j]*_+r[j]*L)}let H=.6-O*O-B*B-I*I;if(H<0)c=0;else{let W=R+1+e[N+1+e[z+1]];H*=H,c=H*H*(t[W]*O+i[W]*B+r[W]*I)}return 32*(o+l+h+c)}}((0,m7.default)(i.seed));if(!0===t.useCenter){let o={x:t.count[0]%2==0?2:1,y:t.count[1]%2==0?2:1,z:t.count[2]%2==0?2:1},l=new e4(t.size[0]*(t.count[0]-o.x)*.5,t.size[1]*(t.count[1]-o.y)*.5,t.size[2]*(t.count[2]-o.z)*.5);for(let h=0;h<t.count[0];h++)for(let c=0;c<t.count[1];c++)for(let d=0;d<t.count[2];d++){let u=[(h+1)*(i.freqScale/10)+i.movement,(c+1)*(i.freqScale/10)+i.movement,(d+1)*(i.freqScale/10)+i.movement],p=s?wD.noise(...u):a(...u),f=this.children[e++];f.scale.x=1+r(e,wi(p,i.scale[0]))||1e-4,f.scale.y=1+r(e,wi(p,i.scale[1]))||1e-4,f.scale.z=1+r(e,wi(p,i.scale[2]))||1e-4;let m=r(e,wi(p,i.rotation[0])),g=r(e,wi(p,i.rotation[1])),v=r(e,wi(p,i.rotation[2]));f.rotation.set(m,g,v),f.position.x=t.size[0]*h-l.x+r(e,wi(p,i.position[0])),f.position.y=t.size[1]*c-l.y+r(e,wi(p,i.position[1])),f.position.z=t.size[2]*d-l.z+r(e,wi(p,i.position[2]))}}else for(let y=0;y<t.count[0];y++)for(let x=0;x<t.count[1];x++)for(let b=0;b<t.count[2];b++){let w=[(y+1)*(i.freqScale/10)+i.movement,(x+1)*(i.freqScale/10)+i.movement,(b+1)*(i.freqScale/10)+i.movement],S=s?wD.noise(...w):a(...w),M=this.children[e++];M.scale.x=1+r(e,wi(S,i.scale[0]))||1e-4,M.scale.y=1+r(e,wi(S,i.scale[1]))||1e-4,M.scale.z=1+r(e,wi(S,i.scale[2]))||1e-4;let E=r(e,wi(S,i.rotation[0])),T=r(e,wi(S,i.rotation[1])),C=r(e,wi(S,i.rotation[2]));M.rotation.set(E,T,C),M.position.x=t.size[0]*y+r(e,wi(S,i.position[0])),M.position.y=-t.size[1]*x+r(e,wi(S,i.position[1])),M.position.z=-t.size[2]*b+r(e,wi(S,i.position[2]))}}_updateToObject(A){if("toObject"!==A.type)throw Error();let{toObject:e}=A,t=new tR(e.rotation[0],e.rotation[1],e.rotation[2]),i=A.randomnessObject,r="perlin"===i.noiseType;wD.noiseSeed(i.seed);let s=ga((0,m7.default)(i.seed)),a=wt(i.strength,this.parameters.randomness);if(!e.object){for(let[,o]of this.children.entries())o.position.set(0,0,0),o.scale.setScalar(1),o.rotation.set(0,0,0);this.objectForSample=void 0;return}if(!this.objectForSample)return;let l=this.getSubdivData(),h=[],c=A=>{let e=A.length;return[A.map(A=>A[0]).reduce((A,e)=>A+e,0)/e,A.map(A=>A[1]).reduce((A,e)=>A+e,0)/e,A.map(A=>A[2]).reduce((A,e)=>A+e,0)/e]},d=A=>Math.round(1e6*A)/1e6;l.forEach(A=>{let e=l.filter(e=>d(A.pos[0])===d(e.pos[0])&&d(A.pos[1])===d(e.pos[1])&&d(A.pos[2])===d(e.pos[2]));e.length>1?h.push({pos:A.pos,norm:c(e.map(A=>A.norm))}):h.push(A)});let u=function(A){let e=[],t={};for(var i=0,r=A.length;i<r;i++){var s=JSON.stringify(A[i].pos.map(A=>Math.round(1e4*A)/1e4));t[s]||(e.push(A[i]),t[s]=!0)}return e}(h);if(l.length>0){let p=Math.round(u.length*e.count/100);this._updateCount(p)}this.objectForSample.updateMatrixWorld();let f=new gh(this.objectForSample).build(),m=wA[e.axis],g=this.children;for(let[v,y]of(f.setRandomGenerator((0,m7.default)(this.object.uuid+e.seed)),g.entries())){let x=v*(i.freqScale/10)+i.movement,b=r?wD.noise(x):s(x,x),w=a(v,wi(b,i.rotation[0])),S=a(v,wi(b,i.rotation[1])),M=a(v,wi(b,i.rotation[2]));"random"===e.spreadType?f.sample(wM,wE):(u.length&&(wM.fromArray(u[v].pos),wE.fromArray(u[v].norm)),this.objectForSample instanceof b7&&wM.applyMatrix4(wx.copy(this.objectForSample.matrixWorld).invert())),wM.applyMatrix4(this.object.hiddenMatrix.clone().invert()),y.position.copy(wM),ww.fromArray(m);let E="normal"===e.align?wE:this.object.getWorldDirection(wC),T=wS.fromArray(e.position);wS.x+=wS.x+a(v,wi(b,i.position[0])),wS.y+=wS.y+a(v,wi(b,i.position[1])),wS.z+=wS.z+a(v,wi(b,i.position[2]));let C=Math.acos(E.dot(ww)),D=wT.crossVectors(ww,E).normalize(),P=wb.makeRotationAxis(D,C),_=E.clone().cross(this.object.up).normalize(),L=_.clone().cross(E).normalize(),O=new tE().makeBasis(_,E,L),B=new e4(ww.y,ww.z,ww.x).normalize(),I=B.clone().cross(ww).normalize(),R=new tE().makeBasis(B,ww,I).invert(),N=new tE().multiplyMatrices(O,R);y.rotation.setFromRotationMatrix(N),T.applyMatrix4(P),y.position.add(T),y.rotation.x=y.rotation.x+t.x+w,y.rotation.y=y.rotation.y+t.y+S,y.rotation.z=y.rotation.z+t.z+M,y.scale.setScalar(1),y.scale.x=y.scale.x+e.scale[0]+a(v,wi(b,i.scale[0]))||1e-4,y.scale.y=y.scale.y+e.scale[1]+a(v,wi(b,i.scale[1]))||1e-4,y.scale.z=y.scale.z+e.scale[2]+a(v,wi(b,i.scale[2]))||1e-4,y.scale.multiply(this.object.scale),y.hiddenMatrix=this.object.hiddenMatrix}}getSubdivData(){if(!this.objectForSample)return[];let A=this.parameters.toObject.spreadType;if("random"===A)return[];if(!(this.objectForSample instanceof b7))return(this.objectForSample.geometry.index?function(A){let e=[];for(let t=0;t<=A.index.count;t++)if(wu.fromArray(A.index.array,3*t),wd.setFromAttributeAndIndices(A.attributes.position,wu.x,wu.y,wu.z),wd.getNormal(wp),wd.getMidpoint(wf),!(isNaN(wf.x)||isNaN(wf.y)||isNaN(wf.z))){let{a:i,b:r,c:s}=wd,a=i.toArray(),o=r.toArray(),l=s.toArray(),h=i.distanceTo(r),c=r.distanceTo(s),d=s.distanceTo(i),u=wo(a,o),p=wo(o,l),f=wo(l,a),m=[h,c,d],g=Math.max(...m),v=m.filter(A=>Math.round(A)===Math.round(g)).length>1,y=[],x=wd.getMidpoint(wf).toArray();g!==h||v||(y=[p,f,f],x=u),g!==c||v||(y=[u,f,f],x=p),g!==d||v||(y=[u,p,p],x=f),v&&(y=[u,p,f]),e.push({vertices:[a,o,l],faceCenters:y,midpoint:x,norm:wd.getNormal(wp).toArray()})}return e}(this.objectForSample.geometry):function(A){let e=[],{position:t}=A.attributes;for(let i=0;i<t.count;i++){wd.setFromAttributeAndIndices(t,3*i,3*i+1,3*i+2),wd.getNormal(wp),wd.getMidpoint(wf);let r=wd.a.toArray(),s=wd.b.toArray(),a=wd.c.toArray();e.push({vertices:[r,s,a],faceCenters:[wo(r,s),wo(s,a),wo(a,r)],midpoint:wf.toArray(),norm:wp.toArray()})}return e}(this.objectForSample.geometry)).map((e,t)=>"polygon_center"===A?{pos:e.midpoint,norm:e.norm}:"vertex"===A?[{pos:e.vertices[0],norm:e.norm},{pos:e.vertices[1],norm:e.norm},{pos:e.vertices[2],norm:e.norm}]:"edge"===A?[{pos:e.faceCenters[0],norm:e.norm},{pos:e.faceCenters[1],norm:e.norm},{pos:e.faceCenters[2],norm:e.norm}]:[]).flat();{let e=this.objectForSample,t=we[A],i=wc[t],r=wl[t],s=wh[t],a=[],o=i(e.subdivPointerNew);for(let l=0;l<=o-1;l++){let h=r(e.subdivPointerNew,l),c=s(e.subdivPointerNew,l);wv.fromArray(h).applyMatrix4(e.matrixWorld),wy.fromArray(c),a.push({pos:wv.toArray(),norm:wy.toArray()})}return a}}updateState(A,e){if(this.parameters=cI(A),"toObject"!==this.parameters.type)(null===this.parent||this.parent!==this.object)&&(this.removeFromParent(),this.object.parent?.add(this),this.matrix=this.object.matrix,this.hiddenMatrix=this.object.hiddenMatrix,this.matrixWorldNeedsUpdate=!0,this.matrixAutoUpdate=!1);else if(null===this.parent||this.parent.uuid!==this.parameters.toObject.object){this.removeFromParent();let t=e.find(this.parameters.toObject.object);t instanceof yQ?this.objectForSample=t:this.objectForSample=void 0,this.matrix=new tE,this.hiddenMatrix=new tE,this.matrixWorldNeedsUpdate=!0,this.matrixAutoUpdate=!1,t&&t.add(this)}this.update()}},w_=A=>{var e;return(e=class extends A{}).geometryHelper=new iz(30,30,30),e},wL=new tM,wO=new tm,wB=new tE,wI=(A,e,t,i,r=!1)=>{let s=A.matrixWorld;if(null===e.boundingSphere&&e.computeBoundingSphere(),wO.copy(e.boundingSphere),wO.applyMatrix4(s),!1===t.ray.intersectsSphere(wO)||(wB.copy(s).invert(),wL.copy(t.ray).applyMatrix4(wB),null!==e.boundingBox&&!1===wL.intersectsBox(e.boundingBox)))return;let a,o=e.index,l=e.attributes.position,h=e.drawRange,c;if(!1===r){let d=Math.max(0,h.start),u=Math.min(o.count,h.start+h.count);for(c=d;c<u;c+=3)if(a=function(A,e,t,i,r,s,a){let o=new e4,l=new e4,h=new e4,c=new e4,d=new e4;if(o.fromBufferAttribute(i,r),l.fromBufferAttribute(i,s),h.fromBufferAttribute(i,a),null===t.intersectTriangle(o,l,h,!1,c))return null;d.copy(c),d.applyMatrix4(A.matrixWorld);let u=e.ray.origin.distanceTo(d);return u<e.near||u>e.far?null:{faceIndex:1,distance:u,point:d.clone(),object:A}}(A,t,wL,l,o.getX(c),o.getX(c+1),o.getX(c+2))){a.faceIndex=Math.floor(c/3),i.push(a);return}}else{let p=e.attributes.position,f=new e4,m=new e4,g=new e4,v=new e4,y=1/((A.scale.x+A.scale.y+A.scale.z)/3),x=y*y,b=Math.max(0,h.start),w=Math.min(p.count,h.start+h.count);for(let S=b,M=w-1;S<M;S+=2){if(f.fromBufferAttribute(p,S),m.fromBufferAttribute(p,S+1),wL.distanceSqToSegment(f,m,v,g)>x)continue;v.applyMatrix4(A.matrixWorld);let E=t.ray.origin.distanceTo(v);E<t.near||E>t.far||i.push({distance:E,point:g.clone().applyMatrix4(A.matrixWorld),object:A})}}},wR=new e4,wN=new iH,wz=class extends ny{constructor(A){let e=new ig,t=new nh({color:16777215,vertexColors:!0,toneMapped:!1}),i=[],r=[],s={},a=new eY(15711266),o=new eY(15711266),l=new eY(2857471);function h(A,e,t){c(A,t),c(e,t)}function c(A,e){i.push(0,0,0),r.push(e.r,e.g,e.b),void 0===s[A]&&(s[A]=[]),s[A].push(i.length/3-1)}h("n1","n2",a),h("n2","n4",a),h("n4","n3",a),h("n3","n1",a),h("f1","f2",a),h("f2","f4",a),h("f4","f3",a),h("f3","f1",a),h("n1","f1",a),h("n2","f2",a),h("n3","f3",a),h("n4","f4",a),h("p","n1",o),h("p","n2",o),h("p","n3",o),h("p","n4",o),h("u1","u2",l),h("u2","u3",l),h("u3","u1",l),e.setAttribute("position",new io(i,3)),e.setAttribute("color",new io(r,3)),super(e,t),this.type="CameraHelper",this.camera=A,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=A.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=s,this.update()}update(){let A=this.geometry,e=this.pointMap;wN.projectionMatrixInverse.elements=[.5112609807824982,-0,-0,-0,-0,.41421356237309503,-0,-0,-0,-0,-0,-.099999,-0,-0,-1.0000000000000002,.100001],wF("n1",e,A,wN,-1,-1,.8),wF("n2",e,A,wN,1,-1,.8),wF("n3",e,A,wN,-1,1,.8),wF("n4",e,A,wN,1,1,.8),wF("f1",e,A,wN,-1,-1,.8),wF("f2",e,A,wN,1,-1,.8),wF("f3",e,A,wN,-1,1,.8),wF("f4",e,A,wN,1,1,.8),wF("u1",e,A,wN,.35,1.1,.8),wF("u2",e,A,wN,-.35,1.1,.8),wF("u3",e,A,wN,0,1.55,.8),A.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}};function wF(A,e,t,i,r,s,a){wR.set(r,s,a).unproject(i);let o=e[A];if(void 0!==o){let l=t.getAttribute("position");for(let h=0,c=o.length;h<c;h++)l.setXYZ(o[h],wR.x,wR.y,wR.z)}}var wU=class extends w_(wz){constructor(A){super(A),this.object=A,this.object=A,this.name=`CombinedCameraHelper: ${A.uuid}`}updateMatrixWorld(A){super.updateMatrixWorld(A),this.updateTarget()}updateTarget(){let A=this.object.getTarget();this.updateWorldMatrix(!0,!1),this.worldToLocal(A)}raycast(A,e){wI(this.object,this.geometry,A,e,!0)}};(Sq||(Sq={})).is=A=>"objectHelper"in A;var wk=(A,e)=>class extends A{constructor(){super(...arguments),this.objectHelper=new e(this),this.gizmos={}}get geometryHelper(){return e.geometryHelper}raycast(A,e){this.objectHelper.raycast(A,e)}showGizmos(){for(let A in this.gizmos){let e=this.gizmos[A];e instanceof oa&&(e.visible=!0)}}updateEntityBoxSize(A,e){this.objectHelper.visible&&this.geometryHelper instanceof iz?(A.setScalar(0),e.set(this.geometryHelper.parameters.width,this.geometryHelper.parameters.height,this.geometryHelper.parameters.height).multiplyScalar(.5)):super.updateEntityBoxSize(A,e)}hideGizmos(){for(let A in this.gizmos){let e=this.gizmos[A];e instanceof oa&&(e.visible=!1)}}},wG=new e4,wV=new e4,wj=class extends wk(gE(iH),wU){constructor(A="",e={...mS.defaultData,name:""}){super(),this._cameraType="OrthographicCamera",this.targetOffset=p$.DefaultTargetOffset,this.isUpVectorFlipped=!1,this.angleOffsetFromUp=0,this.super_Entity(A,e),this.matrixAutoUpdate=!0,this.width=window.innerWidth,this.height=window.innerHeight;let t=this.width,i=this.height;this.orthoCamera=new rr(-.5*t,.5*t,.5*i,-.5*i,-5e4,1e4),this.perspCamera=new iW(45,t/i,50,1e4),this.left=this.orthoCamera.left,this.right=this.orthoCamera.right,this.top=this.orthoCamera.top,this.bottom=this.orthoCamera.bottom,this.far=this.orthoCamera.far,this.view=this.orthoCamera.view,this.aspect=this.perspCamera.aspect,this.focus=this.perspCamera.focus,this.filmGauge=this.perspCamera.filmGauge,this.filmOffset=this.perspCamera.filmOffset,this.objectHelper.update()}get isPerspectiveCamera(){return"PerspectiveCamera"===this.cameraType}get isOrthographicCamera(){return!this.isPerspectiveCamera}get cameraType(){return this._cameraType}set fov(A){this.perspCamera.fov=A}get fov(){return this.perspCamera.fov}setNear(A,e){"PerspectiveCamera"===A?this.perspCamera.near=e:this.orthoCamera.near=e}setZoom(A,e){e>=0&&("PerspectiveCamera"===A?this.perspCamera.zoom=e:this.orthoCamera.zoom=e)}set cameraType(A){"PerspectiveCamera"===A?this.toPerspective():"OrthographicCamera"===A&&this.toOrthographic()}get near(){return"PerspectiveCamera"===this._cameraType?this.perspCamera.near:this.orthoCamera.near}set near(A){"PerspectiveCamera"===this._cameraType?this.perspCamera.near=A:this.orthoCamera.near=A}get zoom(){return"PerspectiveCamera"===this._cameraType?this.perspCamera.zoom:this.orthoCamera.zoom}set zoom(A){A>=0&&("PerspectiveCamera"===this._cameraType?this.perspCamera.zoom=A:this.orthoCamera.zoom=A)}lookAt(A){super.lookAt(A),this.getWorldPosition(wG),this.targetOffset=wG.distanceTo(A)}getTarget(A=new e4){return this.getWorldDirection(wV),this.getWorldPosition(wG),wV.multiplyScalar(this.targetOffset),A.copy(wG).add(wV),A}getDistanceToTarget(){let A=this.getTarget();return this.getWorldPosition(wG),wG.distanceTo(A)}updateUp(){let A=this.getWorldQuaternion(new e3),e=new e4(0,0,1).applyQuaternion(A),t=new e4().copy(tZ.DefaultUp);this.isUpVectorFlipped&&t.negate(),t.applyQuaternion(A);let i=new e4().copy(tZ.DefaultUp).projectOnPlane(e),r=new e4().crossVectors(i,t).dot(e)>=0?1:-1;this.angleOffsetFromUp=i.angleTo(t)*r}updateTransformState(A){let e=super.updateTransformState(A);return void 0!==A.isUpVectorFlipped&&(this.isUpVectorFlipped=A.isUpVectorFlipped),this.updateUp(),e}getViewFrontToObject(A){let e=A.getWorldPosition(new e4),t=A.getWorldDirection(new e4).multiplyScalar(this.targetOffset);return{position:e.clone().add(t),target:e}}getViewToObject(A){let e=A.getWorldPosition(new e4),t=this.getWorldDirection(new e4).multiplyScalar(this.targetOffset);return{position:e.clone().sub(t),target:e}}setViewplaneSize(A,e){this.left=-(.5*A),this.right=.5*A,this.top=.5*e,this.bottom=-(.5*e),this.aspect=A/e,this.updateProjectionMatrix()}toOrthographic(){this.orthoCamera.left=this.left,this.orthoCamera.right=this.right,this.orthoCamera.top=this.top,this.orthoCamera.bottom=this.bottom,this.orthoCamera.view=this.view,this.orthoCamera.far=this.far,this.orthoCamera.updateProjectionMatrix(),this.projectionMatrix=this.orthoCamera.projectionMatrix,this.projectionMatrixInverse=this.orthoCamera.projectionMatrixInverse,this._cameraType="OrthographicCamera",this.objectHelper&&this.objectHelper.update()}toPerspective(){this.perspCamera.aspect=this.aspect,this.perspCamera.fov=this.fov,this.perspCamera.view=this.view,this.perspCamera.far=this.far,this.perspCamera.updateProjectionMatrix(),this.projectionMatrix=this.perspCamera.projectionMatrix,this.projectionMatrixInverse=this.perspCamera.projectionMatrixInverse,this._cameraType="PerspectiveCamera",this.objectHelper&&this.objectHelper.update()}setFocalLength(A){this.perspCamera.setFocalLength(A),this.toPerspective()}getFocalLength(){return this.perspCamera.getFocalLength()}getEffectiveFOV(){return this.perspCamera.getEffectiveFOV()}getFilmWidth(){return this.perspCamera.getFilmWidth()}getFilmHeight(){return this.perspCamera.getFilmHeight()}setViewOffset(A,e,t,i,r,s){"PerspectiveCamera"===this._cameraType?this.perspCamera.setViewOffset(A,e,t,i,r,s):this.orthoCamera.setViewOffset(A,e,t,i,r,s)}clearViewOffset(){"PerspectiveCamera"===this._cameraType?(this.perspCamera.clearViewOffset(),this.toPerspective()):(this.orthoCamera.clearViewOffset(),this.toOrthographic())}updateProjectionMatrix(){"PerspectiveCamera"===this._cameraType?this.toPerspective():"OrthographicCamera"===this._cameraType&&this.toOrthographic()}updateMatrixWorld(A){super.updateMatrixWorld(A),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(A,e){super.updateWorldMatrix(A,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}copy(A,e){return super.copy(A,e),this.orthoCamera.copy(A.orthoCamera),this.perspCamera.copy(A.perspCamera),this.left=A.left,this.right=A.right,this.top=A.top,this.bottom=A.bottom,this.far=A.far,this.view=null===A.view?null:Object.assign({},A.view),this._cameraType=A._cameraType,this.aspect=A.aspect,this.fov=A.fov,this.focus=A.focus,this.filmGauge=A.filmGauge,this.filmOffset=A.filmOffset,this.targetOffset=A.targetOffset,this.updateProjectionMatrix(),this}toCameraState(A=[]){return di({type:this.cameraType,far:this.far,orthographic:{near:this.orthoCamera.near,zoom:this.orthoCamera.zoom},perspective:{near:this.perspCamera.near,fov:this.perspCamera.fov,zoom:this.perspCamera.zoom},up:this.up.toArray(),targetOffset:this.targetOffset,isUpVectorFlipped:this.isUpVectorFlipped},A)}updateCameraSubtype(A,e){let t="perspective"===A?"PerspectiveCamera":"OrthographicCamera";void 0!==e.zoom&&this.setZoom(t,e.zoom),void 0!==e.near&&this.setNear(t,e.near),void 0!==e.fov&&"PerspectiveCamera"===t&&(this.fov=e.fov)}updateState(A){this.updateCameraState(A)}updateCameraState(A){this.updateState_Entity(A,{}),void 0!==A.far&&(this.far=A.far),void 0!==A.orthographic&&this.updateCameraSubtype("orthographic",A.orthographic),void 0!==A.perspective&&this.updateCameraSubtype("perspective",A.perspective),void 0!==A.type&&(this.cameraType=A.type),void 0!==A.up&&this.up.fromArray(A.up),void 0!==A.targetOffset&&(this.targetOffset=A.targetOffset),void 0!==A.isUpVectorFlipped&&(this.isUpVectorFlipped=A.isUpVectorFlipped),this.updateProjectionMatrix()}updateByPatchedOp(A,e,t){super.updateByPatchedOp(A,e,t),1===A.path.length&&0===A.type&&this.updateCameraSubtype(A.path[0],A.props)}toState(A){return{...super.toState(A),...this.toCameraState(A),type:this.cameraType}}},wH=new tE;function wW(A){let e=!1;return A.scene.objects.traverse((A,t)=>{t.geometry?.type==="BooleanGeometry"&&(e=!0)}),e}var wY=class extends bJ{constructor(A,e,t){super(A,e),this.data=e,this.meshSetAddresses=[],this.needsTransformForDownstream=!1,this.geometry=new ig,this.geometry.userData.parameters={width:0,height:0,depth:0}}get booleanOp(){return this.data.geometry.operation}get phongAngle(){return this.data.geometry.phongAngle??45}get isLOD(){return this.recomputeBoolean(),!1}updateByPatchedOp(A,e,t){super.updateByPatchedOp(A,e,t),1===A.path.length&&"geometry"===A.path[0]&&0===A.type&&void 0!==A.props.operation&&(this.freeBooleanPointer(),this.resetBBoxNeedsUpdate())}freeBooleanPointer(){super.freeBooleanPointer(),this.geometry.dispose()}recomputeBoolean(A,e=!0){if(-1!==this.booleanMeshSetAddress)return;for(let t=0;t<this.children.length;t++){let i=this.children[t];i instanceof wY&&i.recomputeBoolean(!0===A,e)}this.meshSetAddresses=[];for(let r=0;r<this.children.length;r++){let s=this.children[r];if(s instanceof yQ&&!0===s.dataPatched.visible&&s.geometry.attributes.position?.count>0&&s.geometry.drawRange.count>0){if(-1===s.booleanMeshSetAddress){if((s.geometry.index??s.geometry.getAttribute("position")).count/3<15e5&&(s.booleanMeshSetAddress=yD.getMeshSet(s.geometry,!0===A,e)),-1===s.booleanMeshSetAddress)return;yD.transformMeshSet(s.booleanMeshSetAddress,s.matrix),s.booleanMatrixInvOld.copy(s.matrix).invert(),s.booleanWasTransformed=!1}else s instanceof wY&&!0===s.needsTransformForDownstream?(yD.transformMeshSet(s.booleanMeshSetAddress,s.matrix),s.needsTransformForDownstream=!1):!0===s.booleanWasTransformed&&(wH.multiplyMatrices(s.matrix,s.booleanMatrixInvOld),yD.transformMeshSet(s.booleanMeshSetAddress,wH),s.booleanMatrixInvOld.copy(s.matrix).invert(),s.booleanWasTransformed=!1);this.meshSetAddresses.push(s.booleanMeshSetAddress)}}if(0===this.meshSetAddresses.length){this.geometry.setAttribute("position",new ia([],0)),this.geometry.setDrawRange(0,0);return}if(!0===A)return yD.calcBooleanTopological(this.meshSetAddresses,this.booleanOp);let a=this.geometry;a.dispose(),this.geometry=new ig,this.geometry.userData=a.userData,this.geometry.boundingSphere=a.boundingSphere;try{this.booleanMeshSetAddress=yD.calcBoolean(this.meshSetAddresses,this.booleanOp,this.geometry,this.phongAngle)}catch(o){this.booleanMeshSetAddress=0,console.error(o)}this.booleanMatrixInvOld.copy(this.matrix).invert(),this.needsTransformForDownstream=!0,b0(this),b1(this)}dispose(){super.dispose(),this.geometry.dispose()}};(SZ||(SZ={})).is=function(A){return v4.is(A)&&A instanceof aS};var wX=A=>class extends A{updateState_Light(A,e){this.updateState_Entity(A,e),void 0!==A.color&&(this.color=e.shared.color(A.color)),void 0!==A.intensity&&(this.intensity=A.intensity),void 0!==A.depth&&(this.shadow.camera.far=A.depth,this.shadow.needsUpdate=!0),void 0!==A.shadows&&(this.castShadow=A.shadows)}},wQ=A=>A instanceof yQ,wq=A=>null!==A&&A instanceof wY,wZ=A=>A instanceof wj,wK=A=>SZ.is(A),wJ=A=>Sq.is(A),w$=class extends w_(oo){constructor(A,e=15){super(e),this.object=A,this.object.updateMatrixWorld(),this.name=`EmptyObjectHelper: ${A.uuid}`,this.matrix=A.matrixWorld,this.matrixAutoUpdate=!1}raycast(A,e){wI(this.object,w$.geometryHelper,A,e)}update(){}},w0=class extends wk(gE(s8),w$){constructor(A,e){super(),this.super_Entity(A,e),this.objectHelper.update()}updateState(A,e){this.updateState_Entity(A,e)}},w1=class extends w_(ot){constructor(A,e=15,t=10066329){super(A,e,t),this.object=A,this.added=!1,this.name=`DirectionalLightHelper: ${A.uuid}`}raycast(A,e){wI(this.object,w1.geometryHelper,A,e)}},w2=class extends w_(a9){constructor(A,e=15,t=6710886){super(A,e,t),this.object=A,this.name=`PointLightHelper: ${A.uuid}`}raycast(A,e){wI(this.object,w2.geometryHelper,A,e)}},w3=class extends w_(a8){constructor(A,e=6710886){super(A,e),this.object=A,this.name=`SpotLightHelper: ${A.uuid}`}raycast(A,e){wI(this.object,w3.geometryHelper,A,e)}update(){if(void 0!==this.object){let A=w3._vector,e=this.object.distance?this.object.distance:1e3,t=e*Math.tan(this.object.angle);this.cone.scale.set(t,t,e),A.setFromMatrixPosition(this.object.target.matrixWorld),this.cone.lookAt(A);let i=void 0!==this.color?this.color:this.light.color;if(this.cone.material instanceof Array)for(let r=0,s=this.cone.material.length;r<s;r++)this.cone.material[r].color.set(i);else this.cone.material.color.set(i)}}},w4=w3;w4._vector=new e4;var w5=class extends wX(wk(gE(az),w1)){constructor(A,e,t){super(),this.super_Entity(A,e),this.castShadow=!0,this.shadow.mapSize.width=2048,this.shadow.mapSize.height=2048,this.shadow.normalBias=1,this.layers.enable(3);let i=this.shadow.camera;i.top=1250,i.bottom=-1250,i.right=1250,i.left=-1250,i.near=-1e4,i.far=2500;let r=new os(this.shadow.camera);r.visible=!1,this.gizmos.shadowmap=r}update(){for(let A in this.shadow.camera.updateProjectionMatrix(),this.gizmos){let e=this.gizmos[A];e instanceof os&&e.update()}}updateMatrixWorld(A){super.updateMatrixWorld(A),this.objectHelper&&this.objectHelper.update()}updateState(A,e){var t,i;this.updateState_Light(A,e);let r=void 0!==A.depth&&A.depth!==this.shadow.camera.far||void 0!==A.size&&A.size/2!==this.shadow.camera.right;void 0!==A.size&&(t=this,i=A.size,t.shadow.camera.right=i/2,t.shadow.camera.left=-i/2,t.shadow.camera.top=i/2,t.shadow.camera.bottom=-i/2,t.shadow.needsUpdate=!0),void 0!==A.shadowRadius&&(this.shadow.radius=A.shadowRadius),void 0!==A.shadowResolution&&(this.shadow.mapSize.set(A.shadowResolution,A.shadowResolution),this.shadow.map&&(this.shadow.map.dispose(),this.shadow.map=null)),r&&this.update()}},w6=class extends wX(wk(gE(aR),w2)){constructor(A,e,t){super(),this.super_Entity(A,e),this.castShadow=!0,this.shadow.mapSize.width=1024,this.shadow.mapSize.height=1024,this.shadow.normalBias=1,this.layers.enable(3);let i=this.shadow.camera;i.fov=90,i.aspect=1,i.near=100,i.far=2500;let r=new e4(-i.far+this.position.x,-i.far+this.position.y,-i.far+this.position.z),s=new e4(i.far+this.position.x,i.far+this.position.y,i.far+this.position.z),a=new e8(r,s),o=new oa(a,new eY(16755200));o.visible=!1,this.gizmos.shadowmap=o,this.update()}update(){if(this.shadow&&(this.shadow.camera.updateProjectionMatrix(),this.gizmos))for(let A in this.gizmos){let e=this.gizmos[A];if(e instanceof oa){let t=this.shadow.camera,i=new e4(-t.far+this.position.x,-t.far+this.position.y,-t.far+this.position.z),r=new e4(t.far+this.position.x,t.far+this.position.y,t.far+this.position.z);e.box.set(i,r),e.updateMatrixWorld(!0)}}}updateMatrixWorld(A){super.updateMatrixWorld(A),this.objectHelper&&this.objectHelper.update()}updateState(A,e){this.updateState_Light(A,e),void 0!==A.distance&&(this.distance=A.distance),void 0!==A.decay&&(this.decay=A.decay),void 0!==A.shadowRadius&&(this.shadow.radius=A.shadowRadius),void 0!==A.shadowResolution&&(this.shadow.mapSize.set(A.shadowResolution,A.shadowResolution),this.shadow.map&&(this.shadow.map.dispose(),this.shadow.map=null))}},w8=new e4,w9=new e4,w7=new e3,SA=class extends wX(wk(gE(a_),w4)){constructor(A,e,t){super(),this.super_Entity(A,e),this.castShadow=!0,this.shadow.mapSize.width=1024,this.shadow.mapSize.height=1024,this.shadow.normalBias=1,this.layers.enable(3);let i=this.shadow.camera;i.fov=2*eP.RAD2DEG*this.angle,i.aspect=1,i.near=100,i.far=2500;let r=new os(this.shadow.camera);r.visible=!1,this.gizmos.shadowmap=r,this.update()}update(){for(let A in this.shadow.camera.updateProjectionMatrix(),this.gizmos){let e=this.gizmos[A];e instanceof os&&e.update()}}updateMatrixWorld(A){super.updateMatrixWorld(A),w9.setFromMatrixPosition(this.matrixWorld),w7.setFromRotationMatrix(this.matrixWorld),w8.copy(this.up).applyQuaternion(w7).negate().multiplyScalar(this.distance),this.target.position.copy(w9).add(w8),this.target.updateMatrixWorld(),this.objectHelper&&this.objectHelper.update()}updateState(A,e){this.updateState_Light(A,e),void 0!==A.distance&&(this.distance=A.distance),void 0!==A.decay&&(this.decay=A.decay),void 0!==A.angle&&(this.angle=A.angle),void 0!==A.penumbra&&(this.penumbra=A.penumbra),void 0!==A.shadowRadius&&(this.shadow.radius=A.shadowRadius),void 0!==A.shadowResolution&&(this.shadow.mapSize.set(A.shadowResolution,A.shadowResolution),this.shadow.map&&(this.shadow.map.dispose(),this.shadow.map=null))}},Se=class extends b${get forceComputeSize(){return!0}get shape(){return this.geometry.userData.shape}constructor(A,e,t){super(A,e,t)}updateEntityBoxSize(A,e){let t=this.geometry.getAttribute("position");void 0!==t?yW(t,this.geometry.drawRange.start,this.geometry.drawRange.count<1/0?this.geometry.drawRange.count:t.count,A,e):super.updateEntityBoxSize(A,e)}},St=new e4,Si=new tE,Sr=new tM;function Ss(A){let e=!1;return A.scene.objects.traverse((A,t)=>{"Mesh"===t.type&&"TextGeometry"===t.geometry.type&&(e=!0)}),e}var Sn=class extends b${constructor(A,e,t){super(A,e,t),this.data=e}get textGeometry(){return this.geometry}get charWidths(){return this.textGeometry.charWidths}get charCoords(){return this.textGeometry.charCoords}get wrappedText(){return this.textGeometry.wrappedText}get font(){return this.textGeometry.font}get initialOffsetY(){let A=this.dataPatched;return this.font?.getLineInitialOffsetY(this.lineHeight,this.wrappedText.length,A.geometry.height,this.fontScale,A.geometry.verticalAlign)??0}get fontScale(){let A=this.dataPatched;return this.font?A.geometry.fontSize/this.font.unitsPerEm:1}get AD(){return Math.abs(this.ascender-this.descender)}get ascender(){return(this.font?.ascender??1)*this.fontScale}get descender(){return(this.font?.descender??1)*this.fontScale}get lineHeight(){let A=this.dataPatched;return A.geometry.fontSize*A.geometry.lineHeight}raycast(A,e){let{matrixWorld:t}=this;if(Si.copy(t).invert(),Sr.copy(A.ray).applyMatrix4(Si),Sr.intersectBox(this.singleBBox,St)){let i=St.applyMatrix4(t),r=A.ray.origin.distanceTo(i);e.push({distance:r,point:i.clone(),object:this})}}},Sa=class extends wk(gE(s8),w$){constructor(A,e,t){super(),"Instance"===e.type&&"string"==typeof A&&(e=this.transformAssignData(e,t)),this.super_Entity(A,e),this.objectHelper.update()}get isComponentRoot(){return"Component"===this.data.type&&"string"==typeof this.identity}get isInstanceRoot(){return"Instance"===this.data.type&&"string"==typeof this.identity}transformAssignData(A,e){let t=e.scene.data.objects.get(A.component);if(t){let i,r;for(let s of mT.rootOverrideProps)void 0===A[s]?(void 0===i&&(i={...A}),i[s]=t.data[s]):(void 0===r&&(r={}),r[s]=A[s]);return this.overrideData=r,i??A}return A}updateByOp(A,e,t,i){let r;if(this.isInstanceRoot&&!i&&(e=this.transformAssignData(e,t),0===A.type&&0===A.path.length&&this.component))for(let s of mT.rootOverrideProps)s in A.props&&void 0===A.props[s]&&(void 0===r&&(r={...A,props:{...A.props}}),r.props[s]=this.component.data[s]);super.updateByOp(r??A,e,t,i)}updateState(A,e){this.updateState_Entity(A,e)}expandInstanceChildren(A){let e=this.data;if(void 0===this.component){this.component=A.scene.find(e.component)??null;let t=!1;if(this.component!==this.oldComponent){if(this.oldComponent){let i=0;for(let r of this.children)if(v4.is(r))A.scene.disposeAndUnregisterEntityRecursivelyIfNotReregistered(r),So(r),i+=1;else break;this.children.splice(0,i)}t=!0}this.component&&function A(e,t,i,r,s,a,o,l){if(o>50)return!1;if(r.component!==s){if(r.component){let h=r.component.instances.indexOf(r);h>=0&&r.component.instances.splice(h,1)}s.instances.push(r),r.component=s}s instanceof Sa&&s.isInstanceRoot&&s.expandInstanceChildren(e);let c=0;for(let d of s.children)if(v4.is(d)){let u=[...t,..."string"==typeof d.identity?[d.identity]:d.identity],p=mE.resolve(i,u,1),f=null,m;if(!l){let g=r.children[c];if(null!==(f=v4.is(g)?g:null)){let v=Sl(f,d,p,u);m=v>=1?f.stateSelection:void 0,2!==v&&(f=null)}if(null===f&&null!==(f=e.scene.findInstance(u)??null)){let y=Sl(f,d,p,u);if(m=y>=1?f.stateSelection:void 0,2!==y)f=null;else{let x=f.parent.children.indexOf(f);f.parent.children.splice(x,1),r.children.splice(c,0,f),f.parent===r?x<=c&&console.error("not possible"):(f.parent=r,f.matrixWorldNeedsUpdate=!0,f.resetBBoxNeedsUpdate(),f.updateVisible(),e.pendingDeletes.delete(f))}}}if(null===f){let b=p?db.apply(d.data,p):d.data;pJ.is(b.type)&&(b={...b,type:"Empty"}),(f=Sh(u,b,e)).overrideData=p,r.add(f),r.children.splice(r.children.length-1,1),r.children.splice(c,0,f),f.updateState(f.data,e),m&&f.changeSelectedState(m,e),e.scene.registerInstanceAndSetUuid(f)}c+=1,A(e,t,i,f,d,a,o+1,l)}if(!l){let w=c;for(;;){let S=r.children[c];if(v4.is(S))e.pendingDeletes.add(S);else break;c+=1}r.children.splice(w,c-w)}return!0}(A,[this.uuid],e.overrides,this,this.component,this.component,0,t),this.oldComponent=this.component}}};function So(A){if(A.component){let e=A.component.instances.indexOf(A);for(let t of(e>=0&&A.component.instances.splice(e,1),A.children))v4.is(t)&&So(t)}}function Sl(A,e,t,i){return A.component===e&&dA(A.identity,i)?A.overrideData===t?2:1:0}function Sh(A,e,t){return"Mesh"===e.type?"TextGeometry"===e.geometry.type?new Sn(A,e,t):"SubdivGeometry"===e.geometry.type?new b7(A,e,t):"VectorGeometry"===e.geometry.type?new Se(A,e,t):"BooleanGeometry"===e.geometry.type?new wY(A,e,t):new b$(A,e,t):"Empty"===e.type?new w0(A,e):"PointLight"===e.type?new w6(A,e,t):"SpotLight"===e.type?new SA(A,e,t):"DirectionalLight"===e.type?new w5(A,e,t):"Component"===e.type||"Instance"===e.type?new Sa(A,e,t):pJ.is(e.type)?new wj(A,e):(console.error(e),new w0(A,e))}function Sc(A,e){let t=!1,i=e.getLayersOfType("transmission"),r=e.getLayersOfType("outline");return r.length>0&&(A.layers.set(8),i.length>0&&A.layers.enable(3),t=!0,b1(A),b0(A)),0===i.length&&0===r.length&&A.layers.set(0),t}function Sd(A,e){if(!e.layers)return!1;let t=!1,i=e.getLayersOfType("transmission"),r=e.getLayersOfType("outline");return i.length>0&&(A.layers.set(3),r.length>0&&A.layers.enable(8),t=!0),0===i.length&&0===r.length&&A.layers.set(0),t}gS.changeEntityProptotype=function(A,e,t){let i=Sh(A.identity,e,t),r=A.children,s=A.parent,a=A.component,o=A.instances,l=A.overrideData,h=A.uuid,c=A.stateSelection;for(let d of(A.dispose(),Object.keys(A)))delete A[d];for(let u of(Object.setPrototypeOf(A,Object.getPrototypeOf(i)),Object.keys(i)))A[u]=i[u];A.children=[...A.children,...r],A.parent=s,A.component=a,A.instances=o,A.uuid=h,A.overrideData=l,A.updateState(A.data,t),c&&A.changeSelectedState(c,t),A.resetBBoxNeedsUpdate()},gS.Cloner=wP;var Su=new aK,Sp=new tE,Sf=new tM,Sm=A=>`

// PCSS implementation based on:
// https://www.gamedev.net/articles/programming/graphics/contact-hardening-soft-shadows-made-fast-r4906/
// NOTE: This number affects how big the shadow blur can
// possibly get. Bigger number == bigger blur, but less precise results

const float  gPenumbraFilterSize = 80.0;
const int   gPenumbraSamples = ${A};
const int gShadowSamples = ${A};
const float gShadowSamplesRpc = 1.0f / float(gShadowSamples);

vec2 vogelDiskSample(int sample_index, int sample_count, float angle)
{
  const float goldenAngle = 2.399963f; // radians
  float r = sqrt(float(sample_index) + 0.5f) / sqrt(float(sample_count));
  float theta = float(sample_index) * goldenAngle + angle;
  float sine = sin(theta);
  float cosine = cos(theta);
  return vec2(cosine, sine) * r;
}

// NOTE: For now we aren't using this screen-space noise. But we should enable
// it again once we do some sort of temporal AA. Then we could potentially lower
// the number of samples needed and still get a pretty smooth result.
// Derived from the interleaved gradient function from Jimenez 2014 http:goo.gl/eomGso
float getNoiseInterleavedGradient(vec2 screenPos)
{
    vec3 magic = vec3(0.06711056f, 0.00583715f, 52.9829189f);
    return fract(magic.z * fract(dot(screenPos, magic.xy)));
}

#ifdef USE_SHADOWMAP
    #if NUM_DIR_LIGHT_SHADOWS > 0

        uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
        varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];

        struct DirectionalLightShadow {
            float shadowBias;
            float shadowNormalBias;
            float shadowRadius;
            vec2 shadowMapSize;
        };

        uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];

    #endif

    #if NUM_SPOT_LIGHT_SHADOWS > 0

        uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
        varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];

        struct SpotLightShadow {
            float shadowBias;
            float shadowNormalBias;
            float shadowRadius;
            vec2 shadowMapSize;
        };

        uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];

    #endif

    #if NUM_POINT_LIGHT_SHADOWS > 0

        uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
        varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];

        struct PointLightShadow {
            float shadowBias;
            float shadowNormalBias;
            float shadowRadius;
            vec2 shadowMapSize;
            float shadowCameraNear;
            float shadowCameraFar;
        };

        uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];

    #endif

    /*
    #if NUM_RECT_AREA_LIGHTS > 0

        // TODO (abelnation): create uniforms for area light shadows

    #endif
    */

float computePenumbra(int index, sampler2D shadowMap, float temporalAngle, float texelSize, vec2 uv, float compare, float texelScalar, float shadowRadius)
{
    float penumbra = 1.0;
    float blockerDepthAvg = 0.0;
    float blockerCount = 0.0;

    #pragma unroll_loop_start
    for(int i = 0; i < gPenumbraSamples; i ++)
    {
        vec2 offset = (vogelDiskSample(i, gShadowSamples, temporalAngle) * texelSize) * texelScalar;
        float depth = unpackRGBAToDepth( texture2D( shadowMap, uv + offset ) );

        if(depth < compare + 0.0001)
        {
            blockerDepthAvg += depth;
            blockerCount++;
        }
    }
    #pragma unroll_loop_end

    if (blockerCount > 0.0)
    {
        blockerDepthAvg /= blockerCount;

        // Compute penumbra
        penumbra = (compare - blockerDepthAvg) / (blockerDepthAvg);
        penumbra *= penumbra;
        penumbra *= 200.0 * penumbraSize[min(index, 5 - 1)]; // Magic number that affects how quickly the penumbra grows

        return clamp(penumbra, 0.00, 1.0);
    }
    return 0.0;
}

vec4 shadowmod289(vec4 x){return x - floor(x * (1.0 / 289.0)) * 289.0;}
vec4 shadowperm(vec4 x){return shadowmod289(((x * 34.0) + 1.0) * x);}
float shadowNoise(vec3 p){
            vec3 a = floor(p);
            vec3 d = p - a;
            d = d * d * (3.0 - 2.0 * d);
            vec4 b = a.xxyy + vec4(0.0, 1.0, 0.0, 1.0);
            vec4 k1 = shadowperm(b.xyxy);
            vec4 k2 = shadowperm(k1.xyxy + b.zzww);
            vec4 c = k2 + a.zzzz;
            vec4 k3 = shadowperm(c);
            vec4 k4 = shadowperm(c + 1.0);
            vec4 o1 = fract(k3 * (1.0 / 41.0));
            vec4 o2 = fract(k4 * (1.0 / 41.0));
            vec4 o3 = o2 * d.z + o1 * (1.0 - d.z);
            vec2 o4 = o3.yw * d.x + o3.xz * (1.0 - d.x);
            return o4.y * d.y + o4.x * (1.0 - d.y);
        }

float vogelShadow(int index, sampler2D shadowMap, vec2 uv, float texelSize, float compare, float shadowRadius)
{
    float shadow         = 0.0f;
    float temporalOffset = shadowNoise(floor(vWPosition * 10.));

    // NOTE: When using TAA, we should use screen space interleaved gradient noise
    //float temporalOffset = getNoiseInterleavedGradient(gl_FragCoord.xy);
    float temporalAngle  = temporalOffset * PI2;

    float texelScalar = (gPenumbraFilterSize) / (texelSize * 1024.);
    float penumbra = computePenumbra(index, shadowMap, temporalAngle, texelSize, uv, compare, texelScalar, shadowRadius);
    if (penumbra == -1.0) {
        return 1.0;
    }

    #pragma unroll_loop_start
    for (int i = 0; i < gShadowSamples; i++)
    {
        vec2 vogelSample =  vogelDiskSample(i, gShadowSamples, temporalAngle) * texelSize;
        // Overall blurring offset
        vec2 offset = vogelSample * (shadowRadius * 2.);

        // Penumbra offset
        offset += vogelSample * (penumbra * texelScalar);

        shadow += step( compare, unpackRGBAToDepth( texture2D( shadowMap, uv + offset ) ) );
    }
    #pragma unroll_loop_end

    return shadow * gShadowSamplesRpc;
}


    float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {

        return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );

    }

    vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {

        return unpackRGBATo2Half( texture2D( shadow, uv ) );

    }

    float VSMShadow (sampler2D shadow, vec2 uv, float compare ){

        float occlusion = 1.0;

        vec2 distribution = texture2DDistribution( shadow, uv );

        float hard_shadow = step( compare , distribution.x ); // Hard Shadow

        if (hard_shadow != 1.0 ) {

            float distance = compare - distribution.x ;
            float variance = max( 0.00000, distribution.y * distribution.y );
            float softness_probability = variance / (variance + distance * distance ); // Chebeyshevs inequality
            softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 ); // 0.3 reduces light bleed
            occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );

        }
        return occlusion;

    }

    float getShadow( int i, sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {

        float shadow = 1.0;

        shadowCoord.xyz /= shadowCoord.w;
        shadowCoord.z += shadowBias;

        // if ( something && something ) breaks ATI OpenGL shader compiler
        // if ( all( something, something ) ) using this instead

        bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
        bool inFrustum = all( inFrustumVec );

        bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );

        bool frustumTest = all( frustumTestVec );

        if ( frustumTest ) {

        #if defined( SHADOWMAP_TYPE_PCF )

            vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
            return vogelShadow(i, shadowMap, shadowCoord.xy, texelSize.x, shadowCoord.z, shadowRadius );

        #elif defined( SHADOWMAP_TYPE_PCF_SOFT )

            vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
            float dx = texelSize.x;
            float dy = texelSize.y;

            vec2 uv = shadowCoord.xy;
            vec2 f = fract( uv * shadowMapSize + 0.5 );
            uv -= f * texelSize;

            shadow = (
                texture2DCompare( shadowMap, uv, shadowCoord.z ) +
                texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
                texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
                texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
                mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
                     texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
                     f.x ) +
                mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
                     texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
                     f.x ) +
                mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
                     texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
                     f.y ) +
                mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
                     texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
                     f.y ) +
                mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
                          texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
                          f.x ),
                     mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
                          texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
                          f.x ),
                     f.y )
            ) * ( 1.0 / 9.0 );

        #elif defined( SHADOWMAP_TYPE_VSM )

            shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );

        #else // no percentage-closer filtering:

            shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );

        #endif

        }

        return shadow;

    }

    // cubeToUV() maps a 3D direction vector suitable for cube texture mapping to a 2D
    // vector suitable for 2D texture mapping. This code uses the following layout for the
    // 2D texture:
    //
    // xzXZ
    //  y Y
    //
    // Y - Positive y direction
    // y - Negative y direction
    // X - Positive x direction
    // x - Negative x direction
    // Z - Positive z direction
    // z - Negative z direction
    //
    // Source and test bed:
    // https://gist.github.com/tschw/da10c43c467ce8afd0c4

    vec2 cubeToUV( vec3 v, float texelSizeY ) {

        // Number of texels to avoid at the edge of each square

        vec3 absV = abs( v );

        // Intersect unit cube

        float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
        absV *= scaleToCube;

        // Apply scale to avoid seams

        // two texels less per square (one texel will do for NEAREST)
        v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );

        // Unwrap

        // space: -1 ... 1 range for each square
        //
        // #X##         dim    := ( 4 , 2 )
        //  # #         center := ( 1 , 1 )

        vec2 planar = v.xy;

        float almostATexel = 1.5 * texelSizeY;
        float almostOne = 1.0 - almostATexel;

        if ( absV.z >= almostOne ) {

            if ( v.z > 0.0 )
                planar.x = 4.0 - v.x;

        } else if ( absV.x >= almostOne ) {

            float signX = sign( v.x );
            planar.x = v.z * signX + 2.0 * signX;

        } else if ( absV.y >= almostOne ) {

            float signY = sign( v.y );
            planar.x = v.x + 2.0 * signY + 2.0;
            planar.y = v.z * signY - 2.0;

        }

        // Transform to UV space

        // scale := 0.5 / dim
        // translate := ( center + 0.5 ) / dim
        return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );

    }

    float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {

        float shadow = 1.0;
        vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );

        // for point lights, the uniform @vShadowCoord is re-purposed to hold
        // the vector from the light to the world-space position of the fragment.
        vec3 lightToPosition = shadowCoord.xyz;

        // dp = normalized distance from light to fragment position
        float compare = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear ); // need to clamp?
        compare += shadowBias;

        // bd3D = base direction 3D
        vec3 bd3D = normalize( lightToPosition );

        float temporalOffset = shadowNoise(floor(vWPosition * 10.));
        float temporalAngle  = temporalOffset * PI2;


        #if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_VSM )
            for (int i = 0; i < gShadowSamples; i++) {
                vec2 vogelSample = vogelDiskSample(i, gShadowSamples, temporalAngle) * texelSize;

                // Overall blurring offset
                vec3 offset = vec3(vogelSample.x, vogelSample.y, -vogelSample.x) * (shadowRadius + 5.);

                // NOTE: Removed for now
                // Penumbra offset
                //offset += vec3(vogelSample.x, vogelSample.y, vogelSample.y)  * (penumbra * gPenumbraFilterSize);

                shadow += texture2DCompare( shadowMap, cubeToUV( bd3D + offset, texelSize.y ), compare );

            }
            return shadow * gShadowSamplesRpc;

        #elif defined( SHADOWMAP_TYPE_PCF_SOFT )
            for (int i = 0; i < 16; i++) {
                vec2 vogelSample = vogelDiskSample(i, gShadowSamples, temporalAngle) * texelSize;

                // Overall blurring offset
                vec3 offset = vec3(vogelSample.x, vogelSample.y, -vogelSample.x) * (shadowRadius + 5.);

                shadow += texture2DCompare( shadowMap, cubeToUV( bd3D + offset, texelSize.y ), compare );

            }
            return shadow * (1.0 / 16.0);
        #else // no percentage-closer filtering

            return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), compare );

        #endif

    }

#endif
`,Sg=i5.lights_fragment_begin,Sv=i5.shadowmask_pars_fragment,Sy=!1,Sx=A=>{switch(A){case"low":return 8;case"medium":default:return 16;case"high":return 32}},Sb=(A="medium")=>{if(Sy)return;Sy=!0;let e=Sx(A);i5.shadowmap_pars_fragment=Sm(e);let t=Sg.slice();t=(t=t.replace("getShadow( spotShadowMap[ i ]","getShadow( UNROLLED_LOOP_INDEX + 3, spotShadowMap[ i ]")).replace("getShadow( directionalShadowMap[ i ]","getShadow( UNROLLED_LOOP_INDEX, directionalShadowMap[ i ]"),i5.lights_fragment_begin=t;let i=Sv.slice();i=i.replaceAll("getShadow(","getShadow( UNROLLED_LOOP_INDEX, "),i5.shadowmask_pars_fragment=i},Sw=`
attribute vec3 randomColor;
varying vec3 vNormal;
flat out vec3 vColor;

void main()
{
vNormal = normal;
vColor = randomColor;
gl_Position = projectionMatrix * (modelViewMatrix * vec4(position, 1.0));
}
`,SS=`
uniform float depthContrast;
varying vec3 vNormal;
flat in vec3 vColor;
void main()
{
vec3 normal = (normalize(vNormal)).rgb;

float contrastDepth = (gl_FragCoord.z - 0.5) * depthContrast + 0.5;

vec3 resultColor = mix(mix(vColor, normal, 0.2), vec3(contrastDepth), 0.4);
gl_FragColor = vec4(resultColor, vColor.r);
}
`,SM=new ij({vertexShader:Sw,fragmentShader:SS,uniforms:{depthContrast:{value:1}}}),SE=new an;SE.wireframe=!0;var ST=new e4,SC=class extends ns{constructor(A,e){super(),this.data=A,this.backupFog=new nr(16777215,.1,2e3),this.fogUseBGColor=!1,this.enableHelpers=!1,this.wireframeState=!1,this.needsTransmissionDirty=!0,this.needsNormalDirty=!0,this._needsTransmission=!1,this._needsNormal=!1,this.geometryCacheChanged=!1,this.bgColor=new y3(1,1,1,1),this.entityByUuid={},this.entityIdentityToEntity={},this.toExpandCloner=new Set,this.needsRecomputeInstances=!1,this.ambientLight=new aM(13882323,8553090,.75),this.ambientLight.name="Default Ambient Light",this.ambientLight.layers.enable(3),this.personalCamera=this.createPersonalCamera(),this.activeCamera=this.personalCamera,this.postprocessing=A.postprocessing,this.init(A,e),this.matrixAutoUpdate=!1}markGeometryCacheDirty(){this.geometryCacheChanged=!0}markNeedsUpdateRendererDirty(){this.needsTransmissionDirty=!0,this.needsNormalDirty=!0}needsTransmission(){let A;return this.needsTransmissionDirty&&(this._needsTransmission=(A=!1,this.traverseEntity(e=>{if(e instanceof bJ){if(Array.isArray(e.material))for(let t=0;t<e.material.length;t++)Sd(e,e.material[t])&&(A=!0);else Sd(e,e.material)&&(A=!0)}}),A),this.needsTransmissionDirty=!1),this._needsTransmission}needsNormal(){let A;return this.needsNormalDirty&&(this._needsNormal=(A=!1,this.traverseEntity(e=>{if(e instanceof bJ){if(Array.isArray(e.material))for(let t=0;t<e.material.length;t++)Sc(e,e.material[t])&&(A=!0);else Sc(e,e.material)&&(A=!0)}}),A),this.needsNormalDirty=!1),this._needsNormal}registerInstanceAndSetUuid(A){let e=A.identity.join("-"),t=this.entityIdentityToEntity[e];t&&(A.uuid=t.uuid),this.entityIdentityToEntity[e]=A,this.entityByUuid[A.uuid]=A}findInstance(A){return this.entityIdentityToEntity[A.join("-")]}getWithSortKey(A){let e=this.find(A);if(void 0===e)return;let t=[],i=e;for(;i!==this;){let r=i,s=(i=i.parent).children.indexOf(r);t.splice(0,0,s)}return{entity:e,sortKey:t}}getAllSorted(A){let e=[];for(let t of A){let i=this.getWithSortKey(t.id);void 0!==i&&e.push(i)}return e.sort((A,e)=>(function(A,e){let t=0;for(;t<A.length&&t<e.length;){if(A[t]<e[t])return -1;if(A[t]>e[t])return 1;t+=1}return t!==e.length?-1:t!==A.length?1:0})(A.sortKey,e.sortKey)),e.map(A=>A.entity)}find(A){if(""===A||void 0===A)return;let e=this.entityByUuid[A];return void 0===e?this.getObjectByProperty("uuid",A):e}debugEnsureEntity(A){let e=this.find(A);e?Array.isArray(e.identity)&&void 0===this.findInstance(e.identity)&&console.error("not found instance"):console.error("not found")}addPendingExpandCloner(A){this.toExpandCloner.add(A)}markToExpandCloner(A){this.toExpandCloner.add(A),A.traverseEntityAncestors(A=>{this.toExpandCloner.add(A)})}doPendingExpandCloner(){this.toExpandCloner.forEach(A=>{A.expandCloner(this)}),this.toExpandCloner.clear()}updateTreeByOp(A,e){if(0===A.path.length&&7===A.type){let t=null===A.parent?this:this.find(A.parent);if(void 0===t)throw Error("unexpected");let i=this.createObject(A.id,A.data,A.children,t,A.localIndex,e);i.updateVisible(),i.resetBBoxNeedsUpdate(),wQ(i)&&wq(i.parent)&&(i.invalidateUpstreamBooleanData(),i.parent.invalidateDownstreamBooleanData().recomputeBoolean()),this.markNeedsRecomputeInstancesForAncessors(t),this.markNeedsRecomputeInstancesForChildren(i),this.markToExpandCloner(i)}else if(0===A.path.length&&8===A.type){let r=this.find(A.id);if(void 0===r)throw Error("unexpected");this.markToExpandCloner(r),r.resetBBoxNeedsUpdate(),this.unregisterObject(r);let s=r.parent;this.markNeedsRecomputeInstancesForAncessors(s),this.markNeedsRecomputeInstancesForChildren(r),r.parent.remove(r),wq(r.parent)&&(r.parent.invalidateUpstreamBooleanData(),r.parent.invalidateDownstreamBooleanData().recomputeBoolean()),wQ(r)&&(r.freeBooleanPointer(),s instanceof wY&&s.invalidateDownstreamBooleanData().recomputeBoolean()),this.disposeAndUnregisterEntityRecursivelyIfNotReregistered(r)}else if(0===A.path.length&&9===A.type){let a=this.find(A.id);if(void 0===a)throw Error("unexpected");this.markNeedsRecomputeInstancesForChildren(a);let o=a.parent;this.markNeedsRecomputeInstancesForAncessors(o),a.cloner?.resetOnMove(),this.markToExpandCloner(a);let l=null===A.parent?this:this.find(A.parent);if(void 0===l)throw Error("unexpected");l.add(a),this.markNeedsRecomputeInstancesForAncessors(l),this.markToExpandCloner(a),a.invalidateClonerTransform(a),a.updateVisible(),a.resetBBoxNeedsUpdate();let h=A.localIndex;l.children.splice(h,0,l.children.pop()),wQ(a)&&(a.invalidateUpstreamBooleanData(),wq(a.parent)?a.parent.invalidateDownstreamBooleanData().recomputeBoolean():o instanceof wY&&o.invalidateDownstreamBooleanData().recomputeBoolean())}this.markNeedsUpdateRendererDirty(),this.markGeometryCacheDirty()}updateEntityByOp(A,e,t,i){if(0===e.type&&(("overrides"in e.props||"component"in e.props)&&this.markNeedsRecomputeInstances(),e.path.includes("overrides")&&"states"in e.props)){let{states:r,rest:s}=e.props;e={...e,props:s},this.markNeedsRecomputeInstances()}let a=this.find(A);if(a)try{!function(A,e,t,i){A.updateByOp(e,t,i,!1)}(a,e,t,{scene:this,shared:i})}catch(o){console.error(o)}}get enableFog(){return null!==this.fog}set enableFog(A){this.fog=!0===A?this.backupFog:null}init(A,e){if(this.createChildrenObjects(A.objects,this,e),this.personalCamera.removeFromParent(),this.add(this.personalCamera),this.ambientLight.removeFromParent(),this.add(this.ambientLight),this.setBackgroundColor(bt(A.backgroundColor,e)),this.updateFog(A.fog,e),this.updateAmbientLight(A.environment.ambientLight,e),this.activeCamera=this.personalCamera,null!==A.publish.playCamera){let t=this.find(A.publish.playCamera);t instanceof wj&&this.switchActiveCamera(t)}this.expandInstances(e,!0),this.traverseEntity(A=>{wq(A)&&A.recomputeBoolean()}),this.doPendingExpandCloner()}markNeedsRecomputeInstances(){this.needsRecomputeInstances=!0}markNeedsRecomputeInstancesForChildren(A){A.traverseEntity(A=>{("Component"===A.data.type||"Instance"===A.data.type)&&this.markNeedsRecomputeInstances()})}markNeedsRecomputeInstancesForAncessors(A){v4.is(A)&&("Component"===A.data.type&&this.markNeedsRecomputeInstances(),A.traverseAncestors(A=>{v4.is(A)&&"Component"===A.data.type&&this.markNeedsRecomputeInstances()}))}relativeizeInner(A,e,t,i,r){if("Transition"===A.data.type){let s=A.data.object;s&&s!==e.uuid&&e.find(s)&&t.forInstancesRec(e=>{e.isInstanceRoot||(e.data=dj(e.data,t=>{let s=t.events.data(r.id),a=e.goUp(i);if(a){let o=[...fl(a.identity),A.data.object].join("-"),l=this.entityIdentityToEntity[o];if(l){let h=l.uuid;s.actions.data(A.id).object=h}else console.warn("cannot find instance")}}).data)})}}rewriteEventsBeforeGoToPlayMode(){this.traverseEntity(A=>{if(A instanceof Sa&&"string"==typeof A.identity&&"Component"===A.data.type)return A.traverseEntity((e,t)=>{e.data.events.forEach(i=>{"GameControl"===i.data.type?e.forInstancesRec(A=>{A.isInstanceRoot||(A.data=dj(A.data,A=>{A.events.delete(i.id)}).data)}):"actions"in i.data&&i.data.actions.forEach(r=>{this.relativeizeInner(r,A,e,t,i)})})}),!0})}expandInstances(A,e){let t=new Set;for(let i of(this.traverseEntity(i=>{if(i instanceof Sa&&i.isInstanceRoot)return i.expandInstanceChildren({scene:this,shared:A,pendingDeletes:t}),e||i.resetBBoxNeedsUpdate(),!0}),t))this.disposeAndUnregisterEntityRecursivelyIfNotReregistered(i),So(i)}recomputeInstances(A){this.needsRecomputeInstances&&(this.needsRecomputeInstances=!1,this.traverseEntity(A=>{A instanceof Sa&&A.isInstanceRoot&&(A.component=void 0)}),this.expandInstances(A,!1))}disposeAndUnregisterEntityRecursivelyIfNotReregistered(A){A.traverseEntity(A=>{let e="string"==typeof A.identity?A.identity:A.identity.join("-");this.entityIdentityToEntity[e]===A&&(delete this.entityByUuid[A.uuid],delete this.entityIdentityToEntity[e]),A.dispose()})}clearScene(){for(let A of this.children)gM(A)&&A.disposeRecursively();this.children.length=0}resetAfterClear(A,e){this.init(A,e)}createPersonalCamera(){let A=new wj(SC.PERSONAL_CAMERA_ID,{...mS.defaultData,name:"Personal Camera"});return A.objectHelper.visible=!1,this.registerObjectCreatedInLegacy(A),A}raycast(A){let e=[],t=i=>{for(let r of i.children)gM(r)&&!r.raycastLock&&r.visible&&((wQ(r)||wJ(r)&&this.enableHelpers&&r.objectHelper.visible)&&(A.intersectObject(r,!1,e),function(A,e,t){let i=A.cloner;if(i)for(let r of i.children){let s=Sp.copy(r.matrixWorld).invert(),a=Sf.copy(e.ray).applyMatrix4(s),o=A.matrixWorld;a.applyMatrix4(o);let l=Su;l.set(a.origin,a.direction),l.near=e.near,l.far=e.far,l.intersectObject(A,!1).length>0&&t.push({object:A})}}(r,A,e)),t(r))};return t(this),e}forEachEntity(A){for(let e of this.children)gM(e)&&A(e)}traverseEntity(A){for(let e of this.children)gM(e)&&e.traverseEntity(A)}traverseVisibleEntity(A){for(let e of this.children)gM(e)&&e.visible&&e.traverseVisibleEntity(A)}updateFog(A,e){this.enableFog=A.enabled,this.fogUseBGColor=A.useBackgroundColor,A.useBackgroundColor?this.backupFog.color.set(this.bgColor):this.backupFog.color=bt(A.color,e),this.backupFog.near=A.near,this.backupFog.far=A.far}dispose(){this.clearScene()}updateAmbientLight(A,e){void 0!==A.color&&(this.ambientLight.color=bt(A.color,e)),void 0!==A.intensity&&(this.ambientLight.intensity=A.intensity),void 0!==A.groundColor&&(this.ambientLight.groundColor=bt(A.groundColor,e)),void 0!==A.enabled&&(this.ambientLight.visible=A.enabled)}switchActiveCamera(A){this.activeCamera!==this.personalCamera&&(this.activeCamera.objectHelper.visible=!0),this.activeCamera=A,A.objectHelper.visible=!1}setBackgroundColor(A){this.bgColor=A,!0===this.fogUseBGColor&&(this.backupFog.color=A)}createChildrenObjects(A,e,t){let i=0;for(let r of A)this.createObject(r.id,r.data,r.children,e,i,t),i+=1}registerObjectCreatedInLegacy(A){this.entityByUuid[A.uuid]=A}unregisterObject(A){for(let e of(delete this.entityByUuid[A.uuid],A.children))this.unregisterObject(e)}createObject(A,e,t,i,r,s){let a={scene:this,shared:s},o=Sh(A,e,a);return o&&(this.entityByUuid[A]=o,i.add(o),i.children.splice(r,0,i.children.pop()),t.length>0&&(o.isInstanceRoot?console.error("instance should not have children!"):this.createChildrenObjects(t,o,s)),o.updateState(e,a),o.updateVisible(),o.cloner&&this.toExpandCloner.add(o)),o}getCenter(A){let e=[];for(let t=0,i=A.length;t<i;++t){let{id:r,recursive:s}=A[t],a=this.find(r),o=s?a.recursiveBBox:a.singleBBox;e.push(...o.vertices)}let l=new e8;return l.setFromPoints(e),l.getCenter(ST),ST}copyMatrixWorld(A,e){if(null===A){e.identity();return}let t=this.find(A);t?e.copy(t.matrixWorld):e.identity()}copyParentMatrixWorld(A,e){if(null===A){e.identity();return}let t=this.find(A)?.parent;t?e.copy(t.matrixWorld):e.identity()}traverseMaterial(A){this.traverseEntity(e=>{if(e instanceof yQ){if(Array.isArray(e.material))for(let t=0;t<e.material.length;t++)e.material[t]instanceof bO&&A(e.material[t]);else e.material instanceof bO&&A(e.material)}})}updateCanvasSize(A,e){let t,i;this.activeCamera.setViewplaneSize(A,e),A>=e?(t=e/A,i=1):(t=1,i=A/e),this.traverseMaterial(A=>{A.getLayersOfType("transmission").forEach(A=>{A.uniforms[`f${A.id}_aspectRatio`].value.x=t,A.uniforms[`f${A.id}_aspectRatio`].value.y=i})})}},SD=SC;SD.PERSONAL_CAMERA_ID="f23858d0-4a3b-4bd8-8173-66ed0af7f6fb-personalCamera";var SP=(A,e)=>{let t=e.x-A.x,i=e.y-A.y;return Math.sqrt(t*t+i*i)},S_=(A,e)=>{let t=e.x-A.x;return SB(Math.atan2(e.y-A.y,t))},SL=(A,e,t)=>{let i={x:0,y:0};return t=SO(t),i.x=A.x-e*Math.cos(t),i.y=A.y-e*Math.sin(t),i},SO=A=>A*(Math.PI/180),SB=A=>A*(180/Math.PI),SI=A=>isNaN(A.buttons)?0!==A.pressure:0!==A.buttons,SR=new Map,SN=A=>{SR.has(A)&&clearTimeout(SR.get(A)),SR.set(A,setTimeout(A,100))},Sz=(A,e,t)=>{let i=e.split(/[ ,]+/g),r;for(let s=0;s<i.length;s+=1)r=i[s],A.addEventListener?A.addEventListener(r,t,!1):A.attachEvent&&A.attachEvent(r,t)},SF=(A,e,t)=>{let i=e.split(/[ ,]+/g),r;for(let s=0;s<i.length;s+=1)r=i[s],A.removeEventListener?A.removeEventListener(r,t):A.detachEvent&&A.detachEvent(r,t)},SU=A=>(A.preventDefault(),A.type.match(/^touch/)?A.changedTouches:A),Sk=()=>{if(!(typeof window>"u"))return{x:void 0!==window.pageXOffset?window.pageXOffset:(document.documentElement||document.body.parentNode||document.body).scrollLeft,y:void 0!==window.pageYOffset?window.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop}},SG=(A,e)=>{e.top||e.right||e.bottom||e.left?(A.style.top=e.top,A.style.right=e.right,A.style.bottom=e.bottom,A.style.left=e.left):(A.style.left=e.x+"px",A.style.top=e.y+"px")},SV=(A,e,t)=>{let i=SH(A);for(let r in i)if(i.hasOwnProperty(r)){if("string"==typeof e)i[r]=e+" "+t;else{let s="";for(let a=0,o=e.length;a<o;a+=1)s+=e[a]+" "+t+", ";i[r]=s.slice(0,-2)}}return i},Sj=(A,e)=>{let t=SH(A);for(let i in t)t.hasOwnProperty(i)&&(t[i]=e);return t},SH=A=>{let e={};return e[A]="",["webkit","Moz","o"].forEach(function(t){e[t+A.charAt(0).toUpperCase()+A.slice(1)]=""}),e},SW=(A,e)=>{for(let t in e)e.hasOwnProperty(t)&&(A[t]=e[t]);return A},SY=(A,e)=>{let t={};for(let i in A)A.hasOwnProperty(i)&&e.hasOwnProperty(i)?t[i]=e[i]:A.hasOwnProperty(i)&&(t[i]=A[i]);return t},SX=(A,e)=>{if(A.length)for(let t=0,i=A.length;t<i;t+=1)e(A[t]);else e(A)},SQ=(A,e,t)=>({x:Math.min(Math.max(A.x,e.x-t),e.x+t),y:Math.min(Math.max(A.y,e.y-t),e.y+t)});"u">typeof window&&(SK="ontouchstart"in window,SJ=!!window.PointerEvent,S$=!!window.MSPointerEvent);var Sq,SZ,SK,SJ,S$,S0,S1={touch:{start:"touchstart",move:"touchmove",end:"touchend, touchcancel"},mouse:{start:"mousedown",move:"mousemove",end:"mouseup"},pointer:{start:"pointerdown",move:"pointermove",end:"pointerup, pointercancel"},MSPointer:{start:"MSPointerDown",move:"MSPointerMove",end:"MSPointerUp"}},S2={};function S3(){}function S4(A,e){return this.identifier=e.identifier,this.position=e.position,this.frontPosition=e.frontPosition,this.collection=A,this.defaults={size:100,threshold:.1,color:"white",fadeTime:250,dataOnly:!1,restJoystick:!0,restOpacity:1,mode:"dynamic",zone:document.body,lockX:!1,lockY:!1,shape:"circle"},this.config(e),"dynamic"===this.options.mode&&(this.options.restOpacity=0),this.id=S4.id,S4.id+=1,this.buildEl().stylize(),this.instance={el:this.ui.el,on:this.on.bind(this),off:this.off.bind(this),show:this.show.bind(this),hide:this.hide.bind(this),add:this.addToDom.bind(this),remove:this.removeFromDom.bind(this),destroy:this.destroy.bind(this),setPosition:this.setPosition.bind(this),resetDirection:this.resetDirection.bind(this),computeDirection:this.computeDirection.bind(this),trigger:this.trigger.bind(this),position:this.position,frontPosition:this.frontPosition,ui:this.ui,identifier:this.identifier,id:this.id,options:this.options},this.instance}function S5(A,e){var t=this;t.nipples=[],t.idles=[],t.actives=[],t.ids=[],t.pressureIntervals={},t.manager=A,t.id=S5.id,S5.id+=1,t.defaults={zone:document.body,multitouch:!1,maxNumberOfNipples:10,mode:"dynamic",position:{top:0,left:0},catchDistance:200,size:100,threshold:.1,color:"white",fadeTime:250,dataOnly:!1,restJoystick:!0,restOpacity:1,lockX:!1,lockY:!1,shape:"circle",dynamicPage:!1,follow:!1},t.config(e),("static"===t.options.mode||"semi"===t.options.mode)&&(t.options.multitouch=!1),t.options.multitouch||(t.options.maxNumberOfNipples=1);let i=getComputedStyle(t.options.zone.parentElement);return i&&"flex"===i.display&&(t.parentIsFlex=!0),t.updateBox(),t.prepareNipples(),t.bindings(),t.begin(),t.nipples}function S6(A){var e=this;e.ids={},e.index=0,e.collections=[],e.scroll=Sk(),e.config(A),e.prepareCollections();var t=function(){var A;e.collections.forEach(function(t){t.forEach(function(t){A=t.el.getBoundingClientRect(),t.position={x:e.scroll.x+A.left,y:e.scroll.y+A.top}})})};if(typeof window>"u")return e.collections;Sz(window,"resize",function(){SN(t)});var i=function(){e.scroll=Sk()};return Sz(window,"scroll",function(){SN(i)}),e.collections}SJ?S0=S1.pointer:S$?S0=S1.MSPointer:SK?(S0=S1.touch,S2=S1.mouse):S0=S1.mouse,S3.prototype.on=function(A,e){var t,i=this,r=A.split(/[ ,]+/g);i._handlers_=i._handlers_||{};for(var s=0;s<r.length;s+=1)t=r[s],i._handlers_[t]=i._handlers_[t]||[],i._handlers_[t].push(e);return i},S3.prototype.off=function(A,e){var t=this;return t._handlers_=t._handlers_||{},void 0===A?t._handlers_={}:void 0===e?t._handlers_[A]=null:t._handlers_[A]&&t._handlers_[A].indexOf(e)>=0&&t._handlers_[A].splice(t._handlers_[A].indexOf(e),1),t},S3.prototype.trigger=function(A,e){var t,i=this,r=A.split(/[ ,]+/g);i._handlers_=i._handlers_||{};for(var s=0;s<r.length;s+=1)t=r[s],i._handlers_[t]&&i._handlers_[t].length&&i._handlers_[t].forEach(function(A){A.call(i,{type:t,target:i},e)})},S3.prototype.config=function(A){var e=this;e.options=e.defaults||{},A&&(e.options=SY(e.options,A))},S3.prototype.bindEvt=function(A,e){var t=this;return t._domHandlers_=t._domHandlers_||{},t._domHandlers_[e]=function(){"function"==typeof t["on"+e]?t["on"+e].apply(t,arguments):console.warn('[WARNING] : Missing "on'+e+'" handler.')},Sz(A,S0[e],t._domHandlers_[e]),S2[e]&&Sz(A,S2[e],t._domHandlers_[e]),t},S3.prototype.unbindEvt=function(A,e){var t=this;return t._domHandlers_=t._domHandlers_||{},SF(A,S0[e],t._domHandlers_[e]),S2[e]&&SF(A,S2[e],t._domHandlers_[e]),delete t._domHandlers_[e],this},S4.prototype=new S3,S4.constructor=S4,S4.id=0,S4.prototype.buildEl=function(A){return this.ui={},this.options.dataOnly||(this.ui.el=document.createElement("div"),this.ui.back=document.createElement("div"),this.ui.front=document.createElement("div"),this.ui.el.className="nipple collection_"+this.collection.id,this.ui.back.className="back",this.ui.front.className="front",this.ui.el.setAttribute("id","nipple_"+this.collection.id+"_"+this.id),this.ui.el.appendChild(this.ui.back),this.ui.el.appendChild(this.ui.front)),this},S4.prototype.stylize=function(){if(this.options.dataOnly)return this;var A=this.options.fadeTime+"ms",e=Sj("borderRadius","50%"),t=SV("transition","opacity",A),i={};return i.el={position:"absolute",opacity:this.options.restOpacity,display:"block",zIndex:999},i.back={position:"absolute",display:"block",width:this.options.size+"px",height:this.options.size+"px",marginLeft:-this.options.size/2+"px",marginTop:-this.options.size/2+"px",background:"rgba(255, 255, 255, .4)",border:"solid 2px rgba(0, 0, 0, .1)"},i.front={width:this.options.size/2+"px",height:this.options.size/2+"px",position:"absolute",display:"block",marginLeft:-this.options.size/4+"px",marginTop:-this.options.size/4+"px",background:"rgba(255, 255, 255, .8)",border:"solid 2px rgba(0, 0, 0, .1)"},SW(i.el,t),"circle"===this.options.shape&&SW(i.back,e),SW(i.front,e),this.applyStyles(i),this},S4.prototype.applyStyles=function(A){for(var e in this.ui)if(this.ui.hasOwnProperty(e))for(var t in A[e])this.ui[e].style[t]=A[e][t];return this},S4.prototype.addToDom=function(){return this.options.dataOnly||document.body.contains(this.ui.el)||this.options.zone.appendChild(this.ui.el),this},S4.prototype.removeFromDom=function(){return this.options.dataOnly||!document.body.contains(this.ui.el)||this.options.zone.removeChild(this.ui.el),this},S4.prototype.destroy=function(){clearTimeout(this.removeTimeout),clearTimeout(this.showTimeout),clearTimeout(this.restTimeout),this.trigger("destroyed",this.instance),this.removeFromDom(),this.off()},S4.prototype.show=function(A){var e=this;return e.options.dataOnly||(clearTimeout(e.removeTimeout),clearTimeout(e.showTimeout),clearTimeout(e.restTimeout),e.addToDom(),e.restCallback(),setTimeout(function(){e.ui.el.style.opacity=1},0),e.showTimeout=setTimeout(function(){e.trigger("shown",e.instance),"function"==typeof A&&A.call(this)},e.options.fadeTime)),e},S4.prototype.hide=function(A){var e=this;if(e.options.dataOnly)return e;if(e.ui.el.style.opacity=e.options.restOpacity,clearTimeout(e.removeTimeout),clearTimeout(e.showTimeout),clearTimeout(e.restTimeout),e.removeTimeout=setTimeout(function(){var t="dynamic"===e.options.mode?"none":"block";e.ui.el.style.display=t,"function"==typeof A&&A.call(e),e.trigger("hidden",e.instance)},e.options.fadeTime),e.options.restJoystick){let t=e.options.restJoystick,i={};i.x=!0===t||!1!==t.x?0:e.instance.frontPosition.x,i.y=!0===t||!1!==t.y?0:e.instance.frontPosition.y,e.setPosition(A,i)}return e},S4.prototype.setPosition=function(A,e){var t=this;t.frontPosition={x:e.x,y:e.y};var i=t.options.fadeTime+"ms",r={};r.front=SV("transition",["top","left"],i);var s={front:{}};s.front={left:t.frontPosition.x+"px",top:t.frontPosition.y+"px"},t.applyStyles(r),t.applyStyles(s),t.restTimeout=setTimeout(function(){"function"==typeof A&&A.call(t),t.restCallback()},t.options.fadeTime)},S4.prototype.restCallback=function(){var A={};A.front=SV("transition","none",""),this.applyStyles(A),this.trigger("rested",this.instance)},S4.prototype.resetDirection=function(){this.direction={x:!1,y:!1,angle:!1}},S4.prototype.computeDirection=function(A){var e,t,i,r=A.angle.radian,s=Math.PI/4,a=Math.PI/2;if(r>s&&r<3*s&&!A.lockX?e="up":r>-s&&r<=s&&!A.lockY?e="left":r>-(3*s)&&r<=-s&&!A.lockX?e="down":A.lockY||(e="right"),A.lockY||(t=r>-a&&r<a?"left":"right"),A.lockX||(i=r>0?"up":"down"),A.force>this.options.threshold){var o,l={};for(o in this.direction)this.direction.hasOwnProperty(o)&&(l[o]=this.direction[o]);var h={};for(o in this.direction={x:t,y:i,angle:e},A.direction=this.direction,l)l[o]===this.direction[o]&&(h[o]=!0);if(h.x&&h.y&&h.angle)return A;h.x&&h.y||this.trigger("plain",A),h.x||this.trigger("plain:"+t,A),h.y||this.trigger("plain:"+i,A),h.angle||this.trigger("dir dir:"+e,A)}else this.resetDirection();return A},S5.prototype=new S3,S5.constructor=S5,S5.id=0,S5.prototype.prepareNipples=function(){var A=this.nipples;A.on=this.on.bind(this),A.off=this.off.bind(this),A.options=this.options,A.destroy=this.destroy.bind(this),A.ids=this.ids,A.id=this.id,A.processOnMove=this.processOnMove.bind(this),A.processOnEnd=this.processOnEnd.bind(this),A.get=function(e){if(void 0===e)return A[0];for(var t=0,i=A.length;t<i;t+=1)if(A[t].identifier===e)return A[t];return!1}},S5.prototype.bindings=function(){var A=this;A.bindEvt(A.options.zone,"start"),A.options.zone.style.touchAction="none",A.options.zone.style.msTouchAction="none"},S5.prototype.begin=function(){var A=this.options;if("static"===A.mode){var e=this.createNipple(A.position,this.manager.getIdentifier());e.add(),this.idles.push(e)}},S5.prototype.createNipple=function(A,e){var t=this.manager.scroll,i={},r=this.options,s={x:this.parentIsFlex?t.x:t.x+this.box.left,y:this.parentIsFlex?t.y:t.y+this.box.top};if(A.x&&A.y)i={x:A.x-s.x,y:A.y-s.y};else if(A.top||A.right||A.bottom||A.left){var a=document.createElement("DIV");a.style.display="hidden",a.style.top=A.top,a.style.right=A.right,a.style.bottom=A.bottom,a.style.left=A.left,a.style.position="absolute",r.zone.appendChild(a);var o=a.getBoundingClientRect();r.zone.removeChild(a),i=A,A={x:o.left+t.x,y:o.top+t.y}}var l=new S4(this,{color:r.color,size:r.size,threshold:r.threshold,fadeTime:r.fadeTime,dataOnly:r.dataOnly,restJoystick:r.restJoystick,restOpacity:r.restOpacity,mode:r.mode,identifier:e,position:A,zone:r.zone,frontPosition:{x:0,y:0},shape:r.shape});return r.dataOnly||(SG(l.ui.el,i),SG(l.ui.front,l.frontPosition)),this.nipples.push(l),this.trigger("added "+l.identifier+":added",l),this.manager.trigger("added "+l.identifier+":added",l),this.bindNipple(l),l},S5.prototype.updateBox=function(){var A=this;A.box=A.options.zone.getBoundingClientRect()},S5.prototype.bindNipple=function(A){var e,t=this,i=function(A,i){e=A.type+" "+i.id+":"+A.type,t.trigger(e,i)};A.on("destroyed",t.onDestroyed.bind(t)),A.on("shown hidden rested dir plain",i),A.on("dir:up dir:right dir:down dir:left",i),A.on("plain:up plain:right plain:down plain:left",i)},S5.prototype.pressureFn=function(A,e,t){var i=this,r=0;clearInterval(i.pressureIntervals[t]),i.pressureIntervals[t]=setInterval((function(){var t=A.force||A.pressure||A.webkitForce||0;t!==r&&(e.trigger("pressure",t),i.trigger("pressure "+e.identifier+":pressure",t),r=t)}).bind(i),100)},S5.prototype.onstart=function(A){var e=this,t=e.options,i=A;return A=SU(A),e.updateBox(),SX(A,function(r){e.actives.length<t.maxNumberOfNipples?e.processOnStart(r):i.type.match(/^touch/)&&(Object.keys(e.manager.ids).forEach(function(t){if(0>Object.values(i.touches).findIndex(function(A){return A.identifier===t})){var r=[A[0]];r.identifier=t,e.processOnEnd(r)}}),e.actives.length<t.maxNumberOfNipples&&e.processOnStart(r))}),e.manager.bindDocument(),!1},S5.prototype.processOnStart=function(A){var e,t=this,i=t.options,r=t.manager.getIdentifier(A),s=A.force||A.pressure||A.webkitForce||0,a={x:A.pageX,y:A.pageY},o=t.getOrCreate(r,a);o.identifier!==r&&t.manager.removeIdentifier(o.identifier),o.identifier=r;var l=function(e){e.trigger("start",e),t.trigger("start "+e.id+":start",e),e.show(),s>0&&t.pressureFn(A,e,e.identifier),t.processOnMove(A)};if((e=t.idles.indexOf(o))>=0&&t.idles.splice(e,1),t.actives.push(o),t.ids.push(o.identifier),"semi"!==i.mode)l(o);else if(SP(a,o.position)<=i.catchDistance)l(o);else{o.destroy(),t.processOnStart(A);return}return o},S5.prototype.getOrCreate=function(A,e){var t,i=this.options;return/(semi|static)/.test(i.mode)?(t=this.idles[0])?(this.idles.splice(0,1),t):"semi"===i.mode?this.createNipple(e,A):(console.warn("Coudln't find the needed nipple."),!1):t=this.createNipple(e,A)},S5.prototype.processOnMove=function(A){var e=this.options,t=this.manager.getIdentifier(A),i=this.nipples.get(t),r=this.manager.scroll;if(!SI(A)){this.processOnEnd(A);return}if(!i){console.error("Found zombie joystick with ID "+t),this.manager.removeIdentifier(t);return}if(e.dynamicPage){var s=i.el.getBoundingClientRect();i.position={x:r.x+s.left,y:r.y+s.top}}i.identifier=t;var a=i.options.size/2,o={x:A.pageX,y:A.pageY};e.lockX&&(o.y=i.position.y),e.lockY&&(o.x=i.position.x);var l,h,c=SP(o,i.position),d=S_(o,i.position),u=SO(d),p=c/a,f={distance:c,position:o};if("circle"===i.options.shape?(l=Math.min(c,a),h=SL(i.position,l,d)):l=SP(h=SQ(o,i.position,a),i.position),e.follow){if(c>a){let m=o.x-h.x,g=o.y-h.y;i.position.x+=m,i.position.y+=g,i.el.style.top=i.position.y-(this.box.top+r.y)+"px",i.el.style.left=i.position.x-(this.box.left+r.x)+"px",c=SP(o,i.position)}}else o=h,c=l;var v=o.x-i.position.x,y=o.y-i.position.y;i.frontPosition={x:v,y:y},e.dataOnly||SG(i.ui.front,i.frontPosition);var x={identifier:i.identifier,position:o,force:p,pressure:A.force||A.pressure||A.webkitForce||0,distance:c,angle:{radian:u,degree:d},vector:{x:v/a,y:-y/a},raw:f,instance:i,lockX:e.lockX,lockY:e.lockY};(x=i.computeDirection(x)).angle={radian:SO(180-d),degree:180-d},i.trigger("move",x),this.trigger("move "+i.id+":move",x)},S5.prototype.processOnEnd=function(A){var e=this,t=e.options,i=e.manager.getIdentifier(A),r=e.nipples.get(i),s=e.manager.removeIdentifier(r.identifier);!r||(t.dataOnly||r.hide(function(){"dynamic"===t.mode&&(r.trigger("removed",r),e.trigger("removed "+r.id+":removed",r),e.manager.trigger("removed "+r.id+":removed",r),r.destroy())}),clearInterval(e.pressureIntervals[r.identifier]),r.resetDirection(),r.trigger("end",r),e.trigger("end "+r.id+":end",r),e.ids.indexOf(r.identifier)>=0&&e.ids.splice(e.ids.indexOf(r.identifier),1),e.actives.indexOf(r)>=0&&e.actives.splice(e.actives.indexOf(r),1),/(semi|static)/.test(t.mode)?e.idles.push(r):e.nipples.indexOf(r)>=0&&e.nipples.splice(e.nipples.indexOf(r),1),e.manager.unbindDocument(),/(semi|static)/.test(t.mode)&&(e.manager.ids[s.id]=s.identifier))},S5.prototype.onDestroyed=function(A,e){this.nipples.indexOf(e)>=0&&this.nipples.splice(this.nipples.indexOf(e),1),this.actives.indexOf(e)>=0&&this.actives.splice(this.actives.indexOf(e),1),this.idles.indexOf(e)>=0&&this.idles.splice(this.idles.indexOf(e),1),this.ids.indexOf(e.identifier)>=0&&this.ids.splice(this.ids.indexOf(e.identifier),1),this.manager.removeIdentifier(e.identifier),this.manager.unbindDocument()},S5.prototype.destroy=function(){for(var A in this.unbindEvt(this.options.zone,"start"),this.nipples.forEach(function(A){A.destroy()}),this.pressureIntervals)this.pressureIntervals.hasOwnProperty(A)&&clearInterval(this.pressureIntervals[A]);this.trigger("destroyed",this.nipples),this.manager.unbindDocument(),this.off()},S6.prototype=new S3,S6.constructor=S6,S6.prototype.prepareCollections=function(){var A=this;A.collections.create=A.create.bind(A),A.collections.on=A.on.bind(A),A.collections.off=A.off.bind(A),A.collections.destroy=A.destroy.bind(A),A.collections.get=function(e){var t;return A.collections.every(function(A){return!(t=A.get(e))}),t}},S6.prototype.create=function(A){return this.createCollection(A)},S6.prototype.createCollection=function(A){var e=new S5(this,A);return this.bindCollection(e),this.collections.push(e),e},S6.prototype.bindCollection=function(A){var e,t=this,i=function(A,i){e=A.type+" "+i.id+":"+A.type,t.trigger(e,i)};A.on("destroyed",t.onDestroyed.bind(t)),A.on("shown hidden rested dir plain",i),A.on("dir:up dir:right dir:down dir:left",i),A.on("plain:up plain:right plain:down plain:left",i)},S6.prototype.bindDocument=function(){var A=this;A.binded||(A.bindEvt(document,"move").bindEvt(document,"end"),A.binded=!0)},S6.prototype.unbindDocument=function(A){var e=this;Object.keys(e.ids).length&&!0!==A||(e.unbindEvt(document,"move").unbindEvt(document,"end"),e.binded=!1)},S6.prototype.getIdentifier=function(A){var e;return A?void 0===(e=void 0===A.identifier?A.pointerId:A.identifier)&&(e=this.latest||0):e=this.index,void 0===this.ids[e]&&(this.ids[e]=this.index,this.index+=1),this.latest=e,this.ids[e]},S6.prototype.removeIdentifier=function(A){var e={};for(var t in this.ids)if(this.ids[t]===A){e.id=t,e.identifier=this.ids[t],delete this.ids[t];break}return e},S6.prototype.onmove=function(A){return this.onAny("move",A),!1},S6.prototype.onend=function(A){return this.onAny("end",A),!1},S6.prototype.oncancel=function(A){return this.onAny("end",A),!1},S6.prototype.onAny=function(A,e){var t,i=this,r="processOn"+A.charAt(0).toUpperCase()+A.slice(1);e=SU(e);var s=function(A,e,t){t.ids.indexOf(e)>=0&&(t[r](A),A._found_=!0)};return SX(e,function(A){t=i.getIdentifier(A),SX(i.collections,s.bind(null,A,t)),A._found_||i.removeIdentifier(t)}),!1},S6.prototype.destroy=function(){var A=this;A.unbindDocument(!0),A.ids={},A.index=0,A.collections.forEach(function(A){A.destroy()}),A.off()},S6.prototype.onDestroyed=function(A,e){if(0>this.collections.indexOf(e))return!1;this.collections.splice(this.collections.indexOf(e),1)};var S8=new S6,S9={create:function(A){return S8.create(A)},factory:S8},S7=eh(ed());function MA(A,e){let t=new ig;if(!A.getAttribute("position"))return t.setAttribute("position",new io([],3)),t.setIndex([]),t;let{positions:i,triIndices:r}=yw(A.getAttribute("position"),A.getIndex());return t.setAttribute("position",new io(i,3)),t.setIndex(r),e&&t.applyMatrix4(e),t}var Me=new tE,Mt=new tE,Mi=[[0,0,0],[0,0,0],[0,0,0]];function Mr(A){let e=A.elements;Mi[0][0]=e[0],Mi[0][1]=e[4],Mi[0][2]=e[8],Mi[1][0]=e[1],Mi[1][1]=e[5],Mi[1][2]=e[9],Mi[2][0]=e[2],Mi[2][1]=e[6],Mi[2][2]=e[10];let{u:t,v:i}=(0,S7.SVD)(Mi),r=Me.set(t[0][0],t[0][1],t[0][2],0,t[1][0],t[1][1],t[1][2],0,t[2][0],t[2][1],t[2][2],0,0,0,0,1),s=Mt.set(i[0][0],i[0][1],i[0][2],0,i[1][0],i[1][1],i[1][2],0,i[2][0],i[2][1],i[2][2],0,0,0,0,1);return r.multiply(s.transpose())}var Ms=class extends aK{constructor(){super(),this.layers.enable(3),this.layers.enable(8)}setFromCamera(A,e){e.isOrthographicCamera?(this.ray.origin.set(A.x,A.y,-1).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):e.isPerspectiveCamera?(this.ray.origin.set(A.x,A.y,-1).unproject(e),this.ray.direction.set(A.x,A.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):console.error("Raycaster: Unsupported camera type.")}intersectVisibleObjects(A,e=!0,t=[]){return A.forEach(A=>{A.visible&&this.intersectObject(A,e,t)}),t}createRaycastLineHelper(){let A=new nh({color:65280,linewidth:10}),e=new e4(this.ray.origin.x,this.ray.origin.y,this.ray.origin.z),t=new e4(this.ray.direction.x,this.ray.direction.y,this.ray.direction.z),i=this.camera.far-this.camera.near,r=new e4().addVectors(e,t.multiplyScalar(i)),s=new ig;return s.setFromPoints([e,r]),new nm(s,A)}},Mn=A=>A instanceof w0||A instanceof Sa;function Ma(A,e){return A.distance-e.distance}function Mo(A,e,t){if(!t.some(e=>void 0!==Mh(A,e)))return[];let i=[];return e.children.forEach(e=>(function A(e,t,i){if(!(!gM(t)||!t.visible||t.raycastLock))for(let r of(wQ(t)&&t.raycast(e,i),t.children))A(e,r,i)})(A,e,i)),i.sort(Ma),i}function Ml(A){let e=[];if(A.length){let t=A[0].object;gM(t)&&e.push(t);let i=t.parent;for(;i;)Mn(i)&&e.push(i),i=i.parent}return e}function Mh(A,e){if(wQ(e)){if(!e.raycastLock&&e.visible){let t=[];return e.raycast(A,t),t.length?t[0]:void 0}}else if(Mn(e))return function A(e,t){if(!(!gM(t)||!t.visible||t.raycastLock)){if(wQ(t)){let i=[];if(t.raycast(e,i),i.length)return i[0]}for(let r of t.children){let s=A(e,r);if(s)return s}}}(A,e)}function Mc(A){let e=A.getViewport(new e$),t=function(A){if(""!==A.style.transform){let e=getComputedStyle(A).getPropertyValue("transform");if("none"!==e){let t=e.replace("matrix(","").split(",");return{x:parseFloat(t[0]),y:parseFloat(t[3])}}}return{x:1,y:1}}(A.domElement);return{left:e.x*t.x,top:e.y*t.y,width:e.z*t.x,height:e.w*t.y}}var Md=class{constructor(A,e,t,i,r,s){this.isExport=s,this.raycaster=new Ms,this.raycasterNeedsUpdate=!0,this.stopRaycast=!1,this.sharedAssets=new bK(mI.emptyData()),this.scene=new SD({...mB.defaultData},this.sharedAssets),this.camera=new wj,this.renderer=A,this.domElement=A.domElement,this._domRect=this.domElement.getBoundingClientRect(),this._viewRect=Mc(this.renderer),this.stopRaycast=r,this.sharedAssets=i,this.scene=e,this.camera=t}get domRect(){return this._domRect}get viewRect(){return this._viewRect}updaterRect(){this._domRect=this.domElement.getBoundingClientRect(),this._viewRect=Mc(this.renderer)}updateRaycaster(A){var e,t;let i,r,s;if(!this.raycasterNeedsUpdate)return;this.raycasterNeedsUpdate=!1;let{pageX:a,pageY:o}=void 0!==A.touches&&A.touches.length>0?A.touches[0]:A;this.raycaster.setFromCamera((e=this._domRect,t=this._viewRect,i=e.height-t.height,r=(a-t.left-e.left)*(e.width/t.width),s=(o-i+t.top-e.top)*(e.height/t.height),{x:r/e.width*2-1,y:-(2*(s/e.height))+1}),this.camera)}},Mu=((En=Mu||{})[En.keydown=0]="keydown",En[En.keyup=1]="keyup",En[En.pointerdown=2]="pointerdown",En[En.pointerup=3]="pointerup",En[En.pointermove=4]="pointermove",En[En.wheel=5]="wheel",En),Mp=class{constructor(A){this.eventContext=A,this.domEventsNeeded=new Set,this.hasVideoAction=!1}connect(){}disconnect(){}},Mf=new Map,Mm=new Map,Mg=class{constructor(A,e,t,i){this.data=e;let{audio:r,volume:s,delay:a,loop:o}=e;if(!r)throw Error("Missing property");let l="string"==typeof r?i.getAudio(r).src:r.data;this.audioPlayer=new bU({src:l,volume:s,delay:a,loop:o}),Mm.has(t.uuid)?Mm.get(t.uuid).push(this):Mm.set(t.uuid,[this]),Mf.set(A,this)}playByToggle(){"stop"===this.data.toggle?"playing"===this.audioPlayer.status?this.audioPlayer.stop():(this.audioPlayer.stop(),this.audioPlayer.play()):"pause"===this.data.toggle?"playing"===this.audioPlayer.status?this.audioPlayer.pause():this.audioPlayer.play():(this.audioPlayer.stop(),this.audioPlayer.play())}dispose(){this.audioPlayer.stop()}},Mv=class{constructor(A){this.data=A}dispatch(){this.data.playAudio?this.pauseAudio(this.data.playAudio):this.data.object?this.pauseAllAudiosFromObject(this.data.object):this.pauseAllAudios()}pauseAudio(A){let e=Mf.get(A);e&&(this.data.delay>0?(this.disposeDelay(),this.timeoutId=window.setTimeout(()=>{e.audioPlayer[this.data.interaction](),this.disposeDelay()},this.data.delay)):e.audioPlayer[this.data.interaction]())}pauseAllAudiosFromObject(A){let e=Mm.get(A);e?.length&&(this.data.delay>0?(this.disposeDelay(),this.timeoutId=window.setTimeout(()=>{e.forEach(A=>A.audioPlayer[this.data.interaction]()),this.disposeDelay()},this.data.delay)):e.forEach(A=>A.audioPlayer[this.data.interaction]()))}pauseAllAudios(){let A=[...Mm.values()];A.length&&(this.data.delay>0?(this.disposeDelay(),this.timeoutId=window.setTimeout(()=>{A.forEach(A=>{A.forEach(A=>{A.audioPlayer[this.data.interaction]()})}),this.disposeDelay()},this.data.delay)):A.forEach(A=>{A.forEach(A=>{A.audioPlayer[this.data.interaction]()})}))}disposeDelay(){clearTimeout(this.timeoutId),delete this.timeoutId}dispose(){clearTimeout(this.timeoutId),delete this.timeoutId}},My=class{constructor(A,e,t,i){if(this.data=e,"play"===e.interaction)this.interaction=new Mg(A,e,t,i);else if("pause"===e.interaction||"stop"===e.interaction)this.interaction=new Mv(e);else throw Error("Missing property")}dispatchBasic(){this.interaction instanceof Mg?this.interaction.playByToggle():this.interaction.dispatch()}dispatchConditional(){this.interaction instanceof Mg?this.interaction.audioPlayer.play():this.interaction.dispatch()}dispatchGameControl(A){this.interaction instanceof Mg&&("start"===A?this.interaction.audioPlayer.play():this.interaction.audioPlayer.stop())}dispose(){this.interaction.dispose()}},Mx=new Map,Mb=new Map,Mw=class{constructor(A,e,t){let i;this.data=e,this.delay=0,this.status="stopped";let{layerId:r,loop:s,volume:a,delay:o}=e;if(this.object=t,void 0===r)throw Error("Missing property");let l=(i=t.material.layers.find(A=>A.uuid===r)).color.texture.image.img instanceof HTMLVideoElement?i.color.texture.image.img:void 0;if(l)this.videoElement=l,this.videoElement.loop=s===1/0,this.videoElement.autoplay=!0,this.videoElement.pause(),void 0!==a&&(this.videoElement.volume=a);else throw Error("Missing property");void 0!==o&&(this.delay=o),Mb.has(t.uuid)?Mb.get(t.uuid).push(this):Mb.set(t.uuid,[this]),Mx.set(A,this),"autoplay"===e.triggerAfter?this.videoElement.muted=!0:this.videoElement.muted=!1}play(){this.delayTimerId=window.setTimeout(()=>{this.videoElement.play(),this.clearDelay()},this.delay),this.status="playing"}clearDelay(){this.delayTimerId&&(clearTimeout(this.delayTimerId),delete this.delayTimerId)}pause(){this.videoElement.pause(),this.status="paused"}stop(){this.videoElement.pause(),this.videoElement.currentTime=0,this.status="stopped",this.clearDelay()}playByToggle(){"stop"===this.data.toggle?"playing"===this.status?this.stop():(this.stop(),this.play()):"pause"===this.data.toggle?"playing"===this.status?this.pause():this.play():(this.stop(),this.play())}dispose(){this.stop(),this.videoElement.muted=!0}},MS=class{constructor(A){this.data=A}dispatch(){this.data.playVideo?this.pauseVideo(this.data.playVideo):this.data.object?this.pauseAllVideosFromObject(this.data.object):this.pauseAllVideos()}pauseVideo(A){let e=Mx.get(A);e&&(this.data.delay>0?(this.disposeDelay(),this.timeoutId=window.setTimeout(()=>{e[this.data.interaction](),this.disposeDelay()},this.data.delay)):e[this.data.interaction]())}pauseAllVideosFromObject(A){let e=Mb.get(A);e?.length&&(this.data.delay>0?(this.disposeDelay(),this.timeoutId=window.setTimeout(()=>{e.forEach(A=>A[this.data.interaction]()),this.disposeDelay()},this.data.delay)):e.forEach(A=>A[this.data.interaction]()))}pauseAllVideos(){let A=[...Mb.values()];A.length&&(this.data.delay>0?(this.disposeDelay(),this.timeoutId=window.setTimeout(()=>{A.forEach(A=>{A.forEach(A=>{A[this.data.interaction]()})}),this.disposeDelay()},this.data.delay)):A.forEach(A=>{A.forEach(A=>{A[this.data.interaction]()})}))}disposeDelay(){clearTimeout(this.timeoutId),delete this.timeoutId}dispose(){clearTimeout(this.timeoutId),delete this.timeoutId}},MM=class{constructor(A,e,t){if(this.data=e,"play"===e.interaction)this.interaction=new Mw(A,e,t);else if("pause"===e.interaction||"stop"===e.interaction)this.interaction=new MS(e);else throw Error("Missing property")}dispatchBasic(){this.interaction instanceof Mw?this.interaction.playByToggle():this.interaction.dispatch()}dispatchConditional(){this.interaction instanceof Mw?this.interaction.play():this.interaction.dispatch()}dispose(){this.interaction.dispose()}},ME=(A,e)=>e.some(e=>e instanceof RegExp?e.test(A):e===A),MT=(A,{stripHash:e})=>{let t=/^data:(?<type>[^,]*?),(?<data>[^#]*?)(?:#(?<hash>.*))?$/.exec(A);if(!t)throw Error(`Invalid URL: ${A}`);let{type:i,data:r,hash:s}=t.groups,a=i.split(";");s=e?"":s;let o=!1;"base64"===a[a.length-1]&&(a.pop(),o=!0);let l=(a.shift()||"").toLowerCase(),h=[...a.map(A=>{let[e,t=""]=A.split("=").map(A=>A.trim());return"charset"===e&&"us-ascii"===(t=t.toLowerCase())?"":`${e}${t?`=${t}`:""}`}).filter(Boolean)];return o&&h.push("base64"),(h.length>0||l&&"text/plain"!==l)&&h.unshift(l),`data:${h.join(";")},${o?r.trim():r}${s?`#${s}`:""}`},MC=class{constructor({url:A,context:e}){if(!A)throw Error("Missing property");this.url=A.startsWith("mailto:")?A:function(A,e){if(e={defaultProtocol:"http:",normalizeProtocol:!0,forceHttp:!1,forceHttps:!1,stripAuthentication:!0,stripHash:!1,stripTextFragment:!0,stripWWW:!0,removeQueryParameters:[/^utm_\w+/i],removeTrailingSlash:!0,removeSingleSlash:!0,removeDirectoryIndex:!1,sortQueryParameters:!0,...e},A=A.trim(),/^data:/i.test(A))return MT(A,e);if(/^view-source:/i.test(A))throw Error("`view-source:` is not supported as it is a non-standard protocol");let t=A.startsWith("//");!t&&/^\.*\//.test(A)||(A=A.replace(/^(?!(?:\w+:)?\/\/)|^\/\//,e.defaultProtocol));let i=new URL(A);if(e.forceHttp&&e.forceHttps)throw Error("The `forceHttp` and `forceHttps` options cannot be used together");if(e.forceHttp&&"https:"===i.protocol&&(i.protocol="http:"),e.forceHttps&&"http:"===i.protocol&&(i.protocol="https:"),e.stripAuthentication&&(i.username="",i.password=""),e.stripHash?i.hash="":e.stripTextFragment&&(i.hash=i.hash.replace(/#?:~:text.*?$/i,"")),i.pathname){let r=/\b[a-z][a-z\d+\-.]{1,50}:\/\//g,s=0,a="";for(;;){let o=r.exec(i.pathname);if(!o)break;let l=o[0],h=o.index,c=i.pathname.slice(s,h);a+=c.replace(/\/{2,}/g,"/")+l,s=h+l.length}let d=i.pathname.slice(s,i.pathname.length);a+=d.replace(/\/{2,}/g,"/"),i.pathname=a}if(i.pathname)try{i.pathname=decodeURI(i.pathname)}catch{}if(!0===e.removeDirectoryIndex&&(e.removeDirectoryIndex=[/^index\.[a-z]+$/]),Array.isArray(e.removeDirectoryIndex)&&e.removeDirectoryIndex.length>0){let u=i.pathname.split("/");ME(u[u.length-1],e.removeDirectoryIndex)&&(u=u.slice(0,-1),i.pathname=u.slice(1).join("/")+"/")}if(i.hostname&&(i.hostname=i.hostname.replace(/\.$/,""),e.stripWWW&&/^www\.(?!www\.)[a-z\-\d]{1,63}\.[a-z.\-\d]{2,63}$/.test(i.hostname)&&(i.hostname=i.hostname.replace(/^www\./,""))),Array.isArray(e.removeQueryParameters))for(let p of[...i.searchParams.keys()])ME(p,e.removeQueryParameters)&&i.searchParams.delete(p);if(!0===e.removeQueryParameters&&(i.search=""),e.sortQueryParameters){i.searchParams.sort();try{i.search=decodeURIComponent(i.search)}catch{}}e.removeTrailingSlash&&(i.pathname=i.pathname.replace(/\/$/,""));let f=A;return A=i.toString(),e.removeSingleSlash||"/"!==i.pathname||f.endsWith("/")||""!==i.hash||(A=A.replace(/\/$/,"")),(e.removeTrailingSlash||"/"===i.pathname)&&""===i.hash&&e.removeSingleSlash&&(A=A.replace(/\/$/,"")),t&&!e.normalizeProtocol&&(A=A.replace(/^http:\/\//,"//")),e.stripProtocol&&(A=A.replace(/^(?:https?:)?\/\//,"")),A}(A),this.context=e??"tab"}dispatch(){fr?window.location.assign(this.url):"tab"===this.context?window.open(this.url,"_blank"):"window"===this.context?window.open(this.url,"_blank",`width=${window.innerWidth}, height=${window.innerHeight}`):window.location.assign(this.url)}},MD={update:null,begin:null,loopBegin:null,changeBegin:null,change:null,changeComplete:null,loopComplete:null,complete:null,loop:1,direction:"normal",autoplay:!0,timelineOffset:0,rewind:!0},MP={duration:1e3,delay:0,endDelay:0,easing:"easeOutElastic(1, .5)",round:0},M_=["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY","perspective","matrix","matrix3d"],ML={CSS:{},springs:{}};function MO(A,e,t){return Math.min(Math.max(A,e),t)}function MB(A,e){return A.indexOf(e)>-1}function MI(A,e){return A.apply(null,e)}var MR={arr:function(A){return Array.isArray(A)},obj:function(A){return MB(Object.prototype.toString.call(A),"Object")},pth:function(A){return MR.obj(A)&&A.hasOwnProperty("totalLength")},svg:function(A){return A instanceof SVGElement},inp:function(A){return A instanceof HTMLInputElement},dom:function(A){return!("isNode"in A)&&(A.nodeType||MR.svg(A))},str:function(A){return"string"==typeof A},fnc:function(A){return"function"==typeof A},und:function(A){return typeof A>"u"},hex:function(A){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(A)},rgb:function(A){return/^rgb/.test(A)},hsl:function(A){return/^hsl/.test(A)},col:function(A){return MR.hex(A)||MR.rgb(A)||MR.hsl(A)},key:function(A){return!MD.hasOwnProperty(A)&&!MP.hasOwnProperty(A)&&"targets"!==A&&"keyframes"!==A}};function MN(A){var e=/\(([^)]+)\)/.exec(A);return e?e[1].split(",").map(function(A){return parseFloat(A)}):[]}function Mz(A,e){var t=MN(A),i=MO(MR.und(t[0])?1:t[0],.1,100),r=MO(MR.und(t[1])?100:t[1],.1,100),s=MO(MR.und(t[2])?10:t[2],.1,100),a=MO(MR.und(t[3])?0:t[3],.1,100),o=Math.sqrt(r/i),l=s/(2*Math.sqrt(r*i)),h=l<1?o*Math.sqrt(1-l*l):0,c=l<1?(l*o+-a)/h:-a+o;function d(A){var t=e?e*A/1e3:A;return t=l<1?Math.exp(-t*l*o)*(1*Math.cos(h*t)+c*Math.sin(h*t)):(1+c*t)*Math.exp(-t*o),0===A||1===A?A:1-t}return e?d:function(){var e=ML.springs[A];if(e)return e;for(var t=1/6,i=0,r=0;;)if(1===d(i+=t)){if(++r>=16)break}else r=0;var s=i*t*1e3;return ML.springs[A]=s,s}}function MF(A){return void 0===A&&(A=10),function(e){return Math.ceil(MO(e,1e-6,1)*A)*(1/A)}}var MU=function(){function A(A,e,t){return(((1-3*t+3*e)*A+(3*t-6*e))*A+3*e)*A}function e(A,e,t){return 3*(1-3*t+3*e)*A*A+2*(3*t-6*e)*A+3*e}return function(t,i,r,s){if(0<=t&&t<=1&&0<=r&&r<=1){var a=new Float32Array(11);if(t!==i||r!==s)for(var o=0;o<11;++o)a[o]=A(.1*o,t,r);return function(o){return t===i&&r===s||0===o||1===o?o:A(function(i){for(var s=0,o=1;10!==o&&a[o]<=i;++o)s+=.1;var l=s+(i-a[--o])/(a[o+1]-a[o])*.1,h=e(l,t,r);return h>=.001?function(t,i,r,s){for(var a=0;a<4;++a){var o=e(i,r,s);if(0===o)break;var l=A(i,r,s)-t;i-=l/o}return i}(i,l,t,r):0===h?l:function(e,t,i,r,s){var a,o,l=0;do(a=A(o=t+(i-t)/2,r,s)-e)>0?i=o:t=o;while(Math.abs(a)>1e-7&&++l<10);return o}(i,s,s+.1,t,r)}(o),i,s)}}}}(),Mk=(Ea={linear:function(){return function(A){return A}}},Eo={Sine:function(){return function(A){return 1-Math.cos(A*Math.PI/2)}},Circ:function(){return function(A){return 1-Math.sqrt(1-A*A)}},Back:function(){return function(A){return A*A*(3*A-2)}},Bounce:function(){return function(A){for(var e,t=4;A<((e=Math.pow(2,--t))-1)/11;);return 1/Math.pow(4,3-t)-7.5625*Math.pow((3*e-2)/22-A,2)}},Elastic:function(A,e){void 0===A&&(A=1),void 0===e&&(e=.5);var t=MO(A,1,10),i=MO(e,.1,2);return function(A){return 0===A||1===A?A:-t*Math.pow(2,10*(A-1))*Math.sin((A-1-i/(2*Math.PI)*Math.asin(1/t))*(2*Math.PI)/i)}}},["Quad","Cubic","Quart","Quint","Expo"].forEach(function(A,e){Eo[A]=function(){return function(A){return Math.pow(A,e+2)}}}),Object.keys(Eo).forEach(function(A){var e=Eo[A];Ea["easeIn"+A]=e,Ea["easeOut"+A]=function(A,t){return function(i){return 1-e(A,t)(1-i)}},Ea["easeInOut"+A]=function(A,t){return function(i){return i<.5?e(A,t)(2*i)/2:1-e(A,t)(-2*i+2)/2}}}),Ea);function MG(A,e){if(MR.fnc(A))return A;var t=A.split("(")[0],i=Mk[t],r=MN(A);switch(t){case"spring":return Mz(A,e);case"cubicBezier":return MI(MU,r);case"steps":return MI(MF,r);default:return MI(i,r)}}function MV(A){try{return document.querySelectorAll(A)}catch{return}}function Mj(A,e){for(var t=A.length,i=arguments.length>=2?arguments[1]:void 0,r=[],s=0;s<t;s++)if(s in A){var a=A[s];e.call(i,a,s,A)&&r.push(a)}return r}function MH(A){return A.reduce(function(A,e){return A.concat(MR.arr(e)?MH(e):e)},[])}function MW(A){return MR.arr(A)?A:(MR.str(A)&&(A=MV(A)||A),A instanceof NodeList||A instanceof HTMLCollection?[].slice.call(A):[A])}function MY(A,e){return A.some(function(A){return A===e})}function MX(A){var e={};for(var t in A)e[t]=A[t];return e}function MQ(A,e){var t=MX(A);for(var i in A)t[i]=e.hasOwnProperty(i)?e[i]:A[i];return t}function Mq(A,e){var t=MX(A);for(var i in e)t[i]=MR.und(A[i])?e[i]:A[i];return t}function MZ(A){var e=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(A);if(e)return e[1]}function MK(A,e){return MR.fnc(A)?A(e.target,e.id,e.total):A}function MJ(A,e){return A.getAttribute(e)}function M$(A,e,t){if(MY([t,"deg","rad","turn"],MZ(e)))return e;var i=ML.CSS[e+t];if(!MR.und(i))return i;var r=document.createElement(A.tagName),s=A.parentNode&&A.parentNode!==document?A.parentNode:document.body;s.appendChild(r),r.style.position="absolute",r.style.width=100+t;var a=100/r.offsetWidth;s.removeChild(r);var o=a*parseFloat(e);return ML.CSS[e+t]=o,o}function M0(A,e,t){if(e in A.style){var i=e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),r=A.style[e]||getComputedStyle(A).getPropertyValue(i)||"0";return t?M$(A,r,t):r}}function M1(A,e){return MR.dom(A)&&!MR.inp(A)&&(MJ(A,e)||MR.svg(A)&&A[e])?"attribute":MR.dom(A)&&MY(M_,e)?"transform":MR.dom(A)&&"transform"!==e&&M0(A,e)?"css":null!=A[e]?"object":void 0}function M2(A){if(MR.dom(A)){for(var e,t=A.style.transform||"",i=/(\w+)\(([^)]*)\)/g,r=new Map;e=i.exec(t);)r.set(e[1],e[2]);return r}}function M3(A,e,t,i){switch(M1(A,e)){case"transform":var r,s,a;return r=i,s=MB(e,"scale")?1:0+(MB(e,"translate")||"perspective"===e?"px":MB(e,"rotate")||MB(e,"skew")?"deg":void 0),a=M2(A).get(e)||s,r&&(r.transforms.list.set(e,a),r.transforms.last=e),t?M$(A,a,t):a;case"css":return M0(A,e,t);case"attribute":return MJ(A,e);default:return A[e]||0}}function M4(A,e){var t=/^(\*=|\+=|-=)/.exec(A);if(!t)return A;var i=MZ(A)||0,r=parseFloat(e),s=parseFloat(A.replace(t[0],""));switch(t[0][0]){case"+":return r+s+i;case"-":return r-s+i;case"*":return r*s+i}}function M5(A,e){if(MR.col(A)){var t,i,r,s;return t=A,MR.rgb(t)?(i=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(t))?"rgba("+i[1]+",1)":t:MR.hex(t)?(r=t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,function(A,e,t,i){return e+e+t+t+i+i}),"rgba("+parseInt((s=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(r))[1],16)+","+parseInt(s[2],16)+","+parseInt(s[3],16)+",1)"):MR.hsl(t)?function(A){var e,t,i,r=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(A)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(A),s=parseInt(r[1],10)/360,a=parseInt(r[2],10)/100,o=parseInt(r[3],10)/100,l=r[4]||1;function h(A,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?A+(e-A)*6*t:t<.5?e:t<2/3?A+(e-A)*(2/3-t)*6:A}if(0==a)e=t=i=o;else{var c=o<.5?o*(1+a):o+a-o*a,d=2*o-c;e=h(d,c,s+1/3),t=h(d,c,s),i=h(d,c,s-1/3)}return"rgba("+255*e+","+255*t+","+255*i+","+l+")"}(t):void 0}if(/\s/g.test(A))return A;var a=MZ(A),o=a?A.substr(0,A.length-a.length):A;return e?o+e:o}function M6(A,e){return Math.sqrt(Math.pow(e.x-A.x,2)+Math.pow(e.y-A.y,2))}function M8(A){for(var e,t=A.points,i=0,r=0;r<t.numberOfItems;r++){var s=t.getItem(r);r>0&&(i+=M6(e,s)),e=s}return i}function M9(A){var e;if(A.getTotalLength)return A.getTotalLength();switch(A.tagName.toLowerCase()){case"circle":return 2*Math.PI*MJ(A,"r");case"rect":return 2*MJ(A,"width")+2*MJ(A,"height");case"line":return M6({x:MJ(A,"x1"),y:MJ(A,"y1")},{x:MJ(A,"x2"),y:MJ(A,"y2")});case"polyline":return M8(A);case"polygon":return e=A.points,M8(A)+M6(e.getItem(e.numberOfItems-1),e.getItem(0))}}function M7(A,e){var t=e||{},i=t.el||function(A){for(var e=A.parentNode;MR.svg(e)&&MR.svg(e.parentNode);)e=e.parentNode;return e}(A),r=i.getBoundingClientRect(),s=MJ(i,"viewBox"),a=r.width,o=r.height,l=t.viewBox||(s?s.split(" "):[0,0,a,o]);return{el:i,viewBox:l,x:l[0]/1,y:l[1]/1,w:a/l[2],h:o/l[3]}}function EA(A,e){var t=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,i=M5(MR.pth(A)?A.totalLength:A,e)+"";return{original:i,numbers:i.match(t)?i.match(t).map(Number):[0],strings:MR.str(A)||e?i.split(t):[]}}function Ee(A){return Mj(A?MH(MR.arr(A)?A.map(MW):MW(A)):[],function(A,e,t){return t.indexOf(A)===e})}function Et(A){var e=Ee(A);return e.map(function(A,t){return{target:A,id:t,total:e.length,transforms:{list:M2(A)}}})}var Ei={css:function(A,e,t){return A.style[e]=t},attribute:function(A,e,t){return A.setAttribute(e,t)},object:function(A,e,t){return A[e]=t},transform:function(A,e,t,i,r){if(i.list.set(e,t),e===i.last||r){var s="";i.list.forEach(function(A,e){s+=e+"("+A+") "}),A.style.transform=s}}};function Er(A,e){Et(A).forEach(function(A){for(var t in e){var i=MK(e[t],A),r=A.target,s=MZ(i),a=M3(r,t,s,A),o=s||MZ(a),l=M4(M5(i,o),a);Ei[M1(r,t)](r,t,l,A.transforms,!0)}})}function Es(A,e){var t=A.length,i=function(A){return A.timelineOffset?A.timelineOffset:0},r={};return r.duration=t?Math.max.apply(Math,A.map(function(A){return i(A)+A.duration})):e.duration,r.delay=t?Math.min.apply(Math,A.map(function(A){return i(A)+A.delay})):e.delay,r.endDelay=t?r.duration-Math.max.apply(Math,A.map(function(A){return i(A)+A.duration-A.endDelay})):e.endDelay,r}var En,Ea,Eo,El,Eh=0,Ec=[],Ed=[],Eu=function(){function A(){El=requestAnimationFrame(e)}function e(e){var t=Ec.length;if(t){for(var i=0;i<t;){var r=Ec[i];if(r.paused){var s=Ec.indexOf(r);s>-1&&(Ec.splice(s,1),t=Ec.length)}else r.tick(e);i++}A()}else El=cancelAnimationFrame(El)}return A}();function Ep(A){void 0===A&&(A={});var e,t,i,r,s,a,o,l,h,c=0,d=0,u=0,p=0,f=null;function m(A){var e=window.Promise&&new Promise(function(A){return f=A});return A.finished=e,e}var g=(t=MQ(MD,e=A),r=function(A,e){var t=[],i=e.keyframes;for(var r in i&&(e=Mq(function(A){for(var e=Mj(MH(A.map(function(A){return Object.keys(A)})),function(A){return MR.key(A)}).reduce(function(A,e){return 0>A.indexOf(e)&&A.push(e),A},[]),t={},i=0;i<e.length;i++)!function(i){var r=e[i];t[r]=A.map(function(A){var e={};for(var t in A)MR.key(t)?t==r&&(e.value=A[t]):e[t]=A[t];return e})}(i);return t}(i),e)),e)MR.key(r)&&t.push({name:r,tweens:function(A,e){var t=MX(e);if(/^spring/.test(t.easing)&&(t.duration=Mz(t.easing)),MR.arr(A)){var i=A.length;2!==i||MR.obj(A[0])?MR.fnc(e.duration)||(t.duration=e.duration/i):A={value:A}}var r=MR.arr(A)?A:[A];return r.map(function(A,t){var i=MR.obj(A)&&!MR.pth(A)?A:{value:A};return MR.und(i.delay)&&(i.delay=t?0:e.delay),MR.und(i.endDelay)&&(i.endDelay=t===r.length-1?e.endDelay:0),i}).map(function(A){return Mq(A,t)})}(e[r],A)});return t}(i=MQ(MP,e),e),o=Es(a=Mj(MH((s=Et(e.targets)).map(function(A){return r.map(function(e){return function(A,e){var t=M1(A.target,e.name);if(t){var i,r=e.tweens.map(function(t){var r=function(A,e){var t={};for(var i in A){var r=MK(A[i],e);MR.arr(r)&&1===(r=r.map(function(A){return MK(A,e)})).length&&(r=r[0]),t[i]=r}return t.duration=parseFloat(t.duration),t.delay=parseFloat(t.delay),t}(t,A),s=r.value,a=MR.arr(s)?s[1]:s,o=MZ(a),l=M3(A.target,e.name,o,A),h=i?i.to.original:l,c=MR.arr(s)?s[0]:h,d=MZ(c)||MZ(l),u=o||d;return MR.und(a)&&(a=h),r.from=EA(c,u),r.to=EA(M4(a,c),u),r.start=i?i.end:0,r.end=r.start+r.delay+r.duration+r.endDelay,r.easing=MG(r.easing,r.duration),r.isPath=MR.pth(s),r.isColor=MR.col(r.from.original),r.isColor&&(r.round=1),i=r,r}),s=r[r.length-1];return{type:t,property:e.name,animatable:A,tweens:r,duration:s.end,delay:r[0].delay,endDelay:s.endDelay}}}(A,e)})})),function(A){return!MR.und(A)}),i),l=Eh,Eh++,Mq(t,{id:l,children:[],animatables:s,animations:a,duration:o.duration,delay:o.delay,endDelay:o.endDelay}));function v(){var A=g.direction;"alternate"!==A&&(g.direction="normal"!==A?"normal":"reverse"),g.reversed=!g.reversed,h.forEach(function(A){return A.reversed=g.reversed})}function y(A){return g.reversed?g.duration-A:A}function x(){c=0,d=y(g.currentTime)*(1/Ep.speed)}function b(A,e){e&&e.seek(A-e.timelineOffset)}function w(A){var e=0,t=g.animations,i=t.length;for(!0===g.reversePlayback&&!1===g.rewind&&(A=g.duration+g.delay-g.endDelay-A);e<i;){var r=t[e],s=r.animatable,a=r.tweens,o=a.length-1,l=a[o];o&&(l=Mj(a,function(e){return A<e.end})[0]||l);for(var h=MO(A-l.start-l.delay,0,l.duration)/l.duration,c=isNaN(h)?1:l.easing(h),d=l.to.strings,u=l.round,p=[],f=l.to.numbers.length,m=void 0,v=0;v<f;v++){var y=void 0;if(!0===g.reversePlayback&&!1===g.rewind)var x=l.to.numbers[v],b=l.from.numbers[v]||0;else var b=l.to.numbers[v],x=l.from.numbers[v]||0;y=l.isPath?function(A,e){function t(t){void 0===t&&(t=0);var i=e+t>=1?e+t:0;return A.el.getPointAtLength(i)}var i=M7(A.el,A.svg),r=t(),s=t(-1),a=t(1);switch(A.property){case"x":return(r.x-i.x)*i.w;case"y":return(r.y-i.y)*i.h;case"angle":return 180*Math.atan2(a.y-s.y,a.x-s.x)/Math.PI}}(l.value,c*b):x+c*(b-x),u&&(l.isColor&&v>2||(y=Math.round(y*u)/u)),p.push(y)}var w=d.length;if(w){m=d[0];for(var S=0;S<w;S++){d[S];var M=d[S+1],E=p[S];isNaN(E)||(M?m+=E+M:m+=E+" ")}}else m=p[0];Ei[r.type](s.target,r.property,m,s.transforms),r.currentValue=m,e++}}function S(A){g[A]&&!g.passThrough&&g[A](g)}function M(A){var e=g.duration,t=g.delay,i=e-g.endDelay,r=y(A);g.progress=MO(r/e*100,0,100),g.reversePlayback=r<g.currentTime,h&&function(A){if(g.reversePlayback)for(var e=p;e--;)b(A,h[e]);else for(var t=0;t<p;t++)b(A,h[t])}(r),!g.began&&g.currentTime>=0&&(g.began=!0,S("begin")),!g.loopBegan&&g.currentTime>0&&(g.loopBegan=!0,S("loopBegin")),r<=t&&0!==g.currentTime&&(w(0),S("change")),(r>=i&&g.currentTime!==e||!e)&&(w(e),S("change")),r>t&&r<i?(g.changeBegan||(g.changeBegan=!0,g.changeCompleted=!1,S("changeBegin")),S("change"),w(r)):g.changeBegan?(g.changeCompleted=!0,g.changeBegan=!1,S("change"),S("changeComplete")):g.began&&r>i&&(S("change"),S("changeComplete")),g.currentTime=MO(r,0,e),g.began&&S("update"),A>=e&&(d=0,g.remaining&&!0!==g.remaining&&g.remaining--,g.remaining?(c=u,S("loopComplete"),g.loopBegan=!1,"alternate"===g.direction&&v()):(g.paused=!0,g.completed||(g.completed=!0,S("loopComplete"),S("complete"),!g.passThrough&&"Promise"in window&&(f(),m(g)))))}return m(g),g.reset=function(){var A=g.direction;g.passThrough=!1,g.currentTime=0,g.progress=0,g.paused=!0,g.began=!1,g.loopBegan=!1,g.changeBegan=!1,g.completed=!1,g.changeCompleted=!1,g.reversePlayback=!1,g.reversed="reverse"===A,g.remaining=g.loop,p=(h=g.children).length;for(var e=p;e--;)g.children[e].reset();(g.reversed&&!0!==g.loop||"alternate"===A&&1===g.loop)&&g.remaining++,w(g.reversed?g.duration:0)},g.set=function(A,e){return Er(A,e),g},g.tick=function(A){u=A,c||(c=u),M((u+(d-c))*Ep.speed)},g.seek=function(A){M(y(A))},g.pause=function(){g.paused=!0,x()},g.play=function(){!g.paused||(g.completed&&g.reset(),g.paused=!1,Ec.push(g),x(),El||Eu())},g.reverse=function(){v(),g.completed=!g.reversed,x()},g.restart=function(){g.reset(),g.play()},g.reset(),g.autoplay&&g.play(),g}function Ef(A,e){for(var t=e.length;t--;)MY(A,e[t].animatable.target)&&e.splice(t,1)}"u">typeof document&&document.addEventListener("visibilitychange",function(){document.hidden?(Ec.forEach(function(A){return A.pause()}),Ed=Ec.slice(0),Ep.running=Ec=[]):Ed.forEach(function(A){return A.play()})}),Ep.version="3.2.0",Ep.speed=1,Ep.running=Ec,Ep.remove=function(A){for(var e=Ee(A),t=Ec.length;t--;){var i=Ec[t],r=i.animations,s=i.children;Ef(e,r);for(var a=s.length;a--;){var o=s[a],l=o.animations;Ef(e,l),l.length||o.children.length||s.splice(a,1)}r.length||s.length||i.pause()}},Ep.get=M3,Ep.set=Er,Ep.convertPx=M$,Ep.path=function(A,e){var t=MR.str(A)?MV(A)[0]:A,i=e||100;return function(A){return{property:A,el:t,svg:M7(t),totalLength:M9(t)*(i/100)}}},Ep.setDashoffset=function(A){var e=M9(A);return A.setAttribute("stroke-dasharray",e),e},Ep.stagger=function(A,e){void 0===e&&(e={});var t=e.direction||"normal",i=e.easing?MG(e.easing):null,r=e.grid,s=e.axis,a=e.from||0,o="first"===a,l="center"===a,h="last"===a,c=MR.arr(A),d=parseFloat(c?A[0]:A),u=c?parseFloat(A[1]):0,p=MZ(c?A[1]:A)||0,f=e.start||0+(c?d:0),m=[],g=0;return function(A,e,v){if(o&&(a=0),l&&(a=(v-1)/2),h&&(a=v-1),!m.length){for(var y=0;y<v;y++){if(r){var x=l?(r[0]-1)/2:a%r[0],b=l?(r[1]-1)/2:Math.floor(a/r[0]),w=y%r[0],S=Math.floor(y/r[0]),M=x-w,E=b-S,T=Math.sqrt(M*M+E*E);"x"===s&&(T=-M),"y"===s&&(T=-E),m.push(T)}else m.push(Math.abs(a-y));g=Math.max.apply(Math,m)}i&&(m=m.map(function(A){return i(A/g)*g})),"reverse"===t&&(m=m.map(function(A){return s?A<0?-1*A:-A:Math.abs(g-A)}))}return f+(c?(u-d)/g:d)*(Math.round(100*m[e])/100)+p}},Ep.timeline=function(A){void 0===A&&(A={});var e=Ep(A);return e.duration=0,e.add=function(t,i){var r=Ec.indexOf(e),s=e.children;function a(A){A.passThrough=!0}r>-1&&Ec.splice(r,1);for(var o=0;o<s.length;o++)a(s[o]);var l=Mq(t,MQ(MP,A));l.targets=l.targets||A.targets;var h=e.duration;l.autoplay=!1,l.direction=e.direction,l.timelineOffset=MR.und(i)?h:M4(i,h),a(e),l.rewind=e.rewind,e.seek(l.timelineOffset);var c=Ep(l);a(c),s.push(c);var d=Es(s,A);return e.delay=d.delay,e.endDelay=d.endDelay,e.duration=d.duration,e.seek(0),e.reset(),e.autoplay&&e.play(),e},e},Ep.easing=MG,Ep.penner=Mk,Ep.random=function(A,e){return Math.floor(Math.random()*(e-A+1))+A};var Em=new e4,Eg=new e4,Ev=new e3;function Ey(A,e,t,i,r){let s=t[A]?t[A]:void 0,a=i[A];if(null==a)return;let o=s??e[A];if(o!==a)return{update:t=>{let i=eP.lerp(o,a,t);r?e[A]=Math.trunc(i):e[A]=i},start:()=>{e[A]=o},end:()=>{e[A]=a}}}function Ex(A,e,t,i,r){let s=t[A]?t[A]:void 0,a=i[A];if(!a)return;let o=e[A],l=[...s??o],h=[...a];if(!(l.length!==h.length||dA(l,h)))return{update:t=>{l.forEach((i,s)=>{let a=eP.lerp(i,h[s],t);e[A][s]=r?Math.trunc(a):a})},start:()=>{Object.assign(e[A],l)},end:()=>{Object.assign(e[A],h)}}}function Eb(A,e,t,i){let r=t[A]?t[A]:void 0,s=i[A];if(!s)return;let a=e[A],o=r?new e4().fromArray(r):a.clone(),l=new e4().fromArray(s);if(!o.equals(l))return{update:A=>{a.lerpVectors(o,l,A)},start:()=>{a.copy(o)},end:()=>{a.copy(l)}}}function Ew(A,e,t,i){let r=[];for(let s of A.layers){let a=e.layers?.data(s.uuid),o=t.layers.data(s.uuid);if(o&&(s.visible??!0)&&(o.visible??!0))for(let l of s.getNames().filter(A=>!fA.some(e=>A.includes(e))))try{let h=s.getValue(l),c;if("colors"===l)c=function(A,e,t,i="colors"){if(!A.hasValue(i)||!(i in t))return;let r=[],s=A.getValue(i),a=e?e[i]:s.map(A=>A.toArray()),o=t[i];for(let l=0;l<s.length;++l){let h=[...a[l]],c=[...o[l]];pW.isEqual(h,c)||r.push({update:A=>{s[l].fromArray(pW.lerp(h,c,A))},start:()=>{s[l].fromArray(h)},end:()=>{s[l].fromArray(c)}})}return r.length?r:void 0}(s,a,o,l);else if(Array.isArray(h))"steps"===l&&(c=function(A,e,t,i="steps"){if(!A.hasValue(i)||!(i in t))return;let r=[],s=A.getValue(i),a=e?e[i]:s,o=t[i];for(let l=0;l<s.length;++l){let h=a[l],c=o[l];h!==c&&r.push({update:A=>{s[l]=eP.lerp(h,c,A)},start:()=>{s[l]=h},end:()=>{s[l]=c}})}return r.length?r:void 0}(s,a,o,l));else if("number"==typeof h)c=function(A,e,t,i){if(!A.hasValue(i)||!(i in t))return;let r=e?e[i]:A.getValue(i),s=t[i];if(r!==s)return{update:e=>{A.setValue(i,eP.lerp(r,s,e))},start:()=>{A.setValue(i,r)},end:()=>{A.setValue(i,s)}}}(s,a,o,l);else{if("boolean"==typeof h)continue;h instanceof e_?c=function(A,e,t,i){if(!A.hasValue(i)||!(i in t))return;let r=A.getValue(i),s=e?new e_().fromArray(e[i]):r.clone(),a=new e_().fromArray(t[i]);if(!s.equals(a))return{update:A=>{r.lerpVectors(s,a,A)},start:()=>{r.copy(s)},end:()=>{r.copy(a)}}}(s,a,o,l):h instanceof e4?c=function(A,e,t,i){if(!A.hasValue(i)||!(i in t))return;let r=A.getValue(i),s=e?new e4().fromArray(e[i]):r.clone(),a=new e4().fromArray(t[i]);if(!s.equals(a))return{update:A=>{r.lerpVectors(s,a,A)},start:()=>{r.copy(s)},end:()=>{r.copy(a)}}}(s,a,o,l):h instanceof y3?c=function(A,e,t,i,r){if(!A.hasValue(i)||!(i in t))return;let s=e?e[i]:void 0,a=t[i],o=A.getValue(i),l=s?"string"==typeof s?r.getColor(s).clone():new eY().setRGB(s.r,s.g,s.b):o.clone(),h="string"==typeof a?r.getColor(a).clone():new y3(a.r,a.g,a.b,a.a);if(l.equals(h))return;let c=o.clone();return A.setValue(i,c),{update:A=>{c.lerpColors(l,h,A)},start:()=>{c.copy(l)},end:()=>{c.copy(h)}}}(s,a,o,l,i):h instanceof eY?c=function(A,e,t,i,r){if(!A.hasValue(i)||!(i in t))return;let s=e?e[i]:void 0,a=t[i],o=A.getValue(i),l=s?"string"==typeof s?r.getColor(s).clone():new eY().setRGB(s.r,s.g,s.b):o.clone(),h="string"==typeof a?r.getColor(a).clone():new eY().setRGB(a.r,a.g,a.b);if(l.equals(h))return;let c=o.clone();return A.setValue(i,c),{update:A=>{c.lerpColors(l,h,A)},start:()=>{c.copy(l)},end:()=>{c.copy(h)}}}(s,a,o,l,i):"isTexture"in h&&(c=function(A,e,t,i="texture"){if(!A.hasValue(i)||!(i in t))return;let r=A.getNode("mat");if(!r)return;let s=e?e[i]:r,a=t[i],o=[...s.repeat],l=[...s.offset],h=[...a.repeat],c=[...a.offset];if(!pj.isEqual(o,h)||!pj.isEqual(l,c))return{update:A=>{r.repeat=pj.lerp(o,h,A),r.offset=pj.lerp(l,c,A),r.updateMatrix()},start:()=>{r.repeat=[...o],r.offset=[...l],r.updateMatrix()},end:()=>{r.repeat=[...h],r.offset=[...c],r.updateMatrix()}}}(s,a,o,l))}c&&(Array.isArray(c)?r.push(...c):r.push(c))}catch(d){console.error(`lerpMaterial: unexpected material layer for ${l}`,d)}}return r}var ES=new e4,EM=new tR;function EE(A,e,t,i){return"number"==typeof e[A]?Ey(A,e,t??{},i):Array.isArray(e[A])?Ex(A,e,t??{},i):void 0}function ET(A,e,t,i,r){let s=[];return A.data.visible&&s.push(...function(A,e,t,i){let r=[],s=Eb("position",A,e,t);s&&r.push(s);let a=Eb("scale",A,e,t);a&&r.push(a);let o=function(A,e,t,i){let r=e?.rotation?e.rotation:void 0,s=t.rotation;if(!s)return;let a=r?new e4().fromArray(r):new e4().setFromEuler(A.rotation),o=new e4().fromArray(s);if(a.equals(o))return;let l=ES.subVectors(o,a);if(!(i&&l.toArray().every(A=>Math.abs(A)<2*Math.PI)))return{update:e=>{ES.lerpVectors(a,o,e),A.rotation.setFromVector3(ES)},start:()=>{A.rotation.setFromVector3(a)},end:()=>{A.rotation.setFromVector3(o)}};{let h=new e3().setFromEuler(EM.setFromVector3(a)),c=new e3().setFromEuler(EM.setFromVector3(o));return{update:e=>{!function(A,e,t,i){if(0===i)return t.copy(A);if(1===i)return t.copy(e);let r=A.w*e.w+A.x*e.x+A.y*e.y+A.z*e.z;if(r>=1)return t.copy(A);let s=1-r*r;if(s<=Number.EPSILON){let a=1-i;return t.w=a*A.w+i*e.w,t.x=a*A.x+i*e.x,t.y=a*A.y+i*e.y,t.z=a*A.z+i*e.z,t.normalize()}let o=Math.sqrt(s),l=Math.atan2(o,r),h=Math.sin((1-i)*l)/o,c=Math.sin(i*l)/o;t.w=A.w*h+e.w*c,t.x=A.x*h+e.x*c,t.y=A.y*h+e.y*c,t.z=A.z*h+e.z*c}(h,c,A.quaternion,e)},start:()=>{A.rotation.setFromVector3(a)},end:()=>{A.rotation.setFromVector3(o)}}}}(A,e,t,i);o&&r.push(o);let l=function(A,e,t,i){let r=t[A]?t[A]:void 0,s=i[A];if(!s)return;let a=e[A],o=r?new tE().fromArray(r):a.clone(),l=new e4,h=new e3,c=new e4;o.decompose(l,h,c);let d=new tE().fromArray(s),u=new e4,p=new e3,f=new e4;if(d.decompose(u,p,f),!o.equals(d))return{update:A=>{Ev.slerpQuaternions(h,p,A),Em.lerpVectors(l,u,A),Eg.lerpVectors(c,f,A),a.compose(Em,Ev,Eg)},start:()=>{a.compose(l,h,c)},end:()=>{a.compose(u,p,f)}}}("hiddenMatrix",A,e,t);if(l&&r.push(l),s||a||o||l){let h=()=>{A.updateMatrix(),A.parent?.matrixWorldFusedFalse&&(A.matrixWorld.multiplyMatrices(A.parent.matrixWorldFusedFalse,A.matrix),A.matrixWorldNeedsUpdate=!1),wQ(A)&&wq(A.parent)&&A.invalidateDownstreamBooleanData(!0)};r.push({update:h,start:h,end:h})}return r}(A,e,t,r)),A.data.visible&&s.push(...function(A,e,t){let i=[];if(!("cloner"in t)||!A.cloner)return i;let r=A.cloner,s="cloner"in e?e.cloner:{},a=t.cloner;pn.forEach(A=>{let e;(e="count"===A?Ey("count",r.parameters,s,a,!0):EE(A,r.parameters,s??{},a))&&i.push(e)});let o=function(A,e,t){if("radial"!==A.parameters.type)return;let i=e.radial,r=t.radial;if(!r)return;let s=A.parameters.radial,a=[];return pa.forEach(A=>{let e=EE(A,s,i??{},r);e&&a.push(e)}),a}(r,s,a);o?.length&&i.push(...o);let l=function(A,e,t){if("linear"!==A.parameters.type)return;let i=e.linear,r=t.linear;if(!r)return;let s=[],a=A.parameters.linear;return po.forEach(A=>{let e=EE(A,a,i??{},r);e&&s.push(e)}),s}(r,s,a);l?.length&&i.push(...l);let h=function(A,e,t){if("grid"!==A.parameters.type)return;let i=e.grid,r=t.grid;if(!r)return;let s=[],a=A.parameters.grid;return pl.forEach(A=>{let e;(e="count"===A?Ex(A,a,i??{},r,!0):EE(A,a,i??{},r))&&s.push(e)}),s}(r,s,a);h?.length&&i.push(...h);let c=function(A,e,t){if("toObject"!==A.parameters.type)return;let i=e.toObject,r=t.toObject;if(!r)return;let s=[],a=A.parameters.toObject;return ph.forEach(A=>{let e;(e="count"===A?Ey(A,a,i??{},r,!0):EE(A,a,i??{},r))&&s.push(e)}),s}(r,s,a);c?.length&&i.push(...c);let d=function(A,e,t){if(!A.parameters.randomness)return;let i=e.randomnessObject,r=t.randomnessObject;if(!r)return;let s=[],a=A.parameters.randomnessObject;return pc.forEach(A=>{let e=EE(A,a,i??{},r);e&&s.push(e)}),s}(r,s,a);return d?.length&&i.push(...d),i.length&&i.push({update:()=>{r.update()}}),i}(A,e,t)),wQ(A)?(A instanceof b$&&A.data.visible&&s.push(...function(A,e,t,i){let r=[];if(!("geometry"in t))return r;let s="geometry"in e?e.geometry:{},a=t.geometry;if(A instanceof b7){let o=s.scaleBaked??A.data.geometry.scaleBaked,l=a.scaleBaked??A.data.geometry.scaleBaked;return pH.isEqual(o,l)||r.push({update:e=>{A.updateGeometryInteractions({scaleBaked:[eP.lerp(o[0],l[0],e),eP.lerp(o[1],l[1],e),eP.lerp(o[2],l[2],e)]},i),A.invalidateDownstreamBooleanData()},start:()=>{A.updateGeometryInteractions({scaleBaked:o},i),A.invalidateDownstreamBooleanData()},end:()=>{A.updateGeometryInteractions({scaleBaked:l},i),A.invalidateDownstreamBooleanData()}}),r}let{width:h,height:c,depth:d}=s,{width:u,height:p,depth:f}=a;if(void 0!==u||void 0!==p||void 0!==f){let{width:m,height:g,depth:v}=A.geometry.userData.parameters,y=h??m,x=c??g,b=d??v,w=u??m,S=p??g,M=f??v;(y!==w||x!==S||b!==M)&&r.push({update:e=>{A.updateGeometryInteractions({width:eP.lerp(y,w,e),height:eP.lerp(x,S,e),depth:eP.lerp(b,M,e)},i),A.invalidateDownstreamBooleanData()},start:()=>{A.updateGeometryInteractions({width:y,height:x,depth:b},i),A.invalidateDownstreamBooleanData()},end:()=>{A.updateGeometryInteractions({width:w,height:S,depth:M},i),A.invalidateDownstreamBooleanData()}})}return r}(A,e,t,i)),A.data.visible&&s.push(...function(A,e,t,i){let r=[];if(Array.isArray(A.material)){if(!("materials"in t&&t.materials))return r;let s="materials"in e&&e.materials?e.materials:[],a=t.materials;A.material.forEach((A,e)=>{if(!a[e])return;let t=s[e]??{},o=a[e];"string"==typeof t||"string"==typeof o||r.push(...Ew(A,t,o,i))})}else{if(!("material"in t&&t.material))return r;let o="material"in e&&e.material?e.material:{},l=t.material;if("string"==typeof o||"string"==typeof l)return r;r.push(...Ew(A.material,o,l,i))}return r}(A,e,t,i))):wK(A)?A.data.visible&&s.push(...function(A,e,t,i){let r=[];if(void 0!==t.intensity){let s=Ey("intensity",A,e,t);s&&r.push(s)}if(void 0!==t.color){let a=function(A,e,t,i,r){let s=t[A]?t[A]:void 0,a=i[A];if(!a)return;let o=e[A],l=s?"string"==typeof s?r.getColor(s).clone():new eY().setRGB(s.r,s.g,s.b):o.clone(),h="string"==typeof a?r.getColor(a).clone():new eY().setRGB(a.r,a.g,a.b);if(l.equals(h))return;let c=o.clone();return e[A]=c,{update:A=>{c.lerpColors(l,h,A)},start:()=>{c.copy(l)},end:()=>{c.copy(h)}}}("color",A,e,t,i);a&&r.push(a)}return r}(A,e,t,i)):wZ(A)&&s.push(...function(A,e,t){let i=[],r="OrthographicCamera"===A.cameraType?e.orthographic?.zoom:e.perspective?.zoom,s="OrthographicCamera"===A.cameraType?t.orthographic?.zoom:t.perspective?.zoom;if(void 0!==s){let a=r??A.zoom;a!==s&&i.push({update:e=>{A.zoom=eP.lerp(a,s,e),A.updateProjectionMatrix()},start:()=>{A.zoom=a,A.updateProjectionMatrix()},end:()=>{A.zoom=s,A.updateProjectionMatrix()}})}if(void 0!==t.targetOffset){let o=Ey("targetOffset",A,e,t);o&&i.push(o)}return i}(A,e,t)),s.length?{update:A=>{s.forEach(e=>e.update(A))},start:A=>{s.forEach(e=>e.start?.(A))},end:A=>{s.forEach(e=>e.end?.(A))}}:void 0}var EC=new e4,ED=new e3,EP=class{constructor(A,e,t,i,r,s,a){this.object=A,this.data=i,this.sharedAssets=r,this.allowSlerp=s,this.id=a,this.targets={t:0},this.firstLoop=!0,this.reverse=!1,this._changeBegan=!1,this._changeCompleted=!0,this.onChange=()=>{this.callback&&(this.callback.update(this.targets.t),this.object.dispatchEvent({type:"requestRender"})),0===this.targets.t?this._changeCompleted||(this._changeCompleted=!0,this._changeBegan=!1,this.onChangeComplete()):1===this.targets.t?this._changeCompleted||(this._changeCompleted=!0,this._changeBegan=!1,this.onChangeComplete()):(this._changeCompleted&&(this._changeCompleted=!1),this._changeBegan||(this._changeBegan=!0,this.onChangeBegin()))},this.onChangeBegin=()=>{let A,e;this.reverse?(A=this.to,e=this.from):(A=this.from,e=this.to),this.object.currentState=e.id,this.object.dispatchEvent({type:"beginState",state:this.targets.t>.5?A.id:e.id})},this.onChangeComplete=()=>{let A,e;this.reverse?(A=this.to,e=this.from):(A=this.from,e=this.to),this.firstLoop&&(this.onFirstLoop(),this.firstLoop=!1),this.object.currentState=e.id,this.object.dispatchEvent({type:"completeState",state:this.targets.t<.5?A.id:e.id})},this.onFirstLoop=()=>{if(this.useCurrentState){let A,e;this.reverse?(A=this.to,e=this.from):(A=this.from,e=this.to),this.callback=ET(this.object,A.data,e.data,this.sharedAssets,this.allowSlerp)}};let o=this.getState(e);if(!o)throw Error("Missing property");this.from=o;let l=this.getState(t);if(!l)throw Error("Missing property");this.to=l,this.useCurrentState=void 0===e||void 0===t;let h={};this.object.hiddenMatrix0&&(h.hiddenMatrix=this.object.hiddenMatrix0.elements),this.callback=ET(this.object,void 0===e?h:this.from.data,void 0===t?h:this.to.data,this.sharedAssets,this.allowSlerp),this.core={targets:this.targets,t:1,autoplay:!1,...function(A){let e={startOnceDelay:0,delay:0,repeatDelay:0,loop:-1===A.repeat||A.repeat+1};if(0===A.repeat)e.direction="normal",e.rewind="pingpong-rewind"===A.direction;else switch(A.direction){case"pingpong":e.direction="alternate",e.rewind=!1;break;case"pingpong-rewind":e.direction="alternate",e.rewind=!0;break;default:e.direction="normal",e.rewind=!1}switch(A.delayDirection){case"start-once":break;case"start":e.delay=A.delay;break;case"end":e.endDelay=A.delay;break;case"start-end":case void 0:e.delay=A.delay,e.endDelay=A.delay}return e}(i),...function(A){let e={duration:A.duration,easing:"linear"};switch(A.easing){case 0:e.easing="cubicBezier( 0, 0, 1, 1 )";break;case 1:e.easing="cubicBezier( .25, .1, .25, 1 )";break;case 2:e.easing="cubicBezier( .42, 0, 1, 1 )";break;case 3:e.easing="cubicBezier( 0, 0, .58, 1 )";break;case 4:e.easing="cubicBezier( .42, 0, .58, 1 )";break;case 5:let{control1:t,control2:i}=A;e.easing=`cubicBezier(
				${t[0]}, ${t[1]}, ${i[0]}, ${i[1]}
			)`;break;case 6:let{mass:r,stiffness:s,damping:a,velocity:o}=A;e.easing=`spring( ${r}, ${s}, ${a}, ${o} )`}return e}(i),change:this.onChange},this.startOnceDelay="start-once"===i.delayDirection?i.delay:0}get changeBegan(){return this._changeBegan}get changeCompleted(){return this._changeCompleted}getState(A){let e,t;if("string"==typeof A?t=this.object.states?.[e=A]:null===A?(e=null,t=this.object.data):void 0===A&&(t=(e=this.object.currentState)?this.object.states?.[e]:this.object.data),!(void 0===e||void 0===t))return{id:e,data:t}}toggle(A){let e;this._changeBegan=!1,this._changeCompleted=!0,this.targets.t=0,A?A?(this.reverse=!1,e=this.to):(this.reverse=!0,e=this.from):this.object.currentState===this.from.id?(this.reverse=!1,e=this.to):(this.reverse=!0,e=this.from),this.callback=ET(this.object,{},e.data,this.sharedAssets,this.allowSlerp)}},E_=class{constructor(A,e,t,i){if(this.object=e,this.id=i,this.tweens=[],this._finished=!1,A.tweens.length<1)throw Error("Missing property");try{let r=new EP(e,A.tweens[0].data.state,A.tweens[1].data.state,A.tweens[1].data,t,A.allowSlerp??!1,"0");this.tween=r,this.core=Ep({...r.core}),this.core.finished.then(()=>this._finished=!0),this.startOnceDelay=r.startOnceDelay}catch{throw Error("Missing property")}}get finished(){return this._finished}get paused(){return this.core.paused}play(){this._finished||(clearTimeout(this.timeoutId),this.timeoutId=window.setTimeout(()=>this.core.play(),this.startOnceDelay))}pause(){this.core.pause(),clearTimeout(this.timeoutId),delete this.timeoutId}stop(){this.pause(),this.seek(0),this.core.reset(),this._finished=!1}seek(A){let e=A*this.core.duration;this.core.seek(e)}toggle(A){this.core.pause(),clearTimeout(this.timeoutId),this.tween.toggle(A),this.core=Ep({...this.tween.core}),this.core.finished.then(()=>this._finished=!0),this.tween.changeCompleted?this.timeoutId=window.setTimeout(()=>this.core.play(),this.startOnceDelay):this.core.play()}dispose(){this.pause()}},EL=class extends ev{constructor(A,e,t,i){if(super(),this.id=A,this.data=e,this.sharedAssets=i,!e.object)throw Error("Missing property");let r=t.find(e.object);if(!r||!r.states)throw Error("Missing property");this.object=r;try{this.timeline=new E_(this.data,this.object,this.sharedAssets,"0")}catch{throw Error("Missing property")}}play(){this.object.currentTransitionAction!==this&&(this.object.currentTransitionAction?.dispose(),this.object.currentTransitionAction=this,this.timeline=new E_(this.data,this.object,this.sharedAssets,"0"),this.dispatchEvent({type:"reset"})),this.timeline.play()}stop(){this.timeline.stop()}seek(A){this.timeline.seek(A)}toggle(A){this.object.currentTransitionAction!==this&&(this.object.currentTransitionAction?.dispose(),this.object.currentTransitionAction=this,this.timeline=new E_(this.data,this.object,this.sharedAssets,"0"),this.dispatchEvent({type:"reset"})),this.timeline.toggle(A)}dispose(){this.timeline.dispose()}};function EO(A,e,t,i,r){let s={Audio:[],Video:[],Link:[],Transition:[]};return e.forEach(({id:e,data:a})=>{try{"Audio"===a.type?ps[A.type].includes("Audio")&&s.Audio.push(new My(e,a,t,r)):"Video"===a.type?ps[A.type].includes("Video")&&s.Video.push(new MM(e,a,t)):"Link"===a.type?ps[A.type].includes("Link")&&s.Link.push(new MC(a)):"Transition"===a.type&&ps[A.type].includes("Transition")&&s.Transition.push(new EL(e,a,i,r))}catch{}}),s}function EB(A){Object.values(A).forEach(A=>{A.forEach(A=>{(A instanceof My||A instanceof MM||A instanceof EL)&&A.dispose()})})}var EI=[["start","Start"],["keyDown","KeyDown"],["keyUp","KeyUp"],["mouseDown","MouseDown"],["mouseUp","MouseUp"],["mouseHover","MouseHover"],["collision","Collision"],["lookAt","LookAt"],["follow","Follow"],["scroll","Scroll"]],ER=A=>EI.find(([e,t])=>t===A)?.[0],EN=A=>EI.find(([e])=>e===A)?.[1],Ez=(A,e)=>{let t=ER(A);if(t){let i=new CustomEvent(t,{bubbles:!0});return Object.defineProperty(i,"target",{writable:!1,value:e}),i}},EF=class extends Mp{constructor(A){super(A),this.objectsPerEvents=new Map,this.splineEvents={},this.onBeginEvent=A=>{if(!A.eventName||!A.target)return;let e=this.splineEvents[ER(A.eventName)]?.[A.target.uuid];if(!e)return;"Scroll"===A.eventName&&void 0!==A.deltaY&&Object.assign(e,{deltaY:A.deltaY});let{domElement:t}=this.eventContext;t.dispatchEvent(e)};let{scene:e}=this.eventContext;e.traverseEntity(A=>{if(A.data?.events.length){for(let[e,t]of EI)if(A.data.events.some(A=>A.data.type===t&&!A.data.disabled)){this.objectsPerEvents.has(e)?this.objectsPerEvents.get(e)?.push(A):this.objectsPerEvents.set(e,[A]);let i=Ez(t,{id:A.uuid,name:A.name}),r=this.splineEvents[e];r?r[A.uuid]=i:this.splineEvents[e]={[A.uuid]:i}}}})}connect(){this.objectsPerEvents.forEach(A=>{A.forEach(A=>{A.addEventListener("beginEvent",this.onBeginEvent)})})}disconnect(){this.objectsPerEvents.forEach(A=>{A.forEach(A=>{A.removeEventListener("beginEvent",this.onBeginEvent)})})}},EU=class{constructor(A,e,t,i){if(this.data=A,this.object=e,this.useToggle=A.toggle,("KeyDown"===A.type||"KeyUp"===A.type)&&!A.key)throw Error("Missing property");this.actions=EO(A,A.actions,e,t,i)}disconnect(){EB(this.actions)}dispatch(){this.useToggle?this.actions.Transition.forEach(A=>{A.toggle()}):this.actions.Transition.forEach(A=>{A.play()}),this.actions.Link.forEach(A=>{A.dispatch()}),this.actions.Audio.forEach(A=>{A.dispatchBasic()}),this.actions.Video.forEach(A=>{A.dispatchBasic()})}dispatchUserEvent(A){this.actions.Transition.forEach(e=>{e.toggle(!A)}),this.actions.Link.forEach(A=>{A.dispatch()}),this.actions.Audio.forEach(A=>{A.dispatchBasic()}),this.actions.Video.forEach(A=>{A.dispatchBasic()})}},Ek=class extends Mp{constructor(A){super(A),this.objectsPerTypes={MouseDown:[],MouseUp:[],KeyDown:[],KeyUp:[]},this.eventsPerObjects={MouseDown:{},MouseUp:{},KeyDown:{},KeyUp:{}},this.heldKeys={},this.onMouseDown=A=>{fc.length>1||(this.eventContext.updateRaycaster(A),this.handleMouseEvent("MouseDown"))},this.onMouseUp=A=>{fc.length>1||(this.eventContext.updateRaycaster(A),this.handleMouseEvent("MouseUp"))},this.onKeyDown=A=>{this.heldKeys[A.key]||this.handleKeyEvent(A,"KeyDown"),this.heldKeys[A.key]=!0},this.onKeyUp=A=>{this.handleKeyEvent(A,"KeyUp")},this.releaseHeldKey=A=>{delete this.heldKeys[A.key]},this._onUserEvent=({eventName:A,target:e,reverse:t})=>{if(!A||!e)return;let i=EN(A);i&&("MouseDown"===i||"MouseUp"===i?(e.dispatchEvent({type:"beginEvent",eventName:i}),this.eventsPerObjects[i]?.[e.uuid]?.forEach(A=>{A.dispatchUserEvent(t)})):("KeyDown"===i||"KeyUp"===i)&&(e.dispatchEvent({type:"beginEvent",eventName:i}),this.eventsPerObjects[i]?.[e.uuid]?.forEach(A=>{A.dispatchUserEvent()})))};let{scene:e,sharedAssets:t}=this.eventContext;e.traverseEntity(A=>{if(A.data?.events.length)for(let i of A.visible?["MouseDown","MouseUp","KeyDown","KeyUp"]:["KeyDown","KeyUp"]){let r=this.eventsPerObjects[i];A.data.events.filter(({data:A})=>A.type===i&&!0!==A.disabled).forEach(({data:i})=>{try{let s=new EU(i,A,e,t);s.actions.Video.length&&(this.hasVideoAction=!0),r[A.uuid]?r[A.uuid].push(s):r[A.uuid]=[s]}catch{}}),r[A.uuid]?.length&&this.objectsPerTypes[i].push(A)}})}connect(){let{domElement:A}=this.eventContext;this.heldKeys={},this.domEventsNeeded.clear(),this.objectsPerTypes.MouseDown?.length&&(this.domEventsNeeded.add("pointerdown"),A.addEventListener("pointerdown",this.onMouseDown)),this.objectsPerTypes.MouseUp?.length&&(this.domEventsNeeded.add("pointerup"),A.addEventListener("pointerup",this.onMouseUp)),this.objectsPerTypes.KeyDown?.length&&(this.domEventsNeeded.add("keydown"),document.addEventListener("keydown",this.onKeyDown),document.addEventListener("keyup",this.releaseHeldKey)),this.objectsPerTypes.KeyUp?.length&&(this.domEventsNeeded.add("keyup"),document.addEventListener("keyup",this.onKeyUp)),Object.entries(this.objectsPerTypes).forEach(([A,e])=>{e.forEach(A=>{A.addEventListener("userEvent",this._onUserEvent)})})}disconnect(){let{domElement:A}=this.eventContext;this.domEventsNeeded.clear(),this.heldKeys={},A.removeEventListener("pointerdown",this.onMouseDown),A.removeEventListener("pointerup",this.onMouseUp),document.removeEventListener("keydown",this.onKeyDown),document.removeEventListener("keyup",this.onKeyUp),document.removeEventListener("keyup",this.releaseHeldKey),Object.values(this.eventsPerObjects).forEach(A=>{Object.values(A).forEach(A=>{A.forEach(A=>{A.disconnect()})})}),Object.entries(this.objectsPerTypes).forEach(([A,e])=>{e.forEach(A=>{A.removeEventListener("userEvent",this._onUserEvent)})})}handleMouseEvent(A){let{stopRaycast:e,raycaster:t,scene:i}=this.eventContext,r=this.objectsPerTypes[A];r.length&&(e?Ml(Mo(t,i,r)).forEach(e=>{this.eventsPerObjects[A][e.uuid]&&this.handleObjectMouseEventDispatch(e,A)}):r.forEach(e=>{Mh(t,e)&&this.handleObjectMouseEventDispatch(e,A)}))}handleObjectMouseEventDispatch(A,e){A.dispatchEvent({type:"beginEvent",eventName:e}),this.eventsPerObjects[e]?.[A.uuid]?.forEach(A=>{A.dispatch()})}handleKeyEvent(A,e){this.objectsPerTypes[e].forEach(t=>{let i=this.eventsPerObjects[e][t.uuid];i.some(({data:e})=>"key"in e&&e.key===A.key)&&t.dispatchEvent({type:"beginEvent",eventName:e}),i.forEach(e=>{"key"in e.data&&e.data.key===A.key&&e.dispatch()})})}},EG=new e4,EV=new e4,Ej=new tE,EH=new tE,EW=class{constructor(A,e,t,i){this.actionsIn=EO(A,A.inActions,e,t,i),this.actionsOut=EO(A,A.outActions,e,t,i)}disconnect(){EB(this.actionsIn),EB(this.actionsOut)}},EY=class extends EW{constructor(A,e,t,i){super(A,e,t,i),this.data=A,this.object=e,this.stage="out",this.objects=[],this.onUpdateMatrix=()=>{Ej.copy(this.objects[0].matrixWorld),this.objects[0].matrixWorld0&&Ej.multiply(this.objects[0].matrixWorld0);let A=EG.setFromMatrixPosition(Ej);EH.copy(this.objects[1].matrixWorld),this.objects[1].matrixWorld0&&EH.multiply(this.objects[1].matrixWorld0);let e=EV.setFromMatrixPosition(EH),t=A.distanceTo(e)<=this.distance?"in":"out";if(this.stage!==t){this.stage=t;let i="in"===this.stage?this.actionsIn:this.actionsOut;i.Audio.forEach(A=>A.dispatchConditional()),i.Video.forEach(A=>A.dispatchConditional()),i.Transition.forEach(A=>A.play())}};let{distance:r,fromObject:s,toObject:a}=A.condition;for(let o of(this.distance=r,[s,a])){if(!o)throw Error("Missing property");let l=t.find(o);if(!l)throw Error("Missing property");this.objects.push(l)}}connect(){this.objects.forEach(A=>{A.addEventListener("updateMatrix",this.onUpdateMatrix)}),this.onUpdateMatrix()}disconnect(){super.disconnect(),this.stage="out",this.objects.forEach(A=>{A.removeEventListener("updateMatrix",this.onUpdateMatrix)})}},EX=class extends EW{constructor(A,e,t,i){super(A,e,t,i),this.data=A,this.object=e,this.onBegin=({target:A,state:e})=>{this.toState!==e&&(this.actionsOut.Audio.forEach(A=>A.dispatchConditional()),this.actionsOut.Video.forEach(A=>A.dispatchConditional()),this.actionsOut.Transition.forEach(A=>A.play()))},this.onComplete=({target:A,state:e})=>{this.toState===e&&(this.actionsIn.Audio.forEach(A=>A.dispatchConditional()),this.actionsIn.Video.forEach(A=>A.dispatchConditional()),this.actionsIn.Transition.forEach(A=>A.play()))};let{condition:r}=A;if(!r.object)throw Error("Missing property");let s=t.find(r.object);if(!s||(this.toObject=s,r.state&&!this.toObject.states?.[r.state]))throw Error("Missing property");this.toState=r.state}connect(){(this.actionsOut.Audio.length||this.actionsOut.Video.length||this.actionsOut.Transition.length)&&this.toObject.addEventListener("beginState",this.onBegin),(this.actionsIn.Audio.length||this.actionsIn.Video.length||this.actionsIn.Transition.length)&&this.toObject.addEventListener("completeState",this.onComplete)}disconnect(){super.disconnect(),(this.actionsOut.Audio.length||this.actionsOut.Video.length||this.actionsOut.Transition.length)&&this.toObject.removeEventListener("beginState",this.onBegin),(this.actionsIn.Audio.length||this.actionsIn.Video.length||this.actionsIn.Transition.length)&&this.toObject.removeEventListener("completeState",this.onComplete)}},EQ=class extends Mp{constructor(A){super(A),this.eventsPerConditions={Comparison:[],Distance:[],State:[]},this.hasVideoAction=!1;let{scene:e,sharedAssets:t}=this.eventContext;e.traverseEntity(A=>{if(A.data?.events.length){for(let{data:i}of A.data.events)if(!i.disabled&&"Conditional"===i.type)try{let r;"Comparison"===i.condition.type||("Distance"===i.condition.type?r=new EY(i,A,e,t):"State"===i.condition.type&&(r=new EX(i,A,e,t))),r&&(this.eventsPerConditions[i.condition.type].push(r),(r.actionsIn.Video.length||r.actionsOut.Video.length)&&(this.hasVideoAction=!0))}catch{}}})}connect(){super.connect(),Object.values(this.eventsPerConditions).forEach(A=>A.forEach(A=>A.connect()))}disconnect(){super.disconnect(),Object.values(this.eventsPerConditions).forEach(A=>A.forEach(A=>A.disconnect()))}},Eq=new e4,EZ=new e4,EK=new e4,EJ=new e4,E$=new iJ,E0={type:"requestRender"},E1=(A0=new e4,A1=new e4,(A,e,t)=>t>0?(A0.subVectors(A,e),A0.length()<=t?A:A1.copy(e).add(A0.normalize().multiplyScalar(t))):e),E2=(A2=new tE,(A,e)=>{A.position.copy(e),null!==A.parent&&(A2.copy(A.parent.matrixWorld).invert(),A.position.applyMatrix4(A2)),A2.copy(A.hiddenMatrix).invert(),A.position.applyMatrix4(A2),A.updateMatrix(),A instanceof yQ&&wq(A.parent)&&A.invalidateDownstreamBooleanData(!0)}),E3=class{constructor(A,e,t){this.data=A,this.object=e,this.tempPosition=new e4,this.started=!1,this.paused=!0,this.snapComplete=!1,this.isReset=!1,this.worldPosition0=new e4,this.target=A.target?t.find(A.target):void 0,this.maxDelta=A.maxDelta??0,this.dampingFactor=A.dampingFactor?Math.max(A.dampingFactor,1):1,this.plane=A.plane??"custom",this.snapDampingFactor=8,this.currentDampingFactor=this.snapDampingFactor,this.object.getWorldPosition(this.worldPosition0)}},E4=class extends Mp{constructor(A){super(A),this.events=[],this.onTargetChangeCallbacks=[],this.onMouseMove=A=>{if(!(fc.length>1))for(let e of(this.eventContext.updateRaycaster(A),this.events))void 0===e.target&&this.updateSingleEvent(e)},this.onMouseEnter=A=>{for(let e of this.events)void 0===e.target&&(e.tempPosition.copy(e.object.position),e.snapComplete=!1,e.isReset=!1,e.currentDampingFactor=e.snapDampingFactor)},this.onMouseLeave=A=>{for(let e of this.events)void 0===e.target&&(e.tempPosition.copy(e.object.position),e.snapComplete=!1,e.data.resetOnPointerLeave&&(e.isReset=!0,e.currentDampingFactor=e.snapDampingFactor),this.updateSingleEvent(e))},this.onTargetChange=A=>()=>{this.updateSingleEvent(A)};let{scene:e}=this.eventContext;e.traverseEntity(A=>{let t=A.data?.events.find(A=>"Follow"===A.data.type&&!A.data.disabled);t&&this.events.push(new E3(t.data,A,e))})}connect(){if(!this.events.length)return;let{domElement:A}=this.eventContext;for(let e of(this.domEventsNeeded.clear(),fn&&(this.domEventsNeeded.add("pointerdown"),A.addEventListener("pointerdown",this.onMouseMove)),this.domEventsNeeded.add("pointermove"),A.addEventListener("pointermove",this.onMouseMove),A.addEventListener("pointerenter",this.onMouseEnter),A.addEventListener("pointerleave",this.onMouseLeave),this.events))if(void 0!==e.target){let t=this.onTargetChange(e);this.onTargetChangeCallbacks.push(t),e.target.addEventListener("requestRender",t)}}disconnect(){if(!this.events.length)return;let{domElement:A}=this.eventContext;this.domEventsNeeded.clear(),fn&&A.removeEventListener("pointerdown",this.onMouseMove),A.removeEventListener("pointermove",this.onMouseMove),A.removeEventListener("pointerenter",this.onMouseEnter),A.removeEventListener("pointerleave",this.onMouseLeave);let e=0;for(let t of this.events)t.started=!1,t.paused=!0,void 0!==t.target&&t.target.removeEventListener("requestRender",this.onTargetChangeCallbacks[e++])}onAnimationFrameDamping(){for(let A of this.events)A.paused||this.updateSingleEvent(A)}updateSingleEvent(A){let{tempPosition:e,object:t,maxDelta:i,plane:r}=A;if(t.getWorldPosition(EK),A.isReset)EJ.copy(A.worldPosition0);else if(A.target)A.target.getWorldPosition(EJ);else{let{camera:s,raycaster:a}=this.eventContext;if("custom"===r?(s.getWorldDirection(EZ),EZ.negate(),Eq.copy(EZ)):"xy"===r?Eq.set(0,0,1):"xz"===r?Eq.set(0,1,0):"yz"===r&&Eq.set(1,0,0),E$.setFromNormalAndCoplanarPoint(Eq,EK),!a.ray.intersectPlane(E$,EJ))return}let o=E1(EK,EJ,i);if(A.currentDampingFactor>1||!1===A.snapComplete){A.started||(A.started=!0,e.copy(o));let l=Eq.subVectors(o,e).divideScalar(A.currentDampingFactor);e.add(l),E2(t,e),A.paused=.01>l.length(),A.snapComplete=1>l.length(),A.snapComplete&&(A.currentDampingFactor=A.dampingFactor)}else E2(t,o),A.paused=!0;A.object?.dispatchEvent({type:"beginEvent",eventName:"Follow"}),t.dispatchEvent(E0)}},E5=new e4,E6=new e4,E8=new tE,E9=new e3,E7=new e3,TA=new e4,Te=new e4,Tt=new e4,Ti=new iJ,Tr={type:"requestRender"},Ts={type:"changeRotation"},Tn=(A3=new tE,A4=new e4,A5=new e4,A6=new e4,(A,e)=>("x"===e?(A4.set(0,0,1),A5.set(0,1,0),A6.set(-1,0,0)):"y"===e?(A4.set(1,0,0),A5.set(0,0,1),A6.set(0,-1,0)):(A4.set(1,0,0),A5.set(0,1,0),A6.set(0,0,1)),A4.applyMatrix4(A),A5.applyMatrix4(A),A6.applyMatrix4(A),A3.makeBasis(A4,A5,A6))),Ta=(A8=new tE,function(A,e){null!==A.parent?A8.multiplyMatrices(A.parent.matrixWorld,A.hiddenMatrix):A8.copy(A.hiddenMatrix),e.premultiply(Mr(A8).invert()),A.rotation.setFromRotationMatrix(e),A.updateMatrix(),A instanceof yQ&&wq(A.parent)&&A.invalidateDownstreamBooleanData(!0)}),To=class{constructor(A,e,t){this.data=A,this.object=e,this.paused=!0,this.snapComplete=!1,this.isReset=!1,this.worldQuaternion0=new e3,this.target=A.target?t.find(A.target):void 0,this.dampingFactor=A.dampingFactor?Math.max(A.dampingFactor,1):1,this.distance=A.distance??0,this.tilt=A.tilt??"up",this.axis=A.axis??"z",this.plane=A.plane??"custom",this.snapDampingFactor=8,this.currentDampingFactor=this.dampingFactor,this.object.getWorldQuaternion(this.worldQuaternion0)}},Tl=class extends Mp{constructor(A){super(A),this.events=[],this.onTargetChangeCallbacks=[],this.onMouseMove=A=>{if(!(fc.length>1))for(let e of(this.eventContext.updateRaycaster(A),this.events))void 0===e.target&&this.updateSingleEvent(e)},this.onMouseEnter=A=>{for(let e of this.events)void 0===e.target&&(e.snapComplete=!1,e.isReset=!1,e.currentDampingFactor=e.snapDampingFactor)},this.onMouseLeave=A=>{for(let e of this.events)void 0===e.target&&(e.snapComplete=!1,e.data.resetOnPointerLeave&&(e.isReset=!0,e.currentDampingFactor=e.snapDampingFactor),this.updateSingleEvent(e))},this.onTargetChange=A=>()=>{this.updateSingleEvent(A)};let{scene:e}=this.eventContext;e.traverseEntity(A=>{let t=A.data?.events.find(A=>"LookAt"===A.data.type&&!A.data.disabled);t&&this.events.push(new To(t.data,A,e))})}connect(){if(!this.events.length)return;let{domElement:A}=this.eventContext;for(let e of(this.domEventsNeeded.clear(),fn&&(this.domEventsNeeded.add("pointerdown"),A.addEventListener("pointerdown",this.onMouseMove)),this.domEventsNeeded.add("pointermove"),A.addEventListener("pointermove",this.onMouseMove),A.addEventListener("pointerenter",this.onMouseEnter),A.addEventListener("pointerleave",this.onMouseLeave),this.events))if(void 0!==e.target){let t=this.onTargetChange(e);this.onTargetChangeCallbacks.push(t),e.target.addEventListener("requestRender",t)}}disconnect(){if(!this.events.length)return;let{domElement:A}=this.eventContext;this.domEventsNeeded.clear(),fn&&A.removeEventListener("pointerdown",this.onMouseMove),A.removeEventListener("pointermove",this.onMouseMove),A.removeEventListener("pointerenter",this.onMouseEnter),A.removeEventListener("pointerleave",this.onMouseLeave);let e=0;for(let t of this.events)t.paused=!0,void 0!==t.target&&t.target.removeEventListener("requestRender",this.onTargetChangeCallbacks[e++])}onAnimationFrameDamping(){for(let A of this.events)A.paused||this.updateSingleEvent(A)}updateSingleEvent(A){let{target:e,tilt:t,axis:i,distance:r,plane:s,object:a}=A,{camera:o,raycaster:l}=this.eventContext;if(!A.isReset){if(A.target)A.target.getWorldPosition(Te);else if(a.getWorldPosition(TA),"custom"===s?(o.getWorldDirection(E6),E6.negate(),r>0?Ti.set(E6,-r):Ti.setFromNormalAndCoplanarPoint(E6,TA)):("xy"===s?E5.set(0,0,1):"xz"===s?E5.set(0,1,0):"yz"===s&&E5.set(1,0,0),Ti.setFromNormalAndCoplanarPoint(E5,TA)),!l.ray.intersectPlane(Ti,Te))return}A.isReset||(e?"up"===t?Tt.set(0,1,0):"target"===t&&Tt.copy(e.up).applyMatrix4(E8.extractRotation(e.matrixWorld)).normalize():"custom"===s?Tt.set(0,1,0):Tt.copy(E5)),A.isReset?E7.copy(A.worldQuaternion0):(E8.lookAt(Te,TA,Tt),E8.copy(Tn(E8,i)),E7.setFromRotationMatrix(E8)),A.currentDampingFactor>1||!1===A.snapComplete?(a.updateWorldMatrix(!0,!1),E9.setFromRotationMatrix(Mr(a.matrixWorld)),E9.slerp(E7,1/A.currentDampingFactor),Ta(a,E8.makeRotationFromQuaternion(E9)),A.paused=8*(1-E9.dot(E7))<1e-5,A.snapComplete=8*(1-E9.dot(E7))<.001,A.snapComplete&&(A.currentDampingFactor=A.dampingFactor)):(Ta(a,E8.makeRotationFromQuaternion(E7)),A.paused=!0),A.object?.dispatchEvent({type:"beginEvent",eventName:"LookAt"}),a.dispatchEvent(Tr),a.dispatchEvent(Ts)}},Th=class{constructor(A,e,t,i){this.data=A,this.object=e,this.entered=!1,this.actions=EO(A,A.actions,e,t,i)}disconnect(){EB(this.actions)}dispatchEnter(){this.entered||(this.entered=!0,this.actions.Transition.forEach(A=>A.toggle(!0)))}dispatchLeave(){this.entered&&(this.entered=!1,this.actions.Transition.forEach(A=>A.toggle(!1)))}dispatchUserEvent(A){this.actions.Transition.forEach(e=>e.toggle(!A))}},Tc=class extends Mp{constructor(A){super(A),this.eventsPerObjects={},this.objects=[],this._prevObjects=[],this.onMouseDown=A=>{fc.length>1||(this.eventContext.updateRaycaster(A),this.handleMouseHoverEvent())},this.onMouseUp=A=>{fc.length>1||this.handleMouseHoverEvent(!0)},this.onMouseMove=A=>{fc.length>1||(this.eventContext.updateRaycaster(A),this.handleMouseHoverEvent())},this.onUserEvent=({eventName:A,target:e,reverse:t})=>{if(!A||!e)return;let i=EN(A);i&&"MouseHover"===i&&(e.dispatchEvent({type:"beginEvent",eventName:"MouseHover"}),this.eventsPerObjects[e.uuid]?.forEach(A=>A.dispatchUserEvent(t)))};let{scene:e,sharedAssets:t}=this.eventContext;e.traverseEntity(A=>{if(!(!A.visible||!A.data?.events.length)){for(let{data:i}of A.data.events)if(!i.disabled&&"MouseHover"===i.type)try{let r=new Th(i,A,e,t);this.eventsPerObjects[A.uuid]?this.eventsPerObjects[A.uuid].push(r):this.eventsPerObjects[A.uuid]=[r]}catch{}this.eventsPerObjects[A.uuid]?.length&&this.objects.push(A)}})}connect(){if(!this.objects.length)return;let{domElement:A}=this.eventContext;this.domEventsNeeded.clear(),fn&&(this.domEventsNeeded.add("pointerdown"),A.addEventListener("pointerdown",this.onMouseDown),this.domEventsNeeded.add("pointerup"),A.addEventListener("pointerup",this.onMouseUp)),this.domEventsNeeded.add("pointermove"),A.addEventListener("pointermove",this.onMouseMove),this.objects.forEach(A=>{A.addEventListener("userEvent",this.onUserEvent)})}disconnect(){if(!this.objects.length)return;let{domElement:A}=this.eventContext;this.domEventsNeeded.clear(),fn&&(A.removeEventListener("pointerdown",this.onMouseDown),A.removeEventListener("pointerup",this.onMouseUp)),A.removeEventListener("pointermove",this.onMouseMove),Object.values(this.eventsPerObjects).forEach(A=>{A.forEach(A=>{A.disconnect()})}),this.objects.forEach(A=>{A.removeEventListener("userEvent",this.onUserEvent)})}handleMouseHoverEvent(A=!1){let e=[];if(!A){let{stopRaycast:t,raycaster:i,scene:r}=this.eventContext;t?e=Ml(Mo(i,r,this.objects)):this.objects.forEach(A=>{Mh(i,A)&&e.push(A)})}this._prevObjects.length&&this._prevObjects.forEach(A=>{e.includes(A)||(A.dispatchEvent({type:"beginEvent",eventName:"MouseHover"}),this.eventsPerObjects[A.uuid]?.forEach(A=>A.dispatchLeave()))}),e.length&&e.forEach(A=>{A.dispatchEvent({type:"beginEvent",eventName:"MouseHover"}),this.eventsPerObjects[A.uuid]?.forEach(A=>A.dispatchEnter())}),this._prevObjects=e}},Td=class{constructor(A,e,t,i){this.data=A,this.object=e,this.scrollCounter=0,this.actions=EO(A,A.actions,e,t,i)}connect(){this.scrollCounter=0}disconnect(){EB(this.actions)}dispatch(A){this.scrollCounter+=A>0?1:-1,this.scrollCounter=Math.min(Math.max(this.scrollCounter,0),this.data.steps);let e=this.scrollCounter/this.data.steps;this.actions.Transition.forEach(A=>A.seek(e))}dispatchUserEvent(A){this.actions.Transition.forEach(e=>{e.toggle(!A)})}},Tu=class extends Mp{constructor(A){super(A),this.eventsPerObject=new Map,this.onWheel=A=>{[...this.eventsPerObject.entries()].forEach(([e,t])=>{e.dispatchEvent({type:"beginEvent",eventName:"Scroll",deltaY:A.deltaY}),t.forEach(e=>e.dispatch(A.deltaY))})},this.onUserEvent=({eventName:A,target:e,reverse:t})=>{if(!A||!e)return;let i=EN(A);i&&"Scroll"===i&&(e.dispatchEvent({type:"beginEvent",eventName:"Scroll"}),this.eventsPerObject.get(e)?.forEach(A=>{A.dispatchUserEvent(t)}))};let{scene:e,sharedAssets:t}=this.eventContext;e.traverseEntity(A=>{if(A.data?.events.length)for(let{data:i}of A.data.events){if(i.disabled||"Scroll"!==i.type)continue;let r=new Td(i,A,e,t);this.eventsPerObject.has(A)?this.eventsPerObject.get(A)?.push(r):this.eventsPerObject.set(A,[r])}})}connect(){let{domElement:A}=this.eventContext;[...this.eventsPerObject.entries()].forEach(([A,e])=>{e.forEach(A=>A.connect()),A.addEventListener("userEvent",this.onUserEvent)}),[...this.eventsPerObject.values()].some(A=>A.length)&&(this.domEventsNeeded.add("wheel"),A.addEventListener("wheel",this.onWheel))}disconnect(){let{domElement:A}=this.eventContext;A.removeEventListener("wheel",this.onWheel),this.domEventsNeeded.clear(),[...this.eventsPerObject.entries()].forEach(([A,e])=>{e.forEach(A=>A.disconnect()),A.removeEventListener("userEvent",this.onUserEvent)})}},Tp=class{constructor(A,e,t,i){this.data=A,this.object=e,this.actions=EO(A,A.actions,e,t,i)}disconnect(){EB(this.actions)}dispatch(){this.actions.Transition.forEach(A=>{A.play()})}dispatchAfter(A){this.actions.Audio.forEach(e=>{(e.interaction.data.triggerAfter??"any")===A&&(e.interaction instanceof Mg?e.interaction.audioPlayer.play():e.interaction instanceof Mv&&e.interaction.dispatch())}),this.actions.Video.forEach(e=>{(e.interaction.data.triggerAfter??"autoplay")===A&&(e.interaction instanceof Mw?e.interaction.play():e.interaction instanceof MS&&e.interaction.dispatch())})}dispatchUserEvent(A){this.actions.Transition.forEach(e=>{e.toggle(!A)}),this.actions.Audio.forEach(A=>{A.interaction instanceof Mg?A.interaction.audioPlayer.play():A.interaction instanceof Mv&&A.interaction.dispatch()}),this.actions.Video.forEach(A=>{A.interaction instanceof Mw?A.interaction.play():A.interaction instanceof MS&&A.interaction.dispatch()})}},Tf=class extends Mp{constructor(A){super(A),this.eventsPerObject=new Map,this.eventsAfterPerObject=new Map,this.onMouseDown=()=>{[...this.eventsAfterPerObject.entries()].forEach(([A,e])=>{A.dispatchEvent({type:"beginEvent",eventName:"Start"}),e.forEach(A=>{A.dispatchAfter("mouseDown")})})},this.onKeyDown=()=>{[...this.eventsAfterPerObject.entries()].forEach(([A,e])=>{A.dispatchEvent({type:"beginEvent",eventName:"Start"}),e.forEach(A=>{A.dispatchAfter("keyDown")})})},this.onAny=()=>{let{domElement:A,isExport:e}=this.eventContext;(e?document:A).removeEventListener("pointerdown",this.onAny),document.removeEventListener("keydown",this.onAny),[...this.eventsAfterPerObject.entries()].forEach(([A,e])=>{A.dispatchEvent({type:"beginEvent",eventName:"Start"}),e.forEach(A=>{A.dispatchAfter("any")})})},this.onPlay=()=>{[...this.eventsAfterPerObject.entries()].forEach(([A,e])=>{A.dispatchEvent({type:"beginEvent",eventName:"Start"}),e.forEach(A=>{A.dispatchAfter("autoplay")})})},this.onUserEvent=({eventName:A,target:e,reverse:t})=>{if(!A||!e)return;let i=EN(A);i&&"Start"===i&&(e.dispatchEvent({type:"beginEvent",eventName:"Start"}),this.eventsPerObject.get(e)?.forEach(A=>{A.dispatchUserEvent(t)}),this.eventsAfterPerObject.get(e)?.forEach(A=>{A.dispatchUserEvent(t)}))};let{scene:e,sharedAssets:t}=this.eventContext;e.traverseEntity(A=>{if(A.data?.events.length)for(let{data:i}of A.data.events){if(i.disabled||"Start"!==i.type)continue;let r=new Tp(i,A,e,t);r.actions.Transition.length&&(this.eventsPerObject.has(A)?this.eventsPerObject.get(A)?.push(r):this.eventsPerObject.set(A,[r])),r.actions.Audio.length&&(this.eventsAfterPerObject.has(A)?this.eventsAfterPerObject.get(A)?.push(r):this.eventsAfterPerObject.set(A,[r])),r.actions.Video.length&&(this.hasVideoAction=!0,this.eventsAfterPerObject.has(A)?this.eventsAfterPerObject.get(A)?.push(r):this.eventsAfterPerObject.set(A,[r]))}})}connect(){if([...this.eventsAfterPerObject.values()].some(A=>A.length)){let{domElement:A,isExport:e}=this.eventContext,t=e?document:A;t.addEventListener("pointerdown",this.onMouseDown,{once:!0}),document.addEventListener("keydown",this.onKeyDown,{once:!0}),t.addEventListener("pointerdown",this.onAny),document.addEventListener("keydown",this.onAny),[...this.eventsAfterPerObject.entries()].forEach(([A,e])=>{A.addEventListener("userEvent",this.onUserEvent)}),this.onPlay()}[...this.eventsPerObject.entries()].forEach(([A,e])=>{A.dispatchEvent({type:"beginEvent",eventName:"Start"}),e.forEach(A=>A.dispatch()),A.addEventListener("userEvent",this.onUserEvent)})}disconnect(){if([...this.eventsAfterPerObject.values()].some(A=>A.length)){let{domElement:A,isExport:e}=this.eventContext,t=e?document:A;t.removeEventListener("pointerdown",this.onMouseDown),document.removeEventListener("keydown",this.onKeyDown),t.removeEventListener("pointerdown",this.onAny),document.removeEventListener("keydown",this.onAny),[...this.eventsAfterPerObject.entries()].forEach(([A,e])=>{A.removeEventListener("userEvent",this.onUserEvent),e.forEach(A=>A.disconnect())})}[...this.eventsPerObject.entries()].forEach(([A,e])=>{A.removeEventListener("userEvent",this.onUserEvent),e.forEach(A=>A.disconnect())})}},Tm=class{constructor(A,e,t,i){this.data=A,this.object=e,this.disabled=!0,this.actions=EO(A,A.actions,e,t,i),this.target=A.target,this.useToggle=A.toggle}disconnect(){EB(this.actions)}dispatch(){this.disabled||(this.object.dispatchEvent({type:"beginEvent",eventName:"Collision"}),this.useToggle?this.actions.Transition.forEach(A=>{A.toggle()}):this.actions.Transition.forEach(A=>{A.play()}),this.actions.Link.forEach(A=>{A.dispatch()}),this.actions.Audio.forEach(A=>{A.dispatchBasic()}),this.actions.Video.forEach(A=>{A.dispatchBasic()}))}};da.then(A=>A9=A);var Tg=new tE,Tv=new e4(1,1,1),Ty=new e4,Tx=new e3,Tb=new e4,Tw=new tR(0,0,0,"YXZ"),TS={type:"updateMatrix"},TM={type:"beginEvent",eventName:"Collision"},TE=class{constructor(A,e,t,i,r,s=!1){let a;this.scene=e,this.sharedAssets=r,this.isExport=s,this.gameControls=[],this.gameControlStates=[],this.joysticks=[],this.joystickToGameControls=[],this.sharedGameControlGlobals={entitiesWithTransformAnim:[],eventsPerObjects:{},colliderToEntity:{},gamePads:[]},this.needsCollisionDetection=!1,this.initializationCounter=-1,this.rigidBodyToMesh=new Map,this.nActiveRigidBodies=0,this.collisionEvents=[],this.processRigidBody=A=>{if(A.bodyType()!==A9.RigidBodyType.Dynamic)return;A.isSleeping()||this.nActiveRigidBodies++;let e=A.translation(),t=A.rotation(),i=this.rigidBodyToMesh.get(A.handle);if(Ty.set(e.x,e.y,e.z),Ty.multiplyScalar(this.pixelsPerMeter),Tx.set(t.x,t.y,t.z,t.w),i[0].matrixWorld.compose(Ty,Tx,i[0].matrixWorld0?Tv:i[1]),i[0].dispatchEvent(TS),i[2])for(let r of i[0].children)r.updateMatrixWorld(!0)},this.handleCollisionEvents=(A,e,t)=>{if(!1!==t){if(this.gameControls.some(e=>e.object===this.sharedGameControlGlobals.colliderToEntity[A])){let i=this.sharedGameControlGlobals.colliderToEntity[e],r=this.sharedGameControlGlobals.eventsPerObjects[i.uuid];if(void 0!==r)for(let s of r)"character"===s.data.target&&this.dispatchCollisionEvent(s,i)}else if(this.gameControls.some(A=>A.object===this.sharedGameControlGlobals.colliderToEntity[e])){let a=this.sharedGameControlGlobals.colliderToEntity[A],o=this.sharedGameControlGlobals.eventsPerObjects[a.uuid];if(void 0===o)return;for(let l of o)"character"===l.data.target&&this.dispatchCollisionEvent(l,a)}else{let h=this.sharedGameControlGlobals.colliderToEntity[A],c=this.sharedGameControlGlobals.eventsPerObjects[h.uuid];if(void 0!==c)for(let d of c)"scene"===d.data.target&&this.dispatchCollisionEvent(d,h);let u=this.sharedGameControlGlobals.colliderToEntity[e],p=this.sharedGameControlGlobals.eventsPerObjects[u?.uuid];if(void 0!==p)for(let f of p)"scene"===f.data.target&&this.dispatchCollisionEvent(f,u)}}},this.domElement=t.domElement,a=null===A.scene.publish.playCamera?SD.PERSONAL_CAMERA_ID:A.scene.publish.playCamera;let o=this.scene.find(a),l=!1,h,c=5,d=8,u=9,p="drag";if(this.usePhysics=A.scene.environment.usePhysics??mO.defaultData.usePhysics,this.pixelsPerMeter=A.scene.environment.pixelsPerMeter??mO.defaultData.pixelsPerMeter,A.scene.objects.data(A.scene.publish.gameControlObject)?.events.forEach(A=>{!0!==A.data.disabled&&"GameControl"===A.data.type&&(h=A.data.keyAssignments,c=A.data.joystickPosLoc,d=A.data.joystickRotLoc,u=A.data.jumpTouchButtonLoc,p=A.data.rotByTouch)}),this.scene.traverseEntity(A=>{A.dataPatched.events.forEach(e=>{if(e.data.disabled||"GameControl"!==e.data.type)return;let t=A;for(;(t=t.parent)?.parent!==null;)if(t.dataPatched.physics?.fusedBody)return;e.data.collisionEnabled&&(this.needsCollisionDetection=!0),this.gameControlStates.push([A,e.data])})}),this.usePhysics&&(0===this.gameControlStates.length||this.needsCollisionDetection)&&this.initPhysics(A.scene.environment.gravity??mO.defaultData.gravity),this.gameControlStates.forEach(([e,s])=>{l=l||s.camera===o.uuid||e.uuid===o.uuid;let a=new TK(e,t.domElement,{...s,keyAssignments:h},A.scene.environment,this.sharedGameControlGlobals,e.uuid!==o.uuid&&s.camera===o.uuid,o,this.scene,r);a.addEventListener("change",i),a.addEventListener("end",i),a.addEventListener("start",i),this.gameControls.push(a),fn&&s.touchControl&&(void 0!==this.joystickToGameControls[c]?this.joystickToGameControls[c].push([a,"pos"]):this.joystickToGameControls[c]=[[a,"pos"]],"walk"===s.moveMode&&(void 0!==this.joystickToGameControls[u]?this.joystickToGameControls[u].push([a,"jmp"]):this.joystickToGameControls[u]=[[a,"jmp"]]),"joystick"===p&&(void 0!==this.joystickToGameControls[d]?this.joystickToGameControls[d].push([a,"rot"]):this.joystickToGameControls[d]=[[a,"rot"]]))}),!1===l){let{enableRotate:f,enablePan:m,enableZoom:g,autoRotate:v,hoverRotatePanMode:y}=A.scene.publish.orbitControls;(f||m||g||v||0!==y)&&(!o.states||!Object.keys(o.states).length)&&(this.orbitControls=new Ct(o,t.domElement,this.isExport),this.orbitControls.addEventListener("change",i),this.orbitControls.addEventListener("end",i),this.orbitControls.addEventListener("start",i),this.orbitControls.fromJSON(A.scene.publish.orbitControls),this.orbitControls.useKeyEvents=!1,this.orbitControls.connect(),this.orbitControls.update())}let x=t.domElement.width/t.getPixelRatio(),b=t.domElement.height/t.getPixelRatio();this.joystickToGameControls.forEach((e,t)=>{let r=document.body.appendChild(document.createElement("div")),[s,a,o]=(A.scene.publish.joystickSizeAndXYOffset??mL.defaultData.joystickSizeAndXYOffset)[t],l={},h=e.some(A=>"jmp"===A[1]),c=h?0:s;for(let d in t<10?(t<5?l.top=c/2:l.bottom=c/2,l.left=c/2+t%5*((x-5*s)/4+s)):10===t?(l.left=c/2,l.top=b/2):(l.right=c/2,l.top=b/2),l.top?l.top-=a[1]:l.bottom+=a[1],l.left?l.left+=a[0]:l.right-=a[0],l)l[d]+="px";if(h){let u=r.appendChild(document.createElement("div"));Object.assign(u.style,l,{position:"absolute",width:s+"px",height:s+"px",backgroundColor:`rgba(255,255,255,${"show"===o?.4:0})`,zIndex:"9999",borderRadius:s+"px",border:"show"===o?"solid 2px rgba(0, 0, 0, .1)":"none",display:"flex",alignItems:"center",justifyContent:"center",touchAction:"none"}),"show"===o&&(u.innerHTML=`
						<svg width="${s/16*6.4}" height="${.4*s}" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M2 10L8 4L14 10" stroke="black" stroke-opacity="40%" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
						</svg>
					`),u.addEventListener("pointerdown",()=>{e.forEach(A=>{A[0].movementState.jump=1}),i()}),u.addEventListener("touchend",A=>A.preventDefault()),this.joysticks[t]=[void 0,r];return}let p={zone:r,mode:"static",position:l,size:s};"hide"===o&&(p.restOpacity=0);let f=S9.create(p);f.on("move",(A,t)=>{e.forEach(A=>{let e=A[0];"pos"===A[1]?t.force<.2?e.moveForce=0:(e.movementState.movePosZ=Math.sin(-t.angle.radian),e.movementState.movePosX=Math.cos(-t.angle.radian),t.force<.3?e.moveForce=(t.force-.2)/.1:e.moveForce=1):t.force<.2?e.rotForce=0:(e.movementState.rotPosX=t.vector.y,e.movementState.rotPosY=-t.vector.x,t.force<.3?e.rotForce=(t.force-.2)/.1:e.rotForce=1)}),i()}),f.on("end",(A,t)=>{e.forEach(A=>{let e=A[0];"pos"===A[1]?(e.movementState.movePosZ=0,e.movementState.movePosX=0,e.moveForce=1):(e.movementState.rotPosX=0,e.movementState.rotPosY=0,e.rotForce=1)})}),this.joysticks[t]=[f,r]}),!1===this.usePhysics&&this.needsCollisionDetection&&this.initBVH(),this.initializationCounter++,window.setTimeout(()=>this.collisionEvents.forEach(A=>A.disabled=!1),80)}attachVRControllers(A){A.forEach(A=>{A.addEventListener("connected",A=>{"gamepad"in A.data&&"axes"in A.data.gamepad&&this.sharedGameControlGlobals.gamePads.push(A.data.gamepad)})})}initBVH(){let A=[];this.scene.updateMatrixWorld(!0);let e=new Set;if(this.scene.traverse(t=>{if(gM(t)){if(!t.visible||e.has(t))t.children.forEach(A=>gM(A)&&e.add(A));else if(t.states&&Object.keys(t.states).length||t.data?.events.some(A=>!0!==A.data.disabled&&"GameControl"===A.data.type)){let i=[];t.matrixWorld.decompose(Ty,Tx,Tb);let r=new tE().compose(Ty,Tx,Tv);wQ(t)&&i.push(MA(t.geometry,Tg.makeScale(Tb.x,Tb.y,Tb.z))),t.updateMatrixWorld();let s=r.clone().invert();if(t.traverse(A=>{wQ(A)&&(A.updateMatrixWorld(),Tg.multiplyMatrices(s,A.matrixWorld),i.push(MA(A.geometry,Tg)))}),i.length>0){let a=f_(i,!1);t.boundsTree=new m3(a),this.sharedGameControlGlobals.entitiesWithTransformAnim.push(t)}}else wQ(t)&&!this.sharedGameControlGlobals.entitiesWithTransformAnim.some(A=>t.isDescendantOf(A))&&A.push(MA(t.geometry,t.matrixWorld))}}),A.length>0){let t=f_(A,!1);this.sharedGameControlGlobals.staticMeshBVH=new m3(t)}}addCollider(A,e,t,i,r=!0){if(0===t?.getAttribute("position").count||t?.getIndex()?.count===0)return;let s=A.rigidBody,a;void 0!==i?a="sphere"===i.collider.type?A9.ColliderDesc.ball(i.collider.radius/this.pixelsPerMeter):"capsule"===i.collider.type?A9.ColliderDesc.capsule((i.collider.height/2-i.collider.radius)/this.pixelsPerMeter,i.collider.radius/this.pixelsPerMeter):A9.ColliderDesc.cuboid(i.collider.width/this.pixelsPerMeter/2,i.collider.height/this.pixelsPerMeter/2,i.collider.depth/this.pixelsPerMeter/2):t&&(a="trimesh"===e.colliderType?A9.ColliderDesc.trimesh(t.getAttribute("position").array,t.getIndex().array):A9.ColliderDesc.convexMesh(t.getAttribute("position").array,r?t.getIndex().array:void 0)),a.setFrictionCombineRule(A9.CoefficientCombineRule.Average).setRestitutionCombineRule(A9.CoefficientCombineRule.Average).setDensity(e.density).setFriction(e.friction).setRestitution(e.restitution);let o=this.sharedGameControlGlobals.rapierWorld.createCollider(a,s);if(this.sharedGameControlGlobals.colliderToEntity[o.handle]=A,void 0!==i){Ty.fromArray(i.collider.position).multiply(Tb.setFromMatrixScale(A.matrixWorld)).divideScalar(this.pixelsPerMeter),o.setTranslationWrtParent(Ty);let l=new e3().setFromEuler(new tR().setFromVector3(new e4().fromArray(i.collider.rotation)));o.setRotationWrtParent(l),o.setActiveEvents(A9.ActiveEvents.COLLISION_EVENTS)}else this.sharedGameControlGlobals.eventsPerObjects[A.uuid]?.some(A=>"scene"===A.target)&&o.setActiveEvents(A9.ActiveEvents.COLLISION_EVENTS)}initPhysics(A){this.sharedGameControlGlobals.rapierWorld=new A9.World(new A9.Vector3(0,A??-10,0)),this.events=new A9.EventQueue(!0);let e=[];if(this.scene.traverseEntity(A=>{let t=A.dataPatched;if(A&&gM(A)&&A.visible){let i,r=t.states.some(A=>void 0!==A.data.position||void 0!==A.data.rotation||void 0!==A.data.hiddenMatrix),s=t.events.find(A=>!0!==A.data.disabled&&"Follow"===A.data.type),a=!1;for(let o of t.events)if(!0!==o.data.disabled){if("GameControl"===o.data.type)i=o.data;else if("Collision"===o.data.type){a=!0;let l=new Tm(o.data,A,this.scene,this.sharedAssets);this.collisionEvents.push(l),this.sharedGameControlGlobals.eventsPerObjects[A.uuid]?this.sharedGameControlGlobals.eventsPerObjects[A.uuid].push(l):this.sharedGameControlGlobals.eventsPerObjects[A.uuid]=[l]}}if(!t.physics)return!0;if("dynamic"===t.physics.rigidBody&&!1===t.physics.fusedBody&&(A.matrixWorldFusedFalse=A.matrixWorld.clone()),"dynamic"===t.physics.rigidBody||r||s||a||void 0!==i){let h=[];void 0!==i||"dynamic"!==t.physics.rigidBody||A.hiddenMatrix.elements.every((A,e)=>e%5==0&&1e-8>Math.abs(1-A)||1e-8>Math.abs(A))||(A.matrixWorld0=A.matrixWorld.clone(),A.matrixWorld.identity()),A instanceof yQ&&void 0!==A.geometry.getAttribute("position")&&(void 0!==A.matrixWorld0&&A.geometry.applyMatrix4(A.matrixWorld0),h.push(MA(A.geometry)));let c=A.matrixWorld.clone().invert();if(t.physics.fusedBody&&A.traverse(e=>{e!==A&&(A.matrixWorld0?(Tg.copy(e.matrixWorld),e.parent===A&&(e.hiddenMatrix0=e.hiddenMatrix.clone(),e.hiddenMatrix.premultiply(A.matrixWorld0))):Tg.multiplyMatrices(c,e.matrixWorld),e instanceof yQ&&void 0!==e.geometry.getAttribute("position")&&h.push(MA(e.geometry,Tg)))}),h.length>0||void 0!==i){let d,u;void 0!==i?d=A9.RigidBodyDesc.kinematicPositionBased():"dynamic"===t.physics.rigidBody?(d=A9.RigidBodyDesc.dynamic()).setLinearDamping(t.physics.damping).setAdditionalMass(1e-9).setGravityScale(t.physics.gravityScale).enabledRotations(...t.physics.enabledRotation).enabledTranslations(...t.physics.enabledTranslation):r||s?(d=A9.RigidBodyDesc.kinematicPositionBased(),this.sharedGameControlGlobals.entitiesWithTransformAnim.push(A)):d=A9.RigidBodyDesc.fixed(),u=h.length>0?f_(h):void 0,void 0===A.matrixWorld0&&(A.matrixWorld.decompose(Ty,Tx,Tb),Ty.divideScalar(this.pixelsPerMeter),A.position0=Ty.clone(),A.rotation0=Tx.clone(),d.setTranslation(Ty.x,Ty.y,Ty.z).setRotation(Tx),u?.scale(Tb.x,Tb.y,Tb.z)),u?.scale(1/this.pixelsPerMeter,1/this.pixelsPerMeter,1/this.pixelsPerMeter);let p=this.sharedGameControlGlobals.rapierWorld.createRigidBody(d);void 0===i&&"dynamic"===t.physics.rigidBody&&this.rigidBodyToMesh.set(p.handle,[A,Tb.clone(),t.physics.fusedBody]),A.rigidBody=p;let f=!(void 0===t.geometry||"SubdivGeometry"===t.geometry.type||"NonParametricGeometry"===t.geometry.type||"BooleanGeometry"===t.geometry.type||"VectorGeometry"===t.geometry.type||"StarGeometry"===t.geometry.type||"RectangleGeometry"===t.geometry.type||"EllipseGeometry"===t.geometry.type||"TriangleGeometry"===t.geometry.type||"TorusGeometry"===t.geometry.type||"HelixGeometry"===t.geometry.type);try{this.addCollider(A,t.physics,u,i,f)}catch{this.addCollider(A,t.physics,u,i,!1)}}}else this.gameControlStates.some(([e])=>A.isDescendantOf(e))||(wQ(A)&&e.push(MA(A.geometry,A.matrixWorld)),t.physics.fusedBody&&A.traverse(t=>{wQ(t)&&t!==A&&e.push(MA(t.geometry,t.matrixWorld))}));if(t.physics?.fusedBody===!0)return!0}}),0===e.length)return;let t=f_(e);t.scale(1/this.pixelsPerMeter,1/this.pixelsPerMeter,1/this.pixelsPerMeter);let i=A9.RigidBodyDesc.fixed(),r=this.sharedGameControlGlobals.rapierWorld.createRigidBody(i),s=A9.ColliderDesc.trimesh(t.getAttribute("position").array,t.getIndex().array).setFrictionCombineRule(A9.CoefficientCombineRule.Multiply).setRestitutionCombineRule(A9.CoefficientCombineRule.Multiply).setFriction(1).setRestitution(1);this.sharedGameControlGlobals.rapierWorld.createCollider(s,r)}updatePositions(){return this.nActiveRigidBodies=0,this.sharedGameControlGlobals.rapierWorld.forEachRigidBody(this.processRigidBody),this.nActiveRigidBodies>0}dispose(){for(let A of(this.scene.traverse(A=>{let e=A;if(e.matrixWorld0){let t=Tg.copy(e.matrixWorld0).invert();e instanceof yQ&&e.geometry.applyMatrix4(t),e.matrixWorld.copy(e.matrixWorld0),e.matrixWorld0=void 0}e.hiddenMatrix0&&(e.hiddenMatrix=e.hiddenMatrix0,e.hiddenMatrix0=void 0),e.matrixWorldFusedFalse&&(e.matrixWorldFusedFalse=void 0),e.rigidBody&&(e.rigidBody=void 0),e.position0&&(e.position0=void 0),e.rotation0&&(e.rotation0=void 0)}),this.sharedGameControlGlobals.rapierWorld?.free(),this.sharedGameControlGlobals.staticMeshBVH=void 0,this.sharedGameControlGlobals.entitiesWithTransformAnim=[],this.gameControls.forEach(A=>{A.reset(),A.dispose()}),this.gameControls=[],this.joysticks.forEach(([A,e])=>{A?.destroy(),e.remove()}),this.joystickToGameControls=[],this.joysticks=[],this.orbitControls?.dispose(),this.orbitControls=void 0,Object.values(this.sharedGameControlGlobals.eventsPerObjects)))A.forEach(A=>A.disconnect());this.sharedGameControlGlobals.eventsPerObjects={},this.scene.updateMatrixWorld(!0)}update(A,e,t){let i=!0;if(void 0!==this.orbitControls&&(i=!this.orbitControls.update()),this.initializationCounter>=0&&this.initializationCounter<2)this.initializationCounter++,i=!1;else if(2===this.initializationCounter)for(let r of this.gameControls)i=!r.update(A,e,t)&&i;if(this.usePhysics&&(0===this.gameControls.length||this.needsCollisionDetection)){for(let s of this.sharedGameControlGlobals.entitiesWithTransformAnim){s.matrixWorld.decompose(Ty,Tx,Tb),Tw.setFromQuaternion(Tx);let a=s;void 0===a.prevR?(a.prevR=Tw.clone(),a.prevT=Ty.clone()):(a.prevR.copy(Tw),a.prevT.copy(Ty)),s.rigidBody.setNextKinematicTranslation(Ty.divideScalar(this.pixelsPerMeter)),s.rigidBody.setNextKinematicRotation(Tx)}this.sharedGameControlGlobals.rapierWorld.step(this.events),this.events?.drainCollisionEvents(this.handleCollisionEvents),i=!this.updatePositions()&&i}return i}dispatchCollisionEvent(A,e){e.dispatchEvent(TM),A.dispatch()}},TT={type:"change"},TC={type:"lock"},TD={type:"unlock"},TP=(new e4,new e4),T_=new e4,TL=new e4,TO=new e4,TB=new e4,TI=new e4,TR=new tE,TN=new tE,Tz=new tE,TF=new tE,TU=new e3,Tk=new e3,TG=new tR(0,0,0,"YXZ"),TV=new e4(1,0,0),Tj=new e4(0,1,0),TH=new e4(0,0,1),TW=new e4(1,1,1),TY=new a5,TX=new e8,TQ={type:"requestRender"},Tq=Math.PI/6,TZ=class extends ev{constructor(A,e,t,i,r,s,a,o,l){super(),this.object=A,this.domElement=e,this.sharedGameControlGlobals=r,this.cameraFollow=s,this.camera=a,this.scene=o,this.sharedAssets=l,this.enableDamping=!0,this.position0=new e4,this.rotation0=new tR(0,0,0,"XYZ"),this.scale0=new e4,this.hiddenMatrix0=new tE,this.target0=new e4,this.zoom0=1,this.rotForce=1,this.moveForce=1,this.euler0=new tR(0,0,0,"YXZ"),this.position0Cam=new e4,this.quat0Cam=new e3,this.scale0Cam=new e4,this.hiddenMatrix0Cam=new tE,this.threshEndTranslate=.01,this.threshEndRotate=1e-8,this.threshEndRotVel=.005,this.collider={type:"capsule",radius:40,segment:new a5(new e4(0,-40,0),new e4(0,40,0)),matrix:new tE,position:new e4,rotation:new e3},this.euler=new tR(0,0,0,"YXZ"),this.eulerDelta=new e4,this.lastPosition=new e4,this.lastCameraQuaternion=new e3,this.lastCameraPosition=new e4,this.PI_2=Math.PI/2,this.prevMouse=new e_,this.velocityTarget=new e4,this.velocity=new e4,this.directionXZ=new e4,this.rotVelocityStick=new e4,this.rotVelocityTarget=new e4,this.rotVelocity=new e4,this.rotDirection=new e4,this.nonColliderRotOffset=new tE,this.nonColliderPosOffset=new tE,this.firstPointerId=-1,this.rot=new e4,this.movementState={moveNegZ:0,movePosZ:0,moveNegX:0,movePosX:0,moveNegY:0,movePosY:0,rotPosX:0,rotNegX:0,rotPosY:0,rotNegY:0,jump:0},this.vrEulerYOffset=0,this.onObject=!1,this.actionState={},this.keyAssignments=[["moveNegZ","W"],["moveNegX","A"],["movePosZ","S"],["movePosX","D"],["rotPosX","ArrowUp"],["rotPosY","ArrowLeft"],["rotNegX","ArrowDown"],["rotNegY","ArrowRight"],["jump"," "]],this.collisionEnabled=!0,this.offsetMatrix=new tE,this.objectToTarget=new e4,this.objectToTarget0=new e4,this.objectToCamXZ=new e4,this.objectToCamXZ0=new e4,this.targetToCamera=new e4,this.targetToCamera0=new e4,this.cameraPolarAxis0=new e4,this.targetPos=new e4,this.targetQuat=new e3,this.lerpFactorPos=new e4().setScalar(.3),this.lerpFactorPosStart=.3,this.lerpFactorPosEnd=.3,this.lerpFactorRotStart=.3,this.lerpFactorRotEnd=.3,this.lerpFactorPosCamera=.3,this.lerpFactorRotCamera=.3,this.objXZQuat=new e3,this.objXZQuatInv=new e3,this.objXZRotMat=new tE,this.isFirstPerson=!1,this.actions={},this.didHit=!1,this.groundVelocity=new e4,this.pushedVelocity=new e4,this.groundYRotation=0,this.objectRealQuat=new e3,this.colliderWorldQuat=new e3,this.groundNormal=new e4,this.groundTilt=new e3,this.groundTiltInv=new e3,this.lastHitObj=null,this.isFirstFrame=!0,this.rotationAccumWhenOrientWithCamera=0,this.onPointerDown=A=>{A.target!==this.domElement||-1!==this.firstPointerId||(this.firstPointerId=A.pointerId,this.domElement.ownerDocument.addEventListener("pointermove",this.onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this.onPointerUp),"keys"===this.rotBy||fn||fa&&!(fo>=15.5)||this.domElement.requestPointerLock(),this.prevMouse.set(A.clientX,A.clientY))},this.onPointerUp=A=>{this.firstPointerId=-1,this.domElement.ownerDocument.removeEventListener("pointermove",this.onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this.onPointerUp),"mouse"===A.pointerType&&this.domElement.ownerDocument.exitPointerLock()},this.onPointerMove=A=>{if(A.pointerId!==this.firstPointerId)return;let e=A.clientX-this.prevMouse.x,t=A.clientY-this.prevMouse.y;this.prevMouse.set(A.clientX,A.clientY),"mouse"===A.pointerType&&"keys"!==this.rotBy&&(fa&&fo<15.5&&!fn?(this.eulerDelta.y=-e*this.mouseOrbitSensitivity,this.eulerDelta.x=-t*this.mouseOrbitSensitivity):(this.eulerDelta.y=-A.movementX*this.mouseOrbitSensitivity,this.eulerDelta.x=-A.movementY*this.mouseOrbitSensitivity)),"mouse"!==A.pointerType&&"drag"===this.rotByTouch&&(this.eulerDelta.y=-e*this.mouseOrbitSensitivity*5,this.eulerDelta.x=-t*this.mouseOrbitSensitivity*5),this.dispatchEvent(TT)},this.onPointerlockChange=A=>{this.domElement.ownerDocument.pointerLockElement===this.domElement?(this.dispatchEvent(TC),TZ.isLocked=!0):(this.dispatchEvent(TD),TZ.isLocked=!1)},this.onPointerlockError=()=>{console.error("SPE.GameControls: Unable to use Pointer Lock API")},this.onKeyDown=A=>{for(let e of(A.preventDefault(),this.keyAssignments))if(A.key.toUpperCase()===e[1]||A.key===e[1]){this.movementState[e[0]]=1;break}this.dispatchEvent(TT)},this.onKeyUp=A=>{for(let e of this.keyAssignments)if(A.key.toUpperCase()===e[1]||A.key===e[1]||A.code.slice(3,A.code.length).toUpperCase()===e[1]){this.movementState[e[0]]=0;break}},this.copyVRGamePadValues=(A,e)=>{for(let t=2;t<4;t++){let i=A.axes[t];0===e?2===t?this.movementState.movePosX=i:this.movementState.movePosZ=i:(A.buttons[3].pressed?this.movementState.jump=1:this.movementState.jump=0,2===t?(.3>Math.abs(this.movementState.rotPosY)&&Math.abs(i)>=.3&&(this.vrEulerYOffset+=i<0?1:-1),this.movementState.rotPosY=i):"fly"===this.moveMode&&(this.movementState.moveNegY=i))}},A===a&&(this.isFirstPerson=!0),this.position0.copy(this.object.position),this.rotation0.copy(this.object.rotation),this.scale0.copy(this.object.scale),this.hiddenMatrix0.copy(this.object.hiddenMatrix),this.object.parent?this.object.hiddenMatrix.copy(this.object.parent.matrixWorld).invert():this.object.hiddenMatrix.identity(),this.object.matrix.copy(this.object.matrixWorld),this.object.matrix.decompose(this.object.position,this.object.quaternion,this.object.scale),this.object.rotation.reorder("YXZ"),this.euler0.copy(this.object.rotation);let h=this.object.rotation.y;if(this.objectRealQuat.copy(this.object.quaternion),this.object.rotation.y=0,this.objXZQuat.copy(this.object.quaternion),this.objXZQuatInv.copy(this.objXZQuat).invert(),this.objXZRotMat.makeRotationFromQuaternion(this.object.quaternion),this.object.rotation.set(0,h,0),this.rot.setFromEuler(this.object.rotation),this.object.matrixAutoUpdate=!1,(this.isFirstPerson||!0===this.cameraFollow)&&(this.target0.copy(this.camera.getTarget()),this.zoom0=this.camera.zoom),!0===this.cameraFollow){let c;if(this.position0Cam.copy(this.camera.position),this.quat0Cam.copy(this.camera.quaternion),this.scale0Cam.copy(this.camera.scale),this.hiddenMatrix0Cam.copy(this.camera.hiddenMatrix),this.camera?.parent?.parent){let d=this.camera.matrix.clone().invert().premultiply(this.camera.matrixWorld),u=d.clone().invert();this.camera.hiddenMatrix.multiply(u),this.camera.matrix.premultiply(d),this.camera.matrixWorld.decompose(this.camera.position,this.camera.quaternion,this.camera.scale)}this.camera.matrixAutoUpdate=!1,this.offsetMatrix.copy(this.object.matrix).invert().multiply(this.camera.matrix);let p=new e4(0,0,-1).applyQuaternion(this.camera.quaternion),f=new e4().subVectors(this.object.position,this.camera.position);if(this.objectToCamXZ.copy(f),this.objectToCamXZ.y=0,this.objectToCamXZ0.copy(this.objectToCamXZ),1e-6>Math.abs(p.y)){f.y=0,p.y=0;let m=f.projectOnVector(p);this.targetToCamera0.copy(m).negate(),c=this.camera.position.clone().add(m)}else{let g=p.multiplyScalar(f.y/p.y);this.targetToCamera0.copy(g).negate(),c=g.clone().add(this.camera.position)}this.objectToTarget0.subVectors(c,this.object.position);let v=new tR().setFromQuaternion(this.camera.quaternion,"YXZ");this.cameraPolarOffset=-v.x,v.x=0,v.z=0,v.y-=Math.PI/2,this.cameraPolarAxis0.set(0,0,-1).applyEuler(v)}if(this.object instanceof wj&&(this.object.matrixAutoUpdate=!1),this.euler.setFromQuaternion(this.object.quaternion,"YXZ"),this.connect(),this.rotByTouch=t.rotByTouch??"joystick",this.rotBy=t.rotBy??"keys",this.rotationMode=t.rotationMode??"normal",this.moveMode=t.moveMode??"walk",this.collisionEnabled=t.collisionEnabled,this.speedTranslate=(t.speedTranslate??250)*1,this.speedOrbit=(t.speedRotate??100)*.025,this.mouseOrbitSensitivity=(t.speedRotate??100)*16e-6,this.keyAssignments=t.keyAssignments.map(A=>{let e=[A[0],A[1]];return"▲"===e[1]?e[1]="ArrowUp":"◀"===e[1]?e[1]="ArrowLeft":"▼"===e[1]?e[1]="ArrowDown":"▶"===e[1]?e[1]="ArrowRight":"⇧"===e[1]?e[1]="Shift":"↵"===e[1]?e[1]="Enter":"Space"===e[1]?e[1]=" ":"⌘"===e[1]?e[1]="Meta":"Ctrl"===e[1]?e[1]="Control":"Esc"===e[1]&&(e[1]="Escape"),e}),"mouse"===t.rotBy){let y;-1!==(y=this.keyAssignments.findIndex(A=>"rotNegX"===A[0]))&&(this.keyAssignments[y][1]=""),-1!==(y=this.keyAssignments.findIndex(A=>"rotPosX"===A[0]))&&(this.keyAssignments[y][1]=""),-1!==(y=this.keyAssignments.findIndex(A=>"rotPosY"===A[0]))&&(this.keyAssignments[y][1]=""),-1!==(y=this.keyAssignments.findIndex(A=>"rotNegY"===A[0]))&&(this.keyAssignments[y][1]="")}this.lerpFactorPosStart=1-.02**(1/((t.delayPos[0]??.3)*60)),this.lerpFactorPosEnd=1-.02**(1/((t.delayPos[1]??.3)*60)),this.lerpFactorPos.setScalar(this.lerpFactorPosStart),this.lerpFactorRotStart=1-.02**(1/((t.delayRot[0]??.3)*60)),this.lerpFactorRotEnd=1-.02**(1/((t.delayRot[1]??.3)*60)),this.lerpFactorPosCamera=1-.02**(1/((t.delayPosCamera??.3)*60)),this.lerpFactorRotCamera=1-.02**(1/((t.delayRotCamera??.3)*60)),this.gravity=(i.gravity??mO.defaultData.gravity)*12,this.pixelsPerMeter=i.pixelsPerMeter??mO.defaultData.pixelsPerMeter,this.usePhysics=i.usePhysics??mO.defaultData.usePhysics,this.jumpPower=20*t.jumpPower,this.resetYPosition=t.resetYPosition,this.alignToGround=t.alignToGround??!1,this.orientMode=t.autoOrientMove?t.orientMode:"none",this.orientWith=t.orientWith??mN.defaultDataThirdPerson.orientWith;let x=i.skinWidthRelative??mO.defaultData.skinWidthRelative,b=i.stepThreshRelative??mO.defaultData.stepThreshRelative;this.slopeThresh=(i.slopeThresh??mO.defaultData.slopeThresh)*Math.PI/180,"capsule"===t.collider.type?(this.collider.radius=t.collider.radius,this.collider.segment.start.y=t.collider.height/2-t.collider.radius,this.collider.segment.end.y=-this.collider.segment.start.y,this.offset=t.collider.height*x/this.pixelsPerMeter,this.stepThresh=t.collider.height*b/this.pixelsPerMeter):"sphere"===t.collider.type?(this.collider.radius=t.collider.radius,this.collider.segment.start.y=0,this.collider.segment.end.y=0,this.offset=2*t.collider.radius*x/this.pixelsPerMeter,this.stepThresh=2*t.collider.radius*b/this.pixelsPerMeter):(this.offset=t.collider.height*x/this.pixelsPerMeter,this.stepThresh=t.collider.height*b/this.pixelsPerMeter),this.collider.type=t.collider.type;let w=new e4().fromArray(t.collider.position),S=new e3().setFromEuler(new tR().fromArray([...t.collider.rotation,"XYZ"]));this.collider.position.copy(w).multiply(this.object.scale),this.collider.rotation.copy(S),this.collider.matrix.compose(w,S,TW),void 0!==t.cameraXAxis&&(this.cameraXAxis=t.cameraXAxis,this.cameraYAxis=t.cameraYAxis,this.minPolarAngle=t.cameraRotXLimits[0],this.maxPolarAngle=t.cameraRotXLimits[1],this.minAzimuthAngleRel=t.cameraRotYLimits[0],this.maxAzimuthAngleRel=t.cameraRotYLimits[1]),void 0!==t.gameActions&&Object.entries(t.gameActions).forEach(([e,t],i)=>{t.forEach(({id:t,data:i})=>{try{void 0===this.actions[e]&&(this.actions[e]=[]),"Transition"===i.type?this.actions[e].push(new EL(t,i,o,l)):"Audio"===i.type?this.actions[e].push(new My(t,i,A,l)):"Video"===i.type&&this.actions[e].push(new MM(t,i,A))}catch{}})}),this.dispatchStopEvent("move"),this.dispatchStopEvent("jump"),this.dispatchStartEvent("idle")}reset(A=!1){if(this.object.rotation.copy(this.rotation0),this.object.position.copy(this.position0),this.object.scale.copy(this.scale0),this.object.hiddenMatrix.copy(this.hiddenMatrix0),!0===A){this.object.updateMatrix(),this.object.updateMatrixWorld(),this.object.matrix.copy(this.object.matrixWorld),this.object.matrix.decompose(this.object.position,this.object.quaternion,this.object.scale),this.object.parent?this.object.hiddenMatrix.copy(this.object.parent.matrixWorld).invert():this.object.hiddenMatrix.identity(),this.object.rotation.reorder("YXZ");let e=this.object.rotation.y;this.object.rotation.y=0,this.objXZQuat.copy(this.object.quaternion),this.objXZQuatInv.copy(this.objXZQuat).invert(),this.objXZRotMat.makeRotationFromQuaternion(this.object.quaternion),this.object.rotation.set(0,e,0),this.rot.setFromEuler(this.object.rotation),this.euler.setFromQuaternion(this.object.quaternion,"YXZ"),this.velocityTarget.set(0,0,0),this.velocity.set(0,0,0)}!1===A&&(this.object instanceof wj?this.object.matrixAutoUpdate=!0:this.object.updateMatrix()),!0===this.cameraFollow&&(this.camera.quaternion.copy(this.quat0Cam),this.camera.position.copy(this.position0Cam),this.camera.scale.copy(this.scale0Cam),this.camera.hiddenMatrix.copy(this.hiddenMatrix0Cam),this.camera.matrixAutoUpdate=!0),this.dispatchEvent(TT)}connect(){this.domElement.ownerDocument.addEventListener("pointerdown",this.onPointerDown),this.domElement.ownerDocument.addEventListener("keydown",this.onKeyDown),this.domElement.ownerDocument.addEventListener("keyup",this.onKeyUp),this.domElement.ownerDocument.addEventListener("pointerlockchange",this.onPointerlockChange),this.domElement.ownerDocument.addEventListener("pointerlockerror",this.onPointerlockError)}disconnect(){this.domElement.ownerDocument.removeEventListener("pointerdown",this.onPointerDown),this.domElement.ownerDocument.removeEventListener("keydown",this.onKeyDown),this.domElement.ownerDocument.removeEventListener("keyup",this.onKeyUp),this.domElement.ownerDocument.removeEventListener("pointerlockchange",this.onPointerlockChange),this.domElement.ownerDocument.removeEventListener("pointerlockerror",this.onPointerlockError)}dispose(){this.disconnect(),Object.values(this.actions).forEach(A=>{A.forEach(A=>{(A instanceof EL||A instanceof My||A instanceof MM)&&A.dispose()})})}resetTo(A,e,t){}dispatchStartEvent(A){void 0!==this.actions[A]&&(this.actionState[A]||(this.actionState[A]=!0,this.actions[A].forEach(A=>{A instanceof EL?A.play():A instanceof My&&A.dispatchGameControl("start")})))}dispatchStopEvent(A){void 0===this.actions[A]||this.actionState[A]&&(this.actionState[A]=!1,this.actions[A].forEach(A=>{A instanceof EL?A.stop():A instanceof My&&A.dispatchGameControl("stop")}),this.object.traverseEntity(A=>{null!==A.currentState&&A.changeSelectedState(null,{scene:this.scene,shared:this.sharedAssets})}))}update(A,e,t){if(this.gravity<0?this.object.position.y<this.resetYPosition:this.object.position.y>this.resetYPosition)return this.reset(!0),!0;this.sharedGameControlGlobals.gamePads.forEach(this.copyVRGamePadValues);let i=(this.isFirstFrame?16.6:A)/1e3;this.isFirstFrame&&(this.isFirstFrame=!1);let r=60*i,s=!1;if(this.usePhysics){let a=TB.set(0,(0===this.velocity.y?-this.pixelsPerMeter:this.velocity.y)*i,0).divideScalar(this.pixelsPerMeter),o=this.sharedGameControlGlobals.rapierWorld.castShape(TO.copy(this.collider.position).applyQuaternion(this.objectRealQuat).add(this.object.position).divideScalar(this.pixelsPerMeter),this.colliderWorldQuat,a,this.object.rigidBody?.collider(0).shape,1,8,void 0,void 0,this.object.rigidBody);if(o){this.onObject=!0,this.groundNormal.set(o.normal2.x,o.normal2.y,o.normal2.z).applyQuaternion(this.colliderWorldQuat).negate(),this.alignToGround&&this.groundTiltAdjustment(this.groundNormal),Math.acos(this.groundNormal.y)<this.slopeThresh&&(s=!0);let l=o.collider._parent;for(let h of(this.groundYRotation=0,this.groundVelocity.set(0,0,0),this.sharedGameControlGlobals.entitiesWithTransformAnim))if(h.rigidBody===l){h.matrixWorld.decompose(TO,Tk,TB),this.groundVelocity.subVectors(TO,h.prevT),this.object.getWorldPosition(TB).add(this.collider.position).sub(h.position),this.groundYRotation=TG.setFromQuaternion(Tk).y-h.prevR.y,TI.copy(TB).applyAxisAngle(Tj,this.groundYRotation),this.groundVelocity.add(TI.sub(TB)).divideScalar(i);break}}else this.onObject=!1}"walk"===this.moveMode&&this.collisionEnabled&&(1===this.movementState.jump&&this.onObject&&(this.velocityTarget.y=this.jumpPower,this.movementState.jump=0,this.dispatchStopEvent("idle"),this.dispatchStopEvent("move"),this.dispatchStopEvent("jump"),this.dispatchStartEvent("jump"),this.onObject=!1),this.velocityTarget.y+=this.onObject?0:this.gravity*r),"fly"===this.moveMode&&(this.velocityTarget.y=(this.movementState.movePosY-this.movementState.moveNegY)*this.speedTranslate),this.directionXZ.z=this.movementState.movePosZ-this.movementState.moveNegZ,this.directionXZ.x=this.movementState.movePosX-this.movementState.moveNegX,this.directionXZ.normalize(),this.movementState.moveNegZ||this.movementState.movePosZ?this.velocityTarget.z=this.directionXZ.z*this.speedTranslate*this.moveForce:this.velocityTarget.z=0,this.movementState.moveNegX||this.movementState.movePosX?this.velocityTarget.x=this.directionXZ.x*this.speedTranslate*this.moveForce:this.velocityTarget.x=0,("walk"===this.moveMode?this.velocityTarget.x+this.velocityTarget.z===0:0===this.velocityTarget.manhattanLength())?this.lerpFactorPos.setScalar(this.lerpFactorPosEnd):this.lerpFactorPos.setScalar(this.lerpFactorPosStart),"walk"===this.moveMode&&(this.lerpFactorPos.y=1),!1===this.didHit&&0===this.pushedVelocity.manhattanLength()||!1===this.usePhysics?(this.velocity.x+=(this.velocityTarget.x-this.velocity.x)*(1-(1-this.lerpFactorPos.x)**r),this.velocity.y+=(this.velocityTarget.y-this.velocity.y)*(1-(1-this.lerpFactorPos.y)**r),this.velocity.z+=(this.velocityTarget.z-this.velocity.z)*(1-(1-this.lerpFactorPos.z)**r)):this.velocity.copy(this.velocityTarget),("walk"===this.moveMode?this.velocity.x**2+this.velocity.z**2<this.speedTranslate:this.velocity.lengthSq()<this.speedTranslate)?(this.dispatchStopEvent("move"),this.onObject&&(this.dispatchStopEvent("jump"),this.dispatchStartEvent("idle"))):(this.dispatchStopEvent("idle"),this.onObject&&(this.dispatchStopEvent("jump"),this.dispatchStartEvent("move")));let c=TL.copy(this.velocity);if("none"!==this.orientMode&&!1===this.isFirstPerson){let d=TB.copy(c);d.y=0,c.set(0,c.y,-1*d.length())}if(TG.setFromVector3(this.rot),"walk"===this.moveMode&&(TG.x=0),c.applyEuler(TG),s&&(Tk.setFromUnitVectors(Tj,this.groundNormal),c.applyQuaternion(Tk)),t){let u=TG.set(0,this.vrEulerYOffset*Tq,0);t.applyEuler(u),c.x+=t.x,c.z+=t.z,this.nonColliderPosOffset.elements[13]+=t.y*i}if(!0===this.usePhysics){for(let p of(this.pushedVelocity.set(0,0,0),this.sharedGameControlGlobals.entitiesWithTransformAnim)){p.parent?.matrixWorldFusedFalse?TR.multiplyMatrices(p.parent?.matrixWorldFusedFalse,p.matrix):TR.multiplyMatrices(p.parent.matrixWorld,p.matrix);let f=TI.setFromMatrixPosition(TR).sub(p.prevT).divideScalar(i).divideScalar(this.pixelsPerMeter),m=p.rigidBody.collider(0).castCollider(f,this.object.rigidBody.collider(0),TO.copy(c).divideScalar(this.pixelsPerMeter),i);if(f.multiplyScalar(this.pixelsPerMeter),null!==m){this.pushedVelocity.copy(f),TB.copy(m.normal1).applyQuaternion(p.quaternion);break}}if(0!==this.pushedVelocity.manhattanLength()){let g=TB.dot(c);g<0&&c.addScaledVector(TB,-g),c.add(this.pushedVelocity)}else c.add(this.groundVelocity)}if(this.rotDirection.y=Number(this.movementState.rotPosY)-Number(this.movementState.rotNegY),this.rotDirection.x=Number(this.movementState.rotPosX)-Number(this.movementState.rotNegX),this.rotDirection.normalize(),"normal"===this.rotationMode&&(this.movementState.rotPosX||this.movementState.rotNegX)||"steer"===this.rotationMode&&(this.movementState.rotPosX||this.movementState.rotNegX)&&(this.movementState.movePosZ||this.movementState.moveNegZ||"walk"===this.moveMode)?this.rotVelocityStick.x=-this.rotDirection.x*this.speedOrbit*this.rotForce:this.rotVelocityStick.x=0,"normal"===this.rotationMode&&(this.movementState.rotPosY||this.movementState.rotNegY)||"steer"===this.rotationMode&&(this.movementState.rotPosY||this.movementState.rotNegY)&&(this.movementState.movePosZ||this.movementState.moveNegZ)?this.rotVelocityStick.y=-this.rotDirection.y*this.speedOrbit*this.rotForce:this.rotVelocityStick.y=0,this.rotVelocityTarget.subVectors(this.eulerDelta.divideScalar(i),this.rotVelocityStick),0===this.rotVelocityTarget.manhattanLength()?this.rotVelocity.lerp(this.rotVelocityTarget,1-(1-this.lerpFactorRotEnd)**r):this.rotVelocity.lerp(this.rotVelocityTarget,1-(1-this.lerpFactorRotStart)**r),this.euler.x+=this.rotVelocity.x*i,this.euler.y+=this.rotVelocity.y*i+this.groundYRotation,0===this.rotVelocityTarget.y&&0===this.directionXZ.manhattanLength()?this.rotationAccumWhenOrientWithCamera=0:(!1===this.cameraFollow||"Locked"===this.cameraYAxis)&&(this.rotationAccumWhenOrientWithCamera+=this.rotVelocity.y*i),!1===this.isFirstPerson&&"none"!==this.orientMode&&this.directionXZ.manhattanLength()>0){let v=TB.copy(this.directionXZ);v.x*=-1,this.camera.getWorldDirection(TO);let y=TI.copy(Tj).multiplyScalar(TO.dot(Tj));if(TO.sub(y),"camera"===this.orientWith?this.rot.y=TO.angleTo(v)*(TO.cross(v).y>0?-1:1)+this.rotationAccumWhenOrientWithCamera:this.rot.y=this.euler.y+Math.atan2(-this.directionXZ.z,this.directionXZ.x)-Math.PI/2,"radial"===this.orientMode){this.objectToCamXZ.copy(this.objectToCamXZ0).applyAxisAngle(Tj,this.euler.y-this.euler0.y);let x=TB.copy(this.objectToCamXZ).normalize(),b=TI.copy(c).multiplyScalar(i);b.y=0;let w=b.sub(TO.copy(x).multiplyScalar(b.dot(x))).cross(x).y;this.euler.y-=Math.atan2(w,this.objectToCamXZ.length())}}else this.rot.y+=this.rotVelocity.y*i+this.groundYRotation,0!==this.rotVelocityTarget.y&&(!1===this.cameraFollow||"Locked"===this.cameraYAxis)&&(this.euler.y=this.rot.y);if(!0===this.cameraFollow&&("walk"===this.moveMode?"Limit"===this.cameraXAxis?this.euler.x=eP.clamp(this.euler.x,-this.maxPolarAngle+this.cameraPolarOffset+1e-6,-this.minPolarAngle+this.cameraPolarOffset-1e-6):this.euler.x=eP.clamp(this.euler.x,-this.PI_2+this.cameraPolarOffset,this.PI_2+this.cameraPolarOffset):"Limit"===this.cameraXAxis&&(this.euler.x=eP.clamp(this.euler.x,-this.PI_2,this.PI_2))),"fly"===this.moveMode?this.rot.x=this.euler.x:this.isFirstPerson&&(e?(TG.copy(e),TG.y=0):(TG.copy(this.euler),TG.y=0),this.nonColliderRotOffset.makeRotationFromEuler(TG)),e&&("walk"===this.moveMode?(this.rot.y=e.y,this.rot.x=0,this.rot.z=0):this.rot.setFromEuler(e),this.rot.y+=this.vrEulerYOffset*Tq),TU.setFromAxisAngle(TV,this.rot.x),Tk.setFromAxisAngle(Tj,this.rot.y),Tk.multiply(TU),TU.setFromAxisAngle(TH,this.rot.z),Tk.multiply(TU),this.object.quaternion.copy(Tk),this.objectRealQuat.multiplyQuaternions(this.object.quaternion,this.objXZQuat),this.objectRealQuat.multiply(this.objXZQuat),this.colliderWorldQuat.copy(this.objectRealQuat).multiply(this.collider.rotation),this.collisionEnabled){if(this.usePhysics){let S=TB.copy(c).multiplyScalar(i/this.pixelsPerMeter),M;this.didHit=!1;let E=new e4;for(let T=0;T<5;T++){let C=S.length(),D=TI.copy(S).normalize();if(null!==(M=this.sharedGameControlGlobals.rapierWorld.castShape(TO.copy(this.collider.position).applyQuaternion(this.objectRealQuat).add(this.object.position).divideScalar(this.pixelsPerMeter).add(E),this.colliderWorldQuat,D,this.object.rigidBody?.collider(0).shape,C,8,void 0,void 0,this.object.rigidBody))){this.didHit=!0;let P=this.sharedGameControlGlobals.colliderToEntity[M.collider.handle];if(P!==this.lastHitObj&&0===T){this.lastHitObj=P;let _=this.sharedGameControlGlobals.eventsPerObjects[P?.uuid];if(_)for(let L of _)"character"===L.data.target&&(P.dispatchEvent(TM),L.dispatch())}let O=TP.set(M.normal2.x,M.normal2.y,M.normal2.z).applyQuaternion(this.colliderWorldQuat),B=T_.copy(D).multiplyScalar(M.toi).dot(O),I=M.toi;if(0===I&&(this.object.position.y+=this.offset*this.pixelsPerMeter),B>this.offset&&(I=M.toi*(B-this.offset)/B,E.addScaledVector(D,I)),S.copy(D).multiplyScalar(C-I),Math.acos(-O.y)>this.slopeThresh){let R=TO.copy(this.collider.position).applyQuaternion(this.objectRealQuat).add(this.object.position).divideScalar(this.pixelsPerMeter).add(E),N=TI.copy(M.witness2).applyQuaternion(this.colliderWorldQuat);N.y=0;let z=R.add(N);z.y+=this.stepThresh;let F=this.sharedGameControlGlobals.rapierWorld.castShape(z,this.colliderWorldQuat,S,this.object.rigidBody?.collider(0).shape,1,8,void 0,void 0,this.object.rigidBody);null!==F&&0===F.toi&&(O.y=0,O.normalize())}S.addScaledVector(O,-S.dot(O))}else{0===T&&0!==this.directionXZ.manhattanLength()&&(this.lastHitObj=null),E.add(S);break}}this.object.position.addScaledVector(E,this.pixelsPerMeter),this.object.rigidBody?.setTranslation(TO.copy(this.object.position).divideScalar(this.pixelsPerMeter),!0),this.object.rigidBody?.setRotation(TU.copy(this.object.quaternion).premultiply(this.groundTilt).multiply(this.objXZQuat),!0)}else{let U=this.onObject?1:5,k=c.multiplyScalar(i/U);for(let G=0;G<U;G++)this.object.position.add(k),this.collisionAdjustment(i/U)}}else this.object.position.addScaledVector(c,i);if("walk"===this.moveMode&&this.onObject&&(this.velocityTarget.y=0,this.velocity.y=0),this.object.quaternion.premultiply(this.groundTilt).multiply(this.objXZQuat),this.object.updateMatrix(),this.object.matrix.multiply(this.nonColliderPosOffset).multiply(this.nonColliderRotOffset),this.object.quaternion.premultiply(this.groundTiltInv).multiply(this.objXZQuatInv),!0===this.cameraFollow){this.updateFollowArms();let V=this.objectToTarget.add(this.object.position),j=this.targetToCamera.add(V);TR.lookAt(j,V,Tj).setPosition(j),TR.decompose(this.targetPos,this.targetQuat,TO),this.camera.quaternion.slerp(this.targetQuat,1-(1-this.lerpFactorRotCamera)**r),this.camera.position.lerp(this.targetPos,1-(1-this.lerpFactorPosCamera)**r),this.camera.updateMatrix(),this.camera.matrixWorldNeedsUpdate=!0,"Limit"===this.cameraYAxis&&"cartesian"===this.orientMode&&(this.euler.y=eP.clamp(this.euler.y,this.minAzimuthAngleRel,this.maxAzimuthAngleRel)),this.euler.x=eP.clamp(this.euler.x,-this.PI_2+(this.cameraPolarOffset<0?this.cameraPolarOffset:0),this.PI_2+(this.cameraPolarOffset>0?this.cameraPolarOffset:0))}return this.eulerDelta.set(0,0,0),(!(this.lastPosition.distanceToSquared(this.object.position)<this.threshEndTranslate&&Math.abs(this.rotVelocity.x)<this.threshEndRotVel&&Math.abs(this.rotVelocity.y)<this.threshEndRotVel&&(void 0===this.camera||this.isFirstPerson||this.lastCameraPosition.distanceToSquared(this.camera.position)<this.threshEndTranslate&&8*(1-this.lastCameraQuaternion.dot(this.camera.quaternion))<this.threshEndRotate))||"fly"!==this.moveMode&&!0!==this.onObject&&!1!==this.collisionEnabled)&&(this.camera&&(this.lastCameraPosition.copy(this.camera.position),this.lastCameraQuaternion.copy(this.camera.quaternion)),this.lastPosition.copy(this.object.position),this.object.dispatchEvent(TQ),!0)}updateFollowArms(){let A;this.objectToTarget.copy(this.objectToTarget0),this.targetToCamera.copy(this.targetToCamera0);let e=TU.setFromAxisAngle(Tj,"Limit"===this.cameraYAxis&&"radial"!==this.orientMode?eP.clamp(this.euler.y-this.euler0.y,this.minAzimuthAngleRel,this.maxAzimuthAngleRel):this.euler.y-this.euler0.y);("Locked"!==this.cameraYAxis||"radial"===this.orientMode)&&this.objectToTarget.applyQuaternion(e),A="Limit"===this.cameraXAxis?eP.clamp(this.euler.x,-this.maxPolarAngle+this.cameraPolarOffset+1e-6,-this.minPolarAngle+this.cameraPolarOffset-1e-6):eP.clamp(this.euler.x,-this.PI_2+this.cameraPolarOffset+1e-6,this.PI_2+this.cameraPolarOffset-1e-6);let t=TO.copy(this.cameraPolarAxis0);("Locked"!==this.cameraYAxis||"radial"===this.orientMode)&&t.applyQuaternion(e);let i=Tk.setFromAxisAngle(t,A);"Locked"!==this.cameraYAxis&&this.targetToCamera.applyQuaternion(e),"Locked"!==this.cameraXAxis&&this.targetToCamera.applyQuaternion(i)}groundTiltAdjustment(A){180*Tj.angleTo(A)/Math.PI<15||180*Tj.angleTo(A)/Math.PI>85?TU.identity():TU.setFromUnitVectors(Tj,A),this.groundTilt.slerp(TU,.06),this.groundTiltInv.copy(this.groundTilt).invert()}collisionAdjustment(A){let e=T_.set(0,0,0);this.object.updateMatrix();let t=TR.multiplyMatrices(this.object.matrix,this.objXZRotMat).multiply(this.collider.matrix).decompose(TO,TU,TB).compose(TO,TU,TW);this.sharedGameControlGlobals.entitiesWithTransformAnim.forEach(A=>{if(A===this.object||A.isDescendantOf(this.object))return;TX.makeEmpty();let i=TF.copy(A.matrixWorld).decompose(TO,TU,TB).compose(TO,TU,TW),r=TN.copy(i).invert(),s=Tz.copy(TN).multiply(t);TY.copy(this.collider.segment),TY.start.applyMatrix4(s),TY.end.applyMatrix4(s);let a=TP.copy(this.object.position).applyMatrix4(r);TX.expandByPoint(TY.start),TX.expandByPoint(TY.end),TX.min.addScalar(-this.collider.radius),TX.max.addScalar(this.collider.radius),A.boundsTree.shapecast({intersectsBounds:A=>A.intersectsBox(TX),intersectsTriangle:A=>{let t=A.closestPointToSegment(TY,TO,TB);if(t<this.collider.radius){let r=this.collider.radius-t,s=TB.sub(TO).normalize(),o=TI.copy(a);o.addScaledVector(s,r);let l=o.applyMatrix4(i).sub(this.object.position);e.add(l),TY.start.addScaledVector(s,r),TY.end.addScaledVector(s,r)}}})}),TX.makeEmpty(),TY.copy(this.collider.segment),TY.start.applyMatrix4(t),TY.end.applyMatrix4(t),TX.expandByPoint(TY.start),TX.expandByPoint(TY.end),TX.min.addScalar(-this.collider.radius),TX.max.addScalar(this.collider.radius),this.sharedGameControlGlobals.staticMeshBVH?.shapecast({intersectsBounds:A=>A.intersectsBox(TX),intersectsTriangle:A=>{let t=A.closestPointToSegment(TY,TO,TB);if(t<this.collider.radius){let i=this.collider.radius-t,r=TB.sub(TO).normalize();this.alignToGround&&this.groundTiltAdjustment(r),e.addScaledVector(r,i),TY.start.addScaledVector(r,i),TY.end.addScaledVector(r,i)}}}),this.onObject=e.y>Math.abs(A*this.velocity.y*.25),this.onObject&&this.dispatchStopEvent("jump");let i=Math.max(0,e.length()-1e-5);e.normalize().multiplyScalar(i),this.object.position.add(e)}},TK=TZ;TK.isLocked=!1;var TJ={type:"change"},T$={type:"changeZoom"},T0={type:"changePan"},T1={type:"start"},T2={type:"end",changed:!0},T3={type:"end",changed:!1},T4=new e3,T5=new e_,T6=2*Math.PI,T8=2,T9=1,T7=.1,CA=new e4,Ce=new e_,Ct=class extends ev{constructor(A,e,t=!1){super(),this.object=A,this.domElement=e,this.isExport=t,this.enabled=!0,this.useKeyEvents=!0,this.enableDamping=!1,this.enableZoom=!0,this.enableRotate=!0,this.enablePan=!0,this.autoRotate=!1,this.rotationLimitsMode=0,this.panLimitsMode=0,this.rotationSoftLimit=2,this.panSoftLimit=2,this.hoverRotatePanMode=0,this.zoomLimitsEnabled=!1,this.mouseButtons=[0,5],this.mouseButtonsPlay=[3,4,5],this.touches=[null,ep.DOLLY_ROTATE,ep.PAN],this.offset=new e4,this.eye=new e4,this.lastPosition=new e4,this.lastQuaternion=new e3,this.current=new e_,this.overShoot=new e_,this.overRatio=new e_,this.spherical=new a0,this.sphericalDelta=new a0,this.panOffset=new e4,this.panLeftV=new e4,this.panUpV=new e4,this.panV=new e4,this.rotateStart=new e_,this.rotateEnd=new e_,this.rotateDelta=new e_,this.panStart=new e_,this.panEnd=new e_,this.panDelta=new e_,this.dollyStart=new e_,this.dollyEnd=new e_,this.dollyDelta=new e_,this.rotationRangeFactor=new e_,this.panRangeFactor=new e_,this.state=-1,this.zoomChanged=!1,this.isPointerDown=!1,this.isThetaFlipped=!1,this.prevScale=0,this.scale=1,this.gesture=!1,this.timer=-1,this.timerHover=-1,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPhi=0,this.maxPhi=Math.PI,this.minTheta=-1/0,this.maxTheta=1/0,this.minH=0,this.maxH=Math.PI,this.minV=-1/0,this.maxV=1/0,this.autoRotateClockwise=!0,this.isPanOverShoot=!1,this.isRotateOverShoot=!1,this.resetHoverEffectOnPointerLeave=!1,this.hasChange=!1,this.update=()=>{let A=this.object.position;this.offset.copy(A).sub(this.target),this.spherical.setFromVector3(this.offset),this.object.isUpVectorFlipped&&(this.spherical.phi*=-1,this.spherical.theta-=Math.PI),this.autoRotate&&-1===this.state&&this.rotateLeft((!0===this.autoRotateClockwise?1:-1)*this.getAutoRotationAngle()),0!==this.rotationLimitsMode&&this.applyLimits(this.sphericalDelta,this.rotationLimitsMode,this.rotationSoftLimit,this.maxTheta,this.minTheta,this.maxPhi,this.minPhi,this.rotationRangeFactor),2!==this.rotationLimitsMode&&(this.spherical.phi+=this.sphericalDelta.phi),(1!==this.rotationLimitsMode||!0===this.autoRotate)&&(this.spherical.theta+=this.sphericalDelta.theta),this.spherical.radius*=this.scale,this.zoomLimitsEnabled&&(this.spherical.radius=Math.max(this.minDistance,Math.min(this.maxDistance,this.spherical.radius))),0!==this.panLimitsMode&&(this.target.applyQuaternion(T4.copy(this.object.quaternion).invert()),this.panOffset.applyQuaternion(T4),this.applyLimits(this.panOffset,this.panLimitsMode,this.panSoftLimit,this.maxH,this.minH,this.maxV,this.minV,this.panRangeFactor),this.target.applyQuaternion(this.object.quaternion),this.panOffset.applyQuaternion(this.object.quaternion)),2===this.panLimitsMode&&(this.panOffset.y=0),1===this.panLimitsMode&&(this.panOffset.x=0),-1!==this.state||this.gesture?(this.target.add(this.panOffset),this.panOffset.set(0,0,0)):(this.panOffset.multiplyScalar(.875),this.target.add(this.panOffset)),this.offset.setFromSpherical(this.spherical),A.copy(this.target).add(this.offset);let e=this.spherical.phi%T6;return this.eye.copy(this.offset).normalize(),this.object.up.copy(tZ.DefaultUp).applyAxisAngle(this.eye,this.object.angleOffsetFromUp),e>0&&e>Math.PI||e<0&&e>-Math.PI?(this.object.up.negate(),this.object.lookAt(this.target),this.object.isUpVectorFlipped=!0):(this.object.lookAt(this.target),this.object.isUpVectorFlipped=!1),-1===this.state||!0===this.enableDamping?(this.sphericalDelta.theta*=.875,this.sphericalDelta.phi*=.875):this.sphericalDelta.set(0,0,0),this.scale=1,this.zoomChanged||this.lastPosition.distanceToSquared(this.object.position)>.01||8*(1-this.lastQuaternion.dot(this.object.quaternion))>1e-8?(this.dispatchEvent(TJ),this.lastPosition.copy(this.object.position),this.lastQuaternion.copy(this.object.quaternion),this.zoomChanged=!1,!0):(this.isPanOverShoot=!1,this.isRotateOverShoot=!1,this.sphericalDelta.set(0,0,0),this.panOffset.set(0,0,0),!1)},this.onPointerDown=A=>{!1!==this.enabled&&("touch"===A.pointerType||"pen"===A.pointerType&&fn?this.onPointerDownTouch(A):this.onPointerDownMouse(A),-1!==this.state&&(this.isPointerDown=!0,this.dispatchEvent(T1),this.domElement.ownerDocument.addEventListener("pointermove",this.onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this.onPointerUp)))},this.onPointerLeave=A=>{this.resetHoverEffectOnPointerLeave?(1===this.hoverRotatePanMode?(this.sphericalDelta.theta=-this.spherical.theta,this.sphericalDelta.phi=-this.spherical.phi,CA.subVectors(this.position0,this.target0),this.spherical.setFromVector3(CA),this.sphericalDelta.theta+=this.spherical.theta,this.sphericalDelta.phi+=this.spherical.phi,this.sphericalDelta.theta/=8,this.sphericalDelta.phi/=8):2===this.hoverRotatePanMode&&this.panOffset.subVectors(this.target0,this.target).divideScalar(8),this.update()):this.pointerLeaveEvent=A},this.onPointerEnter=A=>{this.resetHoverEffectOnPointerLeave||void 0===this.pointerLeaveEvent?Ce.set(A.clientX-this.domElement.clientWidth/2,A.clientY-this.domElement.clientHeight/2):Ce.set(A.clientX-this.pointerLeaveEvent.clientX,A.clientY-this.pointerLeaveEvent.clientY),1===this.hoverRotatePanMode?(this.rotateDelta.copy(Ce).multiplyScalar(T9*T7).rotateAround(T5,-this.object.angleOffsetFromUp),this.rotateLeft(2*Math.PI*this.rotateDelta.x/this.domElement.clientHeight),this.rotateUp(2*Math.PI*this.rotateDelta.y/this.domElement.clientHeight),this.rotateStart.set(A.clientX,A.clientY)):2===this.hoverRotatePanMode&&(this.panDelta.copy(Ce).multiplyScalar(1*T7),this.pan(this.panDelta.x,this.panDelta.y),this.panStart.set(A.clientX,A.clientY)),this.update()},this.onPointerMove=A=>{!1!==this.enabled&&("touch"===A.pointerType||"pen"===A.pointerType&&fn?this.onPointerMoveTouch(A):this.onPointerMoveMouse(A))},this.onPointerUp=A=>{this.isPointerDown=!1,0===fc.length&&(this.domElement.ownerDocument.removeEventListener("pointermove",this.onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this.onPointerUp)),this.hasChange?this.dispatchEvent(T2):this.dispatchEvent(T3),this.state=-1},this.onPointerDownMouse=A=>{switch(this.useKeyEvents?this.mouseButtons[A.button]:this.mouseButtonsPlay[A.button]){case 0:if(!0!==A.altKey||A.shiftKey||fh(A)){if(" "===this.key){if(!1===this.enablePan)return;this.handleMouseDownPan(A),this.state=2}}else{if(!1===this.enableRotate)return;this.handleMouseDownRotate(A),this.state=0}break;case 4:if(!1===this.enablePan)return;this.handleMouseDownPan(A),this.state=2;break;case 3:if(fh(A)||A.shiftKey){if(!1===this.enablePan)return;this.handleMouseDownPan(A),this.state=2}else{if(!1===this.enableRotate)return;this.handleMouseDownRotate(A),this.state=0}break;case 5:if(fh(A)||A.shiftKey){if(!1===this.enableRotate)return;this.handleMouseDownRotate(A),this.state=0}else{if(!1===this.enablePan)return;this.handleMouseDownPan(A),this.state=2}break;default:this.state=-1}},this.onPointerMoveMouse=A=>{switch(this.state){case 0:if(!1===this.enableRotate)return;this.handleMouseMoveRotate(A);break;case 1:if(!1===this.enableZoom)return;this.handleMouseMoveDolly(A);break;case 2:if(!1===this.enablePan)return;this.handleMouseMovePan(A)}},this.onPointerDownTouch=A=>{switch(this.touches[fc.length-1]){case ep.ROTATE:if(!1===this.enableRotate){this.state=-1;return}this.handleTouchStartRotate(),this.state=3;break;case ep.PAN:if(!1===this.enablePan){this.state=-1;return}this.handleTouchStartPan(),this.state=4;break;case ep.DOLLY_PAN:if(!1===this.enableZoom&&!1===this.enablePan)return;this.handleTouchStartDollyPan(),this.state=5;break;case ep.DOLLY_ROTATE:if(!1===this.enableZoom&&!1===this.enableRotate)return;this.handleTouchStartDollyRotate(),this.state=6;break;default:this.state=-1}},this.onPointerMoveTouch=A=>{switch(this.state){case 3:if(!1===this.enableRotate)return;this.handleTouchMoveRotate(A),this.update();break;case 4:if(!1===this.enablePan)return;this.handleTouchMovePan(A),this.update();break;case 5:if(!1===this.enableZoom&&!1===this.enablePan)return;this.handleTouchMoveDollyPan(A),this.update();break;case 6:if(!1===this.enableZoom&&!1===this.enableRotate)return;this.handleTouchMoveDollyRotate(A),this.update();break;default:this.state=-1}},this.dispatchEndDebounced=c9(()=>this.dispatchEvent(T2),33),this.onMouseWheel=A=>{!1===this.enabled||!1===this.enableZoom&&!1===this.enablePan||(!1===this.isExport&&this.domElement.clientHeight===document.body.clientHeight&&this.domElement.clientWidth===document.body.clientWidth&&A.preventDefault(),this.dispatchEvent(T1),this.handleMouseWheel(A),this.dispatchEndDebounced())},this.onGesture=A=>{!1!==this.enabled&&((A.preventDefault(),"gesturechange"===A.type)?!1!==this.enableZoom&&(this.dispatchEvent(T1),A.scale>this.prevScale?this.dollyIn(this.getZoomScale()):A.scale<this.prevScale&&this.dollyOut(this.getZoomScale()),this.prevScale=A.scale,this.update()):this.dispatchEvent(T2))},this.onContextMenu=A=>{!1!==this.enabled&&A.preventDefault()},this.onTouchEnd=A=>{A.preventDefault()},this.onKeyDown=A=>{!1!==this.enabled&&(this.key=A.key)},this.onKeyUp=()=>{!1!==this.enabled&&(this.key=void 0,-1!==this.state&&this.onPointerUp(fc[0]))},this.onPointerHover=A=>{"mouse"!==A.pointerType||!1===this.enabled||-1!==this.state||2===this.hoverRotatePanMode&&this.isPanOverShoot||1===this.hoverRotatePanMode&&this.isRotateOverShoot||(this.isPointerDown=!0,2===this.hoverRotatePanMode?this.handleMouseMovePan(A,T7):1===this.hoverRotatePanMode&&this.handleMouseMoveRotate(A,T7))},this.target=this.object.getTarget(),this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this.isUpVectorFlipped0=this.object.isUpVectorFlipped,this.offset.copy(this.object.position).sub(this.target),this.spherical.setFromVector3(this.offset)}dispatchEvent(A){"start"===A.type?this.hasChange=!1:this.hasChange=!0,super.dispatchEvent(A)}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.isUpVectorFlipped=this.isUpVectorFlipped0,this.object.updateProjectionMatrix(),this.dispatchEvent(TJ),this.update(),this.state=-1,this.pointerLeaveEvent=void 0}resetTo(A,e,t,i=!1){this.target.copy(A),this.object.position.copy(e),this.object.zoom=t,this.object.isUpVectorFlipped=i,this.object.updateProjectionMatrix(),this.dispatchEvent(TJ),this.update(),this.state=-1}fromJSON(A){this.setEnableDampingSpeed(A.enableDamping),this.enablePan=A.enablePan,this.enableZoom=A.enableZoom,this.enableRotate=A.enableRotate,this.rotationLimitsMode=A.rotationLimitsMode,this.panLimitsMode=A.panLimitsMode,this.panSoftLimit=A.panSoftLimit,this.rotationSoftLimit=A.rotationSoftLimit,this.hoverRotatePanMode=A.hoverRotatePanMode,0!==this.hoverRotatePanMode&&this.domElement.addEventListener("pointermove",this.onPointerHover),T7=(A.hoverRotatePanStrength/100)**2,this.zoomLimitsEnabled=A.zoomLimitsEnabled,this.minZoom=A.zoomLimits.min,this.maxZoom=Math.max(A.zoomLimits.min,A.zoomLimits.max),this.minDistance=1e3/A.zoomLimits.max,this.maxDistance=Math.max(this.minDistance,1e3/A.zoomLimits.min),this.autoRotate=A.autoRotate,T8=A.autoRotateSpeed,this.autoRotateClockwise=A.autoRotateClockwise;let e=this.object.getTarget().applyQuaternion(T4.copy(this.object.quaternion).invert());this.minV=-A.panVerticalOffset.min+e.y,this.maxV=A.panVerticalOffset.max+e.y,this.minH=-A.panHorizontalOffset.min+e.x,this.maxH=A.panHorizontalOffset.max+e.x,this.panRangeFactor.set(this.maxH-this.minH,this.maxV-this.minV).divideScalar(2),this.rotationRangeFactor.setScalar(Math.PI).divideScalar(4),this.minPhi=Ci(this.spherical.phi-A.rotationVerticalOffset.min),this.maxPhi=Ci(this.spherical.phi+A.rotationVerticalOffset.max),this.minTheta=Ci(this.spherical.theta-A.rotationHorizontalOffset.min),this.maxTheta=Ci(this.spherical.theta+A.rotationHorizontalOffset.max),this.isThetaFlipped=this.minTheta>this.maxTheta,1===A.orbitTouches&&(this.touches[0]=ep.ROTATE),1===A.panTouches&&(this.touches[0]=ep.PAN),2===A.orbitTouches&&(this.touches[1]=ep.DOLLY_ROTATE),2===A.panTouches&&(this.touches[1]=ep.DOLLY_PAN),3===A.orbitTouches&&(this.touches[2]=ep.ROTATE),3===A.panTouches&&(this.touches[2]=ep.PAN),this.resetHoverEffectOnPointerLeave=A.resetHoverEffectOnPointerLeave??!1}connect(){this.domElement.addEventListener("contextmenu",this.onContextMenu),this.domElement.addEventListener("pointerdown",this.onPointerDown),this.domElement.addEventListener("wheel",this.onMouseWheel),window.addEventListener("keydown",this.onKeyDown,!1),window.addEventListener("keyup",this.onKeyUp,!1),fr||(this.domElement.addEventListener("gesturestart",this.onGesture),this.domElement.addEventListener("gesturechange",this.onGesture),this.domElement.addEventListener("gestureend",this.onGesture)),this.domElement.addEventListener("touchend",this.onTouchEnd),0!==this.hoverRotatePanMode&&(this.domElement.addEventListener("pointerleave",this.onPointerLeave),this.domElement.addEventListener("pointerenter",this.onPointerEnter)),this.pointerLeaveEvent=void 0}dispose(){this.domElement.removeEventListener("contextmenu",this.onContextMenu),this.domElement.removeEventListener("pointerdown",this.onPointerDown),this.domElement.removeEventListener("wheel",this.onMouseWheel),window.removeEventListener("keydown",this.onKeyDown,!1),window.removeEventListener("keyup",this.onKeyUp,!1),this.domElement.removeEventListener("pointermove",this.onPointerHover),fr||(this.domElement.removeEventListener("gesturestart",this.onGesture),this.domElement.removeEventListener("gesturechange",this.onGesture),this.domElement.removeEventListener("gestureend",this.onGesture)),this.domElement.removeEventListener("touchend",this.onTouchEnd),this.domElement.removeEventListener("pointerleave",this.onPointerLeave),this.domElement.removeEventListener("pointerenter",this.onPointerEnter),this.domElement.ownerDocument.removeEventListener("pointermove",this.onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this.onPointerUp)}applyLimits(A,e,t,i,r,s,a,o){let l,h,c;this.overShoot.set(0,0),A instanceof e4?(l=A.x,h=A.y,this.current.set(this.target.x,this.target.y),c=!0):(l=A.theta,h=A.phi,this.current.set(Ci(this.spherical.theta),Ci(this.spherical.phi)),c=!1),0===t&&(this.current.x+=l,this.current.y+=h),(3===e||2===e)&&(!c&&this.isThetaFlipped?this.current.x>i&&this.current.x<0?this.overShoot.x=i-this.current.x:this.current.x<r&&this.current.x>0&&(this.overShoot.x=r-this.current.x):this.current.x>i?this.overShoot.x=i-this.current.x:this.current.x<r&&(this.overShoot.x=r-this.current.x),i===r&&(l=0)),(3===e||1===e)&&(this.current.y>s?this.overShoot.y=s-this.current.y:this.current.y<a&&(this.overShoot.y=a-this.current.y),s===a&&(h=0)),c||(this.overShoot.x=Ci(this.overShoot.x),this.overShoot.y=Ci(this.overShoot.y)),0!==t?(this.overRatio.copy(this.overShoot).divide(o),this.overRatio.x=Math.min(Math.abs(this.overRatio.x),1),this.overRatio.y=Math.min(Math.abs(this.overRatio.y),1),1===t&&(this.overRatio.x=Cr(Math.abs(this.overRatio.x)),this.overRatio.y=Cr(Math.abs(this.overRatio.y))),this.isPointerDown||1===t?2===t&&(this.overRatio.x>.9||this.overRatio.y>.9)?this.isPointerDown=!1:(l*this.overShoot.x<0&&(l*=1-this.overRatio.x),h*this.overShoot.y<0&&(h*=1-this.overRatio.y)):2===t&&(!c&&(this.overRatio.x>.002||this.overRatio.y>.002)||c&&(Math.abs(this.overShoot.x)>2||Math.abs(this.overShoot.y)>2)?(l=.05*this.overShoot.x,h=.05*this.overShoot.y,c?this.isPanOverShoot=!0:this.isRotateOverShoot=!0):c?this.isPanOverShoot=!1:this.isRotateOverShoot=!1)):(l+=this.overShoot.x,h+=this.overShoot.y),A instanceof e4?(A.x=l,A.y=h):(A.theta=l,A.phi=h)}setEnableDampingSpeed(A){this.enableDamping=A,T9=!0===A?.2:1}stopDamping(){this.sphericalDelta.theta=0,this.sphericalDelta.phi=0}getAutoRotationAngle(){return 2*Math.PI/60/60*T8}getZoomScale(){return .9025}rotateLeft(A){this.sphericalDelta.theta-=A}rotateUp(A){this.sphericalDelta.phi-=A}panLeft(A,e){this.panLeftV.setFromMatrixColumn(e,0),this.panLeftV.multiplyScalar(-A),this.panOffset.add(this.panLeftV)}panUp(A,e){this.panUpV.setFromMatrixColumn(e,1),this.panUpV.multiplyScalar(A),this.panOffset.add(this.panUpV)}pan(A,e){let t=this.domElement;if(t&&this.object.isPerspectiveCamera){let i=this.object.position;this.panV.copy(i).sub(this.target);let r=this.panV.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this.panLeft(2*A*r/t.clientHeight,this.object.matrix),this.panUp(2*e*r/t.clientHeight,this.object.matrix)}else t&&this.object.isOrthographicCamera&&(this.panLeft(A*(this.object.right-this.object.left)/this.object.zoom/t.clientWidth,this.object.matrix),this.panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/t.clientHeight,this.object.matrix));this.dispatchEvent(T0)}dollyOut(A){this.object.isPerspectiveCamera?this.scale/=A:this.object.isOrthographicCamera&&(this.object.zoom*=A,this.zoomLimitsEnabled&&(this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom))),this.object.updateProjectionMatrix(),this.zoomChanged=!0),this.dispatchEvent(T$)}dollyIn(A){this.object.isPerspectiveCamera?this.scale*=A:this.object.isOrthographicCamera&&(this.object.zoom/=A,this.zoomLimitsEnabled&&(this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom))),this.object.updateProjectionMatrix(),this.zoomChanged=!0),this.dispatchEvent(T$)}zoomOut(A=this.getZoomScale()){this.dispatchEvent(T1),this.dollyOut(A),this.dispatchEvent(T2)}zoomIn(A=this.getZoomScale()){this.dispatchEvent(T1),this.dollyIn(A),this.dispatchEvent(T2)}handleMouseDownRotate(A){this.rotateStart.set(A.clientX,A.clientY)}handleMouseDownDolly(A){this.dollyStart.set(A.clientX,A.clientY)}handleMouseDownPan(A){this.panStart.set(A.clientX,A.clientY)}handleMouseMoveRotate(A,e=1){fa&&fo<15.5&&!fn?(this.rotateEnd.set(A.clientX,A.clientY),this.rotateDelta.subVectors(this.rotateEnd,this.rotateStart),this.rotateStart.copy(this.rotateEnd)):this.rotateDelta.set(A.movementX,A.movementY),this.rotateDelta.multiplyScalar(T9*e).rotateAround(T5,-this.object.angleOffsetFromUp);let t=this.domElement;this.rotateLeft(2*Math.PI*this.rotateDelta.x/t.clientHeight),this.rotateUp(2*Math.PI*this.rotateDelta.y/t.clientHeight),this.update()}handleMouseMoveDolly(A){this.dollyEnd.set(A.clientX,A.clientY),this.dollyDelta.subVectors(this.dollyEnd,this.dollyStart),this.dollyDelta.y>0?this.dollyOut(this.getZoomScale()):this.dollyDelta.y<0&&this.dollyIn(this.getZoomScale()),this.dollyStart.copy(this.dollyEnd),this.update()}handleMouseMovePan(A,e=1){fa&&fo<15.5&&!fn?(this.panEnd.set(A.clientX,A.clientY),this.panDelta.subVectors(this.panEnd,this.panStart),this.panStart.copy(this.panEnd)):this.panDelta.set(A.movementX,A.movementY),this.panDelta.multiplyScalar(1*e),this.pan(this.panDelta.x,this.panDelta.y),this.update()}handleMouseWheel(A){if(!1===fs&&!1===fh(A)&&!0==(0===A.wheelDeltaY||0===A.deltaY?!(fi&&A.shiftKey&&Math.abs(A.wheelDeltaX)>=120)&&(A.wheelDeltaX?A.wheelDeltaX===-3*A.deltaX:0===A.deltaMode):A.wheelDeltaY?A.wheelDeltaY===-3*A.deltaY:0===A.deltaMode))!1!==this.enablePan&&(this.gesture?(this.panDelta.set(-A.deltaX,-A.deltaY).multiplyScalar(1),this.panDelta.x=Math.min(Math.abs(this.panDelta.x),100)*(this.panDelta.x<0?-1:1),this.panDelta.y=Math.min(Math.abs(this.panDelta.y),100)*(this.panDelta.y<0?-1:1),A.altKey?this.pan(0,this.panDelta.y):A.shiftKey?this.pan(this.panDelta.x,0):this.pan(this.panDelta.x,this.panDelta.y),this.update()):(this.gesture=!0,this.isPointerDown=!0),window.clearTimeout(this.timer),this.timer=window.setTimeout(()=>{this.gesture=!1,this.isPointerDown=!1},30));else{if(!1===this.enableZoom)return;0===A.deltaY?A.deltaX<0?this.dollyIn(this.getZoomScale()):A.deltaX>0&&this.dollyOut(this.getZoomScale()):A.deltaY<0?this.dollyIn(this.getZoomScale()):A.deltaY>0&&this.dollyOut(this.getZoomScale()),this.update(),this.gesture=!1,this.isPointerDown=!1}}handleTouchStartRotate(){if(2===fc.length){let A=.5*(fc[0].pageX+fc[1].pageX),e=.5*(fc[0].pageY+fc[1].pageY);this.rotateStart.set(A,e)}else this.rotateStart.set(fc[0].pageX,fc[0].pageY)}handleTouchStartPan(){if(2===fc.length){let A=.5*(fc[0].pageX+fc[1].pageX),e=.5*(fc[0].pageY+fc[1].pageY);this.panStart.set(A,e)}else this.panStart.set(fc[0].pageX,fc[0].pageY)}handleTouchStartDolly(){let A=fc[0].pageX-fc[1].pageX,e=fc[0].pageY-fc[1].pageY;this.dollyStart.set(0,Math.sqrt(A*A+e*e))}handleTouchStartDollyPan(){this.enableZoom&&this.handleTouchStartDolly(),this.enablePan&&this.handleTouchStartPan()}handleTouchStartDollyRotate(){this.enableZoom&&this.handleTouchStartDolly(),this.enableRotate&&this.handleTouchStartRotate()}handleTouchMoveRotate(A){if(2===fc.length){let e=fv(A),t=.5*(A.pageX+e.x),i=.5*(A.pageY+e.y);this.rotateEnd.set(t,i)}else{if(A.pointerId!==fc[0].pointerId)return;this.rotateEnd.set(A.pageX,A.pageY)}this.rotateDelta.subVectors(this.rotateEnd,this.rotateStart).multiplyScalar(T9);let r=this.domElement;r&&(this.rotateLeft(2*Math.PI*this.rotateDelta.x/r.clientHeight),this.rotateUp(2*Math.PI*this.rotateDelta.y/r.clientHeight)),this.rotateStart.copy(this.rotateEnd)}handleTouchMovePan(A){if(2===fc.length){let e=fv(A),t=.5*(A.pageX+e.x),i=.5*(A.pageY+e.y);this.panEnd.set(t,i)}else{if(A.pointerId!==fc[0].pointerId)return;this.panEnd.set(A.pageX,A.pageY)}this.panDelta.subVectors(this.panEnd,this.panStart).multiplyScalar(1),this.pan(this.panDelta.x,this.panDelta.y),this.panStart.copy(this.panEnd)}handleTouchMoveDolly(A){let e=fv(A),t=A.pageX-e.x,i=A.pageY-e.y;this.dollyEnd.set(0,Math.sqrt(t*t+i*i)),this.dollyDelta.set(0,Math.pow(this.dollyEnd.y/this.dollyStart.y,2)),this.dollyOut(this.dollyDelta.y),this.dollyStart.copy(this.dollyEnd)}handleTouchMoveDollyPan(A){this.enableZoom&&this.handleTouchMoveDolly(A),this.enablePan&&this.handleTouchMovePan(A)}handleTouchMoveDollyRotate(A){this.enableZoom&&this.handleTouchMoveDolly(A),this.enableRotate&&this.handleTouchMoveRotate(A)}};function Ci(A){let e=2*Math.PI;for(;A<=-Math.PI;)A+=e;for(;A>Math.PI;)A-=e;return A}function Cr(A){return 1-Math.pow(1-A,4)}var Cs=new WeakMap,Cn=class extends ax{constructor(A){super(A),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(A){return this.decoderPath=A,this}setDecoderConfig(A){return this.decoderConfig=A,this}setWorkerLimit(A){return this.workerLimit=A,this}load(A,e,t,i){let r=new aw(this.manager);r.setPath(this.path),r.setResponseType("arraybuffer"),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(A,A=>{let t={attributeIDs:this.defaultAttributeIDs,attributeTypes:this.defaultAttributeTypes,useUniqueIDs:!1};this.decodeGeometry(A,t).then(e).catch(i)},t,i)}decodeDracoFile(A,e,t,i){let r={attributeIDs:t||this.defaultAttributeIDs,attributeTypes:i||this.defaultAttributeTypes,useUniqueIDs:!!t};this.decodeGeometry(A,r).then(e)}decodeGeometry(A,e){for(let t in e.attributeTypes){let i=e.attributeTypes[t];void 0!==i.BYTES_PER_ELEMENT&&(e.attributeTypes[t]=i.name)}let r=JSON.stringify(e);if(Cs.has(A)){let s=Cs.get(A);if(s.key===r)return s.promise;if(0===A.byteLength)throw Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let a,o=this.workerNextTaskID++,l=A.byteLength,h=this._getWorker(o,l).then(t=>(a=t,new Promise((t,i)=>{a._callbacks[o]={resolve:t,reject:i},a.postMessage({type:"decode",id:o,taskConfig:e,buffer:A},[A])}))).then(A=>this._createGeometry(A.geometry));return h.catch(()=>!0).then(()=>{a&&o&&this._releaseTask(a,o)}),Cs.set(A,{key:r,promise:h}),h}_createGeometry(A){let e=new ig;A.index&&e.setIndex(new ii(A.index.array,1));for(let t=0;t<A.attributes.length;t++){let i=A.attributes[t],r=i.name,s=i.array,a=i.itemSize;e.setAttribute(r,new ii(s,a))}return e}_loadLibrary(A,e){let t=new aw(this.manager);return t.setPath(this.decoderPath),t.setResponseType(e),t.setWithCredentials(this.withCredentials),new Promise((e,i)=>{t.load(A,e,void 0,i)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;let A="object"!=typeof WebAssembly||"js"===this.decoderConfig.type,e=[];return A?e.push(this._loadLibrary("draco_decoder.js","text")):(e.push(this._loadLibrary("draco_wasm_wrapper.js","text")),e.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(e).then(e=>{let t=e[0];A||(this.decoderConfig.wasmBinary=e[1]);let i=Ca.toString(),r=["/* draco decoder */",t,"","/* worker */",i.substring(i.indexOf("{")+1,i.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([r]))}),this.decoderPending}_getWorker(A,e){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){let t=new Worker(this.workerSourceURL);t._callbacks={},t._taskCosts={},t._taskLoad=0,t.postMessage({type:"init",decoderConfig:this.decoderConfig}),t.onmessage=function(A){let e=A.data;switch(e.type){case"decode":t._callbacks[e.id].resolve(e);break;case"error":t._callbacks[e.id].reject(e);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+e.type+'"')}},this.workerPool.push(t)}else this.workerPool.sort(function(A,e){return A._taskLoad>e._taskLoad?-1:1});let i=this.workerPool[this.workerPool.length-1];return i._taskCosts[A]=e,i._taskLoad+=e,i})}_releaseTask(A,e){A._taskLoad-=A._taskCosts[e],delete A._callbacks[e],delete A._taskCosts[e]}debug(){console.log("Task load: ",this.workerPool.map(A=>A._taskLoad))}dispose(){for(let A=0;A<this.workerPool.length;++A)this.workerPool[A].terminate();return this.workerPool.length=0,this}};function Ca(){let A,e;onmessage=function(t){let i=t.data;switch(i.type){case"init":A=i.decoderConfig,e=new Promise(function(e){A.onModuleLoaded=function(A){e({draco:A})},DracoDecoderModule(A)});break;case"decode":let r=i.buffer,s=i.taskConfig;e.then(A=>{let e=A.draco,t=new e.Decoder,a=new e.DecoderBuffer;a.Init(new Int8Array(r),r.byteLength);try{let o=function(A,e,t,i){let r=i.attributeIDs,s=i.attributeTypes,a,o,l=e.GetEncodedGeometryType(t);if(l===A.TRIANGULAR_MESH)a=new A.Mesh,o=e.DecodeBufferToMesh(t,a);else if(l===A.POINT_CLOUD)a=new A.PointCloud,o=e.DecodeBufferToPointCloud(t,a);else throw Error("THREE.DRACOLoader: Unexpected geometry type.");if(!o.ok()||0===a.ptr)throw Error("THREE.DRACOLoader: Decoding failed: "+o.error_msg());let h={index:null,attributes:[]};for(let c in r){let d=self[s[c]],u,p;if(i.useUniqueIDs)p=r[c],u=e.GetAttributeByUniqueId(a,p);else{if(-1===(p=e.GetAttributeId(a,A[r[c]])))continue;u=e.GetAttribute(a,p)}h.attributes.push(function(A,e,t,i,r,s){let a=s.num_components(),o=t.num_points()*a,l=o*r.BYTES_PER_ELEMENT,h=function(A,e){switch(e){case Float32Array:return A.DT_FLOAT32;case Int8Array:return A.DT_INT8;case Int16Array:return A.DT_INT16;case Int32Array:return A.DT_INT32;case Uint8Array:return A.DT_UINT8;case Uint16Array:return A.DT_UINT16;case Uint32Array:return A.DT_UINT32}}(A,r),c=A._malloc(l);e.GetAttributeDataArrayForAllPoints(t,s,h,l,c);let d=new r(A.HEAPF32.buffer,c,o).slice();return A._free(c),{name:i,array:d,itemSize:a}}(A,e,a,c,d,u))}return l===A.TRIANGULAR_MESH&&(h.index=function(A,e,t){let i=3*t.num_faces(),r=4*i,s=A._malloc(r);e.GetTrianglesUInt32Array(t,r,s);let a=new Uint32Array(A.HEAPF32.buffer,s,i).slice();return A._free(s),{array:a,itemSize:1}}(A,e,a)),A.destroy(a),h}(e,t,a,s),l=o.attributes.map(A=>A.array.buffer);o.index&&l.push(o.index.array.buffer),self.postMessage({type:"decode",id:i.id,geometry:o},l)}catch(h){console.error(h),self.postMessage({type:"error",id:i.id,error:h.message})}finally{e.destroy(a),e.destroy(t)}})}}}async function Co(A){if(A7){let e={attributeIDs:A7.defaultAttributeIDs,attributeTypes:A7.defaultAttributeTypes,useUniqueIDs:!1},t;try{t=await A7.decodeGeometry(new Int8Array(A).buffer,e)}catch(i){console.error(i)}if(t)return{index:t.index?{array:t.index.array}:void 0,attributes:Object.entries(t.attributes).map(([A,e])=>({name:A,itemSize:e.itemSize,array:e.array}))}}return null}async function Cl(A,e){var t,i,r,s;let a,o,l,[h,c]=dV(pi.deserialize(new Uint8Array(A)));29!==(l=(t=h).schema??0)&&(console.warn("updating from ",l,"to ",29),l<1&&(fS(t,fb),fw(t,fb),t.schema=1),l<2&&(Object.assign(t.scene.publish,{orbitControls:{...m_.defaultData,...dH(t.scene.publish.orbitControls)}}),t.schema=2),l<3&&(function(A){function e(A){if(A.layers){for(let e of Object.values(A.layers))if(e){for(let[t,i]of Object.entries(e))if((fA.includes(t)||"boolean"==typeof i)&&delete e[t],"texture"===t)for(let[r,s]of Object.entries(i))(fe.includes(r)||"boolean"==typeof s)&&delete i[r]}}}A.scene.objects.traverse((A,t)=>{t.states.forEach(A=>{A.material?e(A.material):A.materials&&A.materials.forEach(A=>{e(A)})})})}(t),t.schema=3),l<4&&(t.scene.publish.withBackground=!0,t.schema=4),l<5&&(t.scene.publish.settings.web={compress:!0,preload:!0,preset:1},t.schema=5),l<6&&(function(A){A.scene.objects.traverse((A,e)=>{let t=e.cloner;t&&(t.radial.scale=t.radial.scale.map(A=>A+1),t.linear.scale=t.linear.scale.map(A=>A+1))})}(t),t.schema=6),l<7&&(function(A){A.scene.objects.traverse((A,e)=>{let t=e.geometry;t&&("DodecahedronGeometry"===t.type||"IcosahedronGeometry"===t.type)&&(t.detail=Math.round(t.detail))})}(t),t.schema=7),l<8&&(t.schema=8),l<9&&(fT(t),t.schema=9),l<10&&(function(A){A.scene.objects.traverse((A,e)=>{"Mesh"===e.type&&("BooleanGeometry"===e.geometry.type||"SubdivGeometry"===e.geometry.type)&&(e.geometry.phongAngle=35)})}(t),t.schema=10),l<11&&((i=t).scene.environment.ambientLight.softShadows=!1,i.scene.environment.ambientLight.softShadowQuality="low",i.scene.objects.traverse((A,e)=>{("DirectionalLight"===e.type||"SpotLight"===e.type)&&(e.shadowResolution=1024,e.shadowRadius=1,e.depth=1e5)}),i.shared.penumbraSize=[,,,,,].fill(.5),t.schema=11),l<12&&(fT(t),t.schema=12),l<13&&(t.shared.audios=ft({},dc.prototype),t.schema=13),l<14&&(Object.entries(a=t.shared.materials).forEach(([A,e])=>{e.layers||Object.assign(a,{[A]:{name:"Untitled Material",layers:[{fi:0,data:{type:"light",category:"phong",alpha:.6,visible:!0,mode:0,specular:{r:.2,g:.2,b:.2},shininess:5},id:"layer1"},{fi:1,data:{type:"color",alpha:1,visible:!0,mode:0,color:{r:.2823529411764706,g:.2823529411764706,b:.30196078431372547}},id:"layer2"}]}})}),t.schema=14),l<15&&(Object.entries(dH((r=t).shared.images)).filter(A=>!1===A[1].asset).map(A=>A[0]).forEach(A=>{delete r.shared.images[A]}),Object.entries(dH(r.shared.audios)).filter(A=>!1===A[1].asset).map(A=>A[0]).forEach(A=>{delete r.shared.audios[A]}),t.schema=15),l<16&&(t.scene.publish.settings.web.preload=!1,t.schema=16),l<17&&(fS(t,fC),fw(t,fC),t.schema=17),l<18&&(fS(t,fM),fw(t,fM),t.schema=18),l<19&&(Object.assign(t.scene.publish.settings,{video:{...mL.defaultData.settings.video,...dH(t.scene.publish.settings.video)}}),t.schema=19),l<20&&(t.shared.fonts=ft({},dc.prototype),o=[],(s=t).scene.objects.traverse((A,e)=>{if("TextFrame"===e.type){let t=md.defaultTwoLayerData("phong"),i="string"==typeof e.color?s.shared.colors[e.color]:e.color;t.layers[1].data.color={r:i.r,g:i.g,b:i.b},t.layers[1].data.alpha=e.alpha;let r=e.font.replace(".typeface","").replace(/optimer/gi,"open sans").replace("space_mono","space mono").replace(/alma_mono/gi,"varela round").replace(/droid_sans_mono/gi,"noto sans mono").replace(/droid_sans|gentilis|gnomon_(simple|foreground)|helvetiker/gi,"roboto").replace(/droid_serif/gi,"roboto slab").replace("_sans"," sans").replace("crimson_text","crimson text").replace("medium_medium","medium").replace("fatface_fatface","fatface").replace("100hairline","thin").replace("200thin","extralight").replace("300light","light").replace("500medium","medium").replace("600semi","semibold").replace("800heavy","extrabold").replace("900black","black").replace(/bodoni_(11|16|24|36|48|72|96)([^_])/gi,"bodoni_$1_$2").replace(/bodoni_(11|16|24|36|48|72|96)/gi,"bodoni moda").replace(/(thin|hairline)(_regular)?/gi,"100").replace(/(extra|ultra)light(_regular)?/gi,"200").replace(/light(_regular)?/gi,"300").replace(/_book|_normal|_roman/gi,"_regular").replace(/medium(_regular)?/gi,"500").replace(/(semi|demi)bold(_regular)?/gi,"600").replace(/(extra|ultra)bold(_regular)?/gi,"800").replace(/bold(_regular)?/gi,"700").replace(/(black|heavy|fatface)(_regular)?/gi,"900").replace(/([1-9]00)_italic/gi,"$1italic").replace(/regularitalic/gi,"italic").replace(/regularitalic/gi,"italic").split(" ").map(A=>A.charAt(0).toUpperCase()+A.slice(1)).join(" ");void 0===s.shared.fonts[r]&&(s.shared.fonts[r]={name:r});let a={name:e.name,...my.defaultData,...mw.defaultData,flatShading:!1,wireframe:!1,geometry:{...mf.defaultData("TextGeometry"),width:e.width,height:e.height,font:r,depth:0,horizontalAlign:e.horizontalAlign,verticalAlign:e.verticalAlign,fontSize:1.40625*e.fontSize,lineHeight:e.lineHeight/1.40625,letterSpacing:e.letterSpacing-1,text:e.text,textTransform:e.textTransform,extrudeBevelSize:0,extrudeBevelSegments:1},material:t,states:dH(e.states),events:dH(e.events),visible:e.visible,raycastLock:e.raycastLock,position:e.position,rotation:e.rotation,scale:e.scale,hiddenMatrix:e.hiddenMatrix},l=dH(s.scene.objects).parent(A);s.scene.objects.insertAfter(l??null,A,[{id:A+"new",data:a,children:[]}]),o.push(A)}}),o.forEach(A=>{s.scene.objects.delete(A)}),t.schema=20),l<21&&(function(A){let e={0:"MouseDown",1:"MouseUp",2:"MouseHover",5:"KeyDown",6:"KeyUp",7:"Start",9:"LookAt",10:"Follow",11:"Scroll",12:"Audio",13:"GameControl"};A.scene.objects.traverse((A,t)=>{t.events.forEach(A=>{if(e[Number(A.type)]){if(Object.assign(A,{type:e[Number(A.type)]}),"Audio"===A.type&&"audioEvent"in A&&(Object.assign(A,{playAudio:A.audioEvent}),delete A.audioEvent),"GameControl"===A.type)Object.assign(A,{gameActions:{idle:new dv,move:new dv,jump:new dv}});else{let t=new dv;Object.assign(A,{actions:t}),("MouseDown"===A.type||"MouseUp"===A.type||"KeyDown"===A.type||"KeyUp"===A.type)&&"url"in A&&t.push({fi:0,id:eP.generateUUID(),data:{type:"Link",url:A.url,delay:0}}),"targets"in A&&(A.targets.forEach((A,e,i)=>{let r={easing:A.easing,duration:A.duration};6===A.easing?Object.assign(r,dn(A,"mass","stiffness","damping","velocity")):5===A.easing&&Object.assign(r,{control1:{...A.control1},control2:{...A.control2}});let s={repeat:A.repeat?-1:0,delay:A.delay,delayDirection:A.delayDirection,direction:A.cycle&&A.rewind?"pingpong-rewind":A.cycle?"pingpong":"normal"},a={state:A.state,...s,...r},o={allowSlerp:!0,type:"Transition",object:A.object,repeat:0,delay:0,delayDirection:void 0,direction:"normal",tweens:new dv({fi:0,id:eP.generateUUID(),data:{state:void 0,repeat:0,delay:0,delayDirection:void 0,direction:"normal",duration:0,easing:4}},{fi:1,id:eP.generateUUID(),data:a})};t.push({fi:i,id:e,data:o})}),delete A.targets)}}})})}(t),function(A){A.scene.objects.traverse((A,e)=>{function t(A,t){let i=new dv,r=[];if(e.events.forEach((A,e,s)=>{if("Audio"===A.type&&A.trigger===t){let a;r.push(e),"play"===A.interaction?a={...dn(A,"interaction","audio","delay","volume","loop"),triggerAfter:"after"in A?A.after:void 0,toggle:"after"in A?A.toggle:void 0,type:"Audio"}:("pause"===A.interaction||"stop"===A.interaction)&&(a={...dn(A,"interaction","delay","object","playAudio"),type:"Audio"}),a&&i.push({fi:s,id:e,data:a})}}),r.forEach(A=>e.events.delete(A)),i.length){let s=e.events.find(e=>e.type===A)?.data;s?"actions"in s&&s.actions.insertBefore(null,i):e.events.insertBefore(null,[{id:eP.generateUUID(),data:{type:A,actions:i}}])}}t("Start","start"),t("MouseDown","mouseDown"),t("MouseUp","mouseUp"),t("KeyDown","keyDown"),t("KeyUp","keyUp")})}(t),t.schema=21),l<22&&(fP(t),t.schema=22),l<23&&(function(A){A.scene.objects.traverse((A,e)=>{"Mesh"===e.type&&"SubdivGeometry"===e.geometry.type&&(e.geometry.scaleBaked||(e.geometry.scaleBaked=[1,1,1]))})}(t),t.schema=23),l<24&&(function(A){A.scene.objects.traverse((A,e)=>{"Empty"!==e.type&&"Mesh"!==e.type||!e.cloner||e.cloner.randomnessObject||e.cloner.toObject||e.cloner.randomness||(e.cloner={...e.cloner,toObject:{object:"",spreadType:"random",scale:[0,0,0],rotation:[0,0,0],position:[0,0,0],axis:"x",seed:0,count:99,align:"normal"},randomness:!1,randomnessObject:{strength:100,scale:[0,0,0],rotation:[0,0,0],position:[0,0,0],movement:1,seed:0,freqScale:10,noiseType:"perlin"}})})}(t),t.schema=24),(l<25||void 0===t.shared.videos)&&(t.shared.videos=ft({},dc.prototype),l<25&&(t.schema=25)),l<26&&(function(A){A.scene.objects.traverse((e,t)=>{let i=A.scene.objects.unproxy().parent(e);if(i){let r=dH(A.scene.objects.data(i));r&&"Mesh"===r.type&&"BooleanGeometry"===r.geometry.type&&"Mesh"===t.type&&(t.visible=!0!==dH(t).booleanExclude)}})}(t),t.schema=26),l<27&&(function(A){A.scene.objects.traverse((A,e)=>{"Mesh"===e.type&&("NonParametricGeometry"===e.geometry.type?void 0!==e.material&&delete e.material:void 0!==e.materials&&delete e.materials)})}(t),t.schema=27),l<28&&(fP(t),t.schema=28),l<29&&(function(A){function e(A){for(let e in Object.setPrototypeOf(A,dw.prototype),A){var t;Object.setPrototypeOf(t=A[e],dw.prototype),t.texture&&Object.setPrototypeOf(t.texture,dw.prototype)}}A.scene.objects.traverse((A,t)=>{t.states.forEach(A=>{let t=A;if(t.material){let i=dH(t.material).layers;e(i),t.material.layers=i}if(t.materials)for(let r=0;r<t.materials.length;r++){let s=t.materials[r],a=dH(s).layers;e(a),s.layers=a}})})}(t),t.schema=29));let d=[];for(let u of(h.scene.objects.traverse((A,e)=>{"Mesh"===e.type&&"NonParametricGeometry"===e.geometry.type&&void 0!==e.geometry.data.draco&&d.push(e)}),d.length&&await (A7||(A7=new Cn).setDecoderPath("https://www.gstatic.com/draco/versioned/decoders/1.5.2/").preload(),A7.decoderPending),d)){let p=await Co(dH(u.geometry.data.draco));if(p){p.index&&(u.geometry.data.index={array:p.index.array,itemSize:1,normalized:!1,type:"Uint32Array"});let f={};p.attributes.forEach(({name:A,array:e,itemSize:t})=>{f[A]={array:e,itemSize:t,type:"Float32Array",normalized:!1}}),u.geometry.data.attributes=f,u.geometry.data.draco=void 0}}return e&&e(h),c.result().data}var Ch=Object.keys(Mu).filter(A=>isNaN(Number(A))),Cc=class{constructor(A,e,t,i,r,s,a,o){this.preventScroll=r,this.requestRender=a,this.isEnable=!1,this.onResetRaycaster=()=>{this.eventContext.raycasterNeedsUpdate=!0},this.onTouchMovePreventScroll=A=>{(A.touches.length>1||this.preventScroll)&&A.preventDefault()},this.onMouseWheelPreventScroll=A=>{this.preventScroll&&A.preventDefault()},this.eventContext=new Md(A,e,t,s,i,o??!1),this.handlers={Spline:new EF(this.eventContext),Conditional:new EQ(this.eventContext),Start:new Tf(this.eventContext),Basic:new Ek(this.eventContext),MouseHover:new Tc(this.eventContext),Scroll:new Tu(this.eventContext),Follow:new E4(this.eventContext),LookAt:new Tl(this.eventContext)}}activate(){let{scene:A,domElement:e}=this.eventContext;this.isEnable=!0,A.traverseEntity(A=>{A.addEventListener("requestRender",this.requestRender)}),Object.values(this.handlers).forEach(A=>A.connect()),this.resize(),Ch.forEach(A=>{Object.values(this.handlers).some(e=>e.domEventsNeeded.has(A))&&e.addEventListener(A,this.onResetRaycaster)}),e.addEventListener("wheel",this.onMouseWheelPreventScroll),e.addEventListener("touchmove",this.onTouchMovePreventScroll)}deactivate(){let{scene:A,domElement:e}=this.eventContext;this.isEnable=!1,Object.values(this.handlers).forEach(A=>A.disconnect()),A.traverseEntity(A=>{A.removeEventListener("requestRender",this.requestRender)}),Ch.forEach(A=>{e.removeEventListener(A,this.onResetRaycaster)}),e.removeEventListener("touchmove",this.onTouchMovePreventScroll),e.removeEventListener("wheel",this.onMouseWheelPreventScroll)}reset(){this.deactivate(),this.activate()}resize(){this.eventContext.updaterRect()}},Cd=class{constructor(A,e,t,i,r){this._aspect=1,this._renderer=A,this._camera=e,this._frameSize=new e_().copy(t),this._editorSize=new e_().copy(i),this._aspect=e.aspect,this._fov=r??e.fov}set frameSize(A){this._frameSize.copy(A)}updateRenderer(){this._renderer&&this._renderer.setSize(this._frameSize.x,this._frameSize.y)}updateViewportForImageExport(){if(!this._renderer||!this._camera||"PerspectiveCamera"!==this._camera.cameraType)return;let A=this._frameSize.x,e=this._frameSize.y,t=this._editorSize.x,i=this._editorSize.y;this._aspect=A/e,this._camera.zoom*=Math.min(t/A,i/e),this._renderer.setViewport(0,0,A,e)}updateViewport(){if(!this._renderer||!this._camera||"PerspectiveCamera"!==this._camera.cameraType)return;let A=this._frameSize.x,e=this._frameSize.y,t=this._editorSize.x,i=this._editorSize.y,r=0,s=0,a=A,o=e;A<t&&(r=-(r=(t-A)*.5),a=t),e<i&&(s=-(s=(i-e)*.5),o=i),this._aspect=a/o,this._renderer.setViewport(r,s,a,o)}updateCamera(){if(this._camera){if("PerspectiveCamera"===this._camera.cameraType){let A=this._frameSize.y,e=this._editorSize.y,t=this._fov;if(A>e)t*=A/e*(1-((A-1080)/1080*14+1)/100);this._camera.aspect=this._aspect,this._camera.fov=t,this._camera.updateProjectionMatrix()}else this._camera.setViewplaneSize(this._frameSize.x,this._frameSize.y)}}setCamera(A){this._camera=A,this._aspect=A.aspect,this._fov=A.fov}revert(){let A=window.innerWidth,e=window.innerHeight;this._renderer&&(this._renderer.setViewport(0,0,A,e),this._renderer.setSize(A,e)),this._camera&&(this._camera.aspect=A/e,this._camera.fov=this._fov,this._camera.setViewplaneSize(A,e),this._camera.updateProjectionMatrix())}},Cu={RED:0,GREEN:1,BLUE:2,ALPHA:3},Cp="varying vec2 vUv;void main(){vUv=position.xy*0.5+0.5;gl_Position=vec4(position.xy,1.0,1.0);}",Cf=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
uniform lowp sampler2D cocBuffer;uniform vec2 texelSize;uniform float scale;
#if PASS == 1
uniform vec4 kernel64[32];
#else
uniform vec4 kernel16[8];
#endif
varying vec2 vUv;void main(){
#ifdef FOREGROUND
vec2 CoCNearFar=texture2D(cocBuffer,vUv).rg;float CoC=CoCNearFar.r*scale;
#else
float CoC=texture2D(cocBuffer,vUv).g*scale;
#endif
if(CoC==0.0){gl_FragColor=texture2D(inputBuffer,vUv);}else{
#ifdef FOREGROUND
vec2 step=texelSize*max(CoC,CoCNearFar.g*scale);
#else
vec2 step=texelSize*CoC;
#endif
#if PASS == 1
vec4 acc=vec4(0.0);for(int i=0;i<32;++i){vec4 kernel=kernel64[i];vec2 uv=step*kernel.xy+vUv;acc+=texture2D(inputBuffer,uv);uv=step*kernel.zw+vUv;acc+=texture2D(inputBuffer,uv);}gl_FragColor=acc/64.0;
#else
vec4 maxValue=texture2D(inputBuffer,vUv);for(int i=0;i<8;++i){vec4 kernel=kernel16[i];vec2 uv=step*kernel.xy+vUv;maxValue=max(texture2D(inputBuffer,uv),maxValue);uv=step*kernel.zw+vUv;maxValue=max(texture2D(inputBuffer,uv),maxValue);}gl_FragColor=maxValue;
#endif
}}`,Cm=class extends ij{constructor(A=!1,e=!1){super({name:"BokehMaterial",defines:{PASS:A?"2":"1"},uniforms:{kernel64:new aZ(null),kernel16:new aZ(null),inputBuffer:new aZ(null),cocBuffer:new aZ(null),texelSize:new aZ(new e_),scale:new aZ(1)},blending:0,depthWrite:!1,depthTest:!1,fragmentShader:Cf,vertexShader:Cp}),this.toneMapped=!1,e&&(this.defines.FOREGROUND="1"),this.generateKernel()}set inputBuffer(A){this.uniforms.inputBuffer.value=A}setInputBuffer(A){this.uniforms.inputBuffer.value=A}set cocBuffer(A){this.uniforms.cocBuffer.value=A}setCoCBuffer(A){this.uniforms.cocBuffer.value=A}get scale(){return this.uniforms.scale.value}set scale(A){this.uniforms.scale.value=A}getScale(A){return this.uniforms.scale.value=A}setScale(A){this.uniforms.scale.value=A}generateKernel(){let A=new Float32Array(128),e=new Float32Array(32),t=0,i=0;for(let r=0;r<80;++r){let s=2.39996323*r,a=Math.sqrt(r)/Math.sqrt(80),o=a*Math.cos(s),l=a*Math.sin(s);r%5==0?(e[i++]=o,e[i++]=l):(A[t++]=o,A[t++]=l)}let h=[],c=[];for(let d=0;d<128;)h.push(new e$(A[d++],A[d++],A[d++],A[d++]));for(let u=0;u<32;)c.push(new e$(e[u++],e[u++],e[u++],e[u++]));this.uniforms.kernel64.value=h,this.uniforms.kernel16.value=c}setTexelSize(A,e){this.uniforms.texelSize.value.set(A,e)}setSize(A,e){this.uniforms.texelSize.value.set(1/A,1/e)}};function Cg(A,e,t){return Math.min(Math.max((A+e)/(e-t),0),1)}var Cv=`#include <common>
#include <packing>
#ifdef GL_FRAGMENT_PRECISION_HIGH
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
uniform float focusDistance;uniform float focusRange;uniform float cameraNear;uniform float cameraFar;varying vec2 vUv;float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
return unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
return texture2D(depthBuffer,uv).r;
#endif
}void main(){float depth=readDepth(vUv);
#ifdef PERSPECTIVE_CAMERA
float viewZ=perspectiveDepthToViewZ(depth,cameraNear,cameraFar);float linearDepth=viewZToOrthographicDepth(viewZ,cameraNear,cameraFar);
#else
float linearDepth=depth;
#endif
float signedDistance=linearDepth-focusDistance;float magnitude=smoothstep(0.0,focusRange,abs(signedDistance));gl_FragColor.rg=magnitude*vec2(step(signedDistance,0.0),step(0.0,signedDistance));}`,Cy=class extends ij{constructor(A){super({name:"CircleOfConfusionMaterial",defines:{DEPTH_PACKING:"0"},uniforms:{depthBuffer:new aZ(null),focusDistance:new aZ(0),focusRange:new aZ(0),cameraNear:new aZ(.3),cameraFar:new aZ(1e3)},blending:0,depthWrite:!1,depthTest:!1,fragmentShader:Cv,vertexShader:Cp}),this.toneMapped=!1,this.uniforms.focalLength=this.uniforms.focusRange,this.adoptCameraSettings(A)}get near(){return this.uniforms.cameraNear.value}get far(){return this.uniforms.cameraFar.value}set depthBuffer(A){this.uniforms.depthBuffer.value=A}set depthPacking(A){this.defines.DEPTH_PACKING=A.toFixed(0),this.needsUpdate=!0}setDepthBuffer(A,e=3200){this.depthBuffer=A,this.depthPacking=e}get focusDistance(){return this.uniforms.focusDistance.value}set focusDistance(A){this.uniforms.focusDistance.value=A}get worldFocusDistance(){var A;return-(this.focusDistance*((A=this.near)-this.far)-A)}set worldFocusDistance(A){this.focusDistance=Cg(-A,this.near,this.far)}getFocusDistance(A){this.uniforms.focusDistance.value=A}setFocusDistance(A){this.uniforms.focusDistance.value=A}get focalLength(){return this.focusRange}set focalLength(A){this.focusRange=A}get focusRange(){return this.uniforms.focusRange.value}set focusRange(A){this.uniforms.focusRange.value=A}get worldFocusRange(){var A;return-(this.focusRange*((A=this.near)-this.far)-A)}set worldFocusRange(A){this.focusRange=Cg(-A,this.near,this.far)}getFocalLength(A){return this.focusRange}setFocalLength(A){this.focusRange=A}adoptCameraSettings(A){A&&(this.uniforms.cameraNear.value=A.near,this.uniforms.cameraFar.value=A.far,A instanceof iW?this.defines.PERSPECTIVE_CAMERA="1":delete this.defines.PERSPECTIVE_CAMERA,this.needsUpdate=!0)}},Cx=`#include <common>
#include <dithering_pars_fragment>
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec4 sum=texture2D(inputBuffer,vUv0);sum+=texture2D(inputBuffer,vUv1);sum+=texture2D(inputBuffer,vUv2);sum+=texture2D(inputBuffer,vUv3);gl_FragColor=sum*0.25;
#include <encodings_fragment>
#include <dithering_fragment>
}`,Cb=class extends ij{constructor(A=new e_){super({name:"KawaseBlurMaterial",uniforms:{inputBuffer:new aZ(null),texelSize:new aZ(new e_),halfTexelSize:new aZ(new e_),kernel:new aZ(0),scale:new aZ(1)},blending:0,depthWrite:!1,depthTest:!1,fragmentShader:Cx,vertexShader:"uniform vec2 texelSize;uniform vec2 halfTexelSize;uniform float kernel;uniform float scale;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec2 uv=position.xy*0.5+0.5;vec2 dUv=(texelSize*vec2(kernel)+halfTexelSize)*scale;vUv0=vec2(uv.x-dUv.x,uv.y+dUv.y);vUv1=vec2(uv.x+dUv.x,uv.y+dUv.y);vUv2=vec2(uv.x+dUv.x,uv.y-dUv.y);vUv3=vec2(uv.x-dUv.x,uv.y-dUv.y);gl_Position=vec4(position.xy,1.0,1.0);}"}),this.toneMapped=!1,this.setTexelSize(A.x,A.y)}set inputBuffer(A){this.uniforms.inputBuffer.value=A}setInputBuffer(A){this.inputBuffer=A}get scale(){return this.uniforms.scale.value}set scale(A){this.uniforms.scale.value=A}getScale(){return this.uniforms.scale.value}setScale(A){this.uniforms.scale.value=A}getKernel(){return null}get kernel(){return this.uniforms.kernel.value}set kernel(A){this.uniforms.kernel.value=A}setKernel(A){this.kernel=A}setTexelSize(A,e){this.uniforms.texelSize.value.set(A,e),this.uniforms.halfTexelSize.value.set(A,e).multiplyScalar(.5)}setSize(A,e){let t=this.uniforms;t.texelSize.value.set(1/A,1/e),t.halfTexelSize.value.copy(t.texelSize.value).multiplyScalar(.5)}},Cw=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
uniform float opacity;varying vec2 vUv;void main(){vec4 texel=texture2D(inputBuffer,vUv);gl_FragColor=opacity*texel;
#include <encodings_fragment>
}`,CS=class extends ij{constructor(){super({name:"CopyMaterial",uniforms:{inputBuffer:new aZ(null),opacity:new aZ(1)},blending:0,depthWrite:!1,depthTest:!1,fragmentShader:Cw,vertexShader:Cp}),this.toneMapped=!1}set inputBuffer(A){this.uniforms.inputBuffer.value=A}setInputBuffer(A){this.uniforms.inputBuffer.value=A}getOpacity(A){return this.uniforms.opacity.value}setOpacity(A){this.uniforms.opacity.value=A}},CM=`varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;
#if EDGE_DETECTION_MODE != 0
varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;
#endif
#if EDGE_DETECTION_MODE == 1
#include <common>
#endif
#if EDGE_DETECTION_MODE == 0 || PREDICATION_MODE == 1
#ifdef GL_FRAGMENT_PRECISION_HIGH
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
return unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
return texture2D(depthBuffer,uv).r;
#endif
}vec3 gatherNeighbors(){float p=readDepth(vUv);float pLeft=readDepth(vUv0);float pTop=readDepth(vUv1);return vec3(p,pLeft,pTop);}
#elif PREDICATION_MODE == 2
uniform sampler2D predicationBuffer;vec3 gatherNeighbors(){float p=texture2D(predicationBuffer,vUv).r;float pLeft=texture2D(predicationBuffer,vUv0).r;float pTop=texture2D(predicationBuffer,vUv1).r;return vec3(p,pLeft,pTop);}
#endif
#if PREDICATION_MODE != 0
vec2 calculatePredicatedThreshold(){vec3 neighbours=gatherNeighbors();vec2 delta=abs(neighbours.xx-neighbours.yz);vec2 edges=step(PREDICATION_THRESHOLD,delta);return PREDICATION_SCALE*EDGE_THRESHOLD*(1.0-PREDICATION_STRENGTH*edges);}
#endif
#if EDGE_DETECTION_MODE != 0
uniform sampler2D inputBuffer;
#endif
void main(){
#if EDGE_DETECTION_MODE == 0
const vec2 threshold=vec2(DEPTH_THRESHOLD);
#elif PREDICATION_MODE != 0
vec2 threshold=calculatePredicatedThreshold();
#else
const vec2 threshold=vec2(EDGE_THRESHOLD);
#endif
#if EDGE_DETECTION_MODE == 0
vec3 neighbors=gatherNeighbors();vec2 delta=abs(neighbors.xx-vec2(neighbors.y,neighbors.z));vec2 edges=step(threshold,delta);if(dot(edges,vec2(1.0))==0.0){discard;}gl_FragColor=vec4(edges,0.0,1.0);
#elif EDGE_DETECTION_MODE == 1
float l=linearToRelativeLuminance(texture2D(inputBuffer,vUv).rgb);float lLeft=linearToRelativeLuminance(texture2D(inputBuffer,vUv0).rgb);float lTop=linearToRelativeLuminance(texture2D(inputBuffer,vUv1).rgb);vec4 delta;delta.xy=abs(l-vec2(lLeft,lTop));vec2 edges=step(threshold,delta.xy);if(dot(edges,vec2(1.0))==0.0){discard;}float lRight=linearToRelativeLuminance(texture2D(inputBuffer,vUv2).rgb);float lBottom=linearToRelativeLuminance(texture2D(inputBuffer,vUv3).rgb);delta.zw=abs(l-vec2(lRight,lBottom));vec2 maxDelta=max(delta.xy,delta.zw);float lLeftLeft=linearToRelativeLuminance(texture2D(inputBuffer,vUv4).rgb);float lTopTop=linearToRelativeLuminance(texture2D(inputBuffer,vUv5).rgb);delta.zw=abs(vec2(lLeft,lTop)-vec2(lLeftLeft,lTopTop));maxDelta=max(maxDelta.xy,delta.zw);float finalDelta=max(maxDelta.x,maxDelta.y);edges.xy*=step(finalDelta,LOCAL_CONTRAST_ADAPTATION_FACTOR*delta.xy);gl_FragColor=vec4(edges,0.0,1.0);
#elif EDGE_DETECTION_MODE == 2
vec4 delta;vec3 c=texture2D(inputBuffer,vUv).rgb;vec3 cLeft=texture2D(inputBuffer,vUv0).rgb;vec3 t=abs(c-cLeft);delta.x=max(max(t.r,t.g),t.b);vec3 cTop=texture2D(inputBuffer,vUv1).rgb;t=abs(c-cTop);delta.y=max(max(t.r,t.g),t.b);vec2 edges=step(threshold,delta.xy);if(dot(edges,vec2(1.0))==0.0){discard;}vec3 cRight=texture2D(inputBuffer,vUv2).rgb;t=abs(c-cRight);delta.z=max(max(t.r,t.g),t.b);vec3 cBottom=texture2D(inputBuffer,vUv3).rgb;t=abs(c-cBottom);delta.w=max(max(t.r,t.g),t.b);vec2 maxDelta=max(delta.xy,delta.zw);vec3 cLeftLeft=texture2D(inputBuffer,vUv4).rgb;t=abs(c-cLeftLeft);delta.z=max(max(t.r,t.g),t.b);vec3 cTopTop=texture2D(inputBuffer,vUv5).rgb;t=abs(c-cTopTop);delta.w=max(max(t.r,t.g),t.b);maxDelta=max(maxDelta.xy,delta.zw);float finalDelta=max(maxDelta.x,maxDelta.y);edges*=step(finalDelta,LOCAL_CONTRAST_ADAPTATION_FACTOR*delta.xy);gl_FragColor=vec4(edges,0.0,1.0);
#endif
}`,CE=`uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;
#if EDGE_DETECTION_MODE != 0
varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;
#endif
void main(){vUv=position.xy*0.5+0.5;vUv0=vUv+texelSize*vec2(-1.0,0.0);vUv1=vUv+texelSize*vec2(0.0,-1.0);
#if EDGE_DETECTION_MODE != 0
vUv2=vUv+texelSize*vec2(1.0,0.0);vUv3=vUv+texelSize*vec2(0.0,1.0);vUv4=vUv+texelSize*vec2(-2.0,0.0);vUv5=vUv+texelSize*vec2(0.0,-2.0);
#endif
gl_Position=vec4(position.xy,1.0,1.0);}`,CT={DEPTH:0,LUMA:1,COLOR:2},CC={DISABLED:0,DEPTH:1,CUSTOM:2},CD=class extends ij{constructor(A=new e_,e=CT.COLOR){super({name:"EdgeDetectionMaterial",defines:{LOCAL_CONTRAST_ADAPTATION_FACTOR:"2.0",EDGE_THRESHOLD:"0.1",DEPTH_THRESHOLD:"0.01",PREDICATION_MODE:"0",PREDICATION_THRESHOLD:"0.01",PREDICATION_SCALE:"2.0",PREDICATION_STRENGTH:"1.0",DEPTH_PACKING:"0"},uniforms:{inputBuffer:new aZ(null),depthBuffer:new aZ(null),predicationBuffer:new aZ(null),texelSize:new aZ(A)},blending:0,depthWrite:!1,depthTest:!1,fragmentShader:CM,vertexShader:CE}),this.toneMapped=!1,this.edgeDetectionMode=e}set depthBuffer(A){this.uniforms.depthBuffer.value=A}set depthPacking(A){this.defines.DEPTH_PACKING=A.toFixed(0),this.needsUpdate=!0}setDepthBuffer(A,e=3200){this.depthBuffer=A,this.depthPacking=e}get edgeDetectionMode(){return Number(this.defines.EDGE_DETECTION_MODE)}set edgeDetectionMode(A){this.defines.EDGE_DETECTION_MODE=A.toFixed(0),this.needsUpdate=!0}getEdgeDetectionMode(){return this.edgeDetectionMode}setEdgeDetectionMode(A){this.edgeDetectionMode=A}get localContrastAdaptationFactor(){return Number(this.defines.LOCAL_CONTRAST_ADAPTATION_FACTOR)}set localContrastAdaptationFactor(A){this.defines.LOCAL_CONTRAST_ADAPTATION_FACTOR=A.toFixed("6"),this.needsUpdate=!0}getLocalContrastAdaptationFactor(){return this.localContrastAdaptationFactor}setLocalContrastAdaptationFactor(A){this.localContrastAdaptationFactor=A}get edgeDetectionThreshold(){return Number(this.defines.EDGE_THRESHOLD)}set edgeDetectionThreshold(A){this.defines.EDGE_THRESHOLD=A.toFixed("6"),this.defines.DEPTH_THRESHOLD=(.1*A).toFixed("6"),this.needsUpdate=!0}getEdgeDetectionThreshold(){return this.edgeDetectionThreshold}setEdgeDetectionThreshold(A){this.edgeDetectionThreshold=A}get predicationMode(){return Number(this.defines.PREDICATION_MODE)}set predicationMode(A){this.defines.PREDICATION_MODE=A.toFixed(0),this.needsUpdate=!0}getPredicationMode(){return this.predicationMode}setPredicationMode(A){this.predicationMode=A}set predicationBuffer(A){this.uniforms.predicationBuffer.value=A}setPredicationBuffer(A){this.uniforms.predicationBuffer.value=A}get predicationThreshold(){return Number(this.defines.PREDICATION_THRESHOLD)}set predicationThreshold(A){this.defines.PREDICATION_THRESHOLD=A.toFixed("6"),this.needsUpdate=!0}getPredicationThreshold(){return this.predicationThreshold}setPredicationThreshold(A){this.predicationThreshold=A}get predicationScale(){return Number(this.defines.PREDICATION_SCALE)}set predicationScale(A){this.defines.PREDICATION_SCALE=A.toFixed("6"),this.needsUpdate=!0}getPredicationScale(){return this.predicationScale}setPredicationScale(A){this.predicationScale=A}get predicationStrength(){return Number(this.defines.PREDICATION_STRENGTH)}set predicationStrength(A){this.defines.PREDICATION_STRENGTH=A.toFixed("6"),this.needsUpdate=!0}getPredicationStrength(){return this.predicationStrength}setPredicationStrength(A){this.predicationStrength=A}setSize(A,e){this.uniforms.texelSize.value.set(1/A,1/e)}},CP=`#include <common>
#include <packing>
#include <dithering_pars_fragment>
#define packFloatToRGBA(v) packDepthToRGBA(v)
#define unpackRGBAToFloat(v) unpackRGBAToDepth(v)
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#ifdef GL_FRAGMENT_PRECISION_HIGH
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;
#if THREE_REVISION >= 137
vec4 sRGBToLinear(const in vec4 value){return vec4(mix(pow(value.rgb*0.9478672986+vec3(0.0521327014),vec3(2.4)),value.rgb*0.0773993808,vec3(lessThanEqual(value.rgb,vec3(0.04045)))),value.a);}
#endif
float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
return unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
return texture2D(depthBuffer,uv).r;
#endif
}float getViewZ(const in float depth){
#ifdef PERSPECTIVE_CAMERA
return perspectiveDepthToViewZ(depth,cameraNear,cameraFar);
#else
return orthographicDepthToViewZ(depth,cameraNear,cameraFar);
#endif
}FRAGMENT_HEADvoid main(){FRAGMENT_MAIN_UVvec4 color0=texture2D(inputBuffer,UV);vec4 color1=vec4(0.0);FRAGMENT_MAIN_IMAGEgl_FragColor=color0;
#ifdef ENCODE_OUTPUT
#include <encodings_fragment>
#endif
#include <dithering_fragment>
}`,C_={FRAGMENT_HEAD:"FRAGMENT_HEAD",FRAGMENT_MAIN_UV:"FRAGMENT_MAIN_UV",FRAGMENT_MAIN_IMAGE:"FRAGMENT_MAIN_IMAGE",VERTEX_HEAD:"VERTEX_HEAD",VERTEX_MAIN_SUPPORT:"VERTEX_MAIN_SUPPORT"},CL=class extends ij{constructor(A,e,t,i,r=!1){super({name:"EffectMaterial",defines:{THREE_REVISION:"142".replace(/\D+/g,""),DEPTH_PACKING:"0",ENCODE_OUTPUT:"1"},uniforms:{inputBuffer:new aZ(null),depthBuffer:new aZ(null),resolution:new aZ(new e_),texelSize:new aZ(new e_),cameraNear:new aZ(.3),cameraFar:new aZ(1e3),aspect:new aZ(1),time:new aZ(0)},blending:0,depthWrite:!1,depthTest:!1,dithering:r}),this.toneMapped=!1,A&&this.setShaderParts(A),e&&this.setDefines(e),t&&this.setUniforms(t),this.adoptCameraSettings(i)}set inputBuffer(A){this.uniforms.inputBuffer.value=A}setInputBuffer(A){this.uniforms.inputBuffer.value=A}get depthBuffer(){return this.uniforms.depthBuffer.value}set depthBuffer(A){this.uniforms.depthBuffer.value=A}get depthPacking(){return Number(this.defines.DEPTH_PACKING)}set depthPacking(A){this.defines.DEPTH_PACKING=A.toFixed(0),this.needsUpdate=!0}setDepthBuffer(A,e=3200){this.depthBuffer=A,this.depthPacking=e}setShaderParts(A){return this.fragmentShader=CP.replace(C_.FRAGMENT_HEAD,A.get(C_.FRAGMENT_HEAD)).replace(C_.FRAGMENT_MAIN_UV,A.get(C_.FRAGMENT_MAIN_UV)).replace(C_.FRAGMENT_MAIN_IMAGE,A.get(C_.FRAGMENT_MAIN_IMAGE)),this.vertexShader="uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;VERTEX_HEADvoid main(){vUv=position.xy*0.5+0.5;VERTEX_MAIN_SUPPORTgl_Position=vec4(position.xy,1.0,1.0);}".replace(C_.VERTEX_HEAD,A.get(C_.VERTEX_HEAD)).replace(C_.VERTEX_MAIN_SUPPORT,A.get(C_.VERTEX_MAIN_SUPPORT)),this.needsUpdate=!0,this}setDefines(A){for(let e of A.entries())this.defines[e[0]]=e[1];return this.needsUpdate=!0,this}setUniforms(A){for(let e of A.entries())this.uniforms[e[0]]=e[1];return this}setExtensions(A){for(let e of(this.extensions={},A))this.extensions[e]=!0;return this}get encodeOutput(){return void 0!==this.defines.ENCODE_OUTPUT}set encodeOutput(A){this.encodeOutput!==A&&(A?this.defines.ENCODE_OUTPUT="1":delete this.defines.ENCODE_OUTPUT,this.needsUpdate=!0)}isOutputEncodingEnabled(A){return this.encodeOutput}setOutputEncodingEnabled(A){this.encodeOutput=A}get time(){return this.uniforms.time.value}set time(A){this.uniforms.time.value=A}setDeltaTime(A){this.uniforms.time.value+=A}adoptCameraSettings(A){A&&(this.uniforms.cameraNear.value=A.near,this.uniforms.cameraFar.value=A.far,A instanceof iW?this.defines.PERSPECTIVE_CAMERA="1":delete this.defines.PERSPECTIVE_CAMERA,this.needsUpdate=!0)}setSize(A,e){let t=this.uniforms;t.resolution.value.set(A,e),t.texelSize.value.set(1/A,1/e),t.aspect.value=A/e}static get Section(){return C_}},CO=`#include <common>
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#ifdef RANGE
uniform vec2 range;
#elif defined(THRESHOLD)
uniform float threshold;uniform float smoothing;
#endif
varying vec2 vUv;void main(){vec4 texel=texture2D(inputBuffer,vUv);float l=linearToRelativeLuminance(texel.rgb);
#ifdef RANGE
float low=step(range.x,l);float high=step(l,range.y);l*=low*high;
#elif defined(THRESHOLD)
l=smoothstep(threshold,threshold+smoothing,l);
#endif
#ifdef COLOR
gl_FragColor=vec4(texel.rgb*l,l);
#else
gl_FragColor=vec4(l);
#endif
}`,CB=class extends ij{constructor(A=!1,e=null){super({name:"LuminanceMaterial",uniforms:{inputBuffer:new aZ(null),threshold:new aZ(0),smoothing:new aZ(1),range:new aZ(null)},blending:0,depthWrite:!1,depthTest:!1,fragmentShader:CO,vertexShader:Cp}),this.toneMapped=!1,this.colorOutput=A,this.luminanceRange=e}set inputBuffer(A){this.uniforms.inputBuffer.value=A}setInputBuffer(A){this.uniforms.inputBuffer.value=A}get threshold(){return this.uniforms.threshold.value}set threshold(A){this.smoothing>0||A>0?this.defines.THRESHOLD="1":delete this.defines.THRESHOLD,this.uniforms.threshold.value=A}getThreshold(){return this.threshold}setThreshold(A){this.threshold=A}get smoothing(){return this.uniforms.smoothing.value}set smoothing(A){this.threshold>0||A>0?this.defines.THRESHOLD="1":delete this.defines.THRESHOLD,this.uniforms.smoothing.value=A}getSmoothingFactor(){return this.smoothing}setSmoothingFactor(A){this.smoothing=A}get useThreshold(){return this.threshold>0||this.smoothing>0}set useThreshold(A){}get colorOutput(){return void 0!==this.defines.COLOR}set colorOutput(A){A?this.defines.COLOR="1":delete this.defines.COLOR,this.needsUpdate=!0}isColorOutputEnabled(A){return this.colorOutput}setColorOutputEnabled(A){this.colorOutput=A}get useRange(){return null!==this.luminanceRange}set useRange(A){this.luminanceRange=null}get luminanceRange(){return this.uniforms.range.value}set luminanceRange(A){null!==A?this.defines.RANGE="1":delete this.defines.RANGE,this.uniforms.range.value=A,this.needsUpdate=!0}getLuminanceRange(){return this.luminanceRange}setLuminanceRange(A){this.luminanceRange=A}},CI=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#ifdef MASK_PRECISION_HIGH
uniform mediump sampler2D maskTexture;
#else
uniform lowp sampler2D maskTexture;
#endif
#if MASK_FUNCTION != 0
uniform float strength;
#endif
varying vec2 vUv;void main(){
#if COLOR_CHANNEL == 0
float mask=texture2D(maskTexture,vUv).r;
#elif COLOR_CHANNEL == 1
float mask=texture2D(maskTexture,vUv).g;
#elif COLOR_CHANNEL == 2
float mask=texture2D(maskTexture,vUv).b;
#else
float mask=texture2D(maskTexture,vUv).a;
#endif
#if MASK_FUNCTION == 0
#ifdef INVERTED
mask=step(mask,0.0);
#else
mask=1.0-step(mask,0.0);
#endif
#else
mask=clamp(mask*strength,0.0,1.0);
#ifdef INVERTED
mask=1.0-mask;
#endif
#endif
#if MASK_FUNCTION == 2
gl_FragColor=vec4(mask*texture2D(inputBuffer,vUv).rgb,mask);
#else
gl_FragColor=mask*texture2D(inputBuffer,vUv);
#endif
}`,CR={DISCARD:0,MULTIPLY:1,MULTIPLY_RGB_SET_ALPHA:2},CN=class extends ij{constructor(A=null){super({name:"MaskMaterial",uniforms:{maskTexture:new aZ(A),inputBuffer:new aZ(null),strength:new aZ(1)},blending:0,depthWrite:!1,depthTest:!1,fragmentShader:CI,vertexShader:Cp}),this.toneMapped=!1,this.setColorChannel(Cu.RED),this.setMaskFunction(CR.DISCARD)}set inputBuffer(A){this.uniforms.inputBuffer.value=A}setInputBuffer(A){this.uniforms.inputBuffer.value=A}set maskTexture(A){this.uniforms.maskTexture.value=A,delete this.defines.MASK_PRECISION_HIGH,1009!==A.type&&(this.defines.MASK_PRECISION_HIGH="1"),this.needsUpdate=!0}setMaskTexture(A){this.maskTexture=A}set colorChannel(A){this.defines.COLOR_CHANNEL=A.toFixed(0),this.needsUpdate=!0}setColorChannel(A){this.colorChannel=A}set maskFunction(A){this.defines.MASK_FUNCTION=A.toFixed(0),this.needsUpdate=!0}setMaskFunction(A){this.maskFunction=A}get inverted(){return void 0!==this.defines.INVERTED}set inverted(A){this.inverted&&!A?delete this.defines.INVERTED:A&&(this.defines.INVERTED="1"),this.needsUpdate=!0}isInverted(){return this.inverted}setInverted(A){this.inverted=A}get strength(){return this.uniforms.strength.value}set strength(A){this.uniforms.strength.value=A}getStrength(){return this.strength}setStrength(A){this.strength=A}},Cz=`#define sampleLevelZeroOffset(t, coord, offset) texture2D(t, coord + offset * texelSize)
#if __VERSION__ < 300
#define round(v) floor(v + 0.5)
#endif
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
uniform lowp sampler2D areaTexture;uniform lowp sampler2D searchTexture;uniform vec2 texelSize;uniform vec2 resolution;varying vec2 vUv;varying vec4 vOffset[3];varying vec2 vPixCoord;void movec(const in bvec2 c,inout vec2 variable,const in vec2 value){if(c.x){variable.x=value.x;}if(c.y){variable.y=value.y;}}void movec(const in bvec4 c,inout vec4 variable,const in vec4 value){movec(c.xy,variable.xy,value.xy);movec(c.zw,variable.zw,value.zw);}vec2 decodeDiagBilinearAccess(in vec2 e){e.r=e.r*abs(5.0*e.r-5.0*0.75);return round(e);}vec4 decodeDiagBilinearAccess(in vec4 e){e.rb=e.rb*abs(5.0*e.rb-5.0*0.75);return round(e);}vec2 searchDiag1(const in vec2 texCoord,const in vec2 dir,out vec2 e){vec4 coord=vec4(texCoord,-1.0,1.0);vec3 t=vec3(texelSize,1.0);for(int i=0;i<MAX_SEARCH_STEPS_INT;++i){if(!(coord.z<float(MAX_SEARCH_STEPS_DIAG_INT-1)&&coord.w>0.9)){break;}coord.xyz=t*vec3(dir,1.0)+coord.xyz;e=texture2D(inputBuffer,coord.xy).rg;coord.w=dot(e,vec2(0.5));}return coord.zw;}vec2 searchDiag2(const in vec2 texCoord,const in vec2 dir,out vec2 e){vec4 coord=vec4(texCoord,-1.0,1.0);coord.x+=0.25*texelSize.x;vec3 t=vec3(texelSize,1.0);for(int i=0;i<MAX_SEARCH_STEPS_INT;++i){if(!(coord.z<float(MAX_SEARCH_STEPS_DIAG_INT-1)&&coord.w>0.9)){break;}coord.xyz=t*vec3(dir,1.0)+coord.xyz;e=texture2D(inputBuffer,coord.xy).rg;e=decodeDiagBilinearAccess(e);coord.w=dot(e,vec2(0.5));}return coord.zw;}vec2 areaDiag(const in vec2 dist,const in vec2 e,const in float offset){vec2 texCoord=vec2(AREATEX_MAX_DISTANCE_DIAG,AREATEX_MAX_DISTANCE_DIAG)*e+dist;texCoord=AREATEX_PIXEL_SIZE*texCoord+0.5*AREATEX_PIXEL_SIZE;texCoord.x+=0.5;texCoord.y+=AREATEX_SUBTEX_SIZE*offset;return texture2D(areaTexture,texCoord).rg;}vec2 calculateDiagWeights(const in vec2 texCoord,const in vec2 e,const in vec4 subsampleIndices){vec2 weights=vec2(0.0);vec4 d;vec2 end;if(e.r>0.0){d.xz=searchDiag1(texCoord,vec2(-1.0,1.0),end);d.x+=float(end.y>0.9);}else{d.xz=vec2(0.0);}d.yw=searchDiag1(texCoord,vec2(1.0,-1.0),end);if(d.x+d.y>2.0){vec4 coords=vec4(-d.x+0.25,d.x,d.y,-d.y-0.25)*texelSize.xyxy+texCoord.xyxy;vec4 c;c.xy=sampleLevelZeroOffset(inputBuffer,coords.xy,vec2(-1,0)).rg;c.zw=sampleLevelZeroOffset(inputBuffer,coords.zw,vec2(1,0)).rg;c.yxwz=decodeDiagBilinearAccess(c.xyzw);vec2 cc=vec2(2.0)*c.xz+c.yw;movec(bvec2(step(0.9,d.zw)),cc,vec2(0.0));weights+=areaDiag(d.xy,cc,subsampleIndices.z);}d.xz=searchDiag2(texCoord,vec2(-1.0,-1.0),end);if(sampleLevelZeroOffset(inputBuffer,texCoord,vec2(1,0)).r>0.0){d.yw=searchDiag2(texCoord,vec2(1.0),end);d.y+=float(end.y>0.9);}else{d.yw=vec2(0.0);}if(d.x+d.y>2.0){vec4 coords=vec4(-d.x,-d.x,d.y,d.y)*texelSize.xyxy+texCoord.xyxy;vec4 c;c.x=sampleLevelZeroOffset(inputBuffer,coords.xy,vec2(-1,0)).g;c.y=sampleLevelZeroOffset(inputBuffer,coords.xy,vec2(0,-1)).r;c.zw=sampleLevelZeroOffset(inputBuffer,coords.zw,vec2(1,0)).gr;vec2 cc=vec2(2.0)*c.xz+c.yw;movec(bvec2(step(0.9,d.zw)),cc,vec2(0.0));weights+=areaDiag(d.xy,cc,subsampleIndices.w).gr;}return weights;}float searchLength(const in vec2 e,const in float offset){vec2 scale=SEARCHTEX_SIZE*vec2(0.5,-1.0);vec2 bias=SEARCHTEX_SIZE*vec2(offset,1.0);scale+=vec2(-1.0,1.0);bias+=vec2(0.5,-0.5);scale*=1.0/SEARCHTEX_PACKED_SIZE;bias*=1.0/SEARCHTEX_PACKED_SIZE;return texture2D(searchTexture,scale*e+bias).r;}float searchXLeft(in vec2 texCoord,const in float end){vec2 e=vec2(0.0,1.0);for(int i=0;i<MAX_SEARCH_STEPS_INT;++i){if(!(texCoord.x>end&&e.g>0.8281&&e.r==0.0)){break;}e=texture2D(inputBuffer,texCoord).rg;texCoord=vec2(-2.0,0.0)*texelSize+texCoord;}float offset=-(255.0/127.0)*searchLength(e,0.0)+3.25;return texelSize.x*offset+texCoord.x;}float searchXRight(vec2 texCoord,const in float end){vec2 e=vec2(0.0,1.0);for(int i=0;i<MAX_SEARCH_STEPS_INT;++i){if(!(texCoord.x<end&&e.g>0.8281&&e.r==0.0)){break;}e=texture2D(inputBuffer,texCoord).rg;texCoord=vec2(2.0,0.0)*texelSize.xy+texCoord;}float offset=-(255.0/127.0)*searchLength(e,0.5)+3.25;return-texelSize.x*offset+texCoord.x;}float searchYUp(vec2 texCoord,const in float end){vec2 e=vec2(1.0,0.0);for(int i=0;i<MAX_SEARCH_STEPS_INT;++i){if(!(texCoord.y>end&&e.r>0.8281&&e.g==0.0)){break;}e=texture2D(inputBuffer,texCoord).rg;texCoord=-vec2(0.0,2.0)*texelSize.xy+texCoord;}float offset=-(255.0/127.0)*searchLength(e.gr,0.0)+3.25;return texelSize.y*offset+texCoord.y;}float searchYDown(vec2 texCoord,const in float end){vec2 e=vec2(1.0,0.0);for(int i=0;i<MAX_SEARCH_STEPS_INT;i++){if(!(texCoord.y<end&&e.r>0.8281&&e.g==0.0)){break;}e=texture2D(inputBuffer,texCoord).rg;texCoord=vec2(0.0,2.0)*texelSize.xy+texCoord;}float offset=-(255.0/127.0)*searchLength(e.gr,0.5)+3.25;return-texelSize.y*offset+texCoord.y;}vec2 area(const in vec2 dist,const in float e1,const in float e2,const in float offset){vec2 texCoord=vec2(AREATEX_MAX_DISTANCE)*round(4.0*vec2(e1,e2))+dist;texCoord=AREATEX_PIXEL_SIZE*texCoord+0.5*AREATEX_PIXEL_SIZE;texCoord.y=AREATEX_SUBTEX_SIZE*offset+texCoord.y;return texture2D(areaTexture,texCoord).rg;}void detectHorizontalCornerPattern(inout vec2 weights,const in vec4 texCoord,const in vec2 d){
#if !defined(DISABLE_CORNER_DETECTION)
vec2 leftRight=step(d.xy,d.yx);vec2 rounding=(1.0-CORNER_ROUNDING_NORM)*leftRight;rounding/=leftRight.x+leftRight.y;vec2 factor=vec2(1.0);factor.x-=rounding.x*sampleLevelZeroOffset(inputBuffer,texCoord.xy,vec2(0,1)).r;factor.x-=rounding.y*sampleLevelZeroOffset(inputBuffer,texCoord.zw,vec2(1,1)).r;factor.y-=rounding.x*sampleLevelZeroOffset(inputBuffer,texCoord.xy,vec2(0,-2)).r;factor.y-=rounding.y*sampleLevelZeroOffset(inputBuffer,texCoord.zw,vec2(1,-2)).r;weights*=clamp(factor,0.0,1.0);
#endif
}void detectVerticalCornerPattern(inout vec2 weights,const in vec4 texCoord,const in vec2 d){
#if !defined(DISABLE_CORNER_DETECTION)
vec2 leftRight=step(d.xy,d.yx);vec2 rounding=(1.0-CORNER_ROUNDING_NORM)*leftRight;rounding/=leftRight.x+leftRight.y;vec2 factor=vec2(1.0);factor.x-=rounding.x*sampleLevelZeroOffset(inputBuffer,texCoord.xy,vec2(1,0)).g;factor.x-=rounding.y*sampleLevelZeroOffset(inputBuffer,texCoord.zw,vec2(1,1)).g;factor.y-=rounding.x*sampleLevelZeroOffset(inputBuffer,texCoord.xy,vec2(-2,0)).g;factor.y-=rounding.y*sampleLevelZeroOffset(inputBuffer,texCoord.zw,vec2(-2,1)).g;weights*=clamp(factor,0.0,1.0);
#endif
}void main(){vec4 weights=vec4(0.0);vec4 subsampleIndices=vec4(0.0);vec2 e=texture2D(inputBuffer,vUv).rg;if(e.g>0.0){
#if !defined(DISABLE_DIAG_DETECTION)
weights.rg=calculateDiagWeights(vUv,e,subsampleIndices);if(weights.r==-weights.g){
#endif
vec2 d;vec3 coords;coords.x=searchXLeft(vOffset[0].xy,vOffset[2].x);coords.y=vOffset[1].y;d.x=coords.x;float e1=texture2D(inputBuffer,coords.xy).r;coords.z=searchXRight(vOffset[0].zw,vOffset[2].y);d.y=coords.z;d=round(resolution.xx*d+-vPixCoord.xx);vec2 sqrtD=sqrt(abs(d));float e2=sampleLevelZeroOffset(inputBuffer,coords.zy,vec2(1,0)).r;weights.rg=area(sqrtD,e1,e2,subsampleIndices.y);coords.y=vUv.y;detectHorizontalCornerPattern(weights.rg,coords.xyzy,d);
#if !defined(DISABLE_DIAG_DETECTION)
}else{e.r=0.0;}
#endif
}if(e.r>0.0){vec2 d;vec3 coords;coords.y=searchYUp(vOffset[1].xy,vOffset[2].z);coords.x=vOffset[0].x;d.x=coords.y;float e1=texture2D(inputBuffer,coords.xy).g;coords.z=searchYDown(vOffset[1].zw,vOffset[2].w);d.y=coords.z;d=round(resolution.yy*d-vPixCoord.yy);vec2 sqrtD=sqrt(abs(d));float e2=sampleLevelZeroOffset(inputBuffer,coords.xz,vec2(0,1)).g;weights.ba=area(sqrtD,e1,e2,subsampleIndices.x);coords.x=vUv.x;detectVerticalCornerPattern(weights.ba,coords.xyxz,d);}gl_FragColor=weights;}`,CF=class extends ij{constructor(A=new e_,e=new e_){super({name:"SMAAWeightsMaterial",defines:{MAX_SEARCH_STEPS_INT:"16",MAX_SEARCH_STEPS_FLOAT:"16.0",MAX_SEARCH_STEPS_DIAG_INT:"8",MAX_SEARCH_STEPS_DIAG_FLOAT:"8.0",CORNER_ROUNDING:"25",CORNER_ROUNDING_NORM:"0.25",AREATEX_MAX_DISTANCE:"16.0",AREATEX_MAX_DISTANCE_DIAG:"20.0",AREATEX_PIXEL_SIZE:"(1.0 / vec2(160.0, 560.0))",AREATEX_SUBTEX_SIZE:"(1.0 / 7.0)",SEARCHTEX_SIZE:"vec2(66.0, 33.0)",SEARCHTEX_PACKED_SIZE:"vec2(64.0, 16.0)"},uniforms:{inputBuffer:new aZ(null),searchTexture:new aZ(null),areaTexture:new aZ(null),resolution:new aZ(e),texelSize:new aZ(A)},blending:0,depthWrite:!1,depthTest:!1,fragmentShader:Cz,vertexShader:"uniform vec2 texelSize;uniform vec2 resolution;varying vec2 vUv;varying vec4 vOffset[3];varying vec2 vPixCoord;void main(){vUv=position.xy*0.5+0.5;vPixCoord=vUv*resolution;vOffset[0]=vUv.xyxy+texelSize.xyxy*vec4(-0.25,-0.125,1.25,-0.125);vOffset[1]=vUv.xyxy+texelSize.xyxy*vec4(-0.125,-0.25,-0.125,1.25);vOffset[2]=vec4(vOffset[0].xz,vOffset[1].yw)+vec4(-2.0,2.0,-2.0,2.0)*texelSize.xxyy*MAX_SEARCH_STEPS_FLOAT;gl_Position=vec4(position.xy,1.0,1.0);}"}),this.toneMapped=!1}set inputBuffer(A){this.uniforms.inputBuffer.value=A}setInputBuffer(A){this.uniforms.inputBuffer.value=A}get searchTexture(){return this.uniforms.searchTexture.value}set searchTexture(A){this.uniforms.searchTexture.value=A}get areaTexture(){return this.uniforms.areaTexture.value}set areaTexture(A){this.uniforms.areaTexture.value=A}setLookupTextures(A,e){this.searchTexture=A,this.areaTexture=e}get orthogonalSearchSteps(){return Number(this.defines.MAX_SEARCH_STEPS_INT)}set orthogonalSearchSteps(A){let e=Math.min(Math.max(A,0),112);this.defines.MAX_SEARCH_STEPS_INT=e.toFixed("0"),this.defines.MAX_SEARCH_STEPS_FLOAT=e.toFixed("1"),this.needsUpdate=!0}setOrthogonalSearchSteps(A){this.orthogonalSearchSteps=A}get diagonalSearchSteps(){return Number(this.defines.MAX_SEARCH_STEPS_DIAG_INT)}set diagonalSearchSteps(A){let e=Math.min(Math.max(A,0),20);this.defines.MAX_SEARCH_STEPS_DIAG_INT=e.toFixed("0"),this.defines.MAX_SEARCH_STEPS_DIAG_FLOAT=e.toFixed("1"),this.needsUpdate=!0}setDiagonalSearchSteps(A){this.diagonalSearchSteps=A}get diagonalDetection(){return void 0===this.defines.DISABLE_DIAG_DETECTION}set diagonalDetection(A){A?delete this.defines.DISABLE_DIAG_DETECTION:this.defines.DISABLE_DIAG_DETECTION="1",this.needsUpdate=!0}isDiagonalDetectionEnabled(){return this.diagonalDetection}setDiagonalDetectionEnabled(A){this.diagonalDetection=A}get cornerRounding(){return Number(this.defines.CORNER_ROUNDING)}set cornerRounding(A){let e=Math.min(Math.max(A,0),100);this.defines.CORNER_ROUNDING=e.toFixed("4"),this.defines.CORNER_ROUNDING_NORM=(e/100).toFixed("4"),this.needsUpdate=!0}setCornerRounding(A){this.cornerRounding=A}get cornerDetection(){return void 0===this.defines.DISABLE_CORNER_DETECTION}set cornerDetection(A){A?delete this.defines.DISABLE_CORNER_DETECTION:this.defines.DISABLE_CORNER_DETECTION="1",this.needsUpdate=!0}isCornerRoundingEnabled(){return this.cornerDetection}setCornerRoundingEnabled(A){this.cornerDetection=A}setSize(A,e){let t=this.uniforms;t.texelSize.value.set(1/A,1/e),t.resolution.value.set(A,e)}},CU=new iH,Ck=null,CG=class{constructor(A="Pass",e=new ns,t=CU){this.name=A,this.renderer=null,this.scene=e,this.camera=t,this.screen=null,this.rtt=!0,this.needsSwap=!0,this.needsDepthTexture=!1,this.enabled=!0}get renderToScreen(){return!this.rtt}set renderToScreen(A){if(this.rtt===A){let e=this.getFullscreenMaterial();null!==e&&(e.needsUpdate=!0),this.rtt=!A}}setRenderer(A){this.renderer=A}isEnabled(){return this.enabled}setEnabled(A){this.enabled=A}get fullscreenMaterial(){return null!==this.screen?this.screen.material:null}set fullscreenMaterial(A){let e=this.screen;null!==e?e.material=A:((e=new iR(function(){if(null===Ck){let A=new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),e=new Float32Array([0,0,2,0,0,2]);void 0!==(Ck=new ig).setAttribute?(Ck.setAttribute("position",new ii(A,3)),Ck.setAttribute("uv",new ii(e,2))):(Ck.addAttribute("position",new ii(A,3)),Ck.addAttribute("uv",new ii(e,2)))}return Ck}(),A)).frustumCulled=!1,null===this.scene&&(this.scene=new ns),this.scene.add(e),this.screen=e)}getFullscreenMaterial(){return this.fullscreenMaterial}setFullscreenMaterial(A){this.fullscreenMaterial=A}getDepthTexture(){return null}setDepthTexture(A,e=3200){}render(A,e,t,i,r){throw Error("Render method not implemented!")}setSize(A,e){}initialize(A,e,t){}dispose(){for(let A of Object.keys(this)){let e=this[A];if(null!==e&&"function"==typeof e.dispose){if(e instanceof ns||e===this.renderer)continue;this[A].dispose()}}}},CV=class extends CG{constructor(A,e=!0){super("CopyPass"),this.fullscreenMaterial=new CS,this.needsSwap=!1,this.renderTarget=A,void 0===A&&(this.renderTarget=new e0(1,1,{minFilter:1006,magFilter:1006,stencilBuffer:!1,depthBuffer:!1}),this.renderTarget.texture.name="CopyPass.Target"),this.autoResize=e}get resize(){return this.autoResize}set resize(A){this.autoResize=A}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}setAutoResizeEnabled(A){this.autoResize=A}render(A,e,t,i,r){this.fullscreenMaterial.inputBuffer=e.texture,A.setRenderTarget(this.renderToScreen?null:this.renderTarget),A.render(this.scene,this.camera)}setSize(A,e){this.autoResize&&this.renderTarget.setSize(A,e)}initialize(A,e,t){void 0!==t&&(this.renderTarget.texture.type=t,1009!==t?this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1":3001===A.outputEncoding&&(this.renderTarget.texture.encoding=3001))}},Cj=class extends CG{constructor(){super("ClearMaskPass",null,null),this.needsSwap=!1}render(A,e,t,i,r){let s=A.state.buffers.stencil;s.setLocked(!1),s.setTest(!1)}},CH=new eY,CW=class extends CG{constructor(A=!0,e=!0,t=!1){super("ClearPass",null,null),this.needsSwap=!1,this.color=A,this.depth=e,this.stencil=t,this.overrideClearColor=null,this.overrideClearAlpha=-1}setClearFlags(A,e,t){this.color=A,this.depth=e,this.stencil=t}getOverrideClearColor(){return this.overrideClearColor}setOverrideClearColor(A){this.overrideClearColor=A}getOverrideClearAlpha(){return this.overrideClearAlpha}setOverrideClearAlpha(A){this.overrideClearAlpha=A}render(A,e,t,i,r){let s=this.overrideClearColor,a=this.overrideClearAlpha,o=A.getClearAlpha(),l=null!==s,h=a>=0;l?(CH.copy(A.getClearColor(CH)),A.setClearColor(s,h?a:o)):h&&A.setClearAlpha(a),A.setRenderTarget(this.renderToScreen?null:e),A.clear(this.color,this.depth,this.stencil),l?A.setClearColor(CH,o):h&&A.setClearAlpha(o)}},CY=class extends ev{constructor(A,e=-1,t=-1,i=1){super(),this.resizable=A,this.base=new e_(1,1),this.preferred=new e_(e,t),this.target=this.preferred,this.s=i}get width(){let{base:A,preferred:e,scale:t}=this;return -1!==e.width?e.width:-1!==e.height?Math.round(e.height*(A.width/Math.max(A.height,1))):Math.round(A.width*t)}set width(A){this.preferredWidth=A}get height(){let{base:A,preferred:e,scale:t}=this;return -1!==e.height?e.height:-1!==e.width?Math.round(e.width/Math.max(A.width/Math.max(A.height,1),1)):Math.round(A.height*t)}set height(A){this.preferredHeight=A}getWidth(){return this.width}getHeight(){return this.height}get scale(){return this.s}set scale(A){this.s!==A&&(this.s=A,this.preferred.setScalar(-1),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.base.width,this.base.height))}getScale(){return this.scale}setScale(A){this.scale=A}get baseWidth(){return this.base.width}set baseWidth(A){this.base.width!==A&&(this.base.width=A,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.base.width,this.base.height))}getBaseWidth(){return this.base.width}setBaseWidth(A){this.base.width!==A&&(this.base.width=A,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.base.width,this.base.height))}get baseHeight(){return this.base.height}set baseHeight(A){this.base.height!==A&&(this.base.height=A,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.base.width,this.base.height))}getBaseHeight(){return this.baseHeight}setBaseHeight(A){this.baseHeight=A}setBaseSize(A,e){(this.base.width!==A||this.base.height!==e)&&(this.base.set(A,e),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.base.width,this.base.height))}get preferredWidth(){return this.preferred.width}set preferredWidth(A){this.preferred.width!==A&&(this.preferred.width=A,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.base.width,this.base.height))}getPreferredWidth(){return this.preferredWidth}setPreferredWidth(A){this.preferredWidth=A}get preferredHeight(){return this.preferred.height}set preferredHeight(A){this.preferred.height!==A&&(this.preferred.height=A,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.base.width,this.base.height))}getPreferredHeight(){return this.preferredHeight}setPreferredHeight(A){this.preferredHeight=A}setPreferredSize(A,e){(this.preferred.width!==A||this.preferred.height!==e)&&(this.preferred.set(A,e),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.base.width,this.base.height))}copy(A){this.base.set(A.getBaseWidth(),A.getBaseHeight()),this.preferred.set(A.getPreferredWidth(),A.getPreferredHeight()),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.base.width,this.base.height)}static get AUTO_SIZE(){return -1}},CX=!1,CQ=class{constructor(A=null){this.originalMaterials=new Map,this.material=null,this.materials=null,this.materialsBackSide=null,this.materialsDoubleSide=null,this.materialsFlatShaded=null,this.materialsFlatShadedBackSide=null,this.materialsFlatShadedDoubleSide=null,this.setMaterial(A),this.meshCount=0,this.replaceMaterial=A=>{if(A.isMesh){let e;if(A.material.flatShading)switch(A.material.side){case 2:e=this.materialsFlatShadedDoubleSide;break;case 1:e=this.materialsFlatShadedBackSide;break;default:e=this.materialsFlatShaded}else switch(A.material.side){case 2:e=this.materialsDoubleSide;break;case 1:e=this.materialsBackSide;break;default:e=this.materials}this.originalMaterials.set(A,A.material),A.isSkinnedMesh?A.material=e[2]:A.isInstancedMesh?A.material=e[1]:A.material=e[0],++this.meshCount}}}setMaterial(A){if(this.disposeMaterials(),this.material=A,null!==A){let e=this.materials=[A.clone(),A.clone(),A.clone()];for(let t of e)t.uniforms=Object.assign({},A.uniforms),t.side=0;e[2].skinning=!0,this.materialsBackSide=e.map(e=>{let t=e.clone();return t.uniforms=Object.assign({},A.uniforms),t.side=1,t}),this.materialsDoubleSide=e.map(e=>{let t=e.clone();return t.uniforms=Object.assign({},A.uniforms),t.side=2,t}),this.materialsFlatShaded=e.map(e=>{let t=e.clone();return t.uniforms=Object.assign({},A.uniforms),t.flatShading=!0,t}),this.materialsFlatShadedBackSide=e.map(e=>{let t=e.clone();return t.uniforms=Object.assign({},A.uniforms),t.flatShading=!0,t.side=1,t}),this.materialsFlatShadedDoubleSide=e.map(e=>{let t=e.clone();return t.uniforms=Object.assign({},A.uniforms),t.flatShading=!0,t.side=2,t})}}render(A,e,t){let i=A.shadowMap.enabled;if(A.shadowMap.enabled=!1,CX){let r=this.originalMaterials;for(let s of(this.meshCount=0,e.traverse(this.replaceMaterial),A.render(e,t),r))s[0].material=s[1];this.meshCount!==r.size&&r.clear()}else{let a=e.overrideMaterial;e.overrideMaterial=this.material,A.render(e,t),e.overrideMaterial=a}A.shadowMap.enabled=i}disposeMaterials(){if(null!==this.material)for(let A of this.materials.concat(this.materialsBackSide).concat(this.materialsDoubleSide).concat(this.materialsFlatShaded).concat(this.materialsFlatShadedBackSide).concat(this.materialsFlatShadedDoubleSide))A.dispose()}dispose(){this.originalMaterials.clear(),this.disposeMaterials()}static get workaroundEnabled(){return CX}static set workaroundEnabled(A){CX=A}},Cq=class extends CG{constructor(A,e,t=null){super("RenderPass",A,e),this.needsSwap=!1,this.clearPass=new CW,this.overrideMaterialManager=null===t?null:new CQ(t),this.ignoreBackground=!1,this.skipShadowMapUpdate=!1,this.selection=null}get renderToScreen(){return super.renderToScreen}set renderToScreen(A){super.renderToScreen=A,this.clearPass.renderToScreen=A}get overrideMaterial(){let A=this.overrideMaterialManager;return null!==A?A.material:null}set overrideMaterial(A){let e=this.overrideMaterialManager;null!==A?null!==e?e.setMaterial(A):this.overrideMaterialManager=new CQ(A):null!==e&&(e.dispose(),this.overrideMaterialManager=null)}getOverrideMaterial(){return this.overrideMaterial}setOverrideMaterial(A){this.overrideMaterial=A}get clear(){return this.clearPass.enabled}set clear(A){this.clearPass.enabled=A}getSelection(){return this.selection}setSelection(A){this.selection=A}isBackgroundDisabled(){return this.ignoreBackground}setBackgroundDisabled(A){this.ignoreBackground=A}isShadowMapDisabled(){return this.skipShadowMapUpdate}setShadowMapDisabled(A){this.skipShadowMapUpdate=A}getClearPass(){return this.clearPass}render(A,e,t,i,r){let s=this.scene,a=this.camera,o=this.selection,l=a.layers.mask,h=s.background,c=A.shadowMap.autoUpdate,d=this.renderToScreen?null:e;null!==o&&a.layers.set(o.getLayer()),this.skipShadowMapUpdate&&(A.shadowMap.autoUpdate=!1),(this.ignoreBackground||null!==this.clearPass.overrideClearColor)&&(s.background=null),this.clearPass.enabled&&this.clearPass.render(A,e),A.setRenderTarget(d),null!==this.overrideMaterialManager?this.overrideMaterialManager.render(A,s,a):A.render(s,a),a.layers.mask=l,s.background=h,A.shadowMap.autoUpdate=c}},CZ=class extends CG{constructor(A,e,{resolutionScale:t=1,width:i=CY.AUTO_SIZE,height:r=CY.AUTO_SIZE,renderTarget:s}={}){super("DepthPass"),this.needsSwap=!1,this.renderPass=new Cq(A,e,new sJ({depthPacking:3201}));let a=this.renderPass;a.skipShadowMapUpdate=!0,a.ignoreBackground=!0;let o=a.getClearPass();o.overrideClearColor=new eY(16777215),o.overrideClearAlpha=1,this.renderTarget=s,void 0===this.renderTarget&&(this.renderTarget=new e0(1,1,{minFilter:1003,magFilter:1003,stencilBuffer:!1}),this.renderTarget.texture.name="DepthPass.Target");let l=this.resolution=new CY(this,i,r,t);l.addEventListener("change",A=>this.setSize(l.baseWidth,l.baseHeight))}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}getResolution(){return this.resolution}getResolutionScale(){return this.resolution.scale}setResolutionScale(A){this.resolution.scale=A}render(A,e,t,i,r){let s=this.renderToScreen?null:this.renderTarget;this.renderPass.render(A,s)}setSize(A,e){let t=this.resolution;t.setBaseSize(A,e),this.renderTarget.setSize(t.width,t.height)}};new Float32Array([255/256/16777216,255/256/65536,255/256/256,255/256]);var CK={SKIP:0,ADD:1,ALPHA:2,AVERAGE:3,COLOR_BURN:4,COLOR_DODGE:5,DARKEN:6,DIFFERENCE:7,EXCLUSION:8,LIGHTEN:9,MULTIPLY:10,DIVIDE:11,NEGATION:12,NORMAL:13,OVERLAY:14,REFLECT:15,SCREEN:16,SOFT_LIGHT:17,SUBTRACT:18},CJ=new Map([[CK.SKIP,null],[CK.ADD,"vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return min(x+y,1.0)*opacity+x*(1.0-opacity);}"],[CK.ALPHA,"vec3 blend(const in vec3 x,const in vec3 y,const in float opacity){return y*opacity+x*(1.0-opacity);}vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){float a=min(y.a,opacity);return vec4(blend(x.rgb,y.rgb,a),max(x.a,a));}"],[CK.AVERAGE,"vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return(x+y)*0.5*opacity+x*(1.0-opacity);}"],[CK.COLOR_BURN,"float blend(const in float x,const in float y){return(y==0.0)? y : max(1.0-(1.0-x)/y,0.0);}vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=vec4(blend(x.r,y.r),blend(x.g,y.g),blend(x.b,y.b),blend(x.a,y.a));return z*opacity+x*(1.0-opacity);}"],[CK.COLOR_DODGE,"float blend(const in float x,const in float y){return(y==1.0)? y : min(x/(1.0-y),1.0);}vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=vec4(blend(x.r,y.r),blend(x.g,y.g),blend(x.b,y.b),blend(x.a,y.a));return z*opacity+x*(1.0-opacity);}"],[CK.DARKEN,"vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return min(x,y)*opacity+x*(1.0-opacity);}"],[CK.DIFFERENCE,"vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return abs(x-y)*opacity+x*(1.0-opacity);}"],[CK.EXCLUSION,"vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return(x+y-2.0*x*y)*opacity+x*(1.0-opacity);}"],[CK.LIGHTEN,"vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return max(x,y)*opacity+x*(1.0-opacity);}"],[CK.MULTIPLY,"vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return x*y*opacity+x*(1.0-opacity);}"],[CK.DIVIDE,"float blend(const in float x,const in float y){return(y>0.0)? min(x/y,1.0): 1.0;}vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=vec4(blend(x.r,y.r),blend(x.g,y.g),blend(x.b,y.b),blend(x.a,y.a));return z*opacity+x*(1.0-opacity);}"],[CK.NEGATION,"vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return(1.0-abs(1.0-x-y))*opacity+x*(1.0-opacity);}"],[CK.NORMAL,"vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return y*opacity+x*(1.0-opacity);}"],[CK.OVERLAY,"float blend(const in float x,const in float y){return(x<0.5)?(2.0*x*y):(1.0-2.0*(1.0-x)*(1.0-y));}vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=vec4(blend(x.r,y.r),blend(x.g,y.g),blend(x.b,y.b),blend(x.a,y.a));return z*opacity+x*(1.0-opacity);}"],[CK.REFLECT,"float blend(const in float x,const in float y){return(y==1.0)? y : min(x*x/(1.0-y),1.0);}vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=vec4(blend(x.r,y.r),blend(x.g,y.g),blend(x.b,y.b),blend(x.a,y.a));return z*opacity+x*(1.0-opacity);}"],[CK.SCREEN,"vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return(1.0-(1.0-x)*(1.0-y))*opacity+x*(1.0-opacity);}"],[CK.SOFT_LIGHT,"float blend(const in float x,const in float y){return(y<0.5)?(2.0*x*y+x*x*(1.0-2.0*y)):(sqrt(x)*(2.0*y-1.0)+2.0*x*(1.0-y));}vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=vec4(blend(x.r,y.r),blend(x.g,y.g),blend(x.b,y.b),blend(x.a,y.a));return z*opacity+x*(1.0-opacity);}"],[CK.SUBTRACT,"vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return max(x+y-1.0,0.0)*opacity+x*(1.0-opacity);}"]]),C$=class extends ev{constructor(A,e=1){super(),this.f=A,this.opacity=new aZ(e)}getOpacity(){return this.opacity.value}setOpacity(A){this.opacity.value=A}get blendFunction(){return this.f}set blendFunction(A){this.f=A,this.dispatchEvent({type:"change"})}getBlendFunction(){return this.blendFunction}setBlendFunction(A){this.blendFunction=A}getShaderCode(){return CJ.get(this.blendFunction)}},C0={NONE:0,DEPTH:1,CONVOLUTION:2},C1=class extends ev{constructor(A,e,{attributes:t=C0.NONE,blendFunction:i=CK.SCREEN,defines:r=new Map,uniforms:s=new Map,extensions:a=null,vertexShader:o=null}={}){super(),this.name=A,this.renderer=null,this.attributes=t,this.fragmentShader=e,this.vertexShader=o,this.defines=r,this.uniforms=s,this.extensions=a,this.blendMode=new C$(i),this.blendMode.addEventListener("change",A=>this.setChanged())}getName(){return this.name}setRenderer(A){this.renderer=A}getDefines(){return this.defines}getUniforms(){return this.uniforms}getExtensions(){return this.extensions}getBlendMode(){return this.blendMode}getAttributes(){return this.attributes}setAttributes(A){this.attributes=A,this.setChanged()}getFragmentShader(){return this.fragmentShader}setFragmentShader(A){this.fragmentShader=A,this.setChanged()}getVertexShader(){return this.vertexShader}setVertexShader(A){this.vertexShader=A,this.setChanged()}setChanged(){this.dispatchEvent({type:"change"})}setDepthTexture(A,e=3200){}update(A,e,t){}setSize(A,e){}initialize(A,e,t){}dispose(){for(let A of Object.keys(this)){let e=this[A];if(null!==e&&"function"==typeof e.dispose){if(e instanceof ns||e===this.renderer)continue;this[A].dispose()}}}};function C2(A,e,t){for(let i of e){let r="$1"+A+i.charAt(0).toUpperCase()+i.slice(1),s=RegExp("([^\\.])(\\b"+i+"\\b)","g");for(let a of t.entries())null!==a[1]&&t.set(a[0],a[1].replace(s,r))}}var C3=class extends CG{constructor(A,...e){super("EffectPass"),this.fullscreenMaterial=new CL(null,null,null,A),this.effects=e.sort((A,e)=>e.attributes-A.attributes),this.skipRendering=!1,this.uniformCount=0,this.varyingCount=0,this.minTime=1,this.maxTime=Number.POSITIVE_INFINITY}get encodeOutput(){return this.fullscreenMaterial.encodeOutput}set encodeOutput(A){this.fullscreenMaterial.encodeOutput=A}get dithering(){return this.fullscreenMaterial.dithering}set dithering(A){let e=this.fullscreenMaterial;e.dithering=A,e.needsUpdate=!0}verifyResources(){let A=this.renderer.capabilities,e=Math.min(A.maxFragmentUniforms,A.maxVertexUniforms);this.uniformCount>e&&console.warn("The current rendering context doesn't support more than "+e+" uniforms, but "+this.uniformCount+" were defined"),e=A.maxVaryings,this.varyingCount>e&&console.warn("The current rendering context doesn't support more than "+e+" varyings, but "+this.varyingCount+" were defined")}updateMaterial(){let A=CL.Section,e=new Map([[A.FRAGMENT_HEAD,""],[A.FRAGMENT_MAIN_UV,""],[A.FRAGMENT_MAIN_IMAGE,""],[A.VERTEX_HEAD,""],[A.VERTEX_MAIN_SUPPORT,""]]),t=new Map,i=new Map,r=new Map,s=new Set,a=0,o=0,l=0,h=!1,c=!1;for(let d of this.effects)if(d.blendMode.blendFunction===CK.SKIP)l|=d.getAttributes()&C0.DEPTH;else if((l&d.getAttributes()&C0.CONVOLUTION)!=0)console.error("Convolution effects cannot be merged",d);else{l|=d.getAttributes();let u=function(A,e,t,i,r,s,a){let o=new Map([["fragment",e.getFragmentShader()],["vertex",e.getVertexShader()]]),l=void 0!==o.get("fragment")&&/mainImage/.test(o.get("fragment")),h=void 0!==o.get("fragment")&&/mainUv/.test(o.get("fragment")),c=[],d=[],u=!1,p=!1;if(void 0===o.get("fragment"))console.error("Missing fragment shader",e);else if(h&&(a&C0.CONVOLUTION)!=0)console.error("Effects that transform UV coordinates are incompatible with convolution effects",e);else if(l||h){let f=/(?:\w+\s+(\w+)\([\w\s,]*\)\s*{[^}]+})/g,m=CL.Section;if(h){let g=`	${A}MainUv(UV);
`;t.set(m.FRAGMENT_MAIN_UV,t.get(m.FRAGMENT_MAIN_UV)+g),u=!0}if(null!==o.get("vertex")&&/mainSupport/.test(o.get("vertex"))){let v=`	${A}MainSupport(`;v+=/mainSupport *\([\w\s]*?uv\s*?\)/.test(o.get("vertex"))?`vUv);
`:`);
`,t.set(m.VERTEX_MAIN_SUPPORT,t.get(m.VERTEX_MAIN_SUPPORT)+v),c=c.concat([...o.get("vertex").matchAll(/(?:varying\s+\w+\s+(\w*))/g)].map(A=>A[1])),d=d.concat(c).concat([...o.get("vertex").matchAll(f)].map(A=>A[1]))}d=(d=(d=d.concat([...o.get("fragment").matchAll(f)].map(A=>A[1]))).concat([...e.defines.keys()].map(A=>A.replace(/\([\w\s,]*\)/g,"")))).concat([...e.uniforms.keys()]),e.uniforms.forEach((e,t)=>s.set(A+t.charAt(0).toUpperCase()+t.slice(1),e)),e.defines.forEach((e,t)=>r.set(A+t.charAt(0).toUpperCase()+t.slice(1),e)),C2(A,d,r),C2(A,d,o);let y=e.blendMode;if(i.set(y.blendFunction,y),l){let x=`${A}MainImage(color0, UV, `;(a&C0.DEPTH)!=0&&/MainImage *\([\w\s,]*?depth[\w\s,]*?\)/.test(o.get("fragment"))&&(x+="depth, ",p=!0),x+=`color1);
	`;let b=A+"BlendOpacity";s.set(b,y.opacity),x+=`color0 = blend${y.blendFunction}(color0, color1, ${b});

	`,t.set(m.FRAGMENT_MAIN_IMAGE,t.get(m.FRAGMENT_MAIN_IMAGE)+x),x=`uniform float ${b};

`,t.set(m.FRAGMENT_HEAD,t.get(m.FRAGMENT_HEAD)+x)}t.set(m.FRAGMENT_HEAD,t.get(m.FRAGMENT_HEAD)+o.get("fragment")+`
`),null!==o.get("vertex")&&t.set(m.VERTEX_HEAD,t.get(m.VERTEX_HEAD)+o.get("vertex")+`
`)}else console.error("The fragment shader contains neither a mainImage nor a mainUv function",e);return{varyings:c,transformedUv:u,readDepth:p}}("e"+a++,d,e,t,i,r,l);if(o+=u.varyings.length,h=h||u.transformedUv,c=c||u.readDepth,null!==d.extensions)for(let p of d.extensions)s.add(p)}let f=/\bblend\b/g;for(let m of t.values()){let g=m.getShaderCode().replace(f,`blend${m.blendFunction}`);e.set(A.FRAGMENT_HEAD,e.get(A.FRAGMENT_HEAD)+g+`
`)}if((l&C0.DEPTH)!=0){if(c){let v=`float depth = readDepth(UV);

	`;e.set(A.FRAGMENT_MAIN_IMAGE,v+e.get(A.FRAGMENT_MAIN_IMAGE))}this.needsDepthTexture=null===this.getDepthTexture()}else this.needsDepthTexture=!1;if(h){let y=`vec2 transformedUv = vUv;
`;e.set(A.FRAGMENT_MAIN_UV,y+e.get(A.FRAGMENT_MAIN_UV)),i.set("UV","transformedUv")}else i.set("UV","vUv");e.forEach((A,e,t)=>t.set(e,A.trim().replace(/^#/,`
#`))),this.uniformCount=r.size,this.varyingCount=o,this.skipRendering=0===a,this.needsSwap=!this.skipRendering,this.fullscreenMaterial.setShaderParts(e).setExtensions(s).setUniforms(r).setDefines(i)}recompile(){this.updateMaterial(),this.verifyResources()}getDepthTexture(){return this.fullscreenMaterial.depthBuffer}setDepthTexture(A,e=3200){for(let t of(this.fullscreenMaterial.depthBuffer=A,this.fullscreenMaterial.depthPacking=e,this.effects))t.setDepthTexture(A,e)}render(A,e,t,i,r){for(let s of this.effects)s.update(A,e,i);if(!this.skipRendering||this.renderToScreen){let a=this.fullscreenMaterial;a.inputBuffer=e.texture,a.time+=i,A.setRenderTarget(this.renderToScreen?null:t),A.render(this.scene,this.camera)}}setSize(A,e){for(let t of(this.fullscreenMaterial.setSize(A,e),this.effects))t.setSize(A,e)}initialize(A,e,t){for(let i of(this.renderer=A,this.effects))i.initialize(A,e,t),i.addEventListener("change",A=>this.handleEvent(A));this.updateMaterial(),this.verifyResources(),void 0!==t&&1009!==t&&(this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}dispose(){for(let A of(super.dispose(),this.effects))A.dispose()}handleEvent(A){"change"===A.type&&this.recompile()}},C4=[new Float32Array([0,0]),new Float32Array([0,1,1]),new Float32Array([0,1,1,2]),new Float32Array([0,1,2,2,3]),new Float32Array([0,1,2,3,4,4,5]),new Float32Array([0,1,2,3,4,5,7,8,9,10])],C5=class extends CG{constructor({resolutionScale:A=.5,width:e=CY.AUTO_SIZE,height:t=CY.AUTO_SIZE,kernelSize:i=De.LARGE}={}){super("KawaseBlurPass"),this.renderTargetA=new e0(1,1,{minFilter:1006,magFilter:1006,stencilBuffer:!1,depthBuffer:!1}),this.renderTargetA.texture.name="Blur.Target.A",this.renderTargetB=this.renderTargetA.clone(),this.renderTargetB.texture.name="Blur.Target.B";let r=this.resolution=new CY(this,e,t,A);r.addEventListener("change",A=>this.setSize(r.baseWidth,r.baseHeight)),this.blurMaterial=new Cb,this.ditheredBlurMaterial=new Cb,this.ditheredBlurMaterial.uniforms.scale=this.blurMaterial.uniforms.scale,this.ditheredBlurMaterial.dithering=!0,this.dithering=!1,this.kernelSize=i}getResolution(){return this.resolution}get width(){return this.resolution.width}set width(A){this.resolution.preferredWidth=A}get height(){return this.resolution.height}set height(A){this.resolution.preferredHeight=A}get scale(){return this.blurMaterial.scale}set scale(A){this.blurMaterial.scale=A}getScale(){return this.blurMaterial.scale}setScale(A){this.blurMaterial.scale=A}getKernelSize(){return this.kernelSize}setKernelSize(A){this.kernelSize=A}getResolutionScale(){return this.resolution.scale}setResolutionScale(A){this.resolution.scale=A}render(A,e,t,i,r){let s=this.scene,a=this.camera,o=this.renderTargetA,l=this.renderTargetB,h=C4[this.kernelSize],c=this.blurMaterial,d=e,u,p;for(this.fullscreenMaterial=c,u=0,p=h.length-1;u<p;++u){let f=(1&u)==0?o:l;c.kernel=h[u],c.inputBuffer=d.texture,A.setRenderTarget(f),A.render(s,a),d=f}this.dithering&&(c=this.ditheredBlurMaterial,this.fullscreenMaterial=c),c.kernel=h[u],c.inputBuffer=d.texture,A.setRenderTarget(this.renderToScreen?null:t),A.render(s,a)}setSize(A,e){let t=this.resolution;t.setBaseSize(A,e);let i=t.width,r=t.height;this.renderTargetA.setSize(i,r),this.renderTargetB.setSize(i,r),this.blurMaterial.setSize(i,r),this.ditheredBlurMaterial.setSize(i,r)}initialize(A,e,t){void 0!==t&&(this.renderTargetA.texture.type=t,this.renderTargetB.texture.type=t,1009!==t?(this.blurMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1",this.ditheredBlurMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1"):3001===A.outputEncoding&&(this.renderTargetA.texture.encoding=3001,this.renderTargetB.texture.encoding=3001))}static get AUTO_SIZE(){return CY.AUTO_SIZE}},C6=class extends CG{constructor({width:A=CY.AUTO_SIZE,height:e=CY.AUTO_SIZE,renderTarget:t,luminanceRange:i,colorOutput:r}={}){super("LuminancePass"),this.fullscreenMaterial=new CB(r,i),this.needsSwap=!1,this.renderTarget=t,void 0===this.renderTarget&&(this.renderTarget=new e0(1,1,{minFilter:1006,magFilter:1006,stencilBuffer:!1,depthBuffer:!1}),this.renderTarget.texture.name="LuminancePass.Target",this.renderTarget.texture.generateMipmaps=!1);let s=this.resolution=new CY(this,A,e);s.addEventListener("change",A=>this.setSize(s.baseWidth,s.baseHeight))}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}getResolution(){return this.resolution}render(A,e,t,i,r){this.fullscreenMaterial.inputBuffer=e.texture,A.setRenderTarget(this.renderToScreen?null:this.renderTarget),A.render(this.scene,this.camera)}setSize(A,e){let t=this.resolution;t.setBaseSize(A,e),this.renderTarget.setSize(t.width,t.height)}initialize(A,e,t){void 0!==t&&1009!==t&&(this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}},C8=class extends CG{constructor(A,e){super("MaskPass",A,e),this.needsSwap=!1,this.clearPass=new CW(!1,!1,!0),this.inverse=!1}get inverted(){return this.inverse}set inverted(A){this.inverse=A}get clear(){return this.clearPass.enabled}set clear(A){this.clearPass.enabled=A}getClearPass(){return this.clearPass}isInverted(){return this.inverted}setInverted(A){this.inverted=A}render(A,e,t,i,r){let s=A.getContext(),a=A.state.buffers,o=this.scene,l=this.camera,h=this.clearPass,c=this.inverted?0:1;a.color.setMask(!1),a.depth.setMask(!1),a.color.setLocked(!0),a.depth.setLocked(!0),a.stencil.setTest(!0),a.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),a.stencil.setFunc(s.ALWAYS,c,4294967295),a.stencil.setClear(1-c),a.stencil.setLocked(!0),this.clearPass.enabled&&(this.renderToScreen?h.render(A,null):(h.render(A,e),h.render(A,t))),this.renderToScreen?(A.setRenderTarget(null),A.render(o,l)):(A.setRenderTarget(e),A.render(o,l),A.setRenderTarget(t),A.render(o,l)),a.color.setLocked(!1),a.depth.setLocked(!1),a.stencil.setLocked(!1),a.stencil.setFunc(s.EQUAL,1,4294967295),a.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),a.stencil.setLocked(!0)}},C9=class extends CG{constructor(A,e="inputBuffer"){super("ShaderPass"),this.fullscreenMaterial=A,this.inputBufferUniform=null,this.setInput(e)}setInput(A){if(this.inputBufferUniform=null,null!==this.fullscreenMaterial){let e=this.fullscreenMaterial.uniforms;void 0!==e&&void 0!==e[A]&&(this.inputBufferUniform=e[A])}}render(A,e,t,i,r){null!==this.inputBufferUniform&&null!==e&&(this.inputBufferUniform.value=e.texture),A.setRenderTarget(this.renderToScreen?null:t),A.render(this.scene,this.camera)}initialize(A,e,t){void 0!==t&&1009!==t&&(this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}},C7=class{constructor(){this.previousTime=0,this.currentTime=0,this.delta=0,this.fixedDelta=1e3/60,this.elapsed=0,this.timescale=1,this.fixedDeltaEnabled=!1,this.autoReset=!1}setFixedDeltaEnabled(A){return this.fixedDeltaEnabled=A,this}isAutoResetEnabled(A){return this.autoReset}setAutoResetEnabled(A){return"u">typeof document&&void 0!==document.hidden&&(A?document.addEventListener("visibilitychange",this):document.removeEventListener("visibilitychange",this),this.autoReset=A),this}getDelta(){return .001*this.delta}getFixedDelta(){return .001*this.fixedDelta}setFixedDelta(A){return this.fixedDelta=1e3*A,this}getElapsed(){return .001*this.elapsed}getTimescale(){return this.timescale}setTimescale(A){return this.timescale=A,this}update(A){return this.fixedDeltaEnabled?this.delta=this.fixedDelta:(this.previousTime=this.currentTime,this.currentTime=void 0!==A?A:performance.now(),this.delta=this.currentTime-this.previousTime),this.delta*=this.timescale,this.elapsed+=this.delta,this}reset(){return this.delta=0,this.elapsed=0,this.currentTime=performance.now(),this}handleEvent(A){document.hidden||(this.currentTime=performance.now())}dispose(){this.setAutoResetEnabled(!1)}},DA=class{constructor(A=null,{depthBuffer:e=!0,stencilBuffer:t=!1,multisampling:i=0,frameBufferType:r}={}){this.renderer=null,this.inputBuffer=this.createBuffer(e,t,r,i),this.outputBuffer=this.inputBuffer.clone(),this.copyPass=new CV,this.depthTexture=null,this.passes=[],this.timer=new C7,this.autoRenderToScreen=!0,this.setRenderer(A)}get multisampling(){return this.inputBuffer.samples||0}set multisampling(A){let e=this.inputBuffer,t=this.multisampling;t>0&&A>0?(this.inputBuffer.samples=A,this.outputBuffer.samples=A,this.inputBuffer.dispose(),this.outputBuffer.dispose()):t!==A&&(this.inputBuffer.dispose(),this.outputBuffer.dispose(),this.inputBuffer=this.createBuffer(e.depthBuffer,e.stencilBuffer,e.texture.type,A),this.inputBuffer.depthTexture=this.depthTexture,this.outputBuffer=this.inputBuffer.clone())}getTimer(){return this.timer}getRenderer(){return this.renderer}setRenderer(A){if(this.renderer=A,null!==A){let e=A.getSize(new e_),t=A.getContext().getContextAttributes().alpha,i=this.inputBuffer.texture.type;for(let r of(1009===i&&3001===A.outputEncoding&&(this.inputBuffer.texture.encoding=3001,this.outputBuffer.texture.encoding=3001,this.inputBuffer.dispose(),this.outputBuffer.dispose()),A.autoClear=!1,this.setSize(e.width,e.height),this.passes))r.initialize(A,t,i)}}replaceRenderer(A,e=!0){let t=this.renderer,i=t.domElement.parentNode;return this.setRenderer(A),e&&null!==i&&(i.removeChild(t.domElement),i.appendChild(A.domElement)),t}createDepthTexture(){let A=this.depthTexture=new nA;return this.inputBuffer.depthTexture=A,this.inputBuffer.dispose(),this.inputBuffer.stencilBuffer?(A.format=1027,A.type=1020):A.type=1014,A}deleteDepthTexture(){if(null!==this.depthTexture)for(let A of(this.depthTexture.dispose(),this.depthTexture=null,this.inputBuffer.depthTexture=null,this.inputBuffer.dispose(),this.passes))A.setDepthTexture(null)}createBuffer(A,e,t,i){let r=this.renderer,s=null===r?new e_:r.getDrawingBufferSize(new e_),a={minFilter:1006,magFilter:1006,stencilBuffer:e,depthBuffer:A,type:t},o;return i>0?((o=138>Number("142".replace(/\D+/g,""))?new om(s.width,s.height,a):new e0(s.width,s.height,a)).ignoreDepthForMultisampleCopy=!1,o.samples=i):o=new e0(s.width,s.height,a),1009===t&&null!==r&&3001===r.outputEncoding&&(o.texture.encoding=3001),o.texture.name="EffectComposer.Buffer",o.texture.generateMipmaps=!1,o}addPass(A,e){let t=this.passes,i=this.renderer,r=i.getDrawingBufferSize(new e_),s=i.getContext().getContextAttributes().alpha,a=this.inputBuffer.texture.type;if(A.setRenderer(i),A.setSize(r.width,r.height),A.initialize(i,s,a),this.autoRenderToScreen&&(t.length>0&&(t[t.length-1].renderToScreen=!1),A.renderToScreen&&(this.autoRenderToScreen=!1)),void 0!==e?t.splice(e,0,A):t.push(A),this.autoRenderToScreen&&(t[t.length-1].renderToScreen=!0),A.needsDepthTexture||null!==this.depthTexture){if(null===this.depthTexture){let o=this.createDepthTexture();for(A of t)A.setDepthTexture(o)}else A.setDepthTexture(this.depthTexture)}}removePass(A){let e=this.passes,t=e.indexOf(A);-1!==t&&e.splice(t,1).length>0&&(null!==this.depthTexture&&(e.reduce((A,e)=>A||e.needsDepthTexture,!1)||(A.getDepthTexture()===this.depthTexture&&A.setDepthTexture(null),this.deleteDepthTexture())),this.autoRenderToScreen&&t===e.length&&(A.renderToScreen=!1,e.length>0&&(e[e.length-1].renderToScreen=!0)))}removeAllPasses(){let A=this.passes;this.deleteDepthTexture(),A.length>0&&(this.autoRenderToScreen&&(A[A.length-1].renderToScreen=!1),this.passes=[])}render(A){let e=this.renderer,t=this.copyPass,i=this.inputBuffer,r=this.outputBuffer,s=!1,a,o,l;for(let h of(void 0===A&&(A=this.timer.update().getDelta()),this.passes))h.enabled&&(h.render(e,i,r,A,s),h.needsSwap&&(s&&(t.renderToScreen=h.renderToScreen,a=e.getContext(),(o=e.state.buffers.stencil).setFunc(a.NOTEQUAL,1,4294967295),t.render(e,i,r,A,s),o.setFunc(a.EQUAL,1,4294967295)),l=i,i=r,r=l),h instanceof C8?s=!0:h instanceof Cj&&(s=!1))}setSize(A,e,t){let i=this.renderer;if(void 0===A||void 0===e){let r=i.getSize(new e_);A=r.width,e=r.height}i.setSize(A,e,t);let s=i.getDrawingBufferSize(new e_);for(let a of(this.inputBuffer.setSize(s.width,s.height),this.outputBuffer.setSize(s.width,s.height),this.passes))a.setSize(s.width,s.height)}reset(){let A=this.timer.isAutoResetEnabled();this.dispose(),this.autoRenderToScreen=!0,this.timer.setAutoResetEnabled(A)}dispose(){for(let A of this.passes)A.dispose();this.passes=[],null!==this.inputBuffer&&this.inputBuffer.dispose(),null!==this.outputBuffer&&this.outputBuffer.dispose(),this.deleteDepthTexture(),this.copyPass.dispose(),this.timer.dispose()}},De={VERY_SMALL:0,SMALL:1,MEDIUM:2,LARGE:3,VERY_LARGE:4,HUGE:5},Dt=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D map;
#else
uniform lowp sampler2D map;
#endif
uniform float intensity;void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){outputColor=clamp(texture2D(map,uv)*intensity,0.0,1.0);}`,Di=class extends C1{constructor({blendFunction:A=CK.SCREEN,luminanceThreshold:e=.9,luminanceSmoothing:t=.025,resolutionScale:i=.5,intensity:r=1,width:s=CY.AUTO_SIZE,height:a=CY.AUTO_SIZE,kernelSize:o=De.LARGE}={}){super("BloomEffect",Dt,{blendFunction:A,uniforms:new Map([["map",new aZ(null)],["intensity",new aZ(r)]])}),this.renderTarget=new e0(1,1,{minFilter:1006,magFilter:1006,stencilBuffer:!1,depthBuffer:!1}),this.renderTarget.texture.name="Bloom.Target",this.renderTarget.texture.generateMipmaps=!1,this.uniforms.get("map").value=this.renderTarget.texture,this.luminancePass=new C6({renderTarget:this.renderTarget,colorOutput:!0}),this.luminanceMaterial.threshold=e,this.luminanceMaterial.smoothingFactor=t,this.blurPass=new C5({resolutionScale:i,width:s,height:a,kernelSize:o});let l=this.blurPass.getResolution();l.addEventListener("change",A=>this.setSize(l.baseWidth,l.baseHeight))}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}get resolution(){return this.blurPass.resolution}getResolution(){return this.blurPass.resolution}getBlurPass(){return this.blurPass}getLuminancePass(){return this.luminancePass}get luminanceMaterial(){return this.luminancePass.fullscreenMaterial}getLuminanceMaterial(){return this.luminancePass.fullscreenMaterial}get width(){return this.resolution.width}set width(A){this.resolution.preferredWidth=A}get height(){return this.resolution.height}set height(A){this.resolution.preferredHeight=A}get dithering(){return this.blurPass.dithering}set dithering(A){this.blurPass.dithering=A}get kernelSize(){return this.blurPass.kernelSize}set kernelSize(A){this.blurPass.kernelSize=A}get distinction(){return console.warn(this.name,"distinction was removed"),1}set distinction(A){console.warn(this.name,"distinction was removed")}get intensity(){return this.uniforms.get("intensity").value}set intensity(A){this.uniforms.get("intensity").value=A}getIntensity(){return this.intensity}setIntensity(A){this.intensity=A}getResolutionScale(){return this.resolution.scale}setResolutionScale(A){this.resolution.scale=A}update(A,e,t){let i=this.renderTarget;this.luminancePass.enabled?(this.luminancePass.render(A,e,i),this.blurPass.render(A,i,i)):this.blurPass.render(A,e,i)}setSize(A,e){let t=this.resolution;t.setBaseSize(A,e),this.renderTarget.setSize(t.width,t.height),this.luminancePass.resolution.copy(t)}initialize(A,e,t){this.blurPass.initialize(A,e,t),void 0!==t&&(this.renderTarget.texture.type=t,3001===A.outputEncoding&&(this.renderTarget.texture.encoding=3001))}},Dr=class extends C1{constructor({blendFunction:A=CK.NORMAL,brightness:e=0,contrast:t=0}={}){super("BrightnessContrastEffect","uniform float brightness;uniform float contrast;void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){vec3 color=inputColor.rgb+vec3(brightness-0.5);if(contrast>0.0){color/=vec3(1.0-contrast);}else{color*=vec3(1.0+contrast);}outputColor=vec4(min(color+vec3(0.5),1.0),inputColor.a);}",{blendFunction:A,uniforms:new Map([["brightness",new aZ(e)],["contrast",new aZ(t)]])})}get brightness(){return this.uniforms.get("brightness").value}set brightness(A){this.uniforms.get("brightness").value=A}getBrightness(A){return this.brightness}setBrightness(A){this.brightness=A}get contrast(){return this.uniforms.get("contrast").value}set contrast(A){this.uniforms.get("contrast").value=A}getContrast(A){return this.contrast}setContrast(A){this.contrast=A}},Ds=class extends C1{constructor(A=CK.NORMAL){super("ColorAverageEffect","void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){outputColor=vec4(vec3(average(inputColor.rgb)),inputColor.a);}",{blendFunction:A})}},Dn=class extends C1{constructor({blendFunction:A=CK.NORMAL,offset:e=new e_(.001,5e-4)}={}){super("ChromaticAberrationEffect","varying vec2 vUvR;varying vec2 vUvB;void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){vec2 ra=texture2D(inputBuffer,vUvR).ra;vec2 ba=texture2D(inputBuffer,vUvB).ba;outputColor=vec4(ra.x,inputColor.g,ba.x,max(max(ra.y,ba.y),inputColor.a));}",{vertexShader:"uniform vec2 offset;varying vec2 vUvR;varying vec2 vUvB;void mainSupport(const in vec2 uv){vec2 shift=offset*vec2(1.0,aspect);vUvR=uv+shift;vUvB=uv-shift;}",blendFunction:A,attributes:C0.CONVOLUTION,uniforms:new Map([["offset",new aZ(e)]])})}get offset(){return this.uniforms.get("offset").value}set offset(A){this.uniforms.get("offset").value=A}getOffset(){return this.offset}setOffset(A){this.offset=A}},Da=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D nearColorBuffer;uniform mediump sampler2D farColorBuffer;
#else
uniform lowp sampler2D nearColorBuffer;uniform lowp sampler2D farColorBuffer;
#endif
uniform lowp sampler2D nearCoCBuffer;uniform float scale;void mainImage(const in vec4 inputColor,const in vec2 uv,const in float depth,out vec4 outputColor){vec4 colorNear=texture2D(nearColorBuffer,uv);vec4 colorFar=texture2D(farColorBuffer,uv);float CoCNear=texture2D(nearCoCBuffer,uv).r;CoCNear=min(CoCNear*scale,1.0);vec4 result=inputColor*(1.0-colorFar.a)+colorFar;result=mix(result,colorNear,CoCNear);outputColor=result;}`,Do=class extends C1{constructor(A,{blendFunction:e=CK.NORMAL,worldFocusDistance:t,worldFocusRange:i,focusDistance:r=0,focalLength:s=.1,focusRange:a=s,bokehScale:o=1,width:l=CY.AUTO_SIZE,height:h=CY.AUTO_SIZE}={}){super("DepthOfFieldEffect",Da,{blendFunction:e,attributes:C0.DEPTH,uniforms:new Map([["nearColorBuffer",new aZ(null)],["farColorBuffer",new aZ(null)],["nearCoCBuffer",new aZ(null)],["scale",new aZ(1)]])}),this.camera=A,this.renderTarget=new e0(1,1,{minFilter:1006,magFilter:1006,stencilBuffer:!1,depthBuffer:!1}),this.renderTarget.texture.name="DoF.Intermediate",this.renderTarget.texture.generateMipmaps=!1,this.renderTargetMasked=this.renderTarget.clone(),this.renderTargetMasked.texture.name="DoF.Masked.Far",this.renderTargetNear=this.renderTarget.clone(),this.renderTargetNear.texture.name="DoF.Bokeh.Near",this.uniforms.get("nearColorBuffer").value=this.renderTargetNear.texture,this.renderTargetFar=this.renderTarget.clone(),this.renderTargetFar.texture.name="DoF.Bokeh.Far",this.uniforms.get("farColorBuffer").value=this.renderTargetFar.texture,this.renderTargetCoC=this.renderTarget.clone(),this.renderTargetCoC.texture.name="DoF.CoC",this.renderTargetCoCBlurred=this.renderTargetCoC.clone(),this.renderTargetCoCBlurred.texture.name="DoF.CoC.Blurred",this.uniforms.get("nearCoCBuffer").value=this.renderTargetCoCBlurred.texture,this.cocPass=new C9(new Cy(A));let c=this.cocMaterial;c.focusDistance=r,c.focusRange=a,void 0!==t&&(c.worldFocusDistance=t),void 0!==i&&(c.worldFocusRange=i),this.blurPass=new C5({kernelSize:De.MEDIUM,width:l,height:h});let d=this.blurPass.getResolution();d.addEventListener("change",A=>this.setSize(d.getBaseWidth(),d.getBaseHeight())),this.maskPass=new C9(new CN(this.renderTargetCoC.texture));let u=this.maskPass.fullscreenMaterial;u.maskFunction=CR.MULTIPLY,u.colorChannel=Cu.GREEN,this.bokehNearBasePass=new C9(new Cm(!1,!0)),this.bokehNearBasePass.fullscreenMaterial.cocBuffer=this.renderTargetCoCBlurred.texture,this.bokehNearFillPass=new C9(new Cm(!0,!0)),this.bokehNearFillPass.fullscreenMaterial.cocBuffer=this.renderTargetCoCBlurred.texture,this.bokehFarBasePass=new C9(new Cm(!1,!1)),this.bokehFarBasePass.fullscreenMaterial.cocBuffer=this.renderTargetCoC.texture,this.bokehFarFillPass=new C9(new Cm(!0,!1)),this.bokehFarFillPass.fullscreenMaterial.cocBuffer=this.renderTargetCoC.texture,this.target=null,this.bokehScale=o}get cocTexture(){return this.renderTargetCoC.texture}get cocMaterial(){return this.cocPass.fullscreenMaterial}get circleOfConfusionMaterial(){return this.cocMaterial}getCircleOfConfusionMaterial(){return this.circleOfConfusionMaterial}getBlurPass(){return this.blurPass}get resolution(){return this.blurPass.getResolution()}getResolution(){return this.blurPass.getResolution()}get bokehScale(){return this.uniforms.get("scale").value}set bokehScale(A){for(let e of[this.bokehNearBasePass,this.bokehNearFillPass,this.bokehFarBasePass,this.bokehFarFillPass])e.fullscreenMaterial.setScale(A);this.maskPass.fullscreenMaterial.setStrength(A),this.uniforms.get("scale").value=A}getBokehScale(){return this.bokehScale}setBokehScale(A){this.bokehScale=A}getTarget(){return this.target}setTarget(A){this.target=A}calculateFocusDistance(A){let e=this.camera;return Cg(-e.position.distanceTo(A),e.near,e.far)}setDepthTexture(A,e=3200){this.circleOfConfusionMaterial.depthBuffer=A,this.circleOfConfusionMaterial.depthPacking=e}update(A,e,t){let i=this.renderTarget,r=this.renderTargetCoC,s=this.renderTargetCoCBlurred,a=this.renderTargetMasked;if(null!==this.target){let o=this.calculateFocusDistance(this.target);this.circleOfConfusionMaterial.focusDistance=o}this.cocPass.render(A,null,r),this.blurPass.render(A,r,s),this.maskPass.render(A,e,a),this.bokehFarBasePass.render(A,a,i),this.bokehFarFillPass.render(A,i,this.renderTargetFar),this.bokehNearBasePass.render(A,e,i),this.bokehNearFillPass.render(A,i,this.renderTargetNear)}setSize(A,e){let t=this.resolution;t.setBaseSize(A,e);let i=t.width,r=t.height,s=[this.cocPass,this.blurPass,this.maskPass,this.bokehNearBasePass,this.bokehNearFillPass,this.bokehFarBasePass,this.bokehFarFillPass];s.push(this.renderTargetCoC,this.renderTargetMasked),s.forEach(t=>t.setSize(A,e)),(s=[this.renderTarget,this.renderTargetNear,this.renderTargetFar,this.renderTargetCoCBlurred]).forEach(A=>A.setSize(i,r)),[this.bokehNearBasePass,this.bokehNearFillPass,this.bokehFarBasePass,this.bokehFarFillPass].forEach(A=>A.fullscreenMaterial.setSize(i,r))}initialize(A,e,t){[this.cocPass,this.maskPass,this.bokehNearBasePass,this.bokehNearFillPass,this.bokehFarBasePass,this.bokehFarFillPass].forEach(i=>i.initialize(A,e,t)),this.blurPass.initialize(A,e,1009),void 0!==t&&(this.renderTarget.texture.type=t,this.renderTargetNear.texture.type=t,this.renderTargetFar.texture.type=t,this.renderTargetMasked.texture.type=t,3001===A.outputEncoding&&(this.renderTarget.texture.encoding=3001,this.renderTargetNear.texture.encoding=3001,this.renderTargetFar.texture.encoding=3001,this.renderTargetMasked.texture.encoding=3001))}};new e4,new tE;var Dl=class extends C1{constructor({blendFunction:A=CK.NORMAL,hue:e=0,saturation:t=0}={}){super("HueSaturationEffect","uniform vec3 hue;uniform float saturation;void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){vec3 color=vec3(dot(inputColor.rgb,hue.xyz),dot(inputColor.rgb,hue.zxy),dot(inputColor.rgb,hue.yzx));float average=(color.r+color.g+color.b)/3.0;vec3 diff=average-color;if(saturation>0.0){color+=diff*(1.0-1.0/(1.001-saturation));}else{color+=diff*-saturation;}outputColor=vec4(min(color,1.0),inputColor.a);}",{blendFunction:A,uniforms:new Map([["hue",new aZ(new e4)],["saturation",new aZ(t)]])}),this.hue=e}get saturation(){return this.uniforms.get("saturation").value}set saturation(A){this.uniforms.get("saturation").value=A}getSaturation(){return this.saturation}setSaturation(A){this.saturation=A}get hue(){return Math.acos((3*this.uniforms.get("hue").value.x-1)/2)}set hue(A){let e=Math.sin(A),t=Math.cos(A);this.uniforms.get("hue").value.set((2*t+1)/3,(-Math.sqrt(3)*e-t+1)/3,(Math.sqrt(3)*e-t+1)/3)}getHue(){return this.hue}setHue(A){this.hue=A}};new eY;var Dh=`void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){vec3 noise=vec3(rand(uv*time));
#ifdef PREMULTIPLY
outputColor=vec4(min(inputColor.rgb*noise,vec3(1.0)),inputColor.a);
#else
outputColor=vec4(noise,inputColor.a);
#endif
}`,Dc=class extends C1{constructor({blendFunction:A=CK.SCREEN,premultiply:e=!1}={}){super("NoiseEffect",Dh,{blendFunction:A}),this.premultiply=e}get premultiply(){return this.defines.has("PREMULTIPLY")}set premultiply(A){this.premultiply!==A&&(A?this.defines.set("PREMULTIPLY","1"):this.defines.delete("PREMULTIPLY"),this.setChanged())}isPremultiplied(){return this.premultiply}setPremultiplied(A){this.premultiply=A}},Dd=class extends C1{constructor(A=30){super("PixelationEffect","uniform bool active;uniform vec2 d;void mainUv(inout vec2 uv){if(active){uv=vec2(d.x*(floor(uv.x/d.x)+0.5),d.y*(floor(uv.y/d.y)+0.5));}}",{uniforms:new Map([["active",new aZ(!1)],["d",new aZ(new e_)]])}),this.resolution=new e_,this.d=0,this.granularity=A}get granularity(){return this.d}set granularity(A){let e=Math.floor(A);e%2>0&&(e+=1),this.d=e,this.uniforms.get("active").value=e>0,this.setSize(this.resolution.width,this.resolution.height)}getGranularity(){return this.granularity}setGranularity(A){this.granularity=A}setSize(A,e){this.resolution.set(A,e),this.uniforms.get("d").value.setScalar(this.d).divide(this.resolution)}};new e4,new e4;var Du="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAAQCAYAAACm53kpAAAAeElEQVRYR+2XSwqAMAxEJ168ePEqwRSKhIIiuHjJqiU0gWE+1CQdApcVAMUAuARaMGCX1MIL/Ow13++9lW2s3mW9MWvsnWc/2fvGygwPAN4E8QzAA4CXAB6AHjG4JTHYI1ey3pcx6FHnEfhLDOIBKAmUBK6/ANUDTlROXAHd9EC1AAAAAElFTkSuQmCC",Dp="data:image/png;base64,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",Df={LOW:0,MEDIUM:1,HIGH:2,ULTRA:3},Dm=class extends C1{constructor({preset:A=Df.MEDIUM,edgeDetectionMode:e=CT.COLOR,predicationMode:t=CC.DISABLED}={}){let i,r;super("SMAAEffect","uniform sampler2D weightMap;varying vec2 vOffset0;varying vec2 vOffset1;void movec(const in bvec2 c,inout vec2 variable,const in vec2 value){if(c.x){variable.x=value.x;}if(c.y){variable.y=value.y;}}void movec(const in bvec4 c,inout vec4 variable,const in vec4 value){movec(c.xy,variable.xy,value.xy);movec(c.zw,variable.zw,value.zw);}void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){vec4 a;a.x=texture2D(weightMap,vOffset0).a;a.y=texture2D(weightMap,vOffset1).g;a.wz=texture2D(weightMap,uv).rb;vec4 color=inputColor;if(dot(a,vec4(1.0))>=1e-5){bool h=max(a.x,a.z)>max(a.y,a.w);vec4 blendingOffset=vec4(0.0,a.y,0.0,a.w);vec2 blendingWeight=a.yw;movec(bvec4(h),blendingOffset,vec4(a.x,0.0,a.z,0.0));movec(bvec2(h),blendingWeight,a.xz);blendingWeight/=dot(blendingWeight,vec2(1.0));vec4 blendingCoord=blendingOffset*vec4(texelSize,-texelSize)+uv.xyxy;color=blendingWeight.x*texture2D(inputBuffer,blendingCoord.xy);color+=blendingWeight.y*texture2D(inputBuffer,blendingCoord.zw);}outputColor=color;}",{vertexShader:"varying vec2 vOffset0;varying vec2 vOffset1;void mainSupport(const in vec2 uv){vOffset0=uv+texelSize*vec2(1.0,0.0);vOffset1=uv+texelSize*vec2(0.0,1.0);}",blendFunction:CK.NORMAL,attributes:C0.CONVOLUTION|C0.DEPTH,uniforms:new Map([["weightMap",new aZ(null)]])}),arguments.length>1&&(i=arguments[0],r=arguments[1],arguments.length>2&&(A=arguments[2]),arguments.length>3&&(e=arguments[3])),this.renderTargetEdges=new e0(1,1,{minFilter:1006,stencilBuffer:!1,depthBuffer:!1}),this.renderTargetEdges.texture.name="SMAA.Edges",this.renderTargetWeights=this.renderTargetEdges.clone(),this.renderTargetWeights.texture.name="SMAA.Weights",this.uniforms.get("weightMap").value=this.renderTargetWeights.texture,this.clearPass=new CW(!0,!1,!1),this.clearPass.overrideClearColor=new eY(0),this.clearPass.overrideClearAlpha=1,this.edgeDetectionPass=new C9(new CD),this.edgeDetectionMaterial.edgeDetectionMode=e,this.edgeDetectionMaterial.predicationMode=t,this.weightsPass=new C9(new CF);let s=new av;s.onLoad=()=>{let A=new eJ(i);A.name="SMAA.Search",A.magFilter=1003,A.minFilter=1003,A.generateMipmaps=!1,A.needsUpdate=!0,A.flipY=!0,this.weightsMaterial.searchTexture=A;let e=new eJ(r);e.name="SMAA.Area",e.magFilter=1006,e.minFilter=1006,e.generateMipmaps=!1,e.needsUpdate=!0,e.flipY=!1,this.weightsMaterial.areaTexture=e,this.dispatchEvent({type:"load"})},s.itemStart("search"),s.itemStart("area"),void 0!==i&&void 0!==r?(s.itemEnd("search"),s.itemEnd("area")):"u">typeof Image&&(i=new Image,r=new Image,i.addEventListener("load",()=>s.itemEnd("search")),r.addEventListener("load",()=>s.itemEnd("area")),i.src=Du,r.src=Dp),this.applyPreset(A)}get edgesTexture(){return this.renderTargetEdges.texture}getEdgesTexture(){return this.edgesTexture}get weightsTexture(){return this.renderTargetWeights.texture}getWeightsTexture(){return this.weightsTexture}get edgeDetectionMaterial(){return this.edgeDetectionPass.fullscreenMaterial}get colorEdgesMaterial(){return this.edgeDetectionMaterial}getEdgeDetectionMaterial(){return this.edgeDetectionMaterial}get weightsMaterial(){return this.weightsPass.fullscreenMaterial}getWeightsMaterial(){return this.weightsMaterial}setEdgeDetectionThreshold(A){this.edgeDetectionMaterial.edgeDetectionThreshold=A}setOrthogonalSearchSteps(A){this.weightsMaterial.orthogonalSearchSteps=A}applyPreset(A){let e=this.edgeDetectionMaterial,t=this.weightsMaterial;switch(A){case Df.LOW:e.edgeDetectionThreshold=.15,t.orthogonalSearchSteps=4,t.diagonalDetection=!1,t.cornerDetection=!1;break;case Df.MEDIUM:e.edgeDetectionThreshold=.1,t.orthogonalSearchSteps=8,t.diagonalDetection=!1,t.cornerDetection=!1;break;case Df.HIGH:e.edgeDetectionThreshold=.1,t.orthogonalSearchSteps=16,t.diagonalSearchSteps=8,t.cornerRounding=25,t.diagonalDetection=!0,t.cornerDetection=!0;break;case Df.ULTRA:e.edgeDetectionThreshold=.05,t.orthogonalSearchSteps=32,t.diagonalSearchSteps=16,t.cornerRounding=25,t.diagonalDetection=!0,t.cornerDetection=!0}}setDepthTexture(A,e=3200){this.edgeDetectionMaterial.depthBuffer=A,this.edgeDetectionMaterial.depthPacking=e}update(A,e,t){this.clearPass.render(A,this.renderTargetEdges),this.edgeDetectionPass.render(A,e,this.renderTargetEdges),this.weightsPass.render(A,this.renderTargetEdges,this.renderTargetWeights)}setSize(A,e){this.edgeDetectionMaterial.setSize(A,e),this.weightsMaterial.setSize(A,e),this.renderTargetEdges.setSize(A,e),this.renderTargetWeights.setSize(A,e)}dispose(){let{searchTexture:A,areaTexture:e}=this.weightsMaterial;null!==A&&null!==e&&(A.dispose(),e.dispose()),super.dispose()}static get searchImageDataURL(){return Du}static get areaImageDataURL(){return Dp}},Dg=`uniform float offset;uniform float darkness;void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){const vec2 center=vec2(0.5);vec3 color=inputColor.rgb;
#if VIGNETTE_TECHNIQUE == 0
float d=distance(uv,center);color*=smoothstep(0.8,offset*0.799,d*(darkness+offset));
#else
vec2 coord=(uv-center)*vec2(offset);color=mix(color,vec3(1.0-darkness),dot(coord,coord));
#endif
outputColor=vec4(color,inputColor.a);}`,Dv={DEFAULT:0,ESKIL:1},Dy=class extends C1{constructor({blendFunction:A=CK.NORMAL,technique:e=Dv.DEFAULT,eskil:t=!1,offset:i=.5,darkness:r=.5}={}){super("VignetteEffect",Dg,{blendFunction:A,defines:new Map([["VIGNETTE_TECHNIQUE",e.toFixed(0)]]),uniforms:new Map([["offset",new aZ(i)],["darkness",new aZ(r)]])})}get technique(){return Number(this.defines.get("VIGNETTE_TECHNIQUE"))}set technique(A){this.technique!==A&&(this.defines.set("VIGNETTE_TECHNIQUE",A.toFixed(0)),this.setChanged())}get eskil(){return this.technique===Dv.ESKIL}set eskil(A){this.technique=A?Dv.ESKIL:Dv.DEFAULT}getTechnique(){return this.technique}setTechnique(A){this.technique=A}get offset(){return this.uniforms.get("offset").value}set offset(A){this.uniforms.get("offset").value=A}getOffset(){return this.offset}setOffset(A){this.offset=A}get darkness(){return this.uniforms.get("darkness").value}set darkness(A){this.uniforms.get("darkness").value=A}getDarkness(){return this.darkness}setDarkness(A){this.darkness=A}};function Dx(A,e,t,i){var r;return(r=A+(e-A)*.75)+(t+(i-t)*.75-r)*.875}new Float32Array(3),new Float32Array(3),new Float32Array(3),new Float32Array(3),new Float32Array(3),new Float32Array(3),new Float32Array([0,0,0]),new Float32Array([1,0,0]),new Float32Array([1,1,0]),new Float32Array([1,1,1]),new Float32Array([0,0,0]),new Float32Array([1,0,0]),new Float32Array([1,0,1]),new Float32Array([1,1,1]),new Float32Array([0,0,0]),new Float32Array([0,0,1]),new Float32Array([1,0,1]),new Float32Array([1,1,1]),new Float32Array([0,0,0]),new Float32Array([0,1,0]),new Float32Array([1,1,0]),new Float32Array([1,1,1]),new Float32Array([0,0,0]),new Float32Array([0,1,0]),new Float32Array([0,1,1]),new Float32Array([1,1,1]),new Float32Array([0,0,0]),new Float32Array([0,0,1]),new Float32Array([0,1,1]),new Float32Array([1,1,1]),new Float32Array(2),new Float32Array(2),new Float32Array([0,-.25,.25,-.125,.125,-.375,.375]),new Float32Array([0,0]),new Float32Array([.25,-.25]),new Float32Array([-.25,.25]),new Float32Array([.125,-.125]),new Float32Array([-.125,.125]),new Uint8Array([0,0]),new Uint8Array([3,0]),new Uint8Array([0,3]),new Uint8Array([3,3]),new Uint8Array([1,0]),new Uint8Array([4,0]),new Uint8Array([1,3]),new Uint8Array([4,3]),new Uint8Array([0,1]),new Uint8Array([3,1]),new Uint8Array([0,4]),new Uint8Array([3,4]),new Uint8Array([1,1]),new Uint8Array([4,1]),new Uint8Array([1,4]),new Uint8Array([4,4]),new Uint8Array([0,0]),new Uint8Array([1,0]),new Uint8Array([0,2]),new Uint8Array([1,2]),new Uint8Array([2,0]),new Uint8Array([3,0]),new Uint8Array([2,2]),new Uint8Array([3,2]),new Uint8Array([0,1]),new Uint8Array([1,1]),new Uint8Array([0,3]),new Uint8Array([1,3]),new Uint8Array([2,1]),new Uint8Array([3,1]),new Uint8Array([2,3]),new Uint8Array([3,3]),Dx(0,0,0,0),new Float32Array([0,0,0,0]),Dx(0,0,0,1),new Float32Array([0,0,0,1]),Dx(0,0,1,0),new Float32Array([0,0,1,0]),Dx(0,0,1,1),new Float32Array([0,0,1,1]),Dx(0,1,0,0),new Float32Array([0,1,0,0]),Dx(0,1,0,1),new Float32Array([0,1,0,1]),Dx(0,1,1,0),new Float32Array([0,1,1,0]),Dx(0,1,1,1),new Float32Array([0,1,1,1]),Dx(1,0,0,0),new Float32Array([1,0,0,0]),Dx(1,0,0,1),new Float32Array([1,0,0,1]),Dx(1,0,1,0),new Float32Array([1,0,1,0]),Dx(1,0,1,1),new Float32Array([1,0,1,1]),Dx(1,1,0,0),new Float32Array([1,1,0,0]),Dx(1,1,0,1),new Float32Array([1,1,0,1]),Dx(1,1,1,0),new Float32Array([1,1,1,0]),Dx(1,1,1,1),new Float32Array([1,1,1,1]);var Db=class{constructor(A,e){this.enabled=!1,this.effect=new A(e),Object.defineProperty(this,"opacity",{enumerable:!0,set(A){this.effect.blendMode.opacity.value=A},get(){return this.effect.blendMode.opacity.value}}),Object.defineProperty(this,"blendFunction",{enumerable:!0,set(A){this.effect.blendMode.setBlendFunction(Number(A))},get(){return this.effect.blendMode.blendFunction}}),this.blendFunction=CK.NORMAL}},Dw=class extends Db{constructor(){super(Di),this.blendFunction=CK.SCREEN}set intensity(A){this.effect.intensity=A}get intensity(){return this.effect.intensity}set luminanceThreshold(A){this.effect.luminanceMaterial.threshold=A}get luminanceThreshold(){return this.effect.luminanceMaterial.threshold}set luminanceSmoothing(A){this.effect.luminanceMaterial.smoothing=A}get luminanceSmoothing(){return this.effect.luminanceMaterial.smoothing}set blurScale(A){this.effect.blurPass.scale=A}get blurScale(){return this.effect.blurPass.scale}set kernelSize(A){this.effect.blurPass.kernelSize=A}get kernelSize(){return this.effect.blurPass.kernelSize}},DS=class extends Db{constructor(){super(Dr)}set contrast(A){this.effect.uniforms.get("contrast").value=A}get contrast(){return this.effect.uniforms.get("contrast").value}set brightness(A){this.effect.uniforms.get("brightness").value=A}get brightness(){return this.effect.uniforms.get("brightness").value}},DM=class extends Db{constructor(){super(Dn),this.effect.offset=new e_(.01,.01)}set offset(A){this.effect.offset.set(A[0]/1e3,A[1]/1e3)}get offset(){return[1e3*this.effect.offset.x,1e3*this.effect.offset.y]}},DE=class extends Db{constructor(){super(Ds)}},DT=class extends Db{constructor(){super(Dl),this._hue=0}set hue(A){this._hue=A,this.effect.setHue(A)}get hue(){return this._hue}set saturation(A){this.effect.uniforms.get("saturation").value=A}get saturation(){return this.effect.uniforms.get("saturation").value}},DC=class extends Db{constructor(){super(Dc),this.blendFunction=CK.OVERLAY}},DD=class extends Db{constructor(){super(Dy)}get eskil(){return this.effect.eskil}set eskil(A){this.effect.eskil=A}get darkness(){return this.effect.uniforms.get("darkness").value}set darkness(A){this.effect.uniforms.get("darkness").value=A}get offset(){return this.effect.uniforms.get("offset").value}set offset(A){this.effect.uniforms.get("offset").value=A}},DP=class extends Db{constructor(A){super(Do,A)}set focalLength(A){this.effect.circleOfConfusionMaterial.uniforms.focalLength.value=A}get focalLength(){return this.effect.circleOfConfusionMaterial.uniforms.focalLength.value}set focusDistance(A){this.effect.circleOfConfusionMaterial.uniforms.focusDistance.value=A}get focusDistance(){return this.effect.circleOfConfusionMaterial.uniforms.focusDistance.value}get bokehScale(){return this.effect.bokehScale}set bokehScale(A){this.effect.bokehScale=A}},D_=class extends Db{constructor(){super(Dd)}get granularity(){return this.effect.getGranularity()}set granularity(A){this.effect.setGranularity(A)}},DL=class extends CG{constructor(A,e,t){super("TransmissionPass",A,e),this.copyPass=new CV(t.transmissionRenderTarget),this.depthPass=new CZ(A,e,{renderTarget:t.transmissionDepthTarget}),this.needsSwap=!1}updatePasses(A){this.copyPass=new CV(A.transmissionRenderTarget),this.depthPass=new CZ(this.scene,this.camera,{renderTarget:A.transmissionDepthTarget})}setCamera(A){this.camera=A}setScene(A){this.scene=A}render(A,e,t){let i=this.camera.layers.mask;this.copyPass.render(A,e,t),this.camera.layers.disable(3),this.depthPass.render(A,e,t),A.shadowMap.needsUpdate=!1,A.shadowMap.autoUpdate=!1;let r=this.renderToScreen?null:e;this.camera.layers.set(3),A.setRenderTarget(r),A.render(this.scene,this.camera),this.camera.layers.mask=i}},DO=new ns,DB=new ij({transparent:!0,vertexShader:`
        void main() {
            gl_Position = vec4(0.0);
        }
    `,fragmentShader:`
        void main() {
            gl_FragColor = vec4(0.0);
        }
    `}),DI=class extends CG{constructor(A,e){super("OpaquePass",A??DO,e),this.hasTransmissionPass=!1,this.clear=!0,this.needsSwap=!1,this.originalMaterials=new Map}setCamera(A){this.camera=A}setScene(A){this.scene=A??DO}getScene(){return this.scene}render(A,e){this.originalMaterials.clear(),this.camera.layers.enable(3),this.hasTransmissionPass&&this.scene.traverse(A=>{A.layers.isEnabled(3)&&A instanceof yQ&&(this.originalMaterials.set(A.id,A.material),A.material=DB)}),this.camera.layers.enable(8),A.shadowMap.needsUpdate=!0,A.shadowMap.autoUpdate=!0;let t=this.renderToScreen?null:e;A.setRenderTarget(t),this.clear&&A.clear(),A.render(this.scene,this.camera),this.hasTransmissionPass&&this.originalMaterials.forEach((A,e)=>{let t=this.scene.getObjectById(e);t&&(t.material=A)})}};function DR(A,e){return e&&e.enabled&&A.push(e.effect),A}var DN=class extends ev{constructor(A){super(),this.postprocessingState=p2.defaultData,this._scene=new ns,this._camera=new wj,this.effects=new Map,this._renderToScreen=!0,this.clock=new ak,this.renderer=A,this.debug=!1,this.effects.set("bloom",new Dw),this.effects.set("chromaticAberration",new DM),this.effects.set("vignette",new DD),this.effects.set("noise",new DC),this.effects.set("colorAverage",new DE),this.effects.set("hueSaturation",new DT),this.effects.set("brightnessContrast",new DS),this.effects.set("depthOfField",new DP),this.effects.set("pixelation",new D_),this.effectComposer=new DA(this.renderer),this.opaquePass=new DI(this.scene,this.camera),this.transmissionPass=new DL(this.scene,this.camera,this.renderer),this.helperPass=new DI(void 0,this.camera),this.helperPass.hasTransmissionPass=!1,this.helperPass.clear=!1,this.helperClearPass=new CW(!1,!0,!1),this.helperPassOnTop=new DI(void 0,this.camera),this.helperPassOnTop.hasTransmissionPass=!1,this.helperPassOnTop.clear=!1,this._initCopyPass(),this._initSmaa(),this._initPasses()}get scene(){return this._scene}set scene(A){this._scene=A,this.opaquePass.setScene(A),this.transmissionPass.setScene(A)}set sceneHelpers(A){this.helperPass.setScene(A)}get sceneHelpers(){return this.helperPass.getScene()}set sceneHelpersOnTop(A){this.helperPassOnTop.setScene(A)}get sceneHelpersOnTop(){return this.helperPassOnTop.getScene()}get camera(){return this._camera}set camera(A){this._camera=A,this.opaquePass.setCamera(A),this.transmissionPass.setCamera(A),this.helperPass.setCamera(A),this.helperPassOnTop.setCamera(A)}setTransmissionPassEnabled(A){this.transmissionPass.enabled=A,this.opaquePass.hasTransmissionPass=A}disableHelpers(){this.helperPass.enabled=!1,this.helperClearPass.enabled=!1,this.helperPassOnTop.enabled=!1}enableHelpers(){this.helperPass.enabled=!0,this.helperClearPass.enabled=!0,this.helperPassOnTop.enabled=!0}_initSmaa(){let A=new Dm({preset:Df.ULTRA,edgeDetectionMode:CT.COLOR}),e=()=>{A.removeEventListener("load",e),this.dispatchEvent({type:"smaaloaded"})};A.addEventListener("load",e),A.edgeDetectionMaterial.predicationMode=CC.DEPTH,A.edgeDetectionMaterial.edgeDetectionThreshold=.05,A.edgeDetectionMaterial.predicationThreshold=.002,A.edgeDetectionMaterial.predicationScale=1,this.smaaPass=new C3(this.camera,A)}_initPasses(){if(this.uvEffectPass?.dispose(),this.effectPass?.dispose(),this.effectComposer.removeAllPasses(),this.transmissionPass.updatePasses(this.renderer),this.effectComposer.addPass(this.opaquePass),this.effectComposer.addPass(this.transmissionPass),this.postprocessingState.enabled){let A=[this.effects.get("pixelation")].reduce(DR,[]);A.length>0&&(this.uvEffectPass=new C3(this.camera,...A),this.effectComposer.addPass(this.uvEffectPass));let e=[this.effects.get("chromaticAberration"),this.effects.get("bloom"),this.effects.get("colorAverage"),this.effects.get("hueSaturation"),this.effects.get("brightnessContrast"),this.effects.get("vignette"),this.effects.get("noise")].reduce(DR,[]);e.length>0&&(this.effectPass=new C3(this.camera,...e),this.effectComposer.addPass(this.effectPass))}this.effectComposer.addPass(this.helperPass),this.effectComposer.addPass(this.helperClearPass),this.effectComposer.addPass(this.helperPassOnTop),this.effectComposer.addPass(this.smaaPass)}_initCopyPass(){if(this._savePass)return;let A=new e_;this.renderer.getDrawingBufferSize(A),this._rt=new e0(A.x,A.y,{depthBuffer:!1,stencilBuffer:!1,wrapS:1e3,wrapT:1e3}),this._rt.samples=0,this._savePass=new CV(this._rt,!1),this._savePass.renderToScreen=!1}get renderToScreen(){return this._renderToScreen}set renderToScreen(A){if(this._renderToScreen===A)return;let e=this.effectComposer;e&&(!0===A?(e.removePass(this._savePass),e.passes[e.passes.length-1].renderToScreen=!0,e.autoRenderToScreen=!0):(e.autoRenderToScreen=!1,e.passes[e.passes.length-1].renderToScreen=!1,this._savePass.renderToScreen=!1,this.postprocessingState.enabled||(this._savePass.needsDepthTexture=!0),e.addPass(this._savePass)),this._renderToScreen=A)}get texture(){return this._rt&&this._rt.texture}get renderTarget(){return this._rt}updatePostprocessing(A){let{enabled:e,...t}=A,i=!1;for(let r of(e!==this.postprocessingState.enabled&&(i=!0),Object.entries(t))){let s=r[1],a=this.effects.get(r[0]);if(a)for(let[o,l]of(a.enabled!==s.enabled&&(i=!0),a.enabled=s.enabled,Object.entries(s)))a[o]=l}this.postprocessingState=A,i&&this._initPasses()}render(){this.effectComposer.render(this.clock.getDelta())}setScissor(A,e,t,i){A instanceof e$?(this.effectComposer.inputBuffer.scissor.set(A.x,A.y,A.z,A.w),this.effectComposer.outputBuffer.scissor.set(A.x,A.y,A.z,A.w)):(this.effectComposer.inputBuffer.scissor.set(A,e,t,i),this.effectComposer.outputBuffer.scissor.set(A,e,t,i));let r=this.renderer.getPixelRatio();this.effectComposer.inputBuffer.scissor.multiplyScalar(r),this.effectComposer.outputBuffer.scissor.multiplyScalar(r),this.renderer.setScissor(A,e,t,i)}setScissorTest(A){this.effectComposer.inputBuffer.scissorTest=A,this.effectComposer.outputBuffer.scissorTest=A,this.renderer.setScissorTest(A)}setViewport(A,e,t,i){A instanceof e$?(this.effectComposer.inputBuffer.viewport.copy(A),this.effectComposer.outputBuffer.viewport.copy(A)):(this.effectComposer.inputBuffer.viewport.set(A,e,t,i),this.effectComposer.outputBuffer.viewport.set(A,e,t,i))}resize(A,e,t){if(this.effectComposer.setSize(A,e,t),this._rt){let i=this.renderer.getPixelRatio();this._rt.setSize(A*i,e*i)}}dispose(){this.uvEffectPass?.dispose(),this.effectPass?.dispose(),this.effectComposer.dispose()}},Dz=new eJ,DF=class extends ni{constructor(A){super(A),this._pixelRatio=this.getPixelRatio(),this.viewportWidth=1,this.viewportHeight=1,this.resolution=new e_,this.pipeline=new DN(this),this.overrideTransmission=A?.overrideTransmission,this.autoClear=!1;let e=this.setPixelRatio.bind(this),t=this.setSize.bind(this);this.setPixelRatio=A=>{this._pixelRatio=A,e(A)},this.setSize=(A,e,i=!0)=>{(this.viewportWidth!==A||this.viewportHeight!==e)&&(this.viewportWidth=A,this.viewportHeight=e,t(A,e,i),this.normalRenderTarget?.setSize(A*this._pixelRatio,e*this._pixelRatio),this.transmissionRenderTarget?.setSize(A*this._pixelRatio/2,e*this._pixelRatio/2),this.transmissionDepthTarget?.setSize(A*this._pixelRatio/2,e*this._pixelRatio/2),this.pipeline.resize(A,e,i))},this._superDispose=this.dispose,this.dispose=this._currentDispose}createTransmissionRenderTarget(){void 0===this.transmissionRenderTarget&&(this.transmissionRenderTarget=new e0(this.viewportWidth*this._pixelRatio/2,this.viewportHeight*this._pixelRatio/2,{generateMipmaps:!0,minFilter:1008,magFilter:1006,wrapS:1001,wrapT:1001,depthBuffer:!1}),this.transmissionDepthTarget=new e0(this.viewportWidth*this._pixelRatio/2,this.viewportHeight*this._pixelRatio/2,{minFilter:1003,magFilter:1003,depthBuffer:!1}))}createNormalRenderTarget(){void 0===this.normalRenderTarget&&(this.normalRenderTarget=new e0(this.viewportWidth*this._pixelRatio,this.viewportHeight*this._pixelRatio,{generateMipmaps:!1,minFilter:1003,magFilter:1003,type:1015,depthTexture:new nA(this.viewportWidth*this._pixelRatio,this.viewportHeight*this._pixelRatio)}))}renderNormal(A,e){this.normalRenderTarget&&(this.setClearColor(0),e.layers.enable(8),e.layers.disable(0),e.layers.disable(3),this.setRenderTarget(this.normalRenderTarget),this.clear(),e instanceof wj?SM.uniforms.depthContrast.value=(e.far-e.near)/1e4:SM.uniforms.depthContrast.value=1,A.overrideMaterial=SM,this.render(A,e),this.setClearColor(A.bgColor,A.bgColor.a),this.setRenderTarget(null),A.overrideMaterial=A.wireframeState?SE:null,e.layers.enable(0),e.layers.enable(3))}renderSplineScene(A,e,t,i,r){this.setClearColor(A.bgColor,A.bgColor.a),t.penumbraSize.forEach((A,e)=>{xI.penumbraSize.value[e]=A}),xI.pixelRatioNode.value=this.getPixelRatio(),0!==this.resolution.x&&0!==this.resolution.y?xI.resolution.value.set(this.resolution.x,this.resolution.y):xI.resolution.value.set(this.viewportWidth*this._pixelRatio,this.viewportHeight*this._pixelRatio),void 0!==this.overrideNormal?(xI.normalRenderTarget.value=this.overrideNormal,xI.normalRenderTargetDepth.value=Dz):A.needsNormal()&&(this.createNormalRenderTarget(),xI.normalRenderTarget.value=this.normalRenderTarget.texture,xI.normalRenderTargetDepth.value=this.normalRenderTarget.depthTexture,this.renderNormal(A,e));let s=!1;if(void 0!==this.overrideTransmission)xI.transmissionRenderTarget.value=this.overrideTransmission,xI.transmissionRenderTargetDepth.value=Dz,this.pipeline.setTransmissionPassEnabled(!1);else{let a=A.needsTransmission();a&&(void 0===this.transmissionRenderTarget&&(s=!0),this.createTransmissionRenderTarget(),xI.transmissionRenderTarget.value=this.transmissionRenderTarget.texture,xI.transmissionRenderTargetDepth.value=this.transmissionDepthTarget.texture),this.pipeline.setTransmissionPassEnabled(a)}e.layers.enable(3),e.layers.enable(8),this.pipeline.sceneHelpers=i,this.pipeline.sceneHelpersOnTop=r,this.pipeline.scene=A,this.pipeline.camera=e,s&&this.pipeline.transmissionPass.updatePasses(this),this.pipeline.postprocessingState!==A.postprocessing&&this.pipeline.updatePostprocessing(A.postprocessing),void 0!==this.clearAlphaOverride&&this.setClearAlpha(this.clearAlphaOverride),A.overrideMaterial=A.wireframeState?SE:null,this.pipeline.render()}_currentDispose(){this._superDispose(),this.pipeline.dispose(),this.transmissionRenderTarget?.dispose(),this.transmissionDepthTarget?.dispose(),this.normalRenderTarget?.dispose(),this.normalRenderTarget?.depthTexture?.dispose()}},DU=class{get sharedAssets(){return this.shared}constructor(A,e={}){this.shared=new bK(A.shared,e),this.scene=new SD(A.scene,this.sharedAssets),this.scene.switchActiveCamera(this.scene.activeCamera)}reset(A,e){this.scene.clearScene(),this.sharedAssets.reset(A.shared),this.scene.resetAfterClear(A.scene,this.sharedAssets)}dispose(){this.scene.dispose(),this.shared.dispose()}gc(){this.shared.geometryCache.startGc(),this.shared.geometryCache2.startGc(),this.scene.traverseEntity(A=>{A instanceof b$&&A.markGeometryAsReachable(this.shared)}),this.shared.geometryCache.endGc(),this.shared.geometryCache2.endGc()}},Dk=class{constructor({x:A=10,y:e=10}){this._startTime=0;let t=document.getElementById("spe-perfs");t?this.element=t:(this.element=document.createElement("div"),document.body.appendChild(this.element),this.element.style.position="absolute",this.element.style.zIndex="10000",this.element.style.fontFamily="monospace",this.element.style.background="black",this.element.style.color="white",this.element.style.padding="10px",this.element.style.opacity="0.5",this.element.style.fontSize="11px",this.element.setAttribute("id","spe-perfs")),this.element.style.left=`${A}px`,this.element.style.top=`${e}px`}dispose(){this.element.parentElement?.removeChild(this.element)}start(){this._startTime=performance.now()}end(){let A=performance.now()-this._startTime;this.element.innerHTML=A.toFixed(3)+" ms"}};function DG(A){return A instanceof b7?"SubdivObject":"NonParametricGeometry"===A.geometry.type?"NonParametric":"Mesh"}var DV=new e_,Dj=class{constructor(A,{renderOnDemand:e=!0}={}){this._viewportMode=1,this._viewportWidth=window.innerWidth,this._viewportHeight=window.innerHeight,this._proxyObjectCache=new Map,this._lastTime=performance.now(),this.time=performance.now(),this.dt=0,this._skipRender=!1,this.renderOnDemand=!0,this.disposed=!1,this.requestRender=()=>{this._skipRender=!1},this.render=A=>{this._renderer&&(this._rafId=requestAnimationFrame(this.render),this.time=A,this.dt=this.time-this._lastTime,this._lastTime=this.time,this._perfs?.start(),this.renderOnDemand&&this._skipRender||(this._skipRender=this._controls?.update(this.dt)??!0,this._eventManager&&(this._eventManager.isEnable||this._eventManager.activate(),this._eventManager.handlers.Follow.onAnimationFrameDamping(),this._eventManager.handlers.LookAt.onAnimationFrameDamping(),(this._eventManager.handlers.Start.hasVideoAction||this._eventManager.handlers.Basic.hasVideoAction||this._eventManager.handlers.Conditional.hasVideoAction)&&(this._skipRender=!1)),this._scene&&this._camera&&this._renderer.renderSplineScene(this._scene,this._camera,this._sharedAssetsManager),this._perfs?.end()))},this._resize=c9(()=>{this._renderer&&(1===this._viewportMode&&this._frameView&&(this._frameView.frameSize=DV.set(this._viewportWidth,this._viewportHeight)),this._renderer.setSize(this._viewportWidth,this._viewportHeight,!1),1!==this._viewportMode&&this._frameView?.updateViewport(),this._camera&&(this._frameView?.updateCamera(),"PerspectiveCamera"===this._camera.cameraType&&1===this._viewportMode&&(this._camera.aspect=this._viewportWidth/this._viewportHeight),this._camera.updateProjectionMatrix()),this._eventManager?.resize(),this.requestRender())},10),this.canvas=A,this.renderOnDemand=e,window.location.search.includes("perfs")&&(this._perfs=new Dk({x:10,y:10})),A.addEventListener("pointerdown",ff,!0),A.addEventListener("pointerdown",fg,!0),A.addEventListener("pointermove",fg,!0),A.addEventListener("pointerup",fm,!0),A.addEventListener("pointercancel",fm,!0),A.addEventListener("pointerleave",fm,!0),window.addEventListener("keydown",fy,!0),window.addEventListener("keyup",fx,!0)}async load(A,e){let t;t="The Spline Runtime only accepts .splinecode files that are generated from Spline export panel.",A.endsWith(".spline")?console.warn(t+" The .spline files are only meant to be used by the Editor."):A.endsWith(".splinecode")||console.warn(t),await this.start(await (await fetch(A,e)).arrayBuffer())}async start(A,{interactive:e=!0}={}){let t;if(this.disposed)return;let i=await Cl(A);await Promise.all([wW(i)&&yO(),(t=!1,i.scene.objects.traverse((A,e)=>{"Mesh"===e.type&&"SubdivGeometry"===e.geometry.type&&(t=!0)}),t&&yd()),i.scene.environment.usePhysics&&dh(),Ss(i)&&bj()].filter(Boolean)),this._eventManager&&this._eventManager.deactivate(),this._controls&&this._controls.dispose(),this._scene?.dispose();let r=new DU(i);if(this._scene=r.scene,this._sharedAssetsManager=r.sharedAssets,this._camera=this._scene.activeCamera,window.location.search.includes("merge-geometries")){let s=performance.now();!function(A,e){let t,i;let r=(t={},e.traverseEntity(e=>{if(!e.visible||!(e instanceof yQ)||"Mesh"!==e.type||Array.isArray(e.material)||e.states&&Object.keys(e.states).length)return;let i=e.parent;for(;i;){if(i instanceof yQ&&e.states&&Object.keys(e.states).length)return;i=i.parent}let r=e.material.uuid,s=A.shared.materials[r];if(s){if(!md.isMergable(s))return}else{let a=A.scene.objects.get(e.uuid)?.data;if(a&&"material"in a&&"string"!=typeof a.material){if(!md.isMergable(a.material))return;r=md.getHash(a.material)}}t[r]||(t[r]={});let o=t[r][DG(e)];if(o){if(o.push(e),e.cloner)for(let l of e.cloner.children)o.push(l)}else if(t[r][DG(e)]=[e],e.cloner)for(let h of e.cloner.children)t[r][DG(e)].push(h)}),t),s=(i=0,Object.values(r).forEach(A=>{Object.values(A).forEach(A=>{let e=A.length;e>i&&(i=e)})}),i),a=Array(s),o=0,l=Array(s),h=0,c=Array(s),d=0,u=Array(s),p=0;for(let[f,m]of Object.entries(r))for(let g of Object.values(m)){if(h=0,d=0,g.forEach(A=>{A instanceof yQ&&(l[h++]=A.geometry.clone(),c[d++]=A)}),d<2)continue;for(let v=0;v<d;v++)c[v].updateWorldMatrix(!0,!1),l[v].applyMatrix4(c[v].matrixWorld),0>c[v].matrixWorld.determinant()&&function(A){let e;if(A.index)for(let t=0;t<A.index.array.length;t+=3)e=A.index.array[t],A.index.array[t]=A.index.array[t+2],A.index.array[t+2]=e}(l[v]);let y=f_(l.slice(0,h),!1);if(y){let x;"SubdivObject"===f&&console.warn("Turning subdiv object into mesh"),(x=new iR(y,c[0].material)).castShadow=c[0].castShadow,x.receiveShadow=c[0].receiveShadow,e.add(x);let b=A=>{for(let t of(p=0,A))t.children&&b(t.children),t instanceof yQ&&(Array.isArray(t.material)||r[t.material.uuid]&&r[t.material.uuid][DG(t)]&&r[t.material.uuid][DG(t)].length>1||(u[p++]=t));for(let i=0;i<p;i++)e.attach(u[i])};for(let w=0;w<d;w++){let S=c[w];b(S.children),a[o++]=S}}}for(let M=0;M<o;M++)a[M].removeFromParent()}(i,r.scene),console.log("Merged geometries in ",performance.now()-s," ms")}if(wW(i)&&this._scene.traverse(A=>{wq(A)&&A.recomputeBoolean()}),this._sharedAssetsManager.setOnImageLoad(()=>{this.requestRender()}),this._sharedAssetsManager.setOnFontLoad(()=>{this.requestRender()}),Ss(i)&&function(A){if(A.scene.environment.usePhysics)return!0;let e=!1;return A.scene.objects.traverse((A,t)=>{for(let i of t.events)if(!0!==i.data.disabled&&"GameControl"===i.data.type&&i.data.collisionEnabled){e=!0;break}}),e}(i)&&await Promise.all(Object.keys(i.shared.fonts).map(A=>this._sharedAssetsManager.getFont(A)).map(A=>A.loadingPromise)),this._scene.rewriteEventsBeforeGoToPlayMode(),function(A,e,t,i=!1){let r=[];e.traverseEntity(s=>{let a=s.uuid,o=s.data;if(!s||(delete s.states,!o.states))return;let l=!1;for(let h of(r.some(e=>A.objects.isDescendantOf(a,e))?l=!0:o.physics?.fusedBody===!0&&"dynamic"===o.physics.rigidBody&&r.push(a),s.data=o,s.currentState=null,s.currentTransitionAction=null,o.states)){let c=h.data.geometry;c&&Object.keys(c).length,!0===A.environment.usePhysics&&o.physics&&("dynamic"===o.physics.rigidBody||l)&&(void 0!==h.data.position||void 0!==h.data.rotation||void 0!==h.data.hiddenMatrix)||(s.states||(s.states={}),s.states[h.id]=mD.patch(o,h.data))}i&&(void 0!==s.matrixWorld0?(s.matrixWorld.identity(),s.rigidBody?.setTranslation(EC,!0),s.rigidBody?.setRotation(ED,!0),s.rigidBody?.setLinvel(EC,!0),s.rigidBody?.setAngvel(EC,!0)):s.rigidBody&&(s.rigidBody?.setTranslation(s.position0,!0),s.rigidBody?.setRotation(s.rotation0,!0),s.rigidBody?.setLinvel(EC,!0),s.rigidBody?.setAngvel(EC,!0)),void 0!==s.hiddenMatrix0&&(s.hiddenMatrix.copy(s.hiddenMatrix0),s.hiddenMatrix.premultiply(s.parent.matrixWorld0))),function(A,e,t,i,r=!1){e instanceof b$&&e.removeInteractionGeometry(),e.changeSelectedState(null,{scene:A,shared:i},r)}(e,s,0,t,void 0!==o.events.find(A=>"Follow"===A.data.type||"LookAt"===A.data.type))})}(i.scene,this._scene,this._sharedAssetsManager),this._renderer||(this._renderer=new DF({canvas:this.canvas,antialias:!1,alpha:!0,stencil:!1,depth:!1,powerPreference:"high-performance"}),this._renderer.setPixelRatio(window.devicePixelRatio),this._renderer.pipeline.addEventListener("smaaloaded",this.requestRender),this._renderer.shadowMap.enabled=!0,this._renderer.shadowMap.type=i.scene.environment.ambientLight.softShadows?1:2,Sb(i.scene.environment.ambientLight.softShadowQuality)),this._frameView)this._frameView.setCamera(this._camera);else{let a=Object.values(i.frames)[0];if("fullscreen"===a.preset){this._viewportMode=1;let{width:o,height:l}=window.getComputedStyle(this.canvas);this.canvas.parentElement&&("300px"===o||"auto"===o)?(this._viewportWidth=this.canvas.parentElement.clientWidth||300,this.canvas.style.width="100%"):this._viewportWidth=this.canvas.clientWidth,this.canvas.parentElement&&("150px"===l||"auto"===l)?(this._viewportHeight=this.canvas.parentElement.clientHeight||150,this.canvas.style.height="100%"):this._viewportHeight=this.canvas.clientHeight}else this._viewportMode=2,this._viewportWidth=a.size[0],this._viewportHeight=a.size[1],this.canvas.style.width=`${this._viewportWidth}px`,this.canvas.style.height=`${this._viewportHeight}px`;this._renderer.setSize(this._viewportWidth,this._viewportHeight,!1),this._frameView=new Cd(this._renderer,this._camera,new e_(this._viewportWidth,this._viewportHeight),new e_(window.innerWidth,window.innerHeight))}if(e&&(this._scene.updateMatrixWorld(!0),this._controls=new TE(i,this._scene,this._renderer,this.requestRender,this._sharedAssetsManager,!0),this._eventManager=new Cc(this._renderer,this._scene,this._camera,i.scene.publish.stopRaycast,i.scene.publish.preventScroll,this._sharedAssetsManager,this.requestRender,!0)),this._resize(),!this._resizeObserver&&this.canvas.parentElement){let h=!0;this._resizeObserver=new ResizeObserver(()=>{if(h){h=!1;return}this._viewportWidth=this.canvas.clientWidth,this._viewportHeight=this.canvas.clientHeight,this._resize()}),this._resizeObserver.observe(this.canvas.parentElement)}void 0===this._rafId?this.render(performance.now()):this.requestRender()}findObjectById(A){let e=this._scene?.getObjectByProperty("uuid",A);return this._createProxyObject(e)}findObjectByName(A){let e=this._scene?.getObjectByName(A);return this._createProxyObject(e)}getSplineEvents(){return this._eventManager?.handlers.Spline.splineEvents}emitEvent(A,e){(this.findObjectById(e)||this.findObjectByName(e))?.emitEvent(A)}emitEventReverse(A,e){(this.findObjectById(e)||this.findObjectByName(e))?.emitEventReverse(A)}addEventListener(A,e){this.canvas.addEventListener(A,e)}removeEventListener(A,e){this.canvas.removeEventListener(A,e)}setZoom(A){this._controls?.orbitControls instanceof Ct&&this._controls?.orbitControls.zoomOut(A)}setSize(A,e){this._viewportWidth=A,this._viewportHeight=e,this._viewportMode=2,this._resize()}dispose(){var A;this.disposed=!0,this._eventManager?.deactivate(),this._scene?.dispose(),this._sharedAssetsManager?.dispose(),this._rafId&&cancelAnimationFrame(this._rafId),this._proxyObjectCache.forEach(A=>{oZ.unsubscribe(A)}),this._renderer?.dispose(),this._sharedAssetsManager?.dispose(),this._resizeObserver&&this._resizeObserver.disconnect(),this.canvas.style.width="",this.canvas.style.height="",this._controls?.dispose(),(A=this.canvas).removeEventListener("pointerdown",ff,!0),A.removeEventListener("pointerdown",fg,!0),A.removeEventListener("pointermove",fg,!0),A.removeEventListener("pointerup",fm,!0),A.removeEventListener("pointercancel",fm,!0),A.removeEventListener("pointerleave",fm,!0),window.removeEventListener("keydown",fy,!0),window.removeEventListener("keyup",fx,!0)}_createProxyObject(A){if(null==A)return;if(this._proxyObjectCache.has(A.uuid))return this._proxyObjectCache.get(A.uuid);let e=oZ({name:A.name,uuid:A.uuid,visible:A.visible,intensity:A.intensity,position:A.position,rotation:A.rotation,scale:A.scale,emitEvent(e){A.dispatchEvent({type:"userEvent",eventName:e})},emitEventReverse(e){A.dispatchEvent({type:"userEvent",eventName:e,reverse:!0})}},(e,t)=>{"object"!=typeof A[e]&&Object.getOwnPropertyDescriptor(A,e)?.writable&&(A[e]=t),this.requestRender(),A.updateMatrix()});return this._proxyObjectCache.set(A.uuid,e),e}}}}]);