"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import TopBar from "../../components/TopBar"
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import FloatingButtons from "../../components/FloatingButtons"
import MapleLeaves from "../../components/MapleLeaves"

interface BlogPost {
  id: string
  slug: string
  title: string
  date: string
  category: string
  excerpt: string
  content: string
  thumbnail?: string
  created_at?: string
}

const SAMPLE_POSTS: BlogPost[] = [
  {
    id: "sample-1",
    slug: "express-entry-draw-2025-what-you-need-to-know",
    title: "Express Entry Draw 2025: What You Need to Know",
    date: "May 2025",
    category: "Express Entry",
    excerpt:
      "IRCC held multiple Express Entry draws in early 2025 targeting skilled workers across various NOC categories. Here is what applicants need to know about CRS cutoffs and eligibility.",
    content:
      "IRCC held multiple Express Entry draws in early 2025 targeting skilled workers across various NOC categories. Here is what applicants need to know about CRS cutoffs and eligibility.\n\nThe Express Entry system continues to be Canada's primary pathway for economic immigration. With draws happening regularly, it's important to stay up to date on CRS score requirements and which categories are being targeted.\n\nContact BCG Immigration for a personalized assessment of your Express Entry profile.",
  },
  {
    id: "sample-2",
    slug: "study-permit-changes-new-ircc-rules-for-international-students",
    title: "Study Permit Changes: New IRCC Rules for International Students",
    date: "April 2025",
    category: "Study Visa",
    excerpt:
      "The Canadian government announced new caps on international study permits affecting applications in 2025. Learn how these changes may impact your study plans.",
    content:
      "The Canadian government announced new caps on international study permits affecting applications in 2025. Learn how these changes may impact your study plans.\n\nThe new study permit cap system allocates permits by province and territory, with institutions required to obtain attestation letters before students can apply.\n\nIf you are planning to study in Canada, consult BCG Immigration to navigate the new process smoothly.",
  },
  {
    id: "sample-3",
    slug: "bc-pnp-tech-pilot-opportunities-for-skilled-workers",
    title: "BC PNP Tech Pilot: Opportunities for Skilled Workers",
    date: "March 2025",
    category: "BC PNP",
    excerpt:
      "British Columbia continues to invite skilled tech workers through the BC PNP Tech stream. Find out which occupations are in demand.",
    content:
      "British Columbia continues to invite skilled tech workers through the BC PNP Tech stream. Find out which occupations are in demand.\n\nThe BC PNP Tech Pilot offers expedited processing for candidates in eligible tech occupations. With invitations issued weekly, this stream provides a fast pathway to permanent residency for qualified tech professionals.\n\nBCG Immigration can help you determine if you qualify and guide you through the BC PNP application process.",
  },
]

function formatDate(dateStr: string): string {
  if (!dateStr) return ""
  const d = new Date(dateStr)
  if (isNaN(d.getTime())) return dateStr
  return d.toLocaleDateString("en-US", { month: "long", year: "numeric" })
}

export default function BlogPostContent({ slug }: { slug: string }) {
  const [post, setPost] = useState<BlogPost | null>(null)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    fetch("/api/posts")
      .then((r) => r.json())
      .then((data: BlogPost[]) => {
        const all = Array.isArray(data) && data.length > 0
          ? data
          : SAMPLE_POSTS
        setPost(all.find((p) => p.slug === slug) ?? null)
        setLoaded(true)
      })
      .catch(() => {
        setPost(SAMPLE_POSTS.find((p) => p.slug === slug) ?? null)
        setLoaded(true)
      })
  }, [slug])

  return (
    <>
      <MapleLeaves />
      <TopBar />
      <Navbar />

      <section className="min-h-screen bg-[#0a1628] pt-36 pb-24 px-4 sm:px-8">
        <div className="max-w-3xl mx-auto">

          {/* Loading skeleton */}
          {!loaded && (
            <div className="space-y-4 animate-pulse">
              <div className="h-6 bg-[#0f2040] rounded-xl w-1/4" />
              <div className="h-10 bg-[#0f2040] rounded-xl" />
              <div className="h-10 bg-[#0f2040] rounded-xl w-3/4" />
              <div className="h-1 bg-[#0f2040] rounded-full w-16 mt-4" />
              <div className="space-y-3 mt-8">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-4 bg-[#0f2040] rounded-xl" />
                ))}
              </div>
            </div>
          )}

          {/* Not found */}
          {loaded && !post && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-24"
            >
              <p className="text-gray-400 text-lg mb-6">Post not found.</p>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-[#c9a84c] font-semibold hover:text-[#e8c76a] transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                </svg>
                Back to Blog
              </Link>
            </motion.div>
          )}

          {/* Post content */}
          {loaded && post && (
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Back link */}
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-gray-400 hover:text-[#c9a84c] text-sm font-medium transition-colors mb-8 group"
              >
                <svg
                  className="w-4 h-4 transition-transform group-hover:-translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                </svg>
                Back to Blog
              </Link>

              {/* Meta */}
              <div className="flex items-center gap-3 flex-wrap mb-5">
                <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full border bg-[#c9a84c]/15 text-[#c9a84c] border-[#c9a84c]/40">
                  {post.category}
                </span>
                <span className="text-gray-500 text-sm">{formatDate(post.date)}</span>
              </div>

              {/* Title */}
              <h1
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-8"
                style={{ fontFamily: "var(--font-playfair-display)" }}
              >
                {post.title}
              </h1>

              {/* Gold divider */}
              <div className="w-16 h-1 bg-gradient-to-r from-[#c9a84c] to-[#e8c76a] rounded-full mb-10" />

              {/* Thumbnail */}
              {post.thumbnail && (
                <div className="rounded-2xl overflow-hidden mb-10 border border-[#c9a84c]/20">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={post.thumbnail}
                    alt={post.title}
                    className="w-full h-64 object-cover"
                  />
                </div>
              )}

              {/* Content paragraphs */}
              <div className="space-y-5">
                {post.content.split("\n\n").map((para, i) => (
                  <p key={i} className="text-gray-300 leading-relaxed text-base sm:text-lg">
                    {para}
                  </p>
                ))}
              </div>

              {/* Disclaimer */}
              <div className="mt-12 border-t border-[#c9a84c]/10 pt-8">
                <p className="text-gray-500 text-xs leading-relaxed">
                  Blog content is for general information only and does not constitute immigration
                  advice. Consult a CICC-regulated RCIC for your specific situation. RCIC License
                  R708868.
                </p>
              </div>
            </motion.article>
          )}
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </>
  )
}
