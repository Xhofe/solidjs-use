import{u as h,W as E,k as m,z as D,Q as f,i as p,c as l,g as F,S as B,t as C,M as u,a as b}from"./index-4bd6c1a1.js";import{u as N}from"./index-ad33cdcd.js";import"./index-c9f703ce.js";import"./scheduler-3ae68f06.js";function S(n={},e={}){const{navigator:o=E}=e,r=o,s=N(()=>r&&"canShare"in r);return{isSupported:s,share:async(a={})=>{if(s()){const c={...h(n),...h(a)};let i=!0;if(c.files&&r.canShare&&(i=r.canShare({files:c.files})),i)return r.share(c)}}}}const A=C('<input type="text" w="30vw" placeholder="Note">',1),v=C("<div><button></button></div>",4),x=()=>{const[n,e]=D({title:"solidjs-use",text:"Collection of Solid utilities inspired completely by VueUse!",url:f?location.href:""}),{share:o,isSupported:r}=S(n),s=()=>o().catch(t=>t);return(()=>{const t=v.cloneNode(!0),a=t.firstChild;return p(t,l(B,{get when(){return r()},get children(){const c=A.cloneNode(!0);return c.$$input=i=>{e(g=>({...g,text:i.currentTarget.value}))},F(()=>c.value=n().text),c}}),a),a.$$click=s,p(a,()=>r()?"Share":"Web share is not supported in your browser"),F(()=>a.disabled=!r()),t})()};m(["input","click"]);function y(n){const e=Object.assign({div:"div",h1:"h1",p:"p",a:"a",blockquote:"blockquote",code:"code",h2:"h2",pre:"pre",span:"span",h3:"h3"},u(),n.components),{FunctionInfo:o,DemoContainer:r,ContextualNav:s}=e;return s||d("ContextualNav",!0),r||d("DemoContainer",!0),o||d("FunctionInfo",!0),l(e.div,{className:"markdown-body",get children(){return[l(e.h1,{children:"useShare"}),`
`,l(o,{fn:"useShare"}),`
`,l(e.p,{get children(){return["Reactive ",l(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Navigator/share",children:"Web Share API"}),". The Browser provides features that can share content in text or file."]}}),`
`,l(e.blockquote,{get children(){return[`
`,l(e.p,{get children(){return["The ",l(e.code,{children:"share"})," method has to be called following a user gesture like a button click. It can’t simply be called on page load for example. That’s in place to help prevent abuse."]}}),`
`]}}),`
`,l(e.h2,{children:"Demo"}),`
`,`
`,l(r,{get children(){return l(x,{})}}),`
`,l(e.h2,{children:"Usage"}),`
`,l(e.div,{"data-rehype-pretty-code-fragment":"",get children(){return l(e.pre,{style:{backgroundColor:"#1F2028"},"data-language":"js","data-theme":"default",get children(){return l(e.code,{"data-language":"js","data-theme":"default",get children(){return[l(e.span,{className:"line",get children(){return[l(e.span,{style:{color:"#86E1FC"},children:"import"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#B4C2F0"},children:"{ "}),l(e.span,{style:{color:"#C8D3F5"},children:"useShare"}),l(e.span,{style:{color:"#B4C2F0"},children:" }"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#86E1FC"},children:"from"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#86E1FC"},children:"'"}),l(e.span,{style:{color:"#C3E88D"},children:"solidjs-use"}),l(e.span,{style:{color:"#86E1FC"},children:"'"})]}}),`
`,l(e.span,{className:"line",children:" "}),`
`,l(e.span,{className:"line",get children(){return[l(e.span,{style:{color:"#C099FF"},children:"const"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#86E1FC"},children:"{"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#FF98A4"},children:"share"}),l(e.span,{style:{color:"#86E1FC"},children:","}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#FF98A4"},children:"isSupported"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#86E1FC"},children:"}"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#86E1FC"},children:"="}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#65BCFF"},children:"useShare"}),l(e.span,{style:{color:"#B4C2F0"},children:"()"})]}}),`
`,l(e.span,{className:"line",children:" "}),`
`,l(e.span,{className:"line",get children(){return[l(e.span,{style:{color:"#C099FF"},children:"function"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#82AAFF"},children:"startShare"}),l(e.span,{style:{color:"#B4C2F0"},children:"()"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#B4C2F0"},children:"{"})]}}),`
`,l(e.span,{className:"line",get children(){return[l(e.span,{style:{color:"#B4C2F0"},children:"  "}),l(e.span,{style:{color:"#65BCFF"},children:"share"}),l(e.span,{style:{color:"#B4C2F0"},children:"({"})]}}),`
`,l(e.span,{className:"line",get children(){return[l(e.span,{style:{color:"#B4C2F0"},children:"    "}),l(e.span,{style:{color:"#4FD6BE"},children:"title"}),l(e.span,{style:{color:"#86E1FC"},children:":"}),l(e.span,{style:{color:"#A9B8E8"},children:" "}),l(e.span,{style:{color:"#86E1FC"},children:"'"}),l(e.span,{style:{color:"#C3E88D"},children:"Hello"}),l(e.span,{style:{color:"#86E1FC"},children:"'"}),l(e.span,{style:{color:"#86E1FC"},children:","})]}}),`
`,l(e.span,{className:"line",get children(){return[l(e.span,{style:{color:"#B4C2F0"},children:"    "}),l(e.span,{style:{color:"#4FD6BE"},children:"text"}),l(e.span,{style:{color:"#86E1FC"},children:":"}),l(e.span,{style:{color:"#A9B8E8"},children:" "}),l(e.span,{style:{color:"#86E1FC"},children:"'"}),l(e.span,{style:{color:"#C3E88D"},children:"Hello my friend!"}),l(e.span,{style:{color:"#86E1FC"},children:"'"}),l(e.span,{style:{color:"#86E1FC"},children:","})]}}),`
`,l(e.span,{className:"line",get children(){return[l(e.span,{style:{color:"#B4C2F0"},children:"    "}),l(e.span,{style:{color:"#4FD6BE"},children:"url"}),l(e.span,{style:{color:"#86E1FC"},children:":"}),l(e.span,{style:{color:"#A9B8E8"},children:" "}),l(e.span,{style:{color:"#FFC777"},children:"location"}),l(e.span,{style:{color:"#86E1FC"},children:"."}),l(e.span,{style:{color:"#A9B8E8"},children:"href"})]}}),`
`,l(e.span,{className:"line",get children(){return[l(e.span,{style:{color:"#A9B8E8"},children:"  "}),l(e.span,{style:{color:"#B4C2F0"},children:"})"})]}}),`
`,l(e.span,{className:"line",get children(){return l(e.span,{style:{color:"#B4C2F0"},children:"}"})}})]}})}})}}),`
`,l(e.h3,{children:"Passing a source Accessor"}),`
`,l(e.p,{get children(){return["You can pass a ",l(e.code,{children:"Accessor"})," to it, changes from the source ref will be reflected to your sharing options."]}}),`
`,l(e.div,{"data-rehype-pretty-code-fragment":"",get children(){return l(e.pre,{style:{backgroundColor:"#1F2028"},"data-language":"ts","data-theme":"default",get children(){return l(e.code,{"data-language":"ts","data-theme":"default",get children(){return[l(e.span,{className:"line",get children(){return[l(e.span,{style:{color:"#86E1FC"},children:"import"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#B4C2F0"},children:"{ "}),l(e.span,{style:{color:"#C8D3F5"},children:"createSignal"}),l(e.span,{style:{color:"#B4C2F0"},children:" }"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#86E1FC"},children:"from"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#86E1FC"},children:"'"}),l(e.span,{style:{color:"#C3E88D"},children:"solid-js"}),l(e.span,{style:{color:"#86E1FC"},children:"'"})]}}),`
`,l(e.span,{className:"line",children:" "}),`
`,l(e.span,{className:"line",get children(){return[l(e.span,{style:{color:"#C099FF"},children:"const"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#86E1FC"},children:"["}),l(e.span,{style:{color:"#FF98A4"},children:"shareOptions"}),l(e.span,{style:{color:"#86E1FC"},children:","}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#FF98A4"},children:"setShareOptions"}),l(e.span,{style:{color:"#86E1FC"},children:"]"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#86E1FC"},children:"="}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#65BCFF"},children:"createSignal"}),l(e.span,{style:{color:"#86E1FC"},children:"<"}),l(e.span,{style:{color:"#FFC777"},children:"ShareOptions"}),l(e.span,{style:{color:"#86E1FC"},children:">"}),l(e.span,{style:{color:"#B4C2F0"},children:"({"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#4FD6BE"},children:"text"}),l(e.span,{style:{color:"#86E1FC"},children:":"}),l(e.span,{style:{color:"#A9B8E8"},children:" "}),l(e.span,{style:{color:"#86E1FC"},children:"'"}),l(e.span,{style:{color:"#C3E88D"},children:"foo"}),l(e.span,{style:{color:"#86E1FC"},children:"'"}),l(e.span,{style:{color:"#A9B8E8"},children:" "}),l(e.span,{style:{color:"#B4C2F0"},children:"})"})]}}),`
`,l(e.span,{className:"line",get children(){return[l(e.span,{style:{color:"#C099FF"},children:"const"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#86E1FC"},children:"{"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#FF98A4"},children:"share"}),l(e.span,{style:{color:"#86E1FC"},children:","}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#FF98A4"},children:"isSupported"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#86E1FC"},children:"}"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#86E1FC"},children:"="}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#65BCFF"},children:"useShare"}),l(e.span,{style:{color:"#B4C2F0"},children:"("}),l(e.span,{style:{color:"#C8D3F5"},children:"shareOptions"}),l(e.span,{style:{color:"#B4C2F0"},children:")"})]}}),`
`,l(e.span,{className:"line",children:" "}),`
`,l(e.span,{className:"line",get children(){return[l(e.span,{style:{color:"#65BCFF"},children:"setShareOptions"}),l(e.span,{style:{color:"#B4C2F0"},children:"({"})]}}),`
`,l(e.span,{className:"line",get children(){return[l(e.span,{style:{color:"#C8D3F5"},children:"  "}),l(e.span,{style:{color:"#4FD6BE"},children:"text"}),l(e.span,{style:{color:"#86E1FC"},children:":"}),l(e.span,{style:{color:"#A9B8E8"},children:" "}),l(e.span,{style:{color:"#86E1FC"},children:"'"}),l(e.span,{style:{color:"#C3E88D"},children:"bar"}),l(e.span,{style:{color:"#86E1FC"},children:"'"})]}}),`
`,l(e.span,{className:"line",get children(){return l(e.span,{style:{color:"#B4C2F0"},children:"})"})}}),`
`,l(e.span,{className:"line",children:" "}),`
`,l(e.span,{className:"line",get children(){return[l(e.span,{style:{color:"#65BCFF"},children:"share"}),l(e.span,{style:{color:"#B4C2F0"},children:"()"})]}})]}})}})}}),`
`,l(e.h2,{children:"Type Declarations"}),`
`,l(e.div,{"data-rehype-pretty-code-fragment":"",get children(){return l(e.pre,{style:{backgroundColor:"#1F2028"},"data-language":"typescript","data-theme":"default",get children(){return l(e.code,{"data-language":"typescript","data-theme":"default",get children(){return[l(e.span,{className:"line",get children(){return[l(e.span,{style:{color:"#C099FF"},children:"interface"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#FFC777"},children:"UseShareOptions"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#B4C2F0"},children:"{"})]}}),`
`,l(e.span,{className:"line",get children(){return[l(e.span,{style:{color:"#C8D3F5"},children:"    "}),l(e.span,{style:{color:"#4FD6BE"},children:"title"}),l(e.span,{style:{color:"#86E1FC"},children:"?:"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#FF966C"},children:"string"}),l(e.span,{style:{color:"#86E1FC"},children:";"})]}}),`
`,l(e.span,{className:"line",get children(){return[l(e.span,{style:{color:"#C8D3F5"},children:"    "}),l(e.span,{style:{color:"#4FD6BE"},children:"files"}),l(e.span,{style:{color:"#86E1FC"},children:"?:"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#FFC777"},children:"File"}),l(e.span,{style:{color:"#86E1FC"},children:"[];"})]}}),`
`,l(e.span,{className:"line",get children(){return[l(e.span,{style:{color:"#C8D3F5"},children:"    "}),l(e.span,{style:{color:"#4FD6BE"},children:"text"}),l(e.span,{style:{color:"#86E1FC"},children:"?:"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#FF966C"},children:"string"}),l(e.span,{style:{color:"#86E1FC"},children:";"})]}}),`
`,l(e.span,{className:"line",get children(){return[l(e.span,{style:{color:"#C8D3F5"},children:"    "}),l(e.span,{style:{color:"#4FD6BE"},children:"url"}),l(e.span,{style:{color:"#86E1FC"},children:"?:"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#FF966C"},children:"string"}),l(e.span,{style:{color:"#86E1FC"},children:";"})]}}),`
`,l(e.span,{className:"line",get children(){return l(e.span,{style:{color:"#B4C2F0"},children:"}"})}}),`
`,l(e.span,{className:"line",get children(){return l(e.span,{style:{color:"#7A88CF"},children:"/**"})}}),`
`,l(e.span,{className:"line",get children(){return l(e.span,{style:{color:"#7A88CF"},children:" * Reactive Web Share API."})}}),`
`,l(e.span,{className:"line",get children(){return l(e.span,{style:{color:"#7A88CF"},children:" */"})}}),`
`,l(e.span,{className:"line",get children(){return[l(e.span,{style:{color:"#C099FF"},children:"declare"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#C099FF"},children:"function"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#82AAFF"},children:"useShare"}),l(e.span,{style:{color:"#B4C2F0"},children:"("}),l(e.span,{style:{color:"#FCA7EA"},children:"shareOptions"}),l(e.span,{style:{color:"#86E1FC"},children:"?:"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#FFC777"},children:"MaybeAccessor"}),l(e.span,{style:{color:"#86E1FC"},children:"<"}),l(e.span,{style:{color:"#FFC777"},children:"UseShareOptions"}),l(e.span,{style:{color:"#86E1FC"},children:">,"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#FCA7EA"},children:"options"}),l(e.span,{style:{color:"#86E1FC"},children:"?:"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#FFC777"},children:"ConfigurableNavigator"}),l(e.span,{style:{color:"#B4C2F0"},children:")"}),l(e.span,{style:{color:"#86E1FC"},children:":"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#B4C2F0"},children:"{"})]}}),`
`,l(e.span,{className:"line",get children(){return[l(e.span,{style:{color:"#C8D3F5"},children:"    "}),l(e.span,{style:{color:"#4FD6BE"},children:"isSupported"}),l(e.span,{style:{color:"#86E1FC"},children:":"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#FFC777"},children:"solid_js"}),l(e.span,{style:{color:"#86E1FC"},children:"."}),l(e.span,{style:{color:"#FFC777"},children:"Accessor"}),l(e.span,{style:{color:"#86E1FC"},children:"<"}),l(e.span,{style:{color:"#FF966C"},children:"boolean"}),l(e.span,{style:{color:"#86E1FC"},children:">;"})]}}),`
`,l(e.span,{className:"line",get children(){return[l(e.span,{style:{color:"#C8D3F5"},children:"    "}),l(e.span,{style:{color:"#82AAFF"},children:"share"}),l(e.span,{style:{color:"#86E1FC"},children:":"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#B4C2F0"},children:"("}),l(e.span,{style:{color:"#FCA7EA"},children:"overrideOptions"}),l(e.span,{style:{color:"#86E1FC"},children:"?:"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#FFC777"},children:"MaybeAccessor"}),l(e.span,{style:{color:"#86E1FC"},children:"<"}),l(e.span,{style:{color:"#FFC777"},children:"UseShareOptions"}),l(e.span,{style:{color:"#86E1FC"},children:">"}),l(e.span,{style:{color:"#B4C2F0"},children:")"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#C099FF"},children:"=>"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#FFC777"},children:"Promise"}),l(e.span,{style:{color:"#86E1FC"},children:"<"}),l(e.span,{style:{color:"#FF966C"},children:"void"}),l(e.span,{style:{color:"#86E1FC"},children:">;"})]}}),`
`,l(e.span,{className:"line",get children(){return[l(e.span,{style:{color:"#B4C2F0"},children:"}"}),l(e.span,{style:{color:"#86E1FC"},children:";"})]}}),`
`,l(e.span,{className:"line",get children(){return[l(e.span,{style:{color:"#C099FF"},children:"type"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#FFC777"},children:"UseShareReturn"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#86E1FC"},children:"="}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#FFC777"},children:"ReturnType"}),l(e.span,{style:{color:"#86E1FC"},children:"<typeof"}),l(e.span,{style:{color:"#C8D3F5"},children:" useShare"}),l(e.span,{style:{color:"#86E1FC"},children:">;"})]}})]}})}})}}),`
`,l(e.h2,{children:"Source"}),`
`,l(e.p,{get children(){return[l(e.a,{href:"https://github.com/solidjs-use/solidjs-use/blob/main/packages/core/src/useShare/index.ts",children:"Source"})," • ",l(e.a,{href:"https://github.com/solidjs-use/solidjs-use/blob/main/packages/core/src/useShare/demo.tsx",children:"Demo"})," • ",l(e.a,{href:"https://github.com/solidjs-use/solidjs-use/blob/main/packages/core/src/useShare/index.md",children:"Docs"})," • ",l(e.a,{href:"https://vueuse.org/core/useShare",children:"VueUse Docs"})]}}),`
`,l(s,{links:[{href:"#demo",label:"Demo",indent:!1},{href:"#usage",label:"Usage",indent:!1},{href:"#passing-a-source-accessor",label:"Passing a source Accessor",indent:!0},{href:"#type-declarations",label:"Type Declarations",indent:!1},{href:"#source",label:"Source",indent:!1}]})]}})}function _(n={}){const{wrapper:e}=Object.assign({},u(),n.components);return e?l(e,b(n,{get children(){return l(y,n)}})):y(n)}function d(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}export{_ as default};
