// Tipos para TypeScript
export interface Experience {
  url?: string;
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

export interface Project {
  img: string;
  slug: string;
  title: string;
  description: string;
  technologies: string[];
  year: string;
}

export interface Skill {
  name: string;
  icon: string;
}

export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  date: string;          // "2026-05-01"
  readingTime: number;   // minutos
  tags: string[];
  featured?: boolean;
}