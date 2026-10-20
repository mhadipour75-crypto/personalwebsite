import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Honors from './components/Honors';
import Research from './components/Research';
import Publications from './components/Publications';
import Teaching from './components/Teaching';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#0a0f1c] text-white overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Honors />
      <Research />
      <Publications />
      <Teaching />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}
