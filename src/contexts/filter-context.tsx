'use client'

import { ReactNode, createContext, useState } from "react"

interface ProdiverProps {
  children: ReactNode
}

interface ItemsTypes {
  search: string,
  setSearch: (value: string) => void,
  selectedTag: string,
  setSelectedTag: (value: string) => void
}

export const FilterContext = createContext({} as ItemsTypes)

export function FilterContextProvider({ children }: ProdiverProps) {
  const [search, setSearch] = useState('')
  const [selectedTag, setSelectedTag] = useState('Tudo')

  return (
    <FilterContext.Provider 
      value={{
        search,
        setSearch,
        selectedTag,
        setSelectedTag
      }}
    >
      {children}
    </FilterContext.Provider>
  )
}