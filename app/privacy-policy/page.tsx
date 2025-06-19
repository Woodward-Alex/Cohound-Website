"use client"
import { useEffect } from "react"
import { SiteHeader } from "@/components/site-header"
import { Footer } from "@/components/footer"
import { ChatbotPopup } from "@/components/chatbot-popup"
import { CookieConsentBanner } from "@/components/cookie-consent-banner"
import Link from "next/link"
import { Logo } from "@/components/logo"

export default function PrivacyPolicyPage() {
  useEffect(() => {
    const mainContent = document.getElementById("main-content")
    if (mainContent) {
      mainContent.scrollIntoView({ behavior: "auto", block: "start" })
    }
  }, [])

  return (
    <>
      
      <div className="flex min-h-screen flex-col">
        <SiteHeader />
        
        <main id="main-content" className="flex-1 p-6 center-align">
          <div className="container mx-auto py-12 px-4 md:px-6">
            <h1 className="text-3xl font-bold mb-6">
              <Link href="/" className="flex items-center gap-2">
                <Logo iconOnly height={100} width={100} />Cohound Legal Policies
              </Link>
            </h1>
            <br/>
            
            <h1 className="text-3xl font-bold mb-6">
              <Link href="/" className="flex items-center gap-2">
                Privacy Policy
              </Link>
            </h1>
            
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-2">1. Introduction</h2>
              <p>
                Welcome to Cohound. We are committed to protecting your personal information and your right to privacy.
              </p>
              <br />
            </section>

            <section id="cookies">
              <h2 className="text-xl font-semibold text-foreground mb-2"> 
                2. Cookies and Similar Technologies
              </h2>
              <p>
                We use cookies and similar tracking technologies to access or store information.
              </p>
              <h3 className="text-lg font-semibold text-foreground mt-4 mb-2">Cookie Policy</h3>
              <p>Cookies are small text files stored on your device when you visit certain web pages.</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Ensure the basic functionalities of our website.</li>
                <li>Understand how you use our website and improve your experience.</li>
                <li>Remember your preferences, such as language or region.</li>
              </ul>
              <br/>
            </section>
            
            {/* Rest of your privacy policy sections */}
            
            <h1 className="text-3xl font-bold mb-6"><br/>
              <Link href="/" className="flex items-center gap-2">
                Terms of Service
              </Link>
            </h1>
            
            <section>
              <p>By accessing Cohound or using our website and/or AI assistant, you agree to the following Terms of Service.</p>
              <h3 className="text-lg font-semibold text-foreground mt-4 mb-2">1. Eligibility</h3>
              <p>You must be at least 18 years old or have permission from a guardian.</p>
              {/* Rest of your terms sections */}
            </section>
          </div>
        </main>
        
        <Footer />
        <ChatbotPopup />
        <CookieConsentBanner />
      </div>
    </>
  )
}