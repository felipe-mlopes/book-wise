export interface BookCardProps {
  id: string,
  coverUrl: string,
  name: string,
  author: string,
  allCategories: string[],
  totalPages: number,
  ratingsAmount: number,
  ratingsAverage: number,
  ratings: {
    rate?: number,
  }[]
}