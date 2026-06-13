import type { Metadata } from "next"
import TopBar from "../components/TopBar"
import Navbar from "../components/Navbar"
import PageHero from "../components/PageHero"
import AboutDetail from "../components/AboutDetail"
import CTABanner from "../components/CTABanner"
import Footer from "../components/Footer"
import FloatingButtons from "../components/FloatingButtons"
import MapleLeaves from "../components/MapleLeaves"

export const metadata: Metadata = {
  title: "About Us | BCG Immigration Consultancy Ltd.",
  description:
    "BCG Immigration Consultancy Ltd. is a CICC-regulated firm in Surrey, BC providing expert Canadian immigration services — Study Visas, Work Permits, PR and more.",
}

export default function AboutPage() {
  return (
    <>
      <MapleLeaves />
      <TopBar />
      <Navbar />
      <PageHero
        eyebrow="CICC Regulated · RCIC R708868"
        line1="About Us"
        line2="Who We Are"
        breadcrumb={[{ label: "About Us" }]}
      />
      <AboutDetail />
      <CTABanner />
      <Footer />
      <FloatingButtons />
    </>
  )
}
