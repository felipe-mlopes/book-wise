import NextAuth, { DefaultSession } from 'next-auth'

declare module 'next-auth' {
  interface Session {
    user: {
      name: string
      avatar_url: string
    } & DefaultSession['user']
  }

  interface User {
    name: string
    avatar_url: string
  }
}