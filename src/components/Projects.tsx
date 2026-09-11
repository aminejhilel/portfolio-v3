"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FolderGit2, Sun, Zap, CheckCircle2, Building, BarChart3, Compass } from "lucide-react";

export default function Projects() {
  const [activeProject, setActiveProject] = useState<number>(0);

  const projects = [
    {
      id: 0,
      title: "Installation Solaire Photovoltaïque EST-OUEST",
      clientLocation: "LEAR Meknès, Maroc",
      capacity: "1,4 MW (MégaWatt)",
      surface: "Grande Échelle Industrielle",
      summary: "Étude et modélisation d'une centrale photovoltaïque d'envergure industrielle avec panneaux orientés Est-Ouest pour optimiser la courbe de production journalière.",
      tools: ["PVSol", "SketchUp 3D", "Gantt Projects", "Excel Solaire"],
      tasks: [
        "Préparation et simulation du rapport de rendement énergétique sous PVSol.",
        "Modélisation et projection 3D exacte des panneaux et structures sur SketchUp.",
        "Planification complète du calendrier d'exécution et affectation des ressources sur Gantt Projects.",
      ],
      highlights: [
        { label: "Puissance totale", value: "1.4 MW" },
        { label: "Orientation", value: "Est - Ouest" },
        { label: "Lieu", value: "LEAR Meknès" },
      ],
      tagColor: "bg-amber-500/10 text-amber-400 border-amber-500/30",
    },
    {
      id: 1,
      title: "Centrale Photovoltaïque & Bilan Carbone CO₂",
      clientLocation: "Heirchmane Kénitra, Maroc",
      capacity: "711 kW",
      surface: "Bâtiment Industriel",
      summary: "Dimensionnement technique rigoureux et analyse environnementale des émissions de CO₂ évitées pour une puissance globale de 711 kW.",
      tools: ["PVsyst", "Excel Avancé", "Word", "Calcul CO₂"],
      tasks: [
        "Élaboration des notes de calculs solaires avancées et formules sous Excel.",
        "Préparation du rapport PVsyst incluant la modélisation des pertes et de l'économie en CO₂.",
        "Rédaction du rapport technique général d'ingénierie sous MS Word.",
      ],
      highlights: [
        { label: "Puissance", value: "711 kW" },
        { label: "Bilan", value: "Émissions CO₂" },
        { label: "Lieu", value: "Kénitra" },
      ],
      tagColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
    },
    {
      id: 2,
      title: "Installation Photovoltaïque en Toiture Salle B",
      clientLocation: "IFMEREE Oujda, Maroc",
      capacity: "Toiture 170.5 m²",
      surface: "170.5 m² utile",
      summary: "Projet complet depuis les relevés topographiques et métrés in situ jusqu'à la modélisation des plans AutoCAD et simulation PVsyst.",
      tools: ["AutoCAD 2D", "PVsyst", "Relevé Terrain", "Formules Excel"],
      tasks: [
        "Visite technique du local et prise des mesures physiques précises de la toiture.",
        "Élaboration des plans d'implantation, câblage et schémas électriques sous AutoCAD.",
        "Dimensionnement électrique complet et choix des composants solaires sous PVsyst.",
      ],
      highlights: [
        { label: "Surface toiture", value: "170.5 m²" },
        { label: "DAO", value: "AutoCAD 2D" },
        { label: "Lieu", value: "IFMEREE Oujda" },
      ],
      tagColor: "bg-blue-500/10 text-blue-400 border-blue-500/30",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-slate-950 relative border-t border-slate-900">
      {/* Background light glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Réalisations Concrètes</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Projets Académiques & Études Techniques
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Découvrez le détail des projets de dimensionnement solaire et de conception 2D/3D réalisés.
          </p>
        </motion.div>

        {/* Project Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {projects.map((proj, idx) => {
            const isActive = activeProject === idx;
            return (
              <button
                key={proj.id}
                onClick={() => setActiveProject(idx)}
                className={`relative px-5 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 border ${
                  isActive
                    ? "text-slate-950 border-amber-400 shadow-lg shadow-amber-500/20"
                    : "bg-slate-900/80 text-slate-300 border-slate-800 hover:border-slate-700 hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeProjectTab"
                    className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-500 rounded-xl"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <Zap className={`relative z-10 w-4 h-4 ${isActive ? "text-slate-950" : "text-amber-400"}`} />
                <span className="relative z-10">{proj.clientLocation}</span>
              </button>
            );
          })}
        </div>

        {/* Active Project Card Display */}
        <AnimatePresence mode="wait">
          {projects.map((proj, idx) => {
            if (idx !== activeProject) return null;
            return (
              <motion.div
                key={proj.id}
                initial={{ opacity: 0, y: 25, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -25, scale: 0.98 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="glass-card rounded-2xl p-6 sm:p-10 border border-slate-800 shadow-2xl relative overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                  
                  {/* Main Details (Left 7 Cols) */}
                  <div className="lg:col-span-7 space-y-6">
                    
                    {/* Header Badge */}
                    <div className="flex flex-wrap items-center gap-3">
                      <span className={`px-3.5 py-1.5 rounded-full text-xs font-bold border ${proj.tagColor}`}>
                        {proj.capacity}
                      </span>
                      <span className="text-xs text-slate-400 font-mono flex items-center gap-1">
                        <Building className="w-3.5 h-3.5 text-slate-500" />
                        {proj.clientLocation}
                      </span>
                    </div>

                    <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                      {proj.title}
                    </h3>

                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                      {proj.summary}
                    </p>

                    {/* Tasks List */}
                    <div className="space-y-3 pt-2">
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                        Livrables et Travaux Effectués :
                      </h4>
                      <div className="space-y-2.5">
                        {proj.tasks.map((task, tIdx) => (
                          <div key={tIdx} className="flex items-start gap-3 bg-slate-900/60 p-3 rounded-xl border border-slate-800/80">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                            <span className="text-xs sm:text-sm text-slate-200">{task}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tool Badges */}
                    <div className="pt-2">
                      <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                        Logiciels Utilisés :
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {proj.tools.map((t) => (
                          <span
                            key={t}
                            className="px-3 py-1 rounded-lg bg-slate-900 text-xs font-mono font-semibold text-amber-300 border border-slate-700/80 shadow-sm"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>

                  {/* Metrics Highlight Card (Right 5 Cols) */}
                  <div className="lg:col-span-5 flex flex-col justify-between bg-slate-900/70 p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-6">
                    
                    <div>
                      <div className="flex items-center gap-2 text-amber-400 font-bold text-sm mb-4">
                        <BarChart3 className="w-4 h-4" />
                        <span>Caractéristiques Clés</span>
                      </div>

                      <div className="space-y-4">
                        {proj.highlights.map((hl, hIdx) => (
                          <div key={hIdx} className="flex items-center justify-between border-b border-slate-800 pb-3">
                            <span className="text-xs text-slate-400">{hl.label}</span>
                            <span className="text-sm font-bold font-mono text-white">{hl.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-gradient-to-br from-amber-500/10 to-emerald-500/10 border border-amber-500/20 text-xs text-slate-300 space-y-2">
                      <div className="font-bold text-amber-400 flex items-center gap-1.5">
                        <Compass className="w-4 h-4" />
                        <span>Méthodologie Appliquée</span>
                      </div>
                      <p className="leading-relaxed text-slate-300">
                        Conforme aux exigences d'ingénierie IFMEREE : respect du facteur de forme, calcul des pertes ombrages et sélection optimale des onduleurs.
                      </p>
                    </div>

                  </div>

                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>

      </div>
    </section>
  );
}
