import { getServerSession } from "next-auth";
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../../auth/[...nextauth]/route";
import { prisma } from "@/lib/prisma";

export interface RatingsTypes {
  book: {
    id: string,
    author: string,
    total_pages: number,
    categories: {
        category: {
          name: string
        }
    }[],
  }
}

interface CategoryCountsTypes {
  [key: string]: number;
}

interface MaxCategoryTypes {
  category: string;
  count: number;
}

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

  const userAnalytics = await prisma.user.findUnique({
    where: {
      id: userId
    },
    select: {
      avatar_url: true,
      name: true,
      created_at: true,
      ratings: {
        select: {
          book: {
            select: {
              id: true,
              author: true,
              total_pages: true,
              categories: {
                select: {
                  category: {
                    select: {
                      name: true
                    }
                  }
                }
              },
            }
          }
        }
      }
    }
  })

  const avatarUrl = userAnalytics?.avatar_url
  const name = userAnalytics?.name
  const createdAt = userAnalytics?.created_at.getFullYear().toString()
  const booksReadAmount = userAnalytics?.ratings.map(rating => rating.book.id).length
  const distinctAuthorsReadAmount = userAnalytics?.ratings.reduce((count: string[], rating: RatingsTypes) => {
      const author = rating.book.author
      const existingAuthor = count.includes(author)
      if (!existingAuthor) {
          count.push(author)
      }
      
      return count
  }, []).length

  const bookTotalPagesReadAmount = userAnalytics?.ratings.reduce((count, pages) => {
      const totalPages = pages.book.total_pages
      return count += totalPages
  }, 0)

  const categoryCounts = userAnalytics?.ratings.reduce((counts: CategoryCountsTypes, rating: RatingsTypes) => {
    const categories = rating.book.categories.map(category => category.category.name);
    categories.forEach(category => {
      if (counts.hasOwnProperty(category)) {
        counts[category]++;
      } else {
        counts[category] = 1;
      }
    });
    return counts;
  }, {});

  const mostFrequentCategory = Object.entries(categoryCounts!).reduce(
      (maxCategory: MaxCategoryTypes, [category, count]: [string, number]) => {
      if (count > maxCategory.count) {
        return { category, count } ;
      } else {
        return maxCategory;
      }
    }, { category: '', count: 0 }).category

    const userAnalyticsResults = {
      avatarUrl,
      name,
      createdAt,
      booksReadAmount,
      distinctAuthorsReadAmount,
      bookTotalPagesReadAmount,
      mostFrequentCategory
    }

  
  return NextResponse.json({
    userAnalyticsResults
  })
}

