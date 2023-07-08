import Image from "next/image";

import { StarRating } from "../../StarRating";
import { BookMarkIcon } from "@/components/Icons/BookMarkIcon";
import { BookOpenIcon } from "@/components/Icons/BookOpenIcon";

interface BookInfoTypes {
  bookCover: string,
  bookTitle: string,
  bookAuthor: string,
  bookCategories: string[],
  bookTotalPages: number,
  bookRatingsAverage: number,
  bookRatingsAmount: number,
}

export function BookInfo({ 
  bookCover, 
  bookTitle, 
  bookAuthor, 
  bookCategories, 
  bookTotalPages, 
  bookRatingsAverage, 
  bookRatingsAmount, 
}: BookInfoTypes) {

  const bookCategoriesWithoutLastItem = bookCategories.filter(book => book !== "Tudo")
  const categoriesToString = bookCategoriesWithoutLastItem?.length! > 1 ? bookCategoriesWithoutLastItem?.join(', ') : bookCategoriesWithoutLastItem?.toString()

  const RatingsCount = bookRatingsAmount > 1 ? `${bookRatingsAmount} avaliações` : `${bookRatingsAmount} avaliação`

  return (       
    <div className="bg-gray700 text-gray700 rounded-[10px] px-8 pt-6 pb-4 space-y-10">
      <div className="flex items-center gap-8">
        <Image src={bookCover} alt="" width={172} height={242} className="rounded-[10px]" />
        <div className="space-y-24 w-[18.5rem]">
          <div>
            <strong className="text-gray100 text-lg">
              {bookTitle}
            </strong>
            <p className="text-gray300 text-base">{bookAuthor}</p>
          </div>
          <div>
            <StarRating fill={bookRatingsAverage} />
            <p className="text-gray400 text-sm">{RatingsCount}</p>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-14 py-6 border-t border-solid border-gray600">
        <div className="flex items-center gap-4">
          <BookMarkIcon />
          <div>
            <p className="text-gray300 text-sm">Categoria</p>
            <strong className="text-gray200 text-base">{categoriesToString}</strong>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <BookOpenIcon />
          <div>
            <p className="text-gray300 text-sm">Páginas</p>
            <strong className="text-gray200 text-base">{bookTotalPages}</strong>
          </div>
        </div>
      </div>
  </div>
  )
}