import { LoadingSidebar } from "@/components/Global/Sidebar/LoadingSidebar";
import { Header } from "@/components/Global/Header";
import { LoadingTags } from "@/components/Explore/Categories/LoadingTags";
import { LoadingBookList } from "@/components/Explore/BooksList/LoadingBookList";

export default function LoadingExplore() {
  return (
    <div className="grid grid-rows-feed grid-cols-feed mt-5 ml-5 gap-x-16 gap-y-10 overflow-hidden">
      <LoadingSidebar />
      <Header page="explore" />
      <main className="row-span-2 col-span-2 space-y-12 ml-8 mt-10">
        <LoadingTags />
        <LoadingBookList />
      </main>
    </div>
  )
}