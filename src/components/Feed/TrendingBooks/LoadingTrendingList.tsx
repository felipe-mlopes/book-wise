export function LoadingTrendingList() {
  const fakeList = [...Array(4)]

  return (
    <>
      {fakeList.map((_, idx) => (
        <div key={idx} className="animate-pulse space-y-5 px-5 py-4 w-80 rounded-lg bg-gray700">
          <div className="flex gap-5 cursor-pointer">
            <div
              role="img"
              aria-label="capa de um dos livro mais avaliado"
              className="w-16 h-[5.875rem] bg-gray600 rounded"
            />
            <div className="flex flex-col justify-between">
              <div className="flex flex-col gap-1">
                <strong className="w-40 h-4 bg-gray600 rounded" />
                <p className="w-24 h-4 bg-gray600 rounded" />
              </div>
              <span 
                role="img" 
                aria-label="ícone de estrelas" 
                className="w-24 h-4 bg-gray600 rounded"
              />
            </div>
          </div>
        </div>
      ))}
    </>
  )
}