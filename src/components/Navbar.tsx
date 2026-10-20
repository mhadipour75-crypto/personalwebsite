import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#research' },
  { label: 'Writing', href: '#publications' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled ? 'glass py-4' : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between">
          <a href="#" className="group flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-400/10 border border-white/10 flex items-center justify-center group-hover:border-blue-400/30 transition-colors">
              <span className="text-xs font-bold text-blue-300">M</span>
            </div>
            <span className="text-sm font-medium text-slate-300 hidden sm:block">Mahshid Hadipour</span>
          </a>

          <nav className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="nav-link text-[13px] text-slate-500 hover:text-white tracking-wide"
              >
                {item.label}
              </a>
            ))}
            <a
              href="mailto:mahshid.hadipour@gmail.com"
              className="px-5 py-2 rounded-full text-[13px] text-white bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all"
            >
              Say Hello
            </a>
          </nav>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-white p-2"
            aria-label="Menu"
          >
            <div className="w-5 flex flex-col gap-1.5">
              <span className={`block h-px bg-white transition-all duration-300 origin-center ${mobileOpen ? 'rotate-45 translate-y-[4px]' : ''}`} />
              <span className={`block h-px bg-white transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-px bg-white transition-all duration-300 origin-center ${mobileOpen ? '-rotate-45 -translate-y-[3px]' : ''}`} />
            </div>
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 glass pt-24 px-8 md:hidden"
          >
            <nav className="flex flex-col gap-8">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  onClick={() => setMobileOpen(false)}
                  className="text-3xl font-light text-slate-300 hover:text-white"
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.a
                href="mailto:mahshid.hadipour@gmail.com"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                onClick={() => setMobileOpen(false)}
                className="text-3xl font-light text-blue-400"
              >
                Say Hello →
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
