!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.mojs=e():t.mojs=e()}(this,function(){return function(t){function e(n){if(i[n])return i[n].exports;var s=i[n]={i:n,l:!1,exports:{}};return t[n].call(s.exports,s,s.exports,e),s.l=!0,s.exports}var i={};return e.m=t,e.c=i,e.i=function(t){return t},e.d=function(t,i,n){e.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="build/",e(e.s=22)}([function(t,e,i){var n,s,o,n,s,o;!function(i,r){s=[e],n=r,void 0!==(o="function"==typeof n?n.apply(e,s):n)&&(t.exports=o)}(0,function(e){"use strict";!function(i,r){s=[e],n=r,void 0!==(o="function"==typeof n?n.apply(e,s):n)&&(t.exports=o)}(0,function(t){Object.defineProperty(t,"__esModule",{value:!0});var e=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t},i={};i.get=function(t){return this._props[t]},i.set=function(t,e){this._props[t]=e},i.setIfNotSet=function(t,e){return void 0===this._o[t]&&this.set(t,e),this},i.init=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this._o=t,this.index=this._o.index||0,delete this._o.index,this._declareDefaults(),this._extendDefaults(),this._vars()},i._declareDefaults=function(){this._defaults={}},i._extendDefaults=function(){this._props=e({},this._defaults,this._o)},i._vars=function(){},t.ClassProto=i})})},function(t,e,i){var n,s,o,n,s,o;!function(r,a){s=[e,i(0),i(3),i(15),i(4),i(20)],n=a,void 0!==(o="function"==typeof n?n.apply(e,s):n)&&(t.exports=o)}(0,function(e){"use strict";!function(r,a){s=[e,i(0),i(3),i(15),i(4),i(20)],n=a,void 0!==(o="function"==typeof n?n.apply(e,s):n)&&(t.exports=o)}(0,function(t,e,i,n,s,o){Object.defineProperty(t,"__esModule",{value:!0}),t.Tweenie=void 0;var r=Object.create(e.ClassProto);r._declareDefaults=function(){this._defaults=i.tweenieDefaults},r.play=function(){return"play"===this._state?this:(this._setState("play"),this._setupPlay("play"),this._playTime=performance.now(),this._speed=this._props.speed,this)},r.pause=function(){return"pause"===this._state||"stop"===this._state?this:(n.tweener.remove(this),this._setState("pause"),this._speed=1,this)},r.stop=function(t){if("stop"===this._state)return this;var e=void 0!==t?t:this._props.isReverse===!0?1:0;return n.tweener.remove(this),this.setProgress(e),this.reset(),this},r.replay=function(t){return this.reset(),this.play(t),this},r.setSpeed=function(t){return this._props.speed=t,"play"===this._state&&(this.setStartTime(),this._speed=t,this._playTime=performance.now()),this},r.reverse=function(){if(this._props.isReverse=!this._props.isReverse,this._reverseCallbacks(),this._elapsed>0){var t=this._props.delay;this._elapsed=this._end-this._spot-(this._elapsed-t)}return this.setStartTime(),this},r.setProgress=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;void 0===this._start&&this.setStartTime();var e=1===t?this._end:this._spot+t*(this._end-this._spot);return void 0===this._prevTime&&(this._prevTime=this._start),this.update(e),this},r.reset=function(){this._isActive=!1,this._elapsed=0,this._repeatCount=0,this._setState("stop"),delete this._prevTime},r._setupPlay=function(t){this.setStartTime(),n.tweener.add(this)},r._vars=function(){var t=this._props,e=t.isReverse,i=t.onStart,n=t.onComplete,s=t.onChimeIn,o=t.onChimeOut,r=t.delay,a=t.duration;this._isActive=!1,this._elapsed=0,this._state="stop",this._speed=1,this._time=r+a,this._repeatCount=0,this._prevTime,this._cbs=[i,n,0,1],this._chCbs=[s,o],e===!0&&this._reverseCallbacks()},r.setStartTime=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:performance.now(),e=this._props,i=e.delay,n=e.duration,s=(e.repeat,e.shiftTime);this._elapsed>=this._end-this._spot&&(this._elapsed=0),this._spot=t-this._elapsed+s,this._playTime=this._spot,this._start=this._spot+i,this._end=this._start+n},r.update=function(t){var e=this._props,i=e.onUpdate,n=e.isReverse,s=e.index,o=e.easing,r=e.backwardEasing;t=this._playTime+this._speed*(t-this._playTime),this._elapsed=t-this._spot,t<this._start&&this._progress!==this._cbs[2]&&(this._props.onRefresh(!1,s,t),this._progress=this._cbs[2]),t>this._end&&this._progress!==this._cbs[3]&&(this._props.onRefresh(!0,s,t),this._progress=this._cbs[3]);var a=t>this._prevTime,p=a!==n?o:r;if(t>=this._start&&t<=this._end&&void 0!==this._prevTime){var u=void 0,c=(t-this._start)/this._props.duration;return this._progress=n===!1?c:1-c,i(p(this._progress),this._progress,a,t),t>this._start&&this._isActive===!1&&a===!0&&(this._cbs[0](a,n,s),this._chCbs[0](a,n,s,t)),t===this._start&&(this._cbs[0](a,n,s),this._chCbs[0](a,n,s,t),u=a),t<this._end&&this._isActive===!1&&a===!1&&(this._cbs[1](!1,n,s),this._chCbs[1](a,n,s,t)),t===this._end&&(this._cbs[1](a,n,s),this._chCbs[1](a,n,s,t),u=!a),this._isActive=void 0===u||u,this._prevTime=t,!this._isActive}return t>this._end&&this._isActive===!0?(this._progress=this._cbs[3],i(p(this._progress),this._progress,a,t),this._cbs[1](a,n,s),this._chCbs[1](a,n,s,t),this._isActive=!1,this._prevTime=t,!0):t<this._start&&this._isActive===!0?(this._progress=this._cbs[2],i(p(this._progress),this._progress,a,t),this._cbs[0](a,n,s),this._chCbs[0](a,n,s,t),this._isActive=!1,this._prevTime=t,!0):void(this._prevTime=t)},r._reverseCallbacks=function(){this._cbs=[this._cbs[1],this._cbs[0],this._cbs[3],this._cbs[2]]},r._setState=function(t){this._prevState=this._state,this._state=t;var e="pause"===this._prevState,i="stop"===this._prevState,n="play"===this._prevState,s="reverse"===this._prevState,o=n||s,r=i||e;"play"!==t&&"reverse"!==t||!r||this._props.onPlaybackStart(t,this._prevState),"pause"===t&&o&&this._props.onPlaybackPause(),"stop"===t&&(o||e)&&this._props.onPlaybackStop()},r.onTweenerFinish=function(){var t=this._props,e=t.isReverse,i=t.repeat,n=t.isReverseOnRepeat,s=t.onPlaybackComplete,r=this._repeatCount;s(!e,r,i-r),this.reset(),i-r>0&&((0,o.staggerProperty)(n,r)&&this.reverse(),this._repeatCount=r+1,this.play())},r._extendDefaults=function(){e.ClassProto._extendDefaults.call(this);for(var t in this._props)this._props[t]=(0,o.staggerProperty)(this._props[t],this.index);this._props.easing=(0,s.parseEasing)(this._props.easing);var i=this._props,n=i.easing,r=i.backwardEasing;this._props.backwardEasing=null!=r?(0,s.parseEasing)(r):n};var a=function(t){var e=Object.create(r);return e.init(t),e};a.__mojsClass=r,t.Tweenie=a})})},function(t,e,i){var n,s,o,n,s,o;!function(r,a){s=[e,i(3)],n=a,void 0!==(o="function"==typeof n?n.apply(e,s):n)&&(t.exports=o)}(0,function(e){"use strict";!function(r,a){s=[e,i(3)],n=a,void 0!==(o="function"==typeof n?n.apply(e,s):n)&&(t.exports=o)}(0,function(t,e){Object.defineProperty(t,"__esModule",{value:!0}),t.separateTweenieOptions=void 0;var i=function(t){var i=void 0;for(var n in e.tweenieDefaults)void 0!==t[n]&&(i=i||{},i[n]=t[n],delete t[n]);return i};t.separateTweenieOptions=i})})},function(t,e,i){var n,s,o,n,s,o;!function(i,r){s=[e],n=r,void 0!==(o="function"==typeof n?n.apply(e,s):n)&&(t.exports=o)}(0,function(e){"use strict";!function(i,r){s=[e],n=r,void 0!==(o="function"==typeof n?n.apply(e,s):n)&&(t.exports=o)}(0,function(t){Object.defineProperty(t,"__esModule",{value:!0});var e={delay:0,duration:350,speed:1,easing:"Sin.Out",backwardEasing:null,isReverse:!1,repeat:0,isReverseOnRepeat:!1,onUpdate:function(t,e,i){},onStart:function(){},onComplete:function(){},onChimeIn:function(){},onChimeOut:function(){},onRefresh:function(){},onPlaybackStart:function(){},onPlaybackPause:function(){},onPlaybackStop:function(){},onPlaybackComplete:function(){},index:0,shiftTime:0};t.tweenieDefaults=e})})},function(t,e,i){var n,s,o,n,s,o;!function(r,a){s=[e,i(5),i(11)],n=a,void 0!==(o="function"==typeof n?n.apply(e,s):n)&&(t.exports=o)}(0,function(e){"use strict";!function(r,a){s=[e,i(5),i(11)],n=a,void 0!==(o="function"==typeof n?n.apply(e,s):n)&&(t.exports=o)}(0,function(t,e,i){Object.defineProperty(t,"__esModule",{value:!0}),t.parseEasing=void 0;var n=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e.defaultEasingString;switch(typeof t){case"function":return t;case"string":t=t.toLowerCase().split(".");var n=i.easing[t[0]];return n?n[t[1]]:(console.error(e.consoleName+' Easing with name "'+t[0]+'" wasn\'t found, fallback to "'+e.defaultEasingString+'" instead.',i.easing),i.easing[e.defaultEasing[0]][e.defaultEasing[1]])}};t.parseEasing=n})})},function(t,e,i){var n,s,o,n,s,o;!function(i,r){s=[e],n=r,void 0!==(o="function"==typeof n?n.apply(e,s):n)&&(t.exports=o)}(0,function(e){"use strict";!function(i,r){s=[e],n=r,void 0!==(o="function"==typeof n?n.apply(e,s):n)&&(t.exports=o)}(0,function(t){Object.defineProperty(t,"__esModule",{value:!0});var e=t.defaultEasing=["sin","out"],i=(t.defaultEasingString=e.join("."),t.name="mojs");t.consoleName=":"+i+":"})})},function(t,e,i){var n,s,o,n,s,o;!function(r,a){s=[e,i(0),i(1),i(9),i(8),i(7),i(10)],n=a,void 0!==(o="function"==typeof n?n.apply(e,s):n)&&(t.exports=o)}(0,function(e){"use strict";!function(r,a){s=[e,i(0),i(1),i(9),i(8),i(7),i(10)],n=a,void 0!==(o="function"==typeof n?n.apply(e,s):n)&&(t.exports=o)}(0,function(t,e,i,n,s,o,r){Object.defineProperty(t,"__esModule",{value:!0}),t.Delta=void 0;var a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t},p={unit:s.parseUnit,number:o.parseNumber},u=Object.create(e.ClassProto);u.init=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};e.ClassProto.init.call(this,t),this._parseDelta(),this.update=this["_upd_"+this._delta.type],this._setupTweenie()},u._upd_number=function(t,e,i){var n=this._delta,s=n.curve,o=n.delta,r=n.start,a=(n.end,this._props);return a.target[a.key]=void 0===s?r+t*o:s(e)*r+e*o,this},u._upd_unit=function(t,e,i){var n=this._delta,s=n.curve,o=n.delta,r=n.start,a=(n.end,n.unit),p=this._props,u=p.target,c=p.key,f=void 0===s?r+t*o:s(e)*r+e*o;return u[c]=""+f+a,this},u._setupTweenie=function(){var t=this,e=this._delta.tweenieOptions;void 0!==e&&(this.tween=new i.Tweenie(a({index:this.index},e,{onUpdate:function(i,n,s){t.update(i,n,s),void 0!==e.onUpdate&&e.onUpdate(i,n,s)}})))},u._declareDefaults=function(){this._defaults={key:null,object:null,customProperties:null,target:null}},u._parseDelta=function(){var t=this._props,e=t.key,i=t.customProperties;null!=i&&null!=i[e]?this._parseByCustom():this._parseByGuess()},u._parseByGuess=function(){var t=this._props,e=t.key,i=t.object,s=(t.customProperties,(0,n.splitDelta)(i)),o=s.start,a=s.end,u=o.match(r.unitRegexp)||a.toString().match(r.unitRegexp),c=u?"unit":"number";this._delta=p[c](e,(0,n.splitDelta)(i))},u._parseByCustom=function(){var t=this._props,e=t.key,i=t.object,s=t.customProperties,o=s[e],r=o.type;this._delta=p[r](e,(0,n.splitDelta)(i))};var c=function(t){var e=Object.create(u);return e.init(t),e};c.__mojsClass=u,t.Delta=c})})},function(t,e,i){var n,s,o,n,s,o;!function(i,r){s=[e],n=r,void 0!==(o="function"==typeof n?n.apply(e,s):n)&&(t.exports=o)}(0,function(e){"use strict";!function(i,r){s=[e],n=r,void 0!==(o="function"==typeof n?n.apply(e,s):n)&&(t.exports=o)}(0,function(t){Object.defineProperty(t,"__esModule",{value:!0});var e=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t},i=function(t,i){var n=e({type:"number",name:t},i);return n.start=parseFloat(n.start),n.end=parseFloat(n.end),n.delta=n.end-n.start,n};t.parseNumber=i})})},function(t,e,i){var n,s,o,n,s,o;!function(r,a){s=[e,i(24)],n=a,void 0!==(o="function"==typeof n?n.apply(e,s):n)&&(t.exports=o)}(0,function(e){"use strict";!function(r,a){s=[e,i(24)],n=a,void 0!==(o="function"==typeof n?n.apply(e,s):n)&&(t.exports=o)}(0,function(t,e){Object.defineProperty(t,"__esModule",{value:!0}),t.parseUnit=void 0;var i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t},n=function(t,n){var s=i({type:"unit",name:t},n),o=(0,e.getRegexpUnit)(s.start),r=(0,e.getRegexpUnit)(s.end);return s.unit=r||o||"px",s.start=parseFloat(s.start),s.end=parseFloat(s.end),s.delta=s.end-s.start,s};t.parseUnit=n})})},function(t,e,i){var n,s,o,n,s,o;!function(r,a){s=[e,i(4),i(3),i(2)],n=a,void 0!==(o="function"==typeof n?n.apply(e,s):n)&&(t.exports=o)}(0,function(e){"use strict";!function(r,a){s=[e,i(4),i(3),i(2)],n=a,void 0!==(o="function"==typeof n?n.apply(e,s):n)&&(t.exports=o)}(0,function(t,e,i,n){Object.defineProperty(t,"__esModule",{value:!0}),t.splitDelta=void 0;var s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t},o=function(t){t=s({},t);var i=void 0!==t.curve?(0,e.parseEasing)(t.curve):void 0;delete t.curve;var o=(0,n.separateTweenieOptions)(t),r=Object.keys(t)[0];return{start:r,end:t[r],curve:i,tweenieOptions:o}};t.splitDelta=o})})},function(t,e,i){var n,s,o,n,s,o;!function(i,r){s=[e],n=r,void 0!==(o="function"==typeof n?n.apply(e,s):n)&&(t.exports=o)}(0,function(e){"use strict";!function(i,r){s=[e],n=r,void 0!==(o="function"==typeof n?n.apply(e,s):n)&&(t.exports=o)}(0,function(t){Object.defineProperty(t,"__esModule",{value:!0});var e=/px|%|rem|em|ex|cm|ch|mm|in|pt|pc|vh|vw|vmin|deg|fr/gim;t.unitRegexp=e})})},function(t,e,i){var n,s,o,n,s,o;!function(r,a){s=[e,i(12)],n=a,void 0!==(o="function"==typeof n?n.apply(e,s):n)&&(t.exports=o)}(0,function(e){"use strict";!function(r,a){s=[e,i(12)],n=a,void 0!==(o="function"==typeof n?n.apply(e,s):n)&&(t.exports=o)}(0,function(t,e){Object.defineProperty(t,"__esModule",{value:!0}),t.easing=void 0;var i={linear:{none:function(t){return t}},sin:{in:function(t){return 1-Math.cos(t*Math.PI/2)},out:function(t){return Math.sin(t*Math.PI/2)},inout:function(t){return.5*(1-Math.cos(Math.PI*t))}},pow:e.pow};t.easing=i})})},function(t,e,i){var n,s,o,n,s,o;!function(i,r){s=[e],n=r,void 0!==(o="function"==typeof n?n.apply(e,s):n)&&(t.exports=o)}(0,function(e){"use strict";!function(i,r){s=[e],n=r,void 0!==(o="function"==typeof n?n.apply(e,s):n)&&(t.exports=o)}(0,function(t){Object.defineProperty(t,"__esModule",{value:!0});var e=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:2,e=function(t){return function(e){return Math.pow(e,t)}}(t),i=function(t){return function(e){return 1-Math.abs(Math.pow(e-1,t))}}(t);return{in:e,out:i,inout:function(t){return t<.5?e(2*t)/2:i(2*t-1)/2+.5}}};t.pow=e})})},function(t,e,i){var n,s,o,n,s,o;!function(r,a){s=[e,i(1),i(0),i(5)],n=a,void 0!==(o="function"==typeof n?n.apply(e,s):n)&&(t.exports=o)}(0,function(e){"use strict";!function(r,a){s=[e,i(1),i(0),i(5)],n=a,void 0!==(o="function"==typeof n?n.apply(e,s):n)&&(t.exports=o)}(0,function(t,e,i,n){Object.defineProperty(t,"__esModule",{value:!0}),t.Timeline=void 0;var s=e.Tweenie.__mojsClass,o=Object.create(s);o._declareDefaults=function(){s._declareDefaults.call(this),this._defaults.easing="linear.none"},o.add=function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if(i=Math.abs(i),t instanceof Array)t.forEach(function(t){e.add(t,i)});else{var n=t.timeline||t.tween;n&&(t=n),t.set("shiftTime",i),this._items.push(t);var s=t._props,o=s.delay,r=s.duration,a=s.shiftTime,p=o+r+a;this._props.duration=Math.max(this._props.duration,p)}return this},o.append=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return this.add(t,this._props.duration+Math.abs(e)),this},o.stop=function(t){s.stop.call(this,t);for(var e=this._items.length-1;e>=0;e--)this._items[e].stop(t);return this},o.reset=function(){return s.reset.call(this),this._callOnItems("reset"),this},o.setStartTime=function(t){return s.setStartTime.call(this,t),this._callOnItems("setStartTime",this._start),this},o._callOnItems=function(t){for(var e=arguments.length,i=Array(e>1?e-1:0),n=1;n<e;n++)i[n-1]=arguments[n];for(var s=0;s<this._items.length;s++){var o;(o=this._items[s])[t].apply(o,i)}},o._createUpdate=function(t,e){return function(i,n,s,o){for(var r=0;r<e._items.length;r++)e._items[r].update(o);t(i,n,s,o)}},o._vars=function(){s._vars.call(this),this._items=[],this._props.duration=0},o._extendDefaults=function(){s._extendDefaults.call(this),this._onUpdate=this._props.onUpdate,this._props.onUpdate=this._createUpdate(this._onUpdate,this)};var r=function(t){var e=Object.create(o);return e.init(t),e};t.Timeline=r})})},function(t,e,i){var n,s,o,n,s,o;!function(r,a){s=[e,i(0)],n=a,void 0!==(o="function"==typeof n?n.apply(e,s):n)&&(t.exports=o)}(0,function(e){"use strict";!function(r,a){s=[e,i(0)],n=a,void 0!==(o="function"==typeof n?n.apply(e,s):n)&&(t.exports=o)}(0,function(t,e){Object.defineProperty(t,"__esModule",{value:!0}),t.Tweenable=void 0;var i=e.ClassProto,n=Object.create(i);n.init=function(t){var e=this;i.init.call(this,t);for(var n=["play","pause","stop","replay","setSpeed","reverse","setProgress","reset","setStartTime"],s=function(t){var i=n[t];e[i]=function(){for(var t,n=arguments.length,s=Array(n),o=0;o<n;o++)s[o]=arguments[o];(t=e.timeline||e.tween)[i].apply(t,s)}},o=0;o<n.length;o++)s(o)};var s=function(t){var e=Object.create(n);return e.init(t),e};s.__mojsClass=n,t.Tweenable=s})})},function(t,e,i){var n,s,o,n,s,o;!function(i,r){s=[e],n=r,void 0!==(o="function"==typeof n?n.apply(e,s):n)&&(t.exports=o)}(0,function(e){"use strict";!function(i,r){s=[e],n=r,void 0!==(o="function"==typeof n?n.apply(e,s):n)&&(t.exports=o)}(0,function(t){Object.defineProperty(t,"__esModule",{value:!0});var e=[],i=[],n=!1,s=function(){i=e.slice(0);for(var t=0;t<i.length;t++)i[t].pause()},o=function(){for(var t=0;t<i.length;t++)i[t].play()},r=function(){document.hidden?s():o()},a=function(){e.length=0,n=!1},p=function(t){var i="number"==typeof t?t:e.indexOf(t);i!==-1&&(t=e[i],e.splice(i,1))},u=function(t){for(var i=e.length;i--;){var n=e[i];n.update(t)===!0&&(p(n),n.onTweenerFinish())}},c=function(){if(0===e.length)return a();u(performance.now()),requestAnimationFrame(c)},f=function(){n||(n=!0,requestAnimationFrame(c))},h=function(t){e.push(t),f()},l=function(){document.removeEventListener("visibilitychange",r,!1)};document.addEventListener("visibilitychange",r,!1);var _={add:h,remove:p,caffeinate:l};t.tweener=_})})},function(t,e,i){var n,s,o,n,s,o;!function(r,a){s=[e,i(1),i(13),i(14),i(6),i(2),i(20)],n=a,void 0!==(o="function"==typeof n?n.apply(e,s):n)&&(t.exports=o)}(0,function(e){"use strict";!function(r,a){s=[e,i(1),i(13),i(14),i(6),i(2),i(20)],n=a,void 0!==(o="function"==typeof n?n.apply(e,s):n)&&(t.exports=o)}(0,function(t,e,i,n,s,o,r){Object.defineProperty(t,"__esModule",{value:!0}),t.Deltas=void 0;var a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t},p=n.Tweenable.__mojsClass,u=Object.create(p);u.init=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};p.init.call(this,t);var e=a({},t),i=e.timeline;delete e.timeline,this._customProperties=e.customProperties||{},this._render=this._customProperties.render||function(){},delete e.customProperties,this._el=e.el,delete e.el,this._setupTweenie(e),this._setupTimeline(i),this._parseProperties(e)},u._setupTweenie=function(t){var i=this,n=(0,o.separateTweenieOptions)(t);this.tween=new e.Tweenie(a({},n,{onUpdate:function(t,e,s){i._upd_deltas(t,e,s),i._render(i._el,t,e,s),n.onUpdate&&n.onUpdate(t,e,s)}}))},u._setupTimeline=function(t){this.timeline=new i.Timeline(t),this.timeline.add(this.tween)},u._parseProperties=function(t){this._tweenDeltas=[],this._plainDeltas=[],this._staticProps={};for(var e in t){var i=t[e];if("object"==typeof i){var n=void 0;i.update?(n=i,n.set("el",this._el),n.set("property",e),"y"!==e&&"angle"!==e||n.setIfNotSet("coordinate",e)):n=void 0!==i.path?new mojs.MotionPath(a({el:this._el},i,{property:e,index:this.index})):new s.Delta({key:e,target:this._el,object:i,customProperties:this._customProperties,index:this.index}),n.tween?this._tweenDeltas.push(n):this._plainDeltas.push(n)}else this._el[e]=(0,r.staggerProperty)(i,this.index),this._staticProps[e]=this._el[e]}this.timeline.add(this._tweenDeltas)},u._upd_deltas=function(t,e,i){for(var n=0;n<this._plainDeltas.length;n++)this._plainDeltas[n].update(t,e,i)};var c=function(t){var e=Object.create(u);return e.init(t),e};c.__mojsClass=u,t.Deltas=c})})},function(t,e,i){var n,s,o,n,s,o;!function(r,a){s=[e,i(1),i(0),i(2)],n=a,void 0!==(o="function"==typeof n?n.apply(e,s):n)&&(t.exports=o)}(0,function(e){"use strict";!function(r,a){s=[e,i(1),i(0),i(2)],n=a,void 0!==(o="function"==typeof n?n.apply(e,s):n)&&(t.exports=o)}(0,function(t,e,i,n){Object.defineProperty(t,"__esModule",{value:!0}),t.MotionPath=void 0;var s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t},o=i.ClassProto,r=Object.create(o);r.update=function(t,e,i){var n=this._props,s=n.el,o=(n.precision,n.coordinate),r=n.property,a=this._samples.step,p=t/a|0,u=p*a,c=(p+1)*a,f=t-u,h=this._samples.get(u)[o],l=h;if(c<=1){l=h+f/a*(this._samples.get(c)[o]-h)}return s[r]=l,this},r._samplePath=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this._props.precision,e=this._path.getTotalLength(),i=1/t;this._samples=new Map,this._samples.step=i,this._samples.totalLength=e;for(var n=0;n<t;n++){var s=n*i;this._setForKey(s)}this._setForKey(1)},r._setForKey=function(t){var e=this._samples.totalLength,i=t*e,n=this._path.getPointAtLength(i),s=this._path.getPointAtLength(i-1),o=n.y-s.y,r=n.x-s.x,a=isFinite(Math.atan(o/r))?Math.atan(o/r):0,p=a*(180/Math.PI);this._samples.set(t,{x:n.x,y:n.y,angle:p})},r.init=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};o.init.call(this,t),this._parsePath(),this._samplePath(),this._setupTweenie()},r._setupTweenie=function(){var t=this,i=s({},this._o),o=(0,n.separateTweenieOptions)(i);void 0!==o&&(this.tween=new e.Tweenie(s({},o,{onUpdate:function(e,i,n){t.update(e,i,n),void 0!==o.onUpdate&&o.onUpdate(e,i,n)}})))},r._declareDefaults=function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];this._defaults={path:"M0,0 L100,100",precision:140,el:null,coordinate:"x",property:"x"}},r._parsePath=function(){var t=this._props.path;this._path=document.createElementNS("http://www.w3.org/2000/svg","path"),this._path.setAttributeNS(null,"d",t)};var a=function(t){var e=Object.create(r);return e.init(t),e};a.__mojsClass=r,t.MotionPath=a})})},function(t,e,i){var n,s,o,n,s,o;!function(i,r){s=[e],n=r,void 0!==(o="function"==typeof n?n.apply(e,s):n)&&(t.exports=o)}(0,function(e){"use strict";!function(i,r){s=[],n=r,void 0!==(o="function"==typeof n?n.apply(e,s):n)&&(t.exports=o)}(0,function(){})})},function(t,e,i){var n,s,o,n,s,o;!function(r,a){s=[e,i(12)],n=a,void 0!==(o="function"==typeof n?n.apply(e,s):n)&&(t.exports=o)}(0,function(e){"use strict";!function(r,a){s=[e,i(12)],n=a,void 0!==(o="function"==typeof n?n.apply(e,s):n)&&(t.exports=o)}(0,function(t,e){Object.defineProperty(t,"__esModule",{value:!0}),t.addBasicEasing=void 0;var i=function(t){t.easing.quad=(0,e.pow)(2),t.easing.cubic=(0,e.pow)(3),t.easing.quart=(0,e.pow)(4),t.easing.quint=(0,e.pow)(5),t.easing.expo={in:function(t){return 0===t?0:Math.pow(1024,t-1)},out:function(t){return 1===t?1:1-Math.pow(2,-10*t)},inout:function(t){return 0===t||1===t?t:(t*=2)<1?.5*Math.pow(1024,t-1):.5*(2-Math.pow(2,-10*(t-1)))}},t.easing.circ={in:function(t){return 1-Math.sqrt(1-t*t)},out:function(t){return Math.sqrt(1- --t*t)},inout:function(t){return(t*=2)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)}},t.easing.elastic={in:function(t){var e=.4,i=e/4;return 0===t||1===t?t:-(1*Math.pow(2,10*(t-=1))*Math.sin((t-i)*(2*Math.PI)/e))},out:function(t){var e=.4,i=e/4;return 0===t||1===t?t:1*Math.pow(2,-10*t)*Math.sin((t-i)*(2*Math.PI)/e)+1},inout:function(t){return 0===t||1===t?t:(t*=2,t<1?-.5*Math.pow(2,10*(t-1))*Math.sin(5*(t-1.1)*Math.PI):.5*Math.pow(2,-10*(t-1))*Math.sin(5*(t-1.1)*Math.PI)+1)}},t.easing.back={in:function(t){var e=1.70158;return t*t*((e+1)*t-e)},out:function(t){var e=1.70158;return--t*t*((e+1)*t+e)+1},inout:function(t){var e=2.5949095;return(t*=2)<1?t*t*((e+1)*t-e)*.5:.5*((t-=2)*t*((e+1)*t+e)+2)}},t.easing.bounce={in:function(t){return 1-easing.bounce.out(1-t)},out:function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},inout:function(t){return t<.5?.5*easing.bounce.in(2*t):.5*easing.bounce.out(2*t-1)+.5}}};t.addBasicEasing=i})})},function(t,e,i){var n,s,o,n,s,o;!function(r,a){s=[e,i(23)],n=a,void 0!==(o="function"==typeof n?n.apply(e,s):n)&&(t.exports=o)}(0,function(e){"use strict";!function(r,a){s=[e,i(23)],n=a,void 0!==(o="function"==typeof n?n.apply(e,s):n)&&(t.exports=o)}(0,function(t,e){Object.defineProperty(t,"__esModule",{value:!0}),t.staggerProperty=void 0;var i=function(t,i){var n=t;return t instanceof Array&&(n=t[i%t.length]),"function"==typeof t&&t.__mojs__isStaggerFunction&&(n=t(i)),(0,e.parseStagger)(n,i)};t.staggerProperty=i})})},function(t,e,i){var n,s,o,n,s,o;!function(r,a){s=[t,e,i(0),i(1),i(3),i(13),i(15),i(11),i(4),i(6),i(18),i(9),i(7),i(8),i(2),i(14),i(20),i(23),i(19),i(16),i(17)],n=a,void 0!==(o="function"==typeof n?n.apply(e,s):n)&&(t.exports=o)}(0,function(t,e){"use strict";!function(r,a){s=[t,e,i(0),i(1),i(3),i(13),i(15),i(11),i(4),i(6),i(18),i(9),i(7),i(8),i(2),i(14),i(20),i(23),i(19),i(16),i(17)],n=a,void 0!==(o="function"==typeof n?n.apply(e,s):n)&&(t.exports=o)}(0,function(t,e,i,n,s,o,r,a,p,u,c,f,h,l,_,d,v,y,g,m,b){Object.defineProperty(e,"__esModule",{value:!0});var w={revision:"2.4.0",Tweenie:n.Tweenie,Timeline:o.Timeline,easing:a.easing,__helpers__:{parseEasing:p.parseEasing,ClassProto:i.ClassProto,tweenieDefaults:s.tweenieDefaults,tweener:r.tweener,Delta:u.Delta,parseDelta:c.parseDelta,splitDelta:f.splitDelta,parseNumber:h.parseNumber,parseUnit:l.parseUnit,separateTweenieOptions:_.separateTweenieOptions,Tweenable:d.Tweenable,staggerProperty:v.staggerProperty,parseStagger:y.parseStagger}};(0,g.addBasicEasing)(w),w.Deltas=m.Deltas,w.MotionPath=b.MotionPath,e.default=w,t.exports=e.default})})},function(t,e,i){t.exports=i(21)},function(t,e,i){var n,s,o,n,s,o;!function(r,a){s=[e,i(24)],n=a,void 0!==(o="function"==typeof n?n.apply(e,s):n)&&(t.exports=o)}(0,function(e){"use strict";!function(r,a){s=[e,i(24)],n=a,void 0!==(o="function"==typeof n?n.apply(e,s):n)&&(t.exports=o)}(0,function(t,e){Object.defineProperty(t,"__esModule",{value:!0}),t.parseStagger=void 0;var i=function(t,i){if("string"!=typeof t)return t;if(!t.match(/^stagger\(/))return t;var n=t.split(/stagger\(|\)$/)[1].toLowerCase(),s=n.split(/([^\(,\s]+)(?=\s*,|\s*$)/gim),o=s[1],r=s[3];s.length<=3&&(o=0,r=s[1]);var a=parseFloat(o),p=(0,e.getRegexpUnit)(o),u=parseFloat(r),c=(0,e.getRegexpUnit)(r),f=p?p:c,h=a+i*u;return f?""+h+f:h};t.parseStagger=i})})},function(t,e,i){var n,s,o,n,s,o;!function(r,a){s=[e,i(10)],n=a,void 0!==(o="function"==typeof n?n.apply(e,s):n)&&(t.exports=o)}(0,function(e){"use strict";!function(r,a){s=[e,i(10)],n=a,void 0!==(o="function"==typeof n?n.apply(e,s):n)&&(t.exports=o)}(0,function(t,e){Object.defineProperty(t,"__esModule",{value:!0}),t.getRegexpUnit=void 0;var i=function(t){if("string"==typeof t){var i=t.match(e.unitRegexp);return null!==i?i[0]:void 0}};t.getRegexpUnit=i})})}])});
//# sourceMappingURL=mo.js.map