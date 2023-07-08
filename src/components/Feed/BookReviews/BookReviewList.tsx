'use client'

import { useLastFourRatings } from "@/hooks/use-last-four-ratings";
import { LoadingBookReviewList } from "./LoadingBookReviewList";
import { BookReviewListProps } from "@/@types/book-review-list";
import { BookReviewCard } from "./BookReviewCard";


export function BookReviewList() {
  const { data, isLoading } = useLastFourRatings() 

  if (isLoading) {
    return <LoadingBookReviewList />
  }

  return (
    <section className="flex flex-col gap-4 max-w-[40rem]">
      <p className="text-gray100 text-sm">Avaliações mais recentes</p>
      <div className="flex flex-col gap-3">
        { data?.map((book: BookReviewListProps) => (
            <BookReviewCard 
              key={book.id}
              rate={book.rate}
              description={book.description}
              createdDate={book.created_at}
              userAvatar={book.user.avatar_url}
              userName={book.user.name}
              bookAuthor={book.book.author}
              bookCover={book.book.cover_url}
              bookName={book.book.name}
            />
          )
        )}
      </div>
    </section>
  )
}