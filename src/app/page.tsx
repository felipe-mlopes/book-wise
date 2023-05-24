import { Hero } from "@/components/Hero";
import { LoginButton } from "@/components/LoginButton";
import google from '../assets/icons/google.svg'
import github from '../assets/icons/github.svg'
import rocket from '../assets/icons/rocket.svg'

export default function Home() {
  return (
    <div className="grid min-h-screen grid-cols-2 bg-gray800 text-gray100 py-5 pl-5">
      <Hero />

      <div className="flex flex-col items-start justify-center gap-10 pl-20">
        <div className="flex flex-col gap-[2px]">
          <h3 className="text-2xl font-bold">Boas vindas!</h3>
          <p className="text-gray200 text-base">
            Faça seu login ou acesse como visitante.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <LoginButton icon={google} content="Entrar com Google" href="" />
          <LoginButton icon={github} content="Entrar com GitHub" href="" />
          <LoginButton icon={rocket} content="Acessar como visitante" href="/feed" />
        </div>
      </div>
    </div>
  )
}
