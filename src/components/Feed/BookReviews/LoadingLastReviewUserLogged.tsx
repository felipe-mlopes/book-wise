import { Skeleton } from "@/components/Global/Skeleton";
import { ChevronIcon } from "@/components/Icons/ChevronIcon";
import Link from "next/link";

export function LoadingLastReviewUserLogged() {
  return (
    <section className="flex flex-col gap-4 max-w-[40rem]">
      <div className="flex items-center justify-between">
        <p className="text-gray100 text-sm">Sua última leitura</p>
        <Link
          href="/profile"
          className="flex items-center gap-2 py-1 px-2 rounded text-purple100 text-sm font-bold cursor-pointer hover:bg-purple100 hover:bg-opacity-5"
        >
          Ver todas
          <ChevronIcon type="right" w={16} h={16} />
        </Link>
      </div>
      <div className="flex gap-6 bg-gray600 rounded-lg py-5 px-6">
        <Skeleton className="w-[38rem] h-[12rem]" />
      </div>
    </section>
  )
}