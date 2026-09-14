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
    <section id="experience" className="py-24 paper-canvas relative border-t border-slate-200 overflow-hidden text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 text-amber-400 text-xs font-mono font-bold shadow-md">
            <Briefcase className="w-4 h-4" />
            <span>PARCOURS & QUALIFICATIONS</span>
          </div>
          <h2 className="font-bebas text-5xl sm:text-6xl font-black text-slate-900 tracking-tight">
            EXPÉRIENCES & <span className="text-amber-500 underline decoration-amber-400 decoration-wavy decoration-2">FORMATIONS</span>
          </h2>
          <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-body">
            Mon cursus à l&apos;IFMEREE d&apos;Oujda et mes réalisations de terrain lors de mes stages.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left Column: Expériences Professionnelles */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-2xl bg-amber-300 text-slate-950 border-2 border-slate-900 shadow-md">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="font-bebas text-3xl font-black text-slate-900 tracking-wide">Expériences Professionnelles</h3>
            </div>

            <div className="space-y-6 relative before:absolute before:inset-0 before:left-4 before:w-0.5 before:bg-slate-300">
              {experiences.map((exp, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * idx }}
                  className="relative pl-10 group"
                >
                  <div className="absolute left-2.5 top-2 -translate-x-1/2 w-4 h-4 rounded-full bg-amber-400 border-2 border-slate-900 shadow-sm" />
                  
                  <div className="bg-white rounded-2xl p-6 border-2 border-slate-900 shadow-lg space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-md bg-amber-100 text-amber-950 border border-amber-300">
                        {exp.type}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-slate-600 font-mono font-bold">
                        <Calendar className="w-3.5 h-3.5 text-amber-600" />
                        {exp.period}
                      </span>
                    </div>

                    <div>
                      <h4 className="font-heading text-xl font-extrabold text-slate-900">
                        {exp.role}
                      </h4>
                      <p className="text-sm font-bold text-emerald-700 flex items-center gap-1.5 mt-0.5">
                        <span>{exp.company}</span>
                        <span className="text-slate-400">•</span>
                        <span className="flex items-center text-slate-600 text-xs font-semibold">
                          <MapPin className="w-3 h-3 text-slate-500 mr-0.5" />
                          {exp.location}
                        </span>
                      </p>
                    </div>

                    <ul className="space-y-2 pt-2 border-t border-slate-200">
                      {exp.bullets.map((b, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-slate-700 font-body">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
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
              <div className="p-3 rounded-2xl bg-emerald-300 text-slate-950 border-2 border-slate-900 shadow-md">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="font-bebas text-3xl font-black text-slate-900 tracking-wide">Diplômes & Formations</h3>
            </div>

            <div className="space-y-6 relative before:absolute before:inset-0 before:left-4 before:w-0.5 before:bg-slate-300">
              {education.map((edu, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * idx }}
                  className="relative pl-10 group"
                >
                  <div className="absolute left-2.5 top-2 -translate-x-1/2 w-4 h-4 rounded-full bg-emerald-400 border-2 border-slate-900 shadow-sm" />

                  <div className="bg-white rounded-2xl p-6 border-2 border-slate-900 shadow-lg space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-md bg-emerald-100 text-emerald-950 border border-emerald-300">
                        {edu.status}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-slate-600 font-mono font-bold">
                        <Calendar className="w-3.5 h-3.5 text-emerald-600" />
                        {edu.period}
                      </span>
                    </div>

                    <div>
                      <h4 className="font-heading text-xl font-extrabold text-slate-900">
                        {edu.degree}
                      </h4>
                      <p className="text-sm font-bold text-slate-700 mt-0.5">
                        {edu.institution}
                      </p>
                      <p className="text-xs font-semibold text-slate-500 flex items-center gap-1 mt-1">
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
