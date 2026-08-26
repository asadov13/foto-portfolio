import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence, useMotionValueEvent, useScroll } from "framer-motion";
import Magnetic from "./Magnetic";
import Logo from "./Logo";
import { site } from "../data/site";

const links = [
  { to: "/projects", label: "Portfolio" },
  { to: "/#services", label: "Xidmətlər" },
  { to: "/#contact", label: "Əlaqə" },
];

// Sayt açılanda loqo navbarın ORTASINDA dayanır, sonra sola sürüşür və
// menyu ilə düymə görünür. Bu, preloader-dəki loqonun davamı kimi işləyir.
const INTRO_HOLD = 1900; // ms — preloader tam yox olana qədər gözlə
const EASE = [0.76, 0, 0.24, 1];

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [intro, setIntro] = useState(() => !prefersReducedMotion());
  const [dx, setDx] = useState(null); // loqonun mərkəzə qədər olan məsafəsi (px)

  const navRef = useRef(null);
  const brandRef = useRef(null);
  const { scrollY } = useScroll();
  const location = useLocation();

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 20));
  useEffect(() => setMenuOpen(false), [location]);

  // Mobil menyu açıq olanda arxa fonun sürüşməsinin qarşısını alır.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  // Loqonun neçə piksel sağa sürüşməli olduğunu ölçürük.
  // useLayoutEffect ekrana çəkilməzdən əvvəl işləyir — ona görə "sıçrayış" olmur.
  useLayoutEffect(() => {
    const nav = navRef.current;
    const brand = brandRef.current;
    if (!nav || !brand) return;
    // Mobildə loqo onsuz da ortadadır — sürüşmə lazım deyil.
    const isMobile = window.matchMedia("(max-width: 860px)").matches;
    if (isMobile || prefersReducedMotion()) { setDx(0); return; }
    const brandCenter = brand.offsetLeft + brand.offsetWidth / 2;
    setDx(nav.clientWidth / 2 - brandCenter);
  }, []);

  useEffect(() => {
    if (!intro) return undefined;
    const t = setTimeout(() => setIntro(false), INTRO_HOLD);
    return () => clearTimeout(t);
  }, [intro]);

  const hidden = intro && dx !== 0;
  const fadeIn = (delay) => ({
    animate: { opacity: hidden ? 0 : 1, y: hidden ? -6 : 0 },
    transition: { duration: 0.5, ease: EASE, delay: hidden ? 0 : delay },
  });

  const brandInner = (
    <Link to="/" className="brand" aria-label="Ana səhifə" data-cursor="hover">
      <Logo height={34} />
    </Link>
  );

  return (
    <>
      <header className="site-header">
        <motion.div
          className="nav-inner-bg"
          initial={false}
          animate={{ opacity: scrolled ? 1 : 0 }}
          transition={{ duration: 0.35 }}
        />
        <div className="container nav-inner" ref={navRef}>
          <span className="nav-spacer" aria-hidden="true" />

          {dx === null ? (
            // Ölçmə mərhələsi — bu variant heç vaxt ekrana çıxmır.
            <div className="brand-slot" ref={brandRef}>{brandInner}</div>
          ) : (
            <motion.div
              className="brand-slot"
              ref={brandRef}
              initial={{ x: dx }}
              animate={{ x: intro ? dx : 0 }}
              transition={{ duration: 0.9, ease: EASE }}
            >
              {brandInner}
            </motion.div>
          )}

          <motion.nav className="nav-links" initial={false} {...fadeIn(0.45)}>
            {links.map((l) => (
              <Link key={l.to} to={l.to} data-cursor="hover">
                {l.label}
              </Link>
            ))}
          </motion.nav>

          <motion.div className="nav-cta" initial={false} {...fadeIn(0.55)}>
            <Magnetic>
              <a href={site.whatsapp} target="_blank" rel="noreferrer" className="btn btn-primary" data-cursor="hover">
                Çəkiliş Sifariş Et
              </a>
            </Magnetic>
          </motion.div>

          <motion.button
            className="hamburger"
            aria-label={menuOpen ? "Menyunu bağla" : "Menyunu aç"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            data-cursor="hover"
            initial={false}
            animate={{ opacity: intro ? 0 : 1 }}
            transition={{ duration: 0.5, ease: EASE, delay: intro ? 0 : 0.35 }}
          >
            <motion.span animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 7 : 0 }} />
            <motion.span animate={{ opacity: menuOpen ? 0 : 1 }} />
            <motion.span animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -7 : 0 }} />
          </motion.button>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at 100% 0%)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            {[...links, { to: site.whatsapp, label: "Çəkiliş Sifariş Et", external: true }].map((l, i) =>
              l.external ? (
                <motion.a
                  key={l.to}
                  href={l.to}
                  target="_blank"
                  rel="noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0, transition: { delay: 0.15 + i * 0.06 } }}
                >
                  {l.label}
                </motion.a>
              ) : (
                <motion.div
                  key={l.to}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0, transition: { delay: 0.15 + i * 0.06 } }}
                >
                  <Link to={l.to}>{l.label}</Link>
                </motion.div>
              )
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
