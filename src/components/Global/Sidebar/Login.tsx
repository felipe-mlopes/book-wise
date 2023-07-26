import Image from "next/image";
import Link from "next/link";

import { useGetSession } from "@/hooks/use-get-session";
import { SignOut } from "./SignOut";
import { SignIn } from "./SignIn";


export async function Login() {
  const session = await useGetSession()

  const userAvatar = session?.user?.image
  const userName = session?.user?.name

  return (
    <>
      {session && (
        <div
          className="flex items-center justify-center gap-3 py-1 px-2 hover:bg-gray800 hover:rounded hover:border-purple100 hover:bg-opacity-5"
        >
          <Link href="/profile" className="flex items-center gap-3 w-full">
            <Image
              src={userAvatar ?? ''}
              alt="foto de perfil"
              width={32}
              height={32}
              className="h-8 w-8 rounded-full border border-solid bg-clip-border border-transparent bg-gradient-to-t from-green50 to-purple50"
            />
            <p className="text-gray200 text-sm whitespace-nowrap">
              {userName}
            </p>
          </Link>
          <SignOut />
        </div>
      )}
      {!session && <SignIn />}
    </>
  )
}