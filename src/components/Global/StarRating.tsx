import { Star } from 'lucide-react'
import { ComponentProps } from 'react'

interface StarProps extends ComponentProps<'div'> {
  amount: number
}

export function StarRating({ amount, ...props }: StarProps) {
  return (
    <div className='flex gap-1' {...props}>
      {[...Array(5)].map((_, idx) => {
        idx += 1
        return (
          <Star
            key={idx}
            className={`${idx <= amount && 'fill-purple100'} w-4 h-4 stroke-purple100`}
          />
        )
      })}
    </div>
  )
}