'use client'

import { usePathname } from 'next/navigation'
import { LineChart, Search, User2 } from 'lucide-react';


export function Menu() {
  const pathname = usePathname()

  return (
    <nav className="space-y-4">
      <div className="group relative">
        <a
          href="/feed"
          className={`flex items-center gap-3 text-base cursor-pointer py-2 px-4  ${pathname === '/feed' ? `font-bold text-gray100` : `text-gray400 group-hover:text-gray100`}`}
        >
          <div className={`absolute top-2 left-0 rounded w-1 h-6 bg-green100 ${pathname !== '/feed' && 'invisible'}`} />
          <LineChart className={`h-6 w-6 ${pathname === '/feed' ? `font-bold text-gray100` : `text-gray400 group-hover:text-gray100`}`} />
          Início
        </a>
      </div>
      <div className="group relative">
        <a
          href="/explore"
          className={`flex items-center gap-3 text-base cursor-pointer py-2 px-4  ${pathname === '/explore' ? `font-bold text-gray100` : `text-gray400 group-hover:text-gray100`}`}
        >
          <div className={`absolute top-2 left-0 rounded w-1 h-6 bg-green100 ${pathname !== '/explore' && 'invisible'}`} />
          <Search className={`h-6 w-6 ${pathname === '/explore' ? `font-bold text-gray100` : `text-gray400 group-hover:text-gray100`}`} />
          Explorar
        </a>
      </div>
      <div className="group relative">
        <a
          className={`flex items-center gap-3 text-base cursor-pointer py-2 px-4  ${pathname === '/profile' ? `font-bold text-gray100` : `text-gray400 group-hover:text-gray100`}`}
          href="/profile"
        >
          <div className={`${pathname !== '/profile' && 'invisible'} absolute top-2 left-0 rounded w-1 h-6 bg-green100`} />
          <User2 className={`h-6 w-6 ${pathname === '/profile' ? `font-bold text-gray100` : `text-gray400 group-hover:text-gray100`}`} />
          Perfil
        </a>
      </div>
    </nav>
  );
}
