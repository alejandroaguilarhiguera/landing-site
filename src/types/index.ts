// Tipos para TypeScript
export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  year: string;
}

export interface Skill {
  name: string;
  icon: string;
}