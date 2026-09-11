"use client";

import { Sun, Heart, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Brand Copyright */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
            <Sun className="w-4 h-4 text-amber-400" />
          </div>
          <div className="text-xs text-slate-400">
            © {new Date().getFullYear()} <strong className="text-white">Mohamed MEREHOUM</strong>. 
            Technicien Spécialisé en Systèmes Énergie Solaire (IFMEREE Oujda).
          </div>
        </div>

        {/* Scroll To Top Button */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-slate-900 text-xs font-semibold text-slate-300 border border-slate-800 hover:border-amber-500/40 hover:text-white transition-all"
        >
          <span>Haut de page</span>
          <ArrowUp className="w-3.5 h-3.5 text-amber-400" />
        </button>

      </div>
    </footer>
  );
}
