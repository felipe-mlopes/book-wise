'use client'

import Image from 'next/image';
import { useState } from 'react';

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
  isTrending?: 'trending' | undefined
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
  isTrending
}: BookCardTypes) {
  const [isBookModalOpen, setIsBookModalOpen] = useState(false)

  function handleBookModal() {
    setIsBookModalOpen(!isBookModalOpen)
  }

  const cover = coverUrl ? coverUrl.slice(19).replace('jpg', 'png') : ''


  return (
    <div className={`space-y-5 px-5 py-4 w-64 h-40 md:w-80 md:h-auto rounded-lg bg-gray700 border-solid border-2 border-transparent hover:border-solid hover:border-2 hover:border-gray600 ${isTrending === 'trending' && `lg:min-w-[15rem] xl:min-w-[20.25rem]`}`}>
      <div
        className="flex gap-3 md:gap-5 cursor-pointer"
        onClick={handleBookModal}
      >
        {isTrending === undefined && <Image
          src={cover}
          alt="capa do livro"
          width={108}
          height={152}
          className="max-w-[5.0625rem] max-h-[7.125rem] md:max-w-[6.75rem] md:max-h-[9.5rem] rounded"
        />}
        {isTrending === 'trending' && <Image
          src={cover}
          alt="capa do livro"
          width={64}
          height={94}
          className="rounded"
        />}
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