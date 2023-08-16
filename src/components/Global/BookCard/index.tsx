'use client'

import Image from 'next/image';
import { KeyboardEvent, useState } from 'react';

import { StarRating } from '@/components/Global/StarRating';
import { BookModal } from './BookModal';
import { BookInfo } from './BookModal/BookInfo';
import { BookReviews } from './BookModal/BookReviews';

interface BookCardTypes {
  id: string,
  coverUrl: string,
  name: string,
  author: string,
  categories: string[],
  totalPages: number,
  ratingsAverage: number,
  ratingsAmount: number,
  isTrending?: boolean,
  isRead?: boolean
}


export function BookCard({
  id,
  coverUrl,
  name,
  author,
  categories,
  totalPages,
  ratingsAverage,
  ratingsAmount,
  isTrending,
  isRead
}: BookCardTypes) {
  const [isBookModalOpen, setIsBookModalOpen] = useState(false)

  function handleBookModal() {
    setIsBookModalOpen(!isBookModalOpen)
  }

  function handleKeyPress(e: KeyboardEvent<HTMLDivElement>) {
    if (e.key === 'Enter') {
      handleBookModal()
    }
  }

  const cover = coverUrl ? coverUrl.slice(19).replace('jpg', 'png') : ''

  return (
    <div
      tabIndex={0}
      data-trending={isTrending}
      onClick={handleBookModal}
      onKeyDown={handleKeyPress}
      className={`space-y-5 px-5 py-4 w-64 h-40 md:w-80 md:h-auto rounded-lg bg-gray700 border-solid border-2 border-transparent hover:border-solid hover:border-2 hover:border-gray600 relative data-[trending=true]:lg:min-w-[15rem] data-[trending=true]:xl:min-w-[20.25rem]`}
    >
      <div
        data-check={isRead}
        data-trending={isTrending}
        className={`flex gap-3 py-2 md:gap-5 cursor-pointer data-[check=true]:after:content-["LIDO"] data-[check=true]:after:absolute data-[check=true]:after:top-[-2px] data-[check=true]:after:right-[-2px] data-[check=true]:after:py-1 data-[check=true]:after:px-3 data-[check=true]:after:bg-green300 data-[check=true]:after:rounded-tr-lg data-[check=true]:after:rounded-bl-[4px] data-[check=true]:after:text-green100 data-[check=true]:after:font-bold data-[check=true]:after:text-xs data-[trending=true]:py-0`}
      >
        <Image
          src={cover}
          alt="capa do livro"
          width={108}
          height={152}
          data-trending={isTrending}
          className="rounded data-[trending=false]:max-w-[5.0625rem] data-[trending=false]:max-h-[7.125rem] data-[trending=false]:md:max-w-[6.75rem] data-[trending=false]:md:max-h-[9.5rem] data-[trending=true]:max-w-[4rem] data-[trending=true]:max-h-[5.875rem]"
        />
        <div className="flex flex-col justify-between">
          <div>
            <strong className="text-gray100 text-base line-clamp-3">
              {name}
            </strong>
            <p className="text-gray400 text-sm">{author}</p>
          </div>
          <StarRating amount={ratingsAverage} />
        </div>
      </div>
      <BookModal
        key={id}
        isOpen={isBookModalOpen}
        onClose={handleBookModal}
      >
        <BookInfo
          bookTitle={name}
          bookCover={cover}
          bookAuthor={author}
          bookTotalPages={totalPages}
          bookCategories={categories}
          bookRatingsAmount={ratingsAmount}
          bookRatingsAverage={ratingsAverage}
        />
        <BookReviews bookId={id} />
      </BookModal>
    </div>

  );
}