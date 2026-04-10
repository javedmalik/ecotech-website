export default function StatsTicker() {
  const stats = [
    ["10,000+", "Tonnes Recycled"],
    ["500+", "Corporate Clients"],
    ["24 Hrs", "Quick Pickup Slots"],
    ["Pan India", "Collection Support"],
  ];

  return (
    <section className="border-y border-slate-200 bg-white mt-10">
      <div className="container-max grid gap-6 py-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map(([value, label]) => (
          <div key={label} className="flex items-center justify-center gap-4 rounded-2xl bg-slate-50 px-6 py-4 text-center">
            <div className="text-3xl font-black text-primary-500">{value}</div>
            <div className="text-sm font-medium text-slate-500">{label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
