import { useState } from "react";
import { motion } from "framer-motion";
import { faqs } from "../data/projects";

export default function FAQAccordion() {
  const [open, setOpen] = useState(null);
  return (
    <div className="faq-list">
      {faqs.map((f, i) => {
        const isOpen = open === i;
        return (
          <div className={`faq-item ${isOpen ? "open" : ""}`} key={i}>
            <button className="faq-q" onClick={() => setOpen(isOpen ? null : i)} data-cursor="hover">
              {f.q}
              <span className="faq-icon">
                <motion.span
                  style={{ position: "absolute", top: "50%", left: "50%", x: "-50%", y: "-50%", width: 1.6, height: 14, background: "currentColor" }}
                  animate={{ rotate: isOpen ? 90 : 0, opacity: isOpen ? 0 : 1 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                />
              </span>
            </button>
            <motion.div
              initial={false}
              animate={{ height: isOpen ? "auto" : 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              style={{ overflow: "hidden" }}
            >
              <p className="faq-a-inner">{f.a}</p>
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}
