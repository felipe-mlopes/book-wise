import type { Metadata } from 'next'

import { Sidebar } from "@/components/Global/Sidebar";
import { DropdownMenu } from "@/components/Global/DropdownMenu";
import { Login } from "@/components/Global/Sidebar/Login";
import { Header } from "@/components/Global/Header";
import { TimeLine } from "@/components/Feed/TimeLine";
import { BookReviewSection } from "@/components/Feed/BookReviewSection";
import { LastReviewUserLogged } from "@/components/Feed/BookReviews/LastReviewUserLogged";
import { BookReviewList } from "@/components/Feed/BookReviews/BookReviewList";
import { TrendingBooksSection } from "@/components/Feed/TrendingBookSection";
import { TrendingList } from "@/components/Feed/TrendingBooks/TrendingList";

export const dynamic = 'force-dynamic'


export const metadata: Metadata = {
  title: 'Feed',
  description: 'Veja a timeline com as últimas avaliações dos principais livros no mercado.'
}


export default function Feed() {
  return (
    <div
      className="flex flex-col gap-4 m-4 md:grid md:grid-rows-global md:gap-6 md:my-4 md:mx-4 lg:grid-cols-lg lg:mt-5 lg:mr-0 lg:mb-4 lg:ml-4 lg:gap-y-16 lg:gap-x-4 xl:ml-5 xl:gap-y-10 xl:gap-x-10"
    >
      <aside
        className="flex justify-end relative md:col-start-1 md:col-end-1 md:row-start-1 md:row-end-2 md:flex md:items-end md:justify-end md:mr-16  lg:flex lg:flex-col lg:items-center lg:justify-between lg:mr-0 lg:pt-10 lg:pb-6 lg:rounded-xl lg:h-[94vh] lg:bg-gray700"
      >
        <Sidebar className="hidden invisible lg:flex lg:flex-col lg:justify-between lg:items-center lg:visible lg:h-full" />
        <DropdownMenu className="z-50 lg:hidden lg:invisible">
          <Login />
        </DropdownMenu>
      </aside>
      <Header page="feed" />
      <TimeLine
        className="mt-16 flex flex-col gap-8 md:col-start-1 md:col-end-1 md:row-start-2 md:row-end-2 md:flex-row md:gap-0 md:mt-0 lg:col-start-2 lg:col-end-2 lg:row-start-2 lg:row-end-2"
      >
        <BookReviewSection>
          <LastReviewUserLogged />
          <BookReviewList />
        </BookReviewSection>
        <TrendingBooksSection>
          <TrendingList />
        </TrendingBooksSection>
      </TimeLine>
    </div>
  )
}