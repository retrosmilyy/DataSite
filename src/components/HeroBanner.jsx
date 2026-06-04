export default function HeroBanner() {
  return (
    <div className="rounded-2xl bg-gradient-to-br from-blue-50 to-white border border-blue-100 p-6 mb-7 relative overflow-hidden">
      <div className="absolute -top-5 -right-5 w-40 h-40 rounded-full bg-[radial-gradient(circle,rgba(0,194,255,0.08)_0%,transparent_70%)] pointer-events-none" />

      <p className="text-[11px] font-mono text-blue-600 tracking-widest mb-2">
        // BUY DATA * NO ACCOUNT NEEDED
      </p>
      <h1 className="font-extrabold text-xl text-slate-900 leading-snug tracking-tight mb-2">
        Fast &amp; Secure Data Bundles
      </h1>
      <p className="text-sm text-slate-600 leading-relaxed">
        Pick your network, choose a bundle, enter your number and pay. Done in
        seconds.
      </p>
      <div className="flex flex-wrap gap-4 mt-4">
        {["✓ Instant Delivery", "✓ Secure Payment", "✓ No Sign-up"].map(f => (
          <span key={f} className="text-xs text-emerald-700 font-semibold">
            {f}
          </span>
        ))}
      </div>
    </div>
  )
}
