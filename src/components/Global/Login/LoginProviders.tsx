'use client'

import { signIn } from 'next-auth/react'

import { GithubIcon } from '@/components/Icons/GithubIcon'
import { GoogleIcon } from '@/components/Icons/GoogleIcon'


export function LoginProviders() {
  return (
    <div className="space-y-4">
      <button
        onClick={() => signIn('google')}
        className="flex items-center gap-4 lg:gap-5 px-5 xs:px-6 md:px-8 py-4 lg:py-5 lg:pl-6 lg:pr-28 bg-gray600 rounded-md cursor-pointer hover:bg-gray500"
      >
        <GoogleIcon />
        <strong className="text-sm text-gray200 whitespace-nowrap lg:mr-4 lg:text-lg">Entrar com Google</strong>
      </button>

      <button
        onClick={() => signIn('github')}
        className="flex items-center gap-4 lg:gap-5 px-5 xs:px-6 md:px-8 py-4 lg:py-5 lg:pl-6 lg:pr-28 bg-gray600 rounded-md cursor-pointer hover:bg-gray500"
      >
        <GithubIcon />
        <strong className="text-sm text-gray200 whitespace-nowrap lg:mr-4 lg:text-lg">Entrar com GitHub</strong>
      </button>
    </div>
  )
}