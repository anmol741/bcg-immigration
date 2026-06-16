"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"

const CTA = "  https://my-url.in/bcgimmigration"

const services = [
  { label: "Student Visa / Study Permit", href: "/services" },
  { label: "Work Permits & LMIA", href: "/services" },
  { label: "Permanent Residency", href: "/services" },
  { label: "Express Entry", href: "/services" },
]

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services", dropdown: true },
  { label: "Blog", href: "/blog" },
  { label: "PNP Calculators", href: "/calculators" },
  { label: "Contact Us", href: "/contact" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [logoSpun, setLogoSpun] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll)
    setTimeout(() => setLogoSpun(true), 100)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener("mousedown", handler)
    return () => document.removeEventListener("mousedown", handler)
  }, [])

  // Close menus whenever the route changes
  useEffect(() => {
    setMobileOpen(false)
    setDropdownOpen(false)
  }, [pathname])

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href)

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#0a1628]/95 backdrop-blur-md shadow-lg shadow-black/30 border-b border-[#c9a84c]/10"
            : "bg-transparent"
        }`}
        style={{ marginTop: scrolled ? 0 : "40px" }}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" prefetch={true} className="flex items-center gap-2 sm:gap-3 group min-w-0">
              <motion.div
                className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-[#c9a84c] flex items-center justify-center text-[#0a1628] font-bold text-sm sm:text-lg shadow-lg shadow-[#c9a84c]/30 shrink-0"
                animate={logoSpun ? { rotate: 360 } : { rotate: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                BCG
              </motion.div>
              <div className="min-w-0">
                <div
                  className="text-white font-bold text-sm sm:text-lg leading-tight truncate"
                  style={{ fontFamily: "var(--font-playfair-display)" }}
                >
                  BCG Immigration
                </div>
                <div className="text-[#c9a84c] text-[9px] sm:text-[10px] tracking-widest uppercase">
                  Consultancy Ltd.
                </div>
              </div>
            </Link>

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) =>
                link.dropdown ? (
                  <div key={link.label} className="relative" ref={dropdownRef}>
                    <button
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                      className={`relative group flex items-center gap-1.5 text-sm font-medium transition-colors py-2 ${
                        isActive(link.href)
                          ? "text-[#c9a84c]"
                          : "text-gray-200 hover:text-white"
                      }`}
                    >
                      {link.label}
                      <svg
                        className={`w-4 h-4 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                      <span
                        className={`absolute bottom-0 left-0 h-[2px] bg-[#c9a84c] transition-all duration-300 ${
                          isActive(link.href) ? "w-full" : "w-0 group-hover:w-full"
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {dropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.95 }}
                          transition={{ duration: 0.15 }}
                          className="absolute top-full left-0 mt-2 w-56 bg-[#0f2040] border border-[#c9a84c]/20 rounded-xl shadow-2xl shadow-black/50 overflow-hidden"
                        >
                          {services.map((s) => (
                            <Link
                              key={s.label}
                              href={s.href}
                              prefetch={true}
                              onClick={() => setDropdownOpen(false)}
                              className="block px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-[#c9a84c]/10 transition-colors border-b border-white/5 last:border-0"
                            >
                              {s.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    prefetch={true}
                    className={`relative group text-sm font-medium transition-colors py-2 ${
                      isActive(link.href)
                        ? "text-[#c9a84c]"
                        : "text-gray-200 hover:text-white"
                    }`}
                  >
                    {link.label}
                    <span
                      className={`absolute bottom-0 left-0 h-[2px] bg-[#c9a84c] transition-all duration-300 ${
                        isActive(link.href) ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </Link>
                )
              )}
              <motion.a
                href={CTA}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#c9a84c] text-[#0a1628] px-5 py-2.5 rounded-full text-sm font-bold tracking-wide shadow-lg shadow-[#c9a84c]/25 transition-shadow hover:shadow-[#c9a84c]/50"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                Free Assessment
              </motion.a>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              <motion.span
                animate={mobileOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                className="block w-6 h-0.5 bg-white origin-center transition-all"
              />
              <motion.span
                animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                className="block w-6 h-0.5 bg-white"
              />
              <motion.span
                animate={mobileOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                className="block w-6 h-0.5 bg-white origin-center transition-all"
              />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 300 }}
              className="fixed top-0 right-0 h-full w-72 bg-[#0a1628] border-l border-[#c9a84c]/20 z-50 shadow-2xl p-8 flex flex-col"
            >
              <div className="flex items-center justify-between mb-8">
                <span
                  className="text-white font-bold text-lg"
                  style={{ fontFamily: "var(--font-playfair-display)" }}
                >
                  Menu
                </span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="text-gray-400 hover:text-white p-1"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <nav className="flex flex-col gap-2 flex-1">
                {navLinks
                  .filter((l) => !l.dropdown)
                  .map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      prefetch={true}
                      onClick={() => setMobileOpen(false)}
                      className={`py-3 border-b border-white/5 text-base font-medium transition-colors ${
                        isActive(link.href)
                          ? "text-[#c9a84c]"
                          : "text-gray-200 hover:text-[#c9a84c]"
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}

                {/* Services sub-list */}
                <div className="py-3 border-b border-white/5">
                  <p className="text-[#c9a84c] text-xs font-semibold tracking-widest uppercase mb-3">
                    Services
                  </p>
                  {services.map((s) => (
                    <Link
                      key={s.label}
                      href={s.href}
                      prefetch={true}
                      onClick={() => setMobileOpen(false)}
                      className="block text-gray-300 hover:text-white py-2 pl-3 text-sm transition-colors"
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              </nav>

              <a
                href={CTA}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-[#c9a84c] text-[#0a1628] py-3 rounded-full font-bold text-sm tracking-wide mt-4"
              >
                Free Assessment
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
