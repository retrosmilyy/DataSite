import BundleGrid from "./components/BundleGrid"
import Header from "./components/Header"
import HeroBanner from "./components/HeroBanner"
import NetworkSelector from "./components/NetworkSelector"

export default function App() {
  return (
    <div>
      <Header />
      <HeroBanner />
      <NetworkSelector />
      <BundleGrid />
    </div>
  )
}
