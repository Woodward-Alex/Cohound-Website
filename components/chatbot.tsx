"use client"

import type React from "react"
import { useChat } from "@ai-sdk/react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Dog, Send, User, X } from "lucide-react"
import { Logo } from "./logo"
import { useEffect, useRef, useState } from "react"

interface ChatbotProps {
  onClose: () => void
}

export function Chatbot({ onClose }: ChatbotProps) {
  const { messages, input, handleInputChange, handleSubmit, isLoading, setMessages } = useChat({
    api: "/api/chat",
  })
  const [isThinking, setIsThinking] = useState(false)
  const scrollAreaRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (scrollAreaRef.current) {
      const scrollableView = scrollAreaRef.current.querySelector("div > div")
      if (scrollableView) {
        scrollableView.scrollTop = scrollableView.scrollHeight
      }
    }
  }, [messages, isThinking])

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  const examplePrompts = [
    "Find bike free parks near me",
    "Help with reactive dog training",
    "Give me a list of companies that allow me to bring my puppy to work?",
  ]

  const handleSubmitWithAutoResponse = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    // Add user's message immediately
    const userMessage = {
      id: Date.now().toString(),
      role: "user" as const,
      content: input
    }
    setMessages([...messages, userMessage])
    
    // Clear input
    handleInputChange({ target: { value: '' } } as React.ChangeEvent<HTMLInputElement>)
    
    // Show thinking indicator
    setIsThinking(true)
    
    // Wait for 2 seconds to simulate thinking
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Add auto-response
    const autoResponse = {
      id: (Date.now() + 1).toString(),
      role: "assistant" as const,
      content: "Check out the list in the app here: <a href='/signup' class='text-primary underline'>Sign Up</a> or <a href='/login' class='text-primary underline'> Log In</a> "
    }
    
    setMessages(prev => [...prev, autoResponse])
    setIsThinking(false)
  }

  const handleExamplePrompt = async (prompt: string) => {
    // Add user's message immediately
    const userMessage = {
      id: Date.now().toString(),
      role: "user" as const,
      content: prompt
    }
    setMessages([...messages, userMessage])
    
    // Show thinking indicator
    setIsThinking(true)
    
    // Wait for 2 seconds to simulate thinking
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Add auto-response
    const autoResponse = {
      id: (Date.now() + 1).toString(),
      role: "assistant" as const,
      content: "Check out the list in the app here: <a href='/signup' class='text-primary underline'>Sign Up</a> or <a href='/login' class='text-primary underline'> Log In</a> "
    }
    
    setMessages(prev => [...prev, autoResponse])
    setIsThinking(false)
  }

  return (
    <div className="fixed bottom-4 rightt-4 right-4 w-[calc(100%-2rem)] max-w-md h-[78vh] max-h-[700px] bg-card shadow-xl rounded-lg flex flex-col border z-50">
      <header className="bg-primary text-primary-foreground p-4 rounded-t-lg flex items-center">
        <div className="flex items-center gap-2">
          <Logo iconOnlyWhite/>
          <div>
            <h3 className="font-semibold text-sm">Cohound AI Assistant</h3>
            <p className="text-xs opacity-80">Powered by OpenAI • Always Free</p>
          </div>
        </div>
        <div className="ml-auto">
        <Button
          variant="ghost"
          size="icon"
          onClick={onClose}
          className="text-primary-foreground hover:bg-primary/80 h-9 w-9 rounded-full -mr-2 sm:-mr-2"
        >
          <X size={18} />
          <span className="sr-only ">Close chat</span>
        </Button>
        </div>
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
                <p className="font-semibold">Hi! I'm your Cohound AI assistant! 👋</p>
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
              {m.role === "assistant" ? (
                <div
                  className="p-3 rounded-lg max-w-[80%] bg-muted text-muted-foreground rounded-bl-none"
                  dangerouslySetInnerHTML={{ __html: m.content }}
                />
              ) : (
                <div className="p-3 rounded-lg max-w-[80%] bg-primary text-primary-foreground rounded-br-none">
                  {m.content}
                </div>
              )}
              {m.role === "user" && (
                <Avatar className="h-8 w-8 border bg-background">
                  <AvatarFallback>
                    <User size={16} />
                  </AvatarFallback>
                </Avatar>
              )}
            </div>
          ))}
          {isThinking && (
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
        <div className="p-4 border-t overflow-hidden">
          <p className="text-xs text-muted-foreground mb-2 truncate">Try asking about:</p>
          <div className="space-y-2 overflow-y-auto max-h-[200px]">
            {examplePrompts.map((prompt) => (
              <Button
                key={prompt}
                variant="outline"
                size="sm"
                className="w-full justify-start text-left h-auto py-1.5 whitespace-normal break-words"
                onClick={() => handleExamplePrompt(prompt)}
                disabled={isLoading || isThinking}
              >
                {prompt}
              </Button>
            ))}
          </div>
        </div>
      )}

      <form onSubmit={handleSubmitWithAutoResponse} className="border-t p-4 flex items-center gap-2">
        <Input
          ref={inputRef}
          value={input}
          onChange={handleInputChange}
          placeholder="Ask me anything about dogs..."
          className="flex-1"
          disabled={isLoading || isThinking}
        />
        <Button
            type="submit"
            size="icon"
            disabled={isLoading || isThinking || !(input ?? "").trim()}
          >
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