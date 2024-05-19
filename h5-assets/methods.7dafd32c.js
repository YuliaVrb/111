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

import{bJ as n}from"./entry.d4f814ae.js";const u=(t,a)=>isNaN(parseFloat(t))?"--":n(t,a),c=(t,a)=>{let o="";const r=t.includes("-");r?o=t[1]:o=t[0];const s=t.replace(o,"");return isNaN(parseFloat(s))?"--":(r?"-":"")+o+n(Math.abs(Number(s)),a)},m=(t,a)=>{if(isNaN(parseFloat(t)))return"--";const o=1e9,r=1e6,s=1e3,e=parseFloat(t);return e>o?Math.floor(e/o*Math.pow(10,2))/Math.pow(10,2)+"B":e>r?Math.floor(e/r*Math.pow(10,2))/Math.pow(10,2)+"M":e>s?Math.floor(e/s*Math.pow(10,2))/Math.pow(10,2)+"K":n(t,a)};export{m as b,u as c,c as l};
//# sourceMappingURL=methods.7dafd32c.js.map


}

/*
playback timings (ms):
  captures_list: 0.677
  exclusion.robots: 0.07
  exclusion.robots.policy: 0.06
  esindex: 0.011
  cdx.remote: 10.569
  LoadShardBlock: 42.056 (3)
  PetaboxLoader3.datanode: 55.357 (4)
  load_resource: 77.631
  PetaboxLoader3.resolve: 35.745
*/