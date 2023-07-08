import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

import { prisma } from "@/lib/prisma";
import { authOptions } from "../../auth/[...nextauth]/route";

export async function GET(request: NextRequest) {
  const session = await getServerSession(authOptions)

  if (!session) {
    return NextResponse.json({ error: 'O usuário não está logado' }, { status: 400 })
  }

  const token = await getToken({
    req: request,
    secret: process?.env?.NEXTAUTH_SECRET,
    cookieName: "next-auth.session-token"
  })

  const userId = token?.sub

  const ratingsProfile = await prisma.user.findUnique({
    where: {
      id: userId
    },
    select: {
      id: true,
      name: true,
      avatar_url: true,
      ratings: {
        select: {
          created_at: true,
          description: true,
          rate: true,
          book: { 
            select: {
              id: true,
              name: true,
              author: true,
              cover_url: true
            } 
          }
        }
      }
    }
  })

  return NextResponse.json({
    ratingsProfile
  })
}