import { BookReviewListProps } from "@/@types/book-review-list";

interface RatingsFetchResponse {
  ratings: BookReviewListProps[]
}


export async function useGetLastFourRatings() {
  const response = await fetch(`${process.env.NEXTAUTH_URL}/api/ratings`, {
    next: {
      tags: ['ratings']
    }
  })
  const data: RatingsFetchResponse = await response.json()

  const ratings = data.ratings

  return { ratings }
}