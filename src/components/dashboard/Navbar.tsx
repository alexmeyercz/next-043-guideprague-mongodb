import React, { type FC } from 'react'
import LinksDropdown from './LinksDropdown'
import ThemeToggle from '../ThemeToggle'
import { UserButton } from '@clerk/nextjs'

const f = '⇒ Navbar.tsx (Navbar):'

const Navbar: FC = () => {
  return (
    <nav className='bg-muted py-4 sm:px-16 lg:px-24 px-4 flex items-center justify-between'>
      <div>
        <LinksDropdown />
      </div>
      <div className='flex items-center gap-x-4'>
        <ThemeToggle />
        <UserButton afterSignOutUrl='/' />
      </div>
    </nav>
  )
}
export default Navbar
