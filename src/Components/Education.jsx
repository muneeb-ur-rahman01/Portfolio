export default function Education() {
  return (
    <section className="mb-16 text-white font-code px-4 md:px-0">
      
      {/* Heading */}
      <p className="text-xl md:text-2xl font-semibold uppercase tracking-widest mb-8 relative inline-block">
        Education
        <span className="absolute left-0 -bottom-2 w-1/2 h-[2px] bg-gradient-to-r from-purple-500 to-cyan-400"></span>
      </p>

      {/* Card */}
      <div className="relative bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a] border border-gray-800 rounded-2xl p-6 transition duration-300 hover:border-purple-500 hover:scale-[1.02]">
        
        {/* Left timeline line */}
        <div className="absolute left-4 top-6 bottom-6 w-[2px] bg-gradient-to-b from-purple-500 to-cyan-400 opacity-40"></div>

        <div className="pl-8 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
          
          {/* Text */}
          <div>
            <p className="text-base md:text-lg font-semibold">
              Bachelor of Information Technology
            </p>
            <p className="text-sm text-gray-400 mt-1">
              Bahria University · 2023 – 2027
            </p>
          </div>

          {/* Badge */}
          <span className="text-xs bg-gradient-to-r from-green-400/20 to-emerald-400/20 text-green-400 px-4 py-1.5 rounded-full font-medium border border-green-500/30 backdrop-blur-sm">
            7th Semester
          </span>
        </div>
      </div>
    </section>
  );
}