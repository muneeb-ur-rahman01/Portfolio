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
      <nav className="w-full px-6 py-4 bg-black flex justify-between items-center font-code">
        <span className="text-[20px] font-medium">
          Muhammad Muneeb Ur Rahman Shahzad
        </span>

        {/* Desktop */}
        <div className="hidden md:flex gap-8">
          {links.map((s) => (
            <button
              key={s}
              onClick={() => scrollTo(s)}
              className="text-[15px] text-white hover:text-gray-400 capitalize"
            >
              {s}
            </button>
          ))}
        </div>

        {/* Mobile */}
        <button onClick={() => setOpen(true)} className="md:hidden text-xl">
          ☰
        </button>
      </nav>

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-black border-l border-gray-800 p-6 transition-transform transform ${
          open ? "translate-x-0" : "translate-x-full"
        } font-code`}
      >
        <button onClick={() => setOpen(false)} className="mb-6 text-white">
          ✕
        </button>

        <div className="flex flex-col gap-6">
          {links.map((s) => (
            <button
              key={s}
              onClick={() => scrollTo(s)}
              className="text-gray-400 hover:text-white text-left"
            >
              {s}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}