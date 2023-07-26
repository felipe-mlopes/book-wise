'use client'

import { useContext } from "react"
import { TagsContext } from "@/contexts/tags-context"
import { useFilter } from "@/hooks/use-filter"
import { ChevronIcon } from "@/components/Icons/ChevronIcon"

interface TagsListProps {
  data: string[]
}

export async function TagsList({ data }: TagsListProps) {
  const { currentPage, setCurrentPage } = useContext(TagsContext)
  const { selectedTag ,setSelectedTag } = useFilter()
  const startIdx = currentPage * 8
  const endIdx = startIdx + 8
  
  const currentTags = data.slice(startIdx, endIdx)
  const tagsAmount = data.length

  function handlePreviousPage() {
    setCurrentPage((state: number) => state - 1);
  };

  function handleNextPage() {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <>
      <button 
        onClick={handlePreviousPage} 
        disabled={currentPage === 0} 
        className="cursor-pointer disabled:cursor-not-allowed"
      >
        <ChevronIcon type="left" isTag={true} isDisabled={currentPage === 0} />
      </button>
      {currentTags.map((category, idx) => {
        const isSelected = category === selectedTag
        const isFirstItem = idx === 0

        return (
            <li 
              key={idx}
              onClick={() => setSelectedTag(category)}
              className={`
                flex py-2 px-4 border border-solid border-purple100 rounded-full text-purple100 text-sm cursor-pointer hover:bg-purple200 hover:text-gray100 active:bg-purple200 active:text-gray100 list-none
                ${isSelected || (isFirstItem && selectedTag === null) ? `bg-purple200 text-white` : ''}
              `}
            >
              {category}
            </li>
          )
        })}
      <button 
        onClick={handleNextPage} 
        disabled={endIdx >= tagsAmount} 
        className="cursor-pointer disabled:cursor-not-allowed"
      >
        <ChevronIcon type="right" isTag={true} isDisabled={endIdx >= tagsAmount} />
      </button>
    </>
  )
}