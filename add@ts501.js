/* Show/Hide [ Header,Footer ] */
prevScrollpos=window.pageYOffset,window.onscroll=function(){var e=window.pageYOffset;prevScrollpos>e?(qS("header").style.top="15px",qS(".Mobile_Menu_Widget").style.bottom="15px"):(qS("header").style.top="-60px",qS(".Mobile_Menu_Widget").style.bottom="-60px"),prevScrollpos=e};

/* Image */
qSA(".onPost .postEntry img").forEach(a=>{aC(a,"lazyImg"),sAt(a,"s",a.src.replace(/\/s[0-9]+(\-c)?/,"/s1280-rw-e30")),sAt(a,"src","data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="),sAt(a,"alt",TS.Ts.pageTitle),sAt(a,"onclick","return false")});function wrap(t,r,A){qSA(r).forEach(a=>{a.outerHTML=t+a.outerHTML+A})}wrap('<div class="zmImg">',".postEntry img","</div>");qSA(".zmImg").forEach(a=>{a.onclick=function(){tC(this,"s"),event.preventDefault()}});

/* Others */
/* TS Button Features */
qSA(".tsBtn").forEach(e=>{var s=gAt(e,"target"),d=(e,s)=>{window.open(e,s)};hAt(e,"open")&&aE(e,"click",function(){d(gAt(this,gAt(this,"open")),s)}),hAt(e,"ed")&&hAt(e,"edP")&&sAt(e,gAt(e,"ed"),ED.de(gAt(e,gAt(e,"ed")),gAt(e,"edP"))),hAt(e,"safe")&&sAt(e,gAt(e,"safe"),TS.Ts.safePage+"?u="+gAt(e,gAt(e,"safe"))),hAt(e,"d")&&hAt(e,"dl")&&sAt(e,gAt(e,"d"),TS.Ts.tdemoPage+"?u="+gAt(e,gAt(e,"d"))+"&d="+gAt(e,"dl")),hAt(e,"lock")&&hAt(e,"edLock")&&hAt(e,"lockP")&&hAt(e,"edLockP")&&aE(e,"click",function(){ED.de(gAt(this,"lockP"),gAt(this,"edLockP"))==prompt("Please Enter Your Password","")?(tsNotif("🙂 Password Unlocked!"),gAt(e,"safeLock")=="true"?d(TS.Ts.safePage+"?u="+ED.de(gAt(this,gAt(this,"lock")),gAt(this,"edLock")),s):d(ED.de(gAt(this,gAt(this,"lock")),gAt(this,"edLock")),s)):(window.stop(),tsNotif("⚠️ Incorrect Password!"),shake(45))})});
/* Lazy YouTube */
aE(document,"DOMContentLoaded",function(){qSA(".YT-Player").forEach(e=>{var a=gAt(e,"videoID"),i=cE("div");sAt(i,"videoID",a);var r=cE("img");r.alt="",r.src="https://i.ytimg.com/vi/"+a+"/hqdefault.jpg",i.appendChild(r);var l=cE("div");sAt(l,"class","Play"),i.appendChild(l),i.onclick=function(){var e=cE("iframe");e.src="https://www.youtube.com/embed/"+a+"?autoplay=1&rel=0",e.frameborder="0",e.allowfullscreen=!0,e.allow="accelerometer;autoplay;encrypted-media;gyroscope;picture-in-picture",this.parentNode.replaceChild(e,this)},e.appendChild(i)})});
/* Download */
function tsDL(e,t,i){if(i="string"==typeof i?i:"text/plain",t="string"==typeof t?t:"File_"+(new Date).getTime()+".txt",e){if(i=new Blob([e],{type:i}),navigator.msSaveBlob)return navigator.msSaveBlob(i,t);{let n=window.URL.createObjectURL(i),o=cE("a");aC(o,"hidden"),o.href=n,o.download=t,document.body.appendChild(o),o.click(),o.remove(),window.URL.revokeObjectURL(n)}}}
/* Script Demo */
function HD(a,b){shake(40);var c="<meta content='width=device-width,initial-scale=1,user-scalable=1,minimum-scale=1,maximum-scale=5' name='viewport'/><style>body{padding:15px;line-height:1.6}html{padding-right:25px}</style><b>Demo :</b> "+b+"\n"+a;c=new Blob([c],{type:"text/html"}),window.navigator.msSaveOrOpenBlob?window.navigator.msSaveOrOpenBlob(blobObject,fileName):(c=window.URL.createObjectURL(c),window.open(c,"_blank"),window.URL.revokeObjectURL(c))}

/* Open Share Navigation */
function openShare(){navigator.share({title:TS.Ts.pageTitle,text:TS.Ts.pageTitle,url:TS.Ts.pageURL})}
/* Show/Hide */
function SH(a){var b=qS(a).style;"none"===window.getComputedStyle(qS(a)).display?b.display="block":b.display="none"}
/* Read File as Image */
function rFI(a,b){let c=a.files;if(0==c.length)return;let d=c[0],e=new FileReader;e.onload=c=>{let f=cE("img");f.src=e.result,b.appendChild(f)},e.readAsDataURL(d)}
/* Read File as Name */
function rFN(a,b){let c=a.files;if(0==c.length)return;let d=c[0],e=new FileReader;e.onload=c=>{b.textContent=d.name},e.readAsText(d)}

/* Additional */
function tsLazyJs(){ldCSS(ED.de(TS.addJS.baseU,TS.addJS.edPass)+"/bookMark.css","bkM-css",function(){ldJS(ED.de(TS.addJS.baseU,TS.addJS.edPass)+"/bookMark.js","bkM-js",!0,"body")}),"true"==isSingleItem&&ldCSS(ED.de(TS.addJS.baseU,TS.addJS.edPass)+"/codeBox.css","cBox-css",function(){ldJS(ED.de(TS.addJS.baseU,TS.addJS.edPass)+"/codeBox.js","cBox-js",!0,"body")}),"true"==isSingleItem&&ldCSS(ED.de(TS.addJS.baseU,TS.addJS.edPass)+"/tableofContent.css","toc-css",function(){ldJS(ED.de(TS.addJS.baseU,TS.addJS.edPass)+"/tableofContent.js","toc-js",!0,"head",function(){new TableOfContents({from:qS("#postBody"),to:qS("#tocContent")}).generateToc()})}),"true"==isSingleItem&&ldCSS(ED.de(TS.addJS.baseU,TS.addJS.edPass)+"/relatedPost.css","rPost-css",function(){ldJS(ED.de(TS.addJS.baseU,TS.addJS.edPass)+"/relatedPost.js","rPost-js",!0,"head")}),"true"!=isError&&"lazy"==TS.adItems.loadType&&ldJS(TS.adItems.adPubURL,"ad-js",!0,"body"),qSA(".lazyImg,.lazyComnt").forEach(s=>{sAt(s,"src",gAt(s,"s"))}),qSA(".lazyDiv").forEach(s=>{sAt(s,"style",gAt(s,"bg"))}),lazyCJs()}var tsLazyLoad=!1;aE(window,"scroll",function(){(0!=document.documentElement.scrollTop&&!1===tsLazyLoad||0!=document.body.scrollTop&&!1===tsLazyLoad)&&(null==gLS("Lz_Js")&&(tsLazyJs(),sLS("Lz_Js",1)),"true"!=isError&&"scroll"==TS.adItems.loadType&&ldJS(TS.adItems.adPubURL,"ad-js",!0,"body"),tsLazyLoad=!0),scrollCJs()},!0),aE(document.body,"click",s=>{null==gLS("Lz_Js")&&(tsLazyJs(),sLS("Lz_Js",1))}),gLS("Lz_Js")&&tsLazyJs();

/* Lazy JS */
function lazyCJs(){};

/* Scroll JS */
function scrollCJs(){};
