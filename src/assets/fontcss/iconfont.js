(function(window){var svgSprite='<svg><symbol id="icon-suo" viewBox="0 0 1024 1024"><path d="M777.728 445.8496h-58.6752V309.4528a207.0528 207.0528 0 0 0-414.208 0v136.3968h-58.5728a51.2 51.2 0 0 0-51.2 51.2V870.4a51.2 51.2 0 0 0 51.2 51.2H778.24a51.2 51.2 0 0 0 51.2-51.2V497.0496a51.2 51.2 0 0 0-51.712-51.2z m-138.1376 0H384.4096v-133.12a127.5904 127.5904 0 1 1 255.1808 0z" fill="#ffffff" ></path></symbol><symbol id="icon-touxiang" viewBox="0 0 1024 1024"><path d="M985.088 970.752c-22.528 49.152-83.968 53.248-102.4 53.248H131.072c-13.312-1.024-65.536-6.144-89.088-51.2-10.24-18.432-17.408-50.176 1.024-93.184 34.816-78.848 116.736-86.016 136.192-87.04 139.264-21.504 184.32-69.632 184.32-69.632l3.072-3.072c14.336-14.336 19.456-38.912 21.504-59.392-90.112-68.608-146.432-199.68-146.432-345.088C241.664 81.92 386.048 0 508.928 0c123.904 0 267.264 81.92 267.264 314.368 0 145.408-56.32 276.48-146.432 345.088 1.024 21.504 6.144 46.08 21.504 59.392l4.096 4.096s45.056 47.104 183.296 68.608c31.744 1.024 91.136 18.432 130.048 76.8 30.72 47.104 25.6 81.92 16.384 102.4z m0 0" fill="#ffffff" ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)