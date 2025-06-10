import { MainNav } from "@/components/main-nav"
import { MobileNav } from "@/components/mobile-nav"
import { Footer } from "@/components/footer"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { MapSection } from "@/components/map-section"
import { CommunitySection } from "@/components/community-section"
import { DogProfiles } from "@/components/dog-profiles"
import { GuidesSection } from "@/components/guides-section"
import { VolunteeringSection } from "@/components/volunteering-section"
import { DownloadApp } from "@/components/download-app"
import { ChatbotPopup } from "@/components/chatbot-popup" // Added
import { CookieConsentBanner } from "@/components/cookie-consent-banner" // Added

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <MainNav />
          <MobileNav />
        </div>
      </header>
      <main id="main-content" className="flex-1">
        <Hero />
        <Features />
        <MapSection />
        <CommunitySection />
        <DownloadApp />
        <DogProfiles />
        <GuidesSection />
        <VolunteeringSection />
      </main>
      <Footer />
      <ChatbotPopup /> {/* Added Chatbot Popup */}
      <CookieConsentBanner /> {/* Added Cookie Consent Banner */}
    </div>
  )
}
