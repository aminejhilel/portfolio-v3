"use client";

import { motion, useInView } from "framer-motion";
import { Cpu, Sun, Layers, Wrench, Monitor, Check, Zap, Globe } from "lucide-react";
import { useRef } from "react";

function SkillBar({ name, level, delay, color }: { name: string; level: string; delay: number; color: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const numLevel = parseInt(level);

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between items-center text-xs font-medium">
        <span className="text-slate-200 flex items-center gap-2">
          <motion.span
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.3, delay: delay + 0.3 }}
          >
            <Check className="w-3.5 h-3.5 text-emerald-400" />
          </motion.span>
          {name}
        </span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: delay + 0.8, duration: 0.3 }}
          className={`font-mono-code font-semibold ${color}`}
        >
          {level}
        </motion.span>
      </div>
      <div className="w-full h-2.5 rounded-full bg-slate-900/80 overflow-hidden border border-slate-800/60 relative">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: level } : { width: 0 }}
          transition={{ duration: 1.4, ease: [0.34, 1.56, 0.64, 1], delay }}
          className={`h-full rounded-full relative overflow-hidden bg-gradient-to-r ${
            numLevel >= 90
              ? "from-amber-500 to-amber-400"
              : numLevel >= 85
              ? "from-emerald-500 to-emerald-400"
              : "from-blue-500 to-blue-400"
          }`}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            animate={{ x: ["-100%", "200%"] }}
            transition={{ duration: 2, repeat: Infinity, delay: delay + 1, ease: "linear" }}
          />
        </motion.div>
      </div>
    </div>
  );
}

export default function Skills() {
  const skillCategories = [
    {
      title: "Dimensionnement & Études Solaires",
      icon: Sun,
      color: "text-amber-400",
      bgColor: "bg-amber-500/10 border-amber-500/20",
      barColor: "text-amber-400",
      glow: "hover:shadow-amber-500/15",
      skills: [
        { name: "Dimensionnement PVsyst", level: "95%" },
        { name: "Simulation PVSol", level: "90%" },
        { name: "Notes de calculs sous Excel", level: "95%" },
        { name: "Choix matériel & Onduleurs", level: "90%" },
        { name: "Évaluation bilans CO₂ & Énergie", level: "85%" },
      ],
    },
    {
      title: "DAO 2D / 3D & Conception",
      icon: Layers,
      color: "text-emerald-400",
      bgColor: "bg-emerald-500/10 border-emerald-500/20",
      barColor: "text-emerald-400",
      glow: "hover:shadow-emerald-500/15",
      skills: [
        { name: "AutoCAD 2D (Schémas électriques)", level: "90%" },
        { name: "SketchUp 3D (Modélisation)", level: "92%" },
        { name: "Schémas Unifilaires & Multifilaires", level: "88%" },
        { name: "Plans d'implantation & Mise à la terre", level: "90%" },
      ],
    },
    {
      title: "Mise en Service & Câblage",
      icon: Wrench,
      color: "text-blue-400",
      bgColor: "bg-blue-500/10 border-blue-500/20",
      barColor: "text-blue-400",
      glow: "hover:shadow-blue-500/15",
      skills: [
        { name: "Assemblage Structures Fer H / Profil C", level: "95%" },
        { name: "Câblage Coffrets DC et AC", level: "95%" },
        { name: "Dénudage & Sertissage de précision", level: "95%" },
        { name: "Programmation des Onduleurs", level: "88%" },
        { name: "Test & Passage courant câbles", level: "90%" },
      ],
    },
    {
      title: "Maintenance & Gestion de Projet",
      icon: Monitor,
      color: "text-purple-400",
      bgColor: "bg-purple-500/10 border-purple-500/20",
      barColor: "text-purple-400",
      glow: "hover:shadow-purple-500/15",
      skills: [
        { name: "Maintenance Préventive & Corrective", level: "90%" },
        { name: "Appareils de mesure (Clamp, Multimètre)", level: "92%" },
        { name: "Gantt Projects (Planning & Ressources)", level: "88%" },
        { name: "Pack Office (Word, Excel, PPT)", level: "95%" },
      ],
    },
  ];

  const languages = [
    { name: "Arabe", level: "Langue maternelle", pct: 100, color: "from-amber-500 to-yellow-400" },
    { name: "Français", level: "Courant", pct: 82, color: "from-blue-500 to-blue-400" },
    { name: "Anglais", level: "Technique (lecture)", pct: 60, color: "from-emerald-500 to-emerald-400" },
    { name: "Tamazight", level: "Courant", pct: 85, color: "from-orange-500 to-orange-400" },
  ];

  return (
    <section id="skills" className="py-24 bg-[#020817] relative border-t border-slate-900/80 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-solar-grid opacity-25" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-500/3 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/8 border border-emerald-500/20 text-emerald-400 text-xs font-semibold"
          >
            <Cpu className="w-3.5 h-3.5" />
            <span>Savoir-Faire Technique</span>
          </motion.div>
          <h2 className="font-display text-4xl sm:text-5xl font-black text-white tracking-tight">
            Compétences <span className="text-gradient-emerald">Techniques</span>
          </h2>
          <p className="text-slate-400 text-base">
            Expertise combinée en études photovoltaïques, DAO électrique, montage et maintenance.
          </p>
        </motion.div>

        {/* Skill Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mb-10">
          {skillCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: 0.1 * idx }}
                whileHover={{ y: -5 }}
                className={`glass-card rounded-2xl p-7 border border-slate-800/60 space-y-6 relative overflow-hidden group transition-all duration-400 shadow-xl ${cat.glow}`}
              >
                {/* Inner gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl" />

                {/* Category Header */}
                <div className="flex items-center gap-3.5 border-b border-slate-800/60 pb-5">
                  <motion.div
                    whileHover={{ rotate: 15, scale: 1.1 }}
                    className={`p-3 rounded-xl ${cat.bgColor} border shadow-md`}
                  >
                    <Icon className={`w-6 h-6 ${cat.color}`} />
                  </motion.div>
                  <div>
                    <h3 className="font-heading text-lg font-bold text-white">{cat.title}</h3>
                    <p className="text-xs text-slate-500 mt-0.5">{cat.skills.length} compétences</p>
                  </div>
                  <div className="ml-auto">
                    <Zap className={`w-4 h-4 ${cat.color} opacity-40`} />
                  </div>
                </div>

                {/* Skills with Animated Progress Bars */}
                <div className="space-y-4 relative z-10">
                  {cat.skills.map((item, sIdx) => (
                    <SkillBar
                      key={sIdx}
                      name={item.name}
                      level={item.level}
                      delay={0.1 * sIdx + 0.2 * idx}
                      color={cat.barColor}
                    />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Languages Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card rounded-2xl p-7 sm:p-8 border border-slate-800/60 shadow-xl"
        >
          <div className="flex items-center gap-3 mb-7 border-b border-slate-800/60 pb-5">
            <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20">
              <Globe className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <h3 className="font-heading text-lg font-bold text-white">Langues</h3>
              <p className="text-xs text-slate-500">Compétences linguistiques</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {languages.map((lang, i) => (
              <div key={i} className="space-y-2.5">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-semibold text-slate-200">{lang.name}</span>
                  <span className="text-xs text-slate-400 font-mono-code bg-slate-900/60 px-2.5 py-0.5 rounded-lg border border-slate-800">{lang.level}</span>
                </div>
                <div className="w-full h-2.5 rounded-full bg-slate-900/80 overflow-hidden border border-slate-800/60">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${lang.pct}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.3, ease: [0.34, 1.56, 0.64, 1], delay: 0.15 * i + 0.3 }}
                    className={`h-full rounded-full bg-gradient-to-r ${lang.color} relative overflow-hidden`}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent"
                      animate={{ x: ["-100%", "200%"] }}
                      transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.5, ease: "linear" }}
                    />
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
