'use client'

import { signIn } from 'next-auth/react'
import Image from "next/image";

import google from '../../assets/icons/google.svg'
import github from '../../assets/icons/github.svg'

export function LoginOptions() {
  return(
    <div className="space-y-4">
        <button 
          onClick={() => signIn('google')}
          
          className="flex items-center gap-5 py-5 pl-6 pr-28 bg-gray600 rounded-md cursor-pointer hover:bg-gray500"
        >
          <Image src={google} alt="logo" width={32} height={32} />
          <strong className="text-lg text-gray200 mr-4">Entrar com Google</strong>
        </button>

        <button 
          onClick={() => signIn('github')}
          className="flex items-center gap-5 py-5 pl-6 pr-28 bg-gray600 rounded-md cursor-pointer hover:bg-gray500"
        >
          <Image src={github} alt="logo" width={32} height={32} />
          <strong className="text-lg text-gray200 mr-4">Entrar com GitHub</strong>
        </button>
      </div>
  )
}