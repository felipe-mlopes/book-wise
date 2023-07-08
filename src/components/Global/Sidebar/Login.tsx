'use client'

import Image from "next/image";
import { signOut, useSession } from "next-auth/react"

import { useModal } from "@/hooks/use-modal";
import { LoginIcon } from "@/components/Icons/LoginIcon";
import { LoginModal } from "../Login/LoginModal";
import { Skeleton } from "../Skeleton";


export function Login() {
  const { status, data } = useSession()
  const isSigned = status === 'authenticated'

  const { isLoginModalOpen, handleLoginModal } = useModal()

  if (status === 'loading') {
    return (
      <span className="flex items-center gap-3">
        <Skeleton className="w-8 h-8 rounded-full" />
        <Skeleton className="w-[3.375rem] h-[1.375rem]" />
        <Skeleton className="w-7 h-7" />
      </span >
    )
  }

  return (
    <>
      {isSigned ? (
          <div
            className="flex items-center gap-3 cursor-pointer py-1 px-2 hover:bg-gray800 hover:rounded hover:border-purple100 hover:bg-opacity-5"
          >
            <span className="flex items-center gap-3">
              <Image
              src={data?.user?.image ?? ''}
              alt="foto de perfil"
              width={32}
              height={32}
              className="h-8 w-8 rounded-full border border-solid bg-clip-border border-transparent bg-gradient-to-t from-green50 to-purple50"
              />
              <p className="text-gray200 text-sm">{data?.user?.name}</p>
            </span>
            <button onClick={() => signOut()}>
              <LoginIcon type="logout" />
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-3 py-1 px-2 group">
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
    </>
  )
}