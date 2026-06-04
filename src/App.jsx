import { useState } from "react"
import BundleGrid from "./components/BundleGrid"
import Header from "./components/Header"
import HeroBanner from "./components/HeroBanner"
import NetworkSelector, { networks } from "./components/NetworkSelector"
import Checkout from "./components/Checkout"
import SuccessScreen from "./components/SuccessScreen"
import HowItWorks from "./components/HowItWorks"

export default function App() {
  const [activeNetId, setActiveNetId] = useState(networks[0].id)
  const [selectedBundle, setSelectedBundle] = useState(null)
  const [isSuccess, setIsSuccess] = useState(false)
  const [providedEmail, setProvidedEmail] = useState("")

  const activeNetwork = networks.find(net => net.id === activeNetId)

  function handleSelectNetwork(id) {
    setActiveNetId(id)
    setSelectedBundle(null)
    setIsSuccess(false)
    setProvidedEmail("")
  }

  function handleBuyNow(bundle) {
    setSelectedBundle(bundle)
    setIsSuccess(false)
  }

  function handleBack() {
    setSelectedBundle(null)
    setIsSuccess(false)
    setProvidedEmail("")
  }

  function handleSuccess(email) {
    setProvidedEmail(email)
    setIsSuccess(true)
  }

  function handleReset() {
    setSelectedBundle(null)
    setIsSuccess(false)
    setProvidedEmail("")
  }

  return (
    <div className="min-h-screen bg-white text-slate-900 font-jakarta">
      <Header />

      <main className="max-w-2xl mx-auto px-4 pb-20 pt-7">
        <HeroBanner />

        <NetworkSelector
          networks={networks}
          activeNetId={activeNetId}
          onSelect={handleSelectNetwork}
        />

        {activeNetwork && !selectedBundle && !isSuccess && (
          <BundleGrid network={activeNetwork} onBuyNow={handleBuyNow} />
        )}

        {!activeNetwork && (
          <div className="mt-4 rounded-2xl border border-dashed border-slate-200 p-12 text-center text-slate-500">
            <div className="text-4xl mb-3">📡</div>
            <p className="font-semibold text-sm">
              Select a network above to view bundles
            </p>
            <p className="text-xs mt-1">MTN · AirtelTigo · Telecel</p>
          </div>
        )}

        {!isSuccess && selectedBundle && activeNetwork && (
          <Checkout
            network={activeNetwork}
            bundle={selectedBundle}
            onBack={handleBack}
            onSuccess={handleSuccess}
          />
        )}
        {isSuccess && activeNetwork && selectedBundle && (
          <SuccessScreen
            network={activeNetwork}
            bundle={selectedBundle}
            email={providedEmail}
            onReset={handleReset}
          />
        )}

        {!selectedBundle && !isSuccess && <HowItWorks />}
      </main>

      <footer className="border-t border-slate-100 py-5 px-4">
        <div className="max-w-2xl mx-auto flex flex-wrap justify-between items-center gap-3">
          <span className="text-xs text-slate-400 font-mono">
            © 2026 DataVault Ghana
          </span>

          <a
            href="https://wa.me/233554264751"
            className="text-xs text-telecel font-semibold hover:underline"
          >
            💬 WhatsApp Support
          </a>

          <span className="text-xs text-slate-400 font-mono">
            INSTANT · SECURE · 24/7
          </span>
        </div>
      </footer>
    </div>
  )
}
