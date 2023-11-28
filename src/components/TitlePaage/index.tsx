import { TitleContainer } from './style'
import { ReactNode } from 'react'

interface TitlePageProps {
  icon: ReactNode
  text: string
}

const TitlePage = ({ icon, text }: TitlePageProps) => {
  return (
    <TitleContainer>
      {icon}
      <h1>{text}</h1>
    </TitleContainer>
  )
}

export default TitlePage
