(self.webpackChunkpokedex=self.webpackChunkpokedex||[]).push([[777],{1777:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>m});var o=r(7624),n=r(7757),i=r(1997),a=r(821),l=r(8447),c=r(6818),s=r.n(c);var p=r(4402),u=r(8301),d=r.n(u),h=r(8722),g=r(7363),f=r(2298);const b=(0,a.lazy)((()=>r.e(258).then(r.bind(r,8258)))),v=(0,a.lazy)((()=>r.e(3).then(r.bind(r,4378)))),m=()=>{const{t:e}=(0,g.$G)(["common"]),t=((0,h.s0)(),(0,p.I0)()),[r,c]=(0,a.useState)("lowest_number_first"),{pokemonList:u,url:m,error:x,loading:w}=(0,p.v9)((e=>({pokemonList:e.pokedex.pokemonList,url:e.pokedex.url,error:e.pokedex.error,loading:e.pokedex.loading}))),j=(0,a.useCallback)((()=>{t({type:i.gz}),console.log("URL",m),(e=>new Promise(((t,r)=>{e&&l.Z.get(e).then((e=>{const o=s()(e,["data","results"]),n=s()(e,["data","next"]),i=o.map((e=>{const t=s()(e,["url"]);return l.Z.get(t)}));Promise.all(i).then((e=>{const r=e.map((e=>s()(e,["data"])));t({data:r,url:n})})).catch((e=>r(e)))})).catch((e=>{e.response?(console.log(e.response.data),console.log(e.response.status),console.log(e.response.headers)):e.request?console.log(e.request):console.log("Error",e.message),console.log(e.config),r(e)}))})))(m).then((e=>{t({type:i.q4,payload:e})})).catch((e=>{console.error(i.y3,e),t({type:i.y3,payload:"Oops! Something went wrong. Please try again later."})}))}),[t,m]);e("common:sortOptions.lowest-number-first"),e("common:sortOptions.highest-number-first"),e("common:sortOptions.z-a"),e("common:sortOptions.a-z");return(0,a.useEffect)((()=>{d()(u)&&(console.log("pokemonList",u),j())}),[j]),(0,f.jsx)(a.Fragment,{children:(0,f.jsxs)(o.Z,{paddingY:1,children:[(0,f.jsx)(n.Z,{}),(0,f.jsx)(b,{pokemons:u,loadItems:j,loading:w}),x&&!w&&(0,f.jsx)(a.Suspense,{fallback:(0,f.jsx)(o.Z,{paddingY:6}),children:(0,f.jsx)(v,{message:x})})]})})}},7757:(e,t,r)=>{"use strict";r.d(t,{Z:()=>x});var o=r(3727),n=r(7605),i=r(821),a=r(9720),l=r(9524),c=r(1845),s=r(5726),p=r(5589),u=r(8653),d=r(5033);function h(e){return(0,d.Z)("MuiDivider",e)}(0,u.Z)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]);var g=r(2298);const f=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],b=(0,s.ZP)("div",{name:"MuiDivider",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,r.absolute&&t.absolute,t[r.variant],r.light&&t.light,"vertical"===r.orientation&&t.vertical,r.flexItem&&t.flexItem,r.children&&t.withChildren,r.children&&"vertical"===r.orientation&&t.withChildrenVertical,"right"===r.textAlign&&"vertical"!==r.orientation&&t.textAlignRight,"left"===r.textAlign&&"vertical"!==r.orientation&&t.textAlignLeft]}})((e=>{let{theme:t,ownerState:r}=e;return(0,n.Z)({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(t.vars||t).palette.divider,borderBottomWidth:"thin"},r.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},r.light&&{borderColor:t.vars?"rgba(".concat(t.vars.palette.dividerChannel," / 0.08)"):(0,c.Fq)(t.palette.divider,.08)},"inset"===r.variant&&{marginLeft:72},"middle"===r.variant&&"horizontal"===r.orientation&&{marginLeft:t.spacing(2),marginRight:t.spacing(2)},"middle"===r.variant&&"vertical"===r.orientation&&{marginTop:t.spacing(1),marginBottom:t.spacing(1)},"vertical"===r.orientation&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},r.flexItem&&{alignSelf:"stretch",height:"auto"})}),(e=>{let{ownerState:t}=e;return(0,n.Z)({},t.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{content:'""',alignSelf:"center"}})}),(e=>{let{theme:t,ownerState:r}=e;return(0,n.Z)({},r.children&&"vertical"!==r.orientation&&{"&::before, &::after":{width:"100%",borderTop:"thin solid ".concat((t.vars||t).palette.divider)}})}),(e=>{let{theme:t,ownerState:r}=e;return(0,n.Z)({},r.children&&"vertical"===r.orientation&&{flexDirection:"column","&::before, &::after":{height:"100%",borderLeft:"thin solid ".concat((t.vars||t).palette.divider)}})}),(e=>{let{ownerState:t}=e;return(0,n.Z)({},"right"===t.textAlign&&"vertical"!==t.orientation&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},"left"===t.textAlign&&"vertical"!==t.orientation&&{"&::before":{width:"10%"},"&::after":{width:"90%"}})})),v=(0,s.ZP)("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.wrapper,"vertical"===r.orientation&&t.wrapperVertical]}})((e=>{let{theme:t,ownerState:r}=e;return(0,n.Z)({display:"inline-block",paddingLeft:"calc(".concat(t.spacing(1)," * 1.2)"),paddingRight:"calc(".concat(t.spacing(1)," * 1.2)")},"vertical"===r.orientation&&{paddingTop:"calc(".concat(t.spacing(1)," * 1.2)"),paddingBottom:"calc(".concat(t.spacing(1)," * 1.2)")})})),m=i.forwardRef((function(e,t){const r=(0,p.Z)({props:e,name:"MuiDivider"}),{absolute:i=!1,children:c,className:s,component:u=(c?"div":"hr"),flexItem:d=!1,light:m=!1,orientation:x="horizontal",role:w=("hr"!==u?"separator":void 0),textAlign:j="center",variant:y="fullWidth"}=r,A=(0,o.Z)(r,f),k=(0,n.Z)({},r,{absolute:i,component:u,flexItem:d,light:m,orientation:x,role:w,textAlign:j,variant:y}),S=(e=>{const{absolute:t,children:r,classes:o,flexItem:n,light:i,orientation:a,textAlign:c,variant:s}=e,p={root:["root",t&&"absolute",s,i&&"light","vertical"===a&&"vertical",n&&"flexItem",r&&"withChildren",r&&"vertical"===a&&"withChildrenVertical","right"===c&&"vertical"!==a&&"textAlignRight","left"===c&&"vertical"!==a&&"textAlignLeft"],wrapper:["wrapper","vertical"===a&&"wrapperVertical"]};return(0,l.Z)(p,h,o)})(k);return(0,g.jsx)(b,(0,n.Z)({as:u,className:(0,a.Z)(S.root,s),role:w,ref:t,ownerState:k},A,{children:c?(0,g.jsx)(v,{className:S.wrapper,ownerState:k,children:c}):null}))}));m.muiSkipListHighlight=!0;const x=m},4072:(e,t,r)=>{var o=r(8998)(r(6803),"DataView");e.exports=o},2170:(e,t,r)=>{var o=r(8998)(r(6803),"Promise");e.exports=o},8017:(e,t,r)=>{var o=r(8998)(r(6803),"Set");e.exports=o},7777:(e,t,r)=>{var o=r(8998)(r(6803),"WeakMap");e.exports=o},593:(e,t,r)=>{var o=r(4878),n=r(6442);e.exports=function(e){return n(e)&&"[object Arguments]"==o(e)}},329:(e,t,r)=>{var o=r(4878),n=r(8612),i=r(6442),a={};a["[object Float32Array]"]=a["[object Float64Array]"]=a["[object Int8Array]"]=a["[object Int16Array]"]=a["[object Int32Array]"]=a["[object Uint8Array]"]=a["[object Uint8ClampedArray]"]=a["[object Uint16Array]"]=a["[object Uint32Array]"]=!0,a["[object Arguments]"]=a["[object Array]"]=a["[object ArrayBuffer]"]=a["[object Boolean]"]=a["[object DataView]"]=a["[object Date]"]=a["[object Error]"]=a["[object Function]"]=a["[object Map]"]=a["[object Number]"]=a["[object Object]"]=a["[object RegExp]"]=a["[object Set]"]=a["[object String]"]=a["[object WeakMap]"]=!1,e.exports=function(e){return i(e)&&n(e.length)&&!!a[o(e)]}},627:(e,t,r)=>{var o=r(9980),n=r(7230),i=Object.prototype.hasOwnProperty;e.exports=function(e){if(!o(e))return n(e);var t=[];for(var r in Object(e))i.call(e,r)&&"constructor"!=r&&t.push(r);return t}},4575:e=>{e.exports=function(e){return function(t){return e(t)}}},4937:(e,t,r)=>{var o=r(4072),n=r(4635),i=r(2170),a=r(8017),l=r(7777),c=r(4878),s=r(2733),p="[object Map]",u="[object Promise]",d="[object Set]",h="[object WeakMap]",g="[object DataView]",f=s(o),b=s(n),v=s(i),m=s(a),x=s(l),w=c;(o&&w(new o(new ArrayBuffer(1)))!=g||n&&w(new n)!=p||i&&w(i.resolve())!=u||a&&w(new a)!=d||l&&w(new l)!=h)&&(w=function(e){var t=c(e),r="[object Object]"==t?e.constructor:void 0,o=r?s(r):"";if(o)switch(o){case f:return g;case b:return p;case v:return u;case m:return d;case x:return h}return t}),e.exports=w},9980:e=>{var t=Object.prototype;e.exports=function(e){var r=e&&e.constructor;return e===("function"==typeof r&&r.prototype||t)}},7230:(e,t,r)=>{var o=r(8284)(Object.keys,Object);e.exports=o},2891:(e,t,r)=>{e=r.nmd(e);var o=r(5507),n=t&&!t.nodeType&&t,i=n&&e&&!e.nodeType&&e,a=i&&i.exports===n&&o.process,l=function(){try{var e=i&&i.require&&i.require("util").types;return e||a&&a.binding&&a.binding("util")}catch(t){}}();e.exports=l},8284:e=>{e.exports=function(e,t){return function(r){return e(t(r))}}},8775:(e,t,r)=>{var o=r(593),n=r(6442),i=Object.prototype,a=i.hasOwnProperty,l=i.propertyIsEnumerable,c=o(function(){return arguments}())?o:function(e){return n(e)&&a.call(e,"callee")&&!l.call(e,"callee")};e.exports=c},6021:(e,t,r)=>{var o=r(4583),n=r(8612);e.exports=function(e){return null!=e&&n(e.length)&&!o(e)}},5915:(e,t,r)=>{e=r.nmd(e);var o=r(6803),n=r(8649),i=t&&!t.nodeType&&t,a=i&&e&&!e.nodeType&&e,l=a&&a.exports===i?o.Buffer:void 0,c=(l?l.isBuffer:void 0)||n;e.exports=c},8301:(e,t,r)=>{var o=r(627),n=r(4937),i=r(8775),a=r(7569),l=r(6021),c=r(5915),s=r(9980),p=r(226),u=Object.prototype.hasOwnProperty;e.exports=function(e){if(null==e)return!0;if(l(e)&&(a(e)||"string"==typeof e||"function"==typeof e.splice||c(e)||p(e)||i(e)))return!e.length;var t=n(e);if("[object Map]"==t||"[object Set]"==t)return!e.size;if(s(e))return!o(e).length;for(var r in e)if(u.call(e,r))return!1;return!0}},8612:e=>{e.exports=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991}},226:(e,t,r)=>{var o=r(329),n=r(4575),i=r(2891),a=i&&i.isTypedArray,l=a?n(a):o;e.exports=l},8649:e=>{e.exports=function(){return!1}}}]);
//# sourceMappingURL=777.c59e3a43.chunk.js.map