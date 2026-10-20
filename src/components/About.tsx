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
              <p className="text-xl md:text-2xl text-slate-300 leading-relaxed font-light text-balance">
                I develop deep learning systems that analyze medical images to detect diseases 
                earlier and more accurately — bridging the gap between cutting-edge AI research 
                and real clinical impact.
              </p>
              <p className="text-base text-slate-500 leading-relaxed">
                My work spans from architectural innovations in neural networks to applied research 
                in Alzheimer's detection, brain surgery visualization with augmented reality, and 
                medical image survival analysis. I believe the most meaningful AI research happens 
                at the intersection of technical rigor and human need.
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
                      className="px-4 py-2 rounded-full text-[13px] text-slate-400 border border-white/[0.06] bg-white/[0.02] hover:border-blue-400/20 hover:text-blue-300 transition-all cursor-default"
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
