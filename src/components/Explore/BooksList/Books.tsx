'use client'

import { useFilter } from "@/hooks/use-filter"
import { BookCardProps } from "@/@types/book-card"
import { useDeferredValue } from "react"
import { BookCard } from "@/components/Global/BookCard"

interface BooksProps {
  books: BookCardProps[]
}

export async function Books({ books }: BooksProps) {
  const { search, selectedTag } = useFilter()
  const searchDeferred = useDeferredValue(search)

  const booksPerCategory = books?.filter(book => book.allCategories.includes(selectedTag))
  const filteredBooks = booksPerCategory?.filter(book => 
    book.name.toLowerCase().includes(searchDeferred.toLowerCase()) || book.author.toLowerCase().includes(searchDeferred.toLowerCase()))

  return (
    <>
      { filteredBooks.map((book: BookCardProps) => (
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
    </>
  )
}