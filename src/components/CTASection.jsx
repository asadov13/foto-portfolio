import Reveal from "./Reveal";
import Magnetic from "./Magnetic";
import { site } from "../data/site";

export default function CTASection() {
  return (
    <section id="contact" style={{ paddingTop: 0 }}>
      <div className="container">
        <Reveal className="cta-band">
          <span className="eyebrow" style={{ color: "inherit", opacity: 0.6 }}>Əlaqə</span>
          <h2>Çəkilişinizi planlaşdıraq?</h2>
          <p>Moda, reklam və kommersiya çəkilişləri üçün mənimlə əlaqə saxlayın — ideyanızı birlikdə vizual hekayəyə çevirək.</p>
          <div className="cta-actions">
            <Magnetic>
              <a href={site.whatsapp} target="_blank" rel="noreferrer" className="btn btn-primary" data-cursor="hover">
                Çəkiliş Sifariş Et
              </a>
            </Magnetic>
            <a href={`mailto:${site.email}`} className="btn btn-outline" data-cursor="hover">
              {site.email}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
