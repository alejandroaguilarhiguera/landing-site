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