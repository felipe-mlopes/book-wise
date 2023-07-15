'use client'

import { useState } from "react"
import { useCategories } from "@/hooks/use-categories"
import { useFilter } from "@/hooks/use-filter"

import { LoadingTags } from "./LoadingTags"
import { ChevronIcon } from "@/components/Icons/ChevronIcon"


export function Tags() {
  const [currentPage, setCurrentPage] = useState(0)
  const { data, isLoading } = useCategories()
  const { selectedTag, setSelectedTag } = useFilter()

  const startIdx = currentPage * 8
  const endIdx = startIdx + 8
  const currentTags = data?.slice(startIdx, endIdx)

  function handleNextPage() {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  function handlePreviousPage() {
    setCurrentPage((prevPage) => prevPage - 1);
  };


  function handleTagClick(tag: string) {
    setSelectedTag(tag)
  }

  if (isLoading) {
    return <LoadingTags />
  }

  return (
    <ul className="flex items-center gap-3">
      <button 
        onClick={handlePreviousPage} 
        disabled={currentPage === 0} 
        className="cursor-pointer disabled:cursor-not-allowed"
      >
        <ChevronIcon type="left" isTag={true} isDisabled={currentPage === 0} />
      </button>
      {currentTags?.map((category, idx) => {
        const isSelected = category === selectedTag
        const isFirstItem = idx === 0

        return (
            <li 
              key={idx}
              onClick={() => handleTagClick(category)}
              className={`
                flex py-2 px-4 border border-solid border-purple100 rounded-full text-purple100 text-sm cursor-pointer hover:bg-purple200 hover:text-gray100 active:bg-purple200 active:text-gray100 list-none
                ${isSelected || (isFirstItem && selectedTag === null) ? `bg-purple200 text-white` : ''}
              `}
            >
              {category}
            </li>
          )
        })
      }
      <button 
        onClick={handleNextPage} 
        disabled={endIdx >= data?.length!} 
        className="cursor-pointer disabled:cursor-not-allowed"
      >
        <ChevronIcon type="right" isTag={true} isDisabled={endIdx >= data?.length!} />
      </button>
    </ul>
  )
}