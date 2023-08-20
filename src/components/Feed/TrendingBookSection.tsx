'use client'

import Link from "next/link";
import { ChevronIcon } from "../Icons/ChevronIcon";
import { ReactNode, useContext } from "react";
import { SectionContext } from "@/contexts/section-context";

interface TrendingBooksProps {
  children: ReactNode
}

export function TrendingBooksSection({ children }: TrendingBooksProps) {
  const { selectedFeedSection } = useContext(SectionContext)

  return (
    <div className={`${selectedFeedSection !== 'Livros Populares' && `hidden invisible md:block md:visible`} space-y-4 lg:mr-8 xl:mr-16`}>
      <div className="flex items-center justify-between">
        <span className="text-gray100 text-sm">Livros populares</span>
        <Link
          href="/explore"
          className="flex items-center gap-2 py-1 px-2 rounded text-purple100 text-sm font-bold cursor-pointer hover:bg-purple100 hover:bg-opacity-5"
        >
          Ver todos
          <ChevronIcon type="right" />
        </Link>
      </div>
      {children}
    </div>
  )
}