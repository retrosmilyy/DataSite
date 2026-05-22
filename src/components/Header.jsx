export default function Header() {
  return (
    <header className="border-b border-[#13181f] px-4">
      <div className="max-w-2xl mx-auto h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-linear-to-br from-[#00c2ff] to-[#0070ff] flex items-center justify-center shrink-0">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path
                d="M2 9L9 2L16 9L9 16L2 9Z"
                fill="white"
                fillOpacity="0.9"
              />
              <circle cx="9" cy="9" r="2.5" fill="white" />
            </svg>
          </div>
          <div>
            <p className="font-extrabold text-base leading-tight tracking-wide">
              DataVault
            </p>
            <p className="text-[10px] text-[#4a5568] font-mono trackin-widest">
              GHANA ~ INSTANT DATA
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-telecel animate-shimmer shadow-[0_0_6px_#34c759]" />
          <span className="text-xs text-muted font-mono hidden sm:block">
            SHOP ONLINE
          </span>
        </div>
      </div>
    </header>
  )
}
