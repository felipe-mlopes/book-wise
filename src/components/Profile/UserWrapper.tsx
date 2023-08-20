'use client'

import { SectionContext } from "@/contexts/section-context"
import { Children, ComponentProps, ReactNode, useContext } from "react"

interface UserWrapperProps extends ComponentProps<'main'> {
  children: ReactNode
}


export function UserWrapper({ children, ...props }: UserWrapperProps) {
  const { selectedProfileSection, setSelectedProfileSection } = useContext(SectionContext)

  return (
    <main {...props}>
      <ul className="flex items-center justify-center gap-2 md:hidden md:invisible">
        <li
          onClick={() => setSelectedProfileSection('Livros Avaliados')}
          className={`flex py-2 px-4 border border-solid border-purple100 rounded-full text-purple100 text-sm cursor-pointer hover:bg-purple200 hover:text-gray100 active:bg-purple200 active:text-gray100 list-none
          ${(selectedProfileSection === 'Livros Avaliados') ? `bg-purple200 text-white` : ''}`}
        >
          Livros Avaliados
        </li>
        <li
          onClick={() => setSelectedProfileSection('Análise de Perfil')}
          className={`flex py-2 px-4 border border-solid border-purple100 rounded-full text-purple100 text-sm cursor-pointer hover:bg-purple200 hover:text-gray100 active:bg-purple200 active:text-gray100 list-none ${(selectedProfileSection === 'Análise de Perfil') ? `bg-purple200 text-white` : ''}`}
        >
          Análise de Perfil
        </li>
      </ul>
      {children}
    </main>
  )
}