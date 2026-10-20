import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const projects = [
  {
    period: '2023 — Present',
    title: 'Medical Image Survival Analysis',
    description: 'Developing deep learning frameworks for predicting patient survival outcomes from medical imaging data. Focused on methodological design and experimental planning for clinical applications.',
    institution: 'Hamadan University of Technology',
    type: 'Remote Research',
    tags: ['Survival Analysis', 'Deep Learning', 'Medical Imaging'],
  },
  {
    period: '2022 — 2023',
    title: 'AR-Guided Brain Surgery Visualization',
    description: 'Integrated augmented reality techniques with MRI data for real-time intraoperative brain surgery visualization. An academic-industrial collaboration bridging computer vision and surgical practice.',
    institution: 'Shahrekord University',
    type: 'Applied Research',
    tags: ['Augmented Reality', 'MRI', 'Surgical Navigation'],
  },
  {
    period: '2020 — 2022',
    title: 'Deep Learning for 2D/3D Image Understanding',
    description: 'Researched graph neural networks and deep learning models for computer vision tasks including image inpainting, classification, and segmentation on both 2D and volumetric medical data.',
    institution: 'Isfahan University of Technology — HADiP Lab',
    type: 'Fundamental Research',
    tags: ['GNN', 'Image Inpainting', 'Segmentation', '3D Vision'],
  },
];

export default function Research() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="research" className="relative py-32 lg:py-44">
      <div className="section-divider" />
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-20" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 mb-20">
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <span className="text-[11px] text-blue-400 tracking-[0.3em] uppercase font-medium">03 — Research</span>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mt-6 leading-tight text-balance">
                Projects that
                <br />
                <span className="gradient-text">matter.</span>
              </h2>
            </motion.div>
          </div>
          <div className="lg:col-span-7 lg:pt-8">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg text-slate-400 leading-relaxed font-light"
            >
              From fundamental deep learning research to applied clinical systems — each project 
              is driven by the question: how can intelligent systems improve human health outcomes?
            </motion.p>
          </div>
        </div>

        {/* Project list */}
        <div className="space-y-0">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 + i * 0.15 }}
              className="group border-t border-white/[0.06] py-10 md:py-14"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10">
                <div className="md:col-span-3">
                  <p className="text-sm text-slate-500 font-medium">{project.period}</p>
                  <p className="text-xs text-slate-600 mt-1">{project.type}</p>
                </div>
                <div className="md:col-span-9">
                  <h3 className="text-2xl md:text-3xl font-semibold text-white group-hover:text-blue-300 transition-colors mb-4">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed mb-5 max-w-2xl">{project.description}</p>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                    <p className="text-sm text-slate-500">{project.institution}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full text-[11px] text-slate-500 border border-white/[0.06] bg-white/[0.02]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
          <div className="border-t border-white/[0.06]" />
        </div>
      </div>
    </section>
  );
}
