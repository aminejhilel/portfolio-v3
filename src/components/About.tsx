"use client";

import { motion } from "framer-motion";
import { UserCheck, MessageSquare, BrainCircuit, CheckSquare, GraduationCap, Award } from "lucide-react";

export default function About() {
  const strengths = [
    {
      title: "Communication claire & écoute active",
      desc: "Gestion optimale de la relation client, présentation dynamique des propositions commerciales et coordination fluide sur le terrain.",
      icon: MessageSquare,
      color: "from-amber-500/20 to-amber-500/5",
      borderColor: "border-amber-500/30",
      iconColor: "text-amber-400",
    },
    {
      title: "Esprit analytique & résolution de problèmes",
      desc: "Analyse des schémas unifilaires/multifilaires, diagnostic des pannes et réalisation de notes de calcul rigoureuses sous Excel & PVsyst.",
      icon: BrainCircuit,
      color: "from-emerald-500/20 to-emerald-500/5",
      borderColor: "border-emerald-500/30",
      iconColor: "text-emerald-400",
    },
    {
      title: "Rigueur & sens du détail",
      desc: "Précision d'assemblage des structures (Fer H / Profil C), câblage coffrets DC/AC, conformité des plans AutoCAD 2D/3D et respect des normes.",
      icon: CheckSquare,
      color: "from-blue-500/20 to-blue-500/5",
      borderColor: "border-blue-500/30",
      iconColor: "text-blue-400",
    },
  ];

  return (
    <section id="about" className="py-20 bg-slate-950 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold">
            <UserCheck className="w-3.5 h-3.5" />
            <span>À Propos & Atouts</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Profil Professionnel & Qualités Clés
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Une approche rigoureuse combinant compétences de chantier et maîtrise de l'ingénierie solaire.
          </p>
        </motion.div>

        {/* Profil Text Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass-card rounded-2xl p-6 sm:p-10 mb-12 border border-slate-800 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="p-4 rounded-2xl bg-gradient-to-br from-amber-500/20 to-emerald-500/20 border border-amber-500/30 shrink-0">
              <GraduationCap className="w-10 h-10 text-amber-400" />
            </div>
            <div className="space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base">
              <h3 className="font-heading text-xl font-bold text-white flex items-center gap-2.5">
                <span>Parcours IFMEREE & Expérience PFE</span>
                <span className="text-xs px-2.5 py-0.5 rounded-md bg-emerald-500/20 text-emerald-300 font-mono">2024 – 2026</span>
              </h3>
              <p>
                Passionné par les énergies renouvelables, je suis diplômé{" "}
                <strong className="text-amber-400">Technicien Spécialisé en Systèmes Énergie Solaire</strong> de l'<strong>IFMEREE d'Oujda</strong>. 
                Mon stage PFE chez <strong className="text-emerald-400">Energy Pro Tech</strong> m'a apporté une réelle maîtrise sur le terrain : réalisation de structures en Fer H et Profil C, pose des modules photovoltaïques, et tirage des câbles DC/AC.
              </p>
              <p>
                Ma formation m'a également doté de solides compétences en dimensionnement (PVsyst, PVSol), en élaboration de schémas électriques AutoCAD et en modélisation 3D SketchUp, prêt à m'investir sur des projets photovoltaïques ambitieux.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Atouts Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {strengths.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * idx }}
                whileHover={{ y: -5, scale: 1.02 }}
                className={`glass-card glass-card-hover rounded-2xl p-6 border ${item.borderColor} space-y-4 relative overflow-hidden`}
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center`}>
                  <Icon className={`w-6 h-6 ${item.iconColor}`} />
                </div>
                <h4 className="font-heading text-lg font-bold text-white">{item.title}</h4>
                <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
