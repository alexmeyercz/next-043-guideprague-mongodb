import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'

const inter = Inter({ subsets: ['latin'] })

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
      <html lang='en'>
        <body className={inter.className}>
          <div className='container'>{children}</div>
        </body>
      </html>
    </ClerkProvider>
  )
}
