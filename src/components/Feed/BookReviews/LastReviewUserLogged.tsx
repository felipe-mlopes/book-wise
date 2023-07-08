'use client'

import { useSession } from "next-auth/react";

import { useLastRatingUserLogged } from "@/hooks/use-last-rating-user-logged";
import { LoadingLastReviewUserLogged } from "./LoadingLastReviewUserLogged";
import { ChevronIcon } from "@/components/Icons/ChevronIcon";
import { LastRatingUserLoggedProps } from "@/@types/last-rating-user-logged";
import { ReviewUserLoggedCard } from "./ReviewUserLoggedCard";


export function LastReviewUserLogged() {
  const { status } = useSession()
  const isSignedId = status === 'authenticated'
    
  const { data, isLoading } = useLastRatingUserLogged()
  const hasData = data?.length! > 0

  if (isLoading && hasData) {
    return <LoadingLastReviewUserLogged />
  }
  
  return (
    <>
      { isSignedId && hasData ? (
        <section className="flex flex-col gap-4 max-w-[40rem]">
          <div className="flex items-center justify-between">
            <p className="text-gray100 text-sm">Sua última leitura</p>
            <a
              href=""
              className="flex items-center gap-2 py-1 px-2 rounded text-purple100 text-sm font-bold cursor-pointer hover:bg-purple100 hover:bg-opacity-5"
            >
              Ver todas
              <ChevronIcon type="right" w={16} h={16} />
            </a>
          </div>
          <div>
            { data?.map((bookCard: LastRatingUserLoggedProps) => {
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
            }) }
          </div>
        </section>
      ) : '' }
    </>
  )
}