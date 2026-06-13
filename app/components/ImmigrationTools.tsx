"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const tools = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V13.5zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V18zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V13.5zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V18zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V18zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.616 4.5 4.705V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.705c0-1.09-.707-2.006-1.757-2.133A48.205 48.205 0 0012 2.25z" />
      </svg>
    ),
    title: "CRS Score Calculator",
    description:
      "Check your Comprehensive Ranking System score for Express Entry. Calculate your points instantly using the official IRCC tool.",
    button: "Calculate My Score",
    href: "https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/check-score.html#calculator",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    title: "BC PNP Points Calculator",
    description:
      "Calculate your points for the British Columbia Provincial Nominee Program Skills Immigration stream with this comprehensive BC PNP points calculator.",
    button: "Calculate BC PNP Points",
    href: "https://immicalculator.com/bc-pnp-points-calculator/",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 15.803 7.5 7.5 0 0016.803 15.803z" />
      </svg>
    ),
    title: "Find a Licensed Consultant",
    description:
      "Verify your immigration consultant is licensed and in good standing with CICC — the official regulator of immigration consultants.",
    button: "Search CICC Registry",
    href: "https://college-ic.ca/protecting-the-public/find-an-immigration-consultant",
  },
]

export default function ImmigrationTools() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section ref={ref} className="py-24 px-4 sm:px-8 bg-[#0a1628]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="text-center mb-16"
        >
          <p className="text-[#c9a84c] text-sm font-semibold tracking-[0.3em] uppercase mb-3">
            Official Resources
          </p>
          <h2
            className="text-4xl sm:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-playfair-display)" }}
          >
            Immigration Tools &amp; Calculators
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Use these official government and CICC tools to check your eligibility and verify consultants.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-[#c9a84c] to-[#e8c76a] rounded-full mx-auto mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool, i) => (
            <motion.div
              key={tool.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.05 + i * 0.1 }}
              whileHover={{ y: -6, boxShadow: "0 20px 60px rgba(201,168,76,0.18)" }}
              className="relative bg-[#0f2040] border border-[#c9a84c]/25 rounded-2xl p-8 flex flex-col gap-5 cursor-default transition-shadow"
            >
              {/* Gold top accent bar */}
              <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-[#c9a84c] to-transparent rounded-full" />

              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-[#c9a84c]/10 border border-[#c9a84c]/20 flex items-center justify-center text-[#c9a84c]">
                {tool.icon}
              </div>

              {/* Title */}
              <h3
                className="text-white font-bold text-xl leading-tight"
                style={{ fontFamily: "var(--font-playfair-display)" }}
              >
                {tool.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed flex-1">
                {tool.description}
              </p>

              {/* Button */}
              <a
                href={tool.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#c9a84c] hover:bg-[#e8c76a] text-[#0a1628] font-bold text-sm px-6 py-3 rounded-full transition-colors duration-200 tracking-wide mt-auto"
              >
                {tool.button}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </motion.div>
          ))}
        </div>

        {/* Disclaimer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="text-center text-gray-500 text-xs mt-10 max-w-2xl mx-auto leading-relaxed"
        >
          These tools are provided by official Government of Canada and CICC sources. BCG Immigration is not responsible for third-party calculator results.
        </motion.p>
      </div>
    </section>
  )
}
