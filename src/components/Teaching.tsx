import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Teaching() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="teaching" className="relative py-32 lg:py-44">
      <div className="section-divider" />
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-20" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <span className="text-[11px] text-blue-400 tracking-[0.3em] uppercase font-medium">05 — Teaching</span>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mt-6 leading-tight text-balance">
                Sharing <span className="gradient-text">knowledge.</span>
              </h2>
            </motion.div>
          </div>
          <div className="lg:col-span-7 lg:pt-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-12"
            >
              <p className="text-lg text-slate-400 leading-relaxed font-light">
                I've supported undergraduate education across two institutions, helping students
                build strong foundations in computer science and engineering.
              </p>

              {/* Teaching positions */}
              <div className="space-y-8">
                <div className="border-l border-white/[0.08] pl-6">
                  <p className="text-sm text-slate-500 mb-2">2021 — Isfahan University of Technology</p>
                  <h3 className="text-lg font-medium text-white mb-3">Teaching Assistant</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1.5 rounded-lg text-[12px] text-slate-400 bg-white/[0.03] border border-white/[0.06]">
                      Computer Fundamentals
                    </span>
                  </div>
                </div>

                <div className="border-l border-white/[0.08] pl-6">
                  <p className="text-sm text-slate-500 mb-2">2017 — Shahrekord University</p>
                  <h3 className="text-lg font-medium text-white mb-3">Teaching Assistant</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Computer Fundamentals', 'Database Systems', 'Data Structures', 'Algorithms', 'Programming'].map((course) => (
                      <span key={course} className="px-3 py-1.5 rounded-lg text-[12px] text-slate-400 bg-white/[0.03] border border-white/[0.06]">
                        {course}
                      </span>
                    ))}
                  </div>
                  <p className="text-xs text-slate-600 mt-3">Python · C++ · Java</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
