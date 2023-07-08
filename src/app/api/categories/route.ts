import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const categories = await prisma.category.findMany({
    orderBy: {
      books: {
        _count: 'desc'
      }
    }
  })

  const allCategories = categories.map(category => category.name)
  const newCategory = "Tudo"
  const categoriesFiltered = allCategories.includes(newCategory)
  
  if (!categoriesFiltered) {
    allCategories.unshift(newCategory)
  }

  return NextResponse.json({ allCategories })
}