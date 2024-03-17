import type { Metadata } from 'next'
import { Gabriela, Yanone_Kaffeesatz } from 'next/font/google'
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'

const yanone = Yanone_Kaffeesatz({
  subsets: ['latin', 'latin-ext', 'cyrillic'],
  weight: ['400', '700'],
  variable: '--font-yanone',
})
const gabriela = Gabriela({
  subsets: ['latin', 'latin-ext', 'cyrillic'],
  weight: ['400'],
  variable: '--font-gabriela',
})

export const metadata: Metadata = {
  title: 'Prague Travel Guide',
  description:
    'Everything you need to know about Prague: top sights and attractions, the best things to do, useful travel tips, mistakes to avoid, and more.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>
      <html
        lang='en'
        className={`${gabriela.variable} ${yanone.variable}`}
      >
        <body>{children}</body>
      </html>
    </ClerkProvider>
  )
}
