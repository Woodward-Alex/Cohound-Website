// app/api/users/profile/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { UserModel } from '@/lib/mongodb'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const email = searchParams.get('email')

    if (!email) {
      return NextResponse.json(
        { error: 'Email parameter is required' },
        { status: 400 }
      )
    }

    const user = await UserModel.findUserByEmail(email)

    if (!user) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      )
    }

    // Remove sensitive data before sending
    const sanitizedUser = {
      id: user._id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      displayName: user.displayName,
      photoURL: user.photoURL,
      phoneNumber: user.phoneNumber,
      country: user.country,
      loginMethod: user.loginMethod,
      createdAt: user.createdAt,
      lastLogin: user.lastLogin,
      isActive: user.isActive,
    }

    return NextResponse.json({
      success: true,
      user: sanitizedUser
    })

  } catch (error) {
    console.error('Get user profile API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function PATCH(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, ...updateData } = body

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      )
    }

    // Remove sensitive fields that shouldn't be updated via this endpoint
    const { _id, createdAt, firebaseUID, auth0ID, ...safeUpdateData } = updateData

    const updatedUser = await UserModel.updateUser(email, safeUpdateData)

    if (!updatedUser) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      )
    }

    return NextResponse.json({
      success: true,
      user: {
        id: updatedUser._id,
        email: updatedUser.email,
        firstName: updatedUser.firstName,
        lastName: updatedUser.lastName,
        displayName: updatedUser.displayName,
        photoURL: updatedUser.photoURL,
        phoneNumber: updatedUser.phoneNumber,
        country: updatedUser.country,
        loginMethod: updatedUser.loginMethod,
      }
    })

  } catch (error) {
    console.error('Update user profile API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}