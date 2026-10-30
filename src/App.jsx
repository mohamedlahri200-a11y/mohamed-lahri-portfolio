import useTheme from "./hooks/useTheme.js";
import { useLang } from "./i18n/LangContext.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Internship from "./components/Internship.jsx";
import Experience from "./components/Experience.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import SoftSkills from "./components/SoftSkills.jsx";
import Activities from "./components/Activities.jsx";
import Education from "./components/Education.jsx";
import Certificates from "./components/Certificates.jsx";
import Contact from "./components/Contact.jsx";

export default function App() {
  const { theme, toggle, setTheme } = useTheme();
  const { t } = useLang();
  return (
    <>
      <a className="skip-link" href="#contenu">{t.skip}</a>
      <Navbar theme={theme} onToggleTheme={toggle} setTheme={setTheme} />
      <main id="contenu" tabIndex={-1}>
        <Hero />
        <About />
        <Internship />
        <Experience />
        <Projects />
        <Skills />
        <SoftSkills />
        <Activities />
        <Education />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
