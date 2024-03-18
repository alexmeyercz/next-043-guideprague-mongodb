import { FaRectangleList } from 'react-icons/fa6'
import { BiSolidAddToQueue } from 'react-icons/bi'

type DashboardLink = {
  href: string
  label: string
  //   icon: ReactNode
  //   icon: React.ReactNode
  icon: JSX.Element
}

export const links: DashboardLink[] = [
  {
    href: '/dashboard/articles',
    label: 'Articles',
    icon: <FaRectangleList />,
  },
  {
    href: '/dashboard/add-article',
    label: 'Add Article',
    icon: <BiSolidAddToQueue />,
  },
  {
    href: '/dashboard/categories',
    label: 'Categories',
    icon: <FaRectangleList />,
  },
  {
    href: '/dashboard/add-category',
    label: 'Add Category',
    icon: <BiSolidAddToQueue />,
  },
]
