'use client'

import { usePathname } from 'next/navigation'
import { Layout, Compass, List, BarChart } from 'lucide-react'

import { SidebarItem } from './sidebar-item'

const guestRoutes = [
  {
    icon: Layout,
    label: 'Dashboard',
    href: '/dashboard',
  },
  {
    icon: Compass,
    label: 'Browse',
    href: '/dashboard/search',
  },
]

const teacherRoutes = [
  {
    icon: List,
    label: 'Courses',
    href: '/dashboard/teacher/courses',
  },
  {
    icon: BarChart,
    label: 'Analytics',
    href: '/dashboard/teacher/analytics',
  },
]

export const SidebarRoutes = () => {
  const path = usePathname()

  const isTeacherPage = path?.includes('/dashboard/teacher')

  const routes = isTeacherPage ? teacherRoutes : guestRoutes

  return (
    <div className="flex flex-col w-full">
      {routes.map(route => (
        <SidebarItem
          key={route.href}
          icon={route.icon}
          href={route.href}
          label={route.label}
        />
      ))}
    </div>
  )
}
