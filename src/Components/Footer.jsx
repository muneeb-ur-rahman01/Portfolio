import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiArrowUp } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="mt-10 border-t border-white/10 bg-black/40 py-8 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 px-5 md:flex-row md:px-8">
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Muneeb Ur Rahman. All rights reserved.
        </p>

        <div className="flex items-center gap-4 text-gray-400">
          <a
            href="https://github.com/muneeb-ur-rahman01"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="transition hover:-translate-y-1 hover:text-white"
          >
            <FaGithub size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/muneeb-ur-rahman-943206281"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="transition hover:-translate-y-1 hover:text-white"
          >
            <FaLinkedin size={22} />
          </a>

          <motion.button
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className="ml-2 grid h-9 w-9 place-items-center rounded-full border border-white/15 bg-white/5 text-white transition hover:border-violet-400/60"
          >
            <FiArrowUp />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
