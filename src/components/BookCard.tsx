import { BookDetails } from './BookDetails';

interface BookCardProps {
  w: string;
  h: string;
}

export function BookCard({ w, h }: BookCardProps) {
  return (
    <div className="space-y-5 px-5 py-4 rounded-lg bg-gray700 cursor-pointer border-solid border-2 border-transparent hover:border-solid hover:border-2 hover:border-gray600">
      <BookDetails width={w} height={h} />
    </div>
  );
}
