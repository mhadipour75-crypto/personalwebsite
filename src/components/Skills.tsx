import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const skillGroups = [
  {
    category: 'Languages',
    items: ['Python', 'MATLAB', 'Java', 'C/C++', 'CUDA'],
  },
  {
    category: 'Frameworks',
    items: ['PyTorch', 'TensorFlow', 'Keras', 'Scikit-learn'],
  },
  {
    category: 'Tools',
    items: ['OpenCV', 'NiBabel', 'SimpleITK', 'NumPy', 'Pandas', 'Matplotlib'],
  },
  {
    category: 'Platforms',
    items: ['Linux', 'Git', 'LaTeX'],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="skills" className="relative py-32 lg:py-44">
      <div className="section-divider" />
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-20" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <span className="text-[11px] text-blue-400 tracking-[0.3em] uppercase font-medium">06 — Toolkit</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mt-6 text-balance">
            Technical <span className="gradient-text">stack.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <p className="text-[11px] text-slate-600 tracking-[0.2em] uppercase mb-4">{group.category}</p>
              <div className="space-y-2">
                {group.items.map((skill) => (
                  <p
                    key={skill}
                    className="text-base text-slate-300 hover:text-white transition-colors cursor-default"
                  >
                    {skill}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Languages section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 pt-12 border-t border-white/[0.06]"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { lang: 'Persian', level: 'Native' },
              { lang: 'English', level: 'Professional' },
              { lang: 'Korean', level: 'Practical' },
            ].map((item, i) => (
              <div key={item.lang} className="flex items-baseline justify-between">
                <span className="text-lg text-white">{item.lang}</span>
                <span className="text-sm text-slate-500">{item.level}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
