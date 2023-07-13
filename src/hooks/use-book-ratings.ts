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
  const { data, isLoading } = useQuery({
    queryFn: () => fetcher(id),
    queryKey: ['bookRatings', id],
    initialData: null,
    onSuccess: (data) => {
      reactQueryClient.cache.setQueryData('bookRatings', id, data)
    }
  })
  
  return {
    data: data?.bookRatings,
    isLoading
  }
}
