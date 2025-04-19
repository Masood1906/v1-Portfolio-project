interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
}

export default function ProjectCard({ title, description, tags }: ProjectCardProps) {
  return (
    <div className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
      <div className="p-6 space-y-4">
        <h3 className="font-semibold text-xl">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
        <div className="flex flex-wrap gap-2 pt-2">
          {tags.map((tag, index) => (
            <div
              key={index}
              className="bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 px-3 py-1 rounded-full text-sm"
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
