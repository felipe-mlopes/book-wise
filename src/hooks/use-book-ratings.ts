import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { BookRatingsProps } from "@/@types/book-ratings";
import { CommentProps } from "@/components/Global/BookCard/BookModal/Comment";

interface BookRatingsFetchResponse {
  ratings: BookRatingsProps[],
  userRatings: BookRatingsProps[]
}

const fetcher = (id: string): Promise<BookRatingsFetchResponse> => fetch(
  `api/books/book/id=${id}`, {
  method: 'GET'
}).then(res => res.json())

const newUserRating = (data: CommentProps) => {
  return fetch('api/ratings/new-rating', {
    method: 'POST',
    body: JSON.stringify(data)
  })
}

export function useBookRatings(id: string) {
  const { data, isLoading } = useQuery({
    queryFn: () => fetcher(id),
    queryKey: ['ratings', 'userRatings', id],
  })

  return {
    ratingsData: data?.ratings,
    userRatingData: data?.userRatings,
    isLoading
  }
}

export function useAddUserRating(id: string) {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: newUserRating,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['ratings', 'userRatings', id] })
    },
  })
}
