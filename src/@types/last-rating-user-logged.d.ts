export interface LastRatingUserLoggedProps {
  id: string,
  created_at: string,
  description: string,
  rate: number,
  book: {
    name: string,
    author: string,
    cover_url: string
  }
}