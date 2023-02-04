import{z as t,C as x,D as k,u as i,b as v,k as V,i as h,c as l,F as Q,S as Y,g as F,t as g,M as O,a as Z}from"./index-4bd6c1a1.js";import{F as ee}from"./fuse.esm-88e2763d.js";import{r as le}from"./index-5d274f60.js";import{b as ne}from"./index-98d6f983.js";import{a as se}from"./index-59336dda.js";import"./index-6fa36e0a.js";function re(n,e,c){const r=()=>new ee(i(e)??[],i(c)?.fuseOptions),[a,f]=t(r());x(k(()=>i(c)?.fuseOptions,()=>{f(r())})),x(k(le(e),o=>{a().setCollection(o)}));const y=v(()=>{const o=i(c);if(o?.matchAllWhenSearchEmpty&&!i(n))return i(e).map((E,C)=>({item:E,refIndex:C}));const d=o?.resultLimit;return a().search(i(n),d?{limit:d}:void 0)});return{fuse:a,results:y}}const te=g('<div><input placeholder="Search for someone..." type="text" w-full><div flex flex-wrap><div bg="dark:dark-300 light-700" mr-2 border="1 light-900 dark:dark-700" rounded relative flex items-center><select px-8 bg-transparent><option bg="dark:dark-300 light-700" value="both">Full Name</option><option bg="dark:dark-300 light-700" value="first">First Name</option><option bg="dark:dark-300 light-700" value="last">Last Name</option></select></div><span flex-1></span><div flex flex-row flex-wrap gap-x-4><label class="checkbox"><input type="checkbox"><span>Exact Match</span></label><label class="checkbox"><input type="checkbox"><span>Case Sensistive</span></label><label class="checkbox"><input type="checkbox"><span>Match all when empty</span></label></div></div><div mt-4></div></div>',36),ce=g(`<style>
input {
    --tw-ring-offset-width: 1px !important;
    --tw-ring-color: #8885 !important;
    --tw-ring-offset-color: transparent !important
}

.checkbox {
    margin-top: auto;
    margin-bottom: auto;
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    align-items: center;
    border-radius: .25rem;
    padding-left: .5rem;
    padding-right: .5rem
}

.checkbox input {
    appearance: none;
    padding: 0;
    margin: 0;
    -webkit-print-color-adjust: exact;
    color-adjust: exact;
    display: inline-block;
    vertical-align: middle;
    background-origin: border-box;
    flex-shrink: 0;
    background-color: #9ca3af4d;
    height: 1rem;
    width: 1rem;
    user-select: none;
    border-radius: .375rem
}

.checkbox input:checked {
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e")
}

.checkbox span {
    margin-left: .375rem;
    font-size: 13px;
    opacity: .7
}</style>`,2),ae=g("<div text-center pt-8 pb-4 opacity-80>No Results Found</div>",2),oe=g('<div py-2><div flex flex-col><span> </span><span class="opacity-50" text-sm>Score Index: </span></div></div>',8),ie=()=>{const[n]=t([{firstName:"Roslyn",lastName:"Mitchell"},{firstName:"Cathleen",lastName:"Matthews"},{firstName:"Carleton",lastName:"Harrelson"},{firstName:"Allen",lastName:"Moores"},{firstName:"John",lastName:"Washington"},{firstName:"Brooke",lastName:"Colton"},{firstName:"Mary",lastName:"Rennold"},{firstName:"Nanny",lastName:"Field"},{firstName:"Chasity",lastName:"Michael"},{firstName:"Oakley",lastName:"Giles"},{firstName:"Johanna",lastName:"Shepherd"},{firstName:"Maybelle",lastName:"Wilkie"},{firstName:"Dawson",lastName:"Rowntree"},{firstName:"Manley",lastName:"Pond"},{firstName:"Lula",lastName:"Sawyer"},{firstName:"Hudson",lastName:"Hext"},{firstName:"Alden",lastName:"Senior"},{firstName:"Tory",lastName:"Hyland"},{firstName:"Constance",lastName:"Josephs"},{firstName:"Larry",lastName:"Kinsley"}]),[e,c]=t(""),[r,a]=t("both"),f=v(()=>r()==="first"?["firstName"]:r()==="last"?["lastName"]:["firstName","lastName"]),[y,o]=t(void 0),[d,E]=t("");x(k(d,()=>{if(d()==="")o(void 0);else{const p=parseFloat(d());isNaN(p)||(o(Math.round(p)),E(String(y())))}}));const[C,J]=t(!1),[A,z]=t(!1),[S,W]=t(!0),U=v(()=>({fuseOptions:{keys:f(),isCaseSensitive:A(),threshold:C()?0:void 0},resultLimit:y(),matchAllWhenSearchEmpty:S()})),{results:w}=re(e,n,U);return[(()=>{const p=te.cloneNode(!0),D=p.firstChild,B=D.nextSibling,u=B.firstChild,N=u.firstChild,q=u.nextSibling,H=q.nextSibling,_=H.firstChild,$=_.firstChild,M=_.nextSibling,j=M.firstChild,P=M.nextSibling,L=P.firstChild,G=B.nextSibling;return D.$$input=s=>c(s.currentTarget.value),h(u,l(se,{class:"absolute left-2 opacity-70"}),N),N.addEventListener("change",s=>a(s.currentTarget.value)),h(u,l(ne,{class:"absolute right-2 pointer-events-none opacity-70"}),null),$.addEventListener("change",s=>J(s.currentTarget.checked)),j.addEventListener("change",s=>z(s.currentTarget.checked)),L.addEventListener("change",s=>W(s.currentTarget.checked)),h(G,l(Y,{get when(){return w().length>0},get fallback(){return ae.cloneNode(!0)},get children(){return l(Q,{get each(){return w()},children:s=>(()=>{const I=oe.cloneNode(!0),X=I.firstChild,m=X.firstChild,K=m.firstChild,R=m.nextSibling;return R.firstChild,h(m,()=>s.item.firstName,K),h(m,()=>s.item.lastName,null),h(R,()=>s.refIndex,null),I})()})}})),F(()=>D.value=e()),F(()=>N.value=r()),F(()=>$.checked=C()),F(()=>j.checked=A()),F(()=>L.checked=S()),p})(),ce.cloneNode(!0)]};V(["input"]);function T(n){const e=Object.assign({div:"div",h1:"h1",p:"p",a:"a",blockquote:"blockquote",h2:"h2",pre:"pre",code:"code",span:"span"},O(),n.components),{FunctionInfo:c,DemoContainer:r,ContextualNav:a}=e;return a||b("ContextualNav",!0),r||b("DemoContainer",!0),c||b("FunctionInfo",!0),l(e.div,{className:"markdown-body",get children(){return[l(e.h1,{children:"useFuse"}),`
`,l(c,{fn:"useFuse"}),`
`,l(e.p,{get children(){return["Easily implement fuzzy search using a composable with ",l(e.a,{href:"https://github.com/krisk/fuse",children:"Fuse.js"}),"."]}}),`
`,l(e.p,{children:"From the Fuse.js website:"}),`
`,l(e.blockquote,{get children(){return[`
`,l(e.p,{children:"What is fuzzy searching?"}),`
`,l(e.p,{children:"Generally speaking, fuzzy searching (more formally known as approximate string matching) is the technique of finding strings that are approximately equal to a given pattern (rather than exactly)."}),`
`]}}),`
`,l(e.h2,{children:"Demo"}),`
`,`
`,l(r,{get children(){return l(ie,{})}}),`
`,l(e.p,{get children(){return["Available in the ",l(e.a,{href:"/solidjs-use/integrations/README",children:"@solidjs-use/integrations"})," add-on."]}}),`
`,l(e.h2,{children:"Install"}),`
`,l(e.div,{"data-rehype-pretty-code-fragment":"",get children(){return l(e.pre,{style:{backgroundColor:"#1F2028"},"data-language":"bash","data-theme":"default",get children(){return l(e.code,{"data-language":"bash","data-theme":"default",get children(){return l(e.span,{className:"line",get children(){return[l(e.span,{style:{color:"#FFC777"},children:"npm"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#C3E88D"},children:"install"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#C3E88D"},children:"solidjs-use"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#C3E88D"},children:"@solidjs-use/integrations"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#C3E88D"},children:"fuse.js"})]}})}})}})}}),`
`,l(e.h2,{children:"Usage"}),`
`,l(e.div,{"data-rehype-pretty-code-fragment":"",get children(){return l(e.pre,{style:{backgroundColor:"#1F2028"},"data-language":"ts","data-theme":"default",get children(){return l(e.code,{"data-language":"ts","data-theme":"default",get children(){return[l(e.span,{className:"line",get children(){return[l(e.span,{style:{color:"#86E1FC"},children:"import"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#B4C2F0"},children:"{ "}),l(e.span,{style:{color:"#C8D3F5"},children:"createSignal"}),l(e.span,{style:{color:"#B4C2F0"},children:" }"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#86E1FC"},children:"from"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#86E1FC"},children:"'"}),l(e.span,{style:{color:"#C3E88D"},children:"solid-js"}),l(e.span,{style:{color:"#86E1FC"},children:"'"})]}}),`
`,l(e.span,{className:"line",get children(){return[l(e.span,{style:{color:"#86E1FC"},children:"import"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#B4C2F0"},children:"{ "}),l(e.span,{style:{color:"#C8D3F5"},children:"useFuse"}),l(e.span,{style:{color:"#B4C2F0"},children:" }"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#86E1FC"},children:"from"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#86E1FC"},children:"'"}),l(e.span,{style:{color:"#C3E88D"},children:"@solidjs-use/integrations/useFuse"}),l(e.span,{style:{color:"#86E1FC"},children:"'"})]}}),`
`,l(e.span,{className:"line",children:" "}),`
`,l(e.span,{className:"line",get children(){return[l(e.span,{style:{color:"#C099FF"},children:"const"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#FF98A4"},children:"data"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#86E1FC"},children:"="}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#86E1FC"},children:"["}),l(e.span,{style:{color:"#86E1FC"},children:"'"}),l(e.span,{style:{color:"#C3E88D"},children:"John Smith"}),l(e.span,{style:{color:"#86E1FC"},children:"'"}),l(e.span,{style:{color:"#86E1FC"},children:","}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#86E1FC"},children:"'"}),l(e.span,{style:{color:"#C3E88D"},children:"John Doe"}),l(e.span,{style:{color:"#86E1FC"},children:"'"}),l(e.span,{style:{color:"#86E1FC"},children:","}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#86E1FC"},children:"'"}),l(e.span,{style:{color:"#C3E88D"},children:"Jane Doe"}),l(e.span,{style:{color:"#86E1FC"},children:"'"}),l(e.span,{style:{color:"#86E1FC"},children:","}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#86E1FC"},children:"'"}),l(e.span,{style:{color:"#C3E88D"},children:"Phillip Green"}),l(e.span,{style:{color:"#86E1FC"},children:"'"}),l(e.span,{style:{color:"#86E1FC"},children:","}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#86E1FC"},children:"'"}),l(e.span,{style:{color:"#C3E88D"},children:"Peter Brown"}),l(e.span,{style:{color:"#86E1FC"},children:"'"}),l(e.span,{style:{color:"#86E1FC"},children:"]"})]}}),`
`,l(e.span,{className:"line",children:" "}),`
`,l(e.span,{className:"line",get children(){return[l(e.span,{style:{color:"#C099FF"},children:"const"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#86E1FC"},children:"["}),l(e.span,{style:{color:"#FF98A4"},children:"input"}),l(e.span,{style:{color:"#86E1FC"},children:","}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#FF98A4"},children:"setInput"}),l(e.span,{style:{color:"#86E1FC"},children:"]"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#86E1FC"},children:"="}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#65BCFF"},children:"createSignal"}),l(e.span,{style:{color:"#B4C2F0"},children:"("}),l(e.span,{style:{color:"#86E1FC"},children:"'"}),l(e.span,{style:{color:"#C3E88D"},children:"Jhon D"}),l(e.span,{style:{color:"#86E1FC"},children:"'"}),l(e.span,{style:{color:"#B4C2F0"},children:")"})]}}),`
`,l(e.span,{className:"line",children:" "}),`
`,l(e.span,{className:"line",get children(){return[l(e.span,{style:{color:"#C099FF"},children:"const"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#86E1FC"},children:"{"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#FF98A4"},children:"results"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#86E1FC"},children:"}"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#86E1FC"},children:"="}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#65BCFF"},children:"useFuse"}),l(e.span,{style:{color:"#B4C2F0"},children:"("}),l(e.span,{style:{color:"#C8D3F5"},children:"input"}),l(e.span,{style:{color:"#86E1FC"},children:","}),l(e.span,{style:{color:"#C8D3F5"},children:" data"}),l(e.span,{style:{color:"#B4C2F0"},children:")"})]}}),`
`,l(e.span,{className:"line",children:" "}),`
`,l(e.span,{className:"line",get children(){return l(e.span,{style:{color:"#7A88CF"},children:"/*"})}}),`
`,l(e.span,{className:"line",get children(){return l(e.span,{style:{color:"#7A88CF"},children:" * Results:"})}}),`
`,l(e.span,{className:"line",get children(){return l(e.span,{style:{color:"#7A88CF"},children:" *"})}}),`
`,l(e.span,{className:"line",get children(){return l(e.span,{style:{color:"#7A88CF"},children:' * { "item": "John Doe", "index": 1 }'})}}),`
`,l(e.span,{className:"line",get children(){return l(e.span,{style:{color:"#7A88CF"},children:' * { "item": "John Smith", "index": 0 }'})}}),`
`,l(e.span,{className:"line",get children(){return l(e.span,{style:{color:"#7A88CF"},children:' * { "item": "Jane Doe", "index": 2 }'})}}),`
`,l(e.span,{className:"line",get children(){return l(e.span,{style:{color:"#7A88CF"},children:" *"})}}),`
`,l(e.span,{className:"line",get children(){return l(e.span,{style:{color:"#7A88CF"},children:" */"})}})]}})}})}}),`
`,l(e.h2,{children:"Type Declarations"}),`
`,l(e.div,{"data-rehype-pretty-code-fragment":"",get children(){return l(e.pre,{style:{backgroundColor:"#1F2028"},"data-language":"typescript","data-theme":"default",get children(){return l(e.code,{"data-language":"typescript","data-theme":"default",get children(){return[l(e.span,{className:"line",get children(){return[l(e.span,{style:{color:"#C099FF"},children:"type"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#FFC777"},children:"FuseOptions"}),l(e.span,{style:{color:"#86E1FC"},children:"<"}),l(e.span,{style:{color:"#FFC777"},children:"T"}),l(e.span,{style:{color:"#86E1FC"},children:">"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#86E1FC"},children:"="}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#FFC777"},children:"Fuse"}),l(e.span,{style:{color:"#86E1FC"},children:"."}),l(e.span,{style:{color:"#FFC777"},children:"IFuseOptions"}),l(e.span,{style:{color:"#86E1FC"},children:"<"}),l(e.span,{style:{color:"#FFC777"},children:"T"}),l(e.span,{style:{color:"#86E1FC"},children:">;"})]}}),`
`,l(e.span,{className:"line",get children(){return[l(e.span,{style:{color:"#C099FF"},children:"interface"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#FFC777"},children:"UseFuseOptions"}),l(e.span,{style:{color:"#86E1FC"},children:"<"}),l(e.span,{style:{color:"#FFC777"},children:"T"}),l(e.span,{style:{color:"#86E1FC"},children:">"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#B4C2F0"},children:"{"})]}}),`
`,l(e.span,{className:"line",get children(){return[l(e.span,{style:{color:"#C8D3F5"},children:"    "}),l(e.span,{style:{color:"#4FD6BE"},children:"fuseOptions"}),l(e.span,{style:{color:"#86E1FC"},children:"?:"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#FFC777"},children:"FuseOptions"}),l(e.span,{style:{color:"#86E1FC"},children:"<"}),l(e.span,{style:{color:"#FFC777"},children:"T"}),l(e.span,{style:{color:"#86E1FC"},children:">;"})]}}),`
`,l(e.span,{className:"line",get children(){return[l(e.span,{style:{color:"#C8D3F5"},children:"    "}),l(e.span,{style:{color:"#4FD6BE"},children:"resultLimit"}),l(e.span,{style:{color:"#86E1FC"},children:"?:"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#FF966C"},children:"number"}),l(e.span,{style:{color:"#86E1FC"},children:";"})]}}),`
`,l(e.span,{className:"line",get children(){return[l(e.span,{style:{color:"#C8D3F5"},children:"    "}),l(e.span,{style:{color:"#4FD6BE"},children:"matchAllWhenSearchEmpty"}),l(e.span,{style:{color:"#86E1FC"},children:"?:"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#FF966C"},children:"boolean"}),l(e.span,{style:{color:"#86E1FC"},children:";"})]}}),`
`,l(e.span,{className:"line",get children(){return l(e.span,{style:{color:"#B4C2F0"},children:"}"})}}),`
`,l(e.span,{className:"line",get children(){return[l(e.span,{style:{color:"#C099FF"},children:"declare"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#C099FF"},children:"function"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#82AAFF"},children:"useFuse"}),l(e.span,{style:{color:"#86E1FC"},children:"<"}),l(e.span,{style:{color:"#FFC777"},children:"DataItem"}),l(e.span,{style:{color:"#86E1FC"},children:">"}),l(e.span,{style:{color:"#B4C2F0"},children:"("}),l(e.span,{style:{color:"#FCA7EA"},children:"search"}),l(e.span,{style:{color:"#86E1FC"},children:":"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#FFC777"},children:"MaybeAccessor"}),l(e.span,{style:{color:"#86E1FC"},children:"<"}),l(e.span,{style:{color:"#FF966C"},children:"string"}),l(e.span,{style:{color:"#86E1FC"},children:">,"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#FCA7EA"},children:"data"}),l(e.span,{style:{color:"#86E1FC"},children:":"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#FFC777"},children:"MaybeAccessor"}),l(e.span,{style:{color:"#86E1FC"},children:"<"}),l(e.span,{style:{color:"#FFC777"},children:"DataItem"}),l(e.span,{style:{color:"#86E1FC"},children:"[]>,"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#FCA7EA"},children:"options"}),l(e.span,{style:{color:"#86E1FC"},children:"?:"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#FFC777"},children:"MaybeAccessor"}),l(e.span,{style:{color:"#86E1FC"},children:"<"}),l(e.span,{style:{color:"#FFC777"},children:"UseFuseOptions"}),l(e.span,{style:{color:"#86E1FC"},children:"<"}),l(e.span,{style:{color:"#FFC777"},children:"DataItem"}),l(e.span,{style:{color:"#86E1FC"},children:">>"}),l(e.span,{style:{color:"#B4C2F0"},children:")"}),l(e.span,{style:{color:"#86E1FC"},children:":"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#B4C2F0"},children:"{"})]}}),`
`,l(e.span,{className:"line",get children(){return[l(e.span,{style:{color:"#C8D3F5"},children:"    "}),l(e.span,{style:{color:"#4FD6BE"},children:"fuse"}),l(e.span,{style:{color:"#86E1FC"},children:":"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#FFC777"},children:"Accessor"}),l(e.span,{style:{color:"#86E1FC"},children:"<"}),l(e.span,{style:{color:"#FFC777"},children:"Fuse"}),l(e.span,{style:{color:"#86E1FC"},children:"<"}),l(e.span,{style:{color:"#FFC777"},children:"DataItem"}),l(e.span,{style:{color:"#86E1FC"},children:">>;"})]}}),`
`,l(e.span,{className:"line",get children(){return[l(e.span,{style:{color:"#C8D3F5"},children:"    "}),l(e.span,{style:{color:"#4FD6BE"},children:"results"}),l(e.span,{style:{color:"#86E1FC"},children:":"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#FFC777"},children:"Accessor"}),l(e.span,{style:{color:"#86E1FC"},children:"<"}),l(e.span,{style:{color:"#FFC777"},children:"Fuse"}),l(e.span,{style:{color:"#86E1FC"},children:"."}),l(e.span,{style:{color:"#FFC777"},children:"FuseResult"}),l(e.span,{style:{color:"#86E1FC"},children:"<"}),l(e.span,{style:{color:"#FFC777"},children:"DataItem"}),l(e.span,{style:{color:"#86E1FC"},children:">[]>;"})]}}),`
`,l(e.span,{className:"line",get children(){return[l(e.span,{style:{color:"#B4C2F0"},children:"}"}),l(e.span,{style:{color:"#86E1FC"},children:";"})]}}),`
`,l(e.span,{className:"line",get children(){return[l(e.span,{style:{color:"#C099FF"},children:"type"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#FFC777"},children:"UseFuseReturn"}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#86E1FC"},children:"="}),l(e.span,{style:{color:"#C8D3F5"},children:" "}),l(e.span,{style:{color:"#FFC777"},children:"ReturnType"}),l(e.span,{style:{color:"#86E1FC"},children:"<typeof"}),l(e.span,{style:{color:"#C8D3F5"},children:" useFuse"}),l(e.span,{style:{color:"#86E1FC"},children:">;"})]}})]}})}})}}),`
`,l(e.h2,{children:"Source"}),`
`,l(e.p,{get children(){return[l(e.a,{href:"https://github.com/solidjs-use/solidjs-use/blob/main/packages/integrations/src/useFuse/index.ts",children:"Source"})," • ",l(e.a,{href:"https://github.com/solidjs-use/solidjs-use/blob/main/packages/integrations/src/useFuse/demo.tsx",children:"Demo"})," • ",l(e.a,{href:"https://github.com/solidjs-use/solidjs-use/blob/main/packages/integrations/src/useFuse/index.md",children:"Docs"})," • ",l(e.a,{href:"https://vueuse.org/integrations/useFuse",children:"VueUse Docs"})]}}),`
`,l(a,{links:[{href:"#demo",label:"Demo",indent:!1},{href:"#install",label:"Install",indent:!1},{href:"#usage",label:"Usage",indent:!1},{href:"#type-declarations",label:"Type Declarations",indent:!1},{href:"#source",label:"Source",indent:!1}]})]}})}function ue(n={}){const{wrapper:e}=Object.assign({},O(),n.components);return e?l(e,Z(n,{get children(){return l(T,n)}})):T(n)}function b(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}export{ue as default};
