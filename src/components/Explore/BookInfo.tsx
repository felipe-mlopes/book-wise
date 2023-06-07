import Image from "next/image";
import book from '../../assets/images/book.svg'
import { StarRating } from "../Global/StarRating";
import { BookOpen, Bookmark } from "lucide-react";


export function BookInfo() {
  return (        
    <div className="bg-gray700 text-gray700 rounded-[10px] px-8 pt-6 pb-4 space-y-10">
      <div className="flex items-center gap-8">
        <Image src={book} alt="" width={172} height={242} className="w-[172px] h-[242px] rounded-[10px]" />
        <div className="space-y-24">
          <div>
            <strong className="text-gray100 text-lg">14 Hábitos de Desenvolvedores Altamente Produtivos</strong>
            <p className="text-gray300 text-base">Zeno Rocha</p>
          </div>
          <div>
            <StarRating fill={4} />
            <p className="text-gray400 text-sm">3 avaliações</p>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-14 py-6 border-t border-solid border-gray600">
        <div className="flex items-center gap-4">
          <Bookmark className="w-6 h-6 text-green100" />
          <div>
            <p className="text-gray300 text-sm">Categoria</p>
            <strong className="text-gray200 text-base">Computação, educação</strong>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <BookOpen className="w-6 h-6 text-green100" />
          <div>
            <p className="text-gray300 text-sm">Páginas</p>
            <strong className="text-gray200 text-base">160</strong>
          </div>
        </div>
      </div>
  </div>
  )
}