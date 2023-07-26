import { useGetLastFourRatings } from "@/hooks/use-get-last-four-ratings";
import { BookReviewCard } from "./BookReviewCard";
import { BookReviewListProps } from "@/@types/book-review-list";


export async function BookReviewList() {
  const { ratings } = await useGetLastFourRatings()

  return (
    <section className="flex flex-col gap-4 max-w-[40rem]">
      <p className="text-gray100 text-sm">Avaliações mais recentes</p>
      <div className="flex flex-col gap-3">
        {ratings.map((book: BookReviewListProps) => (
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