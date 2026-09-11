"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Calendar, MapPin, CheckCircle2 } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      role: "Stage PFE",
      company: "Energy Pro Tech",
      location: "Oujda, Maroc",
      period: "Mars 2026 – Juin 2026",
      type: "Stage PFE",
      bullets: [
        "Réalisation et assemblage des structures métalliques (Fer H et Profil C).",
        "Installation, fixation et orientation des panneaux photovoltaïques.",
        "Tirage, passage et raccordement des câbles électriques DC et AC.",
      ],
    },
    {
      role: "Stage d'initiation",
      company: "Ecowatt",
      location: "Oujda, Maroc",
      period: "Juillet 2025 – Août 2025",
      type: "Stage Initiation",
      bullets: [
        "Gestion des relations avec les clients et conseil technique.",
        "Élaboration des propositions commerciales et devis pour installations solaires.",
        "Participation active aux visites de chantier et suivi de terrain.",
      ],
    },
    {
      role: "Étudiant en Systèmes Énergie Solaire",
      company: "IFMEREE",
      location: "Oujda, Maroc",
      period: "2024 – 2026",
      type: "Formation Pratique",
      bullets: [
        "Apprentissage approfondi des techniques de mise en service des installations solaires.",
        "Câblage complet des coffrets électriques DC (courant continu) et AC (courant alternatif).",
        "Maîtrise des normes et calculs de dimensionnement thermique et photovoltaïque.",
      ],
    },
  ];

  const education = [
    {
      degree: "Technicien Spécialisé en Systèmes Énergie Solaire",
      institution: "IFMEREE (Institut de Formation aux Métiers des Énergies Renouvelables)",
      location: "Oujda, Maroc",
      period: "2024 – 2026",
      status: "Diplôme Obtenu",
    },
    {
      degree: "Baccalauréat Sciences Physiques et Chimie",
      institution: "Lycée Elarbi Al Houcini",
      location: "Oujda, Maroc",
      period: "2020 – 2023",
      status: "Obtenu",
    },
  ];

  return (
    <section id="experience" className="py-24 bg-[#020817] relative border-t border-slate-900/80 overflow-hidden">
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
            <Briefcase className="w-3.5 h-3.5" />
            <span>Parcours & Qualifications</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-black text-white tracking-tight">
            Expériences & Formations
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Mon cursus à l'IFMEREE d'Oujda et mes réalisations de terrain lors de mes stages.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left Column: Expériences Professionnelles */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-white">Expériences Professionnelles</h3>
            </div>

            <div className="space-y-6 relative before:absolute before:inset-0 before:left-4 before:w-0.5 before:bg-slate-800">
              {experiences.map((exp, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * idx }}
                  className="relative pl-10 group"
                >
                  {/* Timeline bullet node */}
                  <div className="absolute left-2.5 top-1.5 -translate-x-1/2 w-4 h-4 rounded-full bg-slate-950 border-2 border-amber-500 group-hover:scale-125 transition-transform" />
                  
                  <div className="glass-card glass-card-hover rounded-2xl p-6 border border-slate-800 space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-amber-500/10 text-amber-300 border border-amber-500/20">
                        {exp.type}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-slate-400 font-mono">
                        <Calendar className="w-3.5 h-3.5 text-amber-400" />
                        {exp.period}
                      </span>
                    </div>

                    <div>
                      <h4 className="font-heading text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
                        {exp.role}
                      </h4>
                      <p className="text-sm font-semibold text-emerald-400 flex items-center gap-1.5 mt-0.5">
                        <span>{exp.company}</span>
                        <span className="text-slate-600">•</span>
                        <span className="flex items-center text-slate-400 text-xs font-normal">
                          <MapPin className="w-3 h-3 text-slate-500 mr-0.5" />
                          {exp.location}
                        </span>
                      </p>
                    </div>

                    <ul className="space-y-2 pt-2 border-t border-slate-800/80">
                      {exp.bullets.map((b, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Formations */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-white">Diplômes & Formations</h3>
            </div>

            <div className="space-y-6 relative before:absolute before:inset-0 before:left-4 before:w-0.5 before:bg-slate-800">
              {education.map((edu, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * idx }}
                  className="relative pl-10 group"
                >
                  {/* Timeline bullet node */}
                  <div className="absolute left-2.5 top-1.5 -translate-x-1/2 w-4 h-4 rounded-full bg-slate-950 border-2 border-emerald-500 group-hover:scale-125 transition-transform" />

                  <div className="glass-card glass-card-hover rounded-2xl p-6 border border-slate-800 space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                        {edu.status}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-slate-400 font-mono">
                        <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                        {edu.period}
                      </span>
                    </div>

                    <div>
                      <h4 className="font-heading text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">
                        {edu.degree}
                      </h4>
                      <p className="text-sm font-medium text-slate-300 mt-0.5">
                        {edu.institution}
                      </p>
                      <p className="text-xs text-slate-400 flex items-center gap-1 mt-1">
                        <MapPin className="w-3 h-3 text-slate-500" /> {edu.location}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
