import{j as o,m as l}from"./vendor-motion-JbGu3LFv.js";import{r as d,L as f}from"./vendor-react-CDFnBdCK.js";import{u as m}from"./index-C7vxkVWk.js";const x=()=>{const{content:t,loading:n}=m();return d.useEffect(()=>{window.scrollTo(0,0)},[]),n||!(t!=null&&t.portfolioCategories)?null:o.jsxs("section",{className:"portfolio-page-section",style:{maxWidth:"1400px",margin:"0 auto",padding:"10rem 2rem 6rem",minHeight:"100vh"},children:[o.jsxs(l.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},style:{textAlign:"center",marginBottom:"4rem"},children:[o.jsx("h1",{style:{fontFamily:"var(--font-display)",fontSize:"clamp(3rem, 8vw, 6rem)",fontWeight:400,fontStyle:"italic",letterSpacing:"0.02em",marginBottom:"1rem"},children:"Portfolio"}),o.jsx("p",{style:{fontFamily:"var(--font-body)",fontSize:"1.1rem",color:"var(--sub-text-color)",maxWidth:"500px",margin:"0 auto"},children:"A curated collection of portrait, editorial, and fine art photography."})]}),o.jsx("div",{className:"portfolio-grid",children:t.portfolioCategories.map((r,e)=>{var i;const a=((i=r.modelGroups)==null?void 0:i.reduce((c,p)=>c+p.photos.length,0))??0,s=String(e+1).padStart(2,"0");return o.jsx(l.div,{className:"portfolio-card-wrapper",initial:{opacity:0,y:40},animate:{opacity:1,y:0},transition:{delay:e*.12,duration:.6},children:o.jsxs(f,{to:`/portfolio/${r.id}`,className:"portfolio-category-card","aria-label":`View ${r.name} gallery`,children:[o.jsx("img",{src:r.thumbnail,alt:r.name,loading:"lazy",className:"portfolio-card-img"}),o.jsx("div",{className:"portfolio-card-overlay"}),o.jsx("div",{className:"portfolio-card-frame"}),o.jsx("span",{className:"portfolio-card-number",children:s}),o.jsxs("div",{className:"portfolio-card-content",children:[o.jsx("div",{className:"portfolio-card-rule"}),o.jsx("h2",{className:"portfolio-card-title",children:r.name}),o.jsxs("span",{className:"portfolio-card-count",children:[a," ",a===1?"image":"images"]})]})]})},r.id)})}),o.jsx("style",{children:`
                .portfolio-grid {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 1rem;
                }
                .portfolio-card-wrapper {
                    position: relative;
                }
                .portfolio-category-card {
                    position: relative;
                    display: block;
                    text-decoration: none;
                    color: #fff;
                    overflow: hidden;
                    height: clamp(420px, 62vh, 720px);
                    outline: none;
                }
                .portfolio-card-img {
                    position: absolute;
                    inset: 0;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    object-position: center 20%;
                    filter: saturate(0.85);
                    transition: transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94),
                                filter 0.6s ease;
                }
                .portfolio-card-overlay {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(
                        to top,
                        rgba(0, 0, 0, 0.65) 0%,
                        rgba(0, 0, 0, 0.1) 45%,
                        transparent 100%
                    );
                    transition: background 0.5s ease;
                }
                /* Inset border frame */
                .portfolio-card-frame {
                    position: absolute;
                    inset: 10px;
                    border: 1px solid rgba(255, 255, 255, 0.25);
                    z-index: 2;
                    pointer-events: none;
                    transition: inset 0.5s ease, border-color 0.5s ease;
                }
                /* Issue number top-left */
                .portfolio-card-number {
                    position: absolute;
                    top: 22px;
                    left: 22px;
                    font-family: var(--font-display);
                    font-size: 0.85rem;
                    font-weight: 400;
                    color: rgba(255, 255, 255, 0.5);
                    letter-spacing: 0.02em;
                    z-index: 3;
                    transition: color 0.4s ease;
                }
                .portfolio-card-content {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    padding: 2rem 1.75rem;
                    z-index: 3;
                }
                /* Decorative rule above title */
                .portfolio-card-rule {
                    width: 24px;
                    height: 1px;
                    background: rgba(255, 255, 255, 0.5);
                    margin-bottom: 0.75rem;
                    transition: width 0.5s ease, background 0.4s ease;
                }
                .portfolio-card-title {
                    font-family: var(--font-display);
                    font-size: clamp(1.1rem, 1.5vw, 1.5rem);
                    font-weight: 400;
                    font-style: italic;
                    text-transform: none;
                    letter-spacing: 0.03em;
                    margin-bottom: 0.5rem;
                    color: #fff;
                    line-height: 1.2;
                }
                .portfolio-card-count {
                    font-family: var(--font-body);
                    font-size: 0.7rem;
                    color: rgba(255, 255, 255, 0.45);
                    text-transform: uppercase;
                    letter-spacing: 0.2em;
                    display: block;
                    opacity: 0;
                    transform: translateY(6px);
                    transition: opacity 0.4s ease 0.1s, transform 0.4s ease 0.1s;
                }
                /* Hover effects */
                .portfolio-category-card:hover .portfolio-card-img {
                    transform: scale(1.06);
                    filter: saturate(1.1);
                }
                .portfolio-category-card:hover .portfolio-card-overlay {
                    background: linear-gradient(
                        to top,
                        rgba(0, 0, 0, 0.8) 0%,
                        rgba(0, 0, 0, 0.25) 50%,
                        rgba(0, 0, 0, 0.05) 100%
                    );
                }
                .portfolio-category-card:hover .portfolio-card-frame {
                    inset: 14px;
                    border-color: rgba(255, 255, 255, 0.45);
                }
                .portfolio-category-card:hover .portfolio-card-number {
                    color: rgba(255, 255, 255, 0.8);
                }
                .portfolio-category-card:hover .portfolio-card-rule {
                    width: 48px;
                    background: rgba(255, 255, 255, 0.8);
                }
                .portfolio-category-card:hover .portfolio-card-count {
                    opacity: 1;
                    transform: translateY(0);
                }
                .portfolio-category-card:focus-visible {
                    outline: 2px solid #fff;
                    outline-offset: -4px;
                }
                @media (max-width: 900px) {
                    .portfolio-grid {
                        grid-template-columns: repeat(2, 1fr);
                    }
                    .portfolio-category-card {
                        height: clamp(320px, 50vh, 520px);
                    }
                }
                @media (max-width: 550px) {
                    .portfolio-grid {
                        grid-template-columns: 1fr;
                        gap: 0.75rem;
                    }
                    .portfolio-category-card {
                        height: clamp(280px, 45vh, 400px);
                    }
                    .portfolio-card-content {
                        padding: 1.5rem 1.25rem;
                    }
                    .portfolio-card-title {
                        font-size: 1.25rem;
                    }
                    .portfolio-card-count {
                        opacity: 1;
                        transform: translateY(0);
                    }
                    .portfolio-page-section {
                        padding-top: 7rem !important;
                    }
                }
            `})]})};export{x as default};
