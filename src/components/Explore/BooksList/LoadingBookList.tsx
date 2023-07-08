import { Skeleton } from "@/components/Global/Skeleton";

export function LoadingBookList() {
  return (
    <div className="flex flex-wrap gap-5">
      {[...Array(15).keys()].map(item => (
        <div key={item}>
          <Skeleton className="w-[20rem] h-[11.5rem]" />
        </div>
      ))}
    </div>
  )
}