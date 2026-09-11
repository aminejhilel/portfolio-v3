"use client";

import { motion } from "framer-motion";
import { Cpu, Sun, Layers, Wrench, Monitor, Check } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Dimensionnement & Études Solaires",
      icon: Sun,
      color: "text-amber-400",
      bgColor: "bg-amber-500/10 border-amber-500/20",
      skills: [
        { name: "Dimensionnement PVsyst", level: "95%" },
        { name: "Simulation PVSol", level: "90%" },
        { name: "Notes de calculs sous Excel", level: "95%" },
        { name: "Choix du matériel & Onduleurs", level: "90%" },
        { name: "Évaluation bilans CO₂ & Énergie", level: "85%" },
      ],
    },
    {
      title: "DAO 2D / 3D & Conception",
      icon: Layers,
      color: "text-emerald-400",
      bgColor: "bg-emerald-500/10 border-emerald-500/20",
      skills: [
        { name: "AutoCAD 2D (Schémas électrique & Câblage)", level: "90%" },
        { name: "SketchUp 3D (Modélisation avec mesures)", level: "92%" },
        { name: "Schémas Unifilaires et Multifilaires", level: "88%" },
        { name: "Plans d'implantation & Mise à la terre", level: "90%" },
      ],
    },
    {
      title: "Mise en Service & Câblage Électrique",
      icon: Wrench,
      color: "text-blue-400",
      bgColor: "bg-blue-500/10 border-blue-500/20",
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
      skills: [
        { name: "Maintenance Préventive & Corrective", level: "90%" },
        { name: "Utilisation des appareils de mesure", level: "92%" },
        { name: "Gantt Projects (Planning & Ressources)", level: "88%" },
        { name: "Pack Office (Word, Excel, PPT)", level: "95%" },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-slate-900/50 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
            <Cpu className="w-3.5 h-3.5" />
            <span>Savoir-Faire Technique</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Compétences Techniques & Logiciels
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Expertise combinée en études photovoltaïques, DAO électrique, montage et maintenance.
          </p>
        </motion.div>

        {/* Skill Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * idx }}
                className="glass-card glass-card-hover rounded-2xl p-6 sm:p-8 border border-slate-800 space-y-6"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
                  <div className={`p-2.5 rounded-xl ${cat.bgColor} border`}>
                    <Icon className={`w-6 h-6 ${cat.color}`} />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-white">{cat.title}</h3>
                </div>

                {/* Animated Progress Skill Bars */}
                <div className="space-y-4">
                  {cat.skills.map((item, sIdx) => (
                    <div key={sIdx} className="space-y-1.5">
                      <div className="flex justify-between items-center text-xs font-medium">
                        <span className="text-slate-200 flex items-center gap-1.5">
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          {item.name}
                        </span>
                        <span className="font-mono text-amber-400 font-semibold">{item.level}</span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-slate-900 overflow-hidden p-0.5 border border-slate-800">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: item.level }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, ease: "easeOut", delay: 0.1 * sIdx }}
                          className="h-full rounded-full bg-gradient-to-r from-amber-500 to-emerald-400"
                        />
                      </div>
                    </div>
                  ))}
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
