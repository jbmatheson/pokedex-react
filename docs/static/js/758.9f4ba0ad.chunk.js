"use strict";(self.webpackChunkpokedex=self.webpackChunkpokedex||[]).push([[758],{1758:(e,t,r)=>{r.r(t),r.d(t,{default:()=>ve});var n=r(3727),o=r(7605),i=r(821),a=r(9720),s=r(3298),c=r(5033),l=r(9524),d=r(8890);const m=(0,r(7083).ZP)();var u=r(118),p=r(2298);const h=["className","component","disableGutters","fixed","maxWidth","classes"],x=(0,u.Z)(),f=m("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t["maxWidth".concat((0,s.Z)(String(r.maxWidth)))],r.fixed&&t.fixed,r.disableGutters&&t.disableGutters]}}),g=e=>(0,d.Z)({props:e,name:"MuiContainer",defaultTheme:x});var v=r(3972),Z=r(5726),k=r(5589);const b=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{createStyledComponent:t=f,useThemeProps:r=g,componentName:d="MuiContainer"}=e,m=t((e=>{let{theme:t,ownerState:r}=e;return(0,o.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!r.disableGutters&&{paddingLeft:t.spacing(2),paddingRight:t.spacing(2),[t.breakpoints.up("sm")]:{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}})}),(e=>{let{theme:t,ownerState:r}=e;return r.fixed&&Object.keys(t.breakpoints.values).reduce(((e,r)=>{const n=r,o=t.breakpoints.values[n];return 0!==o&&(e[t.breakpoints.up(n)]={maxWidth:"".concat(o).concat(t.breakpoints.unit)}),e}),{})}),(e=>{let{theme:t,ownerState:r}=e;return(0,o.Z)({},"xs"===r.maxWidth&&{[t.breakpoints.up("xs")]:{maxWidth:Math.max(t.breakpoints.values.xs,444)}},r.maxWidth&&"xs"!==r.maxWidth&&{[t.breakpoints.up(r.maxWidth)]:{maxWidth:"".concat(t.breakpoints.values[r.maxWidth]).concat(t.breakpoints.unit)}})})),u=i.forwardRef((function(e,t){const i=r(e),{className:u,component:x="div",disableGutters:f=!1,fixed:g=!1,maxWidth:v="lg"}=i,Z=(0,n.Z)(i,h),k=(0,o.Z)({},i,{component:x,disableGutters:f,fixed:g,maxWidth:v}),b=((e,t)=>{const{classes:r,fixed:n,disableGutters:o,maxWidth:i}=e,a={root:["root",i&&"maxWidth".concat((0,s.Z)(String(i))),n&&"fixed",o&&"disableGutters"]};return(0,l.Z)(a,(e=>(0,c.Z)(t,e)),r)})(k,d);return(0,p.jsx)(m,(0,o.Z)({as:x,ownerState:k,className:(0,a.Z)(b.root,u),ref:t},Z))}));return u}({createStyledComponent:(0,Z.ZP)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t["maxWidth".concat((0,v.Z)(String(r.maxWidth)))],r.fixed&&t.fixed,r.disableGutters&&t.disableGutters]}}),useThemeProps:e=>(0,k.Z)({props:e,name:"MuiContainer"})}),y=b;var S=r(7637),j=r(6067),w=r(9198),C=r(2626);const R=["component","direction","spacing","divider","children","className","useFlexGap"],P=(0,u.Z)(),M=m("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>t.root});function W(e){return(0,d.Z)({props:e,name:"MuiStack",defaultTheme:P})}function N(e,t){const r=i.Children.toArray(e).filter(Boolean);return r.reduce(((e,n,o)=>(e.push(n),o<r.length-1&&e.push(i.cloneElement(t,{key:"separator-".concat(o)})),e)),[])}const D=e=>{let{ownerState:t,theme:r}=e,n=(0,o.Z)({display:"flex",flexDirection:"column"},(0,w.k9)({theme:r},(0,w.P$)({values:t.direction,breakpoints:r.breakpoints.values}),(e=>({flexDirection:e}))));if(t.spacing){const e=(0,C.hB)(r),o=Object.keys(r.breakpoints.values).reduce(((e,r)=>(("object"===typeof t.spacing&&null!=t.spacing[r]||"object"===typeof t.direction&&null!=t.direction[r])&&(e[r]=!0),e)),{}),i=(0,w.P$)({values:t.direction,base:o}),a=(0,w.P$)({values:t.spacing,base:o});"object"===typeof i&&Object.keys(i).forEach(((e,t,r)=>{if(!i[e]){const n=t>0?i[r[t-1]]:"column";i[e]=n}}));const s=(r,n)=>{return t.useFlexGap?{gap:(0,C.NA)(e,r)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{["margin".concat((o=n?i[n]:t.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[o]))]:(0,C.NA)(e,r)}};var o};n=(0,S.Z)(n,(0,w.k9)({theme:r},a,s))}return n=(0,w.dt)(r.breakpoints,n),n};const G=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{createStyledComponent:t=M,useThemeProps:r=W,componentName:s="MuiStack"}=e,d=t(D),m=i.forwardRef((function(e,t){const i=r(e),m=(0,j.Z)(i),{component:u="div",direction:h="column",spacing:x=0,divider:f,children:g,className:v,useFlexGap:Z=!1}=m,k=(0,n.Z)(m,R),b={direction:h,spacing:x,useFlexGap:Z},y=(0,l.Z)({root:["root"]},(e=>(0,c.Z)(s,e)),{});return(0,p.jsx)(d,(0,o.Z)({as:u,ownerState:b,ref:t,className:(0,a.Z)(y.root,v)},k,{children:f?N(g,f):g}))}));return m}({createStyledComponent:(0,Z.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>t.root}),useThemeProps:e=>(0,k.Z)({props:e,name:"MuiStack"})}),T=G;var F=r(7624),z=r(9093),I=r(4460),L=r(4438),B=r(9266),A=r(8653);function $(e){return(0,c.Z)("MuiCircularProgress",e)}(0,A.Z)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);var O,X,Y,E;const q=["className","color","disableShrink","size","style","thickness","value","variant"];let H,J,K,Q;const U=44,V=(0,B.F4)(H||(H=O||(O=(0,L.Z)(["\n  0% {\n    transform: rotate(0deg);\n  }\n\n  100% {\n    transform: rotate(360deg);\n  }\n"])))),_=(0,B.F4)(J||(J=X||(X=(0,L.Z)(["\n  0% {\n    stroke-dasharray: 1px, 200px;\n    stroke-dashoffset: 0;\n  }\n\n  50% {\n    stroke-dasharray: 100px, 200px;\n    stroke-dashoffset: -15px;\n  }\n\n  100% {\n    stroke-dasharray: 100px, 200px;\n    stroke-dashoffset: -125px;\n  }\n"])))),ee=(0,Z.ZP)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t[r.variant],t["color".concat((0,v.Z)(r.color))]]}})((e=>{let{ownerState:t,theme:r}=e;return(0,o.Z)({display:"inline-block"},"determinate"===t.variant&&{transition:r.transitions.create("transform")},"inherit"!==t.color&&{color:(r.vars||r).palette[t.color].main})}),(e=>{let{ownerState:t}=e;return"indeterminate"===t.variant&&(0,B.iv)(K||(K=Y||(Y=(0,L.Z)(["\n      animation: "," 1.4s linear infinite;\n    "]))),V)})),te=(0,Z.ZP)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(e,t)=>t.svg})({display:"block"}),re=(0,Z.ZP)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.circle,t["circle".concat((0,v.Z)(r.variant))],r.disableShrink&&t.circleDisableShrink]}})((e=>{let{ownerState:t,theme:r}=e;return(0,o.Z)({stroke:"currentColor"},"determinate"===t.variant&&{transition:r.transitions.create("stroke-dashoffset")},"indeterminate"===t.variant&&{strokeDasharray:"80px, 200px",strokeDashoffset:0})}),(e=>{let{ownerState:t}=e;return"indeterminate"===t.variant&&!t.disableShrink&&(0,B.iv)(Q||(Q=E||(E=(0,L.Z)(["\n      animation: "," 1.4s ease-in-out infinite;\n    "]))),_)})),ne=i.forwardRef((function(e,t){const r=(0,k.Z)({props:e,name:"MuiCircularProgress"}),{className:i,color:s="primary",disableShrink:c=!1,size:d=40,style:m,thickness:u=3.6,value:h=0,variant:x="indeterminate"}=r,f=(0,n.Z)(r,q),g=(0,o.Z)({},r,{color:s,disableShrink:c,size:d,thickness:u,value:h,variant:x}),Z=(e=>{const{classes:t,variant:r,color:n,disableShrink:o}=e,i={root:["root",r,"color".concat((0,v.Z)(n))],svg:["svg"],circle:["circle","circle".concat((0,v.Z)(r)),o&&"circleDisableShrink"]};return(0,l.Z)(i,$,t)})(g),b={},y={},S={};if("determinate"===x){const e=2*Math.PI*((U-u)/2);b.strokeDasharray=e.toFixed(3),S["aria-valuenow"]=Math.round(h),b.strokeDashoffset="".concat(((100-h)/100*e).toFixed(3),"px"),y.transform="rotate(-90deg)"}return(0,p.jsx)(ee,(0,o.Z)({className:(0,a.Z)(Z.root,i),style:(0,o.Z)({width:d,height:d},y,m),ownerState:g,ref:t,role:"progressbar"},S,f,{children:(0,p.jsx)(te,{className:Z.svg,ownerState:g,viewBox:"".concat(22," ").concat(22," ").concat(U," ").concat(U),children:(0,p.jsx)(re,{className:Z.circle,style:b,ownerState:g,cx:U,cy:U,r:(U-u)/2,fill:"none",strokeWidth:u})})}))})),oe=ne;var ie=r(4947);function ae(e){return(0,c.Z)("MuiCard",e)}(0,A.Z)("MuiCard",["root"]);const se=["className","raised"],ce=(0,Z.ZP)(ie.Z,{name:"MuiCard",slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({overflow:"hidden"}))),le=i.forwardRef((function(e,t){const r=(0,k.Z)({props:e,name:"MuiCard"}),{className:i,raised:s=!1}=r,c=(0,n.Z)(r,se),d=(0,o.Z)({},r,{raised:s}),m=(e=>{const{classes:t}=e;return(0,l.Z)({root:["root"]},ae,t)})(d);return(0,p.jsx)(ce,(0,o.Z)({className:(0,a.Z)(m.root,i),elevation:s?8:void 0,ref:t,ownerState:d},c))}));var de=r(3723),me=r(4517),ue=r.n(me),pe=r(6818),he=r.n(pe),xe=r(4115),fe=r(7363);const ge=e=>{const{pokemon:t}=e,{t:r}=(0,fe.$G)(["common"]),n=he()(t,["name"]),o="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/".concat(he()(t,["id"]),".svg"),i=(0,xe.z)(he()(t,["id"])),a=he()(t,["height"])/10,s=he()(t,["weight"])/10,c=he()(t,["types"]);return(0,p.jsx)(F.Z,{sx:{margin:"0.5rem",borderRadius:"1rem"},children:(0,p.jsx)(de.Z,{to:"/pokedex-react/pokemon/".concat(n,"/"),children:(0,p.jsxs)(le,{sx:{borderRadius:"1rem"},children:[(0,p.jsxs)(F.Z,{sx:{backgroundColor:"rgba(0, 0, 0, 0.1)",borderTopLeftRadius:"1rem",borderTopRightRadius:"1rem",alignItems:"center",justifyContent:"center",flexDirection:"column",paddingY:"2.5rem",display:"flex",height:"140px",width:"100%"},children:[(0,p.jsx)(F.Z,{sx:{fontFamily:"Roboto",paddingTop:"1rem"},children:Number(i)}),(0,p.jsx)(F.Z,{sx:{height:"140px",padding:"1rem"},children:(0,p.jsx)(F.Z,{component:"img",src:o,sx:{objectFit:"contain",height:"100%",width:"100%"}})})]}),(0,p.jsxs)(F.Z,{sx:{display:"flex",justifyContent:"center",flexDirection:"column",paddingY:"1rem",paddingX:"1.5rem"},children:[(0,p.jsx)(F.Z,{sx:{display:"flex",flexDirection:"column",alignSelf:"center",gap:"0.5rem",fontFamily:"Roboto",fontSize:"1rem",fontWeight:"bold"},children:ue()(n)}),(0,p.jsx)(F.Z,{sx:{paddingTop:".5rem",display:"flex",gap:"0.5rem",justifyContent:"center",alignItems:"center"},children:c.map((e=>{const t=he()(e,["type","name"]);return(0,p.jsx)("span",{className:t,children:t},t)}))})]}),(0,p.jsxs)(F.Z,{sx:{paddingY:"1rem",paddingX:{xs:".5rem",lg:"1.5rem"},lineClamp:"1",fontFamily:"Roboto",display:"flex",justifyContent:"space-between",alignItems:{xs:"center",lg:"flex-start"},flexDirection:{xs:"column",lg:"row"}},children:[(0,p.jsxs)("div",{children:[r("common:height"),": ",a," m"]}),(0,p.jsxs)("div",{children:[r("common:weight"),": ",s," kg"]})]})]})})})},ve=e=>{const{pokemons:t,loadItems:r,loading:n}=e,o=(0,i.createRef)();return(0,p.jsx)(y,{sx:{paddingX:"1rem",width:"100%",display:"flex",justifyContent:"center"},children:(0,p.jsxs)(T,{sx:{flexDirection:"column",gap:"1rem",marginTop:"2.5rem"},children:[(0,p.jsx)(F.Z,{sx:{display:"flex",justifyContent:"center",maxWidth:"80rem",scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}},ref:o,children:(0,p.jsx)(z.ZP,{container:!0,spacing:2,children:t.map(((e,t)=>(0,p.jsx)(z.ZP,{item:!0,xs:6,lg:4,xl:3,children:(0,p.jsx)(ge,{pokemon:e})},t)))})}),(0,p.jsx)(I.Z,{variant:"contained",color:"error",onClick:r,disabled:n,sx:{alignSelf:"center",marginTop:"1rem",marginBottom:"8rem"},children:n?(0,p.jsx)(oe,{size:20}):"Load More"})]})})}},4115:(e,t,r)=>{r.d(t,{z:()=>n});const n=e=>{const t="".concat(e);return"000".substring(0,3-t.length)+t}}}]);
//# sourceMappingURL=758.9f4ba0ad.chunk.js.map