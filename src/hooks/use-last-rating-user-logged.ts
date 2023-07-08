import { useQuery } from "@tanstack/react-query";
import { LastRatingUserLoggedProps } from "@/@types/last-rating-user-logged";

 interface LastRatingUserLoggedFetchResponse {
  lastRatingUserLogged: LastRatingUserLoggedProps[]
}

const fetcher = (): Promise<LastRatingUserLoggedFetchResponse> => 
  fetch('/api/users/logged/last-rating', { 
    method: 'GET' 
  }).then(res => {
    if (!res.ok) {
      throw new Error("Nenhum usuário está logado.")
    }
    return res.json()
  })
    .catch(error => console.log(error))

export function useLastRatingUserLogged() {
  const { data, isSuccess, isLoading } = useQuery({
    queryFn: fetcher,
    queryKey: ['lastRatingUserLogged']
  })

  if (!isSuccess) {
    return { data: [] }
  }

  return {
    data: data?.lastRatingUserLogged,
    isLoading
  }
}