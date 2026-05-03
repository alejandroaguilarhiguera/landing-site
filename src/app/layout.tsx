import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  // Título ideal: Nombre + Skill Principal o Localización
  title: "Alejandro Aguilar Higuera | Full Stack Engineer",
  description: "Desarrollador Full Stack con más de 13 años de experiencia. Especialista en React, Node.js y arquitectura escalable para proyectos web robustos.",
  keywords: ["Full Stack Developer", "React Specialist", "Node.js", "Web Development", "Software Architecture"],
  authors: [{ name: "Alejandro Aguilar Higuera" }],
  
  // Para que el enlace se vea increíble al compartirlo
  openGraph: {
    title: "Alejandro Aguilar Higuera - Full Stack Engineer",
    description: "Portafolio profesional de desarrollo web con 13 años de experiencia.",
    url: "https://alexaguilar.dev",
    siteName: "Alejandro Aguilar Portfolio",
    images: [
      {
        url: "https://alexaguilar.dev/og-image.jpeg",
        width: 1200,
        height: 630,
        alt: "Preview de Alejandro Aguilar Higuera",
      },
    ],
    locale: "es_MX",
    type: "website",
  },
  
  // Twitter / X
  twitter: {
    card: "summary_large_image",
    title: "Alejandro Aguilar Higuera | Full Stack Engineer",
    description: "Desarrollador Full Stack experto en React y Node.js.",
    images: ["https://alexaguilar.dev/og-image.jpeg"],
  },

  // Importante para evitar contenido duplicado
  alternates: {
    canonical: "https://alexaguilar.dev",
  },
  
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    // Cambia "en" por "es" si tu contenido es principalmente en español
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}