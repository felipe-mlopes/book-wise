import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { user_id, user, book_id, book, description, rate } = await request.json()

  const newRating = await prisma.rating.create({
    data: {
      user_id,
      user,
      book_id,
      book,
      description,
      rate
    }
  })

  return NextResponse.json({ newRating })
}