const stats = [
  { num: '5+', label: 'Technologies' },
  { num: '1',  label: 'Internship'   },
  { num: '7th', label: 'Semester'    },
]

export default function Stats() {
  return (
    <div className="grid grid-cols-3 gap-3 mb-10">
      {stats.map(({ num, label }) => (
        <div key={label} className="bg-[#545657] border rounded-lg p-4 text-center">
          <p className="text-2xl font-medium">{num}</p>
          <p className="text-xs text-white mt-1">{label}</p>
        </div>
      ))}
    </div>
  )
}