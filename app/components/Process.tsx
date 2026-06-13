"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useInView } from "framer-motion"

const steps = [
  {
    number: "01",
    title: " Consultation",
    desc: "Speak with our licensed RCIC. We assess your profile and identify the best immigration pathway for your goals.",
    icon: "💬",
  },
  {
    number: "02",
    title: "Document Preparation",
    desc: "Our team guides you through gathering and organizing every required document for a complete, error-free application.",
    icon: "📋",
  },
  {
    number: "03",
    title: "Application Submission",
    desc: "We prepare and submit your application to IRCC, ensuring accuracy and compliance with all regulations under IRPA.",
    icon: "📤",
  },
  {
    number: "04",
    title: "Visa deliver",
    desc: "Receive your visa and begin your Canadian journey. We provide post-approval guidance every step of the way.",
    icon: "✅",
  },
]

export default function Process() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })
  const [reached, setReached] = useState([false, false, false, false])

  useEffect(() => {
    if (!isInView) return
    steps.forEach((_, i) => {
      setTimeout(() => {
        setReached((prev) => {
          const next = [...prev]
          next[i] = true
          return next
        })
      }, 150 + i * 250)
    })
  }, [isInView])

  return (
    <section id="process" className="py-24 px-4 sm:px-8" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="text-center mb-16"
        >
          <p className="text-[#c9a84c] text-sm font-semibold tracking-[0.3em] uppercase mb-3">
            How It Works
          </p>
          <h2
            className="text-4xl sm:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-playfair-display)" }}
          >
            Our Simple Process
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#c9a84c] to-[#e8c76a] rounded-full mx-auto" />
        </motion.div>

        {/* Desktop layout */}
        <div className="hidden lg:block">
          {/* Connecting line */}
          <div className="relative mb-8">
            <div className="absolute top-8 left-[12.5%] right-[12.5%] h-0.5 bg-[#0f2040]" />
            <motion.div
              className="absolute top-8 left-[12.5%] h-0.5 bg-gradient-to-r from-[#c9a84c] to-[#e8c76a]"
              initial={{ width: "0%" }}
              animate={isInView ? { width: "75%" } : { width: "0%" }}
              transition={{ duration: 1, delay: 0.15, ease: "easeInOut" }}
            />

            {/* Step circles on the line */}
            <div className="grid grid-cols-4">
              {steps.map((step, i) => (
                <div key={step.number} className="flex flex-col items-center">
                  <motion.div
                    animate={
                      reached[i]
                        ? {
                            scale: [1, 1.3, 1],
                            boxShadow: [
                              "0 0 0 0 rgba(201,168,76,0)",
                              "0 0 0 12px rgba(201,168,76,0.25)",
                              "0 0 0 0 rgba(201,168,76,0)",
                            ],
                          }
                        : {}
                    }
                    transition={{ duration: 0.6 }}
                    className={`w-16 h-16 rounded-full border-2 flex items-center justify-center text-2xl shadow-lg transition-all duration-500 ${
                      reached[i]
                        ? "bg-[#c9a84c] border-[#c9a84c] shadow-[#c9a84c]/30"
                        : "bg-[#0f2040] border-[#c9a84c]/30"
                    }`}
                  >
                    {step.icon}
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Step cards */}
          <div className="grid grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.15 + i * 0.1 }}
                className="bg-[#0f2040] border border-[#c9a84c]/15 rounded-2xl p-6 text-center hover:border-[#c9a84c]/40 transition-colors"
              >
                <div
                  className="text-[#c9a84c] font-bold text-3xl mb-2"
                  style={{ fontFamily: "var(--font-playfair-display)" }}
                >
                  {step.number}
                </div>
                <h3 className="text-white font-bold text-base mb-3">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile layout */}
        <div className="lg:hidden flex flex-col gap-0">
          {steps.map((step, i) => (
            <div key={step.number} className="flex gap-4">
              {/* Left: number + vertical line */}
              <div className="flex flex-col items-center">
                <motion.div
                  animate={
                    reached[i]
                      ? { scale: [1, 1.25, 1], backgroundColor: "#c9a84c" }
                      : { backgroundColor: "#0f2040" }
                  }
                  transition={{ duration: 0.4, delay: 0.15 + i * 0.25 }}
                  className="w-12 h-12 rounded-full border-2 border-[#c9a84c]/50 flex items-center justify-center text-xl shrink-0"
                >
                  {step.icon}
                </motion.div>
                {i < steps.length - 1 && (
                  <motion.div
                    className="w-0.5 bg-gradient-to-b from-[#c9a84c] to-[#c9a84c]/20 mt-1"
                    initial={{ height: 0 }}
                    animate={reached[i] ? { height: "100%" } : { height: 0 }}
                    transition={{ duration: 0.4, delay: 0.25 + i * 0.25 }}
                    style={{ minHeight: "48px" }}
                  />
                )}
              </div>
              {/* Right: content */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                className="bg-[#0f2040] border border-[#c9a84c]/15 rounded-2xl p-5 mb-4 flex-1"
              >
                <div className="text-[#c9a84c] font-bold text-sm tracking-widest mb-1">{step.number}</div>
                <h3 className="text-white font-bold mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
