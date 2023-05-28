import { User2 } from 'lucide-react';
import { BookDetails } from '../../components/BookDetails';
import { SearchInput } from '../../components/SearchInput';
import { Sidebar } from '../../components/Sidebar';
import { Analytics } from '@/components/Anaylitsc';

export default function Explore() {
  return (
    <div className="grid grid-rows-feed grid-cols-feed mt-5 ml-5 gap-x-16 gap-y-10 overflow-hidden">
      <Sidebar />
      <header className="col-span-2">
        <div className="flex items-center gap-3 mt-[3.25rem] ml-8">
          <div className="flex items-center gap-3 ">
            <User2 className="h-6 w-6 text-green100" />
            <h2 className="text-2xl font-bold text-gray100">Profile</h2>
          </div>
          <div className="pt-10"></div>
        </div>
      </header>
      <main className="row-span-2 space-y-8 ml-8">
        <SearchInput placeholder="Buscar livro avaliado" />
        <div className="flex flex-col gap-6">
          <section className="flex flex-col gap-2">
            <span className="text-gray300 text-sm">Há 2 dias</span>
            <div className="flex flex-col gap-6 p-6 bg-gray700 rounded-lg cursor-pointer border-solid border-2 border-transparent hover:border-solid hover:border-2 hover:border-gray600">
              <BookDetails width="6.125rem" height="8.375rem" />
              <p className="text-gray300 text-sm">
                Tristique massa sed enim lacinia odio. Congue ut faucibus nunc
                vitae non. Nam feugiat vel morbi viverra vitae mi. Vitae
                fringilla ut et suspendisse enim suspendisse vitae. Leo non eget
                lacus sollicitudin tristique pretium quam. Mollis et luctus amet
                sed convallis varius massa sagittis. Proin sed proin at leo quis
                ac sem. Nam donec accumsan curabitur amet tortor quam sit.
                Bibendum enim sit dui lorem urna amet elit rhoncus ut. Aliquet
                euismod vitae ut turpis. Aliquam amet integer pellentesque.
              </p>
            </div>
          </section>
          <section className="flex flex-col gap-2">
            <span className="text-gray300 text-sm">Há 2 dias</span>
            <div className="flex flex-col gap-6 p-6 bg-gray700 rounded-lg cursor-pointer border-solid border-2 border-transparent hover:border-solid hover:border-2 hover:border-gray600">
              <BookDetails width="6.125rem" height="8.375rem" />
              <p className="text-gray300 text-sm">
                Tristique massa sed enim lacinia odio. Congue ut faucibus nunc
                vitae non. Nam feugiat vel morbi viverra vitae mi. Vitae
                fringilla ut et suspendisse enim suspendisse vitae. Leo non eget
                lacus sollicitudin tristique pretium quam. Mollis et luctus amet
                sed convallis varius massa sagittis. Proin sed proin at leo quis
                ac sem. Nam donec accumsan curabitur amet tortor quam sit.
                Bibendum enim sit dui lorem urna amet elit rhoncus ut. Aliquet
                euismod vitae ut turpis. Aliquam amet integer pellentesque.
              </p>
            </div>
          </section>
          <section className="flex flex-col gap-2">
            <span className="text-gray300 text-sm">Há 2 dias</span>
            <div className="flex flex-col gap-6 p-6 bg-gray700 rounded-lg cursor-pointer border-solid border-2 border-transparent hover:border-solid hover:border-2 hover:border-gray600">
              <BookDetails width="6.125rem" height="8.375rem" />
              <p className="text-gray300 text-sm">
                Tristique massa sed enim lacinia odio. Congue ut faucibus nunc
                vitae non. Nam feugiat vel morbi viverra vitae mi. Vitae
                fringilla ut et suspendisse enim suspendisse vitae. Leo non eget
                lacus sollicitudin tristique pretium quam. Mollis et luctus amet
                sed convallis varius massa sagittis. Proin sed proin at leo quis
                ac sem. Nam donec accumsan curabitur amet tortor quam sit.
                Bibendum enim sit dui lorem urna amet elit rhoncus ut. Aliquet
                euismod vitae ut turpis. Aliquam amet integer pellentesque.
              </p>
            </div>
          </section>
        </div>
      </main>
      <Analytics />
    </div>
  );
}
