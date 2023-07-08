'use client'

import { ChangeEvent } from 'react';
import { useFilter } from '@/hooks/use-filter';
import { SearchIcon } from '../Icons/SearchIcon';

interface SearchInputProps {
  placeholder: string;
  type: 'explore' | 'profile'
}

export function SearchInput({ placeholder, type }: SearchInputProps) {
  const { setSearch } = useFilter()

  function handleSearchToTitleOrAuthor(e: ChangeEvent<HTMLInputElement>) {
    if (type === 'explore') {
      const query = e.currentTarget.value
      setSearch(query)
    }
  }
  
  return (
    <form>
      <label
        htmlFor="searchInput"
        className="flex items-center justify-between gap-2 py-3.5 px-5 border border-solid border-gray500 rounded focus-within:border-green200 group"
      >
        <input
          type="text"
          name="searchInput"
          placeholder={placeholder}
          onChange={handleSearchToTitleOrAuthor}
          className="min-w-[23rem] text-sm text-gray200 placeholder:text-gray400 placeholder:text-sm cursor-text"
        />
        <button type="submit" className=''>
          <SearchIcon styles="cursor-pointer group-focus-within:text-green200" />
        </button>
      </label>
    </form>
  );
}