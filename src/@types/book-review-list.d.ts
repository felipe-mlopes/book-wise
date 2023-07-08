export interface BookReviewListProps {
  id: string,
  rate: number,
  description: string,
  created_at: string,
  user: {
    avatar_url: string,
    name: string
  },
  book: {
    author: string,
    cover_url: string,
    name: string
  }
}