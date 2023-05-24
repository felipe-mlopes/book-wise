import Image from "next/image";
import book2 from '../assets/images/book2.svg'

export function BookCard() {
  return (
    <div className="flex px-5 py-4 rounded-lg bg-gray700">
      <Image src={book2} alt="" width={64} height={94}className="w-16 h-[5.875rem] rounded" />
      <div className="flex flex-col justify-between">
        <div>
          <strong className="text-gray100 text-base">A revolução dos bichos</strong>
          <p className="text-gray400 text-sm">George Orwell</p>
        </div>
        Stars
      </div>
    </div>
  )
}