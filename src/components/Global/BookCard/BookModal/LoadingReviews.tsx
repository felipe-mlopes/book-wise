interface LoadingReviewsProps {
  amountReviews: number
}

export function LoadingReviews({ amountReviews }: LoadingReviewsProps) {
  const fakeList = [...Array(amountReviews)]

  return (
    <div className="space-y-3">
      {fakeList.map((_, idx) => (
        <div key={idx} className="animate-pulse w-[17rem] h-64 xs:w-[22rem] xs:h-48 sm:w-[33.75rem] sm:h-[9.625rem] p-6 space-y-5 bg-gray700 rounded-lg">
          <div className="flex flex-col gap-4 xs:flex-row xs:gap-0 xs:justify-between">
            <div className="flex gap-4">
              <div
                role="img"
                aria-label="avatar do usuário"
                className="w-10 h-w-10 bg-gray600 rounded-full"
              />
              <div className="flex flex-col gap-1">
                <strong className="w-20 h-5 bg-gray600 rounded" />
                <p className="w-10 h-5 bg-gray600 rounded" />
              </div>
            </div>
            <span
              role="img"
              aria-label="ícones de estrelas"
              className="order-first xs:order-none w-24 h-4 bg-gray600 rounded"
            />
          </div>
          <p className="w-56 h-28 xs:w-[19rem] xs:h-20 sm:w-[30rem] sm:h-12 bg-gray600 rounded" />
        </div>
      ))}
    </div>
  )
}