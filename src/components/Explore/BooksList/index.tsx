import { useGetAllBooks } from "@/hooks/use-get-all-books"
import { Books } from "./Books"


export async function BooksList() {
  const { books } = await useGetAllBooks()

  return (
    <section className="flex flex-wrap gap-5">
      <Books books={books} />
    </section>
  )
}