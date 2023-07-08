import { Skeleton } from "@/components/Global/Skeleton";

export function LoadingBookReviewList() {
  return (
    <section className="flex flex-col gap-4 max-w-[40rem]">
      <p className="text-gray100 text-sm">Avaliações mais recentes</p>
      <div className="flex flex-col gap-3">
        <Skeleton className="w-[38rem] h-[17.5rem] rounded-lg" />
        <Skeleton className="w-[38rem] h-[17.5rem] rounded-lg" />
        <Skeleton className="w-[38rem] h-[17.5rem] rounded-lg" />
        <Skeleton className="w-[38rem] h-[17.5rem] rounded-lg" />
      </div>
    </section>
  )
}