interface SearchIconProps {
  styles: string
}

export function SearchIcon({ styles }: SearchIconProps) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles} >
      <path fillRule="evenodd" clipRule="evenodd" d="M9.0625 3.125C5.78331 3.125 3.125 5.78331 3.125 9.0625C3.125 12.3417 5.78331 15 9.0625 15C12.3417 15 15 12.3417 15 9.0625C15 5.78331 12.3417 3.125 9.0625 3.125ZM1.875 9.0625C1.875 5.09295 5.09295 1.875 9.0625 1.875C13.032 1.875 16.25 5.09295 16.25 9.0625C16.25 13.032 13.032 16.25 9.0625 16.25C5.09295 16.25 1.875 13.032 1.875 9.0625Z" fill="#303F73"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M13.2612 13.2612C13.5053 13.0171 13.901 13.0171 14.1451 13.2612L17.9419 17.0581C18.186 17.3021 18.186 17.6979 17.9419 17.9419C17.6979 18.186 17.3021 18.186 17.0581 17.9419L13.2612 14.1451C13.0171 13.901 13.0171 13.5053 13.2612 13.2612Z" fill="#303F73"/>
    </svg>
  )
}