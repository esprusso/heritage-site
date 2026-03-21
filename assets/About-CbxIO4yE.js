import{j as e,m as a}from"./vendor-motion-JbGu3LFv.js";import{r as n}from"./vendor-react-CDFnBdCK.js";import{u as r}from"./index-CBWGh5X-.js";const c=()=>{var o;const{content:t,loading:i}=r();return n.useEffect(()=>{window.scrollTo(0,0)},[]),i||!t?null:e.jsxs("article",{className:"about-page",children:[e.jsxs(a.header,{className:"about-header",initial:{opacity:0},animate:{opacity:1},transition:{duration:.8},children:[e.jsx("img",{src:t.about.image,alt:`Portrait of ${((o=t.hero)==null?void 0:o.title)||"the photographer"}`,className:"about-header-img"}),e.jsx("div",{className:"about-header-overlay"}),e.jsx("h1",{className:"about-header-title",children:"About"})]}),e.jsxs(a.div,{className:"about-content",initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.6,delay:.3},children:[e.jsx("div",{className:"about-intro",children:e.jsx("p",{className:"about-lede",children:t.about.text})}),e.jsxs("div",{className:"about-section",children:[e.jsx("h2",{className:"about-section-title",children:"The Work"}),e.jsx("p",{children:"My photography spans editorial, fine art, boudoir, and portraiture — but the thread connecting all of it is collaboration. Every session starts with a conversation, not a shot list. I'm interested in the space between direction and spontaneity, where something real emerges."}),e.jsx("p",{children:"I shoot primarily with natural and continuous light, favoring environments that bring out personality over controlled studio setups. The Twin Cities and surrounding areas offer an incredible range of locations, and I'm always looking for new ones."})]}),e.jsxs("div",{className:"about-section",children:[e.jsx("h2",{className:"about-section-title",children:"Working Together"}),e.jsx("p",{children:"I'm open to both TFP collaborations and commissioned work. If you're a model looking to build your portfolio, an artist with a creative concept, or someone who wants images that feel genuinely like you — I'd love to hear from you."}),e.jsx("p",{children:"I believe the best images happen when there's mutual trust and creative investment from both sides. That's why I take time to understand what you're looking for before we ever pick up a camera."})]}),e.jsxs("div",{className:"about-section",children:[e.jsx("h2",{className:"about-section-title",children:"Beyond the Lens"}),e.jsx("p",{children:"When I'm not shooting, I'm writing. My blog covers everything from the creative process to the culture around photography and the internet at large. I'm fascinated by how we present ourselves visually and what authenticity means in an era of constant curation."})]})]}),e.jsx("style",{children:`
                .about-page {
                    min-height: 100vh;
                }
                .about-header {
                    position: relative;
                    height: 50vh;
                    min-height: 350px;
                    overflow: hidden;
                    display: flex;
                    align-items: flex-end;
                    justify-content: flex-start;
                }
                .about-header-img {
                    position: absolute;
                    inset: 0;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    object-position: center 20%;
                }
                .about-header-overlay {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(
                        to top,
                        rgba(0, 0, 0, 0.6) 0%,
                        rgba(0, 0, 0, 0.1) 50%,
                        transparent 100%
                    );
                }
                .about-header-title {
                    position: relative;
                    z-index: 1;
                    font-family: var(--font-display);
                    font-size: clamp(3rem, 8vw, 6rem);
                    font-weight: 400;
                    font-style: italic;
                    color: #fff;
                    padding: 2rem 3rem;
                    letter-spacing: 0.02em;
                }
                .about-content {
                    max-width: 680px;
                    margin: 0 auto;
                    padding: 5rem 2rem 8rem;
                }
                .about-intro {
                    margin-bottom: 4rem;
                    padding-bottom: 3rem;
                    border-bottom: 1px solid var(--border-color);
                }
                .about-lede {
                    font-family: var(--font-body);
                    font-size: 1.35rem;
                    line-height: 1.8;
                    color: var(--text-color);
                }
                .about-section {
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
                @media (max-width: 600px) {
                    .about-header {
                        height: 40vh;
                    }
                    .about-header-title {
                        padding: 1.5rem;
                    }
                    .about-content {
                        padding: 3rem 1.5rem 6rem;
                    }
                }
            `})]})};export{c as default};
