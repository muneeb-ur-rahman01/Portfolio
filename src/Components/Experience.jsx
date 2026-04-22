const bullets = [
  "Deployed blockchain nodes on Azure cloud using Kubernetes clusters, ensuring high availability.",
  "Containerized and deployed React.js applications using Docker and Kubernetes workflows.",
  "Built CI/CD pipelines using GitHub Actions for automated build and deployment processes.",
  "Monitored system performance and cluster health using Prometheus and Grafana dashboards.",
];

export default function Experience() {
  return (
    <section id="experience" className="mb-16 text-white font-code px-4 md:px-0">
      
      {/* Heading */}
      <p className="text-xl md:text-2xl font-semibold uppercase tracking-widest mb-8 relative inline-block">
        Experience
        <span className="absolute left-0 -bottom-2 w-1/2 h-[2px] bg-gradient-to-r from-purple-500 to-cyan-400"></span>
      </p>

      {/* Card */}
      <div className="relative bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a] border border-gray-800 rounded-2xl p-6 transition duration-300 hover:border-purple-500 hover:scale-[1.02]">
        
        {/* Timeline Line */}
        <div className="absolute left-4 top-6 bottom-6 w-[2px] bg-gradient-to-b from-purple-500 to-cyan-400 opacity-40"></div>

        <div className="pl-8">
          
          {/* Top Section */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 mb-5">
            <div>
              <p className="text-base md:text-lg font-semibold">
                Junior DevOps Engineer Intern
              </p>
              <p className="text-sm text-cyan-400 mt-1">
                Beenco Labs, Karachi
              </p>
            </div>

            <span className="text-xs bg-white/5 border border-gray-700 px-3 py-1 rounded-full text-gray-300 backdrop-blur-sm">
              Oct 2025 – Nov 2025
            </span>
          </div>

          {/* Bullet Points */}
          <ul className="space-y-3">
            {bullets.map((b, i) => (
              <li
                key={i}
                className="group relative pl-6 text-sm text-gray-300 leading-relaxed transition"
              >
                {/* Custom Bullet */}
                <span className="absolute left-0 top-2 w-2 h-2 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full group-hover:scale-125 transition"></span>

                <span className="group-hover:text-white transition">
                  {b}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}