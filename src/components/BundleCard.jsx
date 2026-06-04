import { useState } from "react"

export default function BundleCard({ bundle, network, onBuyNow }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className="rounded-2xl p-4 border cursor-pointer transition-all duration-200 relative overflow-hidden"
      style={{
        background: hovered ? network.bg : "#0d1117",
        borderColor: hovered ? network.color : "#1a2030",
        transform: hovered ? "translateY(-3px)" : "translateY(0)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {bundle.tag && (
        <div
          className="absolute top-2 right-2 text-[9px] font-bold px-2 py-0.5 rounded-md font-mono tracking-wide text-black"
          style={{ background: network.color }}
        >
          {bundle.tag.toUpperCase()}
        </div>
      )}

      <p
        className="font-extrabold text-2xl leading-none tracking-tighter mb-1"
        style={{ color: network.color }}
      >
        {bundle.name}
      </p>
      <p className="text-[10px] font-mono text-[#3a4555] mb-3 tracking-wider">
        NON-EXPIRY
      </p>
      <p className="font-bold text-base mb-3 text-white">{bundle.price}</p>

      <button
        onClick={onBuyNow}
        className="w-full py-2 rounded-xl text-sm font-bold text-black transition-all duration-150 hover:brightness-110"
        style={{ background: network.color }}
      >
        Buy Now
      </button>
    </div>
  )
}
