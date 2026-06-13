import TopBar from "./components/TopBar"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import StatsBar from "./components/StatsBar"
import About from "./components/About"
import WhyChooseUs from "./components/WhyChooseUs"
import Services from "./components/Services"
import ImmigrationTools from "./components/ImmigrationTools"
import Process from "./components/Process"
import Testimonials from "./components/Testimonials"
import CTABanner from "./components/CTABanner"
import ContactForm from "./components/ContactForm"
import Footer from "./components/Footer"
import FloatingButtons from "./components/FloatingButtons"
import MapleLeaves from "./components/MapleLeaves"

export default function Home() {
  return (
    <>
      <MapleLeaves />
      <TopBar />
      <Navbar />
      <Hero />
      <StatsBar />
      <About />
      <WhyChooseUs />
      <Services />
      <ImmigrationTools />
      <Process />
      <Testimonials />
      <CTABanner />
      <ContactForm />
      <Footer />
      <FloatingButtons />
    </>
  )
}
