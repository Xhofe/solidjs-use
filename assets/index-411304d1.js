import{r as C}from"./index-5d274f60.js";import{t as L}from"./index-c9f703ce.js";import{z as e,C as O,D as S,u as D}from"./index-4bd6c1a1.js";import{u as h}from"./index-cd625b88.js";import{u as H}from"./index-62d2aae6.js";function j(r,l={}){const{reset:d=!0,windowResize:g=!0,windowScroll:w=!0,immediate:v=!0}=l,[z,i]=e(0),[R,n]=e(0),[b,c]=e(0),[x,u]=e(0),[y,f]=e(0),[B,m]=e(0),[E,a]=e(0),[A,p]=e(0);function s(){const o=D(r);if(!o){d&&(i(0),n(0),c(0),u(0),f(0),m(0),a(0),p(0));return}const t=o.getBoundingClientRect();i(t.height),n(t.bottom),c(t.left),u(t.right),f(t.top),m(t.width),a(t.x),p(t.y)}return H(r,s),O(S(C(r),o=>{!o&&s()},{defer:!0})),w&&h("scroll",s,{capture:!0,passive:!0}),g&&h("resize",s,{passive:!0}),L(()=>{v&&s()}),{height:z,bottom:R,left:b,right:x,top:y,width:B,x:E,y:A,update:s}}export{j as u};
