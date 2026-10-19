import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiArrowDown, FiArrowRight } from "react-icons/fi";

const ROLES = ["DevOps Engineer", ".NET Core Developer", "CI/CD & Cloud Builder"];

const terminalLines = [
  { cmd: true, text: "docker build -t portfolio ." },
  { text: "✔ image built successfully" },
  { cmd: true, text: "kubectl rollout status deploy/app" },
  { text: "✔ deployment rolled out" },
  { cmd: true, text: "gh workflow run ci.yml" },
  { text: "✔ pipeline passed" },
];

const chips = [
  { label: "Docker", pos: "-top-5 -left-3 md:-left-8", delay: "0s" },
  { label: "Kubernetes", pos: "top-12 -right-3 md:-right-8", delay: "-1.5s" },
  { label: ".NET Core", pos: "-bottom-5 left-6 md:left-10", delay: "-3s" },
  { label: "Azure", pos: "-bottom-4 -right-2 md:-right-6", delay: "-4.5s" },
];

const wordVariant = {
  hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

function useTypewriter(words, speed = 70, pause = 1600) {
  const [text, setText] = useState("");

  useEffect(() => {
    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let timer;

    const tick = () => {
      const word = words[wordIndex];
      if (!deleting) {
        charIndex += 1;
        setText(word.slice(0, charIndex));
        if (charIndex === word.length) {
          deleting = true;
          timer = setTimeout(tick, pause);
          return;
        }
      } else {
        charIndex -= 1;
        setText(word.slice(0, charIndex));
        if (charIndex === 0) {
          deleting = false;
          wordIndex = (wordIndex + 1) % words.length;
        }
      }
      timer = setTimeout(tick, deleting ? 35 : speed);
    };

    timer = setTimeout(tick, 900);
    return () => clearTimeout(timer);
  }, [words, speed, pause]);

  return text;
}

export default function Hero() {
  const role = useTypewriter(ROLES);

  return (
    <section
      id="home"
      className="relative grid min-h-screen items-center gap-14 pb-16 pt-32 lg:grid-cols-[1.1fr_0.9fr]"
    >
      {/* Left: intro */}
      <div>
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 flex items-center gap-3 font-code text-sm text-gray-400"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cyan-400" />
          </span>
          Hi there, I&apos;m
        </motion.p>

        <motion.h1
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } } }}
          className="mb-5 text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl"
        >
          {["Muhammad", "Muneeb"].map((w) => (
            <motion.span key={w} variants={wordVariant} className="mr-3 inline-block">
              {w}
            </motion.span>
          ))}
          <br />
          {["Ur", "Rahman", "Shahzad"].map((w) => (
            <motion.span
              key={w}
              variants={wordVariant}
              className="text-gradient mr-3 inline-block"
            >
              {w}
            </motion.span>
          ))}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mb-5 h-8 font-code text-lg text-gray-200 md:text-xl"
        >
          <span className="text-cyan-400">&gt; </span>
          {role}
          <span className="ml-0.5 inline-block h-5 w-[2px] translate-y-1 animate-blink bg-cyan-400" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.6 }}
          className="mb-8 max-w-xl leading-relaxed text-gray-400"
        >
          Motivated engineer with hands-on experience in containerization, CI/CD
          pipelines, and cloud infrastructure. Passionate about building scalable and
          efficient systems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="flex flex-wrap items-center gap-4"
        >
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-shine group flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-500 to-cyan-400 px-6 py-3 text-sm font-semibold text-black shadow-lg shadow-violet-500/30 transition hover:scale-105 hover:shadow-violet-500/50"
          >
            Get in touch
            <FiArrowRight className="transition-transform group-hover:translate-x-1" />
          </button>

          <button
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm text-gray-200 backdrop-blur transition hover:scale-105 hover:border-violet-400/60 hover:bg-white/10 hover:text-white"
          >
            View projects
          </button>

          <div className="ml-1 flex items-center gap-3 text-xl text-gray-400">
            <a
              href="https://github.com/muneeb-ur-rahman01"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="transition hover:-translate-y-1 hover:text-white"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/muneeb-ur-rahman-943206281"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="transition hover:-translate-y-1 hover:text-white"
            >
              <FaLinkedin />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Right: animated terminal */}
      <motion.div
        initial={{ opacity: 0, x: 50, scale: 0.95 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto w-full max-w-md lg:max-w-none"
      >
        <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-r from-violet-500/30 to-cyan-400/30 blur-3xl" />

        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0b0b14]/85 shadow-2xl shadow-violet-500/10 backdrop-blur-xl">
          <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-red-400/80" />
            <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
            <span className="h-3 w-3 rounded-full bg-green-400/80" />
            <span className="ml-3 font-code text-xs text-gray-500">devops.sh</span>
          </div>

          <div className="space-y-2.5 p-5 font-code text-xs md:text-sm">
            {terminalLines.map((line, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.1 + i * 0.55, duration: 0.4 }}
                className={line.cmd ? "text-gray-200" : "pl-4 text-emerald-400"}
              >
                {line.cmd && <span className="mr-2 text-violet-400">$</span>}
                {line.text}
              </motion.p>
            ))}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 + terminalLines.length * 0.55 }}
              className="text-gray-200"
            >
              <span className="mr-2 text-violet-400">$</span>
              <span className="inline-block h-4 w-2 translate-y-0.5 animate-blink bg-cyan-400" />
            </motion.p>
          </div>
        </div>

        {/* Floating tech chips */}
        {chips.map(({ label, pos, delay }) => (
          <span
            key={label}
            style={{ animationDelay: delay }}
            className={`absolute ${pos} animate-float rounded-full border border-white/15 bg-black/70 px-3.5 py-1.5 font-code text-xs text-gray-200 shadow-lg shadow-violet-500/20 backdrop-blur-md`}
          >
            {label}
          </span>
        ))}
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 font-code text-[10px] uppercase tracking-[0.3em] text-gray-500 lg:flex"
      >
        Scroll
        <motion.span animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.6 }}>
          <FiArrowDown />
        </motion.span>
      </motion.div>
    </section>
  );
}
