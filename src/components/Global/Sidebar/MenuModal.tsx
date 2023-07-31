'use client'

import { ReactNode } from "react";
import { CloseIcon } from "@/components/Icons/CloseIcon";
import { Menu } from "./Menu";

interface MenuModalProps {
  isOpen: boolean,
  onClose: () => void,
  children: ReactNode
}

export function MenuModal({ isOpen, onClose, children }: MenuModalProps) {
  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="bg-gray800/70 data-[state=open]:animate-overlayShow fixed z-50 inset-0"
      onClick={onClose}
    >
      <div
        className="data-[state=open]:animate-contentShow fixed inset-y-0 right-0 max-w-[660px] rounded-xl bg-gray800 px-12 py-24 shadow-modal overflow-y-auto focus:outline-none"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="flex items-center justify-center p-1 absolute top-6 right-8 cursor-pointer"
          onClick={onClose}
        >
          <CloseIcon />
        </div>
        <div className="flex flex-col items-center justify-between h-full">
          <Menu />
          {children}
        </div>
      </div>
    </div>
  )
}