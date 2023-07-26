'use client'

import Image from 'next/image';
import { useState } from 'react';

import { StarRating } from '@/components/Global/StarRating';
import { BookModal } from './BookModal';
import { BookInfo } from './BookModal/BookInfo';

interface BookCardTypes {
  id: string,
  coverUrl: string,
  name: string,
  author: string,
  categories: string[],
  totalPages: number,
  ratingsAverage: number,
  ratingsAmount: number,
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
}: BookCardTypes) {
  const [isBookModalOpen, setIsBookModalOpen] = useState(false)

  function handleBookModal() {
    setIsBookModalOpen(!isBookModalOpen)
  }

  const cover = coverUrl ? coverUrl.slice(19).replace('jpg', 'png') : ''

  return (
    <div className="space-y-5 px-5 py-4 w-80 rounded-lg bg-gray700 border-solid border-2 border-transparent hover:border-solid hover:border-2 hover:border-gray600">
      <div className="flex gap-5 cursor-pointer" onClick={handleBookModal}>
        <Image
          src={cover}
          alt="capa do livro"
          width={108}
          height={152}
          className='rounded'
        />
        <div className="flex flex-col justify-between">
          <div>
            <strong className="text-gray100 text-base">
              {name}
            </strong>
            <p className="text-gray400 text-sm">{author}</p>
          </div>
          <StarRating fill={ratingsAverage} />
        </div>
      </div>
      <BookModal
        bookId={id}
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
      </BookModal>
    </div>

  );
}