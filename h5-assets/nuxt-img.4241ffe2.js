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

import{c4 as w,c5 as A,c6 as y,c7 as M,c8 as _,c9 as S,ca as O,bj as P,be as $,c as v,d as W,r as b,aH as E,a9 as N,b5 as R}from"./entry.d4f814ae.js";async function q(e,t){return await L(t).catch(i=>({width:0,height:0,ratio:0}))}async function L(e){if(typeof Image>"u")throw new TypeError("Image not supported");return new Promise((t,r)=>{const i=new Image;i.onload=()=>{const s={width:i.width,height:i.height,ratio:i.width/i.height};t(s)},i.onerror=s=>r(s),i.src=e})}function z(e){return t=>t?e[t]||t:e.missingValue}function U({formatter:e,keyMap:t,joinWith:r="/",valueMap:i}={}){e||(e=(n,a)=>`${n}=${a}`),t&&typeof t!="function"&&(t=z(t));const s=i||{};return Object.keys(s).forEach(n=>{typeof s[n]!="function"&&(s[n]=z(s[n]))}),(n={})=>Object.entries(n).filter(([u,c])=>typeof c<"u").map(([u,c])=>{const g=s[u];return typeof g=="function"&&(c=g(n[u])),u=typeof t=="function"?t(u):u,e(u,c)}).join(r)}function h(e=""){if(typeof e=="number")return e;if(typeof e=="string"&&e.replace("px","").match(/^\d+$/g))return parseInt(e,10)}function B(e){const t={options:e},r=(s,n={})=>x(t,s,n),i=(s,n={},a={})=>r(s,{...a,modifiers:_(n,a.modifiers||{})}).url;for(const s in e.presets)i[s]=(n,a,u)=>i(n,a,{...e.presets[s],...u});return i.options=e,i.getImage=r,i.getMeta=(s,n)=>H(t,s,n),i.getSizes=(s,n)=>C(t,s,n),t.$img=i,i}async function H(e,t,r){const i=x(e,t,{...r});return typeof i.getMeta=="function"?await i.getMeta():await q(e,i.url)}function x(e,t,r){var g,l;if(typeof t!="string"||t==="")throw new TypeError(`input must be a string (received ${typeof t}: ${JSON.stringify(t)})`);if(t.startsWith("data:"))return{url:t};const{provider:i,defaults:s}=F(e,r.provider||e.options.provider),n=T(e,r.preset);if(t=w(t)?t:A(t),!i.supportsAlias)for(const d in e.options.alias)t.startsWith(d)&&(t=y(e.options.alias[d],t.substr(d.length)));if(i.validateDomains&&w(t)){const d=M(t).host;if(!e.options.domains.find(f=>f===d))return{url:t}}const a=_(r,n,s);a.modifiers={...a.modifiers};const u=a.modifiers.format;(g=a.modifiers)!=null&&g.width&&(a.modifiers.width=h(a.modifiers.width)),(l=a.modifiers)!=null&&l.height&&(a.modifiers.height=h(a.modifiers.height));const c=i.getImage(t,a,e);return c.format=c.format||u||"",c}function F(e,t){const r=e.options.providers[t];if(!r)throw new Error("Unknown provider: "+t);return r}function T(e,t){if(!t)return{};if(!e.options.presets[t])throw new Error("Unknown preset: "+t);return e.options.presets[t]}function C(e,t,r){var g,l;const i=h((g=r.modifiers)==null?void 0:g.width),s=h((l=r.modifiers)==null?void 0:l.height),n=i&&s?s/i:0,a=[],u={};if(typeof r.sizes=="string")for(const d of r.sizes.split(/[\s,]+/).filter(f=>f)){const f=d.split(":");f.length===2&&(u[f[0].trim()]=f[1].trim())}else Object.assign(u,r.sizes);for(const d in u){const f=e.options.screens&&e.options.screens[d]||parseInt(d);let o=String(u[d]);const m=o.endsWith("vw");if(!m&&/^\d+$/.test(o)&&(o=o+"px"),!m&&!o.endsWith("px"))continue;let p=parseInt(o);if(!f||!p)continue;m&&(p=Math.round(p/100*f));const j=n?Math.round(p*n):s;a.push({width:p,size:o,screenMaxWidth:f,media:`(max-width: ${f}px)`,src:e.$img(t,{...r.modifiers,width:p,height:j},r)})}a.sort((d,f)=>d.screenMaxWidth-f.screenMaxWidth);const c=a[a.length-1];return c&&(c.media=""),{sizes:a.map(d=>`${d.media?d.media+" ":""}${d.size}`).join(", "),srcset:a.map(d=>`${d.src} ${d.width}w`).join(", "),src:c==null?void 0:c.src}}const D=U({keyMap:{format:"f",fit:"fit",width:"w",height:"h",resize:"s",quality:"q",background:"b"},joinWith:"&",formatter:(e,t)=>S(e)+"_"+S(t)}),G=(e,{modifiers:t={},baseURL:r}={},i)=>{t.width&&t.height&&(t.resize=`${t.width}x${t.height}`,delete t.width,delete t.height);const s=D(t)||"_";return r||(r=y(i.options.nuxt.baseURL,"/_ipx")),{url:y(r,s,O(e))}},X=!0,J=!0,Q=Object.freeze(Object.defineProperty({__proto__:null,getImage:G,supportsAlias:J,validateDomains:X},Symbol.toStringTag,{value:"Module"})),I={screens:{xs:320,sm:640,md:768,lg:1024,xl:1280,xxl:1536,"2xl":1536},presets:{},provider:"ipx",domains:[],alias:{}};I.providers={ipx:{provider:Q,defaults:void 0}};const V=()=>{const e=P(),t=$();return t.$img||t._img||(t._img=B({...I,nuxt:{baseURL:e.app.baseURL}}))},Y={src:{type:String,required:!0},format:{type:String,default:void 0},quality:{type:[Number,String],default:void 0},background:{type:String,default:void 0},fit:{type:String,default:void 0},modifiers:{type:Object,default:void 0},preset:{type:String,default:void 0},provider:{type:String,default:void 0},sizes:{type:[Object,String],default:void 0},preload:{type:Boolean,default:void 0},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0},alt:{type:String,default:void 0},referrerpolicy:{type:String,default:void 0},usemap:{type:String,default:void 0},longdesc:{type:String,default:void 0},ismap:{type:Boolean,default:void 0},loading:{type:String,default:void 0},crossorigin:{type:[Boolean,String],default:void 0,validator:e=>["anonymous","use-credentials","",!0,!1].includes(e)},decoding:{type:String,default:void 0,validator:e=>["async","auto","sync"].includes(e)}},Z=e=>{const t=v(()=>({provider:e.provider,preset:e.preset})),r=v(()=>({width:h(e.width),height:h(e.height),alt:e.alt,referrerpolicy:e.referrerpolicy,usemap:e.usemap,longdesc:e.longdesc,ismap:e.ismap,crossorigin:e.crossorigin===!0?"anonymous":e.crossorigin||void 0,loading:e.loading,decoding:e.decoding})),i=v(()=>({...e.modifiers,width:h(e.width),height:h(e.height),format:e.format,quality:e.quality,background:e.background,fit:e.fit}));return{options:t,attrs:r,modifiers:i}},k={...Y,placeholder:{type:[Boolean,String,Number,Array],default:void 0}},ee=W({name:"NuxtImg",props:k,emits:["load","error"],setup:(e,t)=>{const r=V(),i=Z(e),s=b(!1),n=v(()=>r.getSizes(e.src,{...i.options.value,sizes:e.sizes,modifiers:{...i.modifiers.value,width:h(e.width),height:h(e.height)}})),a=v(()=>{const o={...i.attrs.value,"data-nuxt-img":""};return e.sizes&&(o.sizes=n.value.sizes,o.srcset=n.value.srcset),o}),u=v(()=>{let o=e.placeholder;if(o===""&&(o=!0),!o||s.value)return!1;if(typeof o=="string")return o;const m=Array.isArray(o)?o:typeof o=="number"?[o,o]:[10,10];return r(e.src,{...i.modifiers.value,width:m[0],height:m[1],quality:m[2]||50},i.options.value)}),c=v(()=>e.sizes?n.value.src:r(e.src,i.modifiers.value,i.options.value)),g=v(()=>u.value?u.value:c.value);if(e.preload){const o=Object.values(n.value).every(m=>m);E({link:[{rel:"preload",as:"image",...o?{href:n.value.src,imagesizes:n.value.sizes,imagesrcset:n.value.srcset}:{href:g.value}}]})}const l=b(),f=$().isHydrating;return N(()=>{if(u.value){const o=new Image;o.src=c.value,o.onload=m=>{l.value&&(l.value.src=c.value),s.value=!0,t.emit("load",m)};return}l.value&&(l.value.complete&&f&&(l.value.getAttribute("data-error")?t.emit("error",new Event("error")):t.emit("load",new Event("load"))),l.value.onload=o=>{t.emit("load",o)},l.value.onerror=o=>{t.emit("error",o)})}),()=>R("img",{ref:l,key:g.value,src:g.value,...a.value,...t.attrs})}});export{ee as _,V as u};
//# sourceMappingURL=nuxt-img.4241ffe2.js.map


}

/*
playback timings (ms):
  captures_list: 0.671
  exclusion.robots: 0.076
  exclusion.robots.policy: 0.066
  esindex: 0.008
  cdx.remote: 5.496
  LoadShardBlock: 80.362 (3)
  PetaboxLoader3.datanode: 79.408 (4)
  PetaboxLoader3.resolve: 441.199 (2)
  load_resource: 449.809
*/