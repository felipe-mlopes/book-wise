'use client'

import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from '@hookform/resolvers/zod'
import { Rating } from "react-simple-star-rating";

import { Avatar } from "../../Avatar";
import { CloseIcon } from "@/components/Icons/CloseIcon";
import { CheckIcon } from "@/components/Icons/CheckIcon";

interface CommentTypes {
  bookId: string,
  userId: string,
  userName: string,
  userAvatarUrl: string
}

type commentSchemaType = z.infer<typeof commentSchema>

const commentSchema = z.object({
  comment: z
    .string()
    .min(10, { message: "A avaliação precisa ter no mínimo 10 caracteres." })
    .max(450, { message: "Você estourou o limite de caracteres dessa avaliação." }),
  rate: z
    .number({ required_error: "Você precisa selecionar a quantidade de estrelas para avaliação desse livro." })
})

export function Comment({ bookId, userId, userName, userAvatarUrl }: CommentTypes) {
  const { 
    register, 
    setValue,
    handleSubmit, 
    watch,
    formState: { isSubmitting, isSubmitSuccessful ,errors } 
  } = useForm<commentSchemaType>({
    resolver: zodResolver(commentSchema)
  })

  const watchComment = watch("comment")
  const characterTextAreaCount = watchComment ? watchComment.length : 0

  function handleSetRate(rate: number) {
    setValue('rate', rate)
  }

  function handleCreateComment(data: commentSchemaType) {
    const commentData = {
      rate: data.rate,
      description: data.comment,
      book_id: bookId,
      user_id: userId
    }

    fetch('api/ratings/new-rating', {
      method: 'POST',
      body: JSON.stringify(commentData)
    }).then(res => res.json())
  }

  if (isSubmitSuccessful) {
    return null
  }

  return (
    <form 
      onSubmit={handleSubmit(handleCreateComment)}
      className="p-6 space-y-6 bg-gray700 rounded-lg"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Avatar src={userAvatarUrl} width={40} height={40}/>
          <strong className="text-gray100">{userName}</strong>
        </div>
        <Rating 
          emptyStyle={{ display: "flex" }} 
          fillStyle={{ display: "-webkit-inline-box" }}
          size={28}
          SVGstorkeWidth={1}
          SVGstrokeColor="#8381D9"
          emptyColor="#181C2A"
          fillColor="#8381D9"
          onClick={handleSetRate}
        />
      </div>
      <div className="flex flex-col items-end gap-3 max-w-[516px]">
        <label htmlFor="comment" className="relative flex flex-col w-full group">
          <textarea 
            id="comment" 
            placeholder="Escreva sua avaliação" 
            maxLength={450} 
            className="bg-gray800 py-[14px] min-h-[164px] px-5 border border-solid border-gray500 rounded text-sm text-gray200 placeholder:text-gray400 placeholder:text-sm cursor-text resize-none outline-none scrollbar-thin scrollbar-track-gray700 scrollbar-thumb-gray600 group-focus-within:border-green200"
            {...register('comment')}
          />
          <span className="absolute bottom-2 right-3 text-gray400 text-xs group-focus-within:text-green200">{characterTextAreaCount}/450</span>
        </label>
        <span className="space-y-1 w-full pl-1">
          {errors.comment && <p className="text-xs text-red">{errors.comment.message}</p>}
          {errors.rate && <p className="text-xs text-red">{errors.rate.message}</p>}
        </span>
        <div className="flex items-center gap-2">
          <button 
            type="reset"
            disabled={isSubmitting} 
            className="flex items-center justify-center bg-gray600 rounded p-2 cursor-pointer hover:bg-gray500"
          >
            <CloseIcon isCancelButton={true} />
          </button>
          <button 
            type="submit"
            disabled={isSubmitting}
            className="flex items-center justify-center bg-gray600 rounded p-2 cursor-pointer hover:bg-gray500"
          >
            <CheckIcon />
          </button>
        </div>
      </div>
    </form>
  )
}