import { useQuery } from "@tanstack/react-query";

import { BookCardProps } from "@/@types/book-card";
import { useFilter } from "./use-filter";

interface AllBooksFetchResponse {
  booksUpdate: BookCardProps[]
}

const fetcher = (): Promise<AllBooksFetchResponse> =>
  fetch('api/books', {
    method: 'GET'
  }).then(res => res.json())


export function useGetAllBooks() {
  const { selectedTag, search } = useFilter()
  const { data, isLoading } = useQuery({
    queryFn: fetcher,
    queryKey: ['booksUpdate']
  })

  const books = data?.booksUpdate
  const booksPerCategory = books?.filter(book => book.allCategories.includes(selectedTag))
  const filteredBooks = booksPerCategory?.filter(book =>
    book.name.toLowerCase().includes(search.toLowerCase()) || book.author.toLowerCase().includes(search.toLowerCase()))

  return {
    filteredBooks,
    isLoading
  }
}