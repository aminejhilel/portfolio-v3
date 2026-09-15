"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { 
  Sun, Zap, MapPin, ArrowRight, Download, CheckCircle2, 
  ShieldCheck, Compass, Sparkles, Pencil, Heart, Eye, Layers, FileText,
  TrendingUp, Award, ChevronDown
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";

/* ─── Animated Counter ──────────────────────────── */
function Counter({ to, suffix = "", decimals = 0 }: { to: number; suffix?: string; decimals?: number }) {
  const count = useMotionValue(0);
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    const controls = animate(count, to, { duration: 2, ease: "easeOut", delay: 0.3 });
    const unsub = count.on("change", (v) => {
      setDisplay(v.toFixed(decimals));
    });
    return () => { controls.stop(); unsub(); };
  }, [count, to, decimals]);

  return (
    <span className="font-bebas text-3xl tracking-wide tabular-nums">
      {display}{suffix}
    </span>
  );
}

/* ─── Floating Orbit Badge ──────────────────────── */
function OrbitBadge({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`absolute z-20 pointer-events-none ${className}`}>
      {children}
    </div>
  );
}

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden paper-canvas text-slate-900 border-b-2 border-slate-900">
      
      {/* ─── Decorative background blobs ─── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-amber-300/20 blur-3xl" />
        <div className="absolute top-1/3 -right-20 w-80 h-80 rounded-full bg-emerald-300/15 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-64 h-64 rounded-full bg-sky-300/15 blur-3xl" />
      </div>

      {/* ─── SVG sketch connectors ─── */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-40" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="sketchGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.7" />
            <stop offset="50%" stopColor="#10b981" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.7" />
          </linearGradient>
        </defs>
        <motion.path
          d="M 120 180 Q 280 100 450 160 T 780 120"
          fill="none"
          stroke="url(#sketchGrad)"
          strokeWidth="2.5"
          strokeDasharray="6 6"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
        <motion.path
          d="M 200 450 Q 500 560 850 480"
          fill="none"
          stroke="#94a3b8"
          strokeWidth="2"
          strokeDasharray="4 4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.2, delay: 0.3 }}
        />
      </svg>

      {/* ─── Floating Stickers ─── */}
      <motion.div
        drag
        dragConstraints={{ left: -30, right: 30, top: -30, bottom: 30 }}
        whileHover={{ scale: 1.1, rotate: -6 }}
        className="hidden lg:flex absolute top-28 left-10 z-20 cursor-grab active:cursor-grabbing"
      >
        <div className="relative bg-amber-300 text-slate-950 font-bold px-4 py-2 rounded-md shadow-lg transform -rotate-3 border-2 border-amber-500 flex items-center gap-2 neo-card">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-4 bg-amber-100/80 border-x border-amber-300/60 rotate-2 shadow-sm" />
          <Sun className="w-4 h-4 text-amber-900" />
          <span className="font-bebas tracking-wide text-lg">PVSYST 7.4</span>
          <span className="text-[10px] font-mono bg-amber-400/60 px-1.5 py-0.5 rounded text-amber-950">SOLAR</span>
        </div>
      </motion.div>

      <motion.div
        drag
        dragConstraints={{ left: -30, right: 30, top: -30, bottom: 30 }}
        whileHover={{ scale: 1.1, rotate: 6 }}
        className="hidden lg:flex absolute top-28 right-16 z-20 cursor-grab active:cursor-grabbing"
      >
        <div className="relative bg-emerald-300 text-slate-950 font-bold px-4 py-2 rounded-md shadow-lg transform rotate-3 border-2 border-emerald-500 flex items-center gap-2">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-14 h-4 bg-emerald-100/80 border-x border-emerald-300/60 -rotate-2 shadow-sm" />
          <Layers className="w-4 h-4 text-emerald-950" />
          <span className="font-bebas tracking-wide text-lg">AUTOCAD 2D/3D</span>
        </div>
      </motion.div>

      <motion.div
        drag
        dragConstraints={{ left: -20, right: 20, top: -20, bottom: 20 }}
        whileHover={{ scale: 1.08 }}
        className="hidden sm:flex absolute bottom-24 left-10 z-20 cursor-grab active:cursor-grabbing"
      >
        <div className="relative bg-white text-slate-900 px-4 py-3 rounded-lg shadow-xl border-2 border-slate-900 transform -rotate-6 font-caveat text-xl font-bold flex flex-col items-center">
          <div className="absolute -top-3 left-6 w-10 h-4 bg-yellow-200/90 rotate-6 shadow-xs border-x border-yellow-300" />
          <div className="flex items-center gap-1.5 text-amber-600">
            <Sparkles className="w-4 h-4" />
            <span>Stage PFE · LEAR Meknès</span>
          </div>
          <span className="text-sm text-slate-600 font-sans font-semibold">1.4 MW Centrale Solaire</span>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="hidden md:flex absolute bottom-24 right-14 z-20 items-center gap-2 bg-slate-900 text-white px-4 py-2.5 rounded-full shadow-2xl border-2 border-slate-700"
      >
        <div className="p-1.5 bg-amber-500 rounded-full text-slate-950">
          <Pencil className="w-4 h-4" />
        </div>
        <div>
          <span className="font-bebas text-base tracking-wider text-amber-400 block leading-tight">DIMENSIONNEMENT PV</span>
          <span className="text-[10px] text-slate-300 font-mono">DC / AC & Schémas</span>
        </div>
      </motion.div>

      {/* Social counters – right rail */}
      <div className="hidden lg:flex absolute top-1/2 right-5 -translate-y-1/2 flex-col gap-3 z-20">
        <motion.div 
          whileHover={{ scale: 1.15 }}
          className="flex flex-col items-center p-3 bg-white shadow-xl rounded-2xl border-2 border-slate-200 text-slate-800"
        >
          <Heart className="w-5 h-5 text-rose-500 fill-rose-500" />
          <span className="font-bebas text-sm mt-0.5 text-slate-900">15.2K</span>
        </motion.div>
        <motion.div 
          whileHover={{ scale: 1.15 }}
          className="flex flex-col items-center p-3 bg-white shadow-xl rounded-2xl border-2 border-slate-200 text-slate-800"
        >
          <Eye className="w-5 h-5 text-blue-500" />
          <span className="font-bebas text-sm mt-0.5 text-slate-900">6.1K</span>
        </motion.div>
        <motion.div 
          whileHover={{ scale: 1.15 }}
          className="flex flex-col items-center p-3 bg-white shadow-xl rounded-2xl border-2 border-slate-200 text-slate-800"
        >
          <TrendingUp className="w-5 h-5 text-emerald-500" />
          <span className="font-bebas text-sm mt-0.5 text-slate-900">TOP</span>
        </motion.div>
      </div>

      {/* ─── MAIN HERO CONTENT ─── */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center pt-20 pb-16">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-7 flex flex-col items-center"
        >
          {/* Stage Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 text-white text-xs font-semibold shadow-xl border border-slate-800"
          >
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="font-mono text-amber-400 font-bold">IFMEREE OUJDA</span>
            <span className="text-slate-500">•</span>
            <span>Technicien Spécialisé Promo 2024–2026</span>
          </motion.div>

          {/* Avatar + Name block */}
          <div className="flex flex-col items-center gap-4">
            {/* Profile Avatar */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 200 }}
              className="relative"
            >
              {/* Rotating ring */}
              <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full relative">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: "conic-gradient(from 0deg, #f59e0b, #10b981, #3b82f6, #f59e0b)",
                    padding: "3px",
                  }}
                >
                  <div className="w-full h-full rounded-full bg-paper-bg" />
                </motion.div>
                {/* Avatar content */}
                <div className="absolute inset-[4px] rounded-full bg-gradient-to-br from-amber-300 to-amber-500 border-2 border-white flex items-center justify-center overflow-hidden shadow-2xl">
                  <div className="flex flex-col items-center justify-center">
                    <Sun className="w-10 h-10 text-slate-950 animate-sun-rays" />
                  </div>
                </div>
                {/* Award badge */}
                <motion.div
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-1 -right-1 w-9 h-9 rounded-full bg-emerald-400 border-2 border-white shadow-lg flex items-center justify-center"
                >
                  <Award className="w-4 h-4 text-slate-950" />
                </motion.div>
              </div>
            </motion.div>

            {/* Main Title */}
            <div className="space-y-1">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="font-caveat text-3xl sm:text-4xl text-amber-600 font-bold block transform -rotate-1"
              >
                Hey, Je suis 👋
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.35 }}
                className="font-bebas text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-black text-slate-900 tracking-tight leading-[0.88]"
              >
                MOHAMED{" "}
                <span className="relative inline-block">
                  <span className="text-amber-500 wavy-underline">MEREHOUM</span>
                  {/* Highlight stroke */}
                  <svg className="absolute -bottom-1 left-0 w-full" height="10" viewBox="0 0 300 10" preserveAspectRatio="none" fill="none">
                    <motion.path
                      d="M2 7 Q75 3 150 6 Q225 9 298 4"
                      stroke="#f59e0b"
                      strokeWidth="3"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1, delay: 0.8 }}
                    />
                  </svg>
                </span>
              </motion.h1>
            </div>
          </div>

          {/* Profession Title */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-wrap items-center justify-center gap-2 max-w-2xl"
          >
            <span className="px-4 py-1.5 rounded-xl bg-slate-900 text-amber-400 font-mono text-sm font-bold border border-slate-700 shadow-md">
              ⚡ Systèmes Énergie Solaire
            </span>
            <span className="px-4 py-1.5 rounded-xl bg-amber-100 text-amber-900 font-mono text-sm font-bold border border-amber-300 shadow-md">
              ☀️ PVsyst · AutoCAD · SketchUp
            </span>
            <span className="px-4 py-1.5 rounded-xl bg-emerald-100 text-emerald-900 font-mono text-sm font-bold border border-emerald-300 shadow-md">
              🌱 Photovoltaïque & DC/AC
            </span>
          </motion.div>

          {/* Key Info Chips */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-2.5 pt-1"
          >
            {[
              { icon: MapPin, text: "Oujda, Maroc", color: "bg-amber-100 text-amber-900 border-amber-300" },
              { icon: Compass, text: "Mobilité Nationale", color: "bg-emerald-100 text-emerald-900 border-emerald-300" },
              { icon: ShieldCheck, text: "Permis B", color: "bg-sky-100 text-sky-900 border-sky-300" },
              { icon: CheckCircle2, text: "Disponible", color: "bg-green-100 text-green-900 border-green-400" },
            ].map(({ icon: Icon, text, color }) => (
              <span key={text} className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl border-2 text-xs font-bold shadow-sm ${color}`}>
                <Icon className="w-3.5 h-3.5" />
                {text}
              </span>
            ))}
          </motion.div>

          {/* Key Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid grid-cols-3 gap-3 max-w-lg w-full pt-2"
          >
            {[
              { value: 1.4, suffix: " MW", label: "LEAR Meknès", color: "text-amber-600", bg: "bg-amber-50 border-amber-300" },
              { value: 711, suffix: " kW", label: "Heirchmane Kénitra", color: "text-emerald-600", bg: "bg-emerald-50 border-emerald-300" },
              { value: 170, suffix: " m²", label: "Toiture IFMEREE", color: "text-sky-600", bg: "bg-sky-50 border-sky-300" },
            ].map((stat, idx) => (
              <div key={idx} className={`p-4 rounded-2xl ${stat.bg} border-2 shadow-md text-center neo-card`}>
                <div className="text-slate-900">
                  <Counter to={stat.value} suffix={stat.suffix} decimals={idx === 0 ? 1 : 0} />
                </div>
                <div className={`text-[10px] ${stat.color} font-extrabold uppercase font-mono mt-0.5`}>
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 w-full"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
              className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-9 py-4 rounded-2xl bg-amber-500 text-slate-950 font-extrabold text-sm shadow-xl border-2 border-slate-900 shadow-[4px_4px_0px_rgba(15,23,42,1)] hover:shadow-[6px_6px_0px_rgba(15,23,42,1)] hover:-translate-y-0.5 transition-all"
            >
              <Sparkles className="w-5 h-5" />
              <span>Explorer mes Projets</span>
              <ArrowRight className="w-5 h-5" />
            </motion.a>

            <motion.a
              href="/cv_mohamed_merehoum.pdf"
              download
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
              className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl bg-white text-slate-900 font-bold text-sm border-2 border-slate-900 shadow-[4px_4px_0px_rgba(15,23,42,1)] hover:shadow-[6px_6px_0px_rgba(15,23,42,1)] hover:-translate-y-0.5 transition-all"
            >
              <Download className="w-5 h-5 text-amber-500" />
              <span>Télécharger CV</span>
            </motion.a>

            <motion.div whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.96 }}>
              <Link
                href="/cv"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-slate-900 text-amber-400 font-bold text-sm border-2 border-slate-900 shadow-[4px_4px_0px_rgba(245,158,11,0.5)] hover:shadow-[6px_6px_0px_rgba(245,158,11,0.5)] hover:-translate-y-0.5 transition-all"
              >
                <FileText className="w-5 h-5" />
                <span>Version Web CV</span>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1"
      >
        <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">Découvrir</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-slate-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}
