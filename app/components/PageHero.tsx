"use client"

import { motion } from "framer-motion"
import Link from "next/link"

interface Crumb {
  label: string
  href?: string
}

interface Props {
  eyebrow?: string
  line1: string
  line2?: string
  breadcrumb?: Crumb[]
}

const LETTER_DELAY = 0.04

export default function PageHero({ eyebrow, line1, line2, breadcrumb }: Props) {
  const l1 = line1.split("")
  const l2 = (line2 ?? "").split("")
  const offset = l1.length

  return (
    <section className="relative min-h-[60vh] flex flex-col items-center justify-center overflow-hidden bg-[#0a1628] pt-28 pb-20">
      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 55% at 50% 30%, rgba(201,168,76,0.09) 0%, transparent 70%)",
        }}
      />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(201,168,76,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Light sweep */}
      <div className="light-beam-el" />

      <div className="relative z-10 text-center px-4 sm:px-8 max-w-6xl mx-auto">
        {/* Eyebrow badge */}
        {eyebrow && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 bg-[#c9a84c]/10 border border-[#c9a84c]/30 rounded-full px-4 py-1.5 mb-10"
          >
            <span className="w-2 h-2 rounded-full bg-[#c9a84c] animate-pulse" />
            <span className="text-[#c9a84c] text-xs font-semibold tracking-widest uppercase">
              {eyebrow}
            </span>
          </motion.div>
        )}

        {/* Line 1 — white letters, stagger in */}
        <div className="overflow-hidden flex flex-wrap justify-center">
          {l1.map((char, i) =>
            char === " " ? (
              <span key={`a${i}`} className="inline-block w-5 sm:w-7 lg:w-9" />
            ) : (
              <motion.span
                key={`a${i}`}
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.65,
                  delay: 0.12 + i * LETTER_DELAY,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="text-5xl sm:text-7xl lg:text-8xl xl:text-[88px] font-bold text-white leading-none"
                style={{ fontFamily: "var(--font-playfair-display)", display: "inline-block" }}
              >
                {char}
              </motion.span>
            )
          )}
        </div>

        {/* Line 2 — shimmer gold letters, offset delay */}
        {line2 && (
          <div className="overflow-hidden flex flex-wrap justify-center mt-2">
            {l2.map((char, i) =>
              char === " " ? (
                <span key={`b${i}`} className="inline-block w-5 sm:w-7 lg:w-9" />
              ) : (
                <motion.span
                  key={`b${i}`}
                  initial={{ opacity: 0, y: 80 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.65,
                    delay: 0.12 + (offset + i) * LETTER_DELAY,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="text-5xl sm:text-7xl lg:text-8xl xl:text-[88px] font-bold leading-none shimmer-text"
                  style={{ fontFamily: "var(--font-playfair-display)", display: "inline-block" }}
                >
                  {char}
                </motion.span>
              )
            )}
          </div>
        )}

        {/* Gold bar */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{
            duration: 1,
            delay: 0.12 + (offset + l2.length) * LETTER_DELAY + 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{ transformOrigin: "center" }}
          className="w-24 h-1 bg-gradient-to-r from-[#c9a84c] to-[#e8c76a] rounded-full mx-auto mt-8"
        />

        {/* Breadcrumb */}
        {breadcrumb && (
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            aria-label="breadcrumb"
            className="flex items-center justify-center gap-2 mt-5 text-sm text-gray-500"
          >
            <Link href="/" className="hover:text-[#c9a84c] transition-colors">
              Home
            </Link>
            {breadcrumb.map((crumb, i) => (
              <span key={i} className="flex items-center gap-2">
                <span className="text-[#c9a84c]/30">/</span>
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-[#c9a84c] transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-gray-300">{crumb.label}</span>
                )}
              </span>
            ))}
          </motion.nav>
        )}
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0a1628] to-transparent pointer-events-none" />
    </section>
  )
}
