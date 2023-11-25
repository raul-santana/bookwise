import { NavItemContainer } from './styles'
import { ReactNode } from 'react'

interface NavItemProps {
  url: string
  active: boolean
  icon: ReactNode
  text: string
}

const NavItem = ({ url, active, icon, text }: NavItemProps) => {
  return (
    <NavItemContainer href={url} active={active}>
      {icon}
      <span>{text}</span>
    </NavItemContainer>
  )
}

export default NavItem
