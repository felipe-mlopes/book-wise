import { SVGAttributes } from "react"

interface LogOutIconProps extends SVGAttributes<SVGPathElement> {
  type: 'login' | 'logout'
}

export function LoginIcon({ type }: LogOutIconProps) {

  return (
    <span role="img" aria-label={`${type === 'login' ? 'signin-icon' : 'signout-icon'}`}>
      <svg
        width="22"
        height="22"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="group"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17.1518 10.2768C17.3959 10.0327 17.7916 10.0327 18.0357 10.2768L21.3169 13.5581C21.561 13.8021 21.561 14.1979 21.3169 14.4419L18.0357 17.7232C17.7916 17.9673 17.3959 17.9673 17.1518 17.7232C16.9077 17.4791 16.9077 17.0834 17.1518 16.8393L19.9911 14L17.1518 11.1607C16.9077 10.9166 16.9077 10.5209 17.1518 10.2768Z"
          className={`${type === 'login' ? `fill-green100 group-hover:fill-green200` : `fill-red100 group-hover:fill-red200`}`}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.5 14C11.5 13.6548 11.7798 13.375 12.125 13.375H20.875C21.2202 13.375 21.5 13.6548 21.5 14C21.5 14.3452 21.2202 14.625 20.875 14.625H12.125C11.7798 14.625 11.5 14.3452 11.5 14Z"
          className={`${type === 'login' ? `fill-green100 group-hover:fill-green200` : `fill-red100 group-hover:fill-red200`}`}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.86612 6.86612C7.10054 6.6317 7.41848 6.5 7.75 6.5H12.125C12.4702 6.5 12.75 6.77982 12.75 7.125C12.75 7.47018 12.4702 7.75 12.125 7.75L7.75 7.75L7.75 20.25H12.125C12.4702 20.25 12.75 20.5298 12.75 20.875C12.75 21.2202 12.4702 21.5 12.125 21.5H7.75C7.41848 21.5 7.10054 21.3683 6.86612 21.1339C6.6317 20.8995 6.5 20.5815 6.5 20.25V7.75C6.5 7.41848 6.6317 7.10054 6.86612 6.86612Z"
          className={`${type === 'login' ? `fill-green100 group-hover:fill-green200` : `fill-red100 group-hover:fill-red200`}`}
        />
      </svg>
    </span>
  )
}