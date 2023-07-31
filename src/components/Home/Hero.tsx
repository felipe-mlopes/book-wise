import { Logo } from "../Global/Logo";


export function Hero() {
  return (
    <div className="bg-none md:relative md:h-screen md:mr-8 md:bg-[url('../../assets/images/hero.svg')] md:bg-cover md:rounded-lg">
      <div className="md:absolute md:left-[40%] md:-translate-x-1/4 md:top-1/2">
        <Logo hero />
      </div>
    </div>
  )
}