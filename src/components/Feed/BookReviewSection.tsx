'use client'

import { FeedContext } from "@/contexts/feed-context";
import { ReactNode, useContext } from "react";

interface BookReviewSectionProps {
  children: ReactNode
}

export function BookReviewSection({ children }: BookReviewSectionProps) {
  const { selectedSection } = useContext(FeedContext)

  return (
    <div
      className={`${selectedSection !== 'Avaliações' && `hidden invisible md:block md:visible`} 
      space-y-5 md:space-y-10 max-md:min-w-[12rem]`}
    >
      {children}
    </div>
  )
}