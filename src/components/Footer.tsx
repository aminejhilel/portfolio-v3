"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, ArrowUp, Mail, Phone, MapPin, Code, X, ExternalLink, Zap } from "lucide-react";

/* ─── Social SVG Icons ──────────────────────────── */
function GithubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
    </svg>
  );
}

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fillRule="evenodd" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" clipRule="evenodd" />
    </svg>
  );
}

function LinkedinIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>
  );
}

export default function Footer() {
  const [showDevModal, setShowDevModal] = useState(false);

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
    <footer className="relative bg-slate-950 text-white overflow-hidden border-t-2 border-slate-800">
      {/* Background dots */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/4 w-80 h-40 rounded-full bg-amber-500/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-64 h-40 rounded-full bg-emerald-500/5 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top gradient line */}
        <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-amber-500/50 to-transparent mb-12 mt-0" />

        {/* Main Footer Content */}
        <div className="pb-12 grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Brand Column */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="relative w-11 h-11 rounded-xl bg-amber-400 border-2 border-amber-300 flex items-center justify-center shadow-[3px_3px_0px_rgba(245,158,11,0.3)]">
                <Sun className="w-6 h-6 text-slate-950" />
              </div>
              <div>
                <div className="font-bebas text-2xl font-black text-white tracking-wide">Mohamed MEREHOUM</div>
                <div className="text-xs text-amber-400 font-mono font-bold flex items-center gap-1">
                  <Zap className="w-3 h-3" />
                  Systèmes Énergie Solaire
                </div>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed font-body">
              Technicien Spécialisé en Systèmes Énergie Solaire, diplômé de l&apos;IFMEREE d&apos;Oujda. Expertise en PVsyst, AutoCAD, SketchUp et installation photovoltaïque.
            </p>
            <div className="flex items-center gap-2 text-xs font-bold text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-amber-500" />
              <span>Oujda, Maroc · Mobilité Nationale</span>
            </div>
            {/* Availability */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Disponible
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-bebas text-xl font-black text-white tracking-wider flex items-center gap-2">
              <span className="w-6 h-0.5 bg-amber-400 inline-block" />
              Navigation
            </h4>
            <ul className="space-y-2 font-body font-bold text-xs">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-amber-400 transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-amber-400 transition-colors" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-bebas text-xl font-black text-white tracking-wider flex items-center gap-2">
              <span className="w-6 h-0.5 bg-amber-400 inline-block" />
              Contact Direct
            </h4>
            <div className="space-y-2.5">
              <a
                href="mailto:mohamedmerehoum860@gmail.com"
                className="flex items-center gap-2.5 text-xs font-bold text-slate-400 hover:text-amber-400 transition-colors"
              >
                <div className="w-7 h-7 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <span>mohamedmerehoum860@gmail.com</span>
              </a>
              <a
                href="tel:0672992948"
                className="flex items-center gap-2.5 text-xs font-bold text-slate-400 hover:text-emerald-400 transition-colors"
              >
                <div className="w-7 h-7 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <span>0672-992948</span>
              </a>
            </div>

            <div className="pt-1">
              <a
                href="/cv_mohamed_merehoum.pdf"
                download
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-500 text-slate-950 font-extrabold text-xs border-2 border-amber-400 shadow-[3px_3px_0px_rgba(245,158,11,0.3)] hover:shadow-[1px_1px_0px_rgba(245,158,11,0.3)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
              >
                Télécharger CV PDF
              </a>
            </div>
          </div>
        </div>

        {/* Gradient divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-700 to-transparent mb-5" />

        {/* Bottom Bar */}
        <div className="py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 flex-wrap">
            <p className="text-xs font-mono font-bold text-slate-500">
              © {new Date().getFullYear()} Mohamed MEREHOUM. Tous droits réservés.
            </p>

            {/* Developer Button */}
            <motion.button
              onClick={() => setShowDevModal(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 text-amber-400 text-xs font-mono font-bold border border-slate-700 hover:border-amber-500/50 cursor-pointer transition-all"
            >
              <Code className="w-3.5 h-3.5 text-amber-400" />
              <span>Développé par Amine Jhilel</span>
            </motion.button>
          </div>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-500 text-slate-950 text-xs font-mono font-bold border-2 border-amber-400 shadow-[3px_3px_0px_rgba(245,158,11,0.3)] hover:shadow-[1px_1px_0px_rgba(245,158,11,0.3)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all cursor-pointer"
          >
            <span>Haut de page</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </motion.button>
        </div>
      </div>

      {/* Developer Modal Popup */}
      <AnimatePresence>
        {showDevModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85, y: 20 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-md bg-white rounded-3xl p-7 border-2 border-slate-900 shadow-[8px_8px_0px_rgba(15,23,42,1)] space-y-6 text-slate-900"
            >
              {/* Top accent */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-400 via-emerald-400 to-sky-400 rounded-t-3xl" />
              {/* Scotch Tape Header */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-32 h-6 bg-amber-300 border-x-2 border-dashed border-amber-500 rotate-1 shadow-sm flex items-center justify-center">
                <span className="font-mono text-[10px] font-black uppercase text-slate-950">DEVELOPER INFO</span>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setShowDevModal(false)}
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-300 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="pt-3 text-center space-y-1">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-amber-400 border-2 border-slate-900 flex items-center justify-center shadow-[4px_4px_0px_rgba(15,23,42,1)]">
                  <Code className="w-8 h-8 text-slate-950" />
                </div>
                <h3 className="font-bebas text-3xl font-black text-slate-900 tracking-wide pt-2">
                  Amine Jhilel
                </h3>
                <p className="text-xs font-mono font-bold text-amber-700">
                  Développeur Full-Stack & Web Creator
                </p>
              </div>

              <div className="space-y-3 font-body">
                {/* Phone */}
                <a
                  href="tel:+212650475939"
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-emerald-50 border-2 border-emerald-200 hover:border-emerald-500 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-emerald-300 text-slate-950 border border-slate-900">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono font-bold text-slate-500">Téléphone / WhatsApp</div>
                      <div className="text-sm font-bold text-slate-900 group-hover:text-emerald-700">+212 650-475939</div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-emerald-500" />
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/aminejhilel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-900 text-white border-2 border-slate-800 hover:bg-slate-800 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-amber-400 text-slate-950">
                      <GithubIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono font-bold text-amber-400">GitHub</div>
                      <div className="text-sm font-bold">github.com/aminejhilel</div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-amber-400" />
                </a>

                {/* Instagram & LinkedIn */}
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href="https://www.instagram.com/amine.jhilel.7/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-rose-50 border-2 border-rose-200 text-slate-900 hover:border-rose-500 transition-all"
                  >
                    <InstagramIcon className="w-4 h-4 text-rose-600" />
                    <span className="text-xs font-bold">Instagram</span>
                  </a>

                  <a
                    href="https://linkedin.com/in/aminejhilel"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-sky-50 border-2 border-sky-200 text-slate-900 hover:border-sky-500 transition-all"
                  >
                    <LinkedinIcon className="w-4 h-4 text-sky-600" />
                    <span className="text-xs font-bold">LinkedIn</span>
                  </a>
                </div>
              </div>

              <div className="pt-1">
                <button
                  onClick={() => setShowDevModal(false)}
                  className="w-full py-2.5 rounded-xl bg-slate-900 text-amber-400 text-xs font-mono font-bold border-2 border-slate-800 shadow-[3px_3px_0px_rgba(245,158,11,0.3)] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] transition-all cursor-pointer"
                >
                  Fermer
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </footer>
  );
}
