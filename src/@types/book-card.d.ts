export interface BookCardProps {
  id: string,
  coverUrl: string,
  name: string,
  author: string,
  allCategories: string[],
  totalPages: number,
  ratingsAmount: number,
  ratingsAverage: number,
  ratingsUsers: string[],
  ratings: {
    rate?: number,
  }[]
}