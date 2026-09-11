const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

(async () => {
  console.log("Generating modern executive PDF CV (Refined header layout)...");

  // Read cremti.jpeg as base64 so it embeds inline reliably
  const imagePath = path.join(__dirname, 'cremti.jpeg');
  let imageBase64 = '';
  if (fs.existsSync(imagePath)) {
    const imageBuffer = fs.readFileSync(imagePath);
    imageBase64 = `data:image/jpeg;base64,${imageBuffer.toString('base64')}`;
  }

  const htmlContent = `
  <!DOCTYPE html>
  <html lang="fr">
  <head>
    <meta charset="UTF-8">
    <title>Mohamed MEREHOUM - CV</title>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

      @page {
        size: A4;
        margin: 0;
      }

      * {
        box-sizing: border-box;
        -webkit-print-color-adjust: exact !important;
        print-color-adjust: exact !important;
      }

      body {
        font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
        color: #1e293b;
        margin: 0;
        padding: 22px 30px;
        background: #ffffff;
        font-size: 9.3pt;
        line-height: 1.38;
      }

      /* Header Section */
      .header-container {
        display: flex;
        align-items: center;
        gap: 18px;
        border-bottom: 2.5px solid #2563eb;
        padding-bottom: 14px;
        margin-bottom: 12px;
      }

      .photo-wrapper {
        width: 92px;
        height: 92px;
        border-radius: 50%;
        overflow: hidden;
        border: 3px solid #2563eb;
        box-shadow: 0 4px 12px rgba(37, 99, 235, 0.25);
        flex-shrink: 0;
      }

      .photo-wrapper img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .header-details {
        flex: 1;
      }

      .name {
        font-size: 21pt;
        font-weight: 800;
        color: #0f172a;
        letter-spacing: -0.5px;
        margin: 0;
        line-height: 1.1;
      }

      .subtitle {
        font-size: 11.5pt;
        font-weight: 700;
        color: #2563eb;
        margin: 3px 0 8px 0;
      }

      .contact-row {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 6px 12px;
        font-size: 8.5pt;
        color: #334155;
      }

      .contact-item {
        display: inline-flex;
        align-items: center;
        gap: 4.5px;
        font-weight: 500;
      }

      .contact-item a {
        color: #2563eb;
        text-decoration: none;
        font-weight: 600;
      }

      .badge-pill {
        background: #eff6ff;
        color: #1e40af;
        border: 1px solid #bfdbfe;
        padding: 1.5px 8px;
        border-radius: 12px;
        font-size: 8pt;
        font-weight: 600;
      }

      /* Sections */
      .section {
        margin-bottom: 10px;
      }

      .section-title {
        font-size: 10pt;
        font-weight: 800;
        text-transform: uppercase;
        letter-spacing: 0.8px;
        color: #1e40af;
        border-bottom: 1.5px solid #dbeafe;
        padding-bottom: 2px;
        margin-bottom: 5px;
        display: flex;
        align-items: center;
        gap: 6px;
      }

      .section-title::before {
        content: '';
        display: inline-block;
        width: 5px;
        height: 13px;
        background: #2563eb;
        border-radius: 2px;
      }

      .profil-text {
        font-size: 8.8pt;
        color: #334155;
        margin: 0;
        text-align: justify;
        line-height: 1.4;
      }

      /* Timeline / Entries */
      .entry {
        margin-bottom: 5px;
      }

      .entry-header {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
      }

      .entry-title {
        font-size: 9.2pt;
        font-weight: 700;
        color: #0f172a;
      }

      .entry-company {
        font-weight: 700;
        color: #2563eb;
      }

      .entry-sub {
        font-style: italic;
        color: #475569;
        font-size: 8.8pt;
      }

      .entry-date {
        font-size: 8pt;
        font-weight: 600;
        color: #475569;
        background: #f8fafc;
        padding: 1px 6px;
        border-radius: 4px;
        border: 1px solid #e2e8f0;
        white-space: nowrap;
      }

      /* Bullet Lists */
      .bullet-list {
        margin: 2px 0 4px 0;
        padding-left: 12px;
        list-style: none;
      }

      .bullet-list li {
        position: relative;
        font-size: 8.6pt;
        color: #334155;
        margin-bottom: 1.5px;
        line-height: 1.32;
      }

      .bullet-list li::before {
        content: "•";
        color: #2563eb;
        font-weight: bold;
        font-size: 10pt;
        position: absolute;
        left: -10px;
        top: -1px;
      }

      /* Skills list format */
      .skills-list {
        margin: 2px 0 0 0;
        padding-left: 12px;
        list-style: none;
      }

      .skills-list li {
        position: relative;
        font-size: 8.6pt;
        color: #334155;
        margin-bottom: 2px;
        line-height: 1.32;
      }

      .skills-list li::before {
        content: "•";
        color: #2563eb;
        font-weight: bold;
        font-size: 10pt;
        position: absolute;
        left: -10px;
        top: -1px;
      }

      /* Langues Grid */
      .lang-grid {
        display: flex;
        gap: 20px;
        font-size: 8.6pt;
        margin-top: 2px;
      }

      .lang-item {
        display: flex;
        gap: 6px;
        align-items: center;
      }

      .lang-name {
        font-weight: 700;
        color: #0f172a;
      }

      .lang-level {
        color: #2563eb;
        font-weight: 500;
      }
    </style>
  </head>
  <body>

    <!-- HEADER -->
    <div class="header-container">
      <div class="photo-wrapper">
        <img src="${imageBase64}" alt="Mohamed MEREHOUM" />
      </div>
      <div class="header-details">
        <h1 class="name">MOHAMED MEREHOUM</h1>
        <div class="subtitle">Technicien Spécialisé en Systèmes Énergie Solaire</div>
        <div class="contact-row">
          <span class="contact-item">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            <a href="mailto:mohamedmerehoum860@gmail.com">mohamedmerehoum860@gmail.com</a>
          </span>
          <span class="contact-item">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            <strong>0672-992948</strong>
          </span>
          <span class="contact-item">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-10a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg>
            Oujda, Maroc
          </span>
          <span class="badge-pill">Permis B</span>
          <span class="badge-pill">Mobilité Nationale</span>
        </div>
      </div>
    </div>

    <!-- PROFIL -->
    <div class="section">
      <div class="section-title">Profil</div>
      <p class="profil-text">
        Passionné par les énergies renouvelables et diplômé Technicien Spécialisé en Systèmes Énergie Solaire de l'<strong>IFMEREE d'Oujda</strong>. Fort d'expériences de terrain en stage PFE (pose de structures, câblage DC/AC) et en initiation (relation client, chantier), je maîtrise le dimensionnement sur <strong>PVsyst</strong>, <strong>PVSol</strong> ainsi que la DAO 2D/3D (<strong>AutoCAD</strong>, <strong>SketchUp</strong>). À la recherche d'opportunités innovantes dans le secteur solaire.
      </p>
    </div>

    <!-- FORMATIONS -->
    <div class="section">
      <div class="section-title">Formations</div>
      <div class="entry">
        <div class="entry-header">
          <div>
            <span class="entry-title">Diplôme de Technicien Spécialisé en Énergies Renouvelables & Équipements Solaire</span>
            <div class="entry-sub">IFMEREE (Institut de Formation aux Métiers des Énergies Renouvelables) - Oujda</div>
          </div>
          <span class="entry-date">2024 – 2026</span>
        </div>
      </div>
      <div class="entry" style="margin-top: 3px;">
        <div class="entry-header">
          <div>
            <span class="entry-title">Baccalauréat Sciences Physiques et Chimie</span>
            <div class="entry-sub">Lycée Elarbi Al Houcini - Oujda</div>
          </div>
          <span class="entry-date">2020 – 2023</span>
        </div>
      </div>
    </div>

    <!-- EXPÉRIENCES PROFESSIONNELLES -->
    <div class="section">
      <div class="section-title">Expériences Professionnelles</div>

      <div class="entry">
        <div class="entry-header">
          <div>
            <span class="entry-company">Energy Pro Tech</span> <span class="entry-title">--- Stage PFE</span>
            <span class="entry-sub">(Oujda, Maroc)</span>
          </div>
          <span class="entry-date">Mars 2026 – Juin 2026</span>
        </div>
        <ul class="bullet-list">
          <li>Réalisation des structures avec Fer H ou Profil C.</li>
          <li>Installation des panneaux photovoltaïques.</li>
          <li>Tirage des câbles DC et AC.</li>
        </ul>
      </div>

      <div class="entry">
        <div class="entry-header">
          <div>
            <span class="entry-company">Ecowatt</span> <span class="entry-title">--- Stage d'initiation</span>
            <span class="entry-sub">(Oujda, Maroc)</span>
          </div>
          <span class="entry-date">Juillet 2025 – Août 2025</span>
        </div>
        <ul class="bullet-list">
          <li>Gestion des relations avec les clients et élaboration des propositions commerciales.</li>
          <li>Participation aux visites de chantier.</li>
        </ul>
      </div>

      <div class="entry">
        <div class="entry-header">
          <div>
            <span class="entry-company">IFMEREE</span> <span class="entry-title">--- Étudiant en Systèmes Énergie Solaire</span>
            <span class="entry-sub">(Oujda, Maroc)</span>
          </div>
          <span class="entry-date">2024 – 2026</span>
        </div>
        <ul class="bullet-list">
          <li>Apprentissage des techniques de la mise en service des installations.</li>
          <li>Câblage des coffrets DC et AC, maîtrise des techniques de dimensionnement.</li>
        </ul>
      </div>
    </div>

    <!-- PROJETS ACADÉMIQUES -->
    <div class="section">
      <div class="section-title">Projets Académiques</div>
      <ul class="bullet-list">
        <li>
          <strong>Projet d'installation solaire photovoltaïque à LEAR Meknès (1,4 MW) :</strong> Installation des panneaux photovoltaïques EST-OUEST. Préparation du rapport PVSol, modélisation 3D sur SketchUp, et planification du projet via Gantt.
        </li>
        <li>
          <strong>Projet d'installation solaire photovoltaïque à Heirchmane Kénitra (711 kW) :</strong> Élaboration des notes de calculs sur Excel, préparation du rapport PVsyst incluant les émissions de CO₂, et rédaction du rapport général sur Word.
        </li>
        <li>
          <strong>Projet d'installation des panneaux photovoltaïques dans la toiture de la salle B à IFMEREE Oujda (170,5 m²) :</strong> Visite du local pour prendre les mesures, élaboration des plans et schémas sur AutoCAD, et dimensionnement de l'installation sur PVsyst.
        </li>
      </ul>
    </div>

    <!-- COMPÉTENCES TECHNIQUES -->
    <div class="section">
      <div class="section-title">Compétences Techniques</div>
      <ul class="skills-list">
        <li><strong>Projection des plans 2D en 3D sur SketchUp :</strong> Conversion des plans 2D en 3D en projetant les plans AutoCAD avec leurs mesures sur SketchUp.</li>
        <li><strong>Dimensionnement des installations solaire thermique et photovoltaïque :</strong> Élaboration des notes de calculs dans Excel, dimensionnement et choix du matériel sur PVsyst.</li>
        <li><strong>La mise en service des installations :</strong> Vérification de passage du courant dans les câbles et programmation de l'onduleur.</li>
        <li><strong>Élaboration des schémas et plans électriques 2D sur AutoCAD :</strong> Réalisation des schémas unifilaire et multifilaire, plans d'implantation, de câblage et de la mise à la terre des installations.</li>
        <li><strong>Maintenance des équipements et installations solaire thermique :</strong> Maîtrise de la maintenance préventive et corrective, utilisation des appareils de mesure.</li>
        <li><strong>Câblage des coffrets DC et AC :</strong> Maîtrise de dénudage et de sertissage des câbles.</li>
        <li><strong>Logiciels & Outils :</strong> Gantt Projects (cadre temporel et main d'œuvre), SketchUp, AutoCAD, PVsyst, Pack Office.</li>
      </ul>
    </div>

    <!-- LANGUES -->
    <div class="section">
      <div class="section-title">Langues</div>
      <div class="lang-grid">
        <div class="lang-item">
          <span class="lang-name">Arabe :</span> <span class="lang-level">Langue maternelle</span>
        </div>
        <div class="lang-item">
          <span class="lang-name">Français :</span> <span class="lang-level">Courant</span>
        </div>
        <div class="lang-item">
          <span class="lang-name">Anglais :</span> <span class="lang-level">Technique</span>
        </div>
      </div>
    </div>

    <!-- ATOUTS & CENTRES D'INTÉRÊT -->
    <div class="section" style="margin-bottom: 0;">
      <div class="section-title">Atouts & Centres d'Intérêt</div>
      <p class="profil-text">
        <strong>Atouts :</strong> Communication claire et écoute active, esprit analytique et résolution de problèmes, rigueur et sens du détail.
      </p>
    </div>

  </body>
  </html>
  `;

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setContent(htmlContent, { waitUntil: 'networkidle0' });

  const pdfPath = path.join(__dirname, 'cv_mohamed_merehoum.pdf');
  const publicPdfPath = path.join(__dirname, 'public', 'cv_mohamed_merehoum.pdf');

  await page.pdf({
    path: pdfPath,
    format: 'A4',
    printBackground: true,
    margin: {
      top: '8mm',
      bottom: '8mm',
      left: '12mm',
      right: '12mm'
    }
  });

  fs.copyFileSync(pdfPath, publicPdfPath);
  console.log(`Refined header PDF generated successfully at: ${pdfPath}`);
  await browser.close();
})();
