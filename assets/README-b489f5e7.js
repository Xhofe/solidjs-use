import{M as i,c as r,a as l}from"./index-4bd6c1a1.js";function s(n){const e=Object.assign({div:"div",h1:"h1",p:"p",a:"a",img:"img",blockquote:"blockquote",h2:"h2",pre:"pre",code:"code",span:"span",ul:"ul",li:"li"},i(),n.components),{ContextualNav:t}=e;return t||o("ContextualNav",!0),r(e.div,{className:"markdown-body",get children(){return[r(e.h1,{children:"@solidjs-use/integrations"}),`
`,r(e.p,{get children(){return r(e.a,{href:"https://www.npmjs.com/package/@solidjs-use/integrations",get children(){return r(e.img,{src:"https://img.shields.io/npm/v/@solidjs-use/integrations?color=a1b858",alt:"NPM version"})}})}}),`
`,r(e.blockquote,{get children(){return[`
`,r(e.p,{get children(){return["This is an add-on of ",r(e.a,{href:"https://github.com/solidjs-use/solidjs-use",children:"solidjs-use"}),", providing integration wrappers for utility libraries."]}}),`
`]}}),`
`,r(e.h2,{children:"Install"}),`
`,r(e.div,{"data-rehype-pretty-code-fragment":"",get children(){return r(e.pre,{style:{backgroundColor:"#1F2028"},"data-language":"bash","data-theme":"default",get children(){return r(e.code,{"data-language":"bash","data-theme":"default",get children(){return r(e.span,{className:"line",get children(){return[r(e.span,{style:{color:"#FFC777"},children:"npm"}),r(e.span,{style:{color:"#C8D3F5"},children:" "}),r(e.span,{style:{color:"#C3E88D"},children:"i"}),r(e.span,{style:{color:"#C8D3F5"},children:" "}),r(e.span,{style:{color:"#C3E88D"},children:"solidjs-use"}),r(e.span,{style:{color:"#C8D3F5"},children:" "}),r(e.span,{style:{color:"#C3E88D"},children:"@solidjs-use/integrations"})]}})}})}})}}),`
`,r(e.h2,{children:"Functions"}),`
`,r(e.ul,{get children(){return[`
`,r(e.li,{get children(){return[r(e.a,{href:"/solidjs-use/integrations/useAsyncValidator/",get children(){return r(e.code,{children:"useAsyncValidator"})}})," — wrapper for ",r(e.a,{href:"https://github.com/yiminghe/async-validator",get children(){return r(e.code,{children:"async-validator"})}})]}}),`
`,r(e.li,{get children(){return[r(e.a,{href:"/solidjs-use/integrations/useAxios/",get children(){return r(e.code,{children:"useAxios"})}})," — wrapper for ",r(e.a,{href:"https://github.com/axios/axios",get children(){return r(e.code,{children:"axios"})}})]}}),`
`,r(e.li,{get children(){return[r(e.a,{href:"/solidjs-use/integrations/useChangeCase/",get children(){return r(e.code,{children:"useChangeCase"})}})," — reactive wrapper for ",r(e.a,{href:"https://github.com/blakeembrey/change-case",get children(){return r(e.code,{children:"change-case"})}})]}}),`
`,r(e.li,{get children(){return[r(e.a,{href:"/solidjs-use/integrations/useCookies/",get children(){return r(e.code,{children:"useCookies"})}})," — wrapper for ",r(e.a,{href:"https://www.npmjs.com/package/universal-cookie",get children(){return r(e.code,{children:"universal-cookie"})}})]}}),`
`,r(e.li,{get children(){return[r(e.a,{href:"/solidjs-use/integrations/useDrauu/",get children(){return r(e.code,{children:"useDrauu"})}})," — reactive instance for ",r(e.a,{href:"https://github.com/antfu/drauu",children:"drauu"})]}}),`
`,r(e.li,{get children(){return[r(e.a,{href:"/solidjs-use/integrations/useFocusTrap/",get children(){return r(e.code,{children:"useFocusTrap"})}})," — reactive wrapper for ",r(e.a,{href:"https://github.com/focus-trap/focus-trap",get children(){return r(e.code,{children:"focus-trap"})}})]}}),`
`,r(e.li,{get children(){return[r(e.a,{href:"/solidjs-use/integrations/useFuse/",get children(){return r(e.code,{children:"useFuse"})}})," — easily implement fuzzy search using a composable with ",r(e.a,{href:"https://github.com/krisk/fuse",children:"Fuse.js"})]}}),`
`,r(e.li,{get children(){return[r(e.a,{href:"/solidjs-use/integrations/useIDBKeyval/",get children(){return r(e.code,{children:"useIDBKeyval"})}})," — wrapper for ",r(e.a,{href:"https://www.npmjs.com/package/idb-keyval",get children(){return r(e.code,{children:"idb-keyval"})}})]}}),`
`,r(e.li,{get children(){return[r(e.a,{href:"/solidjs-use/integrations/useJwt/",get children(){return r(e.code,{children:"useJwt"})}})," — wrapper for ",r(e.a,{href:"https://github.com/auth0/jwt-decode",get children(){return r(e.code,{children:"jwt-decode"})}})]}}),`
`,r(e.li,{get children(){return[r(e.a,{href:"/solidjs-use/integrations/useNProgress/",get children(){return r(e.code,{children:"useNProgress"})}})," — reactive wrapper for ",r(e.a,{href:"https://github.com/rstacruz/nprogress",get children(){return r(e.code,{children:"nprogress"})}})]}}),`
`,r(e.li,{get children(){return[r(e.a,{href:"/solidjs-use/integrations/useQRCode/",get children(){return r(e.code,{children:"useQRCode"})}})," — wrapper for ",r(e.a,{href:"https://github.com/soldair/node-qrcode",get children(){return r(e.code,{children:"qrcode"})}})]}}),`
`]}}),`
`,r(e.h2,{children:"Tree-shaking"}),`
`,r(e.p,{children:"For better tree-shaking result, import functions from submodules, for example:"}),`
`,r(e.div,{"data-rehype-pretty-code-fragment":"",get children(){return r(e.pre,{style:{backgroundColor:"#1F2028"},"data-language":"ts","data-theme":"default",get children(){return r(e.code,{"data-language":"ts","data-theme":"default",get children(){return[r(e.span,{className:"line",get children(){return[r(e.span,{style:{color:"#86E1FC"},children:"import"}),r(e.span,{style:{color:"#C8D3F5"},children:" "}),r(e.span,{style:{color:"#B4C2F0"},children:"{ "}),r(e.span,{style:{color:"#C8D3F5"},children:"useAxios"}),r(e.span,{style:{color:"#B4C2F0"},children:" }"}),r(e.span,{style:{color:"#C8D3F5"},children:" "}),r(e.span,{style:{color:"#86E1FC"},children:"from"}),r(e.span,{style:{color:"#C8D3F5"},children:" "}),r(e.span,{style:{color:"#86E1FC"},children:"'"}),r(e.span,{style:{color:"#C3E88D"},children:"@solidjs-use/integrations/useAxios"}),r(e.span,{style:{color:"#86E1FC"},children:"'"})]}}),`
`,r(e.span,{className:"line",children:" "}),`
`,r(e.span,{className:"line",get children(){return r(e.span,{style:{color:"#7A88CF"},children:"// Don't"})}}),`
`,r(e.span,{className:"line",get children(){return[r(e.span,{style:{color:"#86E1FC"},children:"import"}),r(e.span,{style:{color:"#C8D3F5"},children:" "}),r(e.span,{style:{color:"#B4C2F0"},children:"{ "}),r(e.span,{style:{color:"#C8D3F5"},children:"useAxios"}),r(e.span,{style:{color:"#B4C2F0"},children:" }"}),r(e.span,{style:{color:"#C8D3F5"},children:" "}),r(e.span,{style:{color:"#86E1FC"},children:"from"}),r(e.span,{style:{color:"#C8D3F5"},children:" "}),r(e.span,{style:{color:"#86E1FC"},children:"'"}),r(e.span,{style:{color:"#C3E88D"},children:"@solidjs-use/integrations"}),r(e.span,{style:{color:"#86E1FC"},children:"'"})]}})]}})}})}}),`
`,r(e.h2,{children:"Links"}),`
`,r(e.ul,{get children(){return[`
`,r(e.li,{get children(){return r(e.a,{href:"/solidjs-use",children:"solidjs-use"})}}),`
`]}}),`
`,r(t,{links:[{href:"#install",label:"Install",indent:!1},{href:"#functions",label:"Functions",indent:!1},{href:"#tree-shaking",label:"Tree-shaking",indent:!1},{href:"#links",label:"Links",indent:!1}]})]}})}function a(n={}){const{wrapper:e}=Object.assign({},i(),n.components);return e?r(e,l(n,{get children(){return r(s,n)}})):s(n)}function o(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as default};
