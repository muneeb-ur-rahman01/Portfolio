export default function Hero() {
  return (
    <div className="relative mb-12 text-white font-code px-4 md:px-0">
      
      {/* Main Container */}
      <div className="relative bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a] border border-gray-800 rounded-3xl p-8 md:p-12 overflow-hidden">

        {/* Glow Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-cyan-400/10 blur-2xl opacity-40"></div>

        {/* Content */}
        <div className="relative z-10 max-w-2xl">
          
          <h2 className="text-sm md:text-base text-gray-400 mb-2 tracking-wide">
            Hi there, I'm
          </h2>

          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-3">
            Muhammad Muneeb <br />
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Ur Rahman Shahzad
            </span>
          </h1>

          <p className="text-base md:text-lg text-gray-300 mb-5">
            DevOps Engineer & .NET Core Developer
          </p>

          <p className="text-sm md:text-base text-gray-400 leading-relaxed mb-8">
            Motivated engineer with hands-on experience in containerization,
            CI/CD pipelines, and cloud infrastructure. Passionate about building
            scalable and efficient systems.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 flex-wrap">
            
            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-6 py-2.5 rounded-xl text-sm font-medium bg-gradient-to-r from-purple-500 to-cyan-400 text-black hover:opacity-90 transition"
            >
              Get in touch
            </button>

            <button
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-6 py-2.5 rounded-xl text-sm border border-gray-700 text-gray-300 hover:bg-white/5 hover:text-white transition"
            >
              View projects
            </button>
          </div>
        </div>

        {/* Optional Right Side Glow Element */}
        <div className="hidden md:block absolute right-10 top-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full blur-3xl opacity-20"></div>
      </div>
    </div>
  );
}