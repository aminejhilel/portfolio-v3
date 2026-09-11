"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Globe, Send, Download, CheckCircle2, MessageSquare, Sparkles } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormSubmitted(true);
  };

  const languages = [
    { name: "Arabe", level: "Maternelle", flag: "🇲🇦" },
    { name: "Français", level: "Courante", flag: "🇫🇷" },
    { name: "Anglais", level: "Technique", flag: "🇬🇧" },
  ];

  return (
    <section id="contact" className="py-20 bg-slate-950 relative border-t border-slate-900">
      {/* Glow effect background */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold">
            <Mail className="w-3.5 h-3.5" />
            <span>Prendre Contact</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Contact & Informations
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Intéressé par mes compétences en ingénierie et installation solaire ? Contactez-moi directement !
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Side: Contact Cards & Languages (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            
            {/* Contact Details Card */}
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-800 space-y-6">
              <h3 className="font-heading text-xl font-bold text-white border-b border-slate-800 pb-3">
                Coordonnées Directes
              </h3>

              <div className="space-y-4">
                
                <a
                  href="mailto:mohamedmerehoum860@gmail.com"
                  className="flex items-center gap-4 p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-amber-500/50 transition-all group"
                >
                  <div className="p-3 rounded-lg bg-amber-500/10 text-amber-400 group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Adresse Email</div>
                    <div className="text-sm font-semibold text-white group-hover:text-amber-400 transition-colors">
                      mohamedmerehoum860@gmail.com
                    </div>
                  </div>
                </a>

                <a
                  href="tel:0672992948"
                  className="flex items-center gap-4 p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/50 transition-all group"
                >
                  <div className="p-3 rounded-lg bg-emerald-500/10 text-emerald-400 group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Téléphone / WhatsApp</div>
                    <div className="text-sm font-semibold text-white group-hover:text-emerald-400 transition-colors">
                      0672-992948
                    </div>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                  <div className="p-3 rounded-lg bg-blue-500/10 text-blue-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Localisation & Mobilité</div>
                    <div className="text-sm font-semibold text-white">
                      Oujda, Maroc — <span className="text-emerald-400 font-normal">Mobilité Nationale</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Download PDF CV Button */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href="/cv_mohamed_merehoum.pdf"
                  download
                  className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-emerald-500 text-slate-950 font-bold text-sm shadow-lg hover:opacity-95 transition-all transform hover:-translate-y-0.5"
                >
                  <Download className="w-4 h-4" />
                  <span>Télécharger PDF</span>
                </a>

                <Link
                  href="/cv"
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-900 text-slate-200 font-semibold text-sm border border-slate-700 hover:bg-slate-800"
                >
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>Version Web</span>
                </Link>
              </div>

            </div>

            {/* Languages Card */}
            <div className="glass-card rounded-2xl p-6 border border-slate-800 space-y-4">
              <h4 className="font-heading text-lg font-bold text-white flex items-center gap-2">
                <Globe className="w-5 h-5 text-amber-400" />
                <span>Langues Pratiquées</span>
              </h4>

              <div className="grid grid-cols-3 gap-3">
                {languages.map((lang, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-center space-y-1">
                    <div className="text-lg">{lang.flag}</div>
                    <div className="text-sm font-bold text-white">{lang.name}</div>
                    <div className="text-xs text-amber-400 font-medium">{lang.level}</div>
                  </div>
                ))}
              </div>
            </div>

          </motion.div>

          {/* Right Side: Interactive Form (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="glass-card rounded-2xl p-6 sm:p-10 border border-slate-800 shadow-2xl relative">
              
              <h3 className="font-heading text-xl font-bold text-white mb-6 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-emerald-400" />
                <span>Envoyer un Message</span>
              </h3>

              <AnimatePresence mode="wait">
                {formSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-4"
                  >
                    <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto animate-bounce" />
                    <h4 className="font-heading text-xl font-bold text-white">Message Envoyé avec Succès !</h4>
                    <p className="text-sm text-slate-300">
                      Merci pour votre message. Mohamed MEREHOUM vous répondra dans les plus brefs délais.
                    </p>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="px-4 py-2 rounded-xl bg-slate-900 text-xs font-semibold text-slate-300 border border-slate-700 hover:text-white"
                    >
                      Envoyer un autre message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-slate-300">Nom Complet *</label>
                        <input
                          type="text"
                          required
                          placeholder="Votre nom"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 transition-colors"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-slate-300">Adresse Email *</label>
                        <input
                          type="email"
                          required
                          placeholder="votre.email@exemple.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 transition-colors"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300">Sujet *</label>
                      <input
                        type="text"
                        required
                        placeholder="Opportunité professionnelle / Projet Solaire..."
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300">Message *</label>
                      <textarea
                        required
                        rows={5}
                        placeholder="Bonjour Mohamed, nous serions intéressés par votre profil pour..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-bold text-sm shadow-xl shadow-amber-500/20 transition-all flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
                    >
                      <Send className="w-4 h-4" />
                      <span>Envoyer le Message</span>
                    </button>

                  </form>
                )}
              </AnimatePresence>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
