"use client"

import { useRouter } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { useChatbot } from "@/components/chatbot-context"

export function MainNav() {
  const router = useRouter()
  const { setIsOpen } = useChatbot()

  const navigateToSection = (section: string) => {
    router.push(`/#${section}`)
  }

  return (
    <nav className="flex items-center gap-4 sm:gap-6">
      <button
        onClick={() => navigateToSection("features")}
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        Features
      </button>
      <button
        onClick={() => navigateToSection("map")}
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        Find Places
      </button>
      <button
        onClick={() => navigateToSection("community")}
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        Community
      </button>
      <button
        onClick={() => navigateToSection("download")}
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        Download
      </button>
      <button
        onClick={() => setIsOpen(true)}
        className="text-sm font-medium transition-colors hover:text-primary flex items-center gap-1.5"
      >
        Cohound Chatbot
        <Badge
          variant="outline"
          className="bg-primary/20 text-primary px-1.5 py-0.5 text-xs cursor-pointer"
        >
          New
        </Badge>
      </button>
    </nav>
  )
}