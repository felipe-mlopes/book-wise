import { BinocularsIcon } from "@/components/Icons/BinocularsIcon"
import { ChartLineUpIcon } from "@/components/Icons/ChartLineUpIcon"
import { UserIcon } from "@/components/Icons/UserIcon"
import { SearchInput } from "../SearchInput"

interface HeaderProps {
  page: 'feed' | 'explore' | 'profile'
}

export function Header({ page }: HeaderProps) {

  function wichPathnameIsSelected(value: string) {
    if (value === 'feed') {
      return (
        <header className="col-span-2 flex items-center gap-3 ml-8 mt-12">
          <ChartLineUpIcon type="header" />
          <h2 className="text-2xl font-bold text-gray100">Início</h2>
        </header>
      )
    } if (value === 'explore') {
      return (
        <header className="col-span-2 flex items-baseline justify-between gap-3 ml-8 mr-52">
          <div className="flex items-center gap-3 ">
            <BinocularsIcon type="header" />
            <h2 className="text-2xl font-bold text-gray100">Explorar</h2>
          </div>
          <div className="pt-10">
            <SearchInput placeholder="Buscar livro ou autor" />
          </div>
        </header>
      )
    } if (value === 'profile') {
      return (
        <header className="col-span-2 flex items-center gap-3 ml-8 mt-12">
          <UserIcon type="header" />
          <h2 className="text-2xl font-bold text-gray100">Profile</h2>
        </header>
      )
    }
  }

  return (
    <>
      {wichPathnameIsSelected(page)}
    </>
  )
}