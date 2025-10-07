// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { withMiddlewareAuthRequired } from '@auth0/nextjs-auth0/edge'

export default async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Public routes that don't require authentication
  const publicRoutes = [
    '/',
    '/login',
    '/signup',
    '/api/auth/login',
    '/api/auth/signup',
    '/api/auth/callback',
    '/api/auth/logout',
    '/api/auth/me',
    '/about',
    '/contact',
    '/privacy',
    '/terms',
    '/complete-profile',
  ]

  // Check if the current path is a public route
  const isPublicRoute = publicRoutes.some(route => 
    pathname === route || pathname.startsWith(`${route}/`)
  )

  if (isPublicRoute) {
    return NextResponse.next()
  }

  // Protected routes - check for authentication
  const protectedRoutes = ['/dashboard', '/profile', '/settings', '/chat']
  const isProtectedRoute = protectedRoutes.some(route => 
    pathname.startsWith(route)
  )

  if (isProtectedRoute) {
    // Check for Auth0 authentication first (preferred method)
    const auth0Cookie = request.cookies.get('appSession')?.value

    if (auth0Cookie) {
      // Auth0 session exists, allow access
      return NextResponse.next()
    }

    // Check for Firebase token in cookies or headers
    const firebaseToken = request.cookies.get('firebase-token')?.value ||
                         request.headers.get('authorization')?.replace('Bearer ', '')

    if (firebaseToken) {
      // Firebase token exists, validate it server-side if needed
      // For now, we'll trust the client-side validation
      return NextResponse.next()
    }

    // No valid authentication found, redirect to login
    const loginUrl = new URL('/login', request.url)
    loginUrl.searchParams.set('redirectTo', pathname)
    return NextResponse.redirect(loginUrl)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!api|_next/static|_next/image|favicon.ico|public).*)',
  ],
}