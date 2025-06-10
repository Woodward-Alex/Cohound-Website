import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider" // Removed ThemeProvider
import { ChatbotProvider } from "@/components/chatbot-context"
import { ChatbotPopup } from "@/components/chatbot-popup"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Cohound",
  description: "Connect with dog-friendly spaces, services, and pet owners in your community.",
  manifest: "/manifest.json",
  themeColor: "#FFC857", // This will be the consistent theme color
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Cohound",
  },
}

export const viewport = {
  themeColor: '#FFC857', 
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // <html lang="en" suppressHydrationWarning> // Removed suppressHydrationWarning
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon-color.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-color.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-color.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
      </head>
      <body className={inter.className}>
      <ChatbotProvider>
      {children}
      <ChatbotPopup />
    </ChatbotProvider>
        {/* <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange> */}
        {/* </ThemeProvider> */}
      </body>
    </html>
  )
}