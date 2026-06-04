import BundleCard from "./BundleCard.jsx"

export default function BundleGrid({ network, onBuyNow }) {
  return (
    <div className="animate-fadein">
      <p className="text-[11px] font-mono text-[#4a5568] tracking-widest mb-4">
        STEP 2 — CHOOSE BUNDLE ·{" "}
        <span style={{ color: network.color }}>
          {network.name} {network.label}
        </span>{" "}
        · {network.bundles.length} packages
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {network.bundles.map((bundle, i) => (
          <BundleCard
            key={i}
            bundle={bundle}
            network={network}
            onBuyNow={() => onBuyNow(bundle)}
          />
        ))}
      </div>
    </div>
  )
}
