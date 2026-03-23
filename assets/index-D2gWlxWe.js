const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/VibeShowcase-D-5eZ_Z7.js","assets/vendor-motion-JbGu3LFv.js","assets/vendor-react-CDFnBdCK.js","assets/chevron-right-Cid2C9XN.js","assets/BlogPost-rLooxQfX.js","assets/arrow-left-Cun4qRV7.js","assets/Portfolio-DhbnEwZ0.js","assets/CategoryGallery-BK0Ecl-N.js","assets/About-DXLlyJsN.js","assets/NotFound-BQFy9B7M.js"])))=>i.map(i=>d[i]);
import{j as c,A as Dt,m as G}from"./vendor-motion-JbGu3LFv.js";import{a as Ut,r as w,R as lt,u as Bt,L as ce,b as zt,c as U,B as It}from"./vendor-react-CDFnBdCK.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(o){if(o.ep)return;o.ep=!0;const s=r(o);fetch(o.href,s)}})();var ct,Me=Ut;ct=Me.createRoot,Me.hydrateRoot;const ut=w.createContext(),$t=({children:e})=>{const[t,r]=w.useState(null),[n,o]=w.useState(!0),[s,i]=w.useState(null);return w.useEffect(()=>{fetch("/content.json").then(a=>{if(!a.ok)throw new Error("Failed to load content configuration");return a.json()}).then(a=>{r(a),o(!1)}).catch(a=>{console.error("Error loading content:",a),i(a),o(!1)})},[]),c.jsx(ut.Provider,{value:{content:t,loading:n,error:s},children:e})},Oe=()=>w.useContext(ut);class Mt extends lt.Component{constructor(t){super(t),this.state={hasError:!1,error:null}}static getDerivedStateFromError(t){return{hasError:!0,error:t}}componentDidCatch(t,r){console.error("ErrorBoundary caught an error:",t,r)}render(){return this.state.hasError?c.jsxs("div",{style:{minHeight:"100vh",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",padding:"2rem",textAlign:"center",fontFamily:"var(--font-heading, Montserrat, sans-serif)"},role:"alert",children:[c.jsx("h1",{style:{fontSize:"clamp(2rem, 5vw, 3rem)",fontWeight:600,marginBottom:"1rem",textTransform:"uppercase"},children:"Something went wrong"}),c.jsx("p",{style:{fontSize:"1.1rem",color:"var(--sub-text-color, #666)",marginBottom:"2rem",maxWidth:"500px"},children:"An unexpected error occurred. Please try refreshing the page."}),c.jsx("button",{onClick:()=>{this.setState({hasError:!1,error:null}),window.location.href="/"},style:{display:"inline-flex",alignItems:"center",padding:"1rem 2.5rem",backgroundColor:"var(--accent-color, #000)",color:"var(--bg-color, #fff)",border:"none",borderRadius:"50px",fontSize:"0.9rem",fontWeight:500,textTransform:"uppercase",letterSpacing:"0.1em",cursor:"pointer",transition:"opacity 0.3s ease"},children:"Return Home"})]}):this.props.children}}const qt="modulepreload",Ht=function(e){return"/"+e},qe={},H=function(t,r,n){let o=Promise.resolve();if(r&&r.length>0){document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),a=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));o=Promise.allSettled(r.map(p=>{if(p=Ht(p),p in qe)return;qe[p]=!0;const f=p.endsWith(".css"),d=f?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${p}"]${d}`))return;const m=document.createElement("link");if(m.rel=f?"stylesheet":qt,f||(m.as="script"),m.crossOrigin="",m.href=p,a&&m.setAttribute("nonce",a),document.head.appendChild(m),f)return new Promise((y,E)=>{m.addEventListener("load",y),m.addEventListener("error",()=>E(new Error(`Unable to preload CSS for ${p}`)))})}))}function s(i){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=i,window.dispatchEvent(a),!a.defaultPrevented)throw i}return o.then(i=>{for(const a of i||[])a.status==="rejected"&&s(a.reason);return t().catch(s)})};/**
 * @license lucide-react v0.331.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Vt={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.331.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wt=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),V=(e,t)=>{const r=w.forwardRef(({color:n="currentColor",size:o=24,strokeWidth:s=2,absoluteStrokeWidth:i,className:a="",children:p,...f},d)=>w.createElement("svg",{ref:d,...Vt,width:o,height:o,stroke:n,strokeWidth:i?Number(s)*24/Number(o):s,className:["lucide",`lucide-${Wt(e)}`,a].join(" "),...f},[...t.map(([m,y])=>w.createElement(m,y)),...Array.isArray(p)?p:[p]]));return r.displayName=`${e}`,r};/**
 * @license lucide-react v0.331.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jt=V("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.331.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kt=V("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.331.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xt=V("Instagram",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]]);/**
 * @license lucide-react v0.331.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gt=V("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.331.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yt=V("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.331.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zt=V("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),Qt=({children:e})=>{const{content:t,loading:r,error:n}=Oe(),[o,s]=w.useState(!1),[i,a]=w.useState(!1),p=Bt(),f=p.pathname==="/",d=w.useRef(null),m=w.useRef(null),y=w.useRef(null);if(w.useEffect(()=>{let u=!1;const g=()=>{u||(u=!0,requestAnimationFrame(()=>{a(window.scrollY>50),u=!1}))};return window.addEventListener("scroll",g,{passive:!0}),()=>window.removeEventListener("scroll",g)},[]),w.useEffect(()=>{s(!1)},[p.pathname]),w.useEffect(()=>{var u;return o?(document.body.style.overflow="hidden",requestAnimationFrame(()=>{var g;(g=d.current)==null||g.focus()})):(document.body.style.overflow="",(u=m.current)==null||u.focus()),()=>{document.body.style.overflow=""}},[o]),w.useEffect(()=>{if(!o)return;const u=g=>{g.key==="Escape"&&s(!1)};return window.addEventListener("keydown",u),()=>window.removeEventListener("keydown",u)},[o]),w.useEffect(()=>{if(!o||!y.current)return;const u=y.current,g=h=>{if(h.key!=="Tab")return;const x=u.querySelectorAll('button, a, [tabindex]:not([tabindex="-1"])');if(x.length===0)return;const S=x[0],v=x[x.length-1];h.shiftKey&&document.activeElement===S?(h.preventDefault(),v.focus()):!h.shiftKey&&document.activeElement===v&&(h.preventDefault(),S.focus())};return u.addEventListener("keydown",g),()=>u.removeEventListener("keydown",g)},[o]),r)return c.jsx("div",{className:"loading-screen",role:"status",children:"Loading..."});if(n||!t)return c.jsx("div",{className:"error-screen",role:"alert",children:"Error loading content."});const E=[{name:"Home",href:"/#home"},{name:"Portfolio",href:"/portfolio"},{name:"Blog",href:"/blog"},{name:"About",href:"/about"},{name:"Contact",href:"/#contact"}];return c.jsxs("div",{className:"layout-container",children:[c.jsx("style",{children:`
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
                    display: flex;
                    align-items: center;
                }
                .logo-img {
                    height: 38px;
                    width: auto;
                    display: block;
                    transition: filter 0.3s ease, transform 0.4s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.3s ease;
                }
                .logo:hover .logo-img {
                    transform: scale(1.06);
                    opacity: 0.8;
                }
                .transparent-light .logo-img {
                    filter: invert(1);
                }
                .desktop-menu {
                    display: flex;
                    gap: 2rem;
                }
                .desktop-menu a {
                    font-size: 0.8rem;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    position: relative;
                    font-weight: 500;
                    transition: opacity 0.3s ease;
                }
                .desktop-menu:hover a {
                    opacity: 0.4;
                }
                .desktop-menu:hover a:hover {
                    opacity: 1;
                }
                .desktop-menu a::after {
                    content: '';
                    position: absolute;
                    bottom: -4px;
                    left: 0;
                    width: 100%;
                    height: 1px;
                    background: currentColor;
                    transform: scaleX(0);
                    transform-origin: right;
                    transition: transform 0.4s cubic-bezier(0.25, 1, 0.5, 1);
                }
                .desktop-menu a:hover::after,
                .desktop-menu a:focus-visible::after {
                    transform: scaleX(1);
                    transform-origin: left;
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
                    background-color: #111;
                    border-top: 1px solid rgba(255, 255, 255, 0.1);
                }
            `}),c.jsx("div",{className:"grain-overlay","aria-hidden":"true"}),c.jsx("a",{href:"#main-content",className:"skip-to-content",children:"Skip to main content"}),c.jsxs("nav",{className:`nav-container ${i?"scrolled":""} ${!i&&f?"transparent-light":""}`,"aria-label":"Main navigation",children:[c.jsx(ce,{to:"/",className:"logo",children:c.jsx("img",{src:"/images/RH_bw.png",alt:t.hero.title,className:"logo-img"})}),c.jsx("ul",{className:"desktop-menu",role:"menubar",children:E.map(u=>c.jsx("li",{role:"none",children:c.jsx("a",{href:u.href,role:"menuitem",children:u.name})},u.name))}),c.jsx("button",{ref:m,className:"mobile-toggle",onClick:()=>s(!0),"aria-label":"Open navigation menu","aria-expanded":o,"aria-controls":"mobile-menu",children:c.jsx(Yt,{size:24})})]}),c.jsx(Dt,{children:o&&c.jsxs(G.div,{ref:y,id:"mobile-menu",role:"dialog","aria-modal":"true","aria-label":"Navigation menu",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.4,ease:[.16,1,.3,1]},style:{position:"fixed",top:0,left:0,width:"100%",height:"100vh",backgroundColor:"var(--bg-color)",zIndex:200,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:[c.jsx("button",{ref:d,onClick:()=>s(!1),"aria-label":"Close navigation menu",style:{position:"absolute",top:"2rem",right:"2rem",background:"transparent",border:"none",color:"var(--text-color)",cursor:"pointer",padding:"0.5rem"},children:c.jsx(Zt,{size:32})}),c.jsx("nav",{"aria-label":"Mobile navigation",style:{display:"flex",flexDirection:"column",gap:"2rem",alignItems:"center"},children:E.map(u=>c.jsx(G.a,{href:u.href,initial:{y:20,opacity:0},animate:{y:0,opacity:1},transition:{duration:.5},onClick:()=>s(!1),style:{fontFamily:"var(--font-display)",fontSize:"3rem",color:"var(--accent-color)",fontStyle:"italic",fontWeight:400,letterSpacing:"0.02em"},children:u.name},u.name))})]})}),c.jsx("main",{id:"main-content",children:e}),c.jsx("footer",{children:c.jsxs("p",{style:{color:"rgba(255, 255, 255, 0.3)",fontSize:"0.75rem"},children:["© ",new Date().getFullYear()," ",t.meta.title]})})]})},er=()=>c.jsxs("section",{id:"home",className:"hero-section",children:[c.jsx("div",{className:"hero-bg","aria-hidden":"true"}),c.jsxs("div",{className:"hero-split",children:[c.jsx("div",{className:"hero-panel hero-panel-left hero-fade-in",children:c.jsxs("a",{href:"#writing",className:"hero-block",onClick:e=>{var t;e.preventDefault(),(t=document.getElementById("writing"))==null||t.scrollIntoView({behavior:"smooth"})},children:[c.jsx("span",{className:"hero-block-label",children:"Stories & Essays"}),c.jsx("span",{className:"hero-block-title",children:"Ink"}),c.jsx("span",{className:"hero-block-hint",children:"Read"})]})}),c.jsxs("div",{className:"hero-center hero-reveal",children:[c.jsx("div",{className:"hero-divider-line"}),c.jsxs("div",{className:"hero-center-content",children:[c.jsx("span",{className:"hero-name",children:"Russ Heritage"}),c.jsxs("span",{className:"hero-location",children:[c.jsx(Gt,{size:10,strokeWidth:1.5}),"Twin Cities"]})]}),c.jsx("div",{className:"hero-divider-line"})]}),c.jsx("div",{className:"hero-panel hero-panel-right hero-fade-in",children:c.jsxs("a",{href:"#portfolio",className:"hero-block",onClick:e=>{var t;e.preventDefault(),(t=document.getElementById("portfolio"))==null||t.scrollIntoView({behavior:"smooth"})},children:[c.jsx("span",{className:"hero-block-label",children:"Editorial & Portraiture"}),c.jsx("span",{className:"hero-block-title",children:"Lens"}),c.jsx("span",{className:"hero-block-hint",children:"View"})]})})]}),c.jsx("style",{children:`
                .hero-section {
                    height: 100vh;
                    height: 100dvh;
                    position: relative;
                    overflow: hidden;
                    color: #ffffff;
                }
                .hero-bg {
                    position: absolute;
                    inset: 0;
                    background-image: linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(/images/mm-2.jpg);
                    background-size: cover;
                    background-position: center;
                }
                .hero-split {
                    position: relative;
                    z-index: 1;
                    display: flex;
                    height: 100%;
                    align-items: stretch;
                }

                /* Panels are passive layout containers */
                .hero-panel {
                    flex: 1;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                /* The clickable block — contained around the text */
                .hero-block {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    text-decoration: none;
                    color: #fff;
                    cursor: pointer;
                    padding: 3rem 4rem;
                    position: relative;
                    border: 1px solid rgba(255, 255, 255, 0);
                    transition: border-color 0.5s ease, background 0.5s ease;
                }
                .hero-block:hover {
                    border-color: rgba(255, 255, 255, 0.25);
                    background: rgba(0, 0, 0, 0.15);
                }
                .hero-block:focus-visible {
                    outline: 2px solid rgba(255,255,255,0.6);
                    outline-offset: 4px;
                }

                .hero-block-label {
                    font-family: var(--font-heading);
                    font-size: 0.7rem;
                    font-weight: 500;
                    text-transform: uppercase;
                    letter-spacing: 0.2em;
                    color: rgba(255, 255, 255, 0.4);
                    margin-bottom: 1.25rem;
                    transition: color 0.4s ease;
                }
                .hero-block:hover .hero-block-label {
                    color: rgba(255, 255, 255, 0.65);
                }
                .hero-block-title {
                    font-family: var(--font-display);
                    font-size: clamp(4rem, 10vw, 8rem);
                    font-weight: 400;
                    font-style: italic;
                    letter-spacing: 0.02em;
                    line-height: 1;
                    transition: letter-spacing 0.5s cubic-bezier(0.25, 1, 0.5, 1);
                }
                .hero-block:hover .hero-block-title {
                    letter-spacing: 0.06em;
                }
                .hero-block-hint {
                    font-family: var(--font-heading);
                    font-size: 0.7rem;
                    font-weight: 400;
                    text-transform: uppercase;
                    letter-spacing: 0.2em;
                    color: rgba(255, 255, 255, 0);
                    margin-top: 1.5rem;
                    transition: color 0.4s ease, transform 0.4s ease;
                    transform: translateY(4px);
                }
                .hero-block:hover .hero-block-hint {
                    color: rgba(255, 255, 255, 0.5);
                    transform: translateY(0);
                }

                /* Center divider */
                .hero-center {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    width: 0;
                    position: relative;
                    z-index: 2;
                    transform-origin: center;
                }
                .hero-divider-line {
                    flex: 1;
                    width: 1px;
                    background: rgba(255, 255, 255, 0.2);
                }
                .hero-center-content {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 0.5rem;
                    padding: 2rem 0;
                    white-space: nowrap;
                }
                .hero-name {
                    font-family: var(--font-heading);
                    font-size: 0.65rem;
                    font-weight: 500;
                    text-transform: uppercase;
                    letter-spacing: 0.2em;
                    color: rgba(255, 255, 255, 0.5);
                    writing-mode: vertical-rl;
                    text-orientation: mixed;
                }
                .hero-location {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 0.3rem;
                    font-family: var(--font-heading);
                    font-size: 0.55rem;
                    font-weight: 400;
                    text-transform: uppercase;
                    letter-spacing: 0.2em;
                    color: rgba(255, 255, 255, 0.3);
                    writing-mode: vertical-rl;
                    text-orientation: mixed;
                }

                /* Entrance animations */
                @keyframes heroFadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes heroReveal {
                    from { opacity: 0; transform: scaleY(0); }
                    to { opacity: 1; transform: scaleY(1); }
                }
                .hero-fade-in {
                    animation: heroFadeIn 0.8s ease 0.2s both;
                }
                .hero-reveal {
                    animation: heroReveal 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.4s both;
                    transform-origin: center;
                }

                /* Mobile */
                @media (max-width: 768px) {
                    .hero-bg {
                        background-position: 62% center;
                    }
                    .hero-split {
                        flex-direction: column;
                    }
                    .hero-panel {
                        flex: 1;
                    }
                    .hero-block {
                        padding: 2rem 3rem;
                        border-color: rgba(255, 255, 255, 0.15);
                    }
                    .hero-block-title {
                        font-size: clamp(3.5rem, 14vw, 5rem);
                    }
                    .hero-block-label {
                        font-size: 0.6rem;
                        margin-bottom: 0.75rem;
                    }
                    .hero-block-hint {
                        margin-top: 1rem;
                        color: rgba(255, 255, 255, 0.3);
                        transform: translateY(0);
                    }
                    .hero-center {
                        width: 100%;
                        height: 0;
                        flex-direction: row;
                    }
                    .hero-divider-line {
                        flex: 1;
                        height: 1px;
                        width: auto;
                    }
                    .hero-center-content {
                        flex-direction: row;
                        padding: 0 1.5rem;
                        gap: 1rem;
                    }
                    .hero-name {
                        writing-mode: horizontal-tb;
                    }
                    .hero-location {
                        writing-mode: horizontal-tb;
                        flex-direction: row;
                    }
                }
            `})]}),tr=()=>{const{content:e,loading:t}=Oe();if(t||!(e!=null&&e.portfolioCategories))return null;const r=e.portfolioCategories;return c.jsxs("section",{id:"portfolio",style:{padding:"8rem 2rem",scrollMarginTop:"100px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[c.jsxs(G.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-50px"},transition:{duration:.6},style:{textAlign:"center",maxWidth:"800px"},children:[c.jsx("p",{className:"portfolio-cta-section-label",children:"Photography"}),c.jsx("div",{className:"portfolio-cta-categories",children:r.map((n,o)=>c.jsxs(lt.Fragment,{children:[o>0&&c.jsx("span",{className:"portfolio-cta-divider","aria-hidden":"true",children:"/"}),c.jsx(ce,{to:`/portfolio/${n.id}`,className:"portfolio-cta-link",children:n.name})]},n.id))}),c.jsx("div",{style:{marginTop:"2.5rem"},children:c.jsxs(ce,{to:"/portfolio",className:"portfolio-cta-button",children:["Explore the Portfolio ",c.jsx(Jt,{size:18})]})})]}),c.jsx("style",{children:`
                .portfolio-cta-section-label {
                    font-family: var(--font-heading);
                    font-size: 0.7rem;
                    font-weight: 500;
                    text-transform: uppercase;
                    letter-spacing: 0.2em;
                    color: var(--sub-text-color);
                    margin-bottom: 2.5rem;
                }
                .portfolio-cta-categories {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                    align-items: baseline;
                    gap: 0.5rem 0;
                }
                .portfolio-cta-link {
                    font-family: var(--font-display);
                    font-size: clamp(2.2rem, 5vw, 4.5rem);
                    font-weight: 400;
                    font-style: italic;
                    color: var(--text-color);
                    text-decoration: none;
                    padding: 0 0.75rem;
                    transition: opacity 0.4s ease, transform 0.4s cubic-bezier(0.25, 1, 0.5, 1);
                    line-height: 1.3;
                }
                .portfolio-cta-categories:hover .portfolio-cta-link {
                    opacity: 0.35;
                }
                .portfolio-cta-categories:hover .portfolio-cta-link:hover {
                    opacity: 1;
                    transform: translateY(-2px);
                }
                .portfolio-cta-link:focus-visible {
                    outline: 2px solid var(--accent-color);
                    outline-offset: 4px;
                }
                .portfolio-cta-divider {
                    font-family: var(--font-display);
                    font-size: clamp(1.8rem, 4vw, 3.5rem);
                    font-weight: 300;
                    color: var(--border-color);
                    user-select: none;
                }
                .portfolio-cta-button {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.6rem;
                    font-family: var(--font-body);
                    font-size: 0.78rem;
                    font-weight: 500;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    color: var(--sub-text-color);
                    text-decoration: none;
                    transition: color 0.3s ease;
                }
                .portfolio-cta-button:hover {
                    color: var(--text-color);
                }
                .portfolio-cta-button:focus-visible {
                    outline: 2px solid var(--accent-color);
                    outline-offset: 4px;
                }
                @media (max-width: 600px) {
                    .portfolio-cta-link {
                        padding: 0 0.4rem;
                    }
                }
            `})]})};function dt(e,t){return function(){return e.apply(t,arguments)}}const{toString:rr}=Object.prototype,{getPrototypeOf:Ae}=Object,{iterator:fe,toStringTag:ft}=Symbol,pe=(e=>t=>{const r=rr.call(t);return e[r]||(e[r]=r.slice(8,-1).toLowerCase())})(Object.create(null)),P=e=>(e=e.toLowerCase(),t=>pe(t)===e),he=e=>t=>typeof t===e,{isArray:W}=Array,q=he("undefined");function Z(e){return e!==null&&!q(e)&&e.constructor!==null&&!q(e.constructor)&&C(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const pt=P("ArrayBuffer");function nr(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&pt(e.buffer),t}const or=he("string"),C=he("function"),ht=he("number"),Q=e=>e!==null&&typeof e=="object",sr=e=>e===!0||e===!1,se=e=>{if(pe(e)!=="object")return!1;const t=Ae(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(ft in e)&&!(fe in e)},ir=e=>{if(!Q(e)||Z(e))return!1;try{return Object.keys(e).length===0&&Object.getPrototypeOf(e)===Object.prototype}catch{return!1}},ar=P("Date"),lr=P("File"),cr=P("Blob"),ur=P("FileList"),dr=e=>Q(e)&&C(e.pipe),fr=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||C(e.append)&&((t=pe(e))==="formdata"||t==="object"&&C(e.toString)&&e.toString()==="[object FormData]"))},pr=P("URLSearchParams"),[hr,mr,gr,br]=["ReadableStream","Request","Response","Headers"].map(P),yr=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function ee(e,t,{allOwnKeys:r=!1}={}){if(e===null||typeof e>"u")return;let n,o;if(typeof e!="object"&&(e=[e]),W(e))for(n=0,o=e.length;n<o;n++)t.call(null,e[n],n,e);else{if(Z(e))return;const s=r?Object.getOwnPropertyNames(e):Object.keys(e),i=s.length;let a;for(n=0;n<i;n++)a=s[n],t.call(null,e[a],a,e)}}function mt(e,t){if(Z(e))return null;t=t.toLowerCase();const r=Object.keys(e);let n=r.length,o;for(;n-- >0;)if(o=r[n],t===o.toLowerCase())return o;return null}const I=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,gt=e=>!q(e)&&e!==I;function Se(){const{caseless:e,skipUndefined:t}=gt(this)&&this||{},r={},n=(o,s)=>{const i=e&&mt(r,s)||s;se(r[i])&&se(o)?r[i]=Se(r[i],o):se(o)?r[i]=Se({},o):W(o)?r[i]=o.slice():(!t||!q(o))&&(r[i]=o)};for(let o=0,s=arguments.length;o<s;o++)arguments[o]&&ee(arguments[o],n);return r}const xr=(e,t,r,{allOwnKeys:n}={})=>(ee(t,(o,s)=>{r&&C(o)?e[s]=dt(o,r):e[s]=o},{allOwnKeys:n}),e),wr=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Er=(e,t,r,n)=>{e.prototype=Object.create(t.prototype,n),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),r&&Object.assign(e.prototype,r)},vr=(e,t,r,n)=>{let o,s,i;const a={};if(t=t||{},e==null)return t;do{for(o=Object.getOwnPropertyNames(e),s=o.length;s-- >0;)i=o[s],(!n||n(i,e,t))&&!a[i]&&(t[i]=e[i],a[i]=!0);e=r!==!1&&Ae(e)}while(e&&(!r||r(e,t))&&e!==Object.prototype);return t},Sr=(e,t,r)=>{e=String(e),(r===void 0||r>e.length)&&(r=e.length),r-=t.length;const n=e.indexOf(t,r);return n!==-1&&n===r},jr=e=>{if(!e)return null;if(W(e))return e;let t=e.length;if(!ht(t))return null;const r=new Array(t);for(;t-- >0;)r[t]=e[t];return r},Rr=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&Ae(Uint8Array)),kr=(e,t)=>{const n=(e&&e[fe]).call(e);let o;for(;(o=n.next())&&!o.done;){const s=o.value;t.call(e,s[0],s[1])}},Cr=(e,t)=>{let r;const n=[];for(;(r=e.exec(t))!==null;)n.push(r);return n},Or=P("HTMLFormElement"),Ar=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(r,n,o){return n.toUpperCase()+o}),He=(({hasOwnProperty:e})=>(t,r)=>e.call(t,r))(Object.prototype),Tr=P("RegExp"),bt=(e,t)=>{const r=Object.getOwnPropertyDescriptors(e),n={};ee(r,(o,s)=>{let i;(i=t(o,s,e))!==!1&&(n[s]=i||o)}),Object.defineProperties(e,n)},Nr=e=>{bt(e,(t,r)=>{if(C(e)&&["arguments","caller","callee"].indexOf(r)!==-1)return!1;const n=e[r];if(C(n)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+r+"'")})}})},Pr=(e,t)=>{const r={},n=o=>{o.forEach(s=>{r[s]=!0})};return W(e)?n(e):n(String(e).split(t)),r},Lr=()=>{},_r=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t;function Fr(e){return!!(e&&C(e.append)&&e[ft]==="FormData"&&e[fe])}const Dr=e=>{const t=new Array(10),r=(n,o)=>{if(Q(n)){if(t.indexOf(n)>=0)return;if(Z(n))return n;if(!("toJSON"in n)){t[o]=n;const s=W(n)?[]:{};return ee(n,(i,a)=>{const p=r(i,o+1);!q(p)&&(s[a]=p)}),t[o]=void 0,s}}return n};return r(e,0)},Ur=P("AsyncFunction"),Br=e=>e&&(Q(e)||C(e))&&C(e.then)&&C(e.catch),yt=((e,t)=>e?setImmediate:t?((r,n)=>(I.addEventListener("message",({source:o,data:s})=>{o===I&&s===r&&n.length&&n.shift()()},!1),o=>{n.push(o),I.postMessage(r,"*")}))(`axios@${Math.random()}`,[]):r=>setTimeout(r))(typeof setImmediate=="function",C(I.postMessage)),zr=typeof queueMicrotask<"u"?queueMicrotask.bind(I):typeof process<"u"&&process.nextTick||yt,Ir=e=>e!=null&&C(e[fe]);var l={isArray:W,isArrayBuffer:pt,isBuffer:Z,isFormData:fr,isArrayBufferView:nr,isString:or,isNumber:ht,isBoolean:sr,isObject:Q,isPlainObject:se,isEmptyObject:ir,isReadableStream:hr,isRequest:mr,isResponse:gr,isHeaders:br,isUndefined:q,isDate:ar,isFile:lr,isBlob:cr,isRegExp:Tr,isFunction:C,isStream:dr,isURLSearchParams:pr,isTypedArray:Rr,isFileList:ur,forEach:ee,merge:Se,extend:xr,trim:yr,stripBOM:wr,inherits:Er,toFlatObject:vr,kindOf:pe,kindOfTest:P,endsWith:Sr,toArray:jr,forEachEntry:kr,matchAll:Cr,isHTMLForm:Or,hasOwnProperty:He,hasOwnProp:He,reduceDescriptors:bt,freezeMethods:Nr,toObjectSet:Pr,toCamelCase:Ar,noop:Lr,toFiniteNumber:_r,findKey:mt,global:I,isContextDefined:gt,isSpecCompliantForm:Fr,toJSONObject:Dr,isAsyncFn:Ur,isThenable:Br,setImmediate:yt,asap:zr,isIterable:Ir};function b(e,t,r,n,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),r&&(this.config=r),n&&(this.request=n),o&&(this.response=o,this.status=o.status?o.status:null)}l.inherits(b,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:l.toJSONObject(this.config),code:this.code,status:this.status}}});const xt=b.prototype,wt={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{wt[e]={value:e}});Object.defineProperties(b,wt);Object.defineProperty(xt,"isAxiosError",{value:!0});b.from=(e,t,r,n,o,s)=>{const i=Object.create(xt);l.toFlatObject(e,i,function(d){return d!==Error.prototype},f=>f!=="isAxiosError");const a=e&&e.message?e.message:"Error",p=t==null&&e?e.code:t;return b.call(i,a,p,r,n,o),e&&i.cause==null&&Object.defineProperty(i,"cause",{value:e,configurable:!0}),i.name=e&&e.name||"Error",s&&Object.assign(i,s),i};var $r=null;function je(e){return l.isPlainObject(e)||l.isArray(e)}function Et(e){return l.endsWith(e,"[]")?e.slice(0,-2):e}function Ve(e,t,r){return e?e.concat(t).map(function(o,s){return o=Et(o),!r&&s?"["+o+"]":o}).join(r?".":""):t}function Mr(e){return l.isArray(e)&&!e.some(je)}const qr=l.toFlatObject(l,{},null,function(t){return/^is[A-Z]/.test(t)});function me(e,t,r){if(!l.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,r=l.toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,function(g,h){return!l.isUndefined(h[g])});const n=r.metaTokens,o=r.visitor||d,s=r.dots,i=r.indexes,p=(r.Blob||typeof Blob<"u"&&Blob)&&l.isSpecCompliantForm(t);if(!l.isFunction(o))throw new TypeError("visitor must be a function");function f(u){if(u===null)return"";if(l.isDate(u))return u.toISOString();if(l.isBoolean(u))return u.toString();if(!p&&l.isBlob(u))throw new b("Blob is not supported. Use a Buffer instead.");return l.isArrayBuffer(u)||l.isTypedArray(u)?p&&typeof Blob=="function"?new Blob([u]):Buffer.from(u):u}function d(u,g,h){let x=u;if(u&&!h&&typeof u=="object"){if(l.endsWith(g,"{}"))g=n?g:g.slice(0,-2),u=JSON.stringify(u);else if(l.isArray(u)&&Mr(u)||(l.isFileList(u)||l.endsWith(g,"[]"))&&(x=l.toArray(u)))return g=Et(g),x.forEach(function(v,R){!(l.isUndefined(v)||v===null)&&t.append(i===!0?Ve([g],R,s):i===null?g:g+"[]",f(v))}),!1}return je(u)?!0:(t.append(Ve(h,g,s),f(u)),!1)}const m=[],y=Object.assign(qr,{defaultVisitor:d,convertValue:f,isVisitable:je});function E(u,g){if(!l.isUndefined(u)){if(m.indexOf(u)!==-1)throw Error("Circular reference detected in "+g.join("."));m.push(u),l.forEach(u,function(x,S){(!(l.isUndefined(x)||x===null)&&o.call(t,x,l.isString(S)?S.trim():S,g,y))===!0&&E(x,g?g.concat(S):[S])}),m.pop()}}if(!l.isObject(e))throw new TypeError("data must be an object");return E(e),t}function We(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(n){return t[n]})}function Te(e,t){this._pairs=[],e&&me(e,this,t)}const vt=Te.prototype;vt.append=function(t,r){this._pairs.push([t,r])};vt.toString=function(t){const r=t?function(n){return t.call(this,n,We)}:We;return this._pairs.map(function(o){return r(o[0])+"="+r(o[1])},"").join("&")};function Hr(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function St(e,t,r){if(!t)return e;const n=r&&r.encode||Hr;l.isFunction(r)&&(r={serialize:r});const o=r&&r.serialize;let s;if(o?s=o(t,r):s=l.isURLSearchParams(t)?t.toString():new Te(t,r).toString(n),s){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+s}return e}class Vr{constructor(){this.handlers=[]}use(t,r,n){return this.handlers.push({fulfilled:t,rejected:r,synchronous:n?n.synchronous:!1,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){l.forEach(this.handlers,function(n){n!==null&&t(n)})}}var Je=Vr,jt={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Wr=typeof URLSearchParams<"u"?URLSearchParams:Te,Jr=typeof FormData<"u"?FormData:null,Kr=typeof Blob<"u"?Blob:null,Xr={isBrowser:!0,classes:{URLSearchParams:Wr,FormData:Jr,Blob:Kr},protocols:["http","https","file","blob","url","data"]};const Ne=typeof window<"u"&&typeof document<"u",Re=typeof navigator=="object"&&navigator||void 0,Gr=Ne&&(!Re||["ReactNative","NativeScript","NS"].indexOf(Re.product)<0),Yr=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",Zr=Ne&&window.location.href||"http://localhost";var Qr=Object.freeze({__proto__:null,hasBrowserEnv:Ne,hasStandardBrowserWebWorkerEnv:Yr,hasStandardBrowserEnv:Gr,navigator:Re,origin:Zr}),k={...Qr,...Xr};function en(e,t){return me(e,new k.classes.URLSearchParams,{visitor:function(r,n,o,s){return k.isNode&&l.isBuffer(r)?(this.append(n,r.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)},...t})}function tn(e){return l.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function rn(e){const t={},r=Object.keys(e);let n;const o=r.length;let s;for(n=0;n<o;n++)s=r[n],t[s]=e[s];return t}function Rt(e){function t(r,n,o,s){let i=r[s++];if(i==="__proto__")return!0;const a=Number.isFinite(+i),p=s>=r.length;return i=!i&&l.isArray(o)?o.length:i,p?(l.hasOwnProp(o,i)?o[i]=[o[i],n]:o[i]=n,!a):((!o[i]||!l.isObject(o[i]))&&(o[i]=[]),t(r,n,o[i],s)&&l.isArray(o[i])&&(o[i]=rn(o[i])),!a)}if(l.isFormData(e)&&l.isFunction(e.entries)){const r={};return l.forEachEntry(e,(n,o)=>{t(tn(n),o,r,0)}),r}return null}function nn(e,t,r){if(l.isString(e))try{return(t||JSON.parse)(e),l.trim(e)}catch(n){if(n.name!=="SyntaxError")throw n}return(r||JSON.stringify)(e)}const Pe={transitional:jt,adapter:["xhr","http","fetch"],transformRequest:[function(t,r){const n=r.getContentType()||"",o=n.indexOf("application/json")>-1,s=l.isObject(t);if(s&&l.isHTMLForm(t)&&(t=new FormData(t)),l.isFormData(t))return o?JSON.stringify(Rt(t)):t;if(l.isArrayBuffer(t)||l.isBuffer(t)||l.isStream(t)||l.isFile(t)||l.isBlob(t)||l.isReadableStream(t))return t;if(l.isArrayBufferView(t))return t.buffer;if(l.isURLSearchParams(t))return r.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let a;if(s){if(n.indexOf("application/x-www-form-urlencoded")>-1)return en(t,this.formSerializer).toString();if((a=l.isFileList(t))||n.indexOf("multipart/form-data")>-1){const p=this.env&&this.env.FormData;return me(a?{"files[]":t}:t,p&&new p,this.formSerializer)}}return s||o?(r.setContentType("application/json",!1),nn(t)):t}],transformResponse:[function(t){const r=this.transitional||Pe.transitional,n=r&&r.forcedJSONParsing,o=this.responseType==="json";if(l.isResponse(t)||l.isReadableStream(t))return t;if(t&&l.isString(t)&&(n&&!this.responseType||o)){const i=!(r&&r.silentJSONParsing)&&o;try{return JSON.parse(t,this.parseReviver)}catch(a){if(i)throw a.name==="SyntaxError"?b.from(a,b.ERR_BAD_RESPONSE,this,null,this.response):a}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:k.classes.FormData,Blob:k.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};l.forEach(["delete","get","head","post","put","patch"],e=>{Pe.headers[e]={}});var Le=Pe;const on=l.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);var sn=e=>{const t={};let r,n,o;return e&&e.split(`
`).forEach(function(i){o=i.indexOf(":"),r=i.substring(0,o).trim().toLowerCase(),n=i.substring(o+1).trim(),!(!r||t[r]&&on[r])&&(r==="set-cookie"?t[r]?t[r].push(n):t[r]=[n]:t[r]=t[r]?t[r]+", "+n:n)}),t};const Ke=Symbol("internals");function X(e){return e&&String(e).trim().toLowerCase()}function ie(e){return e===!1||e==null?e:l.isArray(e)?e.map(ie):String(e)}function an(e){const t=Object.create(null),r=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let n;for(;n=r.exec(e);)t[n[1]]=n[2];return t}const ln=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function we(e,t,r,n,o){if(l.isFunction(n))return n.call(this,t,r);if(o&&(t=r),!!l.isString(t)){if(l.isString(n))return t.indexOf(n)!==-1;if(l.isRegExp(n))return n.test(t)}}function cn(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,r,n)=>r.toUpperCase()+n)}function un(e,t){const r=l.toCamelCase(" "+t);["get","set","has"].forEach(n=>{Object.defineProperty(e,n+r,{value:function(o,s,i){return this[n].call(this,t,o,s,i)},configurable:!0})})}class ge{constructor(t){t&&this.set(t)}set(t,r,n){const o=this;function s(a,p,f){const d=X(p);if(!d)throw new Error("header name must be a non-empty string");const m=l.findKey(o,d);(!m||o[m]===void 0||f===!0||f===void 0&&o[m]!==!1)&&(o[m||p]=ie(a))}const i=(a,p)=>l.forEach(a,(f,d)=>s(f,d,p));if(l.isPlainObject(t)||t instanceof this.constructor)i(t,r);else if(l.isString(t)&&(t=t.trim())&&!ln(t))i(sn(t),r);else if(l.isObject(t)&&l.isIterable(t)){let a={},p,f;for(const d of t){if(!l.isArray(d))throw TypeError("Object iterator must return a key-value pair");a[f=d[0]]=(p=a[f])?l.isArray(p)?[...p,d[1]]:[p,d[1]]:d[1]}i(a,r)}else t!=null&&s(r,t,n);return this}get(t,r){if(t=X(t),t){const n=l.findKey(this,t);if(n){const o=this[n];if(!r)return o;if(r===!0)return an(o);if(l.isFunction(r))return r.call(this,o,n);if(l.isRegExp(r))return r.exec(o);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,r){if(t=X(t),t){const n=l.findKey(this,t);return!!(n&&this[n]!==void 0&&(!r||we(this,this[n],n,r)))}return!1}delete(t,r){const n=this;let o=!1;function s(i){if(i=X(i),i){const a=l.findKey(n,i);a&&(!r||we(n,n[a],a,r))&&(delete n[a],o=!0)}}return l.isArray(t)?t.forEach(s):s(t),o}clear(t){const r=Object.keys(this);let n=r.length,o=!1;for(;n--;){const s=r[n];(!t||we(this,this[s],s,t,!0))&&(delete this[s],o=!0)}return o}normalize(t){const r=this,n={};return l.forEach(this,(o,s)=>{const i=l.findKey(n,s);if(i){r[i]=ie(o),delete r[s];return}const a=t?cn(s):String(s).trim();a!==s&&delete r[s],r[a]=ie(o),n[a]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const r=Object.create(null);return l.forEach(this,(n,o)=>{n!=null&&n!==!1&&(r[o]=t&&l.isArray(n)?n.join(", "):n)}),r}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,r])=>t+": "+r).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...r){const n=new this(t);return r.forEach(o=>n.set(o)),n}static accessor(t){const n=(this[Ke]=this[Ke]={accessors:{}}).accessors,o=this.prototype;function s(i){const a=X(i);n[a]||(un(o,i),n[a]=!0)}return l.isArray(t)?t.forEach(s):s(t),this}}ge.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);l.reduceDescriptors(ge.prototype,({value:e},t)=>{let r=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(n){this[r]=n}}});l.freezeMethods(ge);var N=ge;function Ee(e,t){const r=this||Le,n=t||r,o=N.from(n.headers);let s=n.data;return l.forEach(e,function(a){s=a.call(r,s,o.normalize(),t?t.status:void 0)}),o.normalize(),s}function kt(e){return!!(e&&e.__CANCEL__)}function J(e,t,r){b.call(this,e??"canceled",b.ERR_CANCELED,t,r),this.name="CanceledError"}l.inherits(J,b,{__CANCEL__:!0});function Ct(e,t,r){const n=r.config.validateStatus;!r.status||!n||n(r.status)?e(r):t(new b("Request failed with status code "+r.status,[b.ERR_BAD_REQUEST,b.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r))}function dn(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function fn(e,t){e=e||10;const r=new Array(e),n=new Array(e);let o=0,s=0,i;return t=t!==void 0?t:1e3,function(p){const f=Date.now(),d=n[s];i||(i=f),r[o]=p,n[o]=f;let m=s,y=0;for(;m!==o;)y+=r[m++],m=m%e;if(o=(o+1)%e,o===s&&(s=(s+1)%e),f-i<t)return;const E=d&&f-d;return E?Math.round(y*1e3/E):void 0}}function pn(e,t){let r=0,n=1e3/t,o,s;const i=(f,d=Date.now())=>{r=d,o=null,s&&(clearTimeout(s),s=null),e(...f)};return[(...f)=>{const d=Date.now(),m=d-r;m>=n?i(f,d):(o=f,s||(s=setTimeout(()=>{s=null,i(o)},n-m)))},()=>o&&i(o)]}const ue=(e,t,r=3)=>{let n=0;const o=fn(50,250);return pn(s=>{const i=s.loaded,a=s.lengthComputable?s.total:void 0,p=i-n,f=o(p),d=i<=a;n=i;const m={loaded:i,total:a,progress:a?i/a:void 0,bytes:p,rate:f||void 0,estimated:f&&a&&d?(a-i)/f:void 0,event:s,lengthComputable:a!=null,[t?"download":"upload"]:!0};e(m)},r)},Xe=(e,t)=>{const r=e!=null;return[n=>t[0]({lengthComputable:r,total:e,loaded:n}),t[1]]},Ge=e=>(...t)=>l.asap(()=>e(...t));var hn=k.hasStandardBrowserEnv?((e,t)=>r=>(r=new URL(r,k.origin),e.protocol===r.protocol&&e.host===r.host&&(t||e.port===r.port)))(new URL(k.origin),k.navigator&&/(msie|trident)/i.test(k.navigator.userAgent)):()=>!0,mn=k.hasStandardBrowserEnv?{write(e,t,r,n,o,s,i){if(typeof document>"u")return;const a=[`${e}=${encodeURIComponent(t)}`];l.isNumber(r)&&a.push(`expires=${new Date(r).toUTCString()}`),l.isString(n)&&a.push(`path=${n}`),l.isString(o)&&a.push(`domain=${o}`),s===!0&&a.push("secure"),l.isString(i)&&a.push(`SameSite=${i}`),document.cookie=a.join("; ")},read(e){if(typeof document>"u")return null;const t=document.cookie.match(new RegExp("(?:^|; )"+e+"=([^;]*)"));return t?decodeURIComponent(t[1]):null},remove(e){this.write(e,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function gn(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function bn(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function Ot(e,t,r){let n=!gn(t);return e&&(n||r==!1)?bn(e,t):t}const Ye=e=>e instanceof N?{...e}:e;function $(e,t){t=t||{};const r={};function n(f,d,m,y){return l.isPlainObject(f)&&l.isPlainObject(d)?l.merge.call({caseless:y},f,d):l.isPlainObject(d)?l.merge({},d):l.isArray(d)?d.slice():d}function o(f,d,m,y){if(l.isUndefined(d)){if(!l.isUndefined(f))return n(void 0,f,m,y)}else return n(f,d,m,y)}function s(f,d){if(!l.isUndefined(d))return n(void 0,d)}function i(f,d){if(l.isUndefined(d)){if(!l.isUndefined(f))return n(void 0,f)}else return n(void 0,d)}function a(f,d,m){if(m in t)return n(f,d);if(m in e)return n(void 0,f)}const p={url:s,method:s,data:s,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,withXSRFToken:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:a,headers:(f,d,m)=>o(Ye(f),Ye(d),m,!0)};return l.forEach(Object.keys({...e,...t}),function(d){const m=p[d]||o,y=m(e[d],t[d],d);l.isUndefined(y)&&m!==a||(r[d]=y)}),r}var At=e=>{const t=$({},e);let{data:r,withXSRFToken:n,xsrfHeaderName:o,xsrfCookieName:s,headers:i,auth:a}=t;if(t.headers=i=N.from(i),t.url=St(Ot(t.baseURL,t.url,t.allowAbsoluteUrls),e.params,e.paramsSerializer),a&&i.set("Authorization","Basic "+btoa((a.username||"")+":"+(a.password?unescape(encodeURIComponent(a.password)):""))),l.isFormData(r)){if(k.hasStandardBrowserEnv||k.hasStandardBrowserWebWorkerEnv)i.setContentType(void 0);else if(l.isFunction(r.getHeaders)){const p=r.getHeaders(),f=["content-type","content-length"];Object.entries(p).forEach(([d,m])=>{f.includes(d.toLowerCase())&&i.set(d,m)})}}if(k.hasStandardBrowserEnv&&(n&&l.isFunction(n)&&(n=n(t)),n||n!==!1&&hn(t.url))){const p=o&&s&&mn.read(s);p&&i.set(o,p)}return t};const yn=typeof XMLHttpRequest<"u";var xn=yn&&function(e){return new Promise(function(r,n){const o=At(e);let s=o.data;const i=N.from(o.headers).normalize();let{responseType:a,onUploadProgress:p,onDownloadProgress:f}=o,d,m,y,E,u;function g(){E&&E(),u&&u(),o.cancelToken&&o.cancelToken.unsubscribe(d),o.signal&&o.signal.removeEventListener("abort",d)}let h=new XMLHttpRequest;h.open(o.method.toUpperCase(),o.url,!0),h.timeout=o.timeout;function x(){if(!h)return;const v=N.from("getAllResponseHeaders"in h&&h.getAllResponseHeaders()),T={data:!a||a==="text"||a==="json"?h.responseText:h.response,status:h.status,statusText:h.statusText,headers:v,config:e,request:h};Ct(function(O){r(O),g()},function(O){n(O),g()},T),h=null}"onloadend"in h?h.onloadend=x:h.onreadystatechange=function(){!h||h.readyState!==4||h.status===0&&!(h.responseURL&&h.responseURL.indexOf("file:")===0)||setTimeout(x)},h.onabort=function(){h&&(n(new b("Request aborted",b.ECONNABORTED,e,h)),h=null)},h.onerror=function(R){const T=R&&R.message?R.message:"Network Error",B=new b(T,b.ERR_NETWORK,e,h);B.event=R||null,n(B),h=null},h.ontimeout=function(){let R=o.timeout?"timeout of "+o.timeout+"ms exceeded":"timeout exceeded";const T=o.transitional||jt;o.timeoutErrorMessage&&(R=o.timeoutErrorMessage),n(new b(R,T.clarifyTimeoutError?b.ETIMEDOUT:b.ECONNABORTED,e,h)),h=null},s===void 0&&i.setContentType(null),"setRequestHeader"in h&&l.forEach(i.toJSON(),function(R,T){h.setRequestHeader(T,R)}),l.isUndefined(o.withCredentials)||(h.withCredentials=!!o.withCredentials),a&&a!=="json"&&(h.responseType=o.responseType),f&&([y,u]=ue(f,!0),h.addEventListener("progress",y)),p&&h.upload&&([m,E]=ue(p),h.upload.addEventListener("progress",m),h.upload.addEventListener("loadend",E)),(o.cancelToken||o.signal)&&(d=v=>{h&&(n(!v||v.type?new J(null,e,h):v),h.abort(),h=null)},o.cancelToken&&o.cancelToken.subscribe(d),o.signal&&(o.signal.aborted?d():o.signal.addEventListener("abort",d)));const S=dn(o.url);if(S&&k.protocols.indexOf(S)===-1){n(new b("Unsupported protocol "+S+":",b.ERR_BAD_REQUEST,e));return}h.send(s||null)})};const wn=(e,t)=>{const{length:r}=e=e?e.filter(Boolean):[];if(t||r){let n=new AbortController,o;const s=function(f){if(!o){o=!0,a();const d=f instanceof Error?f:this.reason;n.abort(d instanceof b?d:new J(d instanceof Error?d.message:d))}};let i=t&&setTimeout(()=>{i=null,s(new b(`timeout ${t} of ms exceeded`,b.ETIMEDOUT))},t);const a=()=>{e&&(i&&clearTimeout(i),i=null,e.forEach(f=>{f.unsubscribe?f.unsubscribe(s):f.removeEventListener("abort",s)}),e=null)};e.forEach(f=>f.addEventListener("abort",s));const{signal:p}=n;return p.unsubscribe=()=>l.asap(a),p}};var En=wn;const vn=function*(e,t){let r=e.byteLength;if(r<t){yield e;return}let n=0,o;for(;n<r;)o=n+t,yield e.slice(n,o),n=o},Sn=async function*(e,t){for await(const r of jn(e))yield*vn(r,t)},jn=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const t=e.getReader();try{for(;;){const{done:r,value:n}=await t.read();if(r)break;yield n}}finally{await t.cancel()}},Ze=(e,t,r,n)=>{const o=Sn(e,t);let s=0,i,a=p=>{i||(i=!0,n&&n(p))};return new ReadableStream({async pull(p){try{const{done:f,value:d}=await o.next();if(f){a(),p.close();return}let m=d.byteLength;if(r){let y=s+=m;r(y)}p.enqueue(new Uint8Array(d))}catch(f){throw a(f),f}},cancel(p){return a(p),o.return()}},{highWaterMark:2})},Qe=64*1024,{isFunction:oe}=l,Rn=(({Request:e,Response:t})=>({Request:e,Response:t}))(l.global),{ReadableStream:et,TextEncoder:tt}=l.global,rt=(e,...t)=>{try{return!!e(...t)}catch{return!1}},kn=e=>{e=l.merge.call({skipUndefined:!0},Rn,e);const{fetch:t,Request:r,Response:n}=e,o=t?oe(t):typeof fetch=="function",s=oe(r),i=oe(n);if(!o)return!1;const a=o&&oe(et),p=o&&(typeof tt=="function"?(u=>g=>u.encode(g))(new tt):async u=>new Uint8Array(await new r(u).arrayBuffer())),f=s&&a&&rt(()=>{let u=!1;const g=new r(k.origin,{body:new et,method:"POST",get duplex(){return u=!0,"half"}}).headers.has("Content-Type");return u&&!g}),d=i&&a&&rt(()=>l.isReadableStream(new n("").body)),m={stream:d&&(u=>u.body)};o&&["text","arrayBuffer","blob","formData","stream"].forEach(u=>{!m[u]&&(m[u]=(g,h)=>{let x=g&&g[u];if(x)return x.call(g);throw new b(`Response type '${u}' is not supported`,b.ERR_NOT_SUPPORT,h)})});const y=async u=>{if(u==null)return 0;if(l.isBlob(u))return u.size;if(l.isSpecCompliantForm(u))return(await new r(k.origin,{method:"POST",body:u}).arrayBuffer()).byteLength;if(l.isArrayBufferView(u)||l.isArrayBuffer(u))return u.byteLength;if(l.isURLSearchParams(u)&&(u=u+""),l.isString(u))return(await p(u)).byteLength},E=async(u,g)=>{const h=l.toFiniteNumber(u.getContentLength());return h??y(g)};return async u=>{let{url:g,method:h,data:x,signal:S,cancelToken:v,timeout:R,onDownloadProgress:T,onUploadProgress:B,responseType:O,headers:ye,withCredentials:te="same-origin",fetchOptions:De}=At(u),Ue=t||fetch;O=O?(O+"").toLowerCase():"text";let re=En([S,v&&v.toAbortSignal()],R),K=null;const z=re&&re.unsubscribe&&(()=>{re.unsubscribe()});let Be;try{if(B&&f&&h!=="get"&&h!=="head"&&(Be=await E(ye,x))!==0){let D=new r(g,{method:"POST",body:x,duplex:"half"}),M;if(l.isFormData(x)&&(M=D.headers.get("content-type"))&&ye.setContentType(M),D.body){const[xe,ne]=Xe(Be,ue(Ge(B)));x=Ze(D.body,Qe,xe,ne)}}l.isString(te)||(te=te?"include":"omit");const L=s&&"credentials"in r.prototype,ze={...De,signal:re,method:h.toUpperCase(),headers:ye.normalize().toJSON(),body:x,duplex:"half",credentials:L?te:void 0};K=s&&new r(g,ze);let F=await(s?Ue(K,De):Ue(g,ze));const Ie=d&&(O==="stream"||O==="response");if(d&&(T||Ie&&z)){const D={};["status","statusText","headers"].forEach($e=>{D[$e]=F[$e]});const M=l.toFiniteNumber(F.headers.get("content-length")),[xe,ne]=T&&Xe(M,ue(Ge(T),!0))||[];F=new n(Ze(F.body,Qe,xe,()=>{ne&&ne(),z&&z()}),D)}O=O||"text";let Ft=await m[l.findKey(m,O)||"text"](F,u);return!Ie&&z&&z(),await new Promise((D,M)=>{Ct(D,M,{data:Ft,headers:N.from(F.headers),status:F.status,statusText:F.statusText,config:u,request:K})})}catch(L){throw z&&z(),L&&L.name==="TypeError"&&/Load failed|fetch/i.test(L.message)?Object.assign(new b("Network Error",b.ERR_NETWORK,u,K),{cause:L.cause||L}):b.from(L,L&&L.code,u,K)}}},Cn=new Map,Tt=e=>{let t=e&&e.env||{};const{fetch:r,Request:n,Response:o}=t,s=[n,o,r];let i=s.length,a=i,p,f,d=Cn;for(;a--;)p=s[a],f=d.get(p),f===void 0&&d.set(p,f=a?new Map:kn(t)),d=f;return f};Tt();const _e={http:$r,xhr:xn,fetch:{get:Tt}};l.forEach(_e,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const nt=e=>`- ${e}`,On=e=>l.isFunction(e)||e===null||e===!1;function An(e,t){e=l.isArray(e)?e:[e];const{length:r}=e;let n,o;const s={};for(let i=0;i<r;i++){n=e[i];let a;if(o=n,!On(n)&&(o=_e[(a=String(n)).toLowerCase()],o===void 0))throw new b(`Unknown adapter '${a}'`);if(o&&(l.isFunction(o)||(o=o.get(t))))break;s[a||"#"+i]=o}if(!o){const i=Object.entries(s).map(([p,f])=>`adapter ${p} `+(f===!1?"is not supported by the environment":"is not available in the build"));let a=r?i.length>1?`since :
`+i.map(nt).join(`
`):" "+nt(i[0]):"as no adapter specified";throw new b("There is no suitable adapter to dispatch the request "+a,"ERR_NOT_SUPPORT")}return o}var Nt={getAdapter:An,adapters:_e};function ve(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new J(null,e)}function ot(e){return ve(e),e.headers=N.from(e.headers),e.data=Ee.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Nt.getAdapter(e.adapter||Le.adapter,e)(e).then(function(n){return ve(e),n.data=Ee.call(e,e.transformResponse,n),n.headers=N.from(n.headers),n},function(n){return kt(n)||(ve(e),n&&n.response&&(n.response.data=Ee.call(e,e.transformResponse,n.response),n.response.headers=N.from(n.response.headers))),Promise.reject(n)})}const Pt="1.13.2",be={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{be[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}});const st={};be.transitional=function(t,r,n){function o(s,i){return"[Axios v"+Pt+"] Transitional option '"+s+"'"+i+(n?". "+n:"")}return(s,i,a)=>{if(t===!1)throw new b(o(i," has been removed"+(r?" in "+r:"")),b.ERR_DEPRECATED);return r&&!st[i]&&(st[i]=!0,console.warn(o(i," has been deprecated since v"+r+" and will be removed in the near future"))),t?t(s,i,a):!0}};be.spelling=function(t){return(r,n)=>(console.warn(`${n} is likely a misspelling of ${t}`),!0)};function Tn(e,t,r){if(typeof e!="object")throw new b("options must be an object",b.ERR_BAD_OPTION_VALUE);const n=Object.keys(e);let o=n.length;for(;o-- >0;){const s=n[o],i=t[s];if(i){const a=e[s],p=a===void 0||i(a,s,e);if(p!==!0)throw new b("option "+s+" must be "+p,b.ERR_BAD_OPTION_VALUE);continue}if(r!==!0)throw new b("Unknown option "+s,b.ERR_BAD_OPTION)}}var ae={assertOptions:Tn,validators:be};const _=ae.validators;class de{constructor(t){this.defaults=t||{},this.interceptors={request:new Je,response:new Je}}async request(t,r){try{return await this._request(t,r)}catch(n){if(n instanceof Error){let o={};Error.captureStackTrace?Error.captureStackTrace(o):o=new Error;const s=o.stack?o.stack.replace(/^.+\n/,""):"";try{n.stack?s&&!String(n.stack).endsWith(s.replace(/^.+\n.+\n/,""))&&(n.stack+=`
`+s):n.stack=s}catch{}}throw n}}_request(t,r){typeof t=="string"?(r=r||{},r.url=t):r=t||{},r=$(this.defaults,r);const{transitional:n,paramsSerializer:o,headers:s}=r;n!==void 0&&ae.assertOptions(n,{silentJSONParsing:_.transitional(_.boolean),forcedJSONParsing:_.transitional(_.boolean),clarifyTimeoutError:_.transitional(_.boolean)},!1),o!=null&&(l.isFunction(o)?r.paramsSerializer={serialize:o}:ae.assertOptions(o,{encode:_.function,serialize:_.function},!0)),r.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?r.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:r.allowAbsoluteUrls=!0),ae.assertOptions(r,{baseUrl:_.spelling("baseURL"),withXsrfToken:_.spelling("withXSRFToken")},!0),r.method=(r.method||this.defaults.method||"get").toLowerCase();let i=s&&l.merge(s.common,s[r.method]);s&&l.forEach(["delete","get","head","post","put","patch","common"],u=>{delete s[u]}),r.headers=N.concat(i,s);const a=[];let p=!0;this.interceptors.request.forEach(function(g){typeof g.runWhen=="function"&&g.runWhen(r)===!1||(p=p&&g.synchronous,a.unshift(g.fulfilled,g.rejected))});const f=[];this.interceptors.response.forEach(function(g){f.push(g.fulfilled,g.rejected)});let d,m=0,y;if(!p){const u=[ot.bind(this),void 0];for(u.unshift(...a),u.push(...f),y=u.length,d=Promise.resolve(r);m<y;)d=d.then(u[m++],u[m++]);return d}y=a.length;let E=r;for(;m<y;){const u=a[m++],g=a[m++];try{E=u(E)}catch(h){g.call(this,h);break}}try{d=ot.call(this,E)}catch(u){return Promise.reject(u)}for(m=0,y=f.length;m<y;)d=d.then(f[m++],f[m++]);return d}getUri(t){t=$(this.defaults,t);const r=Ot(t.baseURL,t.url,t.allowAbsoluteUrls);return St(r,t.params,t.paramsSerializer)}}l.forEach(["delete","get","head","options"],function(t){de.prototype[t]=function(r,n){return this.request($(n||{},{method:t,url:r,data:(n||{}).data}))}});l.forEach(["post","put","patch"],function(t){function r(n){return function(s,i,a){return this.request($(a||{},{method:t,headers:n?{"Content-Type":"multipart/form-data"}:{},url:s,data:i}))}}de.prototype[t]=r(),de.prototype[t+"Form"]=r(!0)});var le=de;class Fe{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let r;this.promise=new Promise(function(s){r=s});const n=this;this.promise.then(o=>{if(!n._listeners)return;let s=n._listeners.length;for(;s-- >0;)n._listeners[s](o);n._listeners=null}),this.promise.then=o=>{let s;const i=new Promise(a=>{n.subscribe(a),s=a}).then(o);return i.cancel=function(){n.unsubscribe(s)},i},t(function(s,i,a){n.reason||(n.reason=new J(s,i,a),r(n.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const r=this._listeners.indexOf(t);r!==-1&&this._listeners.splice(r,1)}toAbortSignal(){const t=new AbortController,r=n=>{t.abort(n)};return this.subscribe(r),t.signal.unsubscribe=()=>this.unsubscribe(r),t.signal}static source(){let t;return{token:new Fe(function(o){t=o}),cancel:t}}}var Nn=Fe;function Pn(e){return function(r){return e.apply(null,r)}}function Ln(e){return l.isObject(e)&&e.isAxiosError===!0}const ke={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(ke).forEach(([e,t])=>{ke[t]=e});var _n=ke;function Lt(e){const t=new le(e),r=dt(le.prototype.request,t);return l.extend(r,le.prototype,t,{allOwnKeys:!0}),l.extend(r,t,null,{allOwnKeys:!0}),r.create=function(o){return Lt($(e,o))},r}const j=Lt(Le);j.Axios=le;j.CanceledError=J;j.CancelToken=Nn;j.isCancel=kt;j.VERSION=Pt;j.toFormData=me;j.AxiosError=b;j.Cancel=j.CanceledError;j.all=function(t){return Promise.all(t)};j.spread=Pn;j.isAxiosError=Ln;j.mergeConfig=$;j.AxiosHeaders=N;j.formToJSON=e=>Rt(l.isHTMLForm(e)?new FormData(e):e);j.getAdapter=Nt.getAdapter;j.HttpStatusCode=_n;j.default=j;var Fn=j,Dn="1.12.3",Un={version:Dn};const Bn=!1,zn=Un.version,it="v6.0",at=["v2","v3","v4","v5","v6","canary"],A="@tryghost/content-api",In=e=>{let t;return e==="v2"||e==="v3"||e==="v4"||e==="canary"?t=`/${e}/content/`:e&&e.match(/^v[2-4]\.\d+/)?t=`/${/^(v[2-4])\.\d+/.exec(e)[1]}/content/`:t="/content/",t},$n=({url:e,method:t,params:r,headers:n})=>Fn[t](e,{params:r,paramsSerializer:o=>Object.keys(o).reduce((s,i)=>{const a=encodeURIComponent([].concat(o[i]).join(","));return s.concat(`${i}=${a}`)},[]).join("&"),headers:n});function Ce({url:e,key:t,host:r,version:n,userAgent:o,ghostPath:s="ghost",makeRequest:i=$n}){if(r&&(console.warn(`${A}: The 'host' parameter is deprecated, please use 'url' instead`),e||(e=r)),this instanceof Ce)return Ce({url:e,key:t,version:n,userAgent:o,ghostPath:s,makeRequest:i});if(n===void 0)throw new Error(`${A} Config Missing: 'version' is required. E.g. ${at.join(",")}`);let a;if(typeof n=="boolean")n===!0&&(a=it),n=void 0;else{if(n&&!at.includes(n)&&!n.match(/^v\d+\.\d+/))throw new Error(`${A} Config Invalid: 'version' ${n} is not supported`);n==="canary"?(console.warn(`${A}: The 'version' parameter has a deprecated format 'canary', please use 'v{major}.{minor}' format instead`),a=it):n.match(/^v\d+$/)?(console.warn(`${A}: The 'version' parameter has a deprecated format 'v{major}', please use 'v{major}.{minor}' format instead`),a=`${n}.0`):a=n}if(!e)throw new Error(`${A} Config Missing: 'url' is required. E.g. 'https://site.com'`);if(!/https?:\/\//.test(e))throw new Error(`${A} Config Invalid: 'url' ${e} requires a protocol. E.g. 'https://site.com'`);if(e.endsWith("/"))throw new Error(`${A} Config Invalid: 'url' ${e} must not have a trailing slash. E.g. 'https://site.com'`);if(s.endsWith("/")||s.startsWith("/"))throw new Error(`${A} Config Invalid: 'ghostPath' ${s} must not have a leading or trailing slash. E.g. 'ghost'`);if(t&&!/[0-9a-f]{26}/.test(t))throw new Error(`${A} Config Invalid: 'key' ${t} must have 26 hex characters`);o===void 0&&(o=Bn);const p=["posts","authors","tags","pages","settings","tiers","newsletters","offers"].reduce((d,m)=>{function y(u={},g){return f(m,u,null,g)}function E(u,g={},h){if(!u||!u.id&&!u.slug)return Promise.reject(new Error(`${A} read requires an id or slug.`));const x=Object.assign({},u,g);return f(m,x,u.id||`slug/${u.slug}`,h)}return Object.assign(d,{[m]:{read:E,browse:y}})},{});return delete p.settings.read,delete p.tiers.read,delete p.newsletters.read,delete p.offers.browse,p;function f(d,m,y,E=null){if(!E&&!t)return Promise.reject(new Error(`${A} Config Missing: 'key' is required.`));delete m.id;const u=E?{Authorization:`GhostMembers ${E}`}:{};o&&(typeof o=="boolean"?u["User-Agent"]=`GhostContentSDK/${zn}`:u["User-Agent"]=o),a&&(u["Accept-Version"]=a),m=Object.assign({key:t},m);const g=`${e}/${s}/api${In(n)}${d}/${y?y+"/":""}`;return i({url:g,method:"get",params:m,headers:u}).then(h=>Array.isArray(h.data[d])?h.data[d].length===1&&!h.data.meta?h.data[d][0]:Object.assign(h.data[d],{meta:h.data.meta}):h.data[d]).catch(h=>{if(h.response&&h.response.data&&h.response.data.errors){const x=h.response.data.errors[0],S=new Error(x.message),v=Object.keys(x);throw S.name=x.type,v.forEach(R=>{S[R]=x[R]}),S.response=h.response,S.request=h.request,S.config=h.config,S}else throw h})}}const Mn="https://ghost.russheritage.com",qn="ada6f50f413b67e176bb7c9598";let Y;try{Y=new Ce({url:Mn,key:qn,version:"v5.0"})}catch(e){console.error("Failed to initialize Ghost API:",e)}async function Hn(){return Y?await Y.posts.browse({limit:"all",include:"tags,authors"}).catch(e=>(console.error(e),[])):[]}async function io(e){return Y?await Y.posts.read({slug:e},{include:"tags,authors"}).catch(t=>(console.error(t),null)):null}const _t=()=>{const[e,t]=w.useState([]),[r,n]=w.useState(!0);w.useEffect(()=>{async function s(){n(!0);const i=await Hn();t(i),n(!1)}s()},[]);const o=e.filter(s=>s.slug);return r?c.jsx("section",{id:"writing",style:{backgroundColor:"#f0f0ee",margin:"0 -9999px",padding:"8rem 9999px",scrollMarginTop:"100px"},children:c.jsx("div",{className:"blog-list",children:[1,2,3].map(s=>c.jsx("div",{className:"blog-card-skeleton",children:c.jsxs("div",{style:{display:"flex",gap:"2rem",alignItems:"center",padding:"2rem 0.5rem"},children:[c.jsx("div",{style:{width:"3.5rem",height:"2rem",backgroundColor:"var(--skeleton-color)",borderRadius:"4px",flexShrink:0}}),c.jsxs("div",{style:{flex:1},children:[c.jsx("div",{style:{width:"60%",height:"1.1rem",backgroundColor:"var(--skeleton-color)",borderRadius:"4px",marginBottom:"0.5rem"}}),c.jsx("div",{style:{width:"90%",height:"0.8rem",backgroundColor:"var(--skeleton-color)",borderRadius:"4px"}})]}),c.jsx("div",{style:{width:"5rem",height:"0.7rem",backgroundColor:"var(--skeleton-color)",borderRadius:"4px",flexShrink:0}})]})},s))})}):c.jsxs("section",{id:"writing",style:{scrollMarginTop:"100px",backgroundColor:"#f0f0ee",margin:"0 -9999px",padding:"8rem 9999px"},children:[c.jsx("p",{className:"writing-section-label",children:"Writing"}),o.length>0?c.jsx("div",{className:"blog-list",children:o.map((s,i)=>{const a=String(i+1).padStart(2,"0"),p=new Date(s.published_at).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"});return c.jsx(G.div,{className:"blog-card",initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:i*.08},children:c.jsxs(ce,{to:`/blog/${s.slug}`,className:"blog-card-link",children:[c.jsx("span",{className:"blog-card-number",children:a}),c.jsxs("div",{className:"blog-card-body",children:[c.jsx("h3",{className:"blog-card-title",children:s.title}),s.excerpt&&c.jsx("p",{className:"blog-card-excerpt",children:s.excerpt.length>140?s.excerpt.substring(0,140)+"...":s.excerpt})]}),c.jsxs("div",{className:"blog-card-end",children:[c.jsx("span",{className:"blog-card-date",children:p}),c.jsx(Kt,{size:16,className:"blog-card-arrow"})]})]})},s.id)})}):c.jsx("div",{style:{textAlign:"center",padding:"4rem",border:"1px dashed var(--border-color)",maxWidth:"600px",margin:"0 auto"},children:c.jsx("p",{style:{color:"var(--sub-text-color)"},children:"No posts found."})}),c.jsx("style",{children:`
                .writing-section-label {
                    font-family: var(--font-heading);
                    font-size: 0.7rem;
                    font-weight: 500;
                    text-transform: uppercase;
                    letter-spacing: 0.2em;
                    color: var(--sub-text-color);
                    text-align: center;
                    margin-bottom: 3rem;
                }
                .blog-list {
                    max-width: 900px;
                    margin: 0 auto;
                    width: 100%;
                }
                .blog-card {
                    border-top: 1px solid rgba(0, 0, 0, 0.12);
                }
                .blog-card:last-child {
                    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
                }
                .blog-card-link {
                    display: flex;
                    align-items: center;
                    gap: 2rem;
                    text-decoration: none;
                    color: inherit;
                    padding: 2rem 0.5rem;
                    transition: padding-left 0.4s ease;
                }
                .blog-card:hover .blog-card-link {
                    padding-left: 1.5rem;
                }
                .blog-card-link:focus-visible {
                    outline: 2px solid var(--accent-color);
                    outline-offset: -2px;
                }
                .blog-card-skeleton {
                    border-top: 1px solid rgba(0, 0, 0, 0.12);
                    padding: 2rem 0.5rem;
                }
                .blog-card-number {
                    font-family: var(--font-display);
                    font-size: clamp(2rem, 3vw, 2.8rem);
                    font-weight: 400;
                    color: rgba(0, 0, 0, 0.15);
                    letter-spacing: 0.02em;
                    flex-shrink: 0;
                    width: 3.5rem;
                    line-height: 1;
                    transition: color 0.4s ease;
                }
                .blog-card:hover .blog-card-number {
                    color: rgba(0, 0, 0, 0.6);
                }
                .blog-card:hover .blog-card-title {
                    color: var(--sub-text-color);
                }
                .blog-card-body {
                    flex: 1;
                    min-width: 0;
                }
                .blog-card-title {
                    font-family: var(--font-heading);
                    font-size: clamp(1.1rem, 1.8vw, 1.35rem);
                    font-weight: 500;
                    line-height: 1.3;
                    margin-bottom: 0.4rem;
                    letter-spacing: 0.02em;
                    transition: color 0.4s ease;
                }
                .blog-card-excerpt {
                    font-family: var(--font-body);
                    font-size: 0.85rem;
                    line-height: 1.5;
                    color: var(--sub-text-color);
                }
                .blog-card-end {
                    flex-shrink: 0;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-end;
                    gap: 0.75rem;
                }
                .blog-card-date {
                    font-family: var(--font-body);
                    font-size: 0.7rem;
                    text-transform: uppercase;
                    letter-spacing: 0.2em;
                    color: var(--sub-text-color);
                    white-space: nowrap;
                }
                .blog-card-arrow {
                    color: var(--sub-text-color);
                    transition: transform 0.3s ease, color 0.3s ease;
                }
                .blog-card:hover .blog-card-arrow {
                    transform: translate(3px, -3px);
                    color: var(--text-color);
                }
                @media (max-width: 600px) {
                    .blog-card-link {
                        flex-wrap: wrap;
                        gap: 0.75rem 1.25rem;
                        padding: 1.5rem 0.5rem;
                    }
                    .blog-card-number {
                        font-size: 1.8rem;
                        width: 2.5rem;
                    }
                    .blog-card-body {
                        flex-basis: calc(100% - 3.75rem);
                    }
                    .blog-card-title {
                        font-size: 1rem;
                    }
                    .blog-card-end {
                        flex-direction: row;
                        align-items: center;
                        width: 100%;
                        padding-left: 3.75rem;
                    }
                    .blog-card-excerpt {
                        display: none;
                    }
                }
            `})]})},Vn=({size:e=20,color:t="currentColor"})=>c.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:c.jsx("path",{d:"M19 12.0001C19 16.9707 14.9706 21.0001 10 21.0001H9.00003C6.46743 21.0001 4.36435 19.347 3.63583 17.0001M16.1213 14.1214C15.5587 14.6841 14.7813 15.0001 13.9852 15.0001C12.3284 15.0001 10.9852 13.657 10.9852 12.0001C10.9852 10.3433 12.3284 9.00012 13.9852 9.00012C14.7813 9.00012 15.5587 9.3162 16.1213 9.8788M19 12.0001C19 8.68641 16.3137 6.00012 13 6.00012C9.68629 6.00012 7 8.68641 7 12.0001C7 15.3138 9.68629 18.0001 13 18.0001C14.1687 18.0001 15.2642 17.6652 16.2071 17.0859M19 12.0001V8.50012"})}),Wn=({size:e=20,color:t="currentColor"})=>c.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:t,xmlns:"http://www.w3.org/2000/svg",children:c.jsx("path",{d:"M22.5399 9.61084V8.45785H1.46094V9.61084H22.5399ZM22.5399 2.05371V3.20671H1.46094V2.05371H22.5399ZM22.5399 11.6667V21.9463L11.9999 16.0527L1.46094 21.9463V11.6667H22.5399Z"})}),Jn=e=>{const t={size:20,color:"currentColor"};switch(e.toLowerCase()){case"instagram":return c.jsx(Xt,{...t});case"threads":return c.jsx(Vn,{...t});case"substack":return c.jsx(Wn,{...t});default:return null}},Kn=()=>{var r;const{content:e,loading:t}=Oe();return t?null:c.jsx("section",{id:"contact",className:"contact-section",style:{padding:"8rem 2rem",scrollMarginTop:"100px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",textAlign:"center",backgroundColor:"#111",color:"#fff",margin:"0 -9999px",paddingLeft:"9999px",paddingRight:"9999px"},children:c.jsxs(G.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6},children:[c.jsx("p",{className:"contact-section-label",style:{fontSize:"0.7rem",textTransform:"uppercase",letterSpacing:"0.2em",marginBottom:"3rem",color:"rgba(255, 255, 255, 0.4)",fontWeight:500,fontFamily:"var(--font-heading)"},children:"Connect"}),c.jsx("p",{style:{fontSize:"0.8rem",textTransform:"uppercase",letterSpacing:"0.2em",marginBottom:"2.5rem",color:"rgba(255, 255, 255, 0.5)",fontWeight:500},children:"Interested in working together?"}),c.jsx("a",{href:`mailto:${(r=e.socials.find(n=>n.name==="Email"))==null?void 0:r.url.replace("mailto:","")}`,style:{fontFamily:"var(--font-display)",fontSize:"clamp(2.2rem, 5vw, 3.8rem)",fontWeight:400,fontStyle:"italic",textDecoration:"none",color:"#fff",lineHeight:1,letterSpacing:"0.02em"},className:"contact-link",children:"Let's Create Something"}),c.jsx("style",{children:`
                    .contact-link {
                        position: relative;
                        transition: letter-spacing 0.5s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.3s;
                    }
                    .contact-link:hover {
                        letter-spacing: 0.06em;
                    }
                    .contact-link::after {
                        content: '';
                        position: absolute;
                        bottom: -4px;
                        left: 0;
                        width: 100%;
                        height: 1px;
                        background: currentColor;
                        transform: scaleX(0);
                        transform-origin: right;
                        transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
                    }
                    .contact-link:hover::after,
                    .contact-link:focus-visible::after {
                        transform: scaleX(1);
                        transform-origin: left;
                    }
                `}),c.jsx("div",{className:"contact-socials",style:{marginTop:"4rem",display:"flex",gap:"3rem",justifyContent:"center",flexWrap:"wrap"},children:e.socials.map(n=>n.name!=="Email"&&c.jsxs("a",{href:n.url,target:"_blank",rel:"noopener noreferrer",style:{color:"rgba(255, 255, 255, 0.6)",transition:"opacity 0.2s",display:"flex",alignItems:"center",gap:"0.8rem",textDecoration:"none",fontSize:"0.85rem",fontWeight:500,letterSpacing:"0.1em"},className:"social-icon-link",children:[Jn(n.name),c.jsx("span",{children:n.name})]},n.name))}),c.jsx("style",{children:`
                    .social-icon-link:hover {
                        opacity: 0.6;
                    }
                    @media (max-width: 600px) {
                        .contact-socials {
                            gap: 2rem !important;
                        }
                    }
                `})]})})},Xn=w.lazy(()=>H(()=>import("./VibeShowcase-D-5eZ_Z7.js"),__vite__mapDeps([0,1,2,3]))),Gn=w.lazy(()=>H(()=>import("./BlogPost-rLooxQfX.js"),__vite__mapDeps([4,1,2,5]))),Yn=w.lazy(()=>H(()=>import("./Portfolio-DhbnEwZ0.js"),__vite__mapDeps([6,1,2]))),Zn=w.lazy(()=>H(()=>import("./CategoryGallery-BK0Ecl-N.js"),__vite__mapDeps([7,1,2,5,3]))),Qn=w.lazy(()=>H(()=>import("./About-DXLlyJsN.js"),__vite__mapDeps([8,1,2]))),eo=w.lazy(()=>H(()=>import("./NotFound-BQFy9B7M.js"),__vite__mapDeps([9,1,2]))),to=()=>c.jsx("div",{style:{minHeight:"60vh",display:"flex",justifyContent:"center",alignItems:"center",fontFamily:"var(--font-heading)",fontSize:"1rem",textTransform:"uppercase",letterSpacing:"0.1em",color:"var(--sub-text-color)"},children:"Loading..."}),ro=()=>c.jsxs(c.Fragment,{children:[c.jsx(er,{}),c.jsx(tr,{}),c.jsx(_t,{}),c.jsx(Kn,{})]});function no(){return c.jsx(Qt,{children:c.jsx(w.Suspense,{fallback:c.jsx(to,{}),children:c.jsxs(zt,{children:[c.jsx(U,{path:"/",element:c.jsx(ro,{})}),c.jsx(U,{path:"/portfolio",element:c.jsx(Yn,{})}),c.jsx(U,{path:"/portfolio/:categoryId",element:c.jsx(Zn,{})}),c.jsx(U,{path:"/vibe",element:c.jsx(Xn,{})}),c.jsx(U,{path:"/blog",element:c.jsx(_t,{})}),c.jsx(U,{path:"/blog/:slug",element:c.jsx(Gn,{})}),c.jsx(U,{path:"/about",element:c.jsx(Qn,{})}),c.jsx(U,{path:"*",element:c.jsx(eo,{})})]})})})}typeof window<"u"&&(console.log("%c RH ",'background: #000; color: #fff; font-size: 24px; font-family: "Cormorant Garamond", serif; font-style: italic; padding: 8px 16px;'),console.log(`%cPhotographer & Writer — Minneapolis / St. Paul
%cCurious about the code? Say hello → russheritage.com`,"color: #333; font-size: 12px; font-family: Montserrat, sans-serif; letter-spacing: 0.05em;","color: #999; font-size: 11px; font-family: Montserrat, sans-serif;"));ct(document.getElementById("root")).render(c.jsx(w.StrictMode,{children:c.jsx(Mt,{children:c.jsx($t,{children:c.jsx(It,{children:c.jsx(no,{})})})})}));export{Zt as X,V as c,io as g,Oe as u};
