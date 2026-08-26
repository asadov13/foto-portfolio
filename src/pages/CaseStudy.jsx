import { useEffect, useLayoutEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import Reveal, { RevealGroup, fadeUp } from "../components/Reveal";
import ProjectCard from "../components/ProjectCard";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";
import KineticHeading from "../components/KineticHeading";
import { getProject, getNextProject } from "../data/projects";

export default function CaseStudy() {
  const { slug } = useParams();
  const project = getProject(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  useLayoutEffect(() => {
    if (!project) return;
    const cls = `theme-${project.theme}`;
    document.body.classList.add(cls);
    return () => document.body.classList.remove(cls);
  }, [project]);

  if (!project) return <Navigate to="/projects" replace />;

  const next = getNextProject(slug);
  const media = project.media || {};
  // Yalnız real foto/video olan bölmələr göstərilir — boş "yer tutucu" qutular çıxmır.
  const processShots = (media.process || []).filter(Boolean);
  const gallery = (media.gallery || []).filter(Boolean);

  return (
    <div>
      <section className="project-hero">
        <div className="container">
          <Reveal as="span" className="eyebrow" style={{ display: "block" }}>
            {project.category}
          </Reveal>
          <KineticHeading lines={[project.headline]} className="kinetic-md" />
          <Reveal className="meta" i={2}>
            <div><span>Müştəri</span>{project.client}</div>
            <div><span>İl</span>{project.year}</div>
            <div><span>Xidmətlər</span>{project.servicesShort}</div>
          </Reveal>
        </div>
      </section>

      <section style={{ paddingTop: 20 }}>
        <div className="container">
          <Reveal
            className={
              media.heroVideo
                ? "ph ph-9x16 hero-video hero-portrait"
                : media.heroRatio
                ? `ph ph-${media.heroRatio} hero-portrait`
                : "ph ph-21x9"
            }
          >
            {media.heroVideo ? (
              <video src={media.heroVideo} poster={media.card || undefined} autoPlay muted loop playsInline controls />
            ) : media.hero ? (
              <img src={media.hero} alt={project.headline} />
            ) : null}
          </Reveal>
        </div>
      </section>

      <section>
        <div className="container two-col">
          <Reveal>
            <span className="eyebrow">Ümumi Baxış</span>
            <h2>Konsepsiyadan reallığa</h2>
          </Reveal>
          <Reveal i={1}>
            <p>{project.overview}</p>
            {project.overviewQuote && <p className="mt-16 lead-quote">“{project.overviewQuote}”</p>}
            <div className="scope-tags">
              {project.scopeTags.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="container two-col">
          <Reveal>
            <span className="eyebrow">Məqsəd</span>
            <h3 style={{ fontSize: 26 }}>{project.objectiveTitle}</h3>
            <p className="mt-16">{project.objectiveText}</p>
          </Reveal>
          <Reveal i={1}>
            <span className="eyebrow">Hədəf</span>
            <h3 style={{ fontSize: 26 }}>{project.goalTitle}</h3>
            <p className="mt-16">{project.goalText}</p>
          </Reveal>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal>
            <span className="eyebrow">Hədəf Auditoriya</span>
            <p style={{ maxWidth: 640, fontSize: 18, color: "var(--text)" }}>{project.audience}</p>
          </Reveal>
        </div>
      </section>

      {media.overview && (
        <section>
          <div className="container">
            <Reveal className="ph ph-16x9">
              <img src={media.overview} alt={`${project.title} — ümumi görünüş`} />
            </Reveal>
          </div>
        </section>
      )}

      <section style={{ paddingTop: 0 }}>
        <div className="container two-col">
          <Reveal>
            <span className="eyebrow">Proses</span>
            <h3 style={{ fontSize: 26 }}>Çəkiliş prosesi</h3>
            <p className="mt-16">{project.processText}</p>
          </Reveal>
          <Reveal i={1}>
            <span className="eyebrow">Vizual İstiqamət</span>
            <h3 style={{ fontSize: 26 }}>{project.directionTitle}</h3>
            <p className="mt-16">{project.directionText}</p>
          </Reveal>
        </div>
      </section>

      {processShots.length > 0 && (
        <section style={{ paddingTop: 0 }}>
          <div className="container">
            <RevealGroup className="grid-2">
              {processShots.map((src, i) => (
                <motion.div className="ph ph-3x4" key={src} variants={fadeUp}>
                  <img src={src} alt={`${project.title} — proses ${i + 1}`} loading="lazy" />
                </motion.div>
              ))}
            </RevealGroup>
          </div>
        </section>
      )}

      {gallery.length > 0 && (
        <section style={{ paddingTop: 0 }}>
          <div className="container">
            <Reveal as="span" className="eyebrow" style={{ display: "block" }}>Seçilmiş Kadrlar</Reveal>
            <RevealGroup className="gallery-grid-3 mt-24">
              {gallery.map((src, i) => (
                <motion.div className="ph ph-3x4" key={src} variants={fadeUp}>
                  <img src={src} alt={`${project.title} — kadr ${i + 1}`} loading="lazy" />
                </motion.div>
              ))}
            </RevealGroup>
          </div>
        </section>
      )}

      <section>
        <div className="container">
          <Reveal as="div" className="section-head">
            <span className="eyebrow">Digər Layihələr</span>
            <h2>Növbəti işə baxın</h2>
          </Reveal>
          <ProjectCard project={next} />
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
}
