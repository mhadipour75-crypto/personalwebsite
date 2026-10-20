import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const interests = [
  { icon: '🧠', title: 'Computer Vision', desc: 'Image processing & analysis' },
  { icon: '🔬', title: 'Deep Learning', desc: 'Neural architectures & optimization' },
  { icon: '🏥', title: 'AI for Healthcare', desc: 'Medical diagnostics & imaging' },
  { icon: '📊', title: 'Medical Image Analysis', desc: '2D/3D clinical image understanding' },
  { icon: '🔗', title: 'Multi-modal Fusion', desc: 'Cross-modal data integration' },
  { icon: '⚡', title: 'Transformers', desc: 'Attention-based architectures' },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="relative py-32 section-gradient">
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <span className="text-xs text-[#4ECDC4] tracking-[0.3em] uppercase font-medium">About Me</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            Research <span className="gradient-text">Interests</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-3xl leading-relaxed font-light">
            I am a dedicated AI researcher passionate about leveraging deep learning to solve 
            complex problems in medical imaging and computer vision. My work bridges the gap 
            between cutting-edge machine learning techniques and real-world healthcare applications, 
            with a focus on early disease detection and multi-modal data analysis.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {interests.map((interest, i) => (
            <motion.div
              key={interest.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="glass-card rounded-2xl p-6 group cursor-default"
            >
              <div className="text-3xl mb-4">{interest.icon}</div>
              <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-[#4ECDC4] transition-colors">
                {interest.title}
              </h3>
              <p className="text-slate-500 text-sm">{interest.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
