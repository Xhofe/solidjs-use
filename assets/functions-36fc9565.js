import{M as s,c as t,a}from"./index-4bd6c1a1.js";function i(n){const e=Object.assign({div:"div",h1:"h1"},s(),n.components),{FunctionsList:o,ContextualNav:r}=e;return r||c("ContextualNav",!0),o||c("FunctionsList",!0),t(e.div,{className:"markdown-body",get children(){return[t(e.h1,{children:"Functions"}),`
`,t(o,{}),`
`,t(r,{links:void 0})]}})}function d(n={}){const{wrapper:e}=Object.assign({},s(),n.components);return e?t(e,a(n,{get children(){return t(i,n)}})):i(n)}function c(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}export{d as default};
