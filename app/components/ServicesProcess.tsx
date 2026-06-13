"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const steps = [
  {
    num: "01",
    title: "Direct Interview",
    desc: "BCG Immigration Consultancy Ltd. offers direct interview assistance, guiding applicants through seamless visa and work permit approval processes.",
    icon: "🎤",
  },
  {
    num: "02",
    title: "Faster Processing",
    desc: "BCG Immigration Consultancy Ltd. ensures faster processing of study visas and work permits with expert guidance and efficient application handling.",
    icon: "⚡",
  },
  {
    num: "03",
    title: "Visa Assistance",
    desc: "BCG Immigration Consultancy Ltd. provides expert visa assistance, guiding applicants through every step for a smooth and hassle-free approval process.",
    icon: "📋",
  },
  {
    num: "04",
    title: "Cost Effective",
    desc: "BCG Immigration Consultancy Ltd. offers cost-effective immigration solutions, ensuring quality services for study visas and work permits within your budget.",
    icon: "💰",
  },
]

function StepRow({ step, index }: { step: (typeof steps)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-10 py-16 border-b border-[#c9a84c]/10 last:border-0 group cursor-default"
    >
      {/* Large number block */}
      <div className="relative shrink-0 w-40 h-28 flex items-center justify-start">
        {/* Huge watermark */}
        <span
          className="absolute text-[160px] font-black leading-none select-none pointer-events-none"
          style={{
            fontFamily: "var(--font-playfair-display)",
            color: "#c9a84c",
            opacity: inView ? 0.07 : 0,
            transition: "opacity 1s ease 0.3s",
            top: "50%",
            left: "0",
            transform: "translateY(-50%)",
          }}
        >
          {step.num}
        </span>

        {/* Foreground number */}
        <motion.span
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.25, type: "spring", stiffness: 160 }}
          className="relative text-7xl sm:text-[88px] font-black text-[#c9a84c] leading-none"
          style={{ fontFamily: "var(--font-playfair-display)" }}
        >
          {step.num}
        </motion.span>
      </div>

      {/* Vertical divider */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={inView ? { scaleY: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.35 }}
        className="hidden sm:block w-px h-24 bg-gradient-to-b from-[#c9a84c]/60 to-transparent origin-top shrink-0"
      />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.65, delay: 0.4 }}
        className="flex-1 min-w-0"
      >
        <div className="flex items-center gap-3 mb-4">
          <span className="text-3xl">{step.icon}</span>
          <h3
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight"
            style={{ fontFamily: "var(--font-playfair-display)" }}
          >
            {step.title}
          </h3>
        </div>
        <p className="text-gray-400 leading-relaxed text-base max-w-xl">{step.desc}</p>

        {/* Hover underline */}
        <div className="mt-5 w-0 h-0.5 bg-gradient-to-r from-[#c9a84c] to-[#e8c76a] group-hover:w-28 transition-all duration-500 rounded-full" />
      </motion.div>
    </motion.div>
  )
}

export default function ServicesProcess() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section ref={ref} className="py-24 px-4 sm:px-8 bg-[#050e1a] relative overflow-hidden">
      {/* Background radial */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 60%, rgba(201,168,76,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-4"
        >
          <p className="text-[#c9a84c] text-sm font-semibold tracking-[0.3em] uppercase mb-3">
            Why Choose Us
          </p>
          <h2
            className="text-4xl sm:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-playfair-display)" }}
          >
            How We Serve You
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#c9a84c] to-[#e8c76a] rounded-full mx-auto" />
        </motion.div>

        {/* Steps */}
        <div>
          {steps.map((step, i) => (
            <StepRow key={step.num} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
