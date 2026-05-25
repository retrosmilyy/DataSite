const networks = [
  {
    id: "mtn",
    name: "MTN",
    label: "Non-Expiry",
    color: "#FFD700",
    bg: "#1a1500",
    iconLabel: "MTN",
    iconText: "#1a1500",
    iconSize: 11,
  },
  {
    id: "at",
    name: "AirtelTigo",
    label: "Premium",
    color: "#FF3B30",
    bg: "#1a0500",
    iconLabel: "AT",
    iconText: "#ffffff",
    iconSize: 12,
  },
  {
    id: "telecel",
    name: "Telecel",
    label: "Ghana",
    color: "#34C759",
    bg: "#001508",
    iconLabel: "TEL",
    iconText: "#ffffff",
    iconSize: 10,
  },
]

export default function NetworkSelector() {
  return (
    <div className="mb-6">
      <p className="text-[11px] font-mono text-[#4a5568] tracking-widest mb-3">
        STEP 1 - SELECT NETWORK
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
       {networks.map((net) => {
         <button key={net.id} className="flex items-center gap-3 rounded-2xl px-4 py-3 border text-left">
           <div
            className="w-9 h-9 rounded-full flex items-center justify-center"
            style={{ background: net.color}}
          >
             <span
              style={{ color: net.iconText, fontSize: net.iconSize }}
              className="font-black"
            >
              {net.iconLabel}
            </span>
          </div>

          <div className="flex-1">
            <p className="font-bold text-sm text-[#eef0f5]">{net.name}</p>
            <p className="text-xs text-muted mt-0.5">Non-Expiry</p>
          </div>
        </button>

        {/* AirtelTigo Button */}

        <button className="flex items-center gap-3 rounded-2xl px-4 py-3 border text-left">
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center"
            style={{ background: "#ff3b30" }}
          >
            <span
              style={{ color: "#ffffff", fontSize: 12 }}
              className="font-black"
            >
              AT
            </span>
          </div>
          <div className="flex-1">
            <p className="font-bold text-sm text-[#eef0f5]">AirtelTigo</p>
            <p className="text-xs text-muted mt-0.5">Premium</p>
          </div>
        </button>

        <button className="flex items-center gap-3 rounded-2xl px-4 py-3 border text-left">
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center"
            style={{ background: "#34c759" }}
          >
            <span
              style={{ color: "#ffffff", fontSize: 10 }}
              className="font-black"
            >
              TEL
            </span>
          </div>
          <div className="flex-1">
            <p className="font-bold text-sm text-[#eef0f5]">Telecel</p>
            <p className="text-xs text-muted mt-0.5">Ghana</p>
          </div>
        </button>
      </div>
    </div>
  )
}
