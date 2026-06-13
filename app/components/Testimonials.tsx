"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useInView } from "framer-motion"

const testimonials = [
  {
    name: "Rajiv Malhotra",
    origin: "India",
    text: "BCG Immigration made my journey stress-free. Their expert guidance and personalized service took all the complexity out of the immigration process. Highly recommended!",
    rating: 5,
    avatar: "R",
    color: "#c9a84c",
  },
  {
    name: "Anonymous Client",
    origin: "Canada",
    text: "They guided me through IRPA regulations in a clear and professional way. My work permit was approved without any hassle. The team was always responsive and helpful.",
    rating: 5,
    avatar: "A",
    color: "#4c8fc9",
  },
  {
    name: "Jessica Fernandez",
    origin: "Philippines",
    text: "My PR application was processed smoothly and faster than I expected. BCG Immigration's team is knowledgeable, professional, and genuinely cares about your success.",
    rating: 5,
    avatar: "J",
    color: "#4cc98f",
  },
]

function Stars({ count, active }: { count: number; active: boolean }) {
  return (
    <div className="flex gap-1 mb-3">
      {Array.from({ length: count }).map((_, i) => (
        <motion.span
          key={i}
          initial={{ scale: 0, rotate: -30, opacity: 0 }}
          animate={active ? { scale: 1, rotate: 0, opacity: 1 } : {}}
          transition={{ duration: 0.2, delay: i * 0.05, type: "spring", stiffness: 300 }}
          className="text-[#c9a84c] text-lg"
        >
          ★
        </motion.span>
      ))}
    </div>
  )
}

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })
  const [activeIdx, setActiveIdx] = useState(0)

  // Auto-scroll carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx((i) => (i + 1) % testimonials.length)
    }, 4500)
    return () => clearInterval(timer)
  }, [])

  return (
    <section ref={ref} className="py-24 px-4 sm:px-8 bg-[#050e1a] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="text-center mb-16"
        >
          <p className="text-[#c9a84c] text-sm font-semibold tracking-[0.3em] uppercase mb-3">
            Client Stories
          </p>
          <h2
            className="text-4xl sm:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-playfair-display)" }}
          >
            What Our Clients Say
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#c9a84c] to-[#e8c76a] rounded-full mx-auto" />
        </motion.div>

        {/* Cards grid — desktop show all 3, mobile carousel */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(0,0,0,0.4)" }}
              className="bg-[#0f2040] border border-[#c9a84c]/15 rounded-2xl p-8 relative flex flex-col"
            >
              {/* Decorative quote mark */}
              <div
                className="absolute top-4 right-6 text-7xl font-bold leading-none select-none pointer-events-none"
                style={{ color: "#c9a84c", opacity: 0.08, fontFamily: "Georgia, serif" }}
              >
                "
              </div>

              <Stars count={t.rating} active={isInView} />

              <p className="text-gray-300 leading-relaxed text-sm mb-6 flex-1 italic">
                &ldquo;{t.text}&rdquo;
              </p>

              <div className="flex items-center gap-3 mt-auto">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center text-[#0a1628] font-bold text-lg shrink-0"
                  style={{ backgroundColor: t.color }}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{t.name}</div>
                  <div className="text-gray-500 text-xs flex items-center gap-1">
                    <span>🌍</span> {t.origin}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile carousel */}
        <div className="md:hidden relative overflow-hidden">
          <div
            ref={trackRef}
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${activeIdx * 100}%)` }}
          >
            {testimonials.map((t, i) => (
              <div key={t.name} className="w-full shrink-0 px-2">
                <div className="bg-[#0f2040] border border-[#c9a84c]/15 rounded-2xl p-7 relative">
                  <div
                    className="absolute top-3 right-5 text-6xl font-bold leading-none select-none"
                    style={{ color: "#c9a84c", opacity: 0.08, fontFamily: "Georgia, serif" }}
                  >
                    "
                  </div>
                  <Stars count={t.rating} active={isInView && activeIdx === i} />
                  <p className="text-gray-300 leading-relaxed text-sm mb-5 italic">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-[#0a1628] font-bold shrink-0"
                      style={{ backgroundColor: t.color }}
                    >
                      {t.avatar}
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm">{t.name}</div>
                      <div className="text-gray-500 text-xs">🌍 {t.origin}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-5">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIdx(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  i === activeIdx ? "bg-[#c9a84c] w-6" : "bg-gray-600"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
