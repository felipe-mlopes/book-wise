import { ComponentProps } from "react";

interface MenuIconProps extends ComponentProps<'span'> { }

export function MenuIcon({ ...props }: MenuIconProps) {
  return (
    <span role="img" aria-label="menu-icon" {...props}>
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.2244 24.5H37.7764"
          stroke="#E6E8F2"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.2244 32.6701H37.7764"
          stroke="#E6E8F2"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.2236 16.3299H37.7757"
          stroke="#E6E8F2"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  )
}