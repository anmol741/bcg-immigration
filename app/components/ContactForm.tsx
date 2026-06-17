"use client"

import { useRef, useState } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"

const CTA = "  https://my-url.in/bcgimmigration"

const serviceOptions = [
  "Student Visa / Study Permit",
  "Work Permit & LMIA",
  "Permanent Residency",
  "Express Entry",
  "Provincial Nominee Program (BC PNP)",
  "Family Sponsorship",
  "Other / Not Sure Yet",
]

interface FormData {
  name: string
  email: string
  phone: string
  service: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  message?: string
}

const inputBase =
  "w-full bg-[#0a1628] border rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-[#c9a84c] transition-colors"

const contactDetails = [
 
  {
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
      </svg>
    ),
    label: "Primary Phone",
    value: "+1 (604) 203-1200",
    href: "tel:+16042031200",
  },
  
  {
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
      </svg>
    ),
    label: "Email",
    value: "cj.bcgimmigration@gmail.com",
    href: "mailto:cj.bcgimmigration@gmail.com",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm.5 5v5.25l4.5 2.67-.75 1.23L11 13V7h1.5z" />
      </svg>
    ),
    label: "Office Hours",
    value: "Mon – Sat, 9 AM – 6 PM PST",
    href: null as string | null,
  },
]

export default function ContactForm() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const validate = (): boolean => {
    const e: FormErrors = {}
    if (!form.name.trim()) e.name = "Full name is required"
    if (!form.email.trim()) e.email = "Email address is required"
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email address"
    if (!form.message.trim()) e.message = "Please describe your situation"
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1200)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  return (
    <section id="get-in-touch" ref={ref} className="py-24 px-4 sm:px-8 bg-[#050e1a]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-[#c9a84c] text-sm font-semibold tracking-[0.3em] uppercase mb-3">
            Get In Touch
          </p>
          <h2
            className="text-4xl sm:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-playfair-display)" }}
          >
            Request a Free Assessment
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Tell us about your situation and our licensed RCIC will respond within
            one business day.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-[#c9a84c] to-[#e8c76a] rounded-full mx-auto mt-4" />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Contact info sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-2 flex flex-col gap-5"
          >
            {contactDetails.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
                className="flex gap-4 items-start"
              >
                <div className="w-10 h-10 rounded-xl bg-[#c9a84c]/10 border border-[#c9a84c]/20 flex items-center justify-center text-[#c9a84c] shrink-0">
                  {item.icon}
                </div>
                <div>
                  <div className="text-gray-500 text-xs uppercase tracking-widest mb-0.5">
                    {item.label}
                  </div>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-gray-200 text-sm hover:text-[#c9a84c] transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="text-gray-200 text-sm">{item.value}</span>
                  )}
                </div>
              </motion.div>
            ))}

            {/* CICC trust badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.75 }}
              className="mt-2 bg-[#0f2040] border border-[#c9a84c]/20 rounded-2xl p-5"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">🛡️</span>
                <span className="text-[#c9a84c] font-bold text-sm">CICC Regulated</span>
              </div>
              <p className="text-gray-400 text-xs leading-relaxed">
                BCG Immigration Consultancy Ltd. is regulated by the College of Immigration
                and Citizenship Consultants. RCIC License R708868.
              </p>
            </motion.div>
          </motion.div>

          {/* Form / Success panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="bg-[#0f2040] border border-[#c9a84c]/20 rounded-3xl p-12 text-center"
                >
                  <motion.div
                    initial={{ scale: 0, rotate: -20 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.1 }}
                    className="text-6xl mb-5"
                  >
                    🎉
                  </motion.div>
                  <h3
                    className="text-2xl font-bold text-white mb-3"
                    style={{ fontFamily: "var(--font-playfair-display)" }}
                  >
                    Message Received!
                  </h3>
                  <p className="text-gray-400 text-sm mb-8 max-w-sm mx-auto leading-relaxed">
                    Thank you for reaching out. Our licensed RCIC will review your inquiry
                    and contact you within one business day.
                  </p>
                  <motion.a
                    href={CTA}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#c9a84c] text-[#0a1628] px-8 py-3.5 rounded-full font-bold tracking-wide shadow-lg shadow-[#c9a84c]/25"
                    whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(201,168,76,0.4)" }}
                    whileTap={{ scale: 0.97 }}
                  >
                    Book an Appointment Now
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </motion.a>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="bg-[#0f2040] border border-[#c9a84c]/15 rounded-3xl p-8 sm:p-10"
                >
                  {/* Row 1 */}
                  <div className="grid sm:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label className="block text-gray-300 text-sm mb-1.5 font-medium">
                        Full Name <span className="text-[#c9a84c]">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className={`${inputBase} ${
                          errors.name ? "border-red-500/60" : "border-[#c9a84c]/20"
                        }`}
                      />
                      {errors.name && (
                        <p className="text-red-400 text-xs mt-1">{errors.name}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-gray-300 text-sm mb-1.5 font-medium">
                        Email Address <span className="text-[#c9a84c]">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className={`${inputBase} ${
                          errors.email ? "border-red-500/60" : "border-[#c9a84c]/20"
                        }`}
                      />
                      {errors.email && (
                        <p className="text-red-400 text-xs mt-1">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  {/* Row 2 */}
                  <div className="grid sm:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label className="block text-gray-300 text-sm mb-1.5 font-medium">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+1 (604) 000-0000"
                        className={`${inputBase} border-[#c9a84c]/20`}
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 text-sm mb-1.5 font-medium">
                        Service of Interest
                      </label>
                      <select
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        className="w-full bg-[#0a1628] border border-[#c9a84c]/20 rounded-xl px-4 py-3 text-sm text-gray-300 focus:outline-none focus:border-[#c9a84c] transition-colors appearance-none cursor-pointer"
                      >
                        <option value="">Select a service…</option>
                        {serviceOptions.map((s) => (
                          <option key={s} value={s} className="bg-[#0a1628] text-white">
                            {s}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="mb-6">
                    <label className="block text-gray-300 text-sm mb-1.5 font-medium">
                      Your Situation / Message <span className="text-[#c9a84c]">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Brief description of your immigration goals or questions…"
                      className={`${inputBase} resize-none ${
                        errors.message ? "border-red-500/60" : "border-[#c9a84c]/20"
                      }`}
                    />
                    {errors.message && (
                      <p className="text-red-400 text-xs mt-1">{errors.message}</p>
                    )}
                  </div>

                  {/* Submit */}
                  <motion.button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#c9a84c] text-[#0a1628] py-4 rounded-xl font-bold text-base tracking-wide shadow-lg shadow-[#c9a84c]/25 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    whileHover={!loading ? { scale: 1.02, boxShadow: "0 0 30px rgba(201,168,76,0.4)" } : {}}
                    whileTap={!loading ? { scale: 0.98 } : {}}
                  >
                    {loading ? (
                      <>
                        <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                          />
                        </svg>
                        Sending…
                      </>
                    ) : (
                      <>
                        Send My Request
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                          />
                        </svg>
                      </>
                    )}
                  </motion.button>

                  <p className="text-gray-600 text-xs text-center mt-4 leading-relaxed">
                    By submitting, you agree to be contacted by BCG Immigration Consultancy
                    Ltd. regarding your inquiry. Your information is kept strictly confidential.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
