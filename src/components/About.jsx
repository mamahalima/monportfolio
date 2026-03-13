import React from "react";
import { motion } from "framer-motion";

const text = `Issue d'un parcours professionnel différent, j'ai découvert le
développement web par curiosité pour le numérique. Apprendre à
coder et voir mes projets prendre vie est devenu une évidence.
Aujourd'hui, je prends plaisir à concevoir et développer des
applications modernes, en transformant des idées en expériences
interactives.`;

const About = () => {
  return (
    <section
      className="about-me"
      aria-labelledby="about-title">
      <div className="about-container">
        <div className="about-text">
          <h2 id="about-title">À propos de moi</h2>
          <motion.p
            initial="hidden" whileInView="visible"
            viewport={{ once: false }}variants={{hidden: {},
              visible: {transition: {staggerChildren: 0.08}}}}>
            {text.split(" ").map((word, index) => (
              <motion.span
                key={index}
                style={{ marginRight: "6px", display: "inline-block" }}
                variants={{hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 }}}>{word}
              </motion.span>
            ))}
          </motion.p>
          <a
            href="#contact"className="contact-btn"
            aria-label="Aller à la section contact pour me contacter">Contactez-moi
          </a>
        </div>
        <div className="about-photo">
        <img
           src="/projets/profile_optimized1.webp"
           srcSet="/projets/profile_optimized1.webp 250w,
           /projets/profile_optimized2.webp 500w"      
           sizes="150px"width="150"height="225"
           alt="Portrait de Halima Amar, développeuse front-end"
           loading="eager"fetchpriority="high"decoding="async"/>
        </div>
      </div>
    </section>
  );
};
export default About;