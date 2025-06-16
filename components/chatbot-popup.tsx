"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"
import { Chatbot } from "@/components/chatbot"
import { useChatbot } from "@/components/chatbot-context"

export function ChatbotPopup() {
  const {isOpen, setIsOpen} = useChatbot()
  const [showButton, setShowButton] = useState(false)

  // Delay showing the button to avoid immediate distraction
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true)
    }, 2000) // Show after 2 seconds
    return () => clearTimeout(timer)
  }, [])

  if (!showButton) return null

  return (
    <>
      {isOpen ? (
        <Chatbot onClose={() => setIsOpen(false)} />
      ) : (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-4 right-4 h-14 w-14 rounded-full shadow-lg z-40 bg-primary hover:bg-primary/90 text-primary-foreground"
          aria-label="Open AI Assistant"
        >
          <Sparkles size={30} />
        </Button>
      )}
    </>
  )
}
