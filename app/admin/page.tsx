"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"

export default function AdminLoginPage() {
  const router = useRouter()
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    try {
      if (localStorage.getItem("bcg_admin_auth") === "true") {
        router.replace("/admin/dashboard")
      }
    } catch {
      // ignore
    }
  }, [router])

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError("")
    setLoading(true)
    setTimeout(() => {
      if (password === "BCGAdmin2025") {
        localStorage.setItem("bcg_admin_auth", "true")
        router.push("/admin/dashboard")
      } else {
        setError("Access Denied")
        setLoading(false)
      }
    }, 400)
  }

  return (
    <div className="min-h-screen bg-[#0a1628] flex flex-col items-center justify-center px-4">
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 40%, rgba(201,168,76,0.08) 0%, transparent 70%)",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative w-full max-w-md"
      >
        {/* Logo */}
        <div className="flex flex-col items-center mb-10">
          <div className="w-16 h-16 rounded-full bg-[#c9a84c] flex items-center justify-center text-[#0a1628] font-bold text-xl shadow-xl shadow-[#c9a84c]/30 mb-4">
            BCG
          </div>
          <h1
            className="text-white font-bold text-2xl"
            style={{ fontFamily: "var(--font-playfair-display)" }}
          >
            BCG Immigration
          </h1>
          <p className="text-[#c9a84c] text-xs tracking-widest uppercase mt-1">
            Admin Portal
          </p>
        </div>

        {/* Card */}
        <div className="bg-[#0f2040] border border-[#c9a84c]/20 rounded-2xl p-8 shadow-2xl">
          <h2 className="text-white font-semibold text-lg mb-6 text-center">
            Sign In to Admin Panel
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-gray-400 text-sm mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter admin password"
                required
                className="w-full bg-[#0a1628] border border-[#c9a84c]/20 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-[#c9a84c]/60 transition-colors"
              />
            </div>

            {error && (
              <motion.p
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-red-400 text-sm font-medium text-center bg-red-500/10 border border-red-500/20 rounded-lg py-2"
              >
                {error}
              </motion.p>
            )}

            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-[#c9a84c] hover:bg-[#e8c76a] disabled:opacity-60 text-[#0a1628] font-bold py-3 rounded-xl transition-colors tracking-wide text-sm"
            >
              {loading ? "Signing in…" : "Login"}
            </motion.button>
          </form>
        </div>

        <p className="text-center text-gray-600 text-xs mt-6">
          BCG Immigration Consultancy Ltd. · RCIC R708868
        </p>
      </motion.div>
    </div>
  )
}
