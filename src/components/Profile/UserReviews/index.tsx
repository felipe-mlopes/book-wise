'use client'

import { LoadingUserReviewsList } from "./LoadingUserReviewsList"
import { useGetUserRatings } from "@/hooks/use-get-user-ratings"
import { GroupedRatingsProps, UserRatingsProps } from "@/@types/user-logged-ratings"
import { UserReview } from "./UserReview"


export function UserReviews() {
  const { groupedRatings, isLoading } = useGetUserRatings()

  if (isLoading) {
    return <LoadingUserReviewsList />
  }

  return (
    <div className="flex flex-col gap-6">
      {groupedRatings?.map((review: GroupedRatingsProps, idx) => (
        <section
          className="flex flex-col gap-3 max-w-[40rem]"
          key={idx}
        >
          <p className="text-gray300 text-sm">{review.createdAt}</p>
          {review.ratings.map((rating: UserRatingsProps) => {
            const bookCover = rating.bookCover ? rating.bookCover.slice(19).replace('jpg', 'png') : ''

            return (
              <UserReview
                key={rating.id}
                reviewDescription={rating.description}
                reviewRate={rating.rate}
                reviewBookCover={bookCover}
                reviewBookName={rating.bookName}
                reviewBookAuthor={rating.bookAuthor}
              />
            )
          })}
        </section>
      ))}
    </div>
  )
}