'use client'

import { useAllBooks } from "@/hooks/use-all-books"
import { LoadingBookList } from "./LoadingBookList"
import { BookCard } from "@/components/Global/BookCard"
import { BookCardProps } from "@/@types/book-card"


export function BookList() {
  const { data, isLoading } = useAllBooks()

  if (isLoading) {
    return <LoadingBookList />
  }

  return (
    <div className="flex flex-wrap gap-5">
      { data?.map((book: BookCardProps) => (
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
    </div>
  )
}