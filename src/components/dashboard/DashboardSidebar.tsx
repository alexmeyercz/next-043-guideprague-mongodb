'use client'
import React, { type FC } from 'react'
import Link from 'next/link'
import { links } from '@/utils/dashboard-links'
import { Button } from '../ui/button'
import { usePathname } from 'next/navigation'

const f = '⇒ DashboardSidebar.tsx (DashboardSidebar):'

const DashboardSidebar: FC = () => {
  const pathname = usePathname()

  return (
    <aside className='py-4 px-8 bg-muted h-full'>
      <figure>
        <Link href='/'>
          <figcaption>Guide Prague</figcaption>
        </Link>
      </figure>
      {links.map((link) => {
        return (
          <div key={link.href}>
            <Button
              asChild
              variant={pathname === link.href ? 'default' : 'link'}
              size='lg'
              className='w-full justify-start'
            >
              <Link
                href={link.href}
                className='flex items-center gap-x-2'
              >
                {link.icon} {link.label}
              </Link>
            </Button>
          </div>
        )
      })}
    </aside>
  )
}
export default DashboardSidebar
