(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))u(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&u(s)}).observe(document,{childList:!0,subtree:!0});function r(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerpolicy&&(o.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?o.credentials="include":t.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function u(t){if(t.ep)return;t.ep=!0;const o=r(t);fetch(t.href,o)}})();const l=document.querySelector(".container"),m=document.querySelector(".canvas"),g=document.querySelector(".one"),y=document.querySelector(".two"),h=document.querySelector(".three"),v=document.querySelector(".four");let i=0,c=0,a=0,d=0,q=.05,f;const x=()=>{for(let e=0;e<=16;e++){let n=document.createElement("div");n.className="image-cover";let r=document.createElement("img");r.setAttribute("src",`./img${e}.jpg`),n.appendChild(r),e<5?g.appendChild(n):e<9?y.appendChild(n):e<13?h.appendChild(n):v.appendChild(n)}},C=(e,n,r)=>(1-r)*e+r*n;function S(e){i=e.clientX-l.getBoundingClientRect().left,c=e.clientY-l.getBoundingClientRect().top,m.style.transform=`translate(-${i}px,-${c*2}px)`}function w(e){i=e.changedTouches[0].pageX-l.getBoundingClientRect().left,c=e.changedTouches[0].pageY-l.getBoundingClientRect().top,m.style.transform=`translate(-${i}px,-${c*2}px)`}function p(){let e;f.forEach((n,r)=>{a=parseFloat(C(a,d,q)).toFixed(2),d=(i+c)/100,e=a-r*.7,n.style.transform=`translate(${e}px,${e}px)`}),requestAnimationFrame(p)}setTimeout(()=>{f=[...document.querySelectorAll(".image-cover img")],p()},100);x();window.addEventListener("mousemove",S);window.addEventListener("touchmove",w);