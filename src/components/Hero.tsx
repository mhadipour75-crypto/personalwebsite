import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center hero-gradient grid-pattern overflow-hidden">
      {/* Floating orbs */}
      <div className="floating-orb w-96 h-96 bg-[#004F90] top-1/4 -left-48" />
      <div className="floating-orb w-72 h-72 bg-[#4ECDC4] bottom-1/4 right-0" style={{ animationDelay: '-5s' }} />
      <div className="floating-orb w-48 h-48 bg-[#0070CC] top-1/2 left-1/3" style={{ animationDelay: '-10s' }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8">
            <div className="glow-dot animate-pulse-glow" />
            <span className="text-xs text-slate-400 tracking-wider uppercase">AI Researcher & Computer Vision Scientist</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6"
        >
          <span className="text-shadow-glow">Mahshid</span>
          <br />
          <span className="gradient-text">Hadipour</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed font-light"
        >
          Advancing the frontiers of <span className="text-white font-normal">deep learning</span> and{' '}
          <span className="text-white font-normal">medical image analysis</span> to transform 
          healthcare through artificial intelligence.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#about"
            className="group relative px-8 py-3.5 bg-gradient-to-r from-[#004F90] to-[#0070CC] rounded-full text-white text-sm font-medium overflow-hidden transition-all hover:shadow-[0_0_40px_rgba(0,79,144,0.4)]"
          >
            <span className="relative z-10">Explore My Work</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#0070CC] to-[#4ECDC4] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </a>
          <a
            href="#contact"
            className="px-8 py-3.5 rounded-full border border-slate-700 text-slate-300 text-sm font-medium hover:border-[#0070CC] hover:text-white transition-all duration-300"
          >
            Get in Touch
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-slate-600 to-transparent animate-pulse" />
        </motion.div>
      </div>
    </section>
  );
}
