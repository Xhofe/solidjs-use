import{z as i,U as h,i as p,t as F,M as d,c as l,a as y}from"./index-4bd6c1a1.js";import{u as t}from"./index-cd625b88.js";function C(n){const[e,r]=i(!1);return t(n,"mouseenter",()=>r(!0)),t(n,"mouseleave",()=>r(!1)),e}const u=F("<button></button>",2),m=()=>{const[n,e]=i(),r=C(n);return(()=>{const s=u.cloneNode(!0);return h(e,s),p(s,()=>r()?"Thank you!":"Hover me"),s})()};function a(n){const e=Object.assign({div:"div",h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code",span:"span",a:"a"},d(),n.components),{FunctionInfo:r,DemoContainer:s,ContextualNav:c}=e;return c||o("ContextualNav",!0),s||o("DemoContainer",!0),r||o("FunctionInfo",!0),l(e.div,{className:"markdown-body",get children(){return[l(e.h1,{children:"useElementHover"}),`
`,l(r,{fn:"useElementHover"}),`
`,l(e.p,{children:"Reactive element's hover state."}),`
`,l(e.h2,{children:"Demo"}),`
`,`
`,l(s,{get children(){return l(m,{})}}),`
`,l(e.h2,{children:"Usage"}),`
`,l(e.div,{"data-rehype-pretty-code-fragment":"",get children(){return l(e.pre,{style:{backgroundColor:"#1F2028"},"data-language":"tsx","data-theme":"default",get children(){return l(e.code,{"data-language":"tsx","data-theme":"default",get children(){return[l(e.span,{className:"line",get children(){return[l(e.span,{style:{color:"#86E1FC"},children:"import"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#B4C2F0"},children:"{ "}),l(e.span,{style:{color:"#C8D3F5"},children:"createSignal"}),l(e.span,{style:{color:"#B4C2F0"},children:" }"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#86E1FC"},children:"from"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#86E1FC"},children:"'"}),l(e.span,{style:{color:"#C3E88D"},children:"solid-js"}),l(e.span,{style:{color:"#86E1FC"},children:"'"})]}}),`
`,l(e.span,{className:"line",get children(){return[l(e.span,{style:{color:"#86E1FC"},children:"import"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#B4C2F0"},children:"{ "}),l(e.span,{style:{color:"#C8D3F5"},children:"useElementHover"}),l(e.span,{style:{color:"#B4C2F0"},children:" }"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#86E1FC"},children:"from"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#86E1FC"},children:"'"}),l(e.span,{style:{color:"#C3E88D"},children:"solidjs-use"}),l(e.span,{style:{color:"#86E1FC"},children:"'"})]}}),`
`,l(e.span,{className:"line",children:" "}),`
`,l(e.span,{className:"line",get children(){return[l(e.span,{style:{color:"#C099FF"},children:"const"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#82AAFF"},children:"Demo"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#86E1FC"},children:"="}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#B4C2F0"},children:"()"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#C099FF"},children:"=>"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#B4C2F0"},children:"{"})]}}),`
`,l(e.span,{className:"line",get children(){return[l(e.span,{style:{color:"#B4C2F0"},children:"  "}),l(e.span,{style:{color:"#C099FF"},children:"const"}),l(e.span,{style:{color:"#B4C2F0"},children:" "}),l(e.span,{style:{color:"#86E1FC"},children:"["}),l(e.span,{style:{color:"#FF98A4"},children:"el"}),l(e.span,{style:{color:"#86E1FC"},children:","}),l(e.span,{style:{color:"#B4C2F0"},children:" "}),l(e.span,{style:{color:"#FF98A4"},children:"setEl"}),l(e.span,{style:{color:"#86E1FC"},children:"]"}),l(e.span,{style:{color:"#B4C2F0"},children:" "}),l(e.span,{style:{color:"#86E1FC"},children:"="}),l(e.span,{style:{color:"#B4C2F0"},children:" "}),l(e.span,{style:{color:"#65BCFF"},children:"createSignal"}),l(e.span,{style:{color:"#86E1FC"},children:"<"}),l(e.span,{style:{color:"#FFC777"},children:"HTMLElement"}),l(e.span,{style:{color:"#86E1FC"},children:">"}),l(e.span,{style:{color:"#B4C2F0"},children:"()"})]}}),`
`,l(e.span,{className:"line",get children(){return[l(e.span,{style:{color:"#B4C2F0"},children:"  "}),l(e.span,{style:{color:"#C099FF"},children:"const"}),l(e.span,{style:{color:"#B4C2F0"},children:" "}),l(e.span,{style:{color:"#FF98A4"},children:"isHovered"}),l(e.span,{style:{color:"#B4C2F0"},children:" "}),l(e.span,{style:{color:"#86E1FC"},children:"="}),l(e.span,{style:{color:"#B4C2F0"},children:" "}),l(e.span,{style:{color:"#65BCFF"},children:"useElementHover"}),l(e.span,{style:{color:"#B4C2F0"},children:"("}),l(e.span,{style:{color:"#C8D3F5"},children:"el"}),l(e.span,{style:{color:"#B4C2F0"},children:")"})]}}),`
`,l(e.span,{className:"line",children:" "}),`
`,l(e.span,{className:"line",get children(){return[l(e.span,{style:{color:"#B4C2F0"},children:"  "}),l(e.span,{style:{color:"#86E1FC"},children:"return"}),l(e.span,{style:{color:"#B4C2F0"},children:" "}),l(e.span,{style:{color:"#86E1FC"},children:"<"}),l(e.span,{style:{color:"#FF757F"},children:"button "}),l(e.span,{style:{color:"#C099FF"},children:"ref"}),l(e.span,{style:{color:"#86E1FC"},children:"={"}),l(e.span,{style:{color:"#C8D3F5"},children:"setEl"}),l(e.span,{style:{color:"#86E1FC"},children:"}>{"}),l(e.span,{style:{color:"#65BCFF"},children:"isHovered"}),l(e.span,{style:{color:"#B4C2F0"},children:"()"}),l(e.span,{style:{color:"#86E1FC"},children:"."}),l(e.span,{style:{color:"#65BCFF"},children:"toString"}),l(e.span,{style:{color:"#B4C2F0"},children:"()"}),l(e.span,{style:{color:"#86E1FC"},children:"}</"}),l(e.span,{style:{color:"#FF757F"},children:"button"}),l(e.span,{style:{color:"#86E1FC"},children:">"})]}}),`
`,l(e.span,{className:"line",get children(){return l(e.span,{style:{color:"#B4C2F0"},children:"}"})}})]}})}})}}),`
`,l(e.h2,{children:"Type Declarations"}),`
`,l(e.div,{"data-rehype-pretty-code-fragment":"",get children(){return l(e.pre,{style:{backgroundColor:"#1F2028"},"data-language":"typescript","data-theme":"default",get children(){return l(e.code,{"data-language":"typescript","data-theme":"default",get children(){return l(e.span,{className:"line",get children(){return[l(e.span,{style:{color:"#C099FF"},children:"declare"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#C099FF"},children:"function"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#82AAFF"},children:"useElementHover"}),l(e.span,{style:{color:"#B4C2F0"},children:"("}),l(e.span,{style:{color:"#FCA7EA"},children:"el"}),l(e.span,{style:{color:"#86E1FC"},children:":"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#FFC777"},children:"MaybeAccessor"}),l(e.span,{style:{color:"#86E1FC"},children:"<"}),l(e.span,{style:{color:"#FFC777"},children:"EventTarget"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#86E1FC"},children:"|"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#FF966C"},children:"null"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#86E1FC"},children:"|"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#FF966C"},children:"undefined"}),l(e.span,{style:{color:"#86E1FC"},children:">"}),l(e.span,{style:{color:"#B4C2F0"},children:")"}),l(e.span,{style:{color:"#86E1FC"},children:":"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#FFC777"},children:"Accessor"}),l(e.span,{style:{color:"#86E1FC"},children:"<"}),l(e.span,{style:{color:"#FF966C"},children:"boolean"}),l(e.span,{style:{color:"#86E1FC"},children:">;"})]}})}})}})}}),`
`,l(e.h2,{children:"Source"}),`
`,l(e.p,{get children(){return[l(e.a,{href:"https://github.com/solidjs-use/solidjs-use/blob/main/packages/core/src/useElementHover/index.ts",children:"Source"})," • ",l(e.a,{href:"https://github.com/solidjs-use/solidjs-use/blob/main/packages/core/src/useElementHover/demo.tsx",children:"Demo"})," • ",l(e.a,{href:"https://github.com/solidjs-use/solidjs-use/blob/main/packages/core/src/useElementHover/index.md",children:"Docs"})," • ",l(e.a,{href:"https://vueuse.org/core/useElementHover",children:"VueUse Docs"})]}}),`
`,l(c,{links:[{href:"#demo",label:"Demo",indent:!1},{href:"#usage",label:"Usage",indent:!1},{href:"#type-declarations",label:"Type Declarations",indent:!1},{href:"#source",label:"Source",indent:!1}]})]}})}function f(n={}){const{wrapper:e}=Object.assign({},d(),n.components);return e?l(e,y(n,{get children(){return l(a,n)}})):a(n)}function o(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}export{f as default};
