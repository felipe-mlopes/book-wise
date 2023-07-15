import { SVGAttributes } from "react"

interface BinocularsIconProps extends SVGAttributes<SVGPathElement> {
  type: 'menu' | 'header'
  isActive?: boolean
}

export function BinocularsIcon({ type, isActive = false }: BinocularsIconProps) {
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
          d="M9 8.625C9 8.21079 9.33579 7.875 9.75 7.875H14.25C14.6642 7.875 15 8.21079 15 8.625C15 9.03921 14.6642 9.375 14.25 9.375H9.75C9.33579 9.375 9 9.03921 9 8.625Z" 
          data-active={isActive}
          className={`${type === 'menu' ? `fill-gray400 group-hover:fill-gray100 data-[active=true]:fill-gray100` : 'fill-green100'}`}
        />
        <path 
          fillRule="evenodd" 
          clipRule="evenodd" 
          d="M13.7225 4.62302C14.2859 4.06559 15.0465 3.75293 15.8391 3.75293C16.6316 3.75293 17.3922 4.06559 17.9556 4.62302C18.0227 4.68936 18.0766 4.76774 18.1146 4.85407L22.2115 14.1634C22.3783 14.5426 22.2062 14.9852 21.8271 15.152C21.448 15.3189 21.0054 15.1468 20.8385 14.7676L16.8052 5.60264C16.535 5.37754 16.1934 5.25293 15.8391 5.25293C15.5382 5.25293 15.2466 5.34275 15 5.50763V15.7499C15 16.1641 14.6642 16.4999 14.25 16.4999C13.8358 16.4999 13.5 16.1641 13.5 15.7499V5.15617C13.5 4.95587 13.5801 4.76389 13.7225 4.62302Z"
          data-active={isActive}
          className={`${type === 'menu' ? `fill-gray400 group-hover:fill-gray100 data-[active=true]:fill-gray100` : 'fill-green100'}`}
        />
        <path 
          fillRule="evenodd" 
          clipRule="evenodd" 
          d="M6.04443 4.62302C6.60784 4.06559 7.36841 3.75293 8.16098 3.75293C8.95355 3.75293 9.71412 4.06559 10.2775 4.62302C10.4199 4.76389 10.5 4.95587 10.5 5.15617V15.7499C10.5 16.1641 10.1643 16.4999 9.75004 16.4999C9.33583 16.4999 9.00004 16.1641 9.00004 15.7499V5.50763C8.75349 5.34275 8.46183 5.25293 8.16098 5.25293C7.80663 5.25293 7.46502 5.37754 7.19485 5.60264L3.16151 14.7676C2.99466 15.1468 2.55207 15.3189 2.17294 15.152C1.79382 14.9852 1.62173 14.5426 1.78858 14.1634L5.88545 4.85407C5.92344 4.76774 5.97738 4.68936 6.04443 4.62302Z" 
          data-active={isActive}
          className={`${type === 'menu' ? `fill-gray400 group-hover:fill-gray100 data-[active=true]:fill-gray100` : 'fill-green100'}`}
        />
        <path 
          fillRule="evenodd" 
          clipRule="evenodd" 
          d="M6 12.75C4.34315 12.75 3 14.0931 3 15.75C3 17.4069 4.34315 18.75 6 18.75C7.65685 18.75 9 17.4069 9 15.75C9 14.0931 7.65685 12.75 6 12.75ZM1.5 15.75C1.5 13.2647 3.51472 11.25 6 11.25C8.48528 11.25 10.5 13.2647 10.5 15.75C10.5 18.2353 8.48528 20.25 6 20.25C3.51472 20.25 1.5 18.2353 1.5 15.75Z"
          data-active={isActive}
          className={`${type === 'menu' ? `fill-gray400 group-hover:fill-gray100 data-[active=true]:fill-gray100` : 'fill-green100'}`}
        />
        <path 
          fillRule="evenodd" 
          clipRule="evenodd" 
          d="M18 12.75C16.3431 12.75 15 14.0931 15 15.75C15 17.4069 16.3431 18.75 18 18.75C19.6569 18.75 21 17.4069 21 15.75C21 14.0931 19.6569 12.75 18 12.75ZM13.5 15.75C13.5 13.2647 15.5147 11.25 18 11.25C20.4853 11.25 22.5 13.2647 22.5 15.75C22.5 18.2353 20.4853 20.25 18 20.25C15.5147 20.25 13.5 18.2353 13.5 15.75Z"
          data-active={isActive}
          className={`${type === 'menu' ? `fill-gray400 group-hover:fill-gray100 data-[active=true]:fill-gray100` : 'fill-green100'}`}
        />
      </svg>
    </span>
  )
}