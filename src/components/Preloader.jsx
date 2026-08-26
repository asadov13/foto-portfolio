import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";

export default function Preloader({ show }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1], delay: 0.15 } }}
        >
          <motion.div
            className="preloader-mark"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <Logo size={64} />
            <motion.span
              className="preloader-bar"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1] }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
