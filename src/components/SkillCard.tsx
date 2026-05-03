import { Skill } from "@/types";

const SkillCard = (skill: Skill) => {
    return (
        <div className="text-center p-6 bg-white dark:bg-slate-800 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="text-3xl mb-2">{skill.icon}</div>
            <div className="font-medium text-slate-900 dark:text-white">{skill.name}</div>
        </div>
    )
}

export default SkillCard;