'use client'

import { signIn } from 'next-auth/react'

import { GithubIcon } from '@/components/Icons/GithubIcon'
import { GoogleIcon } from '@/components/Icons/GoogleIcon'


export function LoginProviders() {
  return(
    <div className="space-y-4">
        <button 
          onClick={() => signIn('google')}
          className="flex items-center gap-5 py-5 pl-6 pr-28 bg-gray600 rounded-md cursor-pointer hover:bg-gray500"
        >
          <GoogleIcon />
          <strong className="text-lg text-gray200 mr-4">Entrar com Google</strong>
        </button>

        <button 
          onClick={() => signIn('github')}
          className="flex items-center gap-5 py-5 pl-6 pr-28 bg-gray600 rounded-md cursor-pointer hover:bg-gray500"
        >
          <GithubIcon />
          <strong className="text-lg text-gray200 mr-4">Entrar com GitHub</strong>
        </button>
      </div>
  )
}