'use client'

import Image from 'next/image';

import * as Dialog from '@radix-ui/react-dialog'
import { LogIn, LogOut, X } from 'lucide-react';
import { LoginOptions } from './LoginOptions';
import { useSession, signOut } from 'next-auth/react';
import { cache } from 'react';

interface UserProps {
  name: string,
  avatarUrl: string  
}

export function Login() {
  const session = useSession()

  const isSignedId = session.status === 'authenticated'

  if (session.status === 'loading') {
    return <p>loading...</p>
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger>
        {isSignedId ? 
            <button
              className="flex items-center gap-3 cursor-pointer py-1 px-2 hover:bg-gray800 hover:rounded hover:border-purple100 hover:bg-opacity-5"
            >
              <span className="flex items-center gap-3">
                <Image
                  src={session.data?.user?.image ?? ''}
                  alt="foto de perfil"
                  width={32}
                  height={32}
                  className="h-8 w-8 rounded-full border border-solid bg-clip-border border-transparent bg-gradient-to-t from-green50 to-purple50"
                />
                <p className="text-gray200 text-sm">{session.data?.user?.name}</p>
              </span>
              <LogOut className="w-5 h-5 text-red" onClick={() => signOut()} />
            </button> : 
            <div className="flex items-center gap-3 cursor-pointer py-1 px-2 group">
              <p className="text-gray200 font-bold text-base min-w-[6rem] group-hover:text-gray100">
                Fazer login
              </p>
              <LogIn className="w-5 h-5 text-green100 group-hover:text-green200" />
            </div>
        }       
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-black/60 data-[state=open]:animate-overlayShow fixed inset-0" />
        <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-1/2 left-1/2 max-w-[516px] -translate-x-1/2 -translate-y-1/2 rounded-xl bg-gray700 px-[4.5rem] py-14 shadow-modal focus:outline-none">
          <Dialog.Close>
            <div className="flex items-center justify-center p-1 absolute top-[10px] right-[10px] cursor-pointer">
              <X className="w-6 h-6 text-gray400" />
            </div>
          </Dialog.Close>
          <div className="flex flex-col items-center gap-10">
            <strong className="text-gray200 text-base font-bold">Faça login para deixar sua avaliação</strong>
            <LoginOptions />
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
