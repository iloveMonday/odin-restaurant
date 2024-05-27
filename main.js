(()=>{"use strict";var e={208:(e,n,t)=>{t.d(n,{A:()=>g});var o=t(601),r=t.n(o),a=t(314),c=t.n(a),i=t(417),d=t.n(i),s=new URL(t(33),t.b),l=new URL(t(877),t.b),u=new URL(t(163),t.b),p=c()(r()),m=d()(s),f=d()(l),h=d()(u);p.push([e.id,`@font-face {\n    font-family: 'script';\n    src: url(${m}) format("truetype");\n}\n\n@font-face{\n    font-family: 'poets';\n    src: url(${f}) format("truetype");\n}\n\n:root{\n    --brick-fade: linear-gradient(rgba(184, 39, 39, 0) 0%, rgba(184, 39, 39, 1) 40%);\n}\n\nbody{\n    margin: 0;\n    padding-bottom: 10%;\n    background-color: goldenrod;\n    background-image: url(${h});\n    font-family: Arial, Helvetica, sans-serif;\n}\n\n.clicked{\n    background-image: url(${h});\n    background-position: center;\n  }\n\n.conBox{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.contact-div{\n    width: 500px;\n    background-color: rgb(255, 187, 0);\n    border: 2px solid black;\n    padding: 5px;\n    margin: 50px;\n}\n\n.contact-div h3{\n    display: flex;\n    flex-direction: column;\n    margin: 0;\n    align-items: center;\n    border-radius: 5px;\n}\n\n#content{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\nh2{\n    font-family: 'script';\n    font-size: 50px;\n    font-weight: 300;\n    border-radius: 3px;\n    padding: 5px;\n    box-shadow: orange 20px;\n    border: 4px solid #495c2d;\n}\n\nh3{\n    font-family: 'script';\n    font-size: 40px;\n    font-weight: 400;\n}\n\nh4{\n    font-family: 'poets';\n    font-size: 20px;\n    font-weight: 200;\n    margin: 0;\n}\n\n.home-image{\n    border: 5px solid #495c2d;\n    height: 400px;\n    box-shadow: 10px 10px 115px rgb(255, 174, 0);\n    margin-bottom: 30px;\n}\n\n.home-text{\n    font-family: 'poets';\n    font-size: 18px;   \n}\n\n.menu-item{\n    display: grid;\n    width: 100%;\n    margin: 15px;\n}\n\n.navbar {\n    display: flex;\n    justify-content: center;\n    gap: 20px;\n    background-image: var(--brick-fade);\n    overflow: hidden;\n    position: fixed;\n    bottom: 0;\n    width: 100%;\n    height: 10%;\n  }\n\n  .navbar button{\n    font-family: 'script';\n    font-size: 42px;\n    font-weight: 500;\n    background-color: rgba(0, 255, 255, 0);\n    border: none;\n    background-size: 100px;\n    padding-top: 15px;\n  }\n\n  .navbar button:hover{\n    color: #acd40c    ;\n  }\n`,""]);const g=p},314:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(o)for(var i=0;i<this.length;i++){var d=this[i][0];null!=d&&(c[d]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);o&&c[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),n.push(l))}},n}},417:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var a={},c=[],i=0;i<e.length;i++){var d=e[i],s=o.base?d[0]+o.base:d[0],l=a[s]||0,u="".concat(s," ").concat(l);a[s]=l+1;var p=t(u),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)n[p].references++,n[p].updater(m);else{var f=r(m,o);o.byIndex=i,n.splice(i,0,{identifier:u,updater:f,references:1})}c.push(u)}return c}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var c=0;c<a.length;c++){var i=t(a[c]);n[i].references--}for(var d=o(e,r),s=0;s<a.length;s++){var l=t(a[s]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=d}}},659:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},540:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},56:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},113:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},33:(e,n,t)=>{e.exports=t.p+"3d111ba887a79b61412a.ttf"},877:(e,n,t)=>{e.exports=t.p+"22ae511e03fc2ed8d264.ttf"},163:(e,n,t)=>{e.exports=t.p+"0ce9bbc48d6779e7c2d8.png"}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var a=n[o]={id:o,exports:{}};return e[o](a,a.exports,t),a.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var o=n.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&(!e||!/^http(s?):/.test(e));)e=o[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var e=t(72),n=t.n(e),o=t(825),r=t.n(o),a=t(659),c=t.n(a),i=t(56),d=t.n(i),s=t(540),l=t.n(s),u=t(113),p=t.n(u),m=t(208),f={};f.styleTagTransform=p(),f.setAttributes=d(),f.insert=c().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=l(),n()(m.A,f),m.A&&m.A.locals&&m.A.locals;const h=t.p+"18af0883ef366dd3771c.png";function g(){const e=document.getElementById("home"),n=document.getElementById("menu"),t=document.getElementById("about");e.classList.add("clicked"),n.classList.remove("clicked"),t.classList.remove("clicked");const o=document.getElementById("content");o.innerHTML="";const r=new Image,a=document.createElement("h2"),c=document.createElement("p");return r.src=h,r.classList.add("home-image"),r.setAttribute("alt","divorce-court"),a.innerHTML="DIVORCE FOOD COURT",c.className="home-text",c.innerHTML="Come on down we're listening to Ska music.",o.appendChild(a),o.appendChild(r),o.appendChild(c),o}g(),home.addEventListener("click",(()=>{g()})),menu.addEventListener("click",(()=>{!function(){const e=document.getElementById("home"),n=document.getElementById("menu"),t=document.getElementById("about");e.classList.remove("clicked"),n.classList.add("clicked"),t.classList.remove("clicked");const o=document.getElementById("content");o.innerHTML="";const r=document.createElement("h2"),a=document.createElement("p");r.innerHTML="MENU PAGE",a.className="home-text",a.innerHTML="looks like meat's back on the menu boys";const c=document.createElement("div"),i=document.createElement("div"),d=document.createElement("div");function s(e){let n=document.createElement("h3");n.innerHTML=e[0],i.appendChild(n);for(let n=1;n<e.length;n+=1){let t=document.createElement("div");t.className="menu-item";let o=document.createElement("h4");o.innerHTML=e[n];let r=document.createElement("p");r.innerHTML=e[n+=1],t.appendChild(o),t.appendChild(r),i.appendChild(t)}}c.classList.add("menu-div"),i.classList.add("sandwiches-div"),d.classList.add("entrees-div"),s(["SANDWICHES","TOFURKEY SANDWICH","peppered tofurkey slices, lettuce, red onion, pickle, mayo, mustard","FISH WISH","fried flounder filet, bo’s dijon slaw, cajun remoulade","PB&J","you know it you love it get it and go","VEGAN CLUB","seitan, buffalo tofu, lettuce, tomato, just the good stuff"]),s(["ENTREES","PINKLES AND SLAMS","lil scar’s pickle and clam platter","A BANANA","this counts as a meal","NO NAME","a pile of sweet & sour seitan with sesame, broccoli and celery","CACIO E PEPE","i don’t remember what this is"]),c.appendChild(i),c.appendChild(d),o.appendChild(r),o.appendChild(a),o.appendChild(c)}()})),about.addEventListener("click",(()=>{!function(){const e=document.getElementById("home"),n=document.getElementById("menu"),t=document.getElementById("about");e.classList.remove("clicked"),n.classList.remove("clicked"),t.classList.add("clicked");const o=document.getElementById("content");o.innerHTML="";const r=document.createElement("h2"),a=document.createElement("p"),c=document.createElement("div");c.className="contact-box",r.innerHTML="CONTACT",a.innerHTML="you may not order ahead. <br> we may not answer. <br>can can try calling anyway.",a.className="home-text",o.appendChild(r),o.appendChild(a),o.appendChild(c);const i=[];class d{constructor(e,n,t){this.loc=e,this.num=n,this.email=t}}i.push(new d("Worcester","508-976-1234","woosox@yaya@gmail.com")),i.push(new d("Philadelphia","609-654-6495","ejawn4000@yaya.com"));for(let e=0;e<i.length;e++){const n=document.createElement("div");n.className="contact-div";const t=i[e];let o=document.createElement("h3");o.innerHTML=t.loc;let r=document.createElement("h4");r.innerHTML=t.num;let a=document.createElement("h4");a.innerHTML=t.email,n.appendChild(o),n.appendChild(r),n.appendChild(a),c.appendChild(n)}}()}))})()})();