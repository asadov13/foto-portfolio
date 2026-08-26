import { useRef } from "react";
import { motion, useSpring } from "framer-motion";

export default function Magnetic({ children, strength = 0.35, className = "" }) {
  const ref = useRef(null);
  const x = useSpring(0, { stiffness: 150, damping: 15, mass: 0.2 });
  const y = useSpring(0, { stiffness: 150, damping: 15, mass: 0.2 });

  const handleMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) * strength);
    y.set((e.clientY - rect.top - rect.height / 2) * strength);
  };
  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ x, y, display: "inline-block" }}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      whileTap={{ scale: 0.94 }}
    >
      {children}
    </motion.div>
  );
}
