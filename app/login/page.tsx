"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth"
import { auth, googleProvider, isFirebaseConfigured } from "@/lib/firebase"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Separator } from "@/components/ui/separator"
import { Logo } from "@/components/logo"
import { FirebaseWarning } from "@/components/firebase-warning"
import { Loader2 } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { Footer } from "@/components/footer"
import { ChatbotPopup } from "@/components/chatbot-popup"
import { CookieConsentBanner } from "@/components/cookie-consent-banner"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const router = useRouter()
  const firebaseConfigured = isFirebaseConfigured()

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!firebaseConfigured || !auth) {
      return (
        <div className="p-6">
          <FirebaseWarning />
        </div>
      )
    }

    if (!email.trim() || !password) {
      setError("Please enter both email and password")
      return
    }

    setLoading(true)
    setError("")

    try {
      await signInWithEmailAndPassword(auth, email, password)
      router.push("/dashboard")
    } catch (error: any) {
      setError(error.message || "Failed to login. Please check your credentials.")
    } finally {
      setLoading(false)
    }
  }

  const handleGoogleLogin = async () => {
    if (!firebaseConfigured || !auth || !googleProvider) {
      setError("Authentication is not configured. Please contact support.")
      return
    }

    setLoading(true)
    setError("")

    try {
      await signInWithPopup(auth, googleProvider)
      router.push("/dashboard")
    } catch (error: any) {
      setError(error.message || "Failed to login with Google.")
    } finally {
      setLoading(false)
    }
  }

  const handleDemoLogin = () => {
    setError("")
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      alert("Demo mode: Login successful! In a real app, this would authenticate you.")
      router.push("/")
    }, 1000)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      
      <main className="flex-1 flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="space-y-1 text-center">
            <div className="flex justify-center mb-4">
              <Logo height={150} width={75} />
            </div>
            <CardTitle className="text-2xl">Welcome back</CardTitle>
            <CardDescription>
              Enter your email below to login to your account
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-4">
            {!firebaseConfigured && <FirebaseWarning />}

            {error && (
              <Alert variant="destructive">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <Button
              variant="outline"
              className="w-full"
              onClick={firebaseConfigured ? handleGoogleLogin : handleDemoLogin}
              disabled={loading}
              type="button"
            >
              <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              Continue with Google {!firebaseConfigured && "(Demo)"}
            </Button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <Separator className="w-full" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Or continue with email
                </span>
              </div>
            </div>

            <form onSubmit={handleEmailLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <Button type="submit" className="w-full" disabled={loading}>
                {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Login {!firebaseConfigured && "(Demo)"}
              </Button>
            </form>
          </CardContent>
          
          <CardFooter className="flex justify-center">
            <p className="text-sm text-muted-foreground">
              Don't have an account?{" "}
              <Link href="/signup" className="underline underline-offset-4 hover:text-primary">
                Sign up
              </Link>
            </p>
          </CardFooter>
        </Card>
      </main>
      
      <Footer />
      <ChatbotPopup />
      <CookieConsentBanner />
    </div>
  )
}