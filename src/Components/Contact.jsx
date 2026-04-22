const items = [
  { label: "Email", value: "muneeburrahman096@gmail.com" },
  { label: "Phone", value: "0311-9846336" },
  { label: "Location", value: "Karachi, Pakistan" },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="mb-16 text-white font-code px-4 md:px-0"
    >
      {/* Heading */}
      <p className="text-xl md:text-2xl font-semibold uppercase tracking-widest mb-8 relative inline-block">
        Contact
        <span className="absolute left-0 -bottom-2 w-1/2 h-[2px] bg-gradient-to-r from-purple-500 to-cyan-400"></span>
      </p>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {items.map(({ label, value }) => (
          <div
            key={label}
            className="group relative bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a] border border-gray-800 rounded-2xl p-6 text-center overflow-hidden transition duration-300 hover:scale-[1.03] hover:border-purple-500"
          >
            {/* Glow Effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-r from-purple-500/10 to-cyan-400/10 blur-xl"></div>

            {/* Content */}
            <p className="text-xs uppercase tracking-wider text-gray-400 mb-2">
              {label}
            </p>

            <p className="text-sm md:text-base text-gray-200 break-all font-medium group-hover:text-white transition">
              {value}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}