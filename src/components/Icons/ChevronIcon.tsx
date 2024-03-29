interface ChevronIconProps {
  type: 'right' | 'left'
  isDisabled?: boolean
  isTag?: boolean
}

export function ChevronIcon({ type, isDisabled = false, isTag = false}: ChevronIconProps) {
  return (
    <span role="img" aria-label="arrow-icon">
      <svg 
        viewBox="0 0 16 16" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg" 
        data-tag={isTag}
        className={`w-4 h-4 data-[tag=true]:w-12 data-[tag=true]:h-12 ${type === 'left' && 'rotate-180'} `}
      >
          <path 
            fillRule="evenodd" 
            clipRule="evenodd" 
            d="M5.64645 2.64645C5.84171 2.45118 6.15829 2.45118 6.35355 2.64645L11.3536 7.64645C11.5488 7.84171 11.5488 8.15829 11.3536 8.35355L6.35355 13.3536C6.15829 13.5488 5.84171 13.5488 5.64645 13.3536C5.45118 13.1583 5.45118 12.8417 5.64645 12.6464L10.2929 8L5.64645 3.35355C5.45118 3.15829 5.45118 2.84171 5.64645 2.64645Z" 
            data-disable={isDisabled}
            className="fill-purple100 data-[disable=true]:fill-gray700"
          />
      </svg>
    </span>
  )
}