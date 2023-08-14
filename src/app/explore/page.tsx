import { Sidebar } from "@/components/Global/Sidebar";
import { Header } from "@/components/Global/Header";
import { Categories } from "@/components/Explore/Categories";
import { BooksList } from "@/components/Explore/BooksList";
import { DropdownMenu } from "@/components/Global/DropdownMenu";
import { Login } from "@/components/Global/Sidebar/Login";


export default function Explore() {
  return (
    <div className="flex flex-col gap-4 m-4 md:grid md:grid-rows-global md:gap-6 md:my-4 md:mx-4 lg:grid-cols-lg lg:mt-5 lg:mr-0 lg:mb-4 lg:ml-0 lg:gap-y-16 lg:gap-x-12 xl:gap-y-10 xl:gap-x-24">
      <aside
        className="flex justify-end relative md:col-start-1 md:col-end-1 md:row-start-1 md:row-end-2 md:flex md:items-end md:justify-end md:mr-16  lg:flex lg:flex-col lg:items-center lg:justify-between lg:mr-0 lg:pt-10 lg:pb-6 lg:rounded-xl lg:h-[94vh] lg:bg-gray700"
      >
        <Sidebar className="hidden invisible lg:flex lg:flex-col lg:justify-between lg:items-center lg:visible lg:h-full" />
        <DropdownMenu className="z-50 lg:hidden lg:invisible">
          <Login />
        </DropdownMenu>
      </aside>
      <Header page="explore" />
      <main className="flex flex-col gap-8 mt-32 md:col-start-1 md:col-end-1 md:row-start-2 md:row-end-2 md:gap-12 md:mt-0 lg:mt-0 lg:col-start-2 lg:col-end-2 lg:row-start-2 lg:row-end-2">
        <Categories />
        <BooksList />
      </main>
    </div>
  )
}