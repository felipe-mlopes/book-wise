import Image from "next/image";
import hero from '../assets/images/hero.svg'
import { Logo } from "./Logo";

export function Hero() {
  return (
    <div className="relative">
      <Image
        src={hero}
        alt=""
        width={598}
        height={912}
        className="relative rounded-lg"
      />
      <div className="absolute top-1/2 left-1/4 -translate-x-1/4">
        <Logo w={48} h={48} size="2.25rem" />
      </div>
    </div>
  )
}