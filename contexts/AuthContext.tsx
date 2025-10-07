// contexts/AuthContext.tsx - Simplified version focusing on Firebase
"use client"

import React, { createContext, useContext, useEffect, useState } from 'react'
import { User as FirebaseUser } from 'firebase/auth'
import { auth, onAuthStateChange, getAuthToken, setAuthTokens, clearAuthTokens } from '@/lib/firebase'
import { toast } from 'sonner'

interface AuthContextType {
  user: FirebaseUser | null
  loading: boolean
  token: string | null
  signOut: () => Promise<void>
  refreshAuthToken: () => Promise<string | null>
  isAuthenticated: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<FirebaseUser | null>(null)
  const [loading, setLoading] = useState(true)
  const [token, setToken] = useState<string | null>(null)

  const isAuthenticated = !!user

  const refreshAuthToken = async (): Promise<string | null> => {
    if (!user) return null
    
    try {
      const newToken = await getAuthToken()
      setToken(newToken)
      
      // Store token in httpOnly cookie for security
      if (newToken) {
        await fetch('/api/auth/set-token', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ token: newToken })
        })
      }
      
      return newToken
    } catch (error) {
      console.error('Error refreshing token:', error)
      return null
    }
  }

  const signOut = async () => {
    try {
      if (user && auth) {
        // Firebase logout
        await auth.signOut()
        clearAuthTokens()
        setToken(null)
        setUser(null)
        
        // Clear server-side token
        await fetch('/api/auth/logout', {
          method: 'POST',
        })
        
        toast.success('Successfully signed out')
      }
    } catch (error) {
      console.error('Error signing out:', error)
      toast.error('Error signing out')
    }
  }

  // Sync user data with MongoDB on auth state change
  const syncUserWithMongoDB = async (authUser: FirebaseUser) => {
    try {
      const userData = {
        email: authUser.email,
        firebaseUID: authUser.uid,
        displayName: authUser.displayName,
        photoURL: authUser.photoURL,
        loginMethod: 'firebase'
      }

      const response = await fetch('/api/auth/sync-user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      })

      if (!response.ok) {
        console.error('Failed to sync user with MongoDB')
      }
    } catch (error) {
      console.error('Error syncing user with MongoDB:', error)
    }
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChange(async (authUser) => {
      if (authUser) {
        setUser(authUser)
        try {
          const userToken = await getAuthToken()
          if (userToken) {
            setToken(userToken)
            setAuthTokens(userToken, authUser.refreshToken || '')
          }
          
          // Sync with MongoDB
          await syncUserWithMongoDB(authUser)
        } catch (error) {
          console.error('Error getting token:', error)
        }
      } else {
        setUser(null)
        setToken(null)
        clearAuthTokens()
      }
      setLoading(false)
    })

    return () => unsubscribe()
  }, [])

  const value: AuthContextType = {
    user,
    loading,
    token,
    signOut,
    refreshAuthToken,
    isAuthenticated,
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}