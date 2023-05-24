import { LineChart, LogIn, Search, User2 } from 'lucide-react';

export function Menu() {
  return (
    <div className="flex flex-col gap-4">
      <div className="group relative">
        <a
          className="flex items-center gap-3 text-gray400 text-base cursor-pointer py-2 px-4 group-hover:text-gray100 group-active:text-gray100 group-active:font-bold current:content-[''] current:absolute current:top-2 current:left-0 current:rounded current:w-1 current:h-6 current:bg-green100"
          href="#"
        >
          <LineChart className="h-6 w-6 text-gray400 group-hover:text-gray100 group-active:text-gray100 group-active:font-bold" />
          Início
        </a>
      </div>
      <div className="group relative">
        <a
          className="flex items-center gap-3 text-gray400 text-base cursor-pointer py-2 px-4 group-hover:text-gray100 group-active:text-gray100 group-active:font-bold current:content-[''] current:absolute current:top-2 current:left-0 current:rounded current:w-1 current:h-6 current:bg-green100"
          href="#"
        >
          <Search className="h-6 w-6 text-gray400 group-hover:text-gray100 group-active:text-gray100 group-active:font-bold" />
          Explorar
        </a>
      </div>
      <div className="group relative">
        <a
          className="flex items-center gap-3 text-gray400 text-base cursor-pointer py-2 px-4 group-hover:text-gray100 group-active:text-gray100 group-active:font-bold current:content-[''] current:absolute current:top-2 current:left-0 current:rounded current:w-1 current:h-6 current:bg-green100"
          href="#"
        >
          <User2 className="h-6 w-6 text-gray400 group-hover:text-gray100 group-active:text-gray100 group-active:font-bold" />
          Perfil
        </a>
      </div>
    </div>
  );
}
