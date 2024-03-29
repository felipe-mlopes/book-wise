'use client'

import { signIn } from 'next-auth/react'

import { GithubIcon } from '@/components/Icons/GithubIcon'
import { GoogleIcon } from '@/components/Icons/GoogleIcon'


export function LoginProviders() {
  return (
    <div className="space-y-4">
      <button
        onClick={() => signIn('google')}
        className="flex items-center gap-4 lg:gap-5 pl-5 pr-14 md:pl-8 md:pr-14 py-4 lg:py-5 lg:pl-6 lg:pr-28 bg-gray600 rounded-md cursor-pointer hover:bg-gray500"
      >
        <GoogleIcon />
        <strong className="text-sm text-gray200 whitespace-nowrap lg:text-lg">Entrar com Google</strong>
      </button>

      <button
        onClick={() => signIn('github')}
        className="flex items-center gap-4 lg:gap-5 pl-5 pr-14 md:pl-8 md:pr-14 py-4 lg:py-5 lg:pl-6 lg:pr-28 bg-gray600 rounded-md cursor-pointer hover:bg-gray500"
      >
        <GithubIcon />
        <strong className="text-sm text-gray200 whitespace-nowrap lg:text-lg">Entrar com GitHub</strong>
      </button>
    </div>
  )
}