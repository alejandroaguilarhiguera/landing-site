import Link from "next/link";
import Image from "next/image";
import { Project } from "@/types";
import { FaArrowRight } from "react-icons/fa";

const ProjectCard = (project: Project) => {
    return (
        <div className="flex flex-col bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-slate-200 dark:border-slate-700">
            {/* Header/Image */}
            <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                <Image
                    src={project.img}
                    alt={project.title}
                    width={400}
                    height={200}
                    className="object-contain w-full h-full"
                />
            </div>

            {/* Body */}
            <div className="p-6 flex-grow">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                    {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                    {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                        <span key={tech} className="bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-xs font-medium">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>

            {/* Footer - El Link */}
            <div className="border-t border-slate-100 dark:border-slate-700">
                <Link
                    href={`/project/${project.slug}`}
                    className="flex items-center justify-between w-full px-6 py-4 text-blue-600 dark:text-blue-400 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors font-medium group"
                >
                    Ver detalles del proyecto
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>
        </div>
    )
}

export default ProjectCard;