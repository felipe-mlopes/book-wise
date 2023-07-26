import { LastRatingUserLoggedProps } from "@/@types/last-rating-user-logged";

 interface LastRatingUserLoggedFetchResponse {
  lastRatingUserLogged: LastRatingUserLoggedProps[]
}


export async function useGetLastRatingUserLogged() {
  const response = await fetch('http://localhost:3000/api/user-logged/last-rating') 
  const data: LastRatingUserLoggedFetchResponse = await response.json()
  const userLastRating = data.lastRatingUserLogged

  return {
    userLastRating
  }
}