import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import skillsData from "../data/skills.json";
import "../styles/pages/Profile.scss";

const Skills = () => {
  const ref = useRef(null);

  const isInView = useInView(ref, { once: false, margin: "-100px" });

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateY = (x / rect.width - 0.5) * 20;
    const rotateX = (0.5 - y / rect.height) * 20;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  };

  const resetCard = (e) => {
    e.currentTarget.style.transform = "rotateX(0) rotateY(0) scale(1)";
  };

  return (
    <section
      ref={ref}className="profile"id="profile"aria-labelledby="skills-title">
      <h1 id="skills-title">Compétences</h1>
      <div className="skills-section">
        {skillsData.skillsFrontend.map((cat, i) => (
          <motion.div
            key={i} className="skill-card"onMouseMove={handleMouseMove}
            onMouseLeave={resetCard} initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.2 }}tabIndex="0"
            aria-label={`Catégorie de compétences ${cat.category}`} >
            <h2>{cat.category}</h2>
            <ul>
              {cat.skills.map((s, j) => (
                <li key={j}>{s}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
  