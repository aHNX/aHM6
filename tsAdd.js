/* Show/Hide [ Header,Footer ] */
prevScrollpos=window.pageYOffset,window.onscroll=function(){var e=window.pageYOffset;prevScrollpos>e?(qS("header").style.top="15px",qS(".Mobile_Menu_Widget").style.bottom="15px"):(qS("header").style.top="-60px",qS(".Mobile_Menu_Widget").style.bottom="-60px"),prevScrollpos=e};

/* Image */
qSA(".onPost .postEntry img").forEach(a=>{aC(a,"lazyImg"),sAt(a,"s",a.src.replace(/\/s[0-9]+(\-c)?/,"/s1280-rw-e30")),sAt(a,"src","data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="),sAt(a,"alt",TS.Ts.pageTitle),sAt(a,"onclick","return false")});function wrap(t,r,A){qSA(r).forEach(a=>{a.outerHTML=t+a.outerHTML+A})}wrap('<div class="zmImg">',".postEntry img","</div>");qSA(".zmImg").forEach(a=>{a.onclick=function(){tC(this,"s"),event.preventDefault()}});

/* Others */
/* Auto Encode-Decode */
qSA(".ED").forEach(a=>{sAt(a,gAt(a,"ed"),ED.de(gAt(a,gAt(a,"ed"))))});
/* Auto Safelink */
qSA(".Safe").forEach(a=>{sAt(a,gAt(a,"safe"),TS.Ts.safePage+"?u="+gAt(a,gAt(a,"safe")))});
/* Auto Safe With Password */
qSA(".Psafe").forEach(a=>{aE(a,"click",function(){ED.de(gAt(this,"p"))==prompt("Please Enter Your Password","")?(tsNotif("🙂 Password Unlocked!"),window.open(ED.de(gAt(this,"u")),gAt(this,"target"))):(window.stop(),tsNotif("⚠️ Incorrect Password!"),shake(45))})});
/* Auto Template Demo */
qSA(".Tdemo").forEach(a=>{sAt(a,"u",TS.Ts.tdemoPage+"?u="+gAt(a,"u")+"&d="+gAt(a,"d")),aE(a,"click",function(){window.open(gAt(this,"u"),gAt(this,"target"))})});
/* Open Link Onclick */
qSA(".Obl").forEach(a=>{aE(a,"click",function(){window.open(gAt(this,gAt(this,"open")),gAt(this,"target"))})});
/* Download */
function tsDL(e,t,i){if(i="string"==typeof i?i:"text/plain",t="string"==typeof t?t:"File_"+(new Date).getTime()+".txt",e){if(i=new Blob([e],{type:i}),navigator.msSaveBlob)return navigator.msSaveBlob(i,t);{let n=window.URL.createObjectURL(i),o=cE("a");aC(o,"hidden"),o.href=n,o.download=t,document.body.appendChild(o),o.click(),o.remove(),window.URL.revokeObjectURL(n)}}}
/* Script Demo */
function HD(a,b){shake(40);var c="<meta content='width=device-width,initial-scale=1,user-scalable=1,minimum-scale=1,maximum-scale=5' name='viewport'/><style>body{padding:15px;line-height:1.6}html{padding-right:25px}</style><b>Demo :</b> "+b+"\n"+a;c=new Blob([c],{type:"text/html"}),window.navigator.msSaveOrOpenBlob?window.navigator.msSaveOrOpenBlob(blobObject,fileName):(c=window.URL.createObjectURL(c),window.open(c,"_blank"),window.URL.revokeObjectURL(c))}
/* Lazy YouTube */
function YTIframe(e){var a=cE("iframe");sAt(a,"src","https://www.youtube.com/embed/"+gAt(e,"videoID")+"?autoplay=1&rel=0"),sAt(a,"frameborder","0"),sAt(a,"allowfullscreen",""),sAt(a,"allow","accelerometer;autoplay;encrypted-media;gyroscope;picture-in-picture"),e.parentNode.replaceChild(a,e)}function YTPlayer(){qSA(".YT-Player").forEach(e=>{var a=gAt(e,"videoID"),r=cE("div");sAt(r,"videoID",a);var l=cE("img");sAt(l,"alt",""),l.src="https://i.ytimg.com/vi/ID/hqdefault.jpg".replace("ID",a),r.appendChild(l);var i=cE("div");sAt(i,"class","Play"),r.appendChild(i),r.onclick=function(){YTIframe(this)},e.appendChild(r)})}aE(document,"DOMContentLoaded",YTPlayer);
/* Open Share Navigation */
function openShare(){navigator.share({title:TS.Ts.pageTitle,text:TS.Ts.pageTitle,url:TS.Ts.pageURL})}
/* Show/Hide */
function SH(a){var b=qS(a).style;"none"===window.getComputedStyle(qS(a)).display?b.display="block":b.display="none"}
/* Read File as Image */
function rFI(a,b){let c=a.files;if(0==c.length)return;let d=c[0],e=new FileReader;e.onload=c=>{let f=cE("img");f.src=e.result,b.appendChild(f)},e.readAsDataURL(d)}
/* Read File as Name */
function rFN(a,b){let c=a.files;if(0==c.length)return;let d=c[0],e=new FileReader;e.onload=c=>{b.textContent=d.name},e.readAsText(d)}

/* Additional */
function tsLazyJs(){ldCSS(ED.de(TS.Ts.baseURL)+"/bookMark.css","bkM-css",function(){ldJS(ED.de(TS.Ts.baseURL)+"/bookMark.js","bkM-js",!0,"body")}),"true"==isSingleItem&&ldCSS(ED.de(TS.Ts.baseURL)+"/codeBox.css","cBox-css",function(){ldJS(ED.de(TS.Ts.baseURL)+"/codeBox.js","cBox-js",!0,"body")}),"true"==isSingleItem&&ldCSS(ED.de(TS.Ts.baseURL)+"/tableofContent.css","toc-css",function(){ldJS(ED.de(TS.Ts.baseURL)+"/tableofContent.js","toc-js",!0,"head",function(){new TableOfContents({from:qS("#postBody"),to:qS("#tocContent")}).generateToc()})}),"true"==isSingleItem&&ldCSS(ED.de(TS.Ts.baseURL)+"/relatedPost.css","rPost-css",function(){ldJS(ED.de(TS.Ts.baseURL)+"/relatedPost.js","rPost-js",!0,"head")}),"true"!=isError&&"lazy"==TS.adItems.loadType&&ldJS(TS.adItems.adPubURL,"ad-js",!0,"body");lazyCJs()}var tsLazyLoad=!1;aE(window,"scroll",function(){(0!=document.documentElement.scrollTop&&!1===tsLazyLoad||0!=document.body.scrollTop&&!1===tsLazyLoad)&&(null==gLS("Lz_Js")&&(tsLazyJs(),sLS("Lz_Js",1)),"true"!=isError&&"scroll"==TS.adItems.loadType&&ldJS(TS.adItems.adPubURL,"ad-js",!0,"body"),tsLazyLoad=!0),scrollCJs()},!0),aE(document.body,"click",s=>{null==gLS("Lz_Js")&&(tsLazyJs(),sLS("Lz_Js",1))}),gLS("Lz_Js")&&tsLazyJs();
