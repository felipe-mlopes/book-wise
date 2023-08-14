import Image from "next/image";

import { capitalizeFirstLetters } from '@/utils/capitalize-first-letters'
import { handleTransformDateInDaysOrWeeks } from "@/utils/transform-dates";

import { StarRating } from "@/components/Global/StarRating";
import { BookReviewDescription } from "./BookReviewDescription";

interface ReviewUserLoggedCardTypes {
  createdAt: string,
  description: string,
  rate: number,
  bookName: string,
  bookAuthor: string,
  bookCover: string
}

export function ReviewUserLoggedCard({
  createdAt,
  description,
  rate,
  bookName,
  bookAuthor,
  bookCover
}: ReviewUserLoggedCardTypes) {

  const date = handleTransformDateInDaysOrWeeks(createdAt)
  const cover = bookCover ? bookCover.slice(19).replace('jpg', 'png') : ''
  const bookTitle = capitalizeFirstLetters(bookName)

  return (
    <>
      <div className="hidden invisible xs:flex xs:visible xs:gap-6 bg-gray600 rounded-lg py-5 px-6">
        <Image
          src={cover}
          alt="capa do livro"
          width={108}
          height={152}
          className="rounded max-h-[9.5rem]"
        />
        <div className="space-y-6 w-[26.75rem]">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <p className="text-gray300 text-sm">{date}</p>
              <StarRating amount={rate} />
            </div>
            <div>
              <strong className="text-gray100 text-base">{bookTitle}</strong>
              <p className="text-gray400 text-sm">{bookAuthor}</p>
            </div>

          </div>
          <BookReviewDescription content={description} wordsAmount={15} />
        </div>
      </div>

      <div className="flex flex-col gap-4 bg-gray600 rounded-lg py-5 px-6 xs:hidden xs:invisible">
        <div className="flex items-center justify-between">
          <p className="text-gray300 text-sm">{date}</p>
          <StarRating amount={rate} />
        </div>
        <div className="flex gap-4">
          <Image
            src={cover}
            alt="capa do livro"
            width={88}
            height={132}
            className="rounded max-h-[9.5rem]"
          />
          <div className="flex flex-col justify-between">
            <strong className="text-gray100 text-base">{bookTitle}</strong>
            <p className="text-gray400 text-sm">{bookAuthor}</p>
          </div>
        </div>
        <BookReviewDescription content={description} wordsAmount={10} />
      </div>
    </>
  )
}