'use client'

import { useEffect, useState } from "react"
import { splitRatingsDescription } from "@/utils/split-ratings-description"

interface BookReviewDescriptionProps {
  content: string,
  wordsAmount: number
}


export function BookReviewDescription({ content, wordsAmount }: BookReviewDescriptionProps) {
  const [description, setDescription] = useState('')
  const [isActive, setIsActive] = useState(true)

  const contentArray = content.split(' ').length
  const isLongDescription = contentArray > wordsAmount

  const { shortRatingDescription, restRatingDescription } = splitRatingsDescription(content, wordsAmount)
  const showLongDescription = description.replace('... ', restRatingDescription)

  useEffect(() => {
    if (isLongDescription) {
      return setDescription(shortRatingDescription)
    }

    setDescription(content)

  }, [isLongDescription, content, shortRatingDescription])

  function handleExpandDescription() {
    setDescription(showLongDescription)
    setIsActive(false)
  }

  return (
    <p className="text-gray300 text-sm">
      {description}
      <button
        onClick={handleExpandDescription}
        data-active={isLongDescription && isActive}
        className="text-purple100 cursor-pointer data-[active=false]:invisible disabled:cursor-not-allowed"
      >
        ver mais
      </button>
    </p>
  )
}