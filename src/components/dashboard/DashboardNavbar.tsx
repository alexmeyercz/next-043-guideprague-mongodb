import React, { type FC } from 'react'
import DashboardLinksDropdown from './DashboardLinksDropdown'
import ThemeToggle from '../ThemeToggle'
import { UserButton } from '@clerk/nextjs'

const f = '⇒ DashboardNavbar.tsx (DashboardNavbar):'

const DashboardNavbar: FC = () => {
  return (
    <nav className='bg-muted py-4 sm:px-16 lg:px-24 px-4 flex items-center justify-between'>
      <div>
        <DashboardLinksDropdown />
      </div>
      <div className='flex items-center gap-x-4'>
        <ThemeToggle />
        <UserButton afterSignOutUrl='/' />
      </div>
    </nav>
  )
}
export default DashboardNavbar
