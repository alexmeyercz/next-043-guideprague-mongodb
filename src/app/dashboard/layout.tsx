import Navbar from '@/components/dashboard/Navbar'
import Sidebar from '@/components/dashboard/Sidebar'
import React, { type FC } from 'react'

const f = '⇒ layout.tsx (DashboardLayout):'

type DashboardLayoutProps = Readonly<{
  children: React.ReactNode
}>

const DashboardLayout: FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <main className='grid lg:grid-cols-5'>
      {/* first column hide on small screen */}
      <div className='hidden lg:block lg:col-span-1 lg:min-h-screen'>
        <Sidebar />
      </div>
      {/* second column hide dropdown on big screen */}
      <div className='lg:col-span-4'>
        <Navbar />
        <div className='py-16 px-4 sm:px-8 lg:px-16'>{children}</div>
      </div>
    </main>
  )
}
export default DashboardLayout
