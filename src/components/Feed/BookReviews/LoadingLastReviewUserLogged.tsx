export function LoadingLastReviewUserLogged() {
  return (
    <>
      <div className="animate-pulse hidden invisible m:flex m:gap-6 m:visible m:bg-gray600 m:rounded-lg m:py-5 m:px-6">
        <div
          role="img"
          aria-label="capa do livro"
          className="w-[6.75rem] h-[9.5rem] bg-gray500 rounded"
        />

        <div className="space-y-6">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <p className="w-10 h-4 bg-gray500 rounded" />
              <span
                role="img"
                aria-label="ícones de estrela sobre avaliação dos livros"
                className="w-24 h-4 bg-gray500 rounded"
              />
            </div>
            <div className="flex flex-col gap-1">
              <strong className="w-36 h-6 bg-gray500 rounded" />
              <p className="w-28 h-6 bg-gray500 rounded" />
            </div>
          </div>

          <p className="lg:w-60 xl:w-[27rem] h-14 bg-gray500 rounded" />
        </div>
      </div>

      <div className="animate-pulse flex flex-col gap-6 bg-gray600 rounded-lg p-4 m:hidden m:invisible">
        <div className="flex items-center justify-between">
          <p className="w-10 h-4 bg-gray500 rounded" />
          <span
            role="img"
            aria-label="ícones de estrela sobre avaliação dos livros"
            className="w-24 h-4 bg-gray500 rounded"
          />
        </div>
        <div className="flex gap-4">
          <div
            role="img"
            aria-label="capa do livro"
            className="w-[5.5rem] h-[8.25rem] bg-gray500 rounded"
          />
          <div className="flex flex-col justify-between">
            <strong className="w-36 h-4 bg-gray500 rounded" />
            <p className="w-28 h-4 bg-gray500 rounded" />
          </div>
        </div>

        <p className="w-60 h-8 bg-gray500 rounded" />
      </div>
    </>
  )
}