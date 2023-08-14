'use client'

import { BookCardProps } from "@/@types/book-card"
import { BookCard } from "@/components/Global/BookCard"
import { useGetAllBooks } from "@/hooks/use-get-all-books"
import { LoadingBookList } from "./LoadingBookList"


export function BooksList() {
  const { filteredBooks, isLoading } = useGetAllBooks()

  if (isLoading) {
    return <LoadingBookList />
  }

  return (
    <section className="flex flex-wrap justify-center lg:justify-start gap-5">
      {filteredBooks?.map((book: BookCardProps) => (
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
      ))
      }
    </section>
  )
}