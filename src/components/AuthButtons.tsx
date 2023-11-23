'use client'

import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { AuthButton, Container } from './styles'
import Image from 'next/image'

type AuthButtonsProps = {
  canGuest?: boolean
  callbackUrl?: string
}

export const AuthButtons = ({
  canGuest,
  callbackUrl = '/',
}: AuthButtonsProps) => {
  const router = useRouter()

  const handleSignIn = (provider?: string) => {
    if (!provider) {
      router.push('/')
      return
    }

    signIn(provider, {
      callbackUrl,
    })
  }
  return (
    <Container>
      <AuthButton onClick={() => handleSignIn('google')}>
        <Image
          src={'/google-icon.svg'}
          alt="Logo google"
          height={20}
          width={20}
          //   style={{ height: '100%', width: '100%' }}
          sizes="100vw"
        />
        Entrar com Google
      </AuthButton>
      <AuthButton onClick={() => handleSignIn('github')}>
        <Image
          src={'/github-icon.svg'}
          alt="Logo github"
          height={20}
          width={20}
          //   style={{ height: '100%', width: '100%' }}
          sizes="100vw"
        />
        Entrar com Github
      </AuthButton>
      {canGuest && (
        <AuthButton onClick={() => handleSignIn()}>
          <Image
            src={'/rocket-icon.svg'}
            alt="Logo google"
            height={20}
            width={20}
            //   style={{ height: '100%', width: '100%' }}
            sizes="100vw"
          />
          Acessar como visitante
        </AuthButton>
      )}
    </Container>
  )
}
