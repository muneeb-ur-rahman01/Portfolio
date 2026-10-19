import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import SpotlightCard from "./SpotlightCard";

const projects = [
  {
    icon: "🧑‍💼",
    name: "Employee Management Web API",
    desc: "Built a backend RESTful CRUD API using ASP.NET Web API with Swagger integration for API testing and documentation.",
    stack: [".NET Web API", "ASP.NET", "Swagger", "CRUD API"],
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
  {
    icon: "📦",
    name: "Smart Inventory and Warehouse Management System",
    desc: "Implemented secure JWT Authentication & Role Based Authorization along with password hashing and middleware based exception handling. Build Advanced modules including Product Management, Warehouse Management, Supplier Management, Inventory Tracking, and Order Processing with automated stock detection logic.",
    stack: ["ASP.NET", "C#", "SQL Server", "Web API", "JWT Authentication"],
  },
  {
    icon: "🧠",
    name: "AI Code Analyzer",
    desc: "Developed an AI-powered code analysis platform with secure multi-user repository management, automated static code analysis, and project health insights.",
    stack: ["ASP.NET Core", "C#", "SQL Server", "Roslyn", "AI", "Session Authentication"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 py-20">
      <SectionHeading
        index="03"
        eyebrow="Projects"
        title="Projects"
        subtitle="Things I've built across backend, cloud, desktop, mobile and embedded."
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map(({ icon, name, desc, stack }, i) => (
          <Reveal key={name} delay={(i % 3) * 0.1} className="h-full">
            <SpotlightCard className="group h-full p-6">
              <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl border border-white/10 bg-white/5 text-xl transition duration-300 group-hover:rotate-6 group-hover:scale-110">
                {icon}
              </div>

              <p className="mb-2 text-base font-semibold">{name}</p>

              <p className="mb-5 text-sm leading-relaxed text-gray-400 transition group-hover:text-gray-300">
                {desc}
              </p>

              <div className="flex flex-wrap gap-2">
                {stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 font-code text-[11px] text-gray-300 transition group-hover:border-violet-400/40"
                  >
                    {s}
                  </span>
                ))}
              </div>

              {/* Bottom accent line sweeps in on hover */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-violet-500 to-cyan-400 transition-all duration-500 group-hover:w-full" />
            </SpotlightCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
