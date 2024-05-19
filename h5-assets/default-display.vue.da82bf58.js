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

import{d as n,r as p,w as c,bd as d,a$ as m,bZ as v,b_ as s,$ as _,o as r,e as u,t as f,i as h,z as Z,h as b}from"./entry.d4f814ae.js";const x=n({__name:"precision",props:{value:{},thousand:{},fixLen:{default:0},fillZero:{type:[String,Number,Boolean]},showPlus:{},fill:{default:""},hasUnit:{type:Boolean},class:{}},setup(i){const e=i,a=p("");return c(()=>[e],()=>{if(isNaN(Number(e.value))){a.value=e.fill;return}let l=d(e.value)?m(e.value,e.fixLen):"0",o="";if(e.hasUnit){const t=v(e.value||"0");t.unit!==""?(l=t.value,o=t.unit,e.fillZero!==void 0&&e.fillZero!==!1&&(l=s(l,2))):e.fillZero!==void 0&&e.fillZero!==!1&&(l=s(l,e.fixLen))}else e.fillZero!==void 0&&e.fillZero!==!1&&(!isNaN(Number(e.fillZero))&&typeof e.fillZero!="boolean"?l=s(l,+e.fillZero):l=s(l,e.fixLen));e.thousand!==void 0&&(l=_(String(l))),e.showPlus&&Number(l)>0&&(l="+"+l),a.value=String(l)+o},{immediate:!0,deep:!0}),(l,o)=>(r(),u("span",{class:Z(["fvn-number",e.class])},f(h(a)),3))}}),y={key:0},S=n({__name:"default-display",props:{value:{},empty:{default:"--"}},setup(i){const e=i;return(a,l)=>e.value===void 0||e.value===null||e.value===""||e.value==="--"?(r(),u("span",y,f(e.empty),1)):b(a.$slots,"default",{key:1})}});export{x as _,S as a};
//# sourceMappingURL=default-display.vue.da82bf58.js.map


}

/*
playback timings (ms):
  captures_list: 0.635
  exclusion.robots: 0.075
  exclusion.robots.policy: 0.065
  esindex: 0.009
  cdx.remote: 70.226
  LoadShardBlock: 160.902 (3)
  PetaboxLoader3.datanode: 136.347 (4)
  PetaboxLoader3.resolve: 48.218 (2)
  load_resource: 261.793
*/