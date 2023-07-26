import { ChevronIcon } from "@/components/Icons/ChevronIcon";


export function LoadingTags() {
  const fakeList = [...Array(8)]

  return (
    <ul className="flex items-center gap-3">
      <ChevronIcon type="left" isDisabled={true} isTag={true} />
      {fakeList.map((_, idx) => (
        <li key={idx} className="animate-pulse">
          <div className="w-[5.5rem] h-8 bg-gray700 rounded-full" />
        </li>
      ))}
      <ChevronIcon type="right" isDisabled={false} isTag={true} />
    </ul>
  )
}