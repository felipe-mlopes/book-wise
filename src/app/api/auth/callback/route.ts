import { getServerSession } from 'next-auth/next'
import { authOptions } from '../[...nextauth]/route'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const session = await getServerSession(authOptions)

  if (!session) {
    return NextResponse.json({ message: 'You are not logged in.' })
  }

  return NextResponse.json({ 
    authenticated: !!session,
    session 
   })
}
