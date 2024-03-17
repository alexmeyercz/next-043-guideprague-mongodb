import React, { type FC } from 'react'
import ThemeProvider from '@/components/theme-provider'

const f = '⇒ providers.tsx (Providers):'

type ProvidersProps = Readonly<{
  children: React.ReactNode
}>

const Providers: FC<ProvidersProps> = ({ children }) => {
  return (
    <ThemeProvider
      attribute='class'
      defaultTheme='system'
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  )
}
export default Providers
