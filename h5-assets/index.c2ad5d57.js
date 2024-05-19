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

import{_ as S,a as I}from"./default-display.vue.da82bf58.js";import{a as C}from"./index.12d971e9.js";import{d as E,r as V,w as h,bY as _,aq as L,c as q,$ as z,o as R,aw as T,k as $,h as F,z as D,i as j,p as y,t as w,j as M}from"./entry.d4f814ae.js";function O(i){return i==null||i===""||i==="+"||i==="-"?0:/^\d+\.$/g.test(i)?Number(i.replace(".","")):isNaN(Number(i))?0:Number(i)}function U(i){return i==="0"||i===0?"0":(i=(i+"").replace(/^0+\./g,"0."),i.match(/^0+[1-9]+/)&&(i=i.replace(/^0+/g,"")),i)}function c(i,s,e=1/0,n=-1/0){const r=String(i),f=r.indexOf("."),b=r.substring(0,f);let l="0";s===0?l=r.substring(0,f===-1?r.length:f):f===-1?l=r:r.substring(f+1)!==""?l=r.substring(0,f)+"."+r.substring(f+1,f+1+Number(s)):l=b+".";const N=O(r);return N>e?String(e):N<n?String(n):(l=l.replace(/^\b(0+)$/g,"")||"0",U(l))}const Y=E({__name:"input",props:{modelValue:{},placeholder:{},defaultValue:{},disabled:{},precision:{default:0},class:{},max:{default:1/0},min:{default:0}},emits:["update:modelValue","input","blur","focus"],setup(i,{emit:s}){const e=i,n=V(),r=V(),f=V(!1);function b(a){return typeof a!="string"||typeof a!="number"?"":String(a)}h(()=>[e],()=>{if((()=>{const t=b(e.modelValue).trim(),u=b(n.value).trim();if(t==u&&t==="")return!0;const o=_(t),m=_(u);return o===m})())if(e.modelValue===void 0||e.modelValue===null||e.modelValue==="")n.value=String(e.modelValue);else if(f.value){const t=c(e.modelValue,e.precision);n.value=String(t),s("update:modelValue",t)}else{const t=Number(c(e.min===void 0?0:Number(e.min),e.precision)),u=Number(c(e.max===void 0?1/0:Number(e.max),e.precision)),o=c(e.modelValue,e.precision,u,t);n.value=String(o),s("update:modelValue",o)}},{immediate:!0,deep:!0});const l=a=>{let t=typeof a=="string"||typeof a=="number"?String(a):"";return t.length>15&&(t=t.substring(0,18),t[t.length-1]==="."&&(t=t.replace(".",""))),s("update:modelValue",t),s("input",t),t},N=(a,t)=>{const u=t.data,o=typeof a=="string"&&a!==""?_(a):a,m=n.value===void 0?"":n.value,d=Number(c(e.min===void 0?0:Number(e.min),e.precision)),g=Number(c(e.max===void 0?1/0:Number(e.max),e.precision)),v=e.precision===void 0?0:Number(e.precision);try{if(t.inputType==="insertText"){if(u==="-"&&o.length===1)throw d>=0?m:o;if(u==="."){if(v===0)throw m;if(/^\d+\.$/.test(o))throw o}else{const p=Number(o);throw isNaN(p)||p>g?m:c(o,v)}}if(t.inputType==="deleteContentBackward")throw o===""?"":c(o,v)}catch(p){n.value=l(p)}},x=V(a=>{try{const t=a.clipboardData.getData("text/plain");if(isNaN(Number(t))){l(n.value);return}const u={selectionStart:r.value.inputRef.selectionStart||0,selectionEnd:r.value.inputRef.selectionEnd||0},o=typeof n.value=="string"?n.value:"",m=o.substring(0,u.selectionStart)+t+o.substring(u.selectionEnd);let d=Number(m);isNaN(d)&&(n.value=l(n.value));const g=e.min===void 0?0:Number(e.min),v=e.max===void 0?1/0:Number(e.max),p=e.precision===void 0?0:Number(e.precision);d=Number(c(String(d),p)),d>v||d<g?n.value=l(n.value):n.value=l(d)}catch{}});h(()=>[r],()=>{r.value&&r.value.inputRef.addEventListener("paste",x.value)},{immediate:!0,deep:!0}),L(()=>{r.value&&r.value.inputRef.removeEventListener("paste",x.value)}),h(()=>[e.min,e.max],()=>{if(n.value!==void 0&&n.value!==null&&n.value!==""){const a=e.min===void 0?0:Number(e.min),t=e.max===void 0?1/0:Number(e.max);let u=Number(c(n.value,e.precision));u<a&&(n.value=l(a)),u>t&&(n.value=l(t))}},{immediate:!0,deep:!0});const P=()=>{f.value=!1;const a=Number(c(e.min===void 0?0:Number(e.min),e.precision)),t=Number(c(e.max===void 0?1/0:Number(e.max),e.precision)),u=Number(c(n.value,e.precision));u>t&&(n.value=l(t)),u<a&&(n.value=l(a)),s("blur")},k=()=>{f.value=!0,s("focus")},B=q(()=>{try{return n.value!==""&&n.value!==void 0&&n.value!==null&&!isNaN(Number(n.value))?z(n.value):""}catch{return""}});return(a,t)=>{const u=C;return R(),T(u,{class:D(e.class),"default-value":e.defaultValue,"model-value":j(B),placeholder:e.placeholder,disabled:e.disabled,onFocus:k,onInput:N,onBlur:P,ref_key:"inputRef",ref:r},{suffix:$(()=>[F(a.$slots,"default")]),_:3},8,["class","default-value","model-value","placeholder","disabled"])}}}),Z=E({__name:"perfectPrecision",props:{value:{},len:{},prefix:{default:""},suffix:{default:""},fm:{}},setup(i){const s=i;return(e,n)=>(R(),T(I,{value:s.value},{default:$(()=>[y(w(s.prefix)+" ",1),M(S,{class:D(s.fm),value:s.value,"fix-len":Number(s.len),thousand:!0,"fill-zero":!0},null,8,["class","value","fix-len"]),y(" "+w(s.suffix),1)]),_:1},8,["value"]))}}),K=S,Q=I,W=Y,X=Z;export{Q as D,W as I,X as P,K as a};
//# sourceMappingURL=index.c2ad5d57.js.map


}

/*
playback timings (ms):
  captures_list: 0.716
  exclusion.robots: 0.087
  exclusion.robots.policy: 0.077
  esindex: 0.01
  cdx.remote: 7.303
  LoadShardBlock: 233.556 (3)
  PetaboxLoader3.datanode: 233.603 (4)
  PetaboxLoader3.resolve: 120.214 (2)
  load_resource: 130.255
*/