"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Sun, Zap, Menu, X, Phone, FileText, Sparkles, Download } from "lucide-react";
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
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-amber-500 via-emerald-400 to-blue-500 z-[60] origin-left"
        style={{ scaleX }}
      />

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-slate-950/80 backdrop-blur-2xl border-b border-slate-800/60 py-3 shadow-2xl shadow-slate-950/60"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

          {/* Logo */}
          <a href="#hero" className="flex items-center space-x-3 group">
            <motion.div
              whileHover={{ rotate: 180, scale: 1.1 }}
              transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
              className="relative flex items-center justify-center w-10 h-10 rounded-xl shadow-lg shadow-amber-500/25"
            >
              <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-amber-500 to-emerald-400 animate-sun-rays opacity-70" />
              <div className="relative w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center border border-amber-500/30">
                <Sun className="w-5 h-5 text-amber-400" />
              </div>
            </motion.div>
            <div className="flex flex-col">
              <span className="font-heading text-base font-extrabold tracking-tight text-white group-hover:text-amber-400 transition-colors duration-300">
                Mohamed <span className="text-gradient-amber">MEREHOUM</span>
              </span>
              <span className="text-[10px] text-slate-500 flex items-center gap-1 font-mono-code">
                <Zap className="w-2.5 h-2.5 text-emerald-400" />
                Systèmes Énergie Solaire
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-0.5 bg-slate-900/50 p-1.5 rounded-2xl border border-slate-800/60 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative px-4 py-1.5 text-xs font-semibold rounded-xl transition-all duration-300 ${
                    isActive ? "text-slate-950" : "text-slate-400 hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNavTab"
                      className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-500 rounded-xl shadow-md shadow-amber-500/30"
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
              className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-xl bg-slate-900/70 hover:bg-slate-800 text-slate-300 border border-slate-700/60 transition-all hover:border-slate-600 shadow-md"
            >
              <FileText className="w-3.5 h-3.5 text-amber-400" />
              <span>Voir CV</span>
            </Link>
            <motion.a
              href="/cv_mohamed_merehoum.pdf"
              download
              whileHover={{ scale: 1.04, y: -1 }}
              whileTap={{ scale: 0.97 }}
              className="group flex items-center gap-2 px-4 py-2 text-xs font-bold rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 text-slate-950 shadow-lg shadow-amber-500/25 transition-all shine-hover"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Télécharger PDF</span>
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 rounded-xl text-slate-400 hover:text-white hover:bg-slate-900 focus:outline-none border border-slate-800 transition-all"
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
              className="md:hidden bg-slate-950/95 backdrop-blur-2xl border-b border-slate-800/60 px-4 pt-4 pb-6 overflow-hidden"
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
                    className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                      activeSection === link.id
                        ? "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                        : "text-slate-300 hover:text-white hover:bg-slate-900"
                    }`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${activeSection === link.id ? "bg-amber-400" : "bg-slate-700"}`} />
                    {link.name}
                  </motion.a>
                ))}
              </div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="pt-4 border-t border-slate-800/60 flex flex-col gap-2.5"
              >
                <Link
                  href="/cv"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold rounded-xl bg-slate-900 text-slate-200 border border-slate-700"
                >
                  <FileText className="w-4 h-4 text-amber-400" />
                  <span>Voir CV (Imprimable)</span>
                </Link>
                <a
                  href="/cv_mohamed_merehoum.pdf"
                  download
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 px-4 py-3 text-sm font-bold rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 text-slate-950"
                >
                  <Download className="w-4 h-4" />
                  <span>Télécharger CV PDF</span>
                </a>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
