// components/mobile-nav.tsx
"use client"

import { Menu } from "lucide-react"
import { useRouter, usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { useChatbot } from "@/components/chatbot-context"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"
import Link from "next/link"
import { Logo } from "@/components/logo"
import { Badge } from "@/components/ui/badge"
import { useAuth } from "@/contexts/AuthContext"

// Custom hook for smooth scrolling to sections
function useScrollToSection() {
  const router = useRouter()
  const pathname = usePathname()
 
  const scrollToSection = (sectionId: string) => {
    const scrollToElement = () => {
      const element = document.getElementById(sectionId)
      if (element) {
        // Add offset for fixed header if you have one
        const headerOffset = 80 // Adjust this value based on your header height
        const elementPosition = element.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset
 
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })
        return true
      }
      return false
    }
 
    if (pathname === '/') {
      // Already on home page, just scroll
      setTimeout(scrollToElement, 100)
    } else {
      // Navigate to home page first, then scroll
      router.push('/')
      // Wait for navigation to complete
      const checkAndScroll = () => {
        if (window.location.pathname === '/') {
          scrollToElement()
        } else {
          setTimeout(checkAndScroll, 100)
        }
      }
      setTimeout(checkAndScroll, 200)
    }
  }
 
  return scrollToSection
}

export function MobileNav() {
  const { setIsOpen } = useChatbot()
  const scrollToSection = useScrollToSection()
  const [sheetOpen, setSheetOpen] = useState(false)
  const { isAuthenticated, signOut } = useAuth()
 
  const goToSection = (section: string) => {
    setSheetOpen(false)
    setTimeout(() => {
      scrollToSection(section)
    }, 200)
  }
 
  const handleChatbotOpen = () => {
    setSheetOpen(false)
    setTimeout(() => {
      setIsOpen(true)
    }, 100)
  }

  const handleSignOut = async () => {
    setSheetOpen(false)
    await signOut()
  }
 
  return (
    <div className="md:hidden">
      <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-full max-w-xs sm:max-w-sm">
          <SheetTitle>
            <VisuallyHidden>Mobile Navigation Menu</VisuallyHidden>
          </SheetTitle>
 
          <div className="grid gap-6 py-6">
            <Link
              href="/"
              className="flex items-center gap-2 text-lg font-semibold"
              onClick={() => setSheetOpen(false)}
            >
              <Logo iconOnly height={24} width={24} />
              <span>Cohound</span>
            </Link>
 
            <div className="grid gap-4">
              <button
                onClick={() => goToSection("features")}
                className="text-sm font-medium text-left hover:text-primary transition-colors p-2 rounded hover:bg-accent"
              >
                Features
              </button>
              <button
                onClick={() => goToSection("map")}
                className="text-sm font-medium text-left hover:text-primary transition-colors p-2 rounded hover:bg-accent"
              >
                Find Places
              </button>
              <button
                onClick={() => goToSection("community")}
                className="text-sm font-medium text-left hover:text-primary transition-colors p-2 rounded hover:bg-accent"
              >
                Community
              </button>
              <button
                onClick={() => goToSection("download")}
                className="text-sm font-medium text-left hover:text-primary transition-colors p-2 rounded hover:bg-accent"
              >
                Download
              </button>
              <button
                onClick={handleChatbotOpen}
                className="text-sm font-medium flex items-center gap-1.5 w-full text-left hover:text-primary transition-colors p-2 rounded hover:bg-accent"
              >
                Cohound Chatbot
                <Badge
                  variant="outline"
                  className="bg-primary/20 text-primary px-1.5 py-0.5 text-xs"
                >
                  New
                </Badge>
              </button>
            </div>
 
            <div className="grid gap-2">
              {isAuthenticated ? (
                <>
                  <Button variant="outline" asChild className="w-full">
                    <Link href="/dashboard" onClick={() => setSheetOpen(false)}>
                      Dashboard
                    </Link>
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full" 
                    onClick={handleSignOut}
                  >
                    Sign Out
                  </Button>
                </>
              ) : (
                <>
                  <Button variant="outline" asChild className="w-full">
                    <Link href="/login" onClick={() => setSheetOpen(false)}>
                      Log In
                    </Link>
                  </Button>
                  <Button asChild className="w-full">
                    <Link href="/signup" onClick={() => setSheetOpen(false)}>
                      Sign Up
                    </Link>
                  </Button>
                </>
              )}
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}