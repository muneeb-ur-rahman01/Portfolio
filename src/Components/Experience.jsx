import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import SpotlightCard from "./SpotlightCard";

const experiences = [
  {
    role: "Junior Backend Developer Intern",
    company: "Hopefelt Foundation",
    location: "",
    duration: "Jun 2026 – Aug 2026",
    bullets: [
      "Designed the SaaS product's backend architecture and database schema as a backend developer intern.",
      "Built RESTful APIs with ASP.NET Core and SQL Server for the product's core features.",
      "Implemented JWT authentication and role-based authorization to secure user access.",
      "Documented API endpoints with Swagger, tested them using Postman, and collaborated with the team through GitHub.",
    ],
  },
  {
    role: "Junior DevOps Engineer Intern",
    company: "Beenco Labs",
    location: "Karachi",
    duration: "Oct 2025 – Nov 2025",
    bullets: [
      "Deployed blockchain nodes on Azure cloud using Kubernetes clusters, ensuring high availability.",
      "Containerized and deployed React.js applications using Docker and Kubernetes workflows.",
      "Built CI/CD pipelines using GitHub Actions for automated build and deployment processes.",
      "Monitored system performance and cluster health using Prometheus and Grafana dashboards.",
    ],
  },
];

const list = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.14, delayChildren: 0.3 },
  },
};

const item = {
  hidden: { opacity: 0, x: -20 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 py-20">
      <SectionHeading
        index="02"
        eyebrow="Experience"
        title="Experience"
      />

      <div className="relative pl-8 md:pl-12">
        {/* Animated timeline */}
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute bottom-0 left-[7px] top-3 w-[2px] origin-top bg-gradient-to-b from-violet-500 to-cyan-400 opacity-50"
        />

        {/* Timeline dot */}
        <span className="absolute left-0 top-3 flex h-4 w-4">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-400 opacity-60" />
          <span className="relative inline-flex h-4 w-4 rounded-full bg-gradient-to-br from-violet-400 to-cyan-300" />
        </span>

        <div className="space-y-8">
          {experiences.map((experience) => (
            <Reveal key={experience.company}>
              <SpotlightCard tilt={false} className="p-6 md:p-8">
                <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-lg font-semibold md:text-xl">
                      {experience.role}
                    </p>

                    <p className="mt-1 text-sm text-cyan-400">
                      {experience.company}
                      {experience.location
                        ? `, ${experience.location}`
                        : ""}
                    </p>
                  </div>

                  <span className="w-fit rounded-full border border-white/10 bg-white/5 px-3 py-1 font-code text-xs text-gray-300 backdrop-blur-sm">
                    {experience.duration}
                  </span>
                </div>

                <motion.ul
                  variants={list}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-60px" }}
                  className="space-y-3"
                >
                  {experience.bullets.map((bullet) => (
                    <motion.li
                      key={bullet}
                      variants={item}
                      className="group relative pl-6 text-sm leading-relaxed text-gray-300"
                    >
                      <span className="absolute left-0 top-2 h-2 w-2 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 transition group-hover:scale-150" />

                      <span className="transition group-hover:text-white">
                        {bullet}
                      </span>
                    </motion.li>
                  ))}
                </motion.ul>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}