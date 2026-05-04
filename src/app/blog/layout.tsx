import type { Metadata } from "next";
import Link from "next/link";
 
export const metadata: Metadata = {
  title: {
    default: "Blog — Alejandro Aguilar",
    template: "%s | Alejandro Aguilar",
  },
  description:
    "Artículos sobre desarrollo web, React, Node.js, arquitectura de software y buenas prácticas de ingeniería.",
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "https://alexaguilar.dev/blog",
    siteName: "Alejandro Aguilar",
  },
};
 
export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="min-h-screen bg-white dark:bg-slate-900">
      {/* Header del blog */}
      <div className="border-b border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="text-sm text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-2"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Atras
          </Link>
          <span className="text-xs font-mono text-slate-400 dark:text-slate-500 uppercase tracking-widest">
            Blog
          </span>
        </div>
      </div>
 
      {/* Contenido */}
      <div className="max-w-4xl mx-auto px-6 py-12">{children}</div>
    </section>
  );
}