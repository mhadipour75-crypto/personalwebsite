import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const projects = [
  {
    period: '2023 — Present',
    title: 'Medical Image Survival Analysis',
    description:
      'Designing deep learning frameworks that predict patient survival outcomes directly from medical imaging — turning scans into prognostic signal for clinical decision-making.',
    institution: 'Hamadan University of Technology',
    type: 'Remote Research',
    collaborators: 'Prof. Nader Karimi · Sardar Jahani',
    tags: ['Survival Analysis', 'Deep Learning', 'Medical Imaging'],
    image: 'https://images.pexels.com/photos/4226219/pexels-photo-4226219.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    accent: 'from-blue-500/20 to-cyan-400/10',
  },
  {
    period: '2022 — 2023',
    title: 'AR-Guided Brain Surgery Visualization',
    description:
      'An academic–industrial project fusing augmented reality with MRI data for real-time, intraoperative brain surgery visualization — bringing computer vision into the operating room.',
    institution: 'Shahrekord University',
    type: 'Applied Research',
    collaborators: 'Prof. Reza Rohani · Prof. Shahla Nemati',
    tags: ['Augmented Reality', 'MRI', 'Surgical Navigation'],
    image: 'https://images.pexels.com/photos/8879123/pexels-photo-8879123.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    accent: 'from-emerald-500/20 to-blue-400/10',
  },
  {
    period: '2020 — 2022',
    title: 'Deep Learning for 2D/3D Image Understanding',
    description:
      'Fundamental research on graph neural networks and deep learning models for computer vision across 2D and volumetric medical data — inpainting, classification, and segmentation.',
    institution: 'Isfahan University of Technology — HADiP Lab',
    type: 'Fundamental Research',
    collaborators: 'Prof. Nader Karimi · Prof. Shadrokh Samavi',
    tags: ['GNN', 'Image Inpainting', 'Segmentation', '3D Vision'],
    image: 'https://images.pexels.com/photos/17483871/pexels-photo-17483871.png?auto=compress&cs=tinysrgb&h=650&w=940',
    accent: 'from-amber-500/15 to-rose-400/10',
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
              <span className="text-[11px] text-blue-400 tracking-[0.3em] uppercase font-medium">02 — Research</span>
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
              From fundamental deep learning research to applied clinical systems — each project is
              driven by a single question: how can intelligent systems measurably improve human
              health outcomes?
            </motion.p>
          </div>
        </div>

        {/* Project cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 + i * 0.15 }}
              className="card overflow-hidden flex flex-col group"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden rounded-t-[19px]">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover opacity-60 transition-all duration-700 group-hover:scale-105 group-hover:opacity-80"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${project.accent}`} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f131c] via-transparent to-transparent" />
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-[10px] tracking-wider uppercase bg-black/40 backdrop-blur-sm text-slate-300 border border-white/10">
                    {project.type}
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 flex flex-col flex-1">
                <p className="text-[11px] text-blue-400 font-mono tracking-wider mb-3">{project.period}</p>
                <h3 className="text-lg font-semibold text-white leading-snug mb-3">{project.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-5 flex-1">{project.description}</p>

                <div className="space-y-3">
                  <p className="text-xs text-slate-500">{project.institution}</p>
                  <p className="text-[11px] text-slate-600">{project.collaborators}</p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-[11px] text-slate-500 px-2.5 py-1 rounded-full border border-white/[0.06] bg-white/[0.02]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
