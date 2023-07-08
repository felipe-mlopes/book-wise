import { SVGAttributes } from "react"

interface UserIconProps extends SVGAttributes<SVGSVGElement> {
  type: 'menu' | 'header'
  isActive?: boolean
}

export function UserIcon({ type, isActive }: UserIconProps) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d="M11.9999 3.75C9.10039 3.75 6.74988 6.1005 6.74988 9C6.74988 11.8995 9.10039 14.25 11.9999 14.25C14.8994 14.25 17.2499 11.8995 17.2499 9C17.2499 6.1005 14.8994 3.75 11.9999 3.75ZM5.24988 9C5.24988 5.27208 8.27196 2.25 11.9999 2.25C15.7278 2.25 18.7499 5.27208 18.7499 9C18.7499 12.7279 15.7278 15.75 11.9999 15.75C8.27196 15.75 5.24988 12.7279 5.24988 9Z" 
        className={`${type === 'menu' && isActive === false && `fill-gray400 group-hover:fill-gray100`} ${type === 'header' && `fill-green100`} ${isActive === true && type === 'menu' &&'fill-gray100'}`}
      />
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d="M11.9999 15.7491C10.2882 15.7491 8.60677 16.1997 7.12449 17.0556C5.64221 17.9114 4.41137 19.1425 3.55569 20.6249C3.34861 20.9836 2.88993 21.1065 2.53119 20.8995C2.17245 20.6924 2.0495 20.2337 2.25658 19.875C3.2439 18.1645 4.66411 16.7441 6.37443 15.7566C8.08476 14.769 10.0249 14.2491 11.9999 14.2491C13.9748 14.2491 15.915 14.769 17.6253 15.7566C19.3357 16.7441 20.7559 18.1645 21.7432 19.875C21.9503 20.2337 21.8273 20.6924 21.4686 20.8995C21.1098 21.1065 20.6512 20.9836 20.4441 20.6249C19.5884 19.1425 18.3576 17.9114 16.8753 17.0556C15.393 16.1997 13.7115 15.7491 11.9999 15.7491Z" 
        className={`${type === 'menu' && isActive === false && `fill-gray400 group-hover:fill-gray100`} ${type === 'header' && `fill-green100`} ${isActive === true && type === 'menu' &&'fill-gray100'}`}
      />
    </svg>
    )
}