import { CloseIcon } from "@/components/Icons/CloseIcon";
import { BookReviews } from "./BookReviews";
import { BookInfo } from "./BookInfo";

interface BookModalProps {
  isOpen: boolean,
  onClose: () => void,
  bookId: string,
  bookCover: string,
  bookTitle: string,
  bookAuthor: string,
  bookCategories: string[],
  bookTotalPages: number,
  bookRatingsAverage: number,
  bookRatingsAmount: number,
}

export function BookModal({ 
  isOpen, 
  onClose,
  bookId,
  bookCover,
  bookTitle,
  bookAuthor,
  bookCategories,
  bookTotalPages,
  bookRatingsAverage,
  bookRatingsAmount,
}: BookModalProps) {
  
  if (!isOpen) {
    return null;
  }

  return (
    <div 
      className="bg-gray800/60 data-[state=open]:animate-overlayShow fixed inset-0"
      onClick={onClose}
    >
      <div 
        className="data-[state=open]:animate-contentShow fixed inset-y-0 right-0 max-w-[660px] rounded-xl bg-gray800 px-12 py-14 shadow-modal overflow-y-auto scrollbar-thin scrollbar-track-gray700 scrollbar-thumb-gray600 focus:outline-none" 
        onClick={(e) => e.stopPropagation()}
      >
        <div 
          className="flex items-center justify-center p-1 absolute top-3 right-12 cursor-pointer"
          onClick={onClose}
        >
          <CloseIcon />
        </div>
        <div className="space-y-10">
          <BookInfo 
            bookCover={bookCover}
            bookTitle={bookTitle}
            bookAuthor={bookAuthor}
            bookCategories={bookCategories}
            bookTotalPages={bookTotalPages}
            bookRatingsAverage={bookRatingsAverage}
            bookRatingsAmount={bookRatingsAmount}
          />
          <BookReviews bookId={bookId} />
        </div>
      </div>
    </div>
  )
}