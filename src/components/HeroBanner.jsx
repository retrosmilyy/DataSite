export default function HeroBanner() {
  return (
    <div className="rounded-2xl bg-linear-to-br from-[#0d1520] to-[#0a1020] border border-[#1a2233] p-6 mb-7 relative overflow-hidden">
      <div className="absolute -top-5 -right-5 w-40 h-40 rounded-full bg-[radial-gradient(circle,rgba(0,194,255,0.08)_0%,transparent_70%)] pointer-events-none" />

      <p className="text-[11px] font-mono text-[#00c2ff] tracking-widest mb-2">
        // BUY DATA * NO ACCOUNT NEEDED
      </p>
      <h1 className="font-extrabold text-xl text-white leading-snug tracking-tight mb-2">
        Fast &amp; Secure Data Bundles
      </h1>
      <p className="text-sm text-muted leading-relaxed text-white">
        Pick your network, choose a bundle, enter your number and pay. Done in
        seconds.
      </p>
      <div className="flex flex-wrap gap-4 mt-4">
        {["✓ Instant Delivery", "✓ Secure Payment", "✓ No Sign-up"].map(f => (
          <span key={f} className="text-xs text-[#3a8a5a] font-semibold">
            {f}
          </span>
        ))}
      </div>
    </div>
  )
}
