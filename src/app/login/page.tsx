import { Container, ImageArea, LoginArea, LoginTypes } from './styles'
import { AuthButtons } from '@/components/AuthButtons/AuthButtons'

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
