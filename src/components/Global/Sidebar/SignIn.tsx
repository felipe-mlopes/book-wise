'use client'

import { LoginIcon } from "@/components/Icons/LoginIcon"
import { useModal } from "@/hooks/use-modal"
import { LoginModal } from "../Login/LoginModal"

export function SignIn() {
  const { isLoginModalOpen, handleLoginModal } = useModal()

  return (
    <div tabIndex={0} className="flex items-center gap-3 py-1 px-2 group">
      <div className="flex items-center cursor-pointer" onClick={handleLoginModal}>
        <p className="text-gray200 font-bold text-base min-w-[6rem] group-hover:text-gray100">
          Fazer login
        </p>
        <button>
          <LoginIcon type="login" />
        </button>
      </div>
      <LoginModal isOpen={isLoginModalOpen} onClose={handleLoginModal} />
    </div>
  )
}