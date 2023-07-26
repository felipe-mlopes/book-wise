export function LoadingLastReviewUserLogged() {
  return (
    <div className="animate-pulse flex gap-6 bg-gray600 rounded-lg py-5 px-6">
      <div
        role="img"
        aria-label="capa do livro"
        className="w-[6.75rem] h-[9.5rem] bg-gray500 rounded"
      />

      <div className="space-y-6 w-[26.75rem] ">
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

        <p className="w-[26.75rem] h-14 bg-gray500 rounded" />
      </div>
    </div>
  )
}