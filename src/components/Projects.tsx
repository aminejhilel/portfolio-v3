"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FolderGit2, Zap, CheckCircle2, Building, BarChart3, Compass } from "lucide-react";

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
      tagColor: "bg-amber-100 text-amber-950 border-amber-300",
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
      tagColor: "bg-emerald-100 text-emerald-950 border-emerald-300",
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
      tagColor: "bg-sky-100 text-sky-950 border-sky-300",
    },
  ];

  return (
    <section id="projects" className="py-24 paper-canvas relative border-t border-slate-200 overflow-hidden text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 text-amber-400 text-xs font-mono font-bold shadow-md">
            <FolderGit2 className="w-4 h-4" />
            <span>RÉALISATIONS CONCRÈTES</span>
          </div>
          <h2 className="font-bebas text-5xl sm:text-6xl font-black text-slate-900 tracking-tight">
            PROJETS & <span className="text-amber-500 underline decoration-amber-400 decoration-wavy decoration-2">ÉTUDES TECHNIQUES</span>
          </h2>
          <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-body">
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
                className={`relative px-6 py-3 rounded-xl text-xs sm:text-sm font-bold font-mono transition-all flex items-center gap-2 border-2 ${
                  isActive
                    ? "bg-amber-400 text-slate-950 border-slate-900 shadow-lg scale-105"
                    : "bg-white text-slate-800 border-slate-900 hover:bg-slate-100"
                }`}
              >
                <Zap className={`w-4 h-4 ${isActive ? "text-slate-950" : "text-amber-600"}`} />
                <span>{proj.clientLocation}</span>
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
                className="bg-white rounded-3xl p-6 sm:p-10 border-2 border-slate-900 shadow-2xl relative overflow-hidden"
              >
                {/* Tape Corner Header */}
                <div className="absolute -top-3 left-10 w-28 h-6 bg-amber-300 border-x border-amber-500 -rotate-2 shadow-xs" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                  
                  {/* Main Details (Left 7 Cols) */}
                  <div className="lg:col-span-7 space-y-6">
                    
                    {/* Header Badge */}
                    <div className="flex flex-wrap items-center gap-3">
                      <span className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-bold border ${proj.tagColor}`}>
                        {proj.capacity}
                      </span>
                      <span className="text-xs text-slate-600 font-mono font-bold flex items-center gap-1">
                        <Building className="w-3.5 h-3.5 text-slate-500" />
                        {proj.clientLocation}
                      </span>
                    </div>

                    <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                      {proj.title}
                    </h3>

                    <p className="text-slate-700 text-base leading-relaxed font-body">
                      {proj.summary}
                    </p>

                    {/* Tasks List */}
                    <div className="space-y-3 pt-2">
                      <h4 className="text-xs font-extrabold text-slate-500 uppercase font-mono tracking-wider">
                        Livrables et Travaux Effectués :
                      </h4>
                      <div className="space-y-2.5">
                        {proj.tasks.map((task, tIdx) => (
                          <div key={tIdx} className="flex items-start gap-3 bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                            <span className="text-xs sm:text-sm font-medium text-slate-800">{task}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tool Badges */}
                    <div className="pt-2">
                      <div className="text-xs font-extrabold text-slate-500 uppercase font-mono tracking-wider mb-2">
                        Logiciels Utilisés :
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {proj.tools.map((t) => (
                          <span
                            key={t}
                            className="px-3 py-1 rounded-lg bg-slate-900 text-xs font-mono font-bold text-amber-400 shadow-xs"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>

                  {/* Metrics Highlight Card (Right 5 Cols) */}
                  <div className="lg:col-span-5 flex flex-col justify-between bg-slate-900 text-white p-6 sm:p-8 rounded-2xl border-2 border-slate-900 space-y-6 shadow-xl">
                    
                    <div>
                      <div className="flex items-center gap-2 text-amber-400 font-extrabold text-sm mb-4 font-mono">
                        <BarChart3 className="w-4 h-4" />
                        <span>CARACTÉRISTIQUES CLÉS</span>
                      </div>

                      <div className="space-y-4">
                        {proj.highlights.map((hl, hIdx) => (
                          <div key={hIdx} className="flex items-center justify-between border-b border-slate-800 pb-3">
                            <span className="text-xs text-slate-400 font-semibold">{hl.label}</span>
                            <span className="text-sm font-bold font-mono text-amber-300">{hl.value}</span>
                          </div>
                        ))}
                      </div>
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
              </motion.div>
            );
          })}
        </AnimatePresence>

      </div>
    </section>
  );
}
