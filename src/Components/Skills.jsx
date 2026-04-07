const groups = [
  {
    title: 'DevOps & Cloud',
    color: 'bg-blue-50 text-blue-800',
    tags: ['Docker', 'Kubernetes', 'Microsoft Azure', 'GitHub Actions'],
  },
  {
    title: 'Backend Development',
    color: 'bg-purple-50 text-purple-800',
    tags: ['.NET Core MVC', 'Web API', 'C#', 'Entity Framework'],
  },
  {
    title: 'Frontend',
    color: 'bg-teal-50 text-teal-800',
    tags: ['React.js', 'Tailwind CSS'],
  },
  {
    title: 'Monitoring & Databases',
    color: 'bg-amber-50 text-amber-800',
    tags: ['Prometheus', 'Grafana', 'SQL Server', 'MongoDB'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="mb-10">
      <p className="text-[20px] uppercase tracking-widest text-white font-medium mb-4 pb-2 border-b border-gray-100">
        Technical Skills
      </p>
      <div className="grid grid-cols-2 gap-3">
        {groups.map(({ title, color, tags }) => (
          <div key={title} className="bg-[#545657] border border-gray-200 rounded-xl p-4">
            <p className="text-xs font-medium text-white mb-3">{title}</p>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span key={tag} className={`text-xs px-2.5 py-1 rounded-md font-medium ${color}`}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}