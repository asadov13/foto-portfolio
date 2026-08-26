import ProjectCard from "../components/ProjectCard";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";
import KineticHeading from "../components/KineticHeading";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <>
      <section className="hero" style={{ paddingBottom: 40 }}>
        <div className="container">
          <Reveal style={{ maxWidth: 820 }}>
            <span className="eyebrow">Portfolio</span>
          </Reveal>
          <KineticHeading lines={["Kadrla Danışan Hekayələr"]} className="kinetic-md" />
          <Reveal i={2}>
            <p className="mt-24" style={{ fontSize: 17, maxWidth: 520 }}>
              Moda, reklam və kommersiya layihələrindən seçmələr — hər biri fərqli konsepsiya, fərqli əhval-ruhiyyə daşıyır.
            </p>
          </Reveal>
        </div>
      </section>

      <section style={{ paddingTop: 40 }}>
        <div className="container">
          <div className="grid-2">
            {projects.map((p, i) => (
              <ProjectCard project={p} i={i} key={p.slug} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </>
  );
}
