export function LoadingLastReviewUserLogged() {
  return (
    <section className="animate-pulse flex flex-col gap-4 max-w-[38rem]">
      <div className="flex items-center justify-between">
        <p className="w-[6.5rem] h-3.5 bg-gray700 rounded" />
        <div 
          role="link" 
          aria-label="link para ver todas as suas avaliações" 
          className="w-[5.5rem] h-3.5 bg-gray700 rounded" 
        />
      </div>

      <div className="flex gap-6 py-5 px-6 w-[38rem] h-[12rem] bg-gray700 rounded-lg">
        <div
          role="img"
          aria-label="capa do último livro comentado pelo usuário"
          className="w-[6.75rem] h-auto bg-gray600 rounded"
        />

        <div className="space-y-6 w-[26.75rem]">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <p className="w-10 h-4 bg-gray600 rounded" />
              <span role="img" aria-label="ícones de estrela sobre avaliação dos livros" className="w-24 h-4 bg-gray600 rounded" />
            </div>
            <div className="flex flex-col gap-1">
              <strong className="w-52 h-5 bg-gray600 rounded" />
              <p className="w-48 h-[1.125rem] bg-gray600 rounded" />
            </div>
          </div>

          <p className="w-[26.75rem] h-14 bg-gray600 rounded" />
        </div>
      </div>
    </section>
  )
}