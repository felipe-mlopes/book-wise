import { Book, BookOpen, Bookmark, UserSquare2 } from "lucide-react";
import Image from "next/image";

export function Analytics() {
  return (
    <aside className="flex flex-col items-center max-w-[20.25rem]">
      <div className="flex flex-col items-center gap-8 px-14 pb-5 border-l border-solid border-gray700">
        <div className="flex flex-col items-center gap-5">
          <Image
            src="https://avatars.githubusercontent.com/u/60843113?v=4"
            alt=""
            width={72}
            height={72}
            className="h-[4.5rem] w-[4.5rem] rounded-full border border-solid bg-clip-border border-transparent bg-gradient-to-t from-green50 to-purple50"
          />
          <div className="flex flex-col items-center">
            <strong className="text-gray100 text-xl">Cristofer Rosser</strong>
            <p className="text-gray400 text-sm">membro desde 2019</p>
          </div>
        </div>
        <div className="w-8 h-1 bg-green100 rounded-full" />
        <div className="space-y-10 mt-5">
          <div className="flex items-center gap-5">
            <BookOpen className="w-8 h-8 text-green100" />
            <div>
              <strong className="text-gray200 text-base">3853</strong>
              <p className="text-gray300 text-sm">Páginas lidas</p>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <Book className="w-8 h-8 text-green100" />
            <div>
              <strong className="text-gray200 text-base">10</strong>
              <p className="text-gray300 text-sm">Livros avaliados</p>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <UserSquare2 className="w-8 h-8 text-green100" />
            <div>
              <strong className="text-gray200 text-base">8</strong>
              <p className="text-gray300 text-sm">Autores lidos</p>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <Bookmark className="w-8 h-8 text-green100" />
            <div>
              <strong className="text-gray200 text-base">Computação</strong>
              <p className="text-gray300 text-sm">Categoria mais lida</p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  )
}