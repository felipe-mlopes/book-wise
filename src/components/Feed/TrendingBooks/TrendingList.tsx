'use client'

import { useTrendingBooks } from "@/hooks/use-trending-books"
import { LoadingTrendingList } from "./LoadingTrendingList"
import { BookCard } from "@/components/Global/BookCard"
import { BookCardProps } from "@/@types/book-card"


export function TrendingList() {
  const { data, isLoading } = useTrendingBooks()

  if (isLoading) {
    return <LoadingTrendingList />
  }

  return (
    <div className="space-y-3">
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