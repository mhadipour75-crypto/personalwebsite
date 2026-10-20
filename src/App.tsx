import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Research from './components/Research';
import Publications from './components/Publications';
import Teaching from './components/Teaching';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#050a14] text-white overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Research />
      <Publications />
      <Teaching />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}
