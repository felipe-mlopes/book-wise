import Image from "next/image";
import { StarRating } from "../../Global/StarRating";

interface UserReviewType {
  reviewRate: number
  reviewDescription: string
  reviewBookCover: string
  reviewBookName: string
  reviewBookAuthor: string
}

export function UserReview({ reviewRate, reviewDescription, reviewBookCover, reviewBookName, reviewBookAuthor }: UserReviewType) {
  return (
    <div className="flex flex-col gap-6 p-6 bg-gray700 rounded-lg cursor-pointer border-solid border-2 border-transparent hover:border-solid hover:border-2 hover:border-gray600">
      <div className="flex gap-5">
        <Image
          src={reviewBookCover}
          alt="capa do livro avaliado"
          width={108}
          height={152}
          className="rounded"
        />
        <div className="flex flex-col justify-between">
          <div>
            <strong className="text-gray100 text-base">
              {reviewBookName}
            </strong>
            <p className="text-gray400 text-sm">
              {reviewBookAuthor}
            </p>
          </div>
          <StarRating amount={reviewRate} />
        </div>
      </div>
      <p className="text-gray300 text-sm">
        {reviewDescription}
      </p>
    </div>
  )
}