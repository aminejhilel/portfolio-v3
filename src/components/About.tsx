"use client";

import { motion, useInView, type Variants } from "framer-motion";
import { UserCheck, MessageSquare, BrainCircuit, CheckSquare, GraduationCap, Sun, Flame } from "lucide-react";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const strengths = [
    {
      title: "Communication & Écoute Active",
      desc: "Gestion optimale de la relation client, présentation dynamique des propositions commerciales et coordination fluide sur le terrain.",
      icon: MessageSquare,
      border: "border-amber-300",
      badgeColor: "bg-amber-100 text-amber-900 border-amber-300",
      iconColor: "text-amber-600 bg-amber-50",
      tag: "Soft Skill",
    },
    {
      title: "Esprit Analytique & Résolution",
      desc: "Analyse des schémas unifilaires/multifilaires, diagnostic des pannes et réalisation de notes de calcul rigoureuses sous Excel & PVsyst.",
      icon: BrainCircuit,
      border: "border-emerald-300",
      badgeColor: "bg-emerald-100 text-emerald-900 border-emerald-300",
      iconColor: "text-emerald-600 bg-emerald-50",
      tag: "Technique",
    },
    {
      title: "Rigueur & Sens du Détail",
      desc: "Précision d'assemblage des structures (Fer H / Profil C), câblage coffrets DC/AC, conformité des plans AutoCAD 2D/3D et respect des normes.",
      icon: CheckSquare,
      border: "border-sky-300",
      badgeColor: "bg-sky-100 text-sky-900 border-sky-300",
      iconColor: "text-sky-600 bg-sky-50",
      tag: "Précision",
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 35 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section id="about" className="py-24 paper-canvas relative border-t border-slate-200 overflow-hidden text-slate-900">
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
            <UserCheck className="w-4 h-4" />
            <span>À PROPOS & ATOUTS</span>
          </div>
          <h2 className="font-bebas text-5xl sm:text-6xl font-black text-slate-900 tracking-tight">
            PROFIL <span className="text-amber-500 underline decoration-amber-400 decoration-wavy decoration-2">PROFESSIONNEL</span>
          </h2>
          <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-body">
            Une approche rigoureuse combinant compétences de chantier et maîtrise de l&apos;ingénierie solaire.
          </p>
        </motion.div>

        {/* Profile Card */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative bg-white rounded-3xl p-8 sm:p-12 mb-12 border-2 border-slate-900 shadow-2xl overflow-hidden"
        >
          {/* Tape Strip Header */}
          <div className="absolute -top-4 left-12 w-32 h-7 bg-amber-300 border-x-2 border-dashed border-amber-500 rotate-1 shadow-sm flex items-center justify-center">
            <span className="font-mono text-xs font-black text-slate-950 uppercase">FORMA-PFE</span>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 items-start relative z-10 pt-2">
            {/* Icon */}
            <motion.div
              whileHover={{ rotate: [0, -6, 6, 0], scale: 1.05 }}
              transition={{ duration: 0.5 }}
              className="p-5 rounded-2xl bg-amber-100 border-2 border-slate-900 shrink-0 shadow-md"
            >
              <GraduationCap className="w-12 h-12 text-slate-900" />
            </motion.div>

            <div className="space-y-4 text-slate-800 leading-relaxed text-base flex-1">
              <div className="flex items-center gap-3 flex-wrap">
                <h3 className="font-heading text-2xl font-extrabold text-slate-900">
                  Parcours IFMEREE & Expérience PFE
                </h3>
                <span className="text-xs font-bold px-3 py-1 rounded-lg bg-emerald-100 text-emerald-900 font-mono border border-emerald-300 shadow-xs">
                  2024 – 2026
                </span>
              </div>

              <p className="text-slate-800">
                Passionné par les énergies renouvelables, je suis diplômé{" "}
                <strong className="text-amber-600 font-extrabold">Technicien Spécialisé en Systèmes Énergie Solaire</strong>{" "}
                de l&apos;<strong className="text-slate-950 font-bold">IFMEREE d&apos;Oujda</strong>. Mon stage PFE chez{" "}
                <strong className="text-emerald-700 font-extrabold">Energy Pro Tech</strong> m&apos;a apporté une réelle maîtrise
                sur le terrain : réalisation de structures en Fer H et Profil C, pose des modules photovoltaïques,
                et tirage des câbles DC/AC.
              </p>
              <p className="text-slate-700">
                Ma formation m&apos;a également doté de solides compétences en dimensionnement{" "}
                <span className="font-bold text-amber-700">(PVsyst 7.4, PVSol)</span>, en élaboration de schémas électriques{" "}
                <span className="font-bold text-sky-700">AutoCAD</span> et en modélisation 3D{" "}
                <span className="font-bold text-emerald-700">SketchUp</span>.
              </p>

              {/* Quick facts */}
              <div className="flex flex-wrap gap-2.5 pt-2">
                {[
                  { icon: Sun, text: "Énergie solaire photovoltaïque", color: "bg-amber-100 text-amber-950 border-amber-300" },
                  { icon: Flame, text: "Terrain & Installation DC/AC", color: "bg-orange-100 text-orange-950 border-orange-300" },
                  { icon: CheckSquare, text: "Dimensionnement & Études", color: "bg-emerald-100 text-emerald-950 border-emerald-300" },
                ].map(({ icon: Icon, text, color }) => (
                  <span key={text} className={`flex items-center gap-1.5 text-xs font-extrabold px-3 py-1.5 rounded-xl border shadow-xs ${color}`}>
                    <Icon className="w-4 h-4" />
                    {text}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Strength Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {strengths.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -6, scale: 1.02 }}
                className={`bg-white rounded-2xl p-7 border-2 ${item.border} space-y-4 relative overflow-hidden group shadow-lg`}
              >
                <div className="relative z-10">
                  <div className="mb-3">
                    <span className={`text-[11px] font-mono font-bold px-2.5 py-1 rounded-md border ${item.badgeColor}`}>
                      {item.tag}
                    </span>
                  </div>

                  <div className={`w-14 h-14 rounded-2xl ${item.iconColor} border-2 border-slate-900 flex items-center justify-center mb-4 shadow-md`}>
                    <Icon className="w-7 h-7" />
                  </div>

                  <h4 className="font-heading text-xl font-extrabold text-slate-900 mb-2">{item.title}</h4>
                  <p className="text-sm text-slate-700 leading-relaxed font-body">{item.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
