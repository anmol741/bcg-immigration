import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "BCG Immigration Consultancy Ltd. | RCIC Licensed Immigration Services",
  description:
    "BCG Immigration Consultancy Ltd. — Expert Canadian immigration services for Study Visas, Work Permits, Permanent Residency & more. RCIC License R708868. Serving Surrey, BC.",
  keywords:
    "Canadian immigration, study visa, work permit, permanent residency, express entry, RCIC, Surrey BC, immigration consultant",
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="antialiased" suppressHydrationWarning={true}>
        {children}
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script
          src="https://myappzchat.com/production/master/widget/embed-widget.umd.js"
          data-widget-id="b003c446-7e95-4bd0-a797-f241f903863f"
          async
        />
      </body>
    </html>
  )
}
