import { Logo } from "../Logo"


export function LoadingSidebar() {
  const fakeList = [...Array(3)]

  return (
    <div className="hidden invisible animate-pulse lg:flex lg:flex-col lg:items-center lg:justify-between lg:visible lg:rounded-xl lg:h-full">
      <div className="flex flex-col gap-16">
        <Logo />
        <nav className="space-y-4">
          {fakeList.map((_, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <span role="img" aria-label="ícone de uma opção do menu" className="w-6 h-6 bg-gray600 rounded" />
              <p className="w-14 lg:w-16 xl:w-20 h-[1.625rem] bg-gray600 rounded" />
            </div>
          ))}
        </nav>
      </div>
      <div className="flex items-center gap-3 cursor-pointer py-1 px-2 bg-gray700">
        <span className="flex items-center gap-3 w-full">
          <div
            role="img"
            aria-label="foto de perfil do usuário"
            className="h-8 w-8 bg-gray600 rounded-full"
          />
          <p className="w-14 lg:w-20 xl:w-24 h-[1.375rem] bg-gray600 rounded" />
        </span>
        <div role="button" aria-label="botão de logoff" className="w-[1.375rem] h-[1.375rem] bg-gray600 rounded" />
      </div>
    </div>
  )
}