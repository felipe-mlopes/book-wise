'use client'

import { SectionContext } from "@/contexts/section-context";
import { ReactNode, useContext } from "react";

interface BookReviewSectionProps {
  children: ReactNode,
  isProfile?: boolean
}

export function BookReviewSection({ children, isProfile }: BookReviewSectionProps) {
  const { selectedProfileSection } = useContext(SectionContext)

  return (
    <div
      data-page={isProfile}
      className={`${selectedProfileSection !== 'Livros Avaliados' && `hidden invisible md:block md:visible`} 
      space-y-5 md:space-y-10 max-md:min-w-[12rem] data-[page=true]:md:mr-8 data-[page=true]:lg:mr-16`}
    >
      {children}
    </div>
  )
}