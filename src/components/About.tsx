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
      gradient: "from-amber-500/20 via-amber-500/10 to-transparent",
      border: "border-amber-500/25",
      iconBg: "bg-amber-500/15 border-amber-500/25",
      iconColor: "text-amber-400",
      glow: "shadow-amber-500/10",
      tag: "Soft Skill",
      tagColor: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    },
    {
      title: "Esprit Analytique & Résolution",
      desc: "Analyse des schémas unifilaires/multifilaires, diagnostic des pannes et réalisation de notes de calcul rigoureuses sous Excel & PVsyst.",
      icon: BrainCircuit,
      gradient: "from-emerald-500/20 via-emerald-500/10 to-transparent",
      border: "border-emerald-500/25",
      iconBg: "bg-emerald-500/15 border-emerald-500/25",
      iconColor: "text-emerald-400",
      glow: "shadow-emerald-500/10",
      tag: "Technique",
      tagColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    },
    {
      title: "Rigueur & Sens du Détail",
      desc: "Précision d'assemblage des structures (Fer H / Profil C), câblage coffrets DC/AC, conformité des plans AutoCAD 2D/3D et respect des normes.",
      icon: CheckSquare,
      gradient: "from-blue-500/20 via-blue-500/10 to-transparent",
      border: "border-blue-500/25",
      iconBg: "bg-blue-500/15 border-blue-500/25",
      iconColor: "text-blue-400",
      glow: "shadow-blue-500/10",
      tag: "Précision",
      tagColor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
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
    <section id="about" className="py-24 bg-[#030b1a] relative border-t border-slate-900/80 overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/4 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-500/4 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-solar-grid opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="text-center max-w-3xl mx-auto mb-18 space-y-4"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/8 border border-amber-500/20 text-amber-400 text-xs font-semibold"
          >
            <UserCheck className="w-3.5 h-3.5" />
            <span>À Propos & Atouts</span>
          </motion.div>
          <h2 className="font-display text-4xl sm:text-5xl font-black text-white tracking-tight">
            Profil <span className="text-gradient-amber">Professionnel</span>
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            Une approche rigoureuse combinant compétences de chantier et maîtrise de l&apos;ingénierie solaire.
          </p>
        </motion.div>

        {/* Profile Card */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="glass-card solar-glow-card rounded-3xl p-8 sm:p-12 mb-10 border border-slate-800/60 shadow-2xl relative overflow-hidden"
        >
          {/* Inner gradient */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col lg:flex-row gap-10 items-start relative z-10">
            {/* Icon */}
            <motion.div
              whileHover={{ rotate: [0, -10, 10, 0], scale: 1.05 }}
              transition={{ duration: 0.5 }}
              className="p-5 rounded-2xl bg-gradient-to-br from-amber-500/20 to-emerald-500/15 border border-amber-500/25 shrink-0 shadow-xl shadow-amber-500/10"
            >
              <GraduationCap className="w-12 h-12 text-amber-400" />
            </motion.div>

            <div className="space-y-5 text-slate-300 leading-relaxed text-sm sm:text-base flex-1">
              <div className="flex items-center gap-3 flex-wrap">
                <h3 className="font-heading text-xl font-extrabold text-white">
                  Parcours IFMEREE & Expérience PFE
                </h3>
                <span className="text-xs px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-300 font-mono border border-emerald-500/20">
                  2024 – 2026
                </span>
              </div>

              <p className="text-slate-300">
                Passionné par les énergies renouvelables, je suis diplômé{" "}
                <strong className="text-amber-400 font-semibold">Technicien Spécialisé en Systèmes Énergie Solaire</strong>{" "}
                de l&apos;<strong className="text-slate-200">IFMEREE d&apos;Oujda</strong>. Mon stage PFE chez{" "}
                <strong className="text-emerald-400">Energy Pro Tech</strong> m&apos;a apporté une réelle maîtrise
                sur le terrain : réalisation de structures en Fer H et Profil C, pose des modules photovoltaïques,
                et tirage des câbles DC/AC.
              </p>
              <p className="text-slate-400">
                Ma formation m&apos;a également doté de solides compétences en dimensionnement{" "}
                <span className="text-amber-400/80">(PVsyst, PVSol)</span>, en élaboration de schémas électriques{" "}
                <span className="text-blue-400/80">AutoCAD</span> et en modélisation 3D{" "}
                <span className="text-emerald-400/80">SketchUp</span>.
              </p>

              {/* Quick facts */}
              <div className="flex flex-wrap gap-2.5 pt-2">
                {[
                  { icon: Sun, text: "Énergie solaire photovoltaïque", color: "text-amber-400" },
                  { icon: Flame, text: "Terrain & Installation DC/AC", color: "text-orange-400" },
                  { icon: CheckSquare, text: "Dimensionnement & Études", color: "text-emerald-400" },
                ].map(({ icon: Icon, text, color }) => (
                  <span key={text} className={`flex items-center gap-1.5 text-xs font-medium ${color} bg-slate-900/60 px-3 py-1.5 rounded-xl border border-slate-800`}>
                    <Icon className="w-3.5 h-3.5" />
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
                whileHover={{ y: -8, scale: 1.02 }}
                className={`glass-card rounded-2xl p-7 border ${item.border} space-y-5 relative overflow-hidden group cursor-default shadow-xl ${item.glow} shine-hover`}
              >
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-50 group-hover:opacity-80 transition-opacity duration-500`} />

                <div className="relative z-10">
                  {/* Tag */}
                  <div className="mb-4">
                    <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full border ${item.tagColor}`}>
                      {item.tag}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-2xl ${item.iconBg} border flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-7 h-7 ${item.iconColor}`} />
                  </div>

                  <h4 className="font-heading text-lg font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
