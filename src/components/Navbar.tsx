"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Sun, Zap, Menu, X, FileText, Download } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
      const sections = ["hero", "about", "experience", "projects", "skills", "contact"];
      const scrollPosition = window.scrollY + 200;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Accueil", href: "#hero", id: "hero" },
    { name: "Profil", href: "#about", id: "about" },
    { name: "Parcours", href: "#experience", id: "experience" },
    { name: "Projets", href: "#projects", id: "projects" },
    { name: "Compétences", href: "#skills", id: "skills" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] z-[60] origin-left"
        style={{
          scaleX,
          background: "linear-gradient(90deg, #f59e0b, #10b981, #3b82f6)",
        }}
      />

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "py-2"
            : "bg-transparent py-4"
        }`}
      >
        {/* Background blur panel when scrolled */}
        {scrolled && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 bg-white/80 backdrop-blur-xl border-b-2 border-slate-900 shadow-lg"
          />
        )}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between relative z-10">

          {/* Logo */}
          <a href="#hero" className="flex items-center space-x-2.5 group">
            <motion.div
              whileHover={{ rotate: 180, scale: 1.1 }}
              transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
              className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-amber-300 border-2 border-slate-900 shadow-[3px_3px_0px_rgba(15,23,42,1)] group-hover:shadow-[5px_5px_0px_rgba(15,23,42,1)] transition-shadow"
            >
              <Sun className="w-6 h-6 text-slate-950" />
            </motion.div>
            <div className="flex flex-col">
              <span className="font-bebas text-xl font-black tracking-wide text-slate-900 group-hover:text-amber-600 transition-colors">
                MOHAMED <span className="text-amber-500">MEREHOUM</span>
              </span>
              <span className="text-[10px] text-slate-500 font-mono font-bold flex items-center gap-1">
                <Zap className="w-2.5 h-2.5 text-amber-500" />
                Systèmes Énergie Solaire
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-1 bg-white/95 p-1.5 rounded-2xl border-2 border-slate-900 shadow-[4px_4px_0px_rgba(15,23,42,1)] backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative px-4 py-1.5 text-xs font-bold font-heading rounded-xl transition-all duration-200 ${
                    isActive ? "text-slate-950" : "text-slate-600 hover:text-slate-950"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNavTab"
                      className="absolute inset-0 bg-amber-300 rounded-xl border border-amber-400 shadow-[2px_2px_0px_rgba(15,23,42,0.3)]"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </a>
              );
            })}
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-2.5">
            <Link
              href="/cv"
              className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold rounded-xl bg-white text-slate-900 border-2 border-slate-900 shadow-[3px_3px_0px_rgba(15,23,42,1)] hover:shadow-[1px_1px_0px_rgba(15,23,42,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
            >
              <FileText className="w-3.5 h-3.5 text-amber-600" />
              <span>Voir CV</span>
            </Link>
            <motion.a
              href="/cv_mohamed_merehoum.pdf"
              download
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 px-4 py-2 text-xs font-extrabold rounded-xl bg-amber-500 text-slate-950 border-2 border-slate-900 shadow-[3px_3px_0px_rgba(15,23,42,1)] hover:shadow-[1px_1px_0px_rgba(15,23,42,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
            >
              <Download className="w-3.5 h-3.5" />
              <span>PDF</span>
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 rounded-xl bg-white text-slate-900 border-2 border-slate-900 shadow-[3px_3px_0px_rgba(15,23,42,1)]"
            aria-label="Toggle Navigation"
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {mobileMenuOpen ? (
                <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <X className="w-5 h-5" />
                </motion.div>
              ) : (
                <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <Menu className="w-5 h-5" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="md:hidden bg-white/95 backdrop-blur-xl border-b-2 border-slate-900 px-4 pt-4 pb-6 overflow-hidden shadow-xl"
            >
              <div className="space-y-1 mb-4">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-bold transition-all ${
                      activeSection === link.id
                        ? "bg-amber-300 text-slate-950 border-2 border-amber-500 shadow-[2px_2px_0px_rgba(15,23,42,0.3)]"
                        : "text-slate-800 hover:bg-slate-100"
                    }`}
                  >
                    <span className={`w-2 h-2 rounded-full ${activeSection === link.id ? "bg-slate-950" : "bg-slate-400"}`} />
                    {link.name}
                  </motion.a>
                ))}
              </div>
              <div className="pt-4 border-t-2 border-slate-200 flex flex-col gap-2.5">
                <Link
                  href="/cv"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 px-4 py-3 text-sm font-bold rounded-xl bg-white text-slate-900 border-2 border-slate-900 shadow-[3px_3px_0px_rgba(15,23,42,1)]"
                >
                  <FileText className="w-4 h-4 text-amber-600" />
                  <span>Voir CV (Imprimable)</span>
                </Link>
                <a
                  href="/cv_mohamed_merehoum.pdf"
                  download
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 px-4 py-3 text-sm font-extrabold rounded-xl bg-amber-500 text-slate-950 border-2 border-slate-900 shadow-[3px_3px_0px_rgba(15,23,42,1)]"
                >
                  <Download className="w-4 h-4" />
                  <span>Télécharger CV PDF</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
