import './styles/globals.css'
import { nunito } from './styles/fonts'
import { Provider } from '@/components/Provider'
import { ModalContextProvider } from '@/contexts/modal-context'
import { FilterContextProvider } from '@/contexts/filter-context'
import { TagsContextProvider } from '@/contexts/tags-context'
import { FeedContextProvider } from '@/contexts/feed-context'


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
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css" />
      </head>
      <body className={`${nunito.variable} bg-gray800`}>
        <Provider>
          <ModalContextProvider>
            <FeedContextProvider>
              <FilterContextProvider>
                <TagsContextProvider>
                  {children}
                </TagsContextProvider>
              </FilterContextProvider>
            </FeedContextProvider>
          </ModalContextProvider>
        </Provider>
      </body>
    </html>
  )
}
