import { CalendarDays, GraduationCap } from "lucide-react"

export default function EducationTimeline() {
  return (
    <div className="space-y-8">
      <div className="relative border-l border-muted pl-6 pb-6">
        <div className="absolute w-3 h-3 bg-emerald-600 rounded-full -left-[6.5px] top-1.5"></div>
        <div className="space-y-2">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <h3 className="text-xl font-semibold">Master of Science in Software Design with Artificial Intelligence</h3>
            <div className="flex items-center text-sm text-muted-foreground">
              <CalendarDays className="mr-1 h-4 w-4" />
              Sep 2023 – Aug 2024
            </div>
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <GraduationCap className="mr-1 h-4 w-4" />
            Technological University of Shannon Midlands Midwest (AIT)
          </div>
        </div>
      </div>

      <div className="relative border-l border-muted pl-6">
        <div className="absolute w-3 h-3 bg-emerald-600 rounded-full -left-[6.5px] top-1.5"></div>
        <div className="space-y-2">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <h3 className="text-xl font-semibold">Bachelor of Technology in Computer Science Engineering</h3>
            <div className="flex items-center text-sm text-muted-foreground">
              <CalendarDays className="mr-1 h-4 w-4" />
              Jul 2019 – Jun 2023
            </div>
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <GraduationCap className="mr-1 h-4 w-4" />
            Bharath University, Chennai, India
          </div>
        </div>
      </div>
    </div>
  )
}
