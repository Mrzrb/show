!function(e,o){"object"==typeof exports&&"undefined"!=typeof module?module.exports=o():"function"==typeof define&&define.amd?define(o):(e="undefined"!=typeof globalThis?globalThis:e||self).RevealZoom=o()}(this,function(){"use strict";var d,n,i,t,s,r,e={id:"zoom",init:function(i){i.getRevealElement().addEventListener("mousedown",function(e){var o=/Linux/.test(window.navigator.platform)?"ctrl":"alt",t=(i.getConfig().zoomKey?i.getConfig().zoomKey:o)+"Key",n=i.getConfig().zoomLevel?i.getConfig().zoomLevel:2;e[t]&&!i.isOverview()&&(e.preventDefault(),m.to({x:e.clientX,y:e.clientY,scale:n,pan:!1}))})}},m=(i=n=0,s=t=-(d=1),(r="WebkitTransform"in document.body.style||"MozTransform"in document.body.style||"msTransform"in document.body.style||"OTransform"in document.body.style||"transform"in document.body.style)&&(document.body.style.transition="transform 0.8s ease",document.body.style.OTransition="-o-transform 0.8s ease",document.body.style.msTransition="-ms-transform 0.8s ease",document.body.style.MozTransition="-moz-transform 0.8s ease",document.body.style.WebkitTransition="-webkit-transform 0.8s ease"),document.addEventListener("keyup",function(e){1!==d&&27===e.keyCode&&m.out()}),document.addEventListener("mousemove",function(e){1!==d&&(n=e.clientX,i=e.clientY)}),{to:function(e){var o;1!==d?m.out():(e.x=e.x||0,e.y=e.y||0,e.element&&(o=e.element.getBoundingClientRect(),e.x=o.left-20,e.y=o.top-20,e.width=o.width+40,e.height=o.height+40),void 0!==e.width&&void 0!==e.height&&(e.scale=Math.max(Math.min(window.innerWidth/e.width,window.innerHeight/e.height),1)),1<e.scale&&(e.x*=e.scale,e.y*=e.scale,y(e,e.scale),!1!==e.pan&&(t=setTimeout(function(){s=setInterval(l,1e3/60)},800))))},out:function(){clearTimeout(t),clearInterval(s),y({x:0,y:0},1),d=1},magnify:function(e){this.to(e)},reset:function(){this.out()},zoomLevel:function(){return d}});function y(e,o){var t,n,i=c();e.width=e.width||1,e.height=e.height||1,e.x-=(window.innerWidth-e.width*o)/2,e.y-=(window.innerHeight-e.height*o)/2,r?1===o?(document.body.style.transform="",document.body.style.OTransform="",document.body.style.msTransform="",document.body.style.MozTransform="",document.body.style.WebkitTransform=""):(t=i.x+"px "+i.y+"px",n="translate("+-e.x+"px,"+-e.y+"px) scale("+o+")",document.body.style.transformOrigin=t,document.body.style.OTransformOrigin=t,document.body.style.msTransformOrigin=t,document.body.style.MozTransformOrigin=t,document.body.style.WebkitTransformOrigin=t,document.body.style.transform=n,document.body.style.OTransform=n,document.body.style.msTransform=n,document.body.style.MozTransform=n,document.body.style.WebkitTransform=n):1===o?(document.body.style.position="",document.body.style.left="",document.body.style.top="",document.body.style.width="",document.body.style.height="",document.body.style.zoom=""):(document.body.style.position="relative",document.body.style.left=-(i.x+e.x)/o+"px",document.body.style.top=-(i.y+e.y)/o+"px",document.body.style.width=100*o+"%",document.body.style.height=100*o+"%",document.body.style.zoom=o),d=o,document.documentElement.classList&&(1!==d?document.documentElement.classList.add("zoomed"):document.documentElement.classList.remove("zoomed"))}function l(){var e=.12*window.innerWidth,o=.12*window.innerHeight,t=c();i<o?window.scroll(t.x,t.y-14/d*(1-i/o)):i>window.innerHeight-o&&window.scroll(t.x,t.y+(1-(window.innerHeight-i)/o)*(14/d)),n<e?window.scroll(t.x-14/d*(1-n/e),t.y):n>window.innerWidth-e&&window.scroll(t.x+(1-(window.innerWidth-n)/e)*(14/d),t.y)}function c(){return{x:void 0!==window.scrollX?window.scrollX:window.pageXOffset,y:void 0!==window.scrollY?window.scrollY:window.pageYOffset}}return function(){return e}});