import { prisma } from "@/lib/prisma";
import { capitalizeFirstLetters } from "@/utils/capitalize-first-letters";
import { NextResponse } from "next/server";

export async function GET() {
  const allBooks = await prisma.book.findMany({
    select: {
      id: true,
      cover_url: true,
      name: true,
      author: true,
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
        select: {
          rate: true,
        }
      }
    },
    orderBy: {
      ratings: {
        _count: 'desc'
      }
    },
  })

  const booksUpdate = allBooks.map(book => {
    const id = book.id
    const name = capitalizeFirstLetters(book.name)
    const coverUrl = book.cover_url
    const author = capitalizeFirstLetters(book.author)
    const allCategories = book.categories.map(item => item.category.name)
    const newCategory = "Tudo"
    const categoriesFiltered = allCategories.includes(newCategory)
  
    if (!categoriesFiltered) {
      allCategories.push(newCategory)
    }

    const totalPages = book.total_pages
    const ratingsAmount = book.ratings.length
    const ratingsAverage = Math.floor(book.ratings
      .reduce((sum, rating) => sum + rating.rate, 0) / ratingsAmount)


    return {
      id,
      coverUrl,
      name,
      author,
      allCategories,
      totalPages,
      ratingsAmount,
      ratingsAverage,
    }
  })

  return NextResponse.json({ booksUpdate })
}