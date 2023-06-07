import Image from "next/image";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "./api/auth/[...nextauth]/route";

import { Hero } from "@/components/Home/Hero";
import { LoginOptions } from "@/components/Global/LoginOptions";

import rocket from '../assets/icons/rocket.svg'


export default async function Home() {
  const session = await getServerSession(authOptions);

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
            <LoginOptions />
            <a 
              href="/feed"
              className={`flex items-center gap-5 py-5 px-6 bg-gray600 rounded-md cursor-pointer hover:bg-gray500`}
            >
              <Image src={rocket} alt="logo" width={32} height={32} />
              <strong className="text-lg text-gray200 mr-16">Acessar como visitante</strong>
            </a>
          </div>
      </div>
    </div>
  )
}
