import { BookCardProps } from "@/@types/book-card";

interface AllBooksFetchResponse {
  booksUpdate: BookCardProps[]
}

export async function useGetTrendingBooks() {
  const response = await fetch('http://localhost:3000/api/books')
  const data: AllBooksFetchResponse = await response.json()
  const trendingBooks = data.booksUpdate.slice(0, 4)

  return { trendingBooks }
}