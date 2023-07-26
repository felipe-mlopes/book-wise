import { redirect } from "next/navigation";

import { useGetSession } from "@/hooks/use-get-session";
import { Hero } from "@/components/Home/Hero";
import { RocketIcon } from "@/components/Icons/RocketIcon";
import { LoginProviders } from "@/components/Global/Login/LoginProviders";


export default async function Home() {
  const session = await useGetSession()

  if (session) {
    redirect('/feed')
  }

  return (
    <div className="grid min-h-screen grid-cols-2 bg-gray800 text-gray100 py-5 pl-5">
      <Hero />

      <div className="flex flex-col items-start justify-center gap-10 pl-20">
        <div className="space-y-0.5">
          <h3 className="text-2xl font-bold">Boas vindas!</h3>
          <p className="text-gray200 text-base">
            Faça seu login ou acesse como visitante.
          </p>
        </div>
          <div className="space-y-4">
            <LoginProviders />
            <a 
              href="/feed"
              className={`flex items-center gap-5 py-5 px-6 bg-gray600 rounded-md cursor-pointer hover:bg-gray500`}
            >
              <RocketIcon />
              <strong className="text-lg text-gray200 mr-16">Acessar como visitante</strong>
            </a>
          </div>
      </div>
    </div>
  )
}