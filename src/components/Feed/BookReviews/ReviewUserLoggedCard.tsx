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
    <div className="flex flex-col items-center gap-4 bg-gray600 rounded-lg py-5 px-6 xs:flex-row xs:items-start xs:gap-6">
      <Image
        src={cover}
        alt="capa do livro"
        width={108}
        height={152}
        className="rounded"
      />
      <div className="space-y-6">
        <div className="space-y-5 xs:space-y-3">
          <div className="flex flex-col items-center gap-2 xs:flex-row xs:justify-between xs:gap-0">
            <p className="text-gray300 text-sm">{date}</p>
            <StarRating amount={rate} />
          </div>
          <div className="text-center xs:text-start">
            <strong className="text-gray100 text-base">{bookTitle}</strong>
            <p className="text-gray400 text-sm">{bookAuthor}</p>
          </div>

        </div>
        <BookReviewDescription content={description} wordsAmount={15} />
      </div>
    </div>
  )
}