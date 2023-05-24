import { BookCard } from '@/components/BookCard';
import { Card } from '../../components/Card';
import { Sidebar } from '../../components/Sidebar';
import { ChevronRight } from 'lucide-react';

export default function Feed() {
  return (
    <div className="grid grid-rows-feed grid-cols-feed mt-5 ml-5 mr-24 gap-x-16 gap-y-10 overflow-hidden">
      <Sidebar />
      <header className="col-span-2"></header>
      <main className="row-span-2 flex flex-col pr-10 gap-10">
        <section className="flex flex-col gap-4">
          <span className="text-gray100 text-sm">Sua última leitura</span>
          <div>
            <Card />
          </div>
        </section>
        <section className="flex flex-col gap-4">
          <span className="text-gray100 text-sm">Avaliações mais recentes</span>
          <div className="flex flex-col gap-3">
            <Card />
            <Card />
            <Card />
          </div>
        </section>
      </main>
      <aside className="row-span-3 flex flex-col gap-4 max-w-[20.25rem]">
        <div className="flex items-center justify-between">
          <span className="text-gray100 text-sm">Avaliações mais recentes</span> 
          <a href="" className='flex items-center gap-2 py-1 px-2 rounded text-purple100 text-sm font-bold cursor-pointer hover:bg-purple100 hover:bg-opacity-5'>
            Ver todos
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>
        <div className='flex flex-col gap-3'>
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
        </div>
      </aside>
    </div>
  );
}
