"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { 
  Sun, Zap, MapPin, ArrowRight, Download, CheckCircle2, 
  ShieldCheck, Compass, Sparkles, Pencil, Heart, Eye, Layers, FileText
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

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

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center pt-28 pb-20 overflow-hidden paper-canvas text-slate-900 border-b border-slate-200">
      


      {/* ─── 2. SVG HAND-DRAWN SKETCH CONNECTORS ─── */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 stroke-slate-400/60" xmlns="http://www.w3.org/2000/svg">
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

      {/* ─── 3. INTERACTIVE SKETCH STICKERS & BADGES ─── */}
      {/* Sticker 1: PVsyst */}
      <motion.div
        drag
        dragConstraints={{ left: -30, right: 30, top: -30, bottom: 30 }}
        whileHover={{ scale: 1.1, rotate: -6 }}
        className="hidden lg:flex absolute top-28 left-12 z-20 cursor-grab active:cursor-grabbing"
      >
        <div className="relative bg-amber-300 text-slate-950 font-bold px-4 py-2 rounded-md shadow-lg transform -rotate-3 border border-amber-400 flex items-center gap-2">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-4 bg-amber-100/80 border-x border-amber-300/60 rotate-2 shadow-sm" />
          <Sun className="w-4 h-4 text-amber-900" />
          <span className="font-bebas tracking-wide text-lg">PVSYST 7.4</span>
          <span className="text-[10px] font-mono bg-amber-400/60 px-1.5 py-0.5 rounded text-amber-950">SOLAR</span>
        </div>
      </motion.div>

      {/* Sticker 2: AutoCAD 2D/3D */}
      <motion.div
        drag
        dragConstraints={{ left: -30, right: 30, top: -30, bottom: 30 }}
        whileHover={{ scale: 1.1, rotate: 6 }}
        className="hidden lg:flex absolute top-28 right-16 z-20 cursor-grab active:cursor-grabbing"
      >
        <div className="relative bg-emerald-300 text-slate-950 font-bold px-4 py-2 rounded-md shadow-lg transform rotate-3 border border-emerald-400 flex items-center gap-2">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-14 h-4 bg-emerald-100/80 border-x border-emerald-300/60 -rotate-2 shadow-sm" />
          <Layers className="w-4 h-4 text-emerald-950" />
          <span className="font-bebas tracking-wide text-lg">AUTOCAD 2D/3D</span>
        </div>
      </motion.div>

      {/* Sticker 3: Handwritten note "PFE 2026 LEAR" */}
      <motion.div
        drag
        dragConstraints={{ left: -20, right: 20, top: -20, bottom: 20 }}
        whileHover={{ scale: 1.08 }}
        className="hidden sm:flex absolute bottom-20 left-10 z-20 cursor-grab active:cursor-grabbing"
      >
        <div className="relative bg-white text-slate-900 px-4 py-3 rounded-lg shadow-xl border border-slate-200 transform -rotate-6 font-caveat text-xl font-bold flex flex-col items-center">
          <div className="absolute -top-3 left-6 w-10 h-4 bg-yellow-200/90 rotate-6 shadow-xs border-x border-yellow-300" />
          <div className="flex items-center gap-1.5 text-amber-600">
            <Sparkles className="w-4 h-4" />
            <span>Stage PFE · LEAR Meknès</span>
          </div>
          <span className="text-sm text-slate-600 font-sans font-semibold">1.4 MW Centrale Solaire</span>
        </div>
      </motion.div>

      {/* Sticker 4: Sketch Pencil Badge */}
      <motion.div 
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="hidden md:flex absolute bottom-20 right-12 z-20 items-center gap-2 bg-slate-900 text-white px-4 py-2.5 rounded-full shadow-2xl border border-slate-700"
      >
        <div className="p-1.5 bg-amber-500 rounded-full text-slate-950">
          <Pencil className="w-4 h-4" />
        </div>
        <div>
          <span className="font-bebas text-base tracking-wider text-amber-400 block leading-tight">DIMENSIONNEMENT PV</span>
          <span className="text-[10px] text-slate-300 font-mono">DC / AC & Schémas</span>
        </div>
      </motion.div>

      {/* Social Engagement Counters */}
      <div className="hidden lg:flex absolute top-1/2 right-6 -translate-y-1/2 flex-col gap-4 z-20">
        <motion.div 
          whileHover={{ scale: 1.15 }}
          className="flex flex-col items-center p-2.5 bg-white shadow-xl rounded-2xl border border-slate-200 text-slate-800"
        >
          <Heart className="w-5 h-5 text-rose-500 fill-rose-500" />
          <span className="font-bebas text-sm mt-0.5 text-slate-900">15.2K</span>
        </motion.div>

        <motion.div 
          whileHover={{ scale: 1.15 }}
          className="flex flex-col items-center p-2.5 bg-white shadow-xl rounded-2xl border border-slate-200 text-slate-800"
        >
          <Eye className="w-5 h-5 text-blue-500" />
          <span className="font-bebas text-sm mt-0.5 text-slate-900">6.1K</span>
        </motion.div>
      </div>

      {/* ─── 4. MAIN HERO CONTENT (CENTERED / FULL WIDTH NO PROFILE CARD) ─── */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-7 flex flex-col items-center"
        >
          {/* Stage Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 text-white text-xs font-semibold shadow-xl border border-slate-800">
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="font-mono text-amber-400 font-bold">IFMEREE OUJDA</span>
            <span className="text-slate-500">•</span>
            <span>Technicien Spécialisé Promo 2024–2026</span>
          </div>

          {/* Main Title */}
          <div className="space-y-2">
            <span className="font-caveat text-4xl sm:text-5xl text-amber-600 font-bold block transform -rotate-1">
              Hey, Je suis 👋
            </span>
            <h1 className="font-bebas text-7xl sm:text-8xl lg:text-9xl font-black text-slate-900 tracking-tight leading-[0.88] drop-shadow-sm">
              MOHAMED <span className="text-amber-500 underline decoration-amber-400/50 decoration-wavy decoration-3">MEREHOUM</span>
            </h1>
          </div>



          {/* Key Skill Chips */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 pt-1">
            {[
              { icon: MapPin, text: "Oujda, Maroc", color: "bg-amber-100 text-amber-900 border-amber-300" },
              { icon: Compass, text: "Mobilité Nationale", color: "bg-emerald-100 text-emerald-900 border-emerald-300" },
              { icon: ShieldCheck, text: "Permis B", color: "bg-sky-100 text-sky-900 border-sky-300" },
            ].map(({ icon: Icon, text, color }) => (
              <span key={text} className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl border text-xs font-bold shadow-xs ${color}`}>
                <Icon className="w-4 h-4" />
                {text}
              </span>
            ))}
          </div>

          {/* Key Stats Chips Bar (1.4 MW, 711 kW, 170 m²) */}
          <div className="grid grid-cols-3 gap-4 max-w-xl w-full pt-4">
            <div className="p-4 rounded-2xl bg-white border-2 border-slate-900 shadow-md text-center">
              <div className="text-slate-900">
                <Counter to={1.4} suffix=" MW" decimals={1} />
              </div>
              <div className="text-xs text-amber-600 font-extrabold uppercase font-mono mt-0.5">LEAR Meknès</div>
            </div>

            <div className="p-4 rounded-2xl bg-white border-2 border-slate-900 shadow-md text-center">
              <div className="text-slate-900">
                <Counter to={711} suffix=" kW" decimals={0} />
              </div>
              <div className="text-xs text-emerald-600 font-extrabold uppercase font-mono mt-0.5">Heirchmane Kénitra</div>
            </div>

            <div className="p-4 rounded-2xl bg-white border-2 border-slate-900 shadow-md text-center">
              <div className="text-slate-900">
                <Counter to={170} suffix=" m²" decimals={0} />
              </div>
              <div className="text-xs text-sky-600 font-extrabold uppercase font-mono mt-0.5">Toiture IFMEREE</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
              className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-9 py-4 rounded-2xl bg-amber-500 text-slate-950 font-extrabold text-base shadow-xl shadow-amber-500/25 hover:bg-amber-400 transition-all border border-amber-400"
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
              className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl bg-white text-slate-900 font-bold text-base border-2 border-slate-900 hover:bg-slate-900 hover:text-white transition-all shadow-lg"
            >
              <Download className="w-5 h-5 text-amber-500" />
              <span>Télécharger CV</span>
            </motion.a>

            <motion.div whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.96 }}>
              <Link
                href="/cv"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-slate-100 text-slate-900 font-bold text-base border border-slate-300 shadow-sm"
              >
                <FileText className="w-5 h-5 text-emerald-600" />
                <span>Version Web CV</span>
              </Link>
            </motion.div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
