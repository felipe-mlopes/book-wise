import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

import { prisma } from "@/lib/prisma";

export async function GET(request: NextRequest) {
  const token = await getToken({
    req: request,
    secret: process?.env?.NEXTAUTH_SECRET,
    cookieName: "next-auth.session-token"
  })

  const userId = token?.sub

  const lastRatingUserLogged = await prisma.rating.findMany({
    where: {
      user_id: userId,
    },
    orderBy: {
      created_at: 'desc'
    },
    take: 1,
    select: {
      id: true,
      created_at: true,
      description: true,
      rate: true,
      book: {
        select: {
          name: true,
          author: true,
          cover_url: true,
        }
      }
    }
  })

  return NextResponse.json({
    lastRatingUserLogged
  })
}