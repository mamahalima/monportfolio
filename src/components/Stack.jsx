import React ,{ useRef }from "react";
import "../styles/components/Stack.scss";
import stackData from "../data/stack.json";
import { motion,useInView } from "framer-motion";

const Stack = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <motion.section
    ref={ref}
    className="stack-section"id="stack-section"
    aria-labelledby="stack-title"initial={{ opacity: 0, y: 50 }}
    animate={isInView ? { opacity: 1, y: 0 } : {}}transition={{ duration: 0.7 }}>
      <h2 id="stack-title">Stack</h2>
      <div className="stack-list" role="list">
      {stackData.stack.map((tech) => (
  <div
    className="stack-card"key={tech.id}
    tabIndex="0"role="listitem"
    aria-label={`Technologie ${tech.name}`}>
    <img
  src={tech.icons.small}
  srcSet={`
    ${tech.icons.small} 60w,
    ${tech.icons.large} 120w
  `}
  sizes="60px"width="60"height="60" alt={tech.name}
  loading="lazy"decoding="async"/>
    <span>{tech.name}</span>
  </div>
))}
    </div>
    </motion.section>
  );
};
export default Stack;