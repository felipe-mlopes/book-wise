import { BookCardProps } from "@/@types/book-card";

interface AllBooksFetchResponse {
  booksUpdate: BookCardProps[]
}


export async function useGetTrendingBooks() {
  const response = await fetch(`${process.env.NEXTAUTH_URL}/api/books`, {
    next: {
      tags: ['booksUpdate']
    }
  })
  const data: AllBooksFetchResponse = await response.json()
  const trendingBooks = data.booksUpdate.slice(0, 4)

  return { trendingBooks }
}