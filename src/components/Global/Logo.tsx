import { ComponentProps, SVGAttributes } from "react"

interface LogoProps extends ComponentProps<'div'> {
  hero?: boolean
}


export function Logo({ hero = false, ...props }: LogoProps) {
  return (
    <div role="img" className="flex items-center gap-3" {...props}>
      <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-hero={hero}
        className="w-6 h-6 data-[hero=true]:w-9 data-[hero=true]:h-9 data-[hero=true]:lg:w-12 data-[hero=true]:lg:h-12"
      >
        <path
          d="M38 46.6L36.8 45.6C32.8 41.8 30 39.4 30 36.4C30 34 32 32 34.4 32C35.8 32 37.2 32.6 38 33.6C38.8 32.6 40.2 32 41.6 32C44 32 46 33.8 46 36.4C46 39.4 43.2 41.8 39.2 45.6L38 46.6Z"
          className="fill-green100"
        />
        <path
          d="M36 4C38.2 4 40 5.8 40 8V26.16L38 26L36 26.16V8H26V24L21 19.5L16 24V8H12V40H26.16C26.4 41.44 26.9 42.78 27.6 44H12C9.8 44 8 42.2 8 40V8C8 5.8 9.8 4 12 4H36Z"
          className="fill-purple100"
        />
      </svg>
      <h1
        data-hero={hero}
        className="bg-clip-text text-transparent bg-gradient-to-r from-green50 to-purple50 font-bold text-2xl data-[hero=true]:text-2xl data-[hero=true]:lg:text-4xl"
      >
        BookWise
      </h1>
    </div>
  )
}