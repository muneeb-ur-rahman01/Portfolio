import { motion } from "framer-motion";
import Reveal from "./Reveal";

export default function SectionHeading({ index, eyebrow, title, subtitle }) {
  return (
    <div className="mb-12">
      <Reveal>
        <p className="mb-3 font-code text-xs uppercase tracking-[0.3em] text-cyan-400">
          {index} <span className="text-gray-600">/</span> {eyebrow}
        </p>
      </Reveal>

      <Reveal delay={0.08}>
        <h2 className="text-3xl font-bold tracking-tight md:text-5xl">{title}</h2>
      </Reveal>

      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="mt-4 h-[3px] w-24 origin-left rounded-full bg-gradient-to-r from-violet-500 to-cyan-400"
      />

      {subtitle && (
        <Reveal delay={0.15}>
          <p className="mt-4 max-w-2xl text-gray-400">{subtitle}</p>
        </Reveal>
      )}
    </div>
  );
}
