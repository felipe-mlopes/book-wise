import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const ratings = await prisma.rating.findMany({
    take: 4,
    orderBy: {
      created_at: 'desc'
    },
    include: {
      user: {
        select: {
          avatar_url: true,
          name: true
        }
      },
      book: {
        select: {
          author: true,
          cover_url: true,
          name: true
        }
      },
    }
  })

  return NextResponse.json({ ratings })
}