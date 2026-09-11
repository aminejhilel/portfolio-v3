"use client";

import { Printer, ArrowLeft, Download, Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";

export default function PrintableCV() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-slate-900 py-8 px-4 print:bg-white print:py-0 print:px-0 font-sans">
      
      {/* Top Action Bar (Hidden when printing) */}
      <div className="max-w-4xl mx-auto mb-6 flex items-center justify-between print:hidden">
        <Link
          href="/"
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-semibold transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Retour au Portfolio</span>
        </Link>

        <div className="flex items-center gap-3">
          <a
            href="/cv_mohamed_merehoum.pdf"
            download
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-semibold transition-colors shadow-md"
          >
            <Download className="w-4 h-4" />
            <span>Télécharger PDF</span>
          </a>

          <button
            onClick={handlePrint}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 text-sm font-bold transition-colors shadow-md"
          >
            <Printer className="w-4 h-4" />
            <span>Imprimer le CV</span>
          </button>
        </div>
      </div>

      {/* CV Document Container */}
      <div className="max-w-[210mm] mx-auto bg-white text-slate-800 p-[10mm] shadow-2xl rounded-xl print:shadow-none print:rounded-none print:p-0 text-[9.3pt] leading-[1.38]">
        
        {/* Header Section */}
        <div className="flex items-center gap-4 border-b-2 border-blue-600 pb-3.5 mb-3">
          <div className="w-[92px] h-[92px] rounded-full overflow-hidden border-2 border-blue-600 shadow-md shrink-0">
            <img
              src="/cremti.jpeg"
              alt="Mohamed MEREHOUM"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex-1">
            <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight m-0 uppercase">
              Mohamed MEREHOUM
            </h1>
            <h2 className="text-sm font-bold text-blue-600 mt-1 mb-2">
              Technicien Spécialisé en Systèmes Énergie Solaire
            </h2>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[8.5pt] text-slate-700 font-medium">
              <span className="inline-flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                <a href="mailto:mohamedmerehoum860@gmail.com" className="text-blue-600 font-semibold hover:underline">
                  mohamedmerehoum860@gmail.com
                </a>
              </span>
              <span className="inline-flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                <strong className="text-slate-900">0672-992948</strong>
              </span>
              <span className="inline-flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                Oujda, Maroc
              </span>
              <span className="px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 text-[8pt] font-semibold border border-blue-200">
                Permis B
              </span>
              <span className="px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 text-[8pt] font-semibold border border-blue-200">
                Mobilité Nationale
              </span>
            </div>
          </div>
        </div>

        {/* Profil */}
        <section className="mb-2.5">
          <div className="text-[9.8pt] font-extrabold text-blue-800 uppercase tracking-wider border-b border-blue-100 pb-0.5 mb-1 flex items-center gap-1.5">
            <span className="w-1.5 h-3.5 bg-blue-600 rounded-sm"></span>
            <span>Profil</span>
          </div>
          <p className="text-slate-700 text-[8.8pt] text-justify leading-relaxed">
            Passionné par les énergies renouvelables et diplômé Technicien Spécialisé en Systèmes Énergie Solaire de l'<strong>IFMEREE d'Oujda</strong>. Fort d'expériences de terrain en stage PFE (pose de structures, câblage DC/AC) et en initiation (relation client, chantier), je maîtrise le dimensionnement sur <strong>PVsyst</strong>, <strong>PVSol</strong> ainsi que la DAO 2D/3D (<strong>AutoCAD</strong>, <strong>SketchUp</strong>). À la recherche d'opportunités innovantes dans le secteur solaire.
          </p>
        </section>

        {/* Formations */}
        <section className="mb-2.5">
          <div className="text-[9.8pt] font-extrabold text-blue-800 uppercase tracking-wider border-b border-blue-100 pb-0.5 mb-1 flex items-center gap-1.5">
            <span className="w-1.5 h-3.5 bg-blue-600 rounded-sm"></span>
            <span>Formations</span>
          </div>
          <div className="space-y-1 text-[8.8pt]">
            <div className="flex justify-between items-baseline">
              <div>
                <strong className="text-slate-900">IFMEREE, Oujda</strong> --- <span className="italic">Diplôme de Technicien Spécialisé en Énergies Renouvelables & Équipements Solaire</span>
              </div>
              <span className="text-[8pt] font-semibold text-slate-600 bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200">2024 – 2026</span>
            </div>
            <div className="flex justify-between items-baseline">
              <div>
                <strong className="text-slate-900">Lycée Elarbi Al Houcini, Oujda</strong> --- <span className="italic">Baccalauréat Sciences Physiques et Chimie</span>
              </div>
              <span className="text-[8pt] font-semibold text-slate-600 bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200">2020 – 2023</span>
            </div>
          </div>
        </section>

        {/* Expériences Professionnelles */}
        <section className="mb-2.5">
          <div className="text-[9.8pt] font-extrabold text-blue-800 uppercase tracking-wider border-b border-blue-100 pb-0.5 mb-1 flex items-center gap-1.5">
            <span className="w-1.5 h-3.5 bg-blue-600 rounded-sm"></span>
            <span>Expériences Professionnelles</span>
          </div>

          <div className="space-y-2 text-[8.8pt]">
            <div>
              <div className="flex justify-between items-baseline">
                <div>
                  <strong className="text-blue-600 font-bold">Energy Pro Tech --- Oujda, Maroc</strong> --- <span className="italic">Stage PFE</span>
                </div>
                <span className="text-[8pt] font-semibold text-slate-600 bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200">Mars 2026 – Juin 2026</span>
              </div>
              <ul className="list-none pl-3 mt-0.5 space-y-0.5 text-[8.6pt] text-slate-700">
                <li className="relative pl-3 before:content-['•'] before:text-blue-600 before:font-bold before:absolute before:left-0">Réalisation des structures avec Fer H ou Profil C.</li>
                <li className="relative pl-3 before:content-['•'] before:text-blue-600 before:font-bold before:absolute before:left-0">Installation des panneaux photovoltaïques.</li>
                <li className="relative pl-3 before:content-['•'] before:text-blue-600 before:font-bold before:absolute before:left-0">Tirage des câbles DC et AC.</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-baseline">
                <div>
                  <strong className="text-blue-600 font-bold">Ecowatt --- Oujda, Maroc</strong> --- <span className="italic">Stage d'initiation</span>
                </div>
                <span className="text-[8pt] font-semibold text-slate-600 bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200">Juillet 2025 – Août 2025</span>
              </div>
              <ul className="list-none pl-3 mt-0.5 space-y-0.5 text-[8.6pt] text-slate-700">
                <li className="relative pl-3 before:content-['•'] before:text-blue-600 before:font-bold before:absolute before:left-0">Gestion des relations avec les clients et élaboration des propositions commerciales.</li>
                <li className="relative pl-3 before:content-['•'] before:text-blue-600 before:font-bold before:absolute before:left-0">Participation aux visites de chantier.</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-baseline">
                <div>
                  <strong className="text-blue-600 font-bold">IFMEREE --- Oujda, Maroc</strong> --- <span className="italic">Étudiant en Systèmes Énergie Solaire</span>
                </div>
                <span className="text-[8pt] font-semibold text-slate-600 bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200">2024 – 2026</span>
              </div>
              <ul className="list-none pl-3 mt-0.5 space-y-0.5 text-[8.6pt] text-slate-700">
                <li className="relative pl-3 before:content-['•'] before:text-blue-600 before:font-bold before:absolute before:left-0">Apprentissage des techniques de la mise en service des installations.</li>
                <li className="relative pl-3 before:content-['•'] before:text-blue-600 before:font-bold before:absolute before:left-0">Câblage des coffrets DC et AC, maîtrise des techniques de dimensionnement.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Projets Académiques */}
        <section className="mb-2.5">
          <div className="text-[9.8pt] font-extrabold text-blue-800 uppercase tracking-wider border-b border-blue-100 pb-0.5 mb-1 flex items-center gap-1.5">
            <span className="w-1.5 h-3.5 bg-blue-600 rounded-sm"></span>
            <span>Projets Académiques</span>
          </div>
          <ul className="list-none pl-3 space-y-1 text-[8.6pt] text-slate-700">
            <li className="relative pl-3 before:content-['•'] before:text-blue-600 before:font-bold before:absolute before:left-0">
              <strong className="text-slate-900">Projet d'installation solaire photovoltaïque à LEAR Meknès (1,4 MW) :</strong> Installation des panneaux photovoltaïques EST-OUEST. Préparation du rapport PVSol, modélisation 3D sur SketchUp, et planification du projet via Gantt.
            </li>
            <li className="relative pl-3 before:content-['•'] before:text-blue-600 before:font-bold before:absolute before:left-0">
              <strong className="text-slate-900">Projet d'installation solaire photovoltaïque à Heirchmane Kénitra (711 kW) :</strong> Élaboration des notes de calculs sur Excel, préparation du rapport PVsyst incluant les émissions de CO₂, et rédaction du rapport général sur Word.
            </li>
            <li className="relative pl-3 before:content-['•'] before:text-blue-600 before:font-bold before:absolute before:left-0">
              <strong className="text-slate-900">Projet d'installation des panneaux photovoltaïques dans la toiture de la salle B à IFMEREE Oujda (170,5 m²) :</strong> Visite du local pour prendre les mesures, élaboration des plans et schémas sur AutoCAD, et dimensionnement de l'installation sur PVsyst.
            </li>
          </ul>
        </section>

        {/* Compétences Techniques */}
        <section className="mb-2.5">
          <div className="text-[9.8pt] font-extrabold text-blue-800 uppercase tracking-wider border-b border-blue-100 pb-0.5 mb-1 flex items-center gap-1.5">
            <span className="w-1.5 h-3.5 bg-blue-600 rounded-sm"></span>
            <span>Compétences Techniques</span>
          </div>
          <ul className="list-none pl-3 space-y-0.5 text-[8.6pt] text-slate-700">
            <li className="relative pl-3 before:content-['•'] before:text-blue-600 before:font-bold before:absolute before:left-0"><strong className="text-slate-900">Projection des plans 2D en 3D sur SketchUp :</strong> Conversion des plans 2D en 3D en projetant les plans AutoCAD avec leurs mesures sur SketchUp.</li>
            <li className="relative pl-3 before:content-['•'] before:text-blue-600 before:font-bold before:absolute before:left-0"><strong className="text-slate-900">Dimensionnement des installations solaire thermique et photovoltaïque :</strong> Élaboration des notes de calculs dans Excel, dimensionnement et choix du matériel sur PVsyst.</li>
            <li className="relative pl-3 before:content-['•'] before:text-blue-600 before:font-bold before:absolute before:left-0"><strong className="text-slate-900">La mise en service des installations :</strong> Vérification de passage du courant dans les câbles et programmation de l'onduleur.</li>
            <li className="relative pl-3 before:content-['•'] before:text-blue-600 before:font-bold before:absolute before:left-0"><strong className="text-slate-900">Élaboration des schémas et plans électriques 2D sur AutoCAD :</strong> Réalisation des schémas unifilaire et multifilaire, plans d'implantation, de câblage et de la mise à la terre des installations.</li>
            <li className="relative pl-3 before:content-['•'] before:text-blue-600 before:font-bold before:absolute before:left-0"><strong className="text-slate-900">Maintenance des équipements et installations solaire thermique :</strong> Maîtrise de la maintenance préventive et corrective, utilisation des appareils de mesure.</li>
            <li className="relative pl-3 before:content-['•'] before:text-blue-600 before:font-bold before:absolute before:left-0"><strong className="text-slate-900">Câblage des coffrets DC et AC :</strong> Maîtrise de dénudage et de sertissage des câbles.</li>
            <li className="relative pl-3 before:content-['•'] before:text-blue-600 before:font-bold before:absolute before:left-0"><strong className="text-slate-900">Logiciels & Outils :</strong> Gantt Projects (cadre temporel et main d'œuvre), SketchUp, AutoCAD, PVsyst, Pack Office.</li>
          </ul>
        </section>

        {/* Langues */}
        <section className="mb-2.5">
          <div className="text-[9.8pt] font-extrabold text-blue-800 uppercase tracking-wider border-b border-blue-100 pb-0.5 mb-1 flex items-center gap-1.5">
            <span className="w-1.5 h-3.5 bg-blue-600 rounded-sm"></span>
            <span>Langues</span>
          </div>
          <div className="flex gap-6 text-[8.6pt]">
            <div><strong className="text-slate-900">Arabe :</strong> <span className="text-blue-600 font-medium">Langue maternelle</span></div>
            <div><strong className="text-slate-900">Français :</strong> <span className="text-blue-600 font-medium">Courant</span></div>
            <div><strong className="text-slate-900">Anglais :</strong> <span className="text-blue-600 font-medium">Technique</span></div>
          </div>
        </section>

        {/* Atouts */}
        <section>
          <div className="text-[9.8pt] font-extrabold text-blue-800 uppercase tracking-wider border-b border-blue-100 pb-0.5 mb-1 flex items-center gap-1.5">
            <span className="w-1.5 h-3.5 bg-blue-600 rounded-sm"></span>
            <span>Atouts & Centres d'Intérêt</span>
          </div>
          <p className="text-[8.6pt] text-slate-700 leading-normal">
            <strong className="text-slate-900">Atouts :</strong> Communication claire et écoute active, esprit analytique et résolution de problèmes, rigueur et sens du détail.
          </p>
        </section>

      </div>
    </div>
  );
}
