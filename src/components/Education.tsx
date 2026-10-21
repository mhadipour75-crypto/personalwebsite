import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="education" className="relative py-32 lg:py-44">
      <div className="section-divider" />
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-20" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <span className="text-[11px] text-blue-400 tracking-[0.3em] uppercase font-medium">04 — Background</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mt-6 text-balance">
            Academic <span className="gradient-text">journey</span>
          </h2>
        </motion.div>

        <div className="space-y-0">
          {/* M.Sc. */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="group border-t border-white/[0.07] py-10 md:py-14"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10">
              <div className="md:col-span-3">
                <p className="text-sm text-slate-500 font-medium">2020 — 2024</p>
                <p className="text-xs text-slate-600 mt-1">Isfahan, Iran</p>
              </div>
              <div className="md:col-span-9">
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-4">
                  <h3 className="text-2xl md:text-3xl font-semibold text-white group-hover:text-blue-300 transition-colors">
                    M.Sc. Computer Engineering
                  </h3>
                  <span className="text-sm text-blue-400 font-medium">GPA 3.87/4.0</span>
                </div>
                <p className="text-slate-400 mb-4">Isfahan University of Technology — AI & Robotics</p>
                <div className="space-y-2">
                  <p className="text-sm text-slate-500 leading-relaxed">
                    <span className="text-slate-400">Thesis:</span> Early Detection of Alzheimer's Disease Using Deep Learning and Geometric Information of Brain Areas
                  </p>
                  <p className="text-sm text-slate-600">
                    Supervised by Prof. Nader Karimi & Prof. Shadrokh Samavi
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* B.Sc. */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="group border-t border-white/[0.07] py-10 md:py-14"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10">
              <div className="md:col-span-3">
                <p className="text-sm text-slate-500 font-medium">2016 — 2020</p>
                <p className="text-xs text-slate-600 mt-1">Shahrekord, Iran</p>
              </div>
              <div className="md:col-span-9">
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-4">
                  <h3 className="text-2xl md:text-3xl font-semibold text-white group-hover:text-blue-300 transition-colors">
                    B.Sc. Computer Engineering
                  </h3>
                  <span className="text-sm text-blue-400 font-medium">GPA 3.37/4.0</span>
                </div>
                <p className="text-slate-400 mb-4">Shahrekord University — Software Engineering</p>
                <div className="space-y-2">
                  <p className="text-sm text-slate-500 leading-relaxed">
                    <span className="text-slate-400">Thesis:</span> Emotion, Age and Gender Recognition with Deep Learning
                  </p>
                  <p className="text-sm text-slate-600">
                    Supervised by Prof. Mohammad Ehsan Basiri & Prof. Taghi Javdani
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Awards highlight */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="border-t border-white/[0.07] py-10 md:py-14"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10">
              <div className="md:col-span-3">
                <p className="text-sm text-slate-500 font-medium">Distinctions</p>
              </div>
              <div className="md:col-span-9">
                <h3 className="text-2xl md:text-3xl font-semibold text-white mb-6">
                  National honors & scholarships
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    'Top 1% — National M.Sc. Entrance Exam (AI & Robotics)',
                    'Top 1% — National M.Sc. Entrance Exam (IT)',
                    'Top 1% — National B.Sc. Entrance Exam (Math & Physics)',
                    'Full merit scholarship — both degrees',
                    'Ranked 4th in AI & Robotics specialization',
                    'Ranked 3rd in Computer Engineering specialization',
                  ].map((award, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-1 h-1 rounded-full bg-blue-400 mt-2.5 flex-shrink-0" />
                      <p className="text-sm text-slate-400 leading-relaxed">{award}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <div className="border-t border-white/[0.07]" />
        </div>
      </div>
    </section>
  );
}
