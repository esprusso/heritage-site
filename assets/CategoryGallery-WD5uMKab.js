import{j as t,m as f,A as S}from"./vendor-motion-JbGu3LFv.js";import{d as I,r as i,L as b}from"./vendor-react-CDFnBdCK.js";import{u as N,X as P}from"./index-D0Rd_YZO.js";import{A}from"./arrow-left-lielb89s.js";import{C as L,a as T}from"./chevron-right-CB4g0Vqy.js";const W=()=>{var C;const{categoryId:v}=I(),{content:h,loading:z}=N(),[E,w]=i.useState(!1),[r,m]=i.useState(null),u=i.useRef(null),k=i.useRef(null),g=i.useRef(null);i.useEffect(()=>{window.scrollTo(0,0),w(!1),m(null)},[v]);const n=(C=h==null?void 0:h.portfolioCategories)==null?void 0:C.find(e=>e.id===v),a=i.useMemo(()=>n!=null&&n.modelGroups?n.modelGroups.flatMap(e=>e.photos):[],[n]),p=i.useCallback(()=>{m(null)},[]),x=i.useCallback(e=>{e==null||e.stopPropagation(),m(o=>(o+1)%a.length)},[a.length]),y=i.useCallback(e=>{e==null||e.stopPropagation(),m(o=>(o-1+a.length)%a.length)},[a.length]);if(i.useEffect(()=>{const e=o=>{r!==null&&(o.key==="Escape"&&p(),o.key==="ArrowRight"&&x(),o.key==="ArrowLeft"&&y())};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[r,x,y,p]),i.useEffect(()=>{var e;return r!==null?(document.body.style.overflow="hidden",requestAnimationFrame(()=>{var o;return(o=k.current)==null?void 0:o.focus()})):(document.body.style.overflow="",(e=u.current)==null||e.focus()),()=>{document.body.style.overflow=""}},[r]),i.useEffect(()=>{if(r===null||!g.current)return;const e=g.current,o=l=>{if(l.key!=="Tab")return;const s=e.querySelectorAll('button, [href], [tabindex]:not([tabindex="-1"])');if(s.length===0)return;const c=s[0],d=s[s.length-1];l.shiftKey&&document.activeElement===c?(l.preventDefault(),d.focus()):!l.shiftKey&&document.activeElement===d&&(l.preventDefault(),c.focus())};return e.addEventListener("keydown",o),()=>e.removeEventListener("keydown",o)},[r]),z)return null;if(!n)return t.jsxs("div",{style:{minHeight:"100vh",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",gap:"1rem",padding:"2rem"},children:[t.jsx("h2",{children:"Category not found"}),t.jsx(b,{to:"/portfolio",style:{textDecoration:"underline"},children:"Back to Portfolio"})]});if(n.nsfw&&!E)return t.jsx("div",{style:{minHeight:"100vh",display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"#111",padding:"2rem"},children:t.jsxs(f.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},style:{textAlign:"center",color:"#fff",maxWidth:"420px"},children:[t.jsx("h2",{style:{fontFamily:"var(--font-heading)",fontSize:"1.5rem",fontWeight:500,textTransform:"uppercase",letterSpacing:"0.1em",marginBottom:"1.5rem"},children:n.name}),t.jsx("p",{style:{fontFamily:"var(--font-body)",fontSize:"1rem",lineHeight:1.6,color:"rgba(255,255,255,0.7)",marginBottom:"2.5rem"},children:"This gallery contains artistic nudity. You must be 18+ to view."}),t.jsxs("div",{style:{display:"flex",gap:"1rem",justifyContent:"center"},children:[t.jsx(b,{to:"/portfolio",style:{fontFamily:"var(--font-heading)",fontSize:"0.85rem",fontWeight:500,textTransform:"uppercase",letterSpacing:"0.1em",color:"rgba(255,255,255,0.6)",textDecoration:"none",padding:"0.8rem 2rem",border:"1px solid rgba(255,255,255,0.2)",transition:"border-color 0.3s"},children:"Go Back"}),t.jsx("button",{onClick:()=>w(!0),style:{fontFamily:"var(--font-heading)",fontSize:"0.85rem",fontWeight:500,textTransform:"uppercase",letterSpacing:"0.1em",color:"#fff",backgroundColor:"transparent",padding:"0.8rem 2rem",border:"1px solid rgba(255,255,255,0.5)",cursor:"pointer",transition:"background-color 0.3s, border-color 0.3s"},onMouseEnter:e=>{e.target.style.backgroundColor="rgba(255,255,255,0.1)",e.target.style.borderColor="rgba(255,255,255,0.8)"},onMouseLeave:e=>{e.target.style.backgroundColor="transparent",e.target.style.borderColor="rgba(255,255,255,0.5)"},children:"Enter"})]})]})});let j=0;return t.jsxs("section",{style:{maxWidth:"1400px",margin:"0 auto",padding:"12rem 2rem 6rem",minHeight:"100vh"},children:[t.jsxs(b,{to:"/portfolio",style:{display:"inline-flex",alignItems:"center",gap:"0.5rem",marginBottom:"3rem",color:"var(--sub-text-color)",textDecoration:"none",textTransform:"uppercase",fontSize:"0.9rem",letterSpacing:"0.1em",fontFamily:"var(--font-heading)",transition:"color 0.3s ease"},className:"cat-back-link",children:[t.jsx(A,{size:16})," Back to Portfolio"]}),t.jsxs(f.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},style:{marginBottom:"4rem"},children:[t.jsx("h1",{style:{fontFamily:"var(--font-heading)",fontSize:"clamp(2rem, 4vw, 3rem)",fontWeight:500,textTransform:"uppercase",letterSpacing:"0.15em",marginBottom:"0.5rem"},children:n.name}),t.jsx("p",{style:{fontFamily:"var(--font-body)",fontSize:"1rem",color:"var(--sub-text-color)"},children:n.description})]}),t.jsx("div",{className:"model-groups",children:n.modelGroups.map((e,o)=>{const l=j;return j+=e.photos.length,t.jsxs(f.div,{className:"model-row",initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,delay:o*.05,ease:[.16,1,.3,1]},children:[t.jsx("div",{className:"model-headline",children:t.jsx("span",{className:"model-name",children:e.model})}),t.jsx("div",{className:"model-photos",children:e.photos.map((s,c)=>t.jsx("div",{className:"model-photo-item",onClick:()=>{u.current=document.activeElement,m(l+c)},onKeyDown:d=>{(d.key==="Enter"||d.key===" ")&&(d.preventDefault(),u.current=d.currentTarget,m(l+c))},role:"button",tabIndex:0,"aria-label":`View photo ${c+1} of ${e.model}`,children:t.jsx("img",{src:s.src,alt:s.caption||`${e.model} – ${n.name} ${c+1}`,loading:"lazy"})},s.id))})]},e.model)})}),t.jsx(S,{children:r!==null&&t.jsxs(f.div,{ref:g,role:"dialog","aria-modal":"true","aria-label":`Photo ${r+1} of ${a.length}`,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:p,style:{position:"fixed",top:0,left:0,width:"100vw",height:"100vh",backgroundColor:"rgba(0, 0, 0, 0.9)",display:"flex",justifyContent:"center",alignItems:"center",zIndex:1e3,padding:"2rem"},children:[t.jsx("button",{ref:k,onClick:p,"aria-label":"Close lightbox",style:{position:"absolute",top:"2rem",right:"2rem",background:"none",border:"none",color:"white",cursor:"pointer",zIndex:1001,padding:"0.5rem"},children:t.jsx(P,{size:32})}),t.jsx("button",{onClick:y,"aria-label":"Previous photo",className:"cat-nav-btn",style:{position:"absolute",left:"2rem",background:"none",border:"none",color:"white",cursor:"pointer",zIndex:1001,padding:"1rem"},children:t.jsx(L,{size:48})}),t.jsx(f.img,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.9},transition:{type:"spring",damping:25,stiffness:300},src:a[r].src,alt:a[r].caption||`${n.name} photograph ${r+1}`,onClick:e=>e.stopPropagation(),style:{maxWidth:"90vw",maxHeight:"90vh",objectFit:"contain",boxShadow:"0 20px 50px rgba(0,0,0,0.5)"}},r),t.jsx("button",{onClick:x,"aria-label":"Next photo",className:"cat-nav-btn",style:{position:"absolute",right:"2rem",background:"none",border:"none",color:"white",cursor:"pointer",zIndex:1001,padding:"1rem"},children:t.jsx(T,{size:48})}),t.jsx("div",{"aria-live":"polite","aria-atomic":"true",style:{position:"absolute",bottom:"2rem",left:"0",width:"100%",textAlign:"center",color:"rgba(255,255,255,0.8)",pointerEvents:"none"},children:t.jsxs("span",{style:{fontSize:"0.9rem",opacity:.6},children:[r+1," / ",a.length]})})]})}),t.jsx("style",{children:`
                .cat-back-link:hover { color: var(--text-color); }

                .model-groups {
                    display: flex;
                    flex-direction: column;
                    gap: 3rem;
                }

                .model-row {
                    display: flex;
                    align-items: stretch;
                    gap: 0;
                    border-top: 1px solid var(--border-color);
                }

                .model-headline {
                    flex-shrink: 0;
                    width: 200px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 2rem 1.5rem;
                    background: #f5f5f5;
                }

                .model-name {
                    font-family: var(--font-heading);
                    font-size: 0.85rem;
                    font-weight: 500;
                    text-transform: uppercase;
                    letter-spacing: 0.12em;
                    color: var(--sub-text-color);
                    writing-mode: horizontal-tb;
                    text-align: center;
                }

                .model-photos {
                    flex: 1;
                    display: flex;
                    gap: 0.5rem;
                    overflow-x: auto;
                    overflow-y: hidden;
                    padding: 0.5rem 0.5rem 0.5rem 0;
                    scrollbar-width: thin;
                    scrollbar-color: #ccc transparent;
                }

                .model-photos::-webkit-scrollbar {
                    height: 6px;
                }
                .model-photos::-webkit-scrollbar-thumb {
                    background: #ccc;
                    border-radius: 3px;
                }
                .model-photos::-webkit-scrollbar-track {
                    background: transparent;
                }

                .model-photo-item {
                    flex-shrink: 0;
                    height: 320px;
                    cursor: pointer;
                    outline: none;
                    overflow: hidden;
                }

                .model-photo-item:focus-visible {
                    outline: 2px solid var(--accent-color);
                    outline-offset: 2px;
                }

                .model-photo-item img {
                    height: 100%;
                    width: auto;
                    display: block;
                    object-fit: cover;
                    transition: filter 0.35s ease, transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
                }

                .model-photo-item:hover img {
                    filter: brightness(0.88);
                    transform: scale(1.03);
                }

                .cat-nav-btn {
                    opacity: 0.7;
                    transition: opacity 0.2s, transform 0.2s;
                }
                .cat-nav-btn:hover {
                    opacity: 1;
                    transform: scale(1.1);
                }
                .cat-nav-btn:focus-visible {
                    outline: 2px solid white;
                    outline-offset: 4px;
                    opacity: 1;
                }

                @media (max-width: 768px) {
                    .model-row {
                        flex-direction: column;
                    }
                    .model-headline {
                        width: 100%;
                        padding: 1.5rem 1rem;
                    }
                    .model-photos {
                        padding: 0.5rem;
                    }
                    .model-photo-item {
                        height: 260px;
                    }
                    .cat-nav-btn svg { width: 32px; height: 32px; }
                }
            `})]})};export{W as default};
