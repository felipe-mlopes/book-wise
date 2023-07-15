import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const token = await getToken({
    req: request,
    secret: process?.env?.NEXTAUTH_SECRET,
    cookieName: "next-auth.session-token"
  })

  const userId = token?.sub

  const pathname = request.nextUrl.pathname
  const idStartIndex = pathname.indexOf('=') + 1
  const bookId = pathname.substring(idStartIndex)
  
  const bookRatings = await prisma.book.findUnique({
    where: {
      id: bookId
    },
    select: {
      ratings: {
        orderBy: {
          created_at: 'desc'
        },
        select: {
          id: true,
          created_at: true,
          rate: true,
          description: true,
          user: {
            select: {
              id: true,
              name: true,
              avatar_url: true
            }
          }
        }
      },
    }
  })

  const ratings = bookRatings?.ratings.filter(rating => rating.user.id !== userId)

  const userRatings = bookRatings?.ratings.filter(rating => rating.user.id === userId)

  return NextResponse.json({ ratings, userRatings })
}