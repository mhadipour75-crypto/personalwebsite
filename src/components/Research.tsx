import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const experiences = [
  {
    period: '2023 – Present',
    title: 'Remote Research Assistant',
    institution: 'Survival Analysis Lab, Hamadan University of Technology',
    location: 'Remote',
    supervisors: 'Prof. Nader Karimi (Supervisor) · Sardar Jahani (Collaborator)',
    description: 'Conducting collaborative research on deep learning–based medical image survival analysis, with emphasis on methodological design and experimental planning.',
  },
  {
    period: '2022 – 2023',
    title: 'Research Assistant',
    institution: 'Image Processing Lab, Shahrekord University',
    location: 'Shahrekord, Iran',
    supervisors: 'Prof. Reza Rohani (Supervisor) · Prof. Shahla Nemati (Co-Supervisor)',
    description: 'Participated in an applied academic–industrial research project focused on the integration of augmented reality techniques with MRI data for intraoperative brain surgery visualization.',
  },
  {
    period: '2020 – 2022',
    title: 'Research Assistant',
    institution: 'HADiP Lab, Isfahan University of Technology',
    location: 'Isfahan, Iran',
    supervisors: 'Prof. Nader Karimi (Supervisor) · Prof. Shadrokh Samavi (Co-Supervisor)',
    description: 'Conducted research on deep learning and graph neural network models for computer vision tasks on 2D and 3D images, including image inpainting, classification, and segmentation.',
  },
];

export default function Research() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="research" className="relative py-32">
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="text-xs text-[#4ECDC4] tracking-[0.3em] uppercase font-medium">Experience</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4">
            Research <span className="gradient-text">Experience</span>
          </h2>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="glass-card rounded-2xl p-8 group"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-5">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-[#004F90]/20 text-[#4ECDC4] border border-[#0070CC]/20">
                      {exp.period}
                    </span>
                    <span className="text-slate-600 text-sm">{exp.location}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white group-hover:text-[#4ECDC4] transition-colors">
                    {exp.title}
                  </h3>
                  <p className="text-slate-400 mt-1">{exp.institution}</p>
                </div>
              </div>

              <p className="text-slate-400 text-sm leading-relaxed mb-4">{exp.description}</p>

              <p className="text-xs text-slate-500">
                <span className="text-slate-400">{exp.supervisors}</span>
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
