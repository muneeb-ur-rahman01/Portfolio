const items = [
  { label: 'Email', value: 'muneeburrahman096@gmail.com' },
  { label: 'Phone', value: '0311-9846336' },
  { label: 'Location', value: 'Karachi, Pakistan' },
];

export default function Contact() {
  return (
    <section id="contact" className="mb-10 text-white font-code">
      <p className="text-lg uppercase tracking-widest text-white mb-4 border-b pb-2">
        Contact
      </p>

      <div className="grid md:grid-cols-3 gap-3">
        {items.map(({ label, value }) => (
          <div key={label} className="bg-black border rounded-xl p-4 text-center">
            <p className="text-xs text-gray-400 mb-1">{label}</p>
            <p className="text-sm break-all text-gray-200">{value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}