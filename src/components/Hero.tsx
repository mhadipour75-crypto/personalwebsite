import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center hero-gradient grid-bg overflow-hidden">
      {/* Ambient orbs */}
      <div className="floating-orb w-[520px] h-[520px] bg-blue-600/25 -top-24 -right-44" />
      <div className="floating-orb w-[340px] h-[340px] bg-cyan-500/12 bottom-16 left-8" style={{ animationDelay: '-8s' }} />

      <div className="relative z-10 w-full pt-32 pb-20 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-10"
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/[0.07] bg-white/[0.02]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
              </span>
              <span className="text-[13px] text-slate-400 tracking-wide">Open to research collaborations & PhD opportunities</span>
            </div>
          </motion.div>

          {/* Main headline */}
          <div className="max-w-5xl">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-[clamp(2.8rem,8vw,7rem)] font-bold leading-[0.92] tracking-tight mb-8"
            >
              <span className="text-white">Teaching machines</span>
              <br />
              <span className="text-white">to read the</span>
              <br />
              <span className="gradient-text">human body.</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10"
            >
              <p className="text-lg md:text-xl text-slate-400 max-w-xl leading-relaxed font-light text-balance">
                I'm <span className="text-white font-normal">Mahshid Hadipour</span> — an AI researcher engineering
                deep learning systems for medical imaging, computer vision, and the future of
                data-driven healthcare.
              </p>

              <div className="flex items-center gap-6">
                <a
                  href="#research"
                  className="group flex items-center gap-3 text-sm text-white hover:text-blue-300 transition-colors"
                >
                  <span className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-blue-400/40 group-hover:bg-blue-500/5 transition-all">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
                    </svg>
                  </span>
                  <span className="tracking-wide">Explore my work</span>
                </a>
              </div>
            </motion.div>
          </div>

          {/* Bottom stats bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.85 }}
            className="mt-24 pt-10 border-t border-white/[0.05]"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <p className="stat-number text-3xl md:text-4xl font-bold text-white">Top 1%</p>
                <p className="text-slate-500 text-sm mt-2">National ranking, Iran</p>
              </div>
              <div>
                <p className="stat-number text-3xl md:text-4xl font-bold text-white">3.87</p>
                <p className="text-slate-500 text-sm mt-2">M.Sc. GPA / 4.0</p>
              </div>
              <div>
                <p className="stat-number text-3xl md:text-4xl font-bold text-white">6+</p>
                <p className="text-slate-500 text-sm mt-2">Years in AI research</p>
              </div>
              <div>
                <p className="stat-number text-3xl md:text-4xl font-bold text-white">3</p>
                <p className="text-slate-500 text-sm mt-2">Research laboratories</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
