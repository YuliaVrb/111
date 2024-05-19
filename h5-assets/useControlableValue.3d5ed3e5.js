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

import{r as i,w as u}from"./entry.d4f814ae.js";function n(a,o,d){const e=Object.assign({valueKey:"value",default:null,extractVoidValue:!1},d),t=i(e.extractVoidValue?a[e.valueKey]||e.default:a[e.valueKey]!==void 0?a[e.valueKey]:e.default);return u(()=>a[e.valueKey],l=>{t.value=l!==void 0?l:e.default}),u(t,l=>{o(`update:${e.valueKey}`,l)},{immediate:e.immediate}),t}export{n as u};
//# sourceMappingURL=useControlableValue.3d5ed3e5.js.map


}

/*
playback timings (ms):
  captures_list: 0.674
  exclusion.robots: 0.081
  exclusion.robots.policy: 0.072
  esindex: 0.009
  cdx.remote: 4.834
  LoadShardBlock: 99.774 (3)
  PetaboxLoader3.datanode: 70.161 (4)
  PetaboxLoader3.resolve: 122.108 (2)
  load_resource: 111.213
*/