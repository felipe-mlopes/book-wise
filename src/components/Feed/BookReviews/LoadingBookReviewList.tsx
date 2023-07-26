export function LoadingBookReviewList() {
  const fakeList = [...Array(3)]

  return (
    <div className="animate-pulse flex flex-col gap-3">
      {fakeList.map((_, idx) => (
        <div key={idx} className="space-y-8 p-6  bg-gray700 rounded-lg">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-4">
              <div
                role="img"
                aria-label="avatar do usuário"
                className="w-12 h-12 bg-gray600 rounded-full"
              />
              <div className="flex flex-col gap-1">
                <p className="w-28 h-6 bg-gray600 rounded" />
                <p className="w-28 h-[1.3rem] bg-gray600 rounded" />
              </div>
            </div>
            <span
              role="img"
              aria-label="ícones de estrelas"
              className="w-24 h-4 bg-gray600 rounded"
            />
          </div>

          <div className="flex gap-5">
            <div
              role="img"
              aria-label="capa do livro comentado"
              className="w-[6.75rem] h-auto bg-gray600 rounded"
            />
            <div className="flex flex-col justify-between gap-5">
              <div className="flex flex-col gap-1">
                <strong className="w-36 h-6 bg-gray600 rounded" />
                <p className="w-28 h-6 bg-gray600 rounded" />
              </div>
              <p className="w-[27rem] h-[5.5rem] bg-gray600 rounded" />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}