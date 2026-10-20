import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Publications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="publications" className="relative py-32 section-gradient">
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="text-xs text-[#4ECDC4] tracking-[0.3em] uppercase font-medium">Academic Output</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4">
            <span className="gradient-text">Publications</span>
          </h2>
        </motion.div>

        <div className="space-y-8">
          {/* Peer-Reviewed */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="glass-card rounded-2xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#004F90] to-[#0070CC] flex items-center justify-center">
                <i className="fas fa-file-alt text-white text-xs" />
              </div>
              <h3 className="text-lg font-semibold text-white">Peer-Reviewed Publications</h3>
            </div>

            <div className="relative pl-6 border-l border-[#0070CC]/30">
              <div className="absolute left-0 top-2 w-2 h-2 rounded-full bg-[#4ECDC4] -translate-x-[5px]" />
              
              <p className="text-slate-400 text-sm leading-relaxed mb-3">
                Mohammad Hossein Givkashi, <span className="text-white font-medium">Mahshid Hadipour</span>, 
                Arezoo Pari Zanganeh, Zahra Nabizadeh, Nader Karimi, Shadrokh Samavi.
              </p>
              
              <h4 className="text-white font-medium text-base mb-2 italic">
                Image inpainting using autoencoder and guided selection of predicted pixels.
              </h4>
              
              <p className="text-slate-500 text-sm mb-4">
                In <span className="text-slate-400">Proceedings of the 30th International Conference on Electrical Engineering (ICEE)</span>, IEEE, 2022.
              </p>

              <div className="flex items-center gap-4">
                <a
                  href="https://arxiv.org/pdf/2112.09262"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#004F90]/20 border border-[#0070CC]/20 text-sm text-[#4ECDC4] hover:bg-[#004F90]/30 transition-all"
                >
                  <i className="fas fa-external-link-alt text-xs" />
                  arXiv Preprint
                </a>
                <a
                  href="https://github.com/givkashi/Image-Inpainting"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#004F90]/20 border border-[#0070CC]/20 text-sm text-[#4ECDC4] hover:bg-[#004F90]/30 transition-all"
                >
                  <i className="fab fa-github text-xs" />
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>

          {/* In Preparation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="glass-card rounded-2xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#4ECDC4] to-[#0070CC] flex items-center justify-center">
                <i className="fas fa-flask text-white text-xs" />
              </div>
              <h3 className="text-lg font-semibold text-white">Manuscripts in Preparation</h3>
            </div>

            <div className="relative pl-6 border-l border-[#4ECDC4]/30">
              <div className="absolute left-0 top-2 w-2 h-2 rounded-full bg-[#0070CC] -translate-x-[5px] animate-pulse-glow" />
              <p className="text-slate-400 text-sm leading-relaxed">
                A manuscript on <span className="text-white italic">deep learning-based medical image survival analysis</span> is 
                currently in preparation and planned for submission to a peer-reviewed international venue.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
