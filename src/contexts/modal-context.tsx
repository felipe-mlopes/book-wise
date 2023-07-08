'use client'

import { ReactNode, createContext, useState } from "react"

interface ProdiverProps {
  children: ReactNode
}

interface ItemsTypes {
  isLoginModalOpen: boolean,
  setIsLoginModalOpen: (value: boolean) => void,
  handleLoginModal: () => void,
}

export const ModalContext = createContext({} as ItemsTypes)

export function ModalContextProvider({ children }: ProdiverProps) {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)

  function handleLoginModal() {
    setIsLoginModalOpen(!isLoginModalOpen)
  }

  return (
    <ModalContext.Provider 
      value={{
        isLoginModalOpen,
        setIsLoginModalOpen,
        handleLoginModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  )
}