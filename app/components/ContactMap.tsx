"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

export default function ContactMap() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section ref={ref} className="py-16 px-4 sm:px-8 bg-[#0a1628]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        

        {/* Map container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative rounded-2xl overflow-hidden border border-[#c9a84c]/20 shadow-2xl shadow-black/40"
          style={{ height: "460px" }}
        >
          <iframe
            src="https://maps.google.com/maps?q=18267+64+Ave,+Surrey,+BC+V3S+0M3,+Canada&output=embed&z=15"
            width="100%"
            height="100%"
            style={{
              border: 0,
              filter: "invert(93%) hue-rotate(180deg) saturate(0.75) brightness(0.88)",
            }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="BCG Immigration Office — 18267 64 Ave, Surrey BC"
          />

          {/* Border overlay */}
          <div className="absolute inset-0 pointer-events-none border border-[#c9a84c]/20 rounded-2xl" />

          {/* Address pin overlay */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="absolute bottom-4 left-4 bg-[#0a1628]/95 backdrop-blur-sm border border-[#c9a84c]/25 rounded-xl px-4 py-3 flex items-center gap-3 shadow-lg"
          >
            <span className="text-xl">📍</span>
         
          </motion.div>
        </motion.div>

        {/* Quick contact row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 grid sm:grid-cols-3 gap-4"
        >
          {[
            {
              icon: "📞",
              label: "Primary",
              value: "+1 (604) 203-1200",
              href: "tel:+16042031200",
            },
            {
              icon: "📱",
              label: "Secondary",
              value: "+1 (604) 203-1200",
              href: "tel:+16042031200",
            },
            {
              icon: "✉️",
              label: "Email",
              value: "cj.bcgimmigration@gmail.com",
              href: "mailto:cj.bcgimmigration@gmail.com",
            },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="flex items-center gap-4 bg-[#0f2040] border border-[#c9a84c]/15 rounded-xl px-5 py-4 hover:border-[#c9a84c]/40 hover:bg-[#c9a84c]/5 transition-all group"
            >
              <span className="text-2xl">{item.icon}</span>
              <div>
                <div className="text-[#c9a84c] text-xs font-semibold tracking-widest uppercase mb-0.5">
                  {item.label}
                </div>
                <div className="text-white text-sm font-medium group-hover:text-[#c9a84c] transition-colors">
                  {item.value}
                </div>
              </div>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
