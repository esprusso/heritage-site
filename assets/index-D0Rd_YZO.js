const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/VibeShowcase-4_w-Lq5i.js","assets/vendor-motion-JbGu3LFv.js","assets/vendor-react-CDFnBdCK.js","assets/chevron-right-CB4g0Vqy.js","assets/BlogPost-DiYI37PY.js","assets/arrow-left-lielb89s.js","assets/Portfolio-BuR3ldgU.js","assets/CategoryGallery-WD5uMKab.js","assets/NotFound-BQFy9B7M.js"])))=>i.map(i=>d[i]);
import{j as a,A as Dt,m as S}from"./vendor-motion-JbGu3LFv.js";import{a as Bt,r as w,R as Ut,u as zt,L as ue,b as $t,c as z,B as Mt}from"./vendor-react-CDFnBdCK.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(o){if(o.ep)return;o.ep=!0;const i=r(o);fetch(o.href,i)}})();var ct,He=Bt;ct=He.createRoot,He.hydrateRoot;const dt=w.createContext(),Ht=({children:e})=>{const[t,r]=w.useState(null),[n,o]=w.useState(!0),[i,s]=w.useState(null);return w.useEffect(()=>{fetch("/content.json").then(l=>{if(!l.ok)throw new Error("Failed to load content configuration");return l.json()}).then(l=>{r(l),o(!1)}).catch(l=>{console.error("Error loading content:",l),s(l),o(!1)})},[]),a.jsx(dt.Provider,{value:{content:t,loading:n,error:i},children:e})},H=()=>w.useContext(dt);class qt extends Ut.Component{constructor(t){super(t),this.state={hasError:!1,error:null}}static getDerivedStateFromError(t){return{hasError:!0,error:t}}componentDidCatch(t,r){console.error("ErrorBoundary caught an error:",t,r)}render(){return this.state.hasError?a.jsxs("div",{style:{minHeight:"100vh",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",padding:"2rem",textAlign:"center",fontFamily:"var(--font-heading, Montserrat, sans-serif)"},role:"alert",children:[a.jsx("h1",{style:{fontSize:"clamp(2rem, 5vw, 3rem)",fontWeight:600,marginBottom:"1rem",textTransform:"uppercase"},children:"Something went wrong"}),a.jsx("p",{style:{fontSize:"1.1rem",color:"var(--sub-text-color, #666)",marginBottom:"2rem",maxWidth:"500px"},children:"An unexpected error occurred. Please try refreshing the page."}),a.jsx("button",{onClick:()=>{this.setState({hasError:!1,error:null}),window.location.href="/"},style:{display:"inline-flex",alignItems:"center",padding:"1rem 2.5rem",backgroundColor:"var(--accent-color, #000)",color:"var(--bg-color, #fff)",border:"none",borderRadius:"50px",fontSize:"0.9rem",fontWeight:500,textTransform:"uppercase",letterSpacing:"0.1em",cursor:"pointer",transition:"opacity 0.3s ease"},children:"Return Home"})]}):this.props.children}}const Wt="modulepreload",Vt=function(e){return"/"+e},qe={},Y=function(t,r,n){let o=Promise.resolve();if(r&&r.length>0){document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),l=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));o=Promise.allSettled(r.map(h=>{if(h=Vt(h),h in qe)return;qe[h]=!0;const p=h.endsWith(".css"),d=p?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${h}"]${d}`))return;const m=document.createElement("link");if(m.rel=p?"stylesheet":Wt,p||(m.as="script"),m.crossOrigin="",m.href=h,l&&m.setAttribute("nonce",l),document.head.appendChild(m),p)return new Promise((x,v)=>{m.addEventListener("load",x),m.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${h}`)))})}))}function i(s){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=s,window.dispatchEvent(l),!l.defaultPrevented)throw s}return o.then(s=>{for(const l of s||[])l.status==="rejected"&&i(l.reason);return t().catch(i)})};/**
 * @license lucide-react v0.331.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Jt={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.331.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kt=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),V=(e,t)=>{const r=w.forwardRef(({color:n="currentColor",size:o=24,strokeWidth:i=2,absoluteStrokeWidth:s,className:l="",children:h,...p},d)=>w.createElement("svg",{ref:d,...Jt,width:o,height:o,stroke:n,strokeWidth:s?Number(i)*24/Number(o):i,className:["lucide",`lucide-${Kt(e)}`,l].join(" "),...p},[...t.map(([m,x])=>w.createElement(m,x)),...Array.isArray(h)?h:[h]]));return r.displayName=`${e}`,r};/**
 * @license lucide-react v0.331.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ut=V("ArrowDown",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]);/**
 * @license lucide-react v0.331.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xt=V("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.331.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gt=V("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.331.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zt=V("Instagram",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]]);/**
 * @license lucide-react v0.331.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yt=V("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.331.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qt=V("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),er=({children:e})=>{var u,g;const{content:t,loading:r,error:n}=H(),[o,i]=w.useState(!1),[s,l]=w.useState(!1),h=zt(),p=h.pathname==="/",d=w.useRef(null),m=w.useRef(null),x=w.useRef(null);if(w.useEffect(()=>{let f=!1;const b=()=>{f||(f=!0,requestAnimationFrame(()=>{l(window.scrollY>50),f=!1}))};return window.addEventListener("scroll",b,{passive:!0}),()=>window.removeEventListener("scroll",b)},[]),w.useEffect(()=>{i(!1)},[h.pathname]),w.useEffect(()=>{var f;return o?(document.body.style.overflow="hidden",requestAnimationFrame(()=>{var b;(b=d.current)==null||b.focus()})):(document.body.style.overflow="",(f=m.current)==null||f.focus()),()=>{document.body.style.overflow=""}},[o]),w.useEffect(()=>{if(!o)return;const f=b=>{b.key==="Escape"&&i(!1)};return window.addEventListener("keydown",f),()=>window.removeEventListener("keydown",f)},[o]),w.useEffect(()=>{if(!o||!x.current)return;const f=x.current,b=E=>{if(E.key!=="Tab")return;const j=f.querySelectorAll('button, a, [tabindex]:not([tabindex="-1"])');if(j.length===0)return;const R=j[0],k=j[j.length-1];E.shiftKey&&document.activeElement===R?(E.preventDefault(),k.focus()):!E.shiftKey&&document.activeElement===k&&(E.preventDefault(),R.focus())};return f.addEventListener("keydown",b),()=>f.removeEventListener("keydown",b)},[o]),r)return a.jsx("div",{className:"loading-screen",role:"status",children:"Loading..."});if(n||!t)return a.jsx("div",{className:"error-screen",role:"alert",children:"Error loading content."});const v=[{name:"Home",href:"/#home"},{name:"Portfolio",href:"/portfolio"},...((u=t==null?void 0:t.ai)==null?void 0:u.length)>0?[{name:"AI",href:"/#ai"}]:[],...((g=t==null?void 0:t.video)==null?void 0:g.length)>0?[{name:"Video",href:"/#video"}]:[],{name:"Blog",href:"/blog"},{name:"About",href:"/#about"},{name:"Contact",href:"/#contact"}];return a.jsxs("div",{className:"layout-container",children:[a.jsx("style",{children:`
                .skip-to-content {
                    position: absolute;
                    top: -100%;
                    left: 1rem;
                    z-index: 1000;
                    padding: 0.75rem 1.5rem;
                    background: var(--accent-color);
                    color: var(--bg-color);
                    text-decoration: none;
                    font-size: 0.9rem;
                    font-weight: 600;
                    border-radius: 0 0 4px 4px;
                    transition: top 0.2s;
                }
                .skip-to-content:focus {
                    top: 0;
                }
                .nav-container {
                    padding: 2rem 3rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    z-index: 100;
                    color: var(--text-color);
                    transition: all 0.3s ease;
                }
                .nav-container.transparent-light {
                    color: #FFFFFF;
                }
                .nav-container.scrolled {
                    padding: 1.5rem 3rem;
                    background: rgba(255, 255, 255, 0.9);
                    backdrop-filter: blur(10px);
                    border-bottom: 1px solid var(--border-color);
                    color: var(--text-color) !important;
                }
                .logo {
                    font-family: var(--font-heading);
                    font-size: 1.5rem;
                    font-weight: 800;
                    letter-spacing: -0.02em;
                    text-transform: uppercase;
                }
                .desktop-menu {
                    display: flex;
                    gap: 2rem;
                }
                .desktop-menu a {
                    font-size: 0.85rem;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    position: relative;
                    font-weight: 500;
                }
                .desktop-menu a::after {
                    content: '';
                    position: absolute;
                    bottom: -4px;
                    left: 0;
                    width: 0;
                    height: 1px;
                    background: currentColor;
                    transition: width 0.3s ease;
                }
                .desktop-menu a:hover::after,
                .desktop-menu a:focus-visible::after {
                    width: 100%;
                }
                .mobile-toggle {
                    display: none;
                    cursor: pointer;
                    background: none;
                    border: none;
                    color: inherit;
                    padding: 0.5rem;
                }
                .mobile-toggle:focus-visible {
                    outline: 2px solid currentColor;
                    outline-offset: 4px;
                }
                @media (max-width: 768px) {
                    .nav-container { padding: 1.5rem; }
                    .desktop-menu { display: none; }
                    .mobile-toggle { display: block; }
                }
                footer {
                    padding: 3rem 2rem;
                    text-align: center;
                    border-top: 1px solid var(--border-color);
                }
            `}),a.jsx("div",{className:"grain-overlay","aria-hidden":"true"}),a.jsx("a",{href:"#main-content",className:"skip-to-content",children:"Skip to main content"}),a.jsxs("nav",{className:`nav-container ${s?"scrolled":""} ${!s&&p?"transparent-light":""}`,"aria-label":"Main navigation",children:[a.jsx(ue,{to:"/",className:"logo",children:t.hero.title}),a.jsx("ul",{className:"desktop-menu",role:"menubar",children:v.map(f=>a.jsx("li",{role:"none",children:a.jsx("a",{href:f.href,role:"menuitem",children:f.name})},f.name))}),a.jsx("button",{ref:m,className:"mobile-toggle",onClick:()=>i(!0),"aria-label":"Open navigation menu","aria-expanded":o,"aria-controls":"mobile-menu",children:a.jsx(Yt,{size:24})})]}),a.jsx(Dt,{children:o&&a.jsxs(S.div,{ref:x,id:"mobile-menu",role:"dialog","aria-modal":"true","aria-label":"Navigation menu",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.4,ease:[.16,1,.3,1]},style:{position:"fixed",top:0,left:0,width:"100%",height:"100vh",backgroundColor:"var(--bg-color)",zIndex:200,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:[a.jsx("button",{ref:d,onClick:()=>i(!1),"aria-label":"Close navigation menu",style:{position:"absolute",top:"2rem",right:"2rem",background:"transparent",border:"none",color:"var(--text-color)",cursor:"pointer",padding:"0.5rem"},children:a.jsx(Qt,{size:32})}),a.jsx("nav",{"aria-label":"Mobile navigation",style:{display:"flex",flexDirection:"column",gap:"2rem",alignItems:"center"},children:v.map(f=>a.jsx(S.a,{href:f.href,initial:{y:20,opacity:0},animate:{y:0,opacity:1},transition:{duration:.5},onClick:()=>i(!1),style:{fontFamily:"var(--font-heading)",fontSize:"3rem",color:"var(--accent-color)",textTransform:"uppercase",fontWeight:700},children:f.name},f.name))})]})}),a.jsx("main",{id:"main-content",children:e}),a.jsx("footer",{children:a.jsxs("p",{style:{color:"var(--sub-text-color)",fontSize:"0.75rem"},children:["© ",new Date().getFullYear()," ",t.meta.title]})})]})},tr=()=>{const{content:e,loading:t}=H();return t?null:a.jsxs("section",{id:"home",className:"hero-section",children:[a.jsxs(S.div,{initial:"hidden",animate:"visible",variants:{hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.015,delayChildren:.1}}},children:[a.jsx("h1",{style:{fontFamily:"var(--font-display)",fontSize:"clamp(3.5rem, 11vw, 9rem)",fontWeight:700,lineHeight:.9,letterSpacing:"0.02em",textTransform:"uppercase",marginBottom:"1.5rem",color:"#ffffff",display:"flex",flexWrap:"wrap",justifyContent:"center",gap:"0.25em"},children:e.hero.title.split(" ").map((r,n)=>a.jsx("span",{style:{display:"inline-flex"},children:r.split("").map((o,i)=>a.jsx(S.span,{variants:{hidden:{opacity:0,y:16},visible:{opacity:1,y:0,transition:{duration:.15}}},children:o},`${n}-${i}`))},n))}),a.jsxs("p",{style:{fontSize:"clamp(0.75rem, 1.5vw, 0.95rem)",textTransform:"uppercase",letterSpacing:"0.3em",color:"rgba(255, 255, 255, 0.55)",fontWeight:400,fontFamily:"var(--font-heading)",display:"flex",flexWrap:"wrap",justifyContent:"center",gap:"0.5em"},children:[a.jsx(S.span,{initial:"hidden",animate:"visible",variants:{hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.02,delayChildren:.3}}},style:{display:"flex",flexWrap:"wrap",justifyContent:"center",gap:"0.2em"},children:e.hero.subtitle.split("").map((r,n)=>a.jsx(S.span,{variants:{hidden:{opacity:0},visible:{opacity:1}},children:r},n))}),a.jsx(S.span,{initial:{opacity:0},animate:{opacity:[0,1,0]},transition:{duration:.8,repeat:1/0,ease:"linear",delay:.7},style:{display:"inline-block",width:"0.12em",height:"0.8em",backgroundColor:"rgba(255,255,255,0.55)",marginLeft:"0.1em",alignSelf:"center"}})]})]}),a.jsxs(S.a,{href:"#portfolio",initial:{opacity:0,y:16},animate:{opacity:1,y:0},transition:{delay:.5,duration:.5},whileHover:{scale:1.04,backgroundColor:"#ffffff",color:"#0d0d0d",borderColor:"#ffffff"},whileTap:{scale:.96},style:{marginTop:"2.5rem",display:"inline-flex",alignItems:"center",gap:"0.8rem",padding:"0.85rem 2.2rem",border:"1px solid rgba(255,255,255,0.35)",borderRadius:"50px",color:"rgba(255,255,255,0.85)",textDecoration:"none",fontSize:"0.75rem",textTransform:"uppercase",letterSpacing:"0.2em",cursor:"pointer",fontWeight:500,fontFamily:"var(--font-heading)",transition:"background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease"},children:[a.jsx("span",{children:"Explore Work"}),a.jsx(ut,{size:16})]}),a.jsx("style",{children:`
                .hero-section {
                    height: 100vh;
                    height: 100dvh;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    text-align: center;
                    padding: 2rem;
                    position: relative;
                    background-image: linear-gradient(rgba(0,0,0,0.58), rgba(0,0,0,0.58)), url(/images/mm-2.jpg);
                    background-size: cover;
                    background-position: center;
                    color: #ffffff;
                }
                @media (max-width: 768px) {
                    .hero-section {
                        height: 100vh;
                        height: 100dvh;
                        background-attachment: scroll;
                        background-position: 62% center;
                    }
                }
            `})]})},Q=({targetId:e,color:t="var(--sub-text-color)",label:r="Scroll Down"})=>a.jsxs(S.a,{href:`#${e}`,initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!0,margin:"-50px"},transition:{delay:.3,duration:.4},style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"0.5rem",color:t,textDecoration:"none",cursor:"pointer",marginTop:"4rem",marginBottom:"2rem"},children:[a.jsx("span",{style:{fontSize:"0.75rem",textTransform:"uppercase",letterSpacing:"0.15em",fontWeight:500},children:r}),a.jsx(S.div,{animate:{y:[0,8,0]},transition:{duration:2,repeat:3,ease:"easeInOut"},children:a.jsx(ut,{size:20})})]}),rr=()=>{var r;const{content:e,loading:t}=H();return t?null:a.jsxs("section",{id:"about",style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",padding:"8rem 2rem",scrollMarginTop:"100px"},children:[a.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))",gap:"4rem",maxWidth:"1200px",width:"100%",alignItems:"center"},children:[a.jsx(S.div,{initial:{opacity:0,x:-50},whileInView:{opacity:1,x:0},viewport:{once:!0},transition:{duration:.8},style:{position:"relative"},children:a.jsx("img",{src:e.about.image,alt:`Portrait of ${((r=e.hero)==null?void 0:r.title)||"the photographer"}`,loading:"lazy",style:{width:"100%",maxHeight:"80vh",objectFit:"cover",border:"1px solid var(--border-color)"}})}),a.jsxs(S.div,{initial:{opacity:0,x:50},whileInView:{opacity:1,x:0},viewport:{once:!0},transition:{duration:.8,delay:.2},children:[a.jsx("h2",{style:{fontSize:"clamp(2rem, 5vw, 4rem)",marginBottom:"2rem",textTransform:"uppercase",fontWeight:400},children:e.about.title}),a.jsx("p",{style:{fontSize:"1.1rem",lineHeight:1.8,color:"var(--sub-text-color)",maxWidth:"500px"},children:e.about.text})]})]}),a.jsx(Q,{targetId:"contact",label:"Get in Touch"}),a.jsx("style",{children:`
                @media (max-width: 768px) {
                    #about > div {
                        grid-template-columns: 1fr;
                        gap: 3rem;
                    }
                }
            `})]})},nr=()=>{const{content:e,loading:t}=H();if(t||!(e!=null&&e.featuredWork))return null;const r=e.featuredWork;return a.jsxs("section",{id:"portfolio",style:{padding:"8rem 2rem 6rem",scrollMarginTop:"100px",display:"flex",flexDirection:"column",alignItems:"center"},children:[a.jsx(S.h2,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},style:{fontFamily:"var(--font-heading)",fontSize:"clamp(1.8rem, 3vw, 2.5rem)",fontWeight:500,textTransform:"uppercase",letterSpacing:"0.15em",marginBottom:"4rem",textAlign:"center"},children:"Featured Work"}),a.jsx("div",{className:"featured-rows",children:r.map((n,o)=>{const i=o%2!==0;return a.jsx(S.div,{initial:{opacity:0,y:40},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.7,delay:o*.1,ease:[.16,1,.3,1]},children:a.jsxs(ue,{to:`/portfolio/${n.categoryId}`,className:`featured-row-card${i?" featured-row-reversed":""}`,"aria-label":`View ${n.category} portfolio`,children:[a.jsx("div",{className:"featured-row-image",children:a.jsx("img",{src:n.src,alt:n.category,loading:"lazy"})}),a.jsx("div",{className:"featured-row-info",children:a.jsx("span",{className:"featured-row-label",children:n.category})})]})},n.categoryId)})}),a.jsx(S.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},style:{marginTop:"3.5rem"},children:a.jsxs(ue,{to:"/portfolio",className:"portfolio-cta",children:["View Full Portfolio ",a.jsx(Xt,{size:18})]})}),a.jsx(Q,{targetId:"writing",label:"Read Words"}),a.jsx("style",{children:`
                .featured-rows {
                    display: flex;
                    flex-direction: column;
                    gap: 1.25rem;
                    width: 100%;
                    max-width: 1100px;
                }

                .featured-row-card {
                    display: grid;
                    grid-template-columns: 3fr 2fr;
                    text-decoration: none;
                    color: inherit;
                    outline: none;
                    height: clamp(320px, 35vw, 450px);
                }

                .featured-row-card:focus-visible {
                    outline: 2px solid var(--accent-color);
                    outline-offset: 4px;
                }

                .featured-row-reversed {
                    grid-template-columns: 2fr 3fr;
                }

                .featured-row-reversed .featured-row-image {
                    order: 2;
                }

                .featured-row-reversed .featured-row-info {
                    order: 1;
                }

                .featured-row-image {
                    overflow: hidden;
                    position: relative;
                    height: 100%;
                }

                .featured-row-image img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    object-position: center 20%;
                    display: block;
                    transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
                }

                .featured-row-card:hover img {
                    transform: scale(1.03);
                }

                .featured-row-info {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: #f3f3f3;
                    transition: background-color 0.5s cubic-bezier(0.16, 1, 0.3, 1);
                }

                .featured-row-label {
                    font-family: var(--font-heading);
                    font-size: 1.05rem;
                    font-weight: 500;
                    letter-spacing: 0.08em;
                    color: var(--sub-text-color);
                    transition: color 0.5s cubic-bezier(0.16, 1, 0.3, 1);
                }

                .featured-row-card:hover .featured-row-info,
                .featured-row-card:focus-visible .featured-row-info {
                    background: #1a1a1a;
                }

                .featured-row-card:hover .featured-row-label,
                .featured-row-card:focus-visible .featured-row-label {
                    color: #f0f0f0;
                }

                .portfolio-cta {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                    font-family: var(--font-heading);
                    font-size: 0.95rem;
                    font-weight: 500;
                    text-transform: uppercase;
                    letter-spacing: 0.12em;
                    color: var(--text-color);
                    text-decoration: none;
                    padding: 1rem 2.5rem;
                    border: 1px solid var(--border-color);
                    transition: background-color 0.3s ease, border-color 0.3s ease;
                }
                .portfolio-cta:hover {
                    background-color: var(--text-color);
                    color: var(--bg-color);
                    border-color: var(--text-color);
                }
                .portfolio-cta:focus-visible {
                    outline: 2px solid var(--accent-color);
                    outline-offset: 4px;
                }

                @media (max-width: 768px) {
                    .featured-row-card,
                    .featured-row-reversed {
                        grid-template-columns: 1fr;
                        min-height: auto;
                    }
                    .featured-row-image {
                        aspect-ratio: 4 / 3;
                    }
                    .featured-row-reversed .featured-row-image {
                        order: 0;
                    }
                    .featured-row-reversed .featured-row-info {
                        order: 0;
                    }
                    .featured-row-info {
                        padding: 2.5rem 1.5rem;
                    }
                }
            `})]})},or=()=>{const{content:e,loading:t}=H();return t||!(e!=null&&e.ai)||e.ai.length===0?null:a.jsxs("section",{id:"ai",style:{padding:"8rem 2rem",scrollMarginTop:"100px",display:"flex",flexDirection:"column",alignItems:"center",backgroundColor:"#fafafa"},children:[a.jsx(S.h2,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},style:{marginBottom:"4rem",fontSize:"clamp(2rem, 4vw, 3rem)",textAlign:"center",fontWeight:500,letterSpacing:"0.02em",textTransform:"uppercase"},children:"AI Generated"}),a.jsx("div",{className:"gallery-grid",style:{width:"100%",maxWidth:"1200px"},children:e.ai.map((r,n)=>a.jsxs(S.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:n*.05},style:{marginBottom:"1.5rem",breakInside:"avoid"},whileHover:{scale:1.02},children:[a.jsx("img",{src:r.src,alt:r.caption||"",style:{width:"100%",display:"block",borderRadius:"4px"}}),r.caption&&a.jsx("p",{style:{marginTop:"0.5rem",fontSize:"0.85rem",color:"var(--sub-text-color)"},children:r.caption})]},r.id))}),a.jsx("div",{style:{marginTop:"4rem"},children:a.jsx(Q,{targetId:"video",label:"View Video Work",fallbackId:"about"})})]})},ir=()=>{const{content:e,loading:t}=H();return t||!(e!=null&&e.video)||e.video.length===0?null:a.jsxs("section",{id:"video",style:{padding:"8rem 2rem",scrollMarginTop:"100px",display:"flex",flexDirection:"column",alignItems:"center"},children:[a.jsx(S.h2,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},style:{marginBottom:"4rem",fontSize:"clamp(2rem, 4vw, 3rem)",textAlign:"center",fontWeight:500,letterSpacing:"0.02em",textTransform:"uppercase"},children:"Video Work"}),a.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))",gap:"2rem",width:"100%",maxWidth:"1200px"},children:e.video.map((r,n)=>a.jsxs(S.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:n*.1},style:{width:"100%"},children:[a.jsx("div",{style:{position:"relative",paddingBottom:"56.25%",height:0,overflow:"hidden",borderRadius:"8px"},children:a.jsx("iframe",{src:r.embedUrl,style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",border:0},allow:"autoplay; fullscreen; picture-in-picture",allowFullScreen:!0,title:r.title})}),a.jsx("h3",{style:{marginTop:"1rem",fontSize:"1.2rem",fontWeight:600},children:r.title}),r.description&&a.jsx("p",{style:{marginTop:"0.5rem",color:"var(--sub-text-color)",fontSize:"0.95rem"},children:r.description})]},r.id))}),a.jsx("div",{style:{marginTop:"4rem"},children:a.jsx(Q,{targetId:"about",label:"About Me"})})]})};function ft(e,t){return function(){return e.apply(t,arguments)}}const{toString:sr}=Object.prototype,{getPrototypeOf:Oe}=Object,{iterator:he,toStringTag:pt}=Symbol,me=(e=>t=>{const r=sr.call(t);return e[r]||(e[r]=r.slice(8,-1).toLowerCase())})(Object.create(null)),F=e=>(e=e.toLowerCase(),t=>me(t)===e),ge=e=>t=>typeof t===e,{isArray:J}=Array,W=ge("undefined");function ee(e){return e!==null&&!W(e)&&e.constructor!==null&&!W(e.constructor)&&A(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const ht=F("ArrayBuffer");function ar(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&ht(e.buffer),t}const lr=ge("string"),A=ge("function"),mt=ge("number"),te=e=>e!==null&&typeof e=="object",cr=e=>e===!0||e===!1,ae=e=>{if(me(e)!=="object")return!1;const t=Oe(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(pt in e)&&!(he in e)},dr=e=>{if(!te(e)||ee(e))return!1;try{return Object.keys(e).length===0&&Object.getPrototypeOf(e)===Object.prototype}catch{return!1}},ur=F("Date"),fr=F("File"),pr=F("Blob"),hr=F("FileList"),mr=e=>te(e)&&A(e.pipe),gr=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||A(e.append)&&((t=me(e))==="formdata"||t==="object"&&A(e.toString)&&e.toString()==="[object FormData]"))},yr=F("URLSearchParams"),[xr,br,wr,vr]=["ReadableStream","Request","Response","Headers"].map(F),Er=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function re(e,t,{allOwnKeys:r=!1}={}){if(e===null||typeof e>"u")return;let n,o;if(typeof e!="object"&&(e=[e]),J(e))for(n=0,o=e.length;n<o;n++)t.call(null,e[n],n,e);else{if(ee(e))return;const i=r?Object.getOwnPropertyNames(e):Object.keys(e),s=i.length;let l;for(n=0;n<s;n++)l=i[n],t.call(null,e[l],l,e)}}function gt(e,t){if(ee(e))return null;t=t.toLowerCase();const r=Object.keys(e);let n=r.length,o;for(;n-- >0;)if(o=r[n],t===o.toLowerCase())return o;return null}const $=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,yt=e=>!W(e)&&e!==$;function Re(){const{caseless:e,skipUndefined:t}=yt(this)&&this||{},r={},n=(o,i)=>{const s=e&&gt(r,i)||i;ae(r[s])&&ae(o)?r[s]=Re(r[s],o):ae(o)?r[s]=Re({},o):J(o)?r[s]=o.slice():(!t||!W(o))&&(r[s]=o)};for(let o=0,i=arguments.length;o<i;o++)arguments[o]&&re(arguments[o],n);return r}const jr=(e,t,r,{allOwnKeys:n}={})=>(re(t,(o,i)=>{r&&A(o)?e[i]=ft(o,r):e[i]=o},{allOwnKeys:n}),e),Sr=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Rr=(e,t,r,n)=>{e.prototype=Object.create(t.prototype,n),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),r&&Object.assign(e.prototype,r)},Cr=(e,t,r,n)=>{let o,i,s;const l={};if(t=t||{},e==null)return t;do{for(o=Object.getOwnPropertyNames(e),i=o.length;i-- >0;)s=o[i],(!n||n(s,e,t))&&!l[s]&&(t[s]=e[s],l[s]=!0);e=r!==!1&&Oe(e)}while(e&&(!r||r(e,t))&&e!==Object.prototype);return t},Tr=(e,t,r)=>{e=String(e),(r===void 0||r>e.length)&&(r=e.length),r-=t.length;const n=e.indexOf(t,r);return n!==-1&&n===r},kr=e=>{if(!e)return null;if(J(e))return e;let t=e.length;if(!mt(t))return null;const r=new Array(t);for(;t-- >0;)r[t]=e[t];return r},Ar=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&Oe(Uint8Array)),Or=(e,t)=>{const n=(e&&e[he]).call(e);let o;for(;(o=n.next())&&!o.done;){const i=o.value;t.call(e,i[0],i[1])}},Nr=(e,t)=>{let r;const n=[];for(;(r=e.exec(t))!==null;)n.push(r);return n},Pr=F("HTMLFormElement"),Fr=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(r,n,o){return n.toUpperCase()+o}),We=(({hasOwnProperty:e})=>(t,r)=>e.call(t,r))(Object.prototype),Lr=F("RegExp"),xt=(e,t)=>{const r=Object.getOwnPropertyDescriptors(e),n={};re(r,(o,i)=>{let s;(s=t(o,i,e))!==!1&&(n[i]=s||o)}),Object.defineProperties(e,n)},_r=e=>{xt(e,(t,r)=>{if(A(e)&&["arguments","caller","callee"].indexOf(r)!==-1)return!1;const n=e[r];if(A(n)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+r+"'")})}})},Ir=(e,t)=>{const r={},n=o=>{o.forEach(i=>{r[i]=!0})};return J(e)?n(e):n(String(e).split(t)),r},Dr=()=>{},Br=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t;function Ur(e){return!!(e&&A(e.append)&&e[pt]==="FormData"&&e[he])}const zr=e=>{const t=new Array(10),r=(n,o)=>{if(te(n)){if(t.indexOf(n)>=0)return;if(ee(n))return n;if(!("toJSON"in n)){t[o]=n;const i=J(n)?[]:{};return re(n,(s,l)=>{const h=r(s,o+1);!W(h)&&(i[l]=h)}),t[o]=void 0,i}}return n};return r(e,0)},$r=F("AsyncFunction"),Mr=e=>e&&(te(e)||A(e))&&A(e.then)&&A(e.catch),bt=((e,t)=>e?setImmediate:t?((r,n)=>($.addEventListener("message",({source:o,data:i})=>{o===$&&i===r&&n.length&&n.shift()()},!1),o=>{n.push(o),$.postMessage(r,"*")}))(`axios@${Math.random()}`,[]):r=>setTimeout(r))(typeof setImmediate=="function",A($.postMessage)),Hr=typeof queueMicrotask<"u"?queueMicrotask.bind($):typeof process<"u"&&process.nextTick||bt,qr=e=>e!=null&&A(e[he]);var c={isArray:J,isArrayBuffer:ht,isBuffer:ee,isFormData:gr,isArrayBufferView:ar,isString:lr,isNumber:mt,isBoolean:cr,isObject:te,isPlainObject:ae,isEmptyObject:dr,isReadableStream:xr,isRequest:br,isResponse:wr,isHeaders:vr,isUndefined:W,isDate:ur,isFile:fr,isBlob:pr,isRegExp:Lr,isFunction:A,isStream:mr,isURLSearchParams:yr,isTypedArray:Ar,isFileList:hr,forEach:re,merge:Re,extend:jr,trim:Er,stripBOM:Sr,inherits:Rr,toFlatObject:Cr,kindOf:me,kindOfTest:F,endsWith:Tr,toArray:kr,forEachEntry:Or,matchAll:Nr,isHTMLForm:Pr,hasOwnProperty:We,hasOwnProp:We,reduceDescriptors:xt,freezeMethods:_r,toObjectSet:Ir,toCamelCase:Fr,noop:Dr,toFiniteNumber:Br,findKey:gt,global:$,isContextDefined:yt,isSpecCompliantForm:Ur,toJSONObject:zr,isAsyncFn:$r,isThenable:Mr,setImmediate:bt,asap:Hr,isIterable:qr};function y(e,t,r,n,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),r&&(this.config=r),n&&(this.request=n),o&&(this.response=o,this.status=o.status?o.status:null)}c.inherits(y,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:c.toJSONObject(this.config),code:this.code,status:this.status}}});const wt=y.prototype,vt={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{vt[e]={value:e}});Object.defineProperties(y,vt);Object.defineProperty(wt,"isAxiosError",{value:!0});y.from=(e,t,r,n,o,i)=>{const s=Object.create(wt);c.toFlatObject(e,s,function(d){return d!==Error.prototype},p=>p!=="isAxiosError");const l=e&&e.message?e.message:"Error",h=t==null&&e?e.code:t;return y.call(s,l,h,r,n,o),e&&s.cause==null&&Object.defineProperty(s,"cause",{value:e,configurable:!0}),s.name=e&&e.name||"Error",i&&Object.assign(s,i),s};var Wr=null;function Ce(e){return c.isPlainObject(e)||c.isArray(e)}function Et(e){return c.endsWith(e,"[]")?e.slice(0,-2):e}function Ve(e,t,r){return e?e.concat(t).map(function(o,i){return o=Et(o),!r&&i?"["+o+"]":o}).join(r?".":""):t}function Vr(e){return c.isArray(e)&&!e.some(Ce)}const Jr=c.toFlatObject(c,{},null,function(t){return/^is[A-Z]/.test(t)});function ye(e,t,r){if(!c.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,r=c.toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,function(g,f){return!c.isUndefined(f[g])});const n=r.metaTokens,o=r.visitor||d,i=r.dots,s=r.indexes,h=(r.Blob||typeof Blob<"u"&&Blob)&&c.isSpecCompliantForm(t);if(!c.isFunction(o))throw new TypeError("visitor must be a function");function p(u){if(u===null)return"";if(c.isDate(u))return u.toISOString();if(c.isBoolean(u))return u.toString();if(!h&&c.isBlob(u))throw new y("Blob is not supported. Use a Buffer instead.");return c.isArrayBuffer(u)||c.isTypedArray(u)?h&&typeof Blob=="function"?new Blob([u]):Buffer.from(u):u}function d(u,g,f){let b=u;if(u&&!f&&typeof u=="object"){if(c.endsWith(g,"{}"))g=n?g:g.slice(0,-2),u=JSON.stringify(u);else if(c.isArray(u)&&Vr(u)||(c.isFileList(u)||c.endsWith(g,"[]"))&&(b=c.toArray(u)))return g=Et(g),b.forEach(function(j,R){!(c.isUndefined(j)||j===null)&&t.append(s===!0?Ve([g],R,i):s===null?g:g+"[]",p(j))}),!1}return Ce(u)?!0:(t.append(Ve(f,g,i),p(u)),!1)}const m=[],x=Object.assign(Jr,{defaultVisitor:d,convertValue:p,isVisitable:Ce});function v(u,g){if(!c.isUndefined(u)){if(m.indexOf(u)!==-1)throw Error("Circular reference detected in "+g.join("."));m.push(u),c.forEach(u,function(b,E){(!(c.isUndefined(b)||b===null)&&o.call(t,b,c.isString(E)?E.trim():E,g,x))===!0&&v(b,g?g.concat(E):[E])}),m.pop()}}if(!c.isObject(e))throw new TypeError("data must be an object");return v(e),t}function Je(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(n){return t[n]})}function Ne(e,t){this._pairs=[],e&&ye(e,this,t)}const jt=Ne.prototype;jt.append=function(t,r){this._pairs.push([t,r])};jt.toString=function(t){const r=t?function(n){return t.call(this,n,Je)}:Je;return this._pairs.map(function(o){return r(o[0])+"="+r(o[1])},"").join("&")};function Kr(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function St(e,t,r){if(!t)return e;const n=r&&r.encode||Kr;c.isFunction(r)&&(r={serialize:r});const o=r&&r.serialize;let i;if(o?i=o(t,r):i=c.isURLSearchParams(t)?t.toString():new Ne(t,r).toString(n),i){const s=e.indexOf("#");s!==-1&&(e=e.slice(0,s)),e+=(e.indexOf("?")===-1?"?":"&")+i}return e}class Xr{constructor(){this.handlers=[]}use(t,r,n){return this.handlers.push({fulfilled:t,rejected:r,synchronous:n?n.synchronous:!1,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){c.forEach(this.handlers,function(n){n!==null&&t(n)})}}var Ke=Xr,Rt={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Gr=typeof URLSearchParams<"u"?URLSearchParams:Ne,Zr=typeof FormData<"u"?FormData:null,Yr=typeof Blob<"u"?Blob:null,Qr={isBrowser:!0,classes:{URLSearchParams:Gr,FormData:Zr,Blob:Yr},protocols:["http","https","file","blob","url","data"]};const Pe=typeof window<"u"&&typeof document<"u",Te=typeof navigator=="object"&&navigator||void 0,en=Pe&&(!Te||["ReactNative","NativeScript","NS"].indexOf(Te.product)<0),tn=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",rn=Pe&&window.location.href||"http://localhost";var nn=Object.freeze({__proto__:null,hasBrowserEnv:Pe,hasStandardBrowserWebWorkerEnv:tn,hasStandardBrowserEnv:en,navigator:Te,origin:rn}),T={...nn,...Qr};function on(e,t){return ye(e,new T.classes.URLSearchParams,{visitor:function(r,n,o,i){return T.isNode&&c.isBuffer(r)?(this.append(n,r.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)},...t})}function sn(e){return c.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function an(e){const t={},r=Object.keys(e);let n;const o=r.length;let i;for(n=0;n<o;n++)i=r[n],t[i]=e[i];return t}function Ct(e){function t(r,n,o,i){let s=r[i++];if(s==="__proto__")return!0;const l=Number.isFinite(+s),h=i>=r.length;return s=!s&&c.isArray(o)?o.length:s,h?(c.hasOwnProp(o,s)?o[s]=[o[s],n]:o[s]=n,!l):((!o[s]||!c.isObject(o[s]))&&(o[s]=[]),t(r,n,o[s],i)&&c.isArray(o[s])&&(o[s]=an(o[s])),!l)}if(c.isFormData(e)&&c.isFunction(e.entries)){const r={};return c.forEachEntry(e,(n,o)=>{t(sn(n),o,r,0)}),r}return null}function ln(e,t,r){if(c.isString(e))try{return(t||JSON.parse)(e),c.trim(e)}catch(n){if(n.name!=="SyntaxError")throw n}return(r||JSON.stringify)(e)}const Fe={transitional:Rt,adapter:["xhr","http","fetch"],transformRequest:[function(t,r){const n=r.getContentType()||"",o=n.indexOf("application/json")>-1,i=c.isObject(t);if(i&&c.isHTMLForm(t)&&(t=new FormData(t)),c.isFormData(t))return o?JSON.stringify(Ct(t)):t;if(c.isArrayBuffer(t)||c.isBuffer(t)||c.isStream(t)||c.isFile(t)||c.isBlob(t)||c.isReadableStream(t))return t;if(c.isArrayBufferView(t))return t.buffer;if(c.isURLSearchParams(t))return r.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let l;if(i){if(n.indexOf("application/x-www-form-urlencoded")>-1)return on(t,this.formSerializer).toString();if((l=c.isFileList(t))||n.indexOf("multipart/form-data")>-1){const h=this.env&&this.env.FormData;return ye(l?{"files[]":t}:t,h&&new h,this.formSerializer)}}return i||o?(r.setContentType("application/json",!1),ln(t)):t}],transformResponse:[function(t){const r=this.transitional||Fe.transitional,n=r&&r.forcedJSONParsing,o=this.responseType==="json";if(c.isResponse(t)||c.isReadableStream(t))return t;if(t&&c.isString(t)&&(n&&!this.responseType||o)){const s=!(r&&r.silentJSONParsing)&&o;try{return JSON.parse(t,this.parseReviver)}catch(l){if(s)throw l.name==="SyntaxError"?y.from(l,y.ERR_BAD_RESPONSE,this,null,this.response):l}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:T.classes.FormData,Blob:T.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};c.forEach(["delete","get","head","post","put","patch"],e=>{Fe.headers[e]={}});var Le=Fe;const cn=c.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);var dn=e=>{const t={};let r,n,o;return e&&e.split(`
`).forEach(function(s){o=s.indexOf(":"),r=s.substring(0,o).trim().toLowerCase(),n=s.substring(o+1).trim(),!(!r||t[r]&&cn[r])&&(r==="set-cookie"?t[r]?t[r].push(n):t[r]=[n]:t[r]=t[r]?t[r]+", "+n:n)}),t};const Xe=Symbol("internals");function G(e){return e&&String(e).trim().toLowerCase()}function le(e){return e===!1||e==null?e:c.isArray(e)?e.map(le):String(e)}function un(e){const t=Object.create(null),r=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let n;for(;n=r.exec(e);)t[n[1]]=n[2];return t}const fn=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Ee(e,t,r,n,o){if(c.isFunction(n))return n.call(this,t,r);if(o&&(t=r),!!c.isString(t)){if(c.isString(n))return t.indexOf(n)!==-1;if(c.isRegExp(n))return n.test(t)}}function pn(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,r,n)=>r.toUpperCase()+n)}function hn(e,t){const r=c.toCamelCase(" "+t);["get","set","has"].forEach(n=>{Object.defineProperty(e,n+r,{value:function(o,i,s){return this[n].call(this,t,o,i,s)},configurable:!0})})}class xe{constructor(t){t&&this.set(t)}set(t,r,n){const o=this;function i(l,h,p){const d=G(h);if(!d)throw new Error("header name must be a non-empty string");const m=c.findKey(o,d);(!m||o[m]===void 0||p===!0||p===void 0&&o[m]!==!1)&&(o[m||h]=le(l))}const s=(l,h)=>c.forEach(l,(p,d)=>i(p,d,h));if(c.isPlainObject(t)||t instanceof this.constructor)s(t,r);else if(c.isString(t)&&(t=t.trim())&&!fn(t))s(dn(t),r);else if(c.isObject(t)&&c.isIterable(t)){let l={},h,p;for(const d of t){if(!c.isArray(d))throw TypeError("Object iterator must return a key-value pair");l[p=d[0]]=(h=l[p])?c.isArray(h)?[...h,d[1]]:[h,d[1]]:d[1]}s(l,r)}else t!=null&&i(r,t,n);return this}get(t,r){if(t=G(t),t){const n=c.findKey(this,t);if(n){const o=this[n];if(!r)return o;if(r===!0)return un(o);if(c.isFunction(r))return r.call(this,o,n);if(c.isRegExp(r))return r.exec(o);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,r){if(t=G(t),t){const n=c.findKey(this,t);return!!(n&&this[n]!==void 0&&(!r||Ee(this,this[n],n,r)))}return!1}delete(t,r){const n=this;let o=!1;function i(s){if(s=G(s),s){const l=c.findKey(n,s);l&&(!r||Ee(n,n[l],l,r))&&(delete n[l],o=!0)}}return c.isArray(t)?t.forEach(i):i(t),o}clear(t){const r=Object.keys(this);let n=r.length,o=!1;for(;n--;){const i=r[n];(!t||Ee(this,this[i],i,t,!0))&&(delete this[i],o=!0)}return o}normalize(t){const r=this,n={};return c.forEach(this,(o,i)=>{const s=c.findKey(n,i);if(s){r[s]=le(o),delete r[i];return}const l=t?pn(i):String(i).trim();l!==i&&delete r[i],r[l]=le(o),n[l]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const r=Object.create(null);return c.forEach(this,(n,o)=>{n!=null&&n!==!1&&(r[o]=t&&c.isArray(n)?n.join(", "):n)}),r}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,r])=>t+": "+r).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...r){const n=new this(t);return r.forEach(o=>n.set(o)),n}static accessor(t){const n=(this[Xe]=this[Xe]={accessors:{}}).accessors,o=this.prototype;function i(s){const l=G(s);n[l]||(hn(o,s),n[l]=!0)}return c.isArray(t)?t.forEach(i):i(t),this}}xe.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);c.reduceDescriptors(xe.prototype,({value:e},t)=>{let r=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(n){this[r]=n}}});c.freezeMethods(xe);var P=xe;function je(e,t){const r=this||Le,n=t||r,o=P.from(n.headers);let i=n.data;return c.forEach(e,function(l){i=l.call(r,i,o.normalize(),t?t.status:void 0)}),o.normalize(),i}function Tt(e){return!!(e&&e.__CANCEL__)}function K(e,t,r){y.call(this,e??"canceled",y.ERR_CANCELED,t,r),this.name="CanceledError"}c.inherits(K,y,{__CANCEL__:!0});function kt(e,t,r){const n=r.config.validateStatus;!r.status||!n||n(r.status)?e(r):t(new y("Request failed with status code "+r.status,[y.ERR_BAD_REQUEST,y.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r))}function mn(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function gn(e,t){e=e||10;const r=new Array(e),n=new Array(e);let o=0,i=0,s;return t=t!==void 0?t:1e3,function(h){const p=Date.now(),d=n[i];s||(s=p),r[o]=h,n[o]=p;let m=i,x=0;for(;m!==o;)x+=r[m++],m=m%e;if(o=(o+1)%e,o===i&&(i=(i+1)%e),p-s<t)return;const v=d&&p-d;return v?Math.round(x*1e3/v):void 0}}function yn(e,t){let r=0,n=1e3/t,o,i;const s=(p,d=Date.now())=>{r=d,o=null,i&&(clearTimeout(i),i=null),e(...p)};return[(...p)=>{const d=Date.now(),m=d-r;m>=n?s(p,d):(o=p,i||(i=setTimeout(()=>{i=null,s(o)},n-m)))},()=>o&&s(o)]}const fe=(e,t,r=3)=>{let n=0;const o=gn(50,250);return yn(i=>{const s=i.loaded,l=i.lengthComputable?i.total:void 0,h=s-n,p=o(h),d=s<=l;n=s;const m={loaded:s,total:l,progress:l?s/l:void 0,bytes:h,rate:p||void 0,estimated:p&&l&&d?(l-s)/p:void 0,event:i,lengthComputable:l!=null,[t?"download":"upload"]:!0};e(m)},r)},Ge=(e,t)=>{const r=e!=null;return[n=>t[0]({lengthComputable:r,total:e,loaded:n}),t[1]]},Ze=e=>(...t)=>c.asap(()=>e(...t));var xn=T.hasStandardBrowserEnv?((e,t)=>r=>(r=new URL(r,T.origin),e.protocol===r.protocol&&e.host===r.host&&(t||e.port===r.port)))(new URL(T.origin),T.navigator&&/(msie|trident)/i.test(T.navigator.userAgent)):()=>!0,bn=T.hasStandardBrowserEnv?{write(e,t,r,n,o,i,s){if(typeof document>"u")return;const l=[`${e}=${encodeURIComponent(t)}`];c.isNumber(r)&&l.push(`expires=${new Date(r).toUTCString()}`),c.isString(n)&&l.push(`path=${n}`),c.isString(o)&&l.push(`domain=${o}`),i===!0&&l.push("secure"),c.isString(s)&&l.push(`SameSite=${s}`),document.cookie=l.join("; ")},read(e){if(typeof document>"u")return null;const t=document.cookie.match(new RegExp("(?:^|; )"+e+"=([^;]*)"));return t?decodeURIComponent(t[1]):null},remove(e){this.write(e,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function wn(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function vn(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function At(e,t,r){let n=!wn(t);return e&&(n||r==!1)?vn(e,t):t}const Ye=e=>e instanceof P?{...e}:e;function M(e,t){t=t||{};const r={};function n(p,d,m,x){return c.isPlainObject(p)&&c.isPlainObject(d)?c.merge.call({caseless:x},p,d):c.isPlainObject(d)?c.merge({},d):c.isArray(d)?d.slice():d}function o(p,d,m,x){if(c.isUndefined(d)){if(!c.isUndefined(p))return n(void 0,p,m,x)}else return n(p,d,m,x)}function i(p,d){if(!c.isUndefined(d))return n(void 0,d)}function s(p,d){if(c.isUndefined(d)){if(!c.isUndefined(p))return n(void 0,p)}else return n(void 0,d)}function l(p,d,m){if(m in t)return n(p,d);if(m in e)return n(void 0,p)}const h={url:i,method:i,data:i,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,withXSRFToken:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:l,headers:(p,d,m)=>o(Ye(p),Ye(d),m,!0)};return c.forEach(Object.keys({...e,...t}),function(d){const m=h[d]||o,x=m(e[d],t[d],d);c.isUndefined(x)&&m!==l||(r[d]=x)}),r}var Ot=e=>{const t=M({},e);let{data:r,withXSRFToken:n,xsrfHeaderName:o,xsrfCookieName:i,headers:s,auth:l}=t;if(t.headers=s=P.from(s),t.url=St(At(t.baseURL,t.url,t.allowAbsoluteUrls),e.params,e.paramsSerializer),l&&s.set("Authorization","Basic "+btoa((l.username||"")+":"+(l.password?unescape(encodeURIComponent(l.password)):""))),c.isFormData(r)){if(T.hasStandardBrowserEnv||T.hasStandardBrowserWebWorkerEnv)s.setContentType(void 0);else if(c.isFunction(r.getHeaders)){const h=r.getHeaders(),p=["content-type","content-length"];Object.entries(h).forEach(([d,m])=>{p.includes(d.toLowerCase())&&s.set(d,m)})}}if(T.hasStandardBrowserEnv&&(n&&c.isFunction(n)&&(n=n(t)),n||n!==!1&&xn(t.url))){const h=o&&i&&bn.read(i);h&&s.set(o,h)}return t};const En=typeof XMLHttpRequest<"u";var jn=En&&function(e){return new Promise(function(r,n){const o=Ot(e);let i=o.data;const s=P.from(o.headers).normalize();let{responseType:l,onUploadProgress:h,onDownloadProgress:p}=o,d,m,x,v,u;function g(){v&&v(),u&&u(),o.cancelToken&&o.cancelToken.unsubscribe(d),o.signal&&o.signal.removeEventListener("abort",d)}let f=new XMLHttpRequest;f.open(o.method.toUpperCase(),o.url,!0),f.timeout=o.timeout;function b(){if(!f)return;const j=P.from("getAllResponseHeaders"in f&&f.getAllResponseHeaders()),k={data:!l||l==="text"||l==="json"?f.responseText:f.response,status:f.status,statusText:f.statusText,headers:j,config:e,request:f};kt(function(O){r(O),g()},function(O){n(O),g()},k),f=null}"onloadend"in f?f.onloadend=b:f.onreadystatechange=function(){!f||f.readyState!==4||f.status===0&&!(f.responseURL&&f.responseURL.indexOf("file:")===0)||setTimeout(b)},f.onabort=function(){f&&(n(new y("Request aborted",y.ECONNABORTED,e,f)),f=null)},f.onerror=function(R){const k=R&&R.message?R.message:"Network Error",B=new y(k,y.ERR_NETWORK,e,f);B.event=R||null,n(B),f=null},f.ontimeout=function(){let R=o.timeout?"timeout of "+o.timeout+"ms exceeded":"timeout exceeded";const k=o.transitional||Rt;o.timeoutErrorMessage&&(R=o.timeoutErrorMessage),n(new y(R,k.clarifyTimeoutError?y.ETIMEDOUT:y.ECONNABORTED,e,f)),f=null},i===void 0&&s.setContentType(null),"setRequestHeader"in f&&c.forEach(s.toJSON(),function(R,k){f.setRequestHeader(k,R)}),c.isUndefined(o.withCredentials)||(f.withCredentials=!!o.withCredentials),l&&l!=="json"&&(f.responseType=o.responseType),p&&([x,u]=fe(p,!0),f.addEventListener("progress",x)),h&&f.upload&&([m,v]=fe(h),f.upload.addEventListener("progress",m),f.upload.addEventListener("loadend",v)),(o.cancelToken||o.signal)&&(d=j=>{f&&(n(!j||j.type?new K(null,e,f):j),f.abort(),f=null)},o.cancelToken&&o.cancelToken.subscribe(d),o.signal&&(o.signal.aborted?d():o.signal.addEventListener("abort",d)));const E=mn(o.url);if(E&&T.protocols.indexOf(E)===-1){n(new y("Unsupported protocol "+E+":",y.ERR_BAD_REQUEST,e));return}f.send(i||null)})};const Sn=(e,t)=>{const{length:r}=e=e?e.filter(Boolean):[];if(t||r){let n=new AbortController,o;const i=function(p){if(!o){o=!0,l();const d=p instanceof Error?p:this.reason;n.abort(d instanceof y?d:new K(d instanceof Error?d.message:d))}};let s=t&&setTimeout(()=>{s=null,i(new y(`timeout ${t} of ms exceeded`,y.ETIMEDOUT))},t);const l=()=>{e&&(s&&clearTimeout(s),s=null,e.forEach(p=>{p.unsubscribe?p.unsubscribe(i):p.removeEventListener("abort",i)}),e=null)};e.forEach(p=>p.addEventListener("abort",i));const{signal:h}=n;return h.unsubscribe=()=>c.asap(l),h}};var Rn=Sn;const Cn=function*(e,t){let r=e.byteLength;if(r<t){yield e;return}let n=0,o;for(;n<r;)o=n+t,yield e.slice(n,o),n=o},Tn=async function*(e,t){for await(const r of kn(e))yield*Cn(r,t)},kn=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const t=e.getReader();try{for(;;){const{done:r,value:n}=await t.read();if(r)break;yield n}}finally{await t.cancel()}},Qe=(e,t,r,n)=>{const o=Tn(e,t);let i=0,s,l=h=>{s||(s=!0,n&&n(h))};return new ReadableStream({async pull(h){try{const{done:p,value:d}=await o.next();if(p){l(),h.close();return}let m=d.byteLength;if(r){let x=i+=m;r(x)}h.enqueue(new Uint8Array(d))}catch(p){throw l(p),p}},cancel(h){return l(h),o.return()}},{highWaterMark:2})},et=64*1024,{isFunction:se}=c,An=(({Request:e,Response:t})=>({Request:e,Response:t}))(c.global),{ReadableStream:tt,TextEncoder:rt}=c.global,nt=(e,...t)=>{try{return!!e(...t)}catch{return!1}},On=e=>{e=c.merge.call({skipUndefined:!0},An,e);const{fetch:t,Request:r,Response:n}=e,o=t?se(t):typeof fetch=="function",i=se(r),s=se(n);if(!o)return!1;const l=o&&se(tt),h=o&&(typeof rt=="function"?(u=>g=>u.encode(g))(new rt):async u=>new Uint8Array(await new r(u).arrayBuffer())),p=i&&l&&nt(()=>{let u=!1;const g=new r(T.origin,{body:new tt,method:"POST",get duplex(){return u=!0,"half"}}).headers.has("Content-Type");return u&&!g}),d=s&&l&&nt(()=>c.isReadableStream(new n("").body)),m={stream:d&&(u=>u.body)};o&&["text","arrayBuffer","blob","formData","stream"].forEach(u=>{!m[u]&&(m[u]=(g,f)=>{let b=g&&g[u];if(b)return b.call(g);throw new y(`Response type '${u}' is not supported`,y.ERR_NOT_SUPPORT,f)})});const x=async u=>{if(u==null)return 0;if(c.isBlob(u))return u.size;if(c.isSpecCompliantForm(u))return(await new r(T.origin,{method:"POST",body:u}).arrayBuffer()).byteLength;if(c.isArrayBufferView(u)||c.isArrayBuffer(u))return u.byteLength;if(c.isURLSearchParams(u)&&(u=u+""),c.isString(u))return(await h(u)).byteLength},v=async(u,g)=>{const f=c.toFiniteNumber(u.getContentLength());return f??x(g)};return async u=>{let{url:g,method:f,data:b,signal:E,cancelToken:j,timeout:R,onDownloadProgress:k,onUploadProgress:B,responseType:O,headers:we,withCredentials:ne="same-origin",fetchOptions:De}=Ot(u),Be=t||fetch;O=O?(O+"").toLowerCase():"text";let oe=Rn([E,j&&j.toAbortSignal()],R),X=null;const U=oe&&oe.unsubscribe&&(()=>{oe.unsubscribe()});let Ue;try{if(B&&p&&f!=="get"&&f!=="head"&&(Ue=await v(we,b))!==0){let D=new r(g,{method:"POST",body:b,duplex:"half"}),q;if(c.isFormData(b)&&(q=D.headers.get("content-type"))&&we.setContentType(q),D.body){const[ve,ie]=Ge(Ue,fe(Ze(B)));b=Qe(D.body,et,ve,ie)}}c.isString(ne)||(ne=ne?"include":"omit");const L=i&&"credentials"in r.prototype,ze={...De,signal:oe,method:f.toUpperCase(),headers:we.normalize().toJSON(),body:b,duplex:"half",credentials:L?ne:void 0};X=i&&new r(g,ze);let I=await(i?Be(X,De):Be(g,ze));const $e=d&&(O==="stream"||O==="response");if(d&&(k||$e&&U)){const D={};["status","statusText","headers"].forEach(Me=>{D[Me]=I[Me]});const q=c.toFiniteNumber(I.headers.get("content-length")),[ve,ie]=k&&Ge(q,fe(Ze(k),!0))||[];I=new n(Qe(I.body,et,ve,()=>{ie&&ie(),U&&U()}),D)}O=O||"text";let It=await m[c.findKey(m,O)||"text"](I,u);return!$e&&U&&U(),await new Promise((D,q)=>{kt(D,q,{data:It,headers:P.from(I.headers),status:I.status,statusText:I.statusText,config:u,request:X})})}catch(L){throw U&&U(),L&&L.name==="TypeError"&&/Load failed|fetch/i.test(L.message)?Object.assign(new y("Network Error",y.ERR_NETWORK,u,X),{cause:L.cause||L}):y.from(L,L&&L.code,u,X)}}},Nn=new Map,Nt=e=>{let t=e&&e.env||{};const{fetch:r,Request:n,Response:o}=t,i=[n,o,r];let s=i.length,l=s,h,p,d=Nn;for(;l--;)h=i[l],p=d.get(h),p===void 0&&d.set(h,p=l?new Map:On(t)),d=p;return p};Nt();const _e={http:Wr,xhr:jn,fetch:{get:Nt}};c.forEach(_e,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const ot=e=>`- ${e}`,Pn=e=>c.isFunction(e)||e===null||e===!1;function Fn(e,t){e=c.isArray(e)?e:[e];const{length:r}=e;let n,o;const i={};for(let s=0;s<r;s++){n=e[s];let l;if(o=n,!Pn(n)&&(o=_e[(l=String(n)).toLowerCase()],o===void 0))throw new y(`Unknown adapter '${l}'`);if(o&&(c.isFunction(o)||(o=o.get(t))))break;i[l||"#"+s]=o}if(!o){const s=Object.entries(i).map(([h,p])=>`adapter ${h} `+(p===!1?"is not supported by the environment":"is not available in the build"));let l=r?s.length>1?`since :
`+s.map(ot).join(`
`):" "+ot(s[0]):"as no adapter specified";throw new y("There is no suitable adapter to dispatch the request "+l,"ERR_NOT_SUPPORT")}return o}var Pt={getAdapter:Fn,adapters:_e};function Se(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new K(null,e)}function it(e){return Se(e),e.headers=P.from(e.headers),e.data=je.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Pt.getAdapter(e.adapter||Le.adapter,e)(e).then(function(n){return Se(e),n.data=je.call(e,e.transformResponse,n),n.headers=P.from(n.headers),n},function(n){return Tt(n)||(Se(e),n&&n.response&&(n.response.data=je.call(e,e.transformResponse,n.response),n.response.headers=P.from(n.response.headers))),Promise.reject(n)})}const Ft="1.13.2",be={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{be[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}});const st={};be.transitional=function(t,r,n){function o(i,s){return"[Axios v"+Ft+"] Transitional option '"+i+"'"+s+(n?". "+n:"")}return(i,s,l)=>{if(t===!1)throw new y(o(s," has been removed"+(r?" in "+r:"")),y.ERR_DEPRECATED);return r&&!st[s]&&(st[s]=!0,console.warn(o(s," has been deprecated since v"+r+" and will be removed in the near future"))),t?t(i,s,l):!0}};be.spelling=function(t){return(r,n)=>(console.warn(`${n} is likely a misspelling of ${t}`),!0)};function Ln(e,t,r){if(typeof e!="object")throw new y("options must be an object",y.ERR_BAD_OPTION_VALUE);const n=Object.keys(e);let o=n.length;for(;o-- >0;){const i=n[o],s=t[i];if(s){const l=e[i],h=l===void 0||s(l,i,e);if(h!==!0)throw new y("option "+i+" must be "+h,y.ERR_BAD_OPTION_VALUE);continue}if(r!==!0)throw new y("Unknown option "+i,y.ERR_BAD_OPTION)}}var ce={assertOptions:Ln,validators:be};const _=ce.validators;class pe{constructor(t){this.defaults=t||{},this.interceptors={request:new Ke,response:new Ke}}async request(t,r){try{return await this._request(t,r)}catch(n){if(n instanceof Error){let o={};Error.captureStackTrace?Error.captureStackTrace(o):o=new Error;const i=o.stack?o.stack.replace(/^.+\n/,""):"";try{n.stack?i&&!String(n.stack).endsWith(i.replace(/^.+\n.+\n/,""))&&(n.stack+=`
`+i):n.stack=i}catch{}}throw n}}_request(t,r){typeof t=="string"?(r=r||{},r.url=t):r=t||{},r=M(this.defaults,r);const{transitional:n,paramsSerializer:o,headers:i}=r;n!==void 0&&ce.assertOptions(n,{silentJSONParsing:_.transitional(_.boolean),forcedJSONParsing:_.transitional(_.boolean),clarifyTimeoutError:_.transitional(_.boolean)},!1),o!=null&&(c.isFunction(o)?r.paramsSerializer={serialize:o}:ce.assertOptions(o,{encode:_.function,serialize:_.function},!0)),r.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?r.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:r.allowAbsoluteUrls=!0),ce.assertOptions(r,{baseUrl:_.spelling("baseURL"),withXsrfToken:_.spelling("withXSRFToken")},!0),r.method=(r.method||this.defaults.method||"get").toLowerCase();let s=i&&c.merge(i.common,i[r.method]);i&&c.forEach(["delete","get","head","post","put","patch","common"],u=>{delete i[u]}),r.headers=P.concat(s,i);const l=[];let h=!0;this.interceptors.request.forEach(function(g){typeof g.runWhen=="function"&&g.runWhen(r)===!1||(h=h&&g.synchronous,l.unshift(g.fulfilled,g.rejected))});const p=[];this.interceptors.response.forEach(function(g){p.push(g.fulfilled,g.rejected)});let d,m=0,x;if(!h){const u=[it.bind(this),void 0];for(u.unshift(...l),u.push(...p),x=u.length,d=Promise.resolve(r);m<x;)d=d.then(u[m++],u[m++]);return d}x=l.length;let v=r;for(;m<x;){const u=l[m++],g=l[m++];try{v=u(v)}catch(f){g.call(this,f);break}}try{d=it.call(this,v)}catch(u){return Promise.reject(u)}for(m=0,x=p.length;m<x;)d=d.then(p[m++],p[m++]);return d}getUri(t){t=M(this.defaults,t);const r=At(t.baseURL,t.url,t.allowAbsoluteUrls);return St(r,t.params,t.paramsSerializer)}}c.forEach(["delete","get","head","options"],function(t){pe.prototype[t]=function(r,n){return this.request(M(n||{},{method:t,url:r,data:(n||{}).data}))}});c.forEach(["post","put","patch"],function(t){function r(n){return function(i,s,l){return this.request(M(l||{},{method:t,headers:n?{"Content-Type":"multipart/form-data"}:{},url:i,data:s}))}}pe.prototype[t]=r(),pe.prototype[t+"Form"]=r(!0)});var de=pe;class Ie{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let r;this.promise=new Promise(function(i){r=i});const n=this;this.promise.then(o=>{if(!n._listeners)return;let i=n._listeners.length;for(;i-- >0;)n._listeners[i](o);n._listeners=null}),this.promise.then=o=>{let i;const s=new Promise(l=>{n.subscribe(l),i=l}).then(o);return s.cancel=function(){n.unsubscribe(i)},s},t(function(i,s,l){n.reason||(n.reason=new K(i,s,l),r(n.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const r=this._listeners.indexOf(t);r!==-1&&this._listeners.splice(r,1)}toAbortSignal(){const t=new AbortController,r=n=>{t.abort(n)};return this.subscribe(r),t.signal.unsubscribe=()=>this.unsubscribe(r),t.signal}static source(){let t;return{token:new Ie(function(o){t=o}),cancel:t}}}var _n=Ie;function In(e){return function(r){return e.apply(null,r)}}function Dn(e){return c.isObject(e)&&e.isAxiosError===!0}const ke={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(ke).forEach(([e,t])=>{ke[t]=e});var Bn=ke;function Lt(e){const t=new de(e),r=ft(de.prototype.request,t);return c.extend(r,de.prototype,t,{allOwnKeys:!0}),c.extend(r,t,null,{allOwnKeys:!0}),r.create=function(o){return Lt(M(e,o))},r}const C=Lt(Le);C.Axios=de;C.CanceledError=K;C.CancelToken=_n;C.isCancel=Tt;C.VERSION=Ft;C.toFormData=ye;C.AxiosError=y;C.Cancel=C.CanceledError;C.all=function(t){return Promise.all(t)};C.spread=In;C.isAxiosError=Dn;C.mergeConfig=M;C.AxiosHeaders=P;C.formToJSON=e=>Ct(c.isHTMLForm(e)?new FormData(e):e);C.getAdapter=Pt.getAdapter;C.HttpStatusCode=Bn;C.default=C;var Un=C,zn="1.12.3",$n={version:zn};const Mn=!1,Hn=$n.version,at="v6.0",lt=["v2","v3","v4","v5","v6","canary"],N="@tryghost/content-api",qn=e=>{let t;return e==="v2"||e==="v3"||e==="v4"||e==="canary"?t=`/${e}/content/`:e&&e.match(/^v[2-4]\.\d+/)?t=`/${/^(v[2-4])\.\d+/.exec(e)[1]}/content/`:t="/content/",t},Wn=({url:e,method:t,params:r,headers:n})=>Un[t](e,{params:r,paramsSerializer:o=>Object.keys(o).reduce((i,s)=>{const l=encodeURIComponent([].concat(o[s]).join(","));return i.concat(`${s}=${l}`)},[]).join("&"),headers:n});function Ae({url:e,key:t,host:r,version:n,userAgent:o,ghostPath:i="ghost",makeRequest:s=Wn}){if(r&&(console.warn(`${N}: The 'host' parameter is deprecated, please use 'url' instead`),e||(e=r)),this instanceof Ae)return Ae({url:e,key:t,version:n,userAgent:o,ghostPath:i,makeRequest:s});if(n===void 0)throw new Error(`${N} Config Missing: 'version' is required. E.g. ${lt.join(",")}`);let l;if(typeof n=="boolean")n===!0&&(l=at),n=void 0;else{if(n&&!lt.includes(n)&&!n.match(/^v\d+\.\d+/))throw new Error(`${N} Config Invalid: 'version' ${n} is not supported`);n==="canary"?(console.warn(`${N}: The 'version' parameter has a deprecated format 'canary', please use 'v{major}.{minor}' format instead`),l=at):n.match(/^v\d+$/)?(console.warn(`${N}: The 'version' parameter has a deprecated format 'v{major}', please use 'v{major}.{minor}' format instead`),l=`${n}.0`):l=n}if(!e)throw new Error(`${N} Config Missing: 'url' is required. E.g. 'https://site.com'`);if(!/https?:\/\//.test(e))throw new Error(`${N} Config Invalid: 'url' ${e} requires a protocol. E.g. 'https://site.com'`);if(e.endsWith("/"))throw new Error(`${N} Config Invalid: 'url' ${e} must not have a trailing slash. E.g. 'https://site.com'`);if(i.endsWith("/")||i.startsWith("/"))throw new Error(`${N} Config Invalid: 'ghostPath' ${i} must not have a leading or trailing slash. E.g. 'ghost'`);if(t&&!/[0-9a-f]{26}/.test(t))throw new Error(`${N} Config Invalid: 'key' ${t} must have 26 hex characters`);o===void 0&&(o=Mn);const h=["posts","authors","tags","pages","settings","tiers","newsletters","offers"].reduce((d,m)=>{function x(u={},g){return p(m,u,null,g)}function v(u,g={},f){if(!u||!u.id&&!u.slug)return Promise.reject(new Error(`${N} read requires an id or slug.`));const b=Object.assign({},u,g);return p(m,b,u.id||`slug/${u.slug}`,f)}return Object.assign(d,{[m]:{read:v,browse:x}})},{});return delete h.settings.read,delete h.tiers.read,delete h.newsletters.read,delete h.offers.browse,h;function p(d,m,x,v=null){if(!v&&!t)return Promise.reject(new Error(`${N} Config Missing: 'key' is required.`));delete m.id;const u=v?{Authorization:`GhostMembers ${v}`}:{};o&&(typeof o=="boolean"?u["User-Agent"]=`GhostContentSDK/${Hn}`:u["User-Agent"]=o),l&&(u["Accept-Version"]=l),m=Object.assign({key:t},m);const g=`${e}/${i}/api${qn(n)}${d}/${x?x+"/":""}`;return s({url:g,method:"get",params:m,headers:u}).then(f=>Array.isArray(f.data[d])?f.data[d].length===1&&!f.data.meta?f.data[d][0]:Object.assign(f.data[d],{meta:f.data.meta}):f.data[d]).catch(f=>{if(f.response&&f.response.data&&f.response.data.errors){const b=f.response.data.errors[0],E=new Error(b.message),j=Object.keys(b);throw E.name=b.type,j.forEach(R=>{E[R]=b[R]}),E.response=f.response,E.request=f.request,E.config=f.config,E}else throw f})}}const Vn="https://ghost.russheritage.com",Jn="ada6f50f413b67e176bb7c9598";let Z;try{Z=new Ae({url:Vn,key:Jn,version:"v5.0"})}catch(e){console.error("Failed to initialize Ghost API:",e)}async function Kn(){return Z?await Z.posts.browse({limit:"all",include:"tags,authors"}).catch(e=>(console.error(e),[])):[]}async function co(e){return Z?await Z.posts.read({slug:e},{include:"tags,authors"}).catch(t=>(console.error(t),null)):null}const _t=()=>{const[e,t]=w.useState([]),[r,n]=w.useState(!0);w.useEffect(()=>{async function i(){n(!0);const s=await Kn();t(s),n(!1)}i()},[]);const o=e.filter(i=>i.slug);return r?a.jsxs("section",{id:"writing",style:{minHeight:"80vh",padding:"8rem 2rem",scrollMarginTop:"100px"},children:[a.jsx("div",{style:{width:"200px",height:"3rem",backgroundColor:"var(--skeleton-color)",marginBottom:"4rem",borderRadius:"4px",margin:"0 auto 4rem"}}),a.jsx("div",{className:"blog-masonry",children:[1,2,3,4].map(i=>a.jsxs("div",{className:"blog-card-skeleton",children:[a.jsx("div",{style:{width:"100%",height:"220px",backgroundColor:"var(--skeleton-color)"}}),a.jsxs("div",{style:{padding:"1.5rem"},children:[a.jsx("div",{style:{width:"80%",height:"1.2rem",backgroundColor:"var(--skeleton-color)",borderRadius:"4px",marginBottom:"0.75rem"}}),a.jsx("div",{style:{width:"40%",height:"0.8rem",backgroundColor:"var(--skeleton-color)",borderRadius:"4px"}})]})]},i))})]}):a.jsxs("section",{id:"writing",style:{minHeight:"80vh",padding:"8rem 2rem",scrollMarginTop:"100px",display:"flex",flexDirection:"column"},children:[a.jsx(S.h2,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},style:{marginBottom:"4rem",fontSize:"clamp(2rem, 4vw, 3rem)",textAlign:"center",fontWeight:500,letterSpacing:"0.02em"},children:"Written Words"}),o.length>0?a.jsx("div",{className:"blog-masonry",children:o.map((i,s)=>a.jsx(S.div,{className:"blog-card",initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:s*.08},children:a.jsxs(ue,{to:`/blog/${i.slug}`,style:{textDecoration:"none",color:"inherit",display:"block"},children:[i.feature_image&&a.jsx("div",{className:"blog-card-thumbnail",children:a.jsx("img",{src:i.feature_image,alt:i.title,loading:"lazy",onError:l=>{l.target.parentElement.style.display="none"}})}),a.jsxs("div",{className:"blog-card-content",children:[a.jsxs("h3",{className:"blog-card-title",children:[i.title,a.jsx(Gt,{size:16,className:"blog-card-arrow"})]}),i.excerpt&&a.jsx("p",{className:"blog-card-excerpt",children:i.excerpt.length>120?i.excerpt.substring(0,120)+"...":i.excerpt}),a.jsx("span",{className:"blog-card-date",children:new Date(i.published_at).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"})})]})]})},i.id))}):a.jsx("div",{style:{textAlign:"center",padding:"4rem",border:"1px dashed var(--border-color)",maxWidth:"600px",margin:"0 auto"},children:a.jsx("p",{style:{color:"var(--sub-text-color)"},children:"No posts found."})}),a.jsx("div",{style:{marginTop:"auto",paddingTop:"4rem",display:"flex",justifyContent:"center"},children:a.jsx(Q,{targetId:"about",label:"About Me"})}),a.jsx("style",{children:`
                .blog-masonry {
                    column-count: 3;
                    column-gap: 1.5rem;
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 1rem;
                }
                .blog-card {
                    break-inside: avoid;
                    margin-bottom: 1.5rem;
                    border: 1px solid var(--border-color);
                    overflow: hidden;
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                    background: var(--bg-color);
                }
                .blog-card:hover,
                .blog-card:focus-within {
                    transform: translateY(-4px);
                    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.08);
                }
                .blog-card a:focus-visible {
                    outline: none;
                }
                .blog-card:focus-within {
                    outline: 2px solid var(--accent-color);
                    outline-offset: 4px;
                }
                .blog-card-skeleton {
                    break-inside: avoid;
                    margin-bottom: 1.5rem;
                    border: 1px solid var(--border-color);
                    overflow: hidden;
                }
                .blog-card-thumbnail {
                    width: 100%;
                    height: 220px;
                    overflow: hidden;
                }
                .blog-card-thumbnail img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.4s ease;
                }
                .blog-card:hover .blog-card-thumbnail img,
                .blog-card:focus-within .blog-card-thumbnail img {
                    transform: scale(1.03);
                }
                .blog-card-content {
                    padding: 1.5rem;
                }
                .blog-card-title {
                    font-size: 1.15rem;
                    font-weight: 600;
                    line-height: 1.4;
                    margin-bottom: 0.75rem;
                    letter-spacing: -0.01em;
                    display: flex;
                    align-items: flex-start;
                    gap: 0.4rem;
                }
                .blog-card-arrow {
                    flex-shrink: 0;
                    margin-top: 0.2rem;
                    opacity: 0;
                    transition: opacity 0.3s ease, transform 0.3s ease;
                }
                .blog-card:hover .blog-card-arrow,
                .blog-card:focus-within .blog-card-arrow {
                    opacity: 1;
                    transform: translate(2px, -2px);
                }
                .blog-card-excerpt {
                    font-size: 0.9rem;
                    line-height: 1.6;
                    color: var(--sub-text-color);
                    margin-bottom: 1rem;
                }
                .blog-card-date {
                    font-size: 0.78rem;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    color: var(--sub-text-color);
                }
                @media (max-width: 1024px) {
                    .blog-masonry { column-count: 2; }
                }
                @media (max-width: 600px) {
                    .blog-masonry { column-count: 1; }
                    .blog-card-thumbnail { height: 200px; }
                }
            `})]})},Xn=({size:e=20,color:t="currentColor"})=>a.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:a.jsx("path",{d:"M19 12.0001C19 16.9707 14.9706 21.0001 10 21.0001H9.00003C6.46743 21.0001 4.36435 19.347 3.63583 17.0001M16.1213 14.1214C15.5587 14.6841 14.7813 15.0001 13.9852 15.0001C12.3284 15.0001 10.9852 13.657 10.9852 12.0001C10.9852 10.3433 12.3284 9.00012 13.9852 9.00012C14.7813 9.00012 15.5587 9.3162 16.1213 9.8788M19 12.0001C19 8.68641 16.3137 6.00012 13 6.00012C9.68629 6.00012 7 8.68641 7 12.0001C7 15.3138 9.68629 18.0001 13 18.0001C14.1687 18.0001 15.2642 17.6652 16.2071 17.0859M19 12.0001V8.50012"})}),Gn=({size:e=20,color:t="currentColor"})=>a.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:t,xmlns:"http://www.w3.org/2000/svg",children:a.jsx("path",{d:"M22.5399 9.61084V8.45785H1.46094V9.61084H22.5399ZM22.5399 2.05371V3.20671H1.46094V2.05371H22.5399ZM22.5399 11.6667V21.9463L11.9999 16.0527L1.46094 21.9463V11.6667H22.5399Z"})}),Zn=e=>{const t={size:20,color:"currentColor"};switch(e.toLowerCase()){case"instagram":return a.jsx(Zt,{...t});case"threads":return a.jsx(Xn,{...t});case"substack":return a.jsx(Gn,{...t});default:return null}},Yn=()=>{var r;const{content:e,loading:t}=H();return t?null:a.jsx("section",{id:"contact",style:{padding:"4rem 2rem 6rem",scrollMarginTop:"100px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",textAlign:"center"},children:a.jsxs(S.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6},children:[a.jsx("p",{style:{fontSize:"0.75rem",textTransform:"uppercase",letterSpacing:"0.25em",marginBottom:"2.5rem",color:"var(--sub-text-color)",fontWeight:500},children:"Interested in working together?"}),a.jsx("a",{href:`mailto:${(r=e.socials.find(n=>n.name==="Email"))==null?void 0:r.url.replace("mailto:","")}`,style:{fontFamily:"var(--font-heading)",fontSize:"clamp(3rem, 8vw, 6rem)",fontWeight:"800",textDecoration:"none",color:"var(--accent-color)",lineHeight:1},className:"contact-link",children:"GET IN TOUCH"}),a.jsx("style",{children:`
                    .contact-link {
                        position: relative;
                        transition: opacity 0.3s;
                    }
                    .contact-link:hover {
                        opacity: 0.8;
                    }
                    .contact-link::after {
                        content: '';
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        width: 100%;
                        height: 2px;
                        background: currentColor;
                        transform: scaleX(0);
                        transform-origin: right;
                        transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
                    }
                    .contact-link:hover::after,
                    .contact-link:focus-visible::after {
                        transform: scaleX(1);
                        transform-origin: left;
                    }
                `}),a.jsx("div",{style:{marginTop:"4rem",display:"flex",gap:"3rem",justifyContent:"center",flexWrap:"wrap"},children:e.socials.map(n=>n.name!=="Email"&&a.jsxs("a",{href:n.url,target:"_blank",rel:"noopener noreferrer",style:{color:"var(--text-color)",transition:"opacity 0.2s",display:"flex",alignItems:"center",gap:"0.8rem",textDecoration:"none",fontSize:"0.9rem",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.05em"},className:"social-icon-link",children:[Zn(n.name),a.jsx("span",{children:n.name})]},n.name))}),a.jsx("style",{children:`
                    .social-icon-link:hover {
                        opacity: 0.6;
                    }
                `})]})})},Qn=w.lazy(()=>Y(()=>import("./VibeShowcase-4_w-Lq5i.js"),__vite__mapDeps([0,1,2,3]))),eo=w.lazy(()=>Y(()=>import("./BlogPost-DiYI37PY.js"),__vite__mapDeps([4,1,2,5]))),to=w.lazy(()=>Y(()=>import("./Portfolio-BuR3ldgU.js"),__vite__mapDeps([6,1,2]))),ro=w.lazy(()=>Y(()=>import("./CategoryGallery-WD5uMKab.js"),__vite__mapDeps([7,1,2,5,3]))),no=w.lazy(()=>Y(()=>import("./NotFound-BQFy9B7M.js"),__vite__mapDeps([8,1,2]))),oo=()=>a.jsx("div",{style:{minHeight:"60vh",display:"flex",justifyContent:"center",alignItems:"center",fontFamily:"var(--font-heading)",fontSize:"1rem",textTransform:"uppercase",letterSpacing:"0.1em",color:"var(--sub-text-color)"},children:"Loading..."}),io=()=>a.jsxs(a.Fragment,{children:[a.jsx(tr,{}),a.jsx(nr,{}),a.jsx(or,{}),a.jsx(ir,{}),a.jsx(_t,{}),a.jsx(rr,{}),a.jsx(Yn,{})]});function so(){return a.jsx(er,{children:a.jsx(w.Suspense,{fallback:a.jsx(oo,{}),children:a.jsxs($t,{children:[a.jsx(z,{path:"/",element:a.jsx(io,{})}),a.jsx(z,{path:"/portfolio",element:a.jsx(to,{})}),a.jsx(z,{path:"/portfolio/:categoryId",element:a.jsx(ro,{})}),a.jsx(z,{path:"/vibe",element:a.jsx(Qn,{})}),a.jsx(z,{path:"/blog",element:a.jsx(_t,{})}),a.jsx(z,{path:"/blog/:slug",element:a.jsx(eo,{})}),a.jsx(z,{path:"*",element:a.jsx(no,{})})]})})})}ct(document.getElementById("root")).render(a.jsx(w.StrictMode,{children:a.jsx(qt,{children:a.jsx(Ht,{children:a.jsx(Mt,{children:a.jsx(so,{})})})})}));export{Qt as X,V as c,co as g,H as u};
