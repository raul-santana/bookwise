import Image from 'next/image'
import { SidebarContainer, SidebarCover } from './styles'
import Navigation from './components/navigation'

const Sidebar = () => {
  return (
    <SidebarContainer>
      <SidebarCover>
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
      </SidebarCover>
    </SidebarContainer>
  )
}

export default Sidebar
