import './styles/globals.css'
import { nunito } from './styles/fonts'
import { Provider } from '@/components/Provider'
import { ModalContextProvider } from '@/contexts/modal-context'
import { FilterContextProvider } from '@/contexts/filter-context'


export const metadata = {
  title: 'Book Wise',
  description: 'Avalie seu livro preferido e compartilhe com todos.',
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
          <ModalContextProvider>
            <FilterContextProvider>
              {children}
            </FilterContextProvider>
          </ModalContextProvider>
        </Provider>
      </body>
    </html>
  )
}
