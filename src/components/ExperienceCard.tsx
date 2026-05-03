import { Experience } from "@/types";

const ExperienceCard = (experience: Experience) => {
    return (
              <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                      {experience.title}
                    </h3>
                    <a href={experience.url} target="_blank" rel="noopener noreferrer">

                      <p className="text-blue-600 dark:text-blue-400 font-medium">
                        {experience.company}
                      </p>
                    </a>
                  </div>
                  <p className="text-slate-500 dark:text-slate-400 text-sm mt-2 md:mt-0">
                    {experience.period}
                  </p>
                </div>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  {experience.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech) => (
                    <span key={tech} className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
    )
}

export default ExperienceCard;