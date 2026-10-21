import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const interests = [
  'Computer Vision',
  'Deep Learning',
  'Medical Image Analysis',
  'AI for Healthcare',
  'Multi-modal Data Fusion',
  'Transformers & Attention',
  '2D/3D Image Processing',
  'Graph Neural Networks',
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" className="relative py-32 lg:py-44">
      <div className="section-divider" />
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-20" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
          {/* Left column - label + heading */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <span className="text-[11px] text-blue-400 tracking-[0.3em] uppercase font-medium">01 — About</span>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mt-6 leading-tight text-balance">
                Where medicine
                <br />
                meets <span className="gradient-text">machine</span>
                <br />
                intelligence.
              </h2>
            </motion.div>
          </div>

          {/* Right column - narrative */}
          <div className="lg:col-span-7 lg:pt-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <p className="text-xl md:text-2xl text-slate-200 leading-relaxed font-light text-balance">
                I build deep learning systems that read medical images — detecting disease earlier
                and more accurately than human eyes alone, and turning scans into decisions.
              </p>
              <p className="text-base text-slate-400 leading-relaxed">
                My work moves between architectural innovation in neural networks and applied clinical
                research: early Alzheimer's detection from brain geometry, augmented-reality guidance
                for neurosurgery, and survival analysis built on medical imaging. I believe the most
                meaningful AI lives where technical rigor meets human need.
              </p>

              {/* Interest tags */}
              <div className="pt-6">
                <p className="text-[11px] text-slate-600 tracking-[0.2em] uppercase mb-4">Research Focus</p>
                <div className="flex flex-wrap gap-2">
                  {interests.map((interest, i) => (
                    <motion.span
                      key={interest}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.4, delay: 0.4 + i * 0.05 }}
                      className="tag"
                    >
                      {interest}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
