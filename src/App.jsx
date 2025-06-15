import Navbar from './components/Navbar';
import Hero from './pages/Hero';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Skills from './pages/Skills';
import ScrollScene from './components/ScrollScene'; // 👈 Add this

function App() {
  return (
    <div className="font-sans bg-gray-50 text-gray-900 overflow-x-hidden">
      <Navbar />
      <Hero />
      <ScrollScene />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}


export default App;
