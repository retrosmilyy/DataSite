import { useId } from "react"

export default function SuccessScreen({ network, bundle, email, onReset }) {
  const orderId = useId()
  const orderRef = `DV${orderId
    .replace(/[^a-zA-Z0-9]/g, "")
    .slice(-6)
    .toUpperCase()}`

  const details = [
    ["Order Ref", orderRef],
    ["Network", `${network.name} ${network.label}`],
    ["Bundle", bundle.name],
    ["Amount", bundle.price],
    ["Status", "Processing"],
  ]

  return (
    <div className="animate-fadein text-center py-8 px-4">
      <div
        className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center border-2 animate-checkpop"
        style={{ background: network.color + "22", borderColor: network.color }}
      >
        <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
          <path
            d="M6 17L14 25L28 9"
            stroke={network.color}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <h2 className="font-extrabold text-2xl tracking-tight mb-2">
        Order Placed! 🎉
      </h2>
      <p className="text-sm text-muted leading-relaxed mb-8">
        Your{" "}
        <strong style={{ color: network.color }}>
          {network.name} {bundle.name}
        </strong>{" "}
        bundle is being processed.
        {email && email.trim() !== "" && (
          <>
            <br />A receipt has been sent to your email.
          </>
        )}
      </p>

      <div className="rounded-2xl bg-surface border border-border p-5 text-left mb-7">
        <div className="grid grid-cols-2 gap-4">
          {details.map(([key, val]) => (
            <div key={key}>
              <p className="text-[10px] font-mono text-slate-500 tracking-widest mb-1">
                {key.toUpperCase()}
              </p>
              <p
                className="font-semibold text-sm"
                style={{ color: key === "Status" ? "#d97706" : "#0f172a" }}
              >
                {val}
              </p>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={onReset}
        className={`px-10 py-3.5 rounded-2xl font-bold text-sm transition-all hover:brightness-110 ${network.id === "mtn" ? "text-black" : "text-white"}`}
        style={{ background: network.gradient || network.color }}
      >
        Buy Another Bundle
      </button>
    </div>
  )
}
