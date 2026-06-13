import type { Metadata } from "next"
import TopBar from "../components/TopBar"
import Navbar from "../components/Navbar"
import PageHero from "../components/PageHero"
import ContactForm from "../components/ContactForm"
import ContactMap from "../components/ContactMap"
import Footer from "../components/Footer"
import FloatingButtons from "../components/FloatingButtons"
import MapleLeaves from "../components/MapleLeaves"

export const metadata: Metadata = {
  title: "Contact Us | BCG Immigration Consultancy Ltd.",
  description:
    "Contact BCG Immigration in Surrey, BC. Get expert guidance on Study Visas, Work Permits, and Permanent Residency. RCIC License R708868. Free assessment available.",
}

export default function ContactPage() {
  return (
    <>
      <MapleLeaves />
      <TopBar />
      <Navbar />
      <PageHero
        eyebrow="Get In Touch · Free Assessment"
        line1="Contact"
        line2="Us"
        breadcrumb={[{ label: "Contact Us" }]}
      />
      <ContactForm />
      <ContactMap />
      <Footer />
      <FloatingButtons />
    </>
  )
}
