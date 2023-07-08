import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider, { GoogleProfile } from 'next-auth/providers/google'
import GitHubProvider, { GithubProfile } from "next-auth/providers/github"
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from '@/lib/prisma';
import { VerificationToken } from "@prisma/client";
import { Adapter } from "next-auth/adapters";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma) as Adapter<VerificationToken>,

  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },

  secret: process.env.NEXTAUTH_SECRET,

  providers: [
    GoogleProvider({
      id: 'google',
      name: 'google',
      clientId: process.env.GOOGLE_CLIENT_ID ?? '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
      authorization: {
        params: {
          prompt: 'consent',
          access_type: 'offline',
          response_type: 'code',
          scope: 'https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile openid'
        }
      },
      profile(profile: GoogleProfile) {
        return {
          id: profile.sub,
          name: profile.name,
          avatar_url: profile.picture,
          image: profile.picture,
          email: profile.email,
        }
      },
    }),

    GitHubProvider({
      id: 'github',
      name: 'github',
      clientId: process.env.GITHUB_ID ?? '',
      clientSecret: process.env.GITHUB_SECRET ?? '',
      profile(profile: GithubProfile) {
        return {
          id: profile.id.toString(),
          name: profile.name || profile.login,
          avatar_url: profile.avatar_url,
          image: profile.avatar_url,
          email: profile.email ?? '',
        }
      },
    })
  ],

  callbacks: {
    async session({ session, token }) {
      return {
        ...session,
        token
      }
    }
  },
  
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }