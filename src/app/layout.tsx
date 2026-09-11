import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
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
      className={`${outfit.variable} ${jakarta.variable} scroll-smooth font-body`}
    >
      <body className="bg-slate-950 text-slate-100 antialiased selection:bg-amber-500 selection:text-slate-950 min-h-screen flex flex-col overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
