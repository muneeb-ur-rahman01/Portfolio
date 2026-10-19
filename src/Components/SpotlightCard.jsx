import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const SPRING = { stiffness: 200, damping: 20 };

export default function SpotlightCard({ children, className = "", tilt = true }) {
  const ref = useRef(null);
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);
  const sx = useSpring(x, SPRING);
  const sy = useSpring(y, SPRING);
  const range = tilt ? 6 : 0;
  const rotateX = useTransform(sy, [0, 1], [range, -range]);
  const rotateY = useTransform(sx, [0, 1], [-range, range]);

  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    x.set((e.clientX - r.left) / r.width);
    y.set((e.clientY - r.top) / r.height);
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  const onLeave = () => {
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      className={`spotlight-card relative overflow-hidden rounded-2xl ${className}`}
    >
      <div className="spotlight-glow pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300" />
      <div className="relative h-full">{children}</div>
    </motion.div>
  );
}
