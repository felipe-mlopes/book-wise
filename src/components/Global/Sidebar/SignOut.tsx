'use client'

import { LoginIcon } from "@/components/Icons/LoginIcon";
import { signOut } from "next-auth/react";

export function SignOut() {
  return (
    <button onClick={() => signOut()} className="cursor-pointer">
      <LoginIcon type="logout" />
    </button>
  )
}