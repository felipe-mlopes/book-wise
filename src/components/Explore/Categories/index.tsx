'use client'

import { Swiper, SwiperSlide } from "swiper/react"
import { useGetCategories } from "@/hooks/use-get-categories"
import { useFilter } from "@/hooks/use-filter"
import { LoadingTags } from "./LoadingTags"


export function Categories() {
  const { categories, isLoading } = useGetCategories()
  const { selectedTag, setSelectedTag } = useFilter()

  if (isLoading) {
    return <LoadingTags />
  }

  return (
    <section className="w-full">
      <Swiper
        tag="ul"
        slidesPerView={'auto'}
        spaceBetween={12}
      >
        {categories?.map((category, idx) => {
          const isSelected = category === selectedTag
          const isFirstItem = idx === 0

          return (
            <SwiperSlide
              key={idx}
              tag="li"
              content={category}
              onClick={() => setSelectedTag(category)}
              style={{ display: 'flex', justifyContent: 'center', width: 'fit-content', zIndex: 0 }}
              className={`
                  py-2 px-4 border border-solid border-purple100 rounded-full text-purple100 text-sm cursor-pointer hover:bg-purple200 hover:text-gray100 active:bg-purple200 active:text-gray100
                  ${isSelected || (isFirstItem && selectedTag === null) ? `bg-purple200 text-white` : ''}
              `}
            >
              {category}
            </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  )
}