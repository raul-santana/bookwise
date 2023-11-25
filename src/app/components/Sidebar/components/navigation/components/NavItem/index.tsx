import { StringifyOptions } from 'querystring'
import { NavItemContainer } from './styles'
import { ReactNode } from 'react'
import { usePathname } from 'next/navigation'

interface NavItemProps {
  url: string
  icon: ReactNode
  text: string
}

const NavItem = ({ url, icon, text }: NavItemProps) => {
  const pathname = usePathname()

  return (
    <NavItemContainer href={url} active={pathname === url && true}>
      {icon}
      <span>{text}</span>
    </NavItemContainer>
  )
}

export default NavItem
