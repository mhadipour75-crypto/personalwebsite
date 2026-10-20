import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const references = [
  {
    name: 'Professor Nader Karimi',
    institution: 'Isfahan University of Technology',
    location: 'Isfahan, Iran',
    email: 'nader.karimi@iut.ac.ir',
  },
  {
    name: 'Professor Shadrokh Samavi',
    institution: 'Isfahan University of Technology, Seattle and McMaster Universities',
    location: 'Isfahan, Iran',
    email: 'samavi96@iut.ac.ir',
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contact" className="relative py-32">
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-xs text-[#4ECDC4] tracking-[0.3em] uppercase font-medium">Get in Touch</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto font-light">
            I'm always open to discussing research collaborations, academic opportunities, 
            or interesting projects in AI and healthcare.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-20"
        >
          <a
            href="mailto:mahshid.hadipour@gmail.com"
            className="glass-card rounded-2xl p-6 text-center group"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#004F90] to-[#0070CC] flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <i className="fas fa-envelope text-white" />
            </div>
            <p className="text-slate-400 text-sm mb-1">Email</p>
            <p className="text-white text-sm font-medium">mahshid.hadipour@gmail.com</p>
          </a>

          <a
            href="https://linkedin.com/in/mahshid-hadipour-678998200"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card rounded-2xl p-6 text-center group"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#004F90] to-[#0070CC] flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <i className="fab fa-linkedin-in text-white" />
            </div>
            <p className="text-slate-400 text-sm mb-1">LinkedIn</p>
            <p className="text-white text-sm font-medium">mahshid-hadipour</p>
          </a>

          <a
            href="tel:+989138865708"
            className="glass-card rounded-2xl p-6 text-center group"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#004F90] to-[#0070CC] flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <i className="fas fa-phone text-white" />
            </div>
            <p className="text-slate-400 text-sm mb-1">Phone</p>
            <p className="text-white text-sm font-medium">(+98) 913 886 57 08</p>
          </a>
        </motion.div>

        {/* References */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <h3 className="text-xl font-semibold text-white mb-8 text-center">References</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {references.map((ref, i) => (
              <div key={i} className="glass-card rounded-2xl p-6">
                <h4 className="text-white font-medium mb-1">{ref.name}</h4>
                <p className="text-slate-400 text-sm mb-1">{ref.institution}</p>
                <p className="text-slate-500 text-xs mb-3">{ref.location}</p>
                <a
                  href={`mailto:${ref.email}`}
                  className="text-[#4ECDC4] text-sm hover:underline inline-flex items-center gap-2"
                >
                  <i className="fas fa-envelope text-xs" />
                  {ref.email}
                </a>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
