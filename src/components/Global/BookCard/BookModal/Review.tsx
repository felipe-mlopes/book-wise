import { handleTransformDateInDaysOrWeeks } from "@/utils/transform-dates";

import { Avatar } from "../../Avatar";
import { StarRating } from "../../StarRating";

interface ReviewTypes {
  reviewCreatedAt: string,
  reviewDescription: string,
  reviewRatings: number,
  reviewUserAvatar: string,
  reviewUserName: string,
  isNewReview?: boolean
}

export function Review({ 
  reviewCreatedAt, 
  reviewDescription, 
  reviewRatings, 
  reviewUserAvatar, 
  reviewUserName,
  isNewReview = false 
}: ReviewTypes) {
  
  const createdAt = handleTransformDateInDaysOrWeeks(reviewCreatedAt)

  return (
    <div data-active={isNewReview} className="p-6 rounded-lg space-y-5 bg-gray700 data-[active=true]:bg-gray600">
      <div className="flex items-center justify-between">
        <div className="flex gap-4">
          <Avatar src={reviewUserAvatar} width={40} height={40} />
          <div>
            <strong className="text-gray100 text-base font-bold">{reviewUserName}</strong>
            <p className="text-gray400 font-sm">{createdAt}</p>
          </div>
        </div>
        <StarRating fill={reviewRatings} />
      </div>
      <p className="text-gray300 text-sm">{reviewDescription}</p>
    </div>
  )
}