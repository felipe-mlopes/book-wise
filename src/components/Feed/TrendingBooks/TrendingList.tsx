import { BookCard } from "@/components/Global/BookCard"
import { BookCardProps } from "@/@types/book-card"
import { useGetAllBooks } from "@/hooks/use-get-all-books"


export async function TrendingList() {
  const { books } = await useGetAllBooks()

  const trendingBooks = books.slice(0, 4)

  return (
    <section className="space-y-3">
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
        />
      ))}
    </section>
  )
}