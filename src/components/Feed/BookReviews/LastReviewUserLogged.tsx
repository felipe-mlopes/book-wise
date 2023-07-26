import Link from "next/link";

import { useGetSession } from "@/hooks/use-get-session";
import { useGetLastRatingUserLogged } from "@/hooks/use-get-last-rating-user-logged";

import { ReviewUserLoggedCard } from "./ReviewUserLoggedCard";
import { LastRatingUserLoggedProps } from "@/@types/last-rating-user-logged";
import { ChevronIcon } from "@/components/Icons/ChevronIcon";


export async function LastReviewUserLogged() {
  const session = await useGetSession()
  const { userLastRating } = await useGetLastRatingUserLogged()
  const hasData = userLastRating.length > 0

  return (
    <>
      {session && hasData && (
        <section className="flex flex-col gap-4 max-w-[40rem]">
          <div className="flex items-center justify-between">
            <p className="text-gray100 text-sm">Sua última leitura</p>
            <Link
              href="/profile"
              className="flex items-center gap-2 py-1 px-2 rounded text-purple100 text-sm font-bold cursor-pointer hover:bg-purple100 hover:bg-opacity-5"
            >
              Ver todas
              <ChevronIcon type="right" />
            </Link>
          </div>
          <div>
            {userLastRating.map((bookCard: LastRatingUserLoggedProps) => {
              return (
                <ReviewUserLoggedCard
                  key={bookCard.id}
                  createdAt={bookCard.created_at}
                  description={bookCard.description}
                  rate={bookCard.rate}
                  bookName={bookCard.book.name}
                  bookAuthor={bookCard.book.author}
                  bookCover={bookCard.book.cover_url}
                />
              )
            })}
          </div>
        </section>
      )}
      {!session && ''}
    </>
  )
}