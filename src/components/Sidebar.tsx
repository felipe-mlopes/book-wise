import { Logo } from './Logo';
import { Menu } from './Menu';
import { LogIn } from 'lucide-react';

export function Sidebar() {
  return (
    <nav className="row-span-3">
      <div className="flex flex-col items-center justify-between px-[3.25rem] pt-10 pb-6 rounded-xl h-screen bg-gray700">
        <div className="flex flex-col gap-16">
          <Logo w={24} h={24} size="1.25rem" />
          <Menu />
        </div>
        <footer className="flex items-center gap-3 cursor-pointer py-1 px-2 hover:bg-gray800 hover:rounded">
          <p className="text-gray200 text-bold text-base">Fazer login</p>
          <LogIn className="w-5 h-5 text-green100" />
        </footer>
      </div>
    </nav>
  );
}
