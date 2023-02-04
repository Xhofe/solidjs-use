import{k as F,z as a,i as y,U as C,t as u,M as d,c as e,a as B}from"./index-4bd6c1a1.js";import{t as m,f as E,w as g,a as D,b as f}from"./index-0b9fdde9.js";import{u as b}from"./index-e206cf67.js";import{i as v}from"./interval-79cdcf4b.js";import{m as N,a as x}from"./mapTo-5071007c.js";import{s as j}from"./startWith-b6fa54c7.js";import"./Observable-0ea24d77.js";const A=u("<div><button>count is: </button><button>stop</button></div>",6),k=()=>{const[n,l]=a(0),[o,c]=a(null);return b(v(1e3).pipe(N(1),m(E(o,"click")),g(D(n).pipe(j(0))),x(([r,s])=>s+r)).subscribe(f(l))),(()=>{const r=A.cloneNode(!0),s=r.firstChild;s.firstChild;const p=s.nextSibling;return s.$$click=()=>l(h=>h+1),y(s,n,null),C(c,p),r})()};F(["click"]);function i(n){const l=Object.assign({div:"div",h1:"h1",p:"p",code:"code",a:"a",h2:"h2",pre:"pre",span:"span"},d(),n.components),{FunctionInfo:o,DemoContainer:c,ContextualNav:r}=l;return r||t("ContextualNav",!0),c||t("DemoContainer",!0),o||t("FunctionInfo",!0),e(l.div,{className:"markdown-body",get children(){return[e(l.h1,{children:"toObserver"}),`
`,e(o,{fn:"toObserver"}),`
`,e(l.p,{get children(){return["Sugar function to convert a ",e(l.code,{children:"Accessor"})," into an RxJS ",e(l.a,{href:"https://rxjs.dev/guide/observer",children:"Observer"}),"."]}}),`
`,e(l.h2,{children:"Demo"}),`
`,`
`,e(c,{get children(){return e(k,{})}}),`
`,e(l.p,{get children(){return["Available in the ",e(l.a,{href:"/solidjs-use/rxjs/README",children:"@solidjs-use/rxjs"})," add-on."]}}),`
`,e(l.h2,{children:"Usage"}),`
`,e(l.div,{"data-rehype-pretty-code-fragment":"",get children(){return e(l.pre,{style:{backgroundColor:"#1F2028"},"data-language":"tsx","data-theme":"default",get children(){return e(l.code,{"data-language":"tsx","data-theme":"default",get children(){return[e(l.span,{className:"line",get children(){return[e(l.span,{style:{color:"#86E1FC"},children:"import"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#B4C2F0"},children:"{ "}),e(l.span,{style:{color:"#C8D3F5"},children:"from"}),e(l.span,{style:{color:"#86E1FC"},children:","}),e(l.span,{style:{color:"#B4C2F0"},children:" "}),e(l.span,{style:{color:"#C8D3F5"},children:"fromEvent"}),e(l.span,{style:{color:"#86E1FC"},children:","}),e(l.span,{style:{color:"#B4C2F0"},children:" "}),e(l.span,{style:{color:"#C8D3F5"},children:"toObserver"}),e(l.span,{style:{color:"#86E1FC"},children:","}),e(l.span,{style:{color:"#B4C2F0"},children:" "}),e(l.span,{style:{color:"#C8D3F5"},children:"useSubscription"}),e(l.span,{style:{color:"#B4C2F0"},children:" }"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#86E1FC"},children:"from"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#86E1FC"},children:"'"}),e(l.span,{style:{color:"#C3E88D"},children:"@solidjs-use/rxjs"}),e(l.span,{style:{color:"#86E1FC"},children:"'"})]}}),`
`,e(l.span,{className:"line",get children(){return[e(l.span,{style:{color:"#86E1FC"},children:"import"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#B4C2F0"},children:"{ "}),e(l.span,{style:{color:"#C8D3F5"},children:"interval"}),e(l.span,{style:{color:"#B4C2F0"},children:" }"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#86E1FC"},children:"from"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#86E1FC"},children:"'"}),e(l.span,{style:{color:"#C3E88D"},children:"rxjs"}),e(l.span,{style:{color:"#86E1FC"},children:"'"})]}}),`
`,e(l.span,{className:"line",get children(){return[e(l.span,{style:{color:"#86E1FC"},children:"import"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#B4C2F0"},children:"{ "}),e(l.span,{style:{color:"#C8D3F5"},children:"map"}),e(l.span,{style:{color:"#86E1FC"},children:","}),e(l.span,{style:{color:"#B4C2F0"},children:" "}),e(l.span,{style:{color:"#C8D3F5"},children:"mapTo"}),e(l.span,{style:{color:"#86E1FC"},children:","}),e(l.span,{style:{color:"#B4C2F0"},children:" "}),e(l.span,{style:{color:"#C8D3F5"},children:"startWith"}),e(l.span,{style:{color:"#86E1FC"},children:","}),e(l.span,{style:{color:"#B4C2F0"},children:" "}),e(l.span,{style:{color:"#C8D3F5"},children:"takeUntil"}),e(l.span,{style:{color:"#86E1FC"},children:","}),e(l.span,{style:{color:"#B4C2F0"},children:" "}),e(l.span,{style:{color:"#C8D3F5"},children:"withLatestFrom"}),e(l.span,{style:{color:"#B4C2F0"},children:" }"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#86E1FC"},children:"from"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#86E1FC"},children:"'"}),e(l.span,{style:{color:"#C3E88D"},children:"rxjs/operators"}),e(l.span,{style:{color:"#86E1FC"},children:"'"})]}}),`
`,e(l.span,{className:"line",get children(){return[e(l.span,{style:{color:"#86E1FC"},children:"import"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#B4C2F0"},children:"{ "}),e(l.span,{style:{color:"#C8D3F5"},children:"Accessor"}),e(l.span,{style:{color:"#86E1FC"},children:","}),e(l.span,{style:{color:"#B4C2F0"},children:" "}),e(l.span,{style:{color:"#C8D3F5"},children:"createSignal"}),e(l.span,{style:{color:"#B4C2F0"},children:" }"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#86E1FC"},children:"from"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#86E1FC"},children:"'"}),e(l.span,{style:{color:"#C3E88D"},children:"solid-js"}),e(l.span,{style:{color:"#86E1FC"},children:"'"})]}}),`
`,e(l.span,{className:"line",children:" "}),`
`,e(l.span,{className:"line",get children(){return[e(l.span,{style:{color:"#C099FF"},children:"const"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#82AAFF"},children:"Demo"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#86E1FC"},children:"="}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#B4C2F0"},children:"()"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#C099FF"},children:"=>"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#B4C2F0"},children:"{"})]}}),`
`,e(l.span,{className:"line",get children(){return[e(l.span,{style:{color:"#B4C2F0"},children:"  "}),e(l.span,{style:{color:"#C099FF"},children:"const"}),e(l.span,{style:{color:"#B4C2F0"},children:" "}),e(l.span,{style:{color:"#86E1FC"},children:"["}),e(l.span,{style:{color:"#FF98A4"},children:"count"}),e(l.span,{style:{color:"#86E1FC"},children:","}),e(l.span,{style:{color:"#B4C2F0"},children:" "}),e(l.span,{style:{color:"#FF98A4"},children:"setCount"}),e(l.span,{style:{color:"#86E1FC"},children:"]"}),e(l.span,{style:{color:"#B4C2F0"},children:" "}),e(l.span,{style:{color:"#86E1FC"},children:"="}),e(l.span,{style:{color:"#B4C2F0"},children:" "}),e(l.span,{style:{color:"#65BCFF"},children:"createSignal"}),e(l.span,{style:{color:"#B4C2F0"},children:"("}),e(l.span,{style:{color:"#FF966C"},children:"0"}),e(l.span,{style:{color:"#B4C2F0"},children:")"})]}}),`
`,e(l.span,{className:"line",get children(){return[e(l.span,{style:{color:"#B4C2F0"},children:"  "}),e(l.span,{style:{color:"#C099FF"},children:"const"}),e(l.span,{style:{color:"#B4C2F0"},children:" "}),e(l.span,{style:{color:"#86E1FC"},children:"["}),e(l.span,{style:{color:"#FF98A4"},children:"button"}),e(l.span,{style:{color:"#86E1FC"},children:","}),e(l.span,{style:{color:"#B4C2F0"},children:" "}),e(l.span,{style:{color:"#FF98A4"},children:"setButton"}),e(l.span,{style:{color:"#86E1FC"},children:"]"}),e(l.span,{style:{color:"#B4C2F0"},children:" "}),e(l.span,{style:{color:"#86E1FC"},children:"="}),e(l.span,{style:{color:"#B4C2F0"},children:" "}),e(l.span,{style:{color:"#65BCFF"},children:"createSignal"}),e(l.span,{style:{color:"#86E1FC"},children:"<"}),e(l.span,{style:{color:"#FFC777"},children:"HTMLButtonElement"}),e(l.span,{style:{color:"#B4C2F0"},children:" "}),e(l.span,{style:{color:"#86E1FC"},children:"|"}),e(l.span,{style:{color:"#B4C2F0"},children:" "}),e(l.span,{style:{color:"#FF966C"},children:"null"}),e(l.span,{style:{color:"#86E1FC"},children:">"}),e(l.span,{style:{color:"#B4C2F0"},children:"("}),e(l.span,{style:{color:"#7F85A3"},children:"null"}),e(l.span,{style:{color:"#B4C2F0"},children:")"})]}}),`
`,e(l.span,{className:"line",children:" "}),`
`,e(l.span,{className:"line",get children(){return[e(l.span,{style:{color:"#B4C2F0"},children:"  "}),e(l.span,{style:{color:"#65BCFF"},children:"useSubscription"}),e(l.span,{style:{color:"#B4C2F0"},children:"("})]}}),`
`,e(l.span,{className:"line",get children(){return[e(l.span,{style:{color:"#B4C2F0"},children:"    "}),e(l.span,{style:{color:"#65BCFF"},children:"interval"}),e(l.span,{style:{color:"#B4C2F0"},children:"("}),e(l.span,{style:{color:"#FF966C"},children:"1000"}),e(l.span,{style:{color:"#B4C2F0"},children:")"})]}}),`
`,e(l.span,{className:"line",get children(){return[e(l.span,{style:{color:"#B4C2F0"},children:"      "}),e(l.span,{style:{color:"#86E1FC"},children:"."}),e(l.span,{style:{color:"#65BCFF"},children:"pipe"}),e(l.span,{style:{color:"#B4C2F0"},children:"("})]}}),`
`,e(l.span,{className:"line",get children(){return[e(l.span,{style:{color:"#B4C2F0"},children:"        "}),e(l.span,{style:{color:"#65BCFF"},children:"mapTo"}),e(l.span,{style:{color:"#B4C2F0"},children:"("}),e(l.span,{style:{color:"#FF966C"},children:"1"}),e(l.span,{style:{color:"#B4C2F0"},children:")"}),e(l.span,{style:{color:"#86E1FC"},children:","})]}}),`
`,e(l.span,{className:"line",get children(){return[e(l.span,{style:{color:"#B4C2F0"},children:"        "}),e(l.span,{style:{color:"#65BCFF"},children:"takeUntil"}),e(l.span,{style:{color:"#B4C2F0"},children:"("}),e(l.span,{style:{color:"#65BCFF"},children:"fromEvent"}),e(l.span,{style:{color:"#B4C2F0"},children:"("}),e(l.span,{style:{color:"#C8D3F5"},children:"button"}),e(l.span,{style:{color:"#B4C2F0"},children:" "}),e(l.span,{style:{color:"#86E1FC"},children:"as"}),e(l.span,{style:{color:"#B4C2F0"},children:" "}),e(l.span,{style:{color:"#FFC777"},children:"Accessor"}),e(l.span,{style:{color:"#86E1FC"},children:"<"}),e(l.span,{style:{color:"#FFC777"},children:"HTMLButtonElement"}),e(l.span,{style:{color:"#86E1FC"},children:">,"}),e(l.span,{style:{color:"#B4C2F0"},children:" "}),e(l.span,{style:{color:"#86E1FC"},children:"'"}),e(l.span,{style:{color:"#C3E88D"},children:"click"}),e(l.span,{style:{color:"#86E1FC"},children:"'"}),e(l.span,{style:{color:"#B4C2F0"},children:"))"}),e(l.span,{style:{color:"#86E1FC"},children:","})]}}),`
`,e(l.span,{className:"line",get children(){return[e(l.span,{style:{color:"#B4C2F0"},children:"        "}),e(l.span,{style:{color:"#65BCFF"},children:"withLatestFrom"}),e(l.span,{style:{color:"#B4C2F0"},children:"("}),e(l.span,{style:{color:"#65BCFF"},children:"from"}),e(l.span,{style:{color:"#B4C2F0"},children:"("}),e(l.span,{style:{color:"#C8D3F5"},children:"count"}),e(l.span,{style:{color:"#B4C2F0"},children:")"}),e(l.span,{style:{color:"#86E1FC"},children:"."}),e(l.span,{style:{color:"#65BCFF"},children:"pipe"}),e(l.span,{style:{color:"#B4C2F0"},children:"("}),e(l.span,{style:{color:"#65BCFF"},children:"startWith"}),e(l.span,{style:{color:"#B4C2F0"},children:"("}),e(l.span,{style:{color:"#FF966C"},children:"0"}),e(l.span,{style:{color:"#B4C2F0"},children:")))"}),e(l.span,{style:{color:"#86E1FC"},children:","})]}}),`
`,e(l.span,{className:"line",get children(){return[e(l.span,{style:{color:"#B4C2F0"},children:"        "}),e(l.span,{style:{color:"#65BCFF"},children:"map"}),e(l.span,{style:{color:"#B4C2F0"},children:"(("}),e(l.span,{style:{color:"#86E1FC"},children:"["}),e(l.span,{style:{color:"#FCA7EA"},children:"total"}),e(l.span,{style:{color:"#86E1FC"},children:","}),e(l.span,{style:{color:"#B4C2F0"},children:" "}),e(l.span,{style:{color:"#FCA7EA"},children:"curr"}),e(l.span,{style:{color:"#86E1FC"},children:"]"}),e(l.span,{style:{color:"#B4C2F0"},children:") "}),e(l.span,{style:{color:"#C099FF"},children:"=>"}),e(l.span,{style:{color:"#B4C2F0"},children:" "}),e(l.span,{style:{color:"#C8D3F5"},children:"curr"}),e(l.span,{style:{color:"#B4C2F0"},children:" "}),e(l.span,{style:{color:"#86E1FC"},children:"+"}),e(l.span,{style:{color:"#B4C2F0"},children:" "}),e(l.span,{style:{color:"#C8D3F5"},children:"total"}),e(l.span,{style:{color:"#B4C2F0"},children:")"})]}}),`
`,e(l.span,{className:"line",get children(){return e(l.span,{style:{color:"#B4C2F0"},children:"      )"})}}),`
`,e(l.span,{className:"line",get children(){return[e(l.span,{style:{color:"#B4C2F0"},children:"      "}),e(l.span,{style:{color:"#86E1FC"},children:"."}),e(l.span,{style:{color:"#65BCFF"},children:"subscribe"}),e(l.span,{style:{color:"#B4C2F0"},children:"("}),e(l.span,{style:{color:"#65BCFF"},children:"toObserver"}),e(l.span,{style:{color:"#B4C2F0"},children:"("}),e(l.span,{style:{color:"#C8D3F5"},children:"setCount"}),e(l.span,{style:{color:"#B4C2F0"},children:"))"})]}}),`
`,e(l.span,{className:"line",get children(){return e(l.span,{style:{color:"#B4C2F0"},children:"  )"})}}),`
`,e(l.span,{className:"line",children:" "}),`
`,e(l.span,{className:"line",get children(){return[e(l.span,{style:{color:"#B4C2F0"},children:"  "}),e(l.span,{style:{color:"#86E1FC"},children:"return"}),e(l.span,{style:{color:"#B4C2F0"},children:" ("})]}}),`
`,e(l.span,{className:"line",get children(){return[e(l.span,{style:{color:"#B4C2F0"},children:"    "}),e(l.span,{style:{color:"#86E1FC"},children:"<>"})]}}),`
`,e(l.span,{className:"line",get children(){return[e(l.span,{style:{color:"#B4C2F0"},children:"      "}),e(l.span,{style:{color:"#86E1FC"},children:"<"}),e(l.span,{style:{color:"#FF757F"},children:"div"}),e(l.span,{style:{color:"#86E1FC"},children:">"})]}}),`
`,e(l.span,{className:"line",get children(){return[e(l.span,{style:{color:"#B4C2F0"},children:"        "}),e(l.span,{style:{color:"#86E1FC"},children:"<"}),e(l.span,{style:{color:"#FF757F"},children:"button "}),e(l.span,{style:{color:"#C099FF"},children:"onClick"}),e(l.span,{style:{color:"#86E1FC"},children:"={"}),e(l.span,{style:{color:"#B4C2F0"},children:"()"}),e(l.span,{style:{color:"#FF757F"},children:" "}),e(l.span,{style:{color:"#C099FF"},children:"=>"}),e(l.span,{style:{color:"#FF757F"},children:" "}),e(l.span,{style:{color:"#65BCFF"},children:"setCount"}),e(l.span,{style:{color:"#B4C2F0"},children:"("}),e(l.span,{style:{color:"#FCA7EA"},children:"state"}),e(l.span,{style:{color:"#FF757F"},children:" "}),e(l.span,{style:{color:"#C099FF"},children:"=>"}),e(l.span,{style:{color:"#FF757F"},children:" "}),e(l.span,{style:{color:"#C8D3F5"},children:"state"}),e(l.span,{style:{color:"#FF757F"},children:" "}),e(l.span,{style:{color:"#86E1FC"},children:"+"}),e(l.span,{style:{color:"#FF757F"},children:" "}),e(l.span,{style:{color:"#FF966C"},children:"1"}),e(l.span,{style:{color:"#B4C2F0"},children:")"}),e(l.span,{style:{color:"#86E1FC"},children:"}>"}),e(l.span,{style:{color:"#B4C2F0"},children:"count is: "}),e(l.span,{style:{color:"#86E1FC"},children:"{"}),e(l.span,{style:{color:"#65BCFF"},children:"count"}),e(l.span,{style:{color:"#B4C2F0"},children:"()"}),e(l.span,{style:{color:"#86E1FC"},children:"}</"}),e(l.span,{style:{color:"#FF757F"},children:"button"}),e(l.span,{style:{color:"#86E1FC"},children:">"})]}}),`
`,e(l.span,{className:"line",get children(){return[e(l.span,{style:{color:"#B4C2F0"},children:"        "}),e(l.span,{style:{color:"#86E1FC"},children:"<"}),e(l.span,{style:{color:"#FF757F"},children:"button "}),e(l.span,{style:{color:"#C099FF"},children:"ref"}),e(l.span,{style:{color:"#86E1FC"},children:"={"}),e(l.span,{style:{color:"#C8D3F5"},children:"setButton"}),e(l.span,{style:{color:"#86E1FC"},children:"}>"}),e(l.span,{style:{color:"#B4C2F0"},children:"stop"}),e(l.span,{style:{color:"#86E1FC"},children:"</"}),e(l.span,{style:{color:"#FF757F"},children:"button"}),e(l.span,{style:{color:"#86E1FC"},children:">"})]}}),`
`,e(l.span,{className:"line",get children(){return[e(l.span,{style:{color:"#B4C2F0"},children:"      "}),e(l.span,{style:{color:"#86E1FC"},children:"</"}),e(l.span,{style:{color:"#FF757F"},children:"div"}),e(l.span,{style:{color:"#86E1FC"},children:">"})]}}),`
`,e(l.span,{className:"line",get children(){return[e(l.span,{style:{color:"#B4C2F0"},children:"    "}),e(l.span,{style:{color:"#86E1FC"},children:"</>"})]}}),`
`,e(l.span,{className:"line",get children(){return e(l.span,{style:{color:"#B4C2F0"},children:"  )"})}}),`
`,e(l.span,{className:"line",get children(){return e(l.span,{style:{color:"#B4C2F0"},children:"}"})}})]}})}})}}),`
`,e(l.h2,{children:"Type Declarations"}),`
`,e(l.div,{"data-rehype-pretty-code-fragment":"",get children(){return e(l.pre,{style:{backgroundColor:"#1F2028"},"data-language":"typescript","data-theme":"default",get children(){return e(l.code,{"data-language":"typescript","data-theme":"default",get children(){return e(l.span,{className:"line",get children(){return[e(l.span,{style:{color:"#C099FF"},children:"declare"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#C099FF"},children:"function"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#82AAFF"},children:"toObserver"}),e(l.span,{style:{color:"#86E1FC"},children:"<"}),e(l.span,{style:{color:"#FFC777"},children:"T"}),e(l.span,{style:{color:"#86E1FC"},children:">"}),e(l.span,{style:{color:"#B4C2F0"},children:"("}),e(l.span,{style:{color:"#FCA7EA"},children:"setValue"}),e(l.span,{style:{color:"#86E1FC"},children:":"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#FFC777"},children:"Setter"}),e(l.span,{style:{color:"#86E1FC"},children:"<"}),e(l.span,{style:{color:"#FFC777"},children:"T"}),e(l.span,{style:{color:"#86E1FC"},children:">"}),e(l.span,{style:{color:"#B4C2F0"},children:")"}),e(l.span,{style:{color:"#86E1FC"},children:":"}),e(l.span,{style:{color:"#C8D3F5"},children:" "}),e(l.span,{style:{color:"#FFC777"},children:"NextObserver"}),e(l.span,{style:{color:"#86E1FC"},children:"<"}),e(l.span,{style:{color:"#FFC777"},children:"T"}),e(l.span,{style:{color:"#86E1FC"},children:">;"})]}})}})}})}}),`
`,e(l.h2,{children:"Source"}),`
`,e(l.p,{get children(){return[e(l.a,{href:"https://github.com/solidjs-use/solidjs-use/blob/main/packages/rxjs/src/toObserver/index.ts",children:"Source"})," • ",e(l.a,{href:"https://github.com/solidjs-use/solidjs-use/blob/main/packages/rxjs/src/toObserver/demo.tsx",children:"Demo"})," • ",e(l.a,{href:"https://github.com/solidjs-use/solidjs-use/blob/main/packages/rxjs/src/toObserver/index.md",children:"Docs"})," • ",e(l.a,{href:"https://vueuse.org/rxjs/toObserver",children:"VueUse Docs"})]}}),`
`,e(r,{links:[{href:"#demo",label:"Demo",indent:!1},{href:"#usage",label:"Usage",indent:!1},{href:"#type-declarations",label:"Type Declarations",indent:!1},{href:"#source",label:"Source",indent:!1}]})]}})}function L(n={}){const{wrapper:l}=Object.assign({},d(),n.components);return l?e(l,B(n,{get children(){return e(i,n)}})):i(n)}function t(n,l){throw new Error("Expected "+(l?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}export{L as default};
