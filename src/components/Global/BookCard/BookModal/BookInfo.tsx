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
    <div className="bg-gray700 text-gray700 rounded-[10px] p-4 xs:p-6 sm:px-8 sm:pt-6 sm:pb-4 space-y-10">
      <div className="flex gap-5 xs:gap-8 h-full">
        <Image
          src={bookCover}
          alt="capa do livro selecionado"
          width={172}
          height={242}
          className="rounded-[10px] object-cover"
        />
        <div className="flex flex-col justify-between xs:w-[18.5rem]">
          <div>
            <strong className="text-gray100 text-lg line-clamp-3 break-all xs:line-clamp-none md:break-normal">
              {bookTitle}
            </strong>
            <p className="text-gray300 text-base">{bookAuthor}</p>
          </div>
          <div>
            <StarRating amount={bookRatingsAverage} />
            <p className="text-gray400 text-sm">{RatingsCount}</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col xs:flex-row xs:items-center gap-6 xs:gap-14 py-6 border-t border-solid border-gray600">
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