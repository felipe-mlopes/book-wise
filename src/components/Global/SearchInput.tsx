import { Search } from 'lucide-react';

interface SearchInputProps {
  placeholder: string;
}

export function SearchInput({ placeholder }: SearchInputProps) {
  return (
    <label
      htmlFor=""
      className="flex items-center justify-between gap-2 py-3.5 px-5 border border-solid border-gray500 rounded focus-within:border-green200 group"
    >
      <input
        type="text"
        placeholder={placeholder}
        className="min-w-[23rem] text-sm text-gray200 placeholder:text-gray400 placeholder:text-sm cursor-text"
      />
      <Search className="h-5 w-5 text-gray500 cursor-pointer group-focus-within:text-green200" />
    </label>
  );
}
