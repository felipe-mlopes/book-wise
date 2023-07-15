import { useQuery } from "@tanstack/react-query";
import { LastRatingUserLoggedProps } from "@/@types/last-rating-user-logged";

 interface LastRatingUserLoggedFetchResponse {
  lastRatingUserLogged: LastRatingUserLoggedProps[]
}

const fetcher = (): Promise<LastRatingUserLoggedFetchResponse> => 
  fetch('api/user-logged/last-rating', { 
    method: 'GET' 
  }).then(res => res.json())

export function useLastRatingUserLogged() {
  const { data, isLoading } = useQuery({
    queryFn: fetcher,
    queryKey: ['lastRatingUserLogged']
  })

  return {
    data: data?.lastRatingUserLogged,
    isLoading
  }
}