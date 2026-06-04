export const networks = [
  {
    id: "mtn",
    name: "MTN",
    label: "Non-Expiry",
    color: "#FFD700",
    bg: "#fffbeb",
    iconLabel: "MTN",
    iconText: "#1a1500",
    iconSize: 11,
    prefixes: ["024", "025", "053", "054", "055", "059", "098"],
    bundles: [
      { id: 1, name: "1GB", price: "GHS 10" },
      { id: 2, name: "2GB", price: "GHS 20" },
      { id: 3, name: "5GB", price: "GHS 40", tag: "Value" },
      { id: 4, name: "10GB", price: "GHS 75" },
      { id: 5, name: "20GB", price: "GHS 140", tag: "Mega" },
      { id: 6, name: "50GB", price: "GHS 300" },
    ],
  },
  {
    id: "at",
    name: "AirtelTigo",
    label: "Premium",
    color: "#34C759",
    bg: "#f0fdf4",
    iconLabel: "AT",
    iconText: "#ffffff",
    iconSize: 12,
    prefixes: ["026", "027", "056", "057"],
    bundles: [
      { id: 7, name: "1.5GB", price: "GHS 10" },
      { id: 8, name: "3GB", price: "GHS 20" },
      { id: 9, name: "8GB", price: "GHS 40", tag: "Popular" },
      { id: 10, name: "15GB", price: "GHS 70" },
      { id: 11, name: "30GB", price: "GHS 120" },
      { id: 12, name: "50GB", price: "GHS 180" },
    ],
  },
  {
    id: "telecel",
    name: "Telecel",
    label: "Ghana",
    color: "#FF3B30",
    bg: "#fef2f2",
    iconLabel: "TEL",
    iconText: "#ffffff",
    iconSize: 10,
    prefixes: ["020", "050"],
    bundles: [
      { id: 13, name: "2GB", price: "GHS 15" },
      { id: 14, name: "5GB", price: "GHS 30" },
      { id: 15, name: "10GB", price: "GHS 50", tag: "Best" },
      { id: 16, name: "25GB", price: "GHS 100", tag: "Huge" },
      { id: 17, name: "50GB", price: "GHS 180" },
      { id: 18, name: "100GB", price: "GHS 300", tag: "Max" },
    ],
  },
]

export default function NetworkSelector({ activeNetId, onSelect }) {
  return (
    <div className="mb-6">
      <p className="text-[11px] font-mono text-slate-500 tracking-widest mb-3">
        STEP 1 - SELECT NETWORK
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {networks.map(net => {
          const isActive = activeNetId === net.id
          return (
            <button
              key={net.id}
              type="button"
              onClick={() => onSelect(net.id)}
              aria-pressed={isActive}
              className="flex items-center gap-4 rounded-2xl px-4 py-3 border text-left transition-all duration-200"
              style={{
                background: isActive ? net.bg : "#ffffff",
                borderColor: isActive ? net.color : "#e2e8f0",
                boxShadow: isActive ? `0 0 20px ${net.color}22` : "none",
              }}
            >
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
                style={{ background: net.color }}
              >
                <span
                  className="font-black leading-none"
                  style={{ color: net.iconText, fontSize: net.iconSize }}
                >
                  {net.iconLabel}
                </span>
              </div>

              <div className="flex-1 text-slate-900">
                <p className="font-bold text-sm ">{net.name}</p>
                <p className="text-xs text-muted mt-0.5">{net.label}</p>
              </div>

              {/* Checkmark only shows on the active button */}

              {isActive && (
                <div
                  className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                  style={{ background: net.color }}
                >
                  <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                    <path
                      d="M2 5.5L4.5 8L9 3"
                      stroke="#000"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              )}
            </button>
          )
        })}
      </div>
    </div>
  )
}
