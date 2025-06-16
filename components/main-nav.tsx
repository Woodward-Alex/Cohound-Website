// components/main-nav.tsx

import Link from "next/link"
import { Badge } from "@/components/ui/badge"

export function MainNav() {
  return (
    <nav className="flex items-center gap-4 sm:gap-6">
      <Link
        href="#features"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        Features
      </Link>
      <Link
        href="#map"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        Find Places
      </Link>
      <Link
        href="#community"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        Community
      </Link>
      <Link
        href="#download"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        Download
      </Link>
      <Link
        href="#chatbot"
        className="text-sm font-medium transition-colors hover:text-primary flex items-center gap-1.5"
      >
        Cohound Chatbot
        <Badge
          variant="outline"
          className="bg-primary/20 text-primary px-1.5 py-0.5 text-xs"
        >
          New
        </Badge>
      </Link>
    </nav>
  )
}
