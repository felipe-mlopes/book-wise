import { Skeleton } from "../../Global/Skeleton";

export function LoadingTrendingList() {
  return (
    <div className="space-y-3">
      <Skeleton className="w-[20.25rem] h-[8.125rem]" />
      <Skeleton className="w-[20.25rem] h-[8.125rem]" />
      <Skeleton className="w-[20.25rem] h-[8.125rem]" />
      <Skeleton className="w-[20.25rem] h-[8.125rem]" />
    </div>
  )
}