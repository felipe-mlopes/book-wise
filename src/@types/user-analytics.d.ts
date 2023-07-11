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
  avatar_url: string,
  name: string,
  created_at: string,
  booksReadAmount: number,
  distinctAuthorsReadAmount: number,
  bookTotalPagesReadAmount: number,
  mostFrequentCategory: string
}