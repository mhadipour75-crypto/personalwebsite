import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const education = [
  {
    degree: 'M.Sc.',
    field: 'Computer Engineering — AI & Robotics',
    university: 'Isfahan University of Technology',
    period: 'Sept 2020 – Dec 2024',
    gpa: '3.87 / 4.0',
    thesis: 'Early Detection of Alzheimer\'s Disease Using Deep Learning and Geometric Information of Brain Areas',
    supervisors: 'Prof. Nader Karimi (Supervisor) · Prof. Shadrokh Samavi (Advisor)',
    location: 'Isfahan, Iran',
  },
  {
    degree: 'B.Sc.',
    field: 'Computer Engineering — Software',
    university: 'Shahrekord University',
    period: 'Sept 2016 – May 2020',
    gpa: '3.37 / 4.0',
    thesis: 'Emotion, Age and Gender Recognition with Deep Learning',
    supervisors: 'Prof. Mohammad Ehsan Basiri (Supervisor) · Prof. Taghi Javdani (Advisor)',
    location: 'Shahrekord, Iran',
  },
];

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="education" className="relative py-32">
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="text-xs text-[#4ECDC4] tracking-[0.3em] uppercase font-medium">Academic Background</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4">
            <span className="gradient-text">Education</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-12 top-0 bottom-0 timeline-line hidden md:block" />

          <div className="space-y-12">
            {education.map((edu, i) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.2 }}
                className="relative md:pl-28"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 md:left-10 top-8 hidden md:block">
                  <div className="w-4 h-4 rounded-full border-2 border-[#0070CC] bg-[#0a0f1c]" />
                </div>

                <div className="glass-card rounded-2xl p-8">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-[#004F90]/20 text-[#4ECDC4] border border-[#0070CC]/20">
                          {edu.degree}
                        </span>
                        <span className="text-slate-500 text-sm">{edu.location}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-white">{edu.university}</h3>
                      <p className="text-slate-400 mt-1">{edu.field}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-slate-500 text-sm">{edu.period}</p>
                      <p className="text-[#4ECDC4] font-medium mt-1">GPA: {edu.gpa}</p>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-white/5">
                    <p className="text-sm text-slate-400 mb-2">
                      <span className="text-slate-300 font-medium">Thesis:</span> {edu.thesis}
                    </p>
                    <p className="text-sm text-slate-500">
                      <span className="text-slate-400">{edu.supervisors}</span>
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
