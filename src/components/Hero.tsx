"use client";

import { motion, Variants, useMotionValue, useTransform, animate } from "framer-motion";
import { Sun, Zap, MapPin, ArrowRight, Download, CheckCircle2, ShieldCheck, Compass, Sparkles } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

/* ─── Animated Counter ──────────────────────────── */
function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    const controls = animate(count, to, { duration: 2, ease: "easeOut", delay: 0.5 });
    const unsub = rounded.on("change", (v) => setDisplay(String(v)));
    return () => { controls.stop(); unsub(); };
  }, [count, rounded, to]);

  return (
    <span className="font-heading font-black tabular-nums">
      {display}{suffix}
    </span>
  );
}

/* ─── Floating Particle ─────────────────────────── */
function Particle({ x, y, delay, size, color }: { x: string; y: string; delay: number; size: number; color: string }) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{ left: x, top: y, width: size, height: size, backgroundColor: color }}
      animate={{
        y: [0, -30, 0],
        opacity: [0, 0.7, 0],
        scale: [0.5, 1, 0.5],
      }}
      transition={{
        duration: 4 + Math.random() * 3,
        repeat: Infinity,
        delay,
        ease: "easeInOut",
      }}
    />
  );
}

/* ─── Typing Effect ─────────────────────────────── */
function TypingText({ texts }: { texts: string[] }) {
  const [currentText, setCurrentText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const target = texts[textIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < target.length) {
          setCurrentText(target.slice(0, currentText.length + 1));
        } else {
          setIsPaused(true);
          setTimeout(() => { setIsPaused(false); setIsDeleting(true); }, 2000);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setTextIndex((i) => (i + 1) % texts.length);
        }
      }
    }, isDeleting ? 45 : 85);
    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, textIndex, texts, isPaused]);

  return (
    <span className="text-gradient-amber">
      {currentText}
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="inline-block w-0.5 h-[1em] bg-amber-400 ml-1 align-middle"
      />
    </span>
  );
}

/* ─── Main Hero Component ───────────────────────── */
export default function Hero() {
  const particles = useRef(
    Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: `${Math.random() * 100}%`,
      y: `${Math.random() * 100}%`,
      delay: Math.random() * 5,
      size: 2 + Math.random() * 4,
      color: i % 3 === 0 ? "rgba(245,158,11,0.6)" : i % 3 === 1 ? "rgba(16,185,129,0.5)" : "rgba(59,130,246,0.4)",
    }))
  ).current;

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
  };

  const stats = [
    { value: 1.4, suffix: " MW", label: "Centrale LEAR Meknès", color: "text-amber-400" },
    { value: 711, suffix: " kW", label: "Heirchmane Kénitra", color: "text-emerald-400" },
    { value: 170, suffix: " m²", label: "Toiture IFMEREE", color: "text-blue-400" },
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-[#020817]" />
      <div className="absolute inset-0 bg-radial-solar" />
      <div className="absolute inset-0 bg-solar-grid opacity-60" />

      {/* Glowing orbs */}
      <motion.div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-amber-500/8 rounded-full blur-3xl pointer-events-none"
        animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-2/3 right-0 w-[600px] h-[600px] bg-emerald-500/8 rounded-full blur-3xl pointer-events-none"
        animate={{ scale: [1, 1.15, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      <motion.div
        className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-blue-500/6 rounded-full blur-3xl pointer-events-none"
        animate={{ scale: [1, 1.2, 1], opacity: [0.08, 0.15, 0.08] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 4 }}
      />

      {/* Floating particles */}
      {particles.map((p) => (
        <Particle key={p.id} x={p.x} y={p.y} delay={p.delay} size={p.size} color={p.color} />
      ))}

      {/* Animated sun decoration top-right */}
      <div className="absolute top-16 right-8 md:right-16 opacity-10 pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="w-32 h-32 border-2 border-dashed border-amber-400 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute inset-4 border border-amber-300 rounded-full"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <Sun className="w-8 h-8 text-amber-400" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col lg:flex-row items-center justify-between gap-14"
        >
          {/* ─── Left Column ─── */}
          <div className="flex-1 text-center lg:text-left space-y-7 max-w-2xl">

            {/* Stage Badge */}
            <motion.div variants={itemVariants}>
              <motion.div
                className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-xs font-semibold shadow-lg shadow-emerald-950/50 backdrop-blur-sm"
                animate={{ boxShadow: ["0 0 0 0 rgba(16,185,129,0.4)", "0 0 0 8px rgba(16,185,129,0)", "0 0 0 0 rgba(16,185,129,0.4)"] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span>Stage PFE — Energy Pro Tech · Mars–Juin 2026</span>
              </motion.div>
            </motion.div>

            {/* Main Headline */}
            <motion.div variants={itemVariants} className="space-y-2">
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[0.95]">
                Mohamed
                <br />
                <TypingText texts={["MEREHOUM", "Énergie Solaire", "MEREHOUM"]} />
              </h1>
            </motion.div>

            {/* Specialty Subtitle */}
            <motion.div variants={itemVariants}>
              <h2 className="font-heading text-lg sm:text-xl font-semibold text-slate-300 flex items-center justify-center lg:justify-start gap-3">
                <div className="flex items-center justify-center p-2 rounded-xl bg-amber-500/10 border border-amber-500/20">
                  <Zap className="w-5 h-5 text-amber-400 shrink-0" />
                </div>
                <span>Technicien Spécialisé en <span className="text-amber-400">Systèmes Énergie Solaire</span></span>
              </h2>
            </motion.div>

            {/* Bio */}
            <motion.p variants={itemVariants} className="text-slate-400 text-base sm:text-lg max-w-xl leading-relaxed font-body">
              Diplômé de l&apos;<strong className="text-slate-200">IFMEREE d&apos;Oujda</strong>, passionné d&apos;énergies renouvelables avec une expérience terrain concrète en{" "}
              <strong className="text-amber-400">dimensionnement PVsyst</strong>, modélisation{" "}
              <strong className="text-emerald-400">AutoCAD/SketchUp</strong> et installation DC/AC.
            </motion.p>

            {/* Chips */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
              {[
                { icon: MapPin, text: "Oujda, Maroc", color: "text-amber-400" },
                { icon: Compass, text: "Mobilité Nationale", color: "text-emerald-400" },
                { icon: ShieldCheck, text: "Permis B", color: "text-blue-400" },
              ].map(({ icon: Icon, text, color }) => (
                <span key={text} className="flex items-center gap-1.5 bg-slate-900/70 backdrop-blur-sm px-3.5 py-1.5 rounded-xl border border-slate-800/80 text-xs font-medium text-slate-300 shadow-md">
                  <Icon className={`w-3.5 h-3.5 ${color}`} />
                  {text}
                </span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-400 text-slate-950 font-bold text-sm shadow-xl shadow-amber-500/30 btn-glow shine-hover"
              >
                <span>Explorer mes Projets</span>
                <ArrowRight className="w-4 h-4" />
              </motion.a>

              <motion.a
                href="/cv_mohamed_merehoum.pdf"
                download
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl bg-slate-900/80 backdrop-blur-sm text-slate-200 font-semibold text-sm border border-slate-700/80 hover:border-amber-500/50 transition-all shadow-lg"
              >
                <Download className="w-4 h-4 text-amber-400" />
                <span>Télécharger CV</span>
              </motion.a>

              <motion.div whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href="/cv"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-4 rounded-2xl bg-slate-900/60 backdrop-blur-sm text-slate-300 font-medium text-sm border border-slate-800"
                >
                  <Sparkles className="w-4 h-4 text-emerald-400" />
                  <span>Version Web CV</span>
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* ─── Right Column: Profile Card ─── */}
          <motion.div variants={itemVariants} className="flex-1 w-full max-w-md lg:max-w-none">
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative glass-card solar-glow-card rounded-3xl p-7 sm:p-8 border border-slate-800/60 shadow-2xl space-y-6"
            >
              {/* Gradient border effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-amber-500/10 via-transparent to-emerald-500/5 pointer-events-none" />

              {/* Profile Header */}
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-5 relative z-10">
                <div className="flex items-center gap-4">
                  <motion.div
                    className="relative shrink-0"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-amber-500/50 shadow-xl shadow-amber-500/20">
                      <img
                        src="/cremti.jpeg"
                        alt="Mohamed MEREHOUM"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-emerald-500 rounded-full border-2 border-slate-950 flex items-center justify-center">
                      <span className="w-2 h-2 rounded-full bg-white" />
                    </div>
                  </motion.div>
                  <div>
                    <h3 className="font-heading text-base font-extrabold text-white leading-tight">Mohamed MEREHOUM</h3>
                    <p className="text-xs text-amber-400 font-medium flex items-center gap-1 mt-0.5">
                      <Sun className="w-3 h-3" /> Systèmes Énergie Solaire
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-mono px-2.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-300 font-semibold border border-emerald-500/25 block">
                    IFMEREE
                  </span>
                  <span className="text-[10px] text-slate-500 mt-1 block">2024–2026</span>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-3 relative z-10">
                {stats.map((stat, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800/80 text-center shadow-md"
                  >
                    <div className={`text-xl font-heading font-black ${stat.color} leading-none`}>
                      <Counter to={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="text-[10px] text-slate-500 mt-1.5 font-medium leading-tight">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* Tools section */}
              <div className="pt-1 relative z-10">
                <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-widest mb-3">
                  Logiciels & Outils
                </div>
                <div className="flex flex-wrap gap-2">
                  {["PVsyst", "PVSol", "AutoCAD 2D", "SketchUp 3D", "Gantt Pro", "Excel"].map((tool) => (
                    <motion.span
                      key={tool}
                      whileHover={{ scale: 1.08, y: -1 }}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900/80 text-xs font-mono font-medium text-slate-300 border border-slate-700/60 shadow-sm"
                    >
                      <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                      {tool}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Bottom tagline */}
              <div className="relative z-10 pt-1 border-t border-slate-800/60 flex items-center justify-between">
                <span className="text-xs text-slate-500 font-mono">Formation · Stage PFE · Projets</span>
                <motion.div
                  className="flex items-center gap-1.5 text-xs font-semibold text-amber-400"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  <span>Disponible</span>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <span className="text-[10px] text-slate-600 font-mono tracking-widest uppercase">Défiler</span>
          <motion.div
            className="w-5 h-8 rounded-full border border-slate-800 flex items-start justify-center pt-1.5"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="w-1 h-2 rounded-full bg-amber-400"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
