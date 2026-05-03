import Link from "next/link";
import Image from "next/image";
import { Project } from "@/types";
import { FaArrowRight } from "react-icons/fa";

const ProjectCard = (project: Project) => {
    return (
        <div className="bg-slate-50 dark:bg-slate-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                <Image
                    src={project.img}
                    alt={project.title}
                    width={400}
                    height={200}
                    className="object-contain w-full h-full"
                />
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
                <Link
                    href={`/project/${project.slug}`}
                    className="flex gap-2 items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
                >
                    Más detalle <FaArrowRight />
                </Link>
            </div>
        </div>
    )
}

export default ProjectCard;