export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.04] py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-7 h-7 rounded-md bg-gradient-to-br from-blue-500/20 to-cyan-400/10 border border-white/10 flex items-center justify-center">
              <span className="text-[10px] font-bold text-blue-300">M</span>
            </div>
            <span className="text-sm text-slate-500">Mahshid Hadipour</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="mailto:mahshid.hadipour@gmail.com" className="text-slate-600 hover:text-blue-400 transition-colors">
              <i className="fas fa-envelope text-sm" />
            </a>
            <a href="https://linkedin.com/in/mahshid-hadipour-678998200" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-blue-400 transition-colors">
              <i className="fab fa-linkedin-in text-sm" />
            </a>
            <a href="tel:+989138865708" className="text-slate-600 hover:text-blue-400 transition-colors">
              <i className="fas fa-phone text-sm" />
            </a>
          </div>

          <p className="text-xs text-slate-700">
            © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
