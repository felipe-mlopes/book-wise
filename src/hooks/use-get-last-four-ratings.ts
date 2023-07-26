import { BookReviewListProps } from "@/@types/book-review-list";

 interface RatingsFetchResponse {
  ratings: BookReviewListProps[]
}


export async function useGetLastFourRatings() {
  const response = await fetch('http://localhost:3000/api/ratings')
  const data: RatingsFetchResponse = await response.json()

  const ratings = data.ratings

  return {
    ratings
  }
}