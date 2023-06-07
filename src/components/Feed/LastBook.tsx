import Image from "next/image";
import book from '../../assets/images/book.svg';
import { StarRating } from "../Global/StarRating";

export function LastBook() {
  return (
    <div className="flex gap-6 bg-gray600 rounded-lg py-5 px-6">
        <Image
          src={book}
          alt=""
          width={108}
          height={152}
          className="w-[6.75rem] h-[9.5rem] rounded"
        />
        <div className="space-y-6">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <p className="text-gray300 text-sm">Há 2 dias</p>
              <StarRating fill={4} />
            </div>
            <div>
              <strong className="text-gray100 text-base">O Hobbit</strong>
              <p className="text-gray400 text-sm">J.R.R. Tolkien</p>
            </div>

          </div>
          <p className="text-gray300 text-sm">
              Semper et sapien proin vitae nisi. Feugiat neque integer donec et
              aenean posuere amet ultrices. Cras fermentum id pulvinar...
          </p>
        </div>
      </div>
  )
}