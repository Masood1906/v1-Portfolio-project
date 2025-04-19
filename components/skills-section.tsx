import { Code, Database, Cloud, Cpu, LineChart, GitBranch, Layers } from "lucide-react"

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="h-5 w-5" />,
      skills: ["Python", "Java", "C/C++", "JavaScript"],
    },
    {
      title: "Web Development",
      icon: <Layers className="h-5 w-5" />,
      skills: ["HTML", "CSS", "JavaScript"],
    },
    {
      title: "AI & Machine Learning",
      icon: <Cpu className="h-5 w-5" />,
      skills: ["Deep Learning", "NLP", "Transformers (BERT, T5)"],
    },
    {
      title: "Cloud Technologies",
      icon: <Cloud className="h-5 w-5" />,
      skills: ["Microsoft Azure Fundamentals", "AWS (Lambda, EBS)"],
    },
    {
      title: "DevOps & CI/CD",
      icon: <GitBranch className="h-5 w-5" />,
      skills: ["GitHub Actions", "Jenkins", "Docker", "Git"],
    },
    {
      title: "Database Management",
      icon: <Database className="h-5 w-5" />,
      skills: ["MSSQL 2022"],
    },
    {
      title: "Data Visualization",
      icon: <LineChart className="h-5 w-5" />,
      skills: ["Matplotlib", "R Studio"],
    },
  ]

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {skillCategories.map((category, index) => (
        <div key={index} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 p-2 rounded-md">
              {category.icon}
            </div>
            <h3 className="font-semibold text-lg">{category.title}</h3>
          </div>
          <ul className="space-y-2">
            {category.skills.map((skill, skillIndex) => (
              <li key={skillIndex} className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                <span className="text-muted-foreground">{skill}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
