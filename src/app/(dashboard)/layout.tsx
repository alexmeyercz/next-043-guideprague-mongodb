import React, { type FC } from 'react'

const f = '⇒ layout.tsx (DashboardLayout):'

type DashboardLayoutProps = Readonly<{
  children: React.ReactNode
}>

const DashboardLayout: FC<DashboardLayoutProps> = ({ children }) => {
  return <main>{children}</main>
}
export default DashboardLayout
