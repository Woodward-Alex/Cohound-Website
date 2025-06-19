"use client";

import { MainNav } from "./main-nav"
import { MobileNav } from "./mobile-nav"
import Link from "next/link"
import { Logo } from "./logo"
import { Button } from "./ui/button"
import { useIOS } from "./useIOS"

export function SiteHeader() {
  const isIOS = useIOS()
  
  return (
    <header className={`sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 ${
      isIOS ? 'pt-[env(safe-area-inset-top)]' : ''
    }`}>
      <div className="container flex h-16 items-center">
        <Link href="/" className="flex items-center gap-2 mr-8">
          <Logo iconOnly height={30} width={30} />
          <span className="font-semibold">Cohound</span>
        </Link>

        {/* Center: Main Navigation Links */}
        <div className="hidden md:flex items-center ml-6">
          <MainNav />
        </div>

        {/* Right: Auth Buttons (desktop) and Mobile Menu */}
        <div className="flex items-center gap-4 ml-auto">
          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center gap-2">
            <Button variant="outline" size="sm" asChild>
              <Link href="/login">Log In</Link>
            </Button>
            <Button size="sm" asChild>
              <Link href="/signup">Sign Up</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  )
}