import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

const links = [
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

const watched = ["home", ...links.map((l) => l.id)];

const scrollTo = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  // Shrink / strengthen the bar after scrolling a little
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the link of the section currently in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    watched.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // Lock page scroll while the mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const go = (id) => {
    scrollTo(id);
    setOpen(false);
  };

  return (
    <>
      <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4">
        <motion.nav
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className={`flex w-full max-w-5xl items-center justify-between rounded-full border px-4 py-2.5 backdrop-blur-xl transition-all duration-300 md:px-5 ${
            scrolled
              ? "border-white/15 bg-black/60 shadow-lg shadow-violet-500/10"
              : "border-white/5 bg-white/[0.03]"
          }`}
        >
          {/* Logo */}
          <button
            onClick={() => go("home")}
            className="group flex items-center gap-3"
            aria-label="Back to top"
          >
            <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-violet-500 to-cyan-400 font-code text-[10px] font-bold text-black transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110">
              MUR
            </span>
            <span className="hidden text-sm font-semibold tracking-wide text-gray-200 sm:block">
              Muneeb Ur Rahman
            </span>
          </button>

          {/* Desktop links */}
          <div className="hidden items-center gap-1 md:flex">
            {links.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => go(id)}
                className={`relative rounded-full px-4 py-1.5 text-sm transition-colors ${
                  active === id ? "text-white" : "text-gray-400 hover:text-white"
                }`}
              >
                {active === id && (
                  <motion.span
                    layoutId="nav-pill"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    className="absolute inset-0 rounded-full bg-white/10"
                  />
                )}
                <span className="relative">{label}</span>
              </button>
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(true)}
            className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-xl text-white transition hover:bg-white/10 md:hidden"
            aria-label="Open menu"
          >
            <FiMenu />
          </button>
        </motion.nav>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-[55] bg-black/60 backdrop-blur-sm"
            />
            <motion.aside
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 34 }}
              className="fixed right-0 top-0 z-[56] h-full w-72 border-l border-white/10 bg-[#07070d]/95 p-6 backdrop-blur-xl"
            >
              <button
                onClick={() => setOpen(false)}
                className="mb-10 grid h-9 w-9 place-items-center rounded-full border border-white/10 text-xl transition hover:bg-white/10"
                aria-label="Close menu"
              >
                <FiX />
              </button>

              <div className="flex flex-col gap-6">
                {links.map(({ id, label }, i) => (
                  <motion.button
                    key={id}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.06 }}
                    onClick={() => go(id)}
                    className={`border-b border-white/10 pb-3 text-left text-lg transition ${
                      active === id ? "text-white" : "text-gray-400 hover:text-white"
                    }`}
                  >
                    {label}
                  </motion.button>
                ))}
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
