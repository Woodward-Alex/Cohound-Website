"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Cookie } from "lucide-react"
import Link from "next/link"

export function CookieConsentBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent_cohound")
    if (!consent) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookie_consent_cohound", "accepted")
    setIsVisible(false)
    // Here you might initialize analytics or other cookie-dependent services
  }

  const handleDecline = () => {
    localStorage.setItem("cookie_consent_cohound", "declined")
    setIsVisible(false)
    // Handle declined consent, e.g., disable certain features
  }

  if (!isVisible) {
    return null
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-background border-t p-4 shadow-md z-[100]">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-start gap-3">
          <Cookie className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
          <p className="text-sm text-muted-foreground">
            We use cookies to enhance your experience, analyze site traffic, and for marketing purposes. By clicking
            "Accept", you consent to our use of cookies. You can learn more in our{" "}
            <Link href="/privacy-policy#cookies" className="underline hover:text-primary">
              Cookie Policy
            </Link>
            .
          </p>
        </div>
        <div className="flex gap-2 flex-shrink-0">
          <Button variant="outline" onClick={handleDecline}>
            Decline
          </Button>
          <Button onClick={handleAccept}>Accept</Button>
        </div>
      </div>
    </div>
  )
}
