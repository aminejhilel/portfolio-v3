"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Sun, Zap, Menu, X, Phone, FileText, Sparkles } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

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
    window.addEventListener("scroll", handleScroll);
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
      {/* Top Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 via-emerald-400 to-blue-500 z-50 origin-left"
        style={{ scaleX }}
      />

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? "bg-slate-950/85 backdrop-blur-xl border-b border-slate-800/80 py-3 shadow-2xl shadow-slate-950/80"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo / Brand */}
          <a href="#hero" className="flex items-center space-x-3 group">
            <motion.div
              whileHover={{ rotate: 90, scale: 1.1 }}
              transition={{ duration: 0.5, type: "spring" }}
              className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-emerald-500 p-0.5 shadow-lg shadow-amber-500/20"
            >
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <Sun className="w-5 h-5 text-amber-400" />
              </div>
            </motion.div>
            <div className="flex flex-col">
              <span className="font-heading text-lg font-extrabold tracking-tight text-white group-hover:text-amber-400 transition-colors">
                Mohamed <span className="text-gradient-amber">MEREHOUM</span>
              </span>
              <span className="text-[11px] text-slate-400 flex items-center gap-1 font-mono">
                <Zap className="w-3 h-3 text-emerald-400 animate-pulse" /> Systèmes Énergie Solaire
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-1.5 bg-slate-900/60 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative px-4 py-1.5 text-xs font-semibold rounded-full transition-all duration-300 ${
                    isActive ? "text-slate-950" : "text-slate-300 hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNavTab"
                      className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-500 rounded-full shadow-md shadow-amber-500/25"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </a>
              );
            })}
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Link
              href="/cv"
              className="flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700/60 transition-all hover:border-amber-500/40 shadow-md"
            >
              <FileText className="w-3.5 h-3.5 text-amber-400" />
              <span>Voir CV</span>
            </Link>
            <a
              href="/cv_mohamed_merehoum.pdf"
              download
              className="group flex items-center gap-2 px-4 py-2 text-xs font-bold rounded-xl bg-gradient-to-r from-amber-500 to-emerald-500 text-slate-950 hover:opacity-95 shadow-lg shadow-amber-500/20 transition-all transform hover:-translate-y-0.5"
            >
              <Sparkles className="w-3.5 h-3.5 group-hover:rotate-12 transition-transform" />
              <span>Télécharger PDF</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl text-slate-300 hover:text-white hover:bg-slate-900 focus:outline-none"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-slate-950/95 backdrop-blur-2xl border-b border-slate-800 px-4 pt-3 pb-6 space-y-2 mt-2 shadow-2xl overflow-hidden"
            >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-2.5 rounded-xl text-base font-medium text-slate-200 hover:text-amber-400 hover:bg-slate-900"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 border-t border-slate-800/80 flex flex-col gap-2.5">
                <Link
                  href="/cv"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold rounded-xl bg-slate-900 text-slate-200 border border-slate-700"
                >
                  <FileText className="w-4 h-4 text-amber-400" />
                  <span>Voir CV (Imprimable)</span>
                </Link>
                <a
                  href="/cv_mohamed_merehoum.pdf"
                  download
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-bold rounded-xl bg-gradient-to-r from-amber-500 to-emerald-500 text-slate-950"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Télécharger CV (PDF)</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
