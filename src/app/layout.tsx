import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Mohamed MEREHOUM | Technicien Spécialisé en Systèmes Énergie Solaire",
  description:
    "Portfolio professionnel de Mohamed MEREHOUM, Technicien Spécialisé en Systèmes Énergie Solaire (IFMEREE Oujda). Dimensionnement PVsyst, PVSol, AutoCAD 2D/3D SketchUp et installation photovoltaïque.",
  keywords: [
    "Mohamed MEREHOUM",
    "Énergie Solaire",
    "Photovoltaïque",
    "PVsyst",
    "AutoCAD",
    "IFMEREE Oujda",
    "Technicien Solaire",
    "PFE",
    "Maroc"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${outfit.variable} ${jakarta.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} scroll-smooth font-body`}
    >
      <body className="bg-[#020817] text-slate-100 antialiased selection:bg-amber-500/30 selection:text-amber-100 min-h-screen flex flex-col overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
