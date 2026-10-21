import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Publications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="publications" className="relative py-32 lg:py-44">
      <div className="section-divider" />
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-20" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 mb-20">
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <span className="text-[11px] text-blue-400 tracking-[0.3em] uppercase font-medium">03 — Writing</span>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mt-6 leading-tight text-balance">
                Published <span className="gradient-text">work.</span>
              </h2>
            </motion.div>
          </div>
          <div className="lg:col-span-7 lg:pt-8">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg text-slate-400 leading-relaxed font-light"
            >
              Peer-reviewed contributions to computer vision and image processing, with ongoing
              work advancing medical image analysis.
            </motion.p>
          </div>
        </div>

        {/* Published paper */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="border-t border-white/[0.07] py-12 md:py-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10">
            <div className="md:col-span-3">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="text-[11px] text-emerald-400 tracking-wider uppercase font-medium">Published</span>
              </div>
              <p className="text-sm text-slate-500">ICEE 2022</p>
              <p className="text-xs text-slate-600 mt-1">IEEE Conference</p>
            </div>
            <div className="md:col-span-9">
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-4 leading-snug">
                Image inpainting using autoencoder and guided selection of predicted pixels
              </h3>
              <p className="text-sm text-slate-500 mb-6 leading-relaxed">
                M.H. Givkashi, <span className="text-slate-300">M. Hadipour</span>, A. Pari Zanganeh, Z. Nabizadeh, N. Karimi, S. Samavi
              </p>
              <p className="text-sm text-slate-400 mb-8 leading-relaxed max-w-2xl">
                Proceedings of the 30th International Conference on Electrical Engineering (ICEE), IEEE, 2022.
              </p>
              <div className="flex items-center gap-3">
                <a
                  href="https://arxiv.org/pdf/2112.09262"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                >
                  <i className="fas fa-file-alt text-[10px]" />
                  Read Paper
                </a>
                <a
                  href="https://github.com/givkashi/Image-Inpainting"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                >
                  <i className="fab fa-github text-[10px]" />
                  Source Code
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* In preparation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="border-t border-white/[0.07] py-12 md:py-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10">
            <div className="md:col-span-3">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse-slow" />
                <span className="text-[11px] text-amber-400 tracking-wider uppercase font-medium">In Progress</span>
              </div>
              <p className="text-sm text-slate-500">2024</p>
              <p className="text-xs text-slate-600 mt-1">Manuscript</p>
            </div>
            <div className="md:col-span-9">
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-4 leading-snug">
                Deep learning-based medical image survival analysis
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed max-w-2xl">
                Currently in preparation — a novel framework combining deep learning with survival
                analysis methodologies for medical imaging applications. Planned submission to a
                peer-reviewed international venue.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="border-t border-white/[0.07]" />
      </div>
    </section>
  );
}
