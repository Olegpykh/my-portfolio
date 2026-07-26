import { lazy, Suspense } from 'react';
import { LazyMotion, domAnimation } from 'framer-motion';
import Header from './components/Header/Header';
import About from './components/About/About';

const Summary = lazy(() => import('./components/Summary/Summary'));
const Experience = lazy(() => import('./components/Experience/Experience'));
const Skills = lazy(() => import('./components/Skills/Skills'));
const Projects = lazy(() => import('./components/Projects/Projects'));
const Languages = lazy(() => import('./components/Languages/Languages'));
const Contact = lazy(() => import('./components/Contact/Contact'));
const Footer = lazy(() => import('./components/Footer/Footer'));

function App() {
  return (
    <LazyMotion features={domAnimation}>
      <Header />
      <About />
      <Suspense fallback={null}>
        <Summary />
        <Experience />
        <Skills />
        <Projects />
        <Languages />
        <Contact />
        <Footer />
      </Suspense>
    </LazyMotion>
  );
}

export default App;
