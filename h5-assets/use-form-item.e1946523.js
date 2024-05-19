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

import{_ as k,g as v,i as p}from"./plugin-vue_export-helper.6b1c2432.js";import{d as g,c as i,o as b,e as y,z as C,ab as I,f as S,aI as z,bv as d}from"./entry.d4f814ae.js";const _=g({name:"IconLoading",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},emits:{click:e=>!0},setup(e,{emit:t}){const n=v("icon"),r=i(()=>[n,`${n}-loading`,{[`${n}-spin`]:e.spin}]),o=i(()=>{const s={};return e.size&&(s.fontSize=p(e.size)?`${e.size}px`:e.size),e.rotate&&(s.transform=`rotate(${e.rotate}deg)`),s});return{cls:r,innerStyle:o,onClick:s=>{t("click",s)}}}}),h=["stroke-width","stroke-linecap","stroke-linejoin"],j=S("path",{d:"M42 24c0 9.941-8.059 18-18 18S6 33.941 6 24 14.059 6 24 6"},null,-1),$=[j];function w(e,t,n,r,o,a){return b(),y("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:C(e.cls),style:I(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin,onClick:t[0]||(t[0]=(...s)=>e.onClick&&e.onClick(...s))},$,14,h)}var l=k(_,[["render",w]]);const N=Object.assign(l,{install:(e,t)=>{var n;const r=(n=t==null?void 0:t.iconPrefix)!=null?n:"";e.component(r+l.name,l)}}),L=Symbol("ArcoFormItemContext"),F=Symbol("ArcoFormContext"),P=({size:e,disabled:t,error:n,uninject:r}={})=>{const o=r?{}:z(L,{}),a=i(()=>{var c;return(c=e==null?void 0:e.value)!=null?c:o.size}),s=i(()=>(t==null?void 0:t.value)||o.disabled),u=i(()=>(n==null?void 0:n.value)||o.error),m=d(o,"feedback"),f=d(o,"eventHandlers");return{formItemCtx:o,mergedSize:a,mergedDisabled:s,mergedError:u,feedback:m,eventHandlers:f}};export{N as I,L as a,F as f,P as u};
//# sourceMappingURL=use-form-item.e1946523.js.map


}

/*
playback timings (ms):
  captures_list: 0.646
  exclusion.robots: 0.072
  exclusion.robots.policy: 0.063
  esindex: 0.009
  cdx.remote: 21.764
  LoadShardBlock: 172.502 (3)
  PetaboxLoader3.datanode: 119.67 (4)
  PetaboxLoader3.resolve: 121.392 (2)
  load_resource: 90.977
*/