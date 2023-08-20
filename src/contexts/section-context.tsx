'use client'

import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react"

interface ProdiverProps {
  children: ReactNode
}

interface ItemsTypes {
  selectedFeedSection: string,
  setSelectedFeedSection: Dispatch<SetStateAction<string>>,
  selectedProfileSection: string,
  setSelectedProfileSection: Dispatch<SetStateAction<string>>
}

export const SectionContext = createContext({} as ItemsTypes)

export function FeedContextProvider({ children }: ProdiverProps) {
  const [selectedFeedSection, setSelectedFeedSection] = useState('Avaliações')
  const [selectedProfileSection, setSelectedProfileSection] = useState('Livros Avaliados')

  return (
    <SectionContext.Provider
      value={{
        selectedFeedSection,
        setSelectedFeedSection,
        selectedProfileSection,
        setSelectedProfileSection
      }}
    >
      {children}
    </SectionContext.Provider>
  )
}