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

  const currentRouter = pathname !== '/' ? '/' + pathname.split('/')[1] : '/'

  return (
    <NavItemContainer href={url} active={currentRouter === url}>
      {icon}
      <span>{text}</span>
    </NavItemContainer>
  )
}

export default NavItem
