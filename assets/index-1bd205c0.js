import{z as i}from"./index-4bd6c1a1.js";function x(n=0,m={}){const[o,s]=i(n),{max:e=1/0,min:c=-1/0}=m,a=(t=1)=>s(Math.min(e,o()+t)),u=(t=1)=>s(Math.max(c,o()-t)),r=t=>s(Math.max(c,Math.min(e,t)));return{count:o,inc:a,dec:u,set:r,reset:(t=n)=>(n=t,r(t))}}export{x as u};
