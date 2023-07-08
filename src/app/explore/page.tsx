import { Sidebar } from "@/components/Global/Sidebar";
import { Header } from "@/components/Global/Header";
import { Tags }from "@/components/Explore/Categories/Tags";
import { BookList } from "@/components/Explore/BooksList/BookList";


export default function Explore() {
  return (
    <div className="grid grid-rows-feed grid-cols-feed mt-5 ml-5 gap-x-16 gap-y-10 overflow-hidden">
      <Sidebar />
      <Header page="explore" />
      <main className="row-span-2 col-span-2 space-y-12 ml-8 mt-10">
        <Tags />
        <BookList />
      </main>
    </div>
  )
}