'use client'

import { ChangeEvent } from 'react';
import { useFilter } from '@/hooks/use-filter';
import { SearchIcon } from '../Icons/SearchIcon';

interface SearchInputProps {
  placeholder: string;
}

export function SearchInput({ placeholder }: SearchInputProps) {
  const { search, setSearch } = useFilter()

  function handleSearchToTitleOrAuthor(e: ChangeEvent<HTMLInputElement>) {
    const query = e.currentTarget.value
    setSearch(query)
  }

  return (
    <label
      htmlFor="searchInput"
      className="flex items-center justify-between gap-2 py-3.5 px-5 border border-solid border-gray500 rounded focus-within:border-green200 group"
    >
      <input
        type="text"
        name="searchInput"
        placeholder={placeholder}
        value={search}
        onChange={handleSearchToTitleOrAuthor}
        className="w-full md:min-w-[23rem] text-sm text-gray200 placeholder:text-gray400 placeholder:text-sm cursor-text"
      />
      <button type="button">
        <SearchIcon className="cursor-pointer group-focus-within:text-green200" />
      </button>
    </label>
  );
}