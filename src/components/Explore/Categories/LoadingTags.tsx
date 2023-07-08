import { Skeleton } from "@/components/Global/Skeleton";
import { ChevronIcon } from "@/components/Icons/ChevronIcon";

export function LoadingTags() {
  return (
    <ul className="flex items-center gap-3">
      <ChevronIcon type="left" w={48} h={48} isDisabled={true} />
      {[...Array(8).keys()].map(idx => (
        <li key={idx}>
          <Skeleton className="w-[5.5rem] h-8 rounded-full" />
        </li>
      ))}
      <ChevronIcon type="right" w={48} h={48} isDisabled={false} />
    </ul>
  )
}