import Image from 'next/image';

import { handleTransformDateInDaysOrWeeks } from '@/utils/transform-dates';
import { capitalizeFirstLetters } from '@/utils/capitalize-first-letters';

import { StarRating } from '../../Global/StarRating';
import { Avatar } from '../../Global/Avatar';
import { BookReviewDescription } from './BookReviewDescription';

interface CardTypes {
  rate: number,
  description: string,
  createdDate: string,
  userAvatar: string,
  userName: string
  bookAuthor: string,
  bookCover: string,
  bookName: string
}

export function BookReviewCard({
  rate,
  description,
  createdDate,
  userAvatar,
  userName,
  bookAuthor,
  bookCover,
  bookName
}: CardTypes) {

  const cover = bookCover ? bookCover.slice(19).replace('jpg', 'png') : ''
  const createdAt = handleTransformDateInDaysOrWeeks(createdDate)
  const bookTitle = capitalizeFirstLetters(bookName)

  return (
    <div className="space-y-5 p-4 md:space-y-8 md:p-6 bg-gray700 rounded-lg border-solid border-2 border-transparent hover:border-solid hover:border-2 hover:border-gray600">
      <div className="flex flex-col items-center gap-4 xs:flex-row xs:items-start xs:gap-0 xs:justify-between">
        <div className="flex items-center gap-4">
          <Avatar src={userAvatar} width={40} height={40} />
          <div>
            <p className="text-gray100 text-base">{userName}</p>
            <p className="text-gray400 text-sm text-center xs:text-start">{createdAt}</p>
          </div>
        </div>
        <StarRating amount={rate} />
      </div>

      <div className="flex flex-col items-center gap-4 xs:flex-row xs:items-start xs:gap-5">
        <Image
          src={cover}
          alt="capa do livro"
          width={108}
          height={152}
          className="rounded"
        />
        <div className="flex flex-col justify-between gap-5">
          <div className="text-center xs:text-start">
            <strong className="text-gray100 text-base">{bookTitle}</strong>
            <p className="text-gray400 text-sm">{bookAuthor}</p>
          </div>
          <BookReviewDescription
            content={description}
            wordsAmount={30}
          />
        </div>
      </div>
    </div>
  );
}


