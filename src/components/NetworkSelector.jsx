const icons = {
  mtn: { label: "MTN", bg: "#ffd700", text: "#1a1500", size: 11 },
  at: { label: "AT", bg: "#FF3B30", text: "#ffffff", size: 11 },
  telecel: { label: "TEL", bg: "#34C759", text: "#ffffff", size: 11 },
}

export default function NetworkSelector() {
  return (
    <div className="mb-6">
      <p className="text-[11px] font-mono text-[#4a5568] tracking-widest mb-3">
        STEP 1 - SELECT NETWORK
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {networks.map}
      </div>
    </div>
  )
}
