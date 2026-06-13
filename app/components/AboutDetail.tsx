"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"

const CTA = "  https://my-url.in/bcgimmigration"

const trustPills = [
  { icon: "🏛️", label: "CICC Approved", sub: "Fully regulated" },
  { icon: "⚖️", label: "CICC Compliant", sub: "Legally authorized" },
  { icon: "🏅", label: "RCIC R708868", sub: "Licensed consultant" },
  { icon: "📍", label: "Surrey, BC", sub: "British Columbia" },
]

export default function AboutDetail() {
  const sec1 = useRef<HTMLDivElement>(null)
  const inView1 = useInView(sec1, { once: true, margin: "-100px" })
  const sec2 = useRef<HTMLDivElement>(null)
  const inView2 = useInView(sec2, { once: true, margin: "-80px" })

  return (
    <>
      {/* ── Section 1: Two-column ── */}
      <section ref={sec1} className="py-24 px-4 sm:px-8 bg-[#0a1628]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView1 ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[#c9a84c] text-sm font-semibold tracking-[0.3em] uppercase mb-4">
              Who We Are
            </p>
            <h2
              className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight"
              style={{ fontFamily: "var(--font-playfair-display)" }}
            >
              About BCG Immigration
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-[#c9a84c] to-[#e8c76a] rounded-full mb-8" />

            <p className="text-gray-300 leading-relaxed mb-6">
              BCG Immigration Consultancy Ltd. is a fully registered and recognized immigration
              consulting firm based in British Columbia, Canada. Approved by the College of
              Immigration and Citizenship Consultants (CICC), we are legally authorized to offer
              expert advice and professional representation for individuals and families navigating
              the complex landscape of Canadian immigration. Our team is well-versed in all aspects
              of Canadian immigration laws, policies, and procedures, including those outlined under
              the Immigration and Refugee Protection Act (IRPA).
            </p>

            <p className="text-gray-400 leading-relaxed mb-10">
              With a commitment to transparency, integrity, and personalized service, BCG Immigration
              Consultancy Ltd. strives to be your reliable partner on your Canadian immigration
              journey. We are here to answer your questions, address your concerns, and help you turn
              your Canadian dream into a reality.
            </p>

            {/* Trust pills */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              {trustPills.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView1 ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  className="flex gap-3 items-start bg-[#0f2040] border border-[#c9a84c]/15 rounded-xl p-4 hover:border-[#c9a84c]/35 transition-colors"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <div className="text-white text-sm font-semibold">{item.label}</div>
                    <div className="text-gray-500 text-xs">{item.sub}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.a
              href={CTA}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#c9a84c] text-[#0a1628] px-8 py-4 rounded-full font-bold tracking-wide shadow-lg shadow-[#c9a84c]/25"
              whileHover={{ scale: 1.05, boxShadow: "0 0 35px rgba(201,168,76,0.45)" }}
              whileTap={{ scale: 0.97 }}
            >
              Free Assessment
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
          </motion.div>

          {/* Right: image card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView1 ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Drawing border */}
            {inView1 && (
              <svg
                className="absolute -inset-4 w-[calc(100%+32px)] h-[calc(100%+32px)] pointer-events-none z-10"
                viewBox="0 0 400 520"
                preserveAspectRatio="none"
              >
                <rect
                  x="4" y="4" width="392" height="512" rx="24"
                  fill="none" stroke="#c9a84c" strokeWidth="1.5"
                  strokeDasharray="820" strokeDashoffset="820"
                  style={{ animation: "border-draw 2s ease-out 0.4s forwards" }}
                />
              </svg>
            )}

            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
              className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/60"
            >
              <div
                className="w-full h-[500px] flex flex-col items-center justify-center relative"
                style={{
                  background:
                    "linear-gradient(145deg, #0f2040 0%, #071428 50%, #1a3060 100%)",
                }}
              >
                {/* Background rings */}
                <div className="absolute inset-0 flex items-center justify-center opacity-[0.04]">
                  <svg viewBox="0 0 300 300" className="w-96 h-96">
                    {[140, 110, 80, 50].map((r) => (
                      <circle key={r} cx="150" cy="150" r={r} fill="none" stroke="#c9a84c" strokeWidth="1" />
                    ))}
                  </svg>
                </div>

                {/* Maple leaf watermarks */}
                <div className="absolute top-6 right-6 text-5xl opacity-[0.07]">🍁</div>
                <div className="absolute bottom-6 left-6 text-4xl opacity-[0.05]">🍁</div>

                {/* Content */}
                <div className="relative z-10 text-center px-10">
                  <div className="text-8xl mb-6">🍁</div>
                  <p
                    className="text-3xl font-bold text-[#c9a84c] mb-2"
                    style={{ fontFamily: "var(--font-playfair-display)" }}
                  >
                    Your Journey
                  </p>
                  <p
                    className="text-3xl font-bold text-white mb-8"
                    style={{ fontFamily: "var(--font-playfair-display)" }}
                  >
                    Starts Here
                  </p>
                  <div className="w-20 h-0.5 bg-[#c9a84c] mx-auto mb-8" />
                  <p className="text-gray-300 text-sm font-medium">
                    BCG Immigration Consultancy Ltd.
                  </p>
                  <p className="text-gray-500 text-xs mt-1">Surrey, British Columbia, Canada</p>
                  <div className="inline-flex items-center gap-2 bg-[#c9a84c]/10 border border-[#c9a84c]/25 rounded-full px-4 py-1.5 mt-5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c] animate-pulse" />
                    <span className="text-[#c9a84c] text-xs font-semibold tracking-widest uppercase">
                      RCIC Licensed · R708868
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating badge */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={inView1 ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.9, type: "spring", stiffness: 200 }}
              className="absolute -bottom-5 -right-4 bg-[#c9a84c] text-[#0a1628] rounded-2xl p-5 shadow-xl shadow-[#c9a84c]/35 text-center"
            >
              <div
                className="text-xl font-black"
                style={{ fontFamily: "var(--font-playfair-display)" }}
              >
                CICC
              </div>
              <div className="text-[10px] font-bold tracking-widest uppercase mt-0.5">
                Regulated
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Section 2: Get In Touch ── */}
      <section ref={sec2} className="py-24 px-4 sm:px-8 bg-[#050e1a]">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView2 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[#c9a84c] text-sm font-semibold tracking-[0.3em] uppercase mb-3">
              Begin Your Journey
            </p>
            <h2
              className="text-4xl sm:text-5xl font-bold text-white mb-6"
              style={{ fontFamily: "var(--font-playfair-display)" }}
            >
              Ready to Start?
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#c9a84c] to-[#e8c76a] rounded-full mx-auto mb-8" />
            <p className="text-gray-400 text-lg leading-relaxed mb-10">
              Looking to start your immigration journey to Canada? Our team at BCG Immigration
              Consultancy Ltd. is here to assist you every step of the way. Contact us today for
              expert guidance on study visas, work permits, and immigration solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href={CTA}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#c9a84c] text-[#0a1628] px-8 py-4 rounded-full font-bold tracking-wide shadow-lg shadow-[#c9a84c]/25"
                whileHover={{ scale: 1.05, boxShadow: "0 0 35px rgba(201,168,76,0.45)" }}
                whileTap={{ scale: 0.97 }}
              >
                Free Assessment
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.a>
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 border-2 border-[#c9a84c]/50 text-white px-8 py-4 rounded-full font-semibold hover:border-[#c9a84c] hover:bg-[#c9a84c]/10 transition-all"
                >
                  Contact Us
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
