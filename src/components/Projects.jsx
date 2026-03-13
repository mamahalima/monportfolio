import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import projects from "../data/projects.json";
import  techIcons  from "./Techicons";
import "../styles/pages/Projects.scss";

const LeftArrow = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
    <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" fill="none" />
  </svg>
);
const RightArrow = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
    <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" fill="none" />
  </svg>
);
const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-200px" });

  if (!projects?.length) return <p>Aucun projet disponible</p>;

  const nextProject = () =>
    setCurrentIndex(prev => (prev === projects.length - 1 ? 0 : prev + 1));
  const prevProject = () =>
    setCurrentIndex(prev => (prev === 0 ? projects.length - 1 : prev - 1));

  const project = projects[currentIndex];

  return (
    <div className="projects-page">
      <motion.section
        ref={sectionRef}className="projects-container"id="projects"aria-labelledby="projects-title"
        initial={{ opacity: 0, y: 50 }}animate={isInView ? { opacity: 1, y: 0 } : undefined}transition={{ duration: 0.7 }}>
        <h1 id="projects-title">Mes Projets</h1>
        <div className="slider">
          <button
            className="arrow left"onClick={prevProject}type="button"aria-label="Voir le projet précédent">
            <LeftArrow />
          </button>
          <div className="image-wrapper">
            <AnimatePresence mode="wait">
              <motion.div
                key={project.id}initial={{ opacity: 0, rotateY: 90 }}animate={{ opacity: 1, rotateY: 0 }}
                exit={{ opacity: 0, rotateY: -90 }}transition={{ duration: 0.8 }}>
                <img
                  src={project.image.small}srcSet={`${project.image.small} 350w, 
                  ${project.image.medium} 700w`} sizes="(max-width: 768px) 90vw, 350px"
                  width="350"height="167"alt={`Aperçu du projet ${project.title}`}
                  className="main-image"loading="lazy"decoding="async"/>
              </motion.div>
            </AnimatePresence>
            <span className="project-counter" aria-live="polite">
              {currentIndex + 1} / {projects.length}
            </span>
          </div>
          <button
            className="arrow right" onClick={nextProject}
            type="button"aria-label="Voir le projet suivant" >
            <RightArrow />
          </button>
        </div>
      </motion.section>
      <AnimatePresence mode="wait">
        <motion.section
          key={project.title}className="project-info"aria-labelledby="project-title"
          initial={{ opacity: 0, y: 30 }}animate={{ opacity: 1, y: 0 }}exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.4 }}>
          <h2 id="project-title">{project.title}</h2>
          <p>{project.description}</p>
          <ul className="tech-list" aria-label="Technologies utilisées">
            {project.tech.map((tech, index) => {
              const key = tech.name
                .toLowerCase().normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, "");
              const icon = techIcons[key] ?? null;
              return (
          <motion.li
             key={`${key}-${index}`}className="tech-item"tabIndex={0}
             aria-label={`Technologie ${tech.name}`}initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}transition={{ delay: index * 0.15 }}whileHover={{ scale: 1.15 }}>
            <motion.div
             animate={{ y: [0, -6, 0], rotate: [0, 3, -3, 0] }}
             transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}>
           {icon}
            </motion.div>
          <span>{tech.name}</span>
          </motion.li>
              );
            })}
          </ul>
        </motion.section>
      </AnimatePresence>
    </div>
  );
};

export default Projects;

