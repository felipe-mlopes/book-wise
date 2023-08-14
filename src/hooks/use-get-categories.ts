import { useQuery } from "@tanstack/react-query";

interface CategoriesFetchResponse {
  allCategories: string[]
}

const fetcher = (): Promise<CategoriesFetchResponse> => fetch(
  'api/categories', {
  method: 'GET'
}).then(res => res.json())


export function useGetCategories() {
  const { data, isLoading } = useQuery({
    queryFn: fetcher,
    queryKey: ['allCategories'],
    refetchOnWindowFocus: false
  })

  return {
    categories: data?.allCategories,
    isLoading
  }
}