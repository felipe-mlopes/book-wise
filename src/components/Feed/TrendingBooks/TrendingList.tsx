import { BookCard } from "@/components/Global/BookCard"
import { BookCardProps } from "@/@types/book-card"
import { useGetTrendingBooks } from "@/hooks/use-get-trending-books"


export async function TrendingList() {
  const { trendingBooks } = await useGetTrendingBooks()

  return (
    <aside className="space-y-3">
      {trendingBooks.map((book: BookCardProps) => (
        <BookCard
          key={book.id}
          id={book.id}
          name={book.name}
          coverUrl={book.coverUrl}
          author={book.author}
          categories={book.allCategories}
          totalPages={book.totalPages}
          ratingsAverage={book.ratingsAverage}
          ratingsAmount={book.ratingsAmount}
          isTrending='trending'
        />
      ))}
    </aside>
  )
}