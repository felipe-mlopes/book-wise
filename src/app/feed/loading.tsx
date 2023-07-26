import { useGetSession } from "@/hooks/use-get-session";
import { LoadingSidebar } from "@/components/Global/Sidebar/LoadingSidebar";
import { Header } from "@/components/Global/Header";
import { LoadingLastReviewUserLogged } from "@/components/Feed/BookReviews/LoadingLastReviewUserLogged";
import { LoadingBookReviewList } from "@/components/Feed/BookReviews/LoadingBookReviewList";
import { ChevronIcon } from "@/components/Icons/ChevronIcon";
import { LoadingTrendingList } from "@/components/Feed/TrendingBooks/LoadingTrendingList";

export default async function LoadingFeed() {
  const session = await useGetSession()

  return (
    <div className="grid grid-rows-feed grid-cols-feed mt-5 ml-5 gap-x-16 gap-y-10 overflow-hidden">
      <LoadingSidebar />
      <Header page="feed" />
      <main className="row-span-2 space-y-10 ml-8">
        {session && (
          <section className="flex flex-col gap-4 max-w-[40rem]">
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
        <section className="flex flex-col gap-4 max-w-[40rem]">
          <p className="text-gray100 text-sm">Avaliações mais recentes</p>
          <LoadingBookReviewList />
        </section>
      </main>
      <aside className="row-span-3 space-y-4 max-w-[20.25rem]">
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
        <section className="space-y-3">
          <LoadingTrendingList />
        </section>
      </aside>
    </div>
  )
}