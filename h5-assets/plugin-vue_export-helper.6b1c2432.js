var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

import{bM as p,aI as P}from"./entry.d4f814ae.js";const t=Object.prototype.toString;function m(r){return t.call(r)==="[object Array]"}function I(r){return t.call(r)==="[object Null]"}function N(r){return t.call(r)==="[object Boolean]"}function f(r){return t.call(r)==="[object Object]"}const S=r=>t.call(r)==="[object Promise]";function w(r){return t.call(r)==="[object String]"}function A(r){return t.call(r)==="[object Number]"&&r===r}function E(r){return r===void 0}function h(r){return typeof r=="function"}function D(r){return f(r)&&Object.keys(r).length===0}const F=r=>(r==null?void 0:r.$)!==void 0,M=r=>/\[Q]Q/.test(r);function B(r){return f(r)&&"$y"in r&&"$M"in r&&"$D"in r&&"$d"in r&&"$H"in r&&"$m"in r&&"$s"in r}const _=Symbol("ArcoConfigProvider");var v=Object.defineProperty,b=Object.defineProperties,g=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable,u=(r,n,e)=>n in r?v(r,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[n]=e,y=(r,n)=>{for(var e in n||(n={}))d.call(n,e)&&u(r,e,n[e]);if(l)for(var e of l(n))O.call(n,e)&&u(r,e,n[e]);return r},j=(r,n)=>b(r,g(n));const x="A",C="arco",s="$arco",G=r=>{var n;return(n=r==null?void 0:r.componentPrefix)!=null?n:x},L=(r,n)=>{var e;n&&n.classPrefix&&(r.config.globalProperties[s]=j(y({},(e=r.config.globalProperties[s])!=null?e:{}),{classPrefix:n.classPrefix}))},Q=r=>{var n,e,o;const c=p(),i=P(_,void 0),a=(o=(e=i==null?void 0:i.prefixCls)!=null?e:(n=c==null?void 0:c.appContext.config.globalProperties[s])==null?void 0:n.classPrefix)!=null?o:C;return r?`${a}-${r}`:a};var R=(r,n)=>{for(const[e,o]of n)r[e]=o;return r};export{R as _,E as a,I as b,_ as c,f as d,h as e,w as f,Q as g,G as h,A as i,m as j,F as k,N as l,D as m,S as n,B as o,M as p,L as s};
//# sourceMappingURL=plugin-vue_export-helper.6b1c2432.js.map


}

/*
playback timings (ms):
  captures_list: 0.588
  exclusion.robots: 0.063
  exclusion.robots.policy: 0.056
  esindex: 0.008
  cdx.remote: 4.938
  LoadShardBlock: 128.027 (3)
  PetaboxLoader3.datanode: 87.493 (4)
  PetaboxLoader3.resolve: 88.696 (2)
  load_resource: 71.824
*/