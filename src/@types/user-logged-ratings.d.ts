export interface UserRatingsProps {
  id: string,
  createdAt: string,
  description: string,
  rate: number,
  bookId: string,
  bookName: string,
  bookAuthor: string,
  bookCover: string
}

export interface GroupedRatingsProps {
  createdAt: string;
  ratings: UserRatingsProps[];
}
      
