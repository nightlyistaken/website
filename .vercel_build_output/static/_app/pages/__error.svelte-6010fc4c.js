import{S as t,i as s,s as r,e as a,k as o,t as e,c as n,a as h,n as l,g as c,d as u,b as f,f as i,H as d,h as x,I as m,J as v,K as p,L as E}from"../chunks/vendor-5ea1d544.js";function g(t){let s,r,o;return{c(){s=a("h1"),r=e("Internal Server Error: "),o=e(t[1]),this.h()},l(a){s=n(a,"H1",{class:!0});var e=h(s);r=c(e,"Internal Server Error: "),o=c(e,t[1]),e.forEach(u),this.h()},h(){f(s,"class","text-4xl font-extrabold font-mono")},m(t,a){i(t,s,a),d(s,r),d(s,o)},p(t,s){2&s&&x(o,t[1])},d(t){t&&u(s)}}}function I(t){let s,r,m,v,p,E;return{c(){s=a("h1"),r=e(t[1]),m=e(" not found."),v=o(),p=a("p"),E=e("It seems you have found something that does not exist."),this.h()},l(a){s=n(a,"H1",{class:!0});var o=h(s);r=c(o,t[1]),m=c(o," not found."),o.forEach(u),v=l(a),p=n(a,"P",{class:!0});var e=h(p);E=c(e,"It seems you have found something that does not exist."),e.forEach(u),this.h()},h(){f(s,"class","text-4xl font-extrabold font-mono p-3"),f(p,"class","text-xl font-extrabold font-mono p-2")},m(t,a){i(t,s,a),d(s,r),d(s,m),i(t,v,a),i(t,p,a),d(p,E)},p(t,s){2&s&&x(r,t[1])},d(t){t&&u(s),t&&u(v),t&&u(p)}}}function b(t){let s,r,b,H,$,y;function S(t,s){return"404"==t[1]?I:g}let k=S(t),w=k(t);return{c(){s=a("div"),r=a("div"),w.c(),b=o(),H=a("h4"),$=e(t[0]),this.h()},l(a){s=n(a,"DIV",{class:!0});var o=h(s);r=n(o,"DIV",{class:!0});var e=h(r);w.l(e),b=l(e),H=n(e,"H4",{class:!0});var f=h(H);$=c(f,t[0]),f.forEach(u),e.forEach(u),o.forEach(u),this.h()},h(){f(H,"class","text-xl font-extrabold font-mono text-red-500"),f(r,"class","hero-content text-center drop-shadow-2xl"),f(s,"class","hero ring-1 hover:bg-gray-900 transition shadow-xl")},m(t,a){i(t,s,a),d(s,r),w.m(r,null),d(r,b),d(r,H),d(H,$)},p(t,[s]){k===(k=S(t))&&w?w.p(t,s):(w.d(1),w=k(t),w&&(w.c(),w.m(r,b))),1&s&&x($,t[0])},i(t){y||m((()=>{y=p(s,E,{}),y.start()}))},o:v,d(t){t&&u(s),w.d()}}}function H({error:t,status:s}){return{props:{error:`${t.message}`,status:`${s}`}}}function $(t,s,r){let{error:a}=s,{status:o}=s;return t.$$set=t=>{"error"in t&&r(0,a=t.error),"status"in t&&r(1,o=t.status)},[a,o]}class y extends t{constructor(t){super(),s(this,t,$,b,r,{error:0,status:1})}}export{y as default,H as load};
