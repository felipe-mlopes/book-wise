import { useGetSession } from "@/hooks/use-get-session";
import { LoadingSidebar } from "@/components/Global/Sidebar/LoadingSidebar";
import { Header } from "@/components/Global/Header";
import { LoadingLastReviewUserLogged } from "@/components/Feed/BookReviews/LoadingLastReviewUserLogged";
import { LoadingBookReviewList } from "@/components/Feed/BookReviews/LoadingBookReviewList";
import { ChevronIcon } from "@/components/Icons/ChevronIcon";
import { LoadingTrendingList } from "@/components/Feed/TrendingBooks/LoadingTrendingList";
import { MenuIcon } from "@/components/Icons/MenuIcon";

export default async function LoadingFeed() {
  const session = await useGetSession()

  return (
    <div className="animate-pulse flex flex-col gap-4 m-4 md:grid md:grid-rows-global md:gap-6 md:my-4 md:mx-5 lg:grid-cols-lg lg:mt-5 lg:mr-0 lg:mb-4 lg:ml-4 lg:gap-y-16 lg:gap-x-10 xl:ml-5 xl:gap-y-10 xl:gap-x-10">
      <aside className="flex justify-end relative md:col-start-1 md:col-end-1 md:row-start-1 md:row-end-2 md:flex md:items-end md:justify-end md:mr-16  lg:flex lg:flex-col lg:items-center lg:justify-between lg:mr-0 lg:pt-10 lg:pb-6 lg:rounded-xl lg:h-[94vh] lg:bg-gray700">
        <LoadingSidebar />
        <MenuIcon className="lg:hidden lg:invisible" />
      </aside>
      <Header page="feed" />
      <main className="mt-16 flex flex-col gap-8 md:col-start-1 md:col-end-1 md:row-start-2 md:row-end-2 md:flex-row md:mt-0 lg:col-start-2 lg:col-end-2 lg:row-start-2 lg:row-end-2 lg:gap-6">
        <ul className="flex items-center justify-center gap-2 md:hidden md:invisible">
          <li className="flex w-28 h-8 rounded-full bg-gray600" />
          <li className="flex w-28 h-8 rounded-full bg-gray600" />
        </ul>
        <div className="flex flex-col items-center gap-6 md:max-w-xs lg:gap-8 lg:max-w-lg xl:max-w-[40rem] xl:gap-16">
          {session && (
            <section className="flex flex-col gap-4 m:min-w-[16rem] md:min-w-[23rem]">
              <div className="flex items-center justify-between">
                <p className="text-gray100 text-sm">Sua última leitura</p>
                <div
                  role="link"
                  className="flex items-center gap-2 py-1 px-2 rounded text-purple100 text-sm font-bold cursor-pointer hover:bg-purple100 hover:bg-opacity-5"
                >
                  Ver todas
                  <ChevronIcon type="right" />
                </div>
              </div>
              <div>
                <LoadingLastReviewUserLogged />
              </div>
            </section>
          )}
          <section className="flex flex-col gap-4 m:min-w-[16rem] md:min-w-[23rem]">
            <p className="text-gray100 text-sm">Avaliações mais recentes</p>
            <LoadingBookReviewList />
          </section>
        </div>
        <aside className="hidden invisible md:block md:visible md:row-span-3 md:space-y-4 md:max-w-[18rem] lg:max-w-[20.25rem]">
          <div className="flex items-center justify-between">
            <span className="text-gray100 text-sm">Livros populares</span>
            <div
              role="link"
              className="flex items-center gap-2 py-1 px-2 rounded text-purple100 text-sm font-bold cursor-pointer hover:bg-purple100 hover:bg-opacity-5"
            >
              Ver todos
              <ChevronIcon type="right" />
            </div>
          </div>
          <div className="space-y-3">
            <LoadingTrendingList />
          </div>
        </aside>
      </main>
    </div>
  )
}