// app/signup/page.tsx - Updated with proper validation and error styling
"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { createUserWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth"
import { doc, setDoc } from "firebase/firestore"
import { auth, googleProvider, db, isFirebaseConfigured } from "@/lib/firebase"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Separator } from "@/components/ui/separator"
import { CountrySelector } from "@/components/country-selector"
import { Logo } from "@/components/logo"
import { FirebaseWarning } from "@/components/firebase-warning"
import { Loader2, AlertCircle } from "lucide-react"
import { CookieConsentBanner } from "@/components/cookie-consent-banner"
import { SiteHeader } from "@/components/site-header"
import { Footer } from "@/components/footer"
import { cn } from "@/lib/utils"

export const dynamic = 'force-dynamic'

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    country: "",
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({})
  const router = useRouter()
  const firebaseConfigured = isFirebaseConfigured()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    
    // Clear field error when user starts typing
    if (fieldErrors[name]) {
      setFieldErrors(prev => ({ ...prev, [name]: "" }))
    }
  }

  const handleCountryChange = (country: string) => {
    setFormData((prev) => ({ ...prev, country }))
    if (fieldErrors.country) {
      setFieldErrors(prev => ({ ...prev, country: "" }))
    }
  }

  const validateForm = () => {
    const errors: Record<string, string> = {}
    
    if (!formData.firstName.trim()) errors.firstName = "First name is required"
    if (!formData.lastName.trim()) errors.lastName = "Last name is required"
    if (!formData.email.trim()) errors.email = "Email is required"
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = "Email is invalid"
    if (!formData.password) errors.password = "Password is required"
    else if (formData.password.length < 6) errors.password = "Password must be at least 6 characters"
    if (formData.password !== formData.confirmPassword) errors.confirmPassword = "Passwords do not match"
    if (!formData.phoneNumber.trim()) errors.phoneNumber = "Phone number is required"
    if (!formData.country) errors.country = "Country is required"
    
    setFieldErrors(errors)
    return Object.keys(errors).length === 0
  }

  const saveUserData = async (user: any, additionalData: any = {}) => {
    try {
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: user.email,
          firstName: additionalData.firstName || formData.firstName,
          lastName: additionalData.lastName || formData.lastName,
          displayName: `${formData.firstName} ${formData.lastName}`,
          phoneNumber: additionalData.phoneNumber || formData.phoneNumber,
          country: additionalData.country || formData.country,
          loginMethod: 'firebase',
          firebaseUID: user.uid,
          ...additionalData,
        }),
      })

      if (!response.ok) {
        const data = await response.json()
        if (data.error === 'User already exists') {
          setFieldErrors({ email: "An account with this email already exists" })
          return false
        }
        throw new Error(data.error || 'Failed to save user data')
      }
      return true
    } catch (error) {
      console.error("Error saving user data:", error)
      return false
    }
  }

  const handleEmailSignUp = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!firebaseConfigured || !auth) {
      setError("Authentication is not configured. Please contact support.")
      return
    }

    if (!validateForm()) {
      return
    }

    setLoading(true)
    setError("")

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password)
      const user = userCredential.user

      await updateProfile(user, {
        displayName: `${formData.firstName} ${formData.lastName}`,
      })

      const saved = await saveUserData(user)
      if (saved) {
        router.push("/dashboard")
      }
    } catch (error: any) {
      if (error.code === 'auth/email-already-in-use') {
        setFieldErrors({ email: "An account with this email already exists" })
      } else if (error.code === 'auth/weak-password') {
        setFieldErrors({ password: "Password is too weak" })
      } else if (error.code === 'auth/invalid-email') {
        setFieldErrors({ email: "Invalid email address" })
      } else {
        setError(error.message || "An error occurred during sign up")
      }
    } finally {
      setLoading(false)
    }
  }

  const handleGoogleSignUp = async () => {
    if (!firebaseConfigured || !auth || !googleProvider) {
      setError("Authentication is not configured. Please contact support.")
      return
    }

    setLoading(true)
    setError("")

    try {
      const result = await signInWithPopup(auth, googleProvider)
      const user = result.user

      const names = user.displayName?.split(" ") || ["", ""]
      const saved = await saveUserData(user, {
        firstName: names[0] || "",
        lastName: names.slice(1).join(" ") || "",
        phoneNumber: "",
        country: "",
        loginMethod: "google",
      })

      if (saved) {
        router.push("/complete-profile")
      }
    } catch (error: any) {
      setError(error.message || "An error occurred during Google sign up")
    } finally {
      setLoading(false)
    }
  }

  const handleDemoSignUp = () => {
    setError("")
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      alert("Demo mode: Sign up successful! In a real app, this would create your account.")
      router.push("/")
    }, 1000)
  }

  return (
    <>
      <div className="flex min-h-screen flex-col">
        <SiteHeader />
        
        <div className="min-h-screen flex items-center justify-center bg-muted/50 p-4">
          <Card className="w-full max-w-md">
            <CardHeader className="space-y-1 text-center">
              <div className="flex justify-center mb-4">
                <Logo height={120} width={60} />
              </div>
              <CardTitle className="text-2xl">Create your account</CardTitle>
              <CardDescription>
                Enter your details below to create your Cohound account.
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

              <Button
                variant="outline"
                className="w-full"
                onClick={firebaseConfigured ? handleGoogleSignUp : handleDemoSignUp}
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

              <form
                onSubmit={
                  firebaseConfigured
                    ? handleEmailSignUp
                    : (e) => {
                        e.preventDefault()
                        handleDemoSignUp()
                      }
                }
                className="space-y-4"
              >
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First name</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      type="text"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className={cn(fieldErrors.firstName && "border-red-500 focus-visible:ring-red-500")}
                      required
                    />
                    {fieldErrors.firstName && (
                      <p className="text-sm text-red-500">{fieldErrors.firstName}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last name</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      type="text"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className={cn(fieldErrors.lastName && "border-red-500 focus-visible:ring-red-500")}
                      required
                    />
                    {fieldErrors.lastName && (
                      <p className="text-sm text-red-500">{fieldErrors.lastName}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={cn(fieldErrors.email && "border-red-500 focus-visible:ring-red-500")}
                    required
                  />
                  {fieldErrors.email && (
                    <p className="text-sm text-red-500">{fieldErrors.email}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phoneNumber">Phone number</Label>
                  <Input
                    id="phoneNumber"
                    name="phoneNumber"
                    type="tel"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    className={cn(fieldErrors.phoneNumber && "border-red-500 focus-visible:ring-red-500")}
                    placeholder="Enter your phone number"
                    required
                  />
                  {fieldErrors.phoneNumber && (
                    <p className="text-sm text-red-500">{fieldErrors.phoneNumber}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="country">Country</Label>
                  <CountrySelector 
                    value={formData.country} 
                    onValueChange={handleCountryChange}
                    className={cn(fieldErrors.country && "border-red-500 focus-visible:ring-red-500")}
                  />
                  {fieldErrors.country && (
                    <p className="text-sm text-red-500">{fieldErrors.country}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className={cn(fieldErrors.password && "border-red-500 focus-visible:ring-red-500")}
                    required
                  />
                  {fieldErrors.password && (
                    <p className="text-sm text-red-500">{fieldErrors.password}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm password</Label>
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className={cn(fieldErrors.confirmPassword && "border-red-500 focus-visible:ring-red-500")}
                    required
                  />
                  {fieldErrors.confirmPassword && (
                    <p className="text-sm text-red-500">{fieldErrors.confirmPassword}</p>
                  )}
                </div>

                <Button type="submit" className="w-full" disabled={loading}>
                  {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  Create account {!firebaseConfigured && "(Demo)"}
                </Button>
              </form>
            </CardContent>
            
            <CardFooter className="flex justify-center">
              <p className="text-sm text-muted-foreground">
                Already have an account?{" "}
                <Link href="/login" className="underline underline-offset-4 hover:text-primary">
                  Sign in
                </Link>
              </p>
            </CardFooter>
          </Card>
        </div>
        
        <CookieConsentBanner />
        <Footer />
      </div>
    </>
  )
}