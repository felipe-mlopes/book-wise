'use client'

import { ReactNode } from "react";
import { CloseIcon } from "@/components/Icons/CloseIcon";

interface BookModalProps {
  isOpen: boolean,
  onClose: () => void,
  children: ReactNode
}

export function BookModal({
  isOpen,
  onClose,
  children
}: BookModalProps) {

  if (!isOpen) {
    return null;
  }

  return (
    <div
      role="dialog"
      aria-label="bookmodal"
      className="bg-gray800/60 data-[state=open]:animate-overlayShow fixed inset-0 z-50"
      onClick={onClose}
    >
      <div
        className="data-[state=open]:animate-contentShow fixed inset-y-0 right-0 max-w-[660px] rounded-xl bg-gray800 px-6 sm:px-12 py-14 shadow-modal overflow-y-auto scrollbar-thin scrollbar-track-gray700 scrollbar-thumb-gray600 focus:outline-none"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="flex items-center justify-center p-1 absolute top-3 right-6 sm:right-12 cursor-pointer"
          onClick={onClose}
        >
          <CloseIcon />
        </div>
        <div className="space-y-10">
          {children}
        </div>
      </div>
    </div>
  )
}