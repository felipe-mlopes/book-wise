import Image from 'next/image'
import logo from '../assets/icons/logo.svg'

interface LogoProps {
  w: number;
  h: number;
  size: string;
}

export function Logo({ w, h, size }: LogoProps) {
  return (
    <div className="flex items-center gap-3">
      <Image src={logo} alt="" width={w} height={h} />
      <h2
        className="bg-clip-text text-transparent bg-gradient-horizontal font-bold"
        style={{ fontSize: `${size}` }}
      >
        BookWise
      </h2>
    </div>
  )
}