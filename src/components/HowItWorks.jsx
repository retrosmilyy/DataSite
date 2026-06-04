const steps = [
  { icon: "📡", step: "1", label: "Select Network" },
  { icon: "📦", step: "2", label: "Choose Bundle" },
  { icon: "📱", step: "3", label: "Enter Details" },
  { icon: "⚡", step: "4", label: "Instant Delivery" },
]

export default function HowItWorks() {
  return (
    <div className="mt-10 border-t border-slate-100 pt-8">
      <p className="text-[11px] font-mono text-slate-500 tracking-widest mb-5">
        HOW IT WORKS
      </p>
      <div className="grid grid-cols-4 gap-2">
        {steps.map(item => (
          <div
            key={item.step}
            className="text-center py-4 px-2 rounded-xl bg-slate-50 border border-slate-100"
          >
            <div className="text-2xl mb-2">{item.icon}</div>
            <p className="font-mono text-[9px] text-slate-500 mb-1 tracking-widest">
              STEP {item.step}
            </p>
            <p className="text-[11px] font-semibold text-muted">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
