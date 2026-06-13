"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const CTA = "  https://my-url.in/bcgimmigration"

const reasons = [
  {
    icon: "🏅",
    title: "RCIC Licensed & CICC Regulated",
    desc: "Every case is handled directly by our RCIC (License R708868). You get authorised advice — not guesswork — under IRPA and CICC standards.",
  },
  {
    icon: "📈",
    title: "Good Approval Rate",
    desc: "Our meticulous document review and deep knowledge of IRCC requirements has earned us a good success rate across all visa and permit categories.",
  },
  {
    icon: "🤝",
    title: "Truly Personalised Guidance",
    desc: "No templates. Every client gets a custom immigration strategy built around their unique profile, goals, and timeline — not a one-size-fits-all form.",
  },
  {
    icon: "🔍",
    title: "Honest & Transparent",
    desc: "We tell you the truth about your options. Clear timelines, realistic expectations, and no hidden fees — from the very first conversation.",
  },
  {
    icon: "🌐",
    title: "Multilingual Support",
    desc: "Our team communicates in English, Punjabi, Hindi, and more — ensuring nothing is lost in translation throughout your immigration journey.",
  },
  {
    icon: "⚡",
    title: "Fast & Accurate Submissions",
    desc: "We understand urgency. Our streamlined process and deep IRCC familiarity mean your application is submitted correctly and promptly, every time.",
  },
]

export default function WhyChooseUs() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section id="why-us" ref={ref} className="py-24 px-4 sm:px-8 bg-[#0a1628] relative overflow-hidden">
      {/* Subtle radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(201,168,76,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="text-center mb-16"
        >
          <p className="text-[#c9a84c] text-sm font-semibold tracking-[0.3em] uppercase mb-3">
            Our Advantage
          </p>
          <h2
            className="text-4xl sm:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-playfair-display)" }}
          >
            Why Choose BCG Immigration?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Hundreds of clients have trusted us with their Canadian immigration journey.
            Here is what sets BCG apart.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-[#c9a84c] to-[#e8c76a] rounded-full mx-auto mt-4" />
        </motion.div>

        {/* Reasons grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.05 + i * 0.08 }}
              whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.35)" }}
              className="bg-[#0f2040] border border-[#c9a84c]/15 rounded-2xl p-7 group hover:border-[#c9a84c]/40 transition-colors"
            >
              <motion.div
                className="text-4xl mb-4 inline-block"
                whileHover={{ scale: 1.15, rotate: [0, -8, 8, 0] }}
                transition={{ duration: 0.4 }}
              >
                {reason.icon}
              </motion.div>
              <h3
                className="text-white font-bold text-lg mb-3 leading-snug"
                style={{ fontFamily: "var(--font-playfair-display)" }}
              >
                {reason.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">{reason.desc}</p>
              {/* Animated underline on hover */}
              <div className="mt-5 w-0 h-0.5 bg-gradient-to-r from-[#c9a84c] to-[#e8c76a] group-hover:w-full transition-all duration-500 rounded-full" />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="text-center"
        >
          <motion.a
            href={CTA}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#c9a84c] text-[#0a1628] px-10 py-4 rounded-full font-bold text-base tracking-wide shadow-xl shadow-[#c9a84c]/25"
            whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(201,168,76,0.45)" }}
            whileTap={{ scale: 0.97 }}
          >
            Start Your Free Assessment
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
