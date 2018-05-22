(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{"1y2z":function(t,e,r){"use strict";r.r(e),r.d(e,"IonReorder",function(){return i}),r.d(e,"IonReorderGroup",function(){return s});var o=r("cBjU"),n=r("CJSW"),i=function(){function t(){}return t.prototype.render=function(){return Object(o.b)("slot",null,Object(o.b)("ion-icon",{class:"reorder-icon",name:"reorder"}))},Object.defineProperty(t,"is",{get:function(){return"ion-reorder"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"host",{get:function(){return{theme:"reorder"}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return".reorder[slot]{display:none;line-height:0}.reorder-enabled .reorder{display:block;cursor:-webkit-grab;cursor:grab;pointer-events:all;-ms-touch-action:none;touch-action:none}.reorder-selected,.reorder-selected .reorder{cursor:-webkit-grabbing;cursor:grabbing}.reorder-selected{position:relative;z-index:100;-webkit-box-shadow:0 0 10px rgba(0,0,0,.4);box-shadow:0 0 10px rgba(0,0,0,.4);opacity:.8;-webkit-transition:none!important;transition:none!important}.reorder-icon{-webkit-transform:translate3d(160%,0,0);transform:translate3d(160%,0,0);display:block;font-size:1.3em;-webkit-transition:-webkit-transform 140ms ease-in;transition:-webkit-transform 140ms ease-in;transition:transform 140ms ease-in;transition:transform 140ms ease-in,-webkit-transform 140ms ease-in}.reorder-icon svg{min-width:1em}.reorder[slot=start] .reorder-icon{-webkit-transform:translate3d(-160%,0,0);transform:translate3d(-160%,0,0)}.reorder-visible .reorder .reorder-icon{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}.item .reorder[slot]{margin-top:0;margin-bottom:0}.reorder-ios .reorder-icon{font-size:2em;opacity:2em}"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"styleMode",{get:function(){return"ios"},enumerable:!0,configurable:!0}),t}(),s=function(){function t(){this.cachedHeights=[],this.scrollEl=null,this.scrollElTop=0,this.scrollElBottom=0,this.scrollElInitial=0,this.containerTop=0,this.containerBottom=0,this.enabled=!1,this.iconVisible=!1,this.activated=!1,this.disabled=!0}return t.prototype.disabledChanged=function(t){var e=this;t?(this.iconVisible=!1,setTimeout(function(){return e.enabled=!1},400)):(this.enabled=!0,this.queue.read(function(){e.iconVisible=!0}))},t.prototype.componentDidLoad=function(){this.containerEl=this.el.querySelector("ion-gesture"),this.scrollEl=this.el.closest("ion-scroll"),this.disabled||this.disabledChanged(!1)},t.prototype.componentDidUnload=function(){this.onDragEnd()},t.prototype.canStart=function(t){if(this.selectedItemEl)return!1;var e=t.event.target.closest("ion-reorder");if(!e)return!1;var r=function(t,e){for(var r,o=0;t&&o<6;){if((r=t.parentNode)===e)return t;t=r,o++}return null}(e,this.containerEl);return r?(t.data=r,!0):(console.error("reorder node not found"),!1)},t.prototype.onDragStart=function(t){var e=this.selectedItemEl=t.data,r=this.cachedHeights;r.length=0;var o=this.containerEl.children;if(o&&0!==o.length){for(var i=0,s=0;s<o.length;s++){var c=o[s];r.push(i+=c.offsetHeight),c.$ionIndex=s}var h=this.containerEl.getBoundingClientRect();if(this.containerTop=h.top,this.containerBottom=h.bottom,this.scrollEl){var u=this.scrollEl.getBoundingClientRect();this.scrollElInitial=this.scrollEl.scrollTop,this.scrollElTop=u.top+l,this.scrollElBottom=u.bottom-l}else this.scrollElInitial=0,this.scrollElTop=0,this.scrollElBottom=0;this.lastToIndex=a(e),this.selectedItemHeight=e.offsetHeight,this.activated=!0,e.classList.add(d),Object(n.c)()}},t.prototype.onDragMove=function(t){var e=this.selectedItemEl;if(e){var r=this.autoscroll(t.currentY),o=this.containerTop-r,i=Math.max(o,Math.min(t.currentY,this.containerBottom-r)),s=r+i-t.startY,l=this.itemIndexForTop(i-o);if(void 0!==l&&l!==this.lastToIndex){var c=a(e);this.lastToIndex=l,Object(n.a)(),this.reorderMove(c,l)}e.style.transform="translateY("+s+"px)"}},t.prototype.onDragEnd=function(){var t=this;this.activated=!1;var e=this.selectedItemEl;if(e){var r=this.containerEl.children,o=this.lastToIndex,i=a(e);this.containerEl.insertBefore(e,i<o?r[o+1]:r[o]);for(var s=r.length,l=0;l<s;l++)r[l].style.transform="";var c=function(){t.selectedItemEl&&(t.selectedItemEl.style.transition="",t.selectedItemEl.classList.remove(d),t.selectedItemEl=void 0)};o===i?(e.style.transition="transform 200ms ease-in-out",setTimeout(c,200)):c(),Object(n.b)()}},t.prototype.itemIndexForTop=function(t){var e=this.cachedHeights,r=0;for(r=0;r<e.length&&!(e[r]>t);r++);return r},t.prototype.reorderMove=function(t,e){for(var r=this.selectedItemHeight,o=this.containerEl.children,n=0;n<o.length;n++){var i="";n>t&&n<=e?i="translateY("+-r+"px)":n<t&&n>=e&&(i="translateY("+r+"px)"),o[n].style.transform=i}},t.prototype.autoscroll=function(t){if(!this.scrollEl)return 0;var e=0;return t<this.scrollElTop?e=-c:t>this.scrollElBottom&&(e=c),0!==e&&this.scrollEl.scrollBy(0,e),this.scrollEl.scrollTop-this.scrollElInitial},t.prototype.hostData=function(){return{class:{"reorder-enabled":this.enabled,"reorder-list-active":this.activated,"reorder-visible":this.iconVisible}}},t.prototype.render=function(){return Object(o.b)("ion-gesture",Object.assign({},{canStart:this.canStart.bind(this),onStart:this.onDragStart.bind(this),onMove:this.onDragMove.bind(this),onEnd:this.onDragEnd.bind(this),disabled:this.disabled,disableScroll:!0,gestureName:"reorder",gesturePriority:30,type:"pan",direction:"y",threshold:0,attachTo:"window"}),Object(o.b)("slot",null))},Object.defineProperty(t,"is",{get:function(){return"ion-reorder-group"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"host",{get:function(){return{theme:"reorder-group"}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{activated:{state:!0},disabled:{type:Boolean,attr:"disabled",watchCallbacks:["disabledChanged"]},el:{elementRef:!0},enabled:{state:!0},iconVisible:{state:!0},queue:{context:"queue"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return".reorder-group>ion-gesture{display:block}.reorder-list-active ion-gesture>*{-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s;will-change:transform}"},enumerable:!0,configurable:!0}),t}();function a(t){return t.$ionIndex}var l=60,c=10,d="reorder-selected"}}]);