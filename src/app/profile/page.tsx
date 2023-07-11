import { SearchInput } from '../../components/Global/SearchInput';
import { Sidebar } from '../../components/Global/Sidebar';
import { Analytics } from '../../components/Profile/Analytics';
import { UserReviewsList } from '@/components/Profile/UserReviewsList';
import { Header } from '@/components/Global/Header';

export default function Explore() {
  return (
    <div className="grid grid-rows-feed grid-cols-feed mt-5 ml-5 gap-x-16 gap-y-10 overflow-hidden">
      <Sidebar />
      <Header page="profile" />
      <main className="row-span-2 space-y-8 ml-8">
        <SearchInput placeholder="Buscar livro avaliado" />
        <div className="flex flex-col gap-6">
          <UserReviewsList />
        </div>
      </main>
      <Analytics />
    </div>
  );
}
