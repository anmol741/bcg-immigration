"use client"

import Link from "next/link"
import { motion } from "framer-motion"

const CTA = "  https://my-url.in/bcgimmigration"

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
]

const serviceLinks = [
  { label: "Student Visa / Study Permit", href: "/services" },
  { label: "Work Permits & LMIA", href: "/services" },
  { label: "Permanent Residency", href: "/services" },
  { label: "Express Entry", href: "/services" },
  { label: "Provincial Nominee Program", href: "/services" },
  { label: "Family Sponsorship", href: "/services" },
]

const socials = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/bcgimmigrationconsultancy",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/bcgimmigrationconsultancy",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="12" r="3" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="17.5" cy="6.5" r="1" />
      </svg>
    ),
  },
  {
    label: "X (Twitter)",
    href: "https://x.com/drcjskalra",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.254 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/Dr-cj-kalra",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/16042031200",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
]

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#050e1a] border-t border-[#c9a84c]/10 pt-16 pb-8 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 rounded-full bg-[#c9a84c] flex items-center justify-center text-[#0a1628] font-bold text-sm shadow-lg shadow-[#c9a84c]/25">
                BCG
              </div>
              <div>
                <div
                  className="text-white font-bold text-base"
                  style={{ fontFamily: "var(--font-playfair-display)" }}
                >
                  BCG Immigration
                </div>
                <div className="text-[#c9a84c] text-[10px] tracking-widest uppercase">
                  Consultancy Ltd.
                </div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Your trusted RCIC-licensed partner for Canadian immigration. Regulated by CICC
              for your peace of mind.
            </p>
            <div className="flex gap-3">
              {socials.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full bg-[#0f2040] border border-[#c9a84c]/20 text-gray-400 hover:text-[#c9a84c] hover:border-[#c9a84c]/50 flex items-center justify-center transition-colors"
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#c9a84c] font-semibold text-sm tracking-widest uppercase mb-5">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c]/40 group-hover:bg-[#c9a84c] transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[#c9a84c] font-semibold text-sm tracking-widest uppercase mb-5">
              Our Services
            </h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c]/40 group-hover:bg-[#c9a84c] transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[#c9a84c] font-semibold text-sm tracking-widest uppercase mb-5">
              Contact Us
            </h4>
            <ul className="space-y-4">
              
              <li>
                <a
                  href="tel:+16042031200"
                  className="flex gap-3 text-sm text-gray-400 hover:text-[#c9a84c] transition-colors"
                >
                  <svg className="w-4 h-4 text-[#c9a84c] shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
                  </svg>
                  +1 (604) 203-1200
                </a>
              </li>
              
              <li>
                <a
                  href="mailto:cj.bcgimmigration@gmail.com"
                  className="flex gap-3 text-sm text-gray-400 hover:text-[#c9a84c] transition-colors"
                >
                  <svg className="w-4 h-4 text-[#c9a84c] shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                  cj.bcgimmigration@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#c9a84c]/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center">
            <p className="text-gray-500 text-xs leading-relaxed max-w-xl">
              BCG Immigration Consultancy Ltd. is regulated by the College of Immigration
              and Citizenship Consultants (CICC). RCIC License R708868. Immigration advice
              is provided only by authorized representatives under IRPA.
            </p>
            <p className="text-gray-600 text-xs whitespace-nowrap">
              © {new Date().getFullYear()} BCG Immigration Consultancy Ltd.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
