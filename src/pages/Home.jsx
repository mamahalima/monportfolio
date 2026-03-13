import React, { lazy, Suspense } from "react";
import "../styles/pages/Home.scss";

const About = lazy(() => import("../components/About"));
const Stack = lazy(() => import("../components/Stack"));
const Profile = lazy(() => import("../components/Profile"));
const Projects = lazy(() => import("../components/Projects"));
const Contact = lazy(() => import("../components/Contact"));

const Home = () => {
  return (
    <main>
      <section className="home-section" id="home-section">
        <div className="home-content">
          <div className="home-text">
            <h1>
              Hello !<br />
              Moi c'est Halima.<br />
              Développeuse Frontend
            </h1>
            <p>
              Je crée des interfaces modernes, interactives et performantes.
            </p>
          </div>
          <div className="home-image">
          <img
            src="/projets/illustrationdeveloppeuse.webp"
            srcSet="/projets/illustrationdeveloppeuse.webp 150w,
            /projets/illustrationdeveloppeuse_optimized.webp 300w"
            sizes="150px"width="150"height="100"
            alt="Portrait de Halima Amar, développeuse front-end"
            loading="eager"fetchpriority="high"decoding="async"/>
          </div>
        </div>
      </section>
      <About />
       <Suspense fallback={null}>
       <Stack />
      </Suspense>
      <Suspense fallback={null}>
      <Profile />
      </Suspense>
      <Suspense fallback={null}>
      <Projects />
      </Suspense>
      <Suspense fallback={null}>
      <Contact />
      </Suspense>
    </main>
  );
};
export default Home;