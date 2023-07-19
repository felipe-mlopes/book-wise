const fakeList = [...Array(3)]

export function LoadingBookReviewList() {
  return (
    <section className="animate-pulse flex flex-col gap-4 max-w-[40rem]">
      <p className="w-[9.875rem] h-[1.375rem] bg-gray700 rounded" />
      <div className="flex flex-col gap-3">
        { fakeList.map((_, idx) => (
          <div key={idx} className="space-y-8 p-6 w-[38rem] h-[18.5rem] bg-gray700 rounded-lg">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-4">
                <div 
                  role="img" 
                  aria-label="foto do avatar do usuário" 
                  className="w-12 h-12 bg-gray600 rounded-full" 
                />
                <div className="flex flex-col gap-1">
                  <p className="w-28 h-[1.5rem] bg-gray600 rounded" />
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
                  <strong className="w-28 h-[1.5rem] bg-gray600 rounded" />
                  <p className="w-28 h-[1.5rem] bg-gray600 rounded" />
                </div>
                <p className="w-[27rem] h-[5.5rem] bg-gray600 rounded" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}