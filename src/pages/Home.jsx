import { motion } from "framer-motion";
import Typewriter from "../components/Typewriter";
import Marquee from "../components/Marquee";
import ProjectCard from "../components/ProjectCard";
import FAQAccordion from "../components/FAQAccordion";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";
import Reveal, { RevealGroup, fadeUp } from "../components/Reveal";
import Magnetic from "../components/Magnetic";
import { projects, services, timeline, tools } from "../data/projects";
import { site } from "../data/site";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-typewriter">
            <Typewriter
              lines={["Hər kadr", "bir hekayədir.", "Mən onu çəkirəm."]}
              // Sətirlər aşağı doğru solğunlaşır, amma hamısı oxunaqlı qalır.
              // (əvvəl 0.12 idi — üçüncü sətir demək olar ki, görünmürdü)
              opacities={[1, 0.72, 0.46]}
            />
          </div>
          <Reveal as="div" className="hero-sub" i={3}>
            <p>Moda və reklam sahəsində ideyaları güclü vizual kampaniyalara çevirən fotoqraf və kreativ rejissoram. Brendlər üçün sadəcə kadr deyil, hekayə yaradıram.</p>
            <Magnetic>
              <a href={site.whatsapp} target="_blank" rel="noreferrer" className="btn btn-outline" data-cursor="hover">
                Çəkiliş üçün əlaqə saxla
              </a>
            </Magnetic>
          </Reveal>
        </div>
      </section>

      <section id="work">
        <div className="container">
          <Reveal as="div" className="section-head">
            <span className="eyebrow">Son İşlər</span>
            <h2>Seçilmiş layihələrimə nəzər sal</h2>
            <p>Moda kampaniyalarından reklam çəkilişlərinə qədər — hər layihə fərqli bir hekayə daşıyır.</p>
          </Reveal>
          <div className="grid-2">
            {projects.map((p, i) => (
              <ProjectCard project={p} i={i} key={p.slug} />
            ))}
          </div>
        </div>
      </section>

      <section id="services">
        <div className="container">
          <Reveal as="div" className="section-head">
            <span className="eyebrow">Xidmətlər</span>
            <h2>Sizə necə kömək edə bilərəm</h2>
            <p>Konsepsiyadan son montaja qədər — bütün prosesi bərabər idarə edirəm.</p>
          </Reveal>
          <RevealGroup className="services-list">
            {services.map((s) => (
              <motion.div className="service-row" key={s.n} variants={fadeUp}>
                <span className="num">{s.n}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </motion.div>
            ))}
          </RevealGroup>
        </div>
      </section>

      {tools.length > 0 && (
        <section style={{ paddingTop: 0 }}>
          <div className="container">
            <Reveal as="span" className="eyebrow" style={{ display: "block" }}>İstifadə etdiyim avadanlıq</Reveal>
            <div className="mt-24">
              <Marquee items={tools} speed={24} />
            </div>
          </div>
        </section>
      )}

      <section id="about">
        <div className="container two-col">
          <Reveal>
            <span className="eyebrow">Haqqımda</span>
            <h2>Kadrın arxasında kim dayanır?</h2>
            <p className="mt-24">Bir neçə ildir moda və reklam fotoqrafiyası ilə məşğulam. Hər çəkilişdə brendin xarakterini və hekayəsini vizual dilə çevirməyə çalışıram.</p>
            <p className="mt-16">İşıqdan kompozisiyaya, kreativ istiqamətdən post-prodakşna qədər bütün detallara diqqət edirəm ki, son nəticə həm estetik, həm də funksional olsun.</p>
          </Reveal>
          <RevealGroup className="timeline">
            {timeline.map((t) => (
              <motion.div className="timeline-item" key={t.year} variants={fadeUp}>
                <span className="year">{t.year}</span>
                <h4>{t.title}</h4>
                <p>{t.text}</p>
              </motion.div>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section id="faq">
        <div className="container">
          <Reveal as="div" className="section-head">
            <span className="eyebrow">Tez-tez Verilən Suallar</span>
            <h2>Suallarınız var?</h2>
          </Reveal>
          <Reveal>
            <FAQAccordion />
          </Reveal>
        </div>
      </section>

      <CTASection />
      <Footer />
    </>
  );
}
