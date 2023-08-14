import { BinocularsIcon } from "@/components/Icons/BinocularsIcon"
import { ChartLineUpIcon } from "@/components/Icons/ChartLineUpIcon"
import { UserIcon } from "@/components/Icons/UserIcon"
import { SearchInput } from "../SearchInput"
import { Logo } from "../Logo"

interface HeaderProps {
  page: 'feed' | 'explore' | 'profile'
}

export function Header({ page }: HeaderProps) {

  function wichPathnameIsSelected(value: string) {
    if (value === 'feed') {
      return (
        <div className="flex items-center gap-3 mb-2">
          <ChartLineUpIcon type="header" />
          <h2 className="text-lg font-bold text-gray100 md:text-xl lg:text-2xl">Início</h2>
        </div>
      )
    } if (value === 'explore') {
      return (
        <div className="flex flex-col gap-3 md:flex-row md:items-baseline md:justify-between md:mr-52 md:mb-2">
          <div className="flex items-center gap-3">
            <BinocularsIcon type="header" />
            <h2 className="text-lg font-bold text-gray100 md:text-xl lg:text-2xl">Explorar</h2>
          </div>
          <div className="lg:pt-8">
            <SearchInput placeholder="Buscar livro ou autor" />
          </div>
        </div>
      )
    } if (value === 'profile') {
      return (
        <div className="flex items-center gap-3 mb-2">
          <UserIcon type="header" />
          <h2 className="text-lg font-bold text-gray100 md:text-xl lg:text-2xl">Perfil</h2>
        </div>
      )
    }
  }

  return (
    <header className="flex flex-col justify-end gap-6 absolute top-6 z-0 md:col-start-1 md:col-end-1 md:row-start-1 md:row-end-1 md:relative md:top-0 md:ml-8 lg:col-start-2 lg:col-end-2 lg:row-start-1 lg:row-end-1">
      <Logo className="flex items-center gap-3 w-fit lg:hidden lg:invisible" />
      {wichPathnameIsSelected(page)}
    </header>
  )
}