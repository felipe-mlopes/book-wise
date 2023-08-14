export function LoadingBookList() {
  const fakeList = [...Array(15)]

  return (
    <section className="flex flex-wrap justify-center lg:justify-start gap-5">
      {fakeList.map((_, idx) => (
        <div key={idx} className="animate-pulse space-y-5 px-5 py-4 w-64 h-40 md:w-80 md:h-[11.5rem] rounded-lg bg-gray700">
          <div className="flex gap-3 md:gap-5">
            <div
              role="img"
              aria-label="capa de um dos livro mais avaliado"
              className="w-[5.0625rem] h-[7.125rem] md:w-[6.75rem] md:h-[9.5rem] bg-gray600 rounded"
            />
            <div className="flex flex-col justify-between">
              <div className="flex flex-col gap-1">
                <strong className="w-24 md:w-40 h-4 bg-gray600 rounded" />
                <p className="w-16 md:w-24 h-4 bg-gray600 rounded" />
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
    </section>
  )
}