import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import SpotlightCard from "./SpotlightCard";

const groups = [
  {
    title: "DevOps & Cloud",
    gradient: "from-blue-400 to-cyan-300",
    tags: ["Docker", "Kubernetes", "Linux", "Bash", "Azure", "GitHub Actions", "Jenkins", "CI/CD", "Automation"],
  },
  {
    title: "Backend Development and Frontend",
    gradient: "from-purple-400 to-pink-300",
    tags: [".NET Core", "Web API", "C#", "Entity Framework", "React.js", "TailwindCSS"],
  },
  {
    title: "Monitoring & Databases",
    gradient: "from-amber-300 to-orange-400",
    tags: ["Prometheus", "Grafana", "SQL Server", "MongoDB"],
  },
];

const allTags = groups.flatMap((g) => g.tags);

const tagList = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05, delayChildren: 0.25 } },
};
const tagItem = {
  hidden: { opacity: 0, scale: 0.8, y: 10 },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4 } },
};

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 py-20">
      <SectionHeading index="01" eyebrow="Skills" title="Technical Skills" />

      <div className="grid gap-6 md:grid-cols-2">
        {groups.map(({ title, gradient, tags }, i) => (
          <Reveal key={title} delay={i * 0.1} className={i === 2 ? "md:col-span-2" : ""}>
            <SpotlightCard className="h-full p-6">
              <p
                className={`mb-5 bg-gradient-to-r ${gradient} bg-clip-text text-base font-semibold text-transparent`}
              >
                {title}
              </p>

              <motion.div
                variants={tagList}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-60px" }}
                className="flex flex-wrap gap-2"
              >
                {tags.map((tag) => (
                  <motion.span
                    key={tag}
                    variants={tagItem}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 font-code text-xs text-gray-300 backdrop-blur-sm transition-colors hover:border-violet-400/60 hover:text-white"
                  >
                    {tag}
                  </motion.span>
                ))}
              </motion.div>
            </SpotlightCard>
          </Reveal>
        ))}
      </div>

      {/* Scrolling tech ticker */}
      <Reveal delay={0.2} className="mask-fade-x mt-12 overflow-hidden">
        <div className="flex w-max animate-marquee gap-4 hover:[animation-play-state:paused]">
          {[...allTags, ...allTags].map((tag, i) => (
            <span
              key={`${tag}-${i}`}
              className="whitespace-nowrap rounded-full border border-white/10 bg-white/[0.03] px-5 py-2 font-code text-sm text-gray-400"
            >
              {tag}
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
