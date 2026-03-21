import{j as t,m as h,A as N}from"./vendor-motion-JbGu3LFv.js";import{d as T,r as n,L as j}from"./vendor-react-CDFnBdCK.js";import{u as I,X as P}from"./index-DsuaPsRt.js";import{A}from"./arrow-left-p1jdg0t6.js";import{C as B,a as D}from"./chevron-right-Bw4vYWk8.js";const F=(u,f)=>{const p=n.useRef(null),v=n.useCallback(o=>{p.current=o.touches[0].clientX},[]),g=n.useCallback(o=>{if(p.current===null)return;const a=p.current-o.changedTouches[0].clientX;Math.abs(a)>50&&(a>0?u():f()),p.current=null},[u,f]);return{onTouchStart:v,onTouchEnd:g}},M=()=>{var z;const{categoryId:u}=T(),{content:f,loading:p}=I(),[v,g]=n.useState(!1),[o,a]=n.useState(null),w=n.useRef(null),C=n.useRef(null),k=n.useRef(null);n.useEffect(()=>{window.scrollTo(0,0),g(!1),a(null)},[u]);const i=(z=f==null?void 0:f.portfolioCategories)==null?void 0:z.find(e=>e.id===u),l=n.useMemo(()=>i!=null&&i.modelGroups?i.modelGroups.flatMap(e=>e.photos):[],[i]),x=n.useCallback(()=>{a(null)},[]),y=n.useCallback(e=>{e==null||e.stopPropagation(),a(r=>(r+1)%l.length)},[l.length]),b=n.useCallback(e=>{e==null||e.stopPropagation(),a(r=>(r-1+l.length)%l.length)},[l.length]),E=F(y,b);if(n.useEffect(()=>{const e=r=>{o!==null&&(r.key==="Escape"&&x(),r.key==="ArrowRight"&&y(),r.key==="ArrowLeft"&&b())};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[o,y,b,x]),n.useEffect(()=>{var e;return o!==null?(document.body.style.overflow="hidden",requestAnimationFrame(()=>{var r;return(r=C.current)==null?void 0:r.focus()})):(document.body.style.overflow="",(e=w.current)==null||e.focus()),()=>{document.body.style.overflow=""}},[o]),n.useEffect(()=>{if(o===null||!k.current)return;const e=k.current,r=s=>{if(s.key!=="Tab")return;const c=e.querySelectorAll('button, [href], [tabindex]:not([tabindex="-1"])');if(c.length===0)return;const d=c[0],m=c[c.length-1];s.shiftKey&&document.activeElement===d?(s.preventDefault(),m.focus()):!s.shiftKey&&document.activeElement===m&&(s.preventDefault(),d.focus())};return e.addEventListener("keydown",r),()=>e.removeEventListener("keydown",r)},[o]),p)return null;if(!i)return t.jsxs("div",{style:{minHeight:"100vh",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",gap:"1rem",padding:"2rem"},children:[t.jsx("h2",{children:"Category not found"}),t.jsx(j,{to:"/portfolio",style:{textDecoration:"underline"},children:"Back to Portfolio"})]});if(i.nsfw&&!v)return t.jsx("div",{style:{minHeight:"100vh",display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"#111",padding:"2rem"},children:t.jsxs(h.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},style:{textAlign:"center",color:"#fff",maxWidth:"420px"},children:[t.jsx("h2",{style:{fontFamily:"var(--font-heading)",fontSize:"1.5rem",fontWeight:500,textTransform:"uppercase",letterSpacing:"0.1em",marginBottom:"1.5rem"},children:i.name}),t.jsx("p",{style:{fontFamily:"var(--font-body)",fontSize:"1rem",lineHeight:1.6,color:"rgba(255,255,255,0.7)",marginBottom:"2.5rem"},children:"This gallery contains artistic nudity. You must be 18+ to view."}),t.jsxs("div",{style:{display:"flex",gap:"1rem",justifyContent:"center"},children:[t.jsx(j,{to:"/portfolio",style:{fontFamily:"var(--font-heading)",fontSize:"0.85rem",fontWeight:500,textTransform:"uppercase",letterSpacing:"0.1em",color:"rgba(255,255,255,0.6)",textDecoration:"none",padding:"0.8rem 2rem",border:"1px solid rgba(255,255,255,0.2)",transition:"border-color 0.3s"},children:"Go Back"}),t.jsx("button",{onClick:()=>g(!0),style:{fontFamily:"var(--font-heading)",fontSize:"0.85rem",fontWeight:500,textTransform:"uppercase",letterSpacing:"0.1em",color:"#fff",backgroundColor:"transparent",padding:"0.8rem 2rem",border:"1px solid rgba(255,255,255,0.5)",cursor:"pointer",transition:"background-color 0.3s, border-color 0.3s"},onMouseEnter:e=>{e.target.style.backgroundColor="rgba(255,255,255,0.1)",e.target.style.borderColor="rgba(255,255,255,0.8)"},onMouseLeave:e=>{e.target.style.backgroundColor="transparent",e.target.style.borderColor="rgba(255,255,255,0.5)"},children:"Enter"})]})]})});let S=0;return t.jsxs("section",{className:"cat-gallery-section",style:{maxWidth:"1400px",margin:"0 auto",padding:"12rem 2rem 6rem",minHeight:"100vh"},children:[t.jsxs(j,{to:"/portfolio",style:{display:"inline-flex",alignItems:"center",gap:"0.5rem",marginBottom:"3rem",color:"var(--sub-text-color)",textDecoration:"none",textTransform:"uppercase",fontSize:"0.8rem",fontWeight:500,letterSpacing:"0.1em",fontFamily:"var(--font-heading)",transition:"color 0.3s ease"},className:"cat-back-link",children:[t.jsx(A,{size:16})," Back to Portfolio"]}),t.jsxs(h.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},style:{marginBottom:"4rem"},children:[t.jsx("h1",{style:{fontFamily:"var(--font-display)",fontSize:"clamp(2.5rem, 6vw, 4.5rem)",fontWeight:400,fontStyle:"italic",letterSpacing:"0.02em",marginBottom:"0.5rem"},children:i.name}),t.jsx("p",{style:{fontFamily:"var(--font-body)",fontSize:"1rem",color:"var(--sub-text-color)"},children:i.description})]}),t.jsx("div",{className:"model-groups",children:i.modelGroups.map((e,r)=>{const s=S;return S+=e.photos.length,t.jsxs(h.div,{className:"model-row",initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6,delay:r*.05,ease:[.16,1,.3,1]},children:[t.jsx("div",{className:"model-headline",children:t.jsx("span",{className:"model-name",children:e.model})}),t.jsx("div",{className:"model-photos",children:e.photos.map((c,d)=>t.jsx("div",{className:"model-photo-item",onClick:()=>{w.current=document.activeElement,a(s+d)},onKeyDown:m=>{(m.key==="Enter"||m.key===" ")&&(m.preventDefault(),w.current=m.currentTarget,a(s+d))},role:"button",tabIndex:0,"aria-label":`View photo ${d+1} of ${e.model}`,children:t.jsx("img",{src:c.src,alt:c.caption||`${e.model} – ${i.name} ${d+1}`,loading:"lazy"})},c.id))})]},e.model)})}),t.jsx(N,{children:o!==null&&t.jsxs(h.div,{ref:k,role:"dialog","aria-modal":"true","aria-label":`Photo ${o+1} of ${l.length}`,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:x,...E,style:{position:"fixed",top:0,left:0,width:"100vw",height:"100vh",backgroundColor:"rgba(0, 0, 0, 0.9)",display:"flex",justifyContent:"center",alignItems:"center",zIndex:1e3,padding:"2rem"},children:[t.jsx("button",{ref:C,onClick:x,"aria-label":"Close lightbox",style:{position:"absolute",top:"2rem",right:"2rem",background:"none",border:"none",color:"white",cursor:"pointer",zIndex:1001,padding:"0.5rem"},children:t.jsx(P,{size:32})}),t.jsx("button",{onClick:b,"aria-label":"Previous photo",className:"cat-nav-btn",style:{position:"absolute",left:"2rem",background:"none",border:"none",color:"white",cursor:"pointer",zIndex:1001,padding:"1rem"},children:t.jsx(B,{size:48})}),t.jsx(h.img,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.9},transition:{type:"spring",damping:25,stiffness:300},src:l[o].src,alt:l[o].caption||`${i.name} photograph ${o+1}`,onClick:e=>e.stopPropagation(),style:{maxWidth:"90vw",maxHeight:"90vh",objectFit:"contain",boxShadow:"0 20px 50px rgba(0,0,0,0.5)"}},o),t.jsx("button",{onClick:y,"aria-label":"Next photo",className:"cat-nav-btn",style:{position:"absolute",right:"2rem",background:"none",border:"none",color:"white",cursor:"pointer",zIndex:1001,padding:"1rem"},children:t.jsx(D,{size:48})}),t.jsx("div",{"aria-live":"polite","aria-atomic":"true",style:{position:"absolute",bottom:"2rem",left:"0",width:"100%",textAlign:"center",color:"rgba(255,255,255,0.8)",pointerEvents:"none"},children:t.jsxs("span",{style:{fontSize:"0.9rem",opacity:.6},children:[o+1," / ",l.length]})})]})}),t.jsx("style",{children:`
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
                    font-size: 0.8rem;
                    font-weight: 500;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    color: var(--sub-text-color);
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
                    .cat-nav-btn {
                        padding: 0.5rem !important;
                    }
                    .cat-nav-btn svg { width: 28px; height: 28px; }
                    .cat-gallery-section {
                        padding-top: 7rem !important;
                    }
                }
            `})]})};export{M as default};
