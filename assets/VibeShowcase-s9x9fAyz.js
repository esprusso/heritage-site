import{j as e,m as n,A as y}from"./vendor-motion-JbGu3LFv.js";import{r as a}from"./vendor-react-CDFnBdCK.js";import{u as S,X as C}from"./index-D9atLCS8.js";import{C as I,a as $}from"./chevron-right-DOd4PqqT.js";const P=()=>{const{content:c,loading:x}=S(),[i,h]=a.useState(null),[s,m]=a.useState(0),u=a.useRef(null),p=a.useRef(null),g=a.useRef(null);a.useEffect(()=>{var t;return i?(document.body.style.overflow="hidden",requestAnimationFrame(()=>{var o;(o=p.current)==null||o.focus()})):(document.body.style.overflow="",(t=g.current)==null||t.focus()),()=>{document.body.style.overflow=""}},[i]);const f=a.useCallback(()=>{h(null)},[]);if(a.useEffect(()=>{if(!i)return;const t=o=>{var r,l;o.key==="Escape"&&f(),o.key==="ArrowRight"&&((r=i.media)==null?void 0:r.length)>1&&m(d=>(d+1)%i.media.length),o.key==="ArrowLeft"&&((l=i.media)==null?void 0:l.length)>1&&m(d=>(d-1+i.media.length)%i.media.length)};return window.addEventListener("keydown",t),()=>window.removeEventListener("keydown",t)},[i,f]),a.useEffect(()=>{if(!i||!u.current)return;const t=u.current,o=r=>{if(r.key!=="Tab")return;const l=t.querySelectorAll('button, a, [tabindex]:not([tabindex="-1"])');if(l.length===0)return;const d=l[0],b=l[l.length-1];r.shiftKey&&document.activeElement===d?(r.preventDefault(),b.focus()):!r.shiftKey&&document.activeElement===b&&(r.preventDefault(),d.focus())};return t.addEventListener("keydown",o),()=>t.removeEventListener("keydown",o)},[i]),x||!(c!=null&&c.vibe)||c.vibe.length===0)return e.jsx("div",{style:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center"},role:"status",children:e.jsx("p",{style:{fontFamily:"var(--font-heading)",letterSpacing:"0.1em",textTransform:"uppercase"},children:x?"Loading Vibe...":"No Vibe Projects Found"})});const j=c.vibe,w=t=>{t.stopPropagation(),i&&m(o=>(o+1)%i.media.length)},k=t=>{t.stopPropagation(),i&&m(o=>(o-1+i.media.length)%i.media.length)},v=(t,o)=>{g.current=o,h(t),m(0)};return e.jsxs("section",{id:"vibe-showcase",style:{minHeight:"100vh",padding:"8rem 2rem 4rem",backgroundColor:"var(--bg-color)",color:"var(--text-color)"},children:[e.jsx("style",{children:`
                .vibe-card {
                    border: 1px solid var(--border-color);
                    transition: transform 0.3s ease;
                    cursor: pointer;
                    overflow: hidden;
                    display: flex;
                    flex-direction: column;
                    height: 100%;
                    outline: none;
                }
                .vibe-card:hover,
                .vibe-card:focus-visible {
                    transform: translateY(-4px);
                }
                .vibe-card:focus-visible {
                    outline: 2px solid var(--accent-color);
                    outline-offset: 4px;
                }
                .vibe-card-content {
                    padding: 1.5rem;
                    flex-grow: 1;
                    display: flex;
                    flex-direction: column;
                }
                .vibe-tag {
                    border: 1px solid var(--border-color);
                    padding: 0.3rem 0.8rem;
                    font-size: 0.75rem;
                    font-weight: 500;
                    color: var(--sub-text-color);
                    display: inline-block;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                }
                .vibe-nav-btn {
                    background: var(--bg-color);
                    border: 1px solid var(--border-color);
                    width: 44px;
                    height: 44px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    color: var(--text-color);
                    transition: background 0.2s ease;
                }
                .vibe-nav-btn:hover {
                    background: var(--border-color);
                }
                .vibe-nav-btn:focus-visible {
                    outline: 2px solid var(--accent-color);
                    outline-offset: 4px;
                }
                .vibe-close-btn {
                    background: none;
                    border: none;
                    cursor: pointer;
                    color: var(--text-color);
                    padding: 0.5rem;
                    transition: opacity 0.2s ease;
                }
                .vibe-close-btn:hover {
                    opacity: 0.6;
                }
                .vibe-close-btn:focus-visible {
                    outline: 2px solid var(--accent-color);
                    outline-offset: 4px;
                }
            `}),e.jsxs("div",{style:{maxWidth:"1200px",margin:"0 auto"},children:[e.jsxs(n.div,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.6},style:{textAlign:"center",marginBottom:"4rem"},children:[e.jsx("p",{style:{fontSize:"0.7rem",textTransform:"uppercase",letterSpacing:"0.25em",color:"var(--sub-text-color)",marginBottom:"1.5rem",fontWeight:500},children:"Side Projects"}),e.jsx("h1",{style:{fontFamily:"var(--font-heading)",fontSize:"clamp(2rem, 4vw, 3rem)",fontWeight:700,textTransform:"uppercase",letterSpacing:"-0.02em",color:"var(--text-color)"},children:"Vibe Coded"}),e.jsx("p",{style:{fontFamily:"var(--font-body)",fontSize:"1rem",color:"var(--sub-text-color)",maxWidth:"500px",margin:"1rem auto 0",lineHeight:1.6},children:"Application interfaces designed for immersive digital experiences."})]}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(300px, 1fr))",gap:"2rem"},children:j.map((t,o)=>e.jsxs(n.div,{layoutId:`card-${t.id}`,initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{delay:o*.1,duration:.5},className:"vibe-card",role:"button",tabIndex:0,"aria-label":`View project: ${t.title}`,onClick:r=>v(t,r.currentTarget),onKeyDown:r=>{(r.key==="Enter"||r.key===" ")&&(r.preventDefault(),v(t,r.currentTarget))},children:[e.jsx(n.div,{layoutId:`media-container-${t.id}`,style:{width:"100%",height:"240px",backgroundColor:"#f5f5f5",position:"relative",overflow:"hidden"},children:t.media&&t.media.length>0&&e.jsx(n.img,{layoutId:`image-${t.id}-0`,src:t.media[0].src,alt:`${t.title} preview`,loading:"lazy",style:{width:"100%",height:"100%",objectFit:"cover"}})}),e.jsxs(n.div,{layoutId:`content-${t.id}`,className:"vibe-card-content",children:[e.jsx(n.h3,{layoutId:`title-${t.id}`,style:{fontFamily:"var(--font-heading)",fontSize:"1.25rem",fontWeight:600,marginBottom:"0.8rem",color:"var(--text-color)"},children:t.title}),e.jsxs(n.p,{layoutId:`desc-${t.id}`,style:{fontSize:"0.9rem",color:"var(--sub-text-color)",marginBottom:"1.5rem",flexGrow:1,lineHeight:1.6},children:[t.description.substring(0,100),t.description.length>100?"...":""]}),t.techStack&&e.jsx(n.div,{layoutId:`tech-${t.id}`,style:{display:"flex",flexWrap:"wrap",gap:"0.5rem",marginTop:"auto"},children:t.techStack.map(r=>e.jsx("span",{className:"vibe-tag",children:r},r))})]})]},t.id))})]}),e.jsx(y,{children:i&&e.jsxs(e.Fragment,{children:[e.jsx(n.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.3},style:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(0, 0, 0, 0.6)",backdropFilter:"blur(4px)",zIndex:1e3},onClick:f,"aria-hidden":"true"}),e.jsxs(n.div,{ref:u,role:"dialog","aria-modal":"true","aria-label":`${i.title} project details`,layoutId:`card-${i.id}`,style:{position:"fixed",top:"5%",left:"5%",right:"5%",bottom:"5%",zIndex:1001,backgroundColor:"var(--bg-color)",border:"1px solid var(--border-color)",display:"flex",flexDirection:"column",overflow:"hidden"},children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"1.5rem 2rem",borderBottom:"1px solid var(--border-color)"},children:[e.jsx(n.h3,{layoutId:`title-${i.id}`,style:{fontFamily:"var(--font-heading)",fontSize:"1.5rem",fontWeight:600,color:"var(--text-color)",margin:0},children:i.title}),e.jsx("button",{ref:p,className:"vibe-close-btn",onClick:f,"aria-label":"Close project details",children:e.jsx(C,{size:24})})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"row",flexGrow:1,overflow:"auto",flexWrap:"wrap"},children:[e.jsx("div",{style:{flex:"1 1 60%",minWidth:"300px",padding:"2rem",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",backgroundColor:"#f5f5f5"},children:e.jsxs(n.div,{layoutId:`media-container-${i.id}`,style:{width:"100%",height:"60vh",maxHeight:"600px",position:"relative",overflow:"hidden"},children:[e.jsx(y,{mode:"wait",children:i.media&&i.media.length>0&&i.media[s].type==="image"&&e.jsx(n.img,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.3},src:i.media[s].src,alt:i.media[s].caption||i.title,style:{width:"100%",height:"100%",objectFit:"contain"}},`media-${s}`)}),i.media&&i.media.length>1&&e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{position:"absolute",top:"50%",left:"1rem",transform:"translateY(-50%)"},children:e.jsx("button",{className:"vibe-nav-btn",onClick:k,"aria-label":"Previous image",children:e.jsx(I,{size:20})})}),e.jsx("div",{style:{position:"absolute",top:"50%",right:"1rem",transform:"translateY(-50%)"},children:e.jsx("button",{className:"vibe-nav-btn",onClick:w,"aria-label":"Next image",children:e.jsx($,{size:20})})}),e.jsx("div",{"aria-live":"polite","aria-atomic":"true",style:{position:"absolute",bottom:"1rem",left:0,right:0,textAlign:"center"},children:e.jsx("span",{style:{background:"var(--bg-color)",padding:"0.4rem 0.8rem",fontSize:"0.8rem",fontWeight:500,color:"var(--sub-text-color)",border:"1px solid var(--border-color)",letterSpacing:"0.02em"},children:i.media[s].caption||`${s+1} / ${i.media.length}`})})]})]})}),e.jsx("div",{style:{flex:"1 1 40%",padding:"3rem",minWidth:"300px",display:"flex",flexDirection:"column"},children:e.jsxs(n.div,{layoutId:`content-${i.id}`,children:[e.jsx("h4",{style:{textTransform:"uppercase",letterSpacing:"0.15em",fontSize:"0.7rem",color:"var(--sub-text-color)",marginBottom:"1rem",fontWeight:500},children:"About Project"}),e.jsx(n.p,{layoutId:`desc-${i.id}`,style:{fontSize:"1rem",lineHeight:1.7,color:"var(--sub-text-color)",marginBottom:"3rem"},children:i.description}),i.techStack&&e.jsxs(e.Fragment,{children:[e.jsx("h4",{style:{textTransform:"uppercase",letterSpacing:"0.15em",fontSize:"0.7rem",color:"var(--sub-text-color)",marginBottom:"1rem",fontWeight:500},children:"Built With"}),e.jsx(n.div,{layoutId:`tech-${i.id}`,style:{display:"flex",flexWrap:"wrap",gap:"0.5rem"},children:i.techStack.map(t=>e.jsx("span",{className:"vibe-tag",style:{padding:"0.5rem 1rem",fontSize:"0.8rem"},children:t},t))})]})]})})]})]})]})})]})};export{P as default};
