import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";
import Reveal from "./Reveal";
import SpotlightCard from "./SpotlightCard";

const stats = [
  { to: 5, suffix: "+", label: "Technologies" },
  { to: 1, suffix: "", label: "Internship" },
  { to: 8, suffix: "th", label: "Semester" },
];

function Counter({ to, suffix }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration: 1.6,
      ease: "easeOut",
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, to]);

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="py-10">
      <div className="mx-auto grid max-w-4xl grid-cols-1 gap-5 sm:grid-cols-3">
        {stats.map(({ to, suffix, label }, i) => (
          <Reveal key={label} delay={i * 0.1}>
            <SpotlightCard className="p-6 text-center">
              <p className="text-gradient font-code text-4xl font-bold md:text-5xl">
                <Counter to={to} suffix={suffix} />
              </p>
              <p className="mt-2 text-xs uppercase tracking-widest text-gray-400 md:text-sm">
                {label}
              </p>
            </SpotlightCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
