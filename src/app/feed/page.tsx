import Link from "next/link";

import { Sidebar } from "@/components/Global/Sidebar";
import { Header } from "@/components/Global/Header";
import { LastReviewUserLogged } from "@/components/Feed/BookReviews/LastReviewUserLogged";
import { BookReviewList } from "@/components/Feed/BookReviews/BookReviewList";
import { ChevronIcon } from "@/components/Icons/ChevronIcon";
import { TrendingList } from "@/components/Feed/TrendingBooks/TrendingList";


export default function Feed() {
  return (
    <div className="grid grid-rows-feed grid-cols-feed mt-5 ml-5 gap-x-16 gap-y-10 overflow-hidden">
      <Sidebar />
      <Header page="feed" />
      <main className="row-span-2 space-y-10 ml-8">
        <LastReviewUserLogged />
        <BookReviewList />
      </main>
      <aside className="row-span-3 space-y-4 max-w-[20.25rem]">
        <div className="flex items-center justify-between">
          <span className="text-gray100 text-sm">Livros populares</span>
          <Link
            href="/explore"
            className="flex items-center gap-2 py-1 px-2 rounded text-purple100 text-sm font-bold cursor-pointer hover:bg-purple100 hover:bg-opacity-5"
          >
            Ver todos
            <ChevronIcon type="right" />
          </Link>
        </div>
        <TrendingList />
      </aside>
    </div>
  )
}