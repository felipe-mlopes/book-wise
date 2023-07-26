import { Sidebar } from "@/components/Global/Sidebar";
import { Header } from "@/components/Global/Header";
import { Categories } from "@/components/Explore/Categories";
import { BooksList } from "@/components/Explore/BooksList";


export default function Explore() {
  return (
    <div className="grid grid-rows-feed grid-cols-feed mt-5 mb-4 ml-5 gap-x-16 gap-y-10 overflow-hidden">
      <Sidebar />
      <Header page="explore" />
      <main className="row-span-2 col-span-2 space-y-12 ml-8 mt-10 flex-1">
        <Categories />
        <BooksList />
      </main>
    </div>
  )
}