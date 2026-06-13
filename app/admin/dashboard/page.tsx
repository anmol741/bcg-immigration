"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"

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

const CATEGORIES = [
  "Express Entry",
  "Study Visa",
  "Work Permit",
  "BC PNP",
  "Family Sponsorship",
  "General",
]

function today() {
  return new Date().toISOString().split("T")[0]
}

const EMPTY_FORM = {
  title: "",
  category: CATEGORIES[0],
  date: today(),
  excerpt: "",
  content: "",
  thumbnail: "",
}

export default function AdminDashboard() {
  const router = useRouter()
  const [authed, setAuthed] = useState(false)
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [form, setForm] = useState(EMPTY_FORM)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [successMsg, setSuccessMsg] = useState("")
  const [errorMsg, setErrorMsg] = useState("")
  const [submitting, setSubmitting] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Auth check — localStorage only for login state
  useEffect(() => {
    try {
      if (localStorage.getItem("bcg_admin_auth") !== "true") {
        router.replace("/admin")
        return
      }
      setAuthed(true)
    } catch {
      router.replace("/admin")
    }
  }, [router])

  // Fetch posts from API whenever authed
  useEffect(() => {
    if (!authed) return
    refreshPosts()
  }, [authed])

  function refreshPosts() {
    fetch("/api/posts")
      .then((r) => r.json())
      .then((data: BlogPost[]) => {
        if (Array.isArray(data)) setPosts(data)
      })
      .catch(() => {})
  }

  function showSuccess(msg: string) {
    setSuccessMsg(msg)
    setErrorMsg("")
    setTimeout(() => setSuccessMsg(""), 4000)
  }

  function showError(msg: string) {
    setErrorMsg(msg)
    setSuccessMsg("")
    setTimeout(() => setErrorMsg(""), 6000)
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitting(true)

    const payload = {
      title: form.title,
      category: form.category,
      date: form.date,
      excerpt: form.excerpt,
      content: form.content,
      thumbnail: form.thumbnail || null,
    }

    try {
      if (editingId) {
        // Regenerate slug from updated title
        const slug = form.title
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/(^-|-$)/g, "")

        const res = await fetch(`/api/posts/${editingId}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...payload, slug }),
        })
        const json = await res.json()
        if (!res.ok) throw new Error(json.error ?? "Update failed")

        setEditingId(null)
        showSuccess("Post Updated Successfully")
      } else {
        const res = await fetch("/api/posts", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        })
        const json = await res.json()
        if (!res.ok) throw new Error(json.error ?? "Publish failed")

        showSuccess("Post Published!")
      }

      setForm(EMPTY_FORM)
      refreshPosts()
    } catch (err: unknown) {
      showError(err instanceof Error ? err.message : "Something went wrong")
    } finally {
      setSubmitting(false)
    }
  }

  function handleEdit(post: BlogPost) {
    setEditingId(post.id)
    setForm({
      title: post.title,
      category: post.category,
      date: post.date,
      excerpt: post.excerpt,
      content: post.content,
      thumbnail: post.thumbnail ?? "",
    })
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  async function handleDelete(id: string) {
    if (!window.confirm("Are you sure you want to delete this post?")) return

    try {
      const res = await fetch(`/api/posts/${id}`, { method: "DELETE" })
      const json = await res.json()
      if (!res.ok) throw new Error(json.error ?? "Delete failed")
      showSuccess("Post Deleted")
      refreshPosts()
    } catch (err: unknown) {
      showError(err instanceof Error ? err.message : "Delete failed")
    }
  }

  function handleLogout() {
    localStorage.removeItem("bcg_admin_auth")
    router.push("/admin")
  }

  function handleCancel() {
    setEditingId(null)
    setForm(EMPTY_FORM)
  }

  if (!authed) return null

  return (
    <div className="min-h-screen bg-[#0a1628]">
      {/* Admin Navbar */}
      <nav className="bg-[#050e1a] border-b border-[#c9a84c]/15 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#c9a84c] flex items-center justify-center text-[#0a1628] font-bold text-xs shadow-lg shadow-[#c9a84c]/25">
                BCG
              </div>
              <span
                className="text-white font-bold text-base"
                style={{ fontFamily: "var(--font-playfair-display)" }}
              >
                BCG Admin Panel
              </span>
            </div>

            <div className="hidden sm:flex items-center gap-6">
              <Link
                href="/blog"
                target="_blank"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                View Blog
              </Link>
              <Link href="/admin/dashboard" className="text-[#c9a84c] text-sm font-medium">
                Dashboard
              </Link>
              <button
                onClick={handleLogout}
                className="text-sm text-gray-400 hover:text-red-400 transition-colors"
              >
                Logout
              </button>
            </div>

            <button
              className="sm:hidden text-gray-400 hover:text-white p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menu"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="sm:hidden overflow-hidden border-t border-[#c9a84c]/10"
              >
                <div className="py-3 space-y-1">
                  <Link
                    href="/blog"
                    target="_blank"
                    className="block px-2 py-2 text-gray-400 hover:text-white text-sm"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    View Blog
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-2 py-2 text-gray-400 hover:text-red-400 text-sm"
                  >
                    Logout
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-14">
        {/* ── SECTION A: Add / Edit Post ── */}
        <section>
          <h2
            className="text-2xl font-bold text-white mb-6"
            style={{ fontFamily: "var(--font-playfair-display)" }}
          >
            {editingId ? "Edit Post" : "Add New Post"}
          </h2>

          {/* Success / Error banners */}
          <AnimatePresence>
            {successMsg && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                className="mb-6 bg-[#c9a84c]/10 border border-[#c9a84c]/40 text-[#c9a84c] text-sm font-semibold px-5 py-3 rounded-xl"
              >
                ✓ {successMsg}
              </motion.div>
            )}
            {errorMsg && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                className="mb-6 bg-red-500/10 border border-red-500/30 text-red-400 text-sm font-medium px-5 py-3 rounded-xl"
              >
                ✗ {errorMsg}
              </motion.div>
            )}
          </AnimatePresence>

          <form
            onSubmit={handleSubmit}
            className="bg-[#0f2040] border border-[#c9a84c]/20 rounded-2xl p-7 space-y-6"
          >
            {/* Title */}
            <div>
              <label className="block text-gray-400 text-sm mb-2">Post Title *</label>
              <input
                name="title"
                value={form.title}
                onChange={handleChange}
                required
                placeholder="e.g. Express Entry Draw 2025: What You Need to Know"
                className="w-full bg-[#0a1628] border border-[#c9a84c]/20 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-[#c9a84c]/60 transition-colors"
              />
            </div>

            {/* Category + Date */}
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-gray-400 text-sm mb-2">Category *</label>
                <select
                  name="category"
                  value={form.category}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#0a1628] border border-[#c9a84c]/20 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#c9a84c]/60 transition-colors"
                >
                  {CATEGORIES.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-gray-400 text-sm mb-2">Date *</label>
                <input
                  type="date"
                  name="date"
                  value={form.date}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#0a1628] border border-[#c9a84c]/20 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#c9a84c]/60 transition-colors"
                />
              </div>
            </div>

            {/* Excerpt */}
            <div>
              <label className="block text-gray-400 text-sm mb-2">Excerpt * (2–3 sentences)</label>
              <textarea
                name="excerpt"
                value={form.excerpt}
                onChange={handleChange}
                required
                rows={3}
                placeholder="A brief summary shown on the blog listing page…"
                className="w-full bg-[#0a1628] border border-[#c9a84c]/20 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-[#c9a84c]/60 transition-colors resize-none"
              />
            </div>

            {/* Full Content */}
            <div>
              <label className="block text-gray-400 text-sm mb-2">Full Content *</label>
              <textarea
                name="content"
                value={form.content}
                onChange={handleChange}
                required
                rows={10}
                placeholder="Write the full article here. Separate paragraphs with blank lines…"
                className="w-full bg-[#0a1628] border border-[#c9a84c]/20 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-[#c9a84c]/60 transition-colors resize-y"
              />
            </div>

            {/* Thumbnail */}
            <div>
              <label className="block text-gray-400 text-sm mb-2">Thumbnail URL (optional)</label>
              <input
                name="thumbnail"
                value={form.thumbnail}
                onChange={handleChange}
                placeholder="https://example.com/image.jpg"
                className="w-full bg-[#0a1628] border border-[#c9a84c]/20 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-[#c9a84c]/60 transition-colors"
              />
            </div>

            {/* Buttons */}
            <div className="flex items-center gap-4 flex-wrap">
              <motion.button
                type="submit"
                disabled={submitting}
                whileHover={{ scale: submitting ? 1 : 1.02 }}
                whileTap={{ scale: submitting ? 1 : 0.98 }}
                className="bg-[#c9a84c] hover:bg-[#e8c76a] disabled:opacity-60 text-[#0a1628] font-bold px-7 py-3 rounded-xl text-sm tracking-wide transition-colors"
              >
                {submitting
                  ? "Saving…"
                  : editingId
                  ? "Update Post"
                  : "Publish Post"}
              </motion.button>

              {editingId && (
                <button
                  type="button"
                  onClick={handleCancel}
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Cancel
                </button>
              )}
            </div>
          </form>
        </section>

        {/* ── SECTION B: Manage Posts ── */}
        <section>
          <h2
            className="text-2xl font-bold text-white mb-6"
            style={{ fontFamily: "var(--font-playfair-display)" }}
          >
            Manage Posts
            <span className="ml-3 text-base font-normal text-gray-500">
              ({posts.length} post{posts.length !== 1 ? "s" : ""})
            </span>
          </h2>

          {posts.length === 0 ? (
            <div className="bg-[#0f2040] border border-[#c9a84c]/10 rounded-2xl p-10 text-center text-gray-500">
              No posts yet. Publish your first post above.
            </div>
          ) : (
            <div className="space-y-3">
              <AnimatePresence>
                {posts.map((post) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.25 }}
                    className="bg-[#0f2040] border border-[#c9a84c]/15 rounded-xl px-5 py-4 flex flex-col sm:flex-row sm:items-center gap-4"
                  >
                    <div className="flex-1 min-w-0">
                      <p className="text-white font-medium text-sm truncate">{post.title}</p>
                      <p className="text-gray-500 text-xs mt-0.5">
                        {post.date} &middot; {post.category}
                      </p>
                    </div>
                    <div className="flex items-center gap-3 shrink-0">
                      <button
                        onClick={() => handleEdit(post)}
                        className="text-xs font-semibold text-[#c9a84c] border border-[#c9a84c]/30 hover:bg-[#c9a84c]/10 px-4 py-1.5 rounded-lg transition-colors"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(post.id)}
                        className="text-xs font-semibold text-red-400 border border-red-500/30 hover:bg-red-500/10 px-4 py-1.5 rounded-lg transition-colors"
                      >
                        Delete
                      </button>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}
        </section>
      </div>
    </div>
  )
}
