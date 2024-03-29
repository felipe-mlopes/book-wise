'use client'

import { ComponentProps, ReactNode, useContext } from "react";
import { SectionContext } from "@/contexts/section-context";

interface TimeLineProps extends ComponentProps<'main'> {
  children: ReactNode
}

export function TimeLine({ children, ...props }: TimeLineProps) {
  const { selectedFeedSection, setSelectedFeedSection } = useContext(SectionContext)

  return (
    <main {...props}>
      <ul className="flex items-center justify-center gap-2 md:hidden md:invisible">
        <li
          onClick={() => setSelectedFeedSection('Avaliações')}
          className={`flex py-2 px-4 border border-solid border-purple100 rounded-full text-purple100 text-sm cursor-pointer hover:bg-purple200 hover:text-gray100 active:bg-purple200 active:text-gray100 list-none
          ${(selectedFeedSection === 'Avaliações') ? `bg-purple200 text-white` : ''}`}
        >
          Avaliações
        </li>
        <li
          onClick={() => setSelectedFeedSection('Livros Populares')}
          className={`flex py-2 px-4 border border-solid border-purple100 rounded-full text-purple100 text-sm cursor-pointer hover:bg-purple200 hover:text-gray100 active:bg-purple200 active:text-gray100 list-none ${(selectedFeedSection === 'Livros Populares') ? `bg-purple200 text-white` : ''}`}
        >
          Livros Populares
        </li>
      </ul>
      <div className="flex justify-center md:gap-4 md:mt-0 xl:gap-16">
        {children}
      </div>
    </main>
  )
}