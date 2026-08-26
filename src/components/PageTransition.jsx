import { motion } from "framer-motion";

const EASE = [0.76, 0, 0.24, 1];

/**
 * Səhifələr arası TƏK keçid animasiyası.
 * `label` verilsə (məsələn layihənin adı), pərdə çəkilməzdən əvvəl
 * həmin ad pərdənin üzərində qısa müddət görünür.
 */
export default function PageTransition({ children, label }) {
  const hasLabel = Boolean(label);
  // Ad göstəriləndə pərdə bir az gec açılır ki, mətn oxunmağa vaxt olsun.
  const curtainDelay = hasLabel ? 0.5 : 0;

  return (
    <motion.div className="page-shell">
      <motion.div
        className="curtain"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 0.62, ease: EASE, delay: curtainDelay }}
      />

      {hasLabel && (
        <motion.div
          className="curtain-label"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: EASE, delay: 0.58 }}
        >
          <span className="curtain-label-mask">
            <motion.span
              initial={{ y: "110%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 0.55, ease: EASE, delay: 0.05 }}
            >
              {label}
            </motion.span>
          </span>
        </motion.div>
      )}

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -16 }}
        transition={{ duration: 0.55, delay: curtainDelay + 0.18, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
