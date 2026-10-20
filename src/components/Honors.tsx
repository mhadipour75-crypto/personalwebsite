import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const mscAwards = [
  'Achieved a Top 1% nationwide ranking in the Iranian National Entrance Examination for M.Sc. in Computer Engineering (AI and Robotics).',
  'Achieved a Top 1% nationwide ranking in the Iranian National Entrance Examination for M.Sc. in Information Technology (IT).',
  'Awarded a Full Merit-Based Graduate Scholarship, covering complete tuition, in recognition of academic excellence.',
  'Selected for Teaching Assistantship Grants for instructional contributions at Isfahan University of Technology.',
  'Ranked 4th among students selecting AI and Robotics as their specialization.',
];

const bscAwards = [
  'Achieved a Top 1% nationwide ranking in the Iranian National Mathematics and Physics Undergraduate Entrance Examination.',
  'Awarded a Full Merit-Based Undergraduate Scholarship, covering full tuition, based on national academic distinction.',
  'Appointed as a Teaching Assistant with Grant Support in Computer and Electrical Engineering departments.',
  'Ranked 3rd among students selecting Computer Engineering as their specialization.',
];

export default function Honors() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative py-32 section-gradient">
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="text-xs text-[#4ECDC4] tracking-[0.3em] uppercase font-medium">Achievements</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4">
            Honors & <span className="gradient-text">Awards</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* M.Sc. Awards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="glass-card rounded-2xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#004F90] to-[#0070CC] flex items-center justify-center">
                <span className="text-white font-bold text-sm">MS</span>
              </div>
              <h3 className="text-xl font-semibold text-white">M.Sc. Achievements</h3>
            </div>
            <ul className="space-y-4">
              {mscAwards.map((award, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="glow-dot mt-2 flex-shrink-0" />
                  <span className="text-slate-400 text-sm leading-relaxed">{award}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* B.Sc. Awards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="glass-card rounded-2xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#4ECDC4] to-[#0070CC] flex items-center justify-center">
                <span className="text-white font-bold text-sm">BS</span>
              </div>
              <h3 className="text-xl font-semibold text-white">B.Sc. Achievements</h3>
            </div>
            <ul className="space-y-4">
              {bscAwards.map((award, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="glow-dot mt-2 flex-shrink-0" />
                  <span className="text-slate-400 text-sm leading-relaxed">{award}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
