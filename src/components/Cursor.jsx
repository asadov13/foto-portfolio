import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Cursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 });
  const [mode, setMode] = useState(null); // null | 'hover' | 'view'
  const isTouch = useRef(false);

  useEffect(() => {
    isTouch.current = window.matchMedia("(hover: none)").matches;
    if (isTouch.current) return;

    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const over = (e) => {
      const el = e.target.closest("[data-cursor]");
      setMode(el ? el.getAttribute("data-cursor") : null);
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, [x, y]);

  if (isTouch.current) return null;

  return (
    <motion.div
      className="cursor-ring"
      style={{ x: springX, y: springY }}
      animate={{
        width: mode === "view" ? 64 : mode === "hover" ? 40 : 16,
        height: mode === "view" ? 64 : mode === "hover" ? 40 : 16,
        marginLeft: mode === "view" ? -32 : mode === "hover" ? -20 : -8,
        marginTop: mode === "view" ? -32 : mode === "hover" ? -20 : -8,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
    >
      <motion.span
        className="cursor-label"
        animate={{ opacity: mode === "view" ? 1 : 0 }}
      >
        Bax
      </motion.span>
    </motion.div>
  );
}
