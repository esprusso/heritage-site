import{j as t,m as l}from"./vendor-motion-JbGu3LFv.js";import{r as c}from"./vendor-react-CDFnBdCK.js";import{u as p}from"./index-BUkye9RN.js";const h=()=>{var a,e;const{content:o,loading:i}=p();return c.useEffect(()=>{window.scrollTo(0,0)},[]),i||!o?null:t.jsxs("article",{className:"about-page",children:[t.jsxs(l.div,{className:"about-content",initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.6},children:[t.jsxs("div",{className:"about-intro",children:[t.jsxs("div",{className:"about-intro-text",children:[t.jsx("h1",{className:"about-title",children:"About"}),t.jsx("p",{className:"about-lede",children:o.about.text})]}),t.jsx("div",{className:"about-photo-wrap",children:t.jsx("img",{src:o.about.image,alt:`Portrait of ${((a=o.hero)==null?void 0:a.title)||"the photographer"}`,className:"about-photo"})})]}),(e=o.about.sections)==null?void 0:e.map((r,n)=>t.jsxs("div",{className:"about-section",children:[t.jsx("h2",{className:"about-section-title",children:r.title}),r.paragraphs.map((s,m)=>t.jsx("p",{children:s},m))]},n))]}),t.jsx("style",{children:`
                .about-page {
                    min-height: 100vh;
                }
                .about-content {
                    max-width: 960px;
                    margin: 0 auto;
                    padding: 8rem 2rem 8rem;
                }
                .about-intro {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 4rem;
                    align-items: start;
                    margin-bottom: 4rem;
                    padding-bottom: 3rem;
                    border-bottom: 1px solid var(--border-color);
                }
                .about-title {
                    font-family: var(--font-display);
                    font-size: clamp(2.5rem, 6vw, 4rem);
                    font-weight: 400;
                    font-style: italic;
                    color: var(--text-color);
                    margin-bottom: 1.5rem;
                    letter-spacing: 0.02em;
                }
                .about-lede {
                    font-family: var(--font-body);
                    font-size: 1.15rem;
                    line-height: 1.8;
                    color: var(--text-color);
                }
                .about-photo-wrap {
                    position: relative;
                }
                .about-photo {
                    width: 100%;
                    height: auto;
                    display: block;
                    object-fit: cover;
                }
                .about-section {
                    max-width: 680px;
                    margin-bottom: 3rem;
                }
                .about-section-title {
                    font-family: var(--font-heading);
                    font-size: 0.8rem;
                    font-weight: 500;
                    text-transform: uppercase;
                    letter-spacing: 0.2em;
                    margin-bottom: 1.25rem;
                    color: var(--sub-text-color);
                }
                .about-section p {
                    font-family: var(--font-body);
                    font-size: 1.05rem;
                    line-height: 1.8;
                    color: var(--text-color);
                    margin-bottom: 1.25rem;
                }
                @media (max-width: 700px) {
                    .about-content {
                        padding: 6rem 1.5rem 6rem;
                    }
                    .about-intro {
                        grid-template-columns: 1fr;
                        gap: 2rem;
                    }
                    .about-photo-wrap {
                        order: -1;
                    }
                }
            `})]})};export{h as default};
