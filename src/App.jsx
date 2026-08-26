import { useEffect, useState } from "react";
import { Routes, Route, useLocation, useParams } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Cursor from "./components/Cursor";
import ScrollProgress from "./components/ScrollProgress";
import Preloader from "./components/Preloader";
import Header from "./components/Header";
import PageTransition from "./components/PageTransition";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import CaseStudy from "./pages/CaseStudy";
import { getProject } from "./data/projects";

// Layihə səhifəsinə keçəndə pərdənin üzərində işin adı görünsün deyə
// slug-dan başlığı oxuyub PageTransition-a ötürürük.
function CaseStudyRoute() {
  const { slug } = useParams();
  const project = getProject(slug);
  return (
    <PageTransition label={project?.title}>
      <CaseStudy />
    </PageTransition>
  );
}

function ScrollToHash() {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 350);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash]);
  return null;
}

export default function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1300);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <Preloader show={loading} />
      <Cursor />
      <ScrollProgress />
      <Header />
      <ScrollToHash />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <PageTransition>
                <Home />
              </PageTransition>
            }
          />
          <Route
            path="/projects"
            element={
              <PageTransition>
                <Projects />
              </PageTransition>
            }
          />
          <Route path="/projects/:slug" element={<CaseStudyRoute />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}
