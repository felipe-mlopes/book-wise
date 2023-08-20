'use client'

import { SectionContext } from "@/contexts/section-context"
import { ReactNode, useContext } from "react"

interface UserAnalyticsSectionProps {
  children: ReactNode
}


export function UserAnalyticsSection({ children }: UserAnalyticsSectionProps) {
  const { selectedProfileSection } = useContext(SectionContext)

  return (
    <div className={`${selectedProfileSection !== 'Análise de Perfil' && `hidden invisible md:block md:visible`} flex justify-center mt-6 md:block md:mt-0 space-y-4`}>
      {children}
    </div>
  )
}