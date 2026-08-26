import { motion } from "framer-motion";

const easeOut = [0.16, 1, 0.3, 1];

export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.08, ease: easeOut },
  }),
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.09, delayChildren: 0.05 },
  },
};

export default function Reveal({ children, className = "", i = 0, as = "div", ...rest }) {
  const Comp = motion[as] || motion.div;
  return (
    <Comp
      className={className}
      custom={i}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
      {...rest}
    >
      {children}
    </Comp>
  );
}

export function RevealGroup({ children, className = "", ...rest }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainer}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
