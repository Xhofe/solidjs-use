import{O as l,b as g}from"./index-4bd6c1a1.js";function h(n,t){const[r,c]=l(t?.initialValue??n[0]),a=g(()=>{let e=t?.getIndexOf?t.getIndexOf(r(),n):n.indexOf(r());return e<0&&(e=t?.fallbackIndex??0),e});function o(e){const u=n.length,s=(e%u+u)%u,i=n[s];return c(()=>i),i}function f(e=1){return o(a()+e)}function x(e=1){return f(e)}function d(e=1){return f(-e)}return{state:r,setState:c,index:a,next:x,prev:d}}export{h as u};
