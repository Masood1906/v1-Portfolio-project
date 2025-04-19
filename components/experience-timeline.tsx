import { CalendarDays, MapPin } from "lucide-react"

export default function ExperienceTimeline() {
  return (
    <div className="space-y-8">
      <div className="relative border-l border-muted pl-6 pb-6">
        <div className="absolute w-3 h-3 bg-emerald-600 rounded-full -left-[6.5px] top-1.5"></div>
        <div className="space-y-2">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <h3 className="text-xl font-semibold">Data Science Intern</h3>
            <div className="flex items-center text-sm text-muted-foreground">
              <CalendarDays className="mr-1 h-4 w-4" />
              March 2025 – Present
            </div>
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <MapPin className="mr-1 h-4 w-4" />
            Oeson Private Limited – Remote
          </div>
          <ul className="mt-4 space-y-2 text-muted-foreground">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>
                Collaborating with cross-functional teams to analyze real-world datasets and deliver data-driven
                insights that support product and business strategy.
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>
                Designing and implementing machine learning models for classification and regression tasks using Python
                (Pandas, Scikit-learn, XGBoost), with a focus on scalability and performance.
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>
                Automating data workflows from cleaning and feature engineering to visualization using tools like NumPy,
                Seaborn.
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>
                Contributing to Agile development cycles, managing tasks through JIRA, and maintaining clean code and
                documentation via Git and Confluence.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
