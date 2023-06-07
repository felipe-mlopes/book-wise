'use client'

import { Star } from 'lucide-react'

interface StarProps {
  fill: number
}

export function StarRating({ fill }: StarProps) {

  return (
    <div className='flex gap-1'>
      {[...Array(5)].map((_, idx) => {
        idx += 1
        return (
          <Star 
            key={idx}
            className={`${idx <= fill && 'fill-purple100'} w-4 h-4 stroke-purple100`} 
          />
        )
      })}
    </div>
  )
}