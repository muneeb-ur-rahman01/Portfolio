export default function Education() {
  return (
    <section className="bg-black border rounded-xl p-5 text-white font-code">
      <p className="text-[20px] uppercase tracking-widest text-white font-medium mb-4 pb-2 border-b border-gray-100">
        Education
      </p>
      
      <div className="bg-black  rounded-xl p-5 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
        <div>
          <p className="text-sm font-medium">Bachelor of Information Technology</p>
          <p className="text-xs text-gray-400 mt-1">Bahria University · 2023 – 2027</p>
        </div>
        <span className="text-xs bg-green-50 text-green-700 px-4 py-1 rounded-md font-medium shrink-0">
          7th Semester
        </span>
      </div>    
    </section>
  )
}