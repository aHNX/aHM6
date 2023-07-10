/* Functions */
function qS(e){return document.querySelector(e)}
function qSA(e){return document.querySelectorAll(e)}
function eqS(e,t){return e.querySelector(t)}
function eqSA(e,t){return e.querySelectorAll(t)}
function cE(e){return document.createElement(e)}
function ecE(e,t){return e.createElement(t)}
function gCn(e){return document.getElementByClassName(e)}
function egCn(e,t){return e.getElementByClassName(t)}
function gId(e){return document.getElementById(e)}
function egId(e,t){return e.getElementById(t)}
function gCN(e){return document.getElementsByClassName(e)}
function egCN(e,t){return e.getElementsByClassName(t)}
function gTN(e){return document.getElementsByTagName(e)}
function egTN(e,t){return e.getElementsByTagName(t)}
function gTn(e){return document.getElementByTagName(e)}
function egTn(e){return e.getElementByTagName(b)}
function dW(e){return document.write(e)}
function gAt(e,t){return e.getAttribute(t)}
function sAt(e,t,n){return e.setAttribute(t,n)}
function aC(e,t){return e.classList.add(t)}
function tC(e,t){return e.classList.toggle(t)}
function rC(t,n){return t.classList.remove(n)}
function aP(e,t){return e.addProperty(t)}
function rP(e,t){return e.removeProperty(t)}
function aE(e,t,n){return e.addEventListener(t,n)}
function hide(e){return e.style.display="none"}
function show(e,t){return e.style.display=t}
function textC(e){return e.textContent}
function iT(e){return e.innerText}
function iH(e){return e.innerHTML}
function sLS(t,n){localStorage.setItem(t,n)}
function gLS(t){return localStorage.getItem(t)}
function rLS(t){localStorage.removeItem(t)}
function sSS(t,n){sessionStorage.setItem(t,n)}
function gSS(t){return sessionStorage.getItem(t)}
function rSS(t){sessionStorage.removeItem(t)}
function rdm(t){return t[Math.floor(Math.random()*t.length)]}
/* Load CSS */
function ldCSS(e,t,n){let r=cE("link");r.id=t,r.rel="stylesheet",r.type="text/css",r.href=e,n&&(r.onload=n),document.head.appendChild(r)}
/* Load JS */
function ldJS(e,t,n,r,u){let i=cE("script");i.id=t,i.async=n,i.src=e,u&&(i.onload=u),qS(r).appendChild(i)}
/* Insert After */
function insA(e,t){var n=t.parentNode;n.lastChild==t?n.appendChild(e):n.insertBefore(e,t.nextSibling)}
/* Middle AD */
function midAD(a,b){for(var c=0;c<b.length;c++){var d=qS("#postBody"),e=gId(b[c][0]),f=eqSA(d,a);0<f.length?insA(e,f[b[c][1]]):null!=e&&e.remove()}}
/* Recursive AD */
function recurAD(e,n){var l=qS("#postBody"),r=n.ads?gId(n.ads):null,i=eqSA(l,e);if(0<i.length&&null!=r)for(var o,u=0;u<i.length;u++)u%n.every==0&&0!==u&&((o=cE("div")).innerHTML=r?r.innerHTML:n.innerHTML||"",insA(o,i[u])),u==i.length-1&&null!=r&&r.remove();else null!=r&&r.remove()}
/* Modes [ Light/Dark/System ] */
function onMode(o){let d=gLS("wM");function e(o,d){document.body.classList.remove(o,"autoMode","autoLight","autoDark"),aC(document.body,d),sLS("wM",d)}function t(o,d){document.body.classList.remove(o,"lightMode","darkMode"),aC(document.body,d),sLS("wM",d)}function a(){document.body.classList.remove("autoLight","autoDark","lightMode","darkMode"),aC(document.body,"autoMode"),window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?t("autoLight","autoDark"):t("autoDark","autoLight"),rLS("wM")}"lightMode"===d?e("darkMode","lightMode"):"darkMode"===d?e("lightMode","darkMode"):a(),"lightMode"==o?e("darkMode","lightMode"):"darkMode"==o?e("lightMode","darkMode"):"autoMode"==o&&a()}setInterval(onMode,0);
/* Other Mode */
function tsMode(a,b,c){tC(document.body,a);let d;document.body.classList.contains(a)&&(d=c),sLS(b,d)}
/* Shake */
function shake(a){"vibrate"in navigator&&navigator.vibrate([a])}
/* Notification */
function tsNotif(a){qS(".Aa").innerHTML="<span>"+a+"</span>"}
/* Copy Function */
function tscopy(a){qS(a).select(),document.execCommand("copy"),tsNotif(TS.Ts.copiedText),shake(40)}
/* Encode-Decode */
!function(){function _(_,r){return _0x178b(r- -355,_)}var r=_0x55e1();function n(_,r){return _0x178b(_- -505,r)}for(;;)try{if(873854==-parseInt(n(-125,-92))*(parseInt(_(23,39))/2)+parseInt(n(-71,-77))/3*(-parseInt(n(-106,-125))/4)+parseInt(_(51,51))/5*(-parseInt(_(19,32))/6)+parseInt(_(-1,26))/7+-parseInt(_(71,83))/8+-parseInt(_(69,55))/9*(-parseInt(_(43,57))/10)+parseInt(n(-83,-64))/11)break;r.push(r.shift())}catch(t){r.push(r.shift())}}();var ED={kS:_0x51f4a5(870,889)+_0x51f4a5(869,863)+"osqeigwlhvyzukx3508749216+/=",en:function(_){function r(_,r){return _0x178b(_-992,r)}var n,t,$,e,u,i,f="",o=0;for(_=this[r(1429,1428)](_);o<_[r(1424,1394)];)$=(i=_[c(596,627)](o++))>>2,e=(3&i)<<4|(n=_[r(1400,1393)](o++))>>4,u=(15&n)<<2|(t=_[c(596,609)](o++))>>6,i=63&t,isNaN(n)?u=i=64:isNaN(t)&&(i=64),f=f+this.kS.charAt($)+this.kS.charAt(e)+this.kS[r(1427,1408)](u)+this.kS.charAt(i);function c(_,r){return _0x178b(_-188,r)}return f},de:function(_){var r,n,t,$,e,u="",i=0;for(_=_[f(1088,1119)](/[^A-Za-z0-9\+\/\=]/g,"");i<_.length;)r=this.kS.indexOf(_.charAt(i++))<<2|(t=this.kS.indexOf(_.charAt(i++)))>>4,n=(15&t)<<4|($=this.kS[o(1024,1013)](_[f(1144,1156)](i++)))>>2,t=(3&$)<<6|(e=this.kS[f(1125,1148)](_[o(1043,1053)](i++))),u+=String.fromCharCode(r),64!=$&&(u+=String[o(1039,1032)](n)),64!=e&&(u+=String[f(1140,1172)](t));function f(_,r){return _0x178b(_-709,r)}function o(_,r){return _0x178b(_-608,r)}return this.u8_de(u)},u8_en:function(_){function r(_,r){return _0x178b(r- -258,_)}_=_.replace(/\r\n/g,"\n");for(var n="",t=0;t<_[r(180,174)];t++){var $=_[r(133,150)](t);$<128?n+=String[r(165,173)]($):(127<$&&$<2048?n+=String[r(146,173)]($>>6|192):(n+=String[_0x178b(431,839)]($>>12|224),n+=String[r(169,173)]($>>6&63|128)),n+=String[r(198,173)](63&$|128))}return n},u8_de:function(_){for(var r="",n=0,t=c1=c2=0;n<_.length;)(t=_[e(700,688)](n))<128?(r+=String.fromCharCode(t),n++):191<t&&t<224?(c2=_[$(-8,22)](n+1),r+=String[$(15,46)]((31&t)<<6|63&c2),n+=2):(c2=_.charCodeAt(n+1),c3=_[e(700,717)](n+2),r+=String[e(723,737)]((15&t)<<12|(63&c2)<<6|63&c3),n+=3);function $(_,r){return _0x178b(_- -416,r)}function e(_,r){return _0x178b(_-292,r)}return r}};function _0x51f4a5(_,r){return _0x178b(r-465,_)}function _0x55e1(){var _=["160GWrUHi","","","","LHVYZUKXmbdrtnfjcap","524usdNgG","","","","","","","610PAtQkJ","","charCodeAt","","9uXEtTy","","675880bQrepP","","","","indexOf","","","","","","31401524ZYnZiy","","MBDRTNFJCAPOSQEIGW","","","","","","","fromCharCode","length","","18027onqsIt","charAt","","u8_en","3923688UGcGhI","","","","","","","","","","replace","3260yCibet","3512376kRaahX","","","","","","49758EOuVVI","","","","","",""];return(_0x55e1=function(){return _})()}function _0x178b(_,r){var n=_0x55e1();return(_0x178b=function(_,r){return n[_-=371]})(_,r)}
