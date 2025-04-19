import { Award } from "lucide-react"

export default function CertificationsList() {
  const certifications = [
    "IBM AI Developer Professional Certificate",
    "Microsoft Azure Fundamentals (AZ-900)",
    "IBM Python for Data Science and AI Development",
    "SQL for Data Science - University of California",
    "IBM Introduction to HTML, CSS & JavaScript",
  ]

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {certifications.map((cert, index) => (
        <div key={index} className="flex items-center gap-3 p-4 border rounded-lg">
          <div className="bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 p-2 rounded-md">
            <Award className="h-5 w-5" />
          </div>
          <span>{cert}</span>
        </div>
      ))}
    </div>
  )
}
