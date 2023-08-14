import { LoadingBookList } from "@/components/Explore/BooksList/LoadingBookList";
import { LoadingTags } from "@/components/Explore/Categories/LoadingTags";
import { Header } from "@/components/Global/Header";
import { LoadingSidebar } from "@/components/Global/Sidebar/LoadingSidebar";
import { MenuIcon } from "@/components/Icons/MenuIcon";

export default function LoadingExplore() {
  return (
    <div className="animate-pulse flex flex-col gap-4 m-4 md:grid md:grid-rows-global md:gap-6 md:my-4 md:mx-5 lg:grid-cols-lg lg:mt-5 lg:mr-0 lg:mb-4 lg:ml-4 lg:gap-y-16 lg:gap-x-10 xl:ml-5 xl:gap-y-10 xl:gap-x-10">
      <aside className="flex justify-end relative md:col-start-1 md:col-end-1 md:row-start-1 md:row-end-2 md:flex md:items-end md:justify-end md:mr-16  lg:flex lg:flex-col lg:items-center lg:justify-between lg:mr-0 lg:pt-10 lg:pb-6 lg:rounded-xl lg:h-[94vh] lg:bg-gray700">
        <LoadingSidebar />
        <MenuIcon className="lg:hidden lg:invisible" />
      </aside>
      <Header page="explore" />
      <main className="mt-32 container flex flex-col gap-8 md:col-start-1 md:col-end-1 md:row-start-2 md:row-end-2 md:mt-0 lg:col-start-2 lg:col-end-2 lg:row-start-2 lg:row-end-2 lg:gap-6">
        <LoadingTags />
        <LoadingBookList />
      </main>
    </div>
  )
}