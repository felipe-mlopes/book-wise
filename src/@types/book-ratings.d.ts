export interface BookRatingsProps {  
  id: string,
  created_at: string,
  rate: number,
  description: string,
  user: {
    name: string,
    avatar_url: string
  }
}