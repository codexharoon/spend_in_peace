import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Features from "@/components/features"
import CTA from "@/components/cta"
import Footer from "@/components/footer"
import GradientBackground from "@/components/gradient-background"
import ContactUs from "../components/Contact"

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Background gradients */}
      <GradientBackground />

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Features />
        <CTA />
        <ContactUs/>
        <Footer />
      </div>
    </div>
  )
}

