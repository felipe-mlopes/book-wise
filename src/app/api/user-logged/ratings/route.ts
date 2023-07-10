import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

import { prisma } from "@/lib/prisma";
import { authOptions } from "../../auth/[...nextauth]/route";
import { handleTransformDateInDaysOrWeeks } from "@/utils/transform-dates";

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

  const userRatings = await prisma.user.findUnique({
    where: {
      id: userId
    },
    select: {
      ratings: {
        select: {
          id: true,
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

  userRatings?.ratings.sort((a, b) => {
    const dateA = new Date(a.created_at);
    const dateB = new Date(b.created_at);

    if (dateA > dateB) return -1;
    if (dateA < dateB) return 1

    return 0
  })

  const ratings = userRatings?.ratings.map(rating => {
    const id = rating.id
    const createdAt = handleTransformDateInDaysOrWeeks(rating.created_at.toDateString())
    const description = rating.description
    const rate = rating.rate
    const bookId = rating.book.id
    const bookName = rating.book.name
    const bookAuthor = rating.book.author
    const bookCover = rating.book.cover_url
  
    return {
      id,
      createdAt,
      description,
      rate,
      bookId,
      bookName,
      bookAuthor,
      bookCover
    }
  })


  return NextResponse.json({
    ratings
  })
}