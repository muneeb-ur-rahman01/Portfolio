import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  const links = ["skills", "experience", "projects", "contact"];

  return (
    <>
      {/* Navbar */}
      <nav className="w-full px-6 md:px-12 py-4 bg-black/80 backdrop-blur-md border-b border-gray-800 flex justify-between items-center font-code sticky top-0 z-50">
        
        {/* Logo / Name */}
        <span className="text-lg md:text-xl font-semibold tracking-wide text-white hover:text-gray-300 transition">
          Muhammad Muneeb Ur Rahman Shahzad
        </span>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-10">
          {links.map((s) => (
            <button
              key={s}
              onClick={() => scrollTo(s)}
              className="relative text-sm text-gray-300 hover:text-white transition group capitalize"
            >
              {s}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all group-hover:w-full"></span>
            </button>
          ))}
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(true)}
          className="md:hidden text-2xl text-white hover:text-gray-300 transition"
        >
          ☰
        </button>
      </nav>

      {/* Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-black border-l border-gray-800 p-6 z-50 transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close */}
        <button
          onClick={() => setOpen(false)}
          className="mb-10 text-white text-xl hover:text-gray-400 transition"
        >
          ✕
        </button>

        {/* Links */}
        <div className="flex flex-col gap-8">
          {links.map((s) => (
            <button
              key={s}
              onClick={() => scrollTo(s)}
              className="text-lg text-gray-400 hover:text-white transition text-left capitalize border-b border-gray-800 pb-2"
            >
              {s}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}