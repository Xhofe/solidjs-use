import{z as F,u as x,C as b,D as S,p as z,q as W,k as G,i as D,c as e,S as I,T as V,a5 as X,a6 as L,b as J,g as u,y as Y,t as i,M as q,a as H}from"./index-4bd6c1a1.js";import{N as M}from"./Note-cce245b8.js";import{r as K}from"./index-5d274f60.js";import{u as Q}from"./index-ad33cdcd.js";import"./index-c9f703ce.js";import"./scheduler-3ae68f06.js";function Z(r={}){const{interimResults:n=!0,continuous:C=!0,window:a=W}=r,h=K(r.lang??"en-US"),[o,y]=F(!1),[N,A]=F(!1),[w,v]=F(""),[E,R]=F(void 0),_=(s=!o())=>{y(s)},k=()=>{y(!0)},g=()=>{y(!1)},f=a&&(a.SpeechRecognition||a.webkitSpeechRecognition),c=Q(()=>f);let l;return c()&&(l=new f,l.continuous=C,l.interimResults=n,l.lang=x(h),l.onstart=()=>{A(!1)},b(S(h,s=>{l&&!o()&&(l.lang=s)},{defer:!0})),l.onresult=s=>{const d=Array.from(s.results).map(t=>(A(t.isFinal),t[0])).map(t=>t.transcript).join("");v(d),R(void 0)},l.onerror=s=>{R(s)},l.onend=()=>{y(!1),l.lang=x(h)},b(S(o,()=>{o()?l.start():l.stop()},{defer:!0}))),z(()=>{y(!1)}),{isSupported:c,isListening:o,isFinal:N,result:w,setResult:v,recognition:l,error:E,toggle:_,start:k,stop:g}}const ee=i('<button class="orange">Stop</button>',2),ne=i("<b>Please say a color</b>",2),le=i("<p>Speak some Spanish!</p>",2),re=i("<p>Speak some French!</p>",2),se=i('<div class="mt-4"><p class="tag"></p></div>',4),oe=i('<div><div space-x-4><label><input type="radio">&nbsp;<span>English (US)</span></label><label><input type="radio">&nbsp;<span>French</span></label><label><input type="radio">&nbsp;<span>Spanish</span></label></div></div>',19),ce=i("<div></div>",2),te=i('<div>Your browser does not support SpeechRecognition API,<a href="https://caniuse.com/mdn-api_speechrecognition" target="_blank">more details</a></div>',4),ae=i("<button>Press and talk</button>",2),ie=()=>{const[r,n]=F("en-US");function C(c,l){const s=c.slice(0);let d=c.length,t,m;for(;d--;)m=Math.floor((d+1)*Math.random()),t=s[m],s[m]=s[d],s[d]=t;return s.slice(0,l)}const a=["aqua","azure","beige","bisque","black","blue","brown","chocolate","coral","crimson","cyan","fuchsia","ghostwhite","gold","goldenrod","gray","green","indigo","ivory","khaki","lavender","lime","linen","magenta","maroon","moccasin","navy","olive","orange","orchid","peru","pink","plum","purple","red","salmon","sienna","silver","snow","tan","teal","thistle","tomato","turquoise","violet","white","yellow","transparent"],h=`#JSGF V1.0; grammar colors; public <color> = ${a.join(" | ")} ;`,o=Z({lang:r,continuous:!0}),[y,N]=F("transparent");if(o.isSupported()){const c=window.SpeechGrammarList||window.webkitSpeechGrammarList,l=new c;l.addFromString(h,1),o.recognition.grammars=l,b(S(o.result,()=>{for(const s of o.result().toLowerCase().split(" ").reverse())if(a.includes(s)){N(s);break}},{defer:!0}))}const[A,w]=F([]),v=()=>{N("transparent"),o.setResult(""),w(C(a,5)),o.start()},{isListening:E,isSupported:R,stop:_,result:k}=o,[g,f]=F(r());return b(S(r,c=>{E()&&f(c)},{defer:!0})),b(S(E,c=>{c&&f(r())},{defer:!0})),(()=>{const c=ce.cloneNode(!0);return D(c,e(I,{get when(){return R()},get fallback(){return te.cloneNode(!0)},get children(){const l=oe.cloneNode(!0),s=l.firstChild,d=s.firstChild,t=d.firstChild,m=d.nextSibling,B=m.firstChild,O=m.nextSibling,$=O.firstChild;return t.addEventListener("change",()=>n("en-US")),B.addEventListener("change",()=>n("fr")),$.addEventListener("change",()=>n("es")),D(l,e(I,{get when(){return E()},get fallback(){return(()=>{const p=ae.cloneNode(!0);return p.$$click=v,p})()},get children(){return[(()=>{const p=ee.cloneNode(!0);return V(p,"click",_,!0),p})(),(()=>{const p=se.cloneNode(!0),j=p.firstChild;return D(p,e(X,{get children(){return[e(L,{get when(){return g()==="en-US"},get children(){return[e(M,{class:"mt-2",get children(){return ne.cloneNode(!0)}}),e(M,{class:"mt-2",get children(){return["try: ",J(()=>A().join(", "))]}})]}}),e(L,{get when(){return g()==="es"},get children(){return le.cloneNode(!0)}}),e(L,{get when(){return g()==="es"},get children(){return re.cloneNode(!0)}})]}}),j),D(j,k),u(T=>Y(j,g()==="en-US"?{background:y()}:{},T)),p})()]}}),null),u(()=>t.value=r()),u(()=>t.checked=r()==="en-US"),u(()=>B.value=r()),u(()=>B.checked=r()==="fr"),u(()=>$.value=r()),u(()=>$.checked=r()==="es"),l}})),c})()};G(["click"]);const de=i("<details><summary op50 italic>Show Type Declarations</summary></details>",4);function P(r){const n=Object.assign({div:"div",h1:"h1",p:"p",a:"a",blockquote:"blockquote",h2:"h2",pre:"pre",code:"code",span:"span",h3:"h3"},q(),r.components),{FunctionInfo:C,DemoContainer:a,ContextualNav:h}=n;return h||U("ContextualNav",!0),a||U("DemoContainer",!0),C||U("FunctionInfo",!0),e(n.div,{className:"markdown-body",get children(){return[e(n.h1,{children:"useSpeechRecognition"}),`
`,e(C,{fn:"useSpeechRecognition"}),`
`,e(n.p,{get children(){return["Reactive ",e(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition",children:"SpeechRecognition"}),"."]}}),`
`,e(n.blockquote,{get children(){return[`
`,e(n.p,{get children(){return e(n.a,{href:"https://caniuse.com/mdn-api_speechrecognitionevent",children:"Can I use?"})}}),`
`]}}),`
`,e(n.h2,{children:"Demo"}),`
`,`
`,e(a,{get children(){return e(ie,{})}}),`
`,e(n.h2,{children:"Usage"}),`
`,e(n.div,{"data-rehype-pretty-code-fragment":"",get children(){return e(n.pre,{style:{backgroundColor:"#1F2028"},"data-language":"ts","data-theme":"default",get children(){return e(n.code,{"data-language":"ts","data-theme":"default",get children(){return[e(n.span,{className:"line",get children(){return[e(n.span,{style:{color:"#86E1FC"},children:"import"}),e(n.span,{style:{color:"#C8D3F5"},children:" "}),e(n.span,{style:{color:"#B4C2F0"},children:"{ "}),e(n.span,{style:{color:"#C8D3F5"},children:"useSpeechRecognition"}),e(n.span,{style:{color:"#B4C2F0"},children:" }"}),e(n.span,{style:{color:"#C8D3F5"},children:" "}),e(n.span,{style:{color:"#86E1FC"},children:"from"}),e(n.span,{style:{color:"#C8D3F5"},children:" "}),e(n.span,{style:{color:"#86E1FC"},children:"'"}),e(n.span,{style:{color:"#C3E88D"},children:"solidjs-use"}),e(n.span,{style:{color:"#86E1FC"},children:"'"})]}}),`
`,e(n.span,{className:"line",children:" "}),`
`,e(n.span,{className:"line",get children(){return[e(n.span,{style:{color:"#C099FF"},children:"const"}),e(n.span,{style:{color:"#C8D3F5"},children:" "}),e(n.span,{style:{color:"#86E1FC"},children:"{"}),e(n.span,{style:{color:"#C8D3F5"},children:" "}),e(n.span,{style:{color:"#FF98A4"},children:"isSupported"}),e(n.span,{style:{color:"#86E1FC"},children:","}),e(n.span,{style:{color:"#C8D3F5"},children:" "}),e(n.span,{style:{color:"#FF98A4"},children:"isListening"}),e(n.span,{style:{color:"#86E1FC"},children:","}),e(n.span,{style:{color:"#C8D3F5"},children:" "}),e(n.span,{style:{color:"#FF98A4"},children:"isFinal"}),e(n.span,{style:{color:"#86E1FC"},children:","}),e(n.span,{style:{color:"#C8D3F5"},children:" "}),e(n.span,{style:{color:"#FF98A4"},children:"result"}),e(n.span,{style:{color:"#86E1FC"},children:","}),e(n.span,{style:{color:"#C8D3F5"},children:" "}),e(n.span,{style:{color:"#FF98A4"},children:"start"}),e(n.span,{style:{color:"#86E1FC"},children:","}),e(n.span,{style:{color:"#C8D3F5"},children:" "}),e(n.span,{style:{color:"#FF98A4"},children:"stop"}),e(n.span,{style:{color:"#C8D3F5"},children:" "}),e(n.span,{style:{color:"#86E1FC"},children:"}"}),e(n.span,{style:{color:"#C8D3F5"},children:" "}),e(n.span,{style:{color:"#86E1FC"},children:"="}),e(n.span,{style:{color:"#C8D3F5"},children:" "}),e(n.span,{style:{color:"#65BCFF"},children:"useSpeechRecognition"}),e(n.span,{style:{color:"#B4C2F0"},children:"()"})]}})]}})}})}}),`
`,e(n.h3,{children:"Options"}),`
`,e(n.p,{get children(){return["The following shows the default values of the options, they will be directly passed to ",e(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition",children:"SpeechRecognition API"}),"."]}}),`
`,e(n.div,{"data-rehype-pretty-code-fragment":"",get children(){return e(n.pre,{style:{backgroundColor:"#1F2028"},"data-language":"ts","data-theme":"default",get children(){return e(n.code,{"data-language":"ts","data-theme":"default",get children(){return[e(n.span,{className:"line",get children(){return[e(n.span,{style:{color:"#65BCFF"},children:"useSpeechRecognition"}),e(n.span,{style:{color:"#B4C2F0"},children:"({"})]}}),`
`,e(n.span,{className:"line",get children(){return[e(n.span,{style:{color:"#C8D3F5"},children:"  "}),e(n.span,{style:{color:"#4FD6BE"},children:"lang"}),e(n.span,{style:{color:"#86E1FC"},children:":"}),e(n.span,{style:{color:"#A9B8E8"},children:" "}),e(n.span,{style:{color:"#86E1FC"},children:"'"}),e(n.span,{style:{color:"#C3E88D"},children:"en-US"}),e(n.span,{style:{color:"#86E1FC"},children:"'"}),e(n.span,{style:{color:"#86E1FC"},children:","})]}}),`
`,e(n.span,{className:"line",get children(){return[e(n.span,{style:{color:"#C8D3F5"},children:"  "}),e(n.span,{style:{color:"#4FD6BE"},children:"interimResults"}),e(n.span,{style:{color:"#86E1FC"},children:":"}),e(n.span,{style:{color:"#A9B8E8"},children:" "}),e(n.span,{style:{color:"#FF966C"},children:"true"}),e(n.span,{style:{color:"#86E1FC"},children:","})]}}),`
`,e(n.span,{className:"line",get children(){return[e(n.span,{style:{color:"#C8D3F5"},children:"  "}),e(n.span,{style:{color:"#4FD6BE"},children:"continuous"}),e(n.span,{style:{color:"#86E1FC"},children:":"}),e(n.span,{style:{color:"#A9B8E8"},children:" "}),e(n.span,{style:{color:"#FF966C"},children:"true"})]}}),`
`,e(n.span,{className:"line",get children(){return e(n.span,{style:{color:"#B4C2F0"},children:"})"})}})]}})}})}}),`
`,e(n.h2,{children:"Type Declarations"}),`
`,(()=>{const o=de.cloneNode(!0);return o.firstChild,D(o,e(n.div,{"data-rehype-pretty-code-fragment":"",get children(){return e(n.pre,{style:{backgroundColor:"#1F2028"},"data-language":"typescript","data-theme":"default",get children(){return e(n.code,{"data-language":"typescript","data-theme":"default",get children(){return[e(n.span,{className:"line",get children(){return[e(n.span,{style:{color:"#C099FF"},children:"interface"}),e(n.span,{style:{color:"#C8D3F5"},children:" "}),e(n.span,{style:{color:"#FFC777"},children:"UseSpeechRecognitionOptions"}),e(n.span,{style:{color:"#C8D3F5"},children:" "}),e(n.span,{style:{color:"#C099FF"},children:"extends"}),e(n.span,{style:{color:"#C8D3F5"},children:" "}),e(n.span,{style:{color:"#C3E88D"},children:"ConfigurableWindow"}),e(n.span,{style:{color:"#C8D3F5"},children:" "}),e(n.span,{style:{color:"#B4C2F0"},children:"{"})]}}),`
`,e(n.span,{className:"line",get children(){return[e(n.span,{style:{color:"#C8D3F5"},children:"    "}),e(n.span,{style:{color:"#7A88CF"},children:"/**"})]}}),`
`,e(n.span,{className:"line",get children(){return e(n.span,{style:{color:"#7A88CF"},children:"     * Controls whether continuous results are returned for each recognition, or only a single result."})}}),`
`,e(n.span,{className:"line",get children(){return e(n.span,{style:{color:"#7A88CF"},children:"     *"})}}),`
`,e(n.span,{className:"line",get children(){return[e(n.span,{style:{color:"#7A88CF"},children:"     * "}),e(n.span,{style:{color:"#86E1FC"},children:"@"}),e(n.span,{style:{color:"#C099FF"},children:"default"}),e(n.span,{style:{color:"#7A88CF"},children:" "}),e(n.span,{style:{color:"#C8D3F5"},children:"true"})]}}),`
`,e(n.span,{className:"line",get children(){return e(n.span,{style:{color:"#7A88CF"},children:"     */"})}}),`
`,e(n.span,{className:"line",get children(){return[e(n.span,{style:{color:"#C8D3F5"},children:"    "}),e(n.span,{style:{color:"#4FD6BE"},children:"continuous"}),e(n.span,{style:{color:"#86E1FC"},children:"?:"}),e(n.span,{style:{color:"#C8D3F5"},children:" "}),e(n.span,{style:{color:"#FF966C"},children:"boolean"}),e(n.span,{style:{color:"#86E1FC"},children:";"})]}}),`
`,e(n.span,{className:"line",get children(){return[e(n.span,{style:{color:"#C8D3F5"},children:"    "}),e(n.span,{style:{color:"#7A88CF"},children:"/**"})]}}),`
`,e(n.span,{className:"line",get children(){return e(n.span,{style:{color:"#7A88CF"},children:"     * Controls whether interim results should be returned (true) or not (false.) Interim results are results that are not yet final"})}}),`
`,e(n.span,{className:"line",get children(){return e(n.span,{style:{color:"#7A88CF"},children:"     *"})}}),`
`,e(n.span,{className:"line",get children(){return[e(n.span,{style:{color:"#7A88CF"},children:"     * "}),e(n.span,{style:{color:"#86E1FC"},children:"@"}),e(n.span,{style:{color:"#C099FF"},children:"default"}),e(n.span,{style:{color:"#7A88CF"},children:" "}),e(n.span,{style:{color:"#C8D3F5"},children:"true"})]}}),`
`,e(n.span,{className:"line",get children(){return e(n.span,{style:{color:"#7A88CF"},children:"     */"})}}),`
`,e(n.span,{className:"line",get children(){return[e(n.span,{style:{color:"#C8D3F5"},children:"    "}),e(n.span,{style:{color:"#4FD6BE"},children:"interimResults"}),e(n.span,{style:{color:"#86E1FC"},children:"?:"}),e(n.span,{style:{color:"#C8D3F5"},children:" "}),e(n.span,{style:{color:"#FF966C"},children:"boolean"}),e(n.span,{style:{color:"#86E1FC"},children:";"})]}}),`
`,e(n.span,{className:"line",get children(){return[e(n.span,{style:{color:"#C8D3F5"},children:"    "}),e(n.span,{style:{color:"#7A88CF"},children:"/**"})]}}),`
`,e(n.span,{className:"line",get children(){return e(n.span,{style:{color:"#7A88CF"},children:"     * Language for SpeechRecognition"})}}),`
`,e(n.span,{className:"line",get children(){return e(n.span,{style:{color:"#7A88CF"},children:"     *"})}}),`
`,e(n.span,{className:"line",get children(){return[e(n.span,{style:{color:"#7A88CF"},children:"     * "}),e(n.span,{style:{color:"#86E1FC"},children:"@"}),e(n.span,{style:{color:"#C099FF"},children:"default"}),e(n.span,{style:{color:"#7A88CF"},children:" "}),e(n.span,{style:{color:"#86E1FC"},children:"'"}),e(n.span,{style:{color:"#C8D3F5"},children:"en-US"}),e(n.span,{style:{color:"#86E1FC"},children:"'"})]}}),`
`,e(n.span,{className:"line",get children(){return e(n.span,{style:{color:"#7A88CF"},children:"     */"})}}),`
`,e(n.span,{className:"line",get children(){return[e(n.span,{style:{color:"#C8D3F5"},children:"    "}),e(n.span,{style:{color:"#4FD6BE"},children:"lang"}),e(n.span,{style:{color:"#86E1FC"},children:"?:"}),e(n.span,{style:{color:"#C8D3F5"},children:" "}),e(n.span,{style:{color:"#FFC777"},children:"MaybeAccessor"}),e(n.span,{style:{color:"#86E1FC"},children:"<"}),e(n.span,{style:{color:"#FF966C"},children:"string"}),e(n.span,{style:{color:"#86E1FC"},children:">;"})]}}),`
`,e(n.span,{className:"line",get children(){return e(n.span,{style:{color:"#B4C2F0"},children:"}"})}}),`
`,e(n.span,{className:"line",get children(){return e(n.span,{style:{color:"#7A88CF"},children:"/**"})}}),`
`,e(n.span,{className:"line",get children(){return e(n.span,{style:{color:"#7A88CF"},children:" * Reactive SpeechRecognition."})}}),`
`,e(n.span,{className:"line",get children(){return e(n.span,{style:{color:"#7A88CF"},children:" *"})}}),`
`,e(n.span,{className:"line",get children(){return[e(n.span,{style:{color:"#7A88CF"},children:" * "}),e(n.span,{style:{color:"#86E1FC"},children:"@"}),e(n.span,{style:{color:"#C099FF"},children:"see"}),e(n.span,{style:{color:"#7A88CF"},children:" "}),e(n.span,{style:{color:"#C8D3F5"},children:"https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition"}),e(n.span,{style:{color:"#7A88CF"},children:" SpeechRecognition"})]}}),`
`,e(n.span,{className:"line",get children(){return e(n.span,{style:{color:"#7A88CF"},children:" */"})}}),`
`,e(n.span,{className:"line",get children(){return[e(n.span,{style:{color:"#C099FF"},children:"declare"}),e(n.span,{style:{color:"#C8D3F5"},children:" "}),e(n.span,{style:{color:"#C099FF"},children:"function"}),e(n.span,{style:{color:"#C8D3F5"},children:" "}),e(n.span,{style:{color:"#82AAFF"},children:"useSpeechRecognition"}),e(n.span,{style:{color:"#B4C2F0"},children:"("}),e(n.span,{style:{color:"#FCA7EA"},children:"options"}),e(n.span,{style:{color:"#86E1FC"},children:"?:"}),e(n.span,{style:{color:"#C8D3F5"},children:" "}),e(n.span,{style:{color:"#FFC777"},children:"UseSpeechRecognitionOptions"}),e(n.span,{style:{color:"#B4C2F0"},children:")"}),e(n.span,{style:{color:"#86E1FC"},children:":"}),e(n.span,{style:{color:"#C8D3F5"},children:" "}),e(n.span,{style:{color:"#B4C2F0"},children:"{"})]}}),`
`,e(n.span,{className:"line",get children(){return[e(n.span,{style:{color:"#C8D3F5"},children:"    "}),e(n.span,{style:{color:"#4FD6BE"},children:"isSupported"}),e(n.span,{style:{color:"#86E1FC"},children:":"}),e(n.span,{style:{color:"#C8D3F5"},children:" "}),e(n.span,{style:{color:"#FFC777"},children:"solid_js"}),e(n.span,{style:{color:"#86E1FC"},children:"."}),e(n.span,{style:{color:"#FFC777"},children:"Accessor"}),e(n.span,{style:{color:"#86E1FC"},children:"<"}),e(n.span,{style:{color:"#FF966C"},children:"boolean"}),e(n.span,{style:{color:"#86E1FC"},children:">;"})]}}),`
`,e(n.span,{className:"line",get children(){return[e(n.span,{style:{color:"#C8D3F5"},children:"    "}),e(n.span,{style:{color:"#4FD6BE"},children:"isListening"}),e(n.span,{style:{color:"#86E1FC"},children:":"}),e(n.span,{style:{color:"#C8D3F5"},children:" "}),e(n.span,{style:{color:"#FFC777"},children:"solid_js"}),e(n.span,{style:{color:"#86E1FC"},children:"."}),e(n.span,{style:{color:"#FFC777"},children:"Accessor"}),e(n.span,{style:{color:"#86E1FC"},children:"<"}),e(n.span,{style:{color:"#FF966C"},children:"boolean"}),e(n.span,{style:{color:"#86E1FC"},children:">;"})]}}),`
`,e(n.span,{className:"line",get children(){return[e(n.span,{style:{color:"#C8D3F5"},children:"    "}),e(n.span,{style:{color:"#4FD6BE"},children:"isFinal"}),e(n.span,{style:{color:"#86E1FC"},children:":"}),e(n.span,{style:{color:"#C8D3F5"},children:" "}),e(n.span,{style:{color:"#FFC777"},children:"solid_js"}),e(n.span,{style:{color:"#86E1FC"},children:"."}),e(n.span,{style:{color:"#FFC777"},children:"Accessor"}),e(n.span,{style:{color:"#86E1FC"},children:"<"}),e(n.span,{style:{color:"#FF966C"},children:"boolean"}),e(n.span,{style:{color:"#86E1FC"},children:">;"})]}}),`
`,e(n.span,{className:"line",get children(){return[e(n.span,{style:{color:"#C8D3F5"},children:"    "}),e(n.span,{style:{color:"#4FD6BE"},children:"result"}),e(n.span,{style:{color:"#86E1FC"},children:":"}),e(n.span,{style:{color:"#C8D3F5"},children:" "}),e(n.span,{style:{color:"#FFC777"},children:"solid_js"}),e(n.span,{style:{color:"#86E1FC"},children:"."}),e(n.span,{style:{color:"#FFC777"},children:"Accessor"}),e(n.span,{style:{color:"#86E1FC"},children:"<"}),e(n.span,{style:{color:"#FF966C"},children:"string"}),e(n.span,{style:{color:"#86E1FC"},children:">;"})]}}),`
`,e(n.span,{className:"line",get children(){return[e(n.span,{style:{color:"#C8D3F5"},children:"    "}),e(n.span,{style:{color:"#4FD6BE"},children:"setResult"}),e(n.span,{style:{color:"#86E1FC"},children:":"}),e(n.span,{style:{color:"#C8D3F5"},children:" "}),e(n.span,{style:{color:"#FFC777"},children:"solid_js"}),e(n.span,{style:{color:"#86E1FC"},children:"."}),e(n.span,{style:{color:"#FFC777"},children:"Setter"}),e(n.span,{style:{color:"#86E1FC"},children:"<"}),e(n.span,{style:{color:"#FF966C"},children:"string"}),e(n.span,{style:{color:"#86E1FC"},children:">;"})]}}),`
`,e(n.span,{className:"line",get children(){return[e(n.span,{style:{color:"#C8D3F5"},children:"    "}),e(n.span,{style:{color:"#4FD6BE"},children:"recognition"}),e(n.span,{style:{color:"#86E1FC"},children:":"}),e(n.span,{style:{color:"#C8D3F5"},children:" "}),e(n.span,{style:{color:"#FFC777"},children:"SpeechRecognition"}),e(n.span,{style:{color:"#C8D3F5"},children:" "}),e(n.span,{style:{color:"#86E1FC"},children:"|"}),e(n.span,{style:{color:"#C8D3F5"},children:" "}),e(n.span,{style:{color:"#FF966C"},children:"undefined"}),e(n.span,{style:{color:"#86E1FC"},children:";"})]}}),`
`,e(n.span,{className:"line",get children(){return[e(n.span,{style:{color:"#C8D3F5"},children:"    "}),e(n.span,{style:{color:"#4FD6BE"},children:"error"}),e(n.span,{style:{color:"#86E1FC"},children:":"}),e(n.span,{style:{color:"#C8D3F5"},children:" "}),e(n.span,{style:{color:"#FFC777"},children:"solid_js"}),e(n.span,{style:{color:"#86E1FC"},children:"."}),e(n.span,{style:{color:"#FFC777"},children:"Accessor"}),e(n.span,{style:{color:"#86E1FC"},children:"<"}),e(n.span,{style:{color:"#FFC777"},children:"SpeechRecognitionErrorEvent"}),e(n.span,{style:{color:"#C8D3F5"},children:" "}),e(n.span,{style:{color:"#86E1FC"},children:"|"}),e(n.span,{style:{color:"#C8D3F5"},children:" "}),e(n.span,{style:{color:"#FF966C"},children:"undefined"}),e(n.span,{style:{color:"#86E1FC"},children:">;"})]}}),`
`,e(n.span,{className:"line",get children(){return[e(n.span,{style:{color:"#C8D3F5"},children:"    "}),e(n.span,{style:{color:"#82AAFF"},children:"toggle"}),e(n.span,{style:{color:"#86E1FC"},children:":"}),e(n.span,{style:{color:"#C8D3F5"},children:" "}),e(n.span,{style:{color:"#B4C2F0"},children:"("}),e(n.span,{style:{color:"#FCA7EA"},children:"value"}),e(n.span,{style:{color:"#86E1FC"},children:"?:"}),e(n.span,{style:{color:"#C8D3F5"},children:" "}),e(n.span,{style:{color:"#FF966C"},children:"boolean"}),e(n.span,{style:{color:"#B4C2F0"},children:")"}),e(n.span,{style:{color:"#C8D3F5"},children:" "}),e(n.span,{style:{color:"#C099FF"},children:"=>"}),e(n.span,{style:{color:"#C8D3F5"},children:" "}),e(n.span,{style:{color:"#FF966C"},children:"void"}),e(n.span,{style:{color:"#86E1FC"},children:";"})]}}),`
`,e(n.span,{className:"line",get children(){return[e(n.span,{style:{color:"#C8D3F5"},children:"    "}),e(n.span,{style:{color:"#82AAFF"},children:"start"}),e(n.span,{style:{color:"#86E1FC"},children:":"}),e(n.span,{style:{color:"#C8D3F5"},children:" "}),e(n.span,{style:{color:"#B4C2F0"},children:"()"}),e(n.span,{style:{color:"#C8D3F5"},children:" "}),e(n.span,{style:{color:"#C099FF"},children:"=>"}),e(n.span,{style:{color:"#C8D3F5"},children:" "}),e(n.span,{style:{color:"#FF966C"},children:"void"}),e(n.span,{style:{color:"#86E1FC"},children:";"})]}}),`
`,e(n.span,{className:"line",get children(){return[e(n.span,{style:{color:"#C8D3F5"},children:"    "}),e(n.span,{style:{color:"#82AAFF"},children:"stop"}),e(n.span,{style:{color:"#86E1FC"},children:":"}),e(n.span,{style:{color:"#C8D3F5"},children:" "}),e(n.span,{style:{color:"#B4C2F0"},children:"()"}),e(n.span,{style:{color:"#C8D3F5"},children:" "}),e(n.span,{style:{color:"#C099FF"},children:"=>"}),e(n.span,{style:{color:"#C8D3F5"},children:" "}),e(n.span,{style:{color:"#FF966C"},children:"void"}),e(n.span,{style:{color:"#86E1FC"},children:";"})]}}),`
`,e(n.span,{className:"line",get children(){return[e(n.span,{style:{color:"#B4C2F0"},children:"}"}),e(n.span,{style:{color:"#86E1FC"},children:";"})]}}),`
`,e(n.span,{className:"line",get children(){return[e(n.span,{style:{color:"#C099FF"},children:"type"}),e(n.span,{style:{color:"#C8D3F5"},children:" "}),e(n.span,{style:{color:"#FFC777"},children:"UseSpeechRecognitionReturn"}),e(n.span,{style:{color:"#C8D3F5"},children:" "}),e(n.span,{style:{color:"#86E1FC"},children:"="}),e(n.span,{style:{color:"#C8D3F5"},children:" "}),e(n.span,{style:{color:"#FFC777"},children:"ReturnType"}),e(n.span,{style:{color:"#86E1FC"},children:"<typeof"}),e(n.span,{style:{color:"#C8D3F5"},children:" useSpeechRecognition"}),e(n.span,{style:{color:"#86E1FC"},children:">;"})]}})]}})}})}}),null),o})(),`
`,e(n.h2,{children:"Source"}),`
`,e(n.p,{get children(){return[e(n.a,{href:"https://github.com/solidjs-use/solidjs-use/blob/main/packages/core/src/useSpeechRecognition/index.ts",children:"Source"})," • ",e(n.a,{href:"https://github.com/solidjs-use/solidjs-use/blob/main/packages/core/src/useSpeechRecognition/demo.tsx",children:"Demo"})," • ",e(n.a,{href:"https://github.com/solidjs-use/solidjs-use/blob/main/packages/core/src/useSpeechRecognition/index.md",children:"Docs"})," • ",e(n.a,{href:"https://vueuse.org/core/useSpeechRecognition",children:"VueUse Docs"})]}}),`
`,e(h,{links:[{href:"#demo",label:"Demo",indent:!1},{href:"#usage",label:"Usage",indent:!1},{href:"#options",label:"Options",indent:!0},{href:"#type-declarations",label:"Type Declarations",indent:!1},{href:"#source",label:"Source",indent:!1}]})]}})}function ge(r={}){const{wrapper:n}=Object.assign({},q(),r.components);return n?e(n,H(r,{get children(){return e(P,r)}})):P(r)}function U(r,n){throw new Error("Expected "+(n?"component":"object")+" `"+r+"` to be defined: you likely forgot to import, pass, or provide it.")}export{ge as default};
