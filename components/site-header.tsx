import { MainNav } from "./main-nav"
import { MobileNav } from "./mobile-nav"
import Link from "next/link"
import { Logo } from "./logo"
import { Button } from "./ui/button"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
       
        <Link href="/" className="flex items-center gap-2 mr-8">
          <Logo iconOnly height={28} width={28} />
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