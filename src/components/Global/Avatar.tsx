import Image from "next/image";

interface AvatarProps {
  width: number,
  height: number,
  src: string
}

export function Avatar({width, height, src}: AvatarProps) {
  return (
    <Image 
      src={src}
      alt="foto de perfil do usuário"
      width={width}
      height={height}
      className="max-w-10 max-h-10 rounded-full border border-solid bg-clip-border border-transparent bg-gradient-to-t from-green50 to-purple50"
    />
  )
}