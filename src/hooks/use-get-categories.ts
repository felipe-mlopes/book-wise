import { useQuery } from "@tanstack/react-query";

 interface CategoriesFetchResponse {
  allCategories: string[]
}


export async function useGetCategories() {
  const response = await fetch('http://localhost:3000/api/categories', { 
    next: {
      revalidate: 60 * 10 // 10 minutos
    } 
  })
  const data: CategoriesFetchResponse = await response.json()
  const categories = data.allCategories

  return { categories }
}