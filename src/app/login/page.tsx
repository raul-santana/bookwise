import Image from 'next/image'
import {
  Container,
  ImageArea,
  LoginArea,
  LoginButton,
  LoginTypes,
} from './styles'
import { AuthButtons } from '@/components/AuthButtons'

function LoginPage() {
  return (
    <Container>
      <ImageArea></ImageArea>
      <LoginArea>
        <div>
          <h2>Boas vindas!</h2>
          <p>Faça seu login ou acesse como visitante.</p>
        </div>
        <LoginTypes>
          <AuthButtons canGuest={true} />
        </LoginTypes>
      </LoginArea>
    </Container>
  )
}

export default LoginPage
