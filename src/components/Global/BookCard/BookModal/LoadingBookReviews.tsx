import { Skeleton } from "../../Skeleton";

export function LoadingBookReviews() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <p className="text-gray200 font-sm">Avaliações</p>
      </div>
      <div className="space-y-3">
        <Skeleton className="w-[35.25rem] h-[11.125rem] rounded-lg" />
        <Skeleton className="w-[35.25rem] h-[11.125rem] rounded-lg" />
      </div>
    </div>

  )
}