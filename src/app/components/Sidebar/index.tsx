'use client'

import Image from 'next/image'
import { LoginButton, SidebarContainer, UserDetails } from './styles'
import Navigation from './components/navigation'
import Link from 'next/link'
import { SignIn, SignOut } from '@phosphor-icons/react'
import { signOut, useSession } from 'next-auth/react'
import { Avatar } from '../Avatar'
import { useRouter } from 'next/navigation'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'

const Sidebar = () => {
  const { data, status } = useSession()

  const router = useRouter()

  const handleOpenProfile = () => {
    router.push(`/profile/${(data?.user as any).id}`)
  }

  return (
    <SidebarContainer>
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

      <footer>
        {status === 'unauthenticated' ? (
          <LoginButton href={'/login'}>
            Fazer login <SignIn size={24} />
          </LoginButton>
        ) : (
          <UserDetails>
            {data && data.user && data.user.image && (
              <Avatar
                src={data.user.image}
                onClick={handleOpenProfile}
                alt="User Image"
              />
            )}
            {data?.user?.name} <SignOut size={24} onClick={() => signOut()} />
          </UserDetails>
        )}
      </footer>
    </SidebarContainer>
  )
}

export default Sidebar
