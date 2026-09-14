"use client";

import { motion, useInView } from "framer-motion";
import { Cpu, Sun, Layers, Wrench, Monitor, Check, Zap, Globe } from "lucide-react";
import { useRef } from "react";

function SkillBar({ name, level, delay, color }: { name: string; level: string; delay: number; color: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="space-y-1.5">
      <div className="flex justify-between items-center text-xs font-bold font-body">
        <span className="text-slate-800 flex items-center gap-2">
          <motion.span
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.3, delay: delay + 0.2 }}
          >
            <Check className="w-4 h-4 text-emerald-600" />
          </motion.span>
          {name}
        </span>
        <span className={`font-mono text-xs font-bold ${color}`}>
          {level}
        </span>
      </div>
      <div className="w-full h-3 rounded-full bg-slate-200 overflow-hidden border border-slate-300 relative shadow-inner">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: level } : { width: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay }}
          className="h-full rounded-full bg-amber-400 border-r-2 border-slate-900 shadow-sm"
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const skillCategories = [
    {
      title: "Dimensionnement & Études Solaires",
      icon: Sun,
      color: "text-amber-950",
      bgColor: "bg-amber-300 border-amber-500",
      barColor: "text-amber-700",
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
      color: "text-emerald-950",
      bgColor: "bg-emerald-300 border-emerald-500",
      barColor: "text-emerald-700",
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
      color: "text-sky-950",
      bgColor: "bg-sky-300 border-sky-500",
      barColor: "text-sky-700",
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
      color: "text-purple-950",
      bgColor: "bg-purple-300 border-purple-500",
      barColor: "text-purple-700",
      skills: [
        { name: "Maintenance Préventive & Corrective", level: "90%" },
        { name: "Appareils de mesure (Multimètre, Pince)", level: "92%" },
        { name: "Gantt Projects (Planning & Ressources)", level: "88%" },
        { name: "Pack Office (Word, Excel, PPT)", level: "95%" },
      ],
    },
  ];

  const languages = [
    { name: "Arabe", level: "Langue maternelle", pct: 100 },
    { name: "Français", level: "Courant", pct: 85 },
    { name: "Anglais", level: "Technique (lecture)", pct: 65 },
    { name: "Tamazight", level: "Courant", pct: 85 },
  ];

  return (
    <section id="skills" className="py-24 paper-canvas relative border-t border-slate-200 overflow-hidden text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 text-amber-400 text-xs font-mono font-bold shadow-md">
            <Cpu className="w-4 h-4" />
            <span>SAVOIR-FAIRE TECHNIQUE</span>
          </div>
          <h2 className="font-bebas text-5xl sm:text-6xl font-black text-slate-900 tracking-tight">
            COMPÉTENCES <span className="text-amber-500 underline decoration-amber-400 decoration-wavy decoration-2">TECHNIQUES</span>
          </h2>
          <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-body">
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
                whileHover={{ y: -4 }}
                className="bg-white rounded-3xl p-7 border-2 border-slate-900 shadow-xl space-y-6 relative overflow-hidden"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3.5 border-b border-slate-200 pb-5">
                  <div className={`p-3 rounded-2xl ${cat.bgColor} border-2 border-slate-900 shadow-sm`}>
                    <Icon className={`w-6 h-6 ${cat.color}`} />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-extrabold text-slate-900">{cat.title}</h3>
                    <p className="text-xs font-mono text-slate-500 mt-0.5">{cat.skills.length} compétences clés</p>
                  </div>
                </div>

                {/* Skills with Progress Bars */}
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
          className="bg-white rounded-3xl p-7 sm:p-8 border-2 border-slate-900 shadow-xl"
        >
          <div className="flex items-center gap-3 mb-7 border-b border-slate-200 pb-5">
            <div className="p-3 rounded-2xl bg-sky-300 text-slate-950 border-2 border-slate-900 shadow-sm">
              <Globe className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-heading text-xl font-extrabold text-slate-900">Langues</h3>
              <p className="text-xs font-mono text-slate-500">Maîtrise linguistique</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {languages.map((lang, i) => (
              <div key={i} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-bold text-slate-900">{lang.name}</span>
                  <span className="text-xs font-mono font-bold bg-amber-100 text-amber-950 border border-amber-300 px-2.5 py-0.5 rounded-md">{lang.level}</span>
                </div>
                <div className="w-full h-3 rounded-full bg-slate-200 border border-slate-300 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${lang.pct}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.15 * i + 0.3 }}
                    className="h-full bg-emerald-400 border-r-2 border-slate-900"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
