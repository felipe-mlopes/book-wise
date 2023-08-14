'use client'

import { handleTransformDateInDaysOrWeeks } from "@/utils/transform-dates";

import { Avatar } from "../../Avatar";
import { StarRating } from "../../StarRating";

interface ReviewTypes {
  reviewCreatedAt: string,
  reviewDescription: string,
  reviewRatings: number,
  reviewUserAvatar: string,
  reviewUserName: string,
  isUserReview?: boolean
}

export function Review({
  reviewCreatedAt,
  reviewDescription,
  reviewRatings,
  reviewUserAvatar,
  reviewUserName,
  isUserReview = false
}: ReviewTypes) {

  const createdAt = handleTransformDateInDaysOrWeeks(reviewCreatedAt)

  return (
    <div data-active={isUserReview} className="p-6 rounded-lg space-y-5 bg-gray700 data-[active=true]:bg-gray600">
      <div className="flex flex-col gap-4 xs:flex-row xs:gap-0 xs:justify-between">
        <div className="flex items-center gap-4">
          <Avatar src={reviewUserAvatar} width={40} height={40} />
          <div>
            <strong className="text-gray100 text-base font-bold">{reviewUserName}</strong>
            <p className="text-gray400 font-sm">{createdAt}</p>
          </div>
        </div>
        <StarRating amount={reviewRatings} className="flex gap-1 order-first xs:order-none" />
      </div>
      <p className="text-gray300 text-sm">
        {reviewDescription}
      </p>
    </div>
  )
}