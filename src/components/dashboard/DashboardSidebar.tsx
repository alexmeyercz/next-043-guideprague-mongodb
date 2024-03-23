'use client'
import React, { type FC } from 'react'
import Link from 'next/link'
import { links } from '@/utils/dashboard-links'
import { Button } from '../ui/button'

// usePathname is used to detect the current path
import { usePathname } from 'next/navigation'

// clerk
import { useUser } from '@clerk/clerk-react'
import Logo from '@/components/utils/Logo'
import Spinner from '@/components/utils/Spinner'
import SkeletonSidebar from '../utils/SkeletonSidebar'

const f = '⇒ DashboardSidebar.tsx (DashboardSidebar):'

const DashboardSidebar: FC = () => {
  const pathname = usePathname()

  const { isSignedIn, user, isLoaded } = useUser()

  // set const clerkPublicRole to user.publicMetadata.role or if it's not set, then to 'user'
  const clerkPublicRole = user?.publicMetadata?.role || 'user'

  if (!isLoaded) {
    return (
      <aside className='py-4 px-8 bg-muted h-full'>
        <Logo />
        <SkeletonSidebar color='bg-gray-300' />
      </aside>
    )
  }
  if (isSignedIn) {
    return (
      <aside className='py-4 px-8 bg-muted h-full'>
        <Logo />

        {links.map((link) => {
          const { href, label, icon, role } = link
          // Check if the user's role matches the role required for the link
          if (role === clerkPublicRole || role === 'user') {
            return (
              <div key={href}>
                <Button
                  asChild
                  variant={pathname === href ? 'default' : 'link'}
                  size='lg'
                  className='w-full justify-start'
                >
                  <Link
                    href={href}
                    className='flex items-center gap-x-2'
                  >
                    {icon} {label}
                  </Link>
                </Button>
              </div>
            )
          }
          return null
        })}
      </aside>
    )
  }
}
export default DashboardSidebar
