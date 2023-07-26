import { BookCardProps } from "@/@types/book-card";

interface AllBooksFetchResponse {
  booksUpdate: BookCardProps[]
}


export async function useGetAllBooks() {
  const response = await fetch('http://localhost:3000/api/books')
  const data: AllBooksFetchResponse = await response.json()
  const books = data.booksUpdate

  return { books }
}