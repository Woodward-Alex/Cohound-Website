// lib/auth0.ts
import { Auth0Provider } from '@auth0/nextjs-auth0/client'

export const auth0Config = {
  domain: process.env.NEXT_PUBLIC_AUTH0_DOMAIN!,
  clientId: process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID!,
  clientSecret: process.env.AUTH0_CLIENT_SECRET!,
  baseURL: process.env.NEXT_PUBLIC_AUTH0_BASE_URL!,
  secret: process.env.AUTH0_SECRET!,
  issuerBaseURL: `https://${process.env.NEXT_PUBLIC_AUTH0_DOMAIN}`,
}

// Auth0 wrapper component
export function Auth0ProviderWrapper({ children }: { children: React.ReactNode }) {
  return (
    <Auth0Provider
      domain={auth0Config.domain}
      clientId={auth0Config.clientId}
      authorizationParams={{
        redirect_uri: typeof window !== 'undefined' ? window.location.origin : '',
        scope: 'openid profile email',
      }}
    >
      {children}
    </Auth0Provider>
  )
}