import { LastRatingUserLoggedProps } from "@/@types/last-rating-user-logged";

interface LastRatingUserLoggedFetchResponse {
  lastRatingUserLogged: LastRatingUserLoggedProps[]
}


export async function useGetLastRatingUserLogged() {
  const response = await fetch(`${process.env.NEXTAUTH_URL}/api/user-logged/last-rating`, {
    next: {
      tags: ['lastRatingUserLogger']
    }
  })
  const data: LastRatingUserLoggedFetchResponse = await response.json()
  const userLastRating = data.lastRatingUserLogged

  return {
    userLastRating
  }
}