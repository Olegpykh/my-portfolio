import Header from './components/Header/Header';
import Contact from './components/Contact/Contact';
import Summary from "./components/Summary/Summary"
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Languages from './components/Languages/Languages';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Experience from './components/Experience/Experience';
function App() {
  return (
    <>
      <Header />
      <About/>
      <Summary />
      <Experience/>
      <Skills/>
      <Projects/>
      <Languages/>
      <Contact />
      <Footer/>
    </>
  );
}

export default App;
