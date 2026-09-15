"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FolderGit2, Zap, CheckCircle2, Building2, BarChart3, Compass, ChevronRight, Sun, Layers, MapPin } from "lucide-react";

export default function Projects() {
  const [activeProject, setActiveProject] = useState<number>(0);

  const projects = [
    {
      id: 0,
      title: "Installation Solaire Photovoltaïque EST-OUEST",
      clientLocation: "LEAR Meknès, Maroc",
      capacity: "1,4 MW",
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
      icon: Sun,
      accentColor: "amber",
      tabColor: "bg-amber-300 border-amber-500 text-amber-950",
      badgeColor: "bg-amber-100 text-amber-950 border-amber-300",
      metricColor: "text-amber-400",
      emoji: "☀️",
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
      icon: Zap,
      accentColor: "emerald",
      tabColor: "bg-emerald-300 border-emerald-500 text-emerald-950",
      badgeColor: "bg-emerald-100 text-emerald-950 border-emerald-300",
      metricColor: "text-emerald-400",
      emoji: "🌿",
    },
    {
      id: 2,
      title: "Installation Photovoltaïque en Toiture Salle B",
      clientLocation: "IFMEREE Oujda, Maroc",
      capacity: "170.5 m²",
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
      icon: Layers,
      accentColor: "sky",
      tabColor: "bg-sky-300 border-sky-500 text-sky-950",
      badgeColor: "bg-sky-100 text-sky-950 border-sky-300",
      metricColor: "text-sky-400",
      emoji: "🏗️",
    },
  ];

  const activeProj = projects[activeProject];
  const ProjIcon = activeProj.icon;

  return (
    <section id="projects" className="py-24 paper-canvas relative border-t-2 border-slate-900 overflow-hidden text-slate-900 section-accent-top">
      {/* Ambient blobs */}
      <div className="absolute -top-10 left-1/4 w-80 h-80 rounded-full bg-amber-200/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-64 h-64 rounded-full bg-sky-200/20 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <div className="section-badge">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>RÉALISATIONS CONCRÈTES</span>
          </div>
          <h2 className="section-heading text-5xl sm:text-6xl">
            PROJETS & <span className="text-amber-500 wavy-underline">ÉTUDES TECHNIQUES</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-body">
            Découvrez le détail des projets de dimensionnement solaire et de conception 2D/3D réalisés.
          </p>
        </motion.div>

        {/* Project Selector Tabs */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 mb-10">
          {projects.map((proj, idx) => {
            const isActive = activeProject === idx;
            const Icon = proj.icon;
            return (
              <motion.button
                key={proj.id}
                onClick={() => setActiveProject(idx)}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                className={`relative flex items-center gap-3 px-6 py-4 rounded-2xl text-sm font-bold font-mono transition-all border-2 text-left ${
                  isActive
                    ? `${proj.tabColor} border-slate-900 shadow-[4px_4px_0px_rgba(15,23,42,1)]`
                    : "bg-white text-slate-700 border-slate-900 shadow-[3px_3px_0px_rgba(15,23,42,0.15)] hover:shadow-[4px_4px_0px_rgba(15,23,42,0.3)]"
                }`}
              >
                <span className="text-xl">{proj.emoji}</span>
                <div>
                  <div className="text-[10px] font-bold text-current opacity-70 uppercase tracking-wider">{proj.capacity}</div>
                  <div>{proj.clientLocation}</div>
                </div>
                {isActive && <ChevronRight className="w-4 h-4 ml-auto" />}
              </motion.button>
            );
          })}
        </div>

        {/* Active Project Card Display */}
        <AnimatePresence mode="wait">
          {projects.map((proj, idx) => {
            if (idx !== activeProject) return null;
            const Icon = proj.icon;
            return (
              <motion.div
                key={proj.id}
                initial={{ opacity: 0, y: 25, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -25, scale: 0.98 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="bg-white rounded-3xl border-2 border-slate-900 shadow-[6px_6px_0px_rgba(15,23,42,1)] relative overflow-hidden"
              >
                {/* Top gradient accent */}
                <div className={`h-2 w-full ${
                  proj.accentColor === "amber" ? "bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-300" :
                  proj.accentColor === "emerald" ? "bg-gradient-to-r from-emerald-300 via-emerald-400 to-teal-300" :
                  "bg-gradient-to-r from-sky-300 via-sky-400 to-blue-300"
                }`} />

                <div className="p-6 sm:p-10">
                  {/* Tape Corner */}
                  <div className="absolute top-2 left-10 w-28 h-6 bg-amber-200/70 border-x border-amber-400/50 -rotate-2 shadow-xs" />

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    
                    {/* Main Details (Left 7 Cols) */}
                    <div className="lg:col-span-7 space-y-6">
                      
                      {/* Header */}
                      <div className="flex flex-wrap items-center gap-3">
                        <div className={`p-3 rounded-xl border-2 border-slate-900 shadow-[3px_3px_0px_rgba(15,23,42,0.2)] ${
                          proj.accentColor === "amber" ? "bg-amber-300" :
                          proj.accentColor === "emerald" ? "bg-emerald-300" : "bg-sky-300"
                        }`}>
                          <Icon className="w-5 h-5 text-slate-950" />
                        </div>
                        <span className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold border-2 ${proj.badgeColor}`}>
                          {proj.capacity}
                        </span>
                        <span className="text-xs text-slate-500 font-mono font-bold flex items-center gap-1">
                          <Building2 className="w-3.5 h-3.5" />
                          {proj.clientLocation}
                        </span>
                      </div>

                      <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                        {proj.title}
                      </h3>

                      <p className="text-slate-600 text-base leading-relaxed font-body">
                        {proj.summary}
                      </p>

                      {/* Tasks List */}
                      <div className="space-y-3">
                        <h4 className="text-xs font-extrabold text-slate-400 uppercase font-mono tracking-wider">
                          Livrables et Travaux Effectués :
                        </h4>
                        <div className="space-y-2.5">
                          {proj.tasks.map((task, tIdx) => (
                            <motion.div
                              key={tIdx}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: tIdx * 0.1 }}
                              className="flex items-start gap-3 bg-slate-50 p-3.5 rounded-xl border border-slate-200 hover:border-slate-300 transition-colors"
                            >
                              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                              <span className="text-xs sm:text-sm font-medium text-slate-700">{task}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Tool Badges */}
                      <div>
                        <div className="text-xs font-extrabold text-slate-400 uppercase font-mono tracking-wider mb-2.5">
                          Logiciels Utilisés :
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {proj.tools.map((t) => (
                            <span
                              key={t}
                              className="px-3 py-1.5 rounded-xl bg-slate-900 text-xs font-mono font-bold text-amber-400 shadow-[2px_2px_0px_rgba(15,23,42,0.2)] border border-slate-800"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Metrics Highlight Card (Right 5 Cols) */}
                    <div className="lg:col-span-5 flex flex-col justify-between bg-slate-900 text-white p-6 sm:p-8 rounded-2xl border-2 border-slate-800 space-y-6 shadow-[4px_4px_0px_rgba(245,158,11,0.3)]">
                      
                      <div>
                        <div className="flex items-center gap-2 text-amber-400 font-extrabold text-sm mb-5 font-mono border-b border-slate-700 pb-4">
                          <BarChart3 className="w-4 h-4" />
                          <span>CARACTÉRISTIQUES CLÉS</span>
                        </div>

                        <div className="space-y-4">
                          {proj.highlights.map((hl, hIdx) => (
                            <motion.div
                              key={hIdx}
                              initial={{ opacity: 0, x: 10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: hIdx * 0.1 }}
                              className="flex items-center justify-between border-b border-slate-800 pb-3"
                            >
                              <span className="text-xs text-slate-400 font-semibold">{hl.label}</span>
                              <span className={`text-base font-bold font-mono ${proj.metricColor}`}>{hl.value}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Location */}
                      <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
                        <MapPin className="w-4 h-4 text-amber-500" />
                        <span>{proj.clientLocation}</span>
                      </div>

                      <div className="p-4 rounded-xl bg-slate-800 border border-slate-700 text-xs text-slate-300 space-y-2">
                        <div className="font-bold text-emerald-400 flex items-center gap-1.5 font-mono">
                          <Compass className="w-4 h-4" />
                          <span>MÉTHODOLOGIE APPLIQUÉE</span>
                        </div>
                        <p className="leading-relaxed text-slate-300">
                          Conforme aux exigences d&apos;ingénierie IFMEREE : respect du facteur de forme, calcul des pertes ombrages et sélection optimale des onduleurs.
                        </p>
                      </div>
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
