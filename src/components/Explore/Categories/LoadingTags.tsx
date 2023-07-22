import { Skeleton } from "@/components/Global/Skeleton";
import { ChevronIcon } from "@/components/Icons/ChevronIcon";

const fakeList = [...Array(8).keys()]

export function LoadingTags() {
  return (
    <ul className="flex items-center gap-3">
      <ChevronIcon type="left" isDisabled={true} isTag={true} />
      {fakeList.map((_, idx) => (
        <li key={idx}>
          <Skeleton className="w-[5.5rem] h-8 rounded-full" />
        </li>
      ))}
      <ChevronIcon type="right" isDisabled={false} isTag={true} />
    </ul>
  )
}