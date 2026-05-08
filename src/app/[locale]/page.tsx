import Image from "next/image";
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import ContactForm from "@/components/ContactForm";
import ProjectCard from "@/components/ProjectCard";
import ExperienceCard from "@/components/ExperienceCard";
import SkillCard from "@/components/SkillCard";
import LocaleSwitcher from "@/components/LocaleSwitcher";
import { Experience, Project, Skill } from "@/types";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Alejandro Aguilar Higuera",
  "jobTitle": "Full Stack Engineer",
  "url": "https://alexaguilar.dev",
  "description": "Desarrollador Full Stack con 13 años de experiencia especializado en React, Node.js y AWS.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Culiacán",
    "addressRegion": "Sinaloa",
    "addressCountry": "MX"
  },
  "knowsAbout": [
    "Web Development",
    "React",
    "Next.js",
    "NestJS",
    "Cloud Computing",
    "Software Architecture"
  ],
  "alumniOf": {
    "@type": "EducationalOrganization",
    "name": "Universidad autonoma de Sinaloa"
  },
  "hasCredential": [
    {
      "@type": "EducationalOccupationalCredential",
      "name": "AWS Cloud Practitioner Essentials"
    }
  ],
  "sameAs": [
    "https://github.com/alejandroaguilarhiguera",
    "https://www.linkedin.com/in/alejandro-a-640370116"
  ]
};

export default function Home() {
  const t = useTranslations('home');
  const startYear = 2013;
  const currentYear = new Date().getFullYear();
  const yearsOfExperience = currentYear - startYear;
  const experiences: Experience[] = [
    {
      url: 'https://www.ey.com/',
      title: "Sr Front End Developer",
      company: "Hexaware",
      period: "Marzo 2025",
      description: t('home.experiences.hexaware'),
      technologies: ["React", "TypeScript", "Redux", "Vite", "Sass", "react-hook-form", "zod"],
      key: "hexaware"
    },
    {
      url: 'https://adhocti.com/',
      title: "Sr Full Stack Developer",
      company: "Adhoc TI",
      period: "Septiembre 2024 - Marzo 2025",
      description: t('home.experiences.adhoc-ti-2024'),
      technologies: ["React", "TypeScript", "Next.js", "NestJS", "Sequelize", "Zod", "Tailwind", "Stripe"],
      key: "adhoc-ti-2024"
    },
    {
      url: 'https://masttro.com/',
      title: "Sr Full Stack Developer",
      company: "Masttro",
      period: "Marzo 2023 - Septiembre 2024",
      description: t('home.experiences.masttro'),
      technologies: ["React", "TypeScript", "Material-UI", "Redux", "Vite", "Sass", "react-hook-form", "yup"],
      key: "masttro"
    },
    {
      url: 'https://www.littletaller.com/',
      title: "Sr Tech Lead Developer",
      company: "Little taller",
      period: "Junio 2022 - Febrero 2023",
      description: t('home.experiences.little-taller'),
      technologies: ["Node.js", "Express", "TypeScript", "Sequelize", "MySQL", "PostgreSQL", "Jest", "React", "Tailwind"],
      key: "little-taller"
    },
    {
      url: 'https://adhocti.com/',
      title: "Middle Level Back-end Developer",
      company: "Adhoc TI",
      period: "Octubre 2019 - Mayo 2022",
      description: t('home.experiences.adhoc-ti-2019'),
      technologies: ["Node.js", "Express", "TypeScript", "Sequelize", "MySQL", "PostgreSQL", "Jest", "React", "Tailwind"],
      key: "adhoc-ti-2019"
    },
    {
      title: "Jr Full Stack Developer",
      company: "Academia global",
      url: 'https://academiaglobal.mx',
      period: "Noviembre 2013 - Julio 2019",
      description: t('home.experiences.academia-global'),
      technologies: ["PHP", "JavaScript", "MySQL", "PL/SQL", "AngularJS", "React"],
      key: "academia-global"
    }
  ];

  const skills: Skill[] = [
    { name: "React", icon: "⚛️" },
    { name: "Next.js", icon: "▲" },
    { name: "TypeScript", icon: "🔷" },
    { name: "Node.js", icon: "🟢" },
    { name: "Python", icon: "🐍" },
    { name: "NestJS", icon: "🦅" },
    { name: "MongoDB", icon: "🍃" },
    { name: "PostgreSQL", icon: "🐘" },
    { name: "Docker", icon: "🐳" },
    { name: "AWS", icon: "☁️" },
    { name: "Tailwind CSS", icon: "🎨" },
    { name: "Git", icon: "📚" },
  ];

  const projects: Project[] = [
    {
      img: "/guiadehoy-mockup.webp",
      slug: 'guiadehoy',
      title: "GuiaDeHoy.com",
      description: t('home.projects.guiadehoy'),
      technologies: ["React", "Next.js", "NestJS", "PostgreSQL", "Stripe"],
      year: "2024"
    },
    {
      img: "/masttro-mock.avif",
      slug: 'manage-wealth',
      title: "Sistema de Gestión de Patrimonios",
      description: t('home.projects.manage-wealth'),
      technologies: ["Python", "Selenium", "React", "Redux", "Highcharts"],
      year: "2024"
    },
    {
      img: "/enrolados-mockup.webp",
      slug: 'enrolados',
      title: "Enrolados",
      description: t('home.projects.enrolados'),
      technologies: ["React", "Node.js", "Sequelize", "Express", "MySQL"],
      year: "2022-2023"
    },
    {
      img: "/blumi-mockup.webp",
      slug: 'blumi',
      title: "Blumi.App",
      description: t('home.projects.blumi'),
      technologies: ["React", "Node.js", "MySQL", "Sequelize"],
      year: "2022"
    },
    {
      img: "/citicinemas-body-04.webp",
      slug: 'citicinemas',
      title: "Citicinemas",
      description: t('home.projects.citicinemas'),
      technologies: ["React", "Node.js", "MySQL", "Sequelize"],
      year: "2021-2022"
    },
    {
      img: "/kanda-mockup.webp",
      slug: 'kanda',
      title: "Kanda",
      description: t('home.projects.kanda'),
      technologies: ["React", "Node.js", "MySQL", "Sequelize"],
      year: "2020-2021"
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Header/Navigation */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700">
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-xl font-bold text-slate-900 dark:text-white">
              Alejandro Aguilar Higuera
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors">{t('navigation.about')}</a>
              <a href="#experience" className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors">{t('navigation.experience')}</a>
              <a href="#skills" className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors">{t('navigation.skills')}</a>
              <a href="#projects" className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors">{t('navigation.projects')}</a>
              <a href="#contact" className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors">{t('navigation.contact')}</a>
              <Link href="/blog" className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors">{t('navigation.blog')}</Link>
            </div>
            <LocaleSwitcher />
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <div className="mb-8">
              <Image
                src="/avatar-placeholder.jpeg"
                alt="Foto de Alejandro Aguilar"
                width={150}
                height={150}
                className="rounded-full mx-auto border-4 border-white shadow-lg"
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-4">
              {t('hero.title')} <span className="text-blue-600 dark:text-blue-400">Alejandro Aguilar</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8">
              {t('hero.subtitle')}
            </p>
            <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto mb-8">
              {t('hero.description', { yearsOfExperience })}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#projects"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
              >
                {t('hero.viewWork')}
              </a>
              <a
                href="#contact"
                className="border border-slate-300 dark:border-slate-600 hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white px-8 py-3 rounded-lg font-medium transition-colors"
              >
                {t('hero.contact')}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              {t('about.title')}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              {t('about.subtitle', { yearsOfExperience })}
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
                {t('about.approach')}
              </h3>
              <div className="mb-6">
                <p className="text-slate-600 dark:text-slate-300 mb-2">
                  <strong>{t('about.location')}:</strong> {t('about.locationValue')}
                </p>
                <p className="text-slate-600 dark:text-slate-300 mb-2">
                  <strong>{t('about.visaStatus')}:</strong> {t('about.visaValue')}
                </p>
                <p className="text-slate-600 dark:text-slate-300 mb-2">
                  <strong>{t('about.languages')}:</strong> {t('about.languagesValue')}
                </p>
              </div>
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                {t('about.description1')}
              </p>
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                {t('about.description2')}
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm">
                  React
                </span>
                <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm">
                  Node.js
                </span>
                <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm">
                  TypeScript
                </span>
                <span className="bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 px-3 py-1 rounded-full text-sm">
                  Next.js
                </span>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-lg">
                <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
                  {t('about.experience')}
                </h4>
                <p className="text-slate-600 dark:text-slate-300">
                  {t('about.experienceValue', { yearsOfExperience })}
                </p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-lg">
                <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
                  {t('about.projects')}
                </h4>
                <p className="text-slate-600 dark:text-slate-300">
                  {t('about.projectsValue')}
                </p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-lg">
                <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
                  {t('about.education')}
                </h4>
                <p className="text-slate-600 dark:text-slate-300">
                  {t('about.educationValue')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              {t('experience.title')}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              {t('experience.subtitle')}
            </p>
          </div>
          <div className="space-y-8">
            {experiences.map((experience: Experience) => {
              const { key, ...rest } = experience;
              return <ExperienceCard key={key} {...rest} />;
            })}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              {t('skills.title')}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              {t('skills.subtitle')}
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {skills.map((skill: Skill) => (
              <SkillCard key={skill.name} {...skill} />
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              {t('projects.title')}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              {t('projects.subtitle')}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project: Project) => (
              <ProjectCard key={project.slug} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
            {t('contact.subtitle')}
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4">
                <span className="text-blue-600 dark:text-blue-400 text-xl">📧</span>
              </div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">{t('contact.email')}</h3>
              <a href="mailto:alejandro.aguilar.higuera@gmail.com" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400">
                alejandro.aguilar.higuera@gmail.com
              </a>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-4">
                <span className="text-green-600 dark:text-green-400 text-xl">💬</span>
              </div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">{t('contact.whatsapp')}</h3>
              <a href="https://wa.me/526677769637" className="text-slate-600 dark:text-slate-300 hover:text-green-600 dark:hover:text-green-400">
                +52 667 776 9637
              </a>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mb-4">
                <span className="text-purple-600 dark:text-purple-400 text-xl">🔗</span>
              </div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">{t('contact.linkedin')}</h3>
              <a href="https://www.linkedin.com/in/alejandro-a-640370116" className="text-slate-600 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400">
                linkedin.com/in/alejandro-a-640370116
              </a>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mb-4">
                <span className="text-gray-600 dark:text-gray-400 text-xl">🐙</span>
              </div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">{t('contact.github')}</h3>
              <a href="https://github.com/alejandroaguilarhiguera" className="text-slate-600 dark:text-slate-300 hover:text-gray-600 dark:hover:text-gray-400">
                alejandroaguilarhiguera
              </a>
            </div>
          </div>
          <div className="bg-white dark:bg-slate-800 p-8 rounded-lg shadow-sm">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-400">
            {t('footer.copyright', { year: new Date().getFullYear() })}
          </p>
        </div>
      </footer>
    </div>
  );
}