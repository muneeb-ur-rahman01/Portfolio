export default function Hero() {
  return (
    <div className="grid md:grid-cols-[1fr_auto] gap-8 items-center 
    bg-[#545657] 
    border  rounded-xl p-8 mb-6 text-white">

      <div>
        <h2 className="text-[20px] text-white mb-1">Hi there, I'm</h2>

        <h1 className="text-2xl md:text-3xl font-medium mb-2">
          Muhammad Muneeb<br />Ur Rahman
        </h1>

        <p className="text-base font-medium text-gray-300 mb-4">
          DevOps Engineer & .NET Core Developer
        </p>

        <p className="text-sm text-gray-400 leading-relaxed mb-6">
          Motivated engineer with hands-on experience in containerization...
        </p>

        <div className="flex gap-3 flex-wrap">
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-5 py-2.5 bg-gray-800  rounded-lg text-sm"
          >
            Get in touch
          </button>

          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-5 py-2.5 border  rounded-lg text-sm hover:bg-[#545657]"
          >
            View projects
          </button>
        </div>
      </div>

      <div className="w-20 h-20 md:w-24 md:h-24 rounded-full 
      bg-[#545657] border  flex items-center justify-center text-xl">
        MUR
      </div>
    </div>
  );
}