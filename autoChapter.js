var autoChapterIndex,showChapterRelated;!function(e,t){var a,n={homePage:"https://techlyseries.blogspot.com",titleLength:"auto",containerId:"aChp",newTabLink:!1,callBack:function(){}};for(a in autoChapterConfig)n[a]=("undefined"==autoChapterConfig[a]?n:autoChapterConfig)[a];function r(a){var n=e.createElement("script");n.async="async",n.rel="preload",n.src=a,t.appendChild(n)}function l(e){var t,a,n=e.length;if(0===n)return!1;for(;--n;)t=Math.floor(Math.random()*(n+1)),a=e[n],e[n]=e[t],e[t]=a;return e}var o="object"==typeof labelArray&&0<labelArray.length?"/-/"+l(labelArray)[0]:"";autoChapterIndex=function(e){var t=e.feed.openSearch$totalResults.$t-2,e=Math.floor(Math.random()*((t=0<t?t:1)-(e=1)+1))+e;r(n.homePage.replace(/\/$/,"")+"/feeds/posts/summary"+o+"?alt=json-in-script&orderby=updated&start-index="+e+"&max-results=2&callback=showChapterRelated")},showChapterRelated=function(e){var t,a,r=gId(n.containerId),o=l(e.feed.entry),i="<div class='chpN'>",s=n.newTabLink?' target="_blank"':"";if(r){for(var c=0;c<2&&c!=o.length;c++){a=o[c].title.$t,a="auto"!==n.titleLength&&n.titleLength<a.length?a.substring(0,n.titleLength)+"&hellip;":a;for(var h=0,d=o[c].link.length;h<d;h++)t="alternate"==o[c].link[h].rel?o[c].link[h].href:"#";i+='<a href="'+t+'" '+s+' data-text="'+a+'"></a>'}r.innerHTML=i+="</div>",n.callBack()}},r(n.homePage.replace(/\/$/,"")+"/feeds/posts/summary"+o+"?alt=json-in-script&orderby=updated&max-results=0&callback=autoChapterIndex")}((window,document),gTN("head")[0]);
