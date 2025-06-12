import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ChatbotProvider } from "@/components/chatbot-context"
import { ChatbotPopup } from "@/components/chatbot-popup"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Cohound",
  description: "Connect with dog-friendly spaces, services, and pet owners in your community.",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Cohound",
  },
}

export const viewport = {
  themeColor: '#FFC857', 
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  // Add for iOS specific behaviors
  viewportFit: 'cover',
  interactiveWidget: 'resizes-content'
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
      <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cove, maximum-scale=1, user-scalable=no" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <link rel="apple-touch-startup-image" href="/splash-screen.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon-color.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-color.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-color.png" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-title" content="Cohound" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <link rel="manifest" href="/manifest.json" />
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