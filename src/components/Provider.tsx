'use client'

import { SessionProvider } from "next-auth/react"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

export function Provider({ children }: any) {
  const client = new QueryClient()

  return (
      <SessionProvider>
        <QueryClientProvider client={client}>
          {children}
        </QueryClientProvider>
      </SessionProvider>
    )
} 