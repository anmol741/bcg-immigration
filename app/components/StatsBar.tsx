"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"

interface Stat {
  value: number
  suffix: string
  label: string
  icon: string
}

const stats: Stat[] = [
  { value: 300, suffix: "+", label: "Happy Clients", icon: "👥" },
  { value: 4, suffix: "+", label: "Years Experience", icon: "⭐" },
  { value: 1, suffix: "", label: "CICC Regulated", icon: "🛡️" },
]

function Counter({ value, suffix, active }: { value: number; suffix: string; active: boolean }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!active) return
    let start = 0
    const duration = 1000
    const step = Math.ceil(value / (duration / 16))
    const timer = setInterval(() => {
      start += step
      if (start >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(start)
      }
    }, 16)
    return () => clearInterval(timer)
  }, [active, value])

  if (value === 1 && suffix === "") return <span>CICC</span>

  return (
    <span>
      {count}
      {suffix}
    </span>
  )
}

export default function StatsBar() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section ref={ref} className="relative z-10 -mt-8 mx-4 sm:mx-8 lg:mx-auto max-w-6xl">
      <div className="bg-[#0f2040] border border-[#c9a84c]/20 rounded-2xl shadow-2xl shadow-black/40 backdrop-blur-sm overflow-hidden">
        <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[#c9a84c]/15">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center justify-center py-8 px-4 text-center group hover:bg-[#c9a84c]/5 transition-colors"
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div
                className="text-3xl sm:text-4xl font-bold text-[#c9a84c] mb-1 tabular-nums"
                style={{ fontFamily: "var(--font-playfair-display)" }}
              >
                <Counter value={stat.value} suffix={stat.suffix} active={isInView} />
              </div>
              <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
