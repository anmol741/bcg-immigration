export default function Loading() {
  return (
    <div className="min-h-screen bg-[#0a1628] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="relative">
          <div className="w-16 h-16 rounded-full bg-[#c9a84c] flex items-center justify-center text-[#0a1628] font-bold text-lg shadow-2xl shadow-[#c9a84c]/30 animate-pulse">
            BCG
          </div>
          <div className="absolute inset-0 rounded-full bg-[#c9a84c] opacity-20 animate-ping" />
        </div>
        <p
          className="text-[#c9a84c] text-xs font-semibold tracking-[0.3em] uppercase"
          style={{ fontFamily: "var(--font-playfair-display)" }}
        >
          BCG Immigration
        </p>
      </div>
    </div>
  )
}
