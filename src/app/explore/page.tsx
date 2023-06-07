import { BookCard } from '../../components/Global/BookCard';
import { SearchInput } from '../../components/Global/SearchInput';
import { Sidebar } from '../../components/Global/Sidebar';
import { Tags } from '../../components/Explore/Tags';

import { Search } from 'lucide-react';

export default function Explore() {
  return (
    <div className="grid grid-rows-feed grid-cols-feed mt-5 ml-5 gap-x-16 gap-y-10 overflow-hidden">
      <Sidebar />
      <header className="col-span-2">
        <div className="flex items-baseline justify-between gap-3 ml-8 mr-52">
          <div className="flex items-center gap-3 ">
            <Search className="h-6 w-6 text-green100" />
            <h2 className="text-2xl font-bold text-gray100">Explorar</h2>
          </div>
          <div className="pt-10">
            <SearchInput placeholder="Buscar livro ou autor" />
          </div>
        </div>
      </header>
      <main className="row-span-2 col-span-2 space-y-12 ml-8 mt-5">
        <Tags />
        <div className="flex flex-wrap gap-5">
          <BookCard w="6.75rem" h="9.5rem" />
          <BookCard w="6.75rem" h="9.5rem" />
          <BookCard w="6.75rem" h="9.5rem" />
          <BookCard w="6.75rem" h="9.5rem" />
          <BookCard w="6.75rem" h="9.5rem" />
          <BookCard w="6.75rem" h="9.5rem" />
          <BookCard w="6.75rem" h="9.5rem" />
          <BookCard w="6.75rem" h="9.5rem" />
          <BookCard w="6.75rem" h="9.5rem" />
          <BookCard w="6.75rem" h="9.5rem" />
          <BookCard w="6.75rem" h="9.5rem" />
          <BookCard w="6.75rem" h="9.5rem" />
        </div>
      </main>
    </div>
  );
}
