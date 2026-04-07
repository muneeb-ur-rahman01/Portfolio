import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#545657] border-b  text-gray-400 py-6 mt-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        <p className="text-sm mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} Muneeb Ur Rahman. All rights reserved.
        </p>

        <div className="flex gap-4">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
            aria-label="GitHub"
          >
            <FaGithub size={24} />
          </a>

          <a
            href="https://www.linkedin.com/in/muneeb-ur-rahman-943206281"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}