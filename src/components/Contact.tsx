"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Mail, Phone, MapPin, Globe, Send, Download,
  MessageSquare, Sparkles,
  ArrowRight, Zap, Clock, CheckCircle
} from "lucide-react";
import Link from "next/link";

/* ─── SVG Icon Components ────────────────────────────────── */
function GithubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
    </svg>
  );
}

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fillRule="evenodd" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" clipRule="evenodd" />
    </svg>
  );
}

function LinkedinIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>
  );
}

/* ─── Floating Doodle Decorations ────────────────────────── */
function DoodleDecor() {
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.06]" xmlns="http://www.w3.org/2000/svg">
      <pattern id="dots-contact" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
        <circle cx="2" cy="2" r="1.2" fill="#1e293b"/>
      </pattern>
      <rect width="100%" height="100%" fill="url(#dots-contact)"/>
    </svg>
  );
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [focused, setFocused] = useState<string | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const languages = [
    { name: "Arabe", level: "Maternelle", flag: "🇲🇦", color: "from-red-100 to-rose-50", border: "border-red-200", dot: "bg-red-400" },
    { name: "Français", level: "Courante", flag: "🇫🇷", color: "from-blue-100 to-sky-50", border: "border-blue-200", dot: "bg-blue-400" },
    { name: "Anglais", level: "Technique", flag: "🇬🇧", color: "from-violet-100 to-purple-50", border: "border-violet-200", dot: "bg-violet-400" },
  ];

  const contactItems = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email Professionnel",
      value: "mohamedmerehoum860@gmail.com",
      href: "mailto:mohamedmerehoum860@gmail.com",
      bg: "bg-amber-400",
      cardBg: "bg-amber-50",
      cardBorder: "border-amber-200 hover:border-amber-400",
      textHover: "group-hover:text-amber-700",
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Téléphone / WhatsApp",
      value: "0672 - 992 948",
      href: "tel:0672992948",
      bg: "bg-emerald-400",
      cardBg: "bg-emerald-50",
      cardBorder: "border-emerald-200 hover:border-emerald-500",
      textHover: "group-hover:text-emerald-700",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Localisation",
      value: "Oujda, Maroc — Mobilité Nationale",
      href: null,
      bg: "bg-sky-400",
      cardBg: "bg-sky-50",
      cardBorder: "border-sky-200",
      textHover: "",
    },
  ];

  const socialLinks = [
    {
      icon: <GithubIcon className="w-5 h-5" />,
      label: "GitHub",
      href: "https://github.com/aminejhilel",
      bg: "bg-slate-900",
      text: "text-white",
      badge: "bg-amber-400 text-slate-900",
    },
    {
      icon: <InstagramIcon className="w-5 h-5" />,
      label: "Instagram",
      href: "https://instagram.com/aminejhilel",
      bg: "bg-gradient-to-br from-rose-500 to-fuchsia-600",
      text: "text-white",
      badge: "bg-white text-rose-600",
    },
    {
      icon: <LinkedinIcon className="w-5 h-5" />,
      label: "LinkedIn",
      href: "https://linkedin.com/in/aminejhilel",
      bg: "bg-sky-600",
      text: "text-white",
      badge: "bg-white text-sky-600",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
  };

  return (
    <section id="contact" className="py-28 paper-canvas relative border-t-2 border-slate-900 overflow-hidden text-slate-900">
      <DoodleDecor />

      {/* Ambient blobs */}
      <div className="absolute top-0 left-1/4 w-80 h-80 rounded-full bg-amber-200/30 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-emerald-200/25 blur-3xl pointer-events-none" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-20 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 text-amber-400 text-xs font-mono font-bold shadow-md">
            <Mail className="w-4 h-4" />
            <span>PRENDRE CONTACT</span>
          </div>
          <h2 className="font-bebas text-6xl sm:text-7xl font-black text-slate-900 tracking-tight leading-none">
            CONTACT &{" "}
            <span className="relative inline-block">
              <span className="text-amber-500">INFOS</span>
              <svg className="absolute -bottom-1 left-0 w-full" height="8" viewBox="0 0 200 8" preserveAspectRatio="none" fill="none">
                <path d="M2 6 Q50 2 100 5 Q150 8 198 3" stroke="#f59e0b" strokeWidth="3" strokeLinecap="round"/>
              </svg>
            </span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-body max-w-xl mx-auto">
            Intéressé par mes compétences en ingénierie solaire&nbsp;?<br className="hidden sm:block" />
            Je suis disponible pour tout projet ou opportunité professionnelle.
          </p>

          {/* Availability Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-800 text-xs font-mono font-bold shadow-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
            </span>
            Disponible pour de nouveaux projets
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-12"
        >

          {/* ── Left Column ── */}
          <motion.div variants={itemVariants} className="lg:col-span-5 space-y-6">

            {/* Contact Details Card */}
            <div className="bg-white rounded-3xl p-7 border-2 border-slate-900 shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] space-y-5 relative overflow-hidden">
              {/* Tape */}
              <div className="absolute -top-3 left-8 w-28 h-5 bg-amber-300 border-x border-amber-400 rotate-1 shadow-sm opacity-90" />

              <h3 className="font-heading text-lg font-extrabold text-slate-900 border-b-2 border-dashed border-slate-200 pb-3 pt-2 flex items-center gap-2">
                <Zap className="w-5 h-5 text-amber-500" />
                Coordonnées Directes
              </h3>

              <div className="space-y-3">
                {contactItems.map((item, idx) => {
                  const inner = (
                    <div className={`flex items-center gap-4 p-4 rounded-2xl ${item.cardBg} border ${item.cardBorder} transition-all group cursor-pointer shadow-sm`}>
                      <div className={`p-2.5 rounded-xl ${item.bg} text-slate-950 border border-slate-900 shadow-[2px_2px_0px_rgba(15,23,42,0.2)] flex-shrink-0`}>
                        {item.icon}
                      </div>
                      <div className="min-w-0">
                        <div className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest">{item.label}</div>
                        <div className={`text-sm font-bold text-slate-900 ${item.textHover} transition-colors truncate`}>{item.value}</div>
                      </div>
                      {item.href && <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-slate-700 ml-auto flex-shrink-0 transition-transform group-hover:translate-x-0.5" />}
                    </div>
                  );
                  return item.href ? (
                    <a key={idx} href={item.href}>{inner}</a>
                  ) : (
                    <div key={idx}>{inner}</div>
                  );
                })}
              </div>

              {/* Response Time */}
              <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200">
                <Clock className="w-4 h-4 text-slate-500" />
                <span className="text-xs font-mono font-bold text-slate-600">Réponse habituelle sous <span className="text-amber-600">24h</span></span>
              </div>

              {/* Download CV */}
              <div className="flex flex-col sm:flex-row gap-3 pt-1">
                <a
                  href="/cv_mohamed_merehoum.pdf"
                  download
                  className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-amber-500 text-slate-950 font-extrabold text-sm border-2 border-slate-900 shadow-[3px_3px_0px_rgba(15,23,42,1)] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] transition-all duration-150"
                >
                  <Download className="w-4 h-4" />
                  <span>Télécharger CV</span>
                </a>
                <Link
                  href="/cv"
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-900 text-white font-bold text-sm border-2 border-slate-900 shadow-[3px_3px_0px_rgba(245,158,11,1)] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] transition-all duration-150"
                >
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>Version Web</span>
                </Link>
              </div>
            </div>

            {/* Languages Card */}
            <div className="bg-white rounded-3xl p-6 border-2 border-slate-900 shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] space-y-4">
              <h4 className="font-heading text-base font-extrabold text-slate-900 flex items-center gap-2">
                <Globe className="w-5 h-5 text-sky-500" />
                Langues Pratiquées
              </h4>
              <div className="grid grid-cols-3 gap-3">
                {languages.map((lang, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -3, scale: 1.03 }}
                    className={`p-3 rounded-2xl bg-gradient-to-b ${lang.color} border ${lang.border} text-center space-y-1.5 cursor-default shadow-sm transition-shadow hover:shadow-md`}
                  >
                    <div className="text-2xl">{lang.flag}</div>
                    <div className="text-xs font-extrabold text-slate-900">{lang.name}</div>
                    <div className="inline-flex items-center gap-1">
                      <span className={`w-1.5 h-1.5 rounded-full ${lang.dot}`}></span>
                      <span className="text-[10px] font-mono font-bold text-slate-600">{lang.level}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

          </motion.div>

          {/* ── Right Column: Form ── */}
          <motion.div variants={itemVariants} className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-7 sm:p-10 border-2 border-slate-900 shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] relative overflow-hidden">
              {/* Tape */}
              <div className="absolute -top-3 right-12 w-32 h-5 bg-emerald-300 border-x border-emerald-400 -rotate-1 shadow-sm opacity-90" />

              <h3 className="font-heading text-xl font-extrabold text-slate-900 mb-6 flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-emerald-400 border border-slate-900 flex items-center justify-center">
                  <MessageSquare className="w-4 h-4 text-slate-950" />
                </div>
                Envoyer un Message
              </h3>

              <form
                action={`mailto:mohamedmerehoum860@gmail.com?subject=${encodeURIComponent(formData.subject || "Message via portfolio")}&body=${encodeURIComponent(`Nom: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`}
                onSubmit={(e) => {
                  if (!formData.name || !formData.email || !formData.message) {
                    e.preventDefault();
                  }
                }}
                className="space-y-4 font-body"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { id: "name", label: "Nom Complet", placeholder: "Votre nom complet", type: "text", key: "name" },
                    { id: "email", label: "Adresse Email", placeholder: "votre.email@exemple.com", type: "email", key: "email" },
                  ].map((field) => (
                    <div key={field.id} className="space-y-1.5">
                      <label htmlFor={field.id} className="text-xs font-bold text-slate-700 flex items-center gap-1">
                        {field.label}
                        <span className="text-amber-500">*</span>
                      </label>
                      <div className={`relative rounded-xl border-2 transition-all duration-200 ${focused === field.id ? "border-slate-900 shadow-[0_0_0_3px_rgba(245,158,11,0.2)]" : "border-slate-300"}`}>
                        <input
                          id={field.id}
                          type={field.type}
                          required
                          placeholder={field.placeholder}
                          value={formData[field.key as keyof typeof formData]}
                          onChange={(e) => setFormData({ ...formData, [field.key]: e.target.value })}
                          onFocus={() => setFocused(field.id)}
                          onBlur={() => setFocused(null)}
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 text-sm text-slate-900 placeholder-slate-400 focus:outline-none bg-transparent"
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="subject" className="text-xs font-bold text-slate-700 flex items-center gap-1">
                    Sujet
                    <span className="text-amber-500">*</span>
                  </label>
                  <div className={`relative rounded-xl border-2 transition-all duration-200 ${focused === "subject" ? "border-slate-900 shadow-[0_0_0_3px_rgba(245,158,11,0.2)]" : "border-slate-300"}`}>
                    <input
                      id="subject"
                      type="text"
                      required
                      placeholder="Opportunité professionnelle / Projet solaire..."
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      onFocus={() => setFocused("subject")}
                      onBlur={() => setFocused(null)}
                      className="w-full px-4 py-3 rounded-xl bg-transparent text-sm text-slate-900 placeholder-slate-400 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-xs font-bold text-slate-700 flex items-center gap-1">
                    Message
                    <span className="text-amber-500">*</span>
                  </label>
                  <div className={`relative rounded-xl border-2 transition-all duration-200 ${focused === "message" ? "border-slate-900 shadow-[0_0_0_3px_rgba(245,158,11,0.2)]" : "border-slate-300"}`}>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      placeholder="Bonjour Mohamed, je suis intéressé par votre profil pour..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      onFocus={() => setFocused("message")}
                      onBlur={() => setFocused(null)}
                      className="w-full px-4 py-3 rounded-xl bg-transparent text-sm text-slate-900 placeholder-slate-400 focus:outline-none resize-none"
                    />
                  </div>
                  <div className="text-right text-[10px] font-mono text-slate-400">
                    {formData.message.length} caractères
                  </div>
                </div>

                {/* Tips */}
                <div className="flex items-start gap-2 px-4 py-3 rounded-xl bg-amber-50 border border-amber-200">
                  <CheckCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-amber-800 font-medium leading-relaxed">
                    Le formulaire ouvrira votre client email par défaut avec les informations pré-remplies.
                  </p>
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full py-4 rounded-2xl bg-amber-500 text-slate-950 font-extrabold text-base border-2 border-slate-900 shadow-[4px_4px_0px_rgba(15,23,42,1)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all duration-150 flex items-center justify-center gap-3 group"
                >
                  <Send className="w-5 h-5 group-hover:rotate-12 transition-transform duration-200" />
                  <span>Envoyer le Message</span>
                </motion.button>

              </form>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
