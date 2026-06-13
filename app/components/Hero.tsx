"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

const CTA = "  https://my-url.in/bcgimmigration"

const phrases = [
  "Looking to Work in Canada?",
  "Looking to Live in Canada?",
  "Looking to Immigrate to Canada?",
  "Looking to Study in Canada?",
]

const PARTICLES = [
  { x: 8, y: 10, s: 1.5, o: 0.50, d: 7, dl: 0.0 },
  { x: 18, y: 55, s: 2.0, o: 0.40, d: 9, dl: 1.1 },
  { x: 25, y: 30, s: 1.2, o: 0.55, d: 11, dl: 0.5 },
  { x: 32, y: 78, s: 1.8, o: 0.35, d: 8, dl: 2.3 },
  { x: 42, y: 20, s: 1.0, o: 0.60, d: 13, dl: 0.8 },
  { x: 48, y: 65, s: 2.2, o: 0.30, d: 7, dl: 1.7 },
  { x: 55, y: 42, s: 1.5, o: 0.45, d: 10, dl: 3.1 },
  { x: 62, y: 15, s: 1.2, o: 0.50, d: 8, dl: 0.3 },
  { x: 70, y: 80, s: 2.0, o: 0.40, d: 12, dl: 2.0 },
  { x: 78, y: 35, s: 1.8, o: 0.35, d: 9, dl: 1.5 },
  { x: 85, y: 60, s: 1.0, o: 0.55, d: 11, dl: 0.7 },
  { x: 92, y: 25, s: 2.5, o: 0.30, d: 7, dl: 2.8 },
  { x: 3, y: 88, s: 1.5, o: 0.45, d: 14, dl: 1.0 },
  { x: 15, y: 45, s: 1.0, o: 0.50, d: 8, dl: 0.2 },
  { x: 28, y: 68, s: 2.0, o: 0.35, d: 10, dl: 3.5 },
  { x: 38, y: 5, s: 1.2, o: 0.60, d: 9, dl: 1.8 },
  { x: 50, y: 88, s: 1.8, o: 0.40, d: 12, dl: 0.6 },
  { x: 60, y: 55, s: 1.0, o: 0.50, d: 7, dl: 2.5 },
  { x: 68, y: 92, s: 2.5, o: 0.30, d: 11, dl: 1.3 },
  { x: 75, y: 18, s: 1.5, o: 0.45, d: 9, dl: 0.9 },
  { x: 82, y: 70, s: 1.2, o: 0.55, d: 13, dl: 3.0 },
  { x: 90, y: 48, s: 2.0, o: 0.40, d: 8, dl: 1.6 },
  { x: 96, y: 82, s: 1.5, o: 0.35, d: 10, dl: 2.2 },
  { x: 22, y: 92, s: 1.0, o: 0.50, d: 7, dl: 0.4 },
  { x: 45, y: 50, s: 1.8, o: 0.45, d: 9, dl: 1.9 },
]

function CssParticles() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      {PARTICLES.map((p, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-[#c9a84c]"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.s}px`,
            height: `${p.s}px`,
            opacity: p.o,
            animation: `particle-drift ${p.d}s ease-in-out ${p.dl}s infinite alternate`,
          }}
        />
      ))}
    </div>
  )
}

function Typewriter() {
  const [phraseIdx, setPhraseIdx] = useState(0)
  const [displayed, setDisplayed] = useState("")
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const phrase = phrases[phraseIdx]
    let timeout: ReturnType<typeof setTimeout>

    if (!deleting && displayed.length < phrase.length) {
      timeout = setTimeout(() => setDisplayed(phrase.slice(0, displayed.length + 1)), 55)
    } else if (!deleting && displayed.length === phrase.length) {
      timeout = setTimeout(() => setDeleting(true), 1800)
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(phrase.slice(0, displayed.length - 1)), 30)
    } else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setPhraseIdx((i) => (i + 1) % phrases.length)
    }

    return () => clearTimeout(timeout)
  }, [displayed, deleting, phraseIdx])

  const parts = displayed.split("Canada")
  return (
    <span>
      {parts.map((part, i) => (
        <span key={i}>
          {part && (
            <span style={{ color: "white", WebkitTextFillColor: "white" }}>{part}</span>
          )}
          {i < parts.length - 1 && <span className="shimmer-text">Canada</span>}
        </span>
      ))}
      <span className="animate-pulse" style={{ color: "#c9a84c", WebkitTextFillColor: "#c9a84c" }}>|</span>
    </span>
  )
}

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] })
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"])

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a1628]"
    >
      {/* Parallax bg gradient */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 pointer-events-none"
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(201,168,76,0.10) 0%, rgba(10,22,40,0.0) 70%), radial-gradient(ellipse 60% 80% at 80% 80%, rgba(15,32,64,0.8) 0%, transparent 60%)",
          }}
        />
      </motion.div>

      {/* CSS particle field — no JS per-frame cost */}
      <CssParticles />

      {/* Light beam sweep */}
      <div className="light-beam-el" />

      {/* Content */}
      <div
        className="relative z-10 text-center px-4 sm:px-8 max-w-5xl mx-auto"
        style={{ willChange: "transform" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
        >
          <div className="inline-flex items-center gap-2 bg-[#c9a84c]/10 border border-[#c9a84c]/30 rounded-full px-4 py-1.5 mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-[#c9a84c] animate-pulse" />
            <span className="text-[#c9a84c] text-xs font-semibold tracking-widest uppercase">
              RCIC Licensed · R708868
            </span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.25 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-4"
          style={{ fontFamily: "var(--font-playfair-display)" }}
        >
          <Typewriter />
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.45 }}
          className="text-lg sm:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Look no further than{" "}
          <span className="text-[#c9a84c] font-semibold">BCG Immigration</span>.{" "}
          Click now for a Free Assessment.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.55 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto"
        >
          <motion.a
            href={CTA}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ripple relative bg-[#c9a84c] text-[#0a1628] px-8 py-4 rounded-full font-bold text-base tracking-wide shadow-2xl shadow-[#c9a84c]/30 w-full sm:w-auto sm:min-w-[220px] text-center"
            whileHover={{ scale: 1.06, boxShadow: "0 0 40px rgba(201,168,76,0.5)" }}
            whileTap={{ scale: 0.97 }}
          >
            Free Assessment Now
          </motion.a>
          <motion.a
            href="#about"
            className="border-2 border-[#c9a84c]/50 text-white px-8 py-4 rounded-full font-semibold text-base tracking-wide backdrop-blur-sm hover:border-[#c9a84c] hover:bg-[#c9a84c]/10 transition-all w-full sm:w-auto sm:min-w-[220px] text-center"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            Learn More
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.4 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-gray-500 text-xs tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-5 h-8 border-2 border-gray-600 rounded-full flex items-start justify-center pt-1.5"
          >
            <div className="w-1 h-2 bg-[#c9a84c] rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
