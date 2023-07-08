import { useQuery } from "@tanstack/react-query";
import { BookReviewListProps } from "@/@types/book-review-list";

 interface RatingsFetchResponse {
  ratings: BookReviewListProps[]
}

const fetcher = (): Promise<RatingsFetchResponse> => fetch(
  'api/ratings', { 
    method: 'GET' 
  }).then(res => res.json())

export function useLastFourRatings() {
  const { data, isLoading } = useQuery({
    queryFn: fetcher,
    queryKey: ['ratings']
  })

  return {
    data: data?.ratings,
    isLoading
  }
}