import { useQuery } from "@tanstack/react-query";
import { BookRatingsProps } from "@/@types/book-ratings";

 interface BookRatingsFetchResponse {
  ratings: BookRatingsProps[],
  userRatings: BookRatingsProps[]
}

const fetcher = (id: string): Promise<BookRatingsFetchResponse> => fetch(
  `api/books/book/id=${id}`, { 
    method: 'GET' 
  }).then(res => res.json())

export function useBookRatings(id: string) {
  const { data, isLoading } = useQuery({
    queryFn: () => fetcher(id),
    queryKey: ['ratings', 'userRatings', id]
  })
  
  return {
    ratingsData: data?.ratings,
    userRatingData: data?.userRatings,
    isLoading
  }
}
