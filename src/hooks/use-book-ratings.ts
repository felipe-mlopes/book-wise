import { useQuery } from "@tanstack/react-query";
import { BookRatingsProps } from "@/@types/book-ratings";

 interface BookRatingsFetchResponse {
  bookRatings: BookRatingsProps[]
}

const fetcher = (id: string): Promise<BookRatingsFetchResponse> => fetch(
  `api/books/book/${id}`, { 
    method: 'GET' 
  }).then(res => res.json())

export function useBookRatings(id: string) {
  const { data, isLoading, fetchStatus } = useQuery({
    queryFn: () => fetcher(id),
    queryKey: ['bookRatings', id]
  })
  
  return {
    data: data?.bookRatings,
    isLoading,
    fetchStatus
  }
}
