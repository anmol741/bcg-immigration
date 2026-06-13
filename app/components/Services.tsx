"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"

const CTA = "  https://my-url.in/bcgimmigration"

interface Service {
  title: string
  icon: string
  desc: string
  back: string
}

const services: Service[] = [
  {
    title: "Student Visa / Study Permit",
    icon: "🎓",
    desc: "Study in Canada at world-class institutions",
    back: "We guide you through the entire student visa process, from choosing the right institution to receiving your study permit approval.",
  },
  {
    title: "Work Permits & LMIA",
    icon: "💼",
    desc: "Obtain your Canadian work authorization",
    back: "Expert assistance with open and closed work permits, LMIA applications, and employer-specific work permit streams.",
  },
  {
    title: "Permanent Residency",
    icon: "🏡",
    desc: "Make Canada your permanent home",
    back: "Navigate the various PR pathways including skilled worker programs, family sponsorship, and provincial nominee programs.",
  },
  {
    title: "Express Entry",
    icon: "⚡",
    desc: "Fast-track your immigration to Canada",
    back: "Maximize your CRS score and receive an Invitation to Apply through the Federal Skilled Worker, CEC, or Federal Skilled Trades programs.",
  },
  {
    title: "Provincial Nominee Program",
    icon: "🗺️",
    desc: "Province-specific immigration streams",
    back: "Explore targeted immigration pathways through BC PNP, Ontario Immigrant Nominee Program, and other provincial streams.",
  },
  {
    title: "Family Sponsorship",
    icon: "👨‍👩‍👧‍👦",
    desc: "Reunite with your loved ones in Canada",
    back: "Bring your spouse, children, parents, or grandparents to Canada through the family class sponsorship program.",
  },
]

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const [flipped, setFlipped] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="card-flip-container h-64 cursor-pointer"
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onClick={() => setFlipped((f) => !f)}
    >
      <motion.div
        className="card-flip-inner"
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front */}
        <div className="card-face gradient-border bg-[#0f2040] border border-[#c9a84c]/20 flex flex-col items-center justify-center p-6 text-center">
          <div className="text-5xl mb-4">{service.icon}</div>
          <h3
            className="text-white font-bold text-base mb-2 leading-tight"
            style={{ fontFamily: "var(--font-playfair-display)" }}
          >
            {service.title}
          </h3>
          <p className="text-gray-400 text-sm">{service.desc}</p>
          <div className="mt-4 text-[#c9a84c] text-xs font-semibold tracking-wider uppercase flex items-center gap-1">
            <span className="hidden sm:inline">Hover</span>
            <span className="sm:hidden">Tap</span>
            &nbsp;to learn more
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>

        {/* Back */}
        <div className="card-face card-back bg-gradient-to-br from-[#c9a84c] to-[#9a7a28] flex flex-col items-center justify-center p-6 text-center">
          <div className="text-4xl mb-4">{service.icon}</div>
          <h3
            className="text-[#0a1628] font-bold text-base mb-3 leading-tight"
            style={{ fontFamily: "var(--font-playfair-display)" }}
          >
            {service.title}
          </h3>
          <p className="text-[#0a1628]/80 text-sm leading-relaxed mb-4">{service.back}</p>
          <a
            href={CTA}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#0a1628] text-[#c9a84c] px-5 py-2 rounded-full text-xs font-bold tracking-wide hover:bg-[#0f2040] transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            Get Started
          </a>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Services() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section id="services" ref={ref} className="py-24 px-4 sm:px-8 bg-[#050e1a]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="text-center mb-16"
        >
          <p className="text-[#c9a84c] text-sm font-semibold tracking-[0.3em] uppercase mb-3">
            What We Offer
          </p>
          <h2
            className="text-4xl sm:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-playfair-display)" }}
          >
            Our Services
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Comprehensive immigration solutions tailored to your unique journey to Canada.
            Hover over a card to learn more.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-[#c9a84c] to-[#e8c76a] rounded-full mx-auto mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href={CTA}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-[#c9a84c] text-[#c9a84c] hover:bg-[#c9a84c] hover:text-[#0a1628] px-8 py-3.5 rounded-full font-bold tracking-wide transition-all duration-300"
          >
            Book  Consultation
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
