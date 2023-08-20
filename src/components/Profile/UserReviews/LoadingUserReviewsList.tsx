export function LoadingUserReviewsList() {
  const fakeList = [...Array(2)]

  return (
    <section className="animate-pulse flex flex-col gap-3">
      {fakeList.map((_, idx) => (
        <span key={idx} className="space-y-4">
          <p className="w-[4.75rem] h-[1.375rem] bg-gray700 rounded" />

          <div className="flex flex-col gap-6 p-6 w-[39rem] h-[18.375rem] bg-gray700 rounded-lg">
            <div className="flex gap-5">
              <div role="img" aria-label="capa do livro avaliado" className="w-[6.75rem] h-[9.5rem] bg-gray600 rounded" />
              <div className="flex flex-col justify-between h-full">
                <div className="flex flex-col gap-2">
                  <strong className="w-[14.25rem] h-6 bg-gray600 rounded" />
                  <p className="w-20 h-[1.125rem] bg-gray600 rounded" />
                </div>
                <div role="img" aria-label="ícones de estrela sobre avaliação dos livros" className="w-24 h-4 bg-gray600 rounded" />
              </div>
            </div>
            <p className="w-[36rem] h-[5.5rem] bg-gray600 rounded" />
          </div>
        </span>
      ))}
    </section>
  )
}