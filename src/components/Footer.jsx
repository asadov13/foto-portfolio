import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Reveal from "./Reveal";
import Logo from "./Logo";
import { site, socials } from "../data/site";

export default function Footer() {
  const activeSocials = socials.filter((s) => site[s.key]);

  return (
    <footer>
      <div className="container">
        <Reveal as="div" className="footer-tagline">
          <h2>Gəlin sizin hekayənizi birlikdə kadrla danışaq.</h2>
        </Reveal>
        <div className="footer-grid">
          <div className="footer-col">
            <span>Əlaqə</span>
            <a href={`mailto:${site.email}`} data-cursor="hover">{site.email}</a>
            <a href={site.whatsapp} target="_blank" rel="noreferrer" data-cursor="hover">Çəkiliş Sifariş Et</a>
          </div>
          <div className="footer-col">
            <span>Menyu</span>
            <Link to="/projects" data-cursor="hover">Portfolio</Link>
            <Link to="/#services" data-cursor="hover">Xidmətlər</Link>
            <Link to="/#contact" data-cursor="hover">Əlaqə</Link>
          </div>
          {activeSocials.length > 0 && (
            <div className="footer-col">
              <span>Sosial</span>
              <div className="social-icons">
                {activeSocials.map((s) => (
                  <motion.a
                    key={s.key}
                    href={site[s.key]}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.title}
                    title={s.title}
                    data-cursor="hover"
                    whileHover={{ rotate: -10, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  >
                    {s.label}
                  </motion.a>
                ))}
              </div>
            </div>
          )}
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} {site.name}</span>
          <span>{site.location}</span>
        </div>
        <div className="brand-signature" aria-hidden="true">
          <Logo title="" style={{ height: "auto", width: "100%" }} />
        </div>
      </div>
    </footer>
  );
}
