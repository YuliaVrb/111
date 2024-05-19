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

import{_ as b}from"./index.2548992e.js";import{d as i,u as f,c as v,w as C,b as g,o as y,e as V,j as u,k as N,i as a,z as x,G as B,J as h}from"./entry.d4f814ae.js";import{u as k}from"./useControlableValue.3d5ed3e5.js";const w={class:"mobile-number"},z=i({__name:"MobileNumber",props:{modelValue:{},class:{},clearable:{type:Boolean},noBg:{type:Boolean},placeholder:{}},emits:["update:modelValue","get-code"],setup(r,{emit:n}){const e=r,c=()=>{n("get-code")},{t:m}=f(),d=v(()=>e.placeholder||m("login.form.phone.placeholder"));C(()=>{var s;return(s=e.modelValue)==null?void 0:s.countryCode},()=>{n("get-code")});const o=k(e,n,{default:{countryCode:"",mobileNumber:""},valueKey:"modelValue"});return g(()=>({countryCode:o.value.countryCode,mobileNumber:o.value.mobileNumber})),(s,l)=>{const p=b,_=B;return y(),V("div",w,[u(_,{modelValue:a(o).mobileNumber,"onUpdate:modelValue":l[1]||(l[1]=t=>a(o).mobileNumber=t),placeholder:a(d),size:"large",class:x(["common-input mobile-input",e.class]),onBlur:l[2]||(l[2]=t=>c()),"label-align":"left",clearable:e.clearable},{label:N(()=>[u(p,{"no-bg":e.noBg,value:a(o).countryCode,"onUpdate:value":l[0]||(l[0]=t=>a(o).countryCode=t)},null,8,["no-bg","value"])]),_:1},8,["modelValue","placeholder","class","clearable"])])}}});const U=h(z,[["__scopeId","data-v-e7eafb58"]]);export{U as _};
//# sourceMappingURL=MobileNumber.84134260.js.map


}

/*
playback timings (ms):
  captures_list: 0.649
  exclusion.robots: 0.077
  exclusion.robots.policy: 0.068
  esindex: 0.009
  cdx.remote: 41.741
  LoadShardBlock: 162.826 (3)
  PetaboxLoader3.datanode: 74.521 (4)
  PetaboxLoader3.resolve: 101.856
  load_resource: 118.391
*/