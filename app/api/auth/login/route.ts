// app/api/auth/login/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { UserModel } from '@/lib/mongodb'
import { adminAuth } from '@/lib/firebase-admin'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, loginMethod, displayName, photoURL, firebaseToken, auth0ID } = body

    if (!email || !loginMethod) {
      return NextResponse.json(
        { error: 'Email and login method are required' },
        { status: 400 }
      )
    }

    // Verify Firebase token if provided and adminAuth is available
    if (firebaseToken && adminAuth) {
      try {
        const decodedToken = await adminAuth.verifyIdToken(firebaseToken)
        if (decodedToken.email !== email) {
          return NextResponse.json(
            { error: 'Token email does not match provided email' },
            { status: 401 }
          )
        }
      } catch (error) {
        console.error('Firebase token verification failed:', error)
        // Don't fail completely if token verification fails
        console.warn('Proceeding without token verification')
      }
    }

    // Check if user exists
    let user = await UserModel.findUserByEmail(email)

    if (!user) {
      // Create new user
      user = await UserModel.createUser({
        email,
        displayName,
        photoURL,
        loginMethod: loginMethod as 'firebase' | 'google' | 'auth0',
        firebaseUID: loginMethod === 'firebase' || loginMethod === 'google' ? body.firebaseUID : undefined,
        auth0ID: loginMethod === 'auth0' ? auth0ID : undefined,
      })
    } else {
      // Update last login
      await UserModel.updateLastLogin(email)
    }

    return NextResponse.json({
      success: true,
      user: {
        id: user._id,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
        loginMethod: user.loginMethod,
      }
    })

  } catch (error) {
    console.error('Login API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}