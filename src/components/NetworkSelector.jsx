import { networks } from "../data/networks"

export { networks }

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
                style={{ background: net.gradient || net.color }}
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
                  style={{ background: net.gradient || net.color }}
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
