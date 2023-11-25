import Image from 'next/image'
import { MenuContainer, MenuCover } from './styles'
import Navigation from './components/navigation'

const Menu = () => {
  return (
    <MenuContainer>
      <MenuCover>
        <div>
          <Image
            src={'/logo.png'}
            alt="Logo BookWise"
            height={32}
            width={128}
            // style={{ height: '', width: '128' }}
            sizes="128px"
          />
          <Navigation />
        </div>

        <footer>Fazer login</footer>
      </MenuCover>
    </MenuContainer>
  )
}

export default Menu
