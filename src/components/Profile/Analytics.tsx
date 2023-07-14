'use client'

import { useProfileAnalytics } from "@/hooks/use-profile-analytics";
import { Book, BookOpen, Bookmark, UserSquare2 } from "lucide-react";
import Image from "next/image";
import { LoadingAnalytics } from "./LoadingAnalytics";

export function Analytics() {
  const { data, isLoading } = useProfileAnalytics()

  if (isLoading) {
    return <LoadingAnalytics />
  }

  return (
    <aside className="flex flex-col items-center max-w-[20.25rem]">
      <div className="flex flex-col items-center gap-8 px-14 pb-5 border-l border-solid border-gray700">
        <div className="flex flex-col items-center gap-5">
          <Image
            src={data?.avatarUrl ?? ''}
            alt="imagem do avatar do usuário"
            width={72}
            height={72}
            className="max-h-[4.5rem] max-w-[4.5rem] rounded-full border border-solid bg-clip-border border-transparent bg-gradient-to-t from-green50 to-purple50"
          />
          <div className="flex flex-col items-center">
            <strong className="text-gray100 text-xl">{data?.name}</strong>
            <p className="text-gray400 text-sm">membro desde {data?.createdAt}</p>
          </div>
        </div>
        <div className="w-8 h-1 bg-green100 rounded-full" />
        <div className="space-y-10 mt-5">
          <div className="flex items-center gap-5">
            <BookOpen className="w-8 h-8 text-green100" />
            <div>
              <strong className="text-gray200 text-base">{data?.bookTotalPagesReadAmount}</strong>
              <p className="text-gray300 text-sm">Páginas lidas</p>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <Book className="w-8 h-8 text-green100" />
            <div>
              <strong className="text-gray200 text-base">{data?.booksReadAmount}</strong>
              <p className="text-gray300 text-sm">Livros avaliados</p>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <UserSquare2 className="w-8 h-8 text-green100" />
            <div>
              <strong className="text-gray200 text-base">{data?.distinctAuthorsReadAmount}</strong>
              <p className="text-gray300 text-sm">Autores lidos</p>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <Bookmark className="w-8 h-8 text-green100" />
            <div>
              <strong className="text-gray200 text-base">{data?.mostFrequentCategory}</strong>
              <p className="text-gray300 text-sm">Categoria mais lida</p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  )
}