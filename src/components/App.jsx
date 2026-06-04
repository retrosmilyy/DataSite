import { useState } from "react"
import BundleGrid from "./components/BundleGrid"
import Header from "./components/Header"
import HeroBanner from "./components/HeroBanner"
import NetworkSelector, { networks } from "./components/NetworkSelector"
import BundleCard from "./components/BundleCard"

export default function App() {
  const [activeNetId, setActiveNetId] = useState(null)
  const activeNetwork = networks.find(net => net.id === activeNetId)

  return (
    <div>
      <Header />
      <HeroBanner />
      <NetworkSelector activeNetId={activeNetId} onSelect={setActiveNetId} />
      {activeNetwork && (
        <BundleGrid
          network={activeNetwork}
          onBuyNow={bundle => console.log("Buying", bundle)}
        />
      )}
      <BundleCard />
    </div>
  )
}
