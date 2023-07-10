import { Skeleton } from "../Global/Skeleton";

export function LoadingUserReviewsList() {
  return (
    <section className="flex flex-col gap-2">
      <Skeleton className="w-[4.75rem] h-[1.375rem]" />
      <Skeleton className="w-[39rem] h-[18.375rem]" />
    </section>
  )
}