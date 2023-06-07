import { Provider } from '@/components/Provider'
import './globals.css'
import { Nunito } from 'next/font/google'

const nunito = Nunito({ variable: '--font-nunino',subsets: ['latin'] })

export const metadata = {
  title: 'Book Wise',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${nunito.variable} bg-gray800`}>
        <Provider>
          {children}
        </Provider>    
      </body>
    </html>
  )
}
