for(var e=qSA(".Pcode"),_=0;_<e.length;_++){let $=e[_],a=gAt($,"title")||"File "+(new Date).getTime(),s=gAt($,"name")||a,n=gAt($,"type")||"txt",d=eqS($,"code"),l=textC(d),i=gAt($,"cbBtn");var p,t="<span name='preview' class='prVw'><svg viewBox='0 0 24 24'><path d='M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z'/></svg></span>",c="<span name='download' class='prDl'><svg viewBox='0 0 24 24'><path class='a' d='M8 17V15H16V17H8M16 10L12 14L8 10H10.5V6H13.5V10H16M12 2C17.5 2 22 6.5 22 12C22 17.5 17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2M12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20C16.42 20 20 16.42 20 12C20 7.58 16.42 4 12 4Z'/><path class='b' d='M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M7,15H17V17H7V15M10.3,11.2L8.4,9.3L7,10.7L10.3,14L17,7.3L15.6,5.9L10.3,11.2Z'/></svg></span>",r="<span name='copy' class='prCp'><svg viewBox='0 0 24 24'><path class='a' d='M20,16V4H8V16H20M22,16A2,2 0 0,1 20,18H8C6.89,18 6,17.1 6,16V4C6,2.89 6.89,2 8,2H20A2,2 0 0,1 22,4V16M16,20V22H4A2,2 0 0,1 2,20V7H4V20H16Z'/><path class='b' d='M20,16V10H22V16A2,2 0 0,1 20,18H8C6.89,18 6,17.1 6,16V4C6,2.89 6.89,2 8,2H16V4H8V16H20M10.91,7.08L14,10.17L20.59,3.58L22,5L14,13L9.5,8.5L10.91,7.08M16,20V22H4A2,2 0 0,1 2,20V7H4V20H16Z'/></svg></span>";p="preview"==i?t:"download"==i?c:"copy"==i?r:t+c+r,$.insertAdjacentHTML("afterbegin","<div class='preT'>"+a+"</div><div class='preA'>"+p+"</div>");let o=eqS($,".prVw"),H=eqS($,".prDl"),V=eqS($,".prCp");aE(o,"click",()=>{shake(40),window.open().document.write("<meta content='width=device-width,initial-scale=1,user-scalable=1,minimum-scale=1,maximum-scale=5' name='viewport'/><style>body{padding:15px;line-height:1.6}pre{display:block;white-space:pre-wrap;word-wrap:break-word;word-break:break-all;tab-size:2;word-break:normal;hyphens:none;line-height:1.8}</style><b>/* "+s+" */"+TS.Ts.myHandle+"</b>\n<pre><code>"+d.innerHTML+"</code></pre>")}),aE(H,"click",()=>{shake(40),tsDL(l,s+TS.Ts.myHandle+"."+n,"text/plain"),H.disabled=!0,aC($,"dwn"),setTimeout(function(){rC($,"dwn"),H.disabled=!1},3e3)}),aE(V,"click",()=>{shake(40);var a=getSelection(),s=document.createRange();s.selectNodeContents(d),a.removeAllRanges(),a.addRange(s),document.execCommand("copy"),V.disabled=!0,aC($,"cpd"),setTimeout(function(){rC($,"cpd"),V.disabled=!1},3e3)})}
