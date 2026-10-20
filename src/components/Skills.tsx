import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const skillCategories = [
  {
    title: 'Programming',
    icon: 'fas fa-code',
    skills: ['Python', 'MATLAB', 'Java', 'C/C++', 'CUDA'],
  },
  {
    title: 'AI & ML Tools',
    icon: 'fas fa-brain',
    skills: ['PyTorch', 'TensorFlow', 'Keras', 'Scikit-learn'],
  },
  {
    title: 'Libraries',
    icon: 'fas fa-layer-group',
    skills: ['NumPy', 'Pandas', 'Matplotlib', 'OpenCV', 'PIL', 'NiBabel', 'SimpleITK'],
  },
  {
    title: 'Tools & Platforms',
    icon: 'fas fa-tools',
    skills: ['Linux', 'Git', 'LaTeX'],
  },
  {
    title: 'Languages',
    icon: 'fas fa-globe',
    skills: ['Persian (Native)', 'English (Professional)', 'Korean (Practical)'],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="relative py-32 section-gradient">
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="text-xs text-[#4ECDC4] tracking-[0.3em] uppercase font-medium">Expertise</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass-card rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#004F90]/40 to-[#0070CC]/40 flex items-center justify-center">
                  <i className={`${category.icon} text-[#4ECDC4] text-sm`} />
                </div>
                <h3 className="text-white font-semibold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="skill-tag px-3 py-1.5 rounded-lg text-xs text-slate-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
