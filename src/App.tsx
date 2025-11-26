import "./App.css";
import { Suspense, lazy } from "react";
import { Hero } from "./components/Hero";
import { ScrollToTop } from "./components/ScrollToTop";

// Lazy loading para componentes pesados
const About = lazy(async () => {
  const module = await import("./components/About");
  return { default: module.About };
});
const Services = lazy(async () => {
  const module = await import("./components/Services");
  return { default: module.Services };
});
const Projects = lazy(async () => {
  const module = await import("./components/Projects");
  return { default: module.Projects };
});
const Skills = lazy(async () => {
  const module = await import("./components/Skills");
  return { default: module.Skills };
});
const Testimonials = lazy(async () => {
  const module = await import("./components/Testimonials");
  return { default: module.Testimonials };
});
const Contact = lazy(async () => {
  const module = await import("./components/Contact");
  return { default: module.Contact };
});
const Footer = lazy(async () => {
  const module = await import("./components/Footer");
  return { default: module.Footer };
});

import { SectionLoading } from "./components/LoadingComponents";

function App() {
  return (
    <>
      <main>
        <Hero />
        <Suspense fallback={<SectionLoading message="Carregando sobre..." />}>
          <About />
        </Suspense>
        <Suspense fallback={<SectionLoading message="Carregando experiência..." />}>
          <Services />
        </Suspense>
        <Suspense fallback={<SectionLoading message="Carregando projetos..." />}>
          <Projects />
        </Suspense>
        <Suspense fallback={<SectionLoading message="Carregando habilidades..." />}>
          <Skills />
        </Suspense>
        <Suspense fallback={<SectionLoading message="Carregando depoimentos..." />}>
          <Testimonials />
        </Suspense>
        <Suspense fallback={<SectionLoading message="Carregando contato..." />}>
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={<SectionLoading height="min-h-[200px]" message="Carregando footer..." />}>
        <Footer />
      </Suspense>
      
      {/* Botão Voltar ao Topo */}
      <ScrollToTop />
    </>
  );
}

export default App;
