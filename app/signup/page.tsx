"use client"

import type React from "react"
import { MainNav } from "@/components/main-nav"
import { MobileNav } from "@/components/mobile-nav"
import { Footer } from "@/components/footer"
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
import { Loader2 } from "lucide-react"
import { CookieConsentBanner } from "@/components/cookie-consent-banner" 

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
  const router = useRouter()
  const firebaseConfigured = isFirebaseConfigured()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCountryChange = (country: string) => {
    setFormData((prev) => ({ ...prev, country }))
  }

  const validateForm = () => {
    if (!formData.firstName.trim()) return "First name is required"
    if (!formData.lastName.trim()) return "Last name is required"
    if (!formData.email.trim()) return "Email is required"
    if (!formData.password) return "Password is required"
    if (formData.password.length < 6) return "Password must be at least 6 characters"
    if (formData.password !== formData.confirmPassword) return "Passwords do not match"
    if (!formData.phoneNumber.trim()) return "Phone number is required"
    if (!formData.country) return "Country is required"
    return null
  }

  const saveUserData = async (user: any, additionalData: any = {}) => {
    if (!db) return

    try {
      await setDoc(doc(db, "users", user.uid), {
        firstName: additionalData.firstName || formData.firstName,
        lastName: additionalData.lastName || formData.lastName,
        email: user.email,
        phoneNumber: additionalData.phoneNumber || formData.phoneNumber,
        country: additionalData.country || formData.country,
        createdAt: new Date().toISOString(),
        ...additionalData,
      })
    } catch (error) {
      console.error("Error saving user data:", error)
    }
  }

  const handleEmailSignUp = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!firebaseConfigured || !auth) {
      setError("Authentication is not configured. Please contact support.")
      return
    }

    const validationError = validateForm()
    if (validationError) {
      setError(validationError)
      return
    }

    setLoading(true)
    setError("")

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password)
      const user = userCredential.user

      // Update the user's display name
      await updateProfile(user, {
        displayName: `${formData.firstName} ${formData.lastName}`,
      })

      // Save additional user data to Firestore
      await saveUserData(user)

      router.push("/dashboard") // Redirect to dashboard or home page
    } catch (error: any) {
      setError(error.message || "An error occurred during sign up")
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

      // For Google sign-up, we might not have all the required info
      // You could redirect to a profile completion page or use default values
      const names = user.displayName?.split(" ") || ["", ""]
      await saveUserData(user, {
        firstName: names[0] || "",
        lastName: names.slice(1).join(" ") || "",
        phoneNumber: "", // Will need to be filled later
        country: "", // Will need to be filled later
        signUpMethod: "google",
      })

      router.push("/complete-profile") // Redirect to complete profile page
    } catch (error: any) {
      setError(error.message || "An error occurred during Google sign up")
    } finally {
      setLoading(false)
    }
  }

  const handleDemoSignUp = () => {
    // For demo purposes when Firebase is not configured
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
     
         <a href="#main-content" className="skip-to-content">
             Skip to content
          </a> 
        <div className="flex min-h-screen flex-col">
          <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center">
              <MainNav />
              <MobileNav />
            </div>
          </header>


    <div className="min-h-screen flex items-center justify-center bg-muted/50 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1 text-center">
          <div className="flex justify-center mb-4">
            <Logo height={150} width={75} />
          </div>
          <CardTitle className="text-2xl">Create your account</CardTitle>
          <CardDescription>Enter your details below to create your Cohound account and get the app.</CardDescription>
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
              <span className="bg-background px-2 text-muted-foreground">Or continue with email</span>
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
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last name</Label>
                <Input
                  id="lastName"
                  name="lastName"
                  type="text"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                />
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
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phoneNumber">Phone number</Label>
              <Input
                id="phoneNumber"
                name="phoneNumber"
                type="tel"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="country">Country</Label>
              <CountrySelector value={formData.country} onValueChange={handleCountryChange} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm password</Label>
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                required
              />
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
          <CookieConsentBanner /> {/* Added Cookie Consent Banner */}
          <Footer />
        </div>
      </>
  )
}
