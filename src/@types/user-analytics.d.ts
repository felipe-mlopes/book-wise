export interface UserAnalyticsProps {
  avatar_url: string,
  name: string,
  created_at: string,
  ratings: {
    book: {
      id: string,
      author: string,
      total_pages: number,
      categories: {
          category: {
            name: string
          }
      }[],
    }
  }[],
}

export interface ProfileAnalyticsProps {
  avatarUrl: string,
  name: string,
  createdAt: number,
  booksReadAmount: number,
  distinctAuthorsReadAmount: number,
  bookTotalPagesReadAmount: number,
  mostFrequentCategory: string
}