import React, { type FC } from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { AlignLeft } from 'lucide-react'
import { Button } from '../ui/button'
import { links } from '@/utils/dashboard-links'
import Link from 'next/link'

// https://ui.shadcn.com/docs/components/dropdown-menu

const f = '⇒ DashboardLinksDropdown.tsx (DashboardLinksDropdown):'

const DashboardLinksDropdown: FC = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        asChild
        className='lg:hidden'
      >
        <Button variant='outline'>
          <AlignLeft />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className='w-52 lg:hidden'
        align='start'
        sideOffset={25}
      >
        {links.map((link) => {
          return (
            <DropdownMenuItem key={link.href}>
              <Link
                href={link.href}
                className='flex items-center gap-x-2 w-full'
              >
                {link.icon} {link.label}
              </Link>
            </DropdownMenuItem>
          )
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
export default DashboardLinksDropdown
