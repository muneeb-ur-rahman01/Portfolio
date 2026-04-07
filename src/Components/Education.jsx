export default function Education() {
  return (
   <section className="bg-[#545657] border rounded-xl p-5 flex justify-between items-center text-white">
      <p className="text-[20px] uppercase tracking-widest text-white font-medium mb-4 pb-2 border-b border-gray-100">
        Education
      </p>
      <div className="bg-[#545657] border  rounded-xl p-5 flex justify-between items-center">
        <div>
          <p className="text-sm font-medium">Bachelor of Information Technology</p>
          <p className="text-xs text-gray-400 mt-1">Bahria University · 2023 – 2027</p>
        </div>
        <span className="text-xs bg-green-50 text-green-700 px-3 py-1 rounded-md font-medium">
          7th Semester
        </span>
      </div>    
    </section>
  )
}