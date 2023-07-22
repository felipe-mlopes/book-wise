
export function LoadingAnalytics() {
  const fakeList = [...Array(4)]

  return (
    <aside className="animate-pulse flex flex-col items-center max-w-[20.25rem]">
      <div className="flex flex-col items-center gap-8 px-14 pb-5 border-l border-solid border-gray700">
        <div className="flex flex-col items-center gap-5">
          <div className="h-[4.5rem] w-[4.5rem] rounded-full border border-solid bg-clip-border border-transparent bg-gray700" />
          <div className="flex flex-col items-center gap-1">
            <strong className="w-32 h-5 bg-gray700 rounded-full" />
            <p className="w-32 h-3.5 bg-gray700 rounded-full" />
          </div>
        </div>
        <div className="w-8 h-1 bg-gray700 rounded-full" />
        <div className="space-y-10 mt-5 mr-24">
          {fakeList.map((_, idx) => (
            <div key={idx} className="flex items-center gap-5">
              <span role="img" aria-label="ícone" className="w-8 h-8 bg-gray700 rounded" />
              <div className="flex flex-col items-start gap-1">
                <strong className="w-16 h-4 bg-gray700 rounded-full" />
                <p className="w-24 h-3.5 bg-gray700 rounded-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  )
}