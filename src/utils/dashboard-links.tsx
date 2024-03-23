import { FaRectangleList } from 'react-icons/fa6'
import { BiSolidAddToQueue } from 'react-icons/bi'

type DashboardLink = {
  href: string
  label: string
  //   icon: ReactNode
  //   icon: React.ReactNode
  icon: JSX.Element
  role: 'admin' | 'user' | 'guest' | 'all'
}

export const links: DashboardLink[] = [
  {
    href: '/dashboard/profile',
    label: 'Profile',
    icon: <FaRectangleList />,
    role: 'user',
  },
  {
    href: '/dashboard/articles',
    label: 'Articles',
    icon: <FaRectangleList />,
    role: 'admin',
  },
  {
    href: '/dashboard/add-article',
    label: 'Add Article',
    icon: <BiSolidAddToQueue />,
    role: 'admin',
  },
  {
    href: '/dashboard/categories',
    label: 'Categories',
    icon: <FaRectangleList />,
    role: 'admin',
  },
  {
    href: '/dashboard/add-category',
    label: 'Add Category',
    icon: <BiSolidAddToQueue />,
    role: 'admin',
  },
]
