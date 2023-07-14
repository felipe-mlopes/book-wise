'use client'

import { FormEvent } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from '@hookform/resolvers/zod'
import { Rating } from "react-simple-star-rating";
import { Avatar } from "../../Avatar";
import { CloseIcon } from "@/components/Icons/CloseIcon";
import { CheckIcon } from "@/components/Icons/CheckIcon";

interface CommentTypes {
  name: string,
  avatarUrl: string
}

type commentSchemaType = z.infer<typeof commentSchema>

const commentSchema = z.object({
  rating: z.number(),
  comment: z.string().max(450, { message: "Você estourou o limite de caracteres nesse comentário." })
})

export function Comment({ name, avatarUrl }: CommentTypes) {
  const { register, handleSubmit, formState: { errors } } = useForm<commentSchemaType>({
    resolver: zodResolver(commentSchema)
  })

  function handleCreateComment (event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    console.log(event.currentTarget.value)
  }

  return (
    <form 
      onSubmit={handleSubmit(() => {})}
      className="p-6 space-y-6 bg-gray700 rounded-lg"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Avatar src={avatarUrl} width={40} height={40}/>
          <strong className="text-gray100">{name}</strong>
        </div>
        <Rating 
          emptyStyle={{ display: "flex" }} 
          fillStyle={{ display: "-webkit-inline-box" }}
          size={28}
          SVGstorkeWidth={1}
          SVGstrokeColor="#8381D9"
          emptyColor="#181C2A"
          fillColor="#8381D9"
          {...register('rating')} 
        />
      </div>
      <div className="flex flex-col items-end gap-3 max-w-[516px]">
        <label className="relative flex flex-col w-full group">
          <textarea 
            id="comment" 
            placeholder="Escreva sua avaliação" 
            maxLength={450} 
            className="bg-gray800 py-[14px] min-h-[164px] px-5 border border-solid border-gray500 rounded text-sm text-gray200 placeholder:text-gray400 placeholder:text-sm cursor-text resize-none outline-none scrollbar-thin scrollbar-track-gray700 scrollbar-thumb-gray600 group-focus-within:border-green200"
            {...register('comment')}
          />
          <span className="absolute bottom-2 right-3 text-gray400 text-xs group-focus-within:text-green200">0/450</span>
        </label>
        <div className="flex items-center gap-2">
          <button 
            type="reset" 
            className="flex items-center justify-center bg-gray600 rounded p-2 cursor-pointer hover:bg-gray500"
          >
            <CloseIcon />
          </button>
          <button 
            type="submit"
            className="flex items-center justify-center bg-gray600 rounded p-2 cursor-pointer hover:bg-gray500"
          >
            <CheckIcon />
          </button>
        </div>
      </div>

    </form>
  )
}