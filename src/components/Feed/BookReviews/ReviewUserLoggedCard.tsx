import Image from "next/image";

import { capitalizeFirstLetters } from '@/utils/capitalize-first-letters'
import { handleTransformDateInDaysOrWeeks } from "@/utils/transform-dates";

import { StarRating } from "@/components/Global/StarRating";

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
    <div className="flex gap-6 bg-gray600 rounded-lg py-5 px-6">
      <Image
        src={cover}
        alt="capa do livro"
        width={108}
        height={152}
        className="rounded"
      />
      <div className="space-y-6 w-[26.75rem]">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <p className="text-gray300 text-sm">{date}</p>
            <StarRating fill={rate} />
          </div>
          <div>
            <strong className="text-gray100 text-base">{bookTitle}</strong>
            <p className="text-gray400 text-sm">{bookAuthor}</p>
          </div>

        </div>
        <p className="text-gray300 text-sm">
          {description}
        </p>
      </div>
    </div>
  )
}