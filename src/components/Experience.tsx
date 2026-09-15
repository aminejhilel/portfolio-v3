"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Calendar, MapPin, CheckCircle2, Award, Building2 } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      role: "Stage PFE",
      company: "Energy Pro Tech",
      location: "Oujda, Maroc",
      period: "Mars 2026 – Juin 2026",
      type: "Stage PFE",
      typeColor: "bg-amber-300 text-amber-950 border-amber-500",
      dotColor: "bg-amber-400",
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
      typeColor: "bg-emerald-300 text-emerald-950 border-emerald-500",
      dotColor: "bg-emerald-400",
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
      typeColor: "bg-sky-300 text-sky-950 border-sky-500",
      dotColor: "bg-sky-400",
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
      statusColor: "bg-emerald-300 text-emerald-950 border-emerald-500",
      dotColor: "bg-emerald-400",
    },
    {
      degree: "Baccalauréat Sciences Physiques et Chimie",
      institution: "Lycée Elarbi Al Houcini",
      location: "Oujda, Maroc",
      period: "2020 – 2023",
      status: "Obtenu",
      statusColor: "bg-sky-200 text-sky-950 border-sky-400",
      dotColor: "bg-sky-400",
    },
  ];

  return (
    <section id="experience" className="py-24 relative border-t-2 border-slate-900 overflow-hidden text-slate-900 section-accent-top"
      style={{ backgroundColor: "#f0f4f8", backgroundImage: "radial-gradient(#c7d2e0 1px, transparent 1px), radial-gradient(#c7d2e0 1px, #f0f4f8 1px)", backgroundSize: "28px 28px", backgroundPosition: "0 0, 14px 14px" }}
    >
      {/* Ambient blobs */}
      <div className="absolute top-1/4 -right-20 w-72 h-72 rounded-full bg-amber-200/30 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -left-20 w-64 h-64 rounded-full bg-emerald-200/25 blur-3xl pointer-events-none" />

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
            <Briefcase className="w-3.5 h-3.5" />
            <span>PARCOURS & QUALIFICATIONS</span>
          </div>
          <h2 className="section-heading text-5xl sm:text-6xl">
            EXPÉRIENCES & <span className="text-amber-500 wavy-underline">FORMATIONS</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-body">
            Mon cursus à l&apos;IFMEREE d&apos;Oujda et mes réalisations de terrain lors de mes stages.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left Column: Expériences Professionnelles */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-2xl bg-amber-300 text-slate-950 border-2 border-slate-900 shadow-[4px_4px_0px_rgba(15,23,42,1)]">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="font-bebas text-3xl font-black text-slate-900 tracking-wide">Expériences Professionnelles</h3>
            </div>

            <div className="space-y-5 relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-400 via-emerald-400 to-sky-400 rounded-full" />

              {experiences.map((exp, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * idx }}
                  className="relative pl-12 group"
                >
                  {/* Timeline dot */}
                  <div className={`absolute left-[7px] top-5 w-4 h-4 rounded-full ${exp.dotColor} border-2 border-white shadow-md ring-4 ring-white`} />
                  
                  <motion.div
                    whileHover={{ x: 4 }}
                    className="bg-white rounded-2xl p-6 border-2 border-slate-200 shadow-[4px_4px_0px_rgba(15,23,42,0.1)] hover:border-slate-900 hover:shadow-[4px_4px_0px_rgba(15,23,42,1)] transition-all space-y-3"
                  >
                    {/* Top bar */}
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className={`text-xs font-mono font-bold px-2.5 py-1 rounded-lg border-2 ${exp.typeColor}`}>
                        {exp.type}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-slate-500 font-mono font-bold">
                        <Calendar className="w-3.5 h-3.5 text-amber-500" />
                        {exp.period}
                      </span>
                    </div>

                    <div>
                      <h4 className="font-heading text-xl font-extrabold text-slate-900">{exp.role}</h4>
                      <p className="text-sm font-bold text-emerald-700 flex items-center gap-1.5 mt-1">
                        <Building2 className="w-3.5 h-3.5" />
                        <span>{exp.company}</span>
                        <span className="text-slate-300">•</span>
                        <span className="flex items-center text-slate-500 text-xs font-semibold">
                          <MapPin className="w-3 h-3 mr-0.5" />
                          {exp.location}
                        </span>
                      </p>
                    </div>

                    <ul className="space-y-2 pt-2 border-t border-slate-100">
                      {exp.bullets.map((b, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-slate-600 font-body">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Formations */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-2xl bg-emerald-300 text-slate-950 border-2 border-slate-900 shadow-[4px_4px_0px_rgba(15,23,42,1)]">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="font-bebas text-3xl font-black text-slate-900 tracking-wide">Diplômes & Formations</h3>
            </div>

            <div className="space-y-5 relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-400 to-sky-400 rounded-full" />

              {education.map((edu, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * idx }}
                  className="relative pl-12 group"
                >
                  {/* Timeline dot */}
                  <div className={`absolute left-[7px] top-5 w-4 h-4 rounded-full ${edu.dotColor} border-2 border-white shadow-md ring-4 ring-white`} />

                  <motion.div
                    whileHover={{ x: 4 }}
                    className="bg-white rounded-2xl p-6 border-2 border-slate-200 shadow-[4px_4px_0px_rgba(15,23,42,0.1)] hover:border-slate-900 hover:shadow-[4px_4px_0px_rgba(15,23,42,1)] transition-all space-y-3"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className={`text-xs font-mono font-bold px-2.5 py-1 rounded-lg border-2 ${edu.statusColor}`}>
                        ✓ {edu.status}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-slate-500 font-mono font-bold">
                        <Calendar className="w-3.5 h-3.5 text-emerald-500" />
                        {edu.period}
                      </span>
                    </div>

                    <div>
                      <h4 className="font-heading text-xl font-extrabold text-slate-900">{edu.degree}</h4>
                      <p className="text-sm font-bold text-slate-600 mt-1 flex items-center gap-1.5">
                        <Award className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                        {edu.institution}
                      </p>
                      <p className="text-xs font-semibold text-slate-400 flex items-center gap-1 mt-1.5">
                        <MapPin className="w-3 h-3" /> {edu.location}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {/* Certifications / Key Skills Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-slate-900 text-white rounded-2xl p-6 border-2 border-slate-900 shadow-[4px_4px_0px_rgba(245,158,11,0.5)] space-y-3 mt-4"
            >
              <div className="font-mono text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                Outils Maîtrisés
              </div>
              <div className="flex flex-wrap gap-2">
                {["PVsyst 7.4", "PVSol", "AutoCAD 2D", "SketchUp 3D", "Excel", "Gantt Projects", "Word / PPT"].map(tool => (
                  <span key={tool} className="px-2.5 py-1 bg-slate-800 text-amber-300 text-xs font-mono font-bold rounded-lg border border-slate-700">
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
