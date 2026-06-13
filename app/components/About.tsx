"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

export default function About() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" ref={ref} className="py-24 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="text-center mb-16"
        >
          <p className="text-[#c9a84c] text-sm font-semibold tracking-[0.3em] uppercase mb-3">
            Who Are We?
          </p>
          <h2
            className="text-4xl sm:text-5xl font-bold text-white"
            style={{ fontFamily: "var(--font-playfair-display)" }}
          >
            About BCG Immigration
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#c9a84c] to-[#e8c76a] rounded-full mx-auto mt-4" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <p className="text-xl text-gray-200 mb-6 leading-relaxed font-medium">
              One of the leading immigration consultancy  in the Canada region for{" "}
               <span className="text-[#c9a84c]">PR</span> {"    "}
              <span className="text-[#c9a84c]">Study Visas</span> and{" "}
              <span className="text-[#c9a84c]">Work Permits</span>.
            </p>
            <p className="text-gray-400 mb-8 leading-relaxed text-base">
              BCG Immigration Consultancy Ltd. is a registered corporation in British Columbia
              and approved by CICC to provide expert advice on Canadian immigration laws under
              IRPA. Our licensed RCIC (Regulated Canadian Immigration Consultant) brings years
              of hands-on experience navigating complex immigration pathways to help clients
              achieve their Canadian dreams with confidence.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-8">
              {[
                { label: "RCIC License", value: "R708868" },
                { label: "Regulated By", value: "CICC" },
                { label: "Province", value: "British Columbia" },
                { label: "Established", value: "2021" },
              ].map((item) => (
                <div key={item.label} className="bg-[#0f2040] rounded-xl p-4 border border-[#c9a84c]/15">
                  <div className="text-[#c9a84c] font-bold text-lg">{item.value}</div>
                  <div className="text-gray-400 text-sm mt-0.5">{item.label}</div>
                </div>
              ))}
            </div>
            <motion.a
              href="https://my-url.in/bcgimmigration"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#c9a84c] text-[#0a1628] px-7 py-3.5 rounded-full font-bold tracking-wide shadow-lg shadow-[#c9a84c]/25"
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(201,168,76,0.4)" }}
              whileTap={{ scale: 0.97 }}
            >
             Book Consultation
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
          </motion.div>

          {/* Image column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="relative pb-8 sm:pb-0"
          >
            {/* Decorative SVG border that "draws" itself */}
            {isInView && (
              <svg
                className="absolute -inset-4 w-[calc(100%+32px)] h-[calc(100%+32px)] pointer-events-none z-10"
                viewBox="0 0 400 420"
                preserveAspectRatio="none"
              >
                <rect
                  x="4"
                  y="4"
                  width="392"
                  height="412"
                  rx="20"
                  fill="none"
                  stroke="#c9a84c"
                  strokeWidth="2"
                  strokeDasharray="600"
                  strokeDashoffset="600"
                  style={{
                    animation: "border-draw 0.8s ease-out 0.3s forwards",
                  }}
                />
              </svg>
            )}

            {/* Floating image card */}
            <motion.div
              animate={{ y: [0, -16, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/50"
            >
              <div
                className="w-full h-96 relative flex items-center justify-center"
                style={{
                  background:
                    "linear-gradient(135deg, #0f2040 0%, #0a1628 40%, #1a3060 70%, #0f2040 100%)",
                }}
              >
                {/* Decorative Canada-themed art */}
                <div className="absolute inset-0 flex items-center justify-center opacity-10">
                  <svg viewBox="0 0 200 200" className="w-64 h-64" fill="#c9a84c">
                    <path d="M100 15 L115 55 L155 55 L125 80 L135 120 L100 95 L65 120 L75 80 L45 55 L85 55 Z" />
                    <circle cx="100" cy="100" r="85" fill="none" stroke="#c9a84c" strokeWidth="2" opacity="0.3" />
                    <circle cx="100" cy="100" r="70" fill="none" stroke="#c9a84c" strokeWidth="1" opacity="0.2" />
                  </svg>
                </div>

                {/* Maple leaf watermark */}
                <div className="absolute top-6 right-6 text-6xl opacity-10">🍁</div>
                <div className="absolute bottom-6 left-6 text-4xl opacity-10">🍁</div>

                {/* Main content */}
                <div className="relative z-10 text-center px-8">
                  <div className="text-6xl mb-4">🍁</div>
                  <p
                    className="text-2xl font-bold text-[#c9a84c] mb-2"
                    style={{ fontFamily: "var(--font-playfair-display)" }}
                  >
                    Your Success is
                  </p>
                  <p
                    className="text-2xl font-bold text-white"
                    style={{ fontFamily: "var(--font-playfair-display)" }}
                  >
                    Our Success
                  </p>
                  <div className="w-16 h-0.5 bg-[#c9a84c] mx-auto mt-4 mb-4" />
                  <p className="text-gray-400 text-sm">
                    BCG Immigration Consultancy Ltd.
                  </p>
                  <p className="text-[#c9a84c] text-xs mt-1">Surrey, British Columbia</p>
                </div>
              </div>
            </motion.div>

            {/* Floating badge */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="absolute -bottom-4 left-2 sm:-bottom-6 sm:-left-6 bg-[#c9a84c] text-[#0a1628] rounded-2xl p-4 shadow-xl shadow-[#c9a84c]/30"
            >
              <div className="text-2xl font-bold" style={{ fontFamily: "var(--font-playfair-display)" }}>4+</div>
              <div className="text-xs font-semibold">Years of Trust</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
