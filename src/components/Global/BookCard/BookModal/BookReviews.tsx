'use client'

import { useSession } from "next-auth/react";

import { useBookRatings } from "@/hooks/use-book-ratings";
import { BookRatingsProps } from "@/@types/book-ratings";
import { useModal } from "@/hooks/use-modal";

import { Review } from "./Review";
import { LoadingReviews } from "./LoadingReviews";
import { LoginModal } from "../../Login/LoginModal";
import { Comment } from "./Comment";

export interface BookReviewsTypes {
  bookId: string,
}


export function BookReviews({ bookId }: BookReviewsTypes) {
  const { status, data } = useSession()
  const isSigned = status === 'authenticated'

  const { ratingsData, userRatingData, isLoading } = useBookRatings(bookId)

  const { isLoginModalOpen, handleLoginModal } = useModal()

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <p className="text-gray200 font-sm">Avaliações</p>
        {!isSigned && (
          <button
            onClick={handleLoginModal}
            className="text-purple100 font-bold text-base cursor-pointer"
          >
            Avaliar
          </button>
        )}
        <LoginModal isOpen={isLoginModalOpen} onClose={handleLoginModal} />
      </div>

      <div className="space-y-3">
        {isSigned && userRatingData?.length === 0 &&
          <Comment
            bookId={bookId}
            userId={data?.token?.sub.toString() ?? ''}
            userName={data?.user?.name ?? ''}
            userAvatarUrl={data?.user?.image ?? ''}
          />
        }
        {isSigned && useBookRatings.length > 0 &&
          userRatingData?.map((userRating: BookRatingsProps) => (
            <Review
              key={userRating.id}
              reviewCreatedAt={userRating.created_at}
              reviewDescription={userRating.description}
              reviewRatings={userRating.rate}
              reviewUserName={userRating.user.name}
              reviewUserAvatar={userRating.user.avatar_url}
              isUserReview={true}
            />
          ))
        }
        {isLoading &&
          <LoadingReviews amountReviews={2} />
        }
        {ratingsData?.map((rating: BookRatingsProps) => (
          <Review
            key={rating.id}
            reviewCreatedAt={rating.created_at}
            reviewDescription={rating.description}
            reviewRatings={rating.rate}
            reviewUserAvatar={rating.user.avatar_url}
            reviewUserName={rating.user.name}
          />
        ))
        }
      </div>
    </div>
  )
}