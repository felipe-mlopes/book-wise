import Image from "next/image";

interface AvatarProps {
  width: string,
  height: string,
  src: string
}

export function Avatar({width, height, src}: AvatarProps) {
  return (
    <Image 
      src={src}
      alt="foto de perfil do usuário"
      width={40}
      height={40}
      className={`h-[${width}] w-[${height}] rounded-full border border-solid bg-clip-border border-transparent bg-gradient-to-t from-green50 to-purple50`}
    />
  )
}