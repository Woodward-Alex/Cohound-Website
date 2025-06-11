"use client"
import Link from "next/link"
import { Logo } from "@/components/logo"
import { Button } from "@/components/ui/button"
import { AccessibilityMenu } from "@/components/accessibility-menu"
import { Badge } from "@/components/ui/badge"
import { MobileNav } from "@/components/mobile-nav"   
import { useChatbot} from "@/components/chatbot-context"

export function MainNav() {
  const { setIsOpen } = useChatbot()

  return (
  <>  
      <a href="#main-content" className="skip-to-content">
        Skip to content
      </a>

      <div className="flex w-full items-center justify-between">
        <div className="flex items-center gap-6 md:gap-10">
          <Link href="/" className="hidden items-center space-x-2 md:flex">
            <Logo height={40} width={40} iconOnly />
            <span className="font-bold text-xl">Cohound</span>
          </Link>
          <nav className="hidden gap-6 md:flex items-center">
            <Link href="/#features" className="text-sm font-medium transition-colors hover:text-primary">
              Features
            </Link>
            <Link href="/#map" className="text-sm font-medium transition-colors hover:text-primary">
              Find Places
            </Link>
            <Link href="/#community" className="text-sm font-medium transition-colors hover:text-primary">
              Community
            </Link>
            <Link href="/#download" className="text-sm font-medium transition-colors hover:text-primary">
              Download
            </Link>
               <Button
                onClick={() => setIsOpen(true)}
                className="text-sm font-medium transition-colors hover:text-primary"
                variant="Link">
                 Cohound Chatbot{" "}
                <Badge variant="outline" className="bg-primary/20 text-primary px-1.5 py-0.5 text-xs">
                 New
                </Badge>
                </Button>            
          </nav>
        </div>

        <div className="hidden md:flex items-center gap-2">
          <Button variant="outline" asChild>
            <Link href="/login">Log In</Link>
          </Button>
          <Button asChild>
            <Link href="/signup">Sign Up</Link>
          </Button>
        </div>
      </div>
      </>
  )
}
