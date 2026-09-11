"use client";

import { motion } from "framer-motion";
import { Sun, ArrowUp, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { name: "Accueil", href: "#hero" },
    { name: "Profil", href: "#about" },
    { name: "Parcours", href: "#experience" },
    { name: "Projets", href: "#projects" },
    { name: "Compétences", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative bg-[#020817] border-t border-slate-900/80 overflow-hidden">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />

      {/* Background */}
      <div className="absolute inset-0 bg-solar-grid opacity-20" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-amber-500/4 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-14 grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Brand Column */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="relative w-11 h-11 rounded-xl bg-gradient-to-tr from-amber-500/20 to-emerald-500/15 border border-amber-500/25 flex items-center justify-center">
                <Sun className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <div className="font-heading text-base font-extrabold text-white">Mohamed MEREHOUM</div>
                <div className="text-xs text-slate-500 font-mono-code">Systèmes Énergie Solaire</div>
              </div>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed">
              Technicien Spécialisé en Systèmes Énergie Solaire, diplômé de l&apos;IFMEREE d&apos;Oujda. Expertise en PVsyst, AutoCAD, SketchUp et installation photovoltaïque.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-600">
              <MapPin className="w-3.5 h-3.5 text-amber-500/60" />
              <span>Oujda, Maroc · Mobilité Nationale</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-5">
            <h4 className="font-heading font-bold text-sm text-white">Navigation</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-500 hover:text-amber-400 transition-colors duration-200 underline-animated inline-flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-slate-700" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-5">
            <h4 className="font-heading font-bold text-sm text-white">Contact</h4>
            <div className="space-y-3">
              <a
                href="mailto:mohamedbmerehoum@gmail.com"
                className="flex items-center gap-2.5 text-xs text-slate-400 hover:text-amber-400 transition-colors group"
              >
                <div className="w-7 h-7 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:border-amber-500/40 transition-colors">
                  <Mail className="w-3.5 h-3.5 text-amber-400" />
                </div>
                <span>mohamedbmerehoum@gmail.com</span>
              </a>
              <a
                href="tel:+212614440770"
                className="flex items-center gap-2.5 text-xs text-slate-400 hover:text-emerald-400 transition-colors group"
              >
                <div className="w-7 h-7 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:border-emerald-500/40 transition-colors">
                  <Phone className="w-3.5 h-3.5 text-emerald-400" />
                </div>
                <span>+212 614 440 770</span>
              </a>
            </div>

            <div className="pt-2">
              <a
                href="/cv_mohamed_merehoum.pdf"
                download
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-500/10 to-amber-500/5 border border-amber-500/20 text-xs font-semibold text-amber-400 hover:border-amber-500/50 transition-all"
              >
                Télécharger CV PDF
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-5 border-t border-slate-900/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-600">
            © {new Date().getFullYear()} <span className="text-slate-500 font-medium">Mohamed MEREHOUM</span>. Tous droits réservés.
          </p>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -3, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/80 text-xs font-semibold text-slate-400 border border-slate-800 hover:border-amber-500/30 hover:text-amber-400 transition-all"
          >
            <span>Haut de page</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
