import{r as e,o as t,b as n,d as s,n as a,I as r,F as o,e as l,u as i,t as c,f as u,h as d,i as m,j as p,k as v,M as f,l as g,w as h,T as y,c as b,g as w,m as _,A as k,p as x}from"./static/js/arco-design.js";import{d as S,A as E,B as O,a as C,C as I,D as T,F as L,N as M,b as A,s as F,S as j,c as q}from"./static/js/pixi.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const n of e)if("childList"===n.type)for(const e of n.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?t.credentials="include":"anonymous"===e.crossOrigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const D=(e,t)=>{const n=e.__vccOpts||e;for(const[s,a]of t)n[s]=a;return n},P=D({__name:"Cursor",setup(r){const o=e(0),l=e(0);document.addEventListener("mousemove",(function(e){o.value=e.clientX,l.value=e.clientY,document.querySelector("#cursor .inner").style.opacity=1}),!1),document.body.onmouseleave=function(){document.querySelector("#cursor .inner").style.opacity=0},document.body.onmouseenter=function(){document.querySelector("#cursor .inner").style.opacity=1},document.body.onclick=function(){let e=document.createElement("div");e.classList.add("click"),e.style.left=o.value-25+"px",e.style.top=l.value-25+"px";let t=document.createElement("div"),n=360*Math.random();t.style.transform="rotate("+n+"deg)",t.classList.add("inner"),e.appendChild(t);let s=document.createElement("div"),a=360*Math.random();s.style.transform="rotate("+a+"deg)",s.classList.add("inner"),e.appendChild(s),document.body.appendChild(e),setTimeout((()=>{t.style.transform="rotate("+(n+180)+"deg)",s.style.transform="rotate("+(a+180)+"deg)"}),1),setTimeout((()=>{e.remove()}),500)},document.oncontextmenu=function(){return!1};let i=window.document.body;return window.document.body.onmouseover=function(e){i=e.target,"A"===i.tagName||"BUTTON"===i.tagName||i.classList.contains("css-cursor-hover-enabled")||i.parentElement.classList.contains("css-cursor-hover-enabled")||i.parentElement.parentElement.classList.contains("css-cursor-hover-enabled")?document.querySelector("#cursor").classList.add("hover"):document.querySelector("#cursor").classList.remove("hover")},(e,r)=>(t(),n("div",{id:"cursor",class:"cursor",style:a({transform:`translate(${o.value}px, ${l.value}px)`})},r[0]||(r[0]=[s("div",{class:"inner"},null,-1)]),4))}},[["__scopeId","data-v-c0e04aea"]]),N={title:"o0w0b の 主页",description:"o0w0b的主页",favicon:"/img/favicon.jpg",author:"开心就好",keywords:"",ICP:"",manifest:{name:"o0w0b の 主页",short_name:"o0w0b の 主页",description:"o0w0b的主页",theme_color:"#128AFA",start_url:"/",id:"Homepage",icons:[{src:"/img/favicon.jpg",sizes:"512x512",purpose:"any maskable"},{src:"/img/favicon.jpg",sizes:"144x144"}]},level:1,exp:23,nextExp:37,iconfont:"https://at.alicdn.com/t/c/font_4677609_ip3vvg4e9q.js",dock:[{name:"Bing",href:"https://www.bing.com",imgSrc:"/bottom_icon/Bing_Icon.png"}],contact:[{name:"gitee",href:"https://gitee.com",iconfont:"icon-gitee"},{name:"Github",href:"https://github.com",iconfont:"icon-GitHub"},{name:"Vercel",href:"https://vercel.com",iconfont:"icon-Vercel"},{name:"Cloudflare",href:"https://dash.cloudflare.com",iconfont:"icon-Cloudflare_B"},{name:"bilibili",href:"https://space.bilibili.com",iconfont:"icon-bilibili"}],task:{name:"o0w0b のBlog",href:"https://www.o0w0b.top"}},B={class:"footer"},U={class:"project-box"},Y=["href"],R=["src"],W={class:"time"},$=D({__name:"Footer",setup(a){const m=r.addFromIconFontCn({src:N.iconfont}),p=e((new Date).getHours()+":"+(new Date).getMinutes()),v=e=>e<10?"0"+e:e;return setInterval((()=>{p.value=v((new Date).getHours())+":"+v((new Date).getMinutes())}),1e3),(e,a)=>(t(),n("div",B,[s("div",U,[(t(!0),n(o,null,l(i(N).dock,(e=>(t(),n("a",{href:e.href,class:"project css-cursor-hover-enabled"},[e.imgSrc?(t(),n("img",{key:0,src:e.imgSrc,alt:""},null,8,R)):u("",!0),e.iconfont?(t(),d(i(m),{key:1,type:e.iconfont},null,8,["type"])):u("",!0),s("span",null,c(e.name),1)],8,Y)))),256))]),s("div",W,[a[0]||(a[0]=s("p",null,"△×+○",-1)),s("span",null,c(p.value),1)])]))}},[["__scopeId","data-v-8a200b33"]]),H={class:"level-box"},z={class:"container"},V={class:"level css-cursor-hover-enabled"},X={class:"right"},G={class:"name"},K=D({__name:"Level",setup(r){const o=e(N.exp),l=e(N.nextExp);return(e,r)=>{const u=m("a-progress");return t(),n("div",H,[s("div",z,[s("div",V,[r[0]||(r[0]=s("span",null,"Lv.",-1)),s("p",null,c(i(N).level),1)]),s("div",X,[s("span",G,c(i(N).author),1),s("div",null,[p(u,{percent:o.value/l.value,"show-text":!1,color:o.value>=l.value?"#ffe433":"#89d5fd",trackColor:"#535E67"},null,8,["percent","color"]),s("p",{style:a({color:o.value>=l.value?"#ffe433":"#66E0FE"})},c(o.value>=l.value?"MAX":o.value+"/"+l.value),5)])])])])}}},[["__scopeId","data-v-0bd440b5"]]),J={class:"toolbox-box"},Q=["src"],Z=D({__name:"Toolbox",props:["l2dOnly"],emits:["switch"],setup(r,{emit:o}){const l=o,i=r,u=198+2*N.level,d=e(u-Math.trunc(u*(((new Date).getTime()-new Date(`${(new Date).getFullYear()}-${(new Date).getMonth()+1}-${(new Date).getDate()} 00:00:00`))/864e5))),h=e(Math.trunc(N.level*(N.nextExp+1)/(N.exp+1)*(new Date).getSeconds()*2233*9+2112)),y=e(Math.trunc(N.level*(N.nextExp+1)/(N.exp+1)*(new Date).getSeconds()*37*9+2112)),b=e("/img/max.png"),w=e(!1),_=e(window.matchMedia("(hover: none)").matches),k=()=>{f.open({title:"关于",content:()=>[g("p",{},"o0w0b の 主页"),N.ICP?[g("br",{},""),g("a",{href:"https://beian.miit.gov.cn/",target:"_blank"},N.ICP)]:null],footer:!1})},x=()=>{b.value="/img/min.png"===b.value?"/img/max.png":"/img/min.png",l("switch")};return document.body.addEventListener("click",(()=>{i.l2dOnly&&_.value?w.value=!w.value:w.value=!0})),window.matchMedia("(hover: none)").addListener((e=>{_.value=e.matches})),setInterval((()=>{d.value++}),6e4),(e,r)=>{const o=m("icon-info-circle");return t(),n("div",J,[s("div",{class:"toolbox",style:a({transform:(i.l2dOnly?"translateY(-300px)":"translateY(0)")+" skew(-10deg)",transition:"transform 0.3s "+(i.l2dOnly?"ease-in":"ease-out")})},[r[0]||(r[0]=s("img",{src:"/img/ap.png",alt:""},null,-1)),s("span",null,c(d.value+"/"+u),1)],4),s("div",{class:"toolbox",style:a({transform:(i.l2dOnly?"translateY(-300px)":"translateY(0)")+" skew(-10deg)",transition:"transform 0.3s "+(i.l2dOnly?"ease-in":"ease-out")})},[r[1]||(r[1]=s("img",{src:"/img/gold.png",alt:""},null,-1)),s("span",null,c(h.value),1)],4),s("div",{class:"toolbox",style:a({transform:(i.l2dOnly?"translateY(-300px)":"translateY(0)")+" skew(-10deg)",transition:"transform 0.3s "+(i.l2dOnly?"ease-in":"ease-out")})},[r[2]||(r[2]=s("img",{src:"/img/pyroxene.png",alt:""},null,-1)),s("span",null,c(y.value),1)],4),s("a",{class:"about toolbox",onClick:k,style:a({transform:(i.l2dOnly?"translateY(-300px)":"translateY(0)")+" skew(-10deg)",transition:"transform 0.3s "+(i.l2dOnly?"ease-in":"ease-out")})},[p(o,{class:"css-cursor-hover-enabled"})],4),s("a",{class:v(["l2d toolbox",{canHover:!_.value}]),onClick:x,style:a({transform:(i.l2dOnly?"translateY(-76px)":"translateY(0)")+" skew(-10deg)",transition:"transform 0.3s "+(i.l2dOnly?"ease-in":"ease-out")+",opacity 0.6s",opacity:!i.l2dOnly||w.value&&_.value?1:0})},[s("img",{alt:"",src:b.value},null,8,Q)],6)])}}},[["__scopeId","data-v-507ab919"]]),ee={class:"contact-box"},te=["href"],ne=["src"],se=D({__name:"Contact",setup(e){const a=r.addFromIconFontCn({src:N.iconfont});return(e,r)=>(t(),n("div",ee,[(t(!0),n(o,null,l(i(N).contact,(e=>(t(),n("a",{href:e.href,class:"contact css-cursor-hover-enabled"},[e.imgSrc?(t(),n("img",{key:0,src:e.imgSrc,alt:""},null,8,ne)):u("",!0),e.iconfont?(t(),d(i(a),{key:1,type:e.iconfont},null,8,["type"])):u("",!0),s("span",null,c(e.name),1)],8,te)))),256))]))}},[["__scopeId","data-v-932ded7d"]]),ae="/img/transfrom.webm",re="/img/Tran_Icon.png",oe=["name"],le={key:0,autoplay:"",src:ae,class:"bg"},ie={key:0,class:"curtain"},ce=D({__name:"Task",props:["l2dOnly"],setup(a){const r=e(!1),l=e(!1),c=a,d=()=>{l.value=!0,setTimeout((()=>{r.value=!0,setTimeout((()=>{window.open(N.task.href)}),1e3),setTimeout((()=>{r.value=!1,l.value=!1}),500*Math.floor(2*Math.random()+4))}),1e3)};return(e,a)=>(t(),n(o,null,[p(y,{name:"down2"},{default:h((()=>[c.l2dOnly?u("",!0):(t(),n("div",{key:0,name:i(N).task.name,class:"task css-cursor-hover-enabled",onClick:d},null,8,oe))])),_:1}),p(y,{name:"curtain"},{default:h((()=>[l.value?(t(),n("video",le)):u("",!0)])),_:1}),p(y,{name:"curtain"},{default:h((()=>[r.value?(t(),n("div",ie,a[0]||(a[0]=[s("img",{src:re,alt:""},null,-1)]))):u("",!0)])),_:1})],64))}},[["__scopeId","data-v-bf96f01f"]]),ue={class:"loading_wrapper"},de={ref:"loadingImg",class:"avatar_img bounce-top"},me=["src"],pe={class:"hide"},ve=["src"],fe=["src"],ge=["src"],he=["src"],ye={class:"progress_wrapper"},be={class:"percent"},we=D({__name:"Loading",props:["percent"],setup(a){const r=a,o=e("https://webcnstatic.yostar.net/ba_cn_web/prod/web/assets/avatar2.b84283e9.png"),l=["https://webcnstatic.yostar.net/ba_cn_web/prod/web/assets/avatar1.c18ce793.png","https://webcnstatic.yostar.net/ba_cn_web/prod/web/assets/avatar2.b84283e9.png","https://webcnstatic.yostar.net/ba_cn_web/prod/web/assets/avatar3.c9d108f1.png","https://webcnstatic.yostar.net/ba_cn_web/prod/web/assets/avatar4.8656c817.png"];document.oncontextmenu=function(){return!1};let i=0;return o.value=l[i%4],i++,setInterval((()=>{o.value=l[i%4],i++}),2e3),(e,a)=>(t(),n("div",ue,[s("div",de,[s("img",{class:"loading",src:o.value,alt:""},null,8,me),s("div",pe,[s("img",{src:l[0],alt:""},null,8,ve),s("img",{src:l[1],alt:""},null,8,fe),s("img",{src:l[2],alt:""},null,8,ge),s("img",{src:l[3],alt:""},null,8,he),a[0]||(a[0]=s("video",{autoplay:"",src:ae},null,-1)),a[1]||(a[1]=s("img",{src:re,alt:""},null,-1))])],512),s("div",ye,[a[2]||(a[2]=s("h1",{class:"title"},"connecting...",-1)),s("div",be,c(Math.floor(100*r.percent)+"%"),1)])]))}},[["__scopeId","data-v-a34684ba"]]),_e="/l2d/arrow.png",ke={AlphaFilter:E,BlurFilter:O,BlurFilterPass:C,ColorMatrixFilter:I,DisplacementFilter:T,FXAAFilter:L,NoiseFilter:M};Object.entries(ke).forEach((([e,t])=>{Object.defineProperty(ke,e,{get:()=>(S("7.1.0",`filters.${e} has moved to ${e}`),t)})}));const xe={key:0,id:"change"},Se=D({__name:"Background",props:["l2dOnly"],setup(e){const a=e;let r,o=0;const l=new A({width:2560,height:1440,backgroundAlpha:0});document.querySelector("#background").appendChild(l.view);const i=e=>{switch(F.stopAll(),l.stage.removeChild(r),e){case"-":o=0===o?Ae.length-1:o-1;break;case"+":o=o===Ae.length-1?0:o+1;break;default:o=e}r=new j(Ae[o].spineData),l.stage.addChild(r),r.state.hasAnimation("Idle_01")&&(r.scale.set(.85),r.state.setAnimation(0,"Idle_01",!0),r.state.timeScale=1,r.autoUpdate=!0,r.y=1440,r.x=1280),F.play(Fe[o])};return i(o),(e,r)=>a.l2dOnly?u("",!0):(t(),n("div",xe,[s("img",{class:"css-cursor-hover-enabled",onClick:r[0]||(r[0]=e=>i("-")),src:_e,alt:""}),s("img",{class:"css-cursor-hover-enabled",onClick:r[1]||(r[1]=e=>i("+")),src:_e,alt:""})]))}},[["__scopeId","data-v-27a1067e"]]);var Ee={exports:{}};
/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT */const Oe=w(Ee.exports=function(){var e,t,n={version:"0.2.0"},s=n.settings={minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,showSpinner:!0,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};function a(e,t,n){return e<t?t:e>n?n:e}function r(e){return 100*(-1+e)}function o(e,t,n){var a;return(a="translate3d"===s.positionUsing?{transform:"translate3d("+r(e)+"%,0,0)"}:"translate"===s.positionUsing?{transform:"translate("+r(e)+"%,0)"}:{"margin-left":r(e)+"%"}).transition="all "+t+"ms "+n,a}n.configure=function(e){var t,n;for(t in e)void 0!==(n=e[t])&&e.hasOwnProperty(t)&&(s[t]=n);return this},n.status=null,n.set=function(e){var t=n.isStarted();e=a(e,s.minimum,1),n.status=1===e?null:e;var r=n.render(!t),c=r.querySelector(s.barSelector),u=s.speed,d=s.easing;return r.offsetWidth,l((function(t){""===s.positionUsing&&(s.positionUsing=n.getPositioningCSS()),i(c,o(e,u,d)),1===e?(i(r,{transition:"none",opacity:1}),r.offsetWidth,setTimeout((function(){i(r,{transition:"all "+u+"ms linear",opacity:0}),setTimeout((function(){n.remove(),t()}),u)}),u)):setTimeout(t,u)})),this},n.isStarted=function(){return"number"==typeof n.status},n.start=function(){n.status||n.set(0);var e=function(){setTimeout((function(){n.status&&(n.trickle(),e())}),s.trickleSpeed)};return s.trickle&&e(),this},n.done=function(e){return e||n.status?n.inc(.3+.5*Math.random()).set(1):this},n.inc=function(e){var t=n.status;return t?("number"!=typeof e&&(e=(1-t)*a(Math.random()*t,.1,.95)),t=a(t+e,0,.994),n.set(t)):n.start()},n.trickle=function(){return n.inc(Math.random()*s.trickleRate)},e=0,t=0,n.promise=function(s){return s&&"resolved"!==s.state()?(0===t&&n.start(),e++,t++,s.always((function(){0==--t?(e=0,n.done()):n.set((e-t)/e)})),this):this},n.render=function(e){if(n.isRendered())return document.getElementById("nprogress");u(document.documentElement,"nprogress-busy");var t=document.createElement("div");t.id="nprogress",t.innerHTML=s.template;var a,o=t.querySelector(s.barSelector),l=e?"-100":r(n.status||0),c=document.querySelector(s.parent);return i(o,{transition:"all 0 linear",transform:"translate3d("+l+"%,0,0)"}),s.showSpinner||(a=t.querySelector(s.spinnerSelector))&&p(a),c!=document.body&&u(c,"nprogress-custom-parent"),c.appendChild(t),t},n.remove=function(){d(document.documentElement,"nprogress-busy"),d(document.querySelector(s.parent),"nprogress-custom-parent");var e=document.getElementById("nprogress");e&&p(e)},n.isRendered=function(){return!!document.getElementById("nprogress")},n.getPositioningCSS=function(){var e=document.body.style,t="WebkitTransform"in e?"Webkit":"MozTransform"in e?"Moz":"msTransform"in e?"ms":"OTransform"in e?"O":"";return t+"Perspective"in e?"translate3d":t+"Transform"in e?"translate":"margin"};var l=function(){var e=[];function t(){var n=e.shift();n&&n(t)}return function(n){e.push(n),1==e.length&&t()}}(),i=function(){var e=["Webkit","O","Moz","ms"],t={};function n(e){return e.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,(function(e,t){return t.toUpperCase()}))}function s(t){var n=document.body.style;if(t in n)return t;for(var s,a=e.length,r=t.charAt(0).toUpperCase()+t.slice(1);a--;)if((s=e[a]+r)in n)return s;return t}function a(e){return e=n(e),t[e]||(t[e]=s(e))}function r(e,t,n){t=a(t),e.style[t]=n}return function(e,t){var n,s,a=arguments;if(2==a.length)for(n in t)void 0!==(s=t[n])&&t.hasOwnProperty(n)&&r(e,n,s);else r(e,a[1],a[2])}}();function c(e,t){return("string"==typeof e?e:m(e)).indexOf(" "+t+" ")>=0}function u(e,t){var n=m(e),s=n+t;c(n,t)||(e.className=s.substring(1))}function d(e,t){var n,s=m(e);c(e,t)&&(n=s.replace(" "+t+" "," "),e.className=n.substring(1,n.length-1))}function m(e){return(" "+(e.className||"")+" ").replace(/\s+/gi," ")}function p(e){e&&e.parentNode&&e.parentNode.removeChild(e)}return n}()),Ce={key:0},Ie={};const Te=_(D({__name:"App",setup(a){const r=e(!0),l=e(1),i=e(!1);Oe.start();const c=setInterval((()=>{l.value=Oe.status,"complete"===document.readyState&&!0===window.l2d_complete&&(Oe.done(),l.value=1,setTimeout((()=>{r.value=!1}),2e3),clearInterval(c))}),1),m=()=>{i.value=!i.value};return(e,a)=>(t(),n(o,null,[p(y,{name:"loading"},{default:h((()=>[r.value?(t(),d(we,{key:0,percent:l.value},null,8,["percent"])):u("",!0)])),_:1}),a[1]||(a[1]=s("div",{id:"background"},null,-1)),r.value?u("",!0):(t(),n("main",Ce,[p(Se,{l2dOnly:i.value},null,8,["l2dOnly"]),p(y,{name:"up"},{default:h((()=>[i.value?u("",!0):(t(),d(K,{key:0}))])),_:1}),p(Z,{l2dOnly:i.value,onSwitch:m},null,8,["l2dOnly"]),p(y,{name:"left"},{default:h((()=>[i.value?u("",!0):(t(),d(se,{key:0}))])),_:1}),p(ce,{l2dOnly:i.value},null,8,["l2dOnly"]),p(y,{name:"down"},{default:h((()=>[i.value?u("",!0):(t(),d($,{key:0}))])),_:1}),a[0]||(a[0]=s("div",{id:"curtain"},null,-1))])),p(P)],64))}},[["__scopeId","data-v-e0a60d21"]]));if(Te.use(k),Te.use(x),Te.mount("#app"),"serviceWorker"in navigator){const e=function(e={}){const{immediate:t=!1,onNeedRefresh:n,onOfflineReady:s,onRegistered:a,onRegisteredSW:r,onRegisterError:o}=e;let l,i;return i=async function(){if("serviceWorker"in navigator){const{Workbox:e}=await function(e,t,n){if(!t||0===t.length)return e();const s=document.getElementsByTagName("link");return Promise.all(t.map((e=>{if((e=function(e){return"/"+e}(e))in Ie)return;Ie[e]=!0;const t=e.endsWith(".css"),a=t?'[rel="stylesheet"]':"";if(n)for(let n=s.length-1;n>=0;n--){const a=s[n];if(a.href===e&&(!t||"stylesheet"===a.rel))return}else if(document.querySelector(`link[href="${e}"]${a}`))return;const r=document.createElement("link");return r.rel=t?"stylesheet":"modulepreload",t||(r.as="script",r.crossOrigin=""),r.href=e,document.head.appendChild(r),t?new Promise(((t,n)=>{r.addEventListener("load",t),r.addEventListener("error",(()=>n(new Error(`Unable to preload CSS for ${e}`))))})):void 0}))).then((()=>e())).catch((e=>{const t=new Event("vite:preloadError",{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}))}((()=>import("./static/js/workbox-window.prod.es5.js")),[]);l=new e("/sw.js",{scope:"/",type:"classic"}),l.addEventListener("activated",(e=>{(e.isUpdate||e.isExternal)&&window.location.reload()})),l.addEventListener("installed",(e=>{e.isUpdate||null==s||s()})),l.register({immediate:t}).then((e=>{r?r("/sw.js",e):null==a||a(e)})).catch((e=>{null==o||o(e)}))}}(),async(e=!0)=>{await i}}({onNeedRefresh(){f.open({title:"通知",content:"站点已更新，刷新即可访问最新内容！",onOk:()=>{e(!0)}})}})}window.l2d_complete=!1,setInterval((()=>{document.querySelectorAll("a[href]:not(.tag)").forEach((e=>{e.classList.add("tag"),e.addEventListener("click",(async t=>{const n=e.getAttribute("href");t.preventDefault(),document.querySelector("#curtain").style.display="block",setTimeout((()=>{let e=document.createElement("a");e.href=n,e.target="_blank",e.click()}),900),setTimeout((()=>document.querySelector("#curtain").style.display=""),3e3)}))}))}),1e3);const Le=["/l2d/shiroko/LobbyShiroko_multi.skel","/l2d/mikoto/CH9998_home.skel","/l2d/hina_swimsuit/CH0063_home.skel","/l2d/aris/Aris_home.skel"],Me=["/l2d/shiroko/Someday_-sometime_1.mp3","/l2d/mikoto/Theme_21_1.mp3","/l2d/hina_swimsuit/Someday_-sometime.mp3","/l2d/aris/Theme_21.mp3"];let Ae=[],Fe=[];!async function(){for(let e of Le)Ae.push(await q.load(e));for(let e of Me)F.add(e.split("/").pop().split(".")[0],{url:e,loop:!0}),Fe.push(e.split("/").pop().split(".")[0]);window.l2d_complete=!0}();
