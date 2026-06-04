export default Checkout() {

}import { useState } from 'react'

export default function Checkout({ network, bundle, onBack, onSuccess }) {
  const [phone, setPhone]       = useState('')
  const [email, setEmail]       = useState('')
  const [phoneErr, setPhoneErr] = useState('')
  const [emailErr, setEmailErr] = useState('')

  function validate() {
    let ok = true
    const clean = phone.replace(/\s/g, '')

    if (clean.length < 10) {
      setPhoneErr('Enter a valid 10-digit Ghana number')
      ok = false
    } else if (!network.prefixes.some((p) => clean.startsWith(p))) {
      setPhoneErr(`${network.name} numbers start with: ${network.prefixes.join(', ')}`)
      ok = false
    } else {
      setPhoneErr('')
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailErr('Enter a valid email address')
      ok = false
    } else {
      setEmailErr('')
    }

    if (ok) onSuccess()
  }

  return (
    <div className="animate-fadein">
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-sm text-muted hover:text-[#EEF0F5] transition-colors mb-5"
      >
        ← Back to bundles
      </button>

      <p className="text-[11px] font-mono text-[#4a5568] tracking-widest mb-4">
        STEP 3 — ENTER DETAILS &amp; PAY
      </p>

      {/* Order summary */}
      <div
        className="flex items-center gap-4 rounded-2xl p-5 mb-5 border"
        style={{
          background: network.bg,
          borderColor: network.color + '33',
        }}
      >
        <div
          className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0 border"
          style={{ background: network.color + '22', borderColor: network.color + '44' }}
        >
          <span className="font-extrabold text-base" style={{ color: network.color }}>
            {bundle.gb}
          </span>
        </div>
        <div className="flex-1">
          <p className="font-bold text-sm">{network.name} {bundle.gb} Bundle</p>
          <p className="text-xs text-muted mt-0.5">{network.label} · Non-Expiry</p>
        </div>
        <p className="font-extrabold text-xl" style={{ color: network.color }}>
          ₵{bundle.price.toFixed(2)}
        </p>
      </div>

      {/* Form */}
      <div className="flex flex-col gap-4">
        <div>
          <label className="block text-xs font-semibold text-muted font-mono tracking-wider mb-2">
            RECIPIENT PHONE NUMBER
          </label>
          <input
            type="tel"
            placeholder={`e.g. ${network.prefixes[0]} XXX XXXX`}
            value={phone}
            maxLength={15}
            onChange={(e) => { setPhone(e.target.value); setPhoneErr('') }}
            className="w-full px-4 py-3 rounded-xl bg-surface text-[#EEF0F5] text-base font-mono border transition-colors"
            style={{ borderColor: phoneErr ? '#FF3B30' : '#1a2030' }}
          />
          {phoneErr && (
            <p className="text-xs text-[#FF3B30] mt-1.5">⚠ {phoneErr}</p>
          )}
          <p className="text-xs text-[#3a4555] mt-1.5">
            Valid prefixes: {network.prefixes.join(', ')}
          </p>
        </div>

        <div>
          <label className="block text-xs font-semibold text-muted font-mono tracking-wider mb-2">
            YOUR EMAIL ADDRESS
          </label>
          <input
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => { setEmail(e.target.value); setEmailErr('') }}
            className="w-full px-4 py-3 rounded-xl bg-surface text-[#EEF0F5] text-sm border transition-colors"
            style={{ borderColor: emailErr ? '#FF3B30' : '#1a2030' }}
          />
          {emailErr && (
            <p className="text-xs text-[#FF3B30] mt-1.5">⚠ {emailErr}</p>
          )}
          <p className="text-xs text-[#3a4555] mt-1.5">
            Receipt and confirmation will be sent here.
          </p>

        <div className="flex justify-between items-center rounded-xl bg-surface border border-border px-4 py-3.5">
          <div>
            <p className="text-[11px] text-muted font-mono">ORDER TOTAL</p>
            <p className="text-xs text-muted mt-1">{network.name} · {bundle.gb}</p>
          </div>
          <p className="font-extrabold text-2xl" style={{ color: network.color }}>
            ₵{bundle.price.toFixed(2)}
          </p>
        </div>

        <button
          onClick={validate}
          className="w-full py-4 rounded-2xl font-extrabold text-base text-black transition-all hover:brightness-110 hover:-translate-y-0.5 active:translate-y-0"
          style={{
            background: `linear-gradient(120deg, ${network.color}, ${network.color}cc)`,
            boxShadow: `0 4px 20px ${network.color}40`,
          }}
        >
          Pay ₵{bundle.price.toFixed(2)} &amp; Get Data →
        </button>

        <p className="text-center text-xs text-[#2e3a4a] flex items-center justify-center gap-1.5">
          🔒 Secured via Paystack · SSL Encrypted
        </p>
      </div>
    </div>
  }