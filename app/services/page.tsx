import type { Metadata } from "next"
import TopBar from "../components/TopBar"
import Navbar from "../components/Navbar"
import PageHero from "../components/PageHero"
import ServicesCards from "../components/ServicesCards"
import ServicesProcess from "../components/ServicesProcess"
import CTABanner from "../components/CTABanner"
import Footer from "../components/Footer"
import FloatingButtons from "../components/FloatingButtons"
import MapleLeaves from "../components/MapleLeaves"

export const metadata: Metadata = {
  title: "Services | BCG Immigration Consultancy Ltd.",
  description:
    "Expert Student Visa, Work Permits & LMIA, Permanent Residency, and Express Entry services by BCG Immigration — RCIC License R708868, Surrey BC.",
}

export default function ServicesPage() {
  return (
    <>
      <MapleLeaves />
      <TopBar />
      <Navbar />
      <PageHero
        eyebrow="Student Visa · Work Permits · PR"
        line1="We Handle"
        line2="Your Immigration"
        breadcrumb={[{ label: "Services" }]}
      />
      <ServicesCards />
      <ServicesProcess />
      <CTABanner />
      <Footer />
      <FloatingButtons />
    </>
  )
}
