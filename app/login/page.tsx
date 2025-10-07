// app/login/page.tsx
"use client"

import { useState, useEffect, Suspense } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import Link from "next/link"
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth"
import { useUser } from '@auth0/nextjs-auth0'
import { auth, googleProvider, isFirebaseConfigured } from "@/lib/firebase"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Separator } from "@/components/ui/separator"
import { Logo } from "@/components/logo"
import { FirebaseWarning } from "@/components/firebase-warning"
import { Loader2, CheckCircle, AlertCircle } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { Footer } from "@/components/footer"
import { ChatbotPopup } from "@/components/chatbot-popup"
import { CookieConsentBanner } from "@/components/cookie-consent-banner"
import { toast } from 'sonner'

function LoginContent() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  const router = useRouter()
  const searchParams = useSearchParams()
  const redirectTo = searchParams.get('redirectTo') || '/dashboard'
  
  const firebaseConfigured = isFirebaseConfigured()
  const { user: auth0User, error: auth0Error, isLoading: auth0Loading } = useUser()

  // Handle Auth0 user
  useEffect(() => {
    if (auth0User && !auth0Loading) {
      router.push(redirectTo)
    }
  }, [auth0User, auth0Loading, router, redirectTo])

  const showNotification = (message: string, type: 'success' | 'error') => {
    if (type === 'success') {
      toast.success(message)
      setSuccess(message)
      setError("")
    } else {
      toast.error(message)
      setError(message)
      setSuccess("")
    }
    
    // Clear notification after 5 seconds
    setTimeout(() => {
      setError("")
      setSuccess("")
    }, 5000)
  }

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!firebaseConfigured || !auth) {
      showNotification("Authentication is not configured. Please contact support.", "error")
      return
    }

    if (!email.trim() || !password) {
      showNotification("Please enter both email and password", "error")
      return
    }

    setLoading(true)
    setError("")

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password)
      const user = userCredential.user
      const token = await user.getIdToken()
      
      showNotification("Login successful! Redirecting...", "success")
      
      // Store user data in MongoDB and set secure cookie
      await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          email, 
          loginMethod: 'firebase',
          firebaseUID: user.uid,
          displayName: user.displayName,
          photoURL: user.photoURL,
          firebaseToken: token
        }),
      })
      
      // Set token in secure cookie
      await fetch('/api/auth/set-token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token }),
      })
      
      setTimeout(() => {
        router.push(redirectTo)
      }, 1500)
    } catch (error: any) {
      const errorMessage = getFirebaseErrorMessage(error.code) || "Failed to login. Please check your credentials."
      showNotification(errorMessage, "error")
    } finally {
      setLoading(false)
    }
  }

  const handleGoogleLogin = async () => {
    if (!firebaseConfigured || !auth || !googleProvider) {
      showNotification("Authentication is not configured. Please contact support.", "error")
      return
    }

    setLoading(true)
    setError("")

    try {
      const result = await signInWithPopup(auth, googleProvider)
      const user = result.user
      const token = await user.getIdToken()
      
      showNotification("Google login successful! Redirecting...", "success")
      
      // Store user data in MongoDB
      await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          email: user.email, 
          loginMethod: 'google',
          firebaseUID: user.uid,
          displayName: user.displayName,
          photoURL: user.photoURL,
          firebaseToken: token
        }),
      })
      
      // Set token in secure cookie
      await fetch('/api/auth/set-token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token }),
      })
      
      setTimeout(() => {
        router.push(redirectTo)
      }, 1500)
    } catch (error: any) {
      const errorMessage = getFirebaseErrorMessage(error.code) || "Failed to login with Google."
      showNotification(errorMessage, "error")
    } finally {
      setLoading(false)
    }
  }

  const handleAuth0Login = () => {
    const returnTo = encodeURIComponent(`${window.location.origin}${redirectTo}`)
    window.location.href = `/api/auth/login?returnTo=${returnTo}`
  }

  const handleDemoLogin = () => {
    setError("")
    setLoading(true)
    showNotification("Demo mode: Login successful!", "success")
    setTimeout(() => {
      setLoading(false)
      router.push(redirectTo)
    }, 1000)
  }

  const getFirebaseErrorMessage = (errorCode: string): string => {
    switch (errorCode) {
      case 'auth/user-not-found':
        return 'No account found with this email address.'
      case 'auth/wrong-password':
        return 'Incorrect password. Please try again.'
      case 'auth/invalid-email':
        return 'Invalid email address format.'
      case 'auth/user-disabled':
        return 'This account has been disabled.'
      case 'auth/too-many-requests':
        return 'Too many failed login attempts. Please try again later.'
      case 'auth/network-request-failed':
        return 'Network error. Please check your connection.'
      case 'auth/popup-closed-by-user':
        return 'Login was cancelled.'
      case 'auth/popup-blocked':
        return 'Popup was blocked. Please allow popups and try again.'
      case 'auth/invalid-credential':
        return 'Invalid credentials. Please check your email and password.'
      default:
        return 'An error occurred during login. Please try again.'
    }
  }

  if (auth0Loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="flex items-center space-x-2">
          <Loader2 className="h-8 w-8 animate-spin" />
          <p>Loading...</p>
        </div>
      </div>
    )
  }

  if (auth0User) {
    return null // Will redirect in useEffect
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
              Choose your preferred login method
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-4">
            {!firebaseConfigured && <FirebaseWarning />}

            {error && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            {success && (
              <Alert className="border-green-200 bg-green-50 text-green-800">
                <CheckCircle className="h-4 w-4" />
                <AlertDescription>{success}</AlertDescription>
              </Alert>
            )}

            {/* Auth0 Login */}
            <Button
              variant="outline"
              className="w-full"
              onClick={handleAuth0Login}
              disabled={loading}
              type="button"
            >
              <div className="mr-2 h-4 w-4 rounded-full bg-gradient-to-r from-orange-500 to-red-500"></div>
              Continue with Auth0
            </Button>

            {/* Google Login */}
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
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>
                  <Link 
                    href="/forgot-password" 
                    className="text-xs text-muted-foreground hover:text-primary underline underline-offset-4"
                  >
                    Forgot password?
                  </Link>
                </div>
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
                Sign In {!firebaseConfigured && "(Demo)"}
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

export default function LoginPage() {
  return (
    <Suspense fallback={
      <div className="flex min-h-screen items-center justify-center">
        <div className="flex items-center space-x-2">
          <Loader2 className="h-8 w-8 animate-spin" />
          <p>Loading...</p>
        </div>
      </div>
    }>
      <LoginContent />
    </Suspense>
  )
}