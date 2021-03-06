/*!
 * jQuery UI Effects @VERSION
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/
 */
jQuery.effects||function(e,t){
// Color Conversion functions from highlightFade
// By Blair Mitchelmore
// http://jquery.offput.ca/highlightFade/
// Parse strings looking for color tuples [255,255,255]
function n(t){var n;
// Check if we're already dealing with an array of colors
// Check if we're already dealing with an array of colors
// Look for rgb(num,num,num)
// Look for rgb(num%,num%,num%)
// Look for #a0b1c2
// Look for #fff
// Look for rgba(0, 0, 0, 0) == transparent in Safari 3
return t&&t.constructor==Array&&3==t.length?t:(n=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(t))?[parseInt(n[1],10),parseInt(n[2],10),parseInt(n[3],10)]:(n=/rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(t))?[2.55*parseFloat(n[1]),2.55*parseFloat(n[2]),2.55*parseFloat(n[3])]:(n=/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(t))?[parseInt(n[1],16),parseInt(n[2],16),parseInt(n[3],16)]:(n=/#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(t))?[parseInt(n[1]+n[1],16),parseInt(n[2]+n[2],16),parseInt(n[3]+n[3],16)]:(n=/rgba\(0, 0, 0, 0\)/.exec(t))?c.transparent:c[e.trim(t).toLowerCase()]}function a(t,a){var r;do{
// Keep going until we find an element that has color, or we hit the body
if(r=e.curCSS(t,a),""!=r&&"transparent"!=r||e.nodeName(t,"body"))break;a="backgroundColor"}while(t=t.parentNode);return n(r)}function r(){var e,t,n=document.defaultView?document.defaultView.getComputedStyle(this,null):this.currentStyle,a={};
// webkit enumerates style porperties
if(n&&n.length&&n[0]&&n[n[0]])for(var r=n.length;r--;)e=n[r],"string"==typeof n[e]&&(t=e.replace(/\-(\w)/g,function(e,t){return t.toUpperCase()}),a[t]=n[e]);else for(e in n)"string"==typeof n[e]&&(a[e]=n[e]);return a}function s(t){var n,a;for(n in t)a=t[n],(
// ignore null and undefined values
null==a||
// ignore functions (when does this occur?)
e.isFunction(a)||
// shorthand styles that need to be expanded
n in l||
// ignore scrollbars (break in IE)
/scrollbar/.test(n)||
// only colors or values that can be converted to numbers
!/color/i.test(n)&&isNaN(parseFloat(a)))&&delete t[n];return t}function i(e,t){var// http://dev.jquery.com/ticket/5459
n,a={_:0};for(n in t)e[n]!=t[n]&&(a[n]=t[n]);return a}function o(t,n,a,r){
// shift params for method overloading
return"object"==typeof t&&(r=n,a=null,n=t,t=n.effect),e.isFunction(n)&&(r=n,a=null,n={}),("number"==typeof n||e.fx.speeds[n])&&(r=a,a=n,n={}),e.isFunction(a)&&(r=a,a=null),n=n||{},a=a||n.duration,a=e.fx.off?0:"number"==typeof a?a:a in e.fx.speeds?e.fx.speeds[a]:e.fx.speeds._default,r=r||n.complete,[t,n,a,r]}function u(t){
// valid standard speeds
// valid standard speeds
return!(t&&"number"!=typeof t&&!e.fx.speeds[t])||"string"==typeof t&&!e.effects[t]}e.effects={},/******************************************************************************/
/****************************** COLOR ANIMATIONS ******************************/
/******************************************************************************/
// override the animation for color styles
e.each(["backgroundColor","borderBottomColor","borderLeftColor","borderRightColor","borderTopColor","borderColor","color","outlineColor"],function(t,r){e.fx.step[r]=function(e){e.colorInit||(e.start=a(e.elem,r),e.end=n(e.end),e.colorInit=!0),e.elem.style[r]="rgb("+Math.max(Math.min(parseInt(e.pos*(e.end[0]-e.start[0])+e.start[0],10),255),0)+","+Math.max(Math.min(parseInt(e.pos*(e.end[1]-e.start[1])+e.start[1],10),255),0)+","+Math.max(Math.min(parseInt(e.pos*(e.end[2]-e.start[2])+e.start[2],10),255),0)+")"}});
// Some named colors to work with
// From Interface by Stefan Petre
// http://interface.eyecon.ro/
var c={aqua:[0,255,255],azure:[240,255,255],beige:[245,245,220],black:[0,0,0],blue:[0,0,255],brown:[165,42,42],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgrey:[169,169,169],darkgreen:[0,100,0],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkviolet:[148,0,211],fuchsia:[255,0,255],gold:[255,215,0],green:[0,128,0],indigo:[75,0,130],khaki:[240,230,140],lightblue:[173,216,230],lightcyan:[224,255,255],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightyellow:[255,255,224],lime:[0,255,0],magenta:[255,0,255],maroon:[128,0,0],navy:[0,0,128],olive:[128,128,0],orange:[255,165,0],pink:[255,192,203],purple:[128,0,128],violet:[128,0,128],red:[255,0,0],silver:[192,192,192],white:[255,255,255],yellow:[255,255,0],transparent:[255,255,255]},f=["add","remove","toggle"],l={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};e.effects.animateClass=function(t,n,a,o){return e.isFunction(a)&&(o=a,a=null),this.queue(function(){var u,c=e(this),l=c.attr("style")||" ",h=s(r.call(this)),p=c.attr("class")||"";e.each(f,function(e,n){t[n]&&c[n+"Class"](t[n])}),u=s(r.call(this)),c.attr("class",p),c.animate(i(h,u),{queue:!1,duration:n,easing:a,complete:function(){e.each(f,function(e,n){t[n]&&c[n+"Class"](t[n])}),
// work around bug in IE by clearing the cssText before setting it
"object"==typeof c.attr("style")?(c.attr("style").cssText="",c.attr("style").cssText=l):c.attr("style",l),o&&o.apply(this,arguments),e.dequeue(this)}})})},e.fn.extend({_addClass:e.fn.addClass,addClass:function(t,n,a,r){return n?e.effects.animateClass.apply(this,[{add:t},n,a,r]):this._addClass(t)},_removeClass:e.fn.removeClass,removeClass:function(t,n,a,r){return n?e.effects.animateClass.apply(this,[{remove:t},n,a,r]):this._removeClass(t)},_toggleClass:e.fn.toggleClass,toggleClass:function(n,a,r,s,i){return"boolean"==typeof a||a===t?r?e.effects.animateClass.apply(this,[a?{add:n}:{remove:n},r,s,i]):this._toggleClass(n,a):e.effects.animateClass.apply(this,[{toggle:n},a,r,s])},switchClass:function(t,n,a,r,s){return e.effects.animateClass.apply(this,[{add:n,remove:t},a,r,s])}}),/******************************************************************************/
/*********************************** EFFECTS **********************************/
/******************************************************************************/
e.extend(e.effects,{version:"@VERSION",
// Saves a set of properties in a data storage
save:function(e,t){for(var n=0;n<t.length;n++)null!==t[n]&&e.data("ec.storage."+t[n],e[0].style[t[n]])},
// Restores a set of previously saved properties from a data storage
restore:function(e,t){for(var n=0;n<t.length;n++)null!==t[n]&&e.css(t[n],e.data("ec.storage."+t[n]))},setMode:function(e,t){// Set for toggle
return"toggle"==t&&(t=e.is(":hidden")?"show":"hide"),t},getBaseline:function(e,t){// Translates a [top,left] array into a baseline value
// this should be a little more flexible in the future to handle a string & hash
var n,a;switch(e[0]){case"top":n=0;break;case"middle":n=.5;break;case"bottom":n=1;break;default:n=e[0]/t.height}switch(e[1]){case"left":a=0;break;case"center":a=.5;break;case"right":a=1;break;default:a=e[1]/t.width}return{x:a,y:n}},
// Wraps the element around a wrapper that copies position properties
createWrapper:function(t){
// if the element is already wrapped, return it
if(t.parent().is(".ui-effects-wrapper"))return t.parent();
// wrap the element
var n={width:t.outerWidth(!0),height:t.outerHeight(!0),"float":t.css("float")},a=e("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),r=document.activeElement;
// Fixes #7595 - Elements lose focus when wrapped.
//Hotfix for jQuery 1.4 since some change in wrap() seems to actually loose the reference to the wrapped element
// transfer positioning properties to the wrapper
return t.wrap(a),(t[0]===r||e.contains(t[0],r))&&e(r).focus(),a=t.parent(),"static"==t.css("position")?(a.css({position:"relative"}),t.css({position:"relative"})):(e.extend(n,{position:t.css("position"),zIndex:t.css("z-index")}),e.each(["top","left","bottom","right"],function(e,a){n[a]=t.css(a),isNaN(parseInt(n[a],10))&&(n[a]="auto")}),t.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})),a.css(n).show()},removeWrapper:function(t){var n,a=document.activeElement;
// Fixes #7595 - Elements lose focus when wrapped.
return t.parent().is(".ui-effects-wrapper")?(n=t.parent().replaceWith(t),(t[0]===a||e.contains(t[0],a))&&e(a).focus(),n):t},setTransition:function(t,n,a,r){return r=r||{},e.each(n,function(e,n){var s=t.cssUnit(n);s[0]>0&&(r[n]=s[0]*a+s[1])}),r}}),e.fn.extend({effect:function(t,n,a,r){var s=o.apply(this,arguments),
// TODO: make effects take actual parameters instead of a hash
i={options:s[1],duration:s[2],callback:s[3]},u=i.options.mode,c=e.effects[t];
// delegate to the original method (e.g., .show()) if possible
return e.fx.off||!c?u?this[u](i.duration,i.callback):this.each(function(){i.callback&&i.callback.call(this)}):c.call(this,i)},_show:e.fn.show,show:function(e){if(u(e))return this._show.apply(this,arguments);var t=o.apply(this,arguments);return t[1].mode="show",this.effect.apply(this,t)},_hide:e.fn.hide,hide:function(e){if(u(e))return this._hide.apply(this,arguments);var t=o.apply(this,arguments);return t[1].mode="hide",this.effect.apply(this,t)},
// jQuery core overloads toggle and creates _toggle
__toggle:e.fn.toggle,toggle:function(t){if(u(t)||"boolean"==typeof t||e.isFunction(t))return this.__toggle.apply(this,arguments);var n=o.apply(this,arguments);return n[1].mode="toggle",this.effect.apply(this,n)},
// helper functions
cssUnit:function(t){var n=this.css(t),a=[];return e.each(["em","px","%","pt"],function(e,t){n.indexOf(t)>0&&(a=[parseFloat(n),t])}),a}}),/******************************************************************************/
/*********************************** EASING ***********************************/
/******************************************************************************/
/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 *
 * Open source under the BSD License.
 *
 * Copyright 2008 George McGinley Smith
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice, this list of
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list
 * of conditions and the following disclaimer in the documentation and/or other materials
 * provided with the distribution.
 *
 * Neither the name of the author nor the names of contributors may be used to endorse
 * or promote products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 * COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 * EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 * GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 * NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
 * OF THE POSSIBILITY OF SUCH DAMAGE.
 *
*/
// t: current time, b: begInnIng value, c: change In value, d: duration
e.easing.jswing=e.easing.swing,e.extend(e.easing,{def:"easeOutQuad",swing:function(t,n,a,r,s){
//alert($.easing.default);
return e.easing[e.easing.def](t,n,a,r,s)},easeInQuad:function(e,t,n,a,r){return a*(t/=r)*t+n},easeOutQuad:function(e,t,n,a,r){return-a*(t/=r)*(t-2)+n},easeInOutQuad:function(e,t,n,a,r){return(t/=r/2)<1?a/2*t*t+n:-a/2*(--t*(t-2)-1)+n},easeInCubic:function(e,t,n,a,r){return a*(t/=r)*t*t+n},easeOutCubic:function(e,t,n,a,r){return a*((t=t/r-1)*t*t+1)+n},easeInOutCubic:function(e,t,n,a,r){return(t/=r/2)<1?a/2*t*t*t+n:a/2*((t-=2)*t*t+2)+n},easeInQuart:function(e,t,n,a,r){return a*(t/=r)*t*t*t+n},easeOutQuart:function(e,t,n,a,r){return-a*((t=t/r-1)*t*t*t-1)+n},easeInOutQuart:function(e,t,n,a,r){return(t/=r/2)<1?a/2*t*t*t*t+n:-a/2*((t-=2)*t*t*t-2)+n},easeInQuint:function(e,t,n,a,r){return a*(t/=r)*t*t*t*t+n},easeOutQuint:function(e,t,n,a,r){return a*((t=t/r-1)*t*t*t*t+1)+n},easeInOutQuint:function(e,t,n,a,r){return(t/=r/2)<1?a/2*t*t*t*t*t+n:a/2*((t-=2)*t*t*t*t+2)+n},easeInSine:function(e,t,n,a,r){return-a*Math.cos(t/r*(Math.PI/2))+a+n},easeOutSine:function(e,t,n,a,r){return a*Math.sin(t/r*(Math.PI/2))+n},easeInOutSine:function(e,t,n,a,r){return-a/2*(Math.cos(Math.PI*t/r)-1)+n},easeInExpo:function(e,t,n,a,r){return 0==t?n:a*Math.pow(2,10*(t/r-1))+n},easeOutExpo:function(e,t,n,a,r){return t==r?n+a:a*(-Math.pow(2,-10*t/r)+1)+n},easeInOutExpo:function(e,t,n,a,r){return 0==t?n:t==r?n+a:(t/=r/2)<1?a/2*Math.pow(2,10*(t-1))+n:a/2*(-Math.pow(2,-10*--t)+2)+n},easeInCirc:function(e,t,n,a,r){return-a*(Math.sqrt(1-(t/=r)*t)-1)+n},easeOutCirc:function(e,t,n,a,r){return a*Math.sqrt(1-(t=t/r-1)*t)+n},easeInOutCirc:function(e,t,n,a,r){return(t/=r/2)<1?-a/2*(Math.sqrt(1-t*t)-1)+n:a/2*(Math.sqrt(1-(t-=2)*t)+1)+n},easeInElastic:function(e,t,n,a,r){var s=1.70158,i=0,o=a;if(0==t)return n;if(1==(t/=r))return n+a;if(i||(i=.3*r),o<Math.abs(a)){o=a;var s=i/4}else var s=i/(2*Math.PI)*Math.asin(a/o);return-(o*Math.pow(2,10*(t-=1))*Math.sin((t*r-s)*(2*Math.PI)/i))+n},easeOutElastic:function(e,t,n,a,r){var s=1.70158,i=0,o=a;if(0==t)return n;if(1==(t/=r))return n+a;if(i||(i=.3*r),o<Math.abs(a)){o=a;var s=i/4}else var s=i/(2*Math.PI)*Math.asin(a/o);return o*Math.pow(2,-10*t)*Math.sin((t*r-s)*(2*Math.PI)/i)+a+n},easeInOutElastic:function(e,t,n,a,r){var s=1.70158,i=0,o=a;if(0==t)return n;if(2==(t/=r/2))return n+a;if(i||(i=r*(.3*1.5)),o<Math.abs(a)){o=a;var s=i/4}else var s=i/(2*Math.PI)*Math.asin(a/o);return t<1?-.5*(o*Math.pow(2,10*(t-=1))*Math.sin((t*r-s)*(2*Math.PI)/i))+n:o*Math.pow(2,-10*(t-=1))*Math.sin((t*r-s)*(2*Math.PI)/i)*.5+a+n},easeInBack:function(e,n,a,r,s,i){return i==t&&(i=1.70158),r*(n/=s)*n*((i+1)*n-i)+a},easeOutBack:function(e,n,a,r,s,i){return i==t&&(i=1.70158),r*((n=n/s-1)*n*((i+1)*n+i)+1)+a},easeInOutBack:function(e,n,a,r,s,i){return i==t&&(i=1.70158),(n/=s/2)<1?r/2*(n*n*(((i*=1.525)+1)*n-i))+a:r/2*((n-=2)*n*(((i*=1.525)+1)*n+i)+2)+a},easeInBounce:function(t,n,a,r,s){return r-e.easing.easeOutBounce(t,s-n,0,r,s)+a},easeOutBounce:function(e,t,n,a,r){return(t/=r)<1/2.75?a*(7.5625*t*t)+n:t<2/2.75?a*(7.5625*(t-=1.5/2.75)*t+.75)+n:t<2.5/2.75?a*(7.5625*(t-=2.25/2.75)*t+.9375)+n:a*(7.5625*(t-=2.625/2.75)*t+.984375)+n},easeInOutBounce:function(t,n,a,r,s){return n<s/2?.5*e.easing.easeInBounce(t,2*n,0,r,s)+a:.5*e.easing.easeOutBounce(t,2*n-s,0,r,s)+.5*r+a}})}(jQuery);