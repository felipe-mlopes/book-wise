'use client'

import { useRatingsProfile } from "@/hooks/use-ratings-profile"
import { GroupedRatingsProps, UserRatingsProps } from "@/@types/user-logged-ratings"
import { LoadingUserReviewsList } from "./LoadingUserReviewsList"
import { UserReview } from "./UserReview"


export function UserReviewsList() {
  const { data, isLoading } = useRatingsProfile()

  if (isLoading) {
    return <LoadingUserReviewsList />
  }

  return (
    <>
      {data?.map((review: GroupedRatingsProps, idx) => (
          <section 
            className="flex flex-col gap-3" 
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
    </>
  )
}