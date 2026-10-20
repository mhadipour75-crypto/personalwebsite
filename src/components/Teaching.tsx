import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const teaching = [
  {
    period: '2021',
    title: 'Teaching Assistant',
    institution: 'Isfahan University of Technology',
    location: 'Isfahan, Iran',
    courses: ['Computer Fundamentals'],
  },
  {
    period: '2017',
    title: 'Teaching Assistant',
    institution: 'Shahrekord University',
    location: 'Shahrekord, Iran',
    courses: ['Computer Fundamentals', 'Database Systems', 'Data Structures', 'Algorithms', 'Programming (Python, C++, Java)'],
  },
];

export default function Teaching() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative py-32">
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="text-xs text-[#4ECDC4] tracking-[0.3em] uppercase font-medium">Instruction</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4">
            Teaching <span className="gradient-text">Experience</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {teaching.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="glass-card rounded-2xl p-8"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-[#004F90]/20 text-[#4ECDC4] border border-[#0070CC]/20">
                  {item.period}
                </span>
                <span className="text-slate-600 text-sm">{item.location}</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-1">{item.title}</h3>
              <p className="text-slate-400 mb-5">{item.institution}</p>
              <div className="flex flex-wrap gap-2">
                {item.courses.map((course) => (
                  <span
                    key={course}
                    className="px-3 py-1.5 rounded-lg text-xs text-slate-300 bg-white/5 border border-white/5"
                  >
                    {course}
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
