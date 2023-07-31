'use client'

import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react"

interface ProdiverProps {
  children: ReactNode
}

interface ItemsTypes {
  selectedSection: string,
  setSelectedSection: Dispatch<SetStateAction<string>>
}

export const FeedContext = createContext({} as ItemsTypes)

export function FeedContextProvider({ children }: ProdiverProps) {
  const [selectedSection, setSelectedSection] = useState('Avaliações')

  return (
    <FeedContext.Provider
      value={{
        selectedSection,
        setSelectedSection
      }}
    >
      {children}
    </FeedContext.Provider>
  )
}