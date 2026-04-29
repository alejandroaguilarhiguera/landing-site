"use client";
import Image from "next/image";
import { useState } from "react";
import { Experience, Project, Skill } from "../types";


export default function Home() {
  // Calcular años de experiencia dinámicamente
  const startYear = 2013;
  const currentYear = new Date().getFullYear();
  const yearsOfExperience = currentYear - startYear;
  const experiences: Experience[] = [
    {
      title: "Sr Front End Developer",
      company: "Hexaware",
      period: "Marzo 2025 - Presente",
      description: "Agregar nuevos componentes en React, proponer soluciones de arquitectura.",
      technologies: ["React", "TypeScript", "Redux", "Vite", "Sass", "react-hook-form", "zod"]
    },
    {
      title: "Sr Full Stack Developer",
      company: "Adhoc TI",
      period: "Septiembre 2024 - Marzo 2025",
      description: "Construir APIs REST con NestJS, definir modelos de bases de datos relacionales con Sequelize, desarrollar interfaces con SSR/SSG.",
      technologies: ["React", "TypeScript", "Next.js", "NestJS", "Sequelize", "Zod", "Tailwind", "Stripe"]
    },
    {
      title: "Sr Full Stack Developer",
      company: "Onephase",
      period: "Marzo 2023 - Septiembre 2024",
      description: "Implementar nuevas funciones, hacer pruebas automáticas end-to-end, pruebas unitarias, corregir errores, revisión de código.",
      technologies: ["React", "TypeScript", "Material-UI", "Redux", "Vite", "Sass", "react-hook-form", "yup"]
    },
    {
      title: "Sr Tech Lead Developer",
      company: "Gila Software",
      period: "Junio 2022 - Febrero 2023",
      description: "Implementar nuevas funciones, hacer pruebas automáticas end-to-end, pruebas unitarias, corregir errores.",
      technologies: ["Node.js", "Express", "TypeScript", "Sequelize", "MySQL", "PostgreSQL", "Jest", "React", "Tailwind"]
    },
    {
      title: "Middle Level Back-end Developer",
      company: "Adhoc TI",
      period: "Octubre 2019 - Mayo 2022",
      description: "Implementar nuevas funciones, realizar pruebas automáticas end-to-end, pruebas unitarias, corregir errores.",
      technologies: ["Node.js", "Express", "TypeScript", "Sequelize", "MySQL", "PostgreSQL", "Jest", "React", "Tailwind"]
    },
    {
      title: "Jr Full Stack Developer",
      company: "Academia global",
      period: "Noviembre 2013 - Julio 2019",
      description: "Implementación de nuevas funciones, corrección de errores, diseño de bases de datos, creación de nuevos servidores web.",
      technologies: ["PHP", "JavaScript", "MySQL", "PL/SQL", "AngularJS", "React"]
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
      title: "GuiaDeHoy.com",
      description: "Sistema de compra de entradas online para eventos, espectáculos y actuaciones. Incluye gestión SEO avanzada y escaneo automatizado de eventos externos.",
      technologies: ["React", "Next.js", "NestJS", "PostgreSQL", "Stripe"],
      year: "2024"
    },
    {
      title: "Sistema de Gestión de Patrimonios",
      description: "Sistema que administra activos desde inversiones líquidas hasta bienes inmuebles y participaciones de capital privado. Migración completa de jQuery a React.",
      technologies: ["Python", "Selenium", "React", "Redux", "Highcharts"],
      year: "2024"
    },
    {
      title: "Scratch",
      description: "Plataforma para jóvenes emprendedores que proporciona herramientas para iniciar y dirigir negocios. Sistema multi-tenant con red social integrada.",
      technologies: ["React", "Redux", "PHP", "Laravel", "MySQL"],
      year: "2022-2023"
    },
    {
      title: "Blumi.App",
      description: "Aplicación para programar servicios de cuidado personal y belleza con altos estándares de higiene, entregados en la comodidad del hogar.",
      technologies: ["React", "Node.js", "MySQL", "Sequelize"],
      year: "2022"
    },
    {
      title: "Citicinemas",
      description: "Aplicación de cine mejorada que aumentó el rendimiento y las ventas de boletos mediante optimizaciones técnicas.",
      technologies: ["React", "Node.js", "MySQL", "Sequelize"],
      year: "2021-2022"
    },
    {
      title: "Kanda",
      description: "Aplicación para bloquear números molestos, identificar extorsionadores y evitar llamadas no deseadas. Más de 1000 números de spam denunciados.",
      technologies: ["React", "Node.js", "MySQL", "Sequelize"],
      year: "2020-2021"
    },
  ];

  // Estado para el formulario de contacto
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  // Función para manejar el envío del formulario
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitMessage('¡Mensaje enviado exitosamente! Me pondré en contacto contigo pronto.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitMessage('Error al enviar el mensaje. Por favor, intenta de nuevo.');
      }
    } catch (error) {
      setSubmitMessage('Error al enviar el mensaje. Por favor, intenta de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Función para manejar cambios en los inputs
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700">
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-xl font-bold text-slate-900 dark:text-white">
              Alejandro Aguilar Higuera
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors">Sobre mí</a>
              <a href="#experience" className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors">Experiencia</a>
              <a href="#skills" className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors">Habilidades</a>
              <a href="#projects" className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors">Proyectos</a>
              <a href="#contact" className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors">Contacto</a>
            </div>
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
              Hola, soy <span className="text-blue-600 dark:text-blue-400">Alejandro Aguilar</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8">
              Full Stack Engineer
            </p>
            <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto mb-8">
              Desarrollador de software con más de {yearsOfExperience} años de experiencia en el diseño y desarrollo de aplicaciones web y móviles.
              Especializado en React, Node.js, MongoDB, MySQL, microservicios y automatización CI/CD con Docker.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#projects"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
              >
                Ver mis trabajos
              </a>
              <a
                href="#contact"
                className="border border-slate-300 dark:border-slate-600 hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white px-8 py-3 rounded-lg font-medium transition-colors"
              >
                Contactar
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
              Sobre mí
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Mi pasión por el desarrollo web comenzó hace más de {yearsOfExperience} años...
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
                Mi enfoque
              </h3>
              <div className="mb-6">
                <p className="text-slate-600 dark:text-slate-300 mb-2">
                  <strong>Ubicación:</strong> Culiacán, Sinaloa, México
                </p>
                <p className="text-slate-600 dark:text-slate-300 mb-2">
                  <strong>Visa Status:</strong> Activo B1/B2
                </p>
                <p className="text-slate-600 dark:text-slate-300 mb-2">
                  <strong>Idiomas:</strong> Español (Nativo), Inglés (B1/B2 Professional)
                </p>
              </div>
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                Soy un desarrollador de software con más de 13 años de experiencia, he trabajado en el diseño y desarrollo de aplicaciones web y móviles utilizando tecnologías como React, Node.js, MongoDB y MySQL. Tengo experiencia en la creación de microservicios y automatización de pipelines CI/CD con herramientas como Docker.
              </p>
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                Aspiro a trabajar en una empresa innovadora donde pueda aprovechar mi experiencia técnica para mejorar la experiencia del usuario y contribuir al crecimiento del negocio. He trabajado con startups y empresas establecidas, ayudándoles a transformar sus ideas en productos digitales exitosos.
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
                  Experiencia
                </h4>
                <p className="text-slate-600 dark:text-slate-300">
                  Más de {yearsOfExperience} años de experiencia en desarrollo web
                </p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-lg">
                <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
                  Proyectos Completados
                </h4>
                <p className="text-slate-600 dark:text-slate-300">
                  Más de 10 proyectos exitosos
                </p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-lg">
                <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
                  Educación
                </h4>
                <p className="text-slate-600 dark:text-slate-300">
                  Bachelor's of Informatics - UAS (2009-2013)
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
              Experiencia Profesional
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Mi trayectoria profesional
            </p>
          </div>
          <div className="space-y-8">
            {experiences.map((exp: Experience) => (
              <div key={`${exp.company}-${exp.period}`} className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                      {exp.title}
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">
                      {exp.company}
                    </p>
                  </div>
                  <p className="text-slate-500 dark:text-slate-400 text-sm mt-2 md:mt-0">
                    {exp.period}
                  </p>
                </div>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech: string) => (
                    <span key={tech} className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Habilidades Técnicas
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Tecnologías y herramientas que domino
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {skills.map((skill: Skill) => (
              <div key={skill.name} className="text-center p-6 bg-white dark:bg-slate-800 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl mb-2">{skill.icon}</div>
                <div className="font-medium text-slate-900 dark:text-white">{skill.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Proyectos Destacados
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Algunos de mis trabajos más recientes
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project: Project, index: number) => (
              <div key={index} className="bg-slate-50 dark:bg-slate-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                  <span className="text-white text-4xl">🚀</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech: string) => (
                      <span key={tech} className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <button className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium">
                    Ver proyecto →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            ¿Hablamos de tu proyecto?
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
            Estoy disponible para discutir nuevas oportunidades y colaboraciones.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4">
                <span className="text-blue-600 dark:text-blue-400 text-xl">📧</span>
              </div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Email</h3>
              <a href="mailto:alejandro.aguilar.higuera@gmail.com" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400">
                alejandro.aguilar.higuera@gmail.com
              </a>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-4">
                <span className="text-green-600 dark:text-green-400 text-xl">💬</span>
              </div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">WhatsApp</h3>
              <a href="https://wa.me/526677769637" className="text-slate-600 dark:text-slate-300 hover:text-green-600 dark:hover:text-green-400">
                +52 667 776 9637
              </a>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mb-4">
                <span className="text-purple-600 dark:text-purple-400 text-xl">🔗</span>
              </div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">LinkedIn</h3>
              <a href="https://www.linkedin.com/in/alejandro-a-640370116" className="text-slate-600 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400">
                linkedin.com/in/alejandro-a-640370116
              </a>
            </div>
          </div>
          <div className="bg-white dark:bg-slate-800 p-8 rounded-lg shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
                  placeholder="Cuéntame sobre tu proyecto..."
                ></textarea>
              </div>
              {submitMessage && (
                <div className={`p-4 rounded-lg ${submitMessage.includes('exitosamente') ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200' : 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200'}`}>
                  {submitMessage}
                </div>
              )}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white py-3 px-6 rounded-lg font-medium transition-colors"
              >
                {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-400">
            © {new Date().getFullYear()} Alejandro Aguilar Higuera. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}