import { Card } from '../../components/Card';
import { Sidebar } from '../../components/Sidebar';
import { BookCard } from '../../components/BookCard';

import { ChevronRight } from 'lucide-react';
import { LineChart } from 'lucide-react';

export default function Feed() {
  return (
    <div className="grid grid-rows-feed grid-cols-feed mt-5 ml-5 gap-x-16 gap-y-10 overflow-hidden">
      <Sidebar />
      <header className="col-span-2">
        <div className="flex items-center gap-3 ml-8 pt-12">
          <LineChart className="h-6 w-6 text-green100" />
          <h2 className="text-2xl font-bold text-gray100">Início</h2>
        </div>
      </header>
      <main className="row-span-2 space-y-10 ml-8">
        <section className="flex flex-col gap-4 max-w-[40rem]">
          <div className="flex items-center justify-between">
            <span className="text-gray100 text-sm">Sua última leitura</span>
            <a
              href=""
              className="flex items-center gap-2 py-1 px-2 rounded text-purple100 text-sm font-bold cursor-pointer hover:bg-purple100 hover:bg-opacity-5"
            >
              Ver todas
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>
          <div>
            <Card />
          </div>
        </section>
        <section className="flex flex-col gap-4 max-w-[40rem]">
          <span className="text-gray100 text-sm">Avaliações mais recentes</span>
          <div className="flex flex-col gap-3">
            <Card />
            <Card />
            <Card />
          </div>
        </section>
      </main>
      <aside className="row-span-3 space-y-4 max-w-[20.25rem]">
        <div className="flex items-center justify-between">
          <span className="text-gray100 text-sm">Livros populares</span>
          <a
            href=""
            className="flex items-center gap-2 py-1 px-2 rounded text-purple100 text-sm font-bold cursor-pointer hover:bg-purple100 hover:bg-opacity-5"
          >
            Ver todos
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>
        <div className="space-y-3">
          <BookCard w="4rem" h="5.875rem" />
          <BookCard w="4rem" h="5.875rem" />
          <BookCard w="4rem" h="5.875rem" />
        </div>
      </aside>
    </div>
  );
}
