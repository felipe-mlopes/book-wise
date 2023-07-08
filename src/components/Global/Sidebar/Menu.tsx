'use client'

import Link from "next/link"
import { useSession } from "next-auth/react"
import { usePathname } from "next/navigation"

import { ChartLineUpIcon } from "@/components/Icons/ChartLineUpIcon"
import { BinocularsIcon } from "@/components/Icons/BinocularsIcon"
import { UserIcon } from "@/components/Icons/UserIcon"

export function Menu() {
  const pathname = usePathname()
  const { status } = useSession()

  const isSignedId = status === 'authenticated'

  return (
    <nav className="space-y-4">
      <div className="group relative">
        <Link
          href="/feed"
          className={`flex items-center gap-3 text-base cursor-pointer py-2 px-4  ${pathname === '/feed' ? `font-bold text-gray100` : `text-gray400 group-hover:text-gray100`}`}
        >
          <div className={`absolute top-2 left-0 rounded w-1 h-6 bg-green100 ${pathname !== '/feed' && 'invisible'}`} />
          <ChartLineUpIcon type="menu" isActive={pathname === '/feed' && true} />
          Início
        </Link>
      </div>
      <div className="group relative">
        <Link
          href="/explore"
          className={`flex items-center gap-3 text-base cursor-pointer py-2 px-4  ${pathname === '/explore' ? `font-bold text-gray100` : `text-gray400 group-hover:text-gray100`}`}
        >
          <div className={`absolute top-2 left-0 rounded w-1 h-6 bg-green100 ${pathname !== '/explore' && 'invisible'}`} />
          <BinocularsIcon type="menu" isActive={pathname === '/explore' && true} />
          Explorar
        </Link>
      </div>
      <div className="group relative">
        <Link
          className={`flex items-center gap-3 text-base cursor-pointer py-2 px-4  ${pathname === '/profile' ? `font-bold text-gray100` : `text-gray400 group-hover:text-gray100`} ${!isSignedId && 'invisible' }`}
          href="/profile"
        >
          <div className={`${pathname !== '/profile' && 'invisible'} absolute top-2 left-0 rounded w-1 h-6 bg-green100`} />
          <UserIcon type="menu" isActive={pathname === '/profile' && true} />
          Perfil
        </Link>
      </div>
    </nav>
  )
}