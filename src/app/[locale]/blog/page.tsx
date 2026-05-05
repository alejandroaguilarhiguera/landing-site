import Link from "next/link";
import { Post } from "@/types"; 
import { formatDate } from "@/utils";
import TagBadge from "@/components/TagBadge";
import PostCard from '@/components/PostCard';

const posts: Post[] = [
    {
    slug: "/honeypot-ssh",
    title: "Guia para instalar un honeypot SSH con Cowrie en Linux",
    excerpt:
      "Cómo integrar RSC en proyectos reales con Next.js 15, cuándo usarlos y cuándo evitarlos, con ejemplos de código listos para producción.",
    date: "2026-04-28",
    readingTime: 8,
    tags: ["React", "Next.js", "Performance"],
    featured: true,
  },
  {
    slug: "react-server-components-guia-practica",
    title: "React Server Components: guía práctica para 2026",
    excerpt:
      "Cómo integrar RSC en proyectos reales con Next.js 15, cuándo usarlos y cuándo evitarlos, con ejemplos de código listos para producción.",
    date: "2026-04-28",
    readingTime: 8,
    tags: ["React", "Next.js", "Performance"],
    // featured: true,
  },
  {
    slug: "nestjs-arquitectura-modular",
    title: "Arquitectura modular en NestJS: lecciones de proyectos reales",
    excerpt:
      "Patrones que apliqué en proyectos con más de 50 módulos: organización de código, inyección de dependencias y cómo evitar el infierno de los imports circulares.",
    date: "2026-04-10",
    readingTime: 6,
    tags: ["NestJS", "Node.js", "Arquitectura"],
  },
  {
    slug: "typescript-generics-avanzados",
    title: "TypeScript generics avanzados: más allá del <T>",
    excerpt:
      "Conditional types, infer, mapped types y template literal types explicados con casos de uso reales que he encontrado en proyectos de producción.",
    date: "2026-03-22",
    readingTime: 10,
    tags: ["TypeScript"],
  },
  {
    slug: "docker-ci-cd-practico",
    title: "CI/CD con Docker: el setup que uso en todos mis proyectos",
    excerpt:
      "Pipeline completo desde el push hasta producción: multi-stage builds, caché inteligente, variables de entorno seguras y rollback automático.",
    date: "2026-03-05",
    readingTime: 7,
    tags: ["Docker", "DevOps", "CI/CD"],
  },
];

 
function FeaturedPost({ post }: { post: Post }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <article className="relative rounded-2xl border border-slate-200 dark:border-slate-700 bg-gradient-to-br from-blue-50 to-slate-50 dark:from-slate-800 dark:to-slate-800/50 p-8 hover:border-blue-400 dark:hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
        {/* Badge destacado */}
        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 mb-4 uppercase tracking-wider">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
          Artículo destacado
        </span>
 
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-snug">
          {post.title}
        </h2>
        <p className="text-slate-600 dark:text-slate-400 mb-5 leading-relaxed">
          {post.excerpt}
        </p>
 
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <TagBadge key={tag}>{tag}</TagBadge>
            ))}
          </div>
          <div className="flex items-center gap-3 text-sm text-slate-500 dark:text-slate-400">
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span>·</span>
            <span>{post.readingTime} min de lectura</span>
          </div>
        </div>
 
        {/* Arrow */}
        <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity">
          <svg
            className="w-5 h-5 text-blue-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </div>
      </article>
    </Link>
  );
}
 
export default function BlogPage() {
  const featured = posts.find((p) => p.featured);
  const rest = posts.filter((p) => !p.featured);
 
  const allTags = Array.from(new Set(posts.flatMap((p) => p.tags)));
 
  return (
    <div>
      {/* Hero */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-3">
          Blog
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
          Comparto lo que aprendo sobre desarrollo web, arquitectura de software
          y herramientas que uso en el día a día.
        </p>
      </div>
 
      <div className="flex flex-wrap gap-2 mb-10">
        <button className="text-sm px-4 py-1.5 rounded-full bg-blue-600 text-white font-medium">
          Todos
        </button>
        {allTags.map((tag) => (
          <button
            key={tag}
            className="text-sm px-4 py-1.5 rounded-full border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:border-blue-400 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            {tag}
          </button>
        ))}
      </div>
 
      {/* Post destacado */}
      {featured && (
        <div className="mb-8">
          <FeaturedPost post={featured} />
        </div>
      )}
 
      {/* Grid de posts */}
      {rest.length > 0 && (
        <div className="grid gap-4 sm:grid-cols-2">
          {rest.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      )}
 
      {/* Estado vacío */}
      {posts.length === 0 && (
        <div className="text-center py-20 text-slate-500 dark:text-slate-400">
          <p className="text-5xl mb-4">✍️</p>
          <p className="text-lg font-medium">Próximamente...</p>
          <p className="text-sm">El primer artículo está en camino.</p>
        </div>
      )}
    </div>
  );
}