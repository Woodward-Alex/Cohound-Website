// app/api/auth/sync-user/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { UserModel } from '@/lib/mongodb'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, firebaseUID, auth0ID, displayName, photoURL, loginMethod } = body

    if (!email || !loginMethod) {
      return NextResponse.json(
        { error: 'Email and login method are required' },
        { status: 400 }
      )
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
        firebaseUID,
        auth0ID,
      })
    } else {
      // Update existing user
      user = await UserModel.updateUser(email, {
        displayName: displayName || user.displayName,
        photoURL: photoURL || user.photoURL,
        firebaseUID: firebaseUID || user.firebaseUID,
        auth0ID: auth0ID || user.auth0ID,
        lastLogin: new Date(),
      })
    }

    return NextResponse.json({
      success: true,
      user: {
        id: user?._id,
        email: user?.email,
        displayName: user?.displayName,
        photoURL: user?.photoURL,
        loginMethod: user?.loginMethod,
      }
    })

  } catch (error) {
    console.error('Sync user API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}