'use client'

import { Binoculars, ChartLineUp, User } from '@phosphor-icons/react'
import NavItem from './components/NavItem'
import { Nav } from './styles'

const Navigation = () => {
  return (
    <Nav>
      <NavItem
        url={'/'}
        active={true}
        icon={<ChartLineUp size={24} />}
        text="Início"
      />
      <NavItem
        url={'/explore'}
        active={false}
        icon={<Binoculars size={24} />}
        text="Explorar"
      />
      <NavItem
        url={'/profile'}
        active={false}
        icon={<User size={24} />}
        text="Perfil"
      />
    </Nav>
  )
}

export default Navigation
