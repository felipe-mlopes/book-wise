'use client'

import { useSession } from "next-auth/react";

import { useBookRatings } from "@/hooks/use-book-ratings";
import { useModal } from "@/hooks/use-modal";

import { LoadingBookReviews } from "./LoadingBookReviews";
import { Review } from "./Review";
import { LoginModal } from "../../Login/LoginModal";

import { BookRatingsProps } from "@/@types/book-ratings";


export interface BookReviewsTypes {
  bookId: string,
}

export function BookReviews({ bookId }: BookReviewsTypes) {
  const { status } = useSession()
  const isSigned = status === 'authenticated'

  const { data, isLoading, fetchStatus } = useBookRatings(bookId)
  
  const { isLoginModalOpen, handleLoginModal } = useModal()

  if (!isLoading) {
    return <LoadingBookReviews />
  }

  console.log(bookId)
  console.log(data)
  console.log(fetchStatus)


  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <p className="text-gray200 font-sm">Avaliações</p>
        { !isSigned && (
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
        {/* { isSigned && 
          <Comment 
            book_id={id}
          /> } */}
        {/* { data?.map((book: BookRatingsProps) => (
            <Review 
              key={book.id}
              reviewCreatedAt={book.created_at}
              reviewDescription={book.description}
              reviewRatings={book.rate}
              reviewUserAvatar={book.user.avatar_url}
              reviewUserName={book.user.name}
            />
        ))} */}
      </div>
    </div>
  )
}