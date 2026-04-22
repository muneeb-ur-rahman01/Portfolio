const groups = [
  {
    title: "DevOps & Cloud",
    gradient: "from-blue-500 to-cyan-400",
    tags: ["Docker", "Kubernetes", "Linux", "Bash", "Azure", "GitHub Actions"],
  },
  {
    title: "Backend Development",
    gradient: "from-purple-500 to-pink-400",
    tags: [".NET Core", "Web API", "C#", "Entity Framework"],
  },
  {
    title: "Frontend",
    gradient: "from-teal-400 to-emerald-400",
    tags: ["React.js", "Tailwind CSS"],
  },
  {
    title: "Monitoring & Databases",
    gradient: "from-amber-400 to-orange-500",
    tags: ["Prometheus", "Grafana", "SQL Server", "MongoDB"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="mb-20 text-white font-code px-4 md:px-0">
      
      {/* Heading */}
      <p className="text-xl md:text-2xl font-semibold uppercase tracking-widest mb-10 relative inline-block">
        Technical Skills
        <span className="absolute left-0 -bottom-2 w-1/2 h-[2px] bg-gradient-to-r from-purple-500 to-cyan-400"></span>
      </p>

      {/* Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {groups.map(({ title, gradient, tags }) => (
          
          <div
            key={title}
            className="group relative bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a] border border-gray-800 rounded-2xl p-6 transition duration-300 hover:scale-[1.03] hover:border-purple-500"
          >
            
            {/* Glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-r from-purple-500/10 to-cyan-400/10 blur-xl"></div>

            {/* Title */}
            <p
              className={`text-sm font-semibold mb-5 bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}
            >
              {title}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1.5 rounded-full bg-white/5 border border-gray-700 text-gray-300 backdrop-blur-sm transition duration-300 hover:border-gray-500 hover:text-white hover:scale-105"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Bottom Accent */}
            <div
              className={`absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r ${gradient} group-hover:w-full transition-all duration-300`}
            ></div>
          </div>
        ))}
      </div>
    </section>
  );
}