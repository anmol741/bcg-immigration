"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const CTA = "  https://my-url.in/bcgimmigration"

const cards = [
  {
    icon: "🎓",
    num: "01",
    title: "Student Visa",
    subtitle: "Study Permit",
    description:
      "A student visa, also termed as the study permit, refers to an official document that gives you the access to pursue international study in Canada for a predetermined time.",
    features: [
      "Universities & Colleges",
      "Language Schools",
      "Vocational Programs",
      "Post-Graduation Work Permit",
    ],
  },
  {
    icon: "💼",
    num: "02",
    title: "Work Permits & LMIA",
    subtitle: "Canadian Work Authorization",
    description:
      "If you wish to work in Canada you might be eligible to obtain a Work Permit. Work Permits are granted to foreign workers to fill temporary shortages of labour or help families reunite in Canada.",
    features: [
      "Open Work Permits",
      "Employer-Specific Permits",
      "LMIA Applications",
      "Intra-Company Transfers",
    ],
  },
]

export default function ServicesCards() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section ref={ref} className="py-24 px-4 sm:px-8 bg-[#0a1628]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#c9a84c] text-sm font-semibold tracking-[0.3em] uppercase mb-3">
            How We Help Clients
          </p>
          <h2
            className="text-4xl sm:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-playfair-display)" }}
          >
            Level With Great Visa Serving Policies
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            At BCG, our primary objective is to consistently deliver exceptional immigration
            services that ensure a high level of customer satisfaction.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-[#c9a84c] to-[#e8c76a] rounded-full mx-auto mt-5" />
        </motion.div>

        {/* Cards */}
        <div className="grid lg:grid-cols-2 gap-10">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 60 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.2 }}
              whileHover={{ y: -8, boxShadow: "0 30px 60px rgba(0,0,0,0.5)" }}
              className="relative bg-[#0f2040] border border-[#c9a84c]/20 rounded-3xl p-10 overflow-hidden group hover:border-[#c9a84c]/50 transition-all duration-500"
            >
              {/* Glow overlay on hover */}
              <div className="absolute inset-0 bg-[#c9a84c]/0 group-hover:bg-[#c9a84c]/[0.02] transition-colors duration-500 rounded-3xl pointer-events-none" />

              {/* Watermark number */}
              <div
                className="absolute top-2 right-6 text-[130px] font-black leading-none pointer-events-none select-none"
                style={{
                  fontFamily: "var(--font-playfair-display)",
                  color: "#c9a84c",
                  opacity: 0.05,
                }}
              >
                {card.num}
              </div>

              <div className="relative z-10">
                {/* Icon + title */}
                <div className="flex items-center gap-5 mb-7">
                  <div className="w-16 h-16 rounded-2xl bg-[#c9a84c]/10 border border-[#c9a84c]/25 flex items-center justify-center text-4xl shrink-0">
                    {card.icon}
                  </div>
                  <div>
                    <div className="text-[#c9a84c] text-xs font-semibold tracking-widest uppercase mb-1">
                      {card.subtitle}
                    </div>
                    <h3
                      className="text-white text-2xl font-bold"
                      style={{ fontFamily: "var(--font-playfair-display)" }}
                    >
                      {card.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-400 leading-relaxed mb-8 text-sm">{card.description}</p>

                {/* Feature list */}
                <ul className="space-y-3 mb-9">
                  {card.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm text-gray-300">
                      <span className="w-5 h-5 rounded-full bg-[#c9a84c]/15 border border-[#c9a84c]/30 flex items-center justify-center shrink-0">
                        <svg
                          className="w-3 h-3 text-[#c9a84c]"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2.5}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <motion.a
                  href={CTA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#c9a84c] text-[#0a1628] px-7 py-3 rounded-full font-bold text-sm tracking-wide shadow-lg shadow-[#c9a84c]/20"
                  whileHover={{ scale: 1.04, boxShadow: "0 0 25px rgba(201,168,76,0.4)" }}
                  whileTap={{ scale: 0.97 }}
                >
                  Read More
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.a>
              </div>

              {/* Bottom glow bar */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
