import { Comment } from "../Explore/Comment";
import { Review } from "../Explore/Review";

export function BookReview() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <p className="text-gray200 font-sm">Avaliações</p>
        <a href="" className="text-purple100 font-bold text-base">Avaliar</a>
      </div>
      <div className="space-y-3">
        <Comment />
        <Review />
        <Review />
      </div>
    </div>
  )
}