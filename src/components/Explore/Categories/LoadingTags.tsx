export function LoadingTags() {
  const fakeList = [...Array(10)]

  return (
    <section className="w-full">
      <ul className="flex gap-3 max-w-full overflow-x-hidden">
        {fakeList.map((_, idx) => (
          <li key={idx} className="animate-pulse">
            <div className="w-[5.5rem] h-8 bg-gray700 rounded-full" />
          </li>
        ))}
      </ul>
    </section>
  )
}