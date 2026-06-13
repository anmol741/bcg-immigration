"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const CTA = "  https://my-url.in/bcgimmigration"

export default function CTABanner() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section ref={ref} className="py-6 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.4 }}
          className="relative rounded-3xl overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #c9a84c 0%, #e8c76a 40%, #a07830 70%, #c9a84c 100%)",
            backgroundSize: "200% 200%",
            animation: "gradient-bg 4s ease infinite",
          }}
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 opacity-10">
            <svg viewBox="0 0 200 200" fill="white">
              <circle cx="100" cy="100" r="100" />
            </svg>
          </div>
          <div className="absolute -bottom-8 -left-8 w-48 h-48 opacity-10">
            <svg viewBox="0 0 200 200" fill="white">
              <circle cx="100" cy="100" r="100" />
            </svg>
          </div>

          {/* Maple leaf decoration */}
          <div className="absolute top-4 right-20 text-5xl opacity-15 text-white">🍁</div>
          <div className="absolute bottom-4 left-20 text-3xl opacity-10 text-white">🍁</div>

          <div className="relative z-10 py-10 px-5 sm:py-14 sm:px-8 text-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-[#0a1628]/70 text-sm font-semibold tracking-[0.3em] uppercase mb-3"
            >
              Take The First Step
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0a1628] mb-4"
              style={{ fontFamily: "var(--font-playfair-display)" }}
            >
              Ready to Start Your Canada Journey?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="text-[#0a1628]/70 text-base mb-8 max-w-xl mx-auto"
            >
              Book your  consultation today and let our licensed RCIC guide you to a
              successful Canadian immigration journey.
            </motion.p>
            <motion.a
              href={CTA}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.25 }}
              whileHover={{ scale: 1.07, boxShadow: "0 20px 50px rgba(10,22,40,0.5)" }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 bg-[#0a1628] text-[#c9a84c] px-10 py-4 rounded-full font-bold text-base tracking-wide shadow-2xl shadow-black/30"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"/>
              </svg>
              Book  Consultation
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
