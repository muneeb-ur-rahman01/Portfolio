import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import SpotlightCard from "./SpotlightCard";

export default function Education() {
  return (
    <section id="education" className="scroll-mt-24 py-20">
      <SectionHeading index="04" eyebrow="Education" title="Education" />

      <div className="relative pl-8 md:pl-12">
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute bottom-0 left-[7px] top-3 w-[2px] origin-top bg-gradient-to-b from-violet-500 to-cyan-400 opacity-50"
        />
        <span className="absolute left-0 top-3 flex h-4 w-4">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-60" />
          <span className="relative inline-flex h-4 w-4 rounded-full bg-gradient-to-br from-cyan-300 to-violet-400" />
        </span>

        <Reveal>
          <SpotlightCard tilt={false} className="p-6 md:p-8">
            <div className="flex items-center gap-5">
              <div className="grid h-14 w-14 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/5 text-2xl text-cyan-300">
                <FaGraduationCap />
              </div>
              <div>
                <p className="text-lg font-semibold md:text-xl">
                  Bachelor of Information Technology
                </p>
                <p className="mt-1 text-sm text-gray-400">Bahria University · 2023 – 2027</p>
              </div>
            </div>
          </SpotlightCard>
        </Reveal>
      </div>
    </section>
  );
}
