"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import TopBar from "../components/TopBar"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import FloatingButtons from "../components/FloatingButtons"
import MapleLeaves from "../components/MapleLeaves"

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
    content: "",
  },
  {
    id: "sample-2",
    slug: "study-permit-changes-new-ircc-rules-for-international-students",
    title: "Study Permit Changes: New IRCC Rules for International Students",
    date: "April 2025",
    category: "Study Visa",
    excerpt:
      "The Canadian government announced new caps on international study permits affecting applications in 2025. Learn how these changes may impact your study plans.",
    content: "",
  },
  {
    id: "sample-3",
    slug: "bc-pnp-tech-pilot-opportunities-for-skilled-workers",
    title: "BC PNP Tech Pilot: Opportunities for Skilled Workers",
    date: "March 2025",
    category: "BC PNP",
    excerpt:
      "British Columbia continues to invite skilled tech workers through the BC PNP Tech stream. Find out which occupations are in demand.",
    content: "",
  },
]

function formatDate(dateStr: string): string {
  if (!dateStr) return ""
  const d = new Date(dateStr)
  if (isNaN(d.getTime())) return dateStr
  return d.toLocaleDateString("en-US", { month: "long", year: "numeric" })
}

function CategoryBadge({ category }: { category: string }) {
  return (
    <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full border bg-[#c9a84c]/15 text-[#c9a84c] border-[#c9a84c]/40">
      {category}
    </span>
  )
}

function PostCard({ post, index }: { post: BlogPost; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -6, boxShadow: "0 20px 60px rgba(201,168,76,0.15)" }}
      className="bg-[#0f2040] border border-[#c9a84c]/20 rounded-2xl p-7 flex flex-col gap-4 transition-shadow"
    >
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <CategoryBadge category={post.category} />
        <span className="text-gray-500 text-xs">{formatDate(post.date)}</span>
      </div>

      <h3
        className="text-white font-bold text-lg leading-snug"
        style={{ fontFamily: "var(--font-playfair-display)" }}
      >
        {post.title}
      </h3>

      <p className="text-gray-400 text-sm leading-relaxed flex-1">{post.excerpt}</p>

      <Link
        href={`/blog/${post.slug}`}
        className="inline-flex items-center gap-1.5 text-[#c9a84c] text-sm font-semibold hover:text-[#e8c76a] transition-colors group mt-auto"
      >
        Read More
        <svg
          className="w-4 h-4 transition-transform group-hover:translate-x-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </Link>
    </motion.div>
  )
}

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    fetch("/api/posts")
      .then((r) => r.json())
      .then((data: BlogPost[]) => {
        setPosts(Array.isArray(data) && data.length > 0 ? data : SAMPLE_POSTS)
        setLoaded(true)
      })
      .catch(() => {
        setPosts(SAMPLE_POSTS)
        setLoaded(true)
      })
  }, [])

  return (
    <>
      <MapleLeaves />
      <TopBar />
      <Navbar />

      {/* Hero Banner */}
      <section className="relative min-h-[52vh] flex flex-col items-center justify-center bg-[#0a1628] pt-32 pb-20 overflow-x-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 55% at 50% 30%, rgba(201,168,76,0.09) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(201,168,76,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,1) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        <div className="light-beam-el" />

        <div className="relative z-10 w-full max-w-4xl mx-auto px-6 sm:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 bg-[#c9a84c]/10 border border-[#c9a84c]/30 rounded-full px-4 py-1.5 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-[#c9a84c] animate-pulse" />
            <span className="text-[#c9a84c] text-xs font-semibold tracking-widest uppercase">
              BCG Immigration
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight"
            style={{ fontFamily: "var(--font-playfair-display)" }}
          >
            Immigration{" "}
            <span className="shimmer-text">Blog</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto"
          >
            Expert insights on Canadian immigration news, tips, and updates
          </motion.p>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            style={{ transformOrigin: "center" }}
            className="w-24 h-1 bg-gradient-to-r from-[#c9a84c] to-[#e8c76a] rounded-full mx-auto mt-8"
          />
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0a1628] to-transparent pointer-events-none" />
      </section>

      {/* Posts Grid */}
      <section className="py-20 px-4 sm:px-8 bg-[#0a1628]">
        <div className="max-w-7xl mx-auto">
          {!loaded ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="bg-[#0f2040] border border-[#c9a84c]/10 rounded-2xl p-7 h-64 animate-pulse"
                />
              ))}
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post, i) => (
                <PostCard key={post.id} post={post} index={i} />
              ))}
            </div>
          )}

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 border-t border-[#c9a84c]/10 pt-8"
          >
            <p className="text-center text-gray-500 text-xs max-w-2xl mx-auto leading-relaxed">
              Blog content is for general information only and does not constitute immigration advice.
              Consult a CICC-regulated RCIC for your specific situation. RCIC License R708868.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </>
  )
}
