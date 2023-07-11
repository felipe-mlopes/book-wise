import { useQuery } from "@tanstack/react-query"
import { ProfileAnalyticsProps } from "@/@types/user-analytics"

interface ProfileAnalyticsFetchResponse {
  userAnalyticsResults: ProfileAnalyticsProps
}

const fetcher = (): Promise<ProfileAnalyticsFetchResponse> => 
  fetch('/api/user-logged/analytics', { 
    method: 'GET' 
  }).then(res => res.json())

export function useProfileAnalytics() {
  const { data, isLoading } = useQuery({
    queryFn: fetcher,
    queryKey: ['userAnalyticsResults']
  })

  return {
    data: data?.userAnalyticsResults,
    isLoading
  }
}