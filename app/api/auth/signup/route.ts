// app/api/auth/signup/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { UserModel } from '@/lib/mongodb'
import { adminAuth } from '@/lib/firebase-admin'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { 
      email, 
      firstName, 
      lastName, 
      phoneNumber, 
      country, 
      loginMethod, 
      firebaseUID,
      auth0ID,
      displayName,
      photoURL 
    } = body

    if (!email || !loginMethod) {
      return NextResponse.json(
        { error: 'Email and login method are required' },
        { status: 400 }
      )
    }

    // Check if user already exists
    const existingUser = await UserModel.findUserByEmail(email)
    if (existingUser) {
      return NextResponse.json(
        { error: 'User already exists' },
        { status: 409 }
      )
    }

    // Create new user
    const user = await UserModel.createUser({
      email,
      firstName,
      lastName,
      displayName: displayName || `${firstName} ${lastName}`,
      photoURL,
      phoneNumber,
      country,
      loginMethod: loginMethod as 'firebase' | 'google' | 'auth0',
      firebaseUID,
      auth0ID,
    })

    return NextResponse.json({
      success: true,
      user: {
        id: user._id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        displayName: user.displayName,
        photoURL: user.photoURL,
        phoneNumber: user.phoneNumber,
        country: user.country,
        loginMethod: user.loginMethod,
      }
    })

  } catch (error) {
    console.error('Signup API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}