"use client"

import { useEffect, useState } from "react"

interface Leaf {
  id: number
  left: number
  delay: number
  duration: number
  size: number
}

export default function MapleLeaves() {
  const [leaves, setLeaves] = useState<Leaf[]>([])

  useEffect(() => {
    const generated: Leaf[] = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 18,
      duration: 14 + Math.random() * 12,
      size: 14 + Math.random() * 12,
    }))
    setLeaves(generated)
  }, [])

  return (
    <>
      {leaves.map((leaf) => (
        <span
          key={leaf.id}
          className="maple-leaf"
          style={{
            left: `${leaf.left}%`,
            fontSize: `${leaf.size}px`,
            animationDuration: `${leaf.duration}s`,
            animationDelay: `${leaf.delay}s`,
          }}
        >
          🍁
        </span>
      ))}
    </>
  )
}
