import { StarRating } from "../Global/StarRating";
import { Avatar } from "../Global/Avatar";

export function Review() {
  return (
    <div className="bg-gray700 p-6 rounded-lg space-y-5">
      <div className="flex items-center justify-between">
        <div className="flex gap-4">
          <Avatar src="https://avatars.githubusercontent.com/u/60843113?v=4" width="40px" height="40px" />
          <div>
            <strong className="text-gray100 text-base font-bold">Brandon Botosh</strong>
            <p className="text-gray400 font-sm">Há 2 dias</p>
          </div>
        </div>
        <StarRating fill={4} />
      </div>
      <p className="text-gray300 text-sm">Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis. Penatibus id vestibulum imperdiet a at imperdiet lectus leo. Sit porta eget nec vitae sit vulputate eget</p>
    </div>
  )
}