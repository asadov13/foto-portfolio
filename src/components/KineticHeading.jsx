import { motion } from "framer-motion";

const easeOut = [0.16, 1, 0.3, 1];

export default function KineticHeading({ lines, className = "", opacities }) {
  return (
    <div className={className}>
      {lines.map((line, li) => (
        <h1 key={li} style={{ opacity: opacities ? opacities[li] : 1 }}>
          {line.split(" ").map((word, wi) => (
            <span className="word-mask" key={wi}>
              <motion.span
                style={{ display: "inline-block" }}
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{
                  duration: 0.9,
                  delay: 0.15 + li * 0.12 + wi * 0.05,
                  ease: easeOut,
                }}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </h1>
      ))}
    </div>
  );
}
