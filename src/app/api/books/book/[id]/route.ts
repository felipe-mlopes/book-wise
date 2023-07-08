import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  const idStartIndex = pathname.indexOf('=') + 1
  const bookId = pathname.substring(idStartIndex)

  const book = await prisma.book.findUnique({
    where: {
      id: bookId
    },
    select: {
      id: true,
      name: true,
      author: true,
      cover_url: true,
      categories: {
        select: {
          category: {
            select: {
              name: true
            }
          }
        }
      },
      total_pages: true,
      ratings: {
        orderBy: {
          created_at: 'desc'
        },
        select: {
          created_at: true,
          rate: true,
          description: true,
          user: {
            select: {
              name: true,
              avatar_url: true
            }
          }
        }
      },
    }
  })

  return NextResponse.json({ book })
}