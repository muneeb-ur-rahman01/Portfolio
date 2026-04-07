const bullets = [
  'Deployed blockchain nodes on Azure cloud using Kubernetes clusters, ensuring high availability.',
  'Containerized and deployed React.js applications using Docker and Kubernetes workflows.',
  'Built CI/CD pipelines using GitHub Actions for automated build and deployment processes.',
  'Monitored system performance and cluster health using Prometheus and Grafana dashboards.',
]

export default function Experience() {
  return (
    <section id="experience" className="mb-10">
      <p className="text-[20px] uppercase tracking-widest text-White font-medium mb-4 pb-2 border-b border-gray-100">
        Experience
      </p>
      <div className="bg-[#545657] border border-gray-200 rounded-xl p-5">
        <div className="flex justify-between items-start mb-4">
          <div>
            <p className="text-sm font-medium">Junior DevOps Engineer Intern</p>
            <p className="text-xs text-blue-600 mt-0.5">Beenco Labs, Karachi</p>
          </div>
          <span className="text-xs text-white">Oct 2025 – Nov 2025</span>
        </div>
        <ul className="space-y-2">
          {bullets.map((b, i) => (
            <li key={i} className="text-sm text-white leading-relaxed pl-4 relative before:content-['–'] before:absolute before:left-0 before:text-gray-400">
              {b}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}