'use client'

import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react"

interface ProdiverProps {
  children: ReactNode
}

interface ItemsTypes {
  currentPage: number,
  setCurrentPage: Dispatch<SetStateAction<number>>
}

export const TagsContext = createContext({} as ItemsTypes)

export function TagsContextProvider({ children }: ProdiverProps) {
  const [currentPage, setCurrentPage] = useState(0)

  return (
    <TagsContext.Provider 
      value={{
        currentPage,
        setCurrentPage
      }}
    >
      {children}
    </TagsContext.Provider>
  )
}