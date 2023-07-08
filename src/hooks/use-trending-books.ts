import { useQuery } from "@tanstack/react-query";
import { BookCardProps } from "@/@types/book-card";

 interface TrendingBooksFetchResponse {
  booksUpdate: BookCardProps[]
}

const fetcher = (): Promise<TrendingBooksFetchResponse> => 
  fetch('api/books', { 
    method: 'GET' 
  }).then(res => res.json())

export function useTrendingBooks() {
  const { data, isLoading } = useQuery({
    queryFn: fetcher,
    queryKey: ['books']
  })

  const trendingBooks = data?.booksUpdate.slice(0, 4)

  return {
    data: trendingBooks,
    isLoading
  }
}