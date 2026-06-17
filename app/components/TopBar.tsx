"use client"

import { useEffect, useRef, useState } from "react"

const CTA = "  https://my-url.in/bcgimmigration"

export default function TopBar() {
  const phoneRef = useRef<HTMLAnchorElement>(null)
  const [shaking, setShaking] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setShaking(true)
      setTimeout(() => setShaking(false), 700)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-[#050e1a] border-b border-[#c9a84c]/20 text-sm py-2 px-4 z-50 relative">
      <div className="max-w-7xl mx-auto flex flex-row items-center justify-between gap-2">
        <div className="flex items-center gap-3 text-gray-300 min-w-0">
          <a
            ref={phoneRef}
            href="tel:+16042031200"
            className={`flex items-center gap-1.5 hover:text-[#c9a84c] transition-colors shrink-0 ${shaking ? "phone-shake" : ""}`}
          >
            <svg className="w-3.5 h-3.5 text-[#c9a84c]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
            </svg>
            +1 (604) 203-1200
          </a>
          <span className="text-[#c9a84c]/40 hidden sm:inline">|</span>
          <a
            href="mailto:cj.bcgimmigration@gmail.com"
            className="hidden sm:flex items-center gap-1.5 hover:text-[#c9a84c] transition-colors"
          >
            <svg className="w-3.5 h-3.5 text-[#c9a84c]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
            cj.bcgimmigration@gmail.com
          </a>
        </div>
        <div className="flex items-center gap-1.5 text-gray-400 shrink-0">
          <svg className="w-3.5 h-3.5 text-[#c9a84c]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm.5 5v5.25l4.5 2.67-.75 1.23L11 13V7h1.5z"/>
          </svg>
          <span className="text-xs whitespace-nowrap">Mon–Sat 9AM–6PM</span>
        </div>
      </div>
    </div>
  )
}
