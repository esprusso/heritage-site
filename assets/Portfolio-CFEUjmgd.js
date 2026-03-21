import{j as o,m as i}from"./vendor-motion-JbGu3LFv.js";import{r as l,L as n}from"./vendor-react-CDFnBdCK.js";import{u as s}from"./index-4-QsQyt-.js";const p=()=>{const{content:t,loading:e}=s();return l.useEffect(()=>{window.scrollTo(0,0)},[]),e||!(t!=null&&t.portfolioCategories)?null:o.jsxs("section",{style:{maxWidth:"900px",margin:"0 auto",padding:"12rem 2rem 6rem",minHeight:"100vh"},children:[o.jsxs(i.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},style:{textAlign:"center",marginBottom:"5rem"},children:[o.jsx("h1",{style:{fontFamily:"var(--font-heading)",fontSize:"clamp(2.5rem, 5vw, 4rem)",fontWeight:500,textTransform:"uppercase",letterSpacing:"0.15em",marginBottom:"1rem"},children:"Portfolio"}),o.jsx("p",{style:{fontFamily:"var(--font-body)",fontSize:"1.1rem",color:"var(--sub-text-color)",maxWidth:"500px",margin:"0 auto"},children:"A curated collection of portrait, editorial, and fine art photography."})]}),o.jsx("div",{className:"portfolio-grid",children:t.portfolioCategories.map((r,a)=>o.jsx(i.div,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{delay:a*.1,duration:.5},children:o.jsxs(n,{to:`/portfolio/${r.id}`,className:"portfolio-category-card","aria-label":`View ${r.name} gallery`,children:[o.jsx("div",{className:"portfolio-card-image",children:o.jsx("img",{src:r.thumbnail,alt:r.name,loading:"lazy"})}),o.jsxs("div",{className:"portfolio-card-info",children:[o.jsx("h2",{className:"portfolio-card-title",children:r.name}),o.jsx("p",{className:"portfolio-card-desc",children:r.description}),o.jsxs("span",{className:"portfolio-card-count",children:[r.photos.length," ",r.photos.length===1?"image":"images"]})]})]})},r.id))}),o.jsx("style",{children:`
                .portfolio-grid {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 2rem;
                }
                .portfolio-category-card {
                    display: block;
                    text-decoration: none;
                    color: inherit;
                    border: 1px solid var(--border-color);
                    overflow: hidden;
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                    outline: none;
                }
                .portfolio-category-card:hover {
                    transform: translateY(-4px);
                    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.08);
                }
                .portfolio-category-card:focus-visible {
                    outline: 2px solid var(--accent-color);
                    outline-offset: 4px;
                }
                .portfolio-card-image {
                    overflow: hidden;
                }
                .portfolio-card-image img {
                    width: 100%;
                    height: auto;
                    display: block;
                    transition: transform 0.5s ease;
                }
                .portfolio-category-card:hover .portfolio-card-image img {
                    transform: scale(1.03);
                }
                .portfolio-card-info {
                    padding: 1.5rem;
                }
                .portfolio-card-title {
                    font-family: var(--font-heading);
                    font-size: 1.3rem;
                    font-weight: 500;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    margin-bottom: 0.5rem;
                }
                .portfolio-card-desc {
                    font-family: var(--font-body);
                    font-size: 0.95rem;
                    color: var(--sub-text-color);
                    line-height: 1.5;
                    margin-bottom: 0.75rem;
                }
                .portfolio-card-count {
                    font-family: var(--font-body);
                    font-size: 0.8rem;
                    color: var(--sub-text-color);
                    text-transform: uppercase;
                    letter-spacing: 0.08em;
                }
                @media (max-width: 600px) {
                    .portfolio-grid {
                        grid-template-columns: 1fr;
                    }
                }
            `})]})};export{p as default};
