import Image from 'next/image';
import book2 from '../../assets/images/book2.svg';
import { StarRating } from './StarRating';

interface BookDetailsProps {
  width: string;
  height: string;
}

export function BookDetails({ width, height }: BookDetailsProps) {
  return (
    <div className="flex gap-5">
      <Image
        src={book2}
        alt=""
        width={108}
        height={152}
        className={`w-[${width}] h-[${height}] rounded`}
      />
      <div className="flex flex-col justify-between">
        <div>
          <strong className="text-gray100 text-base">
            A revolução dos bichos
          </strong>
          <p className="text-gray400 text-sm">George Orwell</p>
        </div>
        <StarRating fill={4} />
      </div>
    </div>
  );
}
