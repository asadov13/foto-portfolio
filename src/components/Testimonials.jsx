import { useCallback, useEffect, useRef, useState } from "react";
import { motion, useMotionValue, animate } from "framer-motion";
import { testimonials } from "../data/projects";

const AUTO_SPEED = 22; // px per second — slow, ambient drift

export default function Testimonials() {
  const clipRef = useRef(null);
  const trackRef = useRef(null);
  const controlsRef = useRef(null);
  const [halfWidth, setHalfWidth] = useState(0);
  const x = useMotionValue(0);
  const doubled = [...testimonials, ...testimonials];

  useEffect(() => {
    const measure = () => {
      if (trackRef.current) {
        setHalfWidth(trackRef.current.scrollWidth / 2);
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const startAuto = useCallback(() => {
    if (!halfWidth) return;
    controlsRef.current?.stop();

    let from = x.get() % halfWidth;
    if (from > 0) from -= halfWidth;
    x.set(from);

    const distance = Math.abs(from + halfWidth);
    controlsRef.current = animate(x, from - halfWidth, {
      duration: distance / AUTO_SPEED,
      ease: "linear",
      onComplete: () => {
        x.set(x.get() + halfWidth);
        startAuto();
      },
    });
  }, [halfWidth, x]);

  useEffect(() => {
    startAuto();
    return () => controlsRef.current?.stop();
  }, [startAuto]);

  const pauseAuto = () => controlsRef.current?.stop();
  const resumeAuto = () => startAuto();

  return (
    <>
      <div
        className="t-carousel-clip"
        ref={clipRef}
        data-cursor="hover"
        onMouseEnter={pauseAuto}
        onMouseLeave={resumeAuto}
      >
        <motion.div
          className="t-track"
          ref={trackRef}
          style={{ x }}
          drag="x"
          dragConstraints={{ left: -halfWidth * 2, right: halfWidth }}
          dragElastic={0.08}
          onDragStart={pauseAuto}
          onDragEnd={resumeAuto}
          whileTap={{ cursor: "grabbing" }}
        >
          {doubled.map((t, i) => (
            <div className="t-card" key={i}>
              <p className="quote">"{t.quote}"</p>
              <div className="t-person">
                <span className="ph ph-1x1" />
                <div>
                  <strong>{t.name}</strong>
                  <span>{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
      <p className="muted mt-16" style={{ fontSize: 13 }}>← Drag to explore →</p>
    </>
  );
}
