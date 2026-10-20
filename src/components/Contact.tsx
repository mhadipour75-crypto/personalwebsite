import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="contact" className="relative py-32 lg:py-44">
      <div className="section-divider" />
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-20" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <span className="text-[11px] text-blue-400 tracking-[0.3em] uppercase font-medium">07 — Contact</span>
              <h2 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold mt-6 leading-tight text-balance">
                Let's build
                <br />
                something <span className="gradient-text">meaningful.</span>
              </h2>
              <p className="text-lg text-slate-400 mt-8 leading-relaxed font-light max-w-xl">
                I'm always interested in research collaborations, academic opportunities, 
                and projects at the intersection of AI and healthcare.
              </p>

              <div className="mt-12 space-y-4">
                <a
                  href="mailto:mahshid.hadipour@gmail.com"
                  className="group flex items-center gap-4 text-xl md:text-2xl text-white hover:text-blue-300 transition-colors"
                >
                  <span className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-blue-400/30 transition-all">
                    <i className="fas fa-envelope text-sm text-slate-500 group-hover:text-blue-400 transition-colors" />
                  </span>
                  mahshid.hadipour@gmail.com
                </a>
                <a
                  href="https://linkedin.com/in/mahshid-hadipour-678998200"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 text-xl md:text-2xl text-white hover:text-blue-300 transition-colors"
                >
                  <span className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-blue-400/30 transition-all">
                    <i className="fab fa-linkedin-in text-sm text-slate-500 group-hover:text-blue-400 transition-colors" />
                  </span>
                  LinkedIn Profile
                </a>
                <a
                  href="tel:+989138865708"
                  className="group flex items-center gap-4 text-xl md:text-2xl text-white hover:text-blue-300 transition-colors"
                >
                  <span className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-blue-400/30 transition-all">
                    <i className="fas fa-phone text-sm text-slate-500 group-hover:text-blue-400 transition-colors" />
                  </span>
                  (+98) 913 886 57 08
                </a>
              </div>
            </motion.div>
          </div>

          {/* References */}
          <div className="lg:col-span-5 lg:pt-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <p className="text-[11px] text-slate-600 tracking-[0.2em] uppercase mb-8">References</p>
              <div className="space-y-8">
                <div className="border-l border-white/[0.06] pl-6">
                  <h4 className="text-base font-medium text-white mb-1">Prof. Nader Karimi</h4>
                  <p className="text-sm text-slate-500 mb-2">Isfahan University of Technology</p>
                  <a href="mailto:nader.karimi@iut.ac.ir" className="text-sm text-blue-400 hover:underline">
                    nader.karimi@iut.ac.ir
                  </a>
                </div>
                <div className="border-l border-white/[0.06] pl-6">
                  <h4 className="text-base font-medium text-white mb-1">Prof. Shadrokh Samavi</h4>
                  <p className="text-sm text-slate-500 mb-2">IUT · Seattle · McMaster</p>
                  <a href="mailto:samavi96@iut.ac.ir" className="text-sm text-blue-400 hover:underline">
                    samavi96@iut.ac.ir
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
