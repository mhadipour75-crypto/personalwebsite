export default function Footer() {
  return (
    <footer className="relative py-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-lg font-semibold gradient-text">MH</span>
            <span className="text-slate-600 text-sm">|</span>
            <span className="text-slate-500 text-sm">Mahshid Hadipour</span>
          </div>
          
          <div className="flex items-center gap-6">
            <a
              href="mailto:mahshid.hadipour@gmail.com"
              className="text-slate-500 hover:text-[#4ECDC4] transition-colors"
            >
              <i className="fas fa-envelope text-sm" />
            </a>
            <a
              href="https://linkedin.com/in/mahshid-hadipour-678998200"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-[#4ECDC4] transition-colors"
            >
              <i className="fab fa-linkedin-in text-sm" />
            </a>
            <a
              href="tel:+989138865708"
              className="text-slate-500 hover:text-[#4ECDC4] transition-colors"
            >
              <i className="fas fa-phone text-sm" />
            </a>
          </div>

          <p className="text-slate-600 text-xs">
            © {new Date().getFullYear()} Mahshid Hadipour. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
