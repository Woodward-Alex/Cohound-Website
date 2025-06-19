"use client";

import { MobileNav } from "@/components/mobile-nav";
import { MainNav } from "@/components/main-nav";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { MapSection } from "@/components/map-section";
import { CommunitySection } from "@/components/community-section";
import { DogProfiles } from "@/components/dog-profiles";
import { GuidesSection } from "@/components/guides-section";
import { VolunteeringSection } from "@/components/volunteering-section";
import { DownloadApp } from "@/components/download-app";
import { ChatbotPopup } from "@/components/chatbot-popup";
import { CookieConsentBanner } from "@/components/cookie-consent-banner";
import Link from "next/link"; 
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { useIOS } from "@/components/useIOS";

export default function Home() {
  const isIOS = useIOS();

  return (
    <div className={`flex min-h-screen flex-col ${isIOS ? 'ios-device' : ''}`}>
      {/* Header with iOS safe area padding */}
      <header className={`sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 ${
        isIOS ? 'pt-[env(safe-area-inset-top)]' : ''
      }`}>
        <div className="container flex h-16 items-center">
          {/* Left: Logo */}
          <Link href="/" className="flex items-center gap-2 mr-8">
            <Logo iconOnly height={28} width={28} />
            <span className="font-semibold">Cohound</span>
          </Link>

          {/* Left-aligned Main Navigation Links */}
          <div className="hidden md:flex items-center ml-4">
            <MainNav />
          </div>

          {/* Right: Auth Buttons and Mobile Menu */}
          <div className="flex items-center gap-4 ml-auto">
            <div className="hidden md:flex items-center gap-2">
              <Button variant="outline" size="sm" asChild>
                <Link href="/login">Log In</Link>
              </Button>
              <Button size="sm" asChild>
                <Link href="/signup">Sign Up</Link>
              </Button>
            </div>
            <div className="md:hidden">
              <MobileNav />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content with iOS safe area padding */}
      <main 
        id="main-content" 
        className={`flex-1 container px-4 sm:px-6 md:px-8 ${
          isIOS ? 'pb-[env(safe-area-inset-bottom)]' : ''
        }`}
      >
        <Hero />
        <Features />
        <MapSection />
        <CommunitySection />
        <DownloadApp />
        <DogProfiles />
        <GuidesSection />
        <VolunteeringSection />
      </main>

      {/* Footer - iOS safe area handled inside Footer component */}
      <Footer />

      {/* Floating Components with iOS adjustments */}
      <div className={`fixed bottom-4 right-4 ${
        isIOS ? 'mb-[env(safe-area-inset-bottom)]' : ''
      }`}>
        <ChatbotPopup />
      </div>
      
      <CookieConsentBanner />
    </div>
  );
}