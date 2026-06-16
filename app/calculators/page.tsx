"use client"

import { useEffect, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"

const PROVINCES = [
  { id: "bc", emoji: "🍁", label: "BC PNP", file: "bcpnp-calculator.html" },
  { id: "alberta", emoji: "🏔", label: "Alberta AAIP", file: "alberta-pnp-calculator.html" },
  { id: "sk", emoji: "🌾", label: "Saskatchewan", file: "saskatchewan-pnp-calculator.html" },
  { id: "mb", emoji: "🦬", label: "Manitoba", file: "manitoba-pnp-calculator.html" },
  { id: "on", emoji: "🏙", label: "Ontario", file: "ontario-pnp-calculator.html" },
  { id: "ns", emoji: "⚓", label: "Nova Scotia", file: "novascotia-pnp-calculator.html" },
  { id: "nb", emoji: "🌲", label: "New Brunswick", file: "newbrunswick-pnp-calculator.html" },
  { id: "yukon", emoji: "❄️", label: "Yukon", file: "yukon-pnp-calculator.html" },
  { id: "aip", emoji: "🌊", label: "Atlantic AIP", file: "atlantic-aip-calculator.html" },
]

export default function Calculators() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [active, setActive] = useState("bc")

  useEffect(() => {
    const p = searchParams.get("province")
    if (p && PROVINCES.find((x) => x.id === p)) {
      setActive(p)
    }
  }, [searchParams])

  const handleTab = (id: string) => {
    setActive(id)
    router.push(`/calculators?province=${id}`)
  }

  const current = PROVINCES.find((p) => p.id === active) || PROVINCES[0]

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh", overflow: "hidden" }}>
      <div
        style={{
          background: "#0D1F35",
          padding: "10px 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexShrink: 0,
          gap: "12px",
          flexWrap: "wrap",
          zIndex: 100,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div
            style={{
              width: "32px",
              height: "32px",
              background: "#C8993A",
              borderRadius: "7px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 800,
              fontSize: "12px",
              color: "#0D1F35",
              flexShrink: 0,
            }}
          >
            BCG
          </div>
          <span style={{ color: "#fff", fontWeight: 700, fontSize: "15px" }}>
            BCG <span style={{ color: "#C8993A" }}>Immigration</span>
            <span style={{ color: "rgba(255,255,255,0.5)", fontWeight: 400, fontSize: "13px" }}>
              {" "}
              — PNP Calculators 2026
            </span>
          </span>
        </div>

        <a
          href="tel:+17788969552"
          style={{
            background: "#C8993A",
            color: "#0D1F35",
            padding: "8px 16px",
            borderRadius: "8px",
            fontWeight: 800,
            fontSize: "13px",
            textDecoration: "none",
            whiteSpace: "nowrap",
            letterSpacing: "-0.01em",
            display: "flex",
            alignItems: "center",
            gap: "6px",
          }}
        >
          📞 +1 (778) 896-9552
        </a>
      </div>

      <div
        style={{
          background: "#162d4f",
          borderBottom: "2px solid #C8993A",
          overflowX: "auto",
          flexShrink: 0,
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          WebkitOverflowScrolling: "touch",
        }}
      >
        <div style={{ display: "flex", padding: "0 8px", minWidth: "max-content" }}>
          {PROVINCES.map((p) => (
            <button
              key={p.id}
              onClick={() => handleTab(p.id)}
              style={{
                background: active === p.id ? "#C8993A" : "transparent",
                color: active === p.id ? "#0D1F35" : "rgba(255,255,255,0.65)",
                border: "none",
                padding: "11px 16px",
                fontSize: "12px",
                fontWeight: active === p.id ? 800 : 600,
                cursor: "pointer",
                whiteSpace: "nowrap",
                borderBottom: active === p.id ? "3px solid #C8993A" : "3px solid transparent",
                transition: "all 0.15s",
                fontFamily: "inherit",
                display: "flex",
                alignItems: "center",
                gap: "5px",
              }}
            >
              <span>{p.emoji}</span>
              <span>{p.label}</span>
            </button>
          ))}
        </div>
      </div>

      <iframe
        key={current.file}
        src={`/calculators/${current.file}`}
        style={{
          width: "100%",
          flex: 1,
          border: "none",
          display: "block",
        }}
        title={`${current.label} Points Calculator 2026`}
      />
    </div>
  )
}
