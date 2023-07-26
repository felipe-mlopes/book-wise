import { useGetCategories } from "@/hooks/use-get-categories"
import { TagsList } from "./TagsList"


export async function Categories() {
  const { categories } = await useGetCategories()

  return (
    <ul className="flex items-center gap-3">
      <TagsList data={categories} />
    </ul>
  )
}