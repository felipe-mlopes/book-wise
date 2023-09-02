import './styles/globals.css'
import { nunito } from './styles/fonts'
import { Provider } from '@/components/Provider'
import { ModalContextProvider } from '@/contexts/modal-context'
import { FilterContextProvider } from '@/contexts/filter-context'
import { TagsContextProvider } from '@/contexts/tags-context'
import { FeedContextProvider } from '@/contexts/section-context'


export const metadata = {
  title: {
    default: 'Book Wise',
    template: '%s | Book Wise',
  },
  icons: {
    icon: ['/favicon.ico'],
    apple: ['/apple-touch-icon.png'],
    shortcut: ['/apple-touch-icon.png']
  },
  manifest: '/site.webmanifest'
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
