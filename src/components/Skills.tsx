"use client";

import { motion, useInView } from "framer-motion";
import { Cpu, Sun, Layers, Wrench, Monitor, Globe, Star, TrendingUp } from "lucide-react";
import { useRef } from "react";

/* ─── Animated Skill Bar ─────────────────────────── */
function SkillBar({ name, level, delay, accentColor }: { name: string; level: string; delay: number; accentColor: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const pct = parseInt(level);

  const colorMap: Record<string, string> = {
    amber: "bg-amber-400",
    emerald: "bg-emerald-400",
    sky: "bg-sky-400",
    purple: "bg-purple-400",
  };
  const barColor = colorMap[accentColor] || "bg-amber-400";

  const getStars = (pct: number) => {
    if (pct >= 90) return 5;
    if (pct >= 80) return 4;
    if (pct >= 70) return 3;
    return 2;
  };

  return (
    <div ref={ref} className="space-y-1.5 group">
      <div className="flex justify-between items-center">
        <span className="text-sm font-bold text-slate-800 flex items-center gap-2 font-body">
          {name}
        </span>
        <div className="flex items-center gap-2">
          <div className="flex gap-0.5">
            {Array.from({ length: 5 }, (_, i) => (
              <Star
                key={i}
                className={`w-3 h-3 transition-all duration-300 ${
                  i < getStars(pct)
                    ? `fill-current ${accentColor === "amber" ? "text-amber-400" : accentColor === "emerald" ? "text-emerald-400" : accentColor === "sky" ? "text-sky-400" : "text-purple-400"}`
                    : "text-slate-200"
                }`}
              />
            ))}
          </div>
          <span className="font-mono text-xs font-bold text-slate-400">{level}</span>
        </div>
      </div>
      <div className="w-full h-2.5 rounded-full bg-slate-100 overflow-hidden border border-slate-200 relative">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: level } : { width: 0 }}
          transition={{ duration: 1.4, ease: "easeOut", delay }}
          className={`h-full rounded-full ${barColor} relative`}
        >
          {/* Shimmer effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
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
      accentColor: "amber",
      iconBg: "bg-amber-300",
      cardBg: "bg-white",
      cardBorder: "border-amber-200 hover:border-amber-400",
      headerBg: "bg-amber-50",
      skills: [
        { name: "Dimensionnement PVsyst 7.4", level: "95%" },
        { name: "Simulation PVSol", level: "90%" },
        { name: "Notes de calculs sous Excel", level: "95%" },
        { name: "Choix matériel & Onduleurs", level: "90%" },
        { name: "Évaluation bilans CO₂ & Énergie", level: "85%" },
      ],
    },
    {
      title: "DAO 2D / 3D & Conception",
      icon: Layers,
      accentColor: "emerald",
      iconBg: "bg-emerald-300",
      cardBg: "bg-white",
      cardBorder: "border-emerald-200 hover:border-emerald-400",
      headerBg: "bg-emerald-50",
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
      accentColor: "sky",
      iconBg: "bg-sky-300",
      cardBg: "bg-white",
      cardBorder: "border-sky-200 hover:border-sky-400",
      headerBg: "bg-sky-50",
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
      accentColor: "purple",
      iconBg: "bg-purple-300",
      cardBg: "bg-white",
      cardBorder: "border-purple-200 hover:border-purple-400",
      headerBg: "bg-purple-50",
      skills: [
        { name: "Maintenance Préventive & Corrective", level: "90%" },
        { name: "Appareils de mesure (Multimètre, Pince)", level: "92%" },
        { name: "Gantt Projects (Planning & Ressources)", level: "88%" },
        { name: "Pack Office (Word, Excel, PPT)", level: "95%" },
      ],
    },
  ];

  const languages = [
    { name: "Arabe", level: "Langue maternelle", pct: 100, flag: "🇲🇦", color: "bg-red-400" },
    { name: "Français", level: "Courant", pct: 85, flag: "🇫🇷", color: "bg-blue-400" },
    { name: "Anglais", level: "Technique (lecture)", pct: 65, flag: "🇬🇧", color: "bg-violet-400" },
    { name: "Tamazight", level: "Courant", pct: 85, flag: "🔵", color: "bg-sky-400" },
  ];

  const softSkillTags = [
    "💬 Communication", "🤝 Travail d'équipe", "⏱️ Gestion du temps",
    "🧩 Résolution de problèmes", "📋 Rigueur", "🎯 Autonomie",
    "🔍 Esprit analytique", "🌱 Curiosité & apprentissage",
  ];

  return (
    <section id="skills" className="py-24 relative border-t-2 border-slate-900 overflow-hidden text-slate-900 section-accent-top"
      style={{ backgroundColor: "#f0f4f8", backgroundImage: "radial-gradient(#c7d2e0 1px, transparent 1px), radial-gradient(#c7d2e0 1px, #f0f4f8 1px)", backgroundSize: "28px 28px", backgroundPosition: "0 0, 14px 14px" }}
    >
      {/* Ambient blobs */}
      <div className="absolute -top-20 right-1/4 w-80 h-80 rounded-full bg-purple-200/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-64 h-64 rounded-full bg-amber-200/20 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <div className="section-badge">
            <Cpu className="w-3.5 h-3.5" />
            <span>SAVOIR-FAIRE TECHNIQUE</span>
          </div>
          <h2 className="section-heading text-5xl sm:text-6xl">
            COMPÉTENCES <span className="text-amber-500 wavy-underline">TECHNIQUES</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-body">
            Expertise combinée en études photovoltaïques, DAO électrique, montage et maintenance.
          </p>
        </motion.div>

        {/* Skill Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {skillCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: 0.1 * idx }}
                whileHover={{ y: -4 }}
                className={`${cat.cardBg} rounded-3xl border-2 ${cat.cardBorder} shadow-[4px_4px_0px_rgba(15,23,42,0.12)] hover:shadow-[6px_6px_0px_rgba(15,23,42,0.2)] transition-all overflow-hidden`}
              >
                {/* Category Header */}
                <div className={`${cat.headerBg} px-7 py-5 flex items-center gap-3.5 border-b-2 border-slate-100`}>
                  <div className={`p-3 rounded-2xl ${cat.iconBg} border-2 border-slate-900 shadow-[3px_3px_0px_rgba(15,23,42,0.2)]`}>
                    <Icon className="w-6 h-6 text-slate-950" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-extrabold text-slate-900">{cat.title}</h3>
                    <p className="text-xs font-mono text-slate-400 mt-0.5 flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" />
                      {cat.skills.length} compétences clés
                    </p>
                  </div>
                </div>

                {/* Skills with Progress Bars */}
                <div className="px-7 py-6 space-y-4">
                  {cat.skills.map((item, sIdx) => (
                    <SkillBar
                      key={sIdx}
                      name={item.name}
                      level={item.level}
                      delay={0.1 * sIdx + 0.15 * idx}
                      accentColor={cat.accentColor}
                    />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Row: Languages + Soft Skills */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-3xl border-2 border-slate-200 shadow-[4px_4px_0px_rgba(15,23,42,0.1)] hover:shadow-[6px_6px_0px_rgba(15,23,42,0.15)] transition-all overflow-hidden"
          >
            <div className="bg-sky-50 px-7 py-5 border-b-2 border-slate-100 flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-sky-300 border-2 border-slate-900 shadow-[3px_3px_0px_rgba(15,23,42,0.2)]">
                <Globe className="w-6 h-6 text-slate-950" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-extrabold text-slate-900">Langues Pratiquées</h3>
                <p className="text-xs font-mono text-slate-400">Maîtrise linguistique</p>
              </div>
            </div>
            <div className="px-7 py-6 space-y-5">
              {languages.map((lang, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-bold text-slate-900 flex items-center gap-2">
                      <span>{lang.flag}</span>
                      {lang.name}
                    </span>
                    <span className="text-xs font-mono font-bold bg-amber-100 text-amber-950 border border-amber-300 px-2.5 py-0.5 rounded-md">
                      {lang.level}
                    </span>
                  </div>
                  <div className="w-full h-2.5 rounded-full bg-slate-100 border border-slate-200 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${lang.pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 0.15 * i + 0.3 }}
                      className={`h-full rounded-full ${lang.color} relative`}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Soft Skills Cloud */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-slate-900 text-white rounded-3xl border-2 border-slate-900 shadow-[4px_4px_0px_rgba(245,158,11,0.4)] overflow-hidden"
          >
            <div className="bg-slate-800 px-7 py-5 border-b-2 border-slate-700 flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-amber-400 border-2 border-amber-300">
                <TrendingUp className="w-6 h-6 text-slate-950" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-extrabold text-white">Compétences Transversales</h3>
                <p className="text-xs font-mono text-slate-400">Soft skills & qualités</p>
              </div>
            </div>
            <div className="px-7 py-6">
              <div className="flex flex-wrap gap-2.5">
                {softSkillTags.map((tag, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                    whileHover={{ scale: 1.08, y: -2 }}
                    className="px-3 py-1.5 rounded-xl bg-slate-800 text-amber-300 text-xs font-bold border border-slate-700 cursor-default hover:bg-slate-700 hover:border-amber-500 transition-all"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>

              {/* Availability indicator */}
              <div className="mt-6 p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center gap-3">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-400" />
                </span>
                <div>
                  <div className="text-sm font-bold text-emerald-400">Disponible pour de nouvelles opportunités</div>
                  <div className="text-xs text-slate-400 font-mono">Oujda, Maroc · Mobilité Nationale</div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
