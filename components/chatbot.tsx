"use client"

import type React from "react"
import { useChat } from "ai/react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Dog, Send, User, X } from "lucide-react"
import { Logo } from "./logo"
import { useEffect, useRef } from "react"

interface ChatbotProps {
  onClose: () => void
}

export function Chatbot({ onClose }: ChatbotProps) {
  const { messages, input, handleInputChange, handleSubmit, isLoading, setMessages } = useChat({
    api: "/api/chat",
  })

  const scrollAreaRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    // Scroll to bottom when new messages are added
    if (scrollAreaRef.current) {
      const scrollableView = scrollAreaRef.current.querySelector("div > div") // Target the viewport div
      if (scrollableView) {
        scrollableView.scrollTop = scrollableView.scrollHeight
      }
    }
  }, [messages])

  useEffect(() => {
    // Focus input when chatbot opens
    inputRef.current?.focus()
  }, [])

  const examplePrompts = [
    "Find bike free parks near me",
    "Help with reactive dog training",
    "What companies allow me to bring my puppy to work?",
  ]

  const handleExamplePrompt = (prompt: string) => {
    // Simulate user typing and submitting the prompt
    setMessages([...messages, { id: Date.now().toString(), role: "user", content: prompt }])
    // Manually trigger submission with the example prompt
    const syntheticEvent = { preventDefault: () => {} } as React.FormEvent<HTMLFormElement>
    handleSubmit(syntheticEvent, {
      options: {
        body: {
          messages: [...messages, { id: Date.now().toString(), role: "user", content: prompt }],
        },
      },
    })
  }

  return (
    <div className="fixed bottom-4 right-4 w-full max-w-md h-[70vh] max-h-[600px] bg-card shadow-xl rounded-lg flex flex-col border z-50">
      <header className="bg-primary text-primary-foreground p-4 rounded-t-lg flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Logo iconOnlyWhite width={40} height={40} />
          <div>
            <h3 className="font-semibold text-sm">Cohound AI Assistant </h3>
            <p className="text-xs opacity-80">Powered by OpenAI • Always Free </p>
          </div>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={onClose}
          className="text-primary-foreground hover:bg-primary/80 h-8 w-8"
        >
          <X size={18} />
          <span className="sr-only">Close chat</span>
        </Button>
      </header>

      <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>
        <div className="space-y-4">
          {messages.length === 0 && (
            <div className="p-3 rounded-lg bg-muted text-sm text-muted-foreground flex items-start gap-3">
              <Avatar className="h-8 w-8 border bg-background">
                <AvatarFallback>
                  <Dog size={16} className="text-primary" />
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold">Hi! I'm your Cohound AI assistant! 👋 </p>
                <p>
                  I can help you with dog care questions, find pet-friendly places, and connect you with other dog
                  owners. What would you like to know?
                </p>
              </div>
            </div>
          )}
          {messages.map((m) => (
            <div key={m.id} className={`flex gap-3 text-sm ${m.role === "user" ? "justify-end" : ""}`}>
              {m.role === "assistant" && (
                <Avatar className="h-8 w-8 border bg-background">
                  <AvatarFallback>
                    <Dog size={16} className="text-primary" />
                  </AvatarFallback>
                </Avatar>
              )}
              <div
                className={`p-3 rounded-lg max-w-[80%] ${
                  m.role === "user"
                    ? "bg-primary text-primary-foreground rounded-br-none"
                    : "bg-muted text-muted-foreground rounded-bl-none"
                }`}
              >
                {m.content}
              </div>
              {m.role === "user" && (
                <Avatar className="h-8 w-8 border bg-background">
                  <AvatarFallback>
                    <User size={16} />
                  </AvatarFallback>
                </Avatar>
              )}
            </div>
          ))}
          {isLoading && messages.length > 0 && messages[messages.length - 1].role === "user" && (
            <div className="flex gap-3 text-sm">
              <Avatar className="h-8 w-8 border bg-background">
                <AvatarFallback>
                  <Dog size={16} className="text-primary" />
                </AvatarFallback>
              </Avatar>
              <div className="p-3 rounded-lg bg-muted text-muted-foreground rounded-bl-none animate-pulse">
                Thinking...
              </div>
            </div>
          )}
        </div>
      </ScrollArea>

      {messages.length <= 1 && (
        <div className="p-4 border-t">
          <p className="text-xs text-muted-foreground mb-2">Try asking about:</p>
          <div className="space-y-2">
            {examplePrompts.map((prompt) => (
              <Button
                key={prompt}
                variant="outline"
                size="sm"
                className="w-full justify-start text-left h-auto py-1.5"
                onClick={() => handleExamplePrompt(prompt)}
                disabled={isLoading}
              >
                {prompt}
              </Button>
            ))}
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="border-t p-4 flex items-center gap-2">
        <Input
          ref={inputRef}
          value={input}
          onChange={handleInputChange}
          placeholder="Ask me anything about dogs..."
          className="flex-1"
          disabled={isLoading}
        />
        <Button type="submit" size="icon" disabled={isLoading || !input.trim()}>
          <Send size={18} />
          <span className="sr-only">Send message</span>
        </Button>
      </form>
      <footer className="text-center text-xs text-muted-foreground p-2 border-t bg-muted/50 rounded-b-lg">
      <p>Download the app for the full experience</p>
      </footer>
    </div>
  )
}
