(function(){"use strict";var t={1167:function(t,n,r){var e=r(6369),i=function(){var t=this,n=t._self._c;return n("div",[n("p",[t._v("距离 2022下半年 CET-4")]),n("h1",[t._v(t._s(t.day)+" 天 "+t._s(t.hour)+" 小时 "+t._s(t.min)+" 分钟 "+t._s(t.sec)+" 秒")])])},o=[],u={name:"App",data(){return{now:"",CET4:"",sec:"",min:"",hour:"",day:"",interval:"",timer:""}},mounted(){this.CET4=new Date("2022/12/17 9:00").getTime(),this.timer=setInterval((()=>{this.interval>=0?(this.now=(new Date).getTime(),this.interval=(this.CET4-this.now)/1e3,this.day=Math.floor(this.interval/86400),this.hour=Math.floor(this.interval/3600%24).toString().padStart(2,"0"),this.min=Math.floor(this.interval/60%60).toString().padStart(2,"0"),this.sec=Math.floor(this.interval%60).toString().padStart(2,"0")):(clearInterval(this.timer),this.day=0,this.hour=0,this.min=0,this.sec=0)}))}},a=u,s=r(1001),f=(0,s.Z)(a,i,o,!1,null,null,null),c=f.exports;e.ZP.config.productionTip=!1,new e.ZP({render:t=>t(c)}).$mount("#app")}},n={};function r(e){var i=n[e];if(void 0!==i)return i.exports;var o=n[e]={exports:{}};return t[e](o,o.exports,r),o.exports}r.m=t,function(){var t=[];r.O=function(n,e,i,o){if(!e){var u=1/0;for(c=0;c<t.length;c++){e=t[c][0],i=t[c][1],o=t[c][2];for(var a=!0,s=0;s<e.length;s++)(!1&o||u>=o)&&Object.keys(r.O).every((function(t){return r.O[t](e[s])}))?e.splice(s--,1):(a=!1,o<u&&(u=o));if(a){t.splice(c--,1);var f=i();void 0!==f&&(n=f)}}return n}o=o||0;for(var c=t.length;c>0&&t[c-1][2]>o;c--)t[c]=t[c-1];t[c]=[e,i,o]}}(),function(){r.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(n,{a:n}),n}}(),function(){r.d=function(t,n){for(var e in n)r.o(n,e)&&!r.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:n[e]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){var t={143:0};r.O.j=function(n){return 0===t[n]};var n=function(n,e){var i,o,u=e[0],a=e[1],s=e[2],f=0;if(u.some((function(n){return 0!==t[n]}))){for(i in a)r.o(a,i)&&(r.m[i]=a[i]);if(s)var c=s(r)}for(n&&n(e);f<u.length;f++)o=u[f],r.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return r.O(c)},e=self["webpackChunktest"]=self["webpackChunktest"]||[];e.forEach(n.bind(null,0)),e.push=n.bind(null,e.push.bind(e))}();var e=r.O(void 0,[998],(function(){return r(1167)}));e=r.O(e)})();