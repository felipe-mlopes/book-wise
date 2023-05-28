'use client'

import Image from 'next/image';
import { useState } from 'react';

import { LogIn, LogOut } from 'lucide-react';

export function Login() {
  const [isLogged, setIsLogged] = useState(false);

  function handleToLogin() {
    setIsLogged(true);
  }

  function handleToLogout() {
    setIsLogged(false);
  }

  return (
    <>
      {isLogged ? (
        <button
          className="flex items-center gap-3 cursor-pointer py-1 px-2 hover:bg-gray800 hover:rounded hover:border-purple100 hover:bg-opacity-5"
          onClick={handleToLogout}
        >
          <span className="flex items-center gap-3">
            <Image
              src="https://avatars.githubusercontent.com/u/60843113?v=4"
              alt=""
              width={32}
              height={32}
              className="h-8 w-8 rounded-full border border-solid border-green100"
            />
            <p className="text-gray200 text-sm">Cristofer</p>
          </span>
          <LogOut className="w-5 h-5 text-red" />
        </button>
      ) : (
        <button
          className="flex items-center gap-3 cursor-pointer py-1 px-2 group"
          onClick={handleToLogin}
        >
          <p className="text-gray200 font-bold text-base min-w-[6rem] group-hover:text-gray100">Fazer login</p>
          <LogIn className="w-5 h-5 text-green100 group-hover:text-green200" />
        </button>
      )}
    </>
  );
}
