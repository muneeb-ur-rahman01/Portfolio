const projects = [
  {
    icon: '🐳',
    bg: 'bg-blue-50',
    name: 'Containerized React Deployment',
    desc: 'Dockerized and orchestrated a React.js app using Kubernetes on Azure with automated rollouts.',
    stack: ['Docker', 'Kubernetes', 'Azure', 'React.js'],
  },
  {
    icon: '⚙️',
    bg: 'bg-purple-50',
    name: 'CI/CD Pipeline Automation',
    desc: 'GitHub Actions workflows for automated build, test, and deployment of applications.',
    stack: ['GitHub Actions', 'CI/CD', 'Docker'],
  },
  {
    icon: '📊',
    bg: 'bg-teal-50',
    name: 'Infrastructure Monitoring Dashboard',
    desc: 'Prometheus + Grafana dashboards to monitor Kubernetes cluster health and resource usage.',
    stack: ['Prometheus', 'Grafana', 'Kubernetes'],
  },
  {
    icon: '🔗',
    bg: 'bg-amber-50',
    name: 'Blockchain Node Deployment',
    desc: 'Deployed blockchain nodes on Azure using Kubernetes clusters with high availability.',
    stack: ['Azure', 'Kubernetes', 'Blockchain'],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="mb-10">
      <p className="text-[20px] uppercase tracking-widest text-White font-medium mb-4 pb-2 border-b border-gray-100">
        Projects
      </p>
      <div className="grid grid-cols-2 gap-3">
        {projects.map(({ icon, bg, name, desc, stack }) => (
          <div
            key={name}
            className="bg-[#545657] border border-gray-200 rounded-xl p-5 hover:border-gray-300 transition cursor-pointer"
          >
            <div
              className={`w-9 h-9 ${bg} rounded-lg flex items-center justify-center text-base mb-3`}
            >
              {icon}
            </div>
            <p className="text-sm font-medium mb-1">{name}</p>
            <p className="text-xs text-white leading-relaxed mb-3">{desc}</p>
            <div className="flex flex-wrap gap-1">
              {stack.map((s) => (
                <span
                  key={s}
                  className="text-[11px] px-2 py-0.5 bg-gray-100 text-gray-500 rounded-md"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}