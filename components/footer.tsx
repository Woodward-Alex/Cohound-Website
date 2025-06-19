"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { AlertTriangle } from "lucide-react"
import { Logo } from "@/components/logo"
import { useIOS } from "@/components/useIOS"

export function Footer() {
   const isIOS = useIOS()
  return (
   <footer className={`w-full border-t bg-background ${
      isIOS ? 'pb-[env(safe-area-inset-bottom)]' : ''
    }`}>
      <div className="container px-4 py-12 md:px-6 md:py-16 lg:py-20">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-6">
          <div className="flex flex-col gap-2">
            <Link href="/" className="flex items-center gap-2">
              <Logo iconOnly height={32} width={32} />
              <span className="font-bold text-lg">Cohound</span>
            </Link>
            <p className="text-sm text-muted-foreground">Where your dog's happiness meets convenience</p>
            <div className="mt-4 flex gap-2">
              <Button variant="ghost" size="icon" asChild>
                <Link href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                  <span className="sr-only">Facebook</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                  <span className="sr-only">Instagram</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                  <span className="sr-only">Twitter</span>
                </Link>
              </Button>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold">Features</h3>
            <nav className="flex flex-col gap-2">
              <Link href="#" className="text-sm text-muted-foreground hover:underline">
                Maps & Services
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:underline">
                Dog Matchmaking
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:underline">
                Volunteering
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:underline">
                Guides & Resources
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:underline">
                Events & Meetups
              </Link>
            </nav>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold">Company</h3>
            <nav className="flex flex-col gap-2">
              <Link href="#" className="text-sm text-muted-foreground hover:underline">
                About Us
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:underline">
                Sponsorship & Advertising
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:underline">
                Blog
              </Link>
            </nav>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold">Stay Updated</h3>
            <p className="text-sm text-muted-foreground">Subscribe to our newsletter for the latest updates.</p>
            <div className="mt-2 flex gap-2">
              <Input type="email" placeholder="Enter your email" />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-lg border bg-amber-50 p-4">
          {" "}
          {/* Removed dark:bg-amber-950 */}
          <div className="flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 flex-shrink-0 text-amber-600" /> {/* Removed dark:text-amber-400 */}
            <div>
              <h4 className="font-semibold text-amber-800">Safety Disclaimer</h4> {/* Removed dark:text-amber-200 */}
              <p className="text-sm text-amber-700">
                {" "}
                {/* Removed dark:text-amber-300 */}
                Cohound is designed to connect dog owners and provide information about dog-friendly places, but users
                should exercise caution when meeting new people or visiting new locations. Always meet in public places,
                verify information independently, and use your best judgment when arranging dog swaps or meetups
                Cohound is not responsible for incidents that may occur during in-person meetings or while using
                services found through our platform.
                </p>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t pt-6">
          <div className="flex flex-col items-center justify-between gap-2 sm:flex-row">
            <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Cohound. All rights reserved.</p>
            <nav className="flex gap-4">
              <Link href="/privacy-policy#cookies" className="text-sm text-muted-foreground hover:underline">
                Privacy Policy
              </Link>
              <Link href="/privacy-policy#cookies" className="text-sm text-muted-foreground hover:underline">
                Terms of Service
              </Link>
               <Link href="/privacy-policy#cookies" className="text-sm text-muted-foreground hover:underline">
                Contact & Support
              </Link>
              <Link href="/privacy-policy#cookies" className="text-sm text-muted-foreground hover:underline">
                Cookie Policy
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}
