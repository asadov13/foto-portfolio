import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

const imageVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.03 },
};
const viewVariants = {
  rest: { opacity: 0, x: -8 },
  hover: { opacity: 1, x: 0 },
};

export default function ProjectCard({ project, i = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
    >
      <MotionLink
        to={`/projects/${project.slug}`}
        className="project-card"
        data-cursor="view"
        initial="rest"
        whileHover="hover"
        animate="rest"
      >
        <div className="ph-wrap">
          <motion.div
            className={`ph ph-${project.media?.cardRatio || "16x9"}`}
            variants={imageVariants}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            {project.media?.card && <img src={project.media.card} alt={project.title} />}
          </motion.div>
        </div>
        <div className="project-card-meta">
          <div>
            <h3>{project.title}</h3>
            <span className="tag">{project.tag}</span>
          </div>
          <motion.span className="view" variants={viewVariants} transition={{ duration: 0.35 }}>
            Layihəyə Bax →
          </motion.span>
        </div>
      </MotionLink>
    </motion.div>
  );
}
