const stats = [
  { num: "5+", label: "Technologies" },
  { num: "1", label: "Internship" },
  { num: "7th", label: "Semester" },
];

export default function Stats() {
  return (
    <div className="grid grid-cols-3 gap-5 mb-16 text-white font-code px-4 md:px-0">
      {stats.map(({ num, label }) => (
        
        <div
          key={label}
          className="group relative bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a] border border-gray-800 rounded-2xl p-6 text-center transition duration-300 hover:scale-[1.05] hover:border-purple-500"
        >
          
          {/* Glow */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-r from-purple-500/10 to-cyan-400/10 blur-xl"></div>

          {/* Number */}
          <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            {num}
          </p>

          {/* Label */}
          <p className="text-xs md:text-sm text-gray-400 mt-2 uppercase tracking-wider group-hover:text-gray-200 transition">
            {label}
          </p>

          {/* Bottom Accent */}
          <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-purple-500 to-cyan-400 group-hover:w-full transition-all duration-300"></div>
        </div>
      ))}
    </div>
  );
}