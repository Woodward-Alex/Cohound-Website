"use client"
import { useEffect } from "react"
import Link from "next/link"
import { Logo } from "@/components/logo"
import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"
import { ChatbotPopup } from "@/components/chatbot-popup" // Added
import { CookieConsentBanner } from "@/components/cookie-consent-banner" // Added
import { MobileNav } from "@/components/mobile-nav"

export default function PrivacyPolicyPage() {
 useEffect(() => {
    const mainContent = document.getElementById("main-content");
    if (mainContent) {
      mainContent.scrollIntoView({ behavior: "auto", block: "start" });
    }
  }, []);

  return (
  <>
  <a href="#main-content" className="skip-to-content">
        Skip to content
      </a>
      
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <MainNav />
          <MobileNav />
        </div>
      </header>
      <main id="main-content" className="flex-1 p-6 center-align">
        <div className="container mx-auto py-12 px-4 md:px-6">
           
        <h1 className="text-3xl font-bold mb-6"><Link href="/" className="flex items-center gap-2">
              <Logo iconOnly height={100} width={100} />Cohound Legal Policies
              <span className="font-bold text-lg"></span>
            </Link>
            </h1><br/>
            <h1 className="text-3xl font-bold mb-6"><Link href="/" className="flex items-center gap-2">
              Privacy Policy
              <span className="font-bold text-lg"></span>
            </Link>
            </h1>
            
         <section>
          <h2 className="text-xl font-semibold text-foreground mb-2">1. Introduction
          </h2>
          <p>
            Welcome to Cohound. We are committed to protecting your personal information and your right to privacy. If
            you have any questions or concerns about this privacy notice, or our practices with regards to your personal
            information, please contact us.
            </p><br />
        </section>

          <section id="cookies">
          <h2 className="text-xl font-semibold text-foreground mb-2"> 
            2. Cookies and Similar Technologies
          </h2>
          <p>
            We use cookies and similar tracking technologies (like web beacons and pixels) to access or store
            information. Specific information about how we use such technologies and how you can refuse certain cookies
            is set out in our Cookie Policy section below.
          </p>
          <h3 className="text-lg font-semibold text-foreground mt-4 mb-2">Cookie Policy</h3>
          <p>
            Cookies are small text files stored on your device (computer, tablet, mobile phone) when you visit certain
            web pages. We use cookies to:
          </p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Ensure the basic functionalities of our website.</li>
            <li>Understand how you use our website and improve your experience.</li>
            <li>Remember your preferences, such as language or region.</li>
            <li>For marketing and advertising purposes (with your consent).</li>
          </ul>
          <p className="mt-2">
            You can manage your cookie preferences through your browser settings. Please note that disabling certain
            cookies may affect the functionality of our website.
            Our AI Chatbot feature may use session cookies to maintain conversation context. These are typically
            essential for the feature to work correctly.
          </p> <br/>
        </section>
        
         <section>
          <h2 className="text-xl font-semibold text-foreground mb-2">3. AI Chatbot</h2>
          <p>
            Our CoHound AI Assistant is designed to provide helpful information. Conversations with the chatbot may be
            logged for quality assurance and improvement purposes. Please do not share sensitive personal information
            with the chatbot.
          </p> <br/>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-2">4. Contact Us</h2>
          <p>
            If you have questions or comments about this notice, you may email us at contact@cohound.com.
          </p> <br />
        </section>
        

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-2"><br/>5. Changes to This Privacy Policy</h2>
          <p>
            We may update this privacy policy from time to time. We will notify you of any changes by posting the new
            privacy policy on this page. You are advised to review this privacy policy periodically for any changes.
            Changes to this privacy policy are effective when they are posted on this page.
          </p>
        </section>
        
        
<h1 className="text-3xl font-bold mb-6"><br/><Link href="/" className="flex items-center gap-2">
              Terms of Service
              <span className="font-bold text-lg"></span>
            </Link>
            </h1>
            <section>
          <p>
            By accessing Cohound or using our website and/or AI assistant, you agree to the following Terms of Service.</p>

          <h3 className="text-lg font-semibold text-foreground mt-4 mb-2">1. Eligibility</h3>You must be at least 18 years old or have permission from a guardian.
          <h3 className="text-lg font-semibold text-foreground mt-4 mb-2">2. Acceptable Use</h3>Do not use our site for illegal or harmful purposes.
          <h3 className="text-lg font-semibold text-foreground mt-4 mb-2">3. Intellectual Property</h3> All content is owned by or licensed to Cohound. 
            <h3 className="text-lg font-semibold text-foreground mt-4 mb-2">4. Disclaimer</h3> Our site and services are provided "as is" without warranties.
            <h3 className="text-lg font-semibold text-foreground mt-4 mb-2">5. Intellectual Property</h3> We are not liable for indirect or consequential damages.
            <h3 className="text-lg font-semibold text-foreground mt-4 mb-2">6. Limitation of Liability</h3> We may update these terms; continued use means you accept any changes.
            <h3 className="text-lg font-semibold text-foreground mt-4 mb-2">7. Governing Law</h3> These terms are governed by the laws of England and Wales.
        
          <br/><h3 className="text-lg font-semibold text-foreground mt-4 mb-2">Last updated: {new Date().toLocaleDateString()}</h3> 
          If you have any questions about any of our policies, you can contact us at:
          📧 contact@cohound.com
        </section>
        </div>
      </main>
      <Footer />
      <ChatbotPopup /> {/* Added Chatbot Popup */}
      <CookieConsentBanner /> {/* Added Cookie Consent Banner */}
    </div>
    </>
  )
}