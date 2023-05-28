import Image from 'next/image';
import book from '../assets/images/book.svg';
import { StarRating } from './StarRating';

export function Card() {
  return (
    <div className="space-y-8 p-6 bg-gray700 rounded-lg cursor-pointer border-solid border-2 border-transparent hover:border-solid hover:border-2 hover:border-gray600">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-4">
          <Image
            src="https://avatars.githubusercontent.com/u/60843113?v=4"
            alt=""
            width={40}
            height={40}
            className="h-10 w-10 rounded-full border border-solid border-green100"
          />
          <div>
            <p className="text-gray100 text-base">Jaxson Dias</p>
            <p className="text-gray400 text-sm">Hoje</p>
          </div>
        </div>
        <StarRating fill={4} />
      </div>

      {/* Content */}
      <div className="flex gap-5">
        <Image
          src={book}
          alt=""
          width={108}
          height={152}
          className="w-[6.75rem] h-[9.5rem] rounded"
        />
        <div className="flex flex-col justify-between gap-5">
          <div>
            <strong className="text-gray100 text-base">O Hobbit</strong>
            <p className="text-gray400 text-sm">J.R.R. Tolkien</p>
          </div>
          <p className="text-gray300 text-sm">
            Semper et sapien proin vitae nisi. Feugiat neque integer donec et
            aenean posuere amet ultrices. Cras fermentum id pulvinar varius leo
            a in. Amet libero pharetra nunc elementum fringilla velit ipsum. Sed
            vulputate massa velit nibh...{' '}
            <a className="text-purple100 cursor-pointer">ver mais</a>
          </p>
        </div>
      </div>
    </div>
  );
}
