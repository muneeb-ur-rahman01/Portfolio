import { useEffect } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";

export default function Background() {
  const mx = useMotionValue(-600);
  const my = useMotionValue(-600);
  const sx = useSpring(mx, { stiffness: 80, damping: 20, mass: 0.5 });
  const sy = useSpring(my, { stiffness: 80, damping: 20, mass: 0.5 });
  const spotlight = useMotionTemplate`radial-gradient(520px circle at ${sx}px ${sy}px, rgba(124, 92, 255, 0.13), transparent 70%)`;

  useEffect(() => {
    const onMove = (e) => {
      mx.set(e.clientX);
      my.set(e.clientY);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my]);

  return (
    <div aria-hidden className="fixed inset-0 -z-10 overflow-hidden bg-[#05050a]">
      <div className="absolute -top-40 -left-32 h-[34rem] w-[34rem] animate-blob rounded-full bg-violet-600/25 blur-[120px]" />
      <div className="absolute top-1/3 -right-40 h-[32rem] w-[32rem] animate-blob rounded-full bg-cyan-500/20 blur-[120px] [animation-delay:-6s]" />
      <div className="absolute -bottom-40 left-1/4 h-[30rem] w-[30rem] animate-blob rounded-full bg-fuchsia-600/15 blur-[120px] [animation-delay:-12s]" />
      <div className="bg-grid absolute inset-0" />
      <motion.div className="absolute inset-0" style={{ background: spotlight }} />
    </div>
  );
}
