const projects = [
  {
    icon: "🐳",
    name: "Containerized React Deployment",
    desc: "Dockerized and orchestrated a React.js app using Kubernetes on Azure with automated rollouts.",
    stack: ["Docker", "Kubernetes", "Azure", "React.js"],
  },
  {
    icon: "⚙️",
    name: "CI/CD Pipeline Automation",
    desc: "GitHub Actions workflows for automated build, test, and deployment of applications.",
    stack: ["GitHub Actions", "CI/CD", "Docker"],
  },
  {
    icon: "📊",
    name: "Infrastructure Monitoring Dashboard",
    desc: "Prometheus + Grafana dashboards to monitor Kubernetes cluster health and resource usage.",
    stack: ["Prometheus", "Grafana", "Kubernetes"],
  },
  {
    icon: "🔗",
    name: "Blockchain Node Deployment",
    desc: "Deployed blockchain nodes on Azure using Kubernetes clusters with high availability.",
    stack: ["Azure", "Kubernetes", "Blockchain"],
  },
  {
    icon: "🤖",
    name: "Arduino Obstacle Avoiding Robot",
    desc: "Robotic car that detects obstacles and reroutes path automatically.",
    stack: ["Arduino UNO", "Motors", "Sensors"],
  },
  {
    icon: "🎓",
    name: "Campus Event Management",
    desc: "React + Node app to manage campus events with modern UI.",
    stack: ["React", "Node", "MongoDB"],
  },
  {
    icon: "📅",
    name: "Event Management System",
    desc: "Java GUI-based system for event scheduling and planning.",
    stack: ["Java", "SQL Server"],
  },
  {
    icon: "🏨",
    name: "Hotel Management System",
    desc: "Complete hotel operations system using Java & OOP concepts.",
    stack: ["Java", "MS Access"],
  },
  {
    icon: "💰",
    name: "Finance Manager App",
    desc: "Mobile app for tracking expenses with reports & analytics.",
    stack: ["Flutter", "Firebase"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="mb-20 text-white font-code px-4 md:px-0">
      
      {/* Heading */}
      <p className="text-xl md:text-2xl font-semibold uppercase tracking-widest mb-10 relative inline-block">
        Projects
        <span className="absolute left-0 -bottom-2 w-1/2 h-[2px] bg-gradient-to-r from-purple-500 to-cyan-400"></span>
      </p>

      {/* Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map(({ icon, name, desc, stack }) => (
          
          <div
            key={name}
            className="group relative bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a] border border-gray-800 rounded-2xl p-6 overflow-hidden transition duration-300 hover:scale-[1.04] hover:border-purple-500 cursor-pointer"
          >
            
            {/* Glow Effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-r from-purple-500/10 to-cyan-400/10 blur-xl"></div>

            {/* Icon */}
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 text-xl mb-4 group-hover:scale-110 transition">
              {icon}
            </div>

            {/* Title */}
            <p className="text-base font-semibold mb-2 group-hover:text-white transition">
              {name}
            </p>

            {/* Description */}
            <p className="text-sm text-gray-400 leading-relaxed mb-4 group-hover:text-gray-300 transition">
              {desc}
            </p>

            {/* Stack */}
            <div className="flex flex-wrap gap-2">
              {stack.map((s) => (
                <span
                  key={s}
                  className="text-[11px] px-2.5 py-1 rounded-full bg-white/5 border border-gray-700 text-gray-300 backdrop-blur-sm group-hover:border-gray-500 transition"
                >
                  {s}
                </span>
              ))}
            </div>

            {/* Bottom Accent Line */}
            <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-purple-500 to-cyan-400 group-hover:w-full transition-all duration-300"></div>
          </div>
        ))}
      </div>
    </section>
  );
}