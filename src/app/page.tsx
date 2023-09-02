import type { Metadata } from 'next'
import { redirect } from "next/navigation";

import { useGetSession } from "@/hooks/use-get-session";
import { Hero } from "@/components/Home/Hero";
import { RocketIcon } from "@/components/Icons/RocketIcon";
import { LoginProviders } from "@/components/Global/Login/LoginProviders";

export const metadata: Metadata = {
  title: 'Home',
  description: 'Avalie seu livro preferido e compartilhe com todos usando o Book Wise.'
}


export default async function Home() {
  const session = await useGetSession()

  if (session) {
    redirect('/feed')
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[url('../../assets/images/hero.svg')] bg-cover bg-gray400/10 md:grid md:grid-cols-2 md:py-5 md:pl-5 md:bg-none md:bg-gray800">
      <Hero />
      <div className="flex flex-col items-center justify-center gap-10 pt-14 lg:items-start lg:pl-20">
        <div className="space-y-0.5 text-center lg:text-start">
          <h3 className="text-lg font-bold text-gray100 lg:text-2xl">Boas vindas!</h3>
          <p className="text-gray200 text-xs lg:text-base">
            Faça seu login ou acesse como visitante.
          </p>
        </div>
        <div className="space-y-4">
          <LoginProviders />
          <a
            href="/feed"
            className={`flex items-center gap-4 lg:gap-5 pl-5 py-4 md:pl-8 lg:py-5 lg:pl-6 bg-gray600 rounded-md cursor-pointer hover:bg-gray500`}
          >
            <RocketIcon />
            <strong className="text-sm text-gray200 mr-7 lg:mr-16 lg:text-lg">Acessar como visitante</strong>
          </a>
        </div>
      </div>
    </div>
  )
}