import { SVGAttributes } from 'react';

interface ChartLineUpProps extends SVGAttributes<SVGSVGElement> {
  type: 'menu' | 'header'
  isActive?: boolean
}

export function ChartLineUpIcon({ type, isActive = false }: ChartLineUpProps) {
  return (
    <span role="img" aria-label="binoculars-icon">
      <svg 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          fillRule="evenodd" 
          clipRule="evenodd" 
          d="M3 3.75C3.41421 3.75 3.75 4.08579 3.75 4.5V18.75H21C21.4142 18.75 21.75 19.0858 21.75 19.5C21.75 19.9142 21.4142 20.25 21 20.25H3C2.58579 20.25 2.25 19.9142 2.25 19.5V4.5C2.25 4.08579 2.58579 3.75 3 3.75Z" 
          data-active={isActive}
          className={`${type === 'menu' ? `fill-gray400 group-hover:fill-gray100 data-[active=true]:fill-gray100` : 'fill-green100'}`}
        />
        <path 
          fillRule="evenodd" 
          clipRule="evenodd" 
          d="M20.0303 5.46967C20.3232 5.76256 20.3232 6.23744 20.0303 6.53033L12.5303 14.0303C12.2374 14.3232 11.7626 14.3232 11.4697 14.0303L9 11.5607L3.53033 17.0303C3.23744 17.3232 2.76256 17.3232 2.46967 17.0303C2.17678 16.7374 2.17678 16.2626 2.46967 15.9697L8.46967 9.96967C8.76256 9.67678 9.23744 9.67678 9.53033 9.96967L12 12.4393L18.9697 5.46967C19.2626 5.17678 19.7374 5.17678 20.0303 5.46967Z" 
          data-active={isActive}
          className={`${type === 'menu' ? `fill-gray400 group-hover:fill-gray100 data-[active=true]:fill-gray100` : 'fill-green100'}`}
        />
        <path 
          fillRule="evenodd" 
          clipRule="evenodd" 
          d="M15 6C15 5.58579 15.3358 5.25 15.75 5.25H19.5C19.9142 5.25 20.25 5.58579 20.25 6V9.75C20.25 10.1642 19.9142 10.5 19.5 10.5C19.0858 10.5 18.75 10.1642 18.75 9.75V6.75H15.75C15.3358 6.75 15 6.41421 15 6Z" 
          data-active={isActive}
          className={`${type === 'menu' ? `fill-gray400 group-hover:fill-gray100 data-[active=true]:fill-gray100` : 'fill-green100'}`}
        />
      </svg>
    </span>
  )
}