"use client";

import { motion, Variants } from "framer-motion";
import { Sun, Zap, MapPin, ArrowRight, Download, CheckCircle2, ShieldCheck, Compass, Sparkles } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-radial-solar bg-solar-grid">
      {/* Background Animated Glowing Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none animate-pulse-flare" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col lg:flex-row items-center justify-between gap-12"
        >
          
          {/* Left Column: Text Content */}
          <div className="flex-1 text-center lg:text-left space-y-6">
            
            {/* Stage PFE Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-xs font-semibold shadow-lg shadow-emerald-950/50">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
              <span>Stage PFE chez Energy Pro Tech (Mars – Juin 2026)</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1 variants={itemVariants} className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Mohamed <br className="hidden sm:inline" />
              <span className="text-gradient-amber">MEREHOUM</span>
            </motion.h1>

            {/* Specialty Subtitle */}
            <motion.h2 variants={itemVariants} className="font-heading text-xl sm:text-2xl font-bold text-slate-200 flex items-center justify-center lg:justify-start gap-2.5">
              <div className="p-1.5 rounded-lg bg-amber-500/10 border border-amber-500/20">
                <Zap className="w-5 h-5 text-amber-400 shrink-0" />
              </div>
              <span>Technicien Spécialisé en Systèmes Énergie Solaire</span>
            </motion.h2>

            {/* Bio summary */}
            <motion.p variants={itemVariants} className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed">
              Passionné par les énergies renouvelables et formé à l'<strong>IFMEREE d'Oujda</strong>. 
              Expérience concrète de terrain lors du stage PFE chez <strong>Energy Pro Tech</strong> (pose de structures Fer H/Profil C, pose de panneaux, câblage DC/AC), 
              ainsi qu'en dimensionnement (<strong>PVsyst</strong>, <strong>PVSol</strong>) et modélisation 2D/3D (<strong>AutoCAD</strong>, <strong>SketchUp</strong>).
            </motion.p>

            {/* Location & Status chips */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs font-semibold text-slate-300">
              <span className="flex items-center gap-1.5 bg-slate-900/90 px-3.5 py-1.5 rounded-xl border border-slate-800 shadow-md">
                <MapPin className="w-4 h-4 text-amber-400" /> Oujda, Maroc
              </span>
              <span className="flex items-center gap-1.5 bg-slate-900/90 px-3.5 py-1.5 rounded-xl border border-slate-800 shadow-md">
                <Compass className="w-4 h-4 text-emerald-400" /> Mobilité Nationale
              </span>
              <span className="flex items-center gap-1.5 bg-slate-900/90 px-3.5 py-1.5 rounded-xl border border-slate-800 shadow-md">
                <ShieldCheck className="w-4 h-4 text-blue-400" /> Permis B
              </span>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#projects"
                className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-bold text-sm shadow-xl shadow-amber-500/25 transition-all transform hover:-translate-y-0.5"
              >
                <span>Explorer mes Projets</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="/cv_mohamed_merehoum.pdf"
                download
                className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 font-semibold text-sm border border-slate-700/80 hover:border-amber-500/50 transition-all shadow-lg"
              >
                <Download className="w-4 h-4 text-amber-400" />
                <span>Télécharger CV (PDF)</span>
              </a>

              <Link
                href="/cv"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-300 font-medium text-sm border border-slate-800"
              >
                <Sparkles className="w-4 h-4 text-emerald-400" />
                <span>Voir Version Web</span>
              </Link>
            </motion.div>

          </div>

          {/* Right Column: Interactive Profile & Metrics Card */}
          <motion.div variants={itemVariants} className="flex-1 w-full max-w-lg lg:max-w-none">
            <div className="relative glass-card solar-glow-card rounded-2xl p-6 sm:p-8 border border-slate-800/80 shadow-2xl space-y-6">
              
              {/* Profile Card Header */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-4 relative z-10">
                <div className="flex items-center gap-3.5">
                  <div className="relative w-14 h-14 rounded-2xl overflow-hidden border-2 border-amber-500/60 shadow-lg shadow-amber-500/10 shrink-0 animate-float">
                    <img
                      src="/cremti.jpeg"
                      alt="Mohamed MEREHOUM"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-heading text-base font-extrabold text-white">Mohamed MEREHOUM</h3>
                    <p className="text-xs text-amber-400 font-medium flex items-center gap-1 mt-0.5">
                      <Sun className="w-3.5 h-3.5" /> Technicien Systèmes Solaire
                    </p>
                  </div>
                </div>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-300 font-semibold border border-emerald-500/30">
                  IFMEREE 2024–2026
                </span>
              </div>

              {/* Key Metrics Grid */}
              <div className="grid grid-cols-2 gap-4 relative z-10">
                <motion.div whileHover={{ scale: 1.03 }} className="p-4 rounded-xl bg-slate-900/70 border border-slate-800/80 shadow-md">
                  <div className="font-heading text-2xl sm:text-3xl font-black text-amber-400">1.4 MW</div>
                  <div className="text-xs text-slate-400 mt-1 font-medium">Centrale LEAR Meknès</div>
                </motion.div>

                <motion.div whileHover={{ scale: 1.03 }} className="p-4 rounded-xl bg-slate-900/70 border border-slate-800/80 shadow-md">
                  <div className="font-heading text-2xl sm:text-3xl font-black text-emerald-400">711 kW</div>
                  <div className="text-xs text-slate-400 mt-1 font-medium">Dimensionnement Heirchmane</div>
                </motion.div>

                <motion.div whileHover={{ scale: 1.03 }} className="p-4 rounded-xl bg-slate-900/70 border border-slate-800/80 shadow-md">
                  <div className="font-heading text-2xl sm:text-3xl font-black text-blue-400">170.5 m²</div>
                  <div className="text-xs text-slate-400 mt-1 font-medium">Toiture IFMEREE Salle B</div>
                </motion.div>

                <motion.div whileHover={{ scale: 1.03 }} className="p-4 rounded-xl bg-slate-900/70 border border-slate-800/80 shadow-md">
                  <div className="font-heading text-2xl sm:text-3xl font-black text-purple-400">100%</div>
                  <div className="text-xs text-slate-400 mt-1 font-medium">Câblage DC/AC & Onduleur</div>
                </motion.div>
              </div>

              {/* Verified Expertise Tags */}
              <div className="pt-2 relative z-10">
                <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2.5">
                  Logiciels et Outils Maîtrisés :
                </div>
                <div className="flex flex-wrap gap-2">
                  {["PVsyst", "PVSol", "AutoCAD 2D", "SketchUp 3D", "Gantt Projects", "Fer H / Profil C"].map((tool) => (
                    <span
                      key={tool}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono font-medium text-slate-300 border border-slate-700/60 shadow-sm"
                    >
                      <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
