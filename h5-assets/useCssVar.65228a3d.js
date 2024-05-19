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

import{r,a3 as m,c as x}from"./entry.d4f814ae.js";function b(o){return o||(o="#ededed"),parseInt("0x"+o.slice(1,3))+","+parseInt("0x"+o.slice(3,5))+","+parseInt("0x"+o.slice(5,7))}function S(){const o=r("--bx-success-color"),u=r("--bx-danger-color"),c=r("--color-bg-success-weak"),g=r("--color-bg-error-weak"),p=m(),v=r("--bx-info-color"),f=r("--bx-warning-color"),e=x(()=>{let l="",t="",s="",n="";if(p.styleSetting==0?(l=o.value,t=u.value,s=c.value,n=g.value):(l=f.value,t=v.value,s=c.value,n=g.value),p.colorSetting!=0){const V=l;l=t,t=V;const y=s;s=n,n=y}const a=getComputedStyle(document.querySelector("body")),i=a.getPropertyValue(l),d=a.getPropertyValue(t),w=b(i),C=b(d),B=a.getPropertyValue(s),H=a.getPropertyValue(n);return{upHex:i,upBgHex:B,upRgb:w,downHex:d,downBgHex:H,downRgb:C}});return x(()=>({rise:`rgb(${e.value.upRgb})`,riseBg:e.value.upBgHex,riseHex:e.value.upHex,fall:`rgb(${e.value.downRgb})`,failBg:e.value.downBgHex,fallHex:e.value.downHex,equal:"var(--color-text-1)"}))}export{S as u};
//# sourceMappingURL=useCssVar.65228a3d.js.map


}

/*
playback timings (ms):
  captures_list: 1.092
  exclusion.robots: 0.065
  exclusion.robots.policy: 0.057
  esindex: 0.01
  cdx.remote: 31.551
  LoadShardBlock: 144.601 (3)
  PetaboxLoader3.datanode: 152.989 (4)
  load_resource: 29.34
*/