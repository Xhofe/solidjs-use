import{a8 as q,z as e,w as z,q as A}from"./index-4bd6c1a1.js";import{u as B}from"./index-062279c9.js";function T(h,m={}){const{handleOutside:p=!0,window:t=A}=m,{x:s,y:n,sourceType:E}=B(m),u=q(h??t?.document.body),[w,X]=e(0),[Y,O]=e(0),[a,P]=e(0),[r,y]=e(0),[W,x]=e(0),[H,I]=e(0),[d,M]=e(!0);let f=()=>{};return t&&(f=z([u,s,n],()=>{const g=u();if(!g)return;const{left:R,top:b,width:o,height:i}=g.getBoundingClientRect();P(R+t.pageXOffset),y(b+t.pageYOffset),x(i),I(o);const c=s()-a(),l=n()-r();M(o===0||i===0||c<=0||l<=0||c>o||l>i),(p||!d())&&(X(c),O(l))})),{x:s,y:n,sourceType:E,elementX:w,elementY:Y,elementPositionX:a,elementPositionY:r,elementHeight:W,elementWidth:H,isOutside:d,stop:f}}export{T as u};
